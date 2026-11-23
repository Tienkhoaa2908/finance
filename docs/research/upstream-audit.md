# Kiểm tra hệ thống nguồn và yêu cầu rebuild

Ngày: 23/11/2026. Nguồn kiểm tra: bản nhập `918fb3f` của And I Wonder, trước khi tạo lịch sử riêng `da93ea8`. Đây là khảo sát code, nội dung và lịch sử Git; không phải nghiên cứu hiệu quả học tập của người dùng.

## Lịch sử có thể xác minh

| Mốc Git | Thay đổi ghi nhận | Bằng chứng |
|---|---|---|
| 8e01cc8 | Nhập nền Road to Quant, web song ngữ, bài hằng ngày, storage/auth | scripts/import_obsidian.py, data/import-summary.json, cây file commit |
| 47e38bf | Bài học tập trung, minh họa và answer workspace | git log và thay đổi component |
| 3c3b028 | Giáo trình math-v2, schema tuần/bài/định lý/bài tập | content/math-v2, lib/math-curriculum-types.ts |
| 102a05a | Một trọng tâm/ngày, bốn bài thực hành, nguồn đọc miễn phí được chọn | docs/daily-learning-update.md |
| 33f9724 | Thêm alpha research, derivatives và ranh giới bằng chứng | docs/research-standards.md |
| ae9d9c9 | Sửa diễn giải, concept explorers | lịch sử Git |
| 918fb3f | Review các bài hằng ngày, bổ sung companion problems và kiểm tra biểu thức | docs/lesson-review-2026-11-02.md, scripts/check-deep-review.ts |

Commit đầu tiên đã chứa hơn 90.000 dòng và nội dung nhập. Git không cung cấp lịch sử trước lần nhập, hội thoại gốc, prompt tìm sách, hoặc toàn văn mọi tài liệu mà tác giả đã đọc. Không thể tái dựng những điều này bằng suy đoán.

## Luồng nguồn → bài học thực tế

1. Script import đọc một thư mục Obsidian do tác giả chọn, giữ Markdown, wiki links, checkbox và ánh xạ dịch. Báo cáo nhập ghi 899 notes, trong đó 731 daily, 105 week, 24 month, 5 project và 22 resource.
2. V1 chứa JSON và một số script authoring; V2 có bốn nhóm nội dung TypeScript gốc, teaching maps, amendments, daily extensions và deep-review batches.
3. `compile-deep-review.ts` gom các bài được viết riêng thành registry; từ chối thiếu hoặc trùng ID. Nó không đọc sách và suy ra bài giảng.
4. `lib/math-practice-plan.ts` và `build-math-curriculum.ts` kết hợp nội dung; tạo JSON/manifest và revision hash. Builder ràng buộc 105 tuần, 523 buổi, 240 phút/buổi và bốn exercise IDs/buổi.
5. `open-resource-links.ts` kiểm URL cụ thể trong danh sách nguồn đã được duyệt. Ngày kiểm trong metadata là lịch sử; hàm không tự kiểm lại URL trên mạng khi build.
6. Reader hiện phần ứng dụng → công thức → bước giải. Định nghĩa/chứng minh ở phần thu gọn; chứng minh còn có lớp thu gọn bên trong. Bài tập có nút hiện/ẩn lời giải.

Không tìm thấy pipeline hoàn chỉnh để lưu một source snapshot có quyền truy cập, trích xuất chương/trang, lập concept graph, nối từng mệnh đề bài giảng với trang nguồn rồi review. Danh sách sách tốt chưa đủ chứng minh tất cả bài được suy ra chính xác từ sách đó.

## Độ dài phần giảng chính

Tính trên `data/math-v2/curriculum.json`, ngôn ngữ `vi`: nối `lesson.application`, `lesson.formula`, `lesson.steps`, tách theo khoảng trắng. Không tính lý thuyết tuần, câu hỏi, lời giải bài tập, hoặc nội dung liên kết ngoài.

| Phạm vi | Kết quả |
|---|---:|
| Số buổi | 523 |
| Ít nhất / trung vị / nhiều nhất | 51 / 111 / 383 đơn vị khoảng trắng |
| Dưới 200 đơn vị | 500 |

Tiếng Việt có từ nhiều âm tiết; đây không phải word count ngôn ngữ học. LaTeX cũng được đếm theo cùng quy tắc. Chỉ số dùng để mô tả độ ngắn, không đánh giá độ đúng hay hiệu quả học tập. Kiểm tra một số bài đầu cho thấy phần “lý thuyết” thường là các bước giải một trường hợp cụ thể; đây có thể hữu ích cho thực hành nhưng không thay một chương giới thiệu khái niệm.

## Điểm giữ lại và điểm cần thay

Giữ khả năng render toán, điều hướng, giải thích song ngữ nếu người dùng chọn, ID ổn định, kiểm tra dữ liệu tham chiếu, hash theo phiên bản, ẩn đáp án, provenance dữ liệu, bài tập tìm sai và giới hạn mô hình. Cần kiểm lại trước khi sử dụng trong schema mới.

Thay việc coi mỗi công thức cộng ba bước là bài giảng đủ sâu. Tách schema của khái niệm, lập luận/chứng minh, ví dụ có hướng dẫn, bài tự giải và dự án. Mỗi công thức cần điều kiện và ý nghĩa; mỗi thuật ngữ mới phải định nghĩa hoặc trỏ tới tiền đề đã giải thích. Không ép mọi chủ đề vào bốn bài tập hay 50 phút lý thuyết.

Các kiểm tra cú pháp, số học và ID có giá trị nhưng không chứng minh học viên hiểu. Chưa có bằng chứng outcome độc lập; không dùng số test xanh hay số lesson làm tiêu chuẩn chất lượng sư phạm.

## Pipeline rebuild đề xuất để duyệt

Năng lực quan sát được → DAG tiền đề → chọn tài liệu phù hợp → hồ sơ truy cập/quyền sử dụng → bản đồ chương/mục/khái niệm → đề cương bài → biên soạn nguyên bản → kiểm chứng công thức và luận cứ → bài tập/đáp án/rubric → đọc thử với người học → xuất bản phiên bản → truy hồi và điều chỉnh.

Mỗi hồ sơ nguồn nên có tác giả, phiên bản, URL, mục/trang, ngày truy cập, loại giấy phép, bằng chứng truy cập, phạm vi được phép lưu/phân phối, độ sâu lý thuyết, chất lượng bài tập, lời giải, tiền đề và giới hạn. Không gộp “truy cập được” với “được đăng toàn văn”. Nếu được phép tải, lưu checksum và vị trí local; không đưa PDF tùy tiện vào Git.

Mỗi lesson cần mapping mục tiêu → nội dung → bằng chứng nguồn → nhiệm vụ kiểm tra. Định nghĩa, quy ước, giả thiết, định lý và quan sát thực nghiệm là các loại phát biểu khác nhau. Một cơ chế sàn giao dịch phải có ngày/phiên bản; một quan sát lợi nhuận không được viết như định lý.

Kiểm tự động: liên kết tiền đề không vòng, nguồn có mục cụ thể, công thức render được, fixture có lời giải độc lập, code tái lập, không dùng dữ liệu tương lai, quyền dữ liệu và citation còn hiệu lực. Review nội dung: bước suy luận hợp lệ, khái niệm được giải thích, ví dụ/đối ví dụ phù hợp và đánh giá đúng mục tiêu. Không tuyên bố tự động kiểm mọi khái niệm chỉ vì trường dữ liệu không rỗng.

## Những gì người dùng đã chọn

- Tài chính từ đầu; toán/Python cơ bản nhưng không rút ngắn nền tảng.
- Quant trader/developer và xây hệ thống là trục, nghiên cứu/toán/tài chính là nền, bao phủ stock/crypto/FX.
- Độ sâu và hiểu rõ quan trọng hơn một khuôn bài cố định.
- Đồng ý lịch sử Git mới chỉ ghi importer/committer Tienkhoaa2908, giữ ghi nhận upstream.
- Chưa chọn lịch học, ngôn ngữ xuất bản, reader, ngân sách tài liệu/data, phạm vi AI hoặc thị trường quốc gia.

## Trạng thái triển khai

Chưa thay nội dung chạy trên website bằng khóa tài chính. Các file nghiên cứu là đầu vào để chốt thiết kế, không phải giáo trình đã kiểm định. Lịch sử main đã tạo lại, backup Git bundle ở workspace cha. Tài liệu attribution phân biệt importer với tác giả gốc.

Cập nhật sau khảo sát: người dùng đã chọn reader theo bước, tiếng Việt chính và chuyển EN/VI, nguồn bắt buộc miễn phí hợp pháp. Các mục chưa chọn ở bảng lịch sử phía trên phản ánh thời điểm khảo sát; quyết định hiện hành nằm trong docs/finance-rebuild.md.
