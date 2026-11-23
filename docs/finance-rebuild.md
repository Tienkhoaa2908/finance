# Finance rebuild — kế hoạch và trạng thái

Ngày 23/11/2026. Mục tiêu đã xác nhận: quant trader/developer có nền tảng nghiên cứu, toán và tài chính; học stock, crypto, FX. Tài chính từ đầu, toán/Python căn bản nhưng không lược bỏ giải thích. Bài giảng tiếng Việt tự nhiên, có bản tiếng Anh; học theo bước kèm câu hỏi. Tài liệu bắt buộc miễn phí hợp pháp.

## Trạng thái thật

Đã khảo sát nguồn, lịch sử và kiến trúc. Đã tạo lịch sử Git riêng có attribution. Đang xây reader và một bài mẫu để đánh giá độ sâu. Chưa hoàn thành giáo trình, pipeline ingest sách, hệ thống ôn tập, bộ dự án hoặc triển khai production mới. Không đổi nhãn 523 bài toán cũ thành 523 bài tài chính.

## Lộ trình năng lực đề xuất

Các nhóm dưới đây chưa gắn lịch tuần hoặc tiêu chuẩn đỗ do chưa đo đầu vào và thời gian thực học. Một nhóm có nhiều bài, mỗi bài có nhiều bước. Không yêu cầu đọc hết mọi nhánh nâng cao trước khi thử dự án nhỏ phù hợp.

| Nhóm | Nội dung và tiền đề | Bằng chứng cần xây |
|---|---|---|
| 1. Tài chính từ đầu | Tiền, tài sản, nghĩa vụ, hợp đồng, quyền sở hữu; cash flow, bảng cân đối, P&L, lợi suất; số học và đơn vị | Sổ tiền và tài sản giải thích được từng thay đổi |
| 2. Giá trị theo thời gian | Lãi đơn/kép, chiết khấu, giá trị hiện tại, dòng tiền, trái phiếu, định giá cơ bản; nối với đại số/giải tích | Tự suy ra công thức và đối chiếu lịch dòng tiền |
| 3. Công cụ và thị trường | Cổ phiếu/quyền cổ đông; FX spot/forward/swap; crypto spot/perpetual; futures/options; margin, settlement; thuật ngữ giải thích từ đầu | So sánh quyền/nghĩa vụ, dòng tiền và rủi ro của từng sản phẩm |
| 4. Toán và xác suất | Logic, chứng minh, vector/matrix, đạo hàm/tích phân/tối ưu; biến ngẫu nhiên, điều kiện, kỳ vọng, phương sai, hội tụ | Bài suy diễn có điều kiện, phản ví dụ, mô phỏng kiểm tra trực giác |
| 5. Lập trình dữ liệu | Python, SQL, Git, môi trường tái lập, test; timestamps, schema, missingness, corporate actions, vintage | Pipeline raw→clean có manifest và bài kiểm tra look-ahead |
| 6. Suy luận thống kê | Estimation, confidence, dependence, testing, multiple selection, regression, time series, forecasting | Báo cáo phân biệt dự báo/nhân quả, uncertainty và sai lệch chọn mô hình |
| 7. Nghiên cứu chiến lược | Giả thuyết kinh tế, đọc paper, baseline, trials, splits, negative controls, costs | Tái lập nghiên cứu và kết quả ngoài mẫu, kể cả kết quả âm |
| 8. Danh mục và quản trị rủi ro | Exposure, covariance, constraints, sizing, leverage, drawdown, tail/liquidity/counterparty risk | Ledger danh mục, stress scenario, lý do giới hạn rủi ro |
| 9. Định giá và hedging | No-arbitrage, replication, binomial, martingale, stochastic calculus, numerical pricing | Chứng minh trong phạm vi nêu rõ, đối chiếu số và hedge ledger |
| 10. Microstructure và execution | Bid/ask, order book, order lifecycle, queue, adverse selection, impact, fills; riêng từng venue | Simulator sự kiện và đánh giá độ nhạy với giả định khớp lệnh |
| 11. Hệ thống giao dịch thử | Connector, trạng thái lệnh, idempotency, reconciliation, monitoring, risk checks, phục hồi, bảo mật | Paper-trading harness và thử lỗi/mất kết nối; không kết nối tiền thật |
| 12. Chuyên sâu và nghiên cứu độc lập | Chọn theo thị trường, horizon, loại chiến lược; DeFi/HFT/volatility là nhánh cần chốt thêm | Repo tái lập, báo cáo, phản biện và kế hoạch bảo trì |

Tiên quyết chi tiết phải ở mức khái niệm, không chỉ thứ tự nhóm. Stock/crypto/FX xuất hiện trong bài so sánh từ đầu, nhưng ví dụ không được thay ticker rồi coi như cơ chế giống nhau. Không hứa bao trùm mọi chuyên môn quant hoặc bảo đảm lợi nhuận/nghề nghiệp.

## Quy trình biên tập tiếng Việt và NLP

1. Viết bản nội dung chuẩn: định nghĩa, giả thiết, công thức, kết quả số, ví dụ và nguồn theo đoạn.
2. Biên tập tiếng Việt: thống nhất thuật ngữ; giải thích từ Anh ở lần xuất hiện đầu; câu có chủ thể rõ, trình tự nguyên nhân/lập luận dễ theo; bỏ câu rỗng nhưng không bỏ bước suy luận.
3. Khóa các thành phần cần bảo toàn khi chỉnh văn: biểu thức toán, dấu bất đẳng thức, lượng từ, điều kiện, đơn vị, số liệu, phủ định, URL và ID nguồn.
4. Đối chiếu bản Anh cùng ý nghĩa. Kiểm biểu thức máy có thể tìm sai khác hình thức, không chứng minh tương đương ngữ nghĩa.
5. Lint hỗ trợ phát hiện lỗi cấu trúc và văn bản; người biên tập xử lý cảnh báo trong ngữ cảnh. Không blacklist từ đơn, không tự thay thuật ngữ bằng từ gần nghĩa.
6. Review nghĩa và độ sâu riêng: mọi khái niệm mới được giải thích hoặc nối tới nền đã học; mỗi bước công thức có lý do; ví dụ có diễn giải, trường hợp thất bại và phạm vi áp dụng.

Hiện chưa tích hợp mô hình NLP/LLM bên ngoài để viết lại hoặc chấm bài. Bản mẫu có biên tập và kiểm tra tĩnh; không gọi đó là một model NLP đã vận hành. Nếu thêm model, cần chốt provider, chi phí và dữ liệu gửi đi; output phải là bản nháp có diff và review, không tự xuất bản.

## Pipeline học liệu cần triển khai sau bài mẫu

Nguồn ứng viên → kiểm truy cập và quyền → đọc đúng mục → bảng mệnh đề/khái niệm → DAG → bài gốc → review chuyên môn + ngôn ngữ → fixture/lab → người học thử → phiên bản xuất bản. Các quyền đọc, tải nội bộ và tái phân phối là ba trường riêng. Nguồn chưa đủ quyền chỉ liên kết ngoài. Các tài liệu miễn phí thiên thực hành cần nguồn bổ trợ chứng minh.

## Tiêu chí nghiệm thu

- Kiểm máy: ID/nguồn/tiền đề hợp lệ; công thức render; đối chiếu VI/EN; fixtures/lab và UI chạy.
- Kiểm nội dung: không nhảy lập luận, mỗi công thức đúng điều kiện; lời giải giải thích phương pháp; dữ liệu phù hợp mục tiêu.
- Kiểm với người học: chỉ ra thuật ngữ còn lạ; tự giải thích lại; tự giải biến thể và nhớ lại sau thời gian. Chưa có phép kiểm này trong repo.
- Trạng thái đọc, làm có trợ giúp, tự làm, truy hồi, chuyển tình huống phải tách riêng. Không dùng nút “đã mở” làm bằng chứng thành thạo.

## Những quyết định còn cần trao đổi

Độ dài mỗi bước sau khi học mẫu; có muốn bắt buộc trả lời trước khi chuyển bước; ưu tiên thị trường/horizon; thời lượng thực học; phương án phản hồi và NLP model nếu cần. Lựa chọn học từng bước không mặc nhiên cấp quyền khóa bài, mua data hoặc triển khai giao dịch tiền thật.
