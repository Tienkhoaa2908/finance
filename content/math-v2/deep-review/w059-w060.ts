import {b, type ReviewedLesson} from './types';
const r=(text:string)=>String.raw({raw:[text]});
const reviewed:Record<string,ReviewedLesson>={
  'm2-w059-e1':{
    title:b('Prove the studentized Wald limit','Chứng minh giới hạn Wald studentize'),
    application:b(r('A consistent variance estimate replaces an unknown asymptotic scale, allowing normal quantiles to produce an interval with asymptotic repeated-sampling coverage.'),r('Ước lượng phương sai nhất quán thay thang tiệm cận chưa biết, cho phép dùng phân vị chuẩn để tạo khoảng có độ phủ lặp mẫu tiệm cận.')),
    formula:b(r('Assume $\\sqrt n(T_n-\\theta_0)\\Rightarrow N(0,V)$ for $V>0$ and $\\hat V_n\\to_P V$, with $\\hat V_n\\ge0$. Slutsky gives $Z_n=\\sqrt n(T_n-\\theta_0)/\\sqrt{\\hat V_n}\\Rightarrow N(0,1)$. For $z=z_{1-\\alpha/2}$, $T_n\\pm z\\sqrt{\\hat V_n/n}$ has coverage tending to $1-\\alpha$.'),r('Giả sử $\\sqrt n(T_n-\\theta_0)\\Rightarrow N(0,V)$ với $V>0$ và $\\hat V_n\\to_P V$, $\\hat V_n\\ge0$. Slutsky cho $Z_n=\\sqrt n(T_n-\\theta_0)/\\sqrt{\\hat V_n}\\Rightarrow N(0,1)$. Với $z=z_{1-\\alpha/2}$, khoảng $T_n\\pm z\\sqrt{\\hat V_n/n}$ có độ phủ tiến tới $1-\\alpha$.')),
    steps:[
      b(r('Consistency and continuity of square root give $\\sqrt{\\hat V_n}\\to_P\\sqrt V$, which is positive because V>0.'),r('Tính nhất quán và tính liên tục của căn bậc hai cho $\\sqrt{\\hat V_n}\\to_P\\sqrt V$, dương vì V>0.')),
      b(r('Divide the numerator limit $N(0,V)$ by the positive probability limit $\\sqrt V$; Slutsky yields $Z_n\\Rightarrow N(0,1)$.'),r('Chia giới hạn tử $N(0,V)$ cho giới hạn theo xác suất dương $\\sqrt V$; Slutsky cho $Z_n\\Rightarrow N(0,1)$.')),
      b(r('The interval contains $\\theta_0$ exactly when $|Z_n|\\le z_{1-\\alpha/2}$.'),r('Khoảng chứa $\\theta_0$ chính xác khi $|Z_n|\\le z_{1-\\alpha/2}$.')),
      b(r('The standard normal CDF is continuous at both endpoints, so the probability converges to $P(|N(0,1)|\\le z)=1-\\alpha$.'),r('Hàm phân phối chuẩn liên tục tại hai đầu mút, nên xác suất hội tụ tới $P(|N(0,1)|\\le z)=1-\\alpha$.')),
      b(r('This is asymptotic only; it inherits the estimator CLT, variance consistency, and any design or regularity premises used to establish them.'),r('Đây chỉ là kết quả tiệm cận; nó kế thừa CLT của ước lượng, tính nhất quán phương sai và mọi giả thiết thiết kế hay chính quy dùng để chứng minh chúng.'))
    ],
    primarySolution:[
      b(r('By continuous mapping, $\\hat V_n\\to_PV>0$ implies $\\sqrt{\\hat V_n}\\to_P\\sqrt V$.'),r('Theo ánh xạ liên tục, $\\hat V_n\\to_PV>0$ kéo theo $\\sqrt{\\hat V_n}\\to_P\\sqrt V$.')),
      b(r('Apply Slutsky to divide $\\sqrt n(T_n-\\theta_0)\\Rightarrow N(0,V)$ by this denominator; the studentized statistic tends to $N(0,1)$.'),r('Áp dụng Slutsky chia $\\sqrt n(T_n-\\theta_0)\\Rightarrow N(0,V)$ cho mẫu số này; thống kê studentize hội tụ tới $N(0,1)$.')),
      b(r('The Wald interval event is $|Z_n|\\le z_{1-\\alpha/2}$.'),r('Biến cố khoảng Wald là $|Z_n|\\le z_{1-\\alpha/2}$.')),
      b(r('Continuity of the limiting normal probability at the cutoffs gives limiting coverage $1-\\alpha$.'),r('Tính liên tục của xác suất chuẩn giới hạn tại các ngưỡng cho độ phủ giới hạn $1-\\alpha$.')),
      b(r('The statement does not prove the premises: the estimator CLT and consistency of $\\hat V_n$ still require model-specific evidence.'),r('Khẳng định này không chứng minh các tiền đề: CLT của ước lượng và tính nhất quán của $\\hat V_n$ vẫn cần bằng chứng theo mô hình.'))
    ],
    companions:[
      {prompt:b(r('An estimator of a delivery delay is $T_n=4.8$ hours at $n=400$, with estimated asymptotic variance $\\hat V_n=9$. Form the asymptotic 95% Wald interval using $z_{.975}=1.96$ and state the remaining inferential premise.'),r('Ước lượng độ trễ giao hàng là $T_n=4.8$ giờ tại $n=400$, với phương sai tiệm cận ước lượng $\\hat V_n=9$. Lập khoảng Wald 95% tiệm cận dùng $z_{.975}=1.96$ và nêu tiền đề suy luận còn cần.')),solution:[
        b(r('The estimated standard error is $\\sqrt{\\hat V_n/n}=\\sqrt{9/400}=3/20=0.15$ hours.'),r('Sai số chuẩn ước lượng là $\\sqrt{\\hat V_n/n}=\\sqrt{9/400}=3/20=0.15$ giờ.')),
        b(r('The margin is $1.96(0.15)=0.294$ hours.'),r('Biên sai số là $1.96(0.15)=0.294$ giờ.')),
        b(r('The interval is $4.8\\pm0.294=[4.506,5.094]$ hours; validity still needs an asymptotic normal limit and consistent variance estimate.'),r('Khoảng là $4.8\\pm0.294=[4.506,5.094]$ giờ; tính hợp lệ vẫn cần giới hạn chuẩn tiệm cận và ước lượng phương sai nhất quán.'))
      ]},
      {prompt:b(r('A proportion estimate is $T_n=0.62$ at $n=100$, with $\\hat V_n=1.44$. Construct a 90% Wald interval using $z_{.95}=1.645$ and explain why the interval need not have exact 90% coverage at n=100.'),r('Ước lượng tỷ lệ là $T_n=0.62$ tại $n=100$, với $\\hat V_n=1.44$. Lập khoảng Wald 90% dùng $z_{.95}=1.645$ và giải thích vì sao khoảng chưa chắc có độ phủ đúng 90% tại n=100.')),solution:[
        b(r('The standard error is $\\sqrt{1.44/100}=0.12$.'),r('Sai số chuẩn là $\\sqrt{1.44/100}=0.12$.')),
        b(r('The half-width is $1.645(0.12)=0.1974$, so the interval is approximately $[0.4226,0.8174]$.'),r('Nửa độ dài là $1.645(0.12)=0.1974$, nên khoảng xấp xỉ $[0.4226,0.8174]$.')),
        b(r('The theorem promises limiting coverage as n grows, not exact finite-sample calibration; discreteness, bias, or poor variance estimation can matter at n=100.'),r('Định lý hứa độ phủ giới hạn khi n tăng, không phải hiệu chuẩn chính xác hữu hạn mẫu; tính rời rạc, độ chệch hoặc ước lượng phương sai kém có thể quan trọng tại n=100.'))
      ]},
      {prompt:b(r('Suppose $\\sqrt n(T_n-\\theta_0)\\Rightarrow N(0,16)$ and $\\hat V_n\\to_P15.8$. What is the limiting law of the studentized statistic, and what changes if $\\hat V_n$ instead converges to 25?'),r('Giả sử $\\sqrt n(T_n-\\theta_0)\\Rightarrow N(0,16)$ và $\\hat V_n\\to_P15.8$. Luật giới hạn của thống kê studentize là gì, và điều gì đổi nếu $\\hat V_n$ hội tụ tới 25?')),solution:[
        b(r('If the variance estimate converges to 16, Slutsky gives a standard normal studentized limit.'),r('Nếu ước lượng phương sai hội tụ tới 16, Slutsky cho giới hạn studentize chuẩn tắc.')),
        b(r('Here it converges to 15.8 instead, so the limiting statistic is $N(0,16/15.8)$, not exactly $N(0,1)$.'),r('Ở đây nó hội tụ tới 15.8, nên thống kê giới hạn là $N(0,16/15.8)$, không chính xác là $N(0,1)$.')),
        b(r('If it converges to 25, the limit is $N(0,16/25)$; consistency for the actual asymptotic variance V is essential to standardization.'),r('Nếu nó hội tụ tới 25, giới hạn là $N(0,16/25)$; tính nhất quán với phương sai tiệm cận thật V là thiết yếu để chuẩn hóa.'))
      ]}
    ],
    reviewNote:'The variance estimate is for the root-n error, so the standard error of T_n is sqrt(Vhat_n/n). Studentization requires convergence to the same positive V appearing in the numerator CLT.',
    sourceIds:['p-mit18655']
  },
  'm2-w059-e2':{
    title:b('Calculate a sandwich Wald interval','Tính khoảng Wald sandwich'),
    application:b(r('A sandwich estimate of the variance of the root-n error must be divided by n before taking the standard error of the estimator.'),r('Ước lượng sandwich cho phương sai sai số căn-n phải chia cho n trước khi lấy sai số chuẩn của ước lượng.')),
    formula:b(r('If $\\hat V$ estimates $\\operatorname{Var}(\\sqrt n(\\hat\\theta-\\theta))$, then $\\widehat{\\operatorname{SE}}(\\hat\\theta)=\\sqrt{\\hat V/n}$ and the asymptotic 95% interval is $\\hat\\theta\\pm1.96\\sqrt{\\hat V/n}$. This uses a valid Wald approximation.'),r('Nếu $\\hat V$ ước lượng $\\operatorname{Var}(\\sqrt n(\\hat\\theta-\\theta))$, thì $\\widehat{\\operatorname{SE}}(\\hat\\theta)=\\sqrt{\\hat V/n}$ và khoảng 95% tiệm cận là $\\hat\\theta\\pm1.96\\sqrt{\\hat V/n}$. Điều này dùng xấp xỉ Wald hợp lệ.')),
    steps:[
      b(r('The sandwich variance $\\hat V$ is on the scale of $\\sqrt n(\\hat\\theta-\\theta)$, not directly the variance of $\\hat\\theta$.'),r('Phương sai sandwich $\\hat V$ ở thang $\\sqrt n(\\hat\\theta-\\theta)$, không trực tiếp là phương sai của $\\hat\\theta$.')),
      b(r('Divide by n to obtain estimated variance $\\hat V/n$ for $\\hat\\theta$, then take its square root.'),r('Chia cho n để được phương sai ước lượng $\\hat V/n$ của $\\hat\\theta$, rồi lấy căn bậc hai.')),
      b(r('For $\\hat\\theta=1.4$, $\\hat V=2.25$, and n=225, $\\operatorname{SE}=\\sqrt{2.25/225}=0.1$.'),r('Với $\\hat\\theta=1.4$, $\\hat V=2.25$ và n=225, $\\operatorname{SE}=\\sqrt{2.25/225}=0.1$.')),
      b(r('The margin is $1.96(0.1)=0.196$, giving $[1.204,1.596]$.'),r('Biên sai số là $1.96(0.1)=0.196$, cho khoảng $[1.204,1.596]$.'))
    ],
    primarySolution:[
      b(r('Since $\\hat V$ estimates variance of the root-n error, divide by n: $\\widehat{\\operatorname{SE}}=\\sqrt{2.25/225}=1.5/15=0.1$.'),r('Vì $\\hat V$ ước lượng phương sai sai số căn-n, chia cho n: $\\widehat{\\operatorname{SE}}=\\sqrt{2.25/225}=1.5/15=0.1$.')),
      b(r('The 95% normal margin is $1.96(0.1)=0.196$.'),r('Biên chuẩn 95% là $1.96(0.1)=0.196$.')),
      b(r('Add and subtract it from 1.4 to obtain $[1.204,1.596]$.'),r('Cộng và trừ giá trị này khỏi 1.4 để được $[1.204,1.596]$.')),
      b(r('Interpret this as an asymptotic interval only if the estimator has a valid normal limit and the sandwich estimate is consistent under the design.'),r('Chỉ diễn giải đây là khoảng tiệm cận nếu ước lượng có giới hạn chuẩn hợp lệ và ước lượng sandwich nhất quán theo thiết kế.'))
    ],
    companions:[
      {prompt:b(r('A treatment-effect estimate is $\\hat\\theta=0.35$ with $\\hat V=4$ for its root-n variance and $n=400$. Calculate the standard error and 95% Wald interval.'),r('Ước lượng hiệu ứng điều trị là $\\hat\\theta=0.35$, với $\\hat V=4$ cho phương sai căn-n và $n=400$. Tính sai số chuẩn và khoảng Wald 95%.')),solution:[
        b(r('The estimated variance of $\\hat\\theta$ is $4/400=0.01$.'),r('Phương sai ước lượng của $\\hat\\theta$ là $4/400=0.01$.')),
        b(r('Thus standard error is $\\sqrt{0.01}=0.1$ and the 95% margin is $1.96(0.1)=0.196$.'),r('Vậy sai số chuẩn là $\\sqrt{0.01}=0.1$ và biên 95% là $1.96(0.1)=0.196$.')),
        b(r('The interval is $0.35\\pm0.196=[0.154,0.546]$.'),r('Khoảng là $0.35\\pm0.196=[0.154,0.546]$.'))
      ]},
      {prompt:b(r('An estimator reports $\\hat\\theta=-2$, root-n variance estimate $\\hat V=16$, and sample size $n=64$. Form a 90% interval using $z_{.95}=1.645$.'),r('Ước lượng báo $\\hat\\theta=-2$, ước lượng phương sai căn-n $\\hat V=16$ và cỡ mẫu $n=64$. Lập khoảng 90% dùng $z_{.95}=1.645$.')),solution:[
        b(r('The standard error is $\\sqrt{16/64}=0.5$.'),r('Sai số chuẩn là $\\sqrt{16/64}=0.5$.')),
        b(r('The 90% margin is $1.645(0.5)=0.8225$.'),r('Biên 90% là $1.645(0.5)=0.8225$.')),
        b(r('The interval is $[-2.8225,-1.1775]$.'),r('Khoảng là $[-2.8225,-1.1775]$.'))
      ]},
      {prompt:b(r('A researcher mistakenly treats $\\hat V=9$ as the variance of $\\hat\\theta$ instead of the variance of $\\sqrt n(\\hat\\theta-\\theta)$; take n=100 and $\\hat\\theta=2$. Compute the correct and mistaken standard errors and explain the scale error.'),r('Nhà nghiên cứu nhầm xem $\\hat V=9$ là phương sai của $\\hat\\theta$ thay vì phương sai của $\\sqrt n(\\hat\\theta-\\theta)$; lấy n=100 và $\\hat\\theta=2$. Tính sai số chuẩn đúng và sai rồi giải thích lỗi thang đo.')),solution:[
        b(r('The correct variance of $\\hat\\theta$ is $9/100=0.09$, so correct standard error is 0.3.'),r('Phương sai đúng của $\\hat\\theta$ là $9/100=0.09$, nên sai số chuẩn đúng là 0.3.')),
        b(r('Treating 9 as the estimator variance gives mistaken standard error $\\sqrt9=3$.'),r('Xem 9 là phương sai ước lượng cho sai số chuẩn nhầm $\\sqrt9=3$.')),
        b(r('The error omits the root-n scaling conversion, inflating the standard error by factor $\\sqrt n=10$.'),r('Lỗi bỏ qua chuyển đổi thang căn-n, làm sai số chuẩn phóng đại hệ số $\\sqrt n=10$.'))
      ]}
    ],
    reviewNote:'All intervals assume Vhat estimates the asymptotic variance of the root-n error. If software instead reports the variance of theta-hat itself, dividing by n again would be incorrect.',
    sourceIds:['p-mit18655']
  },
  'm2-w059-e3':{
    title:b('Distinguish posterior credibility from confidence coverage','Phân biệt tính credible hậu nghiệm với độ phủ tin cậy'),
    application:b(r('A posterior statement conditions on the observed data and model; a confidence statement averages over repeated samples at a fixed true parameter.'),r('Khẳng định hậu nghiệm điều kiện theo dữ liệu và mô hình quan sát; khẳng định tin cậy lấy trung bình qua mẫu lặp tại tham số thật cố định.')),
    formula:b(r('A 95% posterior credible set satisfies $P(p\\in C(X)\\mid X)=.95$ under the posterior (up to construction convention). A nominal 95% confidence procedure targets $P_{p_0}(p_0\\in C(X))\\approx.95$ over repeated data at fixed $p_0$. Equality requires a calibration theorem for the chosen prior, model, and interval rule.'),r('Tập credible hậu nghiệm 95% thỏa $P(p\\in C(X)\\mid X)=.95$ theo hậu nghiệm (tùy quy ước dựng tập). Thủ tục khoảng tin cậy 95% danh nghĩa nhắm $P_{p_0}(p_0\\in C(X))\\approx.95$ qua dữ liệu lặp tại $p_0$ cố định. Đẳng thức cần định lý hiệu chuẩn cho prior, mô hình và quy tắc khoảng đã chọn.')),
    steps:[
      b(r('After observing X, the posterior distribution is a probability law for the unknown p conditional on both data and prior-model assumptions.'),r('Sau khi quan sát X, phân phối hậu nghiệm là luật xác suất của p chưa biết, có điều kiện theo dữ liệu và giả thiết mô hình-prior.')),
      b(r('A credible set is chosen so that posterior mass inside it is .95; this is a conditional probability statement for the realized dataset.'),r('Tập credible được chọn để khối lượng hậu nghiệm bên trong bằng .95; đây là xác suất có điều kiện cho bộ dữ liệu đã quan sát.')),
      b(r('Frequentist coverage fixes $p_0$ and repeats the sampling experiment, asking how often the random set contains that fixed truth.'),r('Độ phủ frequentist cố định $p_0$ và lặp thí nghiệm lấy mẫu, hỏi bao nhiêu lần tập ngẫu nhiên chứa giá trị thật cố định đó.')),
      b(r('The two probabilities average over different sources of randomness. Matching their 95% labels does not equate them; a theorem or design-specific calibration must establish equality or approximation.'),r('Hai xác suất lấy trung bình trên nguồn ngẫu nhiên khác nhau. Cùng nhãn 95% không làm chúng bằng nhau; cần định lý hoặc hiệu chuẩn theo thiết kế để chứng minh đẳng thức hay xấp xỉ.'))
    ],
    primarySolution:[
      b(r('A posterior credible interval C(X) contains 95% of posterior mass: $P(p\\in C(X)\\mid X)=.95$.'),r('Khoảng credible hậu nghiệm C(X) chứa 95% khối lượng hậu nghiệm: $P(p\\in C(X)\\mid X)=.95$.')),
      b(r('Frequentist coverage asks whether, for a fixed true $p_0$, repeated samples produce an interval containing it with probability about .95: $P_{p_0}(p_0\\in C(X))\\approx.95$.'),r('Độ phủ frequentist hỏi với $p_0$ thật cố định, mẫu lặp tạo khoảng chứa nó với xác suất xấp xỉ .95: $P_{p_0}(p_0\\in C(X))\\approx.95$.')),
      b(r('The first conditions on observed X and averages over posterior uncertainty; the second fixes the parameter and averages over future datasets.'),r('Khẳng định đầu điều kiện theo X quan sát và lấy trung bình bất định hậu nghiệm; khẳng định sau cố định tham số và lấy trung bình các bộ dữ liệu lặp.')),
      b(r('Their equality needs an additional calibration result for the selected prior, interval construction, and sampling model.'),r('Để chúng bằng nhau cần kết quả hiệu chuẩn bổ sung cho prior, cách dựng khoảng và mô hình lấy mẫu đã chọn.'))
    ],
    companions:[
      {prompt:b(r('With no Bernoulli observations and a uniform $\\operatorname{Beta}(1,1)$ prior, use the central interval $C=[.025,.975]$. Verify its posterior content and compute frequentist coverage at fixed $p_0=.5$ and $p_0=.99$.'),r('Khi chưa có quan sát Bernoulli và dùng prior đều $\\operatorname{Beta}(1,1)$, lấy khoảng trung tâm $C=[.025,.975]$. Kiểm tra khối lượng hậu nghiệm và tính độ phủ frequentist tại $p_0=.5$ và $p_0=.99$ cố định.')),solution:[
        b(r('With no data the posterior remains uniform, so interval mass is $.975-.025=.95$.'),r('Khi không có dữ liệu, hậu nghiệm vẫn đều, nên khối lượng khoảng là $.975-.025=.95$.')),
        b(r('The rule always returns this fixed interval; it contains $p_0=.5$, so repeated-sampling coverage there is 1.'),r('Quy tắc luôn trả khoảng cố định này; nó chứa $p_0=.5$, nên độ phủ lặp mẫu tại đó là 1.')),
        b(r('It excludes $p_0=.99$, so coverage there is 0. Posterior .95 content is therefore not uniform .95 coverage over p.'),r('Khoảng loại $p_0=.99$, nên độ phủ tại đó bằng 0. Khối lượng hậu nghiệm .95 vì vậy không phải độ phủ .95 đồng đều theo p.'))
      ]},
      {prompt:b(r('A Beta–Bernoulli analysis returns a posterior set containing .95 posterior mass after one observed dataset. State what probability that establishes and what repeated-sampling probability would be needed to claim a 95% confidence procedure at $p_0=.3$.'),r('Phân tích Beta–Bernoulli trả tập hậu nghiệm chứa khối lượng posterior .95 sau một bộ dữ liệu. Nêu xác suất điều này thiết lập và xác suất lặp mẫu nào cần có để tuyên bố thủ tục tin cậy 95% tại $p_0=.3$.')),solution:[
        b(r('The posterior statement is $P(p\\in C(X)\\mid X)=.95$ for this observed dataset under the specified prior and likelihood.'),r('Khẳng định hậu nghiệm là $P(p\\in C(X)\\mid X)=.95$ cho bộ dữ liệu quan sát dưới prior và likelihood đã chỉ định.')),
        b(r('Frequentist calibration instead asks for $P_{.3}(.3\\in C(X))$ over all datasets sampled repeatedly when p=.3.'),r('Hiệu chuẩn frequentist thay vào đó hỏi $P_{.3}(.3\\in C(X))$ qua mọi bộ dữ liệu lấy lặp khi p=.3.')),
        b(r('Only if this repeated-sampling probability is about .95 (or a theorem establishes the desired range) does the rule have nominal coverage at that value.'),r('Chỉ khi xác suất lặp mẫu này xấp xỉ .95 (hoặc định lý chứng minh miền mong muốn) thì quy tắc có độ phủ danh nghĩa tại giá trị ấy.'))
      ]},
      {prompt:b(r('Two procedures both label their output “95%”: procedure A satisfies posterior mass .95 conditional on data; procedure B has coverage .95 at every fixed $p_0$ in a stated parameter range. Identify the conditioning in each and what extra evidence would justify claiming they are the same set.'),r('Hai thủ tục đều ghi đầu ra là “95%”: thủ tục A có khối lượng hậu nghiệm .95 có điều kiện theo dữ liệu; thủ tục B có độ phủ .95 tại mọi $p_0$ cố định trong miền tham số nêu. Xác định điều kiện xác suất mỗi thủ tục và bằng chứng bổ sung để khẳng định chúng là cùng tập.')),solution:[
        b(r('A conditions on the observed data and averages with the posterior distribution over p.'),r('A điều kiện theo dữ liệu quan sát và lấy trung bình theo phân phối hậu nghiệm trên p.')),
        b(r('B fixes p0 and averages the random set over repeated sampling from the data model.'),r('B cố định p0 và lấy trung bình tập ngẫu nhiên qua lấy mẫu lặp từ mô hình dữ liệu.')),
        b(r('The shared nominal label does not prove set equality or matching probabilities; one needs an explicit derivation or calibration theorem linking the prior-based credible rule to frequentist sampling coverage.'),r('Nhãn danh nghĩa chung không chứng minh tập hay xác suất trùng nhau; cần suy diễn tường minh hoặc định lý hiệu chuẩn nối quy tắc credible dựa trên prior với độ phủ lấy mẫu frequentist.'))
      ]}
    ],
    reviewNote:'The no-data example is intentionally exact: a .95 posterior interval under a uniform prior has coverage 1 or 0 depending on the fixed truth. It demonstrates the logical distinction without asserting that all credible sets are miscalibrated.',
    sourceIds:['p-mit18655']
  },
  'm2-w059-e4':{
    title:b('Compute coverage loss after selecting the largest estimate','Tính mất độ phủ sau khi chọn ước lượng lớn nhất'),
    application:b(r('Selecting the estimate with the most extreme observed value changes the coverage event: the reported interval must contain the truth for every candidate estimate.'),r('Chọn ước lượng có giá trị quan sát cực đoan nhất làm đổi biến cố độ phủ: khoảng báo cáo phải chứa sự thật đối với mọi ước lượng ứng viên.')),
    formula:b(r('At true $\\theta=0$, let independent $Z_1,Z_2\\sim N(0,1)$, select $J=\\arg\\max_j|Z_j|$, and report $Z_J\\pm1.96$. Coverage is $P(\\max(|Z_1|,|Z_2|)\\le1.96)=[2\\Phi(1.96)-1]^2\\approx0.902508$. If the exact quantile $z_{.975}$ is used, coverage is exactly $.95^2=.9025$.'),r('Tại $\\theta=0$, cho $Z_1,Z_2\\sim N(0,1)$ độc lập, chọn $J=\\arg\\max_j|Z_j|$ và báo $Z_J\\pm1.96$. Độ phủ là $P(\\max(|Z_1|,|Z_2|)\\le1.96)=[2\\Phi(1.96)-1]^2\\approx0.902508$. Nếu dùng phân vị chính xác $z_{.975}$, độ phủ chính xác là $.95^2=.9025$.')),
    steps:[
      b(r('Let J be the selected index. The interval $[Z_J-1.96,Z_J+1.96]$ contains the true zero exactly when $|Z_J|\\le1.96$.'),r('Gọi J là chỉ số được chọn. Khoảng $[Z_J-1.96,Z_J+1.96]$ chứa số không thật chính xác khi $|Z_J|\\le1.96$.')),
      b(r('Because J chooses the largest absolute value, this event is equivalent to both $|Z_1|\\le1.96$ and $|Z_2|\\le1.96$.'),r('Vì J chọn trị tuyệt đối lớn nhất, biến cố này tương đương cả $|Z_1|\\le1.96$ và $|Z_2|\\le1.96$.')),
      b(r('Each standard normal event has probability $2\\Phi(1.96)-1$; independence multiplies the two probabilities.'),r('Mỗi biến cố chuẩn tắc có xác suất $2\\Phi(1.96)-1$; tính độc lập nhân hai xác suất.')),
      b(r('The result is $[2\\Phi(1.96)-1]^2\\approx0.902508$. Replacing rounded 1.96 by exact $z_{.975}$ gives $.95^2=.9025$ instead.'),r('Kết quả là $[2\\Phi(1.96)-1]^2\\approx0.902508$. Thay 1.96 làm tròn bằng $z_{.975}$ chính xác cho $.95^2=.9025$ thay vào đó.'))
    ],
    primarySolution:[
      b(r('The selected interval covers zero iff the selected absolute statistic is at most 1.96.'),r('Khoảng được chọn phủ số không khi và chỉ khi trị tuyệt đối thống kê được chọn không quá 1.96.')),
      b(r('Since selection takes the larger $|Z_j|$, coverage requires both independent statistics to satisfy $|Z_j|\\le1.96$.'),r('Vì phép chọn lấy $|Z_j|$ lớn hơn, độ phủ đòi hỏi cả hai thống kê độc lập thỏa $|Z_j|\\le1.96$.')),
      b(r('Thus coverage equals $[2\\Phi(1.96)-1]^2\\approx0.902508$.'),r('Vậy độ phủ bằng $[2\\Phi(1.96)-1]^2\\approx0.902508$.')),
      b(r('Using the exact .975 quantile would instead give $0.95^2=0.9025$; with the rounded cutoff, retain the approximate value.'),r('Dùng phân vị .975 chính xác sẽ cho $0.95^2=0.9025$; với ngưỡng làm tròn, giữ giá trị xấp xỉ.'))
    ],
    companions:[
      {prompt:b(r('A researcher chooses the largest absolute value among 4 independent standard-normal candidate estimates of a true zero and reports the usual two-sided 95% interval using exact $z_{.975}$. Compute the selected interval coverage.'),r('Nhà nghiên cứu chọn trị tuyệt đối lớn nhất trong 4 ước lượng chuẩn tắc độc lập của giá trị thật bằng không và báo khoảng hai phía 95% dùng $z_{.975}$ chính xác. Tính độ phủ khoảng được chọn.')),solution:[
        b(r('The selected interval covers zero only if every candidate satisfies $|Z_j|\\le z_{.975}$.'),r('Khoảng được chọn phủ số không chỉ khi mọi ứng viên thỏa $|Z_j|\\le z_{.975}$.')),
        b(r('Each event has probability .95 and the four candidates are independent.'),r('Mỗi biến cố có xác suất .95 và bốn ứng viên độc lập.')),
        b(r('Coverage is therefore $.95^4=0.81450625$, well below the single-interval 95% level.'),r('Vì vậy độ phủ là $.95^4=0.81450625$, thấp hơn nhiều mức 95% của một khoảng đơn.'))
      ]},
      {prompt:b(r('There are 3 independent standard-normal candidate estimates of zero. The analyst selects the largest absolute estimate but uses the exact individual 90% cutoff $z_{.95}$. What is the actual coverage, and what per-interval noncoverage rate would Bonferroni use to guarantee at least 90% simultaneous coverage?' ),r('Có 3 ước lượng ứng viên chuẩn tắc độc lập của số không. Nhà phân tích chọn trị tuyệt đối lớn nhất nhưng dùng ngưỡng cá nhân 90% chính xác $z_{.95}$. Độ phủ thực tế là bao nhiêu, và tỷ lệ không phủ từng khoảng nào theo Bonferroni để bảo đảm độ phủ đồng thời ít nhất 90%?')),solution:[
        b(r('Selected coverage requires all three absolute values to lie below $z_{.95}$, so it is $.90^3=.729$.'),r('Độ phủ sau chọn đòi cả ba trị tuyệt đối dưới $z_{.95}$, nên bằng $.90^3=.729$.')),
        b(r('For simultaneous family coverage at least .90, total error budget is $.10$; Bonferroni assigns at most $.10/3$ noncoverage probability to each interval.'),r('Để độ phủ họ ít nhất .90, ngân sách lỗi tổng là $.10$; Bonferroni phân tối đa $.10/3$ xác suất không phủ cho mỗi khoảng.')),
        b(r('Thus use two-sided per-interval confidence level at least $1-.10/3$, with cutoff $z_{1-.10/6}$.'),r('Vì vậy dùng mức tin cậy hai phía mỗi khoảng ít nhất $1-.10/3$, với ngưỡng $z_{1-.10/6}$.'))
      ]},
      {prompt:b(r('For two candidate estimates, construct a 95% familywise interval rule using Bonferroni rather than selecting first and using ordinary 95% intervals. State each marginal level and why the selected interval then covers with probability at least .95.'),r('Với hai ước lượng ứng viên, dựng quy tắc khoảng đồng thời 95% theo Bonferroni thay vì chọn trước rồi dùng khoảng 95% thường. Nêu mức biên từng khoảng và vì sao khoảng được chọn phủ với xác suất ít nhất .95.')),solution:[
        b(r('Allocate family error .05 across two candidates, giving two-sided noncoverage at most $.025$ per candidate.'),r('Phân bổ lỗi họ .05 cho hai ứng viên, cho xác suất không phủ hai phía tối đa $.025$ mỗi ứng viên.')),
        b(r('Each marginal interval therefore has confidence level $.975$ and uses cutoff $z_{1-.025/2}=z_{.9875}$.'),r('Mỗi khoảng biên vì vậy có mức tin cậy $.975$ và dùng ngưỡng $z_{1-.025/2}=z_{.9875}$.')),
        b(r('The union bound makes probability either interval misses at most $.025+.025=.05$; hence both cover simultaneously with probability at least .95, which also protects the selected one.'),r('Chặn hợp cho xác suất một trong hai khoảng trượt không quá $.025+.025=.05$; vậy cả hai cùng phủ với xác suất ít nhất .95, bảo vệ luôn khoảng được chọn.'))
      ]}
    ],
    reviewNote:'The exact coverage power relies on independent candidate statistics and common cutoff. Using 1.96 gives approximately 0.902508; the exact normal quantile z.975 gives 0.9025, so the two values must not be conflated.',
    sourceIds:['p-mit18655']
  },
  'm2-w059-e5':{
    title:b('Audit a post-selection Wald claim','Kiểm toán tuyên bố Wald sau chọn mô hình'),
    application:b(r('A nominal interval after data-driven variable selection needs inference that accounts for selection, tuning, multiplicity, and a clearly defined target.'),r('Khoảng danh nghĩa sau chọn biến theo dữ liệu cần phương pháp suy luận tính đến lựa chọn, tuning, đa kiểm định và mục tiêu xác định rõ.')),
    formula:b(r('Ordinary Wald validity requires a calibrated estimator with $\\sqrt n(\\hat\\theta-\\theta_0)\\Rightarrow N(0,V)$, a consistent $\\hat V\\to_PV>0$, and a prespecified target. Selecting the largest coefficient changes the sampling law; prediction consistency alone does not imply $P_{\\theta_0}(\\theta_0\\in C(X))\\approx.95$.'),r('Tính hợp lệ Wald thường cần ước lượng đã hiệu chuẩn có $\\sqrt n(\\hat\\theta-\\theta_0)\\Rightarrow N(0,V)$, $\\hat V\\to_PV>0$ nhất quán và mục tiêu định trước. Chọn hệ số lớn nhất làm đổi luật lấy mẫu; tính nhất quán dự đoán không kéo theo $P_{\\theta_0}(\\theta_0\\in C(X))\\approx.95$.')),
    steps:[
      b(r('Lasso selection depends on observed outcomes and its penalty shrinks coefficients, so a post-selection coefficient is not automatically an unbiased regular estimator.'),r('Lựa chọn lasso phụ thuộc kết quả quan sát và penalty co hệ số, nên hệ số sau chọn không tự động là ước lượng chính quy không chệch.')),
      b(r('The ordinary Wald formula needs an estimator CLT and a consistent variance estimate under the actual sampling design.'),r('Công thức Wald thường cần CLT của ước lượng và phương sai nhất quán theo thiết kế lấy mẫu thực tế.')),
      b(r('Choosing the largest among many coordinates adds selection and multiplicity; the unadjusted 95% interval is not calibrated for that search.'),r('Chọn lớn nhất trong nhiều tọa độ thêm lựa chọn và đa kiểm định; khoảng 95% chưa hiệu chỉnh không được hiệu chuẩn cho việc tìm kiếm ấy.')),
      b(r('Without selective inference, prespecified analysis, sample splitting, or independent replication, the result is exploratory evidence rather than a confirmed effect.'),r('Thiếu suy luận chọn lọc, phân tích định trước, chia mẫu hoặc lặp xác nhận độc lập, kết quả chỉ là bằng chứng khám phá chứ chưa xác nhận hiệu ứng.')),
      b(r('Define the estimand and justify design, noise, tuning, model specification, standard error, and any multiplicity procedure before making a confirmatory claim.'),r('Hãy xác định estimand và biện minh thiết kế, nhiễu, tuning, đặc tả mô hình, sai số chuẩn và thủ tục đa kiểm định trước tuyên bố xác nhận.'))
    ],
    primarySolution:[
      b(r('The selected coefficient is chosen after inspecting the same data, so the ordinary fixed-coordinate Wald reference law is not justified by default.'),r('Hệ số được chọn sau khi xem chính dữ liệu đó, nên luật tham chiếu Wald cho tọa độ cố định không mặc nhiên được biện minh.')),
      b(r('Missing evidence includes selection-adjusted coverage, a valid post-lasso estimator theorem, design and noise conditions, consistent variance estimation, and an asymptotic normal limit.'),r('Bằng chứng còn thiếu gồm độ phủ hiệu chỉnh lựa chọn, định lý hợp lệ cho ước lượng sau lasso, điều kiện thiết kế và nhiễu, phương sai nhất quán và giới hạn chuẩn tiệm cận.')),
      b(r('If many coefficients were searched, multiplicity or simultaneous inference is also needed; the target effect under possible misspecification must be defined.'),r('Nếu đã tìm trong nhiều hệ số, cũng cần đa kiểm định hoặc suy luận đồng thời; cần xác định hiệu ứng mục tiêu khi mô hình có thể sai đặc tả.')),
      b(r('Without selective inference, sample splitting, or independent confirmation, the result supports only an exploratory association, not a confirmed causal or scientific effect.'),r('Thiếu suy luận chọn lọc, chia mẫu hoặc xác nhận độc lập, kết quả chỉ hỗ trợ liên hệ khám phá chứ không xác nhận hiệu ứng nhân quả hay khoa học.'))
    ],
    companions:[
      {prompt:b(r('A team screens 20 genes, selects the largest estimated effect, then reports its ordinary two-sided p-value .04. At family level .05, identify the search issue and compute the Bonferroni comparison cutoff.'),r('Nhóm sàng lọc 20 gene, chọn hiệu ứng ước lượng lớn nhất rồi báo p-value hai phía thường .04. Ở mức họ .05, nêu vấn đề tìm kiếm và tính ngưỡng so sánh Bonferroni.')),solution:[
        b(r('The coefficient was selected from 20 candidates using the same data, so an unadjusted fixed-gene p-value ignores the selection search.'),r('Hệ số được chọn từ 20 ứng viên bằng cùng dữ liệu, nên p-value gene cố định chưa hiệu chỉnh bỏ qua tìm kiếm lựa chọn.')),
        b(r('Bonferroni family cutoff is $.05/20=.0025$.'),r('Ngưỡng họ Bonferroni là $.05/20=.0025$.')),
        b(r('The reported .04 exceeds .0025 and is not familywise significant under this conservative comparison; any final claim also needs a valid effect estimator and uncertainty procedure.'),r('Giá trị .04 vượt .0025 và không có ý nghĩa theo họ trong so sánh bảo thủ này; tuyên bố cuối còn cần ước lượng hiệu ứng và thủ tục bất định hợp lệ.'))
      ]},
      {prompt:b(r('A hospital uses half its patients to choose a predictive biomarker and the untouched half to estimate its prespecified treatment association. Name two assumptions that still matter and explain what sample splitting does and does not solve.'),r('Bệnh viện dùng nửa bệnh nhân để chọn dấu ấn dự đoán và nửa chưa đụng tới để ước lượng liên hệ điều trị đã định trước. Nêu hai giả thiết vẫn quan trọng và giải thích chia mẫu giải quyết cùng không giải quyết điều gì.')),solution:[
        b(r('The held-out estimate still needs an appropriate sampling model, valid standard error, and enough data for its claimed normal approximation.'),r('Ước lượng trên phần giữ lại vẫn cần mô hình lấy mẫu thích hợp, sai số chuẩn hợp lệ và đủ dữ liệu cho xấp xỉ chuẩn được tuyên bố.')),
        b(r('Selection is independent of the held-out outcomes conditional on the split, reducing winner-selection bias for that evaluation.'),r('Lựa chọn độc lập với kết quả giữ lại khi điều kiện theo phép chia, giảm thiên lệch người thắng cho đánh giá ấy.')),
        b(r('Splitting does not repair confounding, model misspecification, low power, or an estimand that was never defined; it also uses fewer observations for each stage.'),r('Chia mẫu không sửa nhiễu, sai đặc tả mô hình, lực kiểm định thấp hay estimand chưa định nghĩa; nó cũng khiến mỗi giai đoạn dùng ít quan sát hơn.'))
      ]},
      {prompt:b(r('A lasso model selects a coefficient and its ordinary interval excludes zero, but the report has no design description, penalty rationale, variance estimate method, or definition of the target parameter. Give four concrete items to resolve before interpreting the interval.'),r('Mô hình lasso chọn hệ số và khoảng thường loại số không, nhưng báo cáo không mô tả thiết kế, lý do penalty, cách ước lượng phương sai hay định nghĩa tham số đích. Nêu bốn mục cụ thể cần giải quyết trước khi diễn giải khoảng.')),solution:[
        b(r('Specify whether the target is a causal effect, conditional association, or prediction parameter and state the population.'),r('Nêu mục tiêu là hiệu ứng nhân quả, liên hệ có điều kiện hay tham số dự đoán và chỉ rõ tổng thể.')),
        b(r('Describe sampling, dependence, design matrix conditions, and noise assumptions supporting the estimator limit.'),r('Mô tả lấy mẫu, phụ thuộc, điều kiện ma trận thiết kế và giả thiết nhiễu hỗ trợ giới hạn ước lượng.')),
        b(r('Explain penalty tuning and use a post-selection or prespecified inference method with justified normality and variance consistency.'),r('Giải thích tuning penalty và dùng phương pháp suy luận sau chọn hoặc định trước có chuẩn tính và phương sai nhất quán được biện minh.')),
        b(r('Account for searching multiple coefficients and present the claim as exploratory unless independent validation or selection-aware calibration supports confirmation.'),r('Tính đến tìm kiếm nhiều hệ số và trình bày tuyên bố là khám phá trừ khi xác nhận độc lập hoặc hiệu chuẩn chọn lọc hỗ trợ kết luận xác nhận.'))
      ]}
    ],
    reviewNote:'The claim is deliberately classified as exploratory absent selection-aware calibration. Lasso prediction bounds do not establish nominal post-selection confidence coverage or causal identification.',
    sourceIds:['p-mit18655']
  },
  'm2-w060-e1':{
    title:b('Derive Bernoulli score, information, and Cramér–Rao bound','Suy score Bernoulli, thông tin và cận Cramér–Rao'),
    application:b(r('The score quantifies local likelihood sensitivity; Fisher information and the regular covariance inequality bound how precisely an unbiased estimator can recover p.'),r('Score đo độ nhạy likelihood cục bộ; thông tin Fisher và bất đẳng thức hiệp phương sai chính quy chặn độ chính xác của ước lượng không chệch p.')),
    formula:b(r('For iid $X_i\\sim\\operatorname{Bernoulli}(p)$, $0<p<1$, write $S=\\sum_iX_i$ and log likelihood $\\ell(p)=S\\log p+(n-S)\\log(1-p)$. Then $U_p=\\ell\\prime(p)=(S-np)/[p(1-p)]$, $I_n(p)=\\operatorname{Var}_p(U_p)=n/[p(1-p)]$. For unbiased square-integrable T and regular common support permitting differentiation under the integral, $\\operatorname{Cov}_p(T,U_p)=1$, so $\\operatorname{Var}_p(T)\\ge p(1-p)/n$.'),r('Với $X_i\\sim\\operatorname{Bernoulli}(p)$ iid, $0<p<1$, đặt $S=\\sum_iX_i$ và log likelihood $\\ell(p)=S\\log p+(n-S)\\log(1-p)$. Khi đó $U_p=\\ell\\prime(p)=(S-np)/[p(1-p)]$, $I_n(p)=\\operatorname{Var}_p(U_p)=n/[p(1-p)]$. Với T không chệch có bình phương khả tích và giá đỡ chung chính quy cho phép đổi đạo hàm dưới tích phân, $\\operatorname{Cov}_p(T,U_p)=1$, nên $\\operatorname{Var}_p(T)\\ge p(1-p)/n$.')),
    steps:[
      b(r('Differentiate the log likelihood: $S/p-(n-S)/(1-p)=(S-np)/[p(1-p)]$.'),r('Lấy đạo hàm log likelihood: $S/p-(n-S)/(1-p)=(S-np)/[p(1-p)]$.')),
      b(r('Since S is Binomial(n,p), the score has mean zero and variance $np(1-p)/[p^2(1-p)^2]=n/[p(1-p)]$.'),r('Vì S có luật Binomial(n,p), score có trung bình không và phương sai $np(1-p)/[p^2(1-p)^2]=n/[p(1-p)]$.')),
      b(r('For unbiased T, differentiate $E_pT=p$ under the integral. The score identity gives $E_p[(T-p)U_p]=1$, or covariance one because $E_pU_p=0$.'),r('Với T không chệch, lấy đạo hàm $E_pT=p$ dưới tích phân. Đồng nhất thức score cho $E_p[(T-p)U_p]=1$, tức hiệp phương sai bằng một vì $E_pU_p=0$.')),
      b(r('Cauchy–Schwarz gives $1\\le\\operatorname{Var}_p(T)I_n(p)$; substitute information to obtain $\\operatorname{Var}_p(T)\\ge p(1-p)/n$.'),r('Cauchy–Schwarz cho $1\\le\\operatorname{Var}_p(T)I_n(p)$; thay thông tin vào được $\\operatorname{Var}_p(T)\\ge p(1-p)/n$.')),
      b(r('The derivation needs parameter-independent support and valid differentiation. A moving-support family such as Uniform(0,θ) violates that regularity.'),r('Suy luận cần giá đỡ không phụ thuộc tham số và đổi đạo hàm hợp lệ. Họ giá đỡ dịch chuyển như Uniform(0,θ) vi phạm tính chính quy ấy.'))
    ],
    primarySolution:[
      b(r('The log likelihood is $S\\log p+(n-S)\\log(1-p)$; differentiating yields $U_p=(S-np)/[p(1-p)]$.'),r('Log likelihood là $S\\log p+(n-S)\\log(1-p)$; lấy đạo hàm được $U_p=(S-np)/[p(1-p)]$.')),
      b(r('Its mean is zero and variance is $I_n(p)=n/[p(1-p)]$.'),r('Score có trung bình không và phương sai là $I_n(p)=n/[p(1-p)]$.')),
      b(r('Under the common-support differentiation regularity, unbiasedness gives $E_p[(T-p)U_p]=1$.'),r('Dưới chính quy đổi đạo hàm với giá đỡ chung, tính không chệch cho $E_p[(T-p)U_p]=1$.')),
      b(r('Cauchy–Schwarz implies $1\\le\\operatorname{Var}(T)I_n(p)$, hence $\\operatorname{Var}(T)\\ge p(1-p)/n$.'),r('Cauchy–Schwarz suy ra $1\\le\\operatorname{Var}(T)I_n(p)$, nên $\\operatorname{Var}(T)\\ge p(1-p)/n$.')),
      b(r('Moving support breaks the differentiation identity. For $X\\sim\\operatorname{Uniform}(0,\\theta)$, T=2X is unbiased with variance $\\theta^2/3$, while the naive regular calculation would give $\\theta^2$; the CR premise fails.'),r('Giá đỡ dịch chuyển phá đồng nhất thức đổi đạo hàm. Với $X\\sim\\operatorname{Uniform}(0,\\theta)$, T=2X không chệch có phương sai $\\theta^2/3$, trong khi phép tính CR chính quy ngây thơ cho $\\theta^2$; tiền đề CR thất bại.'))
    ],
    companions:[
      {prompt:b(r('For $n=4$ Bernoulli trials with $p=0.25$, compute Fisher information and the Cramér–Rao variance lower bound for any unbiased estimator of p.'),r('Với $n=4$ lần thử Bernoulli và $p=0.25$, tính thông tin Fisher và cận dưới Cramér–Rao cho phương sai mọi ước lượng không chệch của p.')),solution:[
        b(r('Here $p(1-p)=0.25(0.75)=0.1875$.'),r('Ở đây $p(1-p)=0.25(0.75)=0.1875$.')),
        b(r('Information is $I_4=4/0.1875=64/3\\approx21.333$.'),r('Thông tin là $I_4=4/0.1875=64/3\\approx21.333$.')),
        b(r('The variance bound is $1/I_4=3/64=0.046875$.'),r('Cận phương sai là $1/I_4=3/64=0.046875$.'))
      ]},
      {prompt:b(r('A Bernoulli probability is p=0.6 and n=25 independent observations are available. Find total Fisher information and the minimum variance allowed by the regular CR inequality.'),r('Xác suất Bernoulli là p=0.6 và có n=25 quan sát độc lập. Tìm tổng thông tin Fisher và phương sai nhỏ nhất được bất đẳng thức CR chính quy cho phép.')),solution:[
        b(r('The one-trial information is $1/[0.6(0.4)]=1/0.24=25/6$.'),r('Thông tin một lần thử là $1/[0.6(0.4)]=1/0.24=25/6$.')),
        b(r('Independent information adds, giving $I_{25}=25(25/6)=625/6\\approx104.167$.'),r('Thông tin độc lập cộng lại, cho $I_{25}=25(25/6)=625/6\\approx104.167$.')),
        b(r('The unbiased-estimator variance is at least $1/I_{25}=6/625=0.0096$, equal to $p(1-p)/n$.'),r('Phương sai ước lượng không chệch ít nhất $1/I_{25}=6/625=0.0096$, bằng $p(1-p)/n$.'))
      ]},
      {prompt:b(r('Let one observation be $X\\sim\\operatorname{Uniform}(0,\\theta)$ and define T=2X. Verify unbiasedness and variance, then show explicitly why the regular CR derivation cannot be applied.'),r('Cho một quan sát $X\\sim\\operatorname{Uniform}(0,\\theta)$ và đặt T=2X. Kiểm tra tính không chệch cùng phương sai rồi chỉ rõ vì sao không áp dụng được suy luận CR chính quy.')),solution:[
        b(r('Since $E X=\\theta/2$, $E T=2E X=\\theta$, so T is unbiased.'),r('Vì $E X=\\theta/2$, $E T=2E X=\\theta$, nên T không chệch.')),
        b(r('$\\operatorname{Var}(X)=\\theta^2/12$, hence $\\operatorname{Var}(T)=4\\theta^2/12=\\theta^2/3$.'),r('$\\operatorname{Var}(X)=\\theta^2/12$, nên $\\operatorname{Var}(T)=4\\theta^2/12=\\theta^2/3$.')),
        b(r('Inside the support the score is $-1/\\theta$, whose expectation is not zero; differentiating the density integral also creates a moving-boundary term. Thus the common-support score identity needed by CR fails.'),r('Trong giá đỡ, score là $-1/\\theta$, có kỳ vọng khác không; đạo hàm tích phân mật độ còn tạo số hạng biên dịch chuyển. Vì vậy đồng nhất thức score giá đỡ chung cần cho CR thất bại.'))
      ]}
    ],
    reviewNote:'The Cramér–Rao step requires unbiasedness, finite variance, an interior parameter, common support, and differentiation under the integral with score mean zero. The Uniform(0,θ) counterexample has E score≠0 and a moving endpoint, so its smaller unbiased variance does not contradict the regular theorem.',
    sourceIds:['p-cmu36705']
  },
  'm2-w060-e2':{
    title:b('Prove consistency of a constrained quadratic maximizer','Chứng minh nhất quán của cực đại bậc hai có ràng buộc'),
    application:b(r('Completing the square identifies the empirical maximizer as a projection of the sample mean; a unique population peak then separates all parameters away from truth.'),r('Hoàn thành bình phương nhận ra cực đại thực nghiệm là phép chiếu trung bình mẫu; đỉnh quần thể duy nhất tách mọi tham số xa sự thật.')),
    formula:b(r('Let $Z_i$ be iid with $E Z_i=\\theta_0\\in(-1,1)$ and $E Z_i^2<\\infty$, $\\Theta=[-1,1]$, and $M_n(\\theta)=-n^{-1}\\sum_i(Z_i-\\theta)^2$. Then $\\hat\\theta_n=\\operatorname{clip}(\\bar Z_n,[-1,1])\\to_P\\theta_0$. The population criterion satisfies $M(\\theta_0)-M(\\theta)=(\\theta-\\theta_0)^2$, giving gap at least $\\varepsilon^2$ whenever $|\\theta-\\theta_0|\\ge\\varepsilon$.'),r('Cho $Z_i$ iid có $E Z_i=\\theta_0\\in(-1,1)$ và $E Z_i^2<\\infty$, $\\Theta=[-1,1]$, và $M_n(\\theta)=-n^{-1}\\sum_i(Z_i-\\theta)^2$. Khi đó $\\hat\\theta_n=\\operatorname{clip}(\\bar Z_n,[-1,1])\\to_P\\theta_0$. Tiêu chuẩn quần thể thỏa $M(\\theta_0)-M(\\theta)=(\\theta-\\theta_0)^2$, tạo khoảng cách ít nhất $\\varepsilon^2$ khi $|\\theta-\\theta_0|\\ge\\varepsilon$.')),
    steps:[
      b(r('Expand the sample criterion: $M_n(\\theta)=-\\overline{Z^2}_n+2\\theta\\bar Z_n-\\theta^2$.'),r('Khai triển tiêu chuẩn mẫu: $M_n(\\theta)=-\\overline{Z^2}_n+2\\theta\\bar Z_n-\\theta^2$.')),
      b(r('The first term does not depend on θ; complete the square as $-(\\theta-\\bar Z_n)^2$ plus a θ-free constant.'),r('Số hạng đầu không phụ thuộc θ; hoàn thành bình phương thành $-(\\theta-\\bar Z_n)^2$ cộng hằng số không phụ thuộc θ.')),
      b(r('Maximizing over $[-1,1]$ projects $\\bar Z_n$ onto the interval, giving the clip formula.'),r('Cực đại trên $[-1,1]$ chiếu $\\bar Z_n$ lên khoảng, cho công thức clip.')),
      b(r('Finite second moment implies the weak law $\\bar Z_n\\to_P\\theta_0$; continuity of projection then gives $\\hat\\theta_n\\to_P\\theta_0$.'),r('Moment bậc hai hữu hạn kéo theo luật yếu $\\bar Z_n\\to_P\\theta_0$; tính liên tục của phép chiếu cho $\\hat\\theta_n\\to_P\\theta_0$.')),
      b(r('At population level $M(\\theta)=C-(\\theta-\\theta_0)^2$; outside every ε-neighborhood it loses at least ε², proving strict separation and uniqueness.'),r('Ở quần thể $M(\\theta)=C-(\\theta-\\theta_0)^2$; ngoài mọi lân cận ε nó giảm ít nhất ε², chứng minh tách nghiêm và tính duy nhất.'))
    ],
    primarySolution:[
      b(r('Expand to $M_n(\\theta)=-\\overline{Z^2}_n+2\\theta\\bar Z_n-\\theta^2$.'),r('Khai triển thành $M_n(\\theta)=-\\overline{Z^2}_n+2\\theta\\bar Z_n-\\theta^2$.')),
      b(r('Ignoring the θ-free term, complete the square; the unique maximizer on $[-1,1]$ is $\\operatorname{clip}(\\bar Z_n,[-1,1])$.'),r('Bỏ số hạng không phụ thuộc θ rồi hoàn thành bình phương; cực đại duy nhất trên $[-1,1]$ là $\\operatorname{clip}(\\bar Z_n,[-1,1])$.')),
      b(r('The weak law applies because iid observations have finite second moment, so $\\bar Z_n\\to_P\\theta_0$; projection is continuous and fixes interior $\\theta_0$.'),r('Luật yếu áp dụng vì quan sát iid có moment bậc hai hữu hạn, nên $\\bar Z_n\\to_P\\theta_0$; phép chiếu liên tục và giữ nguyên $\\theta_0$ nội bộ.')),
      b(r('The population objective gap is exactly $(\\theta-\\theta_0)^2$, at least ε² outside distance ε. Thus the maximizer is consistent by the explicit separation argument.'),r('Khoảng cách tiêu chuẩn quần thể chính xác là $(\\theta-\\theta_0)^2$, ít nhất ε² ngoài khoảng cách ε. Do đó cực đại nhất quán theo lập luận tách tường minh.'))
    ],
    companions:[
      {prompt:b(r('For observed values $Z=(1.4,1.6,1.8)$ and parameter set $[-1,1]$, compute the sample mean and constrained quadratic maximizer.'),r('Với các giá trị quan sát $Z=(1.4,1.6,1.8)$ và tập tham số $[-1,1]$, tính trung bình mẫu và cực đại bậc hai có ràng buộc.')),solution:[
        b(r('The sample mean is $(1.4+1.6+1.8)/3=4.8/3=1.6$.'),r('Trung bình mẫu là $(1.4+1.6+1.8)/3=4.8/3=1.6$.')),
        b(r('The unconstrained quadratic maximizer is 1.6, outside $[-1,1]$.'),r('Cực đại bậc hai không ràng buộc là 1.6, nằm ngoài $[-1,1]$.')),
        b(r('Project to the interval endpoint: $\\hat\\theta=\\operatorname{clip}(1.6,[-1,1])=1$.'),r('Chiếu lên đầu mút khoảng: $\\hat\\theta=\\operatorname{clip}(1.6,[-1,1])=1$.'))
      ]},
      {prompt:b(r('Suppose the true mean is $\\theta_0=0.4$. For all $\\theta\\in[-1,1]$ at least 0.3 away, find the minimum population criterion loss relative to truth.'),r('Giả sử trung bình thật là $\\theta_0=0.4$. Với mọi $\\theta\\in[-1,1]$ cách ít nhất 0.3, tìm mức mất tiêu chuẩn quần thể nhỏ nhất so với sự thật.')),solution:[
        b(r('The population loss gap equals $(\\theta-\\theta_0)^2$.'),r('Khoảng cách mất tiêu chuẩn quần thể bằng $(\\theta-\\theta_0)^2$.')),
        b(r('Under $|\\theta-0.4|\\ge0.3$, its square is at least $0.3^2=0.09$.'),r('Khi $|\\theta-0.4|\\ge0.3$, bình phương ít nhất $0.3^2=0.09$.')),
        b(r('Thus every parameter outside that neighborhood has population criterion at least 0.09 below its value at truth.'),r('Vì vậy mọi tham số ngoài lân cận đó có tiêu chuẩn quần thể thấp hơn tại sự thật ít nhất 0.09.'))
      ]},
      {prompt:b(r('For $\\Theta=[-1,1]$, an observed sample has $\\bar Z_n=-1.3$. Find the maximizer and compare it with the unconstrained value; explain which part of the consistency proof uses the finite second moment.'),r('Với $\\Theta=[-1,1]$, mẫu quan sát có $\\bar Z_n=-1.3$. Tìm cực đại và so với giá trị không ràng buộc; giải thích phần nào của chứng minh nhất quán dùng moment bậc hai hữu hạn.')),solution:[
        b(r('Completing the square gives unconstrained maximizer $\\bar Z_n=-1.3$.'),r('Hoàn thành bình phương cho cực đại không ràng buộc $\\bar Z_n=-1.3$.')),
        b(r('Constrained maximization projects onto the left endpoint, so $\\hat\\theta_n=-1$.'),r('Cực đại có ràng buộc chiếu lên đầu mút trái, nên $\\hat\\theta_n=-1$.')),
        b(r('Finite second moment ensures the weak law for $\\bar Z_n$; continuous clipping then transfers convergence to the constrained estimator.'),r('Moment bậc hai hữu hạn bảo đảm luật yếu cho $\\bar Z_n$; clipping liên tục sau đó chuyển hội tụ sang ước lượng có ràng buộc.'))
      ]}
    ],
    reviewNote:'Finite E Z² supplies integrability for the weak law; the population quadratic gap is exact. The interior condition makes the target a point where clipping fixes it, though projection continuity also handles boundary limits.',
    sourceIds:['p-cmu36705']
  },
  'm2-w060-e3':{
    title:b('Derive the two-dimensional kernel rate and boundary warning','Suy tốc độ kernel hai chiều và cảnh báo biên'),
    application:b(r('In two dimensions, smoothing variance depends on window area h²; at a support boundary the truncated kernel mass changes bias order and invalidates the interior balance.'),r('Trong hai chiều, phương sai làm trơn phụ thuộc diện tích cửa sổ h²; tại biên giá đỡ, khối lượng kernel bị cắt đổi bậc độ chệch và làm mất cân bằng nội bộ.')),
    formula:b(r('At an interior point in d=2, assume local smoothness, a second-order kernel with nonzero leading bias, and variance constant C₂>0. If leading MSE is $C_1h^4+C_2/(nh^2)$ with $C_1>0$, then $h_{\\rm opt}\\asymp n^{-1/6}$ and MSE order $n^{-2/3}$. These interior orders need not hold at a support boundary.'),r('Tại điểm nội bộ trong d=2, giả sử độ trơn cục bộ, kernel bậc hai có độ chệch chính khác không và hằng số phương sai C₂>0. Nếu MSE chính là $C_1h^4+C_2/(nh^2)$ với $C_1>0$, thì $h_{\\rm opt}\\asymp n^{-1/6}$ và MSE bậc $n^{-2/3}$. Các bậc nội bộ này không nhất thiết đúng tại biên giá đỡ.')),
    steps:[
      b(r('Differentiate the leading objective: $4C_1h^3-2C_2/(nh^3)=0$.'),r('Lấy đạo hàm hàm mục tiêu chính: $4C_1h^3-2C_2/(nh^3)=0$.')),
      b(r('Multiplying by nh³ yields $4C_1nh^6=2C_2$, hence $h^6=C_2/(2C_1n)$ and $h\\asymp n^{-1/6}$.'),r('Nhân với nh³ cho $4C_1nh^6=2C_2$, nên $h^6=C_2/(2C_1n)$ và $h\\asymp n^{-1/6}$.')),
      b(r('Then $h^4\\asymp n^{-4/6}=n^{-2/3}$ and $1/(nh^2)\\asymp n^{-1+2/6}=n^{-2/3}$.'),r('Khi đó $h^4\\asymp n^{-4/6}=n^{-2/3}$ và $1/(nh^2)\\asymp n^{-1+2/6}=n^{-2/3}$.')),
      b(r('At a support edge the kernel window is truncated, so its first moment need not cancel and bias may be order h rather than h²; the interior squared-bias term h⁴ then fails.'),r('Tại mép giá đỡ cửa sổ kernel bị cắt, nên moment bậc nhất có thể không triệt tiêu và độ chệch có thể bậc h thay vì h²; khi đó số hạng bình phương độ chệch nội bộ h⁴ không còn đúng.'))
    ],
    primarySolution:[
      b(r('Balance $C_1h^4$ with $C_2/(nh^2)$; positive constants do not affect the exponent.'),r('Cân bằng $C_1h^4$ với $C_2/(nh^2)$; hằng số dương không ảnh hưởng số mũ.')),
      b(r('This gives $h^6\\asymp n^{-1}$, so $h_{\\rm opt}\\asymp n^{-1/6}$.'),r('Điều này cho $h^6\\asymp n^{-1}$, nên $h_{\\rm opt}\\asymp n^{-1/6}$.')),
      b(r('Substitution makes both terms order $n^{-2/3}$.'),r('Thay vào khiến cả hai số hạng có bậc $n^{-2/3}$.')),
      b(r('At a boundary the kernel sees only part of its symmetric window; first-order mass imbalance can create O(h) bias, so the interior expansion and derived rate require a boundary correction or a new analysis.'),r('Ở biên kernel chỉ thấy một phần cửa sổ đối xứng; mất cân bằng khối lượng bậc nhất có thể tạo độ chệch O(h), nên khai triển và tốc độ nội bộ cần hiệu chỉnh biên hoặc phân tích lại.'))
    ],
    companions:[
      {prompt:b(r('For an interior one-dimensional density estimate, suppose leading MSE is $4h^4+2/(nh)$. Derive bandwidth and optimized MSE orders.'),r('Với ước lượng mật độ nội bộ một chiều, giả sử MSE chính là $4h^4+2/(nh)$. Suy ra bậc bandwidth và MSE tối ưu.')),solution:[
        b(r('Balancing $h^4$ and $1/(nh)$ gives $h^5\\asymp n^{-1}$.'),r('Cân bằng $h^4$ và $1/(nh)$ cho $h^5\\asymp n^{-1}$.')),
        b(r('Thus $h\\asymp n^{-1/5}$.'),r('Vậy $h\\asymp n^{-1/5}$.')),
        b(r('Both terms then have order $n^{-4/5}$, the optimized MSE order.'),r('Cả hai số hạng khi đó có bậc $n^{-4/5}$, là bậc MSE tối ưu.'))
      ]},
      {prompt:b(r('In four dimensions, an interior estimate has squared bias order h⁴ and variance order $1/(nh^4)$. Find the balancing bandwidth and MSE rates.'),r('Trong bốn chiều, ước lượng nội bộ có bình phương độ chệch bậc h⁴ và phương sai bậc $1/(nh^4)$. Tìm tốc độ bandwidth và MSE khi cân bằng.')),solution:[
        b(r('Set $h^4\\asymp1/(nh^4)$, yielding $h^8\\asymp n^{-1}$.'),r('Đặt $h^4\\asymp1/(nh^4)$, được $h^8\\asymp n^{-1}$.')),
        b(r('Therefore bandwidth order is $n^{-1/8}$.'),r('Vì vậy bandwidth có bậc $n^{-1/8}$.')),
        b(r('The squared-bias order becomes $h^4\\asymp n^{-1/2}$, matching the variance order.'),r('Bình phương độ chệch có bậc $h^4\\asymp n^{-1/2}$, khớp bậc phương sai.'))
      ]},
      {prompt:b(r('Let X be Uniform(0,1), estimate its density at boundary x=0 using a symmetric unit-mass Gaussian kernel, and assume h→0. Compute the limiting expectation of the raw KDE.'),r('Cho X có phân phối Uniform(0,1), ước lượng mật độ tại biên x=0 bằng kernel Gaussian đối xứng khối lượng một và giả sử h→0. Tính kỳ vọng giới hạn của KDE thô.')),solution:[
        b(r('The expectation is $\\int_0^{1/h}K(u)f(hu)du$; here $f(hu)=1$ for $0\\le hu\\le1$.'),r('Kỳ vọng là $\\int_0^{1/h}K(u)f(hu)du$; ở đây $f(hu)=1$ khi $0\\le hu\\le1$.')),
        b(r('As h decreases, the upper limit tends to infinity, so the integral tends to the positive-half kernel mass.'),r('Khi h giảm, cận trên tiến tới vô cực, nên tích phân tiến tới khối lượng kernel trên nửa trục dương.')),
        b(r('Gaussian symmetry puts half the unit mass there, so $E\\hat f_h(0)\\to1/2$ although the true boundary density is 1.'),r('Đối xứng Gaussian đặt một nửa khối lượng đơn vị ở đó, nên $E\\hat f_h(0)\\to1/2$ dù mật độ biên thật bằng 1.'))
      ]}
    ],
    reviewNote:'The d=2 rate assumes an interior point, nonzero second-order bias and nh²→∞. The Uniform(0,1) companion explicitly shows the raw symmetric Gaussian KDE converging to half the boundary density.',
    sourceIds:['p-cmu36705']
  },
  'm2-w060-e4':{
    title:b('Derive the lasso cone and prediction bound','Suy hình nón lasso và chặn sai số dự đoán'),
    application:b(r('The lasso objective comparison creates a cone constraint, and a restricted eigenvalue on that cone converts sparse coefficient geometry into prediction accuracy.'),r('So sánh mục tiêu lasso tạo ràng buộc hình nón, còn eigenvalue hạn chế trên nón chuyển hình học hệ số thưa thành độ chính xác dự đoán.')),
    formula:b(r('Let $y=X\\beta^*+\\varepsilon$, $S=\\operatorname{supp}(\\beta^*)$, $|S|=s$, $\\Delta=\\hat\\beta-\\beta^*$, $Q=\\|X\\Delta\\|_2^2/n$, and minimize $\\|y-X\\beta\\|_2^2/(2n)+\\lambda\\|\\beta\\|_1$. If $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$, the basic inequality gives $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$. If also $\\sqrt Q\\ge\\kappa\\|\\Delta_S\\|_2$ for cone vectors with $\\kappa>0$, then $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Cho $y=X\\beta^*+\\varepsilon$, $S=\\operatorname{supp}(\\beta^*)$, $|S|=s$, $\\Delta=\\hat\\beta-\\beta^*$, $Q=\\|X\\Delta\\|_2^2/n$ và tối thiểu hóa $\\|y-X\\beta\\|_2^2/(2n)+\\lambda\\|\\beta\\|_1$. Nếu $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$, bất đẳng thức cơ bản cho $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$. Nếu thêm $\\sqrt Q\\ge\\kappa\\|\\Delta_S\\|_2$ với vector trong nón và $\\kappa>0$, thì $Q\\le9\\lambda^2s/\\kappa^2$.')),
    steps:[
      b(r('Compare the objective at $\\hat\\beta$ and $\\beta^*$, expand $y=X\\beta^*+\\varepsilon$, and cancel the common noise norm.'),r('So sánh mục tiêu tại $\\hat\\beta$ và $\\beta^*$, khai triển $y=X\\beta^*+\\varepsilon$ rồi khử chuẩn nhiễu chung.')),
      b(r('Holder bounds the score product by $(\\lambda/2)\\|\\Delta\\|_1$; support decomposition bounds the penalty difference by $\\lambda(\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1)$.'),r('Holder chặn tích score bởi $(\\lambda/2)\\|\\Delta\\|_1$; phân rã giá đỡ chặn hiệu penalty bởi $\\lambda(\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1)$.')),
      b(r('Combining gives $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$. Drop Q/2≥0 to get the cone.'),r('Kết hợp cho $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$. Bỏ Q/2≥0 để được hình nón.')),
      b(r('The basic inequality also gives $Q\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$.'),r('Bất đẳng thức cơ bản còn cho $Q\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$.')),
      b(r('Use $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$. If Q>0 divide by $\\sqrt Q$ and square to obtain $Q\\le9\\lambda^2s/\\kappa^2$; if Q=0 it is immediate.'),r('Dùng $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$. Nếu Q>0, chia cho $\\sqrt Q$ rồi bình phương được $Q\\le9\\lambda^2s/\\kappa^2$; nếu Q=0 thì hiển nhiên.'))
    ],
    primarySolution:[
      b(r('Let $\\Delta=\\hat\\beta-\\beta^*$ and $Q=\\|X\\Delta\\|_2^2/n$. Objective optimality and the score bound give the basic inequality.'),r('Đặt $\\Delta=\\hat\\beta-\\beta^*$ và $Q=\\|X\\Delta\\|_2^2/n$. Tính tối ưu mục tiêu cùng chặn score cho bất đẳng thức cơ bản.')),
      b(r('Decompose by support to get $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$, hence $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$.'),r('Phân rã theo giá đỡ được $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$, kéo theo $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$.')),
      b(r('Dropping the nonnegative cone term gives $Q\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$ by Cauchy–Schwarz.'),r('Bỏ số hạng nón không âm cho $Q\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$ theo Cauchy–Schwarz.')),
      b(r('Restricted eigenvalue yields $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$. Divide for Q>0 and square to conclude $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Eigenvalue hạn chế cho $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$. Chia khi Q>0 rồi bình phương để kết luận $Q\\le9\\lambda^2s/\\kappa^2$.')),
      b(r('Q=0 already satisfies the result; the RE premise must hold on this cone and cannot be omitted.'),r('Q=0 đã thỏa kết quả; tiền đề RE phải đúng trên nón này và không thể bỏ qua.'))
    ],
    companions:[
      {prompt:b(r('For a lasso problem with $s=3$, $\\lambda=0.2$, and cone RE constant $\\kappa=0.6$, compute the prediction and l1 coefficient bounds from the standard inequalities.'),r('Với bài toán lasso có $s=3$, $\\lambda=0.2$ và hằng số RE nón $\\kappa=0.6$, tính chặn dự đoán và hệ số l1 theo các bất đẳng thức chuẩn.')),solution:[
        b(r('The prediction bound is $Q\\le9(0.2)^2(3)/(0.6)^2=1.08/0.36=3$.'),r('Chặn dự đoán là $Q\\le9(0.2)^2(3)/(0.6)^2=1.08/0.36=3$.')),
        b(r('The cone implies $\\|\\Delta\\|_1\\le4\\|\\Delta_S\\|_1\\le4\\sqrt{s}\\|\\Delta_S\\|_2\\le4\\sqrt{sQ}/\\kappa$.'),r('Hình nón kéo theo $\\|\\Delta\\|_1\\le4\\|\\Delta_S\\|_1\\le4\\sqrt{s}\\|\\Delta_S\\|_2\\le4\\sqrt{sQ}/\\kappa$.')),
        b(r('Substitute the prediction bound to get $\\|\\Delta\\|_1\\le12\\lambda s/\\kappa^2=12(0.2)(3)/0.36=20$.'),r('Thay chặn dự đoán được $\\|\\Delta\\|_1\\le12\\lambda s/\\kappa^2=12(0.2)(3)/0.36=20$.'))
      ]},
      {prompt:b(r('With sparsity $s=2$, $\\lambda=0.1$, and $\\kappa=0.5$, evaluate the RE-based prediction and l1 error bounds.'),r('Với độ thưa $s=2$, $\\lambda=0.1$ và $\\kappa=0.5$, tính các chặn sai số dự đoán và l1 dựa trên RE.')),solution:[
        b(r('Here $\\kappa^2=0.25$ and $\\lambda^2=0.01$.'),r('Ở đây $\\kappa^2=0.25$ và $\\lambda^2=0.01$.')),
        b(r('Prediction error satisfies $Q\\le9(0.01)(2)/0.25=0.72$.'),r('Sai số dự đoán thỏa $Q\\le9(0.01)(2)/0.25=0.72$.')),
        b(r('Coefficient error satisfies $\\|\\Delta\\|_1\\le12(0.1)(2)/0.25=9.6$.'),r('Sai số hệ số thỏa $\\|\\Delta\\|_1\\le12(0.1)(2)/0.25=9.6$.'))
      ]},
      {prompt:b(r('Let $X_1=X_2$, true support $S=\\{1\\}$, and error vector $\\Delta=(1,-1)$. Verify the lasso cone but show that no positive restricted-eigenvalue constant can hold.'),r('Cho $X_1=X_2$, giá đỡ thật $S=\\{1\\}$ và vector sai số $\\Delta=(1,-1)$. Kiểm tra hình nón lasso nhưng chỉ ra không thể có hằng số eigenvalue hạn chế dương.')),solution:[
        b(r('The off-support l1 norm is 1 and on-support norm is 1, so $\\|\\Delta_{S^c}\\|_1=1\\le3\\|\\Delta_S\\|_1=3$.'),r('Chuẩn l1 ngoài giá đỡ là 1 và trong giá đỡ là 1, nên $\\|\\Delta_{S^c}\\|_1=1\\le3\\|\\Delta_S\\|_1=3$.')),
        b(r('Because the columns are identical, $X\\Delta=X_1-X_2=0$, hence $Q=0$.'),r('Vì hai cột giống nhau, $X\\Delta=X_1-X_2=0$, nên $Q=0$.')),
        b(r('A positive RE constant would require $0=\\sqrt Q\\ge\\kappa\\|\\Delta_S\\|_2=\\kappa>0$, impossible; this design cannot support the stated prediction theorem.'),r('Hằng số RE dương sẽ đòi $0=\\sqrt Q\\ge\\kappa\\|\\Delta_S\\|_2=\\kappa>0$, vô lý; thiết kế này không hỗ trợ định lý dự đoán đã nêu.'))
      ]}
    ],
    reviewNote:'The lasso normalization is one-half squared loss divided by n; changing that convention changes constants. The RE condition is required on the cone, and the duplicate-column companion explicitly demonstrates its failure.',
    sourceIds:['p-cmu36705']
  },
  'm2-w060-e5':{
    title:b('Compute Holm and BH rejections','Tính các bác bỏ Holm và BH'),
    application:b(r('Applying both procedures to one sorted list exposes their different rank thresholds and the distinct error rates they control.'),r('Áp dụng cả hai thủ tục trên một danh sách đã sắp cho thấy ngưỡng hạng khác nhau và loại tỷ lệ lỗi riêng chúng kiểm soát.')),
    formula:b(r('For ordered p-values $p_{(1)}\\le\\cdots\\le p_{(m)}$, Holm step-down compares rank k with $\\alpha/(m-k+1)$ and stops at the first failure. BH step-up compares with $kq/m$ and rejects through the largest passing rank. Here $p=(.003,.011,.04,.07,.5)$, m=5, Holm α=.05, BH q=.10.'),r('Với p-value sắp $p_{(1)}\\le\\cdots\\le p_{(m)}$, Holm bước xuống so hạng k với $\\alpha/(m-k+1)$ và dừng ở lần trượt đầu. BH bước lên so với $kq/m$ và bác bỏ đến hạng qua lớn nhất. Ở đây $p=(.003,.011,.04,.07,.5)$, m=5, Holm α=.05, BH q=.10.')),
    steps:[
      b(r('Holm thresholds are $.01,.0125,.0167,.025,.05$. The first two p-values pass; $.04>.0167$ at rank three, so stop with two rejections.'),r('Ngưỡng Holm là $.01,.0125,.0167,.025,.05$. Hai p-value đầu qua; $.04>.0167$ tại hạng ba, nên dừng với hai bác bỏ.')),
      b(r('BH thresholds are $.02,.04,.06,.08,.10$. Ranks one through four pass; $.5>.10$ at rank five.'),r('Ngưỡng BH là $.02,.04,.06,.08,.10$. Hạng một đến bốn qua; $.5>.10$ tại hạng năm.')),
      b(r('The largest passing BH rank is four, so reject the first four hypotheses.'),r('Hạng BH qua lớn nhất là bốn, nên bác bỏ bốn giả thuyết đầu.')),
      b(r('Holm controls FWER under arbitrary dependence with valid p-values; standard BH controls FDR under independent tests and valid true-null p-values.'),r('Holm kiểm soát FWER dưới phụ thuộc tùy ý với p-value hợp lệ; BH chuẩn kiểm soát FDR khi kiểm định độc lập và p-value không thật hợp lệ.'))
    ],
    primarySolution:[
      b(r('For Holm at α=.05, thresholds are $.05/5=.01$, $.05/4=.0125$, $.05/3\\approx.0167$, $.025$, and $.05$.'),r('Với Holm ở α=.05, ngưỡng là $.05/5=.01$, $.05/4=.0125$, $.05/3\\approx.0167$, $.025$ và $.05$.')),
      b(r('The first two pass and $.04$ fails at rank three, so Holm rejects two and stops.'),r('Hai p đầu qua và $.04$ trượt ở hạng ba, nên Holm bác bỏ hai rồi dừng.')),
      b(r('BH q=.10 thresholds are $.02,.04,.06,.08,.10$; the first four pass and the fifth fails, so k=4.'),r('Ngưỡng BH q=.10 là $.02,.04,.06,.08,.10$; bốn p đầu qua và p thứ năm trượt, nên k=4.')),
      b(r('BH rejects four. Holm targets strong FWER control under arbitrary dependence; BH targets FDR under independence or another valid dependence theorem.'),r('BH bác bỏ bốn. Holm nhắm kiểm soát FWER mạnh dưới phụ thuộc tùy ý; BH nhắm FDR dưới độc lập hoặc định lý phụ thuộc hợp lệ khác.'))
    ],
    companions:[
      {prompt:b(r('For sorted values $(.001,.004,.03,.20)$, use Holm α=.04 and BH q=.08. Compute each threshold sequence, stopping or step-up rank, and rejection count.'),r('Với các giá trị đã sắp $(.001,.004,.03,.20)$, dùng Holm α=.04 và BH q=.08. Tính từng dãy ngưỡng, hạng dừng hay bước lên và số bác bỏ.')),solution:[
        b(r('Holm cutoffs are $.01,.0133,.02,.04$. The first two pass and $.03>.02$ at rank three stops the procedure, so Holm rejects two.'),r('Ngưỡng Holm là $.01,.0133,.02,.04$. Hai hạng đầu qua và $.03>.02$ ở hạng ba làm dừng, nên Holm bác bỏ hai.')),
        b(r('BH cutoffs are $.016,.032,.048,.064$. The first three p-values pass and the fourth fails.'),r('Ngưỡng BH là $.016,.032,.048,.064$. Ba p-value đầu qua và p thứ tư trượt.')),
        b(r('The largest BH passing rank is three, so BH rejects three.'),r('Hạng BH qua lớn nhất là ba, nên BH bác bỏ ba.'))
      ]},
      {prompt:b(r('For sorted p-values $(.001,.019,.03,.4)$ with BH q=.05, find the largest passing rank and the BH rejection set. Explain why checking only the first failing rank would be insufficient in a different list.'),r('Với p-value đã sắp $(.001,.019,.03,.4)$ và BH q=.05, tìm hạng qua lớn nhất và tập bác bỏ BH. Giải thích vì sao ở danh sách khác chỉ kiểm tra hạng trượt đầu chưa đủ.')),solution:[
        b(r('The rank thresholds are $.0125,.025,.0375,.05$.'),r('Ngưỡng theo hạng là $.0125,.025,.0375,.05$.')),
        b(r('The first three pass: $.001≤.0125$, $.019≤.025$, and $.03≤.0375$; rank four fails.'),r('Ba hạng đầu qua: $.001≤.0125$, $.019≤.025$ và $.03≤.0375$; hạng bốn trượt.')),
        b(r('Thus k=3 and BH rejects the first three. The step-up rule seeks the largest passing rank, since later ranks can pass even if an earlier one fails in general.'),r('Vậy k=3 và BH bác bỏ ba p đầu. Quy tắc bước lên tìm hạng qua lớn nhất, vì nói chung hạng sau vẫn có thể qua dù hạng trước trượt.'))
      ]},
      {prompt:b(r('For p-values $(.002,.03,.04,.20,.30)$, compute Holm at α=.05 and BH at q=.10. Contrast their rejection counts and error targets.'),r('Với p-value $(.002,.03,.04,.20,.30)$, tính Holm ở α=.05 và BH ở q=.10. So sánh số bác bỏ và mục tiêu lỗi.')),solution:[
        b(r('Holm thresholds begin $.01,.0125$. The first p-value passes but $.03>.0125$ at rank two, so Holm rejects only one.'),r('Ngưỡng Holm đầu là $.01,.0125$. P đầu qua nhưng $.03>.0125$ ở hạng hai, nên Holm chỉ bác bỏ một.')),
        b(r('BH thresholds are $.02,.04,.06,.08,.10$. The first three pass, while ranks four and five fail; BH rejects three.'),r('Ngưỡng BH là $.02,.04,.06,.08,.10$. Ba hạng đầu qua, còn hạng bốn và năm trượt; BH bác bỏ ba.')),
        b(r('Holm controls the chance of any false rejection; BH controls expected FDP under its dependence conditions, so the larger BH rejection count reflects a different target.'),r('Holm kiểm soát xác suất có bất kỳ bác bỏ sai nào; BH kiểm soát FDP kỳ vọng dưới điều kiện phụ thuộc, nên số bác bỏ BH lớn hơn phản ánh mục tiêu khác.'))
      ]}
    ],
    reviewNote:'Holm halts permanently at its first step-down failure. BH uses the largest passing step-up rank. FWER and FDR are distinct; BH dependence assumptions are stated with the reported result.',
    sourceIds:['p-cmu36705']
  }
};
export default reviewed;
