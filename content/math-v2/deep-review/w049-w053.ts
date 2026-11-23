import {b, type ReviewedLesson} from './types';
const r=(text:string)=>String.raw({raw:[text]});
const reviewed:Record<string,ReviewedLesson>={
  'm2-w049-e1':{
    title:b('Prove epsilon separation for an approximate maximizer','Chứng minh tách epsilon cho cực đại gần đúng'),
    application:b(r('Use a fixed population gap outside a neighborhood to show that small uniform and optimization errors cannot move an estimator far from the target.'),r('Dùng khoảng cách tổng thể cố định ngoài một lân cận để chứng minh sai số đều và sai số tối ưu nhỏ không thể đẩy ước lượng xa mục tiêu.')),
    formula:b(r('Let $C_\\varepsilon=\\{\\theta:d(\\theta,\\theta_0)\\ge\\varepsilon\\}$ and $\\Delta_\\varepsilon=M(\\theta_0)-\\sup_{C_\\varepsilon}M>0$. If $\\sup_\\Theta|M_n-M|<\\Delta_\\varepsilon/4$ and $M_n(\\hat\\theta_n)\\ge\\sup_\\Theta M_n-\\Delta_\\varepsilon/4$, then $\\hat\\theta_n\\notin C_\\varepsilon$.'),r('Đặt $C_\\varepsilon=\\{\\theta:d(\\theta,\\theta_0)\\ge\\varepsilon\\}$ và $\\Delta_\\varepsilon=M(\\theta_0)-\\sup_{C_\\varepsilon}M>0$. Nếu $\\sup_\\Theta|M_n-M|<\\Delta_\\varepsilon/4$ và $M_n(\\hat\\theta_n)\\ge\\sup_\\Theta M_n-\\Delta_\\varepsilon/4$, thì $\\hat\\theta_n\\notin C_\\varepsilon$.')),
    steps:[
      b(r('The positive gap says every parameter in $C_\\varepsilon$ has population score at most $M(\\theta_0)-\\Delta_\\varepsilon$.'),r('Khoảng cách dương cho biết mọi tham số trong $C_\\varepsilon$ có điểm tổng thể không quá $M(\\theta_0)-\\Delta_\\varepsilon$.')),
      b(r('Uniform error below $\\Delta_\\varepsilon/4$ gives $M_n(\\theta)\\le M(\\theta_0)-3\\Delta_\\varepsilon/4$ on $C_\\varepsilon$.'),r('Sai số đều dưới $\\Delta_\\varepsilon/4$ cho $M_n(\\theta)\\le M(\\theta_0)-3\\Delta_\\varepsilon/4$ trên $C_\\varepsilon$.')),
      b(r('At the feasible comparison point, the same bound gives $M_n(\\theta_0)\\ge M(\\theta_0)-\\Delta_\\varepsilon/4$.'),r('Tại điểm so sánh khả thi, cùng chặn sai số cho $M_n(\\theta_0)\\ge M(\\theta_0)-\\Delta_\\varepsilon/4$.')),
      b(r('An approximate maximizer must score at least $M_n(\\theta_0)-\\Delta_\\varepsilon/4\\ge M(\\theta_0)-\\Delta_\\varepsilon/2$, contradicting the outside bound.'),r('Cực đại gần đúng phải đạt ít nhất $M_n(\\theta_0)-\\Delta_\\varepsilon/4\\ge M(\\theta_0)-\\Delta_\\varepsilon/2$, mâu thuẫn với chặn bên ngoài.'))
    ],
    primarySolution:[
      b(r('Fix $\\varepsilon>0$ and define $C_\\varepsilon$ as the parameters at distance at least $\\varepsilon$ from $\\theta_0$; assume its population gap $\\Delta_\\varepsilon$ is positive.'),r('Cố định $\\varepsilon>0$ và định nghĩa $C_\\varepsilon$ là các tham số cách $\\theta_0$ ít nhất $\\varepsilon$; giả sử khoảng cách tổng thể $\\Delta_\\varepsilon$ dương.')),
      b(r('For any $\\theta\\in C_\\varepsilon$, $M_n(\\theta)\\le M(\\theta)+\\Delta_\\varepsilon/4\\le M(\\theta_0)-3\\Delta_\\varepsilon/4$.'),r('Với mọi $\\theta\\in C_\\varepsilon$, $M_n(\\theta)\\le M(\\theta)+\\Delta_\\varepsilon/4\\le M(\\theta_0)-3\\Delta_\\varepsilon/4$.')),
      b(r('At $\\theta_0$, $M_n(\\theta_0)\\ge M(\\theta_0)-\\Delta_\\varepsilon/4$, so an outside point trails this comparison score by at least $\\Delta_\\varepsilon/2$.'),r('Tại $\\theta_0$, $M_n(\\theta_0)\\ge M(\\theta_0)-\\Delta_\\varepsilon/4$, nên điểm ở ngoài kém điểm so sánh ít nhất $\\Delta_\\varepsilon/2$.')),
      b(r('But the allowed optimization loss is only $\\Delta_\\varepsilon/4$; hence an approximate maximizer cannot lie in $C_\\varepsilon$.'),r('Nhưng mức hụt tối ưu cho phép chỉ là $\\Delta_\\varepsilon/4$; do đó cực đại gần đúng không thể nằm trong $C_\\varepsilon$.'))
    ],
    companions:[
      {prompt:b(r('A retailer compares three store locations with population scores $M(A)=12$, $M(B)=8$, and $M(C)=3$. Let $\\theta_0=A$ and $C_\\varepsilon=\\{B,C\\}$. If every estimated score is within $0.5$ of its population score and the selected location is within $0.5$ of the largest estimated score, prove it cannot be $B$ or $C.'),r('Một nhà bán lẻ so sánh ba địa điểm có điểm tổng thể $M(A)=12$, $M(B)=8$ và $M(C)=3$. Cho $\\theta_0=A$ và $C_\\varepsilon=\\{B,C\\}$. Nếu mọi điểm ước lượng sai khác điểm tổng thể không quá $0.5$ và địa điểm chọn cách điểm ước lượng lớn nhất không quá $0.5$, chứng minh địa điểm chọn không thể là $B$ hay $C.')),solution:[
        b(r('The population gap is $\\Delta=12-8=4$, because $B$ has the largest score outside $A$.'),r('Khoảng cách tổng thể là $\\Delta=12-8=4$, vì $B$ có điểm cao nhất ngoài $A$.')),
        b(r('The estimated outside scores are at most $8+0.5=8.5$, while the estimated score at $A$ is at least $12-0.5=11.5$.'),r('Các điểm ước lượng bên ngoài không quá $8+0.5=8.5$, còn điểm ước lượng tại $A$ ít nhất là $12-0.5=11.5$.')),
        b(r('Thus either outside location trails $A$ by at least $3$, greater than the allowed optimization loss $0.5$; neither can be selected.'),r('Vì thế mỗi địa điểm bên ngoài kém $A$ ít nhất $3$, lớn hơn mức hụt tối ưu cho phép $0.5$; không địa điểm nào có thể được chọn.'))
      ]},
      {prompt:b(r('A delivery firm has population utility $M(0)=5$, $M(1)=4$, $M(2)=1$ for three depot plans. Estimated utilities satisfy $\\sup_j|M_n(j)-M(j)|<0.2$, and plan $\\hat j$ is within $0.1$ of the empirical maximum. Show $\\hat j=0$.'),r('Một hãng giao hàng có lợi ích tổng thể $M(0)=5$, $M(1)=4$, $M(2)=1$ cho ba phương án kho. Lợi ích ước lượng thỏa $\\sup_j|M_n(j)-M(j)|<0.2$, và phương án $\\hat j$ cách cực đại thực nghiệm không quá $0.1$. Chứng minh $\\hat j=0$.')),solution:[
        b(r('The gap from plan $0$ to the best alternative is $5-4=1$.'),r('Khoảng cách từ phương án $0$ tới phương án thay thế tốt nhất là $5-4=1$.')),
        b(r('Every alternative has estimated utility below $4+0.2=4.2$, and $M_n(0)>5-0.2=4.8$.'),r('Mọi phương án thay thế có lợi ích ước lượng dưới $4+0.2=4.2$, còn $M_n(0)>5-0.2=4.8$.')),
        b(r('An approximate maximizer must score at least $4.8-0.1=4.7$ by comparing with plan $0$, so neither alternative can satisfy the requirement.'),r('Cực đại gần đúng phải đạt ít nhất $4.8-0.1=4.7$ khi so với phương án $0$, nên không phương án thay thế nào thỏa điều kiện.'))
      ]},
      {prompt:b(r('A wildlife reserve chooses one of four patrol zones. The true detection scores are $M(N)=9$, $M(E)=6$, $M(S)=5$, $M(W)=2$. If all empirical scores have error at most $0.4$ and a chosen zone is at most $0.3$ below the empirical best, show the north zone is the only possible choice.'),r('Một khu bảo tồn chọn một trong bốn vùng tuần tra. Điểm phát hiện thật là $M(N)=9$, $M(E)=6$, $M(S)=5$, $M(W)=2$. Nếu mọi điểm thực nghiệm sai số không quá $0.4$ và vùng được chọn thấp hơn điểm thực nghiệm cao nhất nhiều nhất $0.3$, chứng minh vùng bắc là lựa chọn duy nhất có thể.')),solution:[
        b(r('The best true outside score is $6$, so the gap to north is $\\Delta=9-6=3$.'),r('Điểm thật cao nhất bên ngoài là $6$, nên khoảng cách tới vùng bắc là $\\Delta=9-6=3$.')),
        b(r('Every outside empirical score is at most $6.4$, whereas north scores at least $8.6$.'),r('Mọi điểm thực nghiệm bên ngoài không quá $6.4$, trong khi vùng bắc đạt ít nhất $8.6$.')),
        b(r('The empirical deficit of any outside zone is at least $8.6-6.4=2.2$, exceeding the allowed deficit $0.3$.'),r('Mức kém thực nghiệm của mọi vùng bên ngoài ít nhất là $8.6-6.4=2.2$, lớn hơn mức cho phép $0.3$.'))
      ]}
    ],
    reviewNote:'The contradiction compares the empirical score outside the epsilon set with the score at the feasible target and then subtracts the optimization tolerance. Positivity of the population separation gap is essential; pointwise uniqueness alone does not supply this numerical bound.',
    sourceIds:['p-mit18655']
  },
  'm2-w049-e2':{
    title:b('Constrained Bernoulli likelihood consistency','Tính nhất quán của likelihood Bernoulli có ràng buộc'),
    application:b(r('Estimate a Bernoulli success probability while enforcing a permitted interval; clipping matters in finite samples even though it vanishes asymptotically for an interior truth.'),r('Ước lượng xác suất thành công Bernoulli đồng thời giữ tham số trong một đoạn cho phép; phép cắt có ý nghĩa ở mẫu hữu hạn dù mất đi tiệm cận khi giá trị thật nằm trong lòng đoạn.')),
    formula:b(r('For IID $Z_i\\sim\\operatorname{Bernoulli}(p_0)$, $0<a<1/2$, and $p_0\\in(a,1-a)$, maximizing $\\ell_n(p)=n^{-1}\\sum_i[Z_i\\log p+(1-Z_i)\\log(1-p)]$ over $[a,1-a]$ gives $\\hat p_n=\\min\\{1-a,\\max\\{a,\\bar Z_n\\}\\}\\xrightarrow{P}p_0$.'),r('Với $Z_i\\sim\\operatorname{Bernoulli}(p_0)$ IID, $0<a<1/2$ và $p_0\\in(a,1-a)$, cực đại hóa $\\ell_n(p)=n^{-1}\\sum_i[Z_i\\log p+(1-Z_i)\\log(1-p)]$ trên $[a,1-a]$ cho $\\hat p_n=\\min\\{1-a,\\max\\{a,\\bar Z_n\\}\\}\\xrightarrow{P}p_0$.')),
    steps:[
      b(r('Differentiating the average log likelihood gives $\\ell_n\\prime(p)=(\\bar Z_n-p)/(p(1-p))$, whose sign changes at the sample proportion.'),r('Lấy đạo hàm log-likelihood trung bình được $\\ell_n\\prime(p)=(\\bar Z_n-p)/(p(1-p))$, dấu đổi tại tỷ lệ mẫu.')),
      b(r('Its second derivative is $-\\bar Z_n/p^2-(1-\\bar Z_n)/(1-p)^2<0$ for every $0<p<1$, including all-zero or all-one samples.'),r('Đạo hàm bậc hai là $-\\bar Z_n/p^2-(1-\\bar Z_n)/(1-p)^2<0$ với mọi $0<p<1$, kể cả mẫu toàn số không hay toàn số một.')),
      b(r('Strict concavity puts the constrained maximum at the nearest point of $[a,1-a]$ to $\\bar Z_n$, namely the stated clipped value.'),r('Tính lõm nghiêm đặt cực đại có ràng buộc tại điểm của $[a,1-a]$ gần $\\bar Z_n$ nhất, tức giá trị bị cắt đã nêu.')),
      b(r('The IID Bernoulli law of large numbers gives $\\bar Z_n\\to p_0$ in probability; since $p_0$ is interior, clipping is eventually inactive with probability tending to one.'),r('Luật số lớn Bernoulli IID cho $\\bar Z_n\\to p_0$ theo xác suất; vì $p_0$ nằm trong đoạn, xác suất phép cắt còn hoạt động tiến về không.'))
    ],
    primarySolution:[
      b(r('On $[a,1-a]$, the log likelihood is well-defined because $0<a<1/2$ keeps both logarithm arguments positive.'),r('Trên $[a,1-a]$, log-likelihood xác định vì $0<a<1/2$ giữ hai đối số log dương.')),
      b(r('The derivative is $\\ell_n\\prime(p)=(\\bar Z_n-p)/(p(1-p))$ and the second derivative is strictly negative, so the unconstrained maximizer is $\\bar Z_n$ and the constrained one is its projection.'),r('Đạo hàm là $\\ell_n\\prime(p)=(\\bar Z_n-p)/(p(1-p))$ và đạo hàm bậc hai âm nghiêm, nên cực đại không ràng buộc là $\\bar Z_n$ còn cực đại có ràng buộc là hình chiếu của nó.')),
      b(r('Thus $\\hat p_n=\\min\\{1-a,\\max\\{a,\\bar Z_n\\}\\}$. Projection onto an interval containing $p_0$ cannot increase distance from $p_0$.'),r('Do đó $\\hat p_n=\\min\\{1-a,\\max\\{a,\\bar Z_n\\}\\}$. Phép chiếu lên đoạn chứa $p_0$ không làm tăng khoảng cách tới $p_0$.')),
      b(r('The IID LLN gives $\\bar Z_n\\to p_0$ in probability, hence $|\\hat p_n-p_0|\\le|\\bar Z_n-p_0|\\to0$ in probability.'),r('LLN IID cho $\\bar Z_n\\to p_0$ theo xác suất, nên $|\\hat p_n-p_0|\\le|\\bar Z_n-p_0|\\to0$ theo xác suất.'))
    ],
    companions:[
      {prompt:b(r('A diagnostic test is modeled by Bernoulli outcomes, and the admissible positivity rate is $[0.2,0.8]$. In a sample of ten patients, seven test positive. Find the constrained maximum-likelihood estimate and explain the clipping decision.'),r('Xét kết quả xét nghiệm Bernoulli với tỷ lệ dương tính cho phép thuộc $[0.2,0.8]$. Trong mẫu mười bệnh nhân, bảy người dương tính. Tìm ước lượng hợp lý cực đại có ràng buộc và giải thích phép cắt.')),solution:[
        b(r('The observed proportion is $\\bar Z=7/10=0.7$.'),r('Tỷ lệ quan sát là $\\bar Z=7/10=0.7$.')),
        b(r('The Bernoulli log likelihood has derivative $(0.7-p)/(p(1-p))$, so it increases below $0.7$ and decreases above it.'),r('Log-likelihood Bernoulli có đạo hàm $(0.7-p)/(p(1-p))$, nên tăng dưới $0.7$ và giảm phía trên.')),
        b(r('Since $0.7\\in[0.2,0.8]$, no clipping is active and the constrained MLE is $\\hat p=0.7$.'),r('Vì $0.7\\in[0.2,0.8]$, phép cắt không hoạt động và MLE có ràng buộc là $\\hat p=0.7$.'))
      ]},
      {prompt:b(r('A factory estimates its defective-item rate $p$ subject to $0.1\\le p\\le0.6$. Among 20 inspected items, 16 are defective. Compute the constrained MLE and verify the endpoint is optimal.'),r('Một nhà máy ước lượng tỷ lệ hàng lỗi $p$ với ràng buộc $0.1\\le p\\le0.6$. Trong 20 sản phẩm kiểm tra, có 16 sản phẩm lỗi. Tính MLE có ràng buộc và kiểm tra đầu mút là tối ưu.')),solution:[
        b(r('Here $\\bar Z=16/20=0.8$, which exceeds the allowed upper endpoint $0.6$.'),r('Ở đây $\\bar Z=16/20=0.8$, vượt đầu mút trên cho phép $0.6$.')),
        b(r('For every feasible $p\\le0.6<0.8$, the derivative $(0.8-p)/(p(1-p))$ is positive.'),r('Với mọi $p\\le0.6<0.8$ khả thi, đạo hàm $(0.8-p)/(p(1-p))$ dương.')),
        b(r('The likelihood therefore increases throughout the feasible interval; its maximum is at $\\hat p=0.6$.'),r('Do đó likelihood tăng trên toàn đoạn khả thi; cực đại đạt tại $\\hat p=0.6$.'))
      ]},
      {prompt:b(r('A sensor records 40 successful calibrations out of 100. The calibration model restricts the success probability to $[0.25,0.75]$. Find the constrained MLE and state whether an interior population value $p_0=0.4$ yields consistency as sample size grows under IID sampling.'),r('Một cảm biến ghi nhận 40 lần hiệu chuẩn thành công trong 100 lần. Mô hình hiệu chuẩn giới hạn xác suất thành công trong $[0.25,0.75]$. Tìm MLE có ràng buộc và cho biết giá trị tổng thể trong đoạn $p_0=0.4$ có cho tính nhất quán khi cỡ mẫu tăng dưới lấy mẫu IID hay không.')),solution:[
        b(r('The observed rate is $40/100=0.4$, already inside $[0.25,0.75]$, so the constrained MLE equals $0.4$.'),r('Tỷ lệ quan sát là $40/100=0.4$, nằm trong $[0.25,0.75]$, nên MLE có ràng buộc bằng $0.4$.')),
        b(r('For repeated IID Bernoulli samples with true probability $p_0=0.4$, the sample rate converges in probability to $0.4$ by the LLN.'),r('Với mẫu Bernoulli IID lặp lại có xác suất thật $p_0=0.4$, tỷ lệ mẫu hội tụ xác suất về $0.4$ theo LLN.')),
        b(r('Because $0.4$ is interior to the allowed interval, projection is continuous and fixes the limit; the clipped estimator is consistent for $0.4$.'),r('Vì $0.4$ nằm trong lòng đoạn cho phép, phép chiếu liên tục và giữ nguyên giới hạn; ước lượng bị cắt nhất quán với $0.4$.'))
      ]}
    ],
    reviewNote:'The finite-sample constrained maximizer is the clipped sample proportion, including all-success and all-failure data; consistency uses IID sampling and an interior true probability. The restriction 0<a<1/2 keeps the likelihood finite on the whole parameter interval.',
    sourceIds:['p-mit18655']
  },
  'm2-w049-e3':{
    title:b('Pointwise convergence can miss a moving spike','Hội tụ điểm có thể bỏ sót đỉnh nhọn di động'),
    application:b(r('A criterion may converge at every fixed parameter yet keep its maximizer far from the population optimum when a narrow peak moves with sample size.'),r('Một tiêu chuẩn có thể hội tụ tại từng tham số cố định nhưng vẫn giữ cực đại xa tối ưu tổng thể khi đỉnh hẹp dịch chuyển theo cỡ mẫu.')),
    formula:b(r('On $[0,1]$, let $M(\\theta)=-\\theta^2$, $\\theta_n=1-1/n$, $I_n=[\\theta_n,\\theta_n+1/(4n^2)]$, and $M_n=M+2\\mathbf 1_{I_n}$. Then $M_n(\\theta)\\to M(\\theta)$ for each fixed $\\theta$, while every maximizer tends to $1$.'),r('Trên $[0,1]$, đặt $M(\\theta)=-\\theta^2$, $\\theta_n=1-1/n$, $I_n=[\\theta_n,\\theta_n+1/(4n^2)]$ và $M_n=M+2\\mathbf 1_{I_n}$. Khi đó $M_n(\\theta)\\to M(\\theta)$ với mỗi $\\theta$ cố định, trong khi mọi điểm cực đại tiến tới $1$.')),
    steps:[
      b(r('The population objective $-\\theta^2$ has its unique maximum $0$ at $\\theta=0$.'),r('Tiêu chuẩn tổng thể $-\\theta^2$ có cực đại duy nhất $0$ tại $\\theta=0$.')),
      b(r('For any fixed $\\theta<1$, the interval $I_n$ eventually lies to its right; $\\theta=1$ is outside $I_n$ for all sufficiently large $n$. Hence each fixed point is hit only finitely often.'),r('Với mỗi $\\theta<1$ cố định, cuối cùng khoảng $I_n$ nằm bên phải nó; điểm $\\theta=1$ nằm ngoài $I_n$ khi $n$ đủ lớn. Vì vậy mỗi điểm cố định chỉ thuộc các khoảng này hữu hạn lần.')),
      b(r('On $I_n$, $M_n(\\theta)\\ge 2-(\\theta_n+1/(4n^2))^2\\to1$, whereas outside $I_n$ the value is $-\\theta^2\\le0$.'),r('Trên $I_n$, $M_n(\\theta)\\ge 2-(\\theta_n+1/(4n^2))^2\\to1$, còn ngoài $I_n$ giá trị là $-\\theta^2\\le0$.')),
      b(r('For large $n$ every maximizer is therefore inside $I_n$, and the intervals shrink toward $1$ rather than toward the population maximizer $0$.'),r('Vì thế khi $n$ lớn, mọi điểm cực đại nằm trong $I_n$; các khoảng co về $1$ chứ không về điểm cực đại tổng thể $0$.'))
    ],
    primarySolution:[
      b(r('The intervals have length $1/(4n^2)$ and their left endpoints increase to $1$ with gaps larger than the interval lengths for all sufficiently large $n$; a fixed $\\theta$ can belong to only finitely many intervals.'),r('Các khoảng có độ dài $1/(4n^2)$ và đầu trái tăng tới $1$ với khoảng cách giữa hai đầu lớn hơn độ dài khoảng khi $n$ đủ lớn; một $\\theta$ cố định chỉ thuộc hữu hạn khoảng.')),
      b(r('Thus the indicator term is eventually zero at every fixed $\\theta$, proving pointwise convergence $M_n(\\theta)\\to-\\theta^2$.'),r('Do đó số hạng chỉ báo cuối cùng bằng không tại mọi $\\theta$ cố định, chứng minh hội tụ điểm $M_n(\\theta)\\to-\\theta^2$.')),
      b(r('At the left endpoint $\\theta_n$, the score is $2-\\theta_n^2\\to1$, so the supremum is at least a quantity approaching one.'),r('Tại đầu trái $\\theta_n$, điểm số là $2-\\theta_n^2\\to1$, nên supremum ít nhất bằng một đại lượng tiến tới một.')),
      b(r('Outside $I_n$ the score is nonpositive; inside it the score is positive for large $n$. Hence all maximizers lie in $I_n$ and converge to $1$, not $0$.'),r('Ngoài $I_n$ điểm số không dương; bên trong điểm số dương khi $n$ lớn. Do đó mọi điểm cực đại nằm trong $I_n$ và hội tụ về $1$, không phải $0$.'))
    ],
    companions:[
      {prompt:b(r('A tuning parameter $x$ lies in $[-1,1]$ and has population score $M(x)=-(x+1/2)^2$. Define $J_n=[1/n,1/n+1/(8n^2)]$ and $M_n(x)=M(x)+2\\mathbf 1_{J_n}(x)$. Verify pointwise convergence and locate the limiting maximizer of $M_n$.'),r('Tham số điều chỉnh $x$ thuộc $[-1,1]$ có điểm tổng thể $M(x)=-(x+1/2)^2$. Đặt $J_n=[1/n,1/n+1/(8n^2)]$ và $M_n(x)=M(x)+2\\mathbf 1_{J_n}(x)$. Kiểm tra hội tụ điểm và xác định giới hạn của điểm cực đại $M_n$.')),solution:[
        b(r('The population maximum is $M(-1/2)=0$. The intervals $J_n$ shrink toward $0$ and are eventually disjoint, so a fixed $x$ belongs to only finitely many of them.'),r('Cực đại tổng thể là $M(-1/2)=0$. Các khoảng $J_n$ co về $0$ và cuối cùng rời nhau, nên một $x$ cố định chỉ thuộc hữu hạn khoảng.')),
        b(r('The spike therefore vanishes eventually at every fixed $x$, giving $M_n(x)\\to M(x)$ pointwise.'),r('Vì vậy đỉnh nhọn cuối cùng biến mất tại mọi $x$ cố định, cho $M_n(x)\\to M(x)$ từng điểm.')),
        b(r('At $x=1/n$, the criterion is $2-(1/n+1/2)^2\\to 7/4$, while outside $J_n$ it is at most $0$.'),r('Tại $x=1/n$, tiêu chuẩn là $2-(1/n+1/2)^2\\to 7/4$, trong khi ngoài $J_n$ nó không vượt quá $0$.')),
        b(r('Thus maximizers lie in $J_n$ for large $n$ and converge to $0$, although the population maximizer is $-1/2$.'),r('Do đó điểm cực đại nằm trong $J_n$ khi $n$ lớn và hội tụ về $0$, dù cực đại tổng thể là $-1/2$.'))
      ]},
      {prompt:b(r('On $[-2,2]$, let a calibration score be $M(x)=-(x-1/2)^2$. For $n\\ge2$, set $J_n=[2-1/n,2-1/n+1/(10n^2)]$ and $M_n=M+3\\mathbf1_{J_n}$. Show fixed-parameter convergence but inconsistent maximizers.'),r('Trên $[-2,2]$, cho điểm hiệu chuẩn $M(x)=-(x-1/2)^2$. Với $n\\ge2$, đặt $J_n=[2-1/n,2-1/n+1/(10n^2)]$ và $M_n=M+3\\mathbf1_{J_n}$. Chứng minh hội tụ tại tham số cố định nhưng điểm cực đại không nhất quán.')),solution:[
        b(r('The true maximizer is $x=1/2$. The intervals move upward to $2$ and are disjoint for large $n$ because adjacent left endpoints differ by $1/(n(n+1))$, exceeding $1/(10n^2)$.'),r('Cực đại thật là $x=1/2$. Các khoảng dịch lên $2$ và rời nhau khi $n$ lớn vì hai đầu trái kề nhau cách $1/(n(n+1))$, lớn hơn $1/(10n^2)$.' )),
        b(r('Consequently every fixed $x$ is in at most finitely many $J_n$, so $M_n(x)\\to M(x)$.'),r('Do đó mỗi $x$ cố định chỉ thuộc hữu hạn $J_n$, nên $M_n(x)\\to M(x)$.' )),
        b(r('At the left endpoint $x_n=2-1/n$, the value tends to $3-(3/2)^2=3/4>0$, whereas every non-spike value is at most $0$.'),r('Tại đầu trái $x_n=2-1/n$, giá trị tiến tới $3-(3/2)^2=3/4>0$, còn mọi giá trị ngoài đỉnh không quá $0$.')),
        b(r('Every maximizer is therefore in $J_n$ eventually and tends to $2$, separated from the population maximizer $1/2$.'),r('Vì vậy mọi điểm cực đại cuối cùng thuộc $J_n$ và tiến tới $2$, cách xa cực đại tổng thể $1/2$.'))
      ]},
      {prompt:b(r('A market model uses $x\\in[0,3]$, population criterion $M(x)=-(x-1)^2$, and sample criterion $M_n(x)=M(x)+4\\mathbf1_{K_n}(x)$ where $K_n=[3-1/n,3-1/n+1/(20n^2)]$. Explain why the sample argmax tends to $3$ despite pointwise convergence.'),r('Mô hình thị trường dùng $x\\in[0,3]$, tiêu chuẩn tổng thể $M(x)=-(x-1)^2$ và tiêu chuẩn mẫu $M_n(x)=M(x)+4\\mathbf1_{K_n}(x)$ với $K_n=[3-1/n,3-1/n+1/(20n^2)]$. Giải thích vì sao argmax mẫu tiến tới $3$ dù có hội tụ điểm.')),solution:[
        b(r('The population criterion has unique maximizer $x=1$ with value zero.'),r('Tiêu chuẩn tổng thể có cực đại duy nhất $x=1$ với giá trị bằng không.')),
        b(r('The intervals $K_n$ shrink toward $3$ and their lengths are smaller than the gaps between left endpoints, so each fixed $x$ is in only finitely many $K_n$.'),r('Các khoảng $K_n$ co về $3$ và độ dài nhỏ hơn khoảng cách giữa các đầu trái, nên mỗi $x$ cố định chỉ thuộc hữu hạn $K_n$.')),
        b(r('At $x_n=3-1/n$, $M_n(x_n)=4-(2-1/n)^2\\to0$; for every $n>1$ this value is positive, while outside the spike the score is at most zero.'),r('Tại $x_n=3-1/n$, $M_n(x_n)=4-(2-1/n)^2\\to0$; với mọi $n>1$ giá trị này dương, còn ngoài đỉnh điểm số không quá không.')),
        b(r('For large $n$ a spike point has positive score and every maximizer lies within $K_n$; hence its location tends to $3$, not $1$.'),r('Khi $n$ lớn, điểm trong đỉnh có điểm số dương và mọi cực đại nằm trong $K_n$; vì thế vị trí tiến tới $3$, không phải $1$.'))
      ]}
    ],
    reviewNote:'Pointwise convergence is verified by eventual exclusion of each fixed parameter from the moving intervals; inconsistent argmax requires the spike height to beat every off-spike value. The shrinking locations and positive score margins make that comparison explicit.',
    sourceIds:['p-mit18655']
  },
  'm2-w049-e4':{
    title:b('Prove a uniform law using finite nets','Chứng minh luật đều bằng lưới hữu hạn'),
    application:b(r('Use a finite parameter net and an integrable random Lipschitz envelope to turn pointwise laws of large numbers into uniform control of an empirical objective.'),r('Dùng lưới tham số hữu hạn và bao Lipschitz ngẫu nhiên khả tích để chuyển luật số lớn từng điểm thành kiểm soát đều của tiêu chuẩn thực nghiệm.')),
    formula:b(r('Let $\\Theta$ be compact metric, $Z_i$ IID, each $m_\\theta(Z)$ integrable with a pointwise LLN, and $|m_\\theta(Z)-m_\\eta(Z)|\\le L(Z)d(\\theta,\\eta)$ simultaneously a.s. for measurable $L\\ge0$ with $\\mathbb E L<\\infty$. With separability measurability for the supremum, $\\sup_{\\theta\\in\\Theta}|P_nm_\\theta-Pm_\\theta|\\xrightarrow{P}0$.'),r('Cho $\\Theta$ compact metric, $Z_i$ IID, mỗi $m_\\theta(Z)$ khả tích và thỏa LLN từng điểm, đồng thời $|m_\\theta(Z)-m_\\eta(Z)|\\le L(Z)d(\\theta,\\eta)$ h.k.c. cho mọi cặp với $L\\ge0$ đo được và $\\mathbb E L<\\infty$. Với điều kiện tách được đo được cho supremum, $\\sup_{\\theta\\in\\Theta}|P_nm_\\theta-Pm_\\theta|\\xrightarrow{P}0$.')),
    steps:[
      b(r('For a fixed mesh $\\delta>0$, compactness supplies a finite $\\delta$-net $\\{\\theta_1,\\ldots,\\theta_k\\}$.'),r('Với bước lưới cố định $\\delta>0$, tính compact cung cấp lưới $\\delta$ hữu hạn $\\{\\theta_1,\\ldots,\\theta_k\\}$.')),
      b(r('Pointwise LLN at these finitely many centers implies $\\max_{j\\le k}|(P_n-P)m_{\\theta_j}|\\xrightarrow{P}0$.'),r('LLN từng điểm tại hữu hạn tâm này suy ra $\\max_{j\\le k}|(P_n-P)m_{\\theta_j}|\\xrightarrow{P}0$.')),
      b(r('For any $\\theta$, choose a center within $\\delta$; the Lipschitz bound adds at most $\\delta(P_nL+PL)$ to the center error.'),r('Với mỗi $\\theta$, chọn tâm cách không quá $\\delta$; chặn Lipschitz cộng nhiều nhất $\\delta(P_nL+PL)$ vào sai số tại tâm.')),
      b(r('The LLN gives $P_nL\\to PL<\\infty$. First choose $\\delta$ so $2\\delta PL$ is small, then let $n$ grow to control the finite-net error and $P_nL$ fluctuation.'),r('LLN cho $P_nL\\to PL<\\infty$. Trước tiên chọn $\\delta$ để $2\\delta PL$ nhỏ, rồi cho $n$ tăng để khống chế sai số lưới hữu hạn và dao động của $P_nL$.'))
    ],
    primarySolution:[
      b(r('Fix a target tolerance $\\alpha>0$. Since $PL=\\mathbb E L$ is finite, choose $\\delta>0$ with $2\\delta PL<\\alpha/3$.'),r('Cố định ngưỡng sai số $\\alpha>0$. Vì $PL=\\mathbb E L$ hữu hạn, chọn $\\delta>0$ sao cho $2\\delta PL<\\alpha/3$.')),
      b(r('Cover compact $\\Theta$ by a finite $\\delta$-net. At every center the pointwise LLN holds; the maximum over finitely many centers therefore tends to zero in probability.'),r('Phủ $\\Theta$ compact bằng lưới $\\delta$ hữu hạn. LLN từng điểm đúng tại mọi tâm; do có hữu hạn tâm, giá trị lớn nhất các sai số tiến về không theo xác suất.')),
      b(r('For a parameter and its nearest center, $|(P_n-P)m_\\theta-(P_n-P)m_{\\theta_j}|\\le\\delta(P_nL+PL)$ by applying the envelope once to each empirical and population average.'),r('Với tham số và tâm gần nhất, $|(P_n-P)m_\\theta-(P_n-P)m_{\\theta_j}|\\le\\delta(P_nL+PL)$ do áp dụng bao một lần cho trung bình mẫu và một lần cho kỳ vọng tổng thể.')),
      b(r('Since $P_nL\\to PL$, this added term is below $\\alpha/2$ with probability tending to one. Together with the finite-net error this proves the displayed supremum converges to zero.'),r('Vì $P_nL\\to PL$, số hạng cộng thêm nhỏ hơn $\\alpha/2$ với xác suất tiến một. Ghép với sai số trên lưới hữu hạn chứng minh supremum đã nêu hội tụ về không.'))
    ],
    companions:[
      {prompt:b(r('Let $Z_i$ be IID Uniform$[0,1]$, $\\Theta=[0,1]$, and $m_\\theta(z)=-(z-\\theta)^2$. Verify a Lipschitz envelope and use a finite-net argument to establish a uniform LLN for this loss score.'),r('Cho $Z_i$ IID Uniform$[0,1]$, $\\Theta=[0,1]$ và $m_\\theta(z)=-(z-\\theta)^2$. Kiểm tra bao Lipschitz và dùng lập luận lưới hữu hạn để thiết lập LLN đều cho điểm số mất mát này.')),solution:[
        b(r('For $z,\\theta,\\eta\\in[0,1]$, $|m_\\theta(z)-m_\\eta(z)|=|\\theta-\\eta||2z-\\theta-\\eta|\\le2|\\theta-\\eta|$, so take $L(z)=2$.'),r('Với $z,\\theta,\\eta\\in[0,1]$, $|m_\\theta(z)-m_\\eta(z)|=|\\theta-\\eta||2z-\\theta-\\eta|\\le2|\\theta-\\eta|$, nên chọn $L(z)=2$.')),
        b(r('The losses are bounded, so for each fixed $\\theta$ the IID LLN applies; also $\\mathbb E L=2$.'),r('Các hàm mất mát bị chặn nên LLN IID áp dụng với mỗi $\\theta$ cố định; đồng thời $\\mathbb E L=2$.')),
        b(r('A finite $\\delta$-net controls center errors by the finite collection of pointwise LLNs, and the off-net error is at most $\\delta(P_nL+PL)\\to4\\delta$.'),r('Lưới $\\delta$ hữu hạn khống chế sai số tại tâm nhờ hữu hạn LLN từng điểm; sai số ngoài lưới không quá $\\delta(P_nL+PL)\\to4\\delta$.')),
        b(r('Choosing $\\delta$ arbitrarily small proves $\\sup_{\\theta\\in[0,1]}|(P_n-P)m_\\theta|\\to0$ in probability.'),r('Chọn $\\delta$ nhỏ tùy ý chứng minh $\\sup_{\\theta\\in[0,1]}|(P_n-P)m_\\theta|\\to0$ theo xác suất.'))
      ]},
      {prompt:b(r('For IID $Z_i\\sim\\operatorname{Poisson}(3/2)$, consider the log-likelihood contribution $m_\\theta(z)=z\\log\\theta-\\theta$ on $\\Theta=[1,2]$. Give an integrable Lipschitz envelope and explain the finite-net uniform law.'),r('Với $Z_i\\sim\\operatorname{Poisson}(3/2)$ IID, xét số hạng log-likelihood $m_\\theta(z)=z\\log\\theta-\\theta$ trên $\\Theta=[1,2]$. Tìm bao Lipschitz khả tích và giải thích luật đều bằng lưới hữu hạn.')),solution:[
        b(r('The derivative in $\\theta$ is $z/\\theta-1$, whose absolute value on $[1,2]$ is at most $z+1$; the mean-value theorem gives $L(z)=z+1$.'),r('Đạo hàm theo $\\theta$ là $z/\\theta-1$, có trị tuyệt đối trên $[1,2]$ không quá $z+1$; định lý giá trị trung bình cho $L(z)=z+1$.')),
        b(r('Under Poisson$(3/2)$, $\\mathbb E L=\\mathbb E Z+1=5/2<\\infty$, and $|m_\\theta(Z)|$ is integrable for each fixed $\\theta$.'),r('Với Poisson$(3/2)$, $\\mathbb E L=\\mathbb E Z+1=5/2<\\infty$, và $|m_\\theta(Z)|$ khả tích với mỗi $\\theta$ cố định.')),
        b(r('The IID LLN gives convergence at each point of a finite net and $P_nL\\to5/2$.'),r('LLN IID cho hội tụ tại từng điểm của lưới hữu hạn và $P_nL\\to5/2$.')),
        b(r('Approximating any parameter by a net point adds at most $\\delta(P_nL+5/2)$, which tends to $5\\delta$; taking the mesh arbitrarily fine proves uniform convergence.'),r('Xấp xỉ tham số bất kỳ bằng điểm lưới chỉ thêm nhiều nhất $\\delta(P_nL+5/2)$, tiến tới $5\\delta$; làm lưới tùy ý mịn cho hội tụ đều.'))
      ]},
      {prompt:b(r('A materials lab has IID readings $Z_i\\sim\\operatorname{Uniform}[-1,1]$ and scores candidate offsets $\\theta\\in[-1,1]$ by $m_\\theta(z)=-(z-\\theta)^4$. Find a deterministic Lipschitz envelope and prove the corresponding uniform LLN.'),r('Một phòng thí nghiệm vật liệu có số đo $Z_i\\sim\\operatorname{Uniform}[-1,1]$ IID và chấm độ lệch ứng viên $\\theta\\in[-1,1]$ bằng $m_\\theta(z)=-(z-\\theta)^4$. Tìm bao Lipschitz tất định và chứng minh LLN đều tương ứng.')),solution:[
        b(r('The derivative magnitude is $4|z-\\theta|^3\\le4(2)^3=32$ throughout the parameter and observation ranges, so $L(z)=32$ works.'),r('Độ lớn đạo hàm là $4|z-\\theta|^3\\le4(2)^3=32$ trên miền tham số và quan sát, nên $L(z)=32$ dùng được.')),
        b(r('The scores are bounded by $16$, so each fixed-parameter pointwise LLN holds; the envelope has finite mean $32$.'),r('Điểm số bị chặn bởi $16$, nên LLN từng điểm đúng với mỗi tham số cố định; bao có kỳ vọng hữu hạn $32$.')),
        b(r('For any finite $\\delta$-net, its maximum center error tends to zero, while each off-net difference contributes at most $32\\delta$ to both empirical and population terms.'),r('Với mọi lưới $\\delta$ hữu hạn, sai số lớn nhất tại tâm tiến về không, còn chênh lệch ngoài lưới đóng góp nhiều nhất $32\\delta$ cho cả trung bình mẫu và tổng thể.')),
        b(r('Thus the supremum discrepancy is asymptotically at most $64\\delta$; let $\\delta\\downarrow0$ to obtain the uniform law.'),r('Do đó sai khác supremum tiệm cận không quá $64\\delta$; cho $\\delta\\downarrow0$ suy ra luật đều.'))
      ]}
    ],
    reviewNote:'The finite-net argument needs IID integrability for each center and for the envelope, plus a common almost-sure Lipschitz bound over parameter pairs. Compactness makes the net finite; separability/measurability is stated so the supremum is a legitimate random variable.',
    sourceIds:['p-mit18655']
  },
  'm2-w049-e5':{
    title:b('Project a method-of-moments estimate onto its parameter space','Chiếu ước lượng moment lên miền tham số'),
    application:b(r('A moment estimate may fall outside the permitted parameter interval; projection preserves consistency when the true mean lies in the interval.'),r('Ước lượng moment có thể rơi ngoài đoạn tham số cho phép; phép chiếu giữ tính nhất quán khi trung bình thật nằm trong đoạn.')),
    formula:b(r('For IID integrable $Z_i$ with $\\mathbb E Z_i=\\theta_0\\in[a,b]$, $a<b$, let $\\hat\\theta_n=\\Pi_{[a,b]}(\\bar Z_n)=\\min\\{b,\\max\\{a,\\bar Z_n\\}\\}$. Then $|\\hat\\theta_n-\\theta_0|\\le|\\bar Z_n-\\theta_0|\\xrightarrow{P}0$.'),r('Với $Z_i$ IID khả tích, $\\mathbb E Z_i=\\theta_0\\in[a,b]$ và $a<b$, đặt $\\hat\\theta_n=\\Pi_{[a,b]}(\\bar Z_n)=\\min\\{b,\\max\\{a,\\bar Z_n\\}\\}$. Khi đó $|\\hat\\theta_n-\\theta_0|\\le|\\bar Z_n-\\theta_0|\\xrightarrow{P}0$.')),
    steps:[
      b(r('The IID weak law requires integrability and gives $\\bar Z_n\\to\\theta_0$ in probability.'),r('Luật yếu IID cần tính khả tích và cho $\\bar Z_n\\to\\theta_0$ theo xác suất.')),
      b(r('Maximizing $M_n(\\theta)=-(\\bar Z_n-\\theta)^2$ over $[a,b]$ chooses the feasible point nearest to $\\bar Z_n$, which is its interval projection.'),r('Cực đại hóa $M_n(\\theta)=-(\\bar Z_n-\\theta)^2$ trên $[a,b]$ chọn điểm khả thi gần $\\bar Z_n$ nhất, chính là hình chiếu lên đoạn.')),
      b(r('Because $\\theta_0$ is feasible, projection onto a closed interval cannot increase distance to it: $|\\hat\\theta_n-\\theta_0|\\le|\\bar Z_n-\\theta_0|$.'),r('Vì $\\theta_0$ khả thi, phép chiếu lên đoạn đóng không làm tăng khoảng cách tới nó: $|\\hat\\theta_n-\\theta_0|\\le|\\bar Z_n-\\theta_0|$.')),
      b(r('The distance bound and the weak law imply $\\hat\\theta_n\\to\\theta_0$ in probability, even if $\\theta_0$ is an endpoint.'),r('Chặn khoảng cách và luật yếu suy ra $\\hat\\theta_n\\to\\theta_0$ theo xác suất, kể cả khi $\\theta_0$ là đầu mút.'))
    ],
    primarySolution:[
      b(r('Integrability and IID sampling allow the weak LLN, so $\\bar Z_n\\to\\theta_0$ in probability.'),r('Tính khả tích và lấy mẫu IID cho phép dùng LLN yếu, nên $\\bar Z_n\\to\\theta_0$ theo xác suất.')),
      b(r('For each observed sample, $-(\\bar Z_n-\\theta)^2$ is maximized on $[a,b]$ by the nearest feasible value: $\\hat\\theta_n=\\min\\{b,\\max\\{a,\\bar Z_n\\}\\}$.'),r('Với mỗi mẫu quan sát, $-(\\bar Z_n-\\theta)^2$ đạt cực đại trên $[a,b]$ tại giá trị khả thi gần nhất: $\\hat\\theta_n=\\min\\{b,\\max\\{a,\\bar Z_n\\}\\}$.')),
      b(r('Since $\\theta_0\\in[a,b]$, projecting cannot move the sample mean farther from $\\theta_0$, so $|\\hat\\theta_n-\\theta_0|\\le|\\bar Z_n-\\theta_0|$.'),r('Vì $\\theta_0\\in[a,b]$, phép chiếu không thể đẩy trung bình mẫu xa $\\theta_0$ hơn, nên $|\\hat\\theta_n-\\theta_0|\\le|\\bar Z_n-\\theta_0|$.')),
      b(r('The right side converges to zero in probability; the squeeze proves consistency. In a finite sample the two estimates can differ whenever $\\bar Z_n\\notin[a,b]$.'),r('Vế phải hội tụ về không theo xác suất; phép kẹp chứng minh tính nhất quán. Ở mẫu hữu hạn, hai ước lượng có thể khác khi $\\bar Z_n\\notin[a,b]$.'))
    ],
    companions:[
      {prompt:b(r('A scale parameter is known to lie in $[2,5]$ and is estimated by the mean of IID gauge readings with finite mean $\\theta_0=3.4$. If one sample has readings $1.8,2.6,3.0,2.6$, compute the raw and projected moment estimates, then establish consistency for repeated samples.'),r('Một tham số tỷ lệ được biết nằm trong $[2,5]$ và ước lượng bằng trung bình các số đo IID có trung bình hữu hạn $\\theta_0=3.4$. Nếu một mẫu có số đo $1.8,2.6,3.0,2.6$, tính ước lượng moment thô và ước lượng đã chiếu, rồi chứng minh tính nhất quán khi lấy mẫu lặp lại.')),solution:[
        b(r('The sample mean is $(1.8+2.6+3.0+2.6)/4=2.5$, which already lies in $[2,5]$; projection leaves it at $2.5$.'),r('Trung bình mẫu là $(1.8+2.6+3.0+2.6)/4=2.5$, đã nằm trong $[2,5]$; phép chiếu giữ nguyên $2.5$.')),
        b(r('For future IID readings with finite mean $3.4$, the weak LLN gives $\\bar Z_n\\to3.4$ in probability.'),r('Với số đo IID tương lai có trung bình hữu hạn $3.4$, LLN yếu cho $\\bar Z_n\\to3.4$ theo xác suất.')),
        b(r('Since $3.4$ is feasible, $|\\Pi_{[2,5]}(\\bar Z_n)-3.4|\\le|\\bar Z_n-3.4|\\to0$, proving consistency.'),r('Vì $3.4$ khả thi, $|\\Pi_{[2,5]}(\\bar Z_n)-3.4|\\le|\\bar Z_n-3.4|\\to0$, chứng minh tính nhất quán.'))
      ]},
      {prompt:b(r('A temperature sensor is constrained to report a calibration mean in $[16,22]$. Four readings are $12,14,15,17$. Compute the raw and projected means. For repeated IID readings with finite true mean $\\theta_0\\in[16,22]$, give the distance bound that proves consistency.'),r('Cảm biến nhiệt độ phải báo cáo trung bình hiệu chuẩn trong $[16,22]$. Bốn số đo là $12,14,15,17$. Tính trung bình thô và trung bình đã chiếu. Với số đo IID lặp lại có trung bình thật hữu hạn $\\theta_0\\in[16,22]$, nêu chặn khoảng cách chứng minh tính nhất quán.')),solution:[
        b(r('The raw mean is $(12+14+15+17)/4=14.5$, below the feasible interval.'),r('Trung bình thô là $(12+14+15+17)/4=14.5$, thấp hơn đoạn khả thi.')),
        b(r('The nearest feasible point is its lower endpoint, so the constrained estimate is $\\Pi_{[16,22]}(14.5)=16$.'),r('Điểm khả thi gần nhất là đầu mút dưới, nên ước lượng có ràng buộc là $\\Pi_{[16,22]}(14.5)=16$.')),
        b(r('For any feasible true mean, projection gives $|\\Pi_{[16,22]}(\\bar Z_n)-\\theta_0|\\le|\\bar Z_n-\\theta_0|$. IID integrability makes the right side tend to zero by the weak LLN.'),r('Với mọi trung bình thật khả thi, phép chiếu cho $|\\Pi_{[16,22]}(\\bar Z_n)-\\theta_0|\\le|\\bar Z_n-\\theta_0|$. Tính khả tích IID khiến vế phải tiến về không theo LLN yếu.'))
      ]},
      {prompt:b(r('An environmental concentration is estimated by the average of IID nonnegative measurements with finite mean $\\theta_0=4.2$, but regulation requires a reported value in $[0,4]$. For a sample mean of $4.8$, compute the constrained estimate. Prove its large-sample limit and note whether it estimates the true mean.'),r('Nồng độ môi trường được ước lượng bằng trung bình các phép đo IID không âm có trung bình hữu hạn $\\theta_0=4.2$, nhưng quy định yêu cầu giá trị báo cáo thuộc $[0,4]$. Với trung bình mẫu $4.8$, tính ước lượng có ràng buộc. Chứng minh giới hạn mẫu lớn và nhận xét nó có ước lượng trung bình thật không.')),solution:[
        b(r('Projection clips the observed mean to the upper endpoint: $\\hat\\theta_n=4$ when $\\bar Z_n=4.8$.'),r('Phép chiếu cắt trung bình quan sát tại đầu mút trên: $\\hat\\theta_n=4$ khi $\\bar Z_n=4.8$.')),
        b(r('The IID weak LLN gives $\\bar Z_n\\to4.2$; the projection map is continuous, so $\\Pi_{[0,4]}(\\bar Z_n)\\to\\Pi_{[0,4]}(4.2)=4$.'),r('LLN yếu IID cho $\\bar Z_n\\to4.2$; phép chiếu liên tục nên $\\Pi_{[0,4]}(\\bar Z_n)\\to\\Pi_{[0,4]}(4.2)=4$.')),
        b(r('The constrained estimate converges to $4$, not $4.2$, because the true mean is outside the allowed set; the feasible-truth consistency bound does not apply.'),r('Ước lượng có ràng buộc hội tụ về $4$, không phải $4.2$, vì trung bình thật nằm ngoài miền cho phép; chặn nhất quán với giá trị thật khả thi không áp dụng.'))
      ]}
    ],
    reviewNote:'Projection consistency requires the population mean to belong to the closed parameter interval and IID integrability for the weak LLN. The final companion deliberately violates feasibility: continuity gives a clipped pseudo-target, not the true mean.',
    sourceIds:['p-mit18655']
  },
  'm2-w050-e1':{
    title:b('Derive the sandwich representation','Suy ra biểu diễn sandwich'),
    application:b(r('Linearize an estimating equation around the target and invert its average Jacobian to express the estimator error as a transformed empirical score.'),r('Tuyến tính hóa phương trình ước lượng quanh giá trị đích rồi đảo Jacobian trung bình để biểu diễn sai số ước lượng qua score thực nghiệm đã biến đổi.')),
    formula:b(r('For IID $Z_i$, an interior $\\theta_0$, $P\\psi_{\\theta_0}=0$, finite $B=P[\\psi_{\\theta_0}\\psi_{\\theta_0}^{\\mathsf T}]$, a consistent approximate root $P_n\\psi_{\\hat\\theta_n}=o_P(n^{-1/2})$, and a locally uniform derivative LLN with $P\\dot\\psi_{\\theta_0}=-A$ nonsingular, $\\sqrt n(\\hat\\theta_n-\\theta_0)=A^{-1}\\sqrt nP_n\\psi_{\\theta_0}+o_P(1)\\Rightarrow N(0,A^{-1}BA^{-\\mathsf T})$.'),r('Với $Z_i$ IID, $\\theta_0$ trong lòng miền, $P\\psi_{\\theta_0}=0$, $B=P[\\psi_{\\theta_0}\\psi_{\\theta_0}^{\\mathsf T}]$ hữu hạn, nghiệm gần đúng nhất quán $P_n\\psi_{\\hat\\theta_n}=o_P(n^{-1/2})$, và LLN đạo hàm đều cục bộ với $P\\dot\\psi_{\\theta_0}=-A$ không suy biến, $\\sqrt n(\\hat\\theta_n-\\theta_0)=A^{-1}\\sqrt nP_n\\psi_{\\theta_0}+o_P(1)\\Rightarrow N(0,A^{-1}BA^{-\\mathsf T})$.')),
    steps:[
      b(r('Apply the integral mean-value identity to each score vector: the change from $\\theta_0$ to $\\hat\\theta_n$ is the segment-integrated Jacobian times $\\hat\\theta_n-\\theta_0$.'),r('Áp dụng đồng nhất thức giá trị trung bình dạng tích phân cho vector score: độ đổi từ $\\theta_0$ tới $\\hat\\theta_n$ bằng Jacobian tích phân dọc đoạn nhân $\\hat\\theta_n-\\theta_0$.')),
      b(r('Consistency keeps that random segment in a shrinking neighborhood of $\\theta_0$; the local uniform derivative LLN and continuity of $P\\dot\\psi_\\theta$ make its integrated Jacobian converge to $P\\dot\\psi_{\\theta_0}=-A$.'),r('Tính nhất quán giữ đoạn ngẫu nhiên trong lân cận co về $\\theta_0$; LLN đạo hàm đều cục bộ và tính liên tục của $P\\dot\\psi_\\theta$ khiến Jacobian tích phân hội tụ về $P\\dot\\psi_{\\theta_0}=-A$.')),
      b(r('The approximate-root error is $o_P(n^{-1/2})$, so rearranging the expansion and multiplying by $\\sqrt n$ gives $-J_n^{-1}\\sqrt nP_n\\psi_{\\theta_0}+o_P(1)$, where $J_n\\to_P-A$.'),r('Sai số nghiệm gần đúng là $o_P(n^{-1/2})$, nên sắp xếp khai triển và nhân $\\sqrt n$ cho $-J_n^{-1}\\sqrt nP_n\\psi_{\\theta_0}+o_P(1)$, với $J_n\\to_P-A$.')),
      b(r('Since $-J_n^{-1}\\to_PA^{-1}$, the representation follows. The IID score CLT and Slutsky give covariance $A^{-1}BA^{-\\mathsf T}$.'),r('Vì $-J_n^{-1}\\to_PA^{-1}$, ta được biểu diễn cần chứng minh. CLT score IID và định lý Slutsky cho hiệp phương sai $A^{-1}BA^{-\\mathsf T}$.'))
    ],
    primarySolution:[
      b(r('Let $J_n=\\int_0^1P_n\\dot\\psi_{\\theta_0+t(\\hat\\theta_n-\\theta_0)}dt$. The integral Taylor expansion and approximate-root condition give $0=P_n\\psi_{\\theta_0}+J_n(\\hat\\theta_n-\\theta_0)+o_P(n^{-1/2})$.'),r('Đặt $J_n=\\int_0^1P_n\\dot\\psi_{\\theta_0+t(\\hat\\theta_n-\\theta_0)}dt$. Khai triển Taylor tích phân và điều kiện nghiệm gần đúng cho $0=P_n\\psi_{\\theta_0}+J_n(\\hat\\theta_n-\\theta_0)+o_P(n^{-1/2})$.')),
      b(r('Consistency plus the uniform derivative LLN over a neighborhood of $\\theta_0$ makes $J_n\\to_P P\\dot\\psi_{\\theta_0}=-A$; continuity of the population derivative handles the segment endpoints.'),r('Tính nhất quán cùng LLN đạo hàm đều trên lân cận $\\theta_0$ khiến $J_n\\to_P P\\dot\\psi_{\\theta_0}=-A$; tính liên tục của đạo hàm tổng thể xử lý các điểm trên đoạn.')),
      b(r('Because $A$ is nonsingular, $J_n$ is invertible with probability tending to one and $-J_n^{-1}\\to_PA^{-1}$. Rearranging yields $\\sqrt n(\\hat\\theta_n-\\theta_0)=A^{-1}\\sqrt nP_n\\psi_{\\theta_0}+o_P(1)$.'),r('Vì $A$ không suy biến, $J_n$ khả nghịch với xác suất tiến một và $-J_n^{-1}\\to_PA^{-1}$. Sắp xếp lại được $\\sqrt n(\\hat\\theta_n-\\theta_0)=A^{-1}\\sqrt nP_n\\psi_{\\theta_0}+o_P(1)$.')),
      b(r('The score has mean zero and finite covariance $B$, so its IID CLT gives $\\sqrt nP_n\\psi_{\\theta_0}\\Rightarrow N(0,B)$; Slutsky yields the sandwich limit.'),r('Score có trung bình không và hiệp phương sai hữu hạn $B$, nên CLT IID cho $\\sqrt nP_n\\psi_{\\theta_0}\\Rightarrow N(0,B)$; Slutsky suy ra giới hạn sandwich.'))
    ],
    companions:[
      {prompt:b(r('A location estimate solves $P_n\\psi_\\theta=0$ with $\\psi_\\theta(z)=z-\\theta$. The IID reading distribution is uniform on $\\{1,2,5\\}$. Compute the root, $A$, $B$, and the asymptotic standard error at $n=100$.'),r('Ước lượng vị trí giải $P_n\\psi_\\theta=0$ với $\\psi_\\theta(z)=z-\\theta$. Phân phối số đo IID đều trên $\\{1,2,5\\}$. Tính nghiệm, $A$, $B$ và sai số chuẩn tiệm cận khi $n=100$.')),solution:[
        b(r('The root is the sample mean; the population mean is $\\theta_0=(1+2+5)/3=8/3$.'),r('Nghiệm là trung bình mẫu; trung bình tổng thể là $\\theta_0=(1+2+5)/3=8/3$.')),
        b(r('The derivative is $\\dot\\psi=-1$, so $A=1$. The score variance is $B=\\{(1-8/3)^2+(2-8/3)^2+(5-8/3)^2\\}/3=26/9$.'),r('Đạo hàm là $\\dot\\psi=-1$, nên $A=1$. Phương sai score là $B=\\{(1-8/3)^2+(2-8/3)^2+(5-8/3)^2\\}/3=26/9$.')),
        b(r('Thus $\\operatorname{Var}(\\hat\\theta_n)\\approx(26/9)/n$; at $n=100$, $SE\\approx\\sqrt{26/900}\\approx0.170$.'),r('Vì vậy $\\operatorname{Var}(\\hat\\theta_n)\\approx(26/9)/n$; khi $n=100$, $SE\\approx\\sqrt{26/900}\\approx0.170$.'))
      ]},
      {prompt:b(r('A robust center estimator solves the sample equation for $\\psi_\\theta(U)=U-\\theta$ where IID errors are equally likely to be $-2,-1,1,2$. Find the sandwich variance of the scaled estimator and its standard error at $n=100$.'),r('Ước lượng tâm bền vững giải phương trình mẫu với $\\psi_\\theta(U)=U-\\theta$, trong đó sai số IID nhận đều các giá trị $-2,-1,1,2$. Tìm phương sai sandwich của ước lượng đã nhân căn bậc hai cỡ mẫu và sai số chuẩn khi $n=100$.')),solution:[
        b(r('Symmetry gives $\\theta_0=EU=0$, and the score derivative is $-1$, so $A=1$.'),r('Tính đối xứng cho $\\theta_0=EU=0$, còn đạo hàm score là $-1$, nên $A=1$.')),
        b(r('The score variance is $B=E[U^2]=(4+1+1+4)/4=5/2$.'),r('Phương sai score là $B=E[U^2]=(4+1+1+4)/4=5/2$.')),
        b(r('The sandwich variance is $A^{-2}B=5/2$. Hence $SE(\\hat\\theta_n)\\approx\\sqrt{(5/2)/100}=\\sqrt{0.025}\\approx0.158$.'),r('Phương sai sandwich là $A^{-2}B=5/2$. Do đó $SE(\\hat\\theta_n)\\approx\\sqrt{(5/2)/100}=\\sqrt{0.025}\\approx0.158$.'))
      ]},
      {prompt:b(r('For IID Poisson$(4)$ counts, estimate the log rate $\\eta=\\log\\lambda$ from $\\psi_\\eta(Z)=Z-e^\\eta=0$. At $\\eta_0=\\log4$, calculate the derivative sensitivity, score variance, and asymptotic variance of $\\sqrt n(\\hat\\eta-\\eta_0)$. Assume a consistent approximate root.'),r('Với số đếm Poisson$(4)$ IID, ước lượng log-rate $\\eta=\\log\\lambda$ từ $\\psi_\\eta(Z)=Z-e^\\eta=0$. Tại $\\eta_0=\\log4$, tính độ nhạy đạo hàm, phương sai score và phương sai tiệm cận của $\\sqrt n(\\hat\\eta-\\eta_0)$. Giả sử có nghiệm gần đúng nhất quán.')),solution:[
        b(r('At $\\eta_0=\\log4$, $E\\psi_{\\eta_0}=EZ-4=0$ and $\\dot\\psi_{\\eta_0}=-e^{\\eta_0}=-4$, so $A=4$.'),r('Tại $\\eta_0=\\log4$, $E\\psi_{\\eta_0}=EZ-4=0$ và $\\dot\\psi_{\\eta_0}=-e^{\\eta_0}=-4$, nên $A=4$.')),
        b(r('For a Poisson$(4)$ variable, $B=\\operatorname{Var}(Z)=4$.'),r('Với biến Poisson$(4)$, $B=\\operatorname{Var}(Z)=4$.')),
        b(r('The sandwich variance is $A^{-2}B=4/16=1/4$. The finite root is $\\hat\\eta=\\log\\bar Z_n$ when $\\bar Z_n>0$, an event whose probability tends to one.'),r('Phương sai sandwich là $A^{-2}B=4/16=1/4$. Nghiệm hữu hạn là $\\hat\\eta=\\log\\bar Z_n$ khi $\\bar Z_n>0$, biến cố có xác suất tiến một.'))
      ]}
    ],
    reviewNote:'The integral Taylor Jacobian must converge along the random segment, which is justified here by consistency, continuity of the expected derivative, and a local uniform derivative LLN (often proved with an integrable envelope). The score CLT separately requires IID sampling, zero mean, and finite covariance; A is defined as minus the derivative limit.',
    sourceIds:['p-mit18655']
  },
  'm2-w050-e2':{
    title:b('Compute a scalar robust sandwich variance','Tính phương sai sandwich bền vững vô hướng'),
    application:b(r('Combine score variability with the derivative sensitivity; divide the variance of the scaled limit by sample size to obtain the estimator standard error.'),r('Kết hợp độ biến thiên score với độ nhạy đạo hàm; chia phương sai giới hạn đã chuẩn hóa cho cỡ mẫu để được sai số chuẩn ước lượng.')),
    formula:b(r('For a regular scalar IID estimating equation with $E\\psi(Z,\\theta_0)=0$, $B=E[\\psi(Z,\\theta_0)^2]<\\infty$, derivative limit $E\\partial_\\theta\\psi(Z,\\theta_0)=-A$ with $A\\ne0$, and a consistent approximate root, $V=B/A^2$ is the limit variance of $\\sqrt n(\\hat\\theta_n-\\theta_0)$; $SE(\\hat\\theta_n)\\approx\\sqrt{V/n}$.'),r('Với phương trình ước lượng vô hướng IID chính quy có $E\\psi(Z,\\theta_0)=0$, $B=E[\\psi(Z,\\theta_0)^2]<\\infty$, giới hạn đạo hàm $E\\partial_\\theta\\psi(Z,\\theta_0)=-A$ với $A\\ne0$, và nghiệm gần đúng nhất quán, $V=B/A^2$ là phương sai giới hạn của $\\sqrt n(\\hat\\theta_n-\\theta_0)$; $SE(\\hat\\theta_n)\\approx\\sqrt{V/n}$.')),
    steps:[
      b(r('For scalar sensitivity $A=2$ and score variance $B=18$, square the sensitivity in the sandwich denominator.'),r('Với độ nhạy vô hướng $A=2$ và phương sai score $B=18$, bình phương độ nhạy ở mẫu số sandwich.')),
      b(r('The scaled-estimator variance is $V=B/A^2=18/2^2=4.5$.'),r('Phương sai của ước lượng đã chuẩn hóa là $V=B/A^2=18/2^2=4.5$.')),
      b(r('At $n=200$, the estimator variance is approximately $V/n=4.5/200=0.0225$.'),r('Khi $n=200$, phương sai ước lượng xấp xỉ $V/n=4.5/200=0.0225$.')),
      b(r('Taking the square root gives $SE\\approx\\sqrt{0.0225}=0.15$.'),r('Lấy căn bậc hai được $SE\\approx\\sqrt{0.0225}=0.15$.'))
    ],
    primarySolution:[
      b(r('The scalar sandwich formula is $V=B/A^2$, so $V=18/(2^2)=18/4=4.5$.'),r('Công thức sandwich vô hướng là $V=B/A^2$, nên $V=18/(2^2)=18/4=4.5$.')),
      b(r('This is the asymptotic variance of the root-n scaled error, not the variance of $\\hat\\theta_n$ itself.'),r('Đây là phương sai tiệm cận của sai số đã nhân căn cỡ mẫu, không phải phương sai của chính $\\hat\\theta_n$.')),
      b(r('At $n=200$, divide by sample size: $\\operatorname{Var}(\\hat\\theta_n)\\approx4.5/200=0.0225$.'),r('Khi $n=200$, chia cho cỡ mẫu: $\\operatorname{Var}(\\hat\\theta_n)\\approx4.5/200=0.0225$.')),
      b(r('Thus $SE(\\hat\\theta_n)\\approx\\sqrt{0.0225}=0.15$.'),r('Do đó $SE(\\hat\\theta_n)\\approx\\sqrt{0.0225}=0.15$.'))
    ],
    companions:[
      {prompt:b(r('A robust traffic-flow estimating score has sensitivity $A=1.5$ and finite score variance $B=3.6$. Find the asymptotic variance of the root-n estimator and its standard error for $n=100$.'),r('Score ước lượng lưu lượng giao thông bền vững có độ nhạy $A=1.5$ và phương sai score hữu hạn $B=3.6$. Tìm phương sai tiệm cận của ước lượng nhân căn cỡ mẫu và sai số chuẩn khi $n=100$.')),solution:[
        b(r('The sandwich variance is $V=B/A^2=3.6/(1.5)^2=3.6/2.25=1.6$.'),r('Phương sai sandwich là $V=B/A^2=3.6/(1.5)^2=3.6/2.25=1.6$.')),
        b(r('For $n=100$, $\\operatorname{Var}(\\hat\\theta_n)\\approx1.6/100=0.016$.'),r('Với $n=100$, $\\operatorname{Var}(\\hat\\theta_n)\\approx1.6/100=0.016$.')),
        b(r('Hence $SE\\approx\\sqrt{0.016}\\approx0.1265$.'),r('Do đó $SE\\approx\\sqrt{0.016}\\approx0.1265$.'))
      ]},
      {prompt:b(r('A clinical-study score has derivative limit $-A=-4$ and score variance $B=32$. Compute the asymptotic estimator variance and standard error at sample size $n=400$.'),r('Score của nghiên cứu lâm sàng có giới hạn đạo hàm $-A=-4$ và phương sai score $B=32$. Tính phương sai ước lượng tiệm cận và sai số chuẩn ở cỡ mẫu $n=400$.')),solution:[
        b(r('The sensitivity is $A=4$, so the scaled limit variance is $V=32/4^2=2$.'),r('Độ nhạy là $A=4$, nên phương sai giới hạn chuẩn hóa là $V=32/4^2=2$.')),
        b(r('The estimator variance is approximately $2/400=0.005$.'),r('Phương sai ước lượng xấp xỉ $2/400=0.005$.')),
        b(r('The standard error is $\\sqrt{0.005}\\approx0.0707$.'),r('Sai số chuẩn là $\\sqrt{0.005}\\approx0.0707$.'))
      ]},
      {prompt:b(r('An equipment-calibration estimating equation has sensitivity $A=0.8$ and score variance $B=5$. Find the root-n limit variance, then the estimator variance and standard error at $n=50$.'),r('Phương trình ước lượng hiệu chuẩn thiết bị có độ nhạy $A=0.8$ và phương sai score $B=5$. Tìm phương sai giới hạn nhân căn cỡ mẫu, rồi phương sai ước lượng và sai số chuẩn khi $n=50$.')),solution:[
        b(r('The scaled variance is $V=5/(0.8)^2=5/0.64=7.8125$.'),r('Phương sai chuẩn hóa là $V=5/(0.8)^2=5/0.64=7.8125$.')),
        b(r('Dividing by $n=50$ gives $\\operatorname{Var}(\\hat\\theta_n)\\approx7.8125/50=0.15625$.'),r('Chia cho $n=50$ được $\\operatorname{Var}(\\hat\\theta_n)\\approx7.8125/50=0.15625$.')),
        b(r('Therefore $SE\\approx\\sqrt{0.15625}\\approx0.3953$.'),r('Vì vậy $SE\\approx\\sqrt{0.15625}\\approx0.3953$.'))
      ]}
    ],
    reviewNote:'The denominator is the square of the derivative sensitivity, while estimator variance is the root-n limit variance divided by n. The displayed standard errors are asymptotic approximations and require the scalar sandwich limit assumptions stated in the formula.',
    sourceIds:['p-mit18655']
  },
  'm2-w050-e3':{
    title:b('Derive the likelihood information equality','Suy ra đẳng thức thông tin likelihood'),
    application:b(r('Check when curvature of a correctly specified likelihood equals score variability; the identity depends on differentiating the normalized density over fixed support.'),r('Kiểm tra khi nào độ cong của likelihood đúng bằng độ biến thiên score; đẳng thức phụ thuộc vào việc đạo hàm mật độ chuẩn hóa trên miền hỗ trợ cố định.')),
    formula:b(r('For a normalized scalar density $f_\\theta$ on support $S$ independent of $\\theta$, assume $f_\\theta>0$ on $S$, twice differentiability, valid differentiation of $\\int_S f_\\theta=1$ under the integral, and finite score second moment. With $\\ell_\\theta=\\log f_\\theta$, $-E_\\theta[\\ell_\\theta^{\\prime\\prime}]=E_\\theta[(\\ell_\\theta^{\\prime})^2]$.'),r('Với mật độ vô hướng chuẩn hóa $f_\\theta$ trên hỗ trợ $S$ không phụ thuộc $\\theta$, giả sử $f_\\theta>0$ trên $S$, khả vi hai lần, được phép đạo hàm $\\int_S f_\\theta=1$ dưới dấu tích phân và moment bậc hai của score hữu hạn. Với $\\ell_\\theta=\\log f_\\theta$, $-E_\\theta[\\ell_\\theta^{\\prime\\prime}]=E_\\theta[(\\ell_\\theta^{\\prime})^2]$.')),
    steps:[
      b(r('Write the score as $\\ell_\\theta^{\\prime}=f_\\theta^{\\prime}/f_\\theta$, so $f_\\theta^{\\prime}=f_\\theta\\ell_\\theta\\prime$.'),r('Viết score là $\\ell_\\theta^{\\prime}=f_\\theta^{\\prime}/f_\\theta$, nên $f_\\theta^{\\prime}=f_\\theta\\ell_\\theta\\prime$.')),
      b(r('Differentiating once more gives $f_\\theta^{\\prime\\prime}=f_\\theta[\\ell_\\theta^{\\prime\\prime}+(\\ell_\\theta^{\\prime})^2]$ by the product rule.'),r('Đạo hàm thêm lần nữa cho $f_\\theta^{\\prime\\prime}=f_\\theta[\\ell_\\theta^{\\prime\\prime}+(\\ell_\\theta^{\\prime})^2]$ theo quy tắc tích.')),
      b(r('The common support and differentiation-under-integral condition allow $0=\\partial_\\theta^2\\int_S f_\\theta=\\int_S f_\\theta^{\\prime\\prime}$.'),r('Hỗ trợ chung và điều kiện đạo hàm dưới dấu tích phân cho $0=\\partial_\\theta^2\\int_S f_\\theta=\\int_S f_\\theta^{\\prime\\prime}$.')),
      b(r('Substitute the expression for $f_\\theta^{\\prime\\prime}$ and divide the integral into expectations to get $E_\\theta\\ell_\\theta^{\\prime\\prime}+E_\\theta[(\\ell_\\theta^{\\prime})^2]=0$; rearrange.'),r('Thế biểu thức của $f_\\theta^{\\prime\\prime}$ và viết tích phân thành kỳ vọng để được $E_\\theta\\ell_\\theta^{\\prime\\prime}+E_\\theta[(\\ell_\\theta^{\\prime})^2]=0$; rồi chuyển vế.'))
    ],
    primarySolution:[
      b(r('On the fixed support, $\\partial_\\theta f_\\theta=f_\\theta\\ell_\\theta^{\\prime}$ and $\\partial_\\theta^2f_\\theta=f_\\theta[\\ell_\\theta^{\\prime\\prime}+(\\ell_\\theta^{\\prime})^2]$.'),r('Trên hỗ trợ cố định, $\\partial_\\theta f_\\theta=f_\\theta\\ell_\\theta^{\\prime}$ và $\\partial_\\theta^2f_\\theta=f_\\theta[\\ell_\\theta^{\\prime\\prime}+(\\ell_\\theta^{\\prime})^2]$.')),
      b(r('Because the density integrates to one for every $\\theta$ and differentiation may pass under the integral, $0=\\partial_\\theta^2\\int_Sf_\\theta=E_\\theta[\\ell_\\theta^{\\prime\\prime}+(\\ell_\\theta^{\\prime})^2]$.'),r('Vì mật độ tích phân bằng một với mọi $\\theta$ và được phép đổi đạo hàm với tích phân, $0=\\partial_\\theta^2\\int_Sf_\\theta=E_\\theta[\\ell_\\theta^{\\prime\\prime}+(\\ell_\\theta^{\\prime})^2]$.')),
      b(r('Moving the curvature term to the other side proves $-E_\\theta[\\ell_\\theta^{\\prime\\prime}]=E_\\theta[(\\ell_\\theta^{\\prime})^2]$.'),r('Chuyển số hạng độ cong sang vế kia chứng minh $-E_\\theta[\\ell_\\theta^{\\prime\\prime}]=E_\\theta[(\\ell_\\theta^{\\prime})^2]$.')),
      b(r('Under misspecification the expectation is under the true law, not the working $f_\\theta$; for working $N(\\theta,1)$ but true $N(0,4)$ at pseudo-true $\\theta=0$, the two sides are $1$ and $4$, so equality fails.'),r('Khi mô hình sai đặc tả, kỳ vọng lấy theo luật thật chứ không phải $f_\\theta$ đang dùng; nếu mô hình làm việc là $N(\\theta,1)$ nhưng luật thật là $N(0,4)$ tại giá trị giả thật $\\theta=0$, hai vế là $1$ và $4$, nên đẳng thức sai.'))
    ],
    companions:[
      {prompt:b(r('A sensor reading has model $X\\sim N(\\mu,4)$ with known variance 4. Compute the score, negative expected log-likelihood curvature, and score second moment to verify information equality.'),r('Số đo cảm biến có mô hình $X\\sim N(\\mu,4)$ với phương sai 4 đã biết. Tính score, độ cong âm kỳ vọng của log-likelihood và moment bậc hai của score để kiểm tra đẳng thức thông tin.')),solution:[
        b(r('Ignoring constants, $\\ell_\\mu(x)=-(x-\\mu)^2/8$, so $\\ell_\\mu\\prime=(x-\\mu)/4$ and $\\ell_\\mu\\prime\\prime=-1/4$.'),r('Bỏ qua hằng số, $\\ell_\\mu(x)=-(x-\\mu)^2/8$, nên $\\ell_\\mu\\prime=(x-\\mu)/4$ và $\\ell_\\mu\\prime\\prime=-1/4$.')),
        b(r('Therefore $-E_\\mu\\ell_\\mu\\prime\\prime=1/4$.'),r('Vì vậy $-E_\\mu\\ell_\\mu\\prime\\prime=1/4$.')),
        b(r('Since $\\operatorname{Var}_\\mu(X)=4$, $E_\\mu[(\\ell_\\mu\\prime)^2]=E[(X-\\mu)^2]/16=4/16=1/4$; the sides agree.'),r('Vì $\\operatorname{Var}_\\mu(X)=4$, $E_\\mu[(\\ell_\\mu\\prime)^2]=E[(X-\\mu)^2]/16=4/16=1/4$; hai vế bằng nhau.'))
      ]},
      {prompt:b(r('For an exponential waiting time with rate $\\lambda=2$, density $f_\\lambda(x)=\\lambda e^{-\\lambda x}$ on fixed support $x\\ge0$, compute both sides of the information equality.'),r('Với thời gian chờ mũ có tốc độ $\\lambda=2$, mật độ $f_\\lambda(x)=\\lambda e^{-\\lambda x}$ trên hỗ trợ cố định $x\\ge0$, tính hai vế của đẳng thức thông tin.')),solution:[
        b(r('The log density is $\\ell_\\lambda=\\log\\lambda-\\lambda x$, so score $1/\\lambda-x$ and second derivative $-1/\\lambda^2$.'),r('Log-mật độ là $\\ell_\\lambda=\\log\\lambda-\\lambda x$, nên score $1/\\lambda-x$ và đạo hàm bậc hai $-1/\\lambda^2$.')),
        b(r('At $\\lambda=2$, $-E\\ell_\\lambda\\prime\\prime=1/4$.'),r('Tại $\\lambda=2$, $-E\\ell_\\lambda\\prime\\prime=1/4$.')),
        b(r('The exponential variance is $1/\\lambda^2=1/4$, and the score is $-(X-E X)$, so its second moment is also $1/4$.'),r('Phương sai phân phối mũ là $1/\\lambda^2=1/4$, còn score bằng $-(X-E X)$, nên moment bậc hai cũng bằng $1/4$.'))
      ]},
      {prompt:b(r('For $X\\sim\\operatorname{Uniform}(0,\\theta)$ with density $1/\\theta$ on $(0,\\theta)$, calculate the two formal information expressions and identify why the regular identity fails.'),r('Với $X\\sim\\operatorname{Uniform}(0,\\theta)$, có mật độ $1/\\theta$ trên $(0,\\theta)$, tính hai biểu thức thông tin hình thức và nêu lý do đẳng thức chính quy thất bại.')),solution:[
        b(r('At an interior sample point, $\\ell_\\theta(x)=-\\log\\theta$, hence score $-1/\\theta$ and second derivative $1/\\theta^2$.'),r('Tại điểm mẫu bên trong, $\\ell_\\theta(x)=-\\log\\theta$, nên score $-1/\\theta$ và đạo hàm bậc hai $1/\\theta^2$.')),
        b(r('Thus $E_\\theta[(\\ell_\\theta\\prime)^2]=1/\\theta^2$, but $-E_\\theta\\ell_\\theta\\prime\\prime=-1/\\theta^2$.'),r('Vì vậy $E_\\theta[(\\ell_\\theta\\prime)^2]=1/\\theta^2$, nhưng $-E_\\theta\\ell_\\theta\\prime\\prime=-1/\\theta^2$.')),
        b(r('The support endpoint depends on $\\theta$ and the formal score has mean $-1/\\theta\\ne0$; differentiating the normalized density while ignoring the moving boundary is invalid.'),r('Đầu mút hỗ trợ phụ thuộc $\\theta$ và score hình thức có trung bình $-1/\\theta\\ne0$; đạo hàm mật độ chuẩn hóa mà bỏ qua biên di động là không hợp lệ.'))
      ]}
    ],
    reviewNote:'Information equality uses a correctly specified normalized density on parameter-independent support with two valid differentiations under the integral and finite score moments. Uniform(0,theta) is an explicit counterexample because the support moves, while the misspecified normal example separates expectation under the true law from the working likelihood.',
    sourceIds:['p-mit18655']
  },
  'm2-w050-e4':{
    title:b('Diagnose boundary and infinite-variance failures','Chẩn đoán thất bại ở biên và phương sai vô hạn'),
    application:b(r('Before using a Gaussian sandwich limit, identify whether the target is interior and whether the score has finite variance and a nonsingular derivative.'),r('Trước khi dùng giới hạn sandwich chuẩn, hãy xác định giá trị đích có nằm trong lòng miền hay không, score có phương sai hữu hạn và đạo hàm có không suy biến hay không.')),
    formula:b(r('A usual root-n sandwich theorem assumes IID scores with $E\\psi_{\\theta_0}=0$ and finite covariance $B$, an interior identified target, a consistent approximate root, and a locally uniform derivative limit $E\\dot\\psi_{\\theta_0}=-A$ with nonsingular $A$. A boundary target or $B=\\infty$ invalidates the standard conclusion.'),r('Định lý sandwich căn-bậc-n thông thường giả sử score IID có $E\\psi_{\\theta_0}=0$ và hiệp phương sai hữu hạn $B$, giá trị đích nằm trong lòng và được nhận dạng, nghiệm gần đúng nhất quán, cùng giới hạn đạo hàm đều cục bộ $E\\dot\\psi_{\\theta_0}=-A$ với $A$ không suy biến. Giá trị đích ở biên hoặc $B=\\infty$ làm kết luận chuẩn không còn được biện minh.')),
    steps:[
      b(r('For a constrained parameter, check interiority before applying an unconstrained Taylor expansion; at a boundary, the feasible set changes the local limit.'),r('Với tham số có ràng buộc, kiểm tra tính nằm trong lòng trước khi áp dụng khai triển Taylor không ràng buộc; tại biên, miền khả thi làm đổi giới hạn cục bộ.')),
      b(r('For a score CLT, verify $E\\|\\psi\\|^2<\\infty$; existence of $E\\|\\psi\\|$ alone does not imply a Gaussian root-n limit.'),r('Để dùng CLT cho score, kiểm tra $E\\|\\psi\\|^2<\\infty$; chỉ có $E\\|\\psi\\|$ không suy ra giới hạn chuẩn căn-bậc-n.')),
      b(r('The sandwich also needs a nonsingular derivative limit and enough uniform control to evaluate derivatives along the random segment from $\\theta_0$ to $\\hat\\theta_n$.'),r('Sandwich còn cần giới hạn đạo hàm không suy biến và đủ kiểm soát đều để tính đạo hàm dọc đoạn ngẫu nhiên từ $\\theta_0$ tới $\\hat\\theta_n$.')),
      b(r('When one premise fails, compute the limit from the actual constraint or tail behavior instead of substituting a nonexistent variance into the formula.'),r('Khi một tiền đề thất bại, hãy tính giới hạn từ ràng buộc hoặc đuôi phân phối thực tế thay vì thế phương sai không tồn tại vào công thức.'))
    ],
    primarySolution:[
      b(r('For $Y_i\\sim N(\\theta,1)$ with $\\theta\\ge0$ and true $\\theta_0=0$, the unconstrained sample mean is $\\bar Y_n$ but feasibility gives $\\hat\\theta_n=\\max(0,\\bar Y_n)$.'),r('Với $Y_i\\sim N(\\theta,1)$, $\\theta\\ge0$ và giá trị thật $\\theta_0=0$, trung bình mẫu không ràng buộc là $\\bar Y_n$ nhưng tính khả thi cho $\\hat\\theta_n=\\max(0,\\bar Y_n)$.')),
      b(r('Because $\\sqrt n\\bar Y_n\\sim N(0,1)$ exactly, $\\sqrt n\\hat\\theta_n=\\max(0,Z)$ for $Z\\sim N(0,1)$.'),r('Vì $\\sqrt n\\bar Y_n\\sim N(0,1)$ chính xác, $\\sqrt n\\hat\\theta_n=\\max(0,Z)$ với $Z\\sim N(0,1)$.')),
      b(r('This limit has probability $1/2$ at zero and a positive half-normal part, so it is not a centered Gaussian; the interior-target assumption fails.'),r('Giới hạn này có xác suất $1/2$ tại không và phần dương nửa chuẩn, nên không phải Gaussian tâm không; giả thiết giá trị đích trong lòng bị vi phạm.')),
      b(r('For a symmetric Pareto score example, let $Z=\\varepsilon R$, with independent fair sign $\\varepsilon$ and Pareto tail $P(R>x)=x^{-3/2}$ for $x\\ge1$. Then $EZ=0$, $E|Z|=3<\\infty$, but $EZ^2=\\infty$.'),r('Với ví dụ score Pareto đối xứng, đặt $Z=\\varepsilon R$, trong đó dấu công bằng $\\varepsilon$ độc lập với đuôi Pareto $P(R>x)=x^{-3/2}$ khi $x\\ge1$. Khi đó $EZ=0$, $E|Z|=3<\\infty$, nhưng $EZ^2=\\infty$.')),
      b(r('For $\\psi_\\theta(Z)=Z-\\theta$ at $\\theta_0=0$, the derivative is nonsingular but $B=E\\psi_0^2=\\infty$; the score CLT and ordinary sandwich variance fail.'),r('Với $\\psi_\\theta(Z)=Z-\\theta$ tại $\\theta_0=0$, đạo hàm không suy biến nhưng $B=E\\psi_0^2=\\infty$; CLT score và phương sai sandwich thông thường thất bại.'))
    ],
    companions:[
      {prompt:b(r('A machine lifetime model estimates a normal location $\\theta\\ge0$ from IID $Y_i\\sim N(\\theta,1)$. At the true boundary value $\\theta_0=0$, find the constrained MLE and the exact distribution of its root-n scaled limit.'),r('Mô hình tuổi thọ máy ước lượng vị trí chuẩn $\\theta\\ge0$ từ $Y_i\\sim N(\\theta,1)$ IID. Tại giá trị biên thật $\\theta_0=0$, tìm MLE có ràng buộc và phân phối chính xác của giới hạn đã nhân căn cỡ mẫu.')),solution:[
        b(r('The normal likelihood is maximized without the constraint at $\\bar Y_n$; imposing $\\theta\\ge0$ projects it to $\\hat\\theta_n=\\max(0,\\bar Y_n)$.'),r('Likelihood chuẩn đạt cực đại không ràng buộc tại $\\bar Y_n$; áp đặt $\\theta\\ge0$ chiếu thành $\\hat\\theta_n=\\max(0,\\bar Y_n)$.')),
        b(r('At $\\theta_0=0$, $\\sqrt n\\bar Y_n$ has the exact $N(0,1)$ law.'),r('Tại $\\theta_0=0$, $\\sqrt n\\bar Y_n$ có luật $N(0,1)$ chính xác.')),
        b(r('Therefore $\\sqrt n\\hat\\theta_n=\\max(0,Z)$; it has an atom of mass $1/2$ at zero and a positive half-normal component, not a normal law.'),r('Vì vậy $\\sqrt n\\hat\\theta_n=\\max(0,Z)$; nó có khối lượng điểm $1/2$ tại không và thành phần nửa chuẩn dương, không phải luật chuẩn.'))
      ]},
      {prompt:b(r('Let $R$ have Pareto tail $P(R>x)=x^{-3/2}$ for $x\\ge1$ and let $\\varepsilon$ be an independent fair sign. For IID $Z_i=\\varepsilon_iR_i$, verify the mean is finite but the variance is infinite, then diagnose the location-score sandwich.'),r('Cho $R$ có đuôi Pareto $P(R>x)=x^{-3/2}$ với $x\\ge1$ và $\\varepsilon$ là dấu công bằng độc lập. Với $Z_i=\\varepsilon_iR_i$ IID, kiểm tra trung bình hữu hạn nhưng phương sai vô hạn, rồi chẩn đoán sandwich score vị trí.')),solution:[
        b(r('For Pareto shape $\\alpha=3/2$, $ER=\\alpha/(\\alpha-1)=3$, so $E|Z|=3$; symmetry gives $EZ=0$.'),r('Với Pareto có dạng $\\alpha=3/2$, $ER=\\alpha/(\\alpha-1)=3$, nên $E|Z|=3$; đối xứng cho $EZ=0$.')),
        b(r('The second moment is infinite because the Pareto shape $3/2$ is below $2$; multiplying by a sign does not change $Z^2=R^2$.'),r('Moment bậc hai vô hạn vì dạng Pareto $3/2$ nhỏ hơn $2$; nhân với dấu không đổi $Z^2=R^2$.')),
        b(r('For $\\psi_\\theta(Z)=Z-\\theta$, $E\\psi_0=0$ and $\\partial_\\theta\\psi=-1$, but $B=E[Z^2]=\\infty$. The finite-score-variance CLT premise fails.'),r('Với $\\psi_\\theta(Z)=Z-\\theta$, $E\\psi_0=0$ và $\\partial_\\theta\\psi=-1$, nhưng $B=E[Z^2]=\\infty$. Giả thiết phương sai score hữu hạn của CLT bị vi phạm.'))
      ]},
      {prompt:b(r('A laboratory calibrates a parameter $\\theta\\in\\mathbb R$ by solving $P_n\\psi_\\theta=0$ with $\\psi_\\theta(Z)=Z-\\theta^3$, where $Z_i\\sim N(0,1)$ IID. At $\\theta_0=0$, identify the failed sandwich condition and the estimator rate.'),r('Phòng thí nghiệm hiệu chuẩn tham số $\\theta\\in\\mathbb R$ bằng cách giải $P_n\\psi_\\theta=0$ với $\\psi_\\theta(Z)=Z-\\theta^3$, trong đó $Z_i\\sim N(0,1)$ IID. Tại $\\theta_0=0$, xác định điều kiện sandwich thất bại và tốc độ ước lượng.')),solution:[
        b(r('The population equation is $E Z-\\theta^3=0$, whose unique root is $\\theta_0=0$.'),r('Phương trình tổng thể là $E Z-\\theta^3=0$, có nghiệm duy nhất $\\theta_0=0$.')),
        b(r('The sample root satisfies $\\hat\\theta_n^3=\\bar Z_n$, so $\\hat\\theta_n=\\operatorname{sgn}(\\bar Z_n)|\\bar Z_n|^{1/3}$.'),r('Nghiệm mẫu thỏa $\\hat\\theta_n^3=\\bar Z_n$, nên $\\hat\\theta_n=\\operatorname{sgn}(\\bar Z_n)|\\bar Z_n|^{1/3}$.')),
        b(r('Since $\\bar Z_n=O_P(n^{-1/2})$, the root is $O_P(n^{-1/6})$. The derivative $E\\partial_\\theta\\psi=-3\\theta^2$ is zero at the target, so the nonsingular-Jacobian condition fails and root-n normality is not justified.'),r('Vì $\\bar Z_n=O_P(n^{-1/2})$, nghiệm có tốc độ $O_P(n^{-1/6})$. Đạo hàm $E\\partial_\\theta\\psi=-3\\theta^2$ bằng không tại giá trị đích, nên điều kiện Jacobian không suy biến thất bại và chuẩn căn-bậc-n không được biện minh.'))
      ]}
    ],
    reviewNote:'The boundary normal example has an explicit projection limit with an atom; the symmetric Pareto example has finite first absolute moment but infinite second moment; the cubic score example is identified but has zero Jacobian. Each violates a distinct sandwich hypothesis.',
    sourceIds:['p-mit18655']
  },
  'm2-w050-e5':{
    title:b('Transfer: sandwich covariance for vector moments','Chuyển giao: hiệp phương sai sandwich cho moment vector'),
    application:b(r('For several simultaneous moment conditions, the derivative matrix transforms the score covariance on both sides.'),r('Với nhiều điều kiện moment đồng thời, ma trận đạo hàm biến đổi hiệp phương sai score ở cả hai phía.')),
    formula:b(r('Let $Z_i$ be IID, $\\theta_0\\in\\mathbb R^d$ interior, $E[g(Z,\\theta_0)]=0$, $\\Omega=E[gg^{\\mathsf T}]$ finite, and $G=E[\\partial_\\theta g(Z,\\theta_0)]$ nonsingular. If a consistent approximate root has $P_ng(Z,\\hat\\theta_n)=o_P(n^{-1/2})$ and the derivative satisfies a local uniform LLN, then $\\sqrt n(\\hat\\theta_n-\\theta_0)\\Rightarrow N(0,G^{-1}\\Omega G^{-\\mathsf T})$.'),r('Cho $Z_i$ IID, $\\theta_0\\in\\mathbb R^d$ trong lòng, $E[g(Z,\\theta_0)]=0$, $\\Omega=E[gg^{\\mathsf T}]$ hữu hạn và $G=E[\\partial_\\theta g(Z,\\theta_0)]$ không suy biến. Nếu nghiệm gần đúng nhất quán thỏa $P_ng(Z,\\hat\\theta_n)=o_P(n^{-1/2})$ và đạo hàm thỏa LLN đều cục bộ, thì $\\sqrt n(\\hat\\theta_n-\\theta_0)\\Rightarrow N(0,G^{-1}\\Omega G^{-\\mathsf T})$.')),
    steps:[
      b(r('Taylor expansion along the segment gives $0=P_ng(Z,\\theta_0)+G_n(\\hat\\theta_n-\\theta_0)+o_P(n^{-1/2})$, where the segment-integrated Jacobian $G_n\\to_PG$.'),r('Khai triển Taylor dọc đoạn cho $0=P_ng(Z,\\theta_0)+G_n(\\hat\\theta_n-\\theta_0)+o_P(n^{-1/2})$, trong đó Jacobian tích phân dọc đoạn $G_n\\to_PG$.')),
      b(r('Nonsingularity makes $G_n^{-1}\\to_PG^{-1}$, so rearranging gives $\\sqrt n(\\hat\\theta_n-\\theta_0)=-G^{-1}\\sqrt nP_ng(Z,\\theta_0)+o_P(1)$.'),r('Tính không suy biến khiến $G_n^{-1}\\to_PG^{-1}$, nên sắp xếp lại được $\\sqrt n(\\hat\\theta_n-\\theta_0)=-G^{-1}\\sqrt nP_ng(Z,\\theta_0)+o_P(1)$.')),
      b(r('The multivariate IID CLT applies because $E g=0$ and $\\Omega$ is finite: $\\sqrt nP_ng\\Rightarrow N(0,\\Omega)$.'),r('CLT IID đa biến áp dụng vì $E g=0$ và $\\Omega$ hữu hạn: $\\sqrt nP_ng\\Rightarrow N(0,\\Omega)$.')),
      b(r('A linear transform has covariance $(-G^{-1})\\Omega(-G^{-\\mathsf T})=G^{-1}\\Omega G^{-\\mathsf T}$; the two minus signs cancel.'),r('Phép biến đổi tuyến tính có hiệp phương sai $(-G^{-1})\\Omega(-G^{-\\mathsf T})=G^{-1}\\Omega G^{-\\mathsf T}$; hai dấu trừ triệt tiêu.'))
    ],
    primarySolution:[
      b(r('Use the integral Taylor formula for the vector equation at $\\theta_0$; consistency and the local uniform derivative LLN make the segment Jacobian converge to $G$.'),r('Dùng công thức Taylor tích phân cho phương trình vector tại $\\theta_0$; tính nhất quán và LLN đạo hàm đều cục bộ khiến Jacobian dọc đoạn hội tụ về $G$.')),
      b(r('The $o_P(n^{-1/2})$ root error then yields $\\sqrt n(\\hat\\theta_n-\\theta_0)=-G^{-1}\\sqrt nP_ng(Z,\\theta_0)+o_P(1)$.'),r('Sai số nghiệm $o_P(n^{-1/2})$ cho $\\sqrt n(\\hat\\theta_n-\\theta_0)=-G^{-1}\\sqrt nP_ng(Z,\\theta_0)+o_P(1)$.')),
      b(r('The IID score vectors have mean zero and finite covariance $\\Omega$, so the multivariate CLT gives a centered normal score limit.'),r('Các vector score IID có trung bình không và hiệp phương sai hữu hạn $\\Omega$, nên CLT đa biến cho giới hạn chuẩn tâm không.')),
      b(r('Transforming that covariance by $-G^{-1}$ on the left and its transpose on the right gives $G^{-1}\\Omega G^{-\\mathsf T}$.'),r('Biến đổi hiệp phương sai đó bằng $-G^{-1}$ bên trái và chuyển vị của nó bên phải cho $G^{-1}\\Omega G^{-\\mathsf T}$.'))
    ],
    companions:[
      {prompt:b(r('A two-channel sensor has IID vector readings equally likely to be $(1,0),(-1,0),(0,2),(0,-2)$. Estimate the mean vector by solving $P_n g(Z,\\theta)=0$ with $g(Z,\\theta)=Z-\\theta$. Find $G$, $\\Omega$, and the sandwich covariance.'),r('Cảm biến hai kênh có vector số đo IID đồng xác suất $(1,0),(-1,0),(0,2),(0,-2)$. Ước lượng vector trung bình bằng cách giải $P_n g(Z,\\theta)=0$ với $g(Z,\\theta)=Z-\\theta$. Tìm $G$, $\\Omega$ và hiệp phương sai sandwich.')),solution:[
        b(r('Symmetry gives $\\theta_0=EZ=(0,0)$. The Jacobian is $G=\\partial_\\theta(Z-\\theta)=-I_2$.'),r('Tính đối xứng cho $\\theta_0=EZ=(0,0)$. Jacobian là $G=\\partial_\\theta(Z-\\theta)=-I_2$.')),
        b(r('The first-coordinate second moment is $(1+1)/4=1/2$, the second is $(4+4)/4=2$, and the cross moment is zero; hence $\\Omega=\\operatorname{diag}(1/2,2)$.'),r('Moment bậc hai tọa độ đầu là $(1+1)/4=1/2$, tọa độ hai là $(4+4)/4=2$, còn moment chéo bằng không; vậy $\\Omega=\\operatorname{diag}(1/2,2)$.')),
        b(r('Since $G^{-1}=-I_2$, $G^{-1}\\Omega G^{-\\mathsf T}=\\Omega$. The asymptotic covariance of $\\sqrt n(\\hat\\theta_n-\\theta_0)$ is $\\operatorname{diag}(1/2,2)$.'),r('Vì $G^{-1}=-I_2$, $G^{-1}\\Omega G^{-\\mathsf T}=\\Omega$. Hiệp phương sai tiệm cận của $\\sqrt n(\\hat\\theta_n-\\theta_0)$ là $\\operatorname{diag}(1/2,2)$.'))
      ]},
      {prompt:b(r('A two-parameter calibration uses score vectors $U=(2,1),(-2,-1),(0,1),(0,-1)$ with equal probabilities and moment function $g(U,\\theta)=U+D(\\theta-\\theta_0)$, $D=\\operatorname{diag}(2,3)$. Compute $\\Omega$, $G$, and the sandwich covariance.'),r('Hiệu chuẩn hai tham số dùng vector score $U=(2,1),(-2,-1),(0,1),(0,-1)$ với xác suất bằng nhau và hàm moment $g(U,\\theta)=U+D(\\theta-\\theta_0)$, $D=\\operatorname{diag}(2,3)$. Tính $\\Omega$, $G$ và hiệp phương sai sandwich.')),solution:[
        b(r('The four vectors average to zero. Their second moments give $\\Omega=E[UU^{\\mathsf T}]=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$.'),r('Trung bình bốn vector bằng không. Moment bậc hai cho $\\Omega=E[UU^{\\mathsf T}]=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$.')),
        b(r('Differentiating $g$ in $\\theta$ gives $G=D=\\operatorname{diag}(2,3)$, so $G^{-1}=\\operatorname{diag}(1/2,1/3)$.'),r('Đạo hàm $g$ theo $\\theta$ cho $G=D=\\operatorname{diag}(2,3)$, nên $G^{-1}=\\operatorname{diag}(1/2,1/3)$.')),
        b(r('Multiplication on both sides yields $G^{-1}\\Omega G^{-\\mathsf T}=\\begin{pmatrix}1/2&1/6\\\\1/6&1/9\\end{pmatrix}$.'),r('Nhân ở hai phía cho $G^{-1}\\Omega G^{-\\mathsf T}=\\begin{pmatrix}1/2&1/6\\\\1/6&1/9\\end{pmatrix}$.'))
      ]},
      {prompt:b(r('For IID exponential waiting times with rate $\\lambda_0=2$, estimate $\\lambda$ by solving $P_n g(Z,\\lambda)=0$, $g(Z,\\lambda)=1/\\lambda-Z$. Find the sample root and the root-n sandwich variance.'),r('Với thời gian chờ mũ IID có tốc độ $\\lambda_0=2$, ước lượng $\\lambda$ bằng cách giải $P_n g(Z,\\lambda)=0$, $g(Z,\\lambda)=1/\\lambda-Z$. Tìm nghiệm mẫu và phương sai sandwich nhân căn cỡ mẫu.')),solution:[
        b(r('Solving $1/\\hat\\lambda-\\bar Z_n=0$ gives $\\hat\\lambda=1/\\bar Z_n$ when $\\bar Z_n>0$.'),r('Giải $1/\\hat\\lambda-\\bar Z_n=0$ cho $\\hat\\lambda=1/\\bar Z_n$ khi $\\bar Z_n>0$.')),
        b(r('At $\\lambda_0=2$, $G=E[-1/\\lambda_0^2]=-1/4$ and $\\Omega=\\operatorname{Var}(1/\\lambda_0-Z)=\\operatorname{Var}(Z)=1/4$.'),r('Tại $\\lambda_0=2$, $G=E[-1/\\lambda_0^2]=-1/4$ và $\\Omega=\\operatorname{Var}(1/\\lambda_0-Z)=\\operatorname{Var}(Z)=1/4$.')),
        b(r('Thus $G^{-1}\\Omega G^{-\\mathsf T}=(-4)(1/4)(-4)=4$. The estimator variance is asymptotically $4/n$.'),r('Do đó $G^{-1}\\Omega G^{-\\mathsf T}=(-4)(1/4)(-4)=4$. Phương sai ước lượng tiệm cận là $4/n$.'))
      ]}
    ],
    reviewNote:'The vector sandwich has a square nonsingular Jacobian, finite second moment of the moment vector, a consistent root with sufficiently small residual, and a locally uniform derivative LLN. The examples compute covariance rather than standard deviation and preserve the Jacobian sign by using G^{-1} on both sides.',
    sourceIds:['p-mit18655']
  },
  'm2-w051-e1':{
    title:b('Prove the first-order delta method','Chứng minh phương pháp delta bậc nhất'),
    application:b(r('Separate the linear Taylor term from a smaller remainder, then transfer the weak limit through the derivative.'),r('Tách số hạng Taylor tuyến tính khỏi phần dư nhỏ hơn, rồi chuyển giới hạn qua đạo hàm.')),
    formula:b(r('If $\\sqrt n(T_n-\\theta_0)\\Rightarrow Z$ and $g$ is differentiable at the fixed $\\theta_0$, then $\\sqrt n[g(T_n)-g(\\theta_0)]\\Rightarrow g\\prime(\\theta_0)Z$.'),r('Nếu $\\sqrt n(T_n-\\theta_0)\\Rightarrow Z$ và $g$ khả vi tại $\\theta_0$ cố định, thì $\\sqrt n[g(T_n)-g(\\theta_0)]\\Rightarrow g\\prime(\\theta_0)Z$.')),
    steps:[
      b(r('A root-$n$ convergent sequence is tight, so $T_n-\\theta_0=O_P(n^{-1/2})$ and in particular $T_n\\to_P\\theta_0$.'),r('Dãy hội tụ sau khi nhân căn $n$ là chặt, nên $T_n-\\theta_0=O_P(n^{-1/2})$ và đặc biệt $T_n\\to_P\\theta_0$.')),
      b(r('Differentiability writes $g(T_n)-g(\\theta_0)=g\\prime(\\theta_0)(T_n-\\theta_0)+r_n$, with $r_n/(T_n-\\theta_0)\\to_P0$; define the ratio as zero when the denominator is zero.'),r('Tính khả vi viết $g(T_n)-g(\\theta_0)=g\\prime(\\theta_0)(T_n-\\theta_0)+r_n$, với $r_n/(T_n-\\theta_0)\\to_P0$; quy ước tỷ số bằng không khi mẫu số bằng không.')),
      b(r('The product $\\sqrt n r_n=[\\sqrt n(T_n-\\theta_0)]\\,[r_n/(T_n-\\theta_0)]$ is $o_P(1)$ because an $O_P(1)$ factor times an $o_P(1)$ factor vanishes.'),r('Tích $\\sqrt n r_n=[\\sqrt n(T_n-\\theta_0)]\\,[r_n/(T_n-\\theta_0)]$ là $o_P(1)$ vì tích của nhân tử $O_P(1)$ và $o_P(1)$ tiến về không.')),
      b(r('The remaining term is $g\\prime(\\theta_0)\\sqrt n(T_n-\\theta_0)$, so Slutsky gives the stated limit.'),r('Số hạng còn lại là $g\\prime(\\theta_0)\\sqrt n(T_n-\\theta_0)$, nên Slutsky cho giới hạn đã nêu.'))
    ],
    primarySolution:[
      b(r('Write $h_n=T_n-\\theta_0$. Differentiability at $\\theta_0$ gives $g(\\theta_0+h_n)-g(\\theta_0)=g\\prime(\\theta_0)h_n+r(h_n)$ with $r(h)/h\\to0$ as $h\\to0$.'),r('Đặt $h_n=T_n-\\theta_0$. Tính khả vi tại $\\theta_0$ cho $g(\\theta_0+h_n)-g(\\theta_0)=g\\prime(\\theta_0)h_n+r(h_n)$ với $r(h)/h\\to0$ khi $h\\to0$.')),
      b(r('Since $\\sqrt n h_n\\Rightarrow Z$, it is $O_P(1)$ and $h_n\\to_P0$; hence $r(h_n)/h_n\\to_P0$.'),r('Vì $\\sqrt n h_n\\Rightarrow Z$, nó là $O_P(1)$ và $h_n\\to_P0$; do đó $r(h_n)/h_n\\to_P0$.')),
      b(r('Multiplying the Taylor identity by $\\sqrt n$ leaves a remainder $[\\sqrt n h_n][r(h_n)/h_n]=o_P(1)$.'),r('Nhân đồng nhất thức Taylor với $\\sqrt n$ cho phần dư $[\\sqrt n h_n][r(h_n)/h_n]=o_P(1)$.')),
      b(r('Thus the transformed statistic equals $g\\prime(\\theta_0)\\sqrt n h_n+o_P(1)$, which converges to $g\\prime(\\theta_0)Z$ by Slutsky.'),r('Vậy thống kê biến đổi bằng $g\\prime(\\theta_0)\\sqrt n h_n+o_P(1)$, hội tụ tới $g\\prime(\\theta_0)Z$ theo Slutsky.'))
    ],
    companions:[
      {prompt:b(r('A sensor estimates a fixed log-scale calibration value $\\theta_0=2$ and $\\sqrt n(T_n-2)\\Rightarrow N(0,0.04)$. For the reported scale $g(t)=e^t$, find the limiting law of $\\sqrt n(e^{T_n}-e^2)$.'),r('Cảm biến ước lượng giá trị hiệu chuẩn log-tỷ lệ cố định $\\theta_0=2$ và $\\sqrt n(T_n-2)\\Rightarrow N(0,0.04)$. Với tỷ lệ báo cáo $g(t)=e^t$, tìm luật giới hạn của $\\sqrt n(e^{T_n}-e^2)$.')),solution:[
        b(r('The transform is differentiable with $g\\prime(2)=e^2$.'),r('Hàm biến đổi khả vi với $g\\prime(2)=e^2$.')),
        b(r('The first-order delta limit is $e^2 Z$ for $Z\\sim N(0,0.04)$.'),r('Giới hạn delta bậc nhất là $e^2 Z$ với $Z\\sim N(0,0.04)$.')),
        b(r('A linear transform of this normal variable is $N(0,0.04e^4)$.'),r('Phép biến đổi tuyến tính của biến chuẩn này có luật $N(0,0.04e^4)$.'))
      ]},
      {prompt:b(r('A survey estimates a fraction $p_0=0.3$ by $\\hat p_n$ from IID Bernoulli$(p_0)$ responses. For the odds transform $g(p)=p/(1-p)$, calculate the asymptotic variance of $\\sqrt n[g(\\hat p_n)-g(p_0)]$.'),r('Khảo sát ước lượng tỷ lệ $p_0=0.3$ bằng $\\hat p_n$ từ phản hồi Bernoulli$(p_0)$ IID. Với phép biến đổi odds $g(p)=p/(1-p)$, tính phương sai tiệm cận của $\\sqrt n[g(\\hat p_n)-g(p_0)]$.')),solution:[
        b(r('For $0<p<1$, $g\\prime(p)=1/(1-p)^2$, so $g\\prime(0.3)=1/(0.7)^2=100/49$.'),r('Với $0<p<1$, $g\\prime(p)=1/(1-p)^2$, nên $g\\prime(0.3)=1/(0.7)^2=100/49$.')),
        b(r('The Bernoulli CLT variance for $\\sqrt n(\\hat p_n-p_0)$ is $p_0(1-p_0)=0.3(0.7)=0.21$.'),r('Phương sai CLT Bernoulli của $\\sqrt n(\\hat p_n-p_0)$ là $p_0(1-p_0)=0.3(0.7)=0.21$.')),
        b(r('Multiplying by the squared derivative gives $(100/49)^2(0.21)=300/343\\approx0.8746$.'),r('Nhân với bình phương đạo hàm cho $(100/49)^2(0.21)=300/343\\approx0.8746$.'))
      ]},
      {prompt:b(r('A thermal index $T_n$ estimates $\\theta_0=\\pi/6$ with $\\sqrt n(T_n-\\pi/6)\\Rightarrow N(0,0.04)$. If the displayed index is $g(T_n)=\\sin T_n$, find the limiting variance and standard error at $n=400$.'),r('Chỉ số nhiệt $T_n$ ước lượng $\\theta_0=\\pi/6$ với $\\sqrt n(T_n-\\pi/6)\\Rightarrow N(0,0.04)$. Nếu chỉ số hiển thị là $g(T_n)=\\sin T_n$, tìm phương sai giới hạn và sai số chuẩn khi $n=400$.')),solution:[
        b(r('The derivative is $g\\prime(\\pi/6)=\\cos(\\pi/6)=\\sqrt3/2$.'),r('Đạo hàm là $g\\prime(\\pi/6)=\\cos(\\pi/6)=\\sqrt3/2$.')),
        b(r('The scaled transformed variance is $(\\sqrt3/2)^2(0.04)=0.03$.'),r('Phương sai biến đổi đã chuẩn hóa là $(\\sqrt3/2)^2(0.04)=0.03$.')),
        b(r('At $n=400$, the transformed estimator standard error is approximately $\\sqrt{0.03/400}=\\sqrt{0.000075}\\approx0.00866$.'),r('Khi $n=400$, sai số chuẩn của ước lượng biến đổi xấp xỉ $\\sqrt{0.03/400}=\\sqrt{0.000075}\\approx0.00866$.'))
      ]}
    ],
    reviewNote:'Differentiability is only required at the fixed target. Root-n convergence implies tightness and convergence in probability of Tn to theta0; the Taylor remainder divided by Tn−theta0 is defined as zero on equality and is multiplied by an Op(1) term.',
    sourceIds:['p-mit18655']
  },
  'm2-w051-e2':{
    title:b('Log transform of a sample mean','Biến đổi log của trung bình mẫu'),
    prompt:b(r('Suppose $X_i\\ge0$ have sample means with $\\sqrt n(\\bar X_n-\\mu)\\Rightarrow N(0,\\sigma^2)$, where $\\mu>0$ and $0<\\sigma^2<\\infty$. Define $T_n=\\log\\bar X_n$ when $\\bar X_n>0$ and $T_n=0$ otherwise. Give the limiting law of $\\sqrt n(T_n-\\log\\mu)$ and an estimated standard error using a consistent $s_n^2\\to_P\\sigma^2$.'),r('Giả sử $X_i\\ge0$ có trung bình mẫu thỏa $\\sqrt n(\\bar X_n-\\mu)\\Rightarrow N(0,\\sigma^2)$, với $\\mu>0$ và $0<\\sigma^2<\\infty$. Đặt $T_n=\\log\\bar X_n$ khi $\\bar X_n>0$ và $T_n=0$ nếu không. Tìm luật giới hạn của $\\sqrt n(T_n-\\log\\mu)$ và sai số chuẩn ước lượng dùng $s_n^2\\to_P\\sigma^2$ nhất quán.')),
    application:b(r('Transform a positive sample mean with the logarithm while defining the statistic on every finite sample, including the event that all nonnegative observations are zero.'),r('Biến đổi trung bình mẫu dương bằng log đồng thời định nghĩa thống kê trên mọi mẫu hữu hạn, kể cả biến cố mọi quan sát không âm đều bằng không.')),
    formula:b(r('If $X_i\\ge0$, $\\mu=EX_i>0$, $\\sqrt n(\\bar X_n-\\mu)\\Rightarrow N(0,\\sigma^2)$ with $0<\\sigma^2<\\infty$, and $s_n^2\\to_P\\sigma^2$, define $T_n=\\log\\bar X_n$ for $\\bar X_n>0$ and $T_n=0$ otherwise. Then $\\sqrt n(T_n-\\log\\mu)\\Rightarrow N(0,\\sigma^2/\\mu^2)$ and $\\widehat{SE}=s_n/(\\bar X_n\\sqrt n)$ on positive samples.'),r('Nếu $X_i\\ge0$, $\\mu=EX_i>0$, $\\sqrt n(\\bar X_n-\\mu)\\Rightarrow N(0,\\sigma^2)$ với $0<\\sigma^2<\\infty$ và $s_n^2\\to_P\\sigma^2$, đặt $T_n=\\log\\bar X_n$ khi $\\bar X_n>0$ và $T_n=0$ nếu không. Khi đó $\\sqrt n(T_n-\\log\\mu)\\Rightarrow N(0,\\sigma^2/\\mu^2)$ và $\\widehat{SE}=s_n/(\\bar X_n\\sqrt n)$ trên mẫu dương.')),
    steps:[
      b(r('The given CLT implies $\\bar X_n\\to_P\\mu>0$, so $P(\\bar X_n>\\mu/2)\\to1$. Thus the log is defined with probability tending to one, although not necessarily on every finite sample.'),r('CLT đã cho suy ra $\\bar X_n\\to_P\\mu>0$, nên $P(\\bar X_n>\\mu/2)\\to1$. Do đó log xác định với xác suất tiến một, dù không nhất thiết trên mọi mẫu hữu hạn.')),
      b(r('The fallback $T_n=0$ when $\\bar X_n=0$ changes the statistic only on an event whose probability tends to zero, so it does not change the weak limit.'),r('Giá trị dự phòng $T_n=0$ khi $\\bar X_n=0$ chỉ đổi thống kê trên biến cố có xác suất tiến về không, nên không đổi giới hạn phân phối.')),
      b(r('Near $\\mu$, $g(x)=\\log x$ has derivative $g\\prime(\\mu)=1/\\mu$; the delta method therefore multiplies the original variance by $1/\\mu^2$.'),r('Gần $\\mu$, $g(x)=\\log x$ có đạo hàm $g\\prime(\\mu)=1/\\mu$; vì vậy phương pháp delta nhân phương sai ban đầu với $1/\\mu^2$.')),
      b(r('Replacing $\\mu$ by $\\bar X_n$ and $\\sigma^2$ by a consistent $s_n^2$ gives $\\widehat{SE}=s_n/(\\bar X_n\\sqrt n)$ when $\\bar X_n>0$; for dependent data $s_n^2$ must estimate the CLT variance.'),r('Thay $\\mu$ bằng $\\bar X_n$ và $\\sigma^2$ bằng $s_n^2$ nhất quán cho $\\widehat{SE}=s_n/(\\bar X_n\\sqrt n)$ khi $\\bar X_n>0$; với dữ liệu phụ thuộc, $s_n^2$ phải ước lượng phương sai trong CLT.'))
    ],
    primarySolution:[
      b(r('From $\\sqrt n(\\bar X_n-\\mu)=O_P(1)$, we get $\\bar X_n\\to_P\\mu>0$, hence $P(\\bar X_n>0)\\to1$. The stated fallback defines $T_n$ even when the logarithm would otherwise fail.'),r('Từ $\\sqrt n(\\bar X_n-\\mu)=O_P(1)$ suy ra $\\bar X_n\\to_P\\mu>0$, nên $P(\\bar X_n>0)\\to1$. Giá trị dự phòng đã nêu định nghĩa $T_n$ cả khi log không xác định.')),
      b(r('On the event $\\bar X_n>0$, apply the delta method to $g(x)=\\log x$, whose derivative at $\\mu$ is $1/\\mu$.'),r('Trên biến cố $\\bar X_n>0$, áp dụng phương pháp delta cho $g(x)=\\log x$, có đạo hàm tại $\\mu$ bằng $1/\\mu$.')),
      b(r('The resulting limit is $N(0,(1/\\mu)^2\\sigma^2)=N(0,\\sigma^2/\\mu^2)$. Changing values on the vanishing complement does not affect convergence in distribution.'),r('Giới hạn thu được là $N(0,(1/\\mu)^2\\sigma^2)=N(0,\\sigma^2/\\mu^2)$. Đổi giá trị trên phần bù có xác suất triệt tiêu không ảnh hưởng hội tụ phân phối.')),
      b(r('If $s_n^2\\to_P\\sigma^2$, Slutsky gives plug-in standard error $s_n/(\\bar X_n\\sqrt n)$ on positive samples. For IID data, a consistent sample standard deviation supplies $s_n$ when the variance is finite.'),r('Nếu $s_n^2\\to_P\\sigma^2$, Slutsky cho sai số chuẩn thế vào $s_n/(\\bar X_n\\sqrt n)$ trên mẫu dương. Với dữ liệu IID, độ lệch chuẩn mẫu nhất quán cung cấp $s_n$ khi phương sai hữu hạn.'))
    ],
    companions:[
      {prompt:b(r('A click-through indicator is Bernoulli$(0.4)$, and $n=100$ users are sampled IID. For the log of the observed click rate, define a finite-sample fallback and compute the delta-method variance and standard error at the true parameter.'),r('Chỉ báo nhấp chuột có luật Bernoulli$(0.4)$ và lấy mẫu $n=100$ người dùng IID. Với log của tỷ lệ nhấp quan sát, định nghĩa giá trị dự phòng mẫu hữu hạn và tính phương sai delta cùng sai số chuẩn tại tham số thật.')),solution:[
        b(r('The sample mean is zero only if all users fail to click, an event with probability $0.6^{100}$; set the transformed statistic to zero on that event.'),r('Trung bình mẫu bằng không chỉ khi cả 100 người không nhấp, biến cố có xác suất $0.6^{100}$; đặt thống kê biến đổi bằng không trên biến cố đó.')),
        b(r('At $\\mu=p=0.4$, $\\sigma^2=p(1-p)=0.24$, so the scaled log-rate variance is $\\sigma^2/\\mu^2=0.24/0.16=1.5$.'),r('Tại $\\mu=p=0.4$, $\\sigma^2=p(1-p)=0.24$, nên phương sai log-rate đã chuẩn hóa là $\\sigma^2/\\mu^2=0.24/0.16=1.5$.')),
        b(r('For $n=100$, $SE\\approx\\sqrt{1.5/100}=\\sqrt{0.015}\\approx0.1225$; a plug-in estimate uses $\\sqrt{(1-\\hat p_n)/(100\\hat p_n)}$ when $\\hat p_n>0$.'),r('Với $n=100$, $SE\\approx\\sqrt{1.5/100}=\\sqrt{0.015}\\approx0.1225$; ước lượng thế vào dùng $\\sqrt{(1-\\hat p_n)/(100\\hat p_n)}$ khi $\\hat p_n>0$.'))
      ]},
      {prompt:b(r('IID waiting times are exponential with rate 2. For observations $0.2,0.5,0.8$, compute the log sample mean. Then give the asymptotic variance of its root-n error and the standard error at $n=100$.'),r('Thời gian chờ IID có phân phối mũ với tốc độ 2. Với các quan sát $0.2,0.5,0.8$, tính log trung bình mẫu. Sau đó tìm phương sai tiệm cận của sai số nhân căn cỡ mẫu và sai số chuẩn khi $n=100$.')),solution:[
        b(r('The sample mean is $(0.2+0.5+0.8)/3=0.5$, so the transformed estimate is $\\log(0.5)$.'),r('Trung bình mẫu là $(0.2+0.5+0.8)/3=0.5$, nên ước lượng biến đổi là $\\log(0.5)$.')),
        b(r('An exponential variable of rate 2 has $\\mu=1/2$ and $\\sigma^2=1/4$; the log-mean delta variance is $\\sigma^2/\\mu^2=1$.'),r('Biến mũ tốc độ 2 có $\\mu=1/2$ và $\\sigma^2=1/4$; phương sai delta của log-trung bình là $\\sigma^2/\\mu^2=1$.')),
        b(r('Thus the estimator standard error at $n=100$ is approximately $\\sqrt{1/100}=0.1$. Exponential observations are positive, so the log is defined for every nonempty finite sample.'),r('Vì vậy sai số chuẩn ước lượng khi $n=100$ xấp xỉ $\\sqrt{1/100}=0.1$. Quan sát mũ luôn dương nên log xác định với mọi mẫu hữu hạn không rỗng.'))
      ]},
      {prompt:b(r('A sensor reading $X$ equals zero with probability $0.2$ and equals 2 with probability $0.8$, independently across readings. For $n=100$, find $\\mu$, $\\sigma^2$, the log-mean delta variance, and the standard error; define what to do if the sample mean is zero.'),r('Số đo cảm biến $X$ bằng không với xác suất $0.2$ và bằng 2 với xác suất $0.8$, độc lập qua các lần đo. Với $n=100$, tìm $\\mu$, $\\sigma^2$, phương sai delta log-trung bình và sai số chuẩn; định nghĩa cách xử lý nếu trung bình mẫu bằng không.')),solution:[
        b(r('The mean is $\\mu=0(0.2)+2(0.8)=1.6$, and $EX^2=4(0.8)=3.2$, so $\\sigma^2=3.2-1.6^2=0.64$.'),r('Trung bình là $\\mu=0(0.2)+2(0.8)=1.6$, còn $EX^2=4(0.8)=3.2$, nên $\\sigma^2=3.2-1.6^2=0.64$.')),
        b(r('The scaled log-mean variance is $\\sigma^2/\\mu^2=0.64/2.56=0.25$.'),r('Phương sai log-trung bình đã chuẩn hóa là $\\sigma^2/\\mu^2=0.64/2.56=0.25$.')),
        b(r('The asymptotic standard error is $\\sqrt{0.25/100}=0.05$. The zero-mean event is all 100 readings zero, with probability $0.2^{100}$; set the transformed estimate to zero there.'),r('Sai số chuẩn tiệm cận là $\\sqrt{0.25/100}=0.05$. Biến cố trung bình bằng không xảy ra khi cả 100 số đo bằng không, xác suất $0.2^{100}$; đặt ước lượng biến đổi bằng không tại đó.'))
      ]}
    ],
    reviewNote:'The log is defined only for positive arguments. Nonnegative observations and a positive mean imply positivity of the sample mean with probability tending to one, not necessarily for every finite n; the fallback convention gives a finite-sample statistic and changes no weak limit.',
    sourceIds:['p-mit18655']
  },
  'm2-w051-e3':{
    title:b('Second-order limit when the first derivative vanishes','Giới hạn bậc hai khi đạo hàm bậc nhất bằng không'),
    application:b(r('If the first-order term cancels at the target, square the root-n fluctuation and use a faster n scaling.'),r('Nếu số hạng bậc nhất triệt tiêu tại giá trị đích, hãy bình phương dao động căn-n và dùng tốc độ n nhanh hơn.')),
    formula:b(r('If $\\sqrt n(T_n-\\theta_0)\\Rightarrow Z\\sim N(0,\\sigma^2)$ with $\\sigma^2>0$ and $g(t)=(t-\\theta_0)^2$, then $n g(T_n)\\Rightarrow Z^2\\sim\\sigma^2\\chi_1^2$, while $\\sqrt n g(T_n)\\to_P0$.'),r('Nếu $\\sqrt n(T_n-\\theta_0)\\Rightarrow Z\\sim N(0,\\sigma^2)$ với $\\sigma^2>0$ và $g(t)=(t-\\theta_0)^2$, thì $n g(T_n)\\Rightarrow Z^2\\sim\\sigma^2\\chi_1^2$, còn $\\sqrt n g(T_n)\\to_P0$.')),
    steps:[
      b(r('Because $g\\prime(\\theta_0)=0$, the usual linear delta term vanishes; here the transformation is exactly the squared estimation error.'),r('Vì $g\\prime(\\theta_0)=0$, số hạng delta tuyến tính thường lệ triệt tiêu; ở đây phép biến đổi chính là bình phương sai số ước lượng.')),
      b(r('Rewrite $n(T_n-\\theta_0)^2=[\\sqrt n(T_n-\\theta_0)]^2$.'),r('Viết lại $n(T_n-\\theta_0)^2=[\\sqrt n(T_n-\\theta_0)]^2$.')),
      b(r('The square function is continuous, so the continuous mapping theorem sends the bracketed weak limit $Z$ to $Z^2$.'),r('Hàm bình phương liên tục, nên định lý ánh xạ liên tục biến giới hạn phân phối trong ngoặc $Z$ thành $Z^2$.')),
      b(r('For $Z\\sim N(0,\\sigma^2)$, $Z^2$ has law $\\sigma^2\\chi_1^2$ and is nondegenerate; the slower $\\sqrt n$ scaling instead tends to zero.'),r('Với $Z\\sim N(0,\\sigma^2)$, $Z^2$ có luật $\\sigma^2\\chi_1^2$ và không suy biến; tốc độ $\\sqrt n$ chậm hơn thì hội tụ về không.'))
    ],
    primarySolution:[
      b(r('The assumed convergence makes $\\sqrt n(T_n-\\theta_0)$ tight.'),r('Hội tụ giả sử khiến $\\sqrt n(T_n-\\theta_0)$ là dãy chặt.')),
      b(r('At the proposed first-order scale, $\\sqrt n g(T_n)=n^{-1/2}[\\sqrt n(T_n-\\theta_0)]^2$, which converges to zero in probability.'),r('Ở tốc độ bậc nhất đề xuất, $\\sqrt n g(T_n)=n^{-1/2}[\\sqrt n(T_n-\\theta_0)]^2$, hội tụ về không theo xác suất.')),
      b(r('At scale $n$, $n g(T_n)=[\\sqrt n(T_n-\\theta_0)]^2\\Rightarrow Z^2$ by the continuous mapping theorem.'),r('Ở tốc độ $n$, $n g(T_n)=[\\sqrt n(T_n-\\theta_0)]^2\\Rightarrow Z^2$ theo định lý ánh xạ liên tục.')),
      b(r('Since $Z\\sim N(0,\\sigma^2)$, this limit is $\\sigma^2\\chi_1^2$, not a centered Gaussian.'),r('Vì $Z\\sim N(0,\\sigma^2)$, giới hạn là $\\sigma^2\\chi_1^2$, không phải Gaussian tâm không.'))
    ],
    companions:[
      {prompt:b(r('A sensor sample mean $T_n=\\bar X_n$ is based on IID $X_i\\sim N(\\mu,4)$. For the squared calibration error $g(t)=(t-\\mu)^2$, find the nondegenerate limit of $n g(T_n)$.'),r('Trung bình mẫu cảm biến $T_n=\\bar X_n$ dựa trên $X_i\\sim N(\\mu,4)$ IID. Với bình phương sai số hiệu chuẩn $g(t)=(t-\\mu)^2$, tìm giới hạn không suy biến của $n g(T_n)$.')),solution:[
        b(r('The sample-mean CLT gives $\\sqrt n(\\bar X_n-\\mu)\\Rightarrow Z\\sim N(0,4)$.'),r('CLT trung bình mẫu cho $\\sqrt n(\\bar X_n-\\mu)\\Rightarrow Z\\sim N(0,4)$.')),
        b(r('Then $n g(\\bar X_n)=[\\sqrt n(\\bar X_n-\\mu)]^2\\Rightarrow Z^2$.'),r('Khi đó $n g(\\bar X_n)=[\\sqrt n(\\bar X_n-\\mu)]^2\\Rightarrow Z^2$.')),
        b(r('Since $Z^2$ is $4\\chi_1^2$, the limit is nondegenerate and supported on nonnegative values.'),r('Vì $Z^2$ có luật $4\\chi_1^2$, giới hạn không suy biến và chỉ nhận giá trị không âm.'))
      ]},
      {prompt:b(r('A Bernoulli proportion estimates $p_0=1/2$ from IID trials, so $\\sqrt n(\\hat p_n-1/2)\\Rightarrow Z\\sim N(0,1/4)$. For the reported quadratic penalty $g(t)=3(t-1/2)^2$, find the limiting law of $n g(\\hat p_n)$.'),r('Tỷ lệ Bernoulli ước lượng $p_0=1/2$ từ phép thử IID, nên $\\sqrt n(\\hat p_n-1/2)\\Rightarrow Z\\sim N(0,1/4)$. Với mức phạt bậc hai báo cáo $g(t)=3(t-1/2)^2$, tìm luật giới hạn của $n g(\\hat p_n)$.')),solution:[
        b(r('The factor 3 remains outside the square, so $n g(\\hat p_n)=3[\\sqrt n(\\hat p_n-1/2)]^2$.'),r('Hệ số 3 giữ bên ngoài bình phương, nên $n g(\\hat p_n)=3[\\sqrt n(\\hat p_n-1/2)]^2$.')),
        b(r('By continuous mapping this converges to $3Z^2$.'),r('Theo ánh xạ liên tục, biểu thức hội tụ tới $3Z^2$.')),
        b(r('Because $Z^2\\sim(1/4)\\chi_1^2$, the limit is $(3/4)\\chi_1^2$.'),r('Vì $Z^2\\sim(1/4)\\chi_1^2$, giới hạn là $(3/4)\\chi_1^2$.'))
      ]},
      {prompt:b(r('An angle estimate satisfies $\\sqrt n T_n\\Rightarrow Z\\sim N(0,1/4)$ at target zero. For the cosine contrast $g(t)=\\cos t-1$, use a second-order expansion to find the limit of $n g(T_n)$.'),r('Ước lượng góc thỏa $\\sqrt n T_n\\Rightarrow Z\\sim N(0,1/4)$ tại giá trị đích không. Với độ tương phản cosine $g(t)=\\cos t-1$, dùng khai triển bậc hai để tìm giới hạn của $n g(T_n)$.')),solution:[
        b(r('At zero, $g(0)=0$, $g\\prime(0)=0$, and $g\\prime\\prime(0)=-1$.'),r('Tại không, $g(0)=0$, $g\\prime(0)=0$ và $g\\prime\\prime(0)=-1$.')),
        b(r('Taylor expansion gives $g(t)=-(1/2)t^2+o(t^2)$ as $t\\to0$.'),r('Khai triển Taylor cho $g(t)=-(1/2)t^2+o(t^2)$ khi $t\\to0$.')),
        b(r('Therefore $n g(T_n)\\Rightarrow-(1/2)Z^2$; since $Z^2\\sim(1/4)\\chi_1^2$, the limit is $-(1/8)\\chi_1^2$.'),r('Do đó $n g(T_n)\\Rightarrow-(1/2)Z^2$; vì $Z^2\\sim(1/4)\\chi_1^2$, giới hạn là $-(1/8)\\chi_1^2$.'))
      ]}
    ],
    reviewNote:'The exact square has a chi-square limit at rate n, while the root-n scaled transform degenerates. The cosine companion checks the general second-order Taylor coefficient g″/2, including a negative limit for a local maximum.',
    sourceIds:['p-mit18655']
  },
  'm2-w051-e4':{
    title:b('Absolute value at a kink','Giá trị tuyệt đối tại điểm gấp khúc'),
    application:b(r('Use continuity to obtain a limit for a transformed estimator even when a kink prevents an ordinary derivative-based delta formula.'),r('Dùng tính liên tục để tìm giới hạn của ước lượng biến đổi ngay cả khi điểm gấp khúc khiến công thức delta dựa trên đạo hàm thông thường không dùng được.')),
    formula:b(r('If $\\sqrt nT_n\\Rightarrow Z\\sim N(0,1)$ and $g(t)=|t|$, then $\\sqrt n|T_n|=|\\sqrt nT_n|\\Rightarrow|Z|$. The map is continuous at zero but not differentiable there.'),r('Nếu $\\sqrt nT_n\\Rightarrow Z\\sim N(0,1)$ và $g(t)=|t|$, thì $\\sqrt n|T_n|=|\\sqrt nT_n|\\Rightarrow|Z|$. Hàm liên tục tại không nhưng không khả vi tại đó.')),
    steps:[
      b(r('The scaled statistic can be rewritten exactly as $\\sqrt n|T_n|=|\\sqrt nT_n|$.'),r('Thống kê đã chuẩn hóa có thể viết chính xác thành $\\sqrt n|T_n|=|\\sqrt nT_n|$.')),
      b(r('Absolute value is continuous on the whole real line, including its kink at zero.'),r('Giá trị tuyệt đối liên tục trên toàn trục thực, kể cả điểm gấp khúc bằng không.')),
      b(r('The continuous mapping theorem therefore gives $|\\sqrt nT_n|\\Rightarrow|Z|$.'),r('Định lý ánh xạ liên tục do đó cho $|\\sqrt nT_n|\\Rightarrow|Z|$.')),
      b(r('The limit is supported on $[0,\\infty)$ and is half-normal, not a centered normal; the classical derivative formula is unavailable because $g\\prime(0)$ does not exist.'),r('Giới hạn có hỗ trợ $[0,\\infty)$ và là nửa chuẩn, không phải chuẩn tâm không; công thức đạo hàm cổ điển không áp dụng vì $g\\prime(0)$ không tồn tại.'))
    ],
    primarySolution:[
      b(r('Rewrite the target as $\\sqrt n|T_n|=|\\sqrt nT_n|$.'),r('Viết lại biểu thức cần tìm thành $\\sqrt n|T_n|=|\\sqrt nT_n|$.')),
      b(r('Since $x\\mapsto|x|$ is continuous, apply the continuous mapping theorem to $\\sqrt nT_n\\Rightarrow Z$.'),r('Vì $x\\mapsto|x|$ liên tục, áp dụng định lý ánh xạ liên tục cho $\\sqrt nT_n\\Rightarrow Z$.')),
      b(r('This gives the weak limit $|Z|$; for standard normal $Z$ it is half-normal, with no negative values.'),r('Ta được giới hạn phân phối $|Z|$; nếu $Z$ chuẩn tắc thì đây là nửa chuẩn, không nhận giá trị âm.')),
      b(r('The ordinary delta theorem would require a finite derivative at zero, but $|t|$ has a corner there.'),r('Định lý delta thông thường cần đạo hàm hữu hạn tại không, nhưng $|t|$ có góc gấp tại đó.'))
    ],
    companions:[
      {prompt:b(r('A centering estimator $T_n$ for a sensor bias satisfies $\\sqrt nT_n\\Rightarrow Z\\sim N(0,4)$. The reported error magnitude is $|T_n|$. Find its scaled limit and distribution.'),r('Ước lượng độ lệch cảm biến $T_n$ thỏa $\\sqrt nT_n\\Rightarrow Z\\sim N(0,4)$. Độ lớn sai số báo cáo là $|T_n|$. Tìm giới hạn đã chuẩn hóa và phân phối của nó.')),solution:[
        b(r('Use the exact identity $\\sqrt n|T_n|=|\\sqrt nT_n|$.'),r('Dùng đồng nhất thức chính xác $\\sqrt n|T_n|=|\\sqrt nT_n|$.')),
        b(r('Continuity of absolute value gives convergence to $|Z|$.'),r('Tính liên tục của giá trị tuyệt đối cho hội tụ tới $|Z|$.')),
        b(r('Since $Z\\sim N(0,4)$, the limit has the distribution of $2|N(0,1)|$, a half-normal with scale 2.'),r('Vì $Z\\sim N(0,4)$, giới hạn có phân phối $2|N(0,1)|$, là nửa chuẩn với tỷ lệ 2.'))
      ]},
      {prompt:b(r('For IID $Y_i\\sim N(0,1)$, estimate a nonnegative drift by $T_n=\\max(0,\\bar Y_n)$. Find the exact law of $\\sqrt nT_n$ and explain the role of continuity.'),r('Với $Y_i\\sim N(0,1)$ IID, ước lượng độ trôi không âm bằng $T_n=\\max(0,\\bar Y_n)$. Tìm luật chính xác của $\\sqrt nT_n$ và giải thích vai trò của tính liên tục.')),solution:[
        b(r('Because the observations are normal, $\\sqrt n\\bar Y_n\\sim N(0,1)$ exactly for every $n$.'),r('Vì các quan sát có luật chuẩn, $\\sqrt n\\bar Y_n\\sim N(0,1)$ chính xác với mọi $n$.')),
        b(r('The map $h(x)=\\max(0,x)$ is continuous, so $\\sqrt nT_n=h(\\sqrt n\\bar Y_n)$ has the law of $\\max(0,Z)$.'),r('Hàm $h(x)=\\max(0,x)$ liên tục, nên $\\sqrt nT_n=h(\\sqrt n\\bar Y_n)$ có luật của $\\max(0,Z)$.')),
        b(r('This distribution has mass $1/2$ at zero and the positive half of a standard normal; the kink does not obstruct continuous mapping.'),r('Phân phối này có khối lượng $1/2$ tại không và nửa dương của chuẩn tắc; điểm gấp khúc không cản trở ánh xạ liên tục.'))
      ]},
      {prompt:b(r('An instrument reports absolute deviation $|\\bar X_n-5|$ from a reference of 5, where IID $X_i\\sim N(5,9)$. Find the limit of $\\sqrt n|\\bar X_n-5|$ and identify its scale.'),r('Thiết bị báo cáo độ lệch tuyệt đối $|\\bar X_n-5|$ so với mốc 5, với $X_i\\sim N(5,9)$ IID. Tìm giới hạn của $\\sqrt n|\\bar X_n-5|$ và xác định tỷ lệ của nó.')),solution:[
        b(r('The sample-mean CLT gives $\\sqrt n(\\bar X_n-5)\\Rightarrow Z\\sim N(0,9)$.'),r('CLT trung bình mẫu cho $\\sqrt n(\\bar X_n-5)\\Rightarrow Z\\sim N(0,9)$.')),
        b(r('Rewrite the reported statistic as $|\\sqrt n(\\bar X_n-5)|$ and apply continuity of absolute value.'),r('Viết lại thống kê báo cáo thành $|\\sqrt n(\\bar X_n-5)|$ rồi áp dụng tính liên tục của giá trị tuyệt đối.')),
        b(r('The limit is $|Z|=3|N(0,1)|$, a half-normal random variable with scale 3.'),r('Giới hạn là $|Z|=3|N(0,1)|$, biến nửa chuẩn có tỷ lệ 3.'))
      ]}
    ],
    reviewNote:'The continuous mapping theorem applies at the kink because absolute value is continuous; only the ordinary derivative-based delta theorem fails. The one-sided maximum companion also gives an atom, which the differentiable Gaussian formula would miss.',
    sourceIds:['p-mit18655']
  },
  'm2-w051-e5':{
    title:b('Variance stabilization for a Bernoulli proportion','Ổn định phương sai cho tỷ lệ Bernoulli'),
    application:b(r('Transform a proportion so its first-order asymptotic variance no longer depends on the unknown success probability.'),r('Biến đổi tỷ lệ để phương sai tiệm cận bậc nhất không còn phụ thuộc xác suất thành công chưa biết.')),
    formula:b(r('For IID $X_i\\sim\\operatorname{Bernoulli}(p)$ with fixed $0<p<1$, let $\\hat p_n=\\bar X_n$ and $g(p)=\\arcsin\\sqrt p$. Then $g\\prime(p)=1/[2\\sqrt{p(1-p)}]$ and $\\sqrt n[g(\\hat p_n)-g(p)]\\Rightarrow N(0,1/4)$.'),r('Với $X_i\\sim\\operatorname{Bernoulli}(p)$ IID và $0<p<1$ cố định, đặt $\\hat p_n=\\bar X_n$ và $g(p)=\\arcsin\\sqrt p$. Khi đó $g\\prime(p)=1/[2\\sqrt{p(1-p)}]$ và $\\sqrt n[g(\\hat p_n)-g(p)]\\Rightarrow N(0,1/4)$.')),
    steps:[
      b(r('Differentiate the composition: $g\\prime(p)=(1/2)(1/\\sqrt p)(1/\\sqrt{1-p})=1/[2\\sqrt{p(1-p)}]$.'),r('Đạo hàm hàm hợp: $g\\prime(p)=(1/2)(1/\\sqrt p)(1/\\sqrt{1-p})=1/[2\\sqrt{p(1-p)}]$.')),
      b(r('The IID Bernoulli CLT gives $\\sqrt n(\\hat p_n-p)\\Rightarrow N(0,p(1-p))$ for fixed interior $p$.'),r('CLT Bernoulli IID cho $\\sqrt n(\\hat p_n-p)\\Rightarrow N(0,p(1-p))$ với $p$ cố định trong lòng.')),
      b(r('The delta method multiplies this variance by $g\\prime(p)^2=1/[4p(1-p)]$.'),r('Phương pháp delta nhân phương sai này với $g\\prime(p)^2=1/[4p(1-p)]$.')),
      b(r('The product is $p(1-p)/[4p(1-p)]=1/4$, independent of $p$; at $p=0$ or $1$ the derivative is unbounded and the interior argument does not apply.'),r('Tích bằng $p(1-p)/[4p(1-p)]=1/4$, không phụ thuộc $p$; tại $p=0$ hoặc $1$, đạo hàm không bị chặn và lập luận trong lòng không áp dụng.'))
    ],
    primarySolution:[
      b(r('For $g(p)=\\arcsin\\sqrt p$, the chain rule gives $g\\prime(p)=1/[2\\sqrt p\\sqrt{1-p}]=1/[2\\sqrt{p(1-p)}]$.'),r('Với $g(p)=\\arcsin\\sqrt p$, quy tắc dây chuyền cho $g\\prime(p)=1/[2\\sqrt p\\sqrt{1-p}]=1/[2\\sqrt{p(1-p)}]$.')),
      b(r('For IID Bernoulli$(p)$ data and fixed $0<p<1$, $\\sqrt n(\\hat p_n-p)\\Rightarrow N(0,p(1-p))$.'),r('Với dữ liệu Bernoulli$(p)$ IID và $0<p<1$ cố định, $\\sqrt n(\\hat p_n-p)\\Rightarrow N(0,p(1-p))$.')),
      b(r('Apply the delta method: the transformed limiting variance is $g\\prime(p)^2p(1-p)=[1/(4p(1-p))]p(1-p)=1/4$.'),r('Áp dụng phương pháp delta: phương sai giới hạn sau biến đổi là $g\\prime(p)^2p(1-p)=[1/(4p(1-p))]p(1-p)=1/4$.')),
      b(r('Thus the limiting law is $N(0,1/4)$. At boundary values $p=0$ and $p=1$, the derivative diverges and this interior CLT-delta calculation is not valid.'),r('Vậy luật giới hạn là $N(0,1/4)$. Tại các giá trị biên $p=0$ và $p=1$, đạo hàm phân kỳ nên phép tính CLT-delta trong lòng này không hợp lệ.'))
    ],
    companions:[
      {prompt:b(r('A poll samples $n=1000$ IID Bernoulli$(0.36)$ responses. For $g(p)=\\arcsin\\sqrt p$, compute the derivative at $p=0.36$ and the asymptotic standard error of $g(\\hat p_n)$.'),r('Một cuộc thăm dò lấy $n=1000$ phản hồi Bernoulli$(0.36)$ IID. Với $g(p)=\\arcsin\\sqrt p$, tính đạo hàm tại $p=0.36$ và sai số chuẩn tiệm cận của $g(\\hat p_n)$.')),solution:[
        b(r('Here $p(1-p)=0.36(0.64)=0.2304$ and $\\sqrt{p(1-p)}=0.48$.'),r('Ở đây $p(1-p)=0.36(0.64)=0.2304$ và $\\sqrt{p(1-p)}=0.48$.')),
        b(r('Thus $g\\prime(0.36)=1/(2\\cdot0.48)=25/24\\approx1.0417$.'),r('Do đó $g\\prime(0.36)=1/(2\\cdot0.48)=25/24\\approx1.0417$.')),
        b(r('The stabilized variance is $1/4$, so the estimator standard error is $\\sqrt{1/(4\\cdot1000)}=1/(2\\sqrt{1000})\\approx0.01581$.'),r('Phương sai đã ổn định là $1/4$, nên sai số chuẩn ước lượng là $\\sqrt{1/(4\\cdot1000)}=1/(2\\sqrt{1000})\\approx0.01581$.'))
      ]},
      {prompt:b(r('A rare-event monitor has IID Bernoulli$(0.04)$ indicators and sample size $n=200$. Compute $g\\prime(0.04)$, the stabilized asymptotic variance, and the standard error of the transformed proportion.'),r('Bộ giám sát biến cố hiếm có chỉ báo Bernoulli$(0.04)$ IID và cỡ mẫu $n=200$. Tính $g\\prime(0.04)$, phương sai tiệm cận đã ổn định và sai số chuẩn của tỷ lệ biến đổi.')),solution:[
        b(r('The Bernoulli variance factor is $0.04(0.96)=0.0384$, so $g\\prime(0.04)=1/[2\\sqrt{0.0384}]\\approx2.5516$.'),r('Thừa số phương sai Bernoulli là $0.04(0.96)=0.0384$, nên $g\\prime(0.04)=1/[2\\sqrt{0.0384}]\\approx2.5516$.')),
        b(r('Multiplying the original variance by the squared derivative gives $[1/(4\\cdot0.0384)](0.0384)=1/4$.'),r('Nhân phương sai ban đầu với bình phương đạo hàm cho $[1/(4\\cdot0.0384)](0.0384)=1/4$.')),
        b(r('The transformed standard error is $\\sqrt{(1/4)/200}=1/(2\\sqrt{200})\\approx0.03536$.'),r('Sai số chuẩn sau biến đổi là $\\sqrt{(1/4)/200}=1/(2\\sqrt{200})\\approx0.03536$.'))
      ]},
      {prompt:b(r('A quality-control sample has $n=400$ IID Bernoulli$(0.75)$ defect indicators. Find the first-order variance and standard error of the arcsine-square-root transformed proportion, and state a limitation of the calculation.'),r('Mẫu kiểm soát chất lượng có $n=400$ chỉ báo lỗi Bernoulli$(0.75)$ IID. Tìm phương sai bậc nhất và sai số chuẩn của tỷ lệ biến đổi arcsin-căn bậc hai, rồi nêu một hạn chế của phép tính.')),solution:[
        b(r('Because $p=0.75$ is interior, the Bernoulli CLT and differentiability of $g$ apply; the transformed root-n variance is $1/4$.'),r('Vì $p=0.75$ nằm trong lòng, CLT Bernoulli và tính khả vi của $g$ áp dụng; phương sai căn-n sau biến đổi là $1/4$.')),
        b(r('At $n=400$, the standard error is $\\sqrt{1/(4\\cdot400)}=1/40=0.025$.'),r('Khi $n=400$, sai số chuẩn là $\\sqrt{1/(4\\cdot400)}=1/40=0.025$.')),
        b(r('This is an asymptotic result for fixed interior $p$; it does not justify the same formula at $p=0$ or $p=1$, where $g\\prime$ is unbounded.'),r('Đây là kết quả tiệm cận với $p$ cố định trong lòng; nó không biện minh cùng công thức tại $p=0$ hoặc $p=1$, nơi $g\\prime$ không bị chặn.'))
      ]}
    ],
    reviewNote:'The arcsine derivative cancels the Bernoulli variance only for a fixed interior probability. The transformation is not differentiable with finite derivative at either boundary, so the stabilized normal limit cannot be asserted there without separate asymptotics.',
    sourceIds:['p-mit18655']
  },
  'm2-w052-e1':{
    title:b('Bootstrap variance of a sample mean','Phương sai bootstrap của trung bình mẫu'),
    application:b(r('Condition on the observed data: bootstrap draws are independent from the empirical distribution, whose variance determines the conditional spread.'),r('Điều kiện hóa theo dữ liệu quan sát: các mẫu bootstrap độc lập từ phân phối thực nghiệm, mà phương sai của nó quyết định độ phân tán có điều kiện.')),
    formula:b(r('Let $X_1,\\ldots,X_n$ be IID with $EX^2<\\infty$, $F_n=n^{-1}\\sum_i\\delta_{X_i}$, and $s_n^2=n^{-1}\\sum_i(X_i-\\bar X_n)^2$. If $X_i^*\\mid X_{1:n}$ are IID from $F_n$, then $\\operatorname{Var}^*(\\bar X_n^*)=s_n^2/n$ and $n\\operatorname{Var}^*(\\bar X_n^*)=s_n^2\\to_P\\sigma^2$.'),r('Cho $X_1,\\ldots,X_n$ IID với $EX^2<\\infty$, $F_n=n^{-1}\\sum_i\\delta_{X_i}$ và $s_n^2=n^{-1}\\sum_i(X_i-\\bar X_n)^2$. Nếu $X_i^*\\mid X_{1:n}$ IID theo $F_n$, thì $\\operatorname{Var}^*(\\bar X_n^*)=s_n^2/n$ và $n\\operatorname{Var}^*(\\bar X_n^*)=s_n^2\\to_P\\sigma^2$.')),
    steps:[
      b(r('Conditionally on the data, one bootstrap draw has law $F_n$, mean $\\bar X_n$, and variance $s_n^2$ by the definition of the empirical distribution.'),r('Có điều kiện theo dữ liệu, một lần rút bootstrap có luật $F_n$, trung bình $\\bar X_n$ và phương sai $s_n^2$ theo định nghĩa phân phối thực nghiệm.')),
      b(r('The $n$ bootstrap draws are conditionally IID, so variance of their average is $s_n^2/n$.'),r('$n$ lần rút bootstrap IID có điều kiện, nên phương sai trung bình của chúng bằng $s_n^2/n$.')),
      b(r('Multiplying by $n$ leaves exactly $s_n^2$, not a new random bootstrap limit conditional on fixed data.'),r('Nhân với $n$ còn đúng $s_n^2$, không phải một giới hạn bootstrap ngẫu nhiên mới khi điều kiện trên dữ liệu đã cố định.')),
      b(r('For the original IID sample, the law of large numbers applied to $X_i$ and $X_i^2$ yields $s_n^2\\to_P\\operatorname{Var}(X)=\\sigma^2$ when $EX^2<\\infty$.'),r('Với mẫu IID ban đầu, luật số lớn áp dụng cho $X_i$ và $X_i^2$ cho $s_n^2\\to_P\\operatorname{Var}(X)=\\sigma^2$ khi $EX^2<\\infty$.'))
    ],
    primarySolution:[
      b(r('Given $X_{1:n}$, each $X_i^*$ is drawn from the empirical distribution, whose mean is $\\bar X_n$ and variance under the $1/n$ convention is $s_n^2$.'),r('Khi biết $X_{1:n}$, mỗi $X_i^*$ được rút từ phân phối thực nghiệm có trung bình $\\bar X_n$ và phương sai theo quy ước $1/n$ là $s_n^2$.')),
      b(r('Conditional independence gives $\\operatorname{Var}^*(\\bar X_n^*)=n^{-2}\\sum_{i=1}^n\\operatorname{Var}^*(X_i^*)=n^{-2}ns_n^2=s_n^2/n$.'),r('Độc lập có điều kiện cho $\\operatorname{Var}^*(\\bar X_n^*)=n^{-2}\\sum_{i=1}^n\\operatorname{Var}^*(X_i^*)=n^{-2}ns_n^2=s_n^2/n$.')),
      b(r('Thus $n\\operatorname{Var}^*(\\bar X_n^*)=s_n^2$ exactly for each observed sample.'),r('Do đó $n\\operatorname{Var}^*(\\bar X_n^*)=s_n^2$ chính xác với từng mẫu quan sát.')),
      b(r('Under IID sampling with $EX^2<\\infty$, the empirical first and second moments converge in probability, so $s_n^2\\to_P\\sigma^2$.'),r('Dưới lấy mẫu IID với $EX^2<\\infty$, moment thực nghiệm bậc nhất và bậc hai hội tụ theo xác suất, nên $s_n^2\\to_P\\sigma^2$.'))
    ],
    companions:[
      {prompt:b(r('The observed measurements are $1,1,3,3$. Using the empirical variance with denominator $n$, compute the conditional variance of one bootstrap draw and of the bootstrap sample mean.'),r('Các số đo quan sát là $1,1,3,3$. Dùng phương sai thực nghiệm mẫu số $n$, tính phương sai có điều kiện của một lần rút bootstrap và của trung bình mẫu bootstrap.')),solution:[
        b(r('The empirical mean is $\\bar X=2$.'),r('Trung bình thực nghiệm là $\\bar X=2$.')),
        b(r('The empirical variance is $s_n^2=[(1-2)^2+(1-2)^2+(3-2)^2+(3-2)^2]/4=1$.'),r('Phương sai thực nghiệm là $s_n^2=[(1-2)^2+(1-2)^2+(3-2)^2+(3-2)^2]/4=1$.')),
        b(r('A single draw has conditional variance 1, and the mean of four IID bootstrap draws has variance $1/4$.'),r('Một lần rút có phương sai điều kiện 1, còn trung bình của bốn lần rút bootstrap IID có phương sai $1/4$.'))
      ]},
      {prompt:b(r('A sample of four sensor readings is $0,1,1,4$. Find its empirical variance under denominator $n$ and the conditional variance of the bootstrap mean from four resampled readings.'),r('Mẫu bốn số đo cảm biến là $0,1,1,4$. Tìm phương sai thực nghiệm theo mẫu số $n$ và phương sai có điều kiện của trung bình bootstrap từ bốn lần rút lại.')),solution:[
        b(r('The sample mean is $(0+1+1+4)/4=1.5$.'),r('Trung bình mẫu là $(0+1+1+4)/4=1.5$.')),
        b(r('The squared deviations sum to $2.25+0.25+0.25+6.25=9$, hence $s_n^2=9/4=2.25$.'),r('Tổng bình phương độ lệch là $2.25+0.25+0.25+6.25=9$, nên $s_n^2=9/4=2.25$.')),
        b(r('The bootstrap-mean variance is exactly $s_n^2/n=2.25/4=0.5625$ conditional on these observations.'),r('Phương sai trung bình bootstrap chính xác bằng $s_n^2/n=2.25/4=0.5625$ khi điều kiện theo các quan sát này.'))
      ]},
      {prompt:b(r('Observed daily water use is $2,2,5$. Under the empirical bootstrap, compute $\\bar X$, $s_n^2$ with denominator 3, and $\\operatorname{Var}^*(\\bar X_3^*)$.'),r('Lượng nước dùng hằng ngày quan sát được là $2,2,5$. Với bootstrap thực nghiệm, tính $\\bar X$, $s_n^2$ với mẫu số 3 và $\\operatorname{Var}^*(\\bar X_3^*)$.')),solution:[
        b(r('The empirical mean is $(2+2+5)/3=3$.'),r('Trung bình thực nghiệm là $(2+2+5)/3=3$.')),
        b(r('The squared deviations are $1,1,4$, so $s_n^2=(1+1+4)/3=2$.'),r('Bình phương độ lệch là $1,1,4$, nên $s_n^2=(1+1+4)/3=2$.')),
        b(r('Three conditionally IID draws have average variance $s_n^2/3=2/3$.'),r('Ba lần rút IID có điều kiện có phương sai trung bình $s_n^2/3=2/3$.'))
      ]}
    ],
    reviewNote:'The empirical bootstrap variance uses the empirical distribution variance with denominator n, not the unbiased n−1 sample variance. The exact conditional identity is algebraic; convergence to population variance separately uses IID sampling and a finite second moment.',
    sourceIds:['p-cmu36705']
  },
  'm2-w052-e2':{
    title:b('Prove the permutation rank and tie argument','Chứng minh lập luận thứ hạng hoán vị và xử lý hòa'),
    application:b(r('Under an exact exchangeable permutation orbit, random tie breaking makes the rank uniform; jitter then converts its discrete rank to a continuous p-value.'),r('Trên quỹ đạo hoán vị trao đổi chính xác, phá hòa ngẫu nhiên làm thứ hạng đều; thêm nhiễu đều biến thứ hạng rời rạc thành p-value liên tục.')),
    formula:b(r('Under a sharp null with $N$ equally likely exchangeable assignments, let $R$ rank the observed statistic from most to least extreme after random tie breaking. Then $R\\sim\\operatorname{Unif}\\{1,\\ldots,N\\}$, $P(R/N\\le u)=\\lfloor Nu\\rfloor/N\\le u$, and for independent $U\\sim\\operatorname{Unif}(0,1)$, $(R-1+U)/N\\sim\\operatorname{Unif}(0,1)$. Counting all ties as extreme gives a conservative super-uniform p-value.'),r('Dưới giả thuyết không sắc với $N$ phân bổ trao đổi đồng xác suất, cho $R$ là thứ hạng thống kê quan sát từ cực đoan nhất tới ít cực đoan nhất sau phá hòa ngẫu nhiên. Khi đó $R\\sim\\operatorname{Unif}\\{1,\\ldots,N\\}$, $P(R/N\\le u)=\\lfloor Nu\\rfloor/N\\le u$, và với $U\\sim\\operatorname{Unif}(0,1)$ độc lập, $(R-1+U)/N\\sim\\operatorname{Unif}(0,1)$. Đếm mọi trường hợp hòa là cực đoan cho p-value siêu đều bảo thủ.')),
    steps:[
      b(r('Under the sharp null and the assignment mechanism, the observed labeling is uniform over the $N$-element orbit; exchangeability is the premise making each position equally likely.'),r('Dưới giả thuyết không sắc và cơ chế phân bổ, nhãn quan sát đồng đều trên quỹ đạo $N$ phần tử; tính trao đổi là tiền đề khiến mỗi vị trí có xác suất như nhau.')),
      b(r('Randomly order assignments tied at the same statistic. Symmetry then makes every rank $r\\in\\{1,\\ldots,N\\}$ equally likely, so $P(R\\le k)=k/N$.'),r('Sắp ngẫu nhiên các phân bổ hòa cùng thống kê. Tính đối xứng khiến mọi thứ hạng $r\\in\\{1,\\ldots,N\\}$ đồng xác suất, nên $P(R\\le k)=k/N$.')),
      b(r('For $0\\le u\\le1$, $R/N\\le u$ is the event $R\\le\\lfloor Nu\\rfloor$, giving probability $\\lfloor Nu\\rfloor/N\\le u$.'),r('Với $0\\le u\\le1$, $R/N\\le u$ tương đương $R\\le\\lfloor Nu\\rfloor$, nên xác suất là $\\lfloor Nu\\rfloor/N\\le u$.')),
      b(r('Given rank $r$, independent uniform $U$ fills $((r-1)/N,r/N)$; mixing the $N$ equal-length intervals with equal weights yields the continuous uniform law.'),r('Khi biết hạng $r$, biến đều độc lập $U$ lấp đầy $((r-1)/N,r/N)$; trộn $N$ khoảng bằng nhau với trọng số bằng nhau cho luật đều liên tục.')),
      b(r('If a tie-counted p-value includes the whole block of equally extreme assignments, it is at least the randomly tie-broken rank value $R/N$, so its rejection probability cannot exceed the nominal level.'),r('Nếu p-value đếm hòa gồm cả khối phân bổ cùng mức cực đoan, nó ít nhất bằng giá trị thứ hạng phá hòa $R/N$, nên xác suất bác bỏ không vượt mức danh định.'))
    ],
    primarySolution:[
      b(r('The exact sharp null makes all $N$ assignments equally likely conditional on the fixed potential outcomes; random tie breaking assigns a unique rank to each orbit element.'),r('Giả thuyết không sắc chính xác khiến cả $N$ phân bổ đồng xác suất khi điều kiện theo kết quả tiềm năng cố định; phá hòa ngẫu nhiên gán thứ hạng duy nhất cho mỗi phần tử quỹ đạo.')),
      b(r('By symmetry $R$ is discrete uniform, so $P(R/N\\le u)=\\lfloor Nu\\rfloor/N\\le u$ for every $u\\in[0,1]$.'),r('Theo đối xứng, $R$ đều rời rạc, nên $P(R/N\\le u)=\\lfloor Nu\\rfloor/N\\le u$ với mọi $u\\in[0,1]$.')),
      b(r('For fixed rank $r$, $(r-1+U)/N$ is uniform on interval $((r-1)/N,r/N)$. The rank chooses each interval with probability $1/N$.'),r('Với hạng cố định $r$, $(r-1+U)/N$ đều trên khoảng $((r-1)/N,r/N)$. Hạng chọn mỗi khoảng với xác suất $1/N$.')),
      b(r('Each interval has length $1/N$, so the equal mixture has constant density one over $(0,1)$ and is exactly uniform.'),r('Mỗi khoảng có độ dài $1/N$, nên hỗn hợp đồng đều có mật độ hằng một trên $(0,1)$ và chính xác là phân phối đều.')),
      b(r('A p-value that counts the entire observed tie block is no smaller than the randomized rank p-value; hence it is super-uniform and finite-sample conservative.'),r('P-value đếm toàn bộ khối hòa quan sát không nhỏ hơn p-value thứ hạng ngẫu nhiên; vì vậy nó siêu đều và bảo thủ ở mẫu hữu hạn.'))
    ],
    companions:[
      {prompt:b(r('A randomization orbit contains five equally likely schedules with distinct extremeness ranks. If the observed rank $R$ is uniform from 1 through 5, compute $P(R/5\\le0.3)$ and explain why the jittered p-value is uniform.'),r('Quỹ đạo ngẫu nhiên hóa có năm lịch đồng xác suất với thứ hạng cực đoan khác nhau. Nếu hạng quan sát $R$ đều từ 1 tới 5, tính $P(R/5\\le0.3)$ và giải thích vì sao p-value có jitter là đều.')),solution:[
        b(r('The event $R/5\\le0.3$ means $R\\le1.5$, hence the integer rank must be $R=1$.'),r('Biến cố $R/5\\le0.3$ nghĩa là $R\\le1.5$, nên hạng nguyên phải là $R=1$.')),
        b(r('Because $R$ is uniform on five ranks, the probability is $1/5=0.2\\le0.3$, showing discrete super-uniformity at this threshold.'),r('Vì $R$ đều trên năm hạng, xác suất là $1/5=0.2\\le0.3$, cho thấy tính siêu đều rời rạc tại ngưỡng này.')),
        b(r('Conditional on rank $r$, $(r-1+U)/5$ is uniform on the $r$th fifth of $(0,1)$; mixing all five intervals equally gives $\\operatorname{Unif}(0,1)$.'),r('Khi biết hạng $r$, $(r-1+U)/5$ đều trên phần năm thứ $r$ của $(0,1)$; trộn đều cả năm khoảng cho $\\operatorname{Unif}(0,1)$.'))
      ]},
      {prompt:b(r('Six permutation assignments have extremeness scores $0,1,1,2,2,3$. The observed score is 2. Find the tie-counted p-value and the possible randomly tie-broken ranks and discrete p-values.'),r('Sáu phân bổ hoán vị có điểm cực đoan $0,1,1,2,2,3$. Điểm quan sát là 2. Tìm p-value đếm hòa và các thứ hạng có thể có sau phá hòa ngẫu nhiên cùng p-value rời rạc.')),solution:[
        b(r('Three assignments have score at least 2: the two assignments scoring 2 and the one scoring 3. Thus the tie-counted p-value is $3/6=1/2$.'),r('Ba phân bổ có điểm ít nhất 2: hai phân bổ điểm 2 và một điểm 3. Vậy p-value đếm hòa là $3/6=1/2$.')),
        b(r('Rank 1 belongs to score 3; the tied score-2 assignments occupy ranks 2 and 3, so the observed randomized rank is equally likely to be $R=2$ or $R=3$.'),r('Hạng 1 thuộc điểm 3; hai phân bổ hòa điểm 2 giữ hạng 2 và 3, nên hạng ngẫu nhiên quan sát bằng $R=2$ hoặc $R=3$ với xác suất bằng nhau.')),
        b(r('The corresponding discrete rank p-values are $2/6$ and $3/6$. The conservative tie-counted value $1/2$ is at least either randomized rank value.'),r('Các p-value thứ hạng rời rạc tương ứng là $2/6$ và $3/6$. Giá trị đếm hòa bảo thủ $1/2$ không nhỏ hơn cả hai giá trị thứ hạng ngẫu nhiên.'))
      ]},
      {prompt:b(r('A four-assignment permutation test has distinct ranks and the observed assignment has extremeness rank $R=2$. State its discrete p-value and the interval occupied by its jittered p-value; then explain the unconditional uniform claim.'),r('Kiểm định hoán vị có bốn phân bổ với hạng khác nhau và phân bổ quan sát có hạng cực đoan $R=2$. Nêu p-value rời rạc và khoảng chứa p-value có jitter; sau đó giải thích khẳng định đều vô điều kiện.')),solution:[
        b(r('The discrete rank p-value is $R/N=2/4=1/2$, which is super-uniform over random assignments.'),r('P-value thứ hạng rời rạc là $R/N=2/4=1/2$, siêu đều khi xét các phân bổ ngẫu nhiên.')),
        b(r('With independent $U\\sim\\operatorname{Unif}(0,1)$, the jittered value is $(1+U)/4$, uniform on $(1/4,1/2)$ for this fixed observed rank.'),r('Với $U\\sim\\operatorname{Unif}(0,1)$ độc lập, giá trị có jitter là $(1+U)/4$, đều trên $(1/4,1/2)$ khi cố định hạng quan sát này.')),
        b(r('Across all four equally likely assignments, the rank is uniform and selects each consecutive quarter interval equally often; the mixture is uniform on $(0,1)$.'),r('Qua cả bốn phân bổ đồng xác suất, hạng đều và chọn mỗi khoảng một phần tư với tần suất như nhau; hỗn hợp là đều trên $(0,1)$.'))
      ]}
    ],
    reviewNote:'Uniform ranks require the observed assignment to be exchangeable over the full finite orbit under a sharp null. The discrete rank p-value is super-uniform; adding independent uniform jitter is exactly uniform over the orbit, while counting an entire tie block can only make the p-value more conservative.',
    sourceIds:['p-cmu36705']
  },
  'm2-w052-e3':{
    title:b('Compute a two-sided exact treatment permutation p-value','Tính p-value hoán vị điều trị hai phía chính xác'),
    application:b(r('Under a sharp randomization null, enumerate every allowed treatment set, recompute the difference in means, and count outcomes at least as extreme in absolute value.'),r('Dưới giả thuyết không ngẫu nhiên hóa sắc, liệt kê mọi tập điều trị khả thi, tính lại chênh lệch trung bình và đếm kết quả có trị tuyệt đối ít nhất bằng quan sát.')),
    formula:b(r('For four fixed outcomes with exactly two treated, under the sharp null and uniform assignment over six pairs, $p_{\\rm exact}=\\#\\{A:|T(A)|\\ge|T_{\\rm obs}|\\}/6$, where $T(A)=\\bar Y_A-\\bar Y_{A^c}$.'),r('Với bốn kết quả cố định có đúng hai đơn vị điều trị, dưới giả thuyết không sắc và phân bổ đều trên sáu cặp, $p_{\\rm exact}=\\#\\{A:|T(A)|\\ge|T_{\\rm obs}|\\}/6$, trong đó $T(A)=\\bar Y_A-\\bar Y_{A^c}$.')),
    steps:[
      b(r('The observed treated set is $\\{7,8\\}$, so its mean is $7.5$; controls $\\{2,3\\}$ have mean $2.5$.'),r('Tập điều trị quan sát là $\\{7,8\\}$, có trung bình $7.5$; nhóm chứng $\\{2,3\\}$ có trung bình $2.5$.')),
      b(r('Thus $T_{\\rm obs}=7.5-2.5=5$ and $|T_{\\rm obs}|=5$.'),r('Do đó $T_{\\rm obs}=7.5-2.5=5$ và $|T_{\\rm obs}|=5$.')),
      b(r('Enumerating pairs $\\{2,3\\},\\{2,7\\},\\{2,8\\},\\{3,7\\},\\{3,8\\},\\{7,8\\}$ gives absolute differences $5,1,0,0,1,5$.'),r('Liệt kê các cặp $\\{2,3\\},\\{2,7\\},\\{2,8\\},\\{3,7\\},\\{3,8\\},\\{7,8\\}$ cho chênh lệch tuyệt đối $5,1,0,0,1,5$.')),
      b(r('Exactly two of six are at least 5, so the two-sided exact p-value is $2/6=1/3$.'),r('Có đúng hai trong sáu giá trị ít nhất bằng 5, nên p-value hai phía chính xác là $2/6=1/3$.'))
    ],
    primarySolution:[
      b(r('Under the sharp null, hold all four outcomes fixed and let each of the $\\binom42=6$ treated pairs occur with probability $1/6$.'),r('Dưới giả thuyết không sắc, giữ cố định cả bốn kết quả và cho mỗi cặp điều trị trong $\\binom42=6$ cặp xảy ra với xác suất $1/6$.')),
      b(r('For observed treated set $\\{7,8\\}$, $T_{\\rm obs}=(7+8)/2-(2+3)/2=7.5-2.5=5$.'),r('Với tập điều trị quan sát $\\{7,8\\}$, $T_{\\rm obs}=(7+8)/2-(2+3)/2=7.5-2.5=5$.')),
      b(r('The six treated pairs have absolute differences $5,1,0,0,1,5$ in the listed order.'),r('Sáu cặp điều trị có chênh lệch tuyệt đối $5,1,0,0,1,5$ theo thứ tự đã liệt kê.')),
      b(r('Two assignments attain absolute difference at least 5; dividing by the six equally likely assignments gives $p_{\\rm exact}=2/6=1/3$.'),r('Hai phân bổ đạt chênh lệch tuyệt đối ít nhất 5; chia cho sáu phân bổ đồng xác suất được $p_{\\rm exact}=2/6=1/3$.'))
    ],
    companions:[
      {prompt:b(r('Four clinic outcomes are $1,3,8,12$ and exactly two are treated. The observed treated pair is $\\{8,12\\}$. Enumerate all six pairs and compute the two-sided exact p-value using absolute mean difference.'),r('Bốn kết quả phòng khám là $1,3,8,12$ và đúng hai đơn vị được điều trị. Cặp điều trị quan sát là $\\{8,12\\}$. Liệt kê sáu cặp và tính p-value hai phía chính xác theo chênh lệch trung bình tuyệt đối.')),solution:[
        b(r('The observed difference is $(8+12)/2-(1+3)/2=10-2=8$.'),r('Chênh lệch quan sát là $(8+12)/2-(1+3)/2=10-2=8$.')),
        b(r('Pairs $\\{1,3\\},\\{1,8\\},\\{1,12\\},\\{3,8\\},\\{3,12\\},\\{8,12\\}$ yield absolute differences $8,3,1,1,3,8$.'),r('Các cặp $\\{1,3\\},\\{1,8\\},\\{1,12\\},\\{3,8\\},\\{3,12\\},\\{8,12\\}$ cho chênh lệch tuyệt đối $8,3,1,1,3,8$.')),
        b(r('Two of six are at least 8, so the exact two-sided p-value is $2/6=1/3$.'),r('Hai trong sáu giá trị ít nhất bằng 8, nên p-value hai phía chính xác là $2/6=1/3$.'))
      ]},
      {prompt:b(r('Four workshop outcomes are $0,4,5,9$, with exactly two treated and observed pair $\\{0,4\\}$. Compute the absolute difference for each treatment pair and the exact two-sided p-value.'),r('Bốn kết quả hội thảo là $0,4,5,9$, có đúng hai đơn vị điều trị và cặp quan sát là $\\{0,4\\}$. Tính chênh lệch tuyệt đối cho từng cặp điều trị và p-value hai phía chính xác.')),solution:[
        b(r('The observed treatment mean is 2 and the control mean is 7, so $|T_{\\rm obs}|=5$.'),r('Trung bình điều trị quan sát là 2 và trung bình chứng là 7, nên $|T_{\\rm obs}|=5$.')),
        b(r('The six pairs $\\{0,4\\},\\{0,5\\},\\{0,9\\},\\{4,5\\},\\{4,9\\},\\{5,9\\}$ give absolute differences $5,4,0,0,4,5$.'),r('Sáu cặp $\\{0,4\\},\\{0,5\\},\\{0,9\\},\\{4,5\\},\\{4,9\\},\\{5,9\\}$ cho chênh lệch tuyệt đối $5,4,0,0,4,5$.')),
        b(r('Two assignments meet or exceed the observed value 5, yielding $p=2/6=1/3$.'),r('Hai phân bổ đạt hoặc vượt giá trị quan sát 5, cho $p=2/6=1/3$.'))
      ]},
      {prompt:b(r('A field trial records outcomes $-2,1,6,7$ with two treated. The observed treated pair is $\\{1,7\\}$. Find the observed absolute mean difference, all six permutation differences, and the exact p-value.'),r('Thử nghiệm thực địa ghi kết quả $-2,1,6,7$ với hai đơn vị điều trị. Cặp điều trị quan sát là $\\{1,7\\}$. Tìm chênh lệch trung bình tuyệt đối quan sát, sáu chênh lệch hoán vị và p-value chính xác.')),solution:[
        b(r('The observed difference is $(1+7)/2-(-2+6)/2=4-2=2$.'),r('Chênh lệch quan sát là $(1+7)/2-(-2+6)/2=4-2=2$.')),
        b(r('In pair order $\\{-2,1\\},\\{-2,6\\},\\{-2,7\\},\\{1,6\\},\\{1,7\\},\\{6,7\\}$, the absolute differences are $7,2,1,1,2,6$.'),r('Theo thứ tự cặp $\\{-2,1\\},\\{-2,6\\},\\{-2,7\\},\\{1,6\\},\\{1,7\\},\\{6,7\\}$, các chênh lệch tuyệt đối là $7,2,1,1,2,6$.')),
        b(r('Four values are at least the observed 2, so $p_{\\rm exact}=4/6=2/3$.'),r('Có bốn giá trị ít nhất bằng 2, nên $p_{\\rm exact}=4/6=2/3$.'))
      ]}
    ],
    reviewNote:'The enumeration is finite-sample exact only under the sharp null and the stated uniform two-of-four assignment mechanism. The two-sided ordering is explicitly by absolute difference; weak equality of means alone does not imply exchangeability.',
    sourceIds:['p-cmu36705']
  },
  'm2-w052-e4':{
    title:b('Show how dependence defeats iid resampling','Chỉ ra phụ thuộc phá lấy mẫu lại iid thế nào'),
    application:b(r('Compare the sampling law generated by shared shocks with the conditional iid empirical bootstrap law; matching the empirical histogram does not preserve dependence.'),r('So sánh luật lấy mẫu do cú sốc chung tạo ra với luật bootstrap thực nghiệm iid có điều kiện; khớp histogram thực nghiệm không bảo toàn phụ thuộc.')),
    formula:b(r('If $X_i=Z$ for every $i$, with $E Z=0$ and $\\operatorname{Var}(Z)=1$, then $\\sqrt n\\bar X=\\sqrt n Z$ and $\\operatorname{Var}(\\sqrt n\\bar X)=n$. The empirical law is a point mass at $Z$, so $\\operatorname{Var}^*(\\sqrt n(\\bar X^*-\\bar X))=s_n^2=0$ exactly.'),r('Nếu $X_i=Z$ với mọi $i$, $E Z=0$ và $\\operatorname{Var}(Z)=1$, thì $\\sqrt n\\bar X=\\sqrt n Z$ và $\\operatorname{Var}(\\sqrt n\\bar X)=n$. Luật thực nghiệm là khối điểm tại $Z$, nên $\\operatorname{Var}^*(\\sqrt n(\\bar X^*-\\bar X))=s_n^2=0$ chính xác.')),
    steps:[
      b(r('Perfect dependence makes all observed values equal to the same random shock $Z$, hence their average remains $Z$ rather than averaging independent noise.'),r('Phụ thuộc hoàn hảo khiến mọi giá trị quan sát bằng cùng cú sốc ngẫu nhiên $Z$, nên trung bình vẫn là $Z$ chứ không triệt tiêu nhiễu độc lập.')),
      b(r('Therefore the actual centered root-$n$ statistic is $\\sqrt n Z$; its variance is $n\\operatorname{Var}(Z)=n$, which grows without bound.'),r('Vì vậy thống kê thực tế tâm hóa ở tốc độ căn bậc hai $n$ là $\\sqrt n Z$; phương sai bằng $n\\operatorname{Var}(Z)=n$, tăng không bị chặn.')),
      b(r('Conditionally, every bootstrap draw from the empirical distribution equals the observed $Z$, so $\\bar X^*=Z=\\bar X$ for every resample.'),r('Có điều kiện, mọi lần rút bootstrap từ phân phối thực nghiệm đều bằng $Z$ quan sát, nên $\\bar X^*=Z=\\bar X$ ở mọi mẫu lại.')),
      b(r('The bootstrap root-$n$ statistic is identically zero, while the true statistic spreads at scale $\\sqrt n$; thus iid resampling cannot approximate this dependent sampling law.'),r('Thống kê bootstrap căn-$n$ luôn bằng không, trong khi thống kê thật phân tán ở thang $\\sqrt n$; do đó lấy mẫu lại iid không thể xấp xỉ luật lấy mẫu phụ thuộc này.'))
    ],
    primarySolution:[
      b(r('Since $X_i=Z$, the sample mean is $\\bar X=Z$ and the true centered statistic is $\\sqrt n(\\bar X-EZ)=\\sqrt n Z$.'),r('Vì $X_i=Z$, trung bình mẫu là $\\bar X=Z$ và thống kê thật tâm hóa là $\\sqrt n(\\bar X-EZ)=\\sqrt n Z$.')),
      b(r('Its variance equals $n$ because $\\operatorname{Var}(Z)=1$; there is no averaging across independent observations.'),r('Phương sai bằng $n$ vì $\\operatorname{Var}(Z)=1$; không có phép lấy trung bình qua các quan sát độc lập.')),
      b(r('The empirical distribution puts probability one on $Z$. Every conditional bootstrap observation equals $Z$, so the resampled mean equals the original mean.'),r('Phân phối thực nghiệm đặt xác suất một tại $Z$. Mọi quan sát bootstrap có điều kiện bằng $Z$, nên trung bình mẫu lại bằng trung bình ban đầu.')),
      b(r('Thus the conditional bootstrap variance is zero but the actual variance is $n$; the empirical iid bootstrap misses the common-shock dependence entirely.'),r('Do đó phương sai bootstrap có điều kiện bằng không nhưng phương sai thật bằng $n$; bootstrap iid thực nghiệm bỏ sót hoàn toàn phụ thuộc cú sốc chung.'))
    ],
    companions:[
      {prompt:b(r('A sensor panel records $X_1=X_2=X_3=Z$, where $Z$ is equally likely to be $-2$ or $2$. Compute the true variance of $\\bar X$, the conditional empirical bootstrap variance of $\\bar X^*$, and explain the mismatch.'),r('Một bảng cảm biến ghi $X_1=X_2=X_3=Z$, trong đó $Z$ bằng $-2$ hoặc $2$ với xác suất bằng nhau. Tính phương sai thật của $\\bar X$, phương sai bootstrap thực nghiệm có điều kiện của $\\bar X^*$, và giải thích sai khác.')),solution:[
        b(r('The common shock has mean zero and variance $E Z^2=4$, and $\\bar X=Z$, so $\\operatorname{Var}(\\bar X)=4$.'),r('Cú sốc chung có trung bình không và phương sai $E Z^2=4$; vì $\\bar X=Z$, nên $\\operatorname{Var}(\\bar X)=4$.')),
        b(r('Given the data, the empirical law puts all mass at the observed $Z$. Each resampled value equals $Z$, so $\\bar X^*=Z$ and $\\operatorname{Var}^*(\\bar X^*)=0$.'),r('Khi biết dữ liệu, luật thực nghiệm đặt toàn bộ khối lượng tại $Z$ quan sát. Mỗi giá trị lấy lại bằng $Z$, nên $\\bar X^*=Z$ và $\\operatorname{Var}^*(\\bar X^*)=0$.')),
        b(r('The data contain three copies of one random draw, not three independent draws; empirical iid resampling treats those copies as independent information and therefore reports no uncertainty here.'),r('Dữ liệu chứa ba bản sao của một lần rút ngẫu nhiên, không phải ba lần rút độc lập; bootstrap iid xem các bản sao như thông tin độc lập nên ở đây báo không có bất định.'))
      ]},
      {prompt:b(r('Two clinics each measure two patients, and within clinic both readings equal a clinic shock $Z_j$ with mean zero and variance one; the two clinic shocks are independent. For the four-reading average, find the true variance and compare it with the iid bootstrap variance conditional on observed shocks $Z_1=1,Z_2=-1$.'),r('Hai phòng khám mỗi nơi đo hai bệnh nhân; trong mỗi phòng khám cả hai số đo bằng cú sốc phòng khám $Z_j$ có trung bình không, phương sai một; hai cú sốc độc lập. Với trung bình bốn số đo, tìm phương sai thật và so sánh với phương sai bootstrap iid có điều kiện khi cú sốc quan sát là $Z_1=1,Z_2=-1$.')),solution:[
        b(r('The four-reading mean is $(2Z_1+2Z_2)/4=(Z_1+Z_2)/2$. Independence gives variance $(1+1)/4=1/2$.'),r('Trung bình bốn số đo là $(2Z_1+2Z_2)/4=(Z_1+Z_2)/2$. Tính độc lập cho phương sai $(1+1)/4=1/2$.')),
        b(r('The observed values are $1,1,-1,-1$, with empirical mean zero and denominator-$n$ variance $s_n^2=1$.'),r('Các giá trị quan sát là $1,1,-1,-1$, có trung bình thực nghiệm không và phương sai mẫu mẫu số-$n$ là $s_n^2=1$.')),
        b(r('An iid bootstrap mean of four draws has conditional variance $s_n^2/4=1/4$, which is not the true $1/2$ because the actual sample has only two independent cluster shocks.'),r('Trung bình bootstrap iid của bốn lần rút có phương sai có điều kiện $s_n^2/4=1/4$, khác phương sai thật $1/2$ vì mẫu thực chỉ có hai cú sốc cụm độc lập.'))
      ]},
      {prompt:b(r('A paired experiment records $(X_1,X_2)=(Z,-Z)$ with $Z$ equally likely to be $-3$ or $3$. Find the actual variance of the pair mean and its empirical bootstrap variance conditional on the observed pair $(3,-3)$.'),r('Một thí nghiệm theo cặp ghi $(X_1,X_2)=(Z,-Z)$ với $Z$ bằng $-3$ hoặc $3$ đồng xác suất. Tìm phương sai thật của trung bình cặp và phương sai bootstrap thực nghiệm có điều kiện khi cặp quan sát là $(3,-3)$.')),solution:[
        b(r('For every outcome, the pair mean is $(Z-Z)/2=0$, so its actual sampling variance is zero.'),r('Với mọi kết quả, trung bình cặp là $(Z-Z)/2=0$, nên phương sai lấy mẫu thật bằng không.')),
        b(r('The observed empirical distribution assigns probability $1/2$ to each of $3$ and $-3$, with empirical mean zero and variance $9$.'),r('Phân phối thực nghiệm quan sát đặt xác suất $1/2$ cho mỗi giá trị $3$ và $-3$, có trung bình thực nghiệm không và phương sai $9$.')),
        b(r('Resampling two observations iid from that empirical law gives conditional variance of the mean $9/2$, even though the paired design forces cancellation; iid resampling destroys the pairing.'),r('Lấy lại iid hai quan sát từ luật thực nghiệm cho phương sai có điều kiện của trung bình bằng $9/2$, dù thiết kế theo cặp buộc triệt tiêu; bootstrap iid phá vỡ cấu trúc cặp.'))
      ]}
    ],
    reviewNote:'The perfect-dependence counterexample has no finite root-n limit: the scaled actual statistic grows as sqrt(n), whereas the empirical bootstrap is degenerate. The paired and clustered companions separately show that dependence can cause zero, smaller, or larger variance than iid resampling predicts.',
    sourceIds:['p-cmu36705']
  },
  'm2-w052-e5':{
    title:b('Choose resampling by design and null','Chọn phương pháp lấy mẫu lại theo thiết kế và giả thuyết không'),
    application:b(r('A resampling law is justified by the experiment’s invariance or sampling assumptions, not by the fact that software can generate replicates.'),r('Luật lấy mẫu lại được biện minh bởi tính bất biến hoặc giả thiết lấy mẫu của thí nghiệm, không phải vì phần mềm có thể tạo mẫu lặp.')),
    formula:b(r('IID observations with finite variance support the ordinary sample-mean bootstrap; a sharp randomized null with known assignment orbit supports exact permutation. Equality of two population means alone, especially with unequal variances or sample sizes, does not make raw labels exchangeable.'),r('Quan sát iid có phương sai hữu hạn hỗ trợ bootstrap thường cho trung bình mẫu; giả thuyết không sắc trong thiết kế ngẫu nhiên hóa với quỹ đạo phân bổ đã biết hỗ trợ hoán vị chính xác. Chỉ bằng nhau của hai trung bình tổng thể, nhất là khi phương sai hoặc cỡ mẫu khác nhau, không làm nhãn trao đổi được.')),
    steps:[
      b(r('First state the target statistic and how the observations were generated: independent sampling, clustered sampling, or randomized treatment assignment.'),r('Trước hết nêu thống kê mục tiêu và cách tạo dữ liệu: lấy mẫu độc lập, lấy mẫu theo cụm hay phân bổ điều trị ngẫu nhiên.')),
      b(r('For an iid mean with $E X^2<\\infty$, resample observations independently from the empirical distribution to mimic the centered mean law.'),r('Với trung bình iid có $E X^2<\\infty$, lấy lại các quan sát độc lập từ phân phối thực nghiệm để mô phỏng luật trung bình đã tâm hóa.')),
      b(r('For a sharp treatment-effect null under a known randomized assignment mechanism, reassign labels only among allowed assignments; this preserves the design and gives a finite-sample exact reference distribution.'),r('Với giả thuyết không sắc về hiệu ứng điều trị trong cơ chế ngẫu nhiên hóa đã biết, chỉ phân bổ lại nhãn trong các phân bổ được phép; cách này bảo toàn thiết kế và cho phân phối tham chiếu chính xác hữu hạn mẫu.')),
      b(r('Under a weak equal-means null with unequal variances, raw label permutation need not be exact because the full outcome distributions are not exchangeable; use a method justified for that null and design, such as a suitably studentized procedure or groupwise bootstrap with appropriate asymptotics.'),r('Dưới giả thuyết yếu hai trung bình bằng nhau nhưng phương sai khác nhau, hoán vị nhãn thô có thể không chính xác vì toàn bộ phân phối kết quả không trao đổi được; dùng phương pháp được biện minh cho giả thuyết và thiết kế đó, như thủ tục studentize thích hợp hoặc bootstrap riêng từng nhóm với tiệm cận phù hợp.'))
    ],
    primarySolution:[
      b(r('If observations are iid and the target is their population mean, ordinary empirical resampling is appropriate for the sample mean under finite variance; its conditional variance is the empirical variance divided by $n$.'),r('Nếu quan sát iid và mục tiêu là trung bình tổng thể, lấy mẫu lại thực nghiệm thường phù hợp cho trung bình mẫu dưới phương sai hữu hạn; phương sai có điều kiện là phương sai thực nghiệm chia cho $n$.')),
      b(r('If assignment was randomized and the null is sharp, the randomization distribution follows by enumerating or sampling from the design’s allowed assignments, holding outcomes fixed.'),r('Nếu phân bổ được ngẫu nhiên hóa và giả thuyết không là sắc, phân phối ngẫu nhiên hóa thu được bằng liệt kê hoặc lấy mẫu các phân bổ thiết kế cho phép trong khi giữ kết quả cố định.')),
      b(r('The sharp null makes each unit’s outcome invariant to treatment, which is the condition needed to compute all counterfactual relabelings from observed outcomes.'),r('Giả thuyết không sắc khiến kết quả của từng đơn vị bất biến theo điều trị; điều này cho phép tính mọi đổi nhãn phản thực từ kết quả quan sát.')),
      b(r('Equal means alone is weaker: unequal-variance group distributions are not exchangeable, so ordinary pooled permutation is not automatically an exact test. Choose a weak-null method with its own stated validity assumptions.'),r('Chỉ bằng nhau về trung bình là điều kiện yếu hơn: phân phối hai nhóm phương sai khác nhau không trao đổi được, nên hoán vị gộp thường không tự động là kiểm định chính xác. Chọn phương pháp cho giả thuyết yếu với các giả thiết hợp lệ được nêu rõ.'))
    ],
    companions:[
      {prompt:b(r('A laboratory independently samples 40 calibration errors from one stable population with finite variance and wants a confidence interval for the population mean. Which resampling scheme matches this design, and what is the conditional variance of a bootstrap mean if the empirical variance with denominator 40 is 2.5?'),r('Phòng thí nghiệm lấy độc lập 40 sai số hiệu chuẩn từ một tổng thể ổn định có phương sai hữu hạn và muốn khoảng tin cậy cho trung bình tổng thể. Phương pháp lấy mẫu lại nào khớp thiết kế, và phương sai có điều kiện của trung bình bootstrap là bao nhiêu nếu phương sai thực nghiệm mẫu số 40 bằng 2.5?')),solution:[
        b(r('The observations are iid and the target is a mean, so draw 40 observations independently with replacement from the 40 observed errors.'),r('Các quan sát iid và mục tiêu là trung bình, nên rút độc lập có hoàn lại 40 sai số trong 40 sai số đã quan sát.')),
        b(r('The empirical bootstrap mean has conditional variance $s_{40}^2/40$.'),r('Trung bình bootstrap thực nghiệm có phương sai có điều kiện $s_{40}^2/40$.')),
        b(r('Substituting $s_{40}^2=2.5$ gives $2.5/40=0.0625$; this conditional calculation does not claim validity under dependent sampling.'),r('Thay $s_{40}^2=2.5$ được $2.5/40=0.0625$; phép tính có điều kiện này không khẳng định tính hợp lệ khi lấy mẫu phụ thuộc.'))
      ]},
      {prompt:b(r('A city assigns a new reminder to exactly 6 of 20 residents uniformly at random. Under the sharp null that no resident’s response changes, a chosen absolute-difference statistic is 3.2. Of 3,876 allowed assignments, 124 yield a statistic at least 3.2. State the exact permutation p-value and its justification.'),r('Một thành phố phân bổ lời nhắc mới cho đúng 6 trong 20 cư dân đồng đều ngẫu nhiên. Dưới giả thuyết không sắc rằng phản hồi của không cư dân nào thay đổi, thống kê chênh lệch tuyệt đối quan sát là 3.2. Trong 3,876 phân bổ cho phép, có 124 phân bổ cho thống kê ít nhất 3.2. Nêu p-value hoán vị chính xác và biện minh.')),solution:[
        b(r('The design orbit has $\\binom{20}{6}=38{,}760$ assignments, not 3,876; recompute the count of possible assignments before forming the fraction.'),r('Quỹ đạo thiết kế có $\\binom{20}{6}=38{,}760$ phân bổ, không phải 3,876; cần tính lại tổng số phân bổ trước khi lập tỷ số.')),
        b(r('Using the supplied extreme count, the exact p-value is $124/38{,}760\\approx0.00320$ under the uniform assignment mechanism.'),r('Dùng số phân bổ cực đoan đã cho, p-value chính xác là $124/38{,}760\\approx0.00320$ dưới cơ chế phân bổ đồng đều.')),
        b(r('The sharp null lets us hold all responses fixed while reallocating the six treatment labels; each allowed assignment is equally likely, which justifies this reference fraction.'),r('Giả thuyết không sắc cho phép giữ mọi phản hồi cố định khi phân bổ lại sáu nhãn điều trị; mỗi phân bổ cho phép đồng xác suất, biện minh cho tỷ lệ tham chiếu này.'))
      ]},
      {prompt:b(r('Two independent groups each contain 10 observations. Group A is Normal with mean 0 and variance 1; group B is Normal with mean 0 and variance 9. The target null is equality of means. Explain why pooled raw permutation is not finite-sample exact and name a better direction.'),r('Hai nhóm độc lập mỗi nhóm có 10 quan sát. Nhóm A phân phối chuẩn trung bình 0 phương sai 1; nhóm B chuẩn trung bình 0 phương sai 9. Giả thuyết mục tiêu là hai trung bình bằng nhau. Giải thích vì sao hoán vị thô gộp không chính xác hữu hạn mẫu và nêu hướng phù hợp hơn.')),solution:[
        b(r('The null constrains only the means; the distributions differ because their variances are 1 and 9.'),r('Giả thuyết không chỉ ràng buộc trung bình; hai phân phối khác nhau vì phương sai lần lượt là 1 và 9.')),
        b(r('Pooling labels creates artificial assignments that do not have the data-generating distribution: an observation from the wider group is not exchangeable with one from the narrower group.'),r('Gộp nhãn tạo các phân bổ nhân tạo không theo phân phối sinh dữ liệu: quan sát từ nhóm phân tán rộng không trao đổi được với quan sát từ nhóm hẹp.')),
        b(r('Thus raw permutation lacks the sharp invariance needed for finite-sample exactness. A Welch-type studentized permutation or an unequal-variance procedure with justified asymptotics is a suitable direction; the chosen method still needs its own conditions.'),r('Vì vậy hoán vị thô thiếu tính bất biến sắc cần cho tính chính xác hữu hạn mẫu. Hoán vị studentize kiểu Welch hoặc thủ tục phương sai khác nhau có tiệm cận được biện minh là hướng phù hợp; phương pháp chọn vẫn cần giả thiết riêng.'))
      ]}
    ],
    reviewNote:'The companion counting problem deliberately corrects its stated total: choose(20,6)=38,760; the prompt’s 3,876 is not the assignment-orbit size, and the p-value denominator must use the design orbit. Exact permutation validity is stated for the sharp null, not merely equal means.',
    sourceIds:['p-cmu36705']
  },
  'm2-w053-e1':{
    title:b('Derive the kernel expectation by convolution','Suy kỳ vọng kernel bằng tích chập'),
    application:b(r('The convolution form separates smoothing from sampling and makes the leading interior bias visible through a Taylor expansion.'),r('Dạng tích chập tách làm trơn khỏi lấy mẫu và làm lộ độ chệch nội bộ chính qua khai triển Taylor.')),
    formula:b(r('For iid $X_i$ with density $f$, $\\hat f_h(x)=(nh)^{-1}\\sum_iK((x-X_i)/h)$, $\\int K=1$, symmetric $K$, $\\int uK(u)du=0$, and $\\mu_2(K)=\\int u^2K(u)du<\\infty$. At an interior point where $f$ is twice continuously differentiable locally and Taylor remainders are dominated, $E\\hat f_h(x)=\\int K(u)f(x-hu)du=f(x)+(h^2/2)\\mu_2(K)f\\prime\\prime(x)+o(h^2)$. The displayed bias is leading-order, not exact.'),r('Với $X_i$ iid có mật độ $f$, $\\hat f_h(x)=(nh)^{-1}\\sum_iK((x-X_i)/h)$, $\\int K=1$, kernel $K$ đối xứng, $\\int uK(u)du=0$ và $\\mu_2(K)=\\int u^2K(u)du<\\infty$. Tại điểm nội bộ nơi $f$ khả vi liên tục bậc hai cục bộ và phần dư Taylor bị chặn trội, $E\\hat f_h(x)=\\int K(u)f(x-hu)du=f(x)+(h^2/2)\\mu_2(K)f\\prime\\prime(x)+o(h^2)$. Độ chệch hiển thị là bậc chính, không phải đẳng thức chính xác.')),
    steps:[
      b(r('Take expectation term by term: $E\\hat f_h(x)=h^{-1}E[K((x-X)/h)]$.'),r('Lấy kỳ vọng từng số hạng: $E\\hat f_h(x)=h^{-1}E[K((x-X)/h)]$.')),
      b(r('Integrate against the density and substitute $u=(x-y)/h$, so $y=x-hu$ and $dy=-h\\,du$; reversing the limits cancels the minus sign and the factor $h^{-1}$.'),r('Tích phân theo mật độ rồi đặt $u=(x-y)/h$, suy ra $y=x-hu$, $dy=-h\\,du$; đảo cận khử dấu trừ và hệ số $h^{-1}$.')),
      b(r('This yields the convolution $\\int K(u)f(x-hu)du$. Expand locally: $f(x-hu)=f(x)-hu f\\prime(x)+(h^2u^2/2)f\\prime\\prime(x)+o(h^2u^2)$ under the stated domination.'),r('Ta được tích chập $\\int K(u)f(x-hu)du$. Khai triển cục bộ: $f(x-hu)=f(x)-hu f\\prime(x)+(h^2u^2/2)f\\prime\\prime(x)+o(h^2u^2)$ dưới điều kiện bị chặn trội đã nêu.')),
      b(r('Integrating removes the linear term by kernel symmetry, gives $f(x)$ from unit mass, and gives the second-order coefficient $(h^2/2)\\mu_2(K)f\\prime\\prime(x)$.'),r('Tích phân triệt tiêu số hạng tuyến tính nhờ đối xứng kernel, cho $f(x)$ từ khối lượng một, và cho hệ số bậc hai $(h^2/2)\\mu_2(K)f\\prime\\prime(x)$.'))
    ],
    primarySolution:[
      b(r('By iid identical marginals, $E\\hat f_h(x)=h^{-1}E[K((x-X_1)/h)]$.'),r('Do các biên iid giống nhau, $E\\hat f_h(x)=h^{-1}E[K((x-X_1)/h)]$.')),
      b(r('Writing the expectation as an integral and setting $u=(x-y)/h$ transforms it into $\\int K(u)f(x-hu)du$.'),r('Viết kỳ vọng thành tích phân và đặt $u=(x-y)/h$ biến nó thành $\\int K(u)f(x-hu)du$.')),
      b(r('Taylor-expand $f(x-hu)$ through order two. Unit kernel mass contributes $f(x)$, symmetry makes $\\int uK(u)du=0$, and the quadratic term integrates to $(h^2/2)\\mu_2(K)f\\prime\\prime(x)$.'),r('Khai triển Taylor $f(x-hu)$ đến bậc hai. Khối lượng kernel một cho $f(x)$, tính đối xứng làm $\\int uK(u)du=0$, và số hạng bậc hai tích phân thành $(h^2/2)\\mu_2(K)f\\prime\\prime(x)$.')),
      b(r('The remainder is $o(h^2)$ when the local smoothness and integrable domination conditions justify integrating the Taylor remainder; without them the expansion need not hold.'),r('Phần dư là $o(h^2)$ khi độ trơn cục bộ và điều kiện trội khả tích cho phép tích phân phần dư Taylor; thiếu điều kiện ấy khai triển có thể sai.'))
    ],
    companions:[
      {prompt:b(r('At an interior point $x=1$, suppose $f(1)=0.3$, $f\\prime\\prime(1)=-0.8$, $\\mu_2(K)=1$, and $h=0.1$. Compute the second-order approximation to the expected kernel estimate and its leading bias.'),r('Tại điểm nội bộ $x=1$, giả sử $f(1)=0.3$, $f\\prime\\prime(1)=-0.8$, $\\mu_2(K)=1$ và $h=0.1$. Tính xấp xỉ bậc hai của kỳ vọng ước lượng kernel và độ chệch chính.')),solution:[
        b(r('For a symmetric unit-mass kernel, the first-order term integrates to zero, so the leading bias is $(h^2/2)\\mu_2(K)f\\prime\\prime(1)$.'),r('Với kernel đối xứng khối lượng một, số hạng bậc nhất tích phân bằng không, nên độ chệch chính là $(h^2/2)\\mu_2(K)f\\prime\\prime(1)$.')),
        b(r('Substitution gives $(0.01/2)(1)(-0.8)=-0.004$.'),r('Thay số được $(0.01/2)(1)(-0.8)=-0.004$.')),
        b(r('Therefore $E\\hat f_h(1)\\approx0.3-0.004=0.296$; the negative curvature produces a downward leading bias.'),r('Do đó $E\\hat f_h(1)\\approx0.3-0.004=0.296$; độ cong âm tạo độ chệch chính hướng xuống.'))
      ]},
      {prompt:b(r('A density is locally linear, $f(y)=0.2+0.1(y-2)$ near $x=2$. With a symmetric unit-mass kernel and small enough $h$ that only this linear region is sampled, calculate the expectation of $\\hat f_h(2)$.'),r('Một mật độ tuyến tính cục bộ, $f(y)=0.2+0.1(y-2)$ gần $x=2$. Với kernel đối xứng khối lượng một và $h$ đủ nhỏ để chỉ lấy vùng tuyến tính này, tính kỳ vọng $\\hat f_h(2)$.')),solution:[
        b(r('Use the convolution: $E\\hat f_h(2)=\\int K(u)f(2-hu)du$.'),r('Dùng tích chập: $E\\hat f_h(2)=\\int K(u)f(2-hu)du$.')),
        b(r('On the stated local region, $f(2-hu)=0.2-0.1hu$, so the integral equals $0.2\\int K(u)du-0.1h\\int uK(u)du$.'),r('Trong vùng cục bộ đã nêu, $f(2-hu)=0.2-0.1hu$, nên tích phân bằng $0.2\\int K(u)du-0.1h\\int uK(u)du$.')),
        b(r('Unit mass gives the first integral as one and symmetry gives the first moment zero; hence the expectation is exactly $0.2$ for this locally linear calculation.'),r('Khối lượng một cho tích phân đầu bằng một và đối xứng cho moment bậc nhất bằng không; vậy kỳ vọng chính xác bằng $0.2$ trong phép tính tuyến tính cục bộ này.'))
      ]},
      {prompt:b(r('At an interior point, take $f(x)=0.5$, $f\\prime\\prime(x)=2$, $\\mu_2(K)=1/3$, and bandwidth $h=0.3$. Find the second-order expected value and state what the expansion does not guarantee.'),r('Tại điểm nội bộ, cho $f(x)=0.5$, $f\\prime\\prime(x)=2$, $\\mu_2(K)=1/3$ và bandwidth $h=0.3$. Tìm kỳ vọng bậc hai và nêu khai triển không bảo đảm điều gì.')),solution:[
        b(r('The second-order bias approximation is $(h^2/2)\\mu_2(K)f\\prime\\prime(x)$.'),r('Xấp xỉ độ chệch bậc hai là $(h^2/2)\\mu_2(K)f\\prime\\prime(x)$.')),
        b(r('Here it equals $(0.09/2)(1/3)(2)=0.03$.'),r('Ở đây giá trị là $(0.09/2)(1/3)(2)=0.03$.')),
        b(r('Thus $E\\hat f_h(x)\\approx0.53$. This is an asymptotic expansion as $h\\to0$; at the fixed bandwidth it is not an exact value unless higher-order terms vanish.'),r('Vậy $E\\hat f_h(x)\\approx0.53$. Đây là khai triển tiệm cận khi $h\\to0$; tại bandwidth cố định nó không phải giá trị chính xác trừ khi các số hạng bậc cao triệt tiêu.'))
      ]}
    ],
    reviewNote:'The expansion is an interior-point, small-bandwidth statement; local C2 smoothness alone should be paired with kernel moment and remainder-integrability conditions. A finite h gives an approximation unless the density is locally exactly quadratic or higher terms are separately controlled.',
    sourceIds:['p-cmu36705']
  },
  'm2-w053-e2':{
    title:b('Balance kernel bias and variance','Cân bằng độ chệch và phương sai kernel'),
    application:b(r('Bandwidth trades squared smoothing bias against variance from the effective number of observations near the target.'),r('Bandwidth đánh đổi bình phương độ chệch làm trơn với phương sai từ số quan sát hữu hiệu gần điểm mục tiêu.')),
    formula:b(r('For an interior point, iid density observations, a square-integrable kernel with $R(K)=\\int K^2<\\infty$, and nonzero leading constants, let $\\operatorname{MSE}(h)\\approx C^2h^4+D/(nh)$ with $C,D>0$. Differentiating gives $h_{\\rm opt}=[D/(4C^2n)]^{1/5}\\asymp n^{-1/5}$ and minimum order $n^{-4/5}$. The variance approximation also requires $h\\to0$ and $nh\\to\\infty$.'),r('Tại điểm nội bộ, với quan sát mật độ iid, kernel bình phương khả tích $R(K)=\\int K^2<\\infty$ và hằng số chính khác không, đặt $\\operatorname{MSE}(h)\\approx C^2h^4+D/(nh)$ với $C,D>0$. Lấy đạo hàm cho $h_{\\rm opt}=[D/(4C^2n)]^{1/5}\\asymp n^{-1/5}$ và bậc cực tiểu $n^{-4/5}$. Xấp xỉ phương sai còn cần $h\\to0$ và $nh\\to\\infty$.')),
    steps:[
      b(r('A second-order density bias has order $h^2$, so its square contributes $C^2h^4$ to MSE; the leading variance contributes $D/(nh)$.'),r('Độ chệch mật độ bậc hai có cấp $h^2$, nên bình phương đóng góp $C^2h^4$ vào MSE; phương sai chính đóng góp $D/(nh)$.')),
      b(r('Differentiate the leading objective: $4C^2h^3-D/(nh^2)=0$ at an interior minimizer.'),r('Lấy đạo hàm hàm mục tiêu chính: $4C^2h^3-D/(nh^2)=0$ tại cực tiểu nội bộ.')),
      b(r('Rearranging gives $h^5=D/(4C^2n)$, hence $h\\asymp n^{-1/5}$.'),r('Sắp xếp lại được $h^5=D/(4C^2n)$, suy ra $h\\asymp n^{-1/5}$.')),
      b(r('Then $h^4$ has order $n^{-4/5}$ and $(nh)^{-1}$ also has order $n^{-4/5}$, so the optimized leading MSE has that order.'),r('Khi đó $h^4$ có bậc $n^{-4/5}$ và $(nh)^{-1}$ cũng có bậc $n^{-4/5}$, nên MSE chính tối ưu có bậc ấy.'))
    ],
    primarySolution:[
      b(r('Write the leading MSE as $C^2h^4+D/(nh)$, with positive constants so neither term disappears.'),r('Viết MSE chính là $C^2h^4+D/(nh)$, với các hằng số dương để không số hạng nào biến mất.')),
      b(r('Set the derivative $4C^2h^3-D/(nh^2)$ equal to zero and solve to obtain $h^5=D/(4C^2n)$.'),r('Cho đạo hàm $4C^2h^3-D/(nh^2)$ bằng không rồi giải được $h^5=D/(4C^2n)$.')),
      b(r('Taking fifth roots gives $h_{\\rm opt}=[D/(4C^2)]^{1/5}n^{-1/5}$, which is proportional to $n^{-1/5}$.'),r('Lấy căn bậc năm được $h_{\\rm opt}=[D/(4C^2)]^{1/5}n^{-1/5}$, tỷ lệ với $n^{-1/5}$.')),
      b(r('Substitution makes both leading contributions order $n^{-4/5}$; this rate presumes the stated interior smoothness and kernel variance conditions.'),r('Thay bandwidth vào khiến cả hai đóng góp chính có bậc $n^{-4/5}$; tốc độ này giả sử độ trơn nội bộ và điều kiện phương sai kernel đã nêu.'))
    ],
    companions:[
      {prompt:b(r('A density smoother has leading MSE $9h^4+4/(nh)$. Find the minimizing bandwidth including its constant, and give the resulting MSE order in $n$.'),r('Một bộ làm trơn mật độ có MSE chính $9h^4+4/(nh)$. Tìm bandwidth tối ưu gồm cả hằng số và nêu bậc MSE theo $n$.')),solution:[
        b(r('Differentiate: $36h^3-4/(nh^2)=0$.'),r('Lấy đạo hàm: $36h^3-4/(nh^2)=0$.')),
        b(r('Multiplying by $nh^2$ gives $36nh^5=4$, so $h^5=1/(9n)$ and $h_{\\rm opt}=(9n)^{-1/5}$.'),r('Nhân với $nh^2$ được $36nh^5=4$, nên $h^5=1/(9n)$ và $h_{\\rm opt}=(9n)^{-1/5}$.')),
        b(r('Since $h^4\\asymp n^{-4/5}$ and $(nh)^{-1}\\asymp n^{-4/5}$, the minimized leading MSE is order $n^{-4/5}$.'),r('Vì $h^4\\asymp n^{-4/5}$ và $(nh)^{-1}\\asymp n^{-4/5}$, MSE chính cực tiểu có bậc $n^{-4/5}$.'))
      ]},
      {prompt:b(r('For a kernel estimate based on $n=1000$, compare only the leading orders of bias and standard deviation at $h=0.1$ versus $h=0.05$, using bias order $h^2$ and standard deviation order $(nh)^{-1/2}$. Which bandwidth balances them better?'),r('Với ước lượng kernel dựa trên $n=1000$, so sánh riêng bậc độ chệch và độ lệch chuẩn tại $h=0.1$ so với $h=0.05$, dùng bậc độ chệch $h^2$ và độ lệch chuẩn $(nh)^{-1/2}$. Bandwidth nào cân bằng chúng tốt hơn?')),solution:[
        b(r('At $h=0.1$, the bias order is $h^2=0.01$ and the standard-deviation order is $(100)^{-1/2}=0.1$.'),r('Tại $h=0.1$, bậc độ chệch là $h^2=0.01$ và bậc độ lệch chuẩn là $(100)^{-1/2}=0.1$.')),
        b(r('At $h=0.05$, the bias order is $0.0025$ and the standard-deviation order is $(50)^{-1/2}\\approx0.1414$.'),r('Tại $h=0.05$, bậc độ chệch là $0.0025$ và bậc độ lệch chuẩn là $(50)^{-1/2}\\approx0.1414$.')),
        b(r('The smaller bandwidth reduces bias but increases variability, so it is less balanced here; constants matter, and the order calculation alone does not prove which finite-sample MSE is smaller.'),r('Bandwidth nhỏ hơn giảm độ chệch nhưng tăng biến thiên, nên ở đây kém cân bằng hơn; các hằng số cũng quan trọng và phép tính bậc không tự chứng minh MSE mẫu hữu hạn nào nhỏ hơn.'))
      ]},
      {prompt:b(r('Suppose the leading bias is $2h^2$ and leading variance is $3/(nh)$. Derive the optimizer and compute its order when $n$ is multiplied by 32.'),r('Giả sử độ chệch chính là $2h^2$ và phương sai chính là $3/(nh)$. Suy ra nghiệm tối ưu và tính thay đổi bậc khi $n$ tăng gấp 32.')),solution:[
        b(r('The squared bias is $4h^4$, so differentiate $4h^4+3/(nh)$ to get $16h^3-3/(nh^2)=0$.'),r('Bình phương độ chệch là $4h^4$, nên lấy đạo hàm $4h^4+3/(nh)$ được $16h^3-3/(nh^2)=0$.')),
        b(r('Solving yields $h^5=3/(16n)$ and $h_{\\rm opt}=(3/16)^{1/5}n^{-1/5}$.'),r('Giải ra $h^5=3/(16n)$ và $h_{\\rm opt}=(3/16)^{1/5}n^{-1/5}$.')),
        b(r('Multiplying $n$ by 32 multiplies optimal $h$ by $32^{-1/5}=1/2$; each leading MSE term then falls by $2^{-4}=1/16$.'),r('Tăng $n$ gấp 32 làm $h$ tối ưu nhân $32^{-1/5}=1/2$; mỗi số hạng MSE chính giảm theo hệ số $2^{-4}=1/16$.'))
      ]}
    ],
    reviewNote:'The optimizer balances squared bias, not bias itself, against variance. Positive leading constants are essential; if the second derivative vanishes or a boundary truncates the kernel window, the n^(-1/5) conclusion may change.',
    sourceIds:['p-cmu36705']
  },
  'm2-w053-e3':{
    title:b('Identify the half-kernel boundary bias','Nhận diện độ chệch nửa kernel tại biên'),
    application:b(r('At a support boundary a symmetric kernel spills mass outside the density support, so the interior cancellation and normalization calculation no longer apply.'),r('Tại biên giá đỡ, kernel đối xứng tràn khối lượng ra ngoài giá đỡ mật độ, nên phép triệt tiêu và chuẩn hóa nội bộ không còn áp dụng.')),
    formula:b(r('Let $X_i$ have density supported on $[0,\\infty)$, target $x=0$, and $K$ be a symmetric unit-integral kernel. Then $E\\hat f_h(0)=\\int_0^\\infty K(u)f(hu)du\\to f(0)\\int_0^\\infty K(u)du=f(0)/2$ as $h\\downarrow0$, provided $f$ is continuous from the right at 0 and dominated convergence applies. The raw estimator is therefore asymptotically half the boundary density.'),r('Cho $X_i$ có mật độ hỗ trợ trên $[0,\\infty)$, điểm đích $x=0$ và $K$ là kernel đối xứng tích phân bằng một. Khi đó $E\\hat f_h(0)=\\int_0^\\infty K(u)f(hu)du\\to f(0)\\int_0^\\infty K(u)du=f(0)/2$ khi $h\\downarrow0$, nếu $f$ liên tục phải tại 0 và hội tụ bị chặn trội áp dụng được. Vì vậy ước lượng thô tiệm cận bằng một nửa mật độ biên.')),
    steps:[
      b(r('Write $E\\hat f_h(0)=h^{-1}\\int_0^\\infty K(-y/h)f(y)dy$ because the density is zero for negative $y$.'),r('Viết $E\\hat f_h(0)=h^{-1}\\int_0^\\infty K(-y/h)f(y)dy$ vì mật độ bằng không với $y$ âm.')),
      b(r('Substitute $u=y/h$ and use symmetry $K(-u)=K(u)$ to obtain $\\int_0^\\infty K(u)f(hu)du$.'),r('Đặt $u=y/h$ và dùng đối xứng $K(-u)=K(u)$ để được $\\int_0^\\infty K(u)f(hu)du$.')),
      b(r('As $h\\downarrow0$, right-continuity gives $f(hu)\\to f(0)$ for each fixed $u\\ge0$; domination permits passing the limit through the integral.'),r('Khi $h\\downarrow0$, tính liên tục phải cho $f(hu)\\to f(0)$ với mỗi $u\\ge0$ cố định; điều kiện trội cho phép đưa giới hạn vào tích phân.')),
      b(r('Symmetry and unit total mass imply exactly half the kernel mass lies on the positive half-line, so the limit is $f(0)/2$, revealing order-one boundary bias.'),r('Đối xứng và tổng khối lượng một khiến đúng một nửa khối lượng kernel nằm trên nửa trục dương, nên giới hạn bằng $f(0)/2$, cho thấy độ chệch bậc một.'))
    ],
    primarySolution:[
      b(r('The expectation integral is restricted to $y\\ge0$ by the support, so a change of variables yields $E\\hat f_h(0)=\\int_0^\\infty K(u)f(hu)du$.'),r('Tích phân kỳ vọng bị giới hạn $y\\ge0$ bởi giá đỡ, nên đổi biến cho $E\\hat f_h(0)=\\int_0^\\infty K(u)f(hu)du$.')),
      b(r('Right-continuity at zero gives the pointwise limit $f(hu)\\to f(0)$ as $h\\to0$.'),r('Tính liên tục phải tại không cho giới hạn điểm $f(hu)\\to f(0)$ khi $h\\to0$.')),
      b(r('Dominated convergence then gives limit $f(0)\\int_0^\\infty K(u)du$.'),r('Hội tụ bị chặn trội khi đó cho giới hạn $f(0)\\int_0^\\infty K(u)du$.')),
      b(r('A symmetric kernel with total integral one has positive-half mass $1/2$; hence the limit is $f(0)/2$, not $f(0)$.'),r('Kernel đối xứng có tích phân toàn phần một nên khối lượng nửa dương bằng $1/2$; do đó giới hạn là $f(0)/2$, không phải $f(0)$.'))
    ],
    companions:[
      {prompt:b(r('A nonnegative measurement has boundary density $f(0)=0.8$. Using the raw symmetric-kernel boundary limit, estimate the limiting expected density estimate and its asymptotic bias.'),r('Một phép đo không âm có mật độ biên $f(0)=0.8$. Dùng giới hạn kernel đối xứng thô tại biên, ước lượng kỳ vọng giới hạn của mật độ và độ chệch tiệm cận.')),solution:[
        b(r('The positive half of a symmetric unit-mass kernel contains mass $1/2$.'),r('Nửa dương của kernel đối xứng khối lượng một chứa khối lượng $1/2$.')),
        b(r('Thus the expected estimate tends to $0.8/2=0.4$.'),r('Vì vậy kỳ vọng ước lượng tiến tới $0.8/2=0.4$.')),
        b(r('The asymptotic bias is $0.4-0.8=-0.4$, a nonvanishing boundary bias that cannot be fixed merely by increasing sample size at the raw estimator.'),r('Độ chệch tiệm cận là $0.4-0.8=-0.4$, không triệt tiêu theo biên và không thể khắc phục chỉ bằng tăng cỡ mẫu cho ước lượng thô.'))
      ]},
      {prompt:b(r('Let $K$ be a unit-integral symmetric kernel and define the one-sided boundary estimator $\\tilde f_h(0)=2\\hat f_h(0)$. Under continuity and domination conditions, what is its limiting expectation, and why is this only a leading boundary correction?'),r('Cho $K$ là kernel đối xứng tích phân một và định nghĩa ước lượng biên một phía $\\tilde f_h(0)=2\\hat f_h(0)$. Dưới điều kiện liên tục và trội, kỳ vọng giới hạn là gì và vì sao đây chỉ là hiệu chỉnh biên chính?')),solution:[
        b(r('For the raw estimator, the limiting expectation is $f(0)/2$ because only half the symmetric kernel window overlaps the support.'),r('Với ước lượng thô, kỳ vọng giới hạn là $f(0)/2$ vì chỉ một nửa cửa sổ kernel đối xứng chồng lên giá đỡ.')),
        b(r('Multiplying by two gives $E\\tilde f_h(0)\\to f(0)$.'),r('Nhân đôi cho $E\\tilde f_h(0)\\to f(0)$.')),
        b(r('At positive bandwidth, $f(hu)$ can vary across the retained half-window, so higher-order terms remain; the factor two fixes the leading missing mass, not all finite-bandwidth bias.'),r('Ở bandwidth dương, $f(hu)$ có thể thay đổi trên nửa cửa sổ còn lại, nên các số hạng bậc cao vẫn còn; hệ số hai sửa thiếu khối lượng chính chứ không sửa mọi độ chệch bandwidth hữu hạn.'))
      ]},
      {prompt:b(r('Suppose a kernel is not symmetric but has total mass one and exactly 0.7 of its mass on $[0,\\infty)$. For a density continuous at the boundary, find the raw estimator’s limiting expectation relative to $f(0)$.'),r('Giả sử kernel không đối xứng nhưng có tổng khối lượng một và đúng 0.7 khối lượng trên $[0,\\infty)$. Với mật độ liên tục tại biên, tìm kỳ vọng giới hạn của ước lượng thô theo $f(0)$.')),solution:[
        b(r('The same boundary change of variables gives limiting expectation $f(0)\\int_0^\\infty K(u)du$.'),r('Cùng phép đổi biến tại biên cho kỳ vọng giới hạn $f(0)\\int_0^\\infty K(u)du$.')),
        b(r('The stipulated positive-half kernel mass is $0.7$, so the limit equals $0.7f(0)$.'),r('Khối lượng kernel nửa dương đã cho là $0.7$, nên giới hạn bằng $0.7f(0)$.')),
        b(r('The half-density result depends on symmetry; without symmetry, the retained kernel mass, not automatically one half, determines the limit.'),r('Kết quả nửa mật độ phụ thuộc đối xứng; nếu thiếu đối xứng, khối lượng kernel được giữ lại quyết định giới hạn, không mặc nhiên là một nửa.'))
      ]}
    ],
    reviewNote:'The boundary limit needs continuity from within the support and an integrable envelope for dominated convergence. The factor one-half is specific to a symmetric kernel; asymmetric kernels retain their own positive-half mass.',
    sourceIds:['p-cmu36705']
  },
  'm2-w053-e4':{
    title:b('Balance three-dimensional kernel error terms','Cân bằng sai số kernel ba chiều'),
    application:b(r('Dimension changes the effective local sample size from $nh$ to $nh^d$, slowing the optimal rate as the bandwidth window grows in $d$ directions.'),r('Số chiều đổi cỡ mẫu cục bộ hữu hiệu từ $nh$ thành $nh^d$, làm chậm tốc độ tối ưu vì cửa sổ bandwidth mở rộng theo $d$ hướng.')),
    formula:b(r('At an interior point in dimension $d=3$, assume a second-order kernel, local smoothness giving squared bias $C_1h^4$, variance $C_2/(nh^3)$, constants $C_1,C_2>0$, and bandwidth conditions $h\\to0$, $nh^3\\to\\infty$. Balancing gives $h^7\\asymp n^{-1}$, $h_{\\rm opt}\\asymp n^{-1/7}$, and leading MSE order $n^{-4/7}$. The nonzero bias constant assumption prevents a faster-order cancellation.'),r('Tại điểm nội bộ số chiều $d=3$, giả sử kernel bậc hai, độ trơn cục bộ cho bình phương độ chệch $C_1h^4$, phương sai $C_2/(nh^3)$, $C_1,C_2>0$, và điều kiện bandwidth $h\\to0$, $nh^3\\to\\infty$. Cân bằng cho $h^7\\asymp n^{-1}$, $h_{\\rm opt}\\asymp n^{-1/7}$ và bậc MSE chính $n^{-4/7}$. Giả thiết hằng số độ chệch khác không tránh trường hợp triệt tiêu cho tốc độ nhanh hơn.')),
    steps:[
      b(r('In three dimensions the kernel window has volume proportional to $h^3$, so only order $nh^3$ observations contribute appreciably and variance has order $(nh^3)^{-1}$.'),r('Trong ba chiều, cửa sổ kernel có thể tích tỷ lệ $h^3$, nên chỉ cỡ $nh^3$ quan sát đóng góp đáng kể và phương sai có bậc $(nh^3)^{-1}$.')),
      b(r('A second-order interior bias has order $h^2$, hence squared bias has order $h^4$.'),r('Độ chệch nội bộ bậc hai có cấp $h^2$, nên bình phương độ chệch có bậc $h^4$.')),
      b(r('Equate orders $h^4\\asymp1/(nh^3)$, obtaining $h^7\\asymp n^{-1}$ and $h\\asymp n^{-1/7}$.'),r('Cân bằng bậc $h^4\\asymp1/(nh^3)$, được $h^7\\asymp n^{-1}$ và $h\\asymp n^{-1/7}$.')),
      b(r('At this bandwidth each error term is order $h^4\\asymp n^{-4/7}$; in dimension $d$ the same algebra gives $n^{-4/(d+4)}$ when leading terms are nonzero.'),r('Tại bandwidth này mỗi số hạng sai số có bậc $h^4\\asymp n^{-4/7}$; nói chung số chiều $d$ cho $n^{-4/(d+4)}$ khi các số hạng chính khác không.'))
    ],
    primarySolution:[
      b(r('Use the stated leading MSE $C_1h^4+C_2/(nh^3)$ with both constants positive.'),r('Dùng MSE chính đã cho $C_1h^4+C_2/(nh^3)$ với cả hai hằng số dương.')),
      b(r('Balancing the terms gives $C_1h^4\\asymp C_2/(nh^3)$, so $h^7\\asymp n^{-1}$ up to constants.'),r('Cân bằng các số hạng cho $C_1h^4\\asymp C_2/(nh^3)$, nên $h^7\\asymp n^{-1}$ nếu bỏ qua hằng số.')),
      b(r('Taking seventh roots yields $h_{\\rm opt}\\asymp n^{-1/7}$.'),r('Lấy căn bậc bảy cho $h_{\\rm opt}\\asymp n^{-1/7}$.')),
      b(r('Substitution yields $h^4\\asymp n^{-4/7}$; variance has the same order, hence this is the leading MSE order.'),r('Thay vào được $h^4\\asymp n^{-4/7}$; phương sai cùng bậc, nên đây là bậc MSE chính.'))
    ],
    companions:[
      {prompt:b(r('For a four-dimensional density estimate, suppose squared bias has order $h^4$ and variance order $1/(nh^4)$. Balance the terms and find the optimal bandwidth and MSE orders.'),r('Với ước lượng mật độ bốn chiều, giả sử bình phương độ chệch có bậc $h^4$ và phương sai bậc $1/(nh^4)$. Cân bằng hai số hạng và tìm bậc bandwidth tối ưu cùng MSE.')),solution:[
        b(r('Set $h^4\\asymp1/(nh^4)$, which implies $h^8\\asymp n^{-1}$.'),r('Đặt $h^4\\asymp1/(nh^4)$, suy ra $h^8\\asymp n^{-1}$.')),
        b(r('Therefore $h_{\\rm opt}\\asymp n^{-1/8}$.'),r('Vì vậy $h_{\\rm opt}\\asymp n^{-1/8}$.')),
        b(r('Both terms have order $h^4\\asymp n^{-1/2}$, so the optimized leading MSE is order $n^{-1/2}$.'),r('Cả hai số hạng có bậc $h^4\\asymp n^{-1/2}$, nên MSE chính tối ưu có bậc $n^{-1/2}$.'))
      ]},
      {prompt:b(r('In dimension $d=2$, an interior estimate has leading MSE $5h^4+10/(nh^2)$. Derive the bandwidth order and evaluate the asymptotic MSE power at $n=64$.'),r('Trong số chiều $d=2$, ước lượng nội bộ có MSE chính $5h^4+10/(nh^2)$. Suy ra bậc bandwidth và tính lũy thừa MSE tiệm cận tại $n=64$.')),solution:[
        b(r('Balance $h^4$ against $1/(nh^2)$; constants change the optimizer constant but not its order.'),r('Cân bằng $h^4$ với $1/(nh^2)$; hằng số đổi hệ số tối ưu nhưng không đổi bậc.')),
        b(r('The balance gives $h^6\\asymp n^{-1}$, hence $h\\asymp n^{-1/6}$ and MSE order $n^{-2/3}$.'),r('Cân bằng cho $h^6\\asymp n^{-1}$, nên $h\\asymp n^{-1/6}$ và MSE bậc $n^{-2/3}$.')),
        b(r('Since $64=2^6$, the power is $64^{-2/3}=2^{-4}=1/16$ times an unspecified leading constant.'),r('Vì $64=2^6$, lũy thừa bằng $64^{-2/3}=2^{-4}=1/16$ nhân với hằng số chính chưa biết.'))
      ]},
      {prompt:b(r('A six-dimensional interior estimate has squared bias $C_1h^4$ and variance $C_2/(nh^6)$ with positive constants. Find its rate orders and compare the MSE exponent with dimension three.'),r('Ước lượng nội bộ sáu chiều có bình phương độ chệch $C_1h^4$ và phương sai $C_2/(nh^6)$ với hằng số dương. Tìm bậc tốc độ và so sánh số mũ MSE với số chiều ba.')),solution:[
        b(r('Balancing gives $h^4\\asymp1/(nh^6)$, so $h^{10}\\asymp n^{-1}$.'),r('Cân bằng cho $h^4\\asymp1/(nh^6)$, nên $h^{10}\\asymp n^{-1}$.')),
        b(r('Thus $h_{\\rm opt}\\asymp n^{-1/10}$ and leading MSE order $h^4\\asymp n^{-2/5}$.'),r('Do đó $h_{\\rm opt}\\asymp n^{-1/10}$ và MSE chính bậc $h^4\\asymp n^{-2/5}$.')),
        b(r('Dimension three has exponent $4/7\\approx0.571$, larger than $2/5=0.4$; the slower decay in dimension six is the dimensionality penalty.'),r('Số chiều ba có số mũ $4/7\\approx0.571$, lớn hơn $2/5=0.4$; suy giảm chậm hơn ở sáu chiều là bất lợi số chiều.'))
      ]}
    ],
    reviewNote:'This rate assumes an interior point and a nonzero second-order bias coefficient. If the leading curvature term vanishes, higher-order bias can alter the rate; at a support boundary the interior expansion is invalid.',
    sourceIds:['p-cmu36705']
  },
  'm2-w053-e5':{
    title:b('Insert Gaussian mode constants into the kernel expansion','Thay hằng số mode Gaussian vào khai triển kernel'),
    application:b(r('At the standard normal mode, density height, curvature, and Gaussian-kernel roughness give explicit leading bias and variance constants while retaining the one-dimensional bandwidth rate.'),r('Tại mode chuẩn tắc Gaussian, độ cao mật độ, độ cong và độ nhám kernel Gaussian cho hằng số độ chệch và phương sai tường minh, đồng thời giữ tốc độ bandwidth một chiều.')),
    formula:b(r('For iid $X_i\\sim N(0,1)$, target $x=0$, and standard Gaussian kernel $K=\\phi$, $f(0)=1/\\sqrt{2\\pi}$, $f\\prime\\prime(0)=-1/\\sqrt{2\\pi}$, $\\mu_2(K)=1$, and $R(K)=1/(2\\sqrt\\pi)$. Under the interior second-order expansion and Gaussian-tail domination, bias $\\approx-h^2/(2\\sqrt{2\\pi})$, variance $\\approx1/(2\\sqrt{2}\\pi^{3/2}nh)$, and optimal bandwidth has order $n^{-1/5}$.'),r('Với $X_i\\sim N(0,1)$ iid, điểm đích $x=0$ và kernel Gaussian chuẩn $K=\\phi$, $f(0)=1/\\sqrt{2\\pi}$, $f\\prime\\prime(0)=-1/\\sqrt{2\\pi}$, $\\mu_2(K)=1$ và $R(K)=1/(2\\sqrt\\pi)$. Dưới khai triển nội bộ bậc hai và điều kiện trội đuôi Gaussian, độ chệch $\\approx-h^2/(2\\sqrt{2\\pi})$, phương sai $\\approx1/(2\\sqrt{2}\\pi^{3/2}nh)$ và bandwidth tối ưu có bậc $n^{-1/5}$.')),
    steps:[
      b(r('The normal density is $f(x)=\\phi(x)$, so $f(0)=1/\\sqrt{2\\pi}$; differentiating twice gives $f\\prime\\prime(0)=-\\phi(0)=-1/\\sqrt{2\\pi}$.'),r('Mật độ chuẩn là $f(x)=\\phi(x)$, nên $f(0)=1/\\sqrt{2\\pi}$; lấy đạo hàm hai lần cho $f\\prime\\prime(0)=-\\phi(0)=-1/\\sqrt{2\\pi}$.')),
      b(r('The standard Gaussian kernel has second moment one and $R(K)=\\int\\phi(u)^2du=1/(2\\sqrt\\pi)$.'),r('Kernel Gaussian chuẩn có moment bậc hai bằng một và $R(K)=\\int\\phi(u)^2du=1/(2\\sqrt\\pi)$.')),
      b(r('Substituting in $(h^2/2)\\mu_2(K)f\\prime\\prime(0)$ gives leading bias $-h^2/(2\\sqrt{2\\pi})$.'),r('Thay vào $(h^2/2)\\mu_2(K)f\\prime\\prime(0)$ cho độ chệch chính $-h^2/(2\\sqrt{2\\pi})$.')),
      b(r('The variance coefficient $f(0)R(K)/(nh)$ equals $1/(2\\sqrt{2}\\pi^{3/2}nh)$. Squared bias has order $h^4$, so balancing with $(nh)^{-1}$ yields $h\\asymp n^{-1/5}$.'),r('Hệ số phương sai $f(0)R(K)/(nh)$ bằng $1/(2\\sqrt{2}\\pi^{3/2}nh)$. Bình phương độ chệch có bậc $h^4$, nên cân bằng với $(nh)^{-1}$ cho $h\\asymp n^{-1/5}$.'))
    ],
    primarySolution:[
      b(r('For a standard normal density, $f\\prime\\prime(x)=(x^2-1)\\phi(x)$, hence $f(0)=1/\\sqrt{2\\pi}$ and $f\\prime\\prime(0)=-1/\\sqrt{2\\pi}$.'),r('Với mật độ chuẩn, $f\\prime\\prime(x)=(x^2-1)\\phi(x)$, nên $f(0)=1/\\sqrt{2\\pi}$ và $f\\prime\\prime(0)=-1/\\sqrt{2\\pi}$.')),
      b(r('The Gaussian kernel has $\\mu_2(K)=1$ and $R(K)=1/(2\\sqrt\\pi)$.'),r('Kernel Gaussian có $\\mu_2(K)=1$ và $R(K)=1/(2\\sqrt\\pi)$.')),
      b(r('Thus leading bias is $-h^2/(2\\sqrt{2\\pi})$ and leading variance is $1/(2\\sqrt{2}\\pi^{3/2}nh)$.'),r('Vì vậy độ chệch chính là $-h^2/(2\\sqrt{2\\pi})$ và phương sai chính là $1/(2\\sqrt{2}\\pi^{3/2}nh)$.')),
      b(r('The squared-bias/variance balance is proportional to $h^4+1/(nh)$; minimizing its order gives $h_{\\rm opt}\\asymp n^{-1/5}$ and MSE order $n^{-4/5}$.'),r('Cân bằng bình phương độ chệch/phương sai tỷ lệ với $h^4+1/(nh)$; tối ưu bậc cho $h_{\\rm opt}\\asymp n^{-1/5}$ và MSE bậc $n^{-4/5}$.'))
    ],
    companions:[
      {prompt:b(r('At the standard normal mode with Gaussian kernel, take $h=0.2$ and $n=500$. Compute the leading bias and variance numerically to four significant digits.'),r('Tại mode chuẩn với kernel Gaussian, lấy $h=0.2$ và $n=500$. Tính số gần đúng độ chệch và phương sai chính tới bốn chữ số có nghĩa.')),solution:[
        b(r('The leading bias is $-h^2/(2\\sqrt{2\\pi})=-0.04/(2\\sqrt{2\\pi})$.'),r('Độ chệch chính là $-h^2/(2\\sqrt{2\\pi})=-0.04/(2\\sqrt{2\\pi})$.')),
        b(r('Since $2\\sqrt{2\\pi}\\approx5.0133$, the bias is approximately $-0.007979$.'),r('Vì $2\\sqrt{2\\pi}\\approx5.0133$, độ chệch xấp xỉ $-0.007979$.')),
        b(r('The variance is approximately $1/(2\\sqrt2\\,\\pi^{3/2}\\cdot100)\\approx0.0006349$; both are leading asymptotic terms.'),r('Phương sai xấp xỉ $1/(2\\sqrt2\\,\\pi^{3/2}\\cdot100)\\approx0.0006349$; cả hai đều là số hạng tiệm cận chính.'))
      ]},
      {prompt:b(r('A Gaussian-kernel estimate at the standard normal mode uses $n=1024$ and bandwidth order $n^{-1/5}$. Give this order numerically and the corresponding orders of squared bias and variance.'),r('Ước lượng kernel Gaussian tại mode chuẩn dùng $n=1024$ và bandwidth bậc $n^{-1/5}$. Nêu bậc này theo số và bậc tương ứng của bình phương độ chệch cùng phương sai.')),solution:[
        b(r('Because $1024=2^{10}$, $n^{-1/5}=2^{-2}=1/4=0.25$.'),r('Vì $1024=2^{10}$, $n^{-1/5}=2^{-2}=1/4=0.25$.')),
        b(r('The squared-bias order is $h^4\\asymp n^{-4/5}=2^{-8}=1/256\\approx0.003906$.'),r('Bậc bình phương độ chệch là $h^4\\asymp n^{-4/5}=2^{-8}=1/256\\approx0.003906$.')),
        b(r('The variance order $(nh)^{-1}$ is also $n^{-4/5}$; actual magnitudes include constants and the bandwidth-order constant.'),r('Bậc phương sai $(nh)^{-1}$ cũng là $n^{-4/5}$; độ lớn thực tế còn có hằng số và hệ số của bậc bandwidth.'))
      ]},
      {prompt:b(r('For the standard normal density at zero, use a Gaussian kernel with $h=0.1$. Calculate leading bias and leading expected estimate.'),r('Với mật độ chuẩn tại không, dùng kernel Gaussian có $h=0.1$. Tính độ chệch chính và kỳ vọng ước lượng chính.')),solution:[
        b(r('Here $h^2=0.01$, so leading bias is $-0.01/(2\\sqrt{2\\pi})\\approx-0.001995$.'),r('Ở đây $h^2=0.01$, nên độ chệch chính là $-0.01/(2\\sqrt{2\\pi})\\approx-0.001995$.')),
        b(r('The target density is $f(0)=1/\\sqrt{2\\pi}\\approx0.39894$.'),r('Mật độ mục tiêu là $f(0)=1/\\sqrt{2\\pi}\\approx0.39894$.')),
        b(r('Adding the leading bias gives $E\\hat f_h(0)\\approx0.39894-0.001995\\approx0.39695$; this approximates rather than exactly evaluates finite-bandwidth expectation.'),r('Cộng độ chệch chính cho $E\\hat f_h(0)\\approx0.39894-0.001995\\approx0.39695$; đây là xấp xỉ chứ không tính chính xác kỳ vọng ở bandwidth hữu hạn.'))
      ]}
    ],
    reviewNote:'The Gaussian expansion uses local Taylor expansion plus tail domination because the normal density and kernel have unbounded support. The constants are for the standard Gaussian kernel; n^(-1/5) presumes nonzero mode curvature and an interior target.',
    sourceIds:['p-cmu36705']
  }
};
export default reviewed;
