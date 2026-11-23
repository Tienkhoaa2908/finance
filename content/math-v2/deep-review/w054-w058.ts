import {b, type ReviewedLesson} from './types';
const r=(text:string)=>String.raw({raw:[text]});
const reviewed:Record<string,ReviewedLesson>={
  'm2-w054-e1':{
    title:b('Prove the two-point Le Cam reduction','Chứng minh phép giảm Le Cam hai điểm'),
    application:b(r('Any estimator can be converted into a test between two parameter values; a testing mistake forces a substantial estimation error.'),r('Mọi ước lượng đều có thể chuyển thành kiểm định giữa hai giá trị tham số; sai lầm kiểm định buộc sai số ước lượng đáng kể.')),
    formula:b(r('For parameter points $\\theta_0,\\theta_1$ at Euclidean distance $\\Delta>0$, laws $P_0,P_1$, and any estimator $\\delta$, $\\max_{j=0,1}E_j\\|\\delta-\\theta_j\\|^2\\ge(\\Delta^2/8)(1-\\operatorname{TV}(P_0,P_1))$. Use squared Euclidean loss and $\\operatorname{TV}(P,Q)=\\sup_A|P(A)-Q(A)|$.'),r('Với hai điểm tham số $\\theta_0,\\theta_1$ cách nhau theo chuẩn Euclid $\\Delta>0$, luật $P_0,P_1$ và mọi ước lượng $\\delta$, $\\max_{j=0,1}E_j\\|\\delta-\\theta_j\\|^2\\ge(\\Delta^2/8)(1-\\operatorname{TV}(P_0,P_1))$. Dùng mất mát bình phương Euclid và $\\operatorname{TV}(P,Q)=\\sup_A|P(A)-Q(A)|$.')),
    steps:[
      b(r('Define the test to select whichever of $\\theta_0,\\theta_1$ is nearer to $\\delta$; break exact ties by a fixed rule.'),r('Định nghĩa kiểm định chọn điểm nào trong $\\theta_0,\\theta_1$ gần $\\delta$ hơn; phá hòa chính xác bằng quy tắc cố định.')),
      b(r('If this test chooses the wrong point under truth $\\theta_j$, the triangle inequality implies $\\|\\delta-\\theta_j\\|\\ge\\Delta/2$; otherwise the other point would be farther.'),r('Nếu kiểm định chọn sai khi sự thật là $\\theta_j$, bất đẳng thức tam giác cho $\\|\\delta-\\theta_j\\|\\ge\\Delta/2$; nếu không điểm kia sẽ xa hơn.')),
      b(r('On a testing error the squared loss is at least $\\Delta^2/4$. Averaging the two risks weights each error probability by $1/2$, giving at least $\\Delta^2/8$ times the sum of error probabilities.'),r('Khi kiểm định sai, mất mát bình phương ít nhất $\\Delta^2/4$. Lấy trung bình hai rủi ro gán trọng số $1/2$ cho mỗi xác suất lỗi, được ít nhất $\\Delta^2/8$ nhân tổng xác suất lỗi.')),
      b(r('Every test has total error probability at least $1-\\operatorname{TV}(P_0,P_1)$; the larger risk is at least the average risk, yielding the stated bound.'),r('Mọi kiểm định có tổng xác suất lỗi ít nhất $1-\\operatorname{TV}(P_0,P_1)$; rủi ro lớn hơn ít nhất bằng rủi ro trung bình, suy ra chặn đã nêu.'))
    ],
    primarySolution:[
      b(r('Turn $\\delta$ into the nearest-neighbor test between $\\theta_0$ and $\\theta_1$.'),r('Chuyển $\\delta$ thành kiểm định láng giềng gần nhất giữa $\\theta_0$ và $\\theta_1$.')),
      b(r('A wrong test decision implies estimation distance at least $\\Delta/2$ by the triangle inequality, so its squared loss is at least $\\Delta^2/4$.'),r('Quyết định kiểm định sai kéo theo khoảng cách ước lượng ít nhất $\\Delta/2$ theo bất đẳng thức tam giác, nên mất mát bình phương ít nhất $\\Delta^2/4$.')),
      b(r('Average the two risks: the factor one-half turns this loss threshold into $(\\Delta^2/8)(P_0(\\text{error})+P_1(\\text{error}))$.'),r('Lấy trung bình hai rủi ro: hệ số một nửa biến ngưỡng mất mát thành $(\\Delta^2/8)(P_0(\\text{lỗi})+P_1(\\text{lỗi}))$.')),
      b(r('The testing error sum is at least $1-\\operatorname{TV}(P_0,P_1)$, and maximum risk dominates the average; combine these inequalities to obtain Le Cam lower bound.'),r('Tổng lỗi kiểm định ít nhất $1-\\operatorname{TV}(P_0,P_1)$, còn rủi ro cực đại trội hơn trung bình; kết hợp các bất đẳng thức được cận dưới Le Cam.'))
    ],
    companions:[
      {prompt:b(r('A quality parameter is either $\\theta_0=10$ or $\\theta_1=14$ and an estimator reports $\\delta=11$. Which point is nearest, and how large must squared error be if that induced test is wrong?'),r('Tham số chất lượng bằng $\\theta_0=10$ hoặc $\\theta_1=14$ và ước lượng báo $\\delta=11$. Điểm nào gần hơn, và sai số bình phương phải ít nhất bao nhiêu nếu kiểm định cảm sinh sai?')),solution:[
        b(r('The separation is $\\Delta=14-10=4$.'),r('Khoảng cách là $\\Delta=14-10=4$.')),
        b(r('$\\delta=11$ is distance 1 from 10 and distance 3 from 14, so the nearest-neighbor test selects $\\theta_0=10$.'),r('$\\delta=11$ cách 10 một đơn vị và cách 14 ba đơn vị, nên kiểm định láng giềng gần nhất chọn $\\theta_0=10$.')),
        b(r('If truth were $14$ but this test chose 10, the estimator must be at least $\\Delta/2=2$ from truth; its squared error would be at least $4$.'),r('Nếu sự thật là $14$ nhưng kiểm định chọn 10, ước lượng phải cách sự thật ít nhất $\\Delta/2=2$; sai số bình phương ít nhất bằng $4$.'))
      ]},
      {prompt:b(r('Two sensor laws have total variation distance $0.2$ and target values separated by $\\Delta=3$. Apply the two-point result to bound the largest squared-error risk of any estimator.'),r('Hai luật cảm biến có khoảng cách biến phân toàn phần $0.2$ và các giá trị đích cách nhau $\\Delta=3$. Áp dụng kết quả hai điểm để chặn rủi ro sai số bình phương lớn nhất của mọi ước lượng.')),solution:[
        b(r('The testing overlap factor is $1-\\operatorname{TV}=1-0.2=0.8$.'),r('Hệ số chồng lấp kiểm định là $1-\\operatorname{TV}=1-0.2=0.8$.')),
        b(r('The squared separation factor is $\\Delta^2/8=9/8$.'),r('Hệ số khoảng cách bình phương là $\\Delta^2/8=9/8$.')),
        b(r('Therefore every estimator has maximum risk at least $(9/8)(0.8)=0.9$ under the two laws.'),r('Do đó mọi ước lượng có rủi ro cực đại ít nhất $(9/8)(0.8)=0.9$ dưới hai luật.'))
      ]},
      {prompt:b(r('Two equally separated parameter values are $-1$ and $1$. The observation laws are identical. What lower bound follows for the maximum squared-error risk, and why can more data from the same identical law not resolve the labels?'),r('Hai giá trị tham số cách đều là $-1$ và $1$. Hai luật quan sát giống hệt nhau. Chặn dưới nào áp dụng cho rủi ro sai số bình phương cực đại, và vì sao thêm dữ liệu từ cùng luật giống nhau không phân biệt được nhãn?')),solution:[
        b(r('The separation is $\\Delta=2$ and identical laws have $\\operatorname{TV}=0$.'),r('Khoảng cách là $\\Delta=2$ và hai luật giống nhau có $\\operatorname{TV}=0$.')),
        b(r('Le Cam gives maximum risk at least $(4/8)(1-0)=1/2$ for every estimator.'),r('Le Cam cho rủi ro cực đại ít nhất $(4/8)(1-0)=1/2$ với mọi ước lượng.')),
        b(r('If the full data law is identical under the two labels, collecting more observations from that same law does not change the distributions being tested; without added identifying structure, the label remains statistically unresolved.'),r('Nếu luật dữ liệu đầy đủ giống nhau dưới hai nhãn, thu thêm quan sát từ cùng luật không đổi các phân phối đang kiểm định; thiếu cấu trúc nhận dạng bổ sung thì nhãn vẫn không thể phân biệt thống kê.'))
      ]}
    ],
    reviewNote:'The factor 1/8 comes from both the loss threshold Δ²/4 and averaging the two risks. Total variation is defined here as sup-event probability difference, with no extra factor-of-two convention.',
    sourceIds:['p-cmu36705']
  },
  'm2-w054-e2':{
    title:b('Bound Bernoulli testing difficulty through KL','Chặn độ khó kiểm định Bernoulli qua KL'),
    application:b(r('Nearby Bernoulli parameters generate similar product laws; KL and Pinsker quantify the overlap needed for a minimax risk lower bound.'),r('Tham số Bernoulli gần nhau tạo luật tích tương tự; KL và Pinsker định lượng độ chồng lấp cần cho cận dưới rủi ro minimax.')),
    formula:b(r('For $P_0=\\operatorname{Ber}(1/2)^{\\otimes n}$ and $P_1=\\operatorname{Ber}(1/2+\\delta)^{\\otimes n}$, $\\operatorname{KL}(P_0\\|P_1)=-(n/2)\\log(1-4\\delta^2)$. If $\\delta=1/(4\\sqrt n)$, $n\\ge1$, Pinsker gives $\\operatorname{TV}\\le\\sqrt{\\operatorname{KL}/2}<1/3$, and Le Cam gives squared-error risk at least $1/(192n)$.'),r('Với $P_0=\\operatorname{Ber}(1/2)^{\\otimes n}$ và $P_1=\\operatorname{Ber}(1/2+\\delta)^{\\otimes n}$, $\\operatorname{KL}(P_0\\|P_1)=-(n/2)\\log(1-4\\delta^2)$. Nếu $\\delta=1/(4\\sqrt n)$, $n\\ge1$, bất đẳng thức Pinsker cho $\\operatorname{TV}\\le\\sqrt{\\operatorname{KL}/2}<1/3$, và Le Cam cho rủi ro sai số bình phương ít nhất $1/(192n)$.')),
    steps:[
      b(r('For one Bernoulli draw with $p_0=1/2$ and $p_1=1/2+\\delta$, the KL is $\\tfrac12\\log[(1/2)/(1/2+\\delta)]+\\tfrac12\\log[(1/2)/(1/2-\\delta)]$.'),r('Với một lần rút Bernoulli có $p_0=1/2$ và $p_1=1/2+\\delta$, KL là $\\tfrac12\\log[(1/2)/(1/2+\\delta)]+\\tfrac12\\log[(1/2)/(1/2-\\delta)]$.')),
      b(r('Combine the logarithms: the denominator product is $1/4-\\delta^2$, so the one-observation KL is $-\\tfrac12\\log(1-4\\delta^2)$. Independence adds KL across $n$ draws.'),r('Gộp log: tích mẫu số là $1/4-\\delta^2$, nên KL một quan sát là $-\\tfrac12\\log(1-4\\delta^2)$. Tính độc lập cộng KL qua $n$ lần rút.')),
      b(r('With $\\delta^2=1/(16n)$, set $x=1/(4n)$. Since $-\\log(1-x)\\le x/(1-x)$ and $x\\le1/4$, KL is at most $n/2\\cdot(1/(3n))=1/6$.'),r('Với $\\delta^2=1/(16n)$, đặt $x=1/(4n)$. Vì $-\\log(1-x)\\le x/(1-x)$ và $x\\le1/4$, KL không quá $n/2\\cdot(1/(3n))=1/6$.')),
      b(r('Pinsker yields $\\operatorname{TV}\\le\\sqrt{(1/6)/2}=1/\\sqrt{12}<1/3$. The separation is $\\delta$, so Le Cam gives $\\delta^2(1-\\operatorname{TV})/8> (1/(16n))(2/3)/8=1/(192n)$; the weak bound follows.'),r('Pinsker cho $\\operatorname{TV}\\le\\sqrt{(1/6)/2}=1/\\sqrt{12}<1/3$. Khoảng cách là $\\delta$, nên Le Cam cho $\\delta^2(1-\\operatorname{TV})/8>(1/(16n))(2/3)/8=1/(192n)$; suy ra chặn không nghiêm.'))
    ],
    primarySolution:[
      b(r('The one-sample Bernoulli KL simplifies to $-\\tfrac12\\log(1-4\\delta^2)$; product independence multiplies it by $n$.'),r('KL Bernoulli một mẫu rút gọn thành $-\\tfrac12\\log(1-4\\delta^2)$; tính độc lập của tích nhân giá trị này với $n$.')),
      b(r('At $\\delta=1/(4\\sqrt n)$, $4\\delta^2=1/(4n)$. The inequality $-\\log(1-x)\\le x/(1-x)$ gives KL at most $1/6$ for all $n\\ge1$.'),r('Tại $\\delta=1/(4\\sqrt n)$, $4\\delta^2=1/(4n)$. Bất đẳng thức $-\\log(1-x)\\le x/(1-x)$ cho KL không quá $1/6$ với mọi $n\\ge1$.')),
      b(r('Pinsker then bounds total variation by $1/\\sqrt{12}<1/3$, so testing overlap is at least $2/3$.'),r('Pinsker khi đó chặn biến phân toàn phần bởi $1/\\sqrt{12}<1/3$, nên độ chồng lấp kiểm định ít nhất $2/3$.')),
      b(r('Le Cam gives $(\\delta^2/8)(2/3)=(1/(16n))(1/12)=1/(192n)$ as a valid non-strict lower bound.'),r('Le Cam cho $(\\delta^2/8)(2/3)=(1/(16n))(1/12)=1/(192n)$ là cận dưới không nghiêm hợp lệ.'))
    ],
    companions:[
      {prompt:b(r('For $n=4$, compare $p_0=0.5$ with $p_1=0.5+1/(4\\sqrt n)$. Compute the separation and the stated universal risk lower bound.'),r('Với $n=4$, so sánh $p_0=0.5$ với $p_1=0.5+1/(4\\sqrt n)$. Tính khoảng cách và cận dưới rủi ro phổ quát đã nêu.')),solution:[
        b(r('Here $\\sqrt n=2$, so $\\delta=1/8$ and $p_1=0.625$.'),r('Ở đây $\\sqrt n=2$, nên $\\delta=1/8$ và $p_1=0.625$.')),
        b(r('The squared-error two-point separation is $\\Delta^2=\\delta^2=1/64$.'),r('Khoảng cách hai điểm theo sai số bình phương là $\\Delta^2=\\delta^2=1/64$.')),
        b(r('The general result gives risk at least $1/(192n)=1/768\\approx0.001302$.'),r('Kết quả tổng quát cho rủi ro ít nhất $1/(192n)=1/768\\approx0.001302$.'))
      ]},
      {prompt:b(r('Take $n=9$ and $\\delta=1/(4\\sqrt n)$. Compute the Bernoulli parameter pair, the product KL formula value, and a Pinsker upper bound on TV using that KL.'),r('Lấy $n=9$ và $\\delta=1/(4\\sqrt n)$. Tính cặp tham số Bernoulli, giá trị công thức KL tích và cận trên Pinsker cho TV dùng KL đó.')),solution:[
        b(r('Since $\\sqrt9=3$, $\\delta=1/12$ and the pair is $p_0=1/2$, $p_1=7/12$.'),r('Vì $\\sqrt9=3$, $\\delta=1/12$ và cặp là $p_0=1/2$, $p_1=7/12$.')),
        b(r('Now $4\\delta^2=1/36$, so KL is $-(9/2)\\log(35/36)\\approx0.12677$.'),r('Khi đó $4\\delta^2=1/36$, nên KL là $-(9/2)\\log(35/36)\\approx0.12677$.')),
        b(r('Pinsker gives $\\operatorname{TV}\\le\\sqrt{0.1266/2}\\approx0.2516$; this is a numerical upper bound, while the universal proof above uses the simpler $1/3$ bound.'),r('Pinsker cho $\\operatorname{TV}\\le\\sqrt{0.1266/2}\\approx0.2516$; đây là cận trên số, còn chứng minh phổ quát ở trên dùng cận đơn giản $1/3$.'))
      ]},
      {prompt:b(r('Suppose $n=16$, $p_0=1/2$, and $p_1=1/2+1/16$. Use the Le Cam bound with a supplied TV upper bound of $0.4$ to get a risk lower bound.'),r('Giả sử $n=16$, $p_0=1/2$, $p_1=1/2+1/16$. Dùng cận Le Cam với cận trên TV đã cho là $0.4$ để tìm cận dưới rủi ro.')),solution:[
        b(r('The parameter separation is $\\Delta=1/16$, hence $\\Delta^2=1/256$.'),r('Khoảng cách tham số là $\\Delta=1/16$, nên $\\Delta^2=1/256$.')),
        b(r('The overlap factor is at least $1-0.4=0.6$.'),r('Hệ số chồng lấp ít nhất là $1-0.4=0.6$.')),
        b(r('Therefore maximum risk is at least $(1/256)(0.6)/8=0.6/2048\\approx0.00029297$.'),r('Vì vậy rủi ro cực đại ít nhất $(1/256)(0.6)/8=0.6/2048\\approx0.00029297$.'))
      ]}
    ],
    reviewNote:'The constant 1/192 follows from a uniform TV bound below 1/3, proved using -log(1-x)≤x/(1-x) for x≤1/4 and Pinsker in the convention TV≤sqrt(KL/2). The strictly stronger intermediate inequality is safely weakened at the end.',
    sourceIds:['p-cmu36705']
  },
  'm2-w054-e3':{
    title:b('Interpret a vacuous two-point lower bound','Diễn giải cận dưới hai điểm rỗng'),
    application:b(r('A lower bound vanishes when the two observation laws are perfectly distinguishable, so that particular testing argument proves no positive risk floor.'),r('Cận dưới biến mất khi hai luật quan sát phân biệt hoàn hảo, nên lập luận kiểm định cụ thể đó không chứng minh mức sàn rủi ro dương.')),
    formula:b(r('For disjoint-support laws $P_0,P_1$, $\\operatorname{TV}(P_0,P_1)=1$, hence Le Cam gives $\\max_j E_j(\\delta-\\theta_j)^2\\ge(\\Delta^2/8)(1-1)=0$. This is a valid but vacuous nonnegative lower bound.'),r('Với hai luật có giá đỡ rời nhau $P_0,P_1$, $\\operatorname{TV}(P_0,P_1)=1$, nên Le Cam cho $\\max_j E_j(\\delta-\\theta_j)^2\\ge(\\Delta^2/8)(1-1)=0$. Đây là cận dưới không âm đúng nhưng rỗng.')),
    steps:[
      b(r('Disjoint supports let an event identify which law generated the observation with probability one.'),r('Giá đỡ rời nhau cho phép một biến cố xác định luật nào sinh quan sát với xác suất một.')),
      b(r('That perfect distinguishability means the total variation distance reaches its maximum value $1$ under the stated convention.'),r('Khả năng phân biệt hoàn hảo nghĩa là khoảng cách biến phân toàn phần đạt giá trị lớn nhất $1$ theo quy ước đã nêu.')),
      b(r('Substitute $\\operatorname{TV}=1$ into the lower bound; the overlap factor $1-\\operatorname{TV}$ is zero.'),r('Thay $\\operatorname{TV}=1$ vào cận dưới; hệ số chồng lấp $1-\\operatorname{TV}$ bằng không.')),
      b(r('The inequality then only says risk is at least zero. It does not certify a positive impossibility bound; for this two-point problem, disjointness actually permits a perfect law-classification test.'),r('Bất đẳng thức khi đó chỉ nói rủi ro ít nhất bằng không. Nó không chứng nhận cận bất khả thi dương; trong bài toán hai điểm này, tính rời nhau thực ra cho phép kiểm định phân loại luật hoàn hảo.'))
    ],
    primarySolution:[
      b(r('Disjoint supports imply $\\operatorname{TV}(P_0,P_1)=1$.'),r('Giá đỡ rời nhau kéo theo $\\operatorname{TV}(P_0,P_1)=1$.')),
      b(r('Le Cam lower bound becomes $(\\Delta^2/8)(1-1)=0$.'),r('Cận dưới Le Cam trở thành $(\\Delta^2/8)(1-1)=0$.')),
      b(r('This provides no positive lower bound on risk; it is vacuous as an impossibility statement.'),r('Điều này không cho cận dưới dương nào cho rủi ro; nó rỗng như một khẳng định bất khả thi.')),
      b(r('The result does not say estimation must be difficult. In this two-point setting disjoint supports allow perfect identification, although the zero lower bound alone does not construct the identifying rule.'),r('Kết quả không nói ước lượng phải khó. Trong bối cảnh hai điểm này, giá đỡ rời nhau cho phép nhận dạng hoàn hảo, dù riêng cận dưới bằng không không dựng ra quy tắc nhận dạng.'))
    ],
    companions:[
      {prompt:b(r('Under $P_0$, an observation is always in $[0,1]$; under $P_1$, it is always in $[3,4]$. The parameter values differ by $\\Delta=2$. Evaluate the TV lower-bound expression and give an estimator with zero risk.'),r('Dưới $P_0$, quan sát luôn thuộc $[0,1]$; dưới $P_1$, luôn thuộc $[3,4]$. Hai giá trị tham số cách $\\Delta=2$. Tính biểu thức cận dưới TV và nêu một ước lượng có rủi ro bằng không.')),solution:[
        b(r('The supports are disjoint, so $\\operatorname{TV}(P_0,P_1)=1$.'),r('Hai giá đỡ rời nhau, nên $\\operatorname{TV}(P_0,P_1)=1$.')),
        b(r('The lower bound is $(4/8)(1-1)=0$.'),r('Cận dưới là $(4/8)(1-1)=0$.')),
        b(r('Classify observations in $[0,1]$ as state 0 and those in $[3,4]$ as state 1, then report the corresponding parameter; this estimator is correct surely and has zero squared risk.'),r('Phân loại quan sát thuộc $[0,1]$ là trạng thái 0 và thuộc $[3,4]$ là trạng thái 1, rồi báo tham số tương ứng; ước lượng này đúng chắc chắn và có rủi ro bình phương bằng không.'))
      ]},
      {prompt:b(r('Two models have $\\theta_0=0$ and $\\theta_1=5$, with $P_0$ concentrated at observation 2 and $P_1$ concentrated at observation 2 as well. Compute the Le Cam bound and explain why its value contrasts with the disjoint-support case.'),r('Hai mô hình có $\\theta_0=0$ và $\\theta_1=5$, với $P_0$ tập trung tại quan sát 2 và $P_1$ cũng tập trung tại quan sát 2. Tính cận Le Cam và giải thích vì sao kết quả trái với trường hợp giá đỡ rời nhau.')),solution:[
        b(r('The two observation laws are identical, so total variation is zero.'),r('Hai luật quan sát giống hệt nhau, nên biến phân toàn phần bằng không.')),
        b(r('The separation is 5, giving the lower bound $(25/8)(1-0)=25/8$.'),r('Khoảng cách là 5, nên cận dưới bằng $(25/8)(1-0)=25/8$.')),
        b(r('Unlike disjoint supports, identical laws cannot be distinguished and retain full overlap; the positive bound reflects this difficulty.'),r('Khác với giá đỡ rời nhau, luật giống nhau không thể phân biệt và chồng lấp hoàn toàn; cận dương phản ánh độ khó này.'))
      ]},
      {prompt:b(r('For two models separated by $\\Delta=4$, suppose a calculated TV upper bound is $0.98$. What lower bound does Le Cam give, and why is a very small bound not evidence that the true risk equals that value?'),r('Với hai mô hình cách $\\Delta=4$, giả sử cận trên TV đã tính là $0.98$. Le Cam cho cận dưới nào, và vì sao cận rất nhỏ không chứng minh rủi ro thật bằng đúng giá trị đó?')),solution:[
        b(r('The overlap factor is at least $1-0.98=0.02$.'),r('Hệ số chồng lấp ít nhất là $1-0.98=0.02$.')),
        b(r('The resulting risk lower bound is $(16/8)(0.02)=0.04$.'),r('Cận dưới rủi ro thu được là $(16/8)(0.02)=0.04$.')),
        b(r('A lower bound only rules out risks below 0.04; it neither gives an upper bound nor asserts that any estimator attains 0.04.'),r('Cận dưới chỉ loại rủi ro dưới 0.04; nó không cho cận trên cũng không khẳng định có ước lượng nào đạt 0.04.'))
      ]}
    ],
    reviewNote:'The two laws with disjoint supports give TV exactly one and a zero right-hand side. The conclusion is lack of a positive lower bound from this inequality, not a general theorem that all estimation problems have zero risk.',
    sourceIds:['p-cmu36705']
  },
  'm2-w054-e4':{
    title:b('Turn a reliable test into an estimator','Chuyển kiểm định đáng tin thành ước lượng'),
    application:b(r('A test with small error under each of two hypotheses yields an estimator restricted to those two values with explicitly bounded squared loss.'),r('Kiểm định có lỗi nhỏ dưới mỗi trong hai giả thuyết tạo ước lượng giới hạn ở hai giá trị với mất mát bình phương được chặn tường minh.')),
    formula:b(r('Let $\\theta_0,\\theta_1$ be distance $\\Delta$ apart. If a test $\\psi$ has $\\max_jP_j(\\psi\\ne j)\\le\\alpha$, define $\\hat\\theta=\\theta_\\psi$. Under either model, loss is zero if the test is correct and $\\Delta^2$ if wrong, so $\\max_jE_j(\\hat\\theta-\\theta_j)^2\\le\\Delta^2\\alpha$. No claim is made about parameters outside this pair.'),r('Cho $\\theta_0,\\theta_1$ cách nhau $\\Delta$. Nếu kiểm định $\\psi$ có $\\max_jP_j(\\psi\\ne j)\\le\\alpha$, định nghĩa $\\hat\\theta=\\theta_\\psi$. Dưới mỗi mô hình, mất mát bằng không nếu kiểm định đúng và bằng $\\Delta^2$ nếu sai, nên $\\max_jE_j(\\hat\\theta-\\theta_j)^2\\le\\Delta^2\\alpha$. Không khẳng định gì về tham số ngoài cặp này.')),
    steps:[
      b(r('Let the estimator report whichever of $\\theta_0$ or $\\theta_1$ the test selects.'),r('Cho ước lượng báo $\\theta_0$ hoặc $\\theta_1$ theo lựa chọn của kiểm định.')),
      b(r('Under true value $\\theta_j$, a correct decision reports $\\theta_j$ and incurs zero squared error.'),r('Khi giá trị thật là $\\theta_j$, quyết định đúng báo $\\theta_j$ và chịu sai số bình phương bằng không.')),
      b(r('A wrong decision reports the other point, exactly distance $\\Delta$ away, so its squared loss is $\\Delta^2$.'),r('Quyết định sai báo điểm kia, cách đúng $\\Delta$, nên mất mát bình phương bằng $\\Delta^2$.')),
      b(r('Expected risk is therefore $\\Delta^2P_j(\\text{error})\\le\\Delta^2\\alpha$ for each j, and the maximum over these two hypotheses obeys the same bound.'),r('Vì thế rủi ro kỳ vọng là $\\Delta^2P_j(\\text{lỗi})\\le\\Delta^2\\alpha$ với mỗi j, và cực đại trên hai giả thuyết này cũng thỏa cùng chặn.'))
    ],
    primarySolution:[
      b(r('Define $\\hat\\theta=\\theta_0$ or $\\theta_1$ according to the test outcome.'),r('Định nghĩa $\\hat\\theta=\\theta_0$ hoặc $\\theta_1$ theo kết quả kiểm định.')),
      b(r('When the test is correct, $\\hat\\theta=\\theta_j$ and loss is zero; when wrong, distance is $\\Delta$ and squared loss is $\\Delta^2$.'),r('Khi kiểm định đúng, $\\hat\\theta=\\theta_j$ và mất mát bằng không; khi sai, khoảng cách là $\\Delta$ và mất mát bình phương bằng $\\Delta^2$.')),
      b(r('Thus $E_j(\\hat\\theta-\\theta_j)^2=\\Delta^2P_j(\\text{error})\\le\\Delta^2\\alpha$ for both j.'),r('Vậy $E_j(\\hat\\theta-\\theta_j)^2=\\Delta^2P_j(\\text{lỗi})\\le\\Delta^2\\alpha$ với cả hai j.')),
      b(r('Taking the maximum preserves the inequality. The result concerns only the two stated parameter values.'),r('Lấy cực đại vẫn giữ bất đẳng thức. Kết quả chỉ nói về hai giá trị tham số đã nêu.'))
    ],
    companions:[
      {prompt:b(r('A test distinguishes a machine setting of 2 from 7 with error probability at most 0.04 under either setting. For the estimator that reports the tested setting, bound its maximum squared-error risk over those two settings.'),r('Một kiểm định phân biệt cài đặt máy 2 với 7 có xác suất lỗi không quá 0.04 dưới mỗi cài đặt. Với ước lượng báo cài đặt được kiểm định chọn, chặn rủi ro sai số bình phương cực đại trên hai cài đặt.')),solution:[
        b(r('The separation is $\\Delta=7-2=5$.'),r('Khoảng cách là $\\Delta=7-2=5$.')),
        b(r('The estimator has loss zero on correct decisions and $25$ on errors.'),r('Ước lượng mất mát bằng không khi quyết định đúng và $25$ khi sai.')),
        b(r('Hence maximum risk is at most $25(0.04)=1$.'),r('Do đó rủi ro cực đại không quá $25(0.04)=1$.'))
      ]},
      {prompt:b(r('Two dose levels are 1.5 units apart. A test has type-I error 0.02 and type-II error 0.08. Construct the two-point estimator and compute its risk bound under each dose and the maximum.'),r('Hai mức liều cách nhau 1.5 đơn vị. Kiểm định có lỗi loại I bằng 0.02 và lỗi loại II bằng 0.08. Dựng ước lượng hai điểm và tính cận rủi ro dưới mỗi liều cùng cực đại.')),solution:[
        b(r('Report the dose selected by the test; the separation squared is $1.5^2=2.25$.'),r('Báo mức liều được kiểm định chọn; bình phương khoảng cách là $1.5^2=2.25$.')),
        b(r('Under the first dose, risk is $2.25(0.02)=0.045$; under the second, it is $2.25(0.08)=0.18$.'),r('Dưới liều thứ nhất, rủi ro là $2.25(0.02)=0.045$; dưới liều thứ hai là $2.25(0.08)=0.18$.')),
        b(r('The maximum risk is $0.18$, equivalently bounded by $2.25\\max(0.02,0.08)$.'),r('Rủi ro cực đại là $0.18$, tương đương bị chặn bởi $2.25\\max(0.02,0.08)$.'))
      ]},
      {prompt:b(r('A diagnostic test has maximum error at most $\\alpha=0.1$ for two disease states whose target costs are 0 and 12. Find the resulting maximum squared-error risk bound and explain why it is not an estimator for intermediate costs.'),r('Kiểm định chẩn đoán có lỗi cực đại không quá $\\alpha=0.1$ cho hai trạng thái bệnh có chi phí mục tiêu 0 và 12. Tìm cận rủi ro sai số bình phương cực đại và giải thích vì sao đây không phải ước lượng cho chi phí trung gian.')),solution:[
        b(r('The two target values are separated by $\\Delta=12$.'),r('Hai giá trị đích cách nhau $\\Delta=12$.')),
        b(r('The induced estimator reports 0 or 12, so maximum squared risk is at most $\\Delta^2\\alpha=144(0.1)=14.4$.'),r('Ước lượng cảm sinh báo 0 hoặc 12, nên rủi ro bình phương cực đại không quá $\\Delta^2\\alpha=144(0.1)=14.4$.')),
        b(r('Its guarantee is only over those two states; it makes no accuracy promise for an intermediate true cost such as 6.'),r('Bảo đảm chỉ áp dụng trên hai trạng thái ấy; nó không hứa độ chính xác nếu chi phí thật ở giữa, chẳng hạn 6.'))
      ]}
    ],
    reviewNote:'The upper bound is exact for the two-valued test-based estimator: its loss is Δ² times the test error indicator. It is a finite parameter-pair statement and should not be generalized to a continuum without further argument.',
    sourceIds:['p-cmu36705']
  },
  'm2-w054-e5':{
    title:b('Derive a minimax rate from close alternatives','Suy tốc độ minimax từ các phương án gần nhau'),
    application:b(r('An n-dependent pair can force a nonzero estimation error at every sample size; its shrinking separation determines the minimax rate.'),r('Một cặp phụ thuộc n có thể buộc sai số ước lượng khác không ở mọi cỡ mẫu; khoảng cách co lại quyết định tốc độ minimax.')),
    formula:b(r('If $\\Delta_n=c n^{-1/2}$ with fixed $c>0$ and $\\operatorname{TV}(P_0^n,P_1^n)\\le1/2$, then $\\max_jE_j(\\hat\\theta-\\theta_j)^2\\ge\\Delta_n^2(1-\\operatorname{TV})/8\\ge c^2/(16n)$. This two-point bound implies an $n^{-1}$ squared-error minimax lower rate for the class containing both alternatives.'),r('Nếu $\\Delta_n=c n^{-1/2}$ với $c>0$ cố định và $\\operatorname{TV}(P_0^n,P_1^n)\\le1/2$, thì $\\max_jE_j(\\hat\\theta-\\theta_j)^2\\ge\\Delta_n^2(1-\\operatorname{TV})/8\\ge c^2/(16n)$. Cận hai điểm này kéo theo tốc độ cận dưới minimax sai số bình phương $n^{-1}$ cho lớp chứa cả hai phương án.')),
    steps:[
      b(r('Square the n-dependent separation: $\\Delta_n^2=c^2/n$.'),r('Bình phương khoảng cách phụ thuộc n: $\\Delta_n^2=c^2/n$.')),
      b(r('The TV ceiling leaves testing overlap $1-\\operatorname{TV}\\ge1/2$.'),r('Giới hạn TV để lại độ chồng lấp kiểm định $1-\\operatorname{TV}\\ge1/2$.')),
      b(r('Substitute into Le Cam: maximum risk is at least $(c^2/n)(1/2)/8=c^2/(16n)$.'),r('Thay vào Le Cam: rủi ro cực đại ít nhất $(c^2/n)(1/2)/8=c^2/(16n)$.')),
      b(r('For fixed positive c this scales as $n^{-1}$; the lower-bound constant is proportional to $c^2$, and the argument requires the stipulated TV closeness at each n.'),r('Với c dương cố định, tốc độ là $n^{-1}$; hằng số cận dưới tỷ lệ với $c^2$, và lập luận cần độ gần TV đã cho ở từng n.'))
    ],
    primarySolution:[
      b(r('The parameter separation is $\\Delta_n=c/\\sqrt n$, so its square is $c^2/n$.'),r('Khoảng cách tham số là $\\Delta_n=c/\\sqrt n$, nên bình phương bằng $c^2/n$.')),
      b(r('Because TV is at most $1/2$, the Le Cam overlap factor is at least $1/2$.'),r('Vì TV không quá $1/2$, hệ số chồng lấp Le Cam ít nhất là $1/2$.')),
      b(r('The two-point lower bound is therefore at least $(c^2/n)(1/2)/8=c^2/(16n)$.'),r('Cận dưới hai điểm vì thế ít nhất $(c^2/n)(1/2)/8=c^2/(16n)$.')),
      b(r('Thus the minimax squared-error risk cannot decay faster than order $n^{-1}$ on any parameter class containing these alternatives, with constant scaling as $c^2$.'),r('Vậy rủi ro minimax sai số bình phương không thể giảm nhanh hơn bậc $n^{-1}$ trên lớp tham số chứa các phương án này, với hằng số tăng theo $c^2$.'))
    ],
    companions:[
      {prompt:b(r('For every n, two signal levels are separated by $3/\\sqrt n$ and their n-sample laws have TV at most $0.4$. Give a squared-error minimax lower bound with its constant.'),r('Với mỗi n, hai mức tín hiệu cách nhau $3/\\sqrt n$ và luật mẫu n có TV không quá $0.4$. Nêu cận dưới minimax sai số bình phương cùng hằng số.')),solution:[
        b(r('Here $c=3$, so $\\Delta_n^2=9/n$.'),r('Ở đây $c=3$, nên $\\Delta_n^2=9/n$.')),
        b(r('The testing overlap is at least $1-0.4=0.6$.'),r('Độ chồng lấp kiểm định ít nhất là $1-0.4=0.6$.')),
        b(r('Le Cam gives risk at least $(9/n)(0.6)/8=0.675/n$.'),r('Le Cam cho rủi ro ít nhất $(9/n)(0.6)/8=0.675/n$.'))
      ]},
      {prompt:b(r('A family supplies alternatives with separation $2n^{-1/3}$ and TV at most $1/4$. Derive the corresponding squared-error minimax lower order and constant.'),r('Một họ mô hình cho các phương án cách nhau $2n^{-1/3}$ và TV không quá $1/4$. Suy ra bậc cận dưới minimax sai số bình phương và hằng số.')),solution:[
        b(r('The squared separation is $4n^{-2/3}$.'),r('Khoảng cách bình phương là $4n^{-2/3}$.')),
        b(r('The overlap factor is at least $3/4$.'),r('Hệ số chồng lấp ít nhất là $3/4$.')),
        b(r('The risk lower bound is $(4n^{-2/3})(3/4)/8=(3/8)n^{-2/3}$.'),r('Cận dưới rủi ro là $(4n^{-2/3})(3/4)/8=(3/8)n^{-2/3}$.'))
      ]},
      {prompt:b(r('Suppose $\\Delta_n=5/\\sqrt n$ but the only available bound is $\\operatorname{TV}(P_0^n,P_1^n)\\le0.9$. Compute the guaranteed risk floor and explain how it compares with the same pair under a TV ceiling of 0.2.'),r('Giả sử $\\Delta_n=5/\\sqrt n$ nhưng cận duy nhất là $\\operatorname{TV}(P_0^n,P_1^n)\\le0.9$. Tính sàn rủi ro được bảo đảm và so sánh với cùng cặp khi TV không quá 0.2.')),solution:[
        b(r('At TV ceiling 0.9, overlap is at least 0.1, so the bound is $(25/n)(0.1)/8=0.3125/n$.'),r('Với cận TV 0.9, chồng lấp ít nhất 0.1, nên cận là $(25/n)(0.1)/8=0.3125/n$.')),
        b(r('At TV ceiling 0.2, overlap is at least 0.8, giving $(25/n)(0.8)/8=2.5/n$.'),r('Với cận TV 0.2, chồng lấp ít nhất 0.8, cho $(25/n)(0.8)/8=2.5/n$.')),
        b(r('Greater guaranteed overlap yields a stronger lower bound; both remain order $n^{-1}$ but have different constants.'),r('Độ chồng lấp được bảo đảm lớn hơn cho cận dưới mạnh hơn; cả hai vẫn bậc $n^{-1}$ nhưng khác hằng số.'))
      ]}
    ],
    reviewNote:'The minimax conclusion applies to any class containing the n-dependent pair and uses the same n-sample laws appearing in the TV premise. The rate is n^-1 only for squared-error loss; the constant c^2/16 is explicit.',
    sourceIds:['p-cmu36705']
  },
  'm2-w055-e1':{
    title:b('Derive Gaussian covariance Frobenius risk','Suy rủi ro Frobenius của hiệp phương sai Gaussian'),
    application:b(r('The Frobenius risk adds the sampling variances of every covariance coordinate, including both copies of each off-diagonal entry.'),r('Rủi ro Frobenius cộng phương sai lấy mẫu của mọi tọa độ hiệp phương sai, kể cả hai vị trí đối xứng của mỗi phần tử ngoài đường chéo.')),
    formula:b(r('For iid $X_i\\sim N_p(0,\\Sigma)$ with known zero mean, let $S=n^{-1}\\sum_iX_iX_i^\\top$. Gaussian fourth moments give $\\operatorname{Var}(S_{jk})=(\\Sigma_{jj}\\Sigma_{kk}+\\Sigma_{jk}^2)/n$, hence $E\\|S-\\Sigma\\|_F^2=[(\\operatorname{tr}\\Sigma)^2+\\operatorname{tr}(\\Sigma^2)]/n$.'),r('Với $X_i\\sim N_p(0,\\Sigma)$ iid và trung bình không đã biết, đặt $S=n^{-1}\\sum_iX_iX_i^\\top$. Moment Gaussian bậc bốn cho $\\operatorname{Var}(S_{jk})=(\\Sigma_{jj}\\Sigma_{kk}+\\Sigma_{jk}^2)/n$, nên $E\\|S-\\Sigma\\|_F^2=[(\\operatorname{tr}\\Sigma)^2+\\operatorname{tr}(\\Sigma^2)]/n$.')),
    steps:[
      b(r('For one observation, Isserlis theorem gives $E(X_j^2X_k^2)=\\Sigma_{jj}\\Sigma_{kk}+2\\Sigma_{jk}^2$, including the case $j=k$.'),r('Với một quan sát, định lý Isserlis cho $E(X_j^2X_k^2)=\\Sigma_{jj}\\Sigma_{kk}+2\\Sigma_{jk}^2$, kể cả trường hợp $j=k$.')),
      b(r('Subtract the squared mean $[E(X_jX_k)]^2=\\Sigma_{jk}^2$ to obtain $\\operatorname{Var}(X_jX_k)=\\Sigma_{jj}\\Sigma_{kk}+\\Sigma_{jk}^2$.'),r('Trừ bình phương trung bình $[E(X_jX_k)]^2=\\Sigma_{jk}^2$ để được $\\operatorname{Var}(X_jX_k)=\\Sigma_{jj}\\Sigma_{kk}+\\Sigma_{jk}^2$.')),
      b(r('The n observations are independent and $S_{jk}$ is their average, so its variance is the one-observation variance divided by n.'),r('n quan sát độc lập và $S_{jk}$ là trung bình của chúng, nên phương sai bằng phương sai một quan sát chia cho n.')),
      b(r('Since $E S=\\Sigma$, Frobenius risk is the sum of coordinate variances. Summing $\\Sigma_{jj}\\Sigma_{kk}$ gives $(\\operatorname{tr}\\Sigma)^2$, and summing $\\Sigma_{jk}^2$ gives $\\operatorname{tr}(\\Sigma^2)$ for symmetric $\\Sigma$.'),r('Vì $E S=\\Sigma$, rủi ro Frobenius là tổng phương sai các tọa độ. Tổng $\\Sigma_{jj}\\Sigma_{kk}$ bằng $(\\operatorname{tr}\\Sigma)^2$, còn tổng $\\Sigma_{jk}^2$ bằng $\\operatorname{tr}(\\Sigma^2)$ do $\\Sigma$ đối xứng.'))
    ],
    primarySolution:[
      b(r('For Gaussian coordinates, $E(X_j^2X_k^2)=\\Sigma_{jj}\\Sigma_{kk}+2\\Sigma_{jk}^2$.'),r('Với tọa độ Gaussian, $E(X_j^2X_k^2)=\\Sigma_{jj}\\Sigma_{kk}+2\\Sigma_{jk}^2$.')),
      b(r('Subtract $E(X_jX_k)^2=\\Sigma_{jk}^2$ to get $\\operatorname{Var}(X_jX_k)=\\Sigma_{jj}\\Sigma_{kk}+\\Sigma_{jk}^2$.'),r('Trừ $E(X_jX_k)^2=\\Sigma_{jk}^2$ để được $\\operatorname{Var}(X_jX_k)=\\Sigma_{jj}\\Sigma_{kk}+\\Sigma_{jk}^2$.')),
      b(r('Averaging n independent terms divides each variance by n; unbiasedness makes expected squared Frobenius error the sum of these variances.'),r('Lấy trung bình n số hạng độc lập chia mỗi phương sai cho n; tính không chệch khiến sai số Frobenius bình phương kỳ vọng là tổng các phương sai này.')),
      b(r('The two sums are $(\\operatorname{tr}\\Sigma)^2$ and $\\operatorname{tr}(\\Sigma^2)$, yielding the stated exact formula.'),r('Hai tổng lần lượt là $(\\operatorname{tr}\\Sigma)^2$ và $\\operatorname{tr}(\\Sigma^2)$, cho công thức chính xác đã nêu.'))
    ],
    companions:[
      {prompt:b(r('For $\\Sigma=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$ and $n=10$, compute the exact expected squared Frobenius error of the known-zero-mean Gaussian covariance estimator.'),r('Với $\\Sigma=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$ và $n=10$, tính sai số Frobenius bình phương kỳ vọng chính xác của ước lượng hiệp phương sai Gaussian trung bình không đã biết.')),solution:[
        b(r('The trace is 5, so $(\\operatorname{tr}\\Sigma)^2=25$.'),r('Vết bằng 5, nên $(\\operatorname{tr}\\Sigma)^2=25$.')),
        b(r('$\\operatorname{tr}(\\Sigma^2)=\\sum_{j,k}\\Sigma_{jk}^2=4+1+1+9=15$.'),r('$\\operatorname{tr}(\\Sigma^2)=\\sum_{j,k}\\Sigma_{jk}^2=4+1+1+9=15$.')),
        b(r('The risk is $(25+15)/10=4$.'),r('Rủi ro là $(25+15)/10=4$.'))
      ]},
      {prompt:b(r('Let $\\Sigma=\\operatorname{diag}(1,4,2)$ and take $n=5$ known-mean Gaussian observations. Evaluate the formula by separately computing both trace terms.'),r('Cho $\\Sigma=\\operatorname{diag}(1,4,2)$ và lấy $n=5$ quan sát Gaussian trung bình đã biết. Tính công thức bằng cách tính riêng hai số hạng vết.')),solution:[
        b(r('The trace is $1+4+2=7$, whose square is 49.'),r('Vết là $1+4+2=7$, bình phương là 49.')),
        b(r('$\\operatorname{tr}(\\Sigma^2)=1^2+4^2+2^2=21$.'),r('$\\operatorname{tr}(\\Sigma^2)=1^2+4^2+2^2=21$.')),
        b(r('Thus expected Frobenius error is $(49+21)/5=14$.'),r('Vì vậy sai số Frobenius kỳ vọng là $(49+21)/5=14$.'))
      ]},
      {prompt:b(r('In one dimension, $X_i\\sim N(0,4)$ and $S=n^{-1}\\sum X_i^2$. Find $E(S-4)^2$ for $n=8$ and check it against the scalar chi-square variance.'),r('Trong một chiều, $X_i\\sim N(0,4)$ và $S=n^{-1}\\sum X_i^2$. Tìm $E(S-4)^2$ khi $n=8$ và đối chiếu với phương sai chi-bình phương vô hướng.')),solution:[
        b(r('Here $\\Sigma=4$, so $(\\operatorname{tr}\\Sigma)^2=16$ and $\\operatorname{tr}(\\Sigma^2)=16$.'),r('Ở đây $\\Sigma=4$, nên $(\\operatorname{tr}\\Sigma)^2=16$ và $\\operatorname{tr}(\\Sigma^2)=16$.')),
        b(r('The formula gives risk $(16+16)/8=4$.'),r('Công thức cho rủi ro $(16+16)/8=4$.')),
        b(r('Indeed $nS/4\\sim\\chi_n^2$, whose variance is $2n$; therefore $\\operatorname{Var}(S)=16(2n)/n^2=32/n=4$ at n=8.'),r('Thật vậy $nS/4\\sim\\chi_n^2$, có phương sai $2n$; do đó $\\operatorname{Var}(S)=16(2n)/n^2=32/n=4$ khi n=8.'))
      ]}
    ],
    reviewNote:'Known zero mean is essential for the displayed uncentered second-moment estimator; estimating the mean changes finite-sample covariance risk. The sum includes both ordered off-diagonal coordinates in the Frobenius norm.',
    sourceIds:['p-cmu36705']
  },
  'm2-w055-e2':{
    title:b('Derive the deterministic-target shrinkage identity','Suy đồng nhất thức co rút về mục tiêu xác định'),
    application:b(r('A fixed target introduces bias while reducing sampling noise; unbiasedness of the raw estimator removes the cross term exactly.'),r('Mục tiêu cố định tạo độ chệch nhưng giảm nhiễu lấy mẫu; tính không chệch của ước lượng thô triệt tiêu số hạng chéo chính xác.')),
    formula:b(r('Let $E S=\\Sigma$, $V=E\\|S-\\Sigma\\|_F^2<\\infty$, deterministic $T$, $D^2=\\|T-\\Sigma\\|_F^2$, and $0\\le\\lambda\\le1$. For $\\hat\\Sigma_\\lambda=(1-\\lambda)S+\\lambda T$, $R(\\lambda)=E\\|\\hat\\Sigma_\\lambda-\\Sigma\\|_F^2=(1-\\lambda)^2V+\\lambda^2D^2$.'),r('Cho $E S=\\Sigma$, $V=E\\|S-\\Sigma\\|_F^2<\\infty$, $T$ xác định, $D^2=\\|T-\\Sigma\\|_F^2$ và $0\\le\\lambda\\le1$. Với $\\hat\\Sigma_\\lambda=(1-\\lambda)S+\\lambda T$, $R(\\lambda)=E\\|\\hat\\Sigma_\\lambda-\\Sigma\\|_F^2=(1-\\lambda)^2V+\\lambda^2D^2$.')),
    steps:[
      b(r('Write the error as $(1-\\lambda)(S-\\Sigma)+\\lambda(T-\\Sigma)$ and expand its squared Frobenius norm.'),r('Viết sai số thành $(1-\\lambda)(S-\\Sigma)+\\lambda(T-\\Sigma)$ rồi khai triển chuẩn Frobenius bình phương.')),
      b(r('The expansion has squared terms $(1-\\lambda)^2\\|S-\\Sigma\\|_F^2$ and $\\lambda^2D^2$, plus twice the cross inner product.'),r('Khai triển có hai số hạng bình phương $(1-\\lambda)^2\\|S-\\Sigma\\|_F^2$ và $\\lambda^2D^2$, cùng hai lần tích vô hướng chéo.')),
      b(r('Because T is deterministic and $E(S-\\Sigma)=0$, the expected cross inner product is $\\langle E(S-\\Sigma),T-\\Sigma\\rangle_F=0$.'),r('Vì T xác định và $E(S-\\Sigma)=0$, tích vô hướng chéo kỳ vọng là $\\langle E(S-\\Sigma),T-\\Sigma\\rangle_F=0$.')),
      b(r('Taking expectation of the remaining terms gives $(1-\\lambda)^2V+\\lambda^2D^2$.'),r('Lấy kỳ vọng các số hạng còn lại cho $(1-\\lambda)^2V+\\lambda^2D^2$.'))
    ],
    primarySolution:[
      b(r('Subtract $\\Sigma$ from the convex combination to obtain $(1-\\lambda)(S-\\Sigma)+\\lambda(T-\\Sigma)$.'),r('Trừ $\\Sigma$ khỏi tổ hợp lồi để được $(1-\\lambda)(S-\\Sigma)+\\lambda(T-\\Sigma)$.')),
      b(r('Expand squared norm; the cross term is $2\\lambda(1-\\lambda)\\langle S-\\Sigma,T-\\Sigma\\rangle_F$.'),r('Khai triển chuẩn bình phương; số hạng chéo là $2\\lambda(1-\\lambda)\\langle S-\\Sigma,T-\\Sigma\\rangle_F$.')),
      b(r('Its expectation vanishes since T is fixed and $E(S-\\Sigma)=0$ by unbiasedness.'),r('Kỳ vọng số hạng này bằng không vì T cố định và $E(S-\\Sigma)=0$ do không chệch.')),
      b(r('The two remaining expected squared terms equal $(1-\\lambda)^2V$ and $\\lambda^2D^2$, proving the identity.'),r('Hai số hạng bình phương kỳ vọng còn lại bằng $(1-\\lambda)^2V$ và $\\lambda^2D^2$, chứng minh đồng nhất thức.'))
    ],
    companions:[
      {prompt:b(r('A lab covariance estimate S is unbiased with Frobenius risk $V=8$. A fixed diagonal target T is at squared distance $D^2=2$ from the true covariance. Compute shrinkage risk at $\\lambda=1/4$ and identify the cross-term expectation.'),r('Ước lượng hiệp phương sai phòng thí nghiệm S không chệch, có rủi ro Frobenius $V=8$. Mục tiêu đường chéo cố định T cách hiệp phương sai thật bình phương $D^2=2$. Tính rủi ro co rút tại $\\lambda=1/4$ và nêu kỳ vọng số hạng chéo.')),solution:[
        b(r('The estimator weights are $1-\\lambda=3/4$ on S and $1/4$ on T.'),r('Trọng số ước lượng là $1-\\lambda=3/4$ cho S và $1/4$ cho T.')),
        b(r('The cross term has expectation zero because $E(S-\\Sigma)=0$ and T is fixed.'),r('Số hạng chéo có kỳ vọng bằng không vì $E(S-\\Sigma)=0$ và T cố định.')),
        b(r('Risk is $(3/4)^2(8)+(1/4)^2(2)=4.5+0.125=4.625$.'),r('Rủi ro là $(3/4)^2(8)+(1/4)^2(2)=4.5+0.125=4.625$.'))
      ]},
      {prompt:b(r('A scalar estimator S has mean 5 and variance 9. Shrink it toward fixed target T=2 with $\\lambda=1/3$. Compute bias, variance, and mean squared error directly.'),r('Ước lượng vô hướng S có trung bình 5 và phương sai 9. Co rút về mục tiêu cố định T=2 với $\\lambda=1/3$. Tính trực tiếp độ chệch, phương sai và sai số bình phương trung bình.')),solution:[
        b(r('The true value is $\\Sigma=E S=5$, and $D=T-\\Sigma=2-5=-3$.'),r('Giá trị thật là $\\Sigma=E S=5$, và $D=T-\\Sigma=2-5=-3$.')),
        b(r('The shrunken mean is $(2/3)5+(1/3)2=4$, so bias is $4-5=-1$ and squared bias is 1.'),r('Trung bình sau co rút là $(2/3)5+(1/3)2=4$, nên độ chệch là $4-5=-1$ và bình phương độ chệch là 1.')),
        b(r('Only S is random, so variance is $(2/3)^2(9)=4$. MSE equals variance plus squared bias, $4+1=5$, matching $(2/3)^2(9)+(1/3)^2(9)=5$.'),r('Chỉ S ngẫu nhiên, nên phương sai là $(2/3)^2(9)=4$. MSE bằng phương sai cộng bình phương độ chệch, $4+1=5$, khớp $(2/3)^2(9)+(1/3)^2(9)=5$.'))
      ]},
      {prompt:b(r('Let S be an unbiased 2 by 2 matrix estimate with risk 10 and fixed target T at squared Frobenius distance 6 from truth. At $\\lambda=1/2$, compute both risk contributions and the total.'),r('Cho S là ước lượng ma trận 2 nhân 2 không chệch, có rủi ro 10 và mục tiêu cố định T cách giá trị thật bình phương chuẩn Frobenius bằng 6. Tại $\\lambda=1/2$, tính hai đóng góp rủi ro và tổng.')),solution:[
        b(r('The random-estimator contribution is $(1/2)^2(10)=2.5$.'),r('Đóng góp từ ước lượng ngẫu nhiên là $(1/2)^2(10)=2.5$.')),
        b(r('The fixed-target contribution is $(1/2)^2(6)=1.5$.'),r('Đóng góp từ mục tiêu cố định là $(1/2)^2(6)=1.5$.')),
        b(r('The cross expectation vanishes by unbiasedness, so total risk is $2.5+1.5=4$.'),r('Kỳ vọng số hạng chéo triệt tiêu do tính không chệch, nên rủi ro tổng là $2.5+1.5=4$.'))
      ]}
    ],
    reviewNote:'The cross-term cancellation requires a deterministic target and an unbiased S (or a separate zero-covariance condition). A random or data-selected target generally leaves a nonzero cross term.',
    sourceIds:['p-cmu36705']
  },
  'm2-w055-e3':{
    title:b('Compute isotropic covariance risk and rank','Tính rủi ro và hạng hiệp phương sai đẳng hướng'),
    application:b(r('An isotropic covariance simplifies the exact risk to a dimension formula, while Gaussian sample rank determines whether the empirical matrix can be inverted.'),r('Hiệp phương sai đẳng hướng rút gọn rủi ro chính xác thành công thức theo chiều, còn hạng mẫu Gaussian quyết định ma trận thực nghiệm có nghịch đảo hay không.')),
    formula:b(r('For iid $X_i\\sim N_p(0,\\sigma^2I_p)$ with known zero mean and $S=n^{-1}\\sum_iX_iX_i^\\top$, $E\\|S-\\Sigma\\|_F^2=p(p+1)\\sigma^4/n$ and $\\operatorname{rank}(S)=\\min(p,n)$ almost surely. Thus $S$ is singular for $p>n$; at $p=n$, $S$ is full rank almost surely when $\\sigma^2>0$.'),r('Với $X_i\\sim N_p(0,\\sigma^2I_p)$ iid, trung bình không đã biết và $S=n^{-1}\\sum_iX_iX_i^\\top$, $E\\|S-\\Sigma\\|_F^2=p(p+1)\\sigma^4/n$ và $\\operatorname{rank}(S)=\\min(p,n)$ hầu chắc chắn. Vì vậy $S$ suy biến khi $p>n$; tại $p=n$, $S$ đủ hạng hầu chắc chắn nếu $\\sigma^2>0$.')),
    steps:[
      b(r('Here $\\operatorname{tr}(\\Sigma)=p\\sigma^2$ and $\\operatorname{tr}(\\Sigma^2)=p\\sigma^4$.'),r('Ở đây $\\operatorname{tr}(\\Sigma)=p\\sigma^2$ và $\\operatorname{tr}(\\Sigma^2)=p\\sigma^4$.')),
      b(r('Substitute in the general risk: $[(p\\sigma^2)^2+p\\sigma^4]/n=p(p+1)\\sigma^4/n$.'),r('Thay vào rủi ro tổng quát: $[(p\\sigma^2)^2+p\\sigma^4]/n=p(p+1)\\sigma^4/n$.')),
      b(r('Write the data matrix as a $p$ by n matrix with independent Gaussian columns. A Gaussian matrix has rank $\\min(p,n)$ almost surely because each new column lies in any fixed lower-dimensional subspace with probability zero.'),r('Viết ma trận dữ liệu kích thước $p$ nhân n với các cột Gaussian độc lập. Ma trận Gaussian có hạng $\\min(p,n)$ hầu chắc chắn vì mỗi cột mới có xác suất không rơi vào không gian con thấp chiều cố định.')),
      b(r('Since $S=XX^\\top/n$, it has the same rank: p>n forces singularity, whereas p=n gives full rank almost surely for positive variance.'),r('Vì $S=XX^\\top/n$, nó có cùng hạng: p>n buộc suy biến, còn p=n cho đủ hạng hầu chắc chắn khi phương sai dương.'))
    ],
    primarySolution:[
      b(r('For $\\Sigma=\\sigma^2I_p$, the trace terms are $(p\\sigma^2)^2$ and $p\\sigma^4$.'),r('Với $\\Sigma=\\sigma^2I_p$, hai số hạng vết là $(p\\sigma^2)^2$ và $p\\sigma^4$.')),
      b(r('Their sum divided by n gives risk $[p^2+p]\\sigma^4/n=p(p+1)\\sigma^4/n$.'),r('Tổng của chúng chia n cho rủi ro $[p^2+p]\\sigma^4/n=p(p+1)\\sigma^4/n$.')),
      b(r('The Gaussian data matrix has rank $\\min(p,n)$ almost surely, and multiplication by its transpose preserves that rank in $S$.'),r('Ma trận dữ liệu Gaussian có hạng $\\min(p,n)$ hầu chắc chắn, và nhân với chuyển vị bảo toàn hạng ấy trong $S$.')),
      b(r('When p>n the rank is below p so inversion is impossible; at p=n it is full rank almost surely if $\\sigma^2>0$, although near-singularity may still matter numerically.'),r('Khi p>n, hạng thấp hơn p nên không thể nghịch đảo; tại p=n, ma trận đủ hạng hầu chắc chắn nếu $\\sigma^2>0$, dù gần suy biến vẫn có thể ảnh hưởng số học.'))
    ],
    companions:[
      {prompt:b(r('For dimension $p=4$, variance scale $\\sigma^2=2$, and $n=8$, compute isotropic covariance risk and the sample covariance rank.'),r('Với số chiều $p=4$, phương sai $\\sigma^2=2$ và $n=8$, tính rủi ro hiệp phương sai đẳng hướng và hạng hiệp phương sai mẫu.')),solution:[
        b(r('Here $\\sigma^4=(\\sigma^2)^2=4$.'),r('Ở đây $\\sigma^4=(\\sigma^2)^2=4$.')),
        b(r('Risk is $p(p+1)\\sigma^4/n=4(5)(4)/8=10$.'),r('Rủi ro là $p(p+1)\\sigma^4/n=4(5)(4)/8=10$.')),
        b(r('Since p=4<n=8, rank is 4 almost surely and inversion is possible under positive variance.'),r('Vì p=4<n=8, hạng bằng 4 hầu chắc chắn và có thể nghịch đảo khi phương sai dương.'))
      ]},
      {prompt:b(r('A six-variable Gaussian vector with positive isotropic variance is observed only $n=3$ times. What is the sample covariance rank and nullity, and can it be inverted?'),r('Một vector Gaussian sáu biến có phương sai đẳng hướng dương chỉ được quan sát $n=3$ lần. Hạng và số chiều hạt nhân của hiệp phương sai mẫu là bao nhiêu, và có nghịch đảo được không?')),solution:[
        b(r('The rank is $\\min(6,3)=3$ almost surely.'),r('Hạng là $\\min(6,3)=3$ hầu chắc chắn.')),
        b(r('As a 6 by 6 matrix, its nullity is $6-3=3$.'),r('Là ma trận 6 nhân 6, số chiều hạt nhân là $6-3=3$.')),
        b(r('Because it is rank deficient, the covariance matrix is singular and has no ordinary inverse.'),r('Vì thiếu hạng, ma trận hiệp phương sai suy biến và không có nghịch đảo thường.'))
      ]},
      {prompt:b(r('Take $p=n=5$ and $\\sigma^2=3$. Compute the exact risk and state whether singularity occurs almost surely or only remains a numerical concern.'),r('Lấy $p=n=5$ và $\\sigma^2=3$. Tính rủi ro chính xác và nêu suy biến có xảy ra hầu chắc chắn hay chỉ còn là quan ngại số học.')),solution:[
        b(r('Since $\\sigma^4=9$, risk is $5(6)(9)/5=54$.'),r('Vì $\\sigma^4=9$, rủi ro là $5(6)(9)/5=54$.')),
        b(r('A square Gaussian data matrix is nonsingular with probability one when $\\sigma^2>0$, so S has full rank five almost surely.'),r('Ma trận dữ liệu Gaussian vuông không suy biến với xác suất một khi $\\sigma^2>0$, nên S đủ hạng năm hầu chắc chắn.')),
        b(r('Thus exact singularity is absent almost surely, though a realized matrix can still be poorly conditioned.'),r('Vì vậy suy biến chính xác vắng mặt hầu chắc chắn, dù một ma trận cụ thể vẫn có thể điều kiện kém.'))
      ]}
    ],
    reviewNote:'The rank statement assumes Gaussian samples with nonsingular covariance and known zero mean, so the data matrix columns are in general position. The p=n case is full rank almost surely, not singular by a degrees-of-freedom denominator convention.',
    sourceIds:['p-cmu36705']
  },
  'm2-w055-e4':{
    title:b('Find when shrinkage toward a poor target hurts','Tìm khi co rút về mục tiêu kém làm tăng rủi ro'),
    application:b(r('Shrinkage lowers variance but moves the estimate toward the target; an excessively weighted distant target can make total risk exceed the raw estimator risk.'),r('Co rút giảm phương sai nhưng kéo ước lượng về mục tiêu; mục tiêu xa được gán trọng số quá lớn có thể khiến rủi ro tổng vượt ước lượng thô.')),
    formula:b(r('For unbiased scalar $S$ with variance $V>0$, fixed target error $D=T-\\Sigma$, and $0<\\lambda\\le1$, $R(\\lambda)-V=\\lambda[\\lambda(V+D^2)-2V]$. Shrinkage hurts exactly when $\\lambda>2V/(V+D^2)$, equivalently $D^2>(2/\\lambda-1)V$; for sufficiently small $\\lambda$ it helps.'),r('Với $S$ vô hướng không chệch có phương sai $V>0$, sai số mục tiêu cố định $D=T-\\Sigma$ và $0<\\lambda\\le1$, $R(\\lambda)-V=\\lambda[\\lambda(V+D^2)-2V]$. Co rút làm tăng rủi ro đúng khi $\\lambda>2V/(V+D^2)$, tương đương $D^2>(2/\\lambda-1)V$; với $\\lambda$ đủ nhỏ, nó làm giảm rủi ro.')),
    steps:[
      b(r('Start from $R(\\lambda)=(1-\\lambda)^2V+\\lambda^2D^2$ and subtract raw risk $R(0)=V$.'),r('Bắt đầu từ $R(\\lambda)=(1-\\lambda)^2V+\\lambda^2D^2$ rồi trừ rủi ro thô $R(0)=V$.')),
      b(r('Expand $(1-\\lambda)^2V-V=(-2\\lambda+\\lambda^2)V$ and collect terms to get $\\lambda[\\lambda(V+D^2)-2V]$.'),r('Khai triển $(1-\\lambda)^2V-V=(-2\\lambda+\\lambda^2)V$ rồi gom số hạng được $\\lambda[\\lambda(V+D^2)-2V]$.')),
      b(r('For positive λ, the risk difference is positive precisely when the bracket is positive, which rearranges to $\\lambda>2V/(V+D^2)$.'),r('Với λ dương, hiệu rủi ro dương đúng khi biểu thức trong ngoặc dương, tương đương $\\lambda>2V/(V+D^2)$.')),
      b(r('Equivalently, the target must be sufficiently poor: $D^2>(2/\\lambda-1)V$. A small λ can hurt only when target error is large enough; as λ approaches zero the risk difference is negative for fixed finite $D^2$.'),r('Tương đương mục tiêu phải đủ kém: $D^2>(2/\\lambda-1)V$. λ nhỏ chỉ làm tăng rủi ro khi sai số mục tiêu đủ lớn; khi λ tiến về không, hiệu rủi ro âm với $D^2$ hữu hạn cố định.'))
    ],
    primarySolution:[
      b(r('Subtract V from the shrinkage identity to obtain $R(\\lambda)-V=\\lambda[\\lambda(V+D^2)-2V]$.'),r('Trừ V khỏi đồng nhất thức co rút để được $R(\\lambda)-V=\\lambda[\\lambda(V+D^2)-2V]$.')),
      b(r('For λ>0, shrinkage increases risk exactly when $\\lambda(V+D^2)>2V$.'),r('Với λ>0, co rút làm tăng rủi ro đúng khi $\\lambda(V+D^2)>2V$.')),
      b(r('Solving for the target distance gives $D^2>(2/\\lambda-1)V$.'),r('Giải theo khoảng cách mục tiêu cho $D^2>(2/\\lambda-1)V$.')),
      b(r('Thus a small chosen weight can still hurt if the target is far enough away; an infinitesimal weight with fixed finite target error initially helps because the risk derivative at zero is $-2V$.'),r('Vì vậy trọng số được chọn tuy nhỏ vẫn có thể làm hại nếu mục tiêu đủ xa; trọng số vô cùng nhỏ với sai số mục tiêu hữu hạn cố định ban đầu làm lợi vì đạo hàm rủi ro tại không là $-2V$.'))
    ],
    companions:[
      {prompt:b(r('An unbiased sensor estimate has variance $V=1$. Shrink it with $\\lambda=0.1$ toward a fixed calibration target whose error is $D=5$. Compute raw and shrunken risks and verify the increase condition.'),r('Ước lượng cảm biến không chệch có phương sai $V=1$. Co rút với $\\lambda=0.1$ về mục tiêu hiệu chuẩn cố định có sai số $D=5$. Tính rủi ro thô và sau co rút rồi kiểm tra điều kiện tăng rủi ro.')),solution:[
        b(r('The raw risk is $V=1$; target squared error is $D^2=25$.'),r('Rủi ro thô là $V=1$; sai số mục tiêu bình phương là $D^2=25$.')),
        b(r('The threshold for harm is $2V/(V+D^2)=2/26\\approx0.07692$, below the chosen $0.1$.'),r('Ngưỡng gây hại là $2V/(V+D^2)=2/26\\approx0.07692$, thấp hơn $0.1$ đã chọn.')),
        b(r('Risk is $(0.9)^2(1)+(0.1)^2(25)=0.81+0.25=1.06$, so shrinkage increases risk by 0.06.'),r('Rủi ro là $(0.9)^2(1)+(0.1)^2(25)=0.81+0.25=1.06$, nên co rút tăng rủi ro 0.06.'))
      ]},
      {prompt:b(r('Let raw variance be $V=4$, target squared error $D^2=9$, and shrinkage weight $\\lambda=0.5$. Determine whether risk rises, and compute the risk difference.'),r('Cho phương sai thô $V=4$, sai số mục tiêu bình phương $D^2=9$ và trọng số co rút $\\lambda=0.5$. Xác định rủi ro tăng hay giảm và tính hiệu rủi ro.')),solution:[
        b(r('The harm threshold is $2V/(V+D^2)=8/13\\approx0.6154$.'),r('Ngưỡng gây hại là $2V/(V+D^2)=8/13\\approx0.6154$.')),
        b(r('Since $0.5<8/13$, the selected shrinkage does not increase risk.'),r('Vì $0.5<8/13$, mức co rút chọn không làm tăng rủi ro.')),
        b(r('The difference is $0.5[0.5(13)-8]=0.5(-1.5)=-0.75$, so risk falls by 0.75 from raw value 4.'),r('Hiệu rủi ro là $0.5[0.5(13)-8]=0.5(-1.5)=-0.75$, nên rủi ro giảm 0.75 so với giá trị thô 4.'))
      ]},
      {prompt:b(r('A scalar estimate has variance 2 and the fixed target differs from truth by 6. Find the smallest λ in $[0,1]$ at which shrinkage risk equals raw risk, and state the risk behavior on either side.'),r('Ước lượng vô hướng có phương sai 2 và mục tiêu cố định khác giá trị thật 6. Tìm λ nhỏ nhất trong $[0,1]$ để rủi ro co rút bằng rủi ro thô, rồi nêu hành vi rủi ro ở hai phía.')),solution:[
        b(r('Set the bracket to zero: $\\lambda(V+D^2)-2V=0$.'),r('Cho biểu thức trong ngoặc bằng không: $\\lambda(V+D^2)-2V=0$.')),
        b(r('With $V=2$ and $D^2=36$, equality occurs at $\\lambda=4/38=2/19\\approx0.1053$.'),r('Với $V=2$ và $D^2=36$, đẳng thức xảy ra tại $\\lambda=4/38=2/19\\approx0.1053$.')),
        b(r('For $0<\\lambda<2/19$ risk is below raw risk; for $\\lambda>2/19$ up to 1 it is above raw risk.'),r('Với $0<\\lambda<2/19$, rủi ro thấp hơn mức thô; với $\\lambda>2/19$ tới 1, rủi ro cao hơn mức thô.'))
      ]}
    ],
    reviewNote:'For V>0 and finite D, the derivative at lambda zero is -2V, so infinitesimal shrinkage cannot increase risk. A fixed small-but-positive weight can hurt when D² exceeds (2/lambda−1)V; this distinction resolves the prompt wording.',
    sourceIds:['p-cmu36705']
  },
  'm2-w055-e5':{
    title:b('Choose the oracle shrinkage weight','Chọn trọng số co rút oracle'),
    application:b(r('When raw risk and target error are known, minimize the quadratic risk curve to obtain the best convex shrinkage weight.'),r('Khi biết rủi ro thô và sai số mục tiêu, tối thiểu hóa đường cong rủi ro bậc hai để có trọng số co rút lồi tốt nhất.')),
    formula:b(r('For unbiased S with risk $V\\ge0$, deterministic target squared error $D^2\\ge0$, and $\\lambda\\in[0,1]$, $R(\\lambda)=(1-\\lambda)^2V+\\lambda^2D^2$. If $V+D^2>0$, the minimizer is $\\lambda^*=V/(V+D^2)$ and minimum risk $VD^2/(V+D^2)$. If both are zero, every λ has zero risk.'),r('Với S không chệch có rủi ro $V\\ge0$, mục tiêu xác định có sai số bình phương $D^2\\ge0$ và $\\lambda\\in[0,1]$, $R(\\lambda)=(1-\\lambda)^2V+\\lambda^2D^2$. Nếu $V+D^2>0$, nghiệm tối ưu là $\\lambda^*=V/(V+D^2)$ và rủi ro cực tiểu $VD^2/(V+D^2)$. Nếu cả hai bằng không, mọi λ cho rủi ro không.')),
    steps:[
      b(r('Expand the risk as $V-2\\lambda V+\\lambda^2(V+D^2)$.'),r('Khai triển rủi ro thành $V-2\\lambda V+\\lambda^2(V+D^2)$.')),
      b(r('Differentiate with respect to λ: $R\\prime(\\lambda)=-2V+2\\lambda(V+D^2)$.'),r('Lấy đạo hàm theo λ: $R\\prime(\\lambda)=-2V+2\\lambda(V+D^2)$.')),
      b(r('Setting the derivative to zero gives $\\lambda^*=V/(V+D^2)$, which lies in $[0,1]$ when the denominator is positive.'),r('Cho đạo hàm bằng không được $\\lambda^*=V/(V+D^2)$, nằm trong $[0,1]$ khi mẫu số dương.')),
      b(r('Substitution gives $R^*=V D^2/(V+D^2)$; compare endpoints $R(0)=V$ and $R(1)=D^2$ to confirm the minimum is no worse than either.'),r('Thay vào được $R^*=V D^2/(V+D^2)$; so sánh hai đầu mút $R(0)=V$, $R(1)=D^2$ để xác nhận cực tiểu không kém hơn cả hai.'))
    ],
    primarySolution:[
      b(r('Use $R(\\lambda)=(1-\\lambda)^2V+\\lambda^2D^2$ with $V=12$ and $D^2=4$.'),r('Dùng $R(\\lambda)=(1-\\lambda)^2V+\\lambda^2D^2$ với $V=12$ và $D^2=4$.')),
      b(r('The oracle weight is $\\lambda^*=12/(12+4)=3/4$.'),r('Trọng số oracle là $\\lambda^*=12/(12+4)=3/4$.')),
      b(r('The minimum risk is $VD^2/(V+D^2)=12(4)/16=3$.'),r('Rủi ro cực tiểu là $VD^2/(V+D^2)=12(4)/16=3$.')),
      b(r('Raw S has risk 12 and the target-only estimator has risk 4, so the oracle combination improves on both in this known-risk calculation.'),r('S thô có rủi ro 12 và ước lượng chỉ dùng mục tiêu có rủi ro 4, nên tổ hợp oracle tốt hơn cả hai trong phép tính biết rủi ro này.'))
    ],
    companions:[
      {prompt:b(r('An unbiased covariance estimator has risk $V=9$ and a fixed target has squared error $D^2=3$. Find the oracle weight, minimum risk, and endpoint risks.'),r('Ước lượng hiệp phương sai không chệch có rủi ro $V=9$ và mục tiêu cố định có sai số bình phương $D^2=3$. Tìm trọng số oracle, rủi ro cực tiểu và rủi ro hai đầu mút.')),solution:[
        b(r('The denominator is $V+D^2=12$, so $\\lambda^*=9/12=3/4$.'),r('Mẫu số là $V+D^2=12$, nên $\\lambda^*=9/12=3/4$.')),
        b(r('Minimum risk is $VD^2/(V+D^2)=27/12=2.25$.'),r('Rủi ro cực tiểu là $VD^2/(V+D^2)=27/12=2.25$.')),
        b(r('The endpoints are raw risk 9 and target-only risk 3; 2.25 is below both.'),r('Hai đầu mút là rủi ro thô 9 và rủi ro chỉ dùng mục tiêu 3; giá trị 2.25 thấp hơn cả hai.'))
      ]},
      {prompt:b(r('A portfolio estimate has sampling risk $V=2$ while a fixed benchmark is 8 units from truth, so $D^2=64$. Find the oracle weight and risk, then compare the raw and target-only choices.'),r('Ước lượng danh mục có rủi ro lấy mẫu $V=2$, còn chuẩn cố định cách giá trị thật 8 đơn vị nên $D^2=64$. Tìm trọng số và rủi ro oracle rồi so với lựa chọn thô và chỉ dùng mục tiêu.')),solution:[
        b(r('The optimal target weight is $2/(2+64)=1/33\\approx0.0303$, small because the target is far away.'),r('Trọng số mục tiêu tối ưu là $2/(2+64)=1/33\\approx0.0303$, nhỏ vì mục tiêu ở xa.')),
        b(r('The oracle risk is $2(64)/66=64/33\\approx1.9394$.'),r('Rủi ro oracle là $2(64)/66=64/33\\approx1.9394$.')),
        b(r('This is slightly below raw risk 2 and far below target-only risk 64.'),r('Giá trị này thấp hơn nhẹ rủi ro thô 2 và thấp hơn nhiều rủi ro chỉ dùng mục tiêu 64.'))
      ]},
      {prompt:b(r('If $V=0$ and $D^2=5$, what oracle weight minimizes risk? If instead $V=5$ and $D^2=0$, what weight is optimal? Interpret each endpoint.'),r('Nếu $V=0$ và $D^2=5$, trọng số oracle nào tối thiểu hóa rủi ro? Nếu $V=5$ và $D^2=0$, trọng số nào tối ưu? Diễn giải mỗi đầu mút.')),solution:[
        b(r('When $V=0$, raw S already equals truth almost surely in squared-error risk; the formula gives $\\lambda^*=0$ and risk zero.'),r('Khi $V=0$, S thô đã bằng giá trị thật theo rủi ro bình phương hầu chắc chắn; công thức cho $\\lambda^*=0$ và rủi ro không.')),
        b(r('When $D^2=0$, the target equals truth, and $\\lambda^*=V/V=1$ gives zero risk.'),r('Khi $D^2=0$, mục tiêu bằng giá trị thật và $\\lambda^*=V/V=1$ cho rủi ro không.')),
        b(r('The optimal rule chooses the perfect component completely in either boundary case.'),r('Quy tắc tối ưu chọn hoàn toàn thành phần chính xác trong cả hai trường hợp biên.'))
      ]}
    ],
    reviewNote:'The minimizer is an oracle because it depends on unknown V and target error D² in applications. The boundary cases V=0 or D²=0 are handled by the same formula when the denominator is positive; both zero makes every weight equivalent.',
    sourceIds:['p-cmu36705']
  },
  'm2-w056-e1':{
    title:b('Derive the lasso basic inequality and cone','Suy bất đẳng thức cơ bản và hình nón lasso'),
    application:b(r('The objective comparison controls prediction error and confines coefficient error to a cone around the true support when the score noise is dominated by the penalty.'),r('So sánh mục tiêu kiểm soát sai số dự đoán và giới hạn sai số hệ số trong một hình nón quanh giá đỡ thật khi nhiễu score bị penalty khống chế.')),
    formula:b(r('Let $y=X\\beta^*+\\varepsilon$, $S=\\operatorname{supp}(\\beta^*)$, $\\Delta=\\hat\\beta-\\beta^*$, $Q=\\|X\\Delta\\|_2^2/n$, and $\\hat\\beta$ minimize $\\|y-X\\beta\\|_2^2/(2n)+\\lambda\\|\\beta\\|_1$. If $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$, then $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$, hence $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$.'),r('Cho $y=X\\beta^*+\\varepsilon$, $S=\\operatorname{supp}(\\beta^*)$, $\\Delta=\\hat\\beta-\\beta^*$, $Q=\\|X\\Delta\\|_2^2/n$, và $\\hat\\beta$ tối thiểu hóa $\\|y-X\\beta\\|_2^2/(2n)+\\lambda\\|\\beta\\|_1$. Nếu $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$, thì $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$, kéo theo $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$.')),
    steps:[
      b(r('Optimality at $\\hat\\beta$ gives its objective no larger than the value at $\\beta^*$. Substitute $y=X\\beta^*+\\varepsilon$ and expand the squared residual.'),r('Tính tối ưu tại $\\hat\\beta$ cho mục tiêu không lớn hơn giá trị tại $\\beta^*$. Thay $y=X\\beta^*+\\varepsilon$ và khai triển bình phương phần dư.')),
      b(r('After canceling $\\|\\varepsilon\\|^2/(2n)$, obtain $Q/2\\le\\langle X^\\top\\varepsilon/n,\\Delta\\rangle+\\lambda(\\|\\beta^*\\|_1-\\|\\beta^*+\\Delta\\|_1)$.'),r('Sau khi khử $\\|\\varepsilon\\|^2/(2n)$, được $Q/2\\le\\langle X^\\top\\varepsilon/n,\\Delta\\rangle+\\lambda(\\|\\beta^*\\|_1-\\|\\beta^*+\\Delta\\|_1)$.')),
      b(r('The noise term is at most $(\\lambda/2)\\|\\Delta\\|_1$ by Holder and the score assumption. Since $\\beta^*_{S^c}=0$, the penalty difference is at most $\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1$.'),r('Số hạng nhiễu không quá $(\\lambda/2)\\|\\Delta\\|_1$ theo Holder và giả thiết score. Vì $\\beta^*_{S^c}=0$, hiệu penalty không quá $\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1$.')),
      b(r('Combine the two bounds and move the negative off-support term left to get $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$.'),r('Kết hợp hai chặn rồi chuyển số hạng ngoài giá đỡ âm sang trái được $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$.')),
      b(r('Dropping $Q/2\\ge0$ and dividing by $\\lambda/2>0$ yields the cone condition.'),r('Bỏ $Q/2\\ge0$ rồi chia cho $\\lambda/2>0$ cho điều kiện hình nón.'))
    ],
    primarySolution:[
      b(r('Compare the lasso objective at $\\hat\\beta$ with its value at $\\beta^*$ and substitute the linear model.'),r('So sánh mục tiêu lasso tại $\\hat\\beta$ với giá trị tại $\\beta^*$ rồi thay mô hình tuyến tính.')),
      b(r('Expansion and cancellation yield $Q/2\\le\\langle X^\\top\\varepsilon/n,\\Delta\\rangle+\\lambda(\\|\\beta^*\\|_1-\\|\\beta^*+\\Delta\\|_1)$.'),r('Khai triển và khử số hạng chung cho $Q/2\\le\\langle X^\\top\\varepsilon/n,\\Delta\\rangle+\\lambda(\\|\\beta^*\\|_1-\\|\\beta^*+\\Delta\\|_1)$.')),
      b(r('Holder and $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$ bound the score inner product by $(\\lambda/2)(\\|\\Delta_S\\|_1+\\|\\Delta_{S^c}\\|_1)$. Support sparsity gives penalty difference at most $\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1$.'),r('Holder và $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$ chặn tích score bởi $(\\lambda/2)(\\|\\Delta_S\\|_1+\\|\\Delta_{S^c}\\|_1)$. Tính thưa giá đỡ chặn hiệu penalty bởi $\\|\\Delta_S\\|_1-\\|\\Delta_{S^c}\\|_1$.')),
      b(r('Combining gives the stated basic inequality. Dropping its nonnegative Q term gives $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$.'),r('Kết hợp cho bất đẳng thức cơ bản đã nêu. Bỏ số hạng Q không âm cho $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$.'))
    ],
    companions:[
      {prompt:b(r('Let $\\beta^*=(1,0)$, $X^\\top X/n=I$, and score vector $X^\\top\\varepsilon/n=(0.2,-0.1)$. Use $\\lambda=0.4$ to compute the lasso solution, Q, and both sides of the basic inequality.'),r('Cho $\\beta^*=(1,0)$, $X^\\top X/n=I$ và vector score $X^\\top\\varepsilon/n=(0.2,-0.1)$. Dùng $\\lambda=0.4$ để tính nghiệm lasso, Q và hai vế bất đẳng thức cơ bản.')),solution:[
        b(r('The score infinity norm is 0.2, so $\\lambda=0.4=2(0.2)$ meets the noise condition. The unpenalized score is $z=\\beta^*+X^\\top\\varepsilon/n=(1.2,-0.1)$.'),r('Chuẩn vô cùng score là 0.2, nên $\\lambda=0.4=2(0.2)$ thỏa điều kiện nhiễu. Score không phạt là $z=\\beta^*+X^\\top\\varepsilon/n=(1.2,-0.1)$.')),
        b(r('Soft thresholding gives $\\hat\\beta=(0.8,0)$, hence $\\Delta=(-0.2,0)$ and $Q=\\|\\Delta\\|_2^2=0.04$.'),r('Ngưỡng mềm cho $\\hat\\beta=(0.8,0)$, nên $\\Delta=(-0.2,0)$ và $Q=\\|\\Delta\\|_2^2=0.04$.')),
        b(r('With $S=\\{1\\}$, the left side is $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1=0.02$ and the right side is $(3\\lambda/2)\\|\\Delta_S\\|_1=0.12$.'),r('Với $S=\\{1\\}$, vế trái là $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1=0.02$ và vế phải là $(3\\lambda/2)\\|\\Delta_S\\|_1=0.12$.'))
      ]},
      {prompt:b(r('Take $\\beta^*=(0,2,0)$, orthonormal design, noise score $(0,0.3,0.1)$, and $\\lambda=0.6$. Find $\\hat\\beta$, the support error cone quantities, and verify the inequality.'),r('Lấy $\\beta^*=(0,2,0)$, thiết kế trực chuẩn, score nhiễu $(0,0.3,0.1)$ và $\\lambda=0.6$. Tìm $\\hat\\beta$, các đại lượng hình nón sai số giá đỡ và kiểm tra bất đẳng thức.')),solution:[
        b(r('The noise infinity norm is 0.3, and $\\lambda=0.6$ is twice that value. The unpenalized score is $z=(0,2.3,0.1)$.'),r('Chuẩn vô cùng nhiễu là 0.3 và $\\lambda=0.6$ gấp đôi giá trị ấy. Score không phạt là $z=(0,2.3,0.1)$.')),
        b(r('Thresholding at 0.6 yields $\\hat\\beta=(0,1.7,0)$, so $\\Delta=(0,-0.3,0)$ and $Q=0.09$.'),r('Ngưỡng tại 0.6 cho $\\hat\\beta=(0,1.7,0)$, nên $\\Delta=(0,-0.3,0)$ và $Q=0.09$.')),
        b(r('For $S=\\{2\\}$ the left side is $0.045$ and the right side is $(3\\cdot0.6/2)(0.3)=0.27$, so the inequality holds; the off-support error is zero.'),r('Với $S=\\{2\\}$, vế trái là $0.045$ và vế phải là $(3\\cdot0.6/2)(0.3)=0.27$, nên bất đẳng thức đúng; sai số ngoài giá đỡ bằng không.'))
      ]},
      {prompt:b(r('For an orthonormal design let $\\beta^*=(1,0)$, noise score $(0.25,0.5)$, and penalty $\\lambda=1$. Compute the soft-threshold estimate and check the basic inequality for $S=\\{1\\}$.'),r('Với thiết kế trực chuẩn, cho $\\beta^*=(1,0)$, score nhiễu $(0.25,0.5)$ và penalty $\\lambda=1$. Tính ước lượng ngưỡng mềm và kiểm tra bất đẳng thức cơ bản với $S=\\{1\\}$.')),solution:[
        b(r('The noise maximum is 0.5, so $\\lambda=1$ meets the required twice-score bound. The score vector is $z=(1.25,0.5)$.'),r('Nhiễu lớn nhất là 0.5, nên $\\lambda=1$ thỏa cận gấp đôi score. Vector score là $z=(1.25,0.5)$.')),
        b(r('Soft thresholding gives $\\hat\\beta=(0.25,0)$, so $\\Delta=(-0.75,0)$ and $Q=0.75^2=0.5625$.'),r('Ngưỡng mềm cho $\\hat\\beta=(0.25,0)$, nên $\\Delta=(-0.75,0)$ và $Q=0.75^2=0.5625$.')),
        b(r('The left side is $Q/2=0.28125$; the right side is $(3/2)(0.75)=1.125$. The cone condition holds since off-support error is zero.'),r('Vế trái là $Q/2=0.28125$; vế phải là $(3/2)(0.75)=1.125$. Điều kiện hình nón đúng vì sai số ngoài giá đỡ bằng không.'))
      ]}
    ],
    reviewNote:'The penalty normalization is ||y−Xβ||²/(2n)+λ||β||₁, which fixes the factors 1/2 and 3/2. The cone follows only after dropping Q≥0, and the score condition uses the same n-normalization.',
    sourceIds:['p-cmu36705']
  },
  'm2-w056-e2':{
    title:b('Complete the lasso restricted-eigenvalue bounds','Hoàn tất các chặn eigenvalue hạn chế của lasso'),
    application:b(r('The cone inequality controls coefficient geometry; a restricted eigenvalue then converts that geometry into prediction error and an l1 coefficient bound.'),r('Bất đẳng thức hình nón kiểm soát hình học hệ số; eigenvalue hạn chế chuyển hình học đó thành sai số dự đoán và chặn hệ số chuẩn l1.')),
    formula:b(r('Assume $Q=\\|X\\Delta\\|_2^2/n$, $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$, $|S|=s$, and the RE condition $\\sqrt Q\\ge\\kappa\\|\\Delta_S\\|_2$ for this cone, with $\\kappa>0$. If $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$, then $Q\\le9\\lambda^2s/\\kappa^2$ and $\\|\\Delta\\|_1\\le12\\lambda s/\\kappa^2$.'),r('Giả sử $Q=\\|X\\Delta\\|_2^2/n$, $\\|\\Delta_{S^c}\\|_1\\le3\\|\\Delta_S\\|_1$, $|S|=s$, và điều kiện RE $\\sqrt Q\\ge\\kappa\\|\\Delta_S\\|_2$ trên hình nón này, với $\\kappa>0$. Nếu $Q/2+(\\lambda/2)\\|\\Delta_{S^c}\\|_1\\le(3\\lambda/2)\\|\\Delta_S\\|_1$, thì $Q\\le9\\lambda^2s/\\kappa^2$ và $\\|\\Delta\\|_1\\le12\\lambda s/\\kappa^2$.')),
    steps:[
      b(r('Drop the nonnegative off-support term from the basic inequality to get $Q\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$ by Cauchy–Schwarz.'),r('Bỏ số hạng ngoài giá đỡ không âm trong bất đẳng thức cơ bản được $Q\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$ theo Cauchy–Schwarz.')),
      b(r('The RE premise gives $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$. Substitute: $Q\\le(3\\lambda\\sqrt{s}/\\kappa)\\sqrt Q$.'),r('Giả thiết RE cho $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$. Thay vào: $Q\\le(3\\lambda\\sqrt{s}/\\kappa)\\sqrt Q$.')),
      b(r('If Q=0 the prediction bound is immediate; otherwise divide by $\\sqrt Q$ and square to obtain $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Nếu Q=0 thì chặn dự đoán hiển nhiên; nếu không, chia cho $\\sqrt Q$ rồi bình phương được $Q\\le9\\lambda^2s/\\kappa^2$.')),
      b(r('The cone gives $\\|\\Delta\\|_1\\le4\\|\\Delta_S\\|_1\\le4\\sqrt{s}\\|\\Delta_S\\|_2\\le4\\sqrt{sQ}/\\kappa$; insert the prediction bound to get $12\\lambda s/\\kappa^2$.'),r('Hình nón cho $\\|\\Delta\\|_1\\le4\\|\\Delta_S\\|_1\\le4\\sqrt{s}\\|\\Delta_S\\|_2\\le4\\sqrt{sQ}/\\kappa$; thay chặn dự đoán được $12\\lambda s/\\kappa^2$.'))
    ],
    primarySolution:[
      b(r('The basic inequality implies $Q\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$.'),r('Bất đẳng thức cơ bản kéo theo $Q\\le3\\lambda\\|\\Delta_S\\|_1\\le3\\lambda\\sqrt{s}\\|\\Delta_S\\|_2$.')),
      b(r('By restricted eigenvalue, $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$, giving $Q\\le(3\\lambda\\sqrt{s}/\\kappa)\\sqrt Q$.'),r('Theo eigenvalue hạn chế, $\\|\\Delta_S\\|_2\\le\\sqrt Q/\\kappa$, cho $Q\\le(3\\lambda\\sqrt{s}/\\kappa)\\sqrt Q$.')),
      b(r('Divide when Q>0 and square; if Q=0 the result already holds. This gives $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Chia khi Q>0 rồi bình phương; nếu Q=0 thì kết quả đã đúng. Ta được $Q\\le9\\lambda^2s/\\kappa^2$.')),
      b(r('Finally $\\|\\Delta\\|_1\\le4\\|\\Delta_S\\|_1\\le4\\sqrt{s}\\sqrt Q/\\kappa\\le12\\lambda s/\\kappa^2$.'),r('Cuối cùng $\\|\\Delta\\|_1\\le4\\|\\Delta_S\\|_1\\le4\\sqrt{s}\\sqrt Q/\\kappa\\le12\\lambda s/\\kappa^2$.'))
    ],
    companions:[
      {prompt:b(r('An estimate obeys the lasso basic inequality with $s=4$, $\\lambda=0.1$, and RE constant $\\kappa=0.5$. Compute the stated upper bounds for Q and $\\|\\Delta\\|_1$.'),r('Một ước lượng thỏa bất đẳng thức cơ bản lasso với $s=4$, $\\lambda=0.1$ và hằng số RE $\\kappa=0.5$. Tính các chặn trên đã nêu cho Q và $\\|\\Delta\\|_1$.')),solution:[
        b(r('The prediction bound is $9\\lambda^2s/\\kappa^2=9(0.01)(4)/(0.25)=1.44$.'),r('Chặn dự đoán là $9\\lambda^2s/\\kappa^2=9(0.01)(4)/(0.25)=1.44$.')),
        b(r('The coefficient bound is $12\\lambda s/\\kappa^2=12(0.1)(4)/(0.25)=19.2$.'),r('Chặn hệ số là $12\\lambda s/\\kappa^2=12(0.1)(4)/(0.25)=19.2$.')),
        b(r('These are deterministic bounds conditional on the basic inequality and RE condition; they are not point estimates of the actual errors.'),r('Đây là các chặn xác định khi có bất đẳng thức cơ bản và điều kiện RE; chúng không phải ước lượng điểm của sai số thực tế.'))
      ]},
      {prompt:b(r('For sparsity $s=2$, penalty $\\lambda=0.2$, and RE constant $\\kappa=1$, calculate both lasso error bounds and state how they depend on λ.'),r('Với độ thưa $s=2$, penalty $\\lambda=0.2$ và hằng số RE $\\kappa=1$, tính hai chặn sai số lasso và nêu chúng phụ thuộc λ thế nào.')),solution:[
        b(r('Prediction error satisfies $Q\\le9(0.2)^2(2)=0.72$.'),r('Sai số dự đoán thỏa $Q\\le9(0.2)^2(2)=0.72$.')),
        b(r('The l1 error satisfies $\\|\\Delta\\|_1\\le12(0.2)(2)=4.8$.'),r('Sai số l1 thỏa $\\|\\Delta\\|_1\\le12(0.2)(2)=4.8$.')),
        b(r('The prediction bound scales quadratically with λ, whereas the l1 bound scales linearly, with s and κ factors as displayed.'),r('Chặn dự đoán tỷ lệ bậc hai theo λ, còn chặn l1 tỷ lệ tuyến tính, cùng các hệ số s và κ như công thức.'))
      ]},
      {prompt:b(r('Let $s=5$, $\\lambda=0.05$, and $\\kappa=0.25$. Compute the numerical RE-based prediction and l1 bounds, retaining the supplied constants.'),r('Cho $s=5$, $\\lambda=0.05$ và $\\kappa=0.25$. Tính số các chặn dự đoán và l1 dựa trên RE, giữ nguyên hằng số đã cho.')),solution:[
        b(r('Here $\\kappa^2=0.0625$ and $\\lambda^2=0.0025$.'),r('Ở đây $\\kappa^2=0.0625$ và $\\lambda^2=0.0025$.')),
        b(r('$Q\\le9(0.0025)(5)/0.0625=1.8$.'),r('$Q\\le9(0.0025)(5)/0.0625=1.8$.')),
        b(r('$\\|\\Delta\\|_1\\le12(0.05)(5)/0.0625=48$.'),r('$\\|\\Delta\\|_1\\le12(0.05)(5)/0.0625=48$.'))
      ]}
    ],
    reviewNote:'The restricted eigenvalue is invoked only for Δ in the lasso cone and is stated as sqrt(Q)≥κ||Δ_S||₂. The constants 9 and 12 depend on the exact one-half loss normalization in the basic inequality.',
    sourceIds:['p-cmu36705']
  },
  'm2-w056-e3':{
    title:b('Compute lasso soft thresholding on an orthogonal design','Tính ngưỡng mềm lasso với thiết kế trực giao'),
    application:b(r('With orthonormalized columns, each coordinate separates, and the l1 penalty removes coefficients whose score magnitude does not exceed the threshold.'),r('Với các cột đã chuẩn hóa trực giao, mỗi tọa độ tách riêng và penalty l1 loại hệ số có độ lớn score không vượt ngưỡng.')),
    formula:b(r('For $X^\\top X/n=I$ and objective $\\|y-X\\beta\\|_2^2/(2n)+\\lambda\\|\\beta\\|_1$, set $z=X^\\top y/n$. Then $\\hat\\beta_j=\\operatorname{sign}(z_j)(|z_j|-\\lambda)_+$, where $(a)_+=\\max(a,0)$. For $z=(2.7,0.4,-1.2)$ and $\\lambda=0.5$, $\\hat\\beta=(2.2,0,-0.7)$ and selected support is $\\{1,3\\}$.'),r('Với $X^\\top X/n=I$ và mục tiêu $\\|y-X\\beta\\|_2^2/(2n)+\\lambda\\|\\beta\\|_1$, đặt $z=X^\\top y/n$. Khi đó $\\hat\\beta_j=\\operatorname{sign}(z_j)(|z_j|-\\lambda)_+$, trong đó $(a)_+=\\max(a,0)$. Với $z=(2.7,0.4,-1.2)$ và $\\lambda=0.5$, $\\hat\\beta=(2.2,0,-0.7)$ và giá đỡ được chọn là $\\{1,3\\}$.')),
    steps:[
      b(r('Expand the squared loss and use $X^\\top X/n=I$; after dropping constants, the objective is the sum over j of $\\tfrac12(\\beta_j-z_j)^2+\\lambda|\\beta_j|$.'),r('Khai triển mất mát bình phương và dùng $X^\\top X/n=I$; bỏ hằng số, mục tiêu là tổng theo j của $\\tfrac12(\\beta_j-z_j)^2+\\lambda|\\beta_j|$.')),
      b(r('For a positive candidate coefficient, the derivative condition is $\\beta_j-z_j+\\lambda=0$; for a negative coefficient it is $\\beta_j-z_j-\\lambda=0$.'),r('Với hệ số ứng viên dương, điều kiện đạo hàm là $\\beta_j-z_j+\\lambda=0$; với hệ số âm là $\\beta_j-z_j-\\lambda=0$.')),
      b(r('If $|z_j|\\le\\lambda$, zero satisfies the subgradient condition $0\\in-z_j+\\lambda[-1,1]$; combining cases yields soft thresholding.'),r('Nếu $|z_j|\\le\\lambda$, số không thỏa điều kiện dưới vi phân $0\\in-z_j+\\lambda[-1,1]$; gộp các trường hợp cho ngưỡng mềm.')),
      b(r('Apply the map: $2.7\\mapsto2.2$, $0.4\\mapsto0$, and $-1.2\\mapsto-0.7$. Only coordinates 1 and 3 are nonzero.'),r('Áp dụng ánh xạ: $2.7\\mapsto2.2$, $0.4\\mapsto0$ và $-1.2\\mapsto-0.7$. Chỉ tọa độ 1 và 3 khác không.'))
    ],
    primarySolution:[
      b(r('Under orthogonality the lasso objective separates into scalar problems with score $z_j=X_j^\\top y/n$.'),r('Dưới trực giao, mục tiêu lasso tách thành các bài toán vô hướng với score $z_j=X_j^\\top y/n$.')),
      b(r('The minimizer of $\\tfrac12(\\beta_j-z_j)^2+\\lambda|\\beta_j|$ is zero when $|z_j|\\le\\lambda$, and otherwise subtracts λ from the magnitude while preserving sign.'),r('Điểm cực tiểu của $\\tfrac12(\\beta_j-z_j)^2+\\lambda|\\beta_j|$ bằng không khi $|z_j|\\le\\lambda$; nếu không thì trừ λ khỏi độ lớn và giữ dấu.')),
      b(r('Thus the three coordinates are $\\operatorname{sign}(z_j)(|z_j|-0.5)_+=(2.2,0,-0.7)$.'),r('Vì vậy ba tọa độ là $\\operatorname{sign}(z_j)(|z_j|-0.5)_+=(2.2,0,-0.7)$.')),
      b(r('The nonzero indices are 1 and 3, so the selected support is $\\{1,3\\}$.'),r('Các chỉ số khác không là 1 và 3, nên giá đỡ được chọn là $\\{1,3\\}$.'))
    ],
    companions:[
      {prompt:b(r('For an orthogonal design, let $z=(1.1,-0.2,3)$ and $\\lambda=0.4$. Compute every lasso coefficient and the selected support.'),r('Với thiết kế trực giao, cho $z=(1.1,-0.2,3)$ và $\\lambda=0.4$. Tính mọi hệ số lasso và giá đỡ được chọn.')),solution:[
        b(r('The first score exceeds threshold by $1.1-0.4=0.7$, so coefficient one is $0.7$.'),r('Score thứ nhất vượt ngưỡng $1.1-0.4=0.7$, nên hệ số một là $0.7$.')),
        b(r('The second magnitude $0.2$ is below 0.4, so coefficient two is zero.'),r('Độ lớn score thứ hai $0.2$ thấp hơn 0.4, nên hệ số hai bằng không.')),
        b(r('The third coefficient is $3-0.4=2.6$. Thus $\\hat\\beta=(0.7,0,2.6)$ and support is $\\{1,3\\}$.'),r('Hệ số thứ ba là $3-0.4=2.6$. Vậy $\\hat\\beta=(0.7,0,2.6)$ và giá đỡ là $\\{1,3\\}$.'))
      ]},
      {prompt:b(r('An orthogonal regression has score $z=(-2,0.6,0.3)$ and penalty $\\lambda=0.5$. Apply soft thresholding, including signs, and identify selected variables.'),r('Hồi quy trực giao có score $z=(-2,0.6,0.3)$ và penalty $\\lambda=0.5$. Áp dụng ngưỡng mềm, kể cả dấu, và xác định biến được chọn.')),solution:[
        b(r('For $z_1=-2$, preserve the negative sign and reduce magnitude by 0.5, giving $-1.5$.'),r('Với $z_1=-2$, giữ dấu âm và giảm độ lớn 0.5, được $-1.5$.')),
        b(r('$z_2=0.6$ exceeds the threshold by 0.1, while $|z_3|=0.3$ is below it; coefficients are 0.1 and 0.'),r('$z_2=0.6$ vượt ngưỡng 0.1, còn $|z_3|=0.3$ thấp hơn ngưỡng; hai hệ số là 0.1 và 0.')),
        b(r('The estimate is $(-1.5,0.1,0)$ and selected support is $\\{1,2\\}$.'),r('Ước lượng là $(-1.5,0.1,0)$ và giá đỡ chọn là $\\{1,2\\}$.'))
      ]},
      {prompt:b(r('Take $z=(0.25,-0.75,1.6)$ with $\\lambda=0.25$ in an orthogonal regression. Compute the thresholded vector and explain what happens at a score exactly equal to λ.'),r('Lấy $z=(0.25,-0.75,1.6)$ với $\\lambda=0.25$ trong hồi quy trực giao. Tính vector sau ngưỡng và giải thích điều gì xảy ra khi score đúng bằng λ.')),solution:[
        b(r('The first coordinate has $|z_1|=\\lambda$, so its thresholded value is zero by $(|z_1|-\\lambda)_+=0$.'),r('Tọa độ đầu có $|z_1|=\\lambda$, nên giá trị sau ngưỡng bằng không do $(|z_1|-\\lambda)_+=0$.')),
        b(r('The second becomes $-\\,(0.75-0.25)=-0.5$ and the third becomes $1.6-0.25=1.35$.'),r('Tọa độ hai thành $-\\,(0.75-0.25)=-0.5$ và tọa độ ba thành $1.6-0.25=1.35$.')),
        b(r('Thus $\\hat\\beta=(0,-0.5,1.35)$ and selected support is $\\{2,3\\}$; equality at the threshold is excluded from support.'),r('Vậy $\\hat\\beta=(0,-0.5,1.35)$ và giá đỡ chọn là $\\{2,3\\}$; score bằng ngưỡng không được chọn.'))
      ]}
    ],
    reviewNote:'The stated threshold assumes the loss factor 1/(2n) and design normalization XᵀX/n=I. If the loss omits the one-half or the columns are not normalized, the threshold changes.',
    sourceIds:['p-cmu36705']
  },
  'm2-w056-e4':{
    title:b('Show coefficient nonidentification under collinearity','Chỉ ra hệ số không nhận dạng khi đồng tuyến'),
    application:b(r('Perfectly duplicated design columns make different coefficient labels produce exactly the same fitted values, so data cannot reveal which coefficient representation is true.'),r('Các cột thiết kế trùng hoàn toàn khiến nhãn hệ số khác nhau tạo cùng giá trị khớp, nên dữ liệu không thể cho biết biểu diễn hệ số nào là thật.')),
    formula:b(r('If $X_1=X_2$, then $X(1,0)=X_1=X_2=X(0,1)$. Under $y=X\\beta^*+\\varepsilon$ with $\\beta^*=(1,0)$, coefficient vectors $(1,0)$ and $(0,1)$ have identical mean fits and identical likelihood for every y; without an identifying restriction the labeled coefficients are not separately identifiable.'),r('Nếu $X_1=X_2$, thì $X(1,0)=X_1=X_2=X(0,1)$. Trong mô hình $y=X\\beta^*+\\varepsilon$ với $\\beta^*=(1,0)$, hai vector hệ số $(1,0)$ và $(0,1)$ có khớp trung bình và likelihood giống nhau với mọi y; thiếu ràng buộc nhận dạng thì không thể nhận dạng riêng các nhãn hệ số.')),
    steps:[
      b(r('The linear predictor is $X_1\\beta_1+X_2\\beta_2=X_1(\\beta_1+\\beta_2)$ when the columns are identical.'),r('Bộ dự đoán tuyến tính là $X_1\\beta_1+X_2\\beta_2=X_1(\\beta_1+\\beta_2)$ khi hai cột giống nhau.')),
      b(r('Thus only the sum $\\beta_1+\\beta_2$ affects fitted values; redistributing that sum leaves $X\\beta$ unchanged.'),r('Vì vậy chỉ tổng $\\beta_1+\\beta_2$ ảnh hưởng giá trị khớp; phân chia lại tổng đó không đổi $X\\beta$.')),
      b(r('For true vector $(1,0)$, alternative $(0,1)$ preserves the sum and hence the entire conditional data law.'),r('Với vector thật $(1,0)$, phương án $(0,1)$ giữ nguyên tổng nên giữ toàn bộ luật dữ liệu có điều kiện.')),
      b(r('No statistic computed from identical data laws can consistently decide which label generated the signal; an extra constraint or different design is needed.'),r('Không thống kê nào từ hai luật dữ liệu giống nhau có thể nhất quán quyết định nhãn nào sinh tín hiệu; cần thêm ràng buộc hoặc thiết kế khác.'))
    ],
    primarySolution:[
      b(r('Since $X_1=X_2$, $X(1,0)=X_1$ and $X(0,1)=X_2$.'),r('Vì $X_1=X_2$, $X(1,0)=X_1$ và $X(0,1)=X_2$.')),
      b(r('These fitted vectors coincide exactly, so both coefficient vectors generate the same mean response.'),r('Các vector khớp trùng chính xác, nên cả hai vector hệ số sinh cùng phản hồi trung bình.')),
      b(r('With the same noise law they induce the same distribution for all observed data; likelihood cannot distinguish the coefficient labels.'),r('Với cùng luật nhiễu, chúng tạo cùng phân phối cho toàn bộ dữ liệu quan sát; likelihood không phân biệt được nhãn hệ số.')),
      b(r('Therefore coefficient identification requires added structure such as a full-rank design, constraints, or a substantive convention; predictions may still be identifiable.'),r('Do đó nhận dạng hệ số cần cấu trúc bổ sung như thiết kế đủ hạng, ràng buộc hoặc quy ước chuyên môn; dự đoán vẫn có thể nhận dạng được.'))
    ],
    companions:[
      {prompt:b(r('A design has two identical columns $X_1=X_2=(1,2,0)^\\top$. Compare fits and l1 penalties for coefficients $(3,0)$ and $(0,3)$; can observations select the true coordinate label?'),r('Thiết kế có hai cột giống nhau $X_1=X_2=(1,2,0)^\\top$. So sánh giá trị khớp và penalty l1 của hệ số $(3,0)$ và $(0,3)$; quan sát có chọn được nhãn tọa độ thật không?')),solution:[
        b(r('Both predictors equal $3X_1=(3,6,0)^\\top$, so fitted values match exactly.'),r('Cả hai bộ dự đoán bằng $3X_1=(3,6,0)^\\top$, nên giá trị khớp trùng chính xác.')),
        b(r('Both coefficient vectors have l1 norm 3, so the lasso penalty also ties them.'),r('Cả hai vector hệ số có chuẩn l1 bằng 3, nên penalty lasso cũng hòa nhau.')),
        b(r('Their likelihood and penalized objectives coincide for any fixed data y; the observations cannot identify which coordinate label is true.'),r('Likelihood và mục tiêu có phạt trùng nhau với mọi dữ liệu y cố định; quan sát không thể nhận dạng nhãn tọa độ nào là thật.'))
      ]},
      {prompt:b(r('Three columns of a study matrix are all equal to the same vector v. Show that coefficient vectors $(2,0,0)$ and $(1,1,0)$ give the same fit and the same l1 penalty, despite different coordinate allocations.'),r('Ba cột của ma trận nghiên cứu đều bằng cùng vector v. Chứng minh các vector hệ số $(2,0,0)$ và $(1,1,0)$ cho cùng giá trị khớp và cùng penalty l1 dù phân bổ tọa độ khác nhau.')),solution:[
        b(r('The first fitted vector is $2v$.'),r('Vector khớp thứ nhất là $2v$.')),
        b(r('The second is $v+v=2v$, so the fits coincide.'),r('Vector thứ hai là $v+v=2v$, nên các giá trị khớp trùng nhau.')),
        b(r('Both l1 norms equal 2; hence neither squared error fit nor l1 penalty distinguishes these representations.'),r('Cả hai chuẩn l1 đều bằng 2; vì vậy mất mát bình phương lẫn penalty l1 không phân biệt được hai biểu diễn này.'))
      ]},
      {prompt:b(r('In a two-column design $X_1=X_2$, the true coefficients are $(2,0)$ but a fitted solution is $(0.5,1.5)$. Compare the linear predictors and state what can be identified from data.'),r('Trong thiết kế hai cột $X_1=X_2$, hệ số thật là $(2,0)$ nhưng nghiệm khớp là $(0.5,1.5)$. So sánh bộ dự đoán tuyến tính và nêu điều gì có thể nhận dạng từ dữ liệu.')),solution:[
        b(r('Both coefficient sums equal 2.'),r('Tổng hai hệ số ở cả hai trường hợp bằng 2.')),
        b(r('Each fitted predictor is therefore $2X_1$, so predictions agree for every design row.'),r('Vì vậy mỗi bộ dự đoán là $2X_1$, nên dự đoán khớp trên mọi hàng thiết kế.')),
        b(r('The data identify the combined effect $\\beta_1+\\beta_2$ in this direction, not the separate coordinate contributions.'),r('Dữ liệu nhận dạng tác động tổng hợp $\\beta_1+\\beta_2$ theo hướng này, không nhận dạng riêng đóng góp từng tọa độ.'))
      ]}
    ],
    reviewNote:'The example establishes nonidentification of coefficients, not failure of prediction. Lasso can impose a deterministic tie-breaking convention but that does not recover which duplicate coordinate was truly active.',
    sourceIds:['p-cmu36705']
  },
  'm2-w056-e5':{
    title:b('Translate a score concentration rate into prediction error','Chuyển tốc độ tập trung score thành sai số dự đoán'),
    application:b(r('A high-probability score bound selects the penalty scale; sparsity and restricted eigenvalues then convert it to a prediction rate.'),r('Chặn score xác suất cao chọn thang penalty; độ thưa và eigenvalue hạn chế chuyển nó thành tốc độ dự đoán.')),
    formula:b(r('Suppose with probability at least $1-\\eta$, $\\|X^\\top\\varepsilon/n\\|_\\infty\\le c\\sigma\\sqrt{(\\log p)/n}$. Choose $\\lambda=2c\\sigma\\sqrt{(\\log p)/n}$, assume the basic inequality and an RE constant $\\kappa\\ge\\kappa_0>0$ on the lasso cone, and let $|S|=s$. Then on that event $Q\\le9\\lambda^2s/\\kappa^2\\le36c^2\\sigma^2s\\log p/(\\kappa_0^2n)=O(\\sigma^2s\\log p/n)$.'),r('Giả sử với xác suất ít nhất $1-\\eta$, $\\|X^\\top\\varepsilon/n\\|_\\infty\\le c\\sigma\\sqrt{(\\log p)/n}$. Chọn $\\lambda=2c\\sigma\\sqrt{(\\log p)/n}$, giả sử bất đẳng thức cơ bản và hằng số RE $\\kappa\\ge\\kappa_0>0$ trên hình nón lasso, với $|S|=s$. Khi đó trên biến cố ấy $Q\\le9\\lambda^2s/\\kappa^2\\le36c^2\\sigma^2s\\log p/(\\kappa_0^2n)=O(\\sigma^2s\\log p/n)$.')),
    steps:[
      b(r('The supplied event gives $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$ when $\\lambda=2c\\sigma\\sqrt{(\\log p)/n}$.'),r('Biến cố đã cho cho $\\lambda\\ge2\\|X^\\top\\varepsilon/n\\|_\\infty$ khi $\\lambda=2c\\sigma\\sqrt{(\\log p)/n}$.')),
      b(r('Apply the lasso prediction theorem on that event: $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Áp dụng định lý dự đoán lasso trên biến cố đó: $Q\\le9\\lambda^2s/\\kappa^2$.')),
      b(r('Substitute $\\lambda^2=4c^2\\sigma^2(\\log p)/n$ and use $\\kappa\\ge\\kappa_0$ to bound $1/\\kappa^2\\le1/\\kappa_0^2$.'),r('Thay $\\lambda^2=4c^2\\sigma^2(\\log p)/n$ và dùng $\\kappa\\ge\\kappa_0$ để chặn $1/\\kappa^2\\le1/\\kappa_0^2$.')),
      b(r('This yields $Q\\le36c^2\\sigma^2s\\log p/(\\kappa_0^2n)$ with probability at least $1-\\eta$.'),r('Suy ra $Q\\le36c^2\\sigma^2s\\log p/(\\kappa_0^2n)$ với xác suất ít nhất $1-\\eta$.'))
    ],
    primarySolution:[
      b(r('Set $\\lambda=2c\\sigma\\sqrt{(\\log p)/n}$ so the stated score event implies the lasso noise condition.'),r('Đặt $\\lambda=2c\\sigma\\sqrt{(\\log p)/n}$ để biến cố score đã cho kéo theo điều kiện nhiễu lasso.')),
      b(r('On this event the RE prediction bound is $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Trên biến cố này, chặn dự đoán RE là $Q\\le9\\lambda^2s/\\kappa^2$.')),
      b(r('Substitution gives $Q\\le36c^2\\sigma^2s\\log p/(\\kappa^2n)$; if κ is bounded below, constants absorb $c$ and $1/\\kappa_0^2$.'),r('Thay vào được $Q\\le36c^2\\sigma^2s\\log p/(\\kappa^2n)$; nếu κ bị chặn dưới, các hằng số hấp thụ $c$ và $1/\\kappa_0^2$.')),
      b(r('Thus $Q=O(\\sigma^2s\\log p/n)$ with the same high probability, conditional on the concentration and RE assumptions.'),r('Do đó $Q=O(\\sigma^2s\\log p/n)$ với cùng xác suất cao, khi có các giả thiết tập trung và RE.'))
    ],
    companions:[
      {prompt:b(r('A score bound has $c=2$, $\\sigma=1$, $p=256$, and $n=1024$. Find the prescribed penalty and the prediction bound for $s=8$, $\\kappa=0.8$.'),r('Chặn score có $c=2$, $\\sigma=1$, $p=256$ và $n=1024$. Tìm penalty quy định và chặn dự đoán khi $s=8$, $\\kappa=0.8$.')),solution:[
        b(r('The prescribed penalty is $\\lambda=4\\sqrt{\\log(256)/1024}\\approx4\\sqrt{5.5452/1024}\\approx0.2944$.'),r('Penalty quy định là $\\lambda=4\\sqrt{\\log(256)/1024}\\approx4\\sqrt{5.5452/1024}\\approx0.2944$.')),
        b(r('The RE theorem gives $Q\\le9\\lambda^2s/\\kappa^2$.'),r('Định lý RE cho $Q\\le9\\lambda^2s/\\kappa^2$.')),
        b(r('Using the exact expression, $Q\\le9(16\\log256/1024)(8)/(0.64)\\approx9.75$.'),r('Dùng biểu thức chính xác, $Q\\le9(16\\log256/1024)(8)/(0.64)\\approx9.75$.'))
      ]},
      {prompt:b(r('Take $c=1$, $\\sigma=1.5$, $p=100$, and $n=10000$. Compute the penalty threshold and prediction upper bound for $s=5$, $\\kappa=1$.'),r('Lấy $c=1$, $\\sigma=1.5$, $p=100$ và $n=10000$. Tính ngưỡng penalty và cận trên dự đoán với $s=5$, $\\kappa=1$.')),solution:[
        b(r('The penalty is $\\lambda=3\\sqrt{\\log(100)/10000}\\approx3\\sqrt{4.6052/10000}\\approx0.0644$.'),r('Penalty là $\\lambda=3\\sqrt{\\log(100)/10000}\\approx3\\sqrt{4.6052/10000}\\approx0.0644$.')),
        b(r('Then $Q\\le9(\\lambda^2)(5)$.'),r('Khi đó $Q\\le9(\\lambda^2)(5)$.')),
        b(r('Using $\\lambda^2=9\\log(100)/10000$ gives $Q\\le405\\log(100)/10000\\approx0.1865$.'),r('Dùng $\\lambda^2=9\\log(100)/10000$ được $Q\\le405\\log(100)/10000\\approx0.1865$.'))
      ]},
      {prompt:b(r('For $c=1.2$, $\\sigma=0.5$, $p=2048$, and $n=8192$, use $s=12$ and $\\kappa=0.75$ to find the penalty and prediction bound in exact logarithmic form, then approximate them.'),r('Với $c=1.2$, $\\sigma=0.5$, $p=2048$ và $n=8192$, dùng $s=12$, $\\kappa=0.75$ để tìm penalty và chặn dự đoán dạng log chính xác rồi tính gần đúng.')),solution:[
        b(r('Since $2c\\sigma=1.2$, the penalty is $\\lambda=1.2\\sqrt{\\log(2048)/8192}\\approx1.2\\sqrt{7.6246/8192}\\approx0.0366$.'),r('Vì $2c\\sigma=1.2$, penalty là $\\lambda=1.2\\sqrt{\\log(2048)/8192}\\approx1.2\\sqrt{7.6246/8192}\\approx0.0366$.')),
        b(r('The bound is $Q\\le9(1.44\\log(2048)/8192)(12)/(0.75^2)$.'),r('Cận là $Q\\le9(1.44\\log(2048)/8192)(12)/(0.75^2)$.')),
        b(r('This simplifies to $Q\\le276.48\\log(2048)/8192\\approx0.2573$.'),r('Rút gọn được $Q\\le276.48\\log(2048)/8192\\approx0.2573$.'))
      ]}
    ],
    reviewNote:'The rate is conditional on the high-probability score event and an RE condition on the cone. The displayed constant is 36c²/κ₀²; big-O suppresses these fixed constants but not the sparsity, dimension logarithm, noise scale, or sample size.',
    sourceIds:['p-cmu36705']
  },
  'm2-w057-e1':{
    title:b('Derive the Beta–Bernoulli posterior','Suy hậu nghiệm Beta–Bernoulli'),
    application:b(r('Conjugacy lets prior success and failure pseudo-counts update by adding the observed Bernoulli counts.'),r('Tính liên hợp cho phép cập nhật số đếm giả định thành công và thất bại của prior bằng cách cộng số đếm Bernoulli quan sát.')),
    formula:b(r('Let $p\\sim\\operatorname{Beta}(a,b)$ independently of iid $X_i\\mid p\\sim\\operatorname{Bernoulli}(p)$, with $a,b>0$, $S=\\sum_{i=1}^nX_i$, and $0\\le S\\le n$. Then $\\pi(p\\mid X)\\propto p^{a+S-1}(1-p)^{b+n-S-1}$ and $p\\mid X\\sim\\operatorname{Beta}(a+S,b+n-S)$.'),r('Cho $p\\sim\\operatorname{Beta}(a,b)$ độc lập với $X_i\\mid p\\sim\\operatorname{Bernoulli}(p)$ iid, $a,b>0$, $S=\\sum_{i=1}^nX_i$ và $0\\le S\\le n$. Khi đó $\\pi(p\\mid X)\\propto p^{a+S-1}(1-p)^{b+n-S-1}$ và $p\\mid X\\sim\\operatorname{Beta}(a+S,b+n-S)$.')),
    steps:[
      b(r('The Beta prior density kernel is $p^{a-1}(1-p)^{b-1}$ for $0<p<1$.'),r('Kernel mật độ prior Beta là $p^{a-1}(1-p)^{b-1}$ với $0<p<1$.')),
      b(r('For Bernoulli data with S ones and n−S zeros, the likelihood kernel is $p^S(1-p)^{n-S}$; the binomial coefficient is constant in p.'),r('Với dữ liệu Bernoulli có S số một và n−S số không, kernel likelihood là $p^S(1-p)^{n-S}$; hệ số tổ hợp không phụ thuộc p.')),
      b(r('Multiplying kernels adds exponents, producing $p^{a+S-1}(1-p)^{b+n-S-1}$.'),r('Nhân các kernel làm cộng số mũ, được $p^{a+S-1}(1-p)^{b+n-S-1}$.')),
      b(r('This is the Beta density kernel with positive parameters $a+S$ and $b+n-S$, so normalization yields the stated posterior family.'),r('Đây là kernel mật độ Beta với tham số dương $a+S$ và $b+n-S$, nên chuẩn hóa cho họ hậu nghiệm đã nêu.'))
    ],
    primarySolution:[
      b(r('The prior kernel is $p^{a-1}(1-p)^{b-1}$, and the iid Bernoulli likelihood is proportional to $p^S(1-p)^{n-S}$.'),r('Kernel prior là $p^{a-1}(1-p)^{b-1}$, còn likelihood Bernoulli iid tỷ lệ với $p^S(1-p)^{n-S}$.')),
      b(r('Multiplication gives posterior kernel $p^{a+S-1}(1-p)^{b+n-S-1}$.'),r('Nhân vào cho kernel hậu nghiệm $p^{a+S-1}(1-p)^{b+n-S-1}$.')),
      b(r('Recognize the normalized Beta family: $p\\mid X\\sim\\operatorname{Beta}(a+S,b+n-S)$.'),r('Nhận ra họ Beta chuẩn hóa: $p\\mid X\\sim\\operatorname{Beta}(a+S,b+n-S)$.')),
      b(r('The update adds successes to a and failures to b; this assumes the Bernoulli observations are conditionally iid given p.'),r('Cập nhật cộng số thành công vào a và số thất bại vào b; điều này giả sử các quan sát Bernoulli độc lập đồng phân phối có điều kiện theo p.'))
    ],
    companions:[
      {prompt:b(r('A reliability model uses prior $p\\sim\\operatorname{Beta}(3,4)$. Out of 12 independent components, 8 work. Find the posterior parameters and check that they equal prior counts plus observed counts.'),r('Mô hình độ tin cậy dùng prior $p\\sim\\operatorname{Beta}(3,4)$. Trong 12 linh kiện độc lập, có 8 chiếc hoạt động. Tìm tham số hậu nghiệm và kiểm tra chúng bằng số đếm prior cộng số đếm quan sát.')),solution:[
        b(r('There are S=8 successes and $n-S=12-8=4$ failures.'),r('Có S=8 lần thành công và $n-S=12-8=4$ lần thất bại.')),
        b(r('Add counts to the prior parameters: $a+S=3+8=11$ and $b+n-S=4+4=8$.'),r('Cộng số đếm vào tham số prior: $a+S=3+8=11$ và $b+n-S=4+4=8$.')),
        b(r('Thus the posterior is $\\operatorname{Beta}(11,8)$.'),r('Vì vậy hậu nghiệm là $\\operatorname{Beta}(11,8)$.'))
      ]},
      {prompt:b(r('A coin model has prior $p\\sim\\operatorname{Beta}(1/2,1/2)$. Five tosses are all tails. Derive the posterior and verify its parameters remain positive.'),r('Mô hình đồng xu có prior $p\\sim\\operatorname{Beta}(1/2,1/2)$. Cả năm lần tung đều sấp. Suy hậu nghiệm và kiểm tra tham số vẫn dương.')),solution:[
        b(r('The success count is $S=0$ and failure count is $5$.'),r('Số thành công là $S=0$ và số thất bại là $5$.')),
        b(r('The updated shape parameters are $1/2+0=1/2$ and $1/2+5=11/2$.'),r('Hai tham số hình dạng cập nhật là $1/2+0=1/2$ và $1/2+5=11/2$.')),
        b(r('Both are positive, so the posterior is $\\operatorname{Beta}(1/2,11/2)$.'),r('Cả hai đều dương, nên hậu nghiệm là $\\operatorname{Beta}(1/2,11/2)$.'))
      ]},
      {prompt:b(r('A prior $\\operatorname{Beta}(2,5)$ is used for a conversion probability. In 20 independent visits, 13 convert. Find the posterior law and label its success and failure shapes.'),r('Dùng prior $\\operatorname{Beta}(2,5)$ cho xác suất chuyển đổi. Trong 20 lượt truy cập độc lập, có 13 lượt chuyển đổi. Tìm luật hậu nghiệm và ghi rõ tham số số thành công cùng thất bại.')),solution:[
        b(r('There are 13 successes and $20-13=7$ failures.'),r('Có 13 thành công và $20-13=7$ thất bại.')),
        b(r('The success shape is $2+13=15$ and the failure shape is $5+7=12$.'),r('Tham số hình dạng thành công là $2+13=15$ và tham số thất bại là $5+7=12$.')),
        b(r('The posterior is $p\\mid X\\sim\\operatorname{Beta}(15,12)$.'),r('Hậu nghiệm là $p\\mid X\\sim\\operatorname{Beta}(15,12)$.'))
      ]}
    ],
    reviewNote:'The binomial coefficient cancels in posterior normalization. Positivity of prior shapes a,b ensures a proper prior; the updated shapes remain positive for all valid counts.',
    sourceIds:['p-cmu36705']
  },
  'm2-w057-e2':{
    title:b('Compute a Beta posterior and predictive probability','Tính hậu nghiệm Beta và xác suất dự đoán'),
    application:b(r('The posterior mean is both a compact summary of updated uncertainty and the predictive success probability for one exchangeable next Bernoulli trial.'),r('Trung bình hậu nghiệm vừa tóm tắt bất định đã cập nhật vừa là xác suất thành công dự đoán cho một lần thử Bernoulli tiếp theo có thể trao đổi.')),
    formula:b(r('With prior $\\operatorname{Beta}(a,b)$ and iid Bernoulli data having S successes in n trials, posterior is $\\operatorname{Beta}(a+S,b+n-S)$ and $E[p\\mid X]=(a+S)/(a+b+n)$. For a conditionally iid next trial, $P(X_{n+1}=1\\mid X)=E[p\\mid X]$.'),r('Với prior $\\operatorname{Beta}(a,b)$ và dữ liệu Bernoulli iid có S thành công trong n lần thử, hậu nghiệm là $\\operatorname{Beta}(a+S,b+n-S)$ và $E[p\\mid X]=(a+S)/(a+b+n)$. Với lần thử tiếp theo iid có điều kiện, $P(X_{n+1}=1\\mid X)=E[p\\mid X]$.')),
    steps:[
      b(r('Add the observed counts to the Beta shapes: the posterior parameters are $a+S$ and $b+n-S$.'),r('Cộng số đếm quan sát vào tham số Beta: tham số hậu nghiệm là $a+S$ và $b+n-S$.')),
      b(r('A Beta(A,B) variable has mean $A/(A+B)$, so substitute the updated shapes.'),r('Biến Beta(A,B) có trung bình $A/(A+B)$, nên thay các tham số đã cập nhật.')),
      b(r('For the next Bernoulli outcome, condition first on p: its success probability is p. Averaging over the posterior gives $E[p\\mid X]$.'),r('Với kết quả Bernoulli kế tiếp, trước hết điều kiện theo p thì xác suất thành công là p. Lấy trung bình theo hậu nghiệm cho $E[p\\mid X]$.')),
      b(r('With prior Beta(2,2), S=7, and n=10, posterior parameters are 9 and 5, so mean and next-trial success probability both equal $9/14$.'),r('Với prior Beta(2,2), S=7 và n=10, tham số hậu nghiệm là 9 và 5, nên trung bình và xác suất thành công lần kế tiếp đều bằng $9/14$.'))
    ],
    primarySolution:[
      b(r('The data contain 7 successes and $10-7=3$ failures.'),r('Dữ liệu có 7 lần thành công và $10-7=3$ lần thất bại.')),
      b(r('Updating the Beta(2,2) prior gives $p\\mid X\\sim\\operatorname{Beta}(2+7,2+3)=\\operatorname{Beta}(9,5)$.'),r('Cập nhật prior Beta(2,2) cho $p\\mid X\\sim\\operatorname{Beta}(2+7,2+3)=\\operatorname{Beta}(9,5)$.')),
      b(r('Its mean is $9/(9+5)=9/14$.'),r('Trung bình là $9/(9+5)=9/14$.')),
      b(r('Conditional on p the next independent trial succeeds with probability p; integrating over the posterior gives predictive probability $9/14$.'),r('Khi điều kiện theo p, lần thử độc lập kế tiếp thành công với xác suất p; tích phân theo hậu nghiệm cho xác suất dự đoán $9/14$.'))
    ],
    companions:[
      {prompt:b(r('A quality-control prior is $\\operatorname{Beta}(1,3)$. Three of four tested devices pass. Find the posterior distribution, posterior mean, and next-device pass probability.'),r('Prior kiểm soát chất lượng là $\\operatorname{Beta}(1,3)$. Có ba trong bốn thiết bị thử đạt. Tìm phân phối hậu nghiệm, trung bình hậu nghiệm và xác suất thiết bị kế tiếp đạt.')),solution:[
        b(r('The counts are 3 passes and 1 failure, so posterior is $\\operatorname{Beta}(1+3,3+1)=\\operatorname{Beta}(4,4)$.'),r('Số đếm là 3 đạt và 1 lỗi, nên hậu nghiệm là $\\operatorname{Beta}(1+3,3+1)=\\operatorname{Beta}(4,4)$.')),
        b(r('The posterior mean is $4/(4+4)=1/2$.'),r('Trung bình hậu nghiệm là $4/(4+4)=1/2$.')),
        b(r('The next conditionally iid device passes with predictive probability equal to this mean, $1/2$.'),r('Thiết bị iid có điều kiện kế tiếp đạt với xác suất dự đoán bằng trung bình này, $1/2$.'))
      ]},
      {prompt:b(r('A prior $\\operatorname{Beta}(4,2)$ models click probability. In six trials, two clicks occur. Compute the posterior mean and predictive probability of a seventh click.'),r('Prior $\\operatorname{Beta}(4,2)$ mô hình hóa xác suất nhấp. Trong sáu lần thử có hai lần nhấp. Tính trung bình hậu nghiệm và xác suất dự đoán lần nhấp thứ bảy.')),solution:[
        b(r('There are two successes and four failures, giving posterior $\\operatorname{Beta}(6,6)$.'),r('Có hai thành công và bốn thất bại, cho hậu nghiệm $\\operatorname{Beta}(6,6)$.')),
        b(r('Its mean is $6/(6+6)=1/2$.'),r('Trung bình là $6/(6+6)=1/2$.')),
        b(r('The posterior predictive probability of a seventh click is $1/2$ by conditioning on p and averaging.'),r('Xác suất hậu nghiệm dự đoán lần nhấp thứ bảy là $1/2$ khi điều kiện theo p rồi lấy trung bình.'))
      ]},
      {prompt:b(r('A prior $\\operatorname{Beta}(2,5)$ is updated by 8 independent customers, 6 of whom purchase. Find the updated law, posterior expected purchase rate, and next-customer prediction.'),r('Prior $\\operatorname{Beta}(2,5)$ được cập nhật bởi 8 khách độc lập, trong đó 6 người mua. Tìm luật cập nhật, tỷ lệ mua kỳ vọng hậu nghiệm và dự đoán khách kế tiếp.')),solution:[
        b(r('The failure count is $8-6=2$, so posterior parameters are $2+6=8$ and $5+2=7$.'),r('Số thất bại là $8-6=2$, nên tham số hậu nghiệm là $2+6=8$ và $5+2=7$.')),
        b(r('Thus $p\\mid X\\sim\\operatorname{Beta}(8,7)$ and its mean is $8/15$.'),r('Vậy $p\\mid X\\sim\\operatorname{Beta}(8,7)$ và trung bình bằng $8/15$.')),
        b(r('A next conditionally iid customer purchases with posterior predictive probability $8/15$.'),r('Khách iid có điều kiện kế tiếp mua với xác suất dự đoán hậu nghiệm $8/15$.'))
      ]}
    ],
    reviewNote:'The predictive equality uses the same latent p and conditional iid sampling for the next Bernoulli outcome. Posterior probability about p and predictive probability for a future observation are distinct events, although their numerical values agree here.',
    sourceIds:['p-cmu36705']
  },
  'm2-w057-e3':{
    title:b('Rewrite the posterior mean as weighted shrinkage','Viết lại trung bình hậu nghiệm thành co rút có trọng số'),
    application:b(r('The posterior mean blends the prior mean and observed proportion, with prior weight shrinking as the sample size grows.'),r('Trung bình hậu nghiệm pha trộn trung bình prior và tỷ lệ quan sát, với trọng số prior giảm khi cỡ mẫu tăng.')),
    formula:b(r('For $a,b>0$, $n>0$, $0\\le S\\le n$, $\\bar X=S/n$, $m_0=a/(a+b)$, and $m_n=(a+S)/(a+b+n)$, $m_n=\\frac{a+b}{a+b+n}m_0+\\frac{n}{a+b+n}\\bar X$. The nonnegative weights sum to one. If $S_n/n\\to q$, then $m_n\\to q$ as n grows.'),r('Với $a,b>0$, $n>0$, $0\\le S\\le n$, $\\bar X=S/n$, $m_0=a/(a+b)$ và $m_n=(a+S)/(a+b+n)$, $m_n=\\frac{a+b}{a+b+n}m_0+\\frac{n}{a+b+n}\\bar X$. Hai trọng số không âm cộng thành một. Nếu $S_n/n\\to q$, thì $m_n\\to q$ khi n tăng.')),
    steps:[
      b(r('Split the numerator $a+S$ into prior and data pieces, and split the denominator into prior total $a+b$ plus n.'),r('Tách tử số $a+S$ thành phần prior và dữ liệu, đồng thời tách mẫu số thành tổng prior $a+b$ cộng n.')),
      b(r('The prior contribution is $a/(a+b+n)=[(a+b)/(a+b+n)] [a/(a+b)]$.'),r('Đóng góp prior là $a/(a+b+n)=[(a+b)/(a+b+n)] [a/(a+b)]$.')),
      b(r('The data contribution is $S/(a+b+n)=[n/(a+b+n)](S/n)$.'),r('Đóng góp dữ liệu là $S/(a+b+n)=[n/(a+b+n)](S/n)$.')),
      b(r('The weights sum to $(a+b+n)/(a+b+n)=1$. As n grows the prior weight tends to zero; if the empirical proportion converges to q, the posterior mean also tends to q.'),r('Hai trọng số cộng thành $(a+b+n)/(a+b+n)=1$. Khi n tăng, trọng số prior tiến về không; nếu tỷ lệ thực nghiệm hội tụ q, trung bình hậu nghiệm cũng hội tụ q.'))
    ],
    primarySolution:[
      b(r('Write $a+S=a+ n(S/n)$ and divide by $a+b+n$.'),r('Viết $a+S=a+n(S/n)$ rồi chia cho $a+b+n$.')),
      b(r('Factor the first part as $(a+b)/(a+b+n)$ times $a/(a+b)$, and the second as $n/(a+b+n)$ times $S/n$.'),r('Viết phần đầu thành $(a+b)/(a+b+n)$ nhân $a/(a+b)$, phần hai thành $n/(a+b+n)$ nhân $S/n$.')),
      b(r('These are prior and sample means; their weights are nonnegative and add to one.'),r('Đây lần lượt là trung bình prior và mẫu; trọng số không âm và cộng thành một.')),
      b(r('For fixed a,b the prior weight vanishes as n grows. If $S_n/n\\to q$, then the data weight tends to one and posterior mean tends to q.'),r('Với a,b cố định, trọng số prior biến mất khi n tăng. Nếu $S_n/n\\to q$, trọng số dữ liệu tiến tới một và trung bình hậu nghiệm tiến tới q.'))
    ],
    companions:[
      {prompt:b(r('A Beta(2,3) prior is updated with 4 successes in 5 trials. Express the posterior mean as a weighted average of prior mean and sample proportion, and compute it.'),r('Prior Beta(2,3) được cập nhật với 4 thành công trong 5 lần thử. Biểu diễn trung bình hậu nghiệm thành trung bình có trọng số của prior và tỷ lệ mẫu rồi tính.')),solution:[
        b(r('The prior mean is $2/5=0.4$ and the sample proportion is $4/5=0.8$.'),r('Trung bình prior là $2/5=0.4$ và tỷ lệ mẫu là $4/5=0.8$.')),
        b(r('The weights are $(a+b)/(a+b+n)=5/10=1/2$ and $n/(a+b+n)=5/10=1/2$.'),r('Hai trọng số là $(a+b)/(a+b+n)=5/10=1/2$ và $n/(a+b+n)=5/10=1/2$.')),
        b(r('The posterior mean is $(1/2)(0.4)+(1/2)(0.8)=0.6$, matching $(2+4)/(2+3+5)=6/10$.'),r('Trung bình hậu nghiệm là $(1/2)(0.4)+(1/2)(0.8)=0.6$, khớp $(2+4)/(2+3+5)=6/10$.'))
      ]},
      {prompt:b(r('For prior Beta(6,2), observe 12 successes in 18 trials. Find both shrinkage weights, the two means, and the posterior mean.'),r('Với prior Beta(6,2), quan sát 12 thành công trong 18 lần thử. Tìm hai trọng số co rút, hai trung bình và trung bình hậu nghiệm.')),solution:[
        b(r('Prior mean is $6/8=3/4$; observed proportion is $12/18=2/3$.'),r('Trung bình prior là $6/8=3/4$; tỷ lệ quan sát là $12/18=2/3$.')),
        b(r('Weights are $8/26=4/13$ for the prior and $18/26=9/13$ for data.'),r('Trọng số là $8/26=4/13$ cho prior và $18/26=9/13$ cho dữ liệu.')),
        b(r('The weighted value is $(4/13)(3/4)+(9/13)(2/3)=3/13+6/13=9/13$, equal to $(6+12)/(8+18)$.'),r('Giá trị có trọng số là $(4/13)(3/4)+(9/13)(2/3)=3/13+6/13=9/13$, bằng $(6+12)/(8+18)$.'))
      ]},
      {prompt:b(r('A uniform Beta(1,1) prior sees two trials with zero successes. Compute the prior/data weights and posterior mean, then explain why it is not the observed proportion.'),r('Prior đều Beta(1,1) quan sát hai lần thử không có thành công. Tính trọng số prior/dữ liệu và trung bình hậu nghiệm, rồi giải thích vì sao khác tỷ lệ quan sát.')),solution:[
        b(r('The prior mean is $1/2$ and the sample proportion is zero.'),r('Trung bình prior là $1/2$ và tỷ lệ mẫu bằng không.')),
        b(r('Both weights equal $2/(2+2)=1/2$.'),r('Hai trọng số đều bằng $2/(2+2)=1/2$.')),
        b(r('The posterior mean is $(1/2)(1/2)+(1/2)(0)=1/4$, equivalently $1/(1+1+2)=1/4$; the finite prior mass still contributes.'),r('Trung bình hậu nghiệm là $(1/2)(1/2)+(1/2)(0)=1/4$, tương đương $1/(1+1+2)=1/4$; khối lượng prior hữu hạn vẫn đóng góp.'))
      ]}
    ],
    reviewNote:'The convergence statement is conditional on the empirical proportion having a limit; under iid Bernoulli(q) sampling it follows almost surely by the strong law. No claim that the finite-n posterior mean equals the sample proportion is made.',
    sourceIds:['p-cmu36705']
  },
  'm2-w057-e4':{
    title:b('Separate posterior mass from frequentist coverage','Phân biệt khối lượng hậu nghiệm với độ phủ frequentist'),
    application:b(r('A posterior credible set is calibrated under the posterior distribution conditional on observed data; frequentist coverage instead repeats data at a fixed true parameter.'),r('Tập credible hậu nghiệm được hiệu chuẩn theo phân phối hậu nghiệm có điều kiện theo dữ liệu quan sát; độ phủ frequentist lặp lại dữ liệu tại tham số thật cố định.')),
    formula:b(r('If the prior is a point mass $\\delta_{p_0}$, then for every finite Bernoulli sample with positive likelihood at $p_0$, the posterior remains $\\delta_{p_0}$. The singleton $C(X)=\\{p_0\\}$ has posterior probability 1, but when the true parameter is $p_1\\ne p_0$, its repeated-sampling coverage is $P_{p_1}(p_1\\in C(X))=0$.'),r('Nếu prior là khối điểm $\\delta_{p_0}$, thì với mọi mẫu Bernoulli hữu hạn có likelihood dương tại $p_0$, hậu nghiệm vẫn là $\\delta_{p_0}$. Tập đơn $C(X)=\\{p_0\\}$ có xác suất hậu nghiệm 1, nhưng khi tham số thật là $p_1\\ne p_0$, độ phủ lặp mẫu là $P_{p_1}(p_1\\in C(X))=0$.')),
    steps:[
      b(r('Bayes updating cannot place posterior mass outside the support of the prior; a point-mass prior support contains only $p_0$.'),r('Cập nhật Bayes không thể đặt khối lượng hậu nghiệm ngoài giá đỡ prior; giá đỡ prior khối điểm chỉ chứa $p_0$.')),
      b(r('Every finite binary data sequence has likelihood $p_0^S(1-p_0)^{n-S}>0$ when $0<p_0<1$, so the posterior normalizes to the same point mass.'),r('Mọi chuỗi nhị phân hữu hạn có likelihood $p_0^S(1-p_0)^{n-S}>0$ khi $0<p_0<1$, nên hậu nghiệm chuẩn hóa thành cùng khối điểm.')),
      b(r('The set containing $p_0$ has posterior probability one, hence at least 0.95 for a nominal 95% credible set.'),r('Tập chứa $p_0$ có xác suất hậu nghiệm một, nên ít nhất 0.95 cho tập credible danh nghĩa 95%.')),
      b(r('If truth is another value $p_1$, the set never contains truth, so repeated-sampling coverage is zero despite posterior content one.'),r('Nếu sự thật là giá trị khác $p_1$, tập không bao giờ chứa giá trị thật, nên độ phủ lặp mẫu bằng không dù khối lượng hậu nghiệm là một.'))
    ],
    primarySolution:[
      b(r('The point-mass prior assigns probability one to $p=0.2$ and zero elsewhere.'),r('Prior khối điểm gán xác suất một cho $p=0.2$ và không ở mọi nơi khác.')),
      b(r('All Bernoulli samples have positive likelihood at 0.2, so Bayes updating leaves posterior $\\delta_{0.2}$ unchanged.'),r('Mọi mẫu Bernoulli có likelihood dương tại 0.2, nên cập nhật Bayes giữ nguyên hậu nghiệm $\\delta_{0.2}$.')),
      b(r('The singleton credible set $\\{0.2\\}$ has posterior probability one, exceeding 95%.'),r('Tập credible đơn $\\{0.2\\}$ có xác suất hậu nghiệm một, vượt 95%.')),
      b(r('At true $p=0.8$, the set excludes the truth for every sample; its repeated-sampling coverage is zero, not 95%.'),r('Khi $p=0.8$ là thật, tập loại giá trị thật với mọi mẫu; độ phủ lặp mẫu bằng không, không phải 95%.'))
    ],
    companions:[
      {prompt:b(r('An analyst places a point prior at fraud rate 0.1 while the actual rate is 0.9. For any finite sample, describe posterior support and the frequentist coverage of the singleton 90% credible set.'),r('Một nhà phân tích đặt prior khối điểm tại tỷ lệ gian lận 0.1 trong khi tỷ lệ thật là 0.9. Với mọi mẫu hữu hạn, mô tả giá đỡ hậu nghiệm và độ phủ frequentist của tập credible 90% đơn.')),solution:[
        b(r('The prior allows only the value 0.1, so the posterior support remains $\\{0.1\\}$ for every sample with positive likelihood.'),r('Prior chỉ cho phép giá trị 0.1, nên giá đỡ hậu nghiệm vẫn là $\\{0.1\\}$ với mọi mẫu có likelihood dương.')),
        b(r('That singleton has posterior probability one and therefore qualifies as a 90% credible set.'),r('Tập đơn ấy có xác suất hậu nghiệm một nên đủ điều kiện là tập credible 90%.')),
        b(r('Since the true rate 0.9 is never in it, repeated-sampling coverage under truth 0.9 is zero.'),r('Vì tỷ lệ thật 0.9 không bao giờ nằm trong tập, độ phủ lặp mẫu dưới sự thật 0.9 bằng không.'))
      ]},
      {prompt:b(r('Now suppose the point prior is $\\delta_{0.4}$ and the true rate is also 0.4. What are posterior content and coverage of the singleton $\\{0.4\\}$? Why does this not establish general 95% coverage.'),r('Giờ giả sử prior khối điểm là $\\delta_{0.4}$ và tỷ lệ thật cũng là 0.4. Khối lượng hậu nghiệm và độ phủ của tập đơn $\\{0.4\\}$ là bao nhiêu? Vì sao điều này không thiết lập độ phủ 95% tổng quát?')),solution:[
        b(r('The posterior stays at $\\delta_{0.4}$, so the singleton has posterior probability one.'),r('Hậu nghiệm vẫn là $\\delta_{0.4}$, nên tập đơn có xác suất hậu nghiệm một.')),
        b(r('Because the true value equals 0.4, every repeated sample produces a set containing truth; coverage is one.'),r('Vì giá trị thật bằng 0.4, mọi mẫu lặp đều cho tập chứa sự thật; độ phủ bằng một.')),
        b(r('This coverage is a special consequence of the prior point coinciding with truth, not a uniform 95% guarantee over other parameter values.'),r('Độ phủ này là hệ quả đặc biệt của prior điểm trùng giá trị thật, không phải bảo đảm 95% đồng đều trên các tham số khác.'))
      ]},
      {prompt:b(r('A point prior at p=0.25 reports the same singleton 95% credible set after 30 successes in 30 trials. Under true p=0.75, compute its coverage and explain why observing all successes did not move it.'),r('Prior khối điểm tại p=0.25 báo cùng tập credible 95% đơn sau 30 lần thành công trong 30 lần thử. Dưới p=0.75 thật, tính độ phủ và giải thích vì sao quan sát toàn thành công không làm nó dịch chuyển.')),solution:[
        b(r('The prior support contains only 0.25; likelihood weighting cannot create posterior support at 0.75.'),r('Giá đỡ prior chỉ chứa 0.25; cân likelihood không thể tạo giá đỡ hậu nghiệm tại 0.75.')),
        b(r('The posterior remains $\\delta_{0.25}$ and the reported singleton excludes the true 0.75.'),r('Hậu nghiệm vẫn là $\\delta_{0.25}$ và tập đơn báo cáo loại giá trị thật 0.75.')),
        b(r('Coverage under p=0.75 is zero. The all-success sample has positive likelihood under p=0.25, but the prior assigns no alternative value to update toward.'),r('Độ phủ dưới p=0.75 bằng không. Mẫu toàn thành công vẫn có likelihood dương dưới p=0.25, nhưng prior không gán giá trị thay thế để cập nhật tới.'))
      ]}
    ],
    reviewNote:'Posterior content is conditional and prior-dependent; coverage is a repeated-sampling property at fixed truth. The point-mass examples give exact 0 or 1 coverage, demonstrating that posterior probability statements alone do not guarantee nominal frequentist coverage.',
    sourceIds:['p-cmu36705']
  },
  'm2-w057-e5':{
    title:b('Update odds between two Bernoulli hypotheses','Cập nhật odds giữa hai giả thuyết Bernoulli'),
    application:b(r('Posterior odds combine prior relative plausibility with the evidence ratio supplied by observed successes and failures.'),r('Odds hậu nghiệm kết hợp độ hợp lý tương đối ban đầu với tỷ số bằng chứng từ số thành công và thất bại quan sát.')),
    formula:b(r('For simple hypotheses $H_j:p=p_j$ with $0<p_j<1$, prior masses $\\pi_j>0$, and n conditionally iid Bernoulli observations with S successes, $\\frac{P(H_1\\mid X)}{P(H_0\\mid X)}=\\frac{\\pi_1}{\\pi_0}(p_1/p_0)^S[(1-p_1)/(1-p_0)]^{n-S}$. The first factor is prior odds; the remainder is the likelihood ratio.'),r('Với giả thuyết đơn $H_j:p=p_j$, $0<p_j<1$, khối lượng prior $\\pi_j>0$ và n quan sát Bernoulli iid có điều kiện với S thành công, $\\frac{P(H_1\\mid X)}{P(H_0\\mid X)}=\\frac{\\pi_1}{\\pi_0}(p_1/p_0)^S[(1-p_1)/(1-p_0)]^{n-S}$. Thừa số đầu là odds prior; phần còn lại là tỷ số likelihood.')),
    steps:[
      b(r('Under $H_j$, the likelihood of a particular binary sequence with S successes is $p_j^S(1-p_j)^{n-S}$.'),r('Dưới $H_j$, likelihood của chuỗi nhị phân có S thành công là $p_j^S(1-p_j)^{n-S}$.')),
      b(r('Bayes rule gives posterior odds as prior odds times $L_1(X)/L_0(X)$.'),r('Quy tắc Bayes cho odds hậu nghiệm bằng odds prior nhân $L_1(X)/L_0(X)$.')),
      b(r('Cancel the binomial coefficient if using only the success count; the likelihood ratio is $(p_1/p_0)^S[(1-p_1)/(1-p_0)]^{n-S}$.'),r('Khử hệ số nhị thức nếu chỉ dùng số thành công; tỷ số likelihood là $(p_1/p_0)^S[(1-p_1)/(1-p_0)]^{n-S}$.')),
      b(r('A likelihood ratio above one favors $H_1$ relative to prior odds, while a ratio below one favors $H_0$; posterior probability is obtained by normalizing the two odds.'),r('Tỷ số likelihood lớn hơn một ủng hộ $H_1$ so với odds prior, còn nhỏ hơn một ủng hộ $H_0$; xác suất hậu nghiệm thu được bằng chuẩn hóa hai odds.'))
    ],
    primarySolution:[
      b(r('Under $H_1$, likelihood is $p_1^S(1-p_1)^{n-S}$; under $H_0$, it is $p_0^S(1-p_0)^{n-S}$.'),r('Dưới $H_1$, likelihood là $p_1^S(1-p_1)^{n-S}$; dưới $H_0$, là $p_0^S(1-p_0)^{n-S}$.')),
      b(r('Their ratio is $(p_1/p_0)^S((1-p_1)/(1-p_0))^{n-S}$.'),r('Tỷ số của chúng là $(p_1/p_0)^S((1-p_1)/(1-p_0))^{n-S}$.')),
      b(r('Bayes multiplies that likelihood ratio by prior odds $\\pi_1/\\pi_0$ to produce posterior odds.'),r('Bayes nhân tỷ số likelihood ấy với odds prior $\\pi_1/\\pi_0$ để tạo odds hậu nghiệm.')),
      b(r('The prior factor encodes initial relative plausibility; the likelihood ratio encodes how the observed data favor one point hypothesis over the other.'),r('Thừa số prior biểu diễn độ hợp lý tương đối ban đầu; tỷ số likelihood biểu diễn dữ liệu quan sát ủng hộ giả thuyết điểm nào hơn.'))
    ],
    companions:[
      {prompt:b(r('Two product designs have defect rates $p_0=0.2$ and $p_1=0.5$ with equal prior odds. In 5 independent inspected units, 4 are defective. Compute posterior odds for $H_1$ over $H_0$.'),r('Hai thiết kế sản phẩm có tỷ lệ lỗi $p_0=0.2$ và $p_1=0.5$ với odds prior bằng nhau. Trong 5 đơn vị kiểm tra độc lập, có 4 lỗi. Tính odds hậu nghiệm của $H_1$ so với $H_0$.')),solution:[
        b(r('The prior odds are one, so posterior odds equal the likelihood ratio.'),r('Odds prior bằng một, nên odds hậu nghiệm bằng tỷ số likelihood.')),
        b(r('The ratio is $(0.5/0.2)^4(0.5/0.8)^1=(5/2)^4(5/8)=3125/128$.'),r('Tỷ số là $(0.5/0.2)^4(0.5/0.8)^1=(5/2)^4(5/8)=3125/128$.')),
        b(r('Numerically this is about 24.414, strongly favoring the higher-defect hypothesis $H_1$.'),r('Giá trị số xấp xỉ 24.414, ủng hộ mạnh giả thuyết tỷ lệ lỗi cao $H_1$.'))
      ]},
      {prompt:b(r('A website conversion rate is either $p_0=0.3$ or $p_1=0.6$. Prior odds favor $H_1$ by 2 to 1. Among four visits, one converts. Find posterior odds and which hypothesis is favored.'),r('Tỷ lệ chuyển đổi trang web là $p_0=0.3$ hoặc $p_1=0.6$. Odds prior ủng hộ $H_1$ theo tỷ lệ 2 trên 1. Trong bốn lượt truy cập, một lượt chuyển đổi. Tìm odds hậu nghiệm và giả thuyết được ủng hộ.')),solution:[
        b(r('The likelihood ratio is $(0.6/0.3)^1(0.4/0.7)^3=2(4/7)^3=128/343$.'),r('Tỷ số likelihood là $(0.6/0.3)^1(0.4/0.7)^3=2(4/7)^3=128/343$.')),
        b(r('Multiply by prior odds 2 to obtain posterior odds $256/343\\approx0.746$.'),r('Nhân với odds prior 2 được odds hậu nghiệm $256/343\\approx0.746$.')),
        b(r('Because this is below one, posterior odds now favor $H_0$ despite the initial prior preference for $H_1$.'),r('Vì giá trị này nhỏ hơn một, odds hậu nghiệm nay ủng hộ $H_0$ dù prior ban đầu ưu tiên $H_1$.'))
      ]},
      {prompt:b(r('For hypotheses $p_0=0.1$ and $p_1=0.25$, prior odds are $\\pi_1/\\pi_0=1/2$. A batch of 10 items has 7 successes. Write the posterior odds exactly and decide whether they exceed one.'),r('Với giả thuyết $p_0=0.1$ và $p_1=0.25$, odds prior là $\\pi_1/\\pi_0=1/2$. Lô 10 mặt hàng có 7 thành công. Viết odds hậu nghiệm chính xác và quyết định chúng có vượt một không.')),solution:[
        b(r('The success likelihood ratio is $(0.25/0.1)^7=(5/2)^7$.'),r('Tỷ số likelihood của thành công là $(0.25/0.1)^7=(5/2)^7$.')),
        b(r('The failure ratio is $(0.75/0.9)^3=(5/6)^3$, so posterior odds are $(1/2)(5/2)^7(5/6)^3$.'),r('Tỷ số thất bại là $(0.75/0.9)^3=(5/6)^3$, nên odds hậu nghiệm là $(1/2)(5/2)^7(5/6)^3$.')),
        b(r('This positive product is approximately 176.6, well above one, so the data overcome the prior odds favoring $H_0$.'),r('Tích dương này xấp xỉ 176.6, lớn hơn nhiều một, nên dữ liệu vượt odds prior ban đầu ủng hộ $H_0$.'))
      ]}
    ],
    reviewNote:'The formula concerns two simple point hypotheses with positive prior masses and interior Bernoulli probabilities. If a hypothesis assigns a boundary probability 0 or 1, zero likelihood cases need separate treatment rather than ratios with zero denominators.',
    sourceIds:['p-cmu36705']
  },
  'm2-w058-e1':{
    title:b('Prove strong FWER control for Bonferroni and Holm','Chứng minh kiểm soát FWER mạnh cho Bonferroni và Holm'),
    application:b(r('Familywise control protects against any false rejection in a family, even when the tests are dependent and some hypotheses are false.'),r('Kiểm soát theo họ bảo vệ trước mọi bác bỏ sai trong một họ, kể cả khi các kiểm định phụ thuộc và một số giả thuyết sai.')),
    formula:b(r('For m hypotheses, assume every true-null p-value is super-uniform: $P(p_i\\le t)\\le t$ for $0\\le t\\le1$. Bonferroni rejects at $p_i\\le\\alpha/m$; Holm orders p-values and tests rank k at $\\alpha/(m-k+1)$. Both have $\\operatorname{FWER}=P(V\\ge1)\\le\\alpha$ under arbitrary dependence.'),r('Với m giả thuyết, giả sử mọi p-value dưới giả thuyết không thật đều siêu đều: $P(p_i\\le t)\\le t$ với $0\\le t\\le1$. Bonferroni bác bỏ khi $p_i\\le\\alpha/m$; Holm sắp p-value và kiểm tra hạng k tại $\\alpha/(m-k+1)$. Cả hai có $\\operatorname{FWER}=P(V\\ge1)\\le\\alpha$ dưới phụ thuộc tùy ý.')),
    steps:[
      b(r('For Bonferroni, if any true null is rejected, at least one of the m₀ true-null p-values is at most $\\alpha/m$.'),r('Với Bonferroni, nếu có giả thuyết không thật nào bị bác bỏ thì ít nhất một trong m₀ p-value thật không vượt $\\alpha/m$.')),
      b(r('A union bound and super-uniformity give $\\operatorname{FWER}\\le m_0(\\alpha/m)\\le\\alpha$, with no independence premise.'),r('Chặn hợp và tính siêu đều cho $\\operatorname{FWER}\\le m_0(\\alpha/m)\\le\\alpha$, không cần giả thiết độc lập.')),
      b(r('For Holm, let k₀ be the first rank occupied by a true null. If any true null is rejected, step-down reaches k₀ and rejects there, so $p_{(k_0)}\\le\\alpha/(m-k_0+1)$.'),r('Với Holm, gọi k₀ là hạng đầu tiên thuộc giả thuyết không thật. Nếu có giả thuyết không thật nào bị bác bỏ, thủ tục bước xuống tới k₀ và bác bỏ tại đó, nên $p_{(k_0)}\\le\\alpha/(m-k_0+1)$.')),
      b(r('All m₀ true nulls occur at ranks k₀ or later, hence $m-k_0+1\\ge m_0$ and this threshold is at most $\\alpha/m_0$.'),r('Cả m₀ giả thuyết không thật đều ở hạng k₀ trở đi, nên $m-k_0+1\\ge m_0$ và ngưỡng này không quá $\\alpha/m_0$.')),
      b(r('Any Holm false rejection is therefore contained in the event that some true-null p-value is at most $\\alpha/m_0$; the union bound gives probability at most α.'),r('Mọi bác bỏ sai của Holm vì vậy nằm trong biến cố có p-value thật không quá $\\alpha/m_0$; chặn hợp cho xác suất không quá α.'))
    ],
    primarySolution:[
      b(r('Bonferroni tests each true null at level $\\alpha/m$, so union-bounding over m₀ true nulls gives FWER at most $m_0\\alpha/m\\le\\alpha$.'),r('Bonferroni kiểm tra mỗi giả thuyết không thật ở mức $\\alpha/m$, nên chặn hợp trên m₀ giả thuyết cho FWER không quá $m_0\\alpha/m\\le\\alpha$.')),
      b(r('For Holm, suppose at least one true null is rejected and let k₀ be the smallest rank of any true null.'),r('Với Holm, giả sử có giả thuyết không thật bị bác bỏ và gọi k₀ là hạng nhỏ nhất của giả thuyết không thật.')),
      b(r('Holm must pass all preceding ranks and reject at k₀, which requires $p_{(k_0)}\\le\\alpha/(m-k_0+1)\\le\\alpha/m_0$ because at least m₀ ranks remain.'),r('Holm phải qua mọi hạng trước và bác bỏ tại k₀, đòi hỏi $p_{(k_0)}\\le\\alpha/(m-k_0+1)\\le\\alpha/m_0$ vì còn ít nhất m₀ hạng.')),
      b(r('Thus a false rejection implies some true-null p-value is at most $\\alpha/m_0$. A union bound with super-uniform p-values gives probability at most α under arbitrary dependence.'),r('Vì vậy bác bỏ sai kéo theo một p-value thật không quá $\\alpha/m_0$. Chặn hợp với p-value siêu đều cho xác suất không quá α dưới phụ thuộc tùy ý.'))
    ],
    companions:[
      {prompt:b(r('A confirmatory family contains 8 tests, 5 of whose nulls are true. Bonferroni uses family level $\\alpha=0.1$. Find the per-test threshold and an FWER upper bound.'),r('Một họ kiểm định xác nhận có 8 phép thử, trong đó 5 giả thuyết không là thật. Bonferroni dùng mức họ $\\alpha=0.1$. Tìm ngưỡng từng phép thử và cận trên FWER.')),solution:[
        b(r('The common Bonferroni cutoff is $0.1/8=0.0125$.'),r('Ngưỡng Bonferroni chung là $0.1/8=0.0125$.')),
        b(r('Only the five true nulls contribute to false rejections, so the union bound is $5(0.0125)=0.0625$.'),r('Chỉ năm giả thuyết không thật góp bác bỏ sai, nên chặn hợp là $5(0.0125)=0.0625$.')),
        b(r('This is below the family target 0.1; dependence among tests does not alter the union-bound guarantee.'),r('Giá trị này thấp hơn mục tiêu họ 0.1; phụ thuộc giữa kiểm định không đổi bảo đảm chặn hợp.'))
      ]},
      {prompt:b(r('For Holm with 5 ordered p-values $(0.002,0.01,0.03,0.08,0.4)$ at $\\alpha=0.05$, suppose the first two hypotheses are false and the last three are true. Apply the stopping rule and identify the first true-null threshold.'),r('Với Holm có 5 p-value đã sắp $(0.002,0.01,0.03,0.08,0.4)$ ở mức $\\alpha=0.05$, giả sử hai giả thuyết đầu sai và ba giả thuyết cuối thật. Áp dụng quy tắc dừng và nêu ngưỡng giả thuyết không thật đầu tiên.')),solution:[
        b(r('Holm thresholds are $0.01,0.0125,0.0167,0.025,0.05$ by rank.'),r('Ngưỡng Holm theo hạng là $0.01,0.0125,0.0167,0.025,0.05$.')),
        b(r('The first two p-values pass; rank 3 has p=0.03, above 0.0167, so the procedure stops and rejects only two.'),r('Hai p-value đầu qua; hạng 3 có p=0.03, lớn hơn 0.0167, nên thủ tục dừng và chỉ bác bỏ hai.')),
        b(r('Rank 3 is the first true null; if it had been rejected, its threshold 0.05/3≈0.0167 is at most α divided by the number of three true nulls.'),r('Hạng 3 là giả thuyết không thật đầu tiên; nếu bị bác bỏ, ngưỡng 0.05/3≈0.0167 không vượt α chia cho số ba giả thuyết không thật.'))
      ]},
      {prompt:b(r('A lab has 6 hypotheses at family level $\\alpha=0.03$. If Holm reaches rank 4, what cutoff is used there, and why can dependence among the six p-values be arbitrary?' ),r('Phòng thí nghiệm có 6 giả thuyết ở mức họ $\\alpha=0.03$. Nếu Holm tới hạng 4, dùng ngưỡng nào và vì sao phụ thuộc giữa sáu p-value có thể tùy ý?')),solution:[
        b(r('The rank-4 Holm cutoff is $0.03/(6-4+1)=0.01$.'),r('Ngưỡng Holm hạng 4 là $0.03/(6-4+1)=0.01$.')),
        b(r('Holm only needs each true-null p-value to be super-uniform; it does not multiply probabilities under an independence assumption.'),r('Holm chỉ cần mỗi p-value thật không siêu đều; thủ tục không nhân xác suất dưới giả thiết độc lập.')),
        b(r('Its strong FWER proof uses a union bound over true nulls and the first true-null rank, both valid under arbitrary dependence.'),r('Chứng minh FWER mạnh dùng chặn hợp trên giả thuyết không thật và hạng thật đầu tiên, đều hợp lệ dưới phụ thuộc tùy ý.'))
      ]}
    ],
    reviewNote:'Strong control means validity for every configuration of true and false nulls. Holm proof uses the first true-null rank; it does not assume that p-values are independent.',
    sourceIds:['p-cmu36705']
  },
  'm2-w058-e2':{
    title:b('Calculate Bonferroni, Holm, and BH decisions','Tính quyết định Bonferroni, Holm và BH'),
    application:b(r('The same sorted evidence can lead to different rejection counts because familywise step-down and false-discovery step-up procedures use different rank thresholds.'),r('Cùng bằng chứng đã sắp có thể cho số bác bỏ khác nhau vì thủ tục bước xuống theo họ và bước lên theo phát hiện sai dùng ngưỡng hạng khác nhau.')),
    formula:b(r('For ordered p-values $p_{(1)}\\le\\cdots\\le p_{(m)}$, Bonferroni uses $\\alpha/m$; Holm compares rank k to $\\alpha/(m-k+1)$ until first failure; BH compares rank k to $kq/m$ and rejects through the largest passing rank. For $p=(.004,.018,.041,.20)$, m=4, α=q=.05.'),r('Với p-value đã sắp $p_{(1)}\\le\\cdots\\le p_{(m)}$, Bonferroni dùng $\\alpha/m$; Holm so hạng k với $\\alpha/(m-k+1)$ tới lần trượt đầu; BH so hạng k với $kq/m$ và bác bỏ đến hạng qua lớn nhất. Với $p=(.004,.018,.041,.20)$, m=4, α=q=.05.')),
    steps:[
      b(r('Bonferroni cutoff is $0.05/4=0.0125$; only $0.004$ is at or below it.'),r('Ngưỡng Bonferroni là $0.05/4=0.0125$; chỉ $0.004$ không vượt ngưỡng.')),
      b(r('Holm cutoffs are $0.0125,0.0167,0.025,0.05$. The first p-value passes and the second $0.018$ fails its $0.0167$ cutoff, so Holm stops after one rejection.'),r('Ngưỡng Holm là $0.0125,0.0167,0.025,0.05$. P-value đầu qua, p-value thứ hai $0.018$ trượt ngưỡng $0.0167$, nên Holm dừng sau một bác bỏ.')),
      b(r('BH cutoffs are $0.0125,0.025,0.0375,0.05$. Ranks one and two pass; rank three $0.041$ fails, and rank four fails.'),r('Ngưỡng BH là $0.0125,0.025,0.0375,0.05$. Hạng một và hai qua; hạng ba $0.041$ trượt và hạng bốn cũng trượt.')),
      b(r('The largest BH passing rank is two, so reject the first two. BH interpretation still requires its dependence validity condition.'),r('Hạng lớn nhất qua BH là hai, nên bác bỏ hai p-value đầu. Diễn giải BH vẫn cần điều kiện hợp lệ về phụ thuộc.'))
    ],
    primarySolution:[
      b(r('Bonferroni uses $0.0125$ and rejects rank one only.'),r('Bonferroni dùng $0.0125$ và chỉ bác bỏ hạng một.')),
      b(r('Holm thresholds are $.0125,.0167,.025,.05$. The first passes and the second fails because $.018>.0167$, so Holm rejects one.'),r('Ngưỡng Holm là $.0125,.0167,.025,.05$. Hạng đầu qua, hạng hai trượt vì $.018>.0167$, nên Holm bác bỏ một.')),
      b(r('BH thresholds are $.0125,.025,.0375,.05$. The first two p-values pass their cutoffs; the last passing rank is two.'),r('Ngưỡng BH là $.0125,.025,.0375,.05$. Hai p-value đầu qua ngưỡng; hạng cuối cùng qua là hai.')),
      b(r('Therefore BH rejects two. Holm controls FWER under arbitrary dependence; standard BH controls FDR under independence or a justified extension.'),r('Vì vậy BH bác bỏ hai. Holm kiểm soát FWER dưới phụ thuộc tùy ý; BH chuẩn kiểm soát FDR dưới độc lập hoặc mở rộng được biện minh.'))
    ],
    companions:[
      {prompt:b(r('For sorted p-values $(.003,.009,.020,.070,.40)$ with $m=5$ and $\\alpha=q=.05$, find Bonferroni, Holm, and BH rejection counts.'),r('Với p-value sắp $(.003,.009,.020,.070,.40)$, $m=5$ và $\\alpha=q=.05$, tìm số bác bỏ Bonferroni, Holm và BH.')),solution:[
        b(r('Bonferroni cutoff is $.05/5=.01$, so the first two p-values are rejected.'),r('Ngưỡng Bonferroni là $.05/5=.01$, nên bác bỏ hai p-value đầu.')),
        b(r('Holm thresholds are $.01,.0125,.0167,.025,.05$; ranks one and two pass, but $.020>.0167$ at rank three, so Holm rejects two.'),r('Ngưỡng Holm là $.01,.0125,.0167,.025,.05$; hạng một và hai qua, nhưng $.020>.0167$ tại hạng ba, nên Holm bác bỏ hai.')),
        b(r('BH thresholds are $.01,.02,.03,.04,.05$. The first three pass at ranks 1–3 and the fourth fails, so BH rejects three.'),r('Ngưỡng BH là $.01,.02,.03,.04,.05$. Ba p đầu qua ở hạng 1–3 và p thứ tư trượt, nên BH bác bỏ ba.'))
      ]},
      {prompt:b(r('At $\\alpha=q=.05$, analyze sorted p-values $(.01,.02,.50)$ using Bonferroni, Holm, and BH. Show each threshold sequence.'),r('Ở mức $\\alpha=q=.05$, phân tích p-value sắp $(.01,.02,.50)$ bằng Bonferroni, Holm và BH. Nêu từng dãy ngưỡng.')),solution:[
        b(r('Bonferroni cutoff is $.05/3\\approx.0167$, so only $.01$ is rejected.'),r('Ngưỡng Bonferroni là $.05/3\\approx.0167$, nên chỉ bác bỏ $.01$.')),
        b(r('Holm thresholds are $.0167,.025,.05$: $.01$ and $.02$ pass, then $.50$ fails, giving two rejections.'),r('Ngưỡng Holm là $.0167,.025,.05$: $.01$ và $.02$ qua, rồi $.50$ trượt, cho hai bác bỏ.')),
        b(r('BH thresholds are $.0167,.0333,.05$: the first two pass and the third fails, so BH also rejects two.'),r('Ngưỡng BH là $.0167,.0333,.05$: hai p đầu qua và p thứ ba trượt, nên BH cũng bác bỏ hai.'))
      ]},
      {prompt:b(r('For four sorted p-values $(.004,.03,.06,.4)$, take Holm family level $.1$ and BH target $.1$. Find both rejection counts and explain why they need not agree.'),r('Với bốn p-value sắp $(.004,.03,.06,.4)$, lấy mức họ Holm $.1$ và mục tiêu BH $.1$. Tìm số bác bỏ của cả hai và giải thích vì sao chúng không cần trùng nhau.')),solution:[
        b(r('Holm thresholds are $.025,.0333,.05,.1$. The first two pass and $.06>.05$ at rank three stops the procedure, so Holm rejects two.'),r('Ngưỡng Holm là $.025,.0333,.05,.1$. Hai p đầu qua và $.06>.05$ tại hạng ba làm dừng thủ tục, nên Holm bác bỏ hai.')),
        b(r('BH thresholds are $.025,.05,.075,.1$. Ranks one through three pass, while $.4>.1$ fails, so BH rejects three.'),r('Ngưỡng BH là $.025,.05,.075,.1$. Hạng một tới ba qua, còn $.4>.1$ trượt, nên BH bác bỏ ba.')),
        b(r('Holm targets probability of any false rejection; BH targets expected false-discovery proportion under its dependence assumptions, so distinct thresholds and counts are expected.'),r('Holm nhắm xác suất có bất kỳ bác bỏ sai nào; BH nhắm tỷ lệ phát hiện sai kỳ vọng dưới giả thiết phụ thuộc, nên ngưỡng và số lượng khác nhau là điều thường gặp.'))
      ]}
    ],
    reviewNote:'All p-values are treated as already sorted increasingly. Holm stops permanently at its first failure; BH uses the largest passing rank, not the first failure. Standard BH guarantee is not assumed under arbitrary dependence.',
    sourceIds:['p-cmu36705']
  },
  'm2-w058-e3':{
    title:b('Interpret the independent Benjamini–Hochberg bound','Diễn giải cận Benjamini–Hochberg dưới độc lập'),
    application:b(r('FDR controls an expectation of the false-discovery proportion, so its guarantee is an average across repeated experiments rather than a per-claim certificate.'),r('FDR kiểm soát kỳ vọng của tỷ lệ phát hiện sai, nên bảo đảm là trung bình qua thí nghiệm lặp lại chứ không phải chứng nhận từng tuyên bố.')),
    formula:b(r('For m tests with m₀ true nulls and valid super-uniform null p-values, if all tests are independent, the BH step-up procedure at target q satisfies $\\operatorname{FDR}=E[V/(R\\vee1)]\\le q m_0/m$. With m=20, m₀=12, and q=.10, this bound is $.06$.'),r('Với m kiểm định có m₀ giả thuyết không thật và p-value không giả thuyết không siêu đều hợp lệ, nếu mọi kiểm định độc lập thì thủ tục BH bước lên ở mức q thỏa $\\operatorname{FDR}=E[V/(R\\vee1)]\\le q m_0/m$. Với m=20, m₀=12 và q=.10, cận này là $.06$.')),
    steps:[
      b(r('FDP is $V/R$ when R>0 and is conventionally zero when R=0; FDR is its expectation over repeated datasets.'),r('FDP là $V/R$ khi R>0 và theo quy ước bằng không khi R=0; FDR là kỳ vọng của nó qua các bộ dữ liệu lặp.')),
      b(r('Under independence and valid null p-values, BH controls FDR at most $q m_0/m$, not necessarily at q when some hypotheses are false.'),r('Dưới độc lập và p-value không hợp lệ, BH chặn FDR bởi $q m_0/m$, không nhất thiết bằng q khi có giả thuyết sai.')),
      b(r('Here $q m_0/m=.10(12/20)=.10(.6)=.06$.'),r('Ở đây $q m_0/m=.10(12/20)=.10(.6)=.06$.')),
      b(r('This bounds expected FDP. It does not say each selected finding has a 6% chance of being false, nor that every realized dataset has FDP at most 0.06.'),r('Cận này áp dụng cho FDP kỳ vọng. Nó không nói mỗi phát hiện được chọn có 6% xác suất sai, cũng không nói FDP của mọi bộ dữ liệu thực tế không quá 0.06.'))
    ],
    primarySolution:[
      b(r('The BH independence theorem gives $\\operatorname{FDR}\\le q m_0/m$ for valid null p-values.'),r('Định lý BH dưới độc lập cho $\\operatorname{FDR}\\le q m_0/m$ với p-value không thật hợp lệ.')),
      b(r('Substitute values: $.10(12/20)=.10(.6)=.06$.'),r('Thay số: $.10(12/20)=.10(.6)=.06$.')),
      b(r('Thus the expectation of the false-discovery proportion is at most six percent over repetitions.'),r('Do đó kỳ vọng tỷ lệ phát hiện sai không quá sáu phần trăm qua các lần lặp.')),
      b(r('It is an aggregate expectation, not an individual posterior probability for each claim and not a deterministic ceiling on each realized FDP.'),r('Đây là kỳ vọng tổng hợp, không phải xác suất hậu nghiệm riêng cho từng tuyên bố và không phải trần xác định cho FDP từng bộ dữ liệu.'))
    ],
    companions:[
      {prompt:b(r('An independent screen runs $m=10$ tests, of which $m_0=7$ nulls are true, using BH target $q=.05$. Compute the FDR upper bound and interpret it.'),r('Một sàng lọc độc lập chạy $m=10$ kiểm định, trong đó $m_0=7$ giả thuyết không là thật, dùng BH mục tiêu $q=.05$. Tính cận trên FDR và diễn giải.')),solution:[
        b(r('The theorem applies because the tests are independent and the true-null p-values are valid super-uniform.'),r('Định lý áp dụng vì kiểm định độc lập và p-value dưới không thật siêu đều hợp lệ.')),
        b(r('The bound is $q m_0/m=.05(7/10)=.035$.'),r('Cận là $q m_0/m=.05(7/10)=.035$.')),
        b(r('Across repeated screens, expected FDP is at most 3.5%; this is not a guarantee that each screen has FDP below 3.5%.'),r('Qua các lần sàng lọc, FDP kỳ vọng không quá 3.5%; điều này không bảo đảm FDP từng lần dưới 3.5%.'))
      ]},
      {prompt:b(r('A genomics study has $m=50$ independent tests, $m_0=20$ true nulls, and BH target $q=.1$. Find the expected false-discovery proportion bound and explain the role of $m_0/m$.'),r('Nghiên cứu genomics có $m=50$ kiểm định độc lập, $m_0=20$ giả thuyết không thật và BH mục tiêu $q=.1$. Tìm cận tỷ lệ phát hiện sai kỳ vọng và giải thích vai trò của $m_0/m$.')),solution:[
        b(r('The true-null fraction is $m_0/m=20/50=0.4$.'),r('Tỷ phần giả thuyết không thật là $m_0/m=20/50=0.4$.')),
        b(r('BH gives FDR at most $.1(0.4)=.04$.'),r('BH cho FDR không quá $.1(0.4)=.04$.')),
        b(r('A smaller true-null fraction tightens this theorem bound; it remains an expectation over repeated experiments under the stated independence conditions.'),r('Tỷ phần không thật nhỏ hơn làm chặt cận định lý; đây vẫn là kỳ vọng qua thí nghiệm lặp dưới điều kiện độc lập đã nêu.'))
      ]},
      {prompt:b(r('For $m=8$, $m_0=3$, and independent valid p-values, what BH target q suffices for the theorem to bound FDR by at most .075?'),r('Với $m=8$, $m_0=3$ và p-value hợp lệ độc lập, cần mục tiêu BH q nào để định lý chặn FDR không quá .075?')),solution:[
        b(r('The theorem bound is $q(3/8)$.'),r('Cận định lý là $q(3/8)$.')),
        b(r('Require $3q/8\\le.075$, so $q\\le.075(8/3)=.2$.'),r('Cần $3q/8\\le.075$, nên $q\\le.075(8/3)=.2$.')),
        b(r('Choosing target q=.2 gives bound $.2(3/8)=.075$, subject to independence and valid null p-values.'),r('Chọn mục tiêu q=.2 cho cận $.2(3/8)=.075$, với điều kiện p-value không hợp lệ và độc lập.'))
      ]}
    ],
    reviewNote:'The guarantee is BH FDR control under independence (or a separately justified extension) and valid true-null p-values. FDR is E[FDP], with FDP set to zero when R=0; it does not control each realized FDP.',
    sourceIds:['p-cmu36705']
  },
  'm2-w058-e4':{
    title:b('Distinguish FWER from realized false-discovery proportion','Phân biệt FWER với tỷ lệ phát hiện sai quan sát'),
    application:b(r('A dataset can contain a small fraction of false discoveries while still realizing a false rejection; FWER records the occurrence event, whereas FDP records its fraction.'),r('Một bộ dữ liệu có thể chứa tỷ lệ phát hiện sai nhỏ nhưng vẫn có bác bỏ sai; FWER ghi nhận biến cố xảy ra, còn FDP ghi tỷ lệ của nó.')),
    formula:b(r('Let R be total rejections and V false rejections. Define $\\operatorname{FDP}=V/R$ when R>0 and 0 when R=0; define $\\operatorname{FWER}=P(V\\ge1)$. For a realized dataset with R=100 and V=5, FDP=.05 and the event $V\\ge1$ occurred. FWER is the repeated-sampling probability of that event, not the realized indicator itself.'),r('Cho R là tổng số bác bỏ và V là số bác bỏ sai. Đặt $\\operatorname{FDP}=V/R$ khi R>0 và bằng 0 khi R=0; đặt $\\operatorname{FWER}=P(V\\ge1)$. Với bộ dữ liệu quan sát có R=100 và V=5, FDP=.05 và biến cố $V\\ge1$ đã xảy ra. FWER là xác suất lặp mẫu của biến cố đó, không phải chỉ báo quan sát.')),
    steps:[
      b(r('Compute the realized fraction: $\\operatorname{FDP}=5/100=.05$.'),r('Tính tỷ lệ quan sát: $\\operatorname{FDP}=5/100=.05$.')),
      b(r('Because V=5 is positive, the indicator of at least one false rejection equals one for this dataset.'),r('Vì V=5 dương, chỉ báo có ít nhất một bác bỏ sai bằng một ở bộ dữ liệu này.')),
      b(r('Across repeated datasets, FWER is the expectation of that indicator, $P(V\\ge1)$; one realization cannot determine that probability.'),r('Qua các bộ dữ liệu lặp, FWER là kỳ vọng của chỉ báo đó, $P(V\\ge1)$; một lần quan sát không xác định được xác suất ấy.')),
      b(r('FDR is $E(\\operatorname{FDP})$. A small expected fraction can coexist with frequent occurrence of at least one false rejection, because the false count may be a small share of many total rejections.'),r('FDR là $E(\\operatorname{FDP})$. Tỷ lệ kỳ vọng nhỏ vẫn có thể đi kèm biến cố có ít nhất một bác bỏ sai thường xuyên, vì số sai có thể chiếm phần nhỏ trong nhiều bác bỏ tổng.'))
    ],
    primarySolution:[
      b(r('The realized FDP is $V/R=5/100=.05$.'),r('FDP quan sát là $V/R=5/100=.05$.')),
      b(r('The FWER event is $V\\ge1$; with V=5 it has occurred in this dataset.'),r('Biến cố FWER là $V\\ge1$; với V=5, biến cố đã xảy ra trong bộ dữ liệu này.')),
      b(r('FWER as a performance measure is the probability of that event over repeated sampling, not the single observed indicator.'),r('FWER như thước đo hiệu năng là xác suất của biến cố qua lấy mẫu lặp, không phải chỉ báo quan sát đơn lẻ.')),
      b(r('An expected-FDP guarantee averages fractions and does not bound every realized fraction. For example, an FDP can be high on a rare run while its expectation remains controlled.'),r('Bảo đảm FDP kỳ vọng lấy trung bình các tỷ lệ và không chặn mọi tỷ lệ quan sát. Chẳng hạn FDP có thể cao trong lần hiếm dù kỳ vọng vẫn được kiểm soát.'))
    ],
    companions:[
      {prompt:b(r('A discovery report has R=40 findings, V=2 of which are false. Compute FDP and state the realized FWER event indicator.'),r('Báo cáo phát hiện có R=40 kết quả, trong đó V=2 là sai. Tính FDP và nêu chỉ báo biến cố FWER quan sát.')),solution:[
        b(r('The realized FDP is $2/40=.05$.'),r('FDP quan sát là $2/40=.05$.')),
        b(r('Since V=2≥1, the false-rejection event occurred and its indicator is one.'),r('Vì V=2≥1, biến cố bác bỏ sai đã xảy ra và chỉ báo bằng một.')),
        b(r('The repeated-sampling FWER would require probabilities over many comparable studies, not just this report.'),r('FWER lặp mẫu cần xác suất qua nhiều nghiên cứu tương đương, không chỉ báo cáo này.'))
      ]},
      {prompt:b(r('A procedure always makes 100 rejections, exactly one false, in every repeated dataset. Find FDP, FDR, and FWER under this stipulated repeated behavior.'),r('Một thủ tục luôn có 100 bác bỏ, đúng một bác bỏ sai, trong mọi bộ dữ liệu lặp. Tìm FDP, FDR và FWER theo hành vi lặp đã cho.')),solution:[
        b(r('Every run has FDP $1/100=.01$, so its expectation FDR is also .01.'),r('Mỗi lần chạy có FDP $1/100=.01$, nên kỳ vọng FDR cũng bằng .01.')),
        b(r('Every run has at least one false rejection, so $P(V\\ge1)=1$ and FWER is one.'),r('Mỗi lần chạy đều có ít nhất một bác bỏ sai, nên $P(V\\ge1)=1$ và FWER bằng một.')),
        b(r('This exhibits low FDP alongside certain occurrence of a false rejection; the targets are not interchangeable.'),r('Ví dụ này cho FDP thấp nhưng chắc chắn có bác bỏ sai; hai mục tiêu không thể thay thế nhau.'))
      ]},
      {prompt:b(r('In a realized experiment no hypotheses are rejected, so R=0 and V=0. Under the standard convention, what is FDP and did the FWER event occur?'),r('Trong thí nghiệm quan sát không giả thuyết nào bị bác bỏ, nên R=0 và V=0. Theo quy ước chuẩn, FDP bằng bao nhiêu và biến cố FWER có xảy ra không?')),solution:[
        b(r('When R=0, define FDP as zero to avoid dividing by zero.'),r('Khi R=0, định nghĩa FDP bằng không để tránh chia cho không.')),
        b(r('Since V=0, the event $V\\ge1$ is false and its indicator is zero for this dataset.'),r('Vì V=0, biến cố $V\\ge1$ sai và chỉ báo của nó bằng không ở bộ dữ liệu này.')),
        b(r('This observation is one realization; population FWER still refers to the probability of false rejection over repetitions.'),r('Đây là một lần quan sát; FWER tổng thể vẫn là xác suất bác bỏ sai qua các lần lặp.'))
      ]}
    ],
    reviewNote:'FDP is a realized ratio (with the R=0 convention); FDR is its expectation. FWER is the probability of at least one false rejection. The companion with one false among 100 in every run explicitly shows FDR=.01 but FWER=1.',
    sourceIds:['p-cmu36705']
  },
  'm2-w058-e5':{
    title:b('Match a multiplicity procedure to the goal','Ghép thủ tục đa kiểm định với mục tiêu'),
    application:b(r('Confirmatory safety decisions emphasize avoiding any false alarm; exploratory screens often tolerate some false discoveries while controlling their expected proportion.'),r('Quyết định an toàn xác nhận nhấn mạnh tránh mọi báo động sai; sàng lọc khám phá thường chấp nhận một số phát hiện sai nhưng kiểm soát tỷ lệ kỳ vọng của chúng.')),
    formula:b(r('For valid super-uniform null p-values, Bonferroni/Holm control FWER at level α under arbitrary dependence. Standard BH controls FDR at target q under independent tests (or a justified dependence extension). Choose the target matching the scientific loss: any false rejection versus expected false-discovery proportion.'),r('Với p-value không thật siêu đều hợp lệ, Bonferroni/Holm kiểm soát FWER ở mức α dưới phụ thuộc tùy ý. BH chuẩn kiểm soát FDR ở mức q dưới các kiểm định độc lập (hoặc mở rộng phụ thuộc được biện minh). Chọn mục tiêu khớp tổn thất khoa học: bất kỳ bác bỏ sai nào so với tỷ lệ phát hiện sai kỳ vọng.')),
    steps:[
      b(r('Translate the decision cost into a repeated-sampling target: probability of at least one false alarm is FWER; expected false fraction among rejections is FDR.'),r('Chuyển chi phí quyết định thành mục tiêu lặp mẫu: xác suất có ít nhất một báo động sai là FWER; tỷ lệ sai kỳ vọng trong số bác bỏ là FDR.')),
      b(r('For confirmatory safety screening, control FWER with Holm or Bonferroni; Holm is usually less conservative while retaining strong control under arbitrary dependence.'),r('Với sàng lọc an toàn xác nhận, kiểm soát FWER bằng Holm hoặc Bonferroni; Holm thường bớt bảo thủ hơn mà vẫn kiểm soát mạnh dưới phụ thuộc tùy ý.')),
      b(r('For exploratory discovery, BH targets FDR and can allow more rejections, but its standard guarantee requires independence and valid null p-values.'),r('Với phát hiện khám phá, BH nhắm FDR và có thể cho nhiều bác bỏ hơn, nhưng bảo đảm chuẩn cần độc lập và p-value không thật hợp lệ.')),
      b(r('If dependence is not covered by the BH theorem being used, justify an extension or choose a procedure with the needed guarantee rather than transferring assumptions silently.'),r('Nếu phụ thuộc không được định lý BH đang dùng bao phủ, hãy biện minh phần mở rộng hoặc chọn thủ tục có bảo đảm cần thiết thay vì ngầm chuyển giả thiết.'))
    ],
    primarySolution:[
      b(r('A safety screen requiring probability of any false alarm at most .05 asks for FWER control; choose Holm or Bonferroni at α=.05.'),r('Sàng lọc an toàn đòi xác suất có báo động sai không quá .05 cần kiểm soát FWER; chọn Holm hoặc Bonferroni mức α=.05.')),
      b(r('Holm is a strong-control option valid under arbitrary dependence when true-null p-values are super-uniform; Bonferroni also has that validity.'),r('Holm là lựa chọn kiểm soát mạnh hợp lệ dưới phụ thuộc tùy ý khi p-value không thật siêu đều; Bonferroni cũng hợp lệ như vậy.')),
      b(r('The exploratory genomics goal is expected false proportion, so BH at q=.10 matches it when tests are independent and null p-values are valid.'),r('Mục tiêu genomics khám phá là tỷ lệ sai kỳ vọng, nên BH mức q=.10 phù hợp khi kiểm định độc lập và p-value không thật hợp lệ.')),
      b(r('These guarantees target different error summaries; the BH choice should be revisited if its dependence condition is not credible.'),r('Hai bảo đảm nhắm các tóm tắt lỗi khác nhau; cần xem lại lựa chọn BH nếu điều kiện phụ thuộc không đáng tin.'))
    ],
    companions:[
      {prompt:b(r('A clinical trial has 12 primary endpoints; the regulator requires at most a 0.05 probability of any false efficacy claim. Recommend a multiplicity procedure and state the p-value and dependence assumptions.'),r('Thử nghiệm lâm sàng có 12 tiêu chí chính; cơ quan quản lý yêu cầu xác suất có bất kỳ tuyên bố hiệu quả sai nào không quá 0.05. Đề xuất thủ tục đa kiểm định và nêu giả thiết p-value cùng phụ thuộc.')),solution:[
        b(r('The objective is any false claim, so the target is FWER at .05 rather than expected FDP.'),r('Mục tiêu là bất kỳ tuyên bố sai nào, nên đích là FWER .05 chứ không phải FDP kỳ vọng.')),
        b(r('Holm step-down or Bonferroni controls strong FWER at α=.05.'),r('Holm bước xuống hoặc Bonferroni kiểm soát FWER mạnh ở α=.05.')),
        b(r('Both require valid super-uniform p-values for true nulls but permit arbitrary dependence among tests.'),r('Cả hai cần p-value không thật siêu đều hợp lệ nhưng cho phép phụ thuộc tùy ý giữa các kiểm định.'))
      ]},
      {prompt:b(r('An exploratory ecology team screens 500 independent species associations and is willing to control expected FDP at q=.1. Which procedure fits, and what additional assumptions must be checked?'),r('Nhóm sinh thái học khám phá sàng lọc 500 liên hệ loài độc lập và chấp nhận kiểm soát FDP kỳ vọng ở q=.1. Thủ tục nào phù hợp và cần kiểm tra giả thiết bổ sung nào?')),solution:[
        b(r('The goal is expected false-discovery proportion, so BH at q=.1 is the matching target.'),r('Mục tiêu là tỷ lệ phát hiện sai kỳ vọng, nên BH mức q=.1 khớp mục tiêu.')),
        b(r('Check that tests are independent as stated and each true-null p-value is super-uniform under its null.'),r('Kiểm tra các kiểm định độc lập như đã nêu và mỗi p-value dưới không thật siêu đều theo giả thuyết không.')),
        b(r('The resulting guarantee concerns FDR across repetitions, not the false status of each selected species association.'),r('Bảo đảm thu được liên quan FDR qua các lần lặp, không xác định trạng thái sai của từng liên hệ loài được chọn.'))
      ]},
      {prompt:b(r('A safety-monitoring system has strongly dependent test statistics and demands familywise false-alarm control at .01. Would standard independent-test BH be justified? Choose a procedure with a stated guarantee.'),r('Hệ thống giám sát an toàn có thống kê kiểm định phụ thuộc mạnh và đòi kiểm soát báo động sai theo họ ở .01. BH chuẩn cho kiểm định độc lập có được biện minh không? Chọn thủ tục có bảo đảm đã nêu.')),solution:[
        b(r('The goal is FWER, and strong dependence does not satisfy the independence premise for standard BH.'),r('Mục tiêu là FWER, còn phụ thuộc mạnh không thỏa tiền đề độc lập của BH chuẩn.')),
        b(r('Use Holm at α=.01, which controls strong FWER under arbitrary dependence when true-null p-values are valid.'),r('Dùng Holm ở α=.01; thủ tục kiểm soát FWER mạnh dưới phụ thuộc tùy ý nếu p-value không thật hợp lệ.')),
        b(r('Bonferroni at .01 is another valid option, though it may be more conservative; do not claim standard BH provides the requested familywise guarantee.'),r('Bonferroni mức .01 cũng hợp lệ nhưng có thể bảo thủ hơn; không khẳng định BH chuẩn cho bảo đảm theo họ đang cần.'))
      ]}
    ],
    reviewNote:'The choice follows the loss function: FWER for any false alarm, FDR for expected false share. Holm/Bonferroni permit arbitrary dependence with valid null p-values; BH here is specifically justified under independence.',
    sourceIds:['p-cmu36705']
  }
};
export default reviewed;
