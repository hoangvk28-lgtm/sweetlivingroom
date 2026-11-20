# Prompt for the session that publishes the info articles

Open a new Claude Code session **with the working directory set to this repo**
(`/home/admin1/Downloads/AGENT/projects/sweetlivingroom`), then paste the prompt
below. Attach or paste the writer's delivery as a text file.

---

```
Đọc CLAUDE.md và docs/INFO-GUIDE-BRIEF.md trước khi làm gì.

Tôi có <N> bài info guide do ChatGPT viết theo brief đó. File delivery ở:
<đường dẫn tới file .txt>

Triển khai và publish cho tôi:

1. Tách file: node scripts/info/split-delivery.mjs <file> --out /tmp/slr-articles
2. Chạy cổng chất lượng: node scripts/info/check-article.mjs /tmp/slr-articles/*.html
   Báo tôi bài nào FAIL và vì sao, TRƯỚC khi sửa gì. Lỗi nào sửa được trong
   repo thì sửa, lỗi nào thuộc về nội dung (thiếu từ, nông, bịa số) thì liệt kê
   để tôi gửi lại cho ChatGPT viết lại. Đừng tự viết lại nội dung thay nó trừ
   khi tôi bảo.
3. Tìm ảnh minh họa thật cho từng slot ảnh mà bài yêu cầu:
   - Chỉ dùng ảnh chụp thật, licence cho phép tái sử dụng (CC0, public domain,
     CC BY, CC BY-SA) từ Wikimedia Commons.
   - Dựng contact sheet và tự xem từng ảnh trước khi dùng. Ảnh lạc đề thì bỏ,
     đừng cố nhét cho đủ.
   - Tải về public/images/articles/ dạng webp qua
     python3 -I scripts/info/fetch-images.py manifest.tsv
   - Credit gom một lần ở cuối bài qua imageCredits[], tuyệt đối không ghi
     nguồn dưới caption.
4. Tối ưu internal link:
   - Link chéo giữa 20 bài info với nhau ở chỗ thật sự liên quan, anchor text
     tự nhiên.
   - Link tới các guide "best" và category phù hợp.
   - Thêm link NGƯỢC từ các guide đang có về bài info liên quan.
   - Kiểm tra mọi link trỏ tới trang có thật, không có trailing slash.
5. Build từng bài: node scripts/info/build-article.mjs ... rồi
   npx tsc --noEmit && npm run build
6. Kiểm tra sau build: không asset 404, không internal link gãy, lint 0 error.
7. Commit từng nhóm hợp lý. KHÔNG push cho tới khi tôi duyệt.

Làm xong thì báo tôi: bài nào đã publish, bài nào bị loại và vì sao, ảnh nào
không tìm được nguồn thật, và link nội bộ đã thêm ở đâu.
```

---

## If you want Claude to write the articles instead of ChatGPT

Replace steps 1 and 2 with:

```
Viết luôn 20 bài info theo đúng docs/INFO-GUIDE-BRIEF.md, mỗi bài 3.000 tới
3.300 từ, chạy check-article.mjs cho từng bài và sửa tới khi PASS.
```

That costs far more tokens than publishing a delivery, so only do it for the
articles ChatGPT keeps failing on.

---

## What to have ready before that session

- The delivery saved as **one plain text file**, with the `=== FILE: ... ===`
  markers intact.
- A decision on the three sample "best" guides: replaced, or removed before the
  new articles link to them.
- The real Amazon Associates tag, if it is ready, so the links go out correct
  the first time.
