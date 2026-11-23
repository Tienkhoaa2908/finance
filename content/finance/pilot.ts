// Original instructional pilot. External references support the return concepts;
// the ledger, fee convention, scenarios, questions and explanations are authored here.
export const financePilot = {
  id: 'cash-flow-to-return',
  revision: '2026-11-23-pilot-1',
  title: {
    vi: 'Từ dòng tiền đến lãi, lỗ và tỷ suất sinh lời',
    en: 'From cash flows to profit, loss and return',
  },
  intro: {
    vi: 'Bài mẫu đang chờ bạn đánh giá độ sâu và cách học trước khi nhân rộng thành giáo trình. Bạn chỉ cần biết cộng, trừ, nhân, chia và phần trăm. Ta sẽ dựng một giao dịch giả định từ sổ tiền, giải thích từng ký hiệu, tự suy ra công thức rồi kiểm tra khi nào công thức dùng được. Bạn có thể dừng ở mỗi bước và viết cách hiểu của mình; không có lịch học hay thời lượng bắt buộc. Ví dụ do dự án tự xây, không phải dữ liệu thị trường hay gợi ý mua bán. Nguồn đính kèm hỗ trợ khái niệm lợi suất; sổ tiền, dẫn xuất có phí, câu hỏi và ví dụ được tự biên soạn, không phải trích lại bài tập của nguồn.',
    en: 'This pilot awaits your feedback on depth and learning experience before the curriculum is expanded. You need only addition, subtraction, multiplication, division and percentages. We build a hypothetical investment from its cash ledger, explain every symbol, derive its formula and examine when it applies. Pause at each step and write your reasoning; no fixed schedule or time limit is imposed. The examples are original teaching scenarios, not market data or trading recommendations. Linked sources support the return concepts; the ledger, fee-inclusive derivation, questions and examples are independently authored rather than reproduced source exercises.',
  },
  steps: [
    {
      id: 'position-and-boundary',
      title: { vi: '1. Xác định mình đang sở hữu gì', en: '1. Establish what you own' },
      body: {
        vi: String.raw`Một **tài sản tài chính** là một quyền hoặc lợi ích có giá trị kinh tế; ở bài này ta chỉ xét cổ phiếu. Một **cổ phiếu** biểu thị một phần quyền sở hữu trong doanh nghiệp. Khi mua cổ phiếu, bạn đổi tiền lấy quyền sở hữu đó. Tiền đã rời tài khoản nhưng không phải toàn bộ số tiền mua đã trở thành khoản lỗ: bạn vẫn giữ một tài sản. Muốn biết kết quả, phải theo dõi cả tiền và thứ đang sở hữu.

**Vị thế** là lượng tài sản đang nắm giữ. Ta ký hiệu số cổ phiếu là $q$ và chỉ xét $q>0$: bạn mua bằng tiền của mình rồi bán đúng số cổ phiếu đó. Không có vay tiền, bán tài sản đi vay hoặc mua thêm giữa chừng. **Kỳ nắm giữ** bắt đầu khi mua, kết thúc khi bán. Chỉ số $0$ đặt tên cho lúc đầu và $1$ đặt tên cho lúc cuối; chúng không nói rằng giao dịch kéo dài một ngày hay một năm.

Giá mua mỗi cổ phiếu là $P_0$; giá bán mỗi cổ phiếu là $P_1$. Chữ $P$ gợi nhớ từ “price”, còn chỉ số giúp phân biệt hai thời điểm. Trong tình huống xuyên suốt, $q=10$ cổ phiếu, $P_0=100$ USD cho mỗi cổ phiếu và $P_1=108$ USD cho mỗi cổ phiếu. USD là đô la Mỹ; tất cả khoản tiền của bài đều dùng cùng đơn vị này. Mười cổ phiếu giá 100 USD mỗi cổ phiếu cần $10\times100=1000$ USD tiền mua trước phí. Cần phân biệt **giá một đơn vị** với **giá trị cả vị thế**, nếu không sẽ trộn các đại lượng không cùng quy mô.

Trước khi tính, hãy xác định ranh giới: ta đo kết quả của riêng lần mua–giữ–bán này, không đo toàn bộ tài sản cá nhân. Tiền lương mới nhận hoặc tiền chuyển vào tài khoản môi giới không thuộc kết quả của vị thế. Một hệ thống nghiên cứu cần nêu ranh giới như vậy để người khác hiểu chính xác con số đang đo gì.`,
        en: String.raw`A **financial asset** is a right or interest with economic value; this lesson considers shares only. A **share** represents part ownership of a company. Buying shares exchanges cash for that ownership. Cash has left the account, but the entire purchase is not a loss: you still hold an asset. Measuring the outcome requires tracking both cash and what you own.

A **position** is the quantity of an asset you hold. We call the number of shares $q$ and consider only $q>0$: you buy with your own money and later sell exactly those shares. There is no borrowing, sale of borrowed shares or additional purchase. The **holding period** runs from purchase to sale. Subscript $0$ labels the beginning and $1$ labels the end; neither specifies a day or a year.

The purchase price per share is $P_0$ and the sale price is $P_1$. The letter $P$ stands for price; the subscripts distinguish times. Our continuing example has $q=10$ shares, $P_0=100$ USD per share and $P_1=108$ USD per share. USD means US dollars, the common currency of every amount here. Ten shares at 100 USD require $10\times100=1000$ USD before fees. A **unit price** and the **value of the whole position** describe different quantities.

Define the measurement boundary before calculating: this is the result of one purchase–hold–sale investment, not your entire personal wealth. Salary or money transferred into a brokerage account is outside this position's result. A research system must make that boundary explicit so another person can tell what its reported number measures.`,
      },
      question: { vi: 'Ngay sau khi mua 10 cổ phiếu giá 100 USD cho mỗi cổ phiếu, chưa xét phí, bạn có thể nói “tôi lỗ 1000 USD” không? Giải thích bằng tiền và tài sản.', en: 'Immediately after buying 10 shares at 100 USD each, ignoring fees, can you say “I lost 1000 USD”? Explain using both cash and assets.' },
      answer: { vi: 'Chưa thể nói như vậy. Tiền giảm 1000 USD nhưng vị thế tăng từ 0 lên 10 cổ phiếu. Nếu định giá ngay tại 100 USD cho mỗi cổ phiếu, tài sản nhận được có giá trị 1000 USD. Muốn đo lãi/lỗ phải so khoản thu hoặc giá trị còn lại với số tiền đã bỏ ra, không chỉ nhìn dòng tiền mua.', en: 'No. Cash falls by 1000 USD while the position rises from zero to ten shares. Valued immediately at 100 USD per share, the acquired asset is worth 1000 USD. Profit or loss compares proceeds or remaining value with the amount committed; the purchase outflow alone cannot establish it.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'signed-ledger',
      title: { vi: '2. Viết sổ dòng tiền trước khi tìm công thức', en: '2. Write the cash ledger before choosing a formula' },
      body: {
        vi: String.raw`**Dòng tiền** là khoản tiền thực đi vào hoặc đi ra trong một sự kiện. Ta chọn góc nhìn của người đầu tư: tiền nhận mang dấu cộng, tiền trả mang dấu trừ. Đây là quy ước ghi sổ, không phải quy tắc rằng mọi số âm đều là lỗ. Khoản mua cổ phiếu có dấu âm vì tiền đi ra; việc đó chưa cho biết cả giao dịch sẽ có lời hay không.

Gọi $F_0$ là tổng phí mua và $F_1$ là tổng phí bán, đều tính bằng USD cho toàn bộ lệnh, không phải USD cho mỗi cổ phiếu. Ta nhập chúng dưới dạng số không âm; dấu trừ được đặt ở dòng tiền. Nếu phí mua là 1 USD, ta viết $F_0=1$ rồi ghi dòng tiền $-1$, không nhập $F_0=-1$ và trừ thêm lần nữa. Trường hợp phí được báo theo phần trăm phải đổi thành số tiền trước khi dùng mô hình này.

Trong ví dụ, ở đầu kỳ có hai dòng: trả $10\times100=1000$ USD để mua và trả 1 USD phí. Tổng tiền ra là $-1001$ USD. Khi bán cuối kỳ, nhận $10\times108=1080$ USD rồi trả 1 USD phí bán, nên riêng hoạt động bán đem về 1079 USD. Mỗi dòng nên có ngày, loại sự kiện, số lượng, đơn giá, phí và đồng tiền. Việc tách riêng phí giúp kiểm tra dữ liệu và tránh giấu chi phí trong một con số giá chưa giải thích.

**Tổng vốn bỏ ra ban đầu**, gọi là $C_0$, là độ lớn dương của tiền ra lúc mua: $C_0=qP_0+F_0$. Chữ $C$ ở đây chỉ một tên biến cho khoản vốn này. Ta chủ động dùng vốn có cả phí mua để tính hiệu quả trên số tiền thực đã bỏ ra. Đây là quy ước đo lường của bài, không phải định nghĩa giá vốn phục vụ khai thuế.`,
        en: String.raw`A **cash flow** is money actually entering or leaving at an event. From the investor's perspective, receipts are positive and payments are negative. This is a recording convention, not a rule that every negative entry is a loss. A share purchase is negative because money leaves; that alone says nothing about the investment's final profitability.

Let $F_0$ be the total purchase fee and $F_1$ the total sale fee. Both are USD for the whole order, not USD per share. Enter them as nonnegative amounts and apply the minus sign in the ledger. For a 1 USD purchase fee, set $F_0=1$ and record a cash flow of $-1$. Do not enter $F_0=-1$ and subtract it again. A percentage fee must first be converted into its monetary amount.

Our initial entries are a $10\times100=1000$ USD share purchase and a 1 USD fee, totaling $-1001$ USD. At the end, selling yields $10\times108=1080$ USD, then the 1 USD sale fee leaves 1079 USD from the sale itself. Each entry should identify its date, event, quantity, unit price, fee and currency. Recording fees separately makes the data auditable and avoids hiding costs inside an unexplained price.

The **initial cash outlay**, denoted $C_0$, is the positive magnitude of the purchase outflow: $C_0=qP_0+F_0$. Here $C$ is simply a name for this amount. We deliberately include the purchase fee to measure performance against cash actually committed. This is the lesson's measurement convention, not a definition of tax cost basis.`,
      },
      question: { vi: 'Nếu sổ ghi phí mua là −1 USD, giá trị F₀ bạn nhập vào công thức C₀ = qP₀ + F₀ phải là −1 hay +1? Vì sao?', en: 'If the ledger shows a purchase fee of −1 USD, should F₀ in C₀ = qP₀ + F₀ be −1 or +1? Why?' },
      answer: { vi: 'F₀ phải bằng +1 USD vì biến này lưu độ lớn của phí. Dòng tiền phí mới mang dấu −1 USD. Vốn bỏ ra là 1000 + 1 = 1001 USD; dùng −1 sẽ khiến phí làm giảm vốn cần có, trái với giao dịch thực.', en: 'F₀ is +1 USD because the variable stores the fee amount. Its cash-flow entry is −1 USD. The outlay is 1000 + 1 = 1001 USD; entering −1 would make paying a fee reduce the required cash, contradicting the transaction.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'income-and-ending-cash',
      title: { vi: '3. Giá bán chưa phải toàn bộ tiền thu về', en: '3. Sale proceeds are not necessarily the entire receipt' },
      body: {
        vi: String.raw`Một cổ phiếu có thể tạo ra tiền trả cho người nắm giữ bên cạnh việc thay đổi giá. **Cổ tức bằng tiền** là khoản doanh nghiệp phân phối bằng tiền cho cổ đông đủ điều kiện. Bài này giả định mỗi cổ phiếu nhận tổng cộng $D=2$ USD trong kỳ. $D$ là tiền trên một cổ phiếu, không phải tỷ lệ phần trăm; tổng tiền cổ tức của vị thế là $qD=10\times2=20$ USD. Không mặc định mọi cổ phiếu đều trả cổ tức.

Để giữ bài toán rõ, ta giả định khoản cổ tức được giữ bằng tiền, không dùng mua thêm cổ phiếu và không sinh lãi. Có thể hình dung nó được trả ngay trước khi bán. Vì vậy số cổ phiếu vẫn là 10. Nếu tái đầu tư cổ tức, tức lấy tiền đó mua thêm cổ phiếu, số lượng cuối kỳ sẽ thay đổi và mô hình hiện tại cần được sửa. Ta cũng chưa xét thuế, đổi tiền tệ hoặc cổ phiếu bị chia/tách làm đổi số lượng.

Gọi $C_1$ là tổng tiền còn lại từ vị thế sau khi đã bán hết và trả phí bán, có tính cả cổ tức đang giữ. Ta nhận $qP_1$ từ bán cổ phiếu, cộng $qD$ từ cổ tức, rồi trừ $F_1$: $C_1=qP_1+qD-F_1$. Trong ví dụ, $C_1=1080+20-1=1099$ USD. Khoản 1099 gồm tiền thu hồi vốn và phần tăng thêm; chưa thể gọi toàn bộ 1099 USD là lợi nhuận.

Hai nguồn tham khảo của bài giải thích lợi suất nắm giữ và việc tính thêm thu nhập phân phối. Phần mở rộng về phí và sổ tiền ở đây do dự án tự dựng dưới các giả định đã nêu. Nguồn hỗ trợ khái niệm, không xác nhận số liệu giả định này là giao dịch thực.`,
        en: String.raw`A share may provide cash to its holder as well as changing price. A **cash dividend** is money distributed by a company to eligible shareholders. Our scenario assumes total dividends of $D=2$ USD per share during the period. $D$ is an amount per share, not a percentage; the position receives $qD=10\times2=20$ USD. Not every share pays a dividend.

To keep the model explicit, this cash is held without interest and is not used to buy more shares. You may picture payment immediately before the sale. The share quantity therefore remains ten. **Reinvestment** would mean buying additional shares with the dividend, changing the ending quantity and requiring a different ledger. Taxes, currency conversion and share splits that alter quantity are also outside this example.

Let $C_1$ be the cash remaining from the position after selling all shares and paying the sale fee, including the dividend cash held. The sale contributes $qP_1$, dividends add $qD$, and the fee removes $F_1$: $C_1=qP_1+qD-F_1$. Here, $C_1=1080+20-1=1099$ USD. That amount includes both recovered capital and any gain; the entire 1099 USD is not profit.

The lesson's two references support the concepts of holding-period return and distributed income. The fee-inclusive ledger and its assumptions are original teaching extensions. The references do not certify this hypothetical scenario as a real transaction.`,
      },
      question: { vi: 'Vì sao chỉ lấy 1080 USD tiền bán làm C₁ sẽ sai trong ví dụ? Nếu lấy 1100 USD thì còn thiếu điều gì?', en: 'Why is using the 1080 USD sale receipt as C₁ wrong here? What is still missing if you use 1100 USD?' },
      answer: { vi: '1080 bỏ sót 20 USD cổ tức và chưa trừ 1 USD phí bán. Cộng cổ tức được 1100 USD trước phí bán; sau phí còn 1099 USD. Phí mua không trừ lại trong C₁ vì đã nằm trong C₀; nó được tính khi so hai khoản.', en: '1080 omits the 20 USD dividend and does not subtract the 1 USD sale fee. Adding the dividend gives 1100 USD before that fee, leaving 1099 USD afterward. The purchase fee is already in C₀ and must not be subtracted again from C₁.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'derive-profit',
      title: { vi: '4. Tự suy ra công thức lãi và lỗ', en: '4. Derive the profit-and-loss formula' },
      body: {
        vi: String.raw`**Lãi/lỗ**, thường viết là **P&L** từ “profit and loss”, là chênh lệch tiền thu về với vốn đã bỏ ra trong ranh giới đang xét. P&L dương là lãi, âm là lỗ, bằng không là hòa vốn. Trong ví dụ đã bán hết vị thế, mọi khoản đều đã thành tiền; ta so $C_1$ với $C_0$. Định nghĩa và sổ tiền cho:

$$\mathrm{P\&L}=C_1-C_0=(qP_1+qD-F_1)-(qP_0+F_0).$$

Dấu trừ trước ngoặc thứ hai tác động tới cả tiền mua và phí mua. Bỏ ngoặc, ta được $qP_1+qD-F_1-qP_0-F_0$. Gom ba hạng có chung $q$ bằng quy tắc phân phối của phép nhân cho kết quả:

$$\mathrm{P\&L}=q(P_1-P_0+D)-F_0-F_1.$$

Từng phần có ý nghĩa riêng. $q(P_1-P_0)$ là lãi/lỗ do chênh lệch giá trên số cổ phiếu đang giữ. $qD$ là tiền phân phối nhận được. $F_0+F_1$ là tổng hai khoản phí làm giảm kết quả. Ta không giả định công thức vì nó “trông quen”; ta có thể quay lại từng dòng tiền để giải thích mọi dấu cộng/trừ.

Kiểm tra **đơn vị** cũng là một cách tìm lỗi. $P_1-P_0+D$ có đơn vị USD cho mỗi cổ phiếu. Nhân với $q$ có đơn vị cổ phiếu sẽ ra USD; do đó nó có thể trừ các phí tính bằng USD. Biểu thức $P_1-P_0+D-F_0-F_1$ sẽ trộn tiền mỗi cổ phiếu với phí cả lệnh nếu $q$ khác 1. Đây là dẫn xuất bằng đại số từ mô hình đã chọn, không phải định lý khẳng định mọi sản phẩm tài chính đều tuân cùng sổ tiền.`,
        en: String.raw`**Profit and loss**, abbreviated **P&L**, is the difference between cash recovered and cash committed within the stated boundary. Positive P&L is a profit, negative P&L is a loss, and zero means break-even. With the whole position sold, all amounts are cash, so compare $C_1$ with $C_0$:

$$\mathrm{P\&L}=C_1-C_0=(qP_1+qD-F_1)-(qP_0+F_0).$$

The minus sign before the second bracket applies to both the purchase price and its fee. Removing brackets yields $qP_1+qD-F_1-qP_0-F_0$. Factoring $q$ out of the three terms that contain it gives:

$$\mathrm{P\&L}=q(P_1-P_0+D)-F_0-F_1.$$

Each part has an interpretation: $q(P_1-P_0)$ is the price-change gain or loss, $qD$ is distributed cash, and $F_0+F_1$ is the combined cost reducing the result. We have not selected a formula merely because it looks familiar; every sign traces back to an event.

Checking **units** helps detect errors. $P_1-P_0+D$ is USD per share. Multiplication by $q$ shares produces USD, which can be compared with the USD fees. Writing $P_1-P_0+D-F_0-F_1$ mixes per-share amounts with whole-order fees when $q$ differs from one. This is an algebraic derivation from our model, not a theorem that every financial instrument has the same cash flows.`,
      },
      question: { vi: 'Bạn thấy công thức q(P₁ − P₀ + D − F₀ − F₁). Hãy chỉ ra khoản nào bị tính sai nếu F₀ và F₁ là phí cả lệnh và q = 10.', en: 'Consider q(P₁ − P₀ + D − F₀ − F₁). Which amounts are wrong if F₀ and F₁ are whole-order fees and q = 10?' },
      answer: { vi: 'Công thức này nhân cả hai phí với 10, trong khi mỗi phí chỉ phát sinh một lần cho cả lệnh. Với phí 1 USD mỗi bên, nó trừ 20 USD thay vì 2 USD. Đặt phí ngoài ngoặc: q(P₁ − P₀ + D) − F₀ − F₁. Chỉ được đưa phí vào ngoặc nếu đã chia chúng cho q và gọi rõ đó là phí mỗi cổ phiếu.', en: 'It multiplies each whole-order fee by ten even though each is paid once. With 1 USD on each side, it subtracts 20 USD instead of 2 USD. Use q(P₁ − P₀ + D) − F₀ − F₁. Fees could appear inside only after dividing them by q and explicitly expressing them per share.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'return-denominator',
      title: { vi: '5. Tỷ suất sinh lời trả lời câu hỏi nào?', en: '5. What question does a return answer?' },
      body: {
        vi: String.raw`Lãi 98 USD chưa cho biết bạn đã cần bỏ ra bao nhiêu vốn. Cùng 98 USD ấy có ý nghĩa khác khi số tiền ban đầu là 1001 USD hoặc 10010 USD. **Tỷ suất sinh lời** dùng phép chia để đo phần lãi/lỗ trên mỗi đơn vị vốn ban đầu. Ta chọn **lợi suất đơn trong kỳ nắm giữ sau phí**, ký hiệu $R$, theo quy ước vốn thực bỏ ra:

$$R=\frac{\mathrm{P\&L}}{C_0}=\frac{q(P_1-P_0+D)-F_0-F_1}{qP_0+F_0}.$$

Tử số là phần tăng/giảm, mẫu số là mốc vốn ban đầu. Vì cả hai tính bằng USD, đơn vị tiền triệt tiêu: $R$ là một tỷ lệ không mang đơn vị tiền. $R=0.10$ nghĩa là lãi 0.10 USD trên mỗi 1 USD vốn đầu kỳ, hay 10%. Muốn chuyển số thập phân sang phần trăm, nhân với 100. Ta cần $C_0>0$; chia cho vốn bằng không không tạo ra một lợi suất có nghĩa trong mô hình này.

Một cách viết tương đương là $R=C_1/C_0-1$. Thật vậy, $(C_1-C_0)/C_0=C_1/C_0-C_0/C_0$ và $C_0/C_0=1$. Tỷ số $C_1/C_0$ cho biết cuối kỳ có bao nhiêu lần vốn đầu kỳ; trừ 1 loại phần vốn gốc để chỉ còn tỷ lệ tăng/giảm. Không dùng $\mathrm{P\&L}/C_1$ nếu câu hỏi là hiệu quả trên vốn ban đầu: khi đó bạn đã đổi mốc so sánh.

Khi không có phí, không có cổ tức và số lượng không đổi, $q$ triệt tiêu và ta nhận $R=(P_1-P_0)/P_0$. Công thức quen thuộc ấy là trường hợp riêng. Đừng bỏ phí chỉ để làm biểu thức ngắn hơn. Đồng thời, $R$ của bài chỉ áp cho kỳ đã nêu; 10% trong một tuần và 10% trong một năm chưa phải cùng nhịp tăng trưởng. Bài này chưa chuyển lợi suất sang năm.`,
        en: String.raw`A profit of 98 USD does not tell you how much capital it required. The same profit means different things on 1001 USD and 10010 USD. A **return** divides the gain or loss by a stated capital base. We use a **net simple holding-period return**, denoted $R$, on actual initial cash outlay:

$$R=\frac{\mathrm{P\&L}}{C_0}=\frac{q(P_1-P_0+D)-F_0-F_1}{qP_0+F_0}.$$

The numerator measures the change; the denominator supplies the initial reference amount. Both are USD, so the currency units cancel: $R$ carries no currency unit. A value of $R=0.10$ means a gain of 0.10 USD per initial dollar, or 10%. Multiply a decimal return by 100 to express it as a percentage. We require $C_0>0$; dividing by zero does not define a meaningful return in this model.

Equivalently, $R=C_1/C_0-1$: the identity $(C_1-C_0)/C_0=C_1/C_0-C_0/C_0$ holds and $C_0/C_0=1$. The ratio $C_1/C_0$ measures ending cash as a multiple of initial cash; subtracting one removes the original capital. Using $\mathrm{P\&L}/C_1$ changes the comparison base and does not answer the same question.

With no fees, no dividends and a constant quantity, $q$ cancels to give $R=(P_1-P_0)/P_0$. That familiar expression is a special case. Do not discard costs merely to shorten it. Our $R$ also belongs to its stated holding period: 10% in a week and 10% in a year do not describe the same growth pace. Annualization is not covered here.`,
      },
      question: { vi: 'C₀ = 1001 USD và C₁ = 1099 USD. Vì sao 1099/1001 không phải phần trăm lãi? Vì sao $98/1099$ trả lời câu hỏi khác?', en: 'With C₀ = 1001 USD and C₁ = 1099 USD, why is 1099/1001 not the gain rate? Why does $98/1099$ answer a different question?' },
      answer: { vi: '1099/1001 ≈ 1.097902 là hệ số tiền cuối kỳ so với đầu kỳ, bao gồm 1 lần vốn gốc. Trừ 1 được tỷ lệ lãi ≈ 0.097902. Còn 98/1099 đo lãi như một phần của tiền cuối kỳ, không phải lãi trên vốn đã bỏ ra lúc đầu.', en: '1099/1001 ≈ 1.097902 is the ending-to-initial cash multiple, including one unit of original capital. Subtract one to obtain the gain rate ≈ 0.097902. The fraction 98/1099 instead measures profit as a share of ending cash, not of the cash initially committed.' },
      sourceIds: ['zivot-return'],
    },
    {
      id: 'worked-example',
      title: { vi: '6. Kiểm tra ví dụ bằng hai đường tính', en: '6. Check the example in two ways' },
      body: {
        vi: String.raw`Ta đã biết toàn bộ dữ kiện: mua 10 cổ phiếu ở 100 USD, bán ở 108 USD, nhận 2 USD cổ tức mỗi cổ phiếu, trả 1 USD phí mua và 1 USD phí bán. Đường tính thứ nhất bám sát sổ tiền: vốn đầu kỳ $C_0=10\times100+1=1001$ USD; tiền cuối kỳ $C_1=10\times108+10\times2-1=1099$ USD. Lấy tiền cuối trừ vốn đầu: $1099-1001=98$ USD.

Đường thứ hai giải thích nguồn tạo ra kết quả: mỗi cổ phiếu tăng 8 USD nên phần chênh lệch giá là $10\times8=80$ USD. Cổ tức đem thêm 20 USD. Trước phí, tổng tăng thêm là 100 USD; hai phí làm giảm 2 USD, còn 98 USD. Hai đường phải trùng nhau vì công thức đã được suy ra từ cùng sổ. Nếu không trùng, hãy tìm khoản bị bỏ sót, tính hai lần hoặc nhầm đơn vị trước khi nghi ngờ máy tính.

Lợi suất sau phí trên vốn đầu kỳ là:

$$R=\frac{98}{1001}\approx0.0979021=9.79021\%.$$

Ta giữ phân số $98/1001$ trong tính toán và chỉ làm tròn khi trình bày, chẳng hạn 9.79%. **Làm tròn** là thay một số bằng giá trị gần nó ở độ chính xác chọn trước; nó không thay định nghĩa đại lượng. Không làm tròn 1001 thành 1000 chỉ vì tiện chia: như thế là đổi vốn ban đầu, không chỉ làm gọn kết quả hiển thị.

Giá cổ phiếu tăng 8% nhưng lợi suất của ví dụ xấp xỉ 9.79%, vì cổ tức và phí cũng tham gia. Muốn đối chiếu hai báo cáo, cần hỏi chúng có tính cùng loại thu nhập, cùng chi phí, cùng mẫu số và cùng kỳ hay không. Một chênh lệch giữa hai con số chưa tự chứng minh báo cáo nào sai.`,
        en: String.raw`All inputs are now known: buy ten shares at 100 USD, sell at 108 USD, receive 2 USD per share in dividends, and pay a 1 USD fee at each end. The first calculation follows the ledger: $C_0=10\times100+1=1001$ USD and $C_1=10\times108+10\times2-1=1099$ USD. Their difference is $1099-1001=98$ USD.

The second calculation explains the result's components. The price gain is $10\times8=80$ USD. Dividends add 20 USD, producing 100 USD before fees. The two fees remove 2 USD, leaving 98 USD. Both methods must agree because the formula was derived from the same ledger. If they disagree, first look for omitted entries, double counting or inconsistent units.

The net return on initial cash is:

$$R=\frac{98}{1001}\approx0.0979021=9.79021\%.$$

Keep the fraction $98/1001$ in calculations and round only for display, for example to 9.79%. **Rounding** replaces a number with a nearby value at a chosen precision; it does not change the measured quantity. Replacing the denominator 1001 with 1000 for convenience changes initial capital rather than merely shortening the display.

The share price rose by 8%, while the position's net return is about 9.79%, because dividends and fees also matter. Before comparing reports, check their income, costs, denominator and period. Different numbers alone do not establish that either report is wrong.`,
      },
      question: { vi: 'Một người báo lợi suất 10% bằng (108 − 100 + 2)/100. Họ đã đo gì, và cần sửa những gì để khớp quy ước của bài?', en: 'Someone reports 10% using (108 − 100 + 2)/100. What did they measure, and what changes make it match this lesson?' },
      answer: { vi: 'Họ đo lợi suất có cổ tức nhưng chưa có phí, trên giá mua chưa có phí. Để khớp bài, tính ở cấp cả vị thế: lợi nhuận sau phí là 100 − 2 = 98 USD và vốn đầu kỳ có phí mua là 1001 USD; kết quả 98/1001 ≈ 9.79%. Không chỉ trừ hai USD trực tiếp khỏi con số 10% vì tiền và tỷ lệ khác đơn vị.', en: 'They measured the dividend-inclusive return before fees on a fee-exclusive purchase price. For this lesson, use whole-position net profit of 100 − 2 = 98 USD and initial outlay of 1001 USD, giving 98/1001 ≈ 9.79%. Do not subtract two USD directly from 10%: money and a rate have different units.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'counterexample',
      title: { vi: '7. Giá tăng nhưng bạn vẫn có thể lỗ', en: '7. A rising price can still leave a loss' },
      body: {
        vi: String.raw`Đổi ví dụ để kiểm tra câu “bán cao hơn mua thì chắc chắn có lời”. Vẫn mua 10 cổ phiếu ở 100 USD, nhưng bán ở 100.10 USD; lần này không có cổ tức và hai phí vẫn là 1 USD mỗi bên. Mỗi cổ phiếu tăng 0.10 USD, nên tổng lợi do giá tăng chỉ là $10\times0.10=1$ USD. Phí tổng cộng 2 USD lớn hơn phần tăng ấy: P&L là $1-2=-1$ USD. Giá tăng là điều kiện chưa đủ để có lãi sau phí.

Có thể kiểm tra lại bằng tiền: vốn đầu kỳ 1001 USD, bán được 1001 USD trước phí bán và còn 1000 USD sau phí. Chênh lệch $1000-1001=-1$ USD. Lợi suất là $-1/1001\approx-0.0999\%$. Dấu âm mô tả mất tiền so với vốn đầu; nó không nói giá cổ phiếu đã giảm.

**Giá hòa vốn** là mức giá bán làm P&L bằng không dưới những giả định đã chọn. Từ $q(P_1-P_0+D)-F_0-F_1=0$, chuyển hai phí sang vế phải, chia cho $q>0$ rồi chuyển các hạng còn lại:

$$P_1=P_0-D+\frac{F_0+F_1}{q}.$$

Với không cổ tức, giá hòa vốn của ví dụ là $100+2/10=100.20$ USD cho mỗi cổ phiếu. Với cổ tức 2 USD như ví dụ đầu, mức hòa vốn là 98.20 USD cho mỗi cổ phiếu. Đây là giá suy ra trong bài toán, không phải dự báo thị trường sẽ đến mức ấy. Nếu phí thay đổi theo giá hoặc khối lượng, phải mô tả quan hệ phí trước khi dùng phương trình; không cố coi mọi phí là cố định.`,
        en: String.raw`Test the claim “selling above the purchase price guarantees a profit.” Keep ten shares bought at 100 USD, but sell at 100.10 USD with no dividend and 1 USD fees at both ends. Each share gains 0.10 USD, so the position's price gain is only $10\times0.10=1$ USD. Total fees are 2 USD, leaving P&L of $1-2=-1$ USD. A price increase alone is insufficient for a net profit.

The ledger confirms it: initial outlay is 1001 USD; sale proceeds are 1001 USD before the sale fee and 1000 USD afterward. The difference is $1000-1001=-1$ USD, and return is $-1/1001\approx-0.0999\%$. The negative sign describes a loss relative to committed cash, not necessarily a falling share price.

The **break-even sale price** makes P&L zero under the chosen assumptions. Start from $q(P_1-P_0+D)-F_0-F_1=0$, move the fees to the other side, divide by $q>0$, and rearrange:

$$P_1=P_0-D+\frac{F_0+F_1}{q}.$$

Without dividends, break-even is $100+2/10=100.20$ USD per share. With the original 2 USD dividend, it is 98.20 USD per share. This is a conditional calculation, not a price forecast. If fees depend on price or quantity, specify that relationship before solving rather than pretending every fee is fixed.`,
      },
      question: { vi: 'Nếu không có phí, không cổ tức và P₁ = P₀, kết quả phải bằng bao nhiêu? Phép thử này phát hiện kiểu lỗi nào?', en: 'With no fees, no dividend and P₁ = P₀, what must the result be? What errors can this check expose?' },
      answer: { vi: 'P&L và R đều bằng 0 vì tiền thu về đúng bằng tiền đã bỏ ra. Nếu chương trình trả về 1 hoặc 100%, có thể nó đang hiển thị hệ số C₁/C₀ thay vì lợi suất C₁/C₀ − 1. Nếu trả giá trị khác, cần kiểm tra dấu, đơn vị và dữ liệu phí/cổ tức còn sót.', en: 'Both P&L and R must be zero because receipts equal outlay. An output of 1 or 100% may indicate that the program reports C₁/C₀ instead of C₁/C₀ − 1. Other discrepancies call for checking signs, units and unintended fee or dividend inputs.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'valuation-and-assumptions',
      title: { vi: '8. Phân biệt bán thật với định giá và kiểm tra giả định', en: '8. Distinguish a completed sale from a valuation' },
      body: {
        vi: String.raw`Đến đây, $P_1$ luôn là giá đã bán được. Nếu chưa bán, một mức giá hiển thị chỉ giúp **định giá** vị thế: ước tính nó đáng bao nhiêu tại thời điểm quan sát theo quy tắc chọn giá. Phần thay đổi giá của vị thế chưa đóng thường được gọi là **lãi/lỗ chưa thực hiện**. Khi đã bán, phần giá mua–giá bán được chốt theo giao dịch và được gọi là **lãi/lỗ đã thực hiện**. Tiền cổ tức đã nhận vẫn là tiền đã nhận, dù bạn chưa bán cổ phiếu.

Giả sử màn hình hiện 108 USD, nhưng chưa có giao dịch bán nào. Bạn có thể lập một ước tính với $P_1=108$ và phí bán dự kiến 1 USD, nhưng phải ghi rõ đó là kết quả **nếu bán được tại giá ấy**. **Giá khớp lệnh** là giá mà giao dịch thực sự xảy ra; nó có thể khác giá bạn quan sát trước đó. Vì vậy không ghi 1099 USD là tiền mặt thực có chỉ từ một ảnh chụp giá. Cần dữ liệu giao dịch hoặc một mô hình định giá được ghi nhãn rõ.

Kiểm tra thêm các giả định: số cổ phiếu không đổi; tất cả khoản tiền cùng đồng tiền; không vay, không thuế, không nộp/rút vốn giữa kỳ; cổ tức không sinh lãi và không tái đầu tư; giá chưa được điều chỉnh theo cách đã tính sẵn cổ tức. **Giá điều chỉnh** là chuỗi giá được nhà cung cấp biến đổi theo một quy tắc, có thể phản ánh cổ tức hoặc thay đổi số cổ phiếu. Nếu chuỗi đã phản ánh cổ tức mà bạn cộng $qD$ lần nữa, bạn có thể tính thu nhập hai lần; phải đọc định nghĩa của trường dữ liệu.

Nếu bạn nộp thêm 500 USD vào tài khoản, số dư tăng 500 USD không phải lãi của vị thế. Nếu dùng tiền vay, xuất hiện tiền vay và chi phí vay; cách chọn vốn để tính tỷ suất cũng thay đổi. Gặp các trường hợp này cần dựng lại sổ và định nghĩa phép đo, không tự thêm một con số vào công thức cũ.`,
        en: String.raw`So far, $P_1$ has been an achieved sale price. Before a sale, a displayed price supports a **valuation**: an estimate of the position's worth at an observation time under a chosen pricing rule. The price change on an open position is commonly called **unrealized P&L**. Once sold, the purchase-to-sale price result is **realized P&L**. A dividend already received remains a cash receipt even while the shares are still held.

Suppose a screen shows 108 USD but no sale has occurred. You may estimate the outcome using $P_1=108$ and an expected 1 USD sale fee, but label it conditional on selling at that price. An **execution price** is the price at which the trade actually takes place; it may differ from the earlier observation. A price screenshot cannot establish that 1099 USD of cash has actually been received.

Check the other assumptions: constant quantity, one currency, no debt or tax, no intermediate capital contributions or withdrawals, no interest on dividends and no reinvestment. Also check that prices do not already incorporate dividends. An **adjusted price** is a provider-transformed series that may account for distributions or changes in share quantity. Adding $qD$ to a dividend-adjusted calculation can count income twice. Read the field's methodology.

Depositing another 500 USD raises an account balance but is not position profit. Borrowing introduces borrowed principal and financing costs, and may change the relevant return denominator. Such cases require a new ledger and measurement definition, not an unexplained addition to the old formula.`,
      },
      question: { vi: 'Hai dòng dữ liệu ghi “giá cuối kỳ 108” và “nộp thêm 500”. Chúng có đủ để kết luận vị thế đã kiếm được 598 USD không? Bạn cần hỏi gì?', en: 'Two records say “ending price 108” and “deposit 500.” Do they establish that the position earned 598 USD? What must you ask?' },
      answer: { vi: 'Không. Khoản 500 USD là vốn bổ sung, không phải thu nhập do vị thế tạo ra. Cần hỏi đã bán chưa, giá 108 là giá khớp hay giá định giá, số lượng còn bao nhiêu, có cổ tức và phí nào, và đang đo riêng vị thế hay cả tài khoản. Nếu chỉ định giá, phải nêu cách định giá và phí bán đang là ước tính.', en: 'No. The 500 USD is added capital, not income generated by the position. Ask whether shares were sold, whether 108 is an execution or valuation price, what quantity remains, which dividends and fees occurred, and whether the measure concerns the position or the whole account. A valuation must disclose its pricing rule and estimated exit costs.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'independent-practice',
      title: { vi: '9. Tự lập sổ cho một tình huống mới', en: '9. Build a new ledger independently' },
      body: {
        vi: String.raw`Bây giờ hãy che lời giải và tự làm một tình huống khác. Bạn mua 5 cổ phiếu, giá 80 USD cho mỗi cổ phiếu, phí mua tổng cộng 2 USD. Trong kỳ nhận 1.50 USD cổ tức cho mỗi cổ phiếu, giữ bằng tiền không sinh lãi. Cuối kỳ bán toàn bộ ở 76 USD cho mỗi cổ phiếu và trả 3 USD phí bán. Không có khoản tiền nào khác, không vay, không thuế và không đổi tiền tệ. Các giá này là giá thực của giao dịch giả định, không phải chuỗi giá đã điều chỉnh.

Hãy viết các dòng tiền trước: tiền mua, phí mua, cổ tức, tiền bán và phí bán. Sau đó tìm vốn đầu kỳ và tiền cuối kỳ. Chỉ khi hai khoản ấy rõ ràng mới tính P&L và tỷ suất trên vốn đầu kỳ. Dùng một đường tính thứ hai bằng “chênh lệch giá + cổ tức − phí” để kiểm tra. Bạn có thể dùng máy tính để chia, nhưng cần tự giải thích dấu và đơn vị.

Cuối cùng, viết một đoạn ngắn trả lời: khoản cổ tức có bù hết phần giảm giá và phí không? Giá bán cần đạt mức nào để hòa vốn nếu các phí và cổ tức giữ nguyên? Mỗi phép tính phải nêu nó đang tính tiền cho một cổ phiếu hay cả vị thế. Nếu câu trả lời chỉ có một phần trăm mà không có sổ tiền, chưa đủ để người khác kiểm tra bạn đã tính khoản nào.

Bài tập này đánh giá khả năng áp dụng cùng lập luận vào dữ kiện mới. Việc xem lời giải rồi thấy nó hợp lý khác với tự dựng được lời giải. Nếu mắc lỗi, hãy lưu lại dòng khiến bạn nhầm và sửa nguyên nhân; không cần xóa dấu vết thử sai chỉ để có đáp án cuối đẹp.`,
        en: String.raw`Hide the solution and solve a changed scenario. Buy five shares at 80 USD each and pay a total purchase fee of 2 USD. Receive 1.50 USD in dividends per share and hold that cash without interest. Sell all shares at 76 USD each and pay a 3 USD sale fee. There are no other flows, borrowing, taxes or currency conversions. Prices are achieved prices in this hypothetical transaction, not adjusted historical prices.

First write the purchase, purchase fee, dividend, sale and sale fee entries. Then determine initial outlay and ending cash. Calculate P&L and return only after those amounts are clear. Independently check the result using price change plus dividends minus fees. A calculator may help with division, but explain each sign and unit yourself.

Finally, explain whether the dividend offsets the price decline and costs. Find the break-even sale price if dividends and fees stay fixed. State whether each amount concerns one share or the whole position. A percentage without a ledger does not let another person audit what was included.

This exercise asks you to apply the reasoning to new inputs. Recognizing a displayed solution is different from constructing it. If an error occurs, keep the mistaken step and explain its correction rather than erasing the learning evidence.`,
      },
      question: { vi: 'Lập sổ, tính C₀, C₁, P&L, R và giá hòa vốn. Sau đó giải thích bằng lời vì sao bạn lãi hoặc lỗ.', en: 'Build the ledger and compute C₀, C₁, P&L, R and the break-even sale price. Then explain why the result is a gain or loss.' },
      answer: {
        vi: String.raw`Sổ có tiền mua $-400$, phí mua $-2$, cổ tức $+7.50$, tiền bán $+380$, phí bán $-3$ USD. Vì vậy $C_0=402$ và $C_1=380+7.50-3=384.50$ USD. P&L là $384.50-402=-17.50$ USD. Kiểm tra theo thành phần: $5(76-80)+5\times1.50-2-3=-20+7.50-5=-17.50$ USD. $R=-17.50/402\approx-0.0435323=-4.35323\%$, làm tròn thành −4.35%. Cổ tức 7.50 USD không bù đủ 20 USD giảm giá và 5 USD phí. Giá hòa vốn là $80-1.50+(2+3)/5=79.50$ USD cho mỗi cổ phiếu. Kiểm tra: bán ở đó đem về $397.50+7.50-3=402$ USD, đúng bằng vốn đầu kỳ.`,
        en: String.raw`The entries are purchase $-400$, purchase fee $-2$, dividend $+7.50$, sale $+380$, and sale fee $-3$ USD. Thus $C_0=402$ and $C_1=380+7.50-3=384.50$ USD. P&L is $384.50-402=-17.50$ USD. The component check gives $5(76-80)+5\times1.50-2-3=-20+7.50-5=-17.50$ USD. Return is $R=-17.50/402\approx-0.0435323=-4.35323\%$, or −4.35% rounded. The 7.50 USD dividend cannot offset the 20 USD price loss plus 5 USD fees. Break-even price is $80-1.50+(2+3)/5=79.50$ USD per share. At that price, ending cash is $397.50+7.50-3=402$ USD, exactly matching the initial outlay.`,
      },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
    {
      id: 'research-record',
      title: { vi: '10. Biến phép tính thành một kiểm tra có thể lặp lại', en: '10. Make the calculation reproducible' },
      body: {
        vi: String.raw`Một **phép tính có thể lặp lại** là phép tính người khác có thể thực hiện lại từ dữ kiện, quy tắc và các bước đã ghi. Với bài này, bạn có thể dùng bảng tính hoặc một chương trình rất ngắn. Chưa cần học thư viện lập trình: hãy tạo sáu ô đầu vào có nhãn số cổ phiếu, giá mua, giá bán, cổ tức mỗi cổ phiếu, phí mua cả lệnh và phí bán cả lệnh. Ghi rõ đơn vị cạnh từng ô. Tạo bốn ô kết quả cho vốn đầu kỳ, tiền cuối kỳ, lãi/lỗ và tỷ suất.

Để kiểm tra bảng tính, nhập ví dụ đầu và yêu cầu nó ra 1001, 1099, 98 và khoảng 9.79%. Tiếp theo nhập bài tự làm và yêu cầu ra 402, 384.50, −17.50 và khoảng −4.35%. Cuối cùng thử trường hợp giá không đổi, không cổ tức, không phí: lãi/lỗ và tỷ suất phải bằng 0, còn vốn đầu kỳ và tiền cuối kỳ phải bằng nhau và dương. Những tình huống có đáp án đã biết này gọi là **ca kiểm tra**. Không nên chỉ kiểm tra một trường hợp có lãi, vì lỗi dấu hoặc lỗi trừ phí có thể lộ rõ hơn ở trường hợp lỗ.

Hãy lưu riêng dữ kiện và kết quả, kèm ngày bắt đầu/kết thúc giả định, quy tắc làm tròn, giả định về phí và cổ tức. Nếu sau này dùng dữ liệu thật, bổ sung nguồn, thời điểm lấy, đơn vị và cách nhà cung cấp định nghĩa từng cột. **Nguồn gốc dữ liệu** là thông tin giúp truy ngược một con số về nơi nó được cung cấp và các bước đã biến đổi nó. Một bảng tính đúng trên dữ liệu giả định không đảm bảo dữ liệu thật đã sạch hay giá của nó giao dịch được.

Sau bài này, mục tiêu là bạn giải thích và tính được kết quả của một vị thế đơn giản, tự phát hiện thiếu cổ tức, sai dấu phí hoặc sai mẫu số. Ta chưa dự báo lợi suất tương lai, đo rủi ro, chọn chiến lược hay chứng minh khả năng vận hành giao dịch thực. Viết lại điều bạn vẫn chưa hiểu là đầu vào để sửa bài mẫu, không phải dấu hiệu cần vội chuyển sang chủ đề mới.`,
        en: String.raw`A **reproducible calculation** can be repeated by another person using recorded inputs, rules and steps. Here a spreadsheet or a short program is sufficient. No programming library is required: create six labeled inputs for quantity, purchase price, sale price, dividend per share, whole-order purchase fee and whole-order sale fee. Put units beside them, then create four outputs for initial cash, ending cash, P&L and return.

Check the first example: outputs must be 1001, 1099, 98 and approximately 9.79%. Check the independent exercise: 402, 384.50, −17.50 and approximately −4.35%. Then try unchanged price, zero dividends and zero fees: P&L and return must be zero, while initial and ending cash must be equal and positive. These known-answer scenarios are **test cases**. Testing only profitable examples may miss sign or fee errors that become obvious in losses.

Keep inputs separate from outputs and record the hypothetical start/end dates, rounding rule and assumptions. Real data would also require its provider, retrieval time, units and field definitions. **Data provenance** is the information needed to trace a number to its source and transformations. Correct arithmetic on invented inputs cannot establish that real data are clean or their prices executable.

The goal is to explain and compute one simple position's result, spotting omitted dividends, incorrect fee signs and denominator mistakes. This does not yet teach forecasting, risk measurement, strategy selection or live operation. Record what remains unclear so the pilot can be improved before advancing.`,
      },
      question: { vi: 'Bảng tính của bạn chạy đúng cả ba ca kiểm tra. Bạn đã chứng minh chiến lược có lợi nhuận ngoài thị trường chưa? Hãy nêu điều đã kiểm tra và điều chưa kiểm tra.', en: 'Your spreadsheet passes all three tests. Have you established that a strategy is profitable in the market? State what was and was not checked.' },
      answer: { vi: 'Chưa. Ta kiểm tra phép ghi nhận tiền và tính tỷ suất ở ba tình huống xác định. Chưa có quy tắc chọn giao dịch, dữ liệu thị trường đã kiểm tra, giá khớp thực tế, phân tích rủi ro hay đánh giá trên những quan sát chưa dùng để xây phương pháp. Ba ca đúng cũng không chứng minh chương trình đúng cho mọi đầu vào; chúng là bằng chứng kiểm tra có phạm vi cụ thể.', en: 'No. We checked cash accounting and return arithmetic in three specified scenarios. We have not evaluated a trading rule, validated market data, actual executions, risk or observations not used to develop a method. Three passing cases also do not prove correctness for every possible input; their evidence has a defined scope.' },
      sourceIds: ['openstax-return', 'zivot-return'],
    },
  ],
  sources: [
    {
      id: 'openstax-return',
      title: 'OpenStax — Principles of Finance',
      url: 'https://openstax.org/books/principles-finance/pages/15-1-risk-and-return-to-an-individual-asset',
      section: '15.1, Individual Investment Realized Return: price change, dividend income and percentage return. External conceptual reference; examples in this pilot are original.',
    },
    {
      id: 'zivot-return',
      title: 'Eric Zivot — Return Calculations (24 June 2014)',
      url: 'https://faculty.washington.edu/ezivot/econ424/returnCalculations.pdf',
      section: '1.2, Asset Return Calculations; 1.2.1, Simple Returns. External conceptual reference; the fee-inclusive ledger convention is derived explicitly in this pilot.',
    },
  ],
};
