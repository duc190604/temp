## Font Setup Documentation

### Fonts đã được cấu hình:

1. **ABC Arizona Flare** - Dùng cho tất cả thẻ heading (h1, h2, h3, h4, h5, h6)
2. **Aeonik** - Dùng cho body text và nội dung thông thường
   - Aeonik Regular (400)
   - Aeonik Bold (700)
3. **Fallback**: sans-serif

### Cách sử dụng:

#### Tự động:
- Tất cả thẻ `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` sẽ tự động dùng **ABC Arizona Flare**
- Tất cả text thông thường sẽ dùng **Aeonik**

#### Thủ công với Tailwind:
```tsx
// Sử dụng font heading
<div className="font-[var(--font-heading)]">Text with ABC Arizona Flare</div>

// Sử dụng font body (mặc định)
<div className="font-[var(--font-body)]">Text with Aeonik</div>

// Hoặc sử dụng font-sans (cũng là Aeonik)
<div className="font-sans">Text with Aeonik</div>
```

### File locations:
- Font files: `/public/fonts/`
  - `fonnts.com-ABCArizonaFlare.ttf`
  - `fonnts.com-Aeonik-Regular.ttf`
  - `fonnts.com-Aeonik-Bold.ttf`
- Font config: `/app/globals.css`

### CSS Variables:
- `--font-heading`: 'ABC Arizona Flare', sans-serif
- `--font-body`: 'Aeonik', sans-serif
