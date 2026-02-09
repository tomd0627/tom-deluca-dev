import json

with open('lighthouse-mobile.json', 'r', encoding='utf-8') as f:
    mobile = json.load(f)

categories = mobile['categories']
scores = {
    'Performance': int(categories['performance']['score'] * 100),
    'Accessibility': int(categories['accessibility']['score'] * 100),
    'Best Practices': int(categories['best-practices']['score'] * 100),
    'SEO': int(categories['seo']['score'] * 100),
}

print('=' * 70)
print('LIGHTHOUSE MOBILE TEST RESULTS')
print('=' * 70)
for metric, score in scores.items():
    status = 'PASS ✓' if score >= 90 else 'NEEDS WORK ⚠' if score >= 50 else 'FAIL ✗'
    print(f'{metric:.<45} {score:>3}/100  {status}')

print('\n' + '=' * 70)
print('CORE WEB VITALS AND METRICS (Mobile):')
print('=' * 70)

# Get metrics from the metrics audit
metrics_audit = mobile['audits'].get('metrics', {})
if metrics_audit and metrics_audit.get('details'):
    metrics_data = metrics_audit['details'].get('items', [{}])[0]
    
    # Extract key metrics
    metrics_to_show = {
        'first-contentful-paint': 'First Contentful Paint (FCP)',
        'largest-contentful-paint': 'Largest Contentful Paint (LCP)',
        'cumulative-layout-shift': 'Cumulative Layout Shift (CLS)',
        'total-blocking-time': 'Total Blocking Time (TBT)',
        'speed-index': 'Speed Index',
        'time-to-interactive': 'Time to Interactive (TTI)',
    }
    
    for key, label in metrics_to_show.items():
        value = metrics_data.get(key, 'N/A')
        if isinstance(value, (int, float)):
            if key == 'cumulative-layout-shift':
                print(f'{label:.<50} {value:.2f}')
            else:
                print(f'{label:.<50} {value:,.0f} ms')
        else:
            print(f'{label:.<50} {value}')

# Opportunities for improvement
print('\n' + '=' * 70)
print('TOP OPPORTUNITIES TO IMPROVE PERFORMANCE:')
print('=' * 70)

opportunities = []
for key, audit in mobile['audits'].items():
    if audit.get('scoreDisplayMode') == 'numeric' and audit.get('score', 1) < 1:
        num_val = audit.get('numericValue', 0)
        if num_val > 0:
            opportunities.append((key, audit, num_val))

opportunities.sort(key=lambda x: x[2], reverse=True)

for i, (key, audit, num_val) in enumerate(opportunities[:5], 1):
    title = audit.get('title', key)
    display_value = audit.get('displayValue', '')
    print(f'\n{i}. {title}')
    if display_value:
        print(f'   Potential savings: {display_value}')
    if audit.get('description'):
        desc = audit.get('description')[:100]
        print(f'   {desc}...')

print('\n' + '=' * 70)
print('RECOMMENDATIONS FOR NETLIFY DEPLOYMENT:')
print('=' * 70)
print('''
Since you host on Netlify (free tier), here are some built-in features:
1. Automatic CDN caching - Netlify serves your site from edge locations globally
2. Automatic image optimization - Consider using Astro's image optimization
3. Prerendering - All your pages are static HTML (great for performance!)
4. Cache-Control headers - Set appropriate cache headers for assets

To further improve performance:
• Minimize unused CSS/JS (already good with Astro)
• Consider lazy-loading non-critical images  
• Defer non-critical JavaScript
• Optimize third-party scripts (FontAwesome, GSAP)
• Ensure proper compression (Netlify does this automatically)
''')
