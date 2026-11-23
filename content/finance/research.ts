import type { FinanceLesson } from '../../lib/finance-types';

// Original teaching examples; references do not imply profitable strategies.
export const research: FinanceLesson[] = [
  {
    "id": "hypothesis",
    "moduleId": "research",
    "title": {
      "vi": "Giả thuyết nghiên cứu",
      "en": "Research hypotheses"
    },
    "summary": {
      "vi": "Chuyển ý tưởng giao dịch thành phát biểu có thể bị dữ liệu bác bỏ.",
      "en": "Turn a trading idea into a claim that data can contradict."
    },
    "why": {
      "vi": "Một đường vốn đẹp chưa cho biết bạn đã kiểm tra điều gì hoặc đã thử bao nhiêu cách.",
      "en": "An attractive equity curve does not reveal what was tested or how many alternatives were tried."
    },
    "application": {
      "vi": "Ví dụ: trước khi kiểm tra tín hiệu mua cổ phiếu sau một tháng tăng giá, nhóm nghiên cứu khóa thời điểm tính tín hiệu sau phiên, lệnh ở phiên kế tiếp và chuẩn nắm giữ. Đặc tả này cho phép kiểm tra lợi nhuận sau phí thay vì lựa chọn quy tắc theo biểu đồ đẹp.",
      "en": "For example, before testing stock purchases after a rising month, a research team freezes an after-close signal, next-session orders, and a buy-and-hold benchmark. This specification tests after-cost performance without choosing rules from attractive charts."
    },
    "prerequisites": [
      "returns",
      "probability",
      "estimation"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Từ nhận xét đến giả thuyết",
          "en": "From observation to hypothesis"
        },
        "body": {
          "vi": "“Giá tăng thường tiếp tục tăng” chưa đủ để kiểm tra: còn thiếu tài sản, khoảng quan sát, thời gian giữ và cách tính lợi nhuận. Một giả thuyết cụ thể có thể là: tín hiệu dựa trên lợi nhuận quá khứ, tính sau khi phiên kết thúc, tạo lợi nhuận vượt chuẩn dương sau chi phí trên giai đoạn chưa dùng để thiết kế. **Tín hiệu** là đại lượng dùng để quyết định vị thế; **chuẩn so sánh** là quy tắc cố định như giữ tiền hoặc nắm giữ tài sản. Cần chọn chuẩn cùng cơ sở vốn và cách ghi nhận chi phí. Cơ chế kinh tế giải thích tại sao hiệu ứng có thể tồn tại; nó không thay thế kiểm chứng. Phản ứng chậm với thông tin là một cơ chế có thể nghiên cứu, không phải kết luận mọi xu hướng đều có lãi.",
          "en": "“Rising prices tend to keep rising” is not yet testable: assets, observation window, holding period, and return definition are missing. A specific hypothesis might state that a past-return signal, computed after the session ends, earns positive excess returns after costs on a period not used for design. A **signal** is a quantity used to choose a position; a **benchmark** is a fixed comparison rule such as cash or holding an asset. Use comparable capital and cost accounting. An economic mechanism explains why an effect might exist; it does not replace testing. Slow responses to information are a mechanism to investigate, not a conclusion that every trend is profitable."
        }
      },
      {
        "title": {
          "vi": "Đại lượng cần ước lượng",
          "en": "The quantity to estimate"
        },
        "body": {
          "vi": "Gọi $r_t$ là lợi nhuận chiến lược sau chi phí trong kỳ $t$, $b_t$ là lợi nhuận chuẩn cùng kỳ và $d_t=r_t-b_t$ là lợi nhuận vượt chuẩn. Đại lượng quan tâm là $\\mu_d=E[d_t]$, còn trung bình mẫu $\\bar d=\\frac{1}{n}\\sum_{t=1}^{n}d_t$ chỉ là ước lượng từ $n$ kỳ quan sát. Giả thuyết gốc $H_0:\\mu_d\\leq0$ nói rằng không có lợi thế trung bình dương; đối thuyết $H_1:\\mu_d>0$ cần bằng chứng.\n\nVí dụ tự xây: lợi nhuận gộp trung bình $0.001$ và chi phí trung bình $0.0008$ cho lợi nhuận ròng $0.0002$ mỗi kỳ. Đây là phép trừ kế toán, chưa chứng minh kỳ vọng tương lai dương. Sai số ước lượng, phụ thuộc thời gian và chế độ thị trường có thể thay đổi kết luận. Giá trị $p$ nhỏ cũng không đo kích thước lợi nhuận hoặc khả năng thực thi.",
          "en": "Let $r_t$ be the strategy's after-cost return in period $t$, $b_t$ the benchmark return, and $d_t=r_t-b_t$ its excess return. The target is $\\mu_d=E[d_t]$, while the sample mean $\\bar d=\\frac{1}{n}\\sum_{t=1}^{n}d_t$ estimates it from $n$ observations. The null $H_0:\\mu_d\\leq0$ states no positive mean advantage; the alternative $H_1:\\mu_d>0$ requires evidence.\n\nOriginal example: average gross return $0.001$ and average cost $0.0008$ leave net return $0.0002$ per period. This accounting subtraction does not establish a positive future expectation. Estimation error, temporal dependence, and market regimes may change the conclusion. A small $p$-value does not measure profit size or execution feasibility."
        }
      },
      {
        "title": {
          "vi": "Kế hoạch trước khi xem kết quả",
          "en": "A plan before seeing results"
        },
        "body": {
          "vi": "Ghi rõ tập tài sản tại từng thời điểm, nguồn dữ liệu, quy tắc tín hiệu, giới hạn vị thế, thời điểm khớp, chi phí, chuẩn và phép đánh giá chính. Tách khám phá ý tưởng khỏi đánh giá quy tắc đã khóa. Thay đổi sau khi xem kết quả có thể hữu ích, nhưng phải ghi là khám phá và cần dữ liệu đánh giá mới. Lưu cả thử nghiệm thất bại để tránh chỉ kể câu chuyện của phiên bản thắng. Tệp kế hoạch có phiên bản giúp truy vết; nó không tự trở thành đăng ký nghiên cứu chính thức. Kết quả âm có giá trị nếu cho thấy giả thuyết không đứng vững dưới điều kiện đã nêu.",
          "en": "Specify the point-in-time asset universe, data source, signal rule, position limits, fills, costs, benchmark, and primary evaluation. Separate exploration from evaluation with frozen rules. Changes after seeing results may be useful, but label them exploratory and obtain fresh evaluation data. Preserve failed experiments to avoid reporting only the winning version. A versioned plan supports traceability; it is not automatically formal preregistration. Negative results are useful when they show a hypothesis fails under its stated conditions."
        }
      }
    ],
    "exercises": [
      {
        "id": "hypothesis-specific",
        "kind": "concept",
        "question": {
          "vi": "“Mô hình dự đoán tốt” còn thiếu gì để đánh giá giao dịch?",
          "en": "What is missing from “the model predicts well” as a trading claim?"
        },
        "hint": {
          "vi": "Tách dự báo, quyết định và kết quả sau phí.",
          "en": "Separate forecasts, decisions, and after-cost outcomes."
        },
        "answer": {
          "vi": "Cần nhãn, kỳ dự báo, thời điểm thông tin, chuẩn dự báo, quy tắc vị thế, chi phí, giới hạn rủi ro và tập đánh giá. Chính xác chưa đủ để có lợi nhuận ròng.",
          "en": "Specify target, horizon, information availability, forecast benchmark, positions, costs, risk limits, and evaluation data. Accuracy alone does not establish net profit."
        }
      },
      {
        "id": "hypothesis-net",
        "kind": "calculation",
        "question": {
          "vi": "Lợi nhuận gộp $0.001$, chi phí $0.0008$. Nhập lợi nhuận ròng dạng thập phân.",
          "en": "Gross return is $0.001$ and costs are $0.0008$. Enter net return as a decimal."
        },
        "hint": {
          "vi": "Trừ chi phí trên cùng cơ sở vốn.",
          "en": "Subtract costs on the same capital basis."
        },
        "answer": {
          "vi": "$0.001-0.0008=0.0002$. Chưa biết độ bất định.",
          "en": "$0.001-0.0008=0.0002$. Uncertainty remains unspecified."
        },
        "numeric": {
          "expected": 0.0002,
          "tolerance": 1e-8
        }
      },
      {
        "id": "hypothesis-change",
        "kind": "implementation",
        "question": {
          "vi": "Bạn đổi ngưỡng sau khi xem kiểm tra cuối. Ghi nhận thế nào?",
          "en": "You change a threshold after viewing the final test. How should this be recorded?"
        },
        "hint": {
          "vi": "Dữ liệu đã ảnh hưởng thiết kế.",
          "en": "The data influenced design."
        },
        "answer": {
          "vi": "Lưu bản cũ, lý do đổi và kết quả đã xem. Coi dữ liệu đó là khám phá cho bản mới; khóa quy tắc mới rồi đánh giá trên dữ liệu chưa ảnh hưởng thiết kế.",
          "en": "Preserve the old version, rationale, and inspected results. Treat those data as exploratory for the new version; freeze the new rule and evaluate on data that have not influenced design."
        }
      }
    ],
    "sources": [
      {
        "title": "Center for Open Science — Preregistration",
        "url": "https://www.cos.io/initiatives/prereg",
        "section": "What is Preregistration?; planned versus unplanned work"
      }
    ]
  },
  {
    "id": "bias",
    "moduleId": "research",
    "title": {
      "vi": "Sai lệch trong nghiên cứu",
      "en": "Research biases"
    },
    "summary": {
      "vi": "Nhận diện thông tin tương lai, sai lệch sống sót và việc chọn kết quả đẹp nhất.",
      "en": "Recognize future information, survivorship bias, and selection of the best-looking result."
    },
    "why": {
      "vi": "Sai lệch dữ liệu có thể tạo lợi nhuận giả dù phép tính và mã đều chạy đúng.",
      "en": "Data bias can manufacture apparent profits even when calculations and code are correct."
    },
    "application": {
      "vi": "Ví dụ: bảng đặc trưng cổ phiếu dùng lợi nhuận doanh nghiệp theo thời điểm báo cáo thực sự được công bố, đồng thời giữ cả mã đã hủy niêm yết. Kiểm tra này ngăn mô hình nhận thông tin tương lai và chỉ học từ những tài sản còn tồn tại.",
      "en": "For example, an equity feature table makes company earnings available only at their actual publication time and retains delisted stocks. This check prevents future information and survivor-only samples from entering the model."
    },
    "prerequisites": [
      "hypothesis",
      "data",
      "probability"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Thông tin thuộc thời điểm nào?",
          "en": "When was information available?"
        },
        "body": {
          "vi": "**Look-ahead bias** là dùng thông tin chưa thể biết lúc ra quyết định. Báo cáo có kỳ kế toán kết thúc tháng trước nhưng công bố hôm nay chỉ được dùng sau công bố và độ trễ xử lý cần thiết. Phân biệt thời điểm sự kiện, thời điểm công bố và thời điểm hệ thống nhận được. Bản sửa số liệu cũng có thời điểm riêng. Phép nối dữ liệu theo thời gian phải chọn bản mới nhất đã khả dụng trước quyết định, không chọn bản mới nhất trong cơ sở dữ liệu hiện tại. Tương tự, tín hiệu dùng giá đóng cửa hoàn chỉnh không được giả định khớp ngay tại giá đó nếu chưa chứng minh được quy trình đặt lệnh hợp lệ.",
          "en": "**Look-ahead bias** uses information unavailable when the decision was made. A report covering last month but released today becomes usable only after release plus processing delay. Distinguish event time, publication time, and system receipt time. Revisions have separate availability times. A time-aware join selects the latest version available before the decision, not the latest version currently in the database. Likewise, a signal requiring the completed closing price cannot simply assume a fill at that close without a valid order-timing mechanism."
        }
      },
      {
        "title": {
          "vi": "Chọn mẫu và rò rỉ dữ liệu",
          "en": "Selection and data leakage"
        },
        "body": {
          "vi": "**Sai lệch sống sót** xuất hiện khi kiểm tra quá khứ chỉ bằng tài sản còn giao dịch hôm nay, bỏ tài sản hủy niêm yết hoặc thất bại. **Rò rỉ dữ liệu** xuất hiện khi thông tin đánh giá ảnh hưởng bước học: chuẩn hóa trên toàn bộ dữ liệu, chọn đặc trưng bằng toàn bộ nhãn, hoặc sửa tham số sau khi xem kiểm tra. Không đưa nhãn vào mô hình chưa đủ. Trong mỗi lần chia, phép biến đổi có tham số phải học từ huấn luyện rồi áp dụng nguyên trạng cho phần sau. Giá thiếu cần phân loại: thị trường đóng cửa, ngừng giao dịch và lỗi nhà cung cấp không phải cùng sự kiện. Không tự điền giá tương lai vào khoảng trống của quá khứ.",
          "en": "**Survivorship bias** arises when historical tests include only assets still trading today and omit delisted or failed assets. **Data leakage** occurs when evaluation information influences learning: scaling all data, selecting features using all labels, or adjusting parameters after inspecting tests. Keeping labels out of model inputs is insufficient. Within each split, learned transformations must fit on training data and apply unchanged to later observations. Classify missing prices: market closure, a trading halt, and provider failure are different events. Do not fill historical gaps with future prices."
        }
      },
      {
        "title": {
          "vi": "Thử nhiều chiến lược",
          "en": "Trying many strategies"
        },
        "body": {
          "vi": "Giả sử minh họa có $m$ phép kiểm định độc lập, mỗi phép có xác suất báo động giả $\\alpha$ khi mọi giả thuyết gốc đúng. Xác suất không có báo động giả là $(1-\\alpha)^m$, do nhân các xác suất độc lập. Vì vậy xác suất có ít nhất một báo động giả là $1-(1-\\alpha)^m$. Với $m=20$ và $\\alpha=0.05$, kết quả xấp xỉ $0.6415$.\n\nĐây không phải xác suất backtest của bạn sai: chiến lược thường tương quan và quy trình chọn khác nhau. Nó minh họa vì sao thử nhiều rồi chỉ báo cáo một kết quả làm tăng nguy cơ tự đánh lừa. Ghi mọi cấu hình đã thử, kể cả thay đổi thủ công; khóa đánh giá cuối và đọc kết quả cùng mức độ tìm kiếm đã thực hiện.",
          "en": "Suppose, for illustration, that $m$ tests are independent, each with false-alarm probability $\\alpha$ when all nulls hold. Multiplying independent probabilities gives $(1-\\alpha)^m$ for no false alarms. Thus the probability of at least one false alarm is $1-(1-\\alpha)^m$. With $m=20$ and $\\alpha=0.05$, this is approximately $0.6415$.\n\nThis is not the probability that your backtest is wrong: strategies are often correlated and selection procedures differ. It illustrates why trying many alternatives and reporting one increases self-deception risk. Record every attempted configuration, including manual changes; freeze final evaluation and interpret results alongside the search effort."
        }
      }
    ],
    "exercises": [
      {
        "id": "bias-release",
        "kind": "concept",
        "question": {
          "vi": "Báo cáo kết thúc kỳ hôm qua nhưng công bố ngày mai. Có dùng ra lệnh hôm nay được không?",
          "en": "A report covers a period ending yesterday but is released tomorrow. Can it inform an order today?"
        },
        "hint": {
          "vi": "Xét thời điểm khả dụng.",
          "en": "Consider availability time."
        },
        "answer": {
          "vi": "Không. Dùng ngày kết thúc kỳ sẽ đưa thông tin tương lai vào quyết định. Chỉ dùng sau công bố và độ trễ thực tế.",
          "en": "No. Joining by period end introduces future information. Use it only after release and actual processing delay."
        }
      },
      {
        "id": "bias-scaler",
        "kind": "implementation",
        "question": {
          "vi": "Đã chuẩn hóa cả chuỗi rồi mới chia dữ liệu. Sửa thế nào?",
          "en": "You scaled the entire series before splitting. How do you fix it?"
        },
        "hint": {
          "vi": "Trung bình và độ lệch chuẩn là tham số học.",
          "en": "Means and standard deviations are learned parameters."
        },
        "answer": {
          "vi": "Chia theo thời gian trước; fit bộ chuẩn hóa trên huấn luyện rồi transform cả hai phần. Khi đánh giá cuốn chiếu, fit riêng trong từng cửa sổ.",
          "en": "Split chronologically first; fit scaling on training data, then transform both sets. Refit within each training window during walk-forward evaluation."
        }
      },
      {
        "id": "bias-tests",
        "kind": "calculation",
        "question": {
          "vi": "Hai phép kiểm định độc lập có xác suất báo động giả $0.05$ mỗi phép. Xác suất ít nhất một báo động giả?",
          "en": "Two independent tests each have false-alarm probability $0.05$. Probability of at least one false alarm?"
        },
        "hint": {
          "vi": "Một trừ xác suất không có báo động.",
          "en": "One minus the probability of no alarms."
        },
        "answer": {
          "vi": "$1-0.95^2=0.0975$. Cần giả định độc lập.",
          "en": "$1-0.95^2=0.0975$. Independence is required."
        },
        "numeric": {
          "expected": 0.0975,
          "tolerance": 1e-8
        }
      }
    ],
    "sources": [
      {
        "title": "scikit-learn — Common pitfalls",
        "url": "https://scikit-learn.org/stable/common_pitfalls.html",
        "section": "12.1 Inconsistent preprocessing; 12.2 Data leakage"
      },
      {
        "title": "Bailey et al. — The Probability of Backtest Overfitting",
        "url": "https://www.davidhbailey.com/dhbpapers/backtest-prob.pdf",
        "section": "Introduction; strategy selection through repeated backtests"
      }
    ]
  },
  {
    "id": "backtest",
    "moduleId": "research",
    "title": {
      "vi": "Mô phỏng giao dịch",
      "en": "Backtesting"
    },
    "summary": {
      "vi": "Xây sổ tiền, vị thế và lệnh theo đúng thứ tự sự kiện.",
      "en": "Build a cash, position, and order ledger in event order."
    },
    "why": {
      "vi": "Lợi nhuận phải truy ngược được về dữ liệu đã biết và giao dịch có thể thực hiện.",
      "en": "Returns must trace back to available data and feasible trades."
    },
    "application": {
      "vi": "Ví dụ: mô phỏng mua cổ phiếu ở phiên sau tín hiệu đóng cửa, rồi lưu riêng yêu cầu đặt lệnh, lần khớp, tiền và số cổ phiếu. Đối chiếu một lượt mua–bán bằng tay trước khi chạy nhiều năm giúp phát hiện tiền hoặc lợi nhuận bị tính sai.",
      "en": "For example, simulate buying a stock in the session after a closing signal, recording order requests, fills, cash, and shares separately. Reconciling one round trip by hand before a multiyear run reveals cash and profit accounting errors."
    },
    "prerequisites": [
      "pnl",
      "bias",
      "python"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Thứ tự sự kiện",
          "en": "Event order"
        },
        "body": {
          "vi": "**Backtest** mô phỏng quy tắc bằng dữ liệu lịch sử và giả định thực thi. Chuỗi cơ bản là nhận dữ liệu → tính tín hiệu → tạo lệnh → mô phỏng khớp → cập nhật sổ → định giá. **Lệnh** là yêu cầu mua bán; **khớp** là giao dịch được thực hiện trong mô phỏng. Lệnh có thể khớp một phần hoặc không khớp. Với dữ liệu nến gồm mở cửa, cao nhất, thấp nhất, đóng cửa và khối lượng, không biết toàn bộ thứ tự giá trong nến. Nếu cả mức dừng lỗ và chốt lời đều bị chạm, chọn thứ tự có lợi làm sai kết quả. Cần dữ liệu chi tiết hơn hoặc quy tắc bảo thủ được công bố.",
          "en": "A **backtest** simulates a rule using historical data and execution assumptions. The basic sequence is receive data → compute signal → create order → simulate fill → update ledger → value positions. An **order** requests a trade; a **fill** is a simulated execution. An order may fill partially or not at all. A bar containing open, high, low, close, and volume does not reveal the full intrabar path. If both stop and profit levels are touched, choosing the favorable order biases results. Use finer data or an explicit conservative rule."
        }
      },
      {
        "title": {
          "vi": "Phương trình sổ giao dịch",
          "en": "Ledger equations"
        },
        "body": {
          "vi": "Với tài sản giao ngay không vay và không có cổ tức, gọi $B$ là tiền mặt, $Q$ là lượng đang giữ, $q$ là lượng giao dịch có dấu (mua dương, bán âm), $p$ là giá khớp và $f\\geq0$ là phí tiền mặt. Sau giao dịch:\n$$B'=B-qp-f,\\qquad Q'=Q+q.$$\nGiá định giá hiện tại là $m$, nên vốn chủ sở hữu $V=B+Qm$. Đây là đẳng thức kế toán: tiền cộng giá trị vị thế. Mua không tự tạo lợi nhuận; nếu $p=m$ thì vốn chỉ giảm bởi phí. Phái sinh, vay ký quỹ và tài khoản đa tiền tệ cần sổ riêng cho ký quỹ, lãi vay, thanh toán và tỷ giá. Không dùng máy móc phương trình giao ngay cho mọi hợp đồng.",
          "en": "For a spot asset without borrowing or dividends, let $B$ be cash, $Q$ units held, $q$ signed traded units (positive for buying, negative for selling), $p$ the fill price, and $f\\geq0$ the cash fee. After trading:\n$$B'=B-qp-f,\\qquad Q'=Q+q.$$\nAt marking price $m$, equity is $V=B+Qm$. This accounting identity adds cash and position value. A purchase does not create profit; if $p=m$, equity falls only by the fee. Derivatives, margin borrowing, and multicurrency accounts require separate collateral, interest, settlement, and exchange-rate accounting. Do not mechanically apply spot equations to every contract."
        }
      },
      {
        "title": {
          "vi": "Đối chiếu ví dụ nhỏ",
          "en": "Reconcile a small example"
        },
        "body": {
          "vi": "Khởi đầu $B=1000$, $Q=0$. Mua $q=5$ tại $p=100$, phí $f=1$: tiền còn $499$, vị thế $5$. Khi giá lên $m=102$, vốn là $499+5\\times102=1009$. Bán hết tại $102$ với phí $1$ cho tiền cuối $1008$, vị thế không còn, lãi ròng $8$. Chênh lệch giữa $1009$ và $1008$ là phí thoát.\n\nLưu từng sự kiện với thời gian, mã lệnh, giá, lượng, phí, tiền và vị thế sau cập nhật. Kiểm tra tiền không tự sinh ra, lượng bán hợp lệ, không khớp trước gửi lệnh và vốn cuối khớp tổng dòng tiền. Các kiểm tra này phát hiện lỗi phần mềm; chúng chưa xác nhận mô hình khớp phản ánh thị trường thật.",
          "en": "Start with $B=1000$, $Q=0$. Buy $q=5$ at $p=100$, paying $f=1$: cash becomes $499$ and position $5$. At mark $m=102$, equity is $499+5\\times102=1009$. Selling everything at $102$ with fee $1$ leaves cash $1008$, no position, and net profit $8$. The difference between $1009$ and $1008$ is the exit fee.\n\nLog each event with time, order identifier, price, quantity, fee, cash, and updated position. Check that cash cannot appear spontaneously, sales are permitted, fills do not precede submission, and final equity reconciles with cash flows. These checks detect software errors; they do not establish market realism."
        }
      }
    ],
    "exercises": [
      {
        "id": "backtest-close",
        "kind": "concept",
        "question": {
          "vi": "Tín hiệu cần giá đóng cửa nhưng mua tại chính giá đó. Thiếu gì?",
          "en": "A signal needs the closing price but buys at that price. What is missing?"
        },
        "hint": {
          "vi": "So thời điểm biết thông tin và gửi lệnh.",
          "en": "Compare information availability and submission time."
        },
        "answer": {
          "vi": "Thiếu cơ chế biết đầu vào trước hạn đặt lệnh và vẫn khớp giá đó. Có thể chuyển quyết định sang thời điểm khả dụng tiếp theo, kèm mô hình khớp và trượt giá rõ ràng.",
          "en": "A mechanism must make inputs available before the order deadline while permitting that fill. One alternative is the next available decision time with an explicit fill and slippage model."
        }
      },
      {
        "id": "backtest-equity",
        "kind": "calculation",
        "question": {
          "vi": "Khởi đầu tiền $1000$, không có vị thế. Mua $5$ đơn vị tại $100$ rồi bán hết tại $102$, phí mỗi giao dịch $1$. Không có dòng tiền khác. Tiền cuối là bao nhiêu?",
          "en": "Start with cash $1000$ and no position. Buy $5$ units at $100$, then sell all at $102$, paying fee $1$ per trade. There are no other cash flows. What is final cash?"
        },
        "hint": {
          "vi": "Cộng tiền bán rồi trừ phí thoát.",
          "en": "Add proceeds and subtract the exit fee."
        },
        "answer": {
          "vi": "$499+5\\times102-1=1008$. Lãi ròng $8$.",
          "en": "$499+5\\times102-1=1008$. Net profit is $8$."
        },
        "numeric": {
          "expected": 1008,
          "tolerance": 1e-8
        }
      },
      {
        "id": "backtest-invariants",
        "kind": "implementation",
        "question": {
          "vi": "Thiết kế kiểm tra mua rồi bán cùng giá với phí hai chiều.",
          "en": "Design a same-price round-trip test with fees on both sides."
        },
        "hint": {
          "vi": "Không có lãi do giá thay đổi.",
          "en": "There is no price-change profit."
        },
        "answer": {
          "vi": "Mua lượng hợp lệ rồi bán đúng lượng đó. Xác nhận vị thế cuối bằng không và tiền cuối bằng tiền đầu trừ tổng phí; đối chiếu từng dòng sổ và thứ tự thời gian.",
          "en": "Buy an affordable quantity and sell exactly it. Assert zero final position and final cash equal to initial cash minus total fees; reconcile every row and timestamp."
        }
      }
    ],
    "sources": [
      {
        "title": "Coinbase Markets Trading Rules",
        "url": "https://www.coinbase.com/legal/trading_rules",
        "section": "1.7 Matching Engine and Order Priority; 1.8 Fills and Settlement (venue example)"
      }
    ]
  },
  {
    "id": "costs",
    "moduleId": "research",
    "title": {
      "vi": "Chi phí và khả năng thực thi",
      "en": "Costs and execution feasibility"
    },
    "summary": {
      "vi": "Tách phí trực tiếp, spread, trượt giá và chi phí giữ vị thế.",
      "en": "Separate explicit fees, spread, slippage, and holding costs."
    },
    "why": {
      "vi": "Lợi thế nhỏ có thể biến mất khi giao dịch thường xuyên hoặc khối lượng lớn.",
      "en": "A small edge can disappear with frequent or large trades."
    },
    "application": {
      "vi": "Ví dụ: một chiến lược crypto đổi vị thế thường xuyên có lãi trên giá giữa bid/ask. Chạy lại với giá khớp từ sổ lệnh, phí taker và độ trễ giúp xác định lợi thế có còn sau thực thi hay không.",
      "en": "For example, a frequently rebalanced crypto strategy looks profitable at bid–ask midpoints. Replaying it with order-book fills, taker fees, and latency checks whether its edge survives execution."
    },
    "prerequisites": [
      "backtest",
      "returns"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Các khoản chi phí",
          "en": "Cost components"
        },
        "body": {
          "vi": "**Phí giao dịch** là khoản sàn hoặc môi giới thu. **Bid** là giá mua tốt nhất đang chào, **ask** là giá bán tốt nhất; ask trừ bid là spread. Lệnh mua chủ động thường tiếp cận ask. **Trượt giá** so giá thực thi với giá tham chiếu đã chọn: cần ghi rõ mốc khi quyết định, gửi lệnh hay giá giữa bid/ask. **Tác động thị trường** là phần biến động giá do chính giao dịch gây ra. Giữ vị thế còn có thể phát sinh lãi vay, phí vay tài sản để bán khống hoặc thanh toán funding của hợp đồng vĩnh cửu. Funding có thể trả hoặc nhận; không luôn là khoản lỗ. Cơ chế và lịch thu phụ thuộc sản phẩm.",
          "en": "**Trading fees** are explicit venue or broker charges. The **bid** is the best quoted buying price and **ask** the best selling price; ask minus bid is the spread. Aggressive buys generally access the ask. **Slippage** compares execution with a specified reference: decision price, submission price, or midpoint. **Market impact** is price movement caused by the trade. Positions may incur financing interest, short-borrow fees, or perpetual-contract funding transfers. Funding can be paid or received; it is not always a loss. Mechanisms and schedules depend on the product."
        }
      },
      {
        "title": {
          "vi": "Đo mà không tính trùng",
          "en": "Measure without double counting"
        },
        "body": {
          "vi": "Gọi $q$ là lượng có dấu, $p$ là giá khớp, $m$ là giá giữa tại thời điểm tham chiếu và $f$ là phí trực tiếp. Chi phí so với mốc là $C=q(p-m)+f$. Mua $q=100$ tại $p=10.02$, mốc $m=10$ và phí $f=1$ cho $C=3$. Khi bán, $q<0$, bán thấp hơn mốc cũng tạo chi phí dương.\n\nNếu sổ đã dùng giá khớp $p$, spread và trượt giá đã nằm trong dòng tiền. Không trừ thêm cùng khoản khỏi lợi nhuận. Phân rã chi phí giúp phân tích, còn hạch toán chỉ tính mỗi khoản một lần. Nếu dùng giá giữa làm giá khớp giả định, cần bổ sung mô hình thực thi.",
          "en": "Let $q$ be signed quantity, $p$ the fill, $m$ the reference-time midpoint, and $f$ the explicit fee. Cost relative to the reference is $C=q(p-m)+f$. Buying $q=100$ at $p=10.02$ against $m=10$ with fee $f=1$ gives $C=3$. For selling, $q<0$, so a sale below the reference also has positive cost.\n\nIf the ledger already uses fill price $p$, spread and slippage are embedded in cash flows. Do not subtract the same costs again. Cost decomposition supports analysis, but accounting counts each component once. If midpoint prices are hypothetical fills, add an execution model."
        }
      },
      {
        "title": {
          "vi": "Vòng quay và quy mô",
          "en": "Turnover and scale"
        },
        "body": {
          "vi": "Với tỷ trọng $w_t$ sau tái cân bằng, $|w_t-w_{t-1}|$ biểu thị lượng mua bán tương đối trong mô hình đơn giản bỏ qua tỷ trọng tự trôi theo giá. Nếu chi phí một chiều là $c$ trên giá trị giao dịch, chi phí xấp xỉ $c|w_t-w_{t-1}|$ trên vốn. Từ tiền mặt sang toàn bộ tài sản rồi về tiền có tổng thay đổi bằng $2$, nên chi phí xấp xỉ $2c$.\n\nĐây chỉ là mô hình tuyến tính. Lệnh lớn so với thanh khoản có thể chịu chi phí tăng nhanh hơn tỷ lệ khối lượng. **Sức chứa chiến lược** là quy mô vốn mà cơ hội còn thực thi được dưới tiêu chí lợi nhuận và rủi ro đã chọn. Thử nhiều mức phí, độ trễ và độ sâu; không suy sức chứa từ backtest giá đóng cửa.",
          "en": "For post-rebalancing weight $w_t$, $|w_t-w_{t-1}|$ represents relative traded amount in a simplified model ignoring price-driven weight drift. If one-way cost is $c$ per traded value, cost is approximately $c|w_t-w_{t-1}|$ relative to capital. Moving from cash to fully invested and back has total weight change $2$, giving approximately $2c$.\n\nThis is only a linear model. Orders large relative to liquidity may incur costs growing faster than quantity. **Strategy capacity** is the capital scale at which an opportunity remains executable under specified return and risk criteria. Test multiple fees, delays, and depths; a closing-price backtest cannot establish capacity."
        }
      }
    ],
    "exercises": [
      {
        "id": "costs-double",
        "kind": "concept",
        "question": {
          "vi": "Một môi giới miễn phí giao dịch trực tiếp. Có thể kết luận mọi giao dịch qua đó đều không có chi phí không?",
          "en": "A broker waives explicit trading fees. Does that mean every trade through it is costless?"
        },
        "hint": {
          "vi": "Phân biệt khoản thu trực tiếp với spread, trượt giá và chi phí giữ vị thế.",
          "en": "Distinguish explicit charges from spread, slippage, and holding costs."
        },
        "answer": {
          "vi": "Không. Spread và trượt giá vẫn ảnh hưởng giá thực thi; tùy sản phẩm còn có lãi vay, phí vay tài sản hoặc funding. Miễn một khoản phí không xóa các thành phần còn lại.",
          "en": "No. Spread and slippage still affect execution prices; depending on the product, financing, borrow charges, or funding may also apply. Waiving one fee does not remove other components."
        }
      },
      {
        "id": "costs-signed",
        "kind": "calculation",
        "question": {
          "vi": "Bán $50$ đơn vị tại $19.98$, mốc $20$, phí $1$. Chi phí so mốc là?",
          "en": "Sell $50$ units at $19.98$ against $20$, paying fee $1$. Cost relative to the reference?"
        },
        "hint": {
          "vi": "Lượng có dấu là $q=-50$.",
          "en": "Signed quantity is $q=-50$."
        },
        "answer": {
          "vi": "$(-50)(19.98-20)+1=2$.",
          "en": "$(-50)(19.98-20)+1=2$."
        },
        "numeric": {
          "expected": 2,
          "tolerance": 1e-8
        }
      },
      {
        "id": "costs-roundtrip",
        "kind": "calculation",
        "question": {
          "vi": "Lợi nhuận gộp mua–bán $0.003$, chi phí mỗi chiều $0.002$ cùng cơ sở vốn. Ròng xấp xỉ?",
          "en": "Gross round-trip return is $0.003$, with $0.002$ cost per side on the same capital basis. Approximate net return?"
        },
        "hint": {
          "vi": "Có phí vào và ra.",
          "en": "Include entry and exit."
        },
        "answer": {
          "vi": "$0.003-2\\times0.002=-0.001$. Đây là xấp xỉ cộng.",
          "en": "$0.003-2\\times0.002=-0.001$. This is an additive approximation."
        },
        "numeric": {
          "expected": -0.001,
          "tolerance": 1e-8
        }
      }
    ],
    "sources": [
      {
        "title": "Coinbase Exchange fees",
        "url": "https://help.coinbase.com/en/exchange/trading-and-funding/exchange-fees",
        "section": "Trading Fees; maker–taker model. Lesson uses hypothetical fees, not current fee tiers."
      }
    ]
  },
  {
    "id": "validation",
    "moduleId": "research",
    "title": {
      "vi": "Đánh giá ngoài mẫu",
      "en": "Out-of-sample evaluation"
    },
    "summary": {
      "vi": "Đánh giá trên tương lai chưa tham gia thiết kế và đo độ ổn định của kết quả.",
      "en": "Evaluate on future data excluded from design and assess result stability."
    },
    "why": {
      "vi": "Khớp dữ liệu cũ không trả lời hệ thống sẽ hoạt động thế nào sau triển khai.",
      "en": "Fitting old data does not establish post-deployment performance."
    },
    "application": {
      "vi": "Ví dụ: mô hình dự báo lợi nhuận cổ phiếu được học lại đầu mỗi tháng và chỉ phát dự báo cho tháng kế tiếp. Lưu từng dự báo trước khi thấy kết quả, đồng thời loại nhãn huấn luyện chưa kết thúc, giúp đánh giá đúng quy trình triển khai.",
      "en": "For example, a stock-return model is retrained at each month start and forecasts only the following month. Saving predictions before outcomes arrive and excluding unfinished training labels evaluates the intended deployment process."
    },
    "prerequisites": [
      "bias",
      "costs",
      "estimation"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Ba vai trò của dữ liệu",
          "en": "Three roles for data"
        },
        "body": {
          "vi": "**Huấn luyện** ước lượng tham số. **Xác thực** chọn cấu hình như độ dài cửa sổ hoặc mức phạt. **Kiểm tra cuối** đánh giá cấu hình đã khóa. Nếu dùng kiểm tra để chọn tiếp, nó đã trở thành xác thực. Với dự báo giao dịch, huấn luyện phải có trước dự báo; xáo trộn ngẫu nhiên có thể trộn thông tin chế độ và nhãn chồng lấn. **Đánh giá cuốn chiếu** lặp lại: học trên quá khứ, dự báo đoạn tiếp theo, di chuyển mốc rồi học lại. Cửa sổ mở rộng giữ toàn bộ quá khứ; cửa sổ trượt giữ đoạn gần nhất. Chọn cách phù hợp lịch tái huấn luyện dự kiến và ghi lựa chọn trước khi so kết quả.",
          "en": "**Training** estimates parameters. **Validation** chooses configurations such as window length or penalty strength. A **final test** evaluates frozen choices. Once used for further selection, testing becomes validation. Trading training data must precede forecasts; random shuffling can mix regime information and overlapping labels. **Walk-forward evaluation** repeats: train on the past, forecast the next segment, advance the origin, and retrain. An expanding window keeps all past data; a rolling window keeps a recent segment. Match the intended retraining schedule and document this choice before comparing outcomes."
        }
      },
      {
        "title": {
          "vi": "Nhãn chồng lấn và khoảng cách",
          "en": "Overlapping labels and gaps"
        },
        "body": {
          "vi": "Nhãn ngày $t$ có thể là lợi nhuận $y_t=P_{t+5}/P_t-1$, với $P_t$ là giá tại ngày $t$. Khi đánh giá bắt đầu ngày $T$, một hàng huấn luyện có $t<T$ vẫn chưa hợp lệ nếu $t+5\\geq T$: nhãn dùng giá tại hoặc sau mốc đánh giá. Quy tắc thận trọng chỉ giữ nhãn kết thúc trước $T$.\n\nKhoảng cách cần dựa vào thời gian thông tin thực sự khả dụng, không phải một số ngày cố định cho mọi bài toán. Loại nhãn giao nhau với đánh giá giúp tránh rò rỉ; nó không tạo độc lập hay chữa mọi sai lệch. Đặc trưng trễ tính nhân quả có thể dùng lịch sử trước mốc, miễn không học tham số từ tương lai.",
          "en": "A day-$t$ label may be return $y_t=P_{t+5}/P_t-1$, where $P_t$ is the day-$t$ price. When evaluation starts at day $T$, a training row with $t<T$ is still invalid if $t+5\\geq T$: its label uses a price at or beyond the evaluation boundary. A conservative rule keeps only labels ending before $T$.\n\nThe gap must follow actual information availability, not a universal fixed number of days. Removing labels overlapping evaluation helps prevent leakage; it does not create independence or cure every bias. Causally computed lagged features may use history before the boundary, provided no parameters are learned from the future."
        }
      },
      {
        "title": {
          "vi": "Đánh giá kết quả bất định",
          "en": "Evaluate uncertain results"
        },
        "body": {
          "vi": "Báo cáo lợi nhuận ròng, sụt giảm vốn, vòng quay và số giao dịch cùng chuẩn so sánh. Tách theo đoạn thời gian đã định trước để phát hiện phụ thuộc một giai đoạn; đừng đổi đoạn liên tục để tìm câu chuyện đẹp. Khoảng tin cậy cần giả định về quá trình dữ liệu. Tái lấy mẫu từng ngày độc lập có thể phá phụ thuộc thời gian; tái lấy mẫu theo khối giữ một phần cấu trúc nhưng nhạy với độ dài khối và tính ổn định của chuỗi. Thử phí cao hơn, khớp trễ hơn và bỏ vài giao dịch tốt nhất là kiểm tra độ nhạy, không bảo đảm tương lai. Kết luận nên ghi cả điều kiện khiến chiến lược thất bại.",
          "en": "Report net return, drawdown, turnover, and trade count alongside a benchmark. Use predefined time segments to detect dependence on one period; do not keep changing segments to find a favorable narrative. Confidence intervals require data-generating assumptions. Independently resampling days can destroy temporal dependence; block resampling preserves some structure but depends on block length and process stability. Higher costs, delayed fills, and removing a few best trades are sensitivity checks, not future guarantees. Conclusions should state failure conditions."
        }
      }
    ],
    "exercises": [
      {
        "id": "validation-test",
        "kind": "concept",
        "question": {
          "vi": "Chọn mô hình lãi nhất trên tập kiểm tra cuối. Tập đó còn độc lập với lựa chọn không?",
          "en": "You choose the most profitable model on the final test. Is that set independent of selection?"
        },
        "hint": {
          "vi": "Kết quả đã quyết định lựa chọn.",
          "en": "The outcome determined the choice."
        },
        "answer": {
          "vi": "Không. Nó trở thành dữ liệu lựa chọn. Công bố việc sử dụng đó và đánh giá cấu hình đã khóa trên dữ liệu mới; đổi tên tệp không phục hồi độc lập.",
          "en": "No. It becomes selection data. Disclose that use and test frozen choices on fresh data; renaming a file does not restore independence."
        }
      },
      {
        "id": "validation-boundary",
        "kind": "calculation",
        "question": {
          "vi": "Nhãn ngày $t$ kết thúc tại $t+5$. Kiểm tra bắt đầu ngày $100$. Nếu nhãn huấn luyện phải kết thúc trước ngày $100$, ngày bắt đầu muộn nhất là?",
          "en": "A label at $t$ ends at $t+5$. Testing begins on day $100$. If training labels must end before day $100$, what is their latest start day?"
        },
        "hint": {
          "vi": "Ngày là số nguyên.",
          "en": "Days are integers."
        },
        "answer": {
          "vi": "$t+5<100$ nên $t<95$; muộn nhất là $94$.",
          "en": "$t+5<100$ gives $t<95$; the latest day is $94$."
        },
        "numeric": {
          "expected": 94,
          "tolerance": 0
        }
      },
      {
        "id": "validation-folds",
        "kind": "implementation",
        "question": {
          "vi": "Mô hình tái huấn luyện đầu tháng cần lưu gì mỗi lượt cuốn chiếu?",
          "en": "What should each fold record for a model retrained at month start?"
        },
        "hint": {
          "vi": "Lưu mốc dữ liệu và tham số học.",
          "en": "Record cutoffs and learned parameters."
        },
        "answer": {
          "vi": "Lưu mốc cắt, hàng/nhãn hợp lệ, tiền xử lý, mô hình, cấu hình, dự báo, lệnh và phí. Kiểm tra không dùng thông tin đến sau mốc và không ghi đè dự báo cũ.",
          "en": "Record cutoff, eligible rows/labels, preprocessing, model, configuration, predictions, orders, and costs. Check for information after the cutoff and accidental overwriting of past forecasts."
        }
      }
    ],
    "sources": [
      {
        "title": "Forecasting: Principles and Practice",
        "url": "https://otexts.com/fpp3/toolbox.html",
        "section": "5.8 Evaluating point forecast accuracy; 5.10 Time series cross-validation"
      }
    ]
  },
  {
    "id": "regression",
    "moduleId": "statistics",
    "title": {
      "vi": "Hồi quy tuyến tính",
      "en": "Linear regression"
    },
    "summary": {
      "vi": "Suy ra đường hồi quy từ tối thiểu hóa sai số và hiểu giới hạn diễn giải.",
      "en": "Derive a fitted line by minimizing error and understand interpretation limits."
    },
    "why": {
      "vi": "Hồi quy là chuẩn để đo liên hệ, độ nhạy và giá trị tăng thêm của mô hình phức tạp.",
      "en": "Regression is a baseline for relationships, sensitivities, and the value of more complex models."
    },
    "application": {
      "vi": "Ví dụ: trước khi coi lợi nhuận một chiến lược cổ phiếu là lợi thế riêng, nhóm nghiên cứu hồi quy nó theo lợi nhuận chỉ số cùng kỳ. Độ dốc và phần dư giúp phân biệt mức tiếp xúc thị trường với phần chưa được mô hình giải thích.",
      "en": "For example, before treating a stock strategy’s returns as a distinct edge, a research team regresses them on same-period index returns. The slope and residuals separate market exposure from the component the model does not explain."
    },
    "prerequisites": [
      "algebra",
      "calculus",
      "estimation"
    ],
    "project": "risk-lab",
    "sections": [
      {
        "title": {
          "vi": "Mô hình và mục tiêu",
          "en": "Model and objective"
        },
        "body": {
          "vi": "Với quan sát $(x_i,y_i)$, mô hình tuyến tính đơn viết $y_i=a+bx_i+\\varepsilon_i$. $a$ là hệ số chặn, $b$ là độ dốc và $\\varepsilon_i$ là sai số chưa giải thích. Sau ước lượng, dự báo $\\hat y_i=\\hat a+\\hat b x_i$; phần dư $e_i=y_i-\\hat y_i$ tính được, khác sai số tổng thể chưa biết.\n\nBình phương tối thiểu thường (OLS) chọn $a,b$ để giảm $S(a,b)=\\sum_i(y_i-a-bx_i)^2$. Bình phương tránh triệt tiêu dấu và phạt sai số lớn mạnh hơn. Tính nghiệm không cần sai số chuẩn; diễn giải thống kê cần giả định bổ sung. Trong mẫu gồm các cặp quan sát độc lập và mô hình đúng, $E[\\varepsilon_i\\mid x_i]=0$ nghĩa là sai số có trung bình bằng không ở mỗi đầu vào và hỗ trợ tính không chệch của OLS. Phụ thuộc thời gian và phương sai thay đổi ảnh hưởng cách tính độ bất định.",
          "en": "For observations $(x_i,y_i)$, simple regression writes $y_i=a+bx_i+\\varepsilon_i$. Here $a$ is the intercept, $b$ the slope, and $\\varepsilon_i$ unexplained error. After estimation, predictions are $\\hat y_i=\\hat a+\\hat b x_i$; residual $e_i=y_i-\\hat y_i$ is observable, unlike the unknown population error.\n\nOrdinary least squares (OLS) chooses $a,b$ to minimize $S(a,b)=\\sum_i(y_i-a-bx_i)^2$. Squaring avoids sign cancellation and penalizes large errors more strongly. Computing the solution requires no normal-error assumption; statistical interpretation needs further assumptions. For independent observation pairs in a correctly specified model, $E[\\varepsilon_i\\mid x_i]=0$ means zero average error at each input and supports OLS unbiasedness. Temporal dependence and changing variance affect uncertainty calculations."
        }
      },
      {
        "title": {
          "vi": "Suy ra hệ số",
          "en": "Derive the coefficients"
        },
        "body": {
          "vi": "Đạo hàm theo $a$ và đặt bằng không cho $\\sum_i(y_i-a-bx_i)=0$, nên $a=\\bar y-b\\bar x$, với dấu gạch ngang chỉ trung bình mẫu. Thay vào mục tiêu rồi đạo hàm theo $b$:\n$$\\hat b=\\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sum_i(x_i-\\bar x)^2},\\qquad \\hat a=\\bar y-\\hat b\\bar x.$$\nMẫu số phải dương: nếu mọi $x_i$ bằng nhau, không xác định riêng được độ dốc và hệ số chặn. Mục tiêu là bậc hai lồi; khi đầu vào có biến thiên, nghiệm này là cực tiểu duy nhất.\n\nVí dụ $x=(1,2,3)$, $y=(2,3,5)$ cho $\\bar x=2$, $\\bar y=10/3$, tổng tích lệch $3$ và tổng bình phương lệch $2$. Do đó $\\hat b=1.5$, $\\hat a=1/3$. Tại $x=4$, dự báo $19/3$ là ngoại suy ngoài miền đã thấy.",
          "en": "Differentiating with respect to $a$ and setting to zero gives $\\sum_i(y_i-a-bx_i)=0$, so $a=\\bar y-b\\bar x$, where bars denote sample means. Substitute into the objective and differentiate with respect to $b$:\n$$\\hat b=\\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sum_i(x_i-\\bar x)^2},\\qquad \\hat a=\\bar y-\\hat b\\bar x.$$\nThe denominator must be positive: identical $x_i$ values prevent separate identification of slope and intercept. The objective is a convex quadratic; varying inputs give this unique minimum.\n\nFor $x=(1,2,3)$, $y=(2,3,5)$, we have $\\bar x=2$, $\\bar y=10/3$, cross-deviation sum $3$, and squared-deviation sum $2$. Thus $\\hat b=1.5$, $\\hat a=1/3$. At $x=4$, prediction $19/3$ extrapolates beyond the observed range."
        }
      },
      {
        "title": {
          "vi": "Diễn giải trong tài chính",
          "en": "Interpretation in finance"
        },
        "body": {
          "vi": "Nếu đầu vào và đầu ra đều là lợi nhuận cùng kỳ, độ dốc mô tả liên hệ đồng thời; không tự là dự báo. Để dự báo, đầu vào phải có trước kỳ đầu ra. Độ dốc dương không chứng minh thay đổi đầu vào gây thay đổi đầu ra: yếu tố thứ ba có thể tác động cả hai. Xem phần dư theo dự báo và theo thời gian để phát hiện dạng cong, phương sai thay đổi hoặc cấu trúc còn sót. So sai số ngoài mẫu với mô hình hằng hoặc chuẩn đơn giản. Hệ số chặn dương chưa đủ để gọi là lợi thế sau chi phí.",
          "en": "If inputs and outputs are same-period returns, the slope describes contemporaneous association, not automatically a forecast. Forecast inputs must precede the target period. A positive slope does not prove causation: a third factor may affect both. Plot residuals against predictions and time to detect curvature, changing variance, or remaining structure. Compare out-of-sample errors with a constant or simple baseline. A positive intercept alone does not establish an after-cost edge."
        }
      }
    ],
    "exercises": [
      {
        "id": "regression-constant",
        "kind": "derivation",
        "question": {
          "vi": "Nếu mọi đầu vào đều là $x_i=2$, hai cặp hệ số $(a,b)=(1,1)$ và $(a,b)=(3,0)$ có cho cùng dự báo không? Vì sao dữ liệu như vậy không phân biệt được độ dốc?",
          "en": "If every input is $x_i=2$, do coefficient pairs $(a,b)=(1,1)$ and $(a,b)=(3,0)$ give identical predictions? Why can these data not distinguish the slopes?"
        },
        "hint": {
          "vi": "Thay từng cặp vào $a+bx_i$; chưa cần công thức ước lượng hệ số.",
          "en": "Substitute each pair into $a+bx_i$; no fitted-coefficient formula is needed."
        },
        "answer": {
          "vi": "Cả hai dự báo đều bằng $3$: $1+1\\times2=3$ và $3+0\\times2=3$. Chúng tạo cùng phần dư ở mọi hàng dù độ dốc khác. Không có biến thiên đầu vào nên dữ liệu không cho biết đầu ra đổi thế nào khi đầu vào đổi.",
          "en": "Both predict $3$: $1+1\\times2=3$ and $3+0\\times2=3$. They produce the same residual at every row despite different slopes. Without input variation, the data cannot reveal how output changes when input changes."
        }
      },
      {
        "id": "regression-slope",
        "kind": "calculation",
        "question": {
          "vi": "Với $x=(1,2,3)$, $y=(2,3,5)$, độ dốc OLS là?",
          "en": "For $x=(1,2,3)$, $y=(2,3,5)$, what is the OLS slope?"
        },
        "hint": {
          "vi": "Chia tổng tích lệch cho tổng bình phương lệch đầu vào.",
          "en": "Divide the cross-deviation sum by the input squared-deviation sum."
        },
        "answer": {
          "vi": "$\\hat b=3/2=1.5$.",
          "en": "$\\hat b=3/2=1.5$."
        },
        "numeric": {
          "expected": 1.5,
          "tolerance": 1e-8
        }
      },
      {
        "id": "regression-forecast",
        "kind": "concept",
        "question": {
          "vi": "Hồi quy lợi nhuận cổ phiếu hôm nay theo lợi nhuận chỉ số hôm nay có dùng dự báo từ sáng không?",
          "en": "Can today’s stock return regressed on today’s index return forecast from the morning?"
        },
        "hint": {
          "vi": "Lợi nhuận cả ngày được biết khi nào?",
          "en": "When is the full-day return known?"
        },
        "answer": {
          "vi": "Không nếu đầu vào là lợi nhuận cả ngày chưa biết. Đây là liên hệ cùng kỳ; dự báo cần đầu vào trễ hoặc thông tin thực sự đã có.",
          "en": "No if the full-day input is not yet known. This is a same-period relationship; forecasting requires lagged or genuinely available information."
        }
      }
    ],
    "sources": [
      {
        "title": "An Introduction to Statistical Learning with Python",
        "url": "https://www.statlearning.com/",
        "section": "Chapter 3, Linear Regression; 3.1 Simple Linear Regression (free author-provided download)"
      }
    ]
  },
  {
    "id": "time-series",
    "moduleId": "statistics",
    "title": {
      "vi": "Chuỗi thời gian",
      "en": "Time series"
    },
    "summary": {
      "vi": "Hiểu độ trễ, tính dừng và tự hồi quy trước khi dự báo.",
      "en": "Understand lags, stationarity, and autoregression before forecasting."
    },
    "why": {
      "vi": "Quan sát thị trường có thứ tự và phụ thuộc; công thức cho mẫu độc lập không tự áp dụng.",
      "en": "Market observations are ordered and dependent; independent-sample formulas do not automatically apply."
    },
    "application": {
      "vi": "Ví dụ: một bộ dự báo forex dùng lợi nhuận phiên trước để dự báo phiên tới, rồi so sai số với dự báo bằng không trên các phiên sau thời điểm huấn luyện. Kiểm tra phần dư giúp nhận ra cấu trúc thời gian mà mô hình đơn giản chưa nắm bắt.",
      "en": "For example, a forex forecaster uses the previous session’s return to predict the next, comparing errors with a zero forecast on later sessions. Residual checks reveal temporal structure missed by the simple model."
    },
    "prerequisites": [
      "regression",
      "returns",
      "probability"
    ],
    "project": "risk-lab",
    "sections": [
      {
        "title": {
          "vi": "Độ trễ và tính dừng",
          "en": "Lags and stationarity"
        },
        "body": {
          "vi": "Chuỗi $x_t$ gồm quan sát theo thời gian; độ trễ $k$ dùng $x_{t-k}$. Hiệp phương sai đo hai đại lượng biến động cùng nhau. Chuỗi dừng yếu có trung bình không đổi, phương sai hữu hạn không đổi và hiệp phương sai chỉ phụ thuộc khoảng cách giữa thời điểm. Điều này không đòi từng giá trị giống nhau và không đồng nghĩa độc lập.\n\nGiá có xu hướng hoặc thay đổi cơ chế có thể không dừng. Sai phân $\\Delta x_t=x_t-x_{t-1}$ loại mức để xét thay đổi; lợi nhuận biểu diễn thay đổi giá theo quy mô. Chuyển giá sang lợi nhuận không bảo đảm dừng: biến động và phân phối vẫn có thể đổi. Xem đồ thị và giả định qua nhiều giai đoạn; một kiểm định không chứng nhận tính ổn định mãi mãi.",
          "en": "Series $x_t$ contains time-indexed observations; lag $k$ uses $x_{t-k}$. Covariance measures how quantities vary together. Weak stationarity requires a constant mean, finite constant variance, and covariance depending only on time separation. It does not require identical values and does not imply independence.\n\nTrending prices or structural breaks may be nonstationary. Differencing $\\Delta x_t=x_t-x_{t-1}$ removes levels to examine changes; returns express price changes relative to scale. Converting prices to returns does not guarantee stationarity: volatility and distributions can still change. Inspect plots and assumptions across periods; one test cannot certify permanent stability."
        }
      },
      {
        "title": {
          "vi": "Mô hình tự hồi quy",
          "en": "Autoregression"
        },
        "body": {
          "vi": "AR(1) viết $x_t=c+\\phi x_{t-1}+\\varepsilon_t$: $c$ là hằng số, $\\phi$ là hệ số trễ, nhiễu $\\varepsilon_t$ có kỳ vọng có điều kiện bằng không. Với nghiệm dừng nhân quả, phương sai nhiễu hữu hạn và $|\\phi|<1$, gọi trung bình dài hạn là $\\mu$. Lấy kỳ vọng: $\\mu=c+\\phi\\mu$, nên $\\mu=c/(1-\\phi)$.\n\nTrừ trung bình cho $x_t-\\mu=\\phi(x_{t-1}-\\mu)+\\varepsilon_t$. Dự báo sau $h$ bước là $\\hat x_{t+h}=\\mu+\\phi^h(x_t-\\mu)$: độ lệch kỳ vọng giảm theo $\\phi^h$. Đây là hồi về trung bình của kỳ vọng có điều kiện, không bảo đảm mọi đường giá quay lại đúng hạn. Khi $\\phi=1$, phép chia không hợp lệ; mô hình có thể là bước ngẫu nhiên.",
          "en": "AR(1) writes $x_t=c+\\phi x_{t-1}+\\varepsilon_t$: $c$ is a constant, $\\phi$ the lag coefficient, and noise $\\varepsilon_t$ has conditional mean zero. For a causal stationary solution with finite innovation variance and $|\\phi|<1$, denote the long-run mean by $\\mu$. Taking expectations gives $\\mu=c+\\phi\\mu$, hence $\\mu=c/(1-\\phi)$.\n\nSubtracting the mean gives $x_t-\\mu=\\phi(x_{t-1}-\\mu)+\\varepsilon_t$. The $h$-step forecast is $\\hat x_{t+h}=\\mu+\\phi^h(x_t-\\mu)$: expected deviations decay as $\\phi^h$. This is mean reversion of conditional expectations, not a guarantee that every path returns by a deadline. At $\\phi=1$, division is invalid; the model may be a random walk."
        }
      },
      {
        "title": {
          "vi": "Dự báo và kiểm tra",
          "en": "Forecast and evaluate"
        },
        "body": {
          "vi": "Ví dụ lợi nhuận: $c=0.001$, $\\phi=0.2$, $x_t=0.01$ cho $\\hat x_{t+1}=0.003$. Trung bình dài hạn theo mô hình là $0.00125$. Hai giá trị khác nhau vì dự báo bước tới điều kiện hóa trên quan sát mới nhất. Hệ số thực tế phải ước lượng từ quá khứ; ở đây được cho để học phép tính.\n\nSo với chuẩn bằng không hoặc trung bình lịch sử tại cùng thời điểm. Kiểm tra phần dư còn tương quan hay không, nhưng phần dư không tương quan chưa chứng minh độc lập hoặc lợi nhuận giao dịch. Phải xác định quy tắc vị thế, chi phí và rủi ro mới đánh giá được giá trị kinh tế.",
          "en": "Return example: $c=0.001$, $\\phi=0.2$, $x_t=0.01$ give $\\hat x_{t+1}=0.003$. The model's long-run mean is $0.00125$. They differ because the next-step forecast conditions on the latest observation. Actual coefficients must be estimated from the past; here they are supplied for arithmetic.\n\nCompare with zero or historical-mean forecasts at identical times. Inspect residual correlation, but uncorrelated residuals establish neither independence nor trading profits. Define positions, costs, and risk before evaluating economic value."
        }
      }
    ],
    "exercises": [
      {
        "id": "time-series-stationarity",
        "kind": "concept",
        "question": {
          "vi": "Trung bình lợi nhuận gần không có đủ kết luận dừng yếu không?",
          "en": "Does a near-zero mean return establish weak stationarity?"
        },
        "hint": {
          "vi": "Xét phương sai và phụ thuộc.",
          "en": "Consider variance and dependence."
        },
        "answer": {
          "vi": "Không. Phương sai và cấu trúc phụ thuộc có thể đổi theo thời gian. Trung bình mẫu gần không chỉ mô tả một đặc điểm mẫu.",
          "en": "No. Variance and dependence can change over time. A near-zero sample mean describes only one sample feature."
        }
      },
      {
        "id": "time-series-mean",
        "kind": "derivation",
        "question": {
          "vi": "Suy ra trung bình dài hạn AR(1) dừng.",
          "en": "Derive the stationary AR(1) long-run mean."
        },
        "hint": {
          "vi": "Lấy kỳ vọng hai vế.",
          "en": "Take expectations."
        },
        "answer": {
          "vi": "$\\mu=c+\\phi\\mu$ nên $(1-\\phi)\\mu=c$, do đó $\\mu=c/(1-\\phi)$. Cần trung bình tồn tại và $\\phi\\neq1$; $|\\phi|<1$ hỗ trợ nghiệm dừng nhân quả.",
          "en": "$\\mu=c+\\phi\\mu$ gives $(1-\\phi)\\mu=c$, hence $\\mu=c/(1-\\phi)$. The mean must exist and $\\phi\\neq1$; $|\\phi|<1$ supports causal stationarity."
        }
      },
      {
        "id": "time-series-forecast",
        "kind": "calculation",
        "question": {
          "vi": "Với $c=0.001$, $\\phi=0.2$, $x_t=0.01$, dự báo bước tới là?",
          "en": "With $c=0.001$, $\\phi=0.2$, $x_t=0.01$, what is the next forecast?"
        },
        "hint": {
          "vi": "Kỳ vọng nhiễu bằng không.",
          "en": "Expected noise is zero."
        },
        "answer": {
          "vi": "$0.001+0.2\\times0.01=0.003$.",
          "en": "$0.001+0.2\\times0.01=0.003$."
        },
        "numeric": {
          "expected": 0.003,
          "tolerance": 1e-8
        }
      }
    ],
    "sources": [
      {
        "title": "Forecasting: Principles and Practice",
        "url": "https://otexts.com/fpp3/arima.html",
        "section": "9.1 Stationarity and differencing; 9.3 Autoregressive models; 9.8 Forecasting"
      }
    ]
  },
  {
    "id": "volatility",
    "moduleId": "statistics",
    "title": {
      "vi": "Mô hình biến động",
      "en": "Volatility models"
    },
    "summary": {
      "vi": "Phân biệt phương sai, độ lệch chuẩn và cập nhật dự báo rủi ro.",
      "en": "Distinguish variance and standard deviation and update risk forecasts."
    },
    "why": {
      "vi": "Cùng quy mô vị thế có thể mang rủi ro rất khác khi biến động đổi.",
      "en": "Identical position sizes can carry different risk as volatility changes."
    },
    "application": {
      "vi": "Ví dụ: bộ kiểm soát vị thế cập nhật biến động của một cặp crypto sau mỗi nến đã đóng. Khi mức biến động dự báo tăng, quy tắc giảm quy mô lệnh; trần vị thế vẫn được giữ để phòng dự báo quá thấp.",
      "en": "For example, a position controller updates a crypto pair’s volatility after each completed bar. Rising forecast volatility reduces order size, while a position cap remains in place against underestimation."
    },
    "prerequisites": [
      "risk",
      "time-series"
    ],
    "project": "risk-lab",
    "sections": [
      {
        "title": {
          "vi": "Biến động có điều kiện",
          "en": "Conditional volatility"
        },
        "body": {
          "vi": "Viết $r_t=\\mu_t+\\varepsilon_t$, với $r_t$ là lợi nhuận, $\\mu_t$ là kỳ vọng theo thông tin đã có và $\\varepsilon_t$ là phần bất ngờ. Phương sai có điều kiện $h_t=E[\\varepsilon_t^2\\mid\\mathcal F_{t-1}]$ đo bình phương bất ngờ dựa trên tập thông tin quá khứ $\\mathcal F_{t-1}$. Độ biến động $\\sigma_t=\\sqrt{h_t}$ cùng đơn vị lợi nhuận; phương sai có đơn vị bình phương.\n\nBiến động không cho biết hướng và không tóm tắt mọi rủi ro: phân phối cùng phương sai có thể khác xác suất lỗ cực lớn. Ghi tần suất và quy ước lợi nhuận. Trộn phần trăm với thập phân khiến phương sai lệch theo bình phương hệ số đổi đơn vị.",
          "en": "Write $r_t=\\mu_t+\\varepsilon_t$, where $r_t$ is return, $\\mu_t$ its expectation given available information, and $\\varepsilon_t$ the surprise. Conditional variance $h_t=E[\\varepsilon_t^2\\mid\\mathcal F_{t-1}]$ measures squared surprise using past information $\\mathcal F_{t-1}$. Volatility $\\sigma_t=\\sqrt{h_t}$ shares return units; variance has squared units.\n\nVolatility predicts no direction and summarizes only part of risk: equal-variance distributions may have different extreme-loss probabilities. Record frequency and return conventions. Mixing percentage and decimal inputs changes variance by the square of the conversion factor."
        }
      },
      {
        "title": {
          "vi": "Cập nhật EWMA",
          "en": "An EWMA update"
        },
        "body": {
          "vi": "Trung bình động trọng số mũ (EWMA) cập nhật $h_{t+1}=\\lambda h_t+(1-\\lambda)\\varepsilon_t^2$, với $0<\\lambda<1$. Đây là trung bình có trọng số giữa dự báo cũ và bình phương bất ngờ mới. Lặp phương trình cho thấy dữ liệu cũ nhận trọng số giảm theo lũy thừa $\\lambda$. Giá trị $\\lambda$ lớn phản ứng chậm hơn; không có giá trị tối ưu cho mọi thị trường.\n\nVới $h_t=0.0001$, $\\varepsilon_t=0.02$, $\\lambda=0.94$, ta có $h_{t+1}=0.000118$. Độ biến động mới $\\sqrt{0.000118}\\approx0.01086$. Đây là dự báo, không phải mức lỗ tối đa. Khởi tạo phương sai và ước lượng trung bình đều phải dùng dữ liệu đã biết.",
          "en": "An exponentially weighted moving average (EWMA) updates $h_{t+1}=\\lambda h_t+(1-\\lambda)\\varepsilon_t^2$, with $0<\\lambda<1$. It blends the old forecast and latest squared surprise. Repeated substitution shows older observations receive weights declining geometrically with $\\lambda$. A larger $\\lambda$ reacts more slowly; no value is optimal everywhere.\n\nWith $h_t=0.0001$, $\\varepsilon_t=0.02$, $\\lambda=0.94$, we obtain $h_{t+1}=0.000118$. New volatility is $\\sqrt{0.000118}\\approx0.01086$. This is a forecast, not a maximum loss. Variance initialization and mean estimation must use available data."
        }
      },
      {
        "title": {
          "vi": "GARCH và giới hạn",
          "en": "GARCH and limitations"
        },
        "body": {
          "vi": "GARCH(1,1) viết $h_{t+1}=\\omega+\\alpha\\varepsilon_t^2+\\beta h_t$, với $\\omega>0$, $\\alpha,\\beta\\geq0$. Nếu kỳ vọng phương sai hữu hạn không đổi là $v$, nhiễu chuẩn hóa có phương sai một và $\\alpha+\\beta<1$, lấy kỳ vọng được $v=\\omega+(\\alpha+\\beta)v$, nên $v=\\omega/(1-\\alpha-\\beta)$. Đây là phương sai dài hạn của mô hình, không bảo đảm thị trường không đổi chế độ.\n\nNhắm biến động bằng tỷ trọng nghịch đảo $\\sigma_t$ có thể làm vị thế bùng lên khi dự báo gần không. Cần sàn dự báo, trần vị thế và quy tắc dữ liệu thiếu. Quy đổi biến động bằng căn bậc hai thời gian cần giả định phù hợp về phương sai và hiệp phương sai; tương quan lợi nhuận hoặc biến động đổi làm phép đổi đơn giản thiếu chính xác.",
          "en": "GARCH(1,1) writes $h_{t+1}=\\omega+\\alpha\\varepsilon_t^2+\\beta h_t$, with $\\omega>0$, $\\alpha,\\beta\\geq0$. If finite constant expected variance is $v$, standardized innovations have unit variance, and $\\alpha+\\beta<1$, taking expectations yields $v=\\omega+(\\alpha+\\beta)v$, hence $v=\\omega/(1-\\alpha-\\beta)$. This is model long-run variance, not a guarantee against regime change.\n\nTargeting volatility with exposure inversely proportional to $\\sigma_t$ can explode position size near zero forecasts. Use a forecast floor, position cap, and missing-data rule. Square-root-of-time scaling needs suitable variance and covariance assumptions; correlated returns or changing volatility undermine simple scaling."
        }
      }
    ],
    "exercises": [
      {
        "id": "volatility-risk",
        "kind": "concept",
        "question": {
          "vi": "Hai phân phối lợi nhuận có cùng phương sai có nhất thiết cùng xác suất lỗ cực lớn không? Vì sao biến động không phải mức lỗ tối đa?",
          "en": "Must two return distributions with equal variance have the same extreme-loss probability? Why is volatility not a maximum loss?"
        },
        "hint": {
          "vi": "Phương sai chỉ tóm tắt bình phương độ lệch, không mô tả toàn bộ phân phối.",
          "en": "Variance summarizes squared deviations, not the entire distribution."
        },
        "answer": {
          "vi": "Không. Khối xác suất ở phần đuôi có thể khác dù phương sai bằng nhau. Độ biến động là căn phương sai, không phải giới hạn trên của độ lớn mọi kết quả; cú nhảy và sai số dự báo vẫn có thể gây lỗ lớn.",
          "en": "No. Tail probability can differ despite equal variance. Volatility is the square root of variance, not an upper bound on every outcome; jumps and forecast errors can still produce large losses."
        }
      },
      {
        "id": "volatility-ewma",
        "kind": "calculation",
        "question": {
          "vi": "Tính phương sai EWMA mới: $h=0.0001$, bất ngờ $0.02$, trọng số cũ $0.94$.",
          "en": "Compute updated EWMA variance: $h=0.0001$, surprise $0.02$, old weight $0.94$."
        },
        "hint": {
          "vi": "Bình phương bất ngờ trước.",
          "en": "Square the surprise first."
        },
        "answer": {
          "vi": "$0.94\\times0.0001+0.06\\times0.02^2=0.000118$.",
          "en": "$0.94\\times0.0001+0.06\\times0.02^2=0.000118$."
        },
        "numeric": {
          "expected": 0.000118,
          "tolerance": 1e-10
        }
      },
      {
        "id": "volatility-longrun",
        "kind": "calculation",
        "question": {
          "vi": "GARCH có $\\omega=0.000001$, $\\alpha=0.05$, $\\beta=0.9$. Phương sai dài hạn theo giả định là?",
          "en": "GARCH has $\\omega=0.000001$, $\\alpha=0.05$, $\\beta=0.9$. What is long-run variance under the assumptions?"
        },
        "hint": {
          "vi": "Không lấy căn khi hỏi phương sai.",
          "en": "Do not take a square root when asked for variance."
        },
        "answer": {
          "vi": "$0.000001/(1-0.05-0.9)=0.00002$.",
          "en": "$0.000001/(1-0.05-0.9)=0.00002$."
        },
        "numeric": {
          "expected": 0.00002,
          "tolerance": 1e-10
        }
      }
    ],
    "sources": [
      {
        "title": "arch — Univariate volatility modeling",
        "url": "https://arch.readthedocs.io/en/latest/univariate/univariate_volatility_modeling.html",
        "section": "Specifying Common Models: GARCH (with a Constant Mean); Student’s T Errors"
      }
    ]
  },
  {
    "id": "optimization",
    "moduleId": "statistics",
    "title": {
      "vi": "Tối ưu danh mục",
      "en": "Portfolio optimization"
    },
    "summary": {
      "vi": "Biến mục tiêu và giới hạn thành bài toán rồi kiểm tra độ nhạy của nghiệm.",
      "en": "Translate objectives and limits into a problem and examine solution sensitivity."
    },
    "why": {
      "vi": "Bộ tối ưu giải bài toán đã nhập; đầu vào sai có thể tạo vị thế cực đoan.",
      "en": "An optimizer solves the supplied problem; wrong inputs can produce extreme positions."
    },
    "application": {
      "vi": "Ví dụ: danh mục cổ phiếu tái cân bằng hàng tuần dùng hiệp phương sai từ dữ liệu quá khứ và giới hạn tỷ trọng từng mã. So tỷ trọng đề xuất với danh mục chia đều, sau phí và làm tròn lô, cho thấy tối ưu có thêm giá trị thực tế hay không.",
      "en": "For example, a weekly equity portfolio uses covariance estimated from past data and per-stock weight caps. Comparing proposed weights with equal weighting after fees and lot rounding tests whether optimization adds practical value."
    },
    "prerequisites": [
      "algebra",
      "calculus",
      "risk",
      "volatility"
    ],
    "project": "risk-lab",
    "sections": [
      {
        "title": {
          "vi": "Biến, mục tiêu và ràng buộc",
          "en": "Variables, objective, and constraints"
        },
        "body": {
          "vi": "Gọi $w$ là vector tỷ trọng, $\\mu$ là vector lợi nhuận kỳ vọng, $\\Sigma$ là ma trận hiệp phương sai. Lợi nhuận danh mục $r_p=w^Tr$, trong đó $r$ chứa lợi nhuận tài sản và $T$ ký hiệu chuyển vị. Tính tuyến tính cho $E[r_p]=w^T\\mu$; khai triển phương sai của tổng cho $\\operatorname{Var}(r_p)=w^T\\Sigma w$.\n\nBài toán phương sai nhỏ nhất là $\\min_w w^T\\Sigma w$, với tổng tỷ trọng bằng một và có thể thêm $w_i\\geq0$ để cấm bán khống. Ràng buộc nói điều được phép; mục tiêu xếp hạng các lựa chọn hợp lệ. Ma trận hiệp phương sai nửa xác định dương nghĩa là mọi dạng $z^T\\Sigma z\\geq0$; khi đó mục tiêu lồi. Tính lồi hỗ trợ tìm nghiệm toàn cục, không bảo đảm ước lượng đúng với tương lai.",
          "en": "Let $w$ be weights, $\\mu$ expected returns, and $\\Sigma$ the covariance matrix. Portfolio return is $r_p=w^Tr$, where $r$ contains asset returns and $T$ denotes transpose. Linearity gives $E[r_p]=w^T\\mu$; expanding the variance of a sum gives $\\operatorname{Var}(r_p)=w^T\\Sigma w$.\n\nMinimum variance solves $\\min_w w^T\\Sigma w$, subject to weights summing to one and optionally $w_i\\geq0$ to prohibit shorts. Constraints define permissible choices; the objective ranks them. Positive semidefiniteness means every quadratic form $z^T\\Sigma z\\geq0$; it makes the objective convex. Convexity supports global optimization, not a guarantee that estimates describe the future."
        }
      },
      {
        "title": {
          "vi": "Tự giải hai tài sản",
          "en": "Solve a two-asset case"
        },
        "body": {
          "vi": "Hai tài sản không tương quan có phương sai $a=0.04$, $b=0.09$, tỷ trọng $w$ và $1-w$. Khi đó $v(w)=aw^2+b(1-w)^2$. Đạo hàm $v'(w)=2aw-2b(1-w)$. Đặt bằng không được $w=b/(a+b)=9/13$. Đạo hàm bậc hai $v''(w)=2(a+b)>0$ xác nhận cực tiểu.\n\nTài sản ít biến động nhận tỷ trọng lớn hơn nhưng không phải toàn bộ vốn: tài sản kia vẫn giúp đa dạng hóa. Phương sai tối thiểu $ab/(a+b)\\approx0.0276923$. Nếu tương quan là $\\rho$, cần thêm $2w(1-w)\\rho\\sqrt{ab}$; bỏ tích chéo có thể đánh giá thấp rủi ro. Đây là đầu vào giả định để học suy diễn, không phải danh mục khuyến nghị.",
          "en": "Two uncorrelated assets have variances $a=0.04$, $b=0.09$, with weights $w$ and $1-w$. Then $v(w)=aw^2+b(1-w)^2$. Differentiate: $v'(w)=2aw-2b(1-w)$. Setting to zero gives $w=b/(a+b)=9/13$. The second derivative $v''(w)=2(a+b)>0$ confirms a minimum.\n\nThe less volatile asset receives more weight but not all capital: the other still diversifies. Minimum variance is $ab/(a+b)\\approx0.0276923$. With correlation $\\rho$, add $2w(1-w)\\rho\\sqrt{ab}$; omitting the cross term can understate risk. These hypothetical inputs teach the derivation, not a recommended allocation."
        }
      },
      {
        "title": {
          "vi": "Nghiệm toán và giao dịch",
          "en": "Solutions and trades"
        },
        "body": {
          "vi": "Ước lượng lợi nhuận kỳ vọng thường nhiễu; tối ưu theo một ước lượng cao bất thường có thể dồn vốn vào tài sản đó. Giới hạn tỷ trọng, hạn chế vòng quay và ước lượng hiệp phương sai ổn định hơn giúp kiểm soát nhưng không loại bỏ rủi ro mô hình. Triển khai cần phí tái cân bằng, lượng tối thiểu, quy mô lô và trạng thái ngừng giao dịch. Sau khi giải, kiểm tra tổng tỷ trọng, vi phạm ràng buộc, hội tụ và độ nhạy với thay đổi nhỏ của đầu vào. So ngoài mẫu với chia đều vốn; cải thiện mục tiêu trong mẫu có thể biến mất sau phí.",
          "en": "Expected-return estimates are noisy; optimizing around an unusually high estimate can concentrate capital in that asset. Weight caps, turnover limits, and more stable covariance estimates help but do not eliminate model risk. Implementation needs rebalancing fees, minimum quantities, lot sizes, and halt status. Check weight sums, constraint violations, convergence, and sensitivity to small input changes. Compare out of sample with equal weighting; in-sample improvements can disappear after costs."
        }
      }
    ],
    "exercises": [
      {
        "id": "optimization-correlation",
        "kind": "concept",
        "question": {
          "vi": "Chỉ biết phương sai của từng tài sản có đủ tính rủi ro danh mục không? Ma trận hiệp phương sai bổ sung thông tin gì?",
          "en": "Are individual asset variances sufficient to calculate portfolio risk? What information does the covariance matrix add?"
        },
        "hint": {
          "vi": "Xét việc các tài sản biến động cùng chiều hay ngược chiều.",
          "en": "Consider whether assets move together or in opposite directions."
        },
        "answer": {
          "vi": "Không. Phương sai riêng không mô tả mức biến động cùng nhau. Các phần tử ngoài đường chéo của ma trận ghi hiệp phương sai giữa tài sản; chúng quyết định các tích chéo trong phương sai danh mục và lợi ích đa dạng hóa.",
          "en": "No. Individual variances do not describe joint movement. Off-diagonal matrix entries record covariance between assets; they determine cross terms in portfolio variance and the diversification benefit."
        }
      },
      {
        "id": "optimization-weight",
        "kind": "calculation",
        "question": {
          "vi": "Hai tài sản không tương quan có phương sai $0.04$, $0.09$. Tỷ trọng tối thiểu phương sai của tài sản đầu?",
          "en": "Two uncorrelated assets have variances $0.04$, $0.09$. Minimum-variance weight of the first?"
        },
        "hint": {
          "vi": "Đạo hàm với tổng tỷ trọng bằng một.",
          "en": "Differentiate with weights summing to one."
        },
        "answer": {
          "vi": "$0.09/(0.04+0.09)=9/13\\approx0.6923077$.",
          "en": "$0.09/(0.04+0.09)=9/13\\approx0.6923077$."
        },
        "numeric": {
          "expected": 0.6923076923076923,
          "tolerance": 0.000001
        }
      },
      {
        "id": "optimization-check",
        "kind": "implementation",
        "question": {
          "vi": "Bộ giải báo thành công. Kiểm tra gì trước khi tạo lệnh?",
          "en": "A solver reports success. What checks precede orders?"
        },
        "hint": {
          "vi": "Nghiệm số chưa chắc thực thi được.",
          "en": "Numerical solutions need not be executable."
        },
        "answer": {
          "vi": "Kiểm tra ràng buộc, tỷ trọng, độ nhạy và dữ liệu. Chuyển tỷ trọng sang lượng theo vốn, giá, lô; tính phí và kiểm tra tiền/ký quỹ. Sau làm tròn kiểm tra lại giới hạn.",
          "en": "Check constraints, weights, sensitivity, and data. Convert weights to quantities using capital, prices, and lots; include fees and verify cash/margin. Recheck limits after rounding."
        }
      }
    ],
    "sources": [
      {
        "title": "Boyd and Vandenberghe — Convex Optimization",
        "url": "https://web.stanford.edu/~boyd/cvxbook/",
        "section": "Chapter 4, Convex optimization problems; quadratic optimization. Official free book."
      },
      {
        "title": "CVX Short Course — Portfolio optimization",
        "url": "https://www.cvxgrp.org/cvx_short_course/docs/applications/notebooks/portfolio_optimization.html",
        "section": "Portfolio allocation vector; Asset returns; Classical (Markowitz) portfolio optimization; Portfolio constraints"
      }
    ]
  },
  {
    "id": "ml",
    "moduleId": "statistics",
    "title": {
      "vi": "Học máy cho dự báo giao dịch",
      "en": "Machine learning for trading forecasts"
    },
    "summary": {
      "vi": "Nối đặc trưng, nhãn, mất mát và vị thế mà không nhầm chính xác với lợi nhuận.",
      "en": "Connect features, labels, loss, and positions without confusing accuracy with profit."
    },
    "why": {
      "vi": "Mô hình linh hoạt có thể học nhiễu và rò rỉ thay vì quan hệ hữu ích.",
      "en": "Flexible models can learn noise and leakage instead of useful relationships."
    },
    "application": {
      "vi": "Ví dụ: mô hình ridge dùng lợi nhuận trễ và biến động để dự báo lợi nhuận cổ phiếu phiên sau. Bộ chuẩn hóa chỉ học từ dữ liệu huấn luyện; dự báo được lưu riêng trước khi chuyển thành lệnh để phân biệt lỗi dự báo với chi phí thực thi.",
      "en": "For example, ridge uses lagged returns and volatility to forecast a stock’s next-session return. Scaling is fitted only on training data, and forecasts are saved before conversion to orders to separate prediction errors from execution costs."
    },
    "prerequisites": [
      "regression",
      "validation",
      "python"
    ],
    "project": "risk-lab",
    "sections": [
      {
        "title": {
          "vi": "Đặc trưng và nhãn",
          "en": "Features and labels"
        },
        "body": {
          "vi": "**Đặc trưng** $x_t$ là thông tin đầu vào có sẵn lúc dự báo; **nhãn** $y_t$ là kết quả muốn đoán. Ví dụ $x_t$ chứa lợi nhuận quá khứ và biến động đã ước lượng, còn $y_t$ là lợi nhuận kỳ tới. Mô hình $f_\\theta(x_t)$ có tham số $\\theta$ học bằng cách giảm hàm mất mát, chẳng hạn $(y_t-f_\\theta(x_t))^2$.\n\nMất mát đo dự báo theo tiêu chí chọn; không tự chứa phí, thanh khoản hoặc giới hạn vị thế. Dữ liệu thiếu, ngoại lệ và chuẩn hóa đều thuộc quy trình học. Chọn đặc trưng sau khi xem toàn bộ kết quả cũng là lựa chọn mô hình, cần nằm trong huấn luyện/xác thực. Chuẩn so sánh đơn giản giúp xác định mô hình có học thêm điều gì hữu ích.",
          "en": "**Features** $x_t$ are inputs available at prediction time; **label** $y_t$ is the target. For example, $x_t$ contains past returns and estimated volatility, while $y_t$ is next-period return. Model $f_\\theta(x_t)$ learns parameters $\\theta$ by reducing a loss such as $(y_t-f_\\theta(x_t))^2$.\n\nLoss measures forecasts under a chosen criterion; it does not automatically include fees, liquidity, or position limits. Missing values, outliers, and scaling belong to the learning procedure. Selecting features after viewing all outcomes is model selection and must remain within training/validation. A simple benchmark reveals whether the model adds useful information."
        }
      },
      {
        "title": {
          "vi": "Phạt hệ số bằng ridge",
          "en": "Penalize coefficients with ridge"
        },
        "body": {
          "vi": "Với dữ liệu tâm hóa bằng trung bình huấn luyện, ridge chọn vector $\\beta$ để giảm $L(\\beta)=\\|y-X\\beta\\|_2^2+\\lambda\\|\\beta\\|_2^2$. $X$ là ma trận đặc trưng, $y$ là nhãn, $\\|v\\|_2^2$ là tổng bình phương phần tử và $\\lambda\\geq0$ là mức phạt. Hệ số chặn được xử lý riêng, thường không phạt.\n\nĐạo hàm cho $-2X^T(y-X\\beta)+2\\lambda\\beta=0$, nên $(X^TX+\\lambda I)\\hat\\beta=X^Ty$, với $I$ là ma trận đơn vị. Khi $\\lambda>0$, ma trận bên trái khả nghịch trong bài toán hữu hạn này. Trong mã nên giải hệ thay vì tự tính nghịch đảo. Co hệ số có thể giảm nhạy với nhiễu nhưng thêm độ chệch; chọn $\\lambda$ bằng xác thực theo thời gian, không bằng kiểm tra cuối.",
          "en": "For data centered using training means, ridge chooses vector $\\beta$ to minimize $L(\\beta)=\\|y-X\\beta\\|_2^2+\\lambda\\|\\beta\\|_2^2$. Here $X$ is the feature matrix, $y$ labels, $\\|v\\|_2^2$ the sum of squared entries, and $\\lambda\\geq0$ the penalty. The intercept is handled separately, usually without penalization.\n\nDifferentiation gives $-2X^T(y-X\\beta)+2\\lambda\\beta=0$, hence $(X^TX+\\lambda I)\\hat\\beta=X^Ty$, where $I$ is the identity matrix. For $\\lambda>0$, the left matrix is invertible in this finite-dimensional problem. Code should solve the system rather than explicitly invert it. Shrinkage may reduce noise sensitivity but adds bias; select $\\lambda$ with chronological validation, not the final test."
        }
      },
      {
        "title": {
          "vi": "Chính xác không bằng lợi nhuận",
          "en": "Accuracy is not profit"
        },
        "body": {
          "vi": "Mô hình đúng hướng trong $60$ giao dịch, mỗi lần lãi $1$, và sai trong $40$ giao dịch, mỗi lần lỗ $2$, cho $60\\times1-40\\times2=-20$ trước phí. Tỷ lệ đúng không tính kích thước kết quả. Dự báo lợi nhuận tốt vẫn cần ngưỡng vào lệnh, quy mô và thời điểm khớp.\n\nQuy trình tối thiểu gồm chuẩn đơn giản, chia theo thời gian, tiền xử lý học từ quá khứ, tìm tham số trong xác thực rồi đánh giá cuối. Lưu dự báo trước khi chuyển thành lệnh để phân biệt lỗi mô hình với lỗi thực thi. Phức tạp hơn chỉ có giá trị nếu cải thiện ngoài mẫu đủ bù chi phí và độ khó vận hành.",
          "en": "A model gets direction right on $60$ trades earning $1$ each and wrong on $40$ trades losing $2$ each, giving $60\\times1-40\\times2=-20$ before fees. Accuracy ignores payoff sizes. Useful return forecasts still require entry thresholds, sizing, and execution timing.\n\nA minimal workflow includes a simple baseline, chronological splitting, preprocessing fitted on the past, validation-based tuning, and final evaluation. Preserve forecasts before conversion to orders to separate model and execution failures. Complexity adds value only when out-of-sample improvements justify costs and operational burden."
        }
      }
    ],
    "exercises": [
      {
        "id": "ml-payoff",
        "kind": "calculation",
        "question": {
          "vi": "Có $60$ lần lãi $1$, $40$ lần lỗ $2$. Tổng trước phí?",
          "en": "There are $60$ wins of $1$, $40$ losses of $2$. Total before fees?"
        },
        "hint": {
          "vi": "Cộng kết quả có dấu.",
          "en": "Sum signed outcomes."
        },
        "answer": {
          "vi": "$60-80=-20$.",
          "en": "$60-80=-20$."
        },
        "numeric": {
          "expected": -20,
          "tolerance": 0
        }
      },
      {
        "id": "ml-ridge",
        "kind": "calculation",
        "question": {
          "vi": "Ridge một hệ số: $X^TX=4$, $X^Ty=6$, $\\lambda=2$. Hệ số là?",
          "en": "One-coefficient ridge: $X^TX=4$, $X^Ty=6$, $\\lambda=2$. What is the coefficient?"
        },
        "hint": {
          "vi": "Giải hệ một ẩn.",
          "en": "Solve the scalar system."
        },
        "answer": {
          "vi": "$(4+2)\\hat\\beta=6$, nên $\\hat\\beta=1$.",
          "en": "$(4+2)\\hat\\beta=6$, so $\\hat\\beta=1$."
        },
        "numeric": {
          "expected": 1,
          "tolerance": 1e-8
        }
      },
      {
        "id": "ml-pipeline",
        "kind": "implementation",
        "question": {
          "vi": "So ridge với mô hình luôn dự báo bằng không thế nào?",
          "en": "How would you compare ridge with an always-zero forecast?"
        },
        "hint": {
          "vi": "Dùng cùng thời điểm và tách dự báo khỏi giao dịch.",
          "en": "Use identical times and separate forecasts from trades."
        },
        "answer": {
          "vi": "Chia theo thời gian, fit chuẩn hóa và mô hình trong huấn luyện, chọn phạt trong xác thực. Lưu dự báo ngoài mẫu để so sai số; sau đó áp dụng cùng quy tắc vị thế, phí đã khóa để so kết quả kinh tế.",
          "en": "Split chronologically, fit scaling/model on training data, and tune penalties on validation. Save out-of-sample predictions to compare errors; then use the same frozen position/cost rules to compare economics."
        }
      }
    ],
    "sources": [
      {
        "title": "scikit-learn — Linear models",
        "url": "https://scikit-learn.org/stable/modules/linear_model.html",
        "section": "1.1.2 Ridge regression and classification; regression objective"
      },
      {
        "title": "An Introduction to Statistical Learning with Python",
        "url": "https://www.statlearning.com/",
        "section": "Chapter 2, Statistical Learning; Chapter 6, Linear Model Selection and Regularization"
      }
    ]
  },
  {
    "id": "microstructure",
    "moduleId": "research",
    "title": {
      "vi": "Sổ lệnh và khớp lệnh",
      "en": "Order books and execution"
    },
    "summary": {
      "vi": "Đọc giá chào, độ sâu và ưu tiên để phân biệt giá nhìn thấy với giá thực thi.",
      "en": "Read quotes, depth, and priority to distinguish displayed from executable prices."
    },
    "why": {
      "vi": "Tín hiệu chỉ thành kết quả sau khi lệnh khớp với giá và lượng thực tế.",
      "en": "Signals become outcomes only through actual fill prices and quantities."
    },
    "application": {
      "vi": "Ví dụ: lệnh mua crypto lớn hơn lượng bán ở giá ask tốt nhất phải xét các mức giá tiếp theo. Bộ mô phỏng tính giá khớp theo lượng ở từng mức và kiểm tra độ trễ, thay vì mặc định toàn bộ lệnh nhận giá đầu sổ.",
      "en": "For example, a crypto buy larger than the quantity at the best ask must consider deeper price levels. A simulator computes quantity-weighted fills and checks latency instead of assuming the whole order receives the top-of-book price."
    },
    "prerequisites": [
      "market",
      "costs"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Giá tốt nhất và độ sâu",
          "en": "Best quotes and depth"
        },
        "body": {
          "vi": "Sổ lệnh giới hạn chứa yêu cầu chưa khớp theo giá và lượng. Bid tốt nhất $b$ là giá mua cao nhất, ask tốt nhất $a$ là giá bán thấp nhất. Spread $s=a-b$; giá giữa $m=(a+b)/2$. Với $b=99$, $a=100$, ta có $s=1$, $m=99.5$. Giá giữa là mốc phân tích, không phải lời hứa có thể giao dịch tại đó.\n\n**Độ sâu** là lượng chào tại các mức giá. Ảnh chụp chỉ mô tả thời điểm chụp: lệnh có thể hủy hoặc khớp trước khi yêu cầu của bạn đến. Chênh giá giữa sàn không tự tạo cơ hội có thể thực hiện; còn độ trễ, phí, chuyển tài sản và khả năng giao dịch đồng thời.",
          "en": "A limit order book contains unfilled requests by price and quantity. Best bid $b$ is the highest buying price; best ask $a$ the lowest selling price. Spread is $s=a-b$ and midpoint $m=(a+b)/2$. With $b=99$, $a=100$, we have $s=1$, $m=99.5$. Midpoint is a reference, not a promise of execution there.\n\n**Depth** is quoted quantity at price levels. A snapshot describes its capture time: orders can cancel or fill before your request arrives. Cross-venue price differences do not automatically create executable opportunities; delays, fees, transfers, and simultaneous execution matter."
        }
      },
      {
        "title": {
          "vi": "Lệnh chủ động và lệnh chờ",
          "en": "Aggressive and resting orders"
        },
        "body": {
          "vi": "Lệnh chủ động nhận thanh khoản đang có; lệnh chờ cung cấp thanh khoản nếu được đưa vào sổ. Lệnh giới hạn đặt giá mua tối đa hoặc giá bán tối thiểu, không bảo đảm khớp. Lệnh giới hạn có thể khớp ngay nếu giá vượt phía đối diện, nên limit không đồng nghĩa maker. Maker/taker mô tả vai trò tại lần khớp. Quy tắc ưu tiên do từng sàn quy định; Coinbase Markets được tham khảo có ưu tiên giá, hiển thị rồi thời gian. Mô phỏng lệnh chờ phải xét lượng đứng trước, hủy lệnh và giao dịch mới; chạm giá chưa bảo đảm lệnh của bạn khớp.",
          "en": "Aggressive orders take existing liquidity; resting orders supply it when posted. A limit order specifies a maximum buy price or minimum sale price, not a guaranteed fill. Limits can execute immediately when they cross the opposite side, so limit does not mean maker. Maker/taker describes the role at execution. Priority is venue-specific; the referenced Coinbase Markets rules include price, display, then time priority. Resting-order simulations need queue-ahead quantity, cancellations, and new trades; a touch does not guarantee your fill."
        }
      },
      {
        "title": {
          "vi": "Giá khớp bình quân",
          "en": "Average execution price"
        },
        "body": {
          "vi": "Giả sử bên bán có $2$ đơn vị tại $100$ và $3$ tại $101$, không đổi sổ lúc khớp. Mua chủ động $4$ đơn vị lấy $2$ tại mỗi mức, trả $402$ trước phí. Giá bình quân có trọng số $\\bar p=\\frac{\\sum_i q_i p_i}{\\sum_i q_i}=100.5$, với $q_i$ là lượng tại mức $p_i$.\n\nLệnh giới hạn mua tại $100$ chỉ có thể nhận ngay $2$ đơn vị trong ảnh này. Phần còn lại tùy chỉ dẫn hiệu lực: tiếp tục chờ hoặc hủy nếu điều kiện yêu cầu. Ví dụ giữ sổ cố định để học tính toán. Thực tế cần độ trễ, thay đổi sổ, khớp một phần và phản hồi lỗi; dữ liệu nến không đủ suy ra những yếu tố đó.",
          "en": "Suppose asks show $2$ units at $100$ and $3$ at $101$, with no book changes during execution. An aggressive buy of $4$ takes $2$ at each level and pays $402$ before fees. Weighted price is $\\bar p=\\frac{\\sum_i q_i p_i}{\\sum_i q_i}=100.5$, where $q_i$ is quantity at $p_i$.\n\nA buy limit at $100$ can immediately take only $2$ units in this snapshot. The remainder depends on time-in-force instructions: remain resting or cancel when required. The example freezes the book for arithmetic. Real execution needs latency, book changes, partial fills, and errors; bars cannot establish these details."
        }
      }
    ],
    "exercises": [
      {
        "id": "microstructure-touch",
        "kind": "concept",
        "question": {
          "vi": "Ảnh chụp sổ lệnh lúc bạn gửi yêu cầu có đủ bảo đảm lượng và giá còn nguyên khi yêu cầu đến sàn không?",
          "en": "Does an order-book snapshot at submission guarantee that quantities and prices remain unchanged when your request reaches the venue?"
        },
        "hint": {
          "vi": "Có thời gian trôi qua giữa chụp, gửi và nhận.",
          "en": "Time passes between capture, submission, and arrival."
        },
        "answer": {
          "vi": "Không. Lệnh đang chào có thể bị hủy hoặc được người khác khớp trong khoảng trễ. Ảnh chụp mô tả một thời điểm; mô phỏng cần xét thời gian đến và những thay đổi tiếp theo trước khi kết luận có thể thực thi.",
          "en": "No. Quoted orders may cancel or be filled by others during the delay. A snapshot describes one instant; simulation must consider arrival time and subsequent changes before concluding execution is feasible."
        }
      },
      {
        "id": "microstructure-limit",
        "kind": "concept",
        "question": {
          "vi": "Vì sao lệnh giới hạn có thể chịu phí taker?",
          "en": "Why can a limit order incur taker fees?"
        },
        "hint": {
          "vi": "Giá giới hạn có thể cho khớp ngay.",
          "en": "Its limit may permit immediate execution."
        },
        "answer": {
          "vi": "Nếu khớp với thanh khoản đã có, lệnh nhận thanh khoản. Giới hạn giá và vai trò maker/taker là hai thuộc tính khác nhau.",
          "en": "If it matches existing liquidity, it takes liquidity. Price limits and maker/taker roles are different attributes."
        }
      },
      {
        "id": "microstructure-vwap",
        "kind": "calculation",
        "question": {
          "vi": "Mua $2$ đơn vị tại $100$, $2$ tại $101$. Giá bình quân trước phí?",
          "en": "Buy $2$ units at $100$, $2$ at $101$. Average before fees?"
        },
        "hint": {
          "vi": "Tổng tiền chia lượng.",
          "en": "Divide consideration by quantity."
        },
        "answer": {
          "vi": "$(2\\times100+2\\times101)/4=100.5$.",
          "en": "$(2\\times100+2\\times101)/4=100.5$."
        },
        "numeric": {
          "expected": 100.5,
          "tolerance": 1e-8
        }
      }
    ],
    "sources": [
      {
        "title": "Coinbase Markets Trading Rules",
        "url": "https://www.coinbase.com/legal/trading_rules",
        "section": "1.2 Orders; 1.7 Matching Engine and Order Priority; venue-specific rules accessed 2026-11-23"
      }
    ]
  },
  {
    "id": "reproducibility",
    "moduleId": "research",
    "title": {
      "vi": "Nghiên cứu có thể tái lập",
      "en": "Reproducible research"
    },
    "summary": {
      "vi": "Lưu đủ dữ liệu, mã và cấu hình để tái tạo kết quả và giải thích thay đổi.",
      "en": "Preserve data, code, and configuration to recreate results and explain changes."
    },
    "why": {
      "vi": "Biểu đồ không chạy lại được chưa đủ làm căn cứ sửa hoặc triển khai hệ thống.",
      "en": "A chart that cannot be regenerated is insufficient for system changes or deployment."
    },
    "application": {
      "vi": "Ví dụ: sau khi nhà cung cấp sửa dữ liệu cổ phiếu, kết quả backtest thay đổi dù mã không đổi. So dấu băm dữ liệu, cấu hình và sổ giao dịch của hai lần chạy giúp xác định chênh lệch đến từ dữ liệu, phần mềm hay cách hạch toán.",
      "en": "For example, a backtest changes after a provider revises stock data even though the code is unchanged. Comparing data hashes, configurations, and trade ledgers across runs identifies whether the difference comes from data, software, or accounting."
    },
    "prerequisites": [
      "validation",
      "python",
      "data"
    ],
    "project": "research-backtest",
    "sections": [
      {
        "title": {
          "vi": "Kết quả phụ thuộc những gì?",
          "en": "What does a result depend on?"
        },
        "body": {
          "vi": "**Tái lập tính toán** ở đây nghĩa là chạy cùng dữ liệu và quy trình để có kết quả tương đương trong sai số đã định. **Kiểm chứng độc lập** bằng dữ liệu hoặc triển khai khác là việc khác, mạnh hơn ở một số mặt. Cùng mã chưa đủ nếu dữ liệu nhà cung cấp đã sửa. Mỗi lần chạy cần phiên bản mã, dấu nhận dạng dữ liệu, cấu hình, thư viện, múi giờ, lịch giao dịch và nguồn ngẫu nhiên. **Dấu băm** là chuỗi nhận dạng tính từ nội dung tệp: giúp phát hiện thay đổi, không chứng minh dữ liệu đúng hoặc được phép sử dụng.",
          "en": "**Computational reproducibility** here means rerunning the same data and procedure to obtain equivalent results within defined tolerance. **Independent verification** using other data or implementations is different and stronger in some respects. Identical code is insufficient when provider data have changed. Record code version, data identity, configuration, libraries, timezone, trading calendar, and randomness sources. A **hash** identifies file contents: it detects changes but does not prove correctness or usage permission."
        }
      },
      {
        "title": {
          "vi": "Gói một lần chạy",
          "en": "Package a run"
        },
        "body": {
          "vi": "Dùng mã lần chạy nối bản kê dữ liệu, cấu hình, dự báo, lệnh, khớp và báo cáo. Bản kê ghi nguồn, lúc tải, phạm vi, đơn vị, điều chỉnh giá, giấy phép và dấu băm. Giữ dữ liệu gốc bất biến trong phạm vi quyền sử dụng; làm sạch tạo bản mới có nhật ký. Lưu phụ thuộc phần mềm và lệnh chạy từ đầu đến cuối. Seed là giá trị khởi tạo bộ sinh số giả ngẫu nhiên; cố định nó kiểm soát một số ngẫu nhiên nhưng không bảo đảm giống nhau giữa phần cứng, thuật toán song song hoặc phiên bản. Nếu chấp nhận sai số số học, ghi dung sai và lý do thay vì yêu cầu mọi byte giống nhau.",
          "en": "Use a run identifier to link data manifest, configuration, predictions, orders, fills, and report. Record source, retrieval time, coverage, units, adjustments, license, and hashes. Keep immutable raw data within usage rights; cleaning creates logged versions. Save dependencies and the end-to-end command. A seed initializes a pseudorandom generator; fixing it controls some randomness but does not guarantee agreement across hardware, parallel algorithms, or versions. When numerical tolerance is acceptable, document it and its rationale rather than requiring identical bytes."
        }
      },
      {
        "title": {
          "vi": "Kiểm tra và hồ sơ kết luận",
          "en": "Checks and the research record"
        },
        "body": {
          "vi": "Bắt đầu bằng ví dụ tính tay: không giao dịch thì vốn giữ nguyên nếu không có dòng tiền hoặc lãi; mua bán cùng giá chỉ mất phí; đổi đơn vị tiền nhất quán không đổi tỷ suất sinh lợi. Sau đó kiểm tra thời gian, dữ liệu thiếu, khớp một phần và giới hạn vị thế. Chạy từ môi trường sạch, so sổ giao dịch và tổng kế toán trước biểu đồ. Báo cáo gồm giả thuyết, dữ liệu, lựa chọn quan trọng, kết quả ngoài mẫu, chi phí, trường hợp thất bại và giới hạn. Tái lập vẫn có thể lặp lại một lỗi kinh tế hoặc rò rỉ; nó giúp phát hiện sai sót, không thay thế thẩm định.",
          "en": "Begin with hand-checkable cases: no trading preserves equity absent cash flows or interest; same-price round trips lose only fees; consistent currency-unit conversion leaves returns unchanged. Then check timestamps, missing data, partial fills, and position limits. Rerun in a clean environment, comparing ledgers and accounting totals before charts. Report the hypothesis, data, material choices, out-of-sample results, costs, failures, and limits. Reproducibility may repeat an economic error or leakage; it helps investigate mistakes rather than replacing review."
        }
      }
    ],
    "exercises": [
      {
        "id": "reproducibility-data",
        "kind": "concept",
        "question": {
          "vi": "Cùng mã và seed nhưng kết quả đổi sau tải lại dữ liệu. Kiểm tra gì trước?",
          "en": "Results change with the same code and seed after redownloading data. What do you check first?"
        },
        "hint": {
          "vi": "Lịch sử có thể bị sửa.",
          "en": "History may be revised."
        },
        "answer": {
          "vi": "So dấu băm, lúc tải, số dòng, bản sửa, điều chỉnh giá và múi giờ. Cùng URL chưa chắc cùng nội dung. Sau đó xét môi trường và nguồn không xác định khác.",
          "en": "Compare hashes, retrieval time, row counts, revisions, adjustments, and timezones. The same URL need not mean identical data. Then inspect environment and other nondeterminism."
        }
      },
      {
        "id": "reproducibility-fees",
        "kind": "calculation",
        "question": {
          "vi": "Vốn $1000$, mua bán cùng giá, phí mỗi chiều $2$, không dòng tiền khác. Vốn cuối?",
          "en": "Equity $1000$, same-price round trip, fee $2$ per side, no other flows. Final equity?"
        },
        "hint": {
          "vi": "Chỉ phí đổi vốn.",
          "en": "Only fees change equity."
        },
        "answer": {
          "vi": "$1000-2-2=996$. Đây là kiểm thử kế toán.",
          "en": "$1000-2-2=996$. This is an accounting test."
        },
        "numeric": {
          "expected": 996,
          "tolerance": 1e-8
        }
      },
      {
        "id": "reproducibility-deliverable",
        "kind": "implementation",
        "question": {
          "vi": "Cần tệp nào để người khác chạy lại và đối chiếu backtest?",
          "en": "Which files allow another person to rerun and reconcile a backtest?"
        },
        "hint": {
          "vi": "Đầu vào, quy trình và đầu ra.",
          "en": "Inputs, procedure, and outputs."
        },
        "answer": {
          "vi": "Bản kê và hướng dẫn lấy dữ liệu hợp lệ; mã có phiên bản; cấu hình; khóa phụ thuộc; lệnh chạy; dự báo, sổ lệnh/khớp, tiền/vị thế; báo cáo và kiểm thử nhỏ. Nếu không được chia sẻ dữ liệu, ghi điều kiện truy cập và giới hạn tái lập.",
          "en": "Provide manifest and lawful retrieval instructions; versioned code; configuration; dependency lock; command; predictions, order/fill and cash/position ledgers; report and small tests. If data cannot be shared, state access conditions and reproducibility limits."
        }
      }
    ],
    "sources": [
      {
        "title": "The Turing Way — Reproducible Research",
        "url": "https://book.the-turing-way.org/reproducible-research/overview/",
        "section": "Overview; linked chapters on Version Control, Research Data Management, Reproducible Environments, and Code Testing"
      }
    ]
  }
];
