import json

# Read original report
with open('lighthouse-mobile.json', 'r', encoding='utf-8') as f:
    original = json.load(f)

# Read optimized report
with open('lighthouse-mobile-optimized.json', 'r', encoding='utf-8') as f:
    optimized = json.load(f)

print('=' * 70)
print('PERFORMANCE IMPROVEMENTS COMPARISON')
print('=' * 70)

cat_orig = original['categories']
cat_opt = optimized['categories']

metrics = ['performance', 'accessibility', 'best-practices', 'seo']

print(f'{"Metric":<25} {"Before":<12} {"After":<12} {"Change":<15}')
print('-' * 70)

for metric in metrics:
    before = int(cat_orig[metric]['score'] * 100)
    after = int(cat_opt[metric]['score'] * 100)
    change = after - before
    change_str = f"+{change}" if change >= 0 else str(change)
    print(f'{metric:<25} {before:<12} {after:<12} {change_str:<15}')

print('\n' + '=' * 70)
print('KEY METRICS COMPARISON')
print('=' * 70)

# Compare metrics
orig_metrics = original['audits'].get('metrics', {}).get('details', {}).get('items', [{}])[0]
opt_metrics = optimized['audits'].get('metrics', {}).get('details', {}).get('items', [{}])[0]

metric_keys = [
    ('first-contentful-paint', 'First Contentful Paint (ms)'),
    ('largest-contentful-paint', 'Largest Contentful Paint (ms)'),
    ('cumulative-layout-shift', 'Cumulative Layout Shift'),
    ('total-blocking-time', 'Total Blocking Time (ms)'),
]

for key, label in metric_keys:
    before_val = orig_metrics.get(key, 'N/A')
    after_val = opt_metrics.get(key, 'N/A')
    
    if isinstance(before_val, (int, float)) and isinstance(after_val, (int, float)):
        improvement = before_val - after_val
        pct = (improvement / before_val * 100) if before_val > 0 else 0
        improvement_str = f"-{improvement:.0f}ms ({pct:.1f}%)" if improvement > 0 else f"+{abs(improvement):.0f}ms"
        
        if isinstance(before_val, float) and before_val < 10:
            print(f'{label:<40} {before_val:.2f}  →  {after_val:.2f}  {improvement_str}')
        else:
            print(f'{label:<40} {before_val:.0f}  →  {after_val:.0f}  {improvement_str}')
    else:
        print(f'{label:<40} {before_val}  →  {after_val}')

print('\n' + '=' * 70)
print('SUMMARY')
print('=' * 70)
print('''
✅ OPTIMIZATIONS APPLIED:
  1. Added lazy-loading to all project card images
  2. Deferred FontAwesome icon font loading (from head to defer)
  3. Added prefers-reduced-motion check for GSAP animations

EXPECTED IMPROVEMENTS:
  • Faster First Contentful Paint (deferred non-critical resources)
  • Reduced initial JavaScript parsing (FontAwesome deferred)
  • Better accessibility (reduced motion support)
  • Improved Core Web Vitals scores
  
The lazy-loaded images won't impact initial page load since they're
below the fold. FontAwesome deferral helps critical rendering path.
''')
