import {b, type ReviewedLesson} from './types';

type Pair = readonly [string, string];
const bi = ([en, vi]: Pair) => b(String.raw`${en}`, String.raw`${vi}`);
const q = (prompt: Pair, solution: Pair[]) => ({prompt: bi(prompt), solution: solution.map(bi)});

const reviewed: Record<string, ReviewedLesson> = {
  'f-w012-e1': {
    application: bi(['The supremum theorem identifies the limit of a nondecreasing sequence from its least upper bound, without assuming the limit in advance.', 'Định lý supremum xác định giới hạn của dãy không giảm từ cận trên nhỏ nhất mà không giả sử trước giới hạn.']),
    formula: bi(['If $(a_n)$ is a nondecreasing real sequence bounded above, then it converges and $\\lim_{n\\to\\infty}a_n=\\sup\\{a_n:n\\in\\mathbb N\\}$.', 'Nếu $(a_n)$ là dãy thực không giảm và bị chặn trên thì dãy hội tụ và $\\lim_{n\\to\\infty}a_n=\\sup\\{a_n:n\\in\\mathbb N\\}$.']),
    steps: [
      bi(['Show the sequence is nondecreasing by comparing consecutive terms.', 'Chứng minh dãy không giảm bằng cách so sánh hai số hạng liên tiếp.']),
      bi(['Give an upper bound and verify it is the least upper bound using the definition of supremum.', 'Nêu một cận trên rồi dùng định nghĩa supremum để xác nhận đó là cận trên nhỏ nhất.']),
      bi(['For every smaller candidate $b$, find a sequence term that exceeds $b$; do not presume the limit.', 'Với mọi ứng viên $b$ nhỏ hơn, tìm một số hạng vượt $b$; không giả định trước giới hạn.']),
      bi(['Only after identifying the supremum, invoke monotone convergence to read off the limit.', 'Chỉ sau khi xác định supremum mới dùng định lý hội tụ đơn điệu để kết luận giới hạn.'])
    ],
    primarySolution: [
      bi(['For $a_n=1-1/(n+1)$, $a_{n+1}-a_n=1/((n+1)(n+2))>0$, so the sequence increases.', 'Với $a_n=1-1/(n+1)$, $a_{n+1}-a_n=1/((n+1)(n+2))>0$, nên dãy tăng.']),
      bi(['Every term is below $1$, so $1$ is an upper bound.', 'Mọi số hạng nhỏ hơn $1$, nên $1$ là một cận trên.']),
      bi(['If $b<1$, choose an integer $n$ with $n+1>1/(1-b)$; then $1/(n+1)<1-b$ and hence $a_n>b$. Thus no smaller number is an upper bound, so $\\sup_n a_n=1$.', 'Nếu $b<1$, chọn số nguyên $n$ sao cho $n+1>1/(1-b)$; khi đó $1/(n+1)<1-b$ nên $a_n>b$. Vậy không số nhỏ hơn nào là cận trên, do đó $\\sup_n a_n=1$.']),
      bi(['The sequence is nondecreasing and bounded above, so the theorem gives $a_n\\to\\sup_n a_n=1$.', 'Dãy không giảm và bị chặn trên, nên định lý cho $a_n\\to\\sup_n a_n=1$.'])
    ],
    companions: [
      q(['For $s_n=\\sum_{k=1}^n2^{-k}$, prove convergence by monotonicity and determine the supremum without assuming the limit.', 'Với $s_n=\\sum_{k=1}^n2^{-k}$, chứng minh hội tụ bằng tính đơn điệu và tìm supremum mà không giả sử giới hạn.'], [
        ['The next-term difference is $s_{n+1}-s_n=2^{-(n+1)}>0$, so $(s_n)$ increases.', 'Hiệu số hạng kế tiếp là $s_{n+1}-s_n=2^{-(n+1)}>0$, nên $(s_n)$ tăng.'],
        ['The geometric-sum identity gives $s_n=1-2^{-n}<1$, so $1$ is an upper bound.', 'Công thức tổng cấp số nhân cho $s_n=1-2^{-n}<1$, nên $1$ là cận trên.'],
        ['For any $b<1$, choose $n$ with $2^{-n}<1-b$; then $s_n>b$. Thus $\\sup_n s_n=1$, and monotone convergence gives $s_n\\to1$.', 'Với mọi $b<1$, chọn $n$ sao cho $2^{-n}<1-b$; khi đó $s_n>b$. Vậy $\\sup_n s_n=1$ và định lý hội tụ đơn điệu cho $s_n\\to1$.']
      ]),
      q(['Let $t_n=3-1/n$ for $n\\ge1$. Verify the monotone bounded hypotheses and identify its supremum and limit.', 'Cho $t_n=3-1/n$ với $n\\ge1$. Kiểm tra giả thiết đơn điệu, bị chặn rồi xác định supremum và giới hạn.'], [
        ['The difference is $t_{n+1}-t_n=1/(n(n+1))>0$, so the sequence increases.', 'Hiệu là $t_{n+1}-t_n=1/(n(n+1))>0$, nên dãy tăng.'],
        ['Each term is below $3$, making $3$ an upper bound.', 'Mọi số hạng nhỏ hơn $3$, nên $3$ là cận trên.'],
        ['For any $b<3$, choose $n>1/(3-b)$; then $t_n>b$, so $\\sup_n t_n=3$ and the theorem gives limit $3$.', 'Với mọi $b<3$, chọn $n>1/(3-b)$; khi đó $t_n>b$, nên $\\sup_n t_n=3$ và định lý cho giới hạn $3$.']
      ]),
      q(['Let $u_n=4+1/n$. Prove it is decreasing and bounded below, then identify its infimum and limit using the increasing-sequence theorem.', 'Cho $u_n=4+1/n$. Chứng minh dãy giảm và bị chặn dưới, rồi tìm infimum và giới hạn bằng định lý dãy tăng.'], [
        ['The sequence decreases because $u_{n+1}-u_n=-1/(n(n+1))<0$, and every term exceeds $4$.', 'Dãy giảm vì $u_{n+1}-u_n=-1/(n(n+1))<0$, và mọi số hạng lớn hơn $4$.'],
        ['The sequence $-u_n$ is nondecreasing and bounded above by $-4$.', 'Dãy $-u_n$ không giảm và bị chặn trên bởi $-4$.'],
        ['For any $b<-4$, choose $n$ with $1/n<-4-b$; then $-u_n>b$. Hence $\\sup_n(-u_n)=-4$, so $\\inf_nu_n=4$ and $u_n\\to4$.', 'Với $b<-4$, chọn $n$ sao cho $1/n<-4-b$; khi đó $-u_n>b$. Vậy $\\sup_n(-u_n)=-4$, nên $\\inf_nu_n=4$ và $u_n\\to4$.']
      ])
    ],
    reviewNote: 'Checked monotonicity and boundedness; the least-upper-bound step uses an arbitrary b<1 before invoking the theorem, avoiding circular use of the limit.',
    sourceIds: ['f-18100a']
  },
  'f-w012-e2': {
    title:bi(['Cauchy tail bounds','Chặn sai khác ở đuôi dãy Cauchy']),
    application: bi(['The Cauchy condition measures whether all sufficiently late terms lie close to one another, without needing the limit as input.', 'Điều kiện Cauchy đo việc mọi số hạng đủ xa nằm gần nhau mà không cần biết trước giới hạn.']),
    formula: bi(['A sequence is Cauchy if $\\forall\\varepsilon>0\\ \\exists N\\ \\forall m,n\\ge N:\\ |a_m-a_n|<\\varepsilon$; completeness of $\\mathbb R$ then guarantees a real limit.', 'Dãy Cauchy nếu $\\forall\\varepsilon>0\\ \\exists N\\ \\forall m,n\\ge N:\\ |a_m-a_n|<\\varepsilon$; tính đầy đủ của $\\mathbb R$ đảm bảo dãy có giới hạn thực.']),
    steps: [
      bi(['Start with arbitrary indices $m,n$ beyond the same tail index $N$.', 'Bắt đầu với hai chỉ số $m,n$ bất kỳ cùng nằm sau chỉ số đuôi $N$.']),
      bi(['Bound their difference by a quantity depending only on the tail, not on the particular pair.', 'Chặn hiệu bằng lượng chỉ phụ thuộc đuôi, không phụ thuộc cặp chỉ số cụ thể.']),
      bi(['Choose an integer $N$ making that tail bound smaller than the requested $\\varepsilon$.', 'Chọn số nguyên $N$ để chặn đuôi nhỏ hơn $\\varepsilon$ yêu cầu.']),
      bi(['Verify the estimate holds for every pair $m,n\\ge N$; monotonicity is not required.', 'Kiểm tra ước lượng đúng với mọi cặp $m,n\\ge N$; không cần tính đơn điệu.'])
    ],
    primarySolution: [
      bi(['For $m,n\\ge N$, $|1/m-1/n|\\le\\max(1/m,1/n)\\le1/N$.', 'Với $m,n\\ge N$, $|1/m-1/n|\\le\\max(1/m,1/n)\\le1/N$.']),
      bi(['Given $\\varepsilon>0$, choose an integer $N>1/\\varepsilon$.', 'Cho $\\varepsilon>0$, chọn số nguyên $N>1/\\varepsilon$.']),
      bi(['Then every $m,n\\ge N$ satisfies $|1/m-1/n|\\le1/N<\\varepsilon$.', 'Khi đó mọi $m,n\\ge N$ thỏa $|1/m-1/n|\\le1/N<\\varepsilon$.']),
      bi(['This is exactly the Cauchy condition; the sequence is not required to be monotone for the argument.', 'Đây chính là điều kiện Cauchy; lập luận không đòi hỏi dãy đơn điệu.'])
    ],
    companions: [
      q(['Show $a_n=(-1)^n/n$ is Cauchy even though its signs alternate.', 'Chứng minh $a_n=(-1)^n/n$ là Cauchy dù dấu luân phiên.'], [
        ['For $m,n\\ge N$, the triangle inequality gives $|a_m-a_n|\\le1/m+1/n\\le2/N$.', 'Với $m,n\\ge N$, bất đẳng thức tam giác cho $|a_m-a_n|\\le1/m+1/n\\le2/N$.'],
        ['Given $\\varepsilon>0$, choose an integer $N>2/\\varepsilon$.', 'Cho $\\varepsilon>0$, chọn số nguyên $N>2/\\varepsilon$.'],
        ['Then $|a_m-a_n|<\\varepsilon$ for every pair in the tail, so the sequence is Cauchy despite not being monotone.', 'Khi đó $|a_m-a_n|<\\varepsilon$ với mọi cặp ở đuôi, nên dãy Cauchy dù không đơn điệu.']
      ]),
      q(['Let $S_n=\\sum_{k=1}^n(-1)^k2^{-k}$. Prove the partial sums are Cauchy and find their limit.', 'Cho $S_n=\\sum_{k=1}^n(-1)^k2^{-k}$. Chứng minh tổng riêng Cauchy và tìm giới hạn.'], [
        ['For $m>n$, $|S_m-S_n|\\le\\sum_{k=n+1}^m2^{-k}\\le2^{-n}$.', 'Với $m>n$, $|S_m-S_n|\\le\\sum_{k=n+1}^m2^{-k}\\le2^{-n}$.'],
        ['Choose $N$ so that $2^{-N}<\\varepsilon$; then every $m,n\\ge N$ has difference below $\\varepsilon$.', 'Chọn $N$ sao cho $2^{-N}<\\varepsilon$; khi đó mọi $m,n\\ge N$ có hiệu nhỏ hơn $\\varepsilon$.'],
        ['The geometric series sums to $\\sum_{k=1}^\\infty(-1/2)^k=(-1/2)/(1+1/2)=-1/3$, which is the limit by completeness.', 'Chuỗi hình học có tổng $\\sum_{k=1}^\\infty(-1/2)^k=(-1/2)/(1+1/2)=-1/3$, là giới hạn nhờ tính đầy đủ.']
      ]),
      q(['Use the Cauchy definition to prove $c_n=\\sin(1/n)$ is Cauchy.', 'Dùng định nghĩa Cauchy để chứng minh $c_n=\\sin(1/n)$ là Cauchy.'], [
        ['The mean-value theorem and $|\\cos t|\\le1$ imply $|\\sin u-\\sin v|\\le|u-v|$.', 'Định lý giá trị trung bình và $|\\cos t|\\le1$ suy ra $|\\sin u-\\sin v|\\le|u-v|$.'],
        ['Thus for $m,n\\ge N$, $|c_m-c_n|\\le|1/m-1/n|\\le1/N$.', 'Vì thế với $m,n\\ge N$, $|c_m-c_n|\\le|1/m-1/n|\\le1/N$.'],
        ['Choose an integer $N>1/\\varepsilon$; all tail differences are then less than $\\varepsilon$.', 'Chọn số nguyên $N>1/\\varepsilon$; khi đó mọi hiệu ở đuôi nhỏ hơn $\\varepsilon$.']
      ])
    ],
    reviewNote: 'Checked the tail estimates uniformly over both indices; the geometric partial sums use the absolute tail bound.',
    sourceIds: ['f-18100a']
  },
  'f-w012-e3': {
    application: bi(['Subsequences preserve distinct persistent behaviors; two different subsequential limits disprove convergence, while boundedness is checked independently.', 'Dãy con giữ lại các hành vi lặp khác nhau; hai giới hạn dãy con khác nhau bác bỏ hội tụ, còn tính bị chặn được kiểm tra riêng.']),
    formula: bi(['If $a_n\\to L$, then every subsequence also tends to $L$; distinct subsequential limits therefore imply divergence.', 'Nếu $a_n\\to L$, mọi dãy con cũng tiến đến $L$; do đó hai giới hạn dãy con khác nhau suy ra phân kỳ.']),
    steps: [
      bi(['Find two subsequences along which the oscillatory term has fixed, different values.', 'Tìm hai dãy con mà số hạng dao động có các giá trị cố định khác nhau.']),
      bi(['Let the vanishing perturbation tend to zero along both subsequences.', 'Cho phần nhiễu tiến về không trên cả hai dãy con.']),
      bi(['Invoke uniqueness of the limit to rule out convergence of the whole sequence.', 'Dùng tính duy nhất của giới hạn để bác bỏ hội tụ của dãy gốc.']),
      bi(['Bound the oscillatory part and perturbation separately to obtain a global bound.', 'Chặn riêng phần dao động và phần nhiễu để có chặn toàn cục.'])
    ],
    primarySolution: [
      bi(['For even $n=2k$, $b_{2k}=1+1/(2k)\\to1$; for odd $n=2k+1$, $b_{2k+1}=-1+1/(2k+1)\\to-1$.', 'Với $n=2k$ chẵn, $b_{2k}=1+1/(2k)\\to1$; với $n=2k+1$ lẻ, $b_{2k+1}=-1+1/(2k+1)\\to-1$.']),
      bi(['These two subsequential limits are distinct, but every subsequence of a convergent sequence must share its limit.', 'Hai giới hạn dãy con này khác nhau, trong khi mọi dãy con của dãy hội tụ phải có cùng giới hạn.']),
      bi(['Therefore the full sequence does not converge.', 'Vì vậy dãy gốc không hội tụ.']),
      bi(['For every $n\\ge1$, $|b_n|\\le1+1/n\\le2$, so the sequence is bounded.', 'Với mọi $n\\ge1$, $|b_n|\\le1+1/n\\le2$, nên dãy bị chặn.'])
    ],
    companions: [
      q(['Show $d_n=\\sin(n\\pi/2)$ is bounded but not convergent by choosing two subsequences.', 'Chứng minh $d_n=\\sin(n\\pi/2)$ bị chặn nhưng không hội tụ bằng cách chọn hai dãy con.'], [
        ['Every term lies in $[-1,1]$, so the sequence is bounded.', 'Mọi số hạng thuộc $[-1,1]$, nên dãy bị chặn.'],
        ['For $n=4k+1$, $d_n=1$; for $n=4k+3$, $d_n=-1$.', 'Với $n=4k+1$, $d_n=1$; với $n=4k+3$, $d_n=-1$.'],
        ['The subsequential limits $1$ and $-1$ differ, so the full sequence cannot converge.', 'Hai giới hạn dãy con $1$ và $-1$ khác nhau, nên dãy gốc không thể hội tụ.']
      ]),
      q(['Define $e_{2k}=1-1/k$ and $e_{2k-1}=1/3$ for $k\\ge1$. Prove $(e_n)$ is bounded and nonconvergent.', 'Định nghĩa $e_{2k}=1-1/k$ và $e_{2k-1}=1/3$ với $k\\ge1$. Chứng minh $(e_n)$ bị chặn và không hội tụ.'], [
        ['The even terms lie in $[0,1)$ and odd terms equal $1/3$, so all terms lie in $[0,1)$.', 'Số hạng chẵn thuộc $[0,1)$ còn số hạng lẻ bằng $1/3$, nên mọi số hạng thuộc $[0,1)$.'],
        ['The even subsequence $e_{2k}=1-1/k$ tends to $1$.', 'Dãy con chẵn $e_{2k}=1-1/k$ tiến đến $1$.'],
        ['The odd subsequence is constantly $1/3$; the distinct subsequential limits prove nonconvergence.', 'Dãy con lẻ luôn bằng $1/3$; hai giới hạn dãy con khác nhau chứng minh không hội tụ.']
      ]),
      q(['Let $r_n=0$ when $3\\mid n$, $r_n=1$ when $n\\equiv1\\pmod3$, and $r_n=2$ when $n\\equiv2\\pmod3$. Prove boundedness and nonconvergence.', 'Cho $r_n=0$ khi $3\\mid n$, $r_n=1$ khi $n\\equiv1\\pmod3$, và $r_n=2$ khi $n\\equiv2\\pmod3$. Chứng minh dãy bị chặn và không hội tụ.'], [
        ['The only possible values are $0,1,2$, so $0\\le r_n\\le2$.', 'Các giá trị duy nhất có thể là $0,1,2$, nên $0\\le r_n\\le2$.'],
        ['Along $n=3k$, terms are constantly $0$; along $n=3k+2$, terms are constantly $2$.', 'Dọc $n=3k$, các số hạng luôn bằng $0$; dọc $n=3k+2$, chúng luôn bằng $2$.'],
        ['The subsequences have different limits, ruling out convergence of $(r_n)$.', 'Hai dãy con có giới hạn khác nhau, nên $(r_n)$ không hội tụ.']
      ])
    ],
    reviewNote: 'Verified each global bound and each pair of distinct subsequential limits.',
    sourceIds: ['f-18100a']
  },
  'f-w012-e4': {
    application: bi(['A recurrence can be analyzed by proving an invariant bound and monotonicity first; continuity of the update rule then identifies the limit.', 'Có thể phân tích truy hồi bằng cách chứng minh chặn bất biến và tính đơn điệu trước; tính liên tục của quy tắc cập nhật sau đó xác định giới hạn.']),
    formula: bi(['If $x_{n+1}=\\Phi(x_n)$, the sequence is monotone and bounded, and $\\Phi$ is continuous, then its limit $L$ satisfies $L=\\Phi(L)$.', 'Nếu $x_{n+1}=\\Phi(x_n)$, dãy đơn điệu và bị chặn, còn $\\Phi$ liên tục, thì giới hạn $L$ thỏa $L=\\Phi(L)$.']),
    steps: [
      bi(['Use induction to prove all iterates stay in a proposed interval.', 'Dùng quy nạp để chứng minh mọi số hạng nằm trong khoảng dự kiến.']),
      bi(['Compare consecutive terms using the recurrence and the invariant bound.', 'Dùng truy hồi và chặn bất biến để so sánh hai số hạng liên tiếp.']),
      bi(['Apply monotone bounded convergence to obtain a finite limit.', 'Áp dụng hội tụ đơn điệu bị chặn để có giới hạn hữu hạn.']),
      bi(['Pass to the limit in the continuous recurrence and solve its fixed-point equation.', 'Lấy giới hạn trong truy hồi liên tục rồi giải phương trình điểm bất động.'])
    ],
    primarySolution: [
      bi(['Since $x_1=1<2$, and $x_n<2$ implies $x_{n+1}=(x_n+2)/2<2$, induction gives $x_n<2$ for all $n$.', 'Vì $x_1=1<2$, và $x_n<2$ kéo theo $x_{n+1}=(x_n+2)/2<2$, quy nạp cho $x_n<2$ với mọi $n$.']),
      bi(['The difference $x_{n+1}-x_n=(2-x_n)/2>0$, so the sequence increases and is bounded above by $2$.', 'Hiệu $x_{n+1}-x_n=(2-x_n)/2>0$, nên dãy tăng và bị chặn trên bởi $2$.']),
      bi(['It converges to some $L\\le2$; taking limits in the recurrence yields $L=(L+2)/2$.', 'Dãy hội tụ đến $L\\le2$; lấy giới hạn trong truy hồi được $L=(L+2)/2$.']),
      bi(['Solving gives $L=2$; equivalently, $2-x_n=2^{-(n-1)}\\to0$.', 'Giải được $L=2$; tương đương $2-x_n=2^{-(n-1)}\\to0$.'])
    ],
    companions: [
      q(['Set $y_1=1$ and $y_{n+1}=\\sqrt{2+y_n}$. Prove the sequence increases to $2$.', 'Đặt $y_1=1$ và $y_{n+1}=\\sqrt{2+y_n}$. Chứng minh dãy tăng đến $2$.'], [
        ['If $1\\le y_n<2$, then $1<\\sqrt{2+y_n}<2$; induction keeps every term below $2$.', 'Nếu $1\\le y_n<2$, thì $1<\\sqrt{2+y_n}<2$; quy nạp giữ mọi số hạng dưới $2$.'],
        ['Rationalizing gives $y_{n+1}-y_n=(2-y_n)(y_n+1)/(\\sqrt{2+y_n}+y_n)>0$.', 'Khử căn cho $y_{n+1}-y_n=(2-y_n)(y_n+1)/(\\sqrt{2+y_n}+y_n)>0$.'],
        ['The increasing bounded sequence has limit $L\\in[1,2]$; continuity gives $L=\\sqrt{2+L}$, so $L^2-L-2=0$ and $L=2$.', 'Dãy tăng bị chặn có giới hạn $L\\in[1,2]$; tính liên tục cho $L=\\sqrt{2+L}$, nên $L^2-L-2=0$ và $L=2$.']
      ]),
      q(['Let $z_1=0$ and $z_{n+1}=(z_n+6)/3$. Show it increases to its fixed point.', 'Cho $z_1=0$ và $z_{n+1}=(z_n+6)/3$. Chứng minh dãy tăng đến điểm bất động.'], [
        ['If $0\\le z_n<3$, then $0\\le z_{n+1}<3$ and $z_{n+1}-z_n=2(3-z_n)/3>0$.', 'Nếu $0\\le z_n<3$, thì $0\\le z_{n+1}<3$ và $z_{n+1}-z_n=2(3-z_n)/3>0$.'],
        ['Starting at $z_1=0$, induction proves the sequence increases and remains below $3$.', 'Bắt đầu tại $z_1=0$, quy nạp chứng minh dãy tăng và luôn dưới $3$.'],
        ['Its limit satisfies $L=(L+6)/3$, hence $L=3$.', 'Giới hạn thỏa $L=(L+6)/3$, suy ra $L=3$.']
      ]),
      q(['Let $w_1=3$ and $w_{n+1}=(w_n+1)/2$. Prove it decreases to $1$ using the increasing-sequence theorem.', 'Cho $w_1=3$ và $w_{n+1}=(w_n+1)/2$. Chứng minh dãy giảm đến $1$ bằng định lý dãy tăng.'], [
        ['If $w_n>1$, then $w_{n+1}-w_n=(1-w_n)/2<0$ and $w_{n+1}>1$.', 'Nếu $w_n>1$, thì $w_{n+1}-w_n=(1-w_n)/2<0$ và $w_{n+1}>1$.'],
        ['Thus $w_n$ decreases and is bounded below by $1$; its negation $-w_n$ is nondecreasing and bounded above.', 'Vậy $w_n$ giảm và bị chặn dưới bởi $1$; dãy đối $-w_n$ không giảm và bị chặn trên.'],
        ['The monotone convergence theorem gives a limit $L$; the recurrence forces $L=(L+1)/2$, hence $L=1$.', 'Định lý hội tụ đơn điệu cho giới hạn $L$; truy hồi buộc $L=(L+1)/2$, nên $L=1$.']
      ])
    ],
    reviewNote: 'Checked invariant intervals, consecutive-term differences, and fixed-point equations; the decreasing case is handled by negation.',
    sourceIds: ['f-18100a']
  },
  'f-w012-e5': {
    application: bi(['Negating the Cauchy property fixes one tolerance that is violated by pairs of terms arbitrarily far into the sequence.', 'Phủ định tính Cauchy cố định một sai số bị vi phạm bởi các cặp số hạng ở xa tùy ý trong dãy.']),
    formula: bi(['Not Cauchy means $\\exists\\varepsilon_0>0\\ \\forall N\\in\\mathbb N\\ \\exists m,n\\ge N$ such that $|a_m-a_n|\\ge\\varepsilon_0$.', 'Không Cauchy nghĩa là $\\exists\\varepsilon_0>0\\ \\forall N\\in\\mathbb N\\ \\exists m,n\\ge N$ sao cho $|a_m-a_n|\\ge\\varepsilon_0$.']),
    steps: [
      bi(['Write the Cauchy condition with quantifiers in the order $\\forall\\varepsilon\\ \\exists N\\ \\forall m,n$.', 'Viết điều kiện Cauchy bằng lượng từ theo thứ tự $\\forall\\varepsilon\\ \\exists N\\ \\forall m,n$.']),
      bi(['Negate each quantifier and reverse the strict inequality: $\\forall$ becomes $\\exists$, and $<\\varepsilon$ becomes $\\ge\\varepsilon$.', 'Phủ định từng lượng từ và đảo bất đẳng thức nghiêm: $\\forall$ thành $\\exists$, còn $<\\varepsilon$ thành $\\ge\\varepsilon$.']),
      bi(['Choose the fixed tolerance $\\varepsilon_0$ before considering any tail index $N$.', 'Chọn sai số cố định $\\varepsilon_0$ trước khi xét bất kỳ chỉ số đuôi $N$ nào.']),
      bi(['For each $N$, construct two indices at least $N$ whose terms remain separated by that same tolerance.', 'Với mỗi $N$, dựng hai chỉ số ít nhất bằng $N$ sao cho số hạng cách nhau ít nhất cùng sai số ấy.'])
    ],
    primarySolution: [
      bi(['The Cauchy condition is $\\forall\\varepsilon>0\\ \\exists N\\ \\forall m,n\\ge N:\\ |a_m-a_n|<\\varepsilon$.', 'Điều kiện Cauchy là $\\forall\\varepsilon>0\\ \\exists N\\ \\forall m,n\\ge N:\\ |a_m-a_n|<\\varepsilon$.']),
      bi(['Its negation is $\\exists\\varepsilon_0>0\\ \\forall N\\ \\exists m,n\\ge N:\\ |a_m-a_n|\\ge\\varepsilon_0$.', 'Phủ định là $\\exists\\varepsilon_0>0\\ \\forall N\\ \\exists m,n\\ge N:\\ |a_m-a_n|\\ge\\varepsilon_0$.']),
      bi(['For $a_n=(-1)^n$, take $\\varepsilon_0=1$. Beyond each $N$ there is an even and an odd index.', 'Với $a_n=(-1)^n$, lấy $\\varepsilon_0=1$. Sau mỗi $N$ đều có một chỉ số chẵn và một chỉ số lẻ.']),
      bi(['Their values differ by $2\\ge1$, so the negated condition holds and the sequence is not Cauchy.', 'Hai giá trị lệch nhau $2\\ge1$, nên điều kiện phủ định đúng và dãy không Cauchy.'])
    ],
    companions: [
      q(['Use the negated Cauchy condition to show $a_n=n$ is not Cauchy.', 'Dùng phủ định điều kiện Cauchy để chứng minh $a_n=n$ không Cauchy.'], [
        ['Choose a fixed tolerance $\\varepsilon_0=1/2$.', 'Chọn sai số cố định $\\varepsilon_0=1/2$.'],
        ['For any $N$, choose $m=N$ and $n=N+1$; both indices are at least $N$.', 'Với mọi $N$, chọn $m=N$ và $n=N+1$; cả hai chỉ số đều ít nhất bằng $N$.'],
        ['Then $|a_m-a_n|=1\\ge1/2$, proving the quantified negation.', 'Khi đó $|a_m-a_n|=1\\ge1/2$, chứng minh phủ định lượng từ.']
      ]),
      q(['Negate the statement “there exists $N$ such that $|a_n-L|<\\varepsilon$ for all $n\\ge N$” and write the result with quantifiers.', 'Phủ định phát biểu “tồn tại $N$ sao cho $|a_n-L|<\\varepsilon$ với mọi $n\\ge N$” rồi viết kết quả bằng lượng từ.'], [
        ['The tail statement has form $\\exists N\\ \\forall n\\ge N:\\ |a_n-L|<\\varepsilon$.', 'Phát biểu đuôi có dạng $\\exists N\\ \\forall n\\ge N:\\ |a_n-L|<\\varepsilon$.'],
        ['Negating swaps these quantifiers and yields $\\forall N\\ \\exists n\\ge N$.', 'Phủ định đổi các lượng từ và cho $\\forall N\\ \\exists n\\ge N$.'],
        ['Negating the inequality gives $|a_n-L|\\ge\\varepsilon$, so the full negation is $\\forall N\\ \\exists n\\ge N:\\ |a_n-L|\\ge\\varepsilon$.', 'Phủ định bất đẳng thức cho $|a_n-L|\\ge\\varepsilon$, nên phủ định đầy đủ là $\\forall N\\ \\exists n\\ge N:\\ |a_n-L|\\ge\\varepsilon$.']
      ]),
      q(['Define $c_n=0$ if $3\\mid n$, $c_n=1$ if $n\\equiv1\\pmod3$, and $c_n=2$ if $n\\equiv2\\pmod3$. Give a fixed tolerance and arbitrarily late pairs showing it is not Cauchy.', 'Định nghĩa $c_n=0$ nếu $3\\mid n$, $c_n=1$ nếu $n\\equiv1\\pmod3$, và $c_n=2$ nếu $n\\equiv2\\pmod3$. Nêu sai số cố định và các cặp muộn tùy ý chứng minh dãy không Cauchy.'], [
        ['Take $\\varepsilon_0=1$.', 'Lấy $\\varepsilon_0=1$.'],
        ['For any $N$, choose $k$ large enough that $3k\\ge N$ and take $m=3k$, $n=3k+2$.', 'Với mọi $N$, chọn $k$ đủ lớn để $3k\\ge N$ rồi lấy $m=3k$, $n=3k+2$.'],
        ['Then $|c_m-c_n|=|0-2|=2\\ge1$, so the fixed separation occurs beyond every tail index.', 'Khi đó $|c_m-c_n|=|0-2|=2\\ge1$, nên khoảng cách cố định xuất hiện sau mọi chỉ số đuôi.']
      ])
    ],
    reviewNote: 'Checked the quantifier order and each fixed-tolerance witness; indices can be chosen beyond every prescribed N.',
    sourceIds: ['f-18100a']
  },
  'f-w013-e1': {
    application: bi(['A global Lipschitz estimate converts input closeness into output closeness with one choice that works everywhere on the domain.', 'Ước lượng Lipschitz toàn cục đổi độ gần của đầu vào thành độ gần của đầu ra bằng một lựa chọn dùng được trên toàn miền.']),
    formula: bi(['If $\\|f(x)-f(y)\\|\\le L\\|x-y\\|$ for all $x,y\\in D$ with finite $L\\ge0$, then $f$ is uniformly continuous; for $L>0$ choose $\\delta=\\varepsilon/L$.', 'Nếu $\\|f(x)-f(y)\\|\\le L\\|x-y\\|$ với mọi $x,y\\in D$ và $L\\ge0$ hữu hạn, thì $f$ liên tục đều; khi $L>0$ chọn $\\delta=\\varepsilon/L$.']),
    steps: [
      bi(['Start with the global Lipschitz inequality, which holds for every pair in $D$.', 'Bắt đầu từ bất đẳng thức Lipschitz toàn cục, đúng với mọi cặp trong $D$.']),
      bi(['For $L>0$, set $\\delta=\\varepsilon/L$; then $\\|x-y\\|<\\delta$ makes the output gap less than $\\varepsilon$.', 'Với $L>0$, đặt $\\delta=\\varepsilon/L$; khi $\\|x-y\\|<\\delta$, hiệu đầu ra nhỏ hơn $\\varepsilon$.']),
      bi(['The chosen $\\delta$ depends on $\\varepsilon$ and $L$, not on the location $x$.', 'Giá trị $\\delta$ phụ thuộc $\\varepsilon$ và $L$, không phụ thuộc vị trí $x$.']),
      bi(['If $L=0$, the inequality forces $f$ to be constant, so any $\\delta>0$ works.', 'Nếu $L=0$, bất đẳng thức buộc $f$ là hàm hằng, nên mọi $\\delta>0$ đều dùng được.'])
    ],
    primarySolution: [
      bi(['Fix $\\varepsilon>0$. If $L>0$, choose $\\delta=\\varepsilon/L$.', 'Cố định $\\varepsilon>0$. Nếu $L>0$, chọn $\\delta=\\varepsilon/L$.']),
      bi(['For any $x,y\\in D$ with $\\|x-y\\|<\\delta$, the hypothesis gives $\\|f(x)-f(y)\\|\\le L\\|x-y\\|<L\\delta=\\varepsilon$.', 'Với mọi $x,y\\in D$ thỏa $\\|x-y\\|<\\delta$, giả thiết cho $\\|f(x)-f(y)\\|\\le L\\|x-y\\|<L\\delta=\\varepsilon$.']),
      bi(['The same $\\delta$ works simultaneously for all $x,y$, proving uniform continuity.', 'Cùng một $\\delta$ dùng đồng thời cho mọi $x,y$, nên hàm liên tục đều.']),
      bi(['If $L=0$, then $\\|f(x)-f(y)\\|=0$ for all pairs, so $f$ is constant and any $\\delta>0$ suffices.', 'Nếu $L=0$, thì $\\|f(x)-f(y)\\|=0$ với mọi cặp, nên $f$ hằng và mọi $\\delta>0$ đều đủ.'])
    ],
    companions: [
      q(['Prove $f(t)=3t-7$ is uniformly continuous on $\\mathbb R$ by finding a Lipschitz constant and a suitable $\\delta$.', 'Chứng minh $f(t)=3t-7$ liên tục đều trên $\\mathbb R$ bằng cách tìm hằng số Lipschitz và $\\delta$ phù hợp.'], [
        ['For any $s,t\\in\\mathbb R$, $|f(s)-f(t)|=3|s-t|$.', 'Với mọi $s,t\\in\\mathbb R$, $|f(s)-f(t)|=3|s-t|$.'],
        ['Thus $f$ is Lipschitz with $L=3$.', 'Vậy $f$ Lipschitz với $L=3$.'],
        ['Given $\\varepsilon>0$, choose $\\delta=\\varepsilon/3$; then $|s-t|<\\delta$ implies $|f(s)-f(t)|<\\varepsilon$.', 'Cho $\\varepsilon>0$, chọn $\\delta=\\varepsilon/3$; nếu $|s-t|<\\delta$ thì $|f(s)-f(t)|<\\varepsilon$.']
      ]),
      q(['For $F(x,y)=(x+y,x-y)$ on $\\mathbb R^2$, prove uniform continuity using the Euclidean norm.', 'Với $F(x,y)=(x+y,x-y)$ trên $\\mathbb R^2$, chứng minh liên tục đều theo chuẩn Euclid.'], [
        ['For a difference vector $h=(h_1,h_2)$, $\\|F(u+h)-F(u)\\|_2^2=(h_1+h_2)^2+(h_1-h_2)^2=2\\|h\\|_2^2$.', 'Với vector hiệu $h=(h_1,h_2)$, $\\|F(u+h)-F(u)\\|_2^2=(h_1+h_2)^2+(h_1-h_2)^2=2\\|h\\|_2^2$.'],
        ['Taking square roots gives the global Lipschitz bound $\\|F(u+h)-F(u)\\|_2=\\sqrt2\\|h\\|_2$.', 'Lấy căn cho chặn Lipschitz toàn cục $\\|F(u+h)-F(u)\\|_2=\\sqrt2\\|h\\|_2$.'],
        ['Choose $\\delta=\\varepsilon/\\sqrt2$; the same value works at every input point.', 'Chọn $\\delta=\\varepsilon/\\sqrt2$; giá trị này dùng được tại mọi điểm đầu vào.']
      ]),
      q(['Show the constant map $G(x)=5$ from any metric space into $\\mathbb R$ is uniformly continuous, including the $L=0$ case.', 'Chứng minh ánh xạ hằng $G(x)=5$ từ không gian metric bất kỳ vào $\\mathbb R$ liên tục đều, kể cả trường hợp $L=0$.'], [
        ['For every pair $x,y$, $|G(x)-G(y)|=0$, so a Lipschitz constant is $L=0$.', 'Với mọi cặp $x,y$, $|G(x)-G(y)|=0$, nên hằng số Lipschitz là $L=0$.'],
        ['Given any $\\varepsilon>0$, choose for example $\\delta=1$.', 'Với mọi $\\varepsilon>0$, chẳng hạn chọn $\\delta=1$.'],
        ['Whenever the inputs are within $\\delta$, the output gap remains $0<\\varepsilon$, independently of the inputs.', 'Khi đầu vào cách nhau dưới $\\delta$, hiệu đầu ra vẫn bằng $0<\\varepsilon$, không phụ thuộc vị trí đầu vào.']
      ])
    ],
    reviewNote: 'Checked the global Lipschitz constants and delta choices, including the constant-map edge case.',
    sourceIds: ['f-18100a']
  },
  'f-w013-e2': {
    application: bi(['Near an excluded boundary, inputs can approach one another while a function’s outputs remain separated, defeating a single domain-wide tolerance.', 'Gần biên bị loại, đầu vào có thể gần nhau nhưng đầu ra vẫn cách biệt, làm thất bại một ngưỡng chung trên toàn miền.']),
    formula: bi(['Uniform continuity fails if there are $x_n,y_n\\in D$ with $|x_n-y_n|\\to0$ but $|f(x_n)-f(y_n)|\\ge c>0$ for every $n$.', 'Liên tục đều thất bại nếu có $x_n,y_n\\in D$ với $|x_n-y_n|\\to0$ nhưng $|f(x_n)-f(y_n)|\\ge c>0$ với mọi $n$.']),
    steps: [
      bi(['Construct two input sequences in the domain whose distance tends to zero.', 'Dựng hai dãy đầu vào thuộc miền có khoảng cách tiến về không.']),
      bi(['Evaluate their outputs exactly and show their gap does not approach zero.', 'Tính chính xác đầu ra rồi chứng minh hiệu không tiến về không.']),
      bi(['Choose a fixed tolerance below that output gap; every proposed $\\delta$ is defeated by a sufficiently late pair.', 'Chọn sai số cố định nhỏ hơn hiệu đầu ra; mọi $\\delta$ đề xuất đều bị một cặp đủ muộn bác bỏ.']),
      bi(['Identify the boundary excluded from the domain where the function becomes steep or unbounded.', 'Xác định biên bị loại khỏi miền, nơi hàm trở nên dốc hoặc không bị chặn.'])
    ],
    primarySolution: [
      bi(['For $x_n=1/n$ and $y_n=1/(n+1)$, both points lie in $(0,1]$.', 'Với $x_n=1/n$ và $y_n=1/(n+1)$, cả hai điểm thuộc $(0,1]$.']),
      bi(['Their distance is $|x_n-y_n|=1/(n(n+1))\\to0$.', 'Khoảng cách là $|x_n-y_n|=1/(n(n+1))\\to0$.']),
      bi(['But $|1/x_n-1/y_n|=|n-(n+1)|=1$ for every $n$.', 'Nhưng $|1/x_n-1/y_n|=|n-(n+1)|=1$ với mọi $n$.']),
      bi(['Taking $\\varepsilon=1/2$, arbitrarily close inputs have output gap $1$, so $x\\mapsto1/x$ is not uniformly continuous on $(0,1]$.', 'Lấy $\\varepsilon=1/2$, các đầu vào gần tùy ý vẫn có hiệu đầu ra $1$, nên $x\\mapsto1/x$ không liên tục đều trên $(0,1]$.'])
    ],
    companions: [
      q(['Show $f(x)=\\ln x$ is not uniformly continuous on $(0,1]$ using an explicit sequence of pairs.', 'Chứng minh $f(x)=\\ln x$ không liên tục đều trên $(0,1]$ bằng các cặp dãy tường minh.'], [
        ['For $n\\ge2$, take $x_n=1/n$ and $y_n=2/n$, which both belong to $(0,1]$.', 'Với $n\\ge2$, lấy $x_n=1/n$ và $y_n=2/n$, cả hai thuộc $(0,1]$.'],
        ['The input gap is $|x_n-y_n|=1/n\\to0$.', 'Hiệu đầu vào là $|x_n-y_n|=1/n\\to0$.'],
        ['The output gap is $|\\ln x_n-\\ln y_n|=\\ln2$ for every $n$, so a fixed tolerance is violated.', 'Hiệu đầu ra là $|\\ln x_n-\\ln y_n|=\\ln2$ với mọi $n$, nên một sai số cố định luôn bị vi phạm.']
      ]),
      q(['On the truncated interval $[1/4,1]$, prove $g(x)=1/x$ is uniformly continuous and give a valid $\\delta$.', 'Trên đoạn đã cắt $[1/4,1]$, chứng minh $g(x)=1/x$ liên tục đều và nêu $\\delta$ hợp lệ.'], [
        ['For $x,y\\in[1/4,1]$, $|1/x-1/y|=|x-y|/(xy)\\le16|x-y|$.', 'Với $x,y\\in[1/4,1]$, $|1/x-1/y|=|x-y|/(xy)\\le16|x-y|$.'],
        ['Thus the reciprocal is Lipschitz on this domain with constant $16$.', 'Vì vậy hàm nghịch đảo Lipschitz trên miền này với hằng số $16$.'],
        ['Choose $\\delta=\\varepsilon/16$; excluding a neighborhood of zero removes the boundary blow-up.', 'Chọn $\\delta=\\varepsilon/16$; loại bỏ lân cận của không đã bỏ vùng bùng nổ tại biên.']
      ]),
      q(['Prove $h(x)=1/\\sqrt{x}$ is not uniformly continuous on $(0,1]$ using sequences approaching zero.', 'Chứng minh $h(x)=1/\\sqrt{x}$ không liên tục đều trên $(0,1]$ bằng các dãy tiến về không.'], [
        ['Take $x_n=1/n^2$ and $y_n=1/(n+1)^2$, so both are in the domain.', 'Lấy $x_n=1/n^2$ và $y_n=1/(n+1)^2$, cả hai thuộc miền.'],
        ['Their input gap $(2n+1)/(n^2(n+1)^2)$ tends to zero.', 'Hiệu đầu vào $(2n+1)/(n^2(n+1)^2)$ tiến về không.'],
        ['The outputs are $n$ and $n+1$, separated by $1$ for every $n$; this contradicts uniform continuity.', 'Đầu ra là $n$ và $n+1$, luôn cách nhau $1$ với mọi $n$; điều này mâu thuẫn với liên tục đều.']
      ])
    ],
    reviewNote: 'Verified the paired-input distances and fixed output gaps; the truncated reciprocal domain has a uniform Lipschitz bound.',
    sourceIds: ['f-18100a']
  },
  'f-w013-e3': {
    application: bi(['A direct modulus of continuity can prove uniform continuity on a closed interval without using compactness or differentiability.', 'Một môđun liên tục tường minh có thể chứng minh liên tục đều trên đoạn đóng mà không cần compact hay khả vi.']),
    formula: bi(['For $x,y\\ge0$, $|\\sqrt{x}-\\sqrt{y}|\\le\\sqrt{|x-y|}$; hence on any nonnegative domain choose $\\delta=\\varepsilon^2$.', 'Với $x,y\\ge0$, $|\\sqrt{x}-\\sqrt{y}|\\le\\sqrt{|x-y|}$; do đó trên miền không âm có thể chọn $\\delta=\\varepsilon^2$.']),
    steps: [
      bi(['Assume without loss of generality that $x\\ge y\\ge0$.', 'Không mất tính tổng quát, giả sử $x\\ge y\\ge0$.']),
      bi(['Use $\\sqrt{x}-\\sqrt{y}=(x-y)/(\\sqrt{x}+\\sqrt{y})$ or square both sides to obtain the modulus bound.', 'Dùng $\\sqrt{x}-\\sqrt{y}=(x-y)/(\\sqrt{x}+\\sqrt{y})$ hoặc bình phương hai vế để có chặn môđun.']),
      bi(['Given $\\varepsilon>0$, require $|x-y|<\\varepsilon^2$.', 'Với $\\varepsilon>0$, yêu cầu $|x-y|<\\varepsilon^2$.']),
      bi(['The resulting $\\delta$ is independent of the location, proving uniform continuity.', 'Giá trị $\\delta$ thu được không phụ thuộc vị trí, nên hàm liên tục đều.'])
    ],
    primarySolution: [
      bi(['For $x,y\\ge0$, suppose $x\\ge y$; then $\\sqrt{x}-\\sqrt{y}\\ge0$.', 'Với $x,y\\ge0$, giả sử $x\\ge y$; khi đó $\\sqrt{x}-\\sqrt{y}\\ge0$.']),
      bi(['The inequality $(\\sqrt{x}-\\sqrt{y})^2\\le x-y$ follows because $2\\sqrt{xy}\\ge2y$.', 'Bất đẳng thức $(\\sqrt{x}-\\sqrt{y})^2\\le x-y$ đúng vì $2\\sqrt{xy}\\ge2y$.']),
      bi(['Thus $|\\sqrt{x}-\\sqrt{y}|\\le\\sqrt{|x-y|}$ for either ordering of $x,y$.', 'Vậy $|\\sqrt{x}-\\sqrt{y}|\\le\\sqrt{|x-y|}$ với cả hai thứ tự của $x,y$.']),
      bi(['Given $\\varepsilon>0$, choose $\\delta=\\varepsilon^2$; if $|x-y|<\\delta$, then the output gap is less than $\\varepsilon$.', 'Cho $\\varepsilon>0$, chọn $\\delta=\\varepsilon^2$; nếu $|x-y|<\\delta$ thì hiệu đầu ra nhỏ hơn $\\varepsilon$.'])
    ],
    companions: [
      q(['Prove $q(x)=x^2$ is uniformly continuous on $[0,4]$ using a Lipschitz estimate.', 'Chứng minh $q(x)=x^2$ liên tục đều trên $[0,4]$ bằng một ước lượng Lipschitz.'], [
        ['For $x,y\\in[0,4]$, $|x^2-y^2|=|x-y||x+y|\\le8|x-y|$.', 'Với $x,y\\in[0,4]$, $|x^2-y^2|=|x-y||x+y|\\le8|x-y|$.'],
        ['Thus $q$ is Lipschitz with constant $8$.', 'Vậy $q$ Lipschitz với hằng số $8$.'],
        ['Choosing $\\delta=\\varepsilon/8$ proves the uniform condition throughout the interval.', 'Chọn $\\delta=\\varepsilon/8$ chứng minh điều kiện đều trên toàn đoạn.']
      ]),
      q(['Show $r(x)=x^{1/3}$ is uniformly continuous on $[0,8]$ by proving a Hölder bound.', 'Chứng minh $r(x)=x^{1/3}$ liên tục đều trên $[0,8]$ bằng chặn Hölder.'], [
        ['Assume $x\\ge y\\ge0$ and set $a=x^{1/3}$, $b=y^{1/3}$; then $x-y=(a-b)(a^2+ab+b^2)$.', 'Giả sử $x\\ge y\\ge0$ và đặt $a=x^{1/3}$, $b=y^{1/3}$; khi đó $x-y=(a-b)(a^2+ab+b^2)$.'],
        ['Since $a\\ge b\\ge0$, $a^2+ab+b^2\\ge(a-b)^2$, hence $(a-b)^3\\le x-y$.', 'Vì $a\\ge b\\ge0$, $a^2+ab+b^2\\ge(a-b)^2$, nên $(a-b)^3\\le x-y$.'],
        ['Therefore $|x^{1/3}-y^{1/3}|\\le|x-y|^{1/3}$; choose $\\delta=\\varepsilon^3$.', 'Do đó $|x^{1/3}-y^{1/3}|\\le|x-y|^{1/3}$; chọn $\\delta=\\varepsilon^3$.']
      ]),
      q(['Prove $p(x)=1/x$ is uniformly continuous on $[1,2]$ by a direct bound.', 'Chứng minh $p(x)=1/x$ liên tục đều trên $[1,2]$ bằng chặn trực tiếp.'], [
        ['For $x,y\\in[1,2]$, $|1/x-1/y|=|x-y|/(xy)\\le|x-y|$ because $xy\\ge1$.', 'Với $x,y\\in[1,2]$, $|1/x-1/y|=|x-y|/(xy)\\le|x-y|$ vì $xy\\ge1$.'],
        ['This is a Lipschitz estimate with constant $1$.', 'Đây là ước lượng Lipschitz với hằng số $1$.'],
        ['Taking $\\delta=\\varepsilon$ makes the output gap below $\\varepsilon$ for every pair in the interval.', 'Lấy $\\delta=\\varepsilon$ khiến hiệu đầu ra nhỏ hơn $\\varepsilon$ với mọi cặp trong đoạn.']
      ])
    ],
    reviewNote: 'Checked the square-root modulus and all interval-specific Lipschitz or Hölder estimates.',
    sourceIds: ['f-18100a']
  },
  'f-w013-e4': {
    prompt: bi(['Let $K\\subset\\mathbb R^d$ be compact and $f:K\\to\\mathbb R^m$ continuous. If $x_n\\in K$ and $f(x_n)\\to z$, prove $z\\in f(K)$. Explain why Bolzano–Weierstrass alone gives subsequence existence in $\\mathbb R^m$ but not that its limit belongs to $f(K)$.', 'Cho $K\\subset\\mathbb R^d$ compact và $f:K\\to\\mathbb R^m$ liên tục. Nếu $x_n\\in K$ và $f(x_n)\\to z$, chứng minh $z\\in f(K)$. Giải thích vì sao riêng Bolzano–Weierstrass cho sự tồn tại dãy con trong $\\mathbb R^m$ nhưng không bảo đảm giới hạn thuộc $f(K)$.']),
    application: bi(['Compactness supplies a convergent subsequence of inputs, and continuity identifies the image of its limit; this proves limit membership, not merely ambient subsequence existence.', 'Tính compact cung cấp dãy con đầu vào hội tụ, còn tính liên tục xác định ảnh của giới hạn; điều này chứng minh giới hạn thuộc ảnh chứ không chỉ tồn tại dãy con trong không gian.']),
    formula: bi(['If $K\\subset\\mathbb R^d$ is compact, $f:K\\to\\mathbb R^m$ is continuous, and $x_n\\in K$ with $f(x_n)\\to z$, then a subsequence satisfies $x_{n_j}\\to x\\in K$ and hence $z=f(x)\\in f(K)$.', 'Nếu $K\\subset\\mathbb R^d$ compact, $f:K\\to\\mathbb R^m$ liên tục và $x_n\\in K$ với $f(x_n)\\to z$, thì có dãy con $x_{n_j}\\to x\\in K$, do đó $z=f(x)\\in f(K)$.']),
    steps: [
      bi(['Compactness of $K$ gives a subsequence $x_{n_j}\\to x$ for some $x\\in K$.', 'Tính compact của $K$ cho dãy con $x_{n_j}\\to x$ với $x\\in K$.']),
      bi(['Continuity gives $f(x_{n_j})\\to f(x)$.', 'Tính liên tục cho $f(x_{n_j})\\to f(x)$.']),
      bi(['The given full image sequence also converges to $z$, so its subsequence has limit $z$; uniqueness implies $z=f(x)$.', 'Dãy ảnh đầy đủ đã cho cũng tiến đến $z$, nên dãy con có giới hạn $z$; tính duy nhất cho $z=f(x)$.']),
      bi(['Thus $z\\in f(K)$. Boundedness alone would yield an ambient convergent subsequence in $\\mathbb R^m$ but not membership of its limit in the set.', 'Vậy $z\\in f(K)$. Chỉ tính bị chặn cho dãy con hội tụ trong $\\mathbb R^m$, không bảo đảm giới hạn thuộc tập ảnh.'])
    ],
    primarySolution: [
      bi(['Because $K$ is compact, choose a subsequence with $x_{n_j}\\to x\\in K$.', 'Vì $K$ compact, chọn được dãy con $x_{n_j}\\to x\\in K$.']),
      bi(['By continuity, $f(x_{n_j})\\to f(x)$.', 'Theo tính liên tục, $f(x_{n_j})\\to f(x)$.']),
      bi(['Since the full sequence $f(x_n)$ tends to $z$, the same subsequence tends to $z$; uniqueness of limits gives $z=f(x)$.', 'Vì dãy đầy đủ $f(x_n)$ tiến tới $z$, dãy con ấy cũng tiến tới $z$; tính duy nhất của giới hạn cho $z=f(x)$.']),
      bi(['As $x\\in K$, $f(x)\\in f(K)$ and therefore $z\\in f(K)$. Boundedness and Bolzano–Weierstrass only give some ambient subsequential limit, not its membership in $f(K)$.', 'Vì $x\\in K$, $f(x)\\in f(K)$ nên $z\\in f(K)$. Tính bị chặn và Bolzano–Weierstrass chỉ cho giới hạn dãy con trong không gian đích, không cho biết nó thuộc $f(K)$.'])
    ],
    companions: [
      q(['Let $K=[-1,1]$, $f(x)=x^2$, and $x_n\\in K$ with $f(x_n)\\to z$. Prove $z\\in[0,1]$ using compactness and continuity.', 'Cho $K=[-1,1]$, $f(x)=x^2$ và $x_n\\in K$ với $f(x_n)\\to z$. Chứng minh $z\\in[0,1]$ bằng compact và liên tục.'], [
        ['The sequence $x_n$ has a subsequence $x_{n_j}\\to x\\in[-1,1]$.', 'Dãy $x_n$ có dãy con $x_{n_j}\\to x\\in[-1,1]$.'],
        ['Continuity of squaring gives $x_{n_j}^2\\to x^2$.', 'Tính liên tục của bình phương cho $x_{n_j}^2\\to x^2$.'],
        ['The full image sequence tends to $z$, so $z=x^2$ for some $x\\in[-1,1]$ and therefore $0\\le z\\le1$.', 'Dãy ảnh đầy đủ tiến tới $z$, nên $z=x^2$ với một $x\\in[-1,1]$, do đó $0\\le z\\le1$.']
      ]),
      q(['Let $K=[0,1]$ and $f(x)=x(1-x)$. If $x_n\\in K$ and $f(x_n)$ converges, show its limit lies in $[0,1/4]$.', 'Cho $K=[0,1]$ và $f(x)=x(1-x)$. Nếu $x_n\\in K$ và $f(x_n)$ hội tụ, chứng minh giới hạn thuộc $[0,1/4]$.'], [
        ['Compactness supplies $x_{n_j}\\to x\\in[0,1]$.', 'Tính compact cho $x_{n_j}\\to x\\in[0,1]$.'],
        ['Continuity gives $f(x_{n_j})\\to f(x)$.', 'Tính liên tục cho $f(x_{n_j})\\to f(x)$.'],
        ['Since $x(1-x)=1/4-(x-1/2)^2$, the image limit equals $f(x)\\in[0,1/4]$.', 'Vì $x(1-x)=1/4-(x-1/2)^2$, giới hạn ảnh bằng $f(x)\\in[0,1/4]$.']
      ]),
      q(['On the noncompact domain $D=(0,1)$ with $f(x)=x$, consider $z_n=f(1-1/n)$ for $n\\ge2$. Find its limit and test membership in $f(D)$.', 'Trên miền không compact $D=(0,1)$ với $f(x)=x$, xét $z_n=f(1-1/n)$ khi $n\\ge2$. Tìm giới hạn và kiểm tra nó có thuộc $f(D)$ không.'], [
        ['Each input $1-1/n$ belongs to $(0,1)$, so $z_n=1-1/n$ lies in $f(D)=(0,1)$.', 'Mỗi đầu vào $1-1/n$ thuộc $(0,1)$, nên $z_n=1-1/n$ nằm trong $f(D)=(0,1)$.'],
        ['The sequence converges to $1$ in the ambient real line.', 'Dãy hội tụ đến $1$ trong trục số thực.'],
        ['But $1\\notin f(D)$ because the endpoint is excluded; boundedness provides a subsequential limit without set membership.', 'Nhưng $1\\notin f(D)$ vì đầu mút bị loại; tính bị chặn cho giới hạn dãy con nhưng không cho giới hạn thuộc tập.']
      ])
    ],
    reviewNote: 'Corrected the source prompt: a bounded sequence in finite-dimensional R^m cannot lack a convergent subsequence by Bolzano–Weierstrass. The repaired task isolates membership of the image limit.',
    sourceIds: ['f-18100a']
  },
  'f-w013-e5': {
    prompt:bi(['For compact $K\\subset\\mathbb R^d$ and continuous $f:K\\to\\mathbb R^m$, prove that $f(K)$ is compact using sequences.','Với $K\\subset\\mathbb R^d$ compact và $f:K\\to\\mathbb R^m$ liên tục, dùng dãy chứng minh $f(K)$ compact.']),
    application: bi(['Continuous maps preserve compactness: every sequence of image points can be lifted to the compact domain, where a convergent subsequence is available.', 'Ánh xạ liên tục bảo toàn tính compact: mỗi dãy điểm ảnh được nâng về miền compact, nơi có dãy con hội tụ.']),
    formula: bi(['If $K\\subset\\mathbb R^d$ is compact and $f:K\\to\\mathbb R^m$ is continuous, then every sequence in $f(K)$ has a subsequence converging to a point of $f(K)$; hence $f(K)$ is compact.', 'Nếu $K\\subset\\mathbb R^d$ compact và $f:K\\to\\mathbb R^m$ liên tục, mọi dãy trong $f(K)$ có dãy con hội tụ đến điểm thuộc $f(K)$; do đó $f(K)$ compact.']),
    steps: [
      bi(['Start with an arbitrary sequence of image points $z_n\\in f(K)$.', 'Bắt đầu với dãy điểm ảnh $z_n\\in f(K)$ bất kỳ.']),
      bi(['Choose preimages $x_n\\in K$ such that $f(x_n)=z_n$.', 'Chọn các tiền ảnh $x_n\\in K$ sao cho $f(x_n)=z_n$.']),
      bi(['Use compactness to extract $x_{n_j}\\to x\\in K$, then continuity yields $z_{n_j}\\to f(x)$.', 'Dùng tính compact để lấy $x_{n_j}\\to x\\in K$, rồi tính liên tục cho $z_{n_j}\\to f(x)$.']),
      bi(['The limit belongs to $f(K)$, proving sequential compactness of the image.', 'Giới hạn thuộc $f(K)$, chứng minh ảnh compact theo tiêu chuẩn dãy.'])
    ],
    primarySolution: [
      bi(['Take any sequence $z_n\\in f(K)$ and choose $x_n\\in K$ with $f(x_n)=z_n$.', 'Lấy dãy $z_n\\in f(K)$ bất kỳ và chọn $x_n\\in K$ sao cho $f(x_n)=z_n$.']),
      bi(['By compactness, some subsequence satisfies $x_{n_j}\\to x\\in K$.', 'Theo tính compact, có dãy con thỏa $x_{n_j}\\to x\\in K$.']),
      bi(['Continuity gives $z_{n_j}=f(x_{n_j})\\to f(x)$.', 'Tính liên tục cho $z_{n_j}=f(x_{n_j})\\to f(x)$.']),
      bi(['Since $f(x)\\in f(K)$, every sequence in the image has a subsequence converging within the image; thus $f(K)$ is compact.', 'Vì $f(x)\\in f(K)$, mọi dãy trong ảnh có dãy con hội tụ bên trong ảnh; do đó $f(K)$ compact.'])
    ],
    companions: [
      q(['Find the image of $K=[-2,1]$ under $f(x)=x^2$ and explain why it is compact.', 'Tìm ảnh của $K=[-2,1]$ qua $f(x)=x^2$ và giải thích vì sao ảnh compact.'], [
        ['The minimum value is $0$ at $x=0$, and the maximum is $4$ at $x=-2$.', 'Giá trị nhỏ nhất là $0$ tại $x=0$, còn lớn nhất là $4$ tại $x=-2$.'],
        ['Continuity and the intermediate value theorem show every value between them occurs, so $f(K)=[0,4]$.', 'Tính liên tục và định lý giá trị trung gian cho thấy mọi giá trị ở giữa đều đạt được, nên $f(K)=[0,4]$.'],
        ['The interval $[0,4]$ is closed and bounded in $\\mathbb R$, hence compact.', 'Đoạn $[0,4]$ đóng và bị chặn trong $\\mathbb R$, nên compact.']
      ]),
      q(['Let $K=\\{0\\}\\cup\\{1/n:n\\ge1\\}$ and $f(x)=1+x$. Describe $f(K)$ and verify its sequence compactness.', 'Cho $K=\\{0\\}\\cup\\{1/n:n\\ge1\\}$ và $f(x)=1+x$. Mô tả $f(K)$ và kiểm tra tính compact theo dãy.'], [
        ['The image is $f(K)=\\{1\\}\\cup\\{1+1/n:n\\ge1\\}$.', 'Ảnh là $f(K)=\\{1\\}\\cup\\{1+1/n:n\\ge1\\}$.'],
        ['A sequence in this set either repeats one value infinitely often, giving a constant subsequence, or its indices tend to infinity and a subsequence tends to $1$.', 'Dãy trong tập này hoặc lặp một giá trị vô hạn lần nên có dãy con hằng, hoặc chỉ số tiến ra vô cùng và một dãy con tiến đến $1$.'],
        ['The limit $1$ is included in $f(K)$; hence every sequence has a subsequence converging within the image.', 'Giới hạn $1$ thuộc $f(K)$; vì vậy mọi dãy có dãy con hội tụ bên trong ảnh.']
      ]),
      q(['For the noncompact domain $D=[1,\\infty)$, let $g(x)=1/x$. Show its image is bounded but not compact.', 'Với miền không compact $D=[1,\\infty)$, cho $g(x)=1/x$. Chứng minh ảnh bị chặn nhưng không compact.'], [
        ['The image is $(0,1]$, so it is bounded in $\\mathbb R$.', 'Ảnh là $(0,1]$, nên bị chặn trong $\\mathbb R$.'],
        ['The image sequence $g(n)=1/n$ converges to $0$.', 'Dãy ảnh $g(n)=1/n$ hội tụ đến $0$.'],
        ['Because $0\\notin(0,1]$, no subsequence can converge to a point of the image; thus it is not compact.', 'Vì $0\\notin(0,1]$, không dãy con nào hội tụ đến điểm thuộc ảnh; do đó ảnh không compact.']
      ])
    ],
    reviewNote: 'Verified image ranges and sequential compactness; the noncompact-domain example shows why the domain hypothesis matters.',
    sourceIds: ['f-18100a']
  },
  'f-w014-e1': {
    application: bi(['A uniform sup bound controls the largest error anywhere in the domain, so one index works for every input.', 'Chặn supremum đều kiểm soát sai số lớn nhất trên toàn miền, nên một chỉ số dùng được cho mọi đầu vào.']),
    formula: bi(['If $\\sup_{x\\in D}|f_n(x)-f(x)|\\to0$, then convergence is uniform; on $[-5,5]$, $\\sup|x/n|=5/n\\to0$.', 'Nếu $\\sup_{x\\in D}|f_n(x)-f(x)|\\to0$ thì hội tụ đều; trên $[-5,5]$, $\\sup|x/n|=5/n\\to0$.']),
    steps: [
      bi(['Compute or bound the error $|f_n(x)-f(x)|$ uniformly over the full domain.', 'Tính hoặc chặn sai số $|f_n(x)-f(x)|$ đồng đều trên toàn miền.']),
      bi(['Find its supremum as a function of $n$.', 'Tìm supremum của sai số theo $n$.']),
      bi(['Show that supremum tends to zero.', 'Chứng minh supremum đó tiến về không.']),
      bi(['Equivalently, choose one $N$ so the bound is below $\\varepsilon$ for every input and all $n\\ge N$.', 'Tương đương, chọn một $N$ để chặn nhỏ hơn $\\varepsilon$ với mọi đầu vào và mọi $n\\ge N$.'])
    ],
    primarySolution: [
      bi(['For $x\\in[-5,5]$, the error from the zero function is $|f_n(x)|=|x|/n$.', 'Với $x\\in[-5,5]$, sai số so với hàm không là $|f_n(x)|=|x|/n$.']),
      bi(['Its supremum is $5/n$, attained at either endpoint.', 'Supremum là $5/n$, đạt tại một trong hai đầu mút.']),
      bi(['Since $5/n\\to0$, the sup error tends to zero.', 'Vì $5/n\\to0$, supremum sai số tiến về không.']),
      bi(['Given $\\varepsilon>0$, choose $N>5/\\varepsilon$; then for every $n\\ge N$ and $x\\in[-5,5]$, $|x/n|\\le5/n<\\varepsilon$.', 'Cho $\\varepsilon>0$, chọn $N>5/\\varepsilon$; khi đó với mọi $n\\ge N$ và $x\\in[-5,5]$, $|x/n|\\le5/n<\\varepsilon$.'])
    ],
    companions: [
      q(['Show $f_n(x)=x/(2n)$ converges uniformly to $0$ on $[-3,3]$ and give an $N$ for tolerance $\\varepsilon$.', 'Chứng minh $f_n(x)=x/(2n)$ hội tụ đều về $0$ trên $[-3,3]$ và nêu $N$ cho sai số $\\varepsilon$.'], [
        ['For all $x$ in the interval, $|f_n(x)|\\le3/(2n)$, and the endpoint attains this bound.', 'Với mọi $x$ trong đoạn, $|f_n(x)|\\le3/(2n)$, đạt chặn tại đầu mút.'],
        ['Thus $\\sup_{[-3,3]}|f_n|=3/(2n)\\to0$.', 'Vậy $\\sup_{[-3,3]}|f_n|=3/(2n)\\to0$.'],
        ['Choose an integer $N>3/(2\\varepsilon)$; then every $n\\ge N$ has error below $\\varepsilon$ throughout the interval.', 'Chọn số nguyên $N>3/(2\\varepsilon)$; khi đó mọi $n\\ge N$ có sai số nhỏ hơn $\\varepsilon$ trên toàn đoạn.']
      ]),
      q(['On $D=\\mathbb R$, prove $g_n(x)=\\sin(nx)/n$ converges uniformly to $0$.', 'Trên $D=\\mathbb R$, chứng minh $g_n(x)=\\sin(nx)/n$ hội tụ đều về $0$.'], [
        ['For every real $x$, $|\\sin(nx)|\\le1$, so $|g_n(x)|\\le1/n$.', 'Với mọi $x$ thực, $|\\sin(nx)|\\le1$, nên $|g_n(x)|\\le1/n$.'],
        ['Taking the supremum over all $x$ gives $\\sup_{x\\in\\mathbb R}|g_n(x)|\\le1/n$.', 'Lấy supremum theo mọi $x$ cho $\\sup_{x\\in\\mathbb R}|g_n(x)|\\le1/n$.'],
        ['Since $1/n\\to0$, the convergence is uniform on the unbounded domain as well.', 'Vì $1/n\\to0$, hội tụ vẫn đều trên miền không bị chặn.']
      ]),
      q(['For $h_n(x)=x^2/n$ on $[-2,2]$, compute the sup error and prove uniform convergence to zero.', 'Với $h_n(x)=x^2/n$ trên $[-2,2]$, tính supremum sai số và chứng minh hội tụ đều về không.'], [
        ['The error is $x^2/n$, whose maximum on the interval is $4/n$.', 'Sai số là $x^2/n$, đạt cực đại trên đoạn bằng $4/n$.'],
        ['Thus $\\sup_{[-2,2]}|h_n|=4/n\\to0$.', 'Vậy $\\sup_{[-2,2]}|h_n|=4/n\\to0$.'],
        ['For any $\\varepsilon>0$, any integer $N>4/\\varepsilon$ ensures $|h_n(x)|<\\varepsilon$ for all $n\\ge N$ and all $x$.', 'Với mọi $\\varepsilon>0$, số nguyên $N>4/\\varepsilon$ bảo đảm $|h_n(x)|<\\varepsilon$ với mọi $n\\ge N$ và mọi $x$.']
      ])
    ],
    reviewNote: 'Checked the suprema on each domain and the resulting uniform epsilon choices.',
    sourceIds: ['f-18100a']
  },
  'f-w014-e2': {
    application: bi(['Pointwise convergence fixes the input before taking a limit; uniform convergence controls the worst input at each index, which may move toward a boundary.', 'Hội tụ từng điểm cố định đầu vào trước khi lấy giới hạn; hội tụ đều kiểm soát đầu vào xấu nhất ở mỗi chỉ số, vốn có thể dịch về biên.']),
    formula: bi(['For $f_n(x)=x^n$ on $[0,1]$, the pointwise limit is $0$ for $x<1$ and $1$ at $x=1$; the error supremum is $1$ but is not attained.', 'Với $f_n(x)=x^n$ trên $[0,1]$, giới hạn từng điểm là $0$ khi $x<1$ và $1$ tại $x=1$; supremum sai số bằng $1$ nhưng không đạt.']),
    steps: [
      bi(['Fix an arbitrary $x$ first to determine the pointwise limit, treating endpoint cases separately.', 'Trước tiên cố định $x$ bất kỳ để tìm giới hạn từng điểm, xét riêng các đầu mút.']),
      bi(['Compute the error against that pointwise limit and distinguish maximum from supremum.', 'Tính sai số so với giới hạn từng điểm và phân biệt maximum với supremum.']),
      bi(['If the sup error does not tend to zero, construct a moving input that keeps the error above a fixed tolerance.', 'Nếu supremum sai số không tiến về không, dựng đầu vào thay đổi giữ sai số lớn hơn sai số cố định.']),
      bi(['Use the witness to negate the uniform quantifiers directly.', 'Dùng điểm kiểm tra để phủ định trực tiếp các lượng từ của hội tụ đều.'])
    ],
    primarySolution: [
      bi(['For fixed $x\\in[0,1)$, $x^n\\to0$; at $x=1$, every term equals $1$. Thus $f(x)=0$ for $x<1$ and $f(1)=1$.', 'Với $x\\in[0,1)$ cố định, $x^n\\to0$; tại $x=1$, mọi số hạng bằng $1$. Vậy $f(x)=0$ khi $x<1$ và $f(1)=1$.']),
      bi(['For each $n$, the error is $x^n$ when $x<1$ and zero at $x=1$.', 'Với mỗi $n$, sai số bằng $x^n$ khi $x<1$ và bằng không tại $x=1$.']),
      bi(['Its supremum is $1$ as $x\\to1^-$, but it is not attained because the error at $1$ is zero.', 'Supremum bằng $1$ khi $x\\to1^-$, nhưng không đạt vì sai số tại $1$ bằng không.']),
      bi(['The moving points $x_n=2^{-1/n}$ satisfy $|f_n(x_n)-f(x_n)|=1/2$ for every $n$, so tolerance $1/4$ fails and convergence is not uniform.', 'Các điểm thay đổi $x_n=2^{-1/n}$ thỏa $|f_n(x_n)-f(x_n)|=1/2$ với mọi $n$, nên sai số $1/4$ luôn thất bại và hội tụ không đều.'])
    ],
    companions: [
      q(['For $f_n(x)=x/(n+x)$ on $[0,\\infty)$, find the pointwise limit and show convergence is not uniform.', 'Với $f_n(x)=x/(n+x)$ trên $[0,\\infty)$, tìm giới hạn từng điểm và chứng minh hội tụ không đều.'], [
        ['For fixed $x\\ge0$, $x/(n+x)\\to0$, so the pointwise limit is zero.', 'Với $x\\ge0$ cố định, $x/(n+x)\\to0$, nên giới hạn từng điểm bằng không.'],
        ['For each $n$, the supremum over $x\\ge0$ is $1$, approached as $x\\to\\infty$.', 'Với mỗi $n$, supremum theo $x\\ge0$ bằng $1$, tiến gần khi $x\\to\\infty$.'],
        ['At the moving point $x_n=n$, the error is $f_n(n)=1/2$, so it cannot converge uniformly to zero.', 'Tại điểm thay đổi $x_n=n$, sai số là $f_n(n)=1/2$, nên không thể hội tụ đều về không.']
      ]),
      q(['For $g_n(x)=e^{-nx}$ on $(0,1]$, find the pointwise limit and a witness disproving uniform convergence.', 'Với $g_n(x)=e^{-nx}$ trên $(0,1]$, tìm giới hạn từng điểm và điểm kiểm tra bác bỏ hội tụ đều.'], [
        ['For each fixed $x>0$, $e^{-nx}\\to0$, so the pointwise limit is zero.', 'Với mỗi $x>0$ cố định, $e^{-nx}\\to0$, nên giới hạn từng điểm bằng không.'],
        ['The error supremum is $1$, approached as $x\\to0^+$ though zero is outside the domain.', 'Supremum sai số bằng $1$, tiến gần khi $x\\to0^+$ dù số không ngoài miền.'],
        ['Taking $x_n=1/n$ gives error $e^{-1}$ for every $n$, violating any tolerance below $e^{-1}$.', 'Lấy $x_n=1/n$ cho sai số $e^{-1}$ với mọi $n$, vi phạm mọi sai số nhỏ hơn $e^{-1}$.']
      ]),
      q(['For $h_n(x)=nx/(1+n^2x^2)$ on $[0,1]$, prove pointwise convergence to zero but not uniform convergence.', 'Với $h_n(x)=nx/(1+n^2x^2)$ trên $[0,1]$, chứng minh hội tụ từng điểm về không nhưng không hội tụ đều.'], [
        ['At $x=0$, all values are zero; for fixed $x>0$, $h_n(x)\\le1/(nx)\\to0$.', 'Tại $x=0$, mọi giá trị bằng không; với $x>0$ cố định, $h_n(x)\\le1/(nx)\\to0$.'],
        ['At $x_n=1/n$, $h_n(x_n)=1/2$.', 'Tại $x_n=1/n$, $h_n(x_n)=1/2$.'],
        ['The same fixed positive error occurs for every index, so the convergence is not uniform.', 'Cùng một sai số dương cố định xuất hiện ở mọi chỉ số, nên hội tụ không đều.']
      ])
    ],
    reviewNote: 'Verified the pointwise limits and moving witnesses; the source supremum is approached at 1 from the left but is not attained.',
    sourceIds: ['f-18100a']
  },
  'f-w014-e3': {
    application: bi(['The uniform Cauchy criterion constructs a limit without knowing it beforehand: pointwise completeness defines the candidate and a common tail bound proves uniformity.', 'Tiêu chuẩn Cauchy đều dựng giới hạn mà không cần biết trước: tính đầy đủ từng điểm định nghĩa ứng viên, còn chặn đuôi chung chứng minh tính đều.']),
    formula: bi(['If $\\sup_{x\\in D}|f_n(x)-f_m(x)|\\to0$ as $n,m\\to\\infty$ and the codomain is complete, then $f_n$ converges uniformly to a function $f$.', 'Nếu $\\sup_{x\\in D}|f_n(x)-f_m(x)|\\to0$ khi $n,m\\to\\infty$ và không gian đích đầy đủ, thì $f_n$ hội tụ đều đến một hàm $f$.']),
    steps: [
      bi(['For each fixed $x$, the uniform Cauchy bound makes $(f_n(x))$ a Cauchy sequence in $\\mathbb R$.', 'Với mỗi $x$ cố định, chặn Cauchy đều làm $(f_n(x))$ thành dãy Cauchy trong $\\mathbb R$.']),
      bi(['Use completeness to define $f(x)=\\lim_n f_n(x)$.', 'Dùng tính đầy đủ để định nghĩa $f(x)=\\lim_n f_n(x)$.']),
      bi(['Given $\\varepsilon>0$, choose a common index making every pairwise sup difference below $\\varepsilon/2$.', 'Với $\\varepsilon>0$, chọn chỉ số chung làm mọi supremum hiệu từng cặp nhỏ hơn $\\varepsilon/2$.']),
      bi(['Let one index tend to infinity pointwise; the remaining sup error is at most $\\varepsilon/2<\\varepsilon$, uniformly in $x$.', 'Cho một chỉ số tiến ra vô cùng từng điểm; supremum sai số còn lại không quá $\\varepsilon/2<\\varepsilon$, đều theo $x$.'])
    ],
    primarySolution: [
      bi(['For each $x$, the condition makes $(f_n(x))$ Cauchy in $\\mathbb R$; completeness defines $f(x)=\\lim_m f_m(x)$.', 'Với mỗi $x$, điều kiện làm $(f_n(x))$ Cauchy trong $\\mathbb R$; tính đầy đủ định nghĩa $f(x)=\\lim_m f_m(x)$.']),
      bi(['Given $\\varepsilon>0$, choose $N$ so that $\\sup_x|f_n(x)-f_m(x)|<\\varepsilon/2$ whenever $n,m\\ge N$.', 'Cho $\\varepsilon>0$, chọn $N$ sao cho $\\sup_x|f_n(x)-f_m(x)|<\\varepsilon/2$ khi $n,m\\ge N$.']),
      bi(['Fix $n\\ge N$ and let $m\\to\\infty$ at each $x$; then $|f_n(x)-f(x)|\\le\\varepsilon/2$ for every $x$.', 'Cố định $n\\ge N$ rồi cho $m\\to\\infty$ tại mỗi $x$; khi đó $|f_n(x)-f(x)|\\le\\varepsilon/2$ với mọi $x$.']),
      bi(['Taking the supremum yields $\\sup_x|f_n-f|\\le\\varepsilon/2<\\varepsilon$ for every $n\\ge N$, so convergence is uniform.', 'Lấy supremum cho $\\sup_x|f_n-f|\\le\\varepsilon/2<\\varepsilon$ với mọi $n\\ge N$, nên hội tụ đều.'])
    ],
    companions: [
      q(['On $[-2,2]$, let $f_n(x)=x/n$. Prove the sequence is uniformly Cauchy and identify its uniform limit.', 'Trên $[-2,2]$, cho $f_n(x)=x/n$. Chứng minh dãy Cauchy đều và tìm giới hạn đều.'], [
        ['For $m,n\\ge N$, $\\sup_{|x|\\le2}|f_n-f_m|=2|1/n-1/m|\\le2/n+2/m\\le4/N$.', 'Với $m,n\\ge N$, $\\sup_{|x|\\le2}|f_n-f_m|=2|1/n-1/m|\\le2/n+2/m\\le4/N$.'],
        ['Given $\\varepsilon>0$, choose $N>4/\\varepsilon$; then all pairwise sup differences in the tail are below $\\varepsilon$.', 'Cho $\\varepsilon>0$, chọn $N>4/\\varepsilon$; khi đó mọi supremum hiệu cặp trong đuôi nhỏ hơn $\\varepsilon$.'],
        ['The pointwise limit is zero, and $\\sup_{|x|\\le2}|f_n(x)|=2/n\\to0$, so the uniform limit is $0$.', 'Giới hạn từng điểm bằng không, và $\\sup_{|x|\\le2}|f_n(x)|=2/n\\to0$, nên giới hạn đều là $0$.']
      ]),
      q(['On $\\mathbb R$, define $g_n(x)=1/(1+x^2)+x/n$. Decide whether $(g_n)$ is uniformly Cauchy; if it is not, explain why the pointwise limit is not enough.', 'Trên $\\mathbb R$, định nghĩa $g_n(x)=1/(1+x^2)+x/n$. Xét $(g_n)$ có Cauchy đều không; nếu không, giải thích vì sao giới hạn từng điểm là chưa đủ.'], [
        ['For $m,n\\ge N$, $|g_n(x)-g_m(x)|=|x||1/n-1/m|$, which is unbounded over $x\\in\\mathbb R$ unless the coefficient is zero.', 'Với $m,n\\ge N$, $|g_n(x)-g_m(x)|=|x||1/n-1/m|$, không bị chặn theo $x\\in\\mathbb R$ trừ khi hệ số bằng không.'],
        ['Thus this proposed sequence is not uniformly Cauchy; the growing domain sensitivity prevents a common tail bound.', 'Vì vậy dãy này không Cauchy đều; độ nhạy theo miền không bị chặn ngăn chặn chặn đuôi chung.'],
        ['This check shows why the sup over the whole domain must be included in the criterion, even though pointwise $g_n(x)\\to1/(1+x^2)$.', 'Phép kiểm tra cho thấy phải lấy supremum trên toàn miền trong tiêu chuẩn, dù $g_n(x)\\to1/(1+x^2)$ từng điểm.']
      ]),
      q(['On $D=[0,1]$, let $h_n(x)=x^2+\\sin(x)/n$. Prove it is uniformly Cauchy and identify the limit.', 'Trên $D=[0,1]$, cho $h_n(x)=x^2+\\sin(x)/n$. Chứng minh dãy Cauchy đều và tìm giới hạn.'], [
        ['For any $x\\in[0,1]$, $|h_n(x)-h_m(x)|=|\\sin x||1/n-1/m|\\le1/n+1/m$.', 'Với mọi $x\\in[0,1]$, $|h_n(x)-h_m(x)|=|\\sin x||1/n-1/m|\\le1/n+1/m$.'],
        ['If $m,n\\ge N$, this is at most $2/N$, which tends to zero uniformly in $x$.', 'Nếu $m,n\\ge N$, chặn này không quá $2/N$, tiến về không đều theo $x$.'],
        ['Pointwise, $h_n(x)\\to x^2$; the same bound gives $\\sup_{[0,1]}|h_n-x^2|\\le1/n\\to0$.', 'Từng điểm, $h_n(x)\\to x^2$; cùng chặn cho $\\sup_{[0,1]}|h_n-x^2|\\le1/n\\to0$.']
      ])
    ],
    reviewNote: 'Checked the uniform Cauchy construction and explicitly used the whole-domain supremum; one proposed pointwise-convergent sequence correctly fails the criterion.',
    sourceIds: ['f-18100a']
  },
  'f-w014-e4': {
    application: bi(['Uniform closeness to one bounded tail function transfers a finite bound to the limit; the bounds on all terms need not be supplied as one common constant.', 'Sự gần đều với một hàm đuôi bị chặn chuyển một chặn hữu hạn sang giới hạn; không cần một hằng số chặn chung được cho trước cho mọi số hạng.']),
    formula: bi(['If $f_n\\to f$ uniformly on $D$ and every $f_n$ is bounded, choose $N$ with $|f-f_N|<1$ everywhere; then $|f(x)|\\le M_N+1$ where $M_N=\\sup_D|f_N|<\\infty$.', 'Nếu $f_n\\to f$ đều trên $D$ và mọi $f_n$ bị chặn, chọn $N$ sao cho $|f-f_N|<1$ khắp nơi; khi đó $|f(x)|\\le M_N+1$ với $M_N=\\sup_D|f_N|<\\infty$.']),
    steps: [
      bi(['Apply uniform convergence with tolerance $1$ to get one index $N$ valid for every $x\\in D$.', 'Áp dụng hội tụ đều với sai số $1$ để có một chỉ số $N$ dùng cho mọi $x\\in D$.']),
      bi(['Use the individual boundedness assumption specifically for the selected function $f_N$.', 'Dùng giả thiết bị chặn riêng cho đúng hàm $f_N$ đã chọn.']),
      bi(['Apply the triangle inequality $|f(x)|\\le|f(x)-f_N(x)|+|f_N(x)|$.', 'Áp dụng bất đẳng thức tam giác $|f(x)|\\le|f(x)-f_N(x)|+|f_N(x)|$.']),
      bi(['The resulting finite bound is independent of $x$; no common bound for every index was assumed.', 'Chặn hữu hạn thu được không phụ thuộc $x$; không giả sử có chặn chung cho mọi chỉ số.'])
    ],
    primarySolution: [
      bi(['By uniform convergence, choose $N$ so that $|f(x)-f_N(x)|<1$ for every $x\\in D$.', 'Theo hội tụ đều, chọn $N$ sao cho $|f(x)-f_N(x)|<1$ với mọi $x\\in D$.']),
      bi(['The chosen function $f_N$ is bounded by hypothesis; write $M_N=\\sup_{x\\in D}|f_N(x)|<\\infty$.', 'Theo giả thiết, hàm đã chọn $f_N$ bị chặn; đặt $M_N=\\sup_{x\\in D}|f_N(x)|<\\infty$.']),
      bi(['For each $x$, $|f(x)|\\le|f(x)-f_N(x)|+|f_N(x)|<1+M_N$.', 'Với mỗi $x$, $|f(x)|\\le|f(x)-f_N(x)|+|f_N(x)|<1+M_N$.']),
      bi(['This one finite constant bounds $f$ on all of $D$. One bounded early term is insufficient: a later unbounded tail can be the uniform limit.', 'Một hằng số hữu hạn này chặn $f$ trên toàn $D$. Một số hạng đầu bị chặn là chưa đủ: đuôi không bị chặn có thể chính là giới hạn đều.'])
    ],
    companions: [
      q(['On $\\mathbb R$, let $g_1(x)=0$ and $g_n(x)=x^2$ for all $n\\ge2$. Show the sequence converges uniformly to an unbounded function and identify which premise of the bounded-limit result fails.', 'Trên $\\mathbb R$, đặt $g_1(x)=0$ và $g_n(x)=x^2$ với mọi $n\\ge2$. Chứng minh dãy hội tụ đều đến hàm không bị chặn và xác định giả thiết nào của kết quả giới hạn bị chặn thất bại.'], [
        ['For every $n\\ge2$, $g_n(x)=x^2$ exactly, so $\\sup_x|g_n(x)-x^2|=0$.', 'Với mọi $n\\ge2$, $g_n(x)=x^2$ chính xác, nên $\\sup_x|g_n(x)-x^2|=0$.'],
        ['Thus $g_n\\to g$ uniformly with $g(x)=x^2$.', 'Vậy $g_n\\to g$ đều với $g(x)=x^2$.'],
        ['The limit is unbounded on $\\mathbb R$, but the premise that every $g_n$ is bounded fails for every $n\\ge2$.', 'Giới hạn không bị chặn trên $\\mathbb R$, nhưng giả thiết mọi $g_n$ bị chặn thất bại với mọi $n\\ge2$.']
      ]),
      q(['Define $h_n(x)=\\min(|x|,n)$ on $\\mathbb R$. Show every term is bounded, the pointwise limit is unbounded, and convergence is not uniform.', 'Định nghĩa $h_n(x)=\\min(|x|,n)$ trên $\\mathbb R$. Chứng minh từng số hạng bị chặn, giới hạn từng điểm không bị chặn, và hội tụ không đều.'], [
        ['For each fixed $n$, $0\\le h_n(x)\\le n$, so $h_n$ is bounded.', 'Với mỗi $n$ cố định, $0\\le h_n(x)\\le n$, nên $h_n$ bị chặn.'],
        ['For each fixed $x$, eventually $n\\ge|x|$, so $h_n(x)\\to|x|$, an unbounded limit.', 'Với mỗi $x$ cố định, cuối cùng $n\\ge|x|$, nên $h_n(x)\\to|x|$, một giới hạn không bị chặn.'],
        ['At $x_n=2n$, $|h_n(x_n)-|x_n||=n$, so the convergence is not uniform.', 'Tại $x_n=2n$, $|h_n(x_n)-|x_n||=n$, nên hội tụ không đều.']
      ]),
      q(['Let $q_1(x)=50\\sin x$ and $q_n(x)=\\sin x/n$ for $n\\ge2$ on $\\mathbb R$. Prove all terms are bounded and the limit is bounded using one tail term.', 'Cho $q_1(x)=50\\sin x$ và $q_n(x)=\\sin x/n$ với $n\\ge2$ trên $\\mathbb R$. Chứng minh từng hàm bị chặn và giới hạn bị chặn bằng một số hạng đuôi.'], [
        ['Every term is bounded; for $n\\ge2$, $\\sup_x|q_n(x)|=1/n$.', 'Mọi số hạng đều bị chặn; với $n\\ge2$, $\\sup_x|q_n(x)|=1/n$.'],
        ['The tail converges uniformly to zero since $\\sup_x|q_n(x)|=1/n\\to0$.', 'Đuôi hội tụ đều về không vì $\\sup_x|q_n(x)|=1/n\\to0$.'],
        ['For example, choose $N=2$; $q_2$ is bounded by $1$, and uniform error below $1$ gives $|q(x)|\\le2$ for the zero limit.', 'Chẳng hạn chọn $N=2$; $q_2$ bị chặn bởi $1$, và sai số đều dưới $1$ cho $|q(x)|\\le2$ đối với giới hạn không.']
      ])
    ],
    reviewNote: 'Used a single bounded tail term in the proof; examples separate uniform convergence from pointwise convergence and individual boundedness.',
    sourceIds: ['f-18100a']
  },
  'f-w014-e5': {
    application: bi(['Pointwise convergence of derivatives does not by itself permit differentiation of the limit; a moving input can expose a derivative error that fixed inputs miss.', 'Hội tụ từng điểm của đạo hàm tự nó không cho phép lấy đạo hàm qua giới hạn; đầu vào thay đổi có thể bộc lộ sai số mà điểm cố định bỏ sót.']),
    formula: bi(['For $f_n(x)=\\sqrt{x^2+1/n}$, $f_n\\to|x|$ pointwise and $f_n^{\\prime}(x)=x/\\sqrt{x^2+1/n}\\to g(x)$ pointwise, where $g(0)=0$ and $g(x)=\\operatorname{sign}(x)$ for $x\\ne0$.', 'Với $f_n(x)=\\sqrt{x^2+1/n}$, $f_n\\to|x|$ từng điểm và $f_n^{\\prime}(x)=x/\\sqrt{x^2+1/n}\\to g(x)$ từng điểm, trong đó $g(0)=0$ và $g(x)=\\operatorname{sign}(x)$ khi $x\\ne0$.']),
    steps: [
      bi(['Find the pointwise function limit, treating points where the formula changes behavior separately.', 'Tìm giới hạn hàm từng điểm, xét riêng các điểm mà công thức đổi hành vi.']),
      bi(['Differentiate each approximating function and take the pointwise derivative limit.', 'Lấy đạo hàm từng hàm xấp xỉ rồi tính giới hạn đạo hàm từng điểm.']),
      bi(['Choose a moving sequence $x_n$ and compare the derivative error there.', 'Chọn dãy điểm thay đổi $x_n$ rồi so sánh sai số đạo hàm tại đó.']),
      bi(['A fixed positive lower bound on those errors disproves uniform convergence and warns against unsupported interchange.', 'Một cận dưới dương cố định cho các sai số ấy bác bỏ hội tụ đều và cảnh báo không đổi thứ tự thiếu giả thiết.'])
    ],
    primarySolution: [
      bi(['For each fixed $x$, $f_n(x)=\\sqrt{x^2+1/n}\\to|x|$.', 'Với mỗi $x$ cố định, $f_n(x)=\\sqrt{x^2+1/n}\\to|x|$.']),
      bi(['Differentiation gives $f_n^{\\prime}(x)=x/\\sqrt{x^2+1/n}$; its pointwise limit is $g(x)=\\operatorname{sign}(x)$ for $x\\ne0$ and $g(0)=0$.', 'Lấy đạo hàm được $f_n^{\\prime}(x)=x/\\sqrt{x^2+1/n}$; giới hạn từng điểm là $g(x)=\\operatorname{sign}(x)$ khi $x\\ne0$ và $g(0)=0$.']),
      bi(['At $x_n=1/\\sqrt n$, $f_n^{\\prime}(x_n)=1/\\sqrt2$ while $g(x_n)=1$.', 'Tại $x_n=1/\\sqrt n$, $f_n^{\\prime}(x_n)=1/\\sqrt2$ trong khi $g(x_n)=1$.']),
      bi(['Thus $\\sup_x|f_n^{\\prime}(x)-g(x)|\\ge1-1/\\sqrt2$ for every $n$, so derivative convergence is not uniform; moreover $|x|$ is not differentiable at zero.', 'Vậy $\\sup_x|f_n^{\\prime}(x)-g(x)|\\ge1-1/\\sqrt2$ với mọi $n$, nên đạo hàm không hội tụ đều; hơn nữa $|x|$ không khả vi tại không.'])
    ],
    companions: [
      q(['Let $f_n(x)=x/(1+nx^2)$ on $\\mathbb R$. Find the function limit and derivative limit, then disprove uniform convergence of the derivatives.', 'Cho $f_n(x)=x/(1+nx^2)$ trên $\\mathbb R$. Tìm giới hạn hàm và giới hạn đạo hàm, rồi bác bỏ hội tụ đều của đạo hàm.'], [
        ['For fixed $x$, $f_n(x)\\to0$; also $|f_n(x)|$ is maximized at $|x|=1/\\sqrt n$ with value $1/(2\\sqrt n)$, so the function limit is uniformly zero.', 'Với $x$ cố định, $f_n(x)\\to0$; hơn nữa $|f_n(x)|$ đạt cực đại tại $|x|=1/\\sqrt n$ với giá trị $1/(2\\sqrt n)$, nên giới hạn hàm bằng không và hội tụ đều.'],
        ['Differentiating gives $f_n^{\\prime}(x)=(1-nx^2)/(1+nx^2)^2$, whose pointwise limit is $g(0)=1$ and $g(x)=0$ for $x\\ne0$.', 'Lấy đạo hàm được $f_n^{\\prime}(x)=(1-nx^2)/(1+nx^2)^2$, có giới hạn từng điểm $g(0)=1$ và $g(x)=0$ khi $x\\ne0$.'],
        ['At $x_n=1/\\sqrt{2n}$, $f_n^{\\prime}(x_n)=2/9$ while $g(x_n)=0$; thus the derivative errors stay at least $2/9$.', 'Tại $x_n=1/\\sqrt{2n}$, $f_n^{\\prime}(x_n)=2/9$ còn $g(x_n)=0$; vì vậy sai số đạo hàm luôn ít nhất $2/9$.']
      ]),
      q(['On $[0,1]$, let $u_n(x)=x/(1+nx)$. Compute the pointwise limit of $u_n^{\\prime}$ and compare it with the derivative of the limit function.', 'Trên $[0,1]$, cho $u_n(x)=x/(1+nx)$. Tính giới hạn từng điểm của $u_n^{\\prime}$ và so sánh với đạo hàm giới hạn hàm.'], [
        ['The functions converge pointwise to $u(x)=0$: at $x=0$ they are zero, and at fixed $x>0$ the quotient tends to zero.', 'Các hàm hội tụ từng điểm đến $u(x)=0$: tại $x=0$ chúng bằng không, còn tại $x>0$ cố định thương tiến về không.'],
        ['Their derivatives are $u_n^{\\prime}(x)=1/(1+nx)^2$, which tend to $1$ at zero and $0$ for every $x>0$.', 'Đạo hàm là $u_n^{\\prime}(x)=1/(1+nx)^2$, tiến đến $1$ tại không và $0$ với mọi $x>0$.'],
        ['The limit function has right derivative $u^{\\prime}_+(0)=0$, unlike the derivative limit $1$ at zero; at $x_n=1/n$, the derivative error is $1/4$.', 'Hàm giới hạn có đạo hàm phải $u^{\\prime}_+(0)=0$, khác giới hạn đạo hàm $1$ tại không; tại $x_n=1/n$, sai số đạo hàm bằng $1/4$.']
      ]),
      q(['On $[0,1]$, let $v_n(x)=x+\\sin(x)/n$. Show the derivatives converge uniformly to the derivative of the function limit.', 'Trên $[0,1]$, cho $v_n(x)=x+\\sin(x)/n$. Chứng minh đạo hàm hội tụ đều đến đạo hàm của giới hạn hàm.'], [
        ['Since $|\\sin x|\\le1$, $v_n\\to v(x)=x$ uniformly.', 'Vì $|\\sin x|\\le1$, $v_n\\to v(x)=x$ đều.'],
        ['Differentiation gives $v_n^{\\prime}(x)=1+\\cos(x)/n$ and $v^{\\prime}(x)=1$.', 'Lấy đạo hàm được $v_n^{\\prime}(x)=1+\\cos(x)/n$ và $v^{\\prime}(x)=1$.'],
        ['The derivative error satisfies $\\sup_{[0,1]}|v_n^{\\prime}-v^{\\prime}|\\le1/n\\to0$, so convergence is uniform.', 'Sai số đạo hàm thỏa $\\sup_{[0,1]}|v_n^{\\prime}-v^{\\prime}|\\le1/n\\to0$, nên hội tụ đều.']
      ])
    ],
    reviewNote: 'Checked the pointwise derivative limits and moving witnesses; the first companion has a uniformly convergent function sequence but nonuniform derivative convergence.',
    sourceIds: ['f-18100a']
  },
  'f-w015-e1': {
    prompt:bi(['Let $f_n,f$ be Riemann integrable on $[-2,3]$ with $\\sup_{[-2,3]}|f_n-f|\\le0.01$. Bound $|\\int_{-2}^3f_n-\\int_{-2}^3f|$.','Cho $f_n,f$ khả tích Riemann trên $[-2,3]$, có $\\sup_{[-2,3]}|f_n-f|\\le0.01$. Chặn $|\\int_{-2}^3f_n-\\int_{-2}^3f|$.']),
    application: bi(['A uniform approximation error controls integral error by multiplying the worst pointwise error by the finite interval length.', 'Sai số xấp xỉ đều chặn sai số tích phân bằng cách nhân sai số điểm lớn nhất với độ dài đoạn hữu hạn.']),
    formula: bi(['If $f_n,f$ are Riemann integrable on $[a,b]$ and $\\sup_{x\\in[a,b]}|f_n(x)-f(x)|\\le\\eta$, then $|\\int_a^b f_n-\\int_a^b f|\\le(b-a)\\eta$.', 'Nếu $f_n,f$ khả tích Riemann trên $[a,b]$ và $\\sup_{x\\in[a,b]}|f_n(x)-f(x)|\\le\\eta$, thì $|\\int_a^b f_n-\\int_a^b f|\\le(b-a)\\eta$.']),
    steps: [
      bi(['Check that both functions are integrable on the finite interval.', 'Kiểm tra cả hai hàm khả tích trên đoạn hữu hạn.']),
      bi(['Use $|\\int(f_n-f)|\\le\\int|f_n-f|$.', 'Dùng $|\\int(f_n-f)|\\le\\int|f_n-f|$.']),
      bi(['Replace the pointwise error by its uniform upper bound $\\eta$.', 'Thay sai số từng điểm bằng chặn đều $\\eta$.']),
      bi(['Multiply by the interval length to get the total integral-error bound.', 'Nhân với độ dài đoạn để có chặn sai số tích phân.'])
    ],
    primarySolution: [
      bi(['Both functions are assumed integrable on $[-2,3]$, whose length is $3-(-2)=5$.', 'Hai hàm được giả sử khả tích trên $[-2,3]$, đoạn có độ dài $3-(-2)=5$.']),
      bi(['The integral-error inequality gives $|\\int_{-2}^3 f_n-\\int_{-2}^3 f|\\le5\\sup_{[-2,3]}|f_n-f|$.', 'Bất đẳng thức sai số tích phân cho $|\\int_{-2}^3 f_n-\\int_{-2}^3 f|\\le5\\sup_{[-2,3]}|f_n-f|$.']),
      bi(['Substituting the uniform bound yields $5(0.01)=0.05$.', 'Thế chặn đều được $5(0.01)=0.05$.']),
      bi(['Therefore the absolute integral difference is at most $0.05$.', 'Vì vậy hiệu tuyệt đối giữa hai tích phân không vượt quá $0.05$.'])
    ],
    companions: [
      q(['If $f_n$ and $f$ are integrable on $[0,4]$ and $\\sup|f_n-f|\\le0.02$, bound the absolute difference of their integrals.', 'Nếu $f_n$ và $f$ khả tích trên $[0,4]$ và $\\sup|f_n-f|\\le0.02$, hãy chặn hiệu tuyệt đối hai tích phân.'], [
        ['The interval length is $4-0=4$.', 'Độ dài đoạn là $4-0=4$.'],
        ['The integral-error bound is length times the uniform error, namely $4(0.02)$.', 'Chặn sai số tích phân bằng độ dài nhân sai số đều, tức $4(0.02)$.'],
        ['Hence $|\\int_0^4 f_n-\\int_0^4 f|\\le0.08$.', 'Do đó $|\\int_0^4 f_n-\\int_0^4 f|\\le0.08$.']
      ]),
      q(['For integrable $g_n,g$ on $[-1,2]$ with $\\sup|g_n-g|\\le0.03$, derive the integral bound from the triangle inequality.', 'Với $g_n,g$ khả tích trên $[-1,2]$ và $\\sup|g_n-g|\\le0.03$, suy ra chặn tích phân bằng bất đẳng thức tam giác.'], [
        ['First, $|\\int_{-1}^2(g_n-g)|\\le\\int_{-1}^2|g_n-g|$.', 'Trước hết, $|\\int_{-1}^2(g_n-g)|\\le\\int_{-1}^2|g_n-g|$.'],
        ['Every pointwise error is at most $0.03$, so the right side is at most $3(0.03)$.', 'Sai số từng điểm không quá $0.03$, nên vế phải không quá $3(0.03)$.'],
        ['Thus the absolute integral difference is at most $0.09$.', 'Vậy hiệu tuyệt đối giữa hai tích phân không quá $0.09$.']
      ]),
      q(['On $[2,5]$, let $g_n(x)=x+1/n$ and $g(x)=x$. Compute the integral difference exactly and compare it with the uniform-error bound.', 'Trên $[2,5]$, cho $g_n(x)=x+1/n$ và $g(x)=x$. Tính chính xác hiệu tích phân rồi so với chặn sai số đều.'], [
        ['The pointwise error is the constant $|g_n-g|=1/n$, so its supremum is $1/n$.', 'Sai số từng điểm là hằng số $|g_n-g|=1/n$, nên supremum bằng $1/n$.'],
        ['The integral difference is $\\int_2^5(1/n)\\,dx=3/n$.', 'Hiệu tích phân là $\\int_2^5(1/n)\\,dx=3/n$.'],
        ['The bound gives $(5-2)(1/n)=3/n$, which is exact in this example.', 'Chặn cho $(5-2)(1/n)=3/n$, đúng bằng giá trị thực trong ví dụ này.']
      ])
    ],
    reviewNote: 'Checked interval lengths, integrability assumptions, and integral-error bounds; the constant-error example attains equality.',
    sourceIds: ['f-18100a']
  },
  'f-w015-e2': {
    application: bi(['A fixed-height spike on a shrinking support can converge pointwise to a singleton indicator while its area vanishes; changing the height can preserve area instead.', 'Xung có chiều cao cố định trên giá đỡ co lại có thể hội tụ từng điểm về hàm chỉ thị một điểm trong khi diện tích mất đi; đổi chiều cao có thể giữ diện tích.']),
    formula: bi(['For $f_n(x)=\\max(1-n|x-1/2|,0)$, the support has base $2/n$, height $1$, and integral $1/n\\to0$; the pointwise limit is $\\mathbf1_{\\{1/2\\}}$.', 'Với $f_n(x)=\\max(1-n|x-1/2|,0)$, giá đỡ có đáy $2/n$, chiều cao $1$, tích phân $1/n\\to0$; giới hạn từng điểm là $\\mathbf1_{\\{1/2\\}}$.']),
    steps: [
      bi(['For each fixed input, determine whether it eventually lies outside the shrinking support; treat the spike center separately.', 'Với mỗi đầu vào cố định, xét nó cuối cùng có nằm ngoài giá đỡ co lại hay không; xét riêng tâm xung.']),
      bi(['Identify the pointwise limit function.', 'Xác định hàm giới hạn từng điểm.']),
      bi(['Compute each integral from the geometric area or direct integration.', 'Tính từng tích phân từ diện tích hình học hoặc tích phân trực tiếp.']),
      bi(['Compare the integral sequence with the integral of the limit; pointwise convergence alone need not force equality in general.', 'So sánh dãy tích phân với tích phân của giới hạn; nói chung hội tụ từng điểm không tự bảo đảm bằng nhau.'])
    ],
    primarySolution: [
      bi(['At $x=1/2$, $f_n(x)=1$ for every $n$; at any other fixed $x$, the support radius $1/n$ eventually excludes $x$, so $f_n(x)\\to0$.', 'Tại $x=1/2$, $f_n(x)=1$ với mọi $n$; tại điểm cố định khác $x$, bán kính giá đỡ $1/n$ cuối cùng loại $x$ ra, nên $f_n(x)\\to0$.']),
      bi(['The pointwise limit is the indicator of $\\{1/2\\}$, a Riemann-integrable function with integral $0$.', 'Giới hạn từng điểm là hàm chỉ thị $\\{1/2\\}$, khả tích Riemann và có tích phân bằng $0$.']),
      bi(['Each graph is a triangle with base $2/n$ and height $1$, so $\\int_0^1 f_n=(1/2)(2/n)(1)=1/n$.', 'Mỗi đồ thị là tam giác có đáy $2/n$ và chiều cao $1$, nên $\\int_0^1 f_n=(1/2)(2/n)(1)=1/n$.']),
      bi(['Thus the integrals tend to $0$, agreeing with the limit integral; unlike a growing-height spike, this sequence does not break interchange.', 'Vậy tích phân tiến về $0$, khớp tích phân giới hạn; khác xung có chiều cao tăng, dãy này không phá phép đổi giới hạn.'])
    ],
    companions: [
      q(['For $p_n(x)=n\\mathbf1_{[1/(2n),1/n]}(x)$ on $[0,1]$, find the pointwise limit and integral.', 'Với $p_n(x)=n\\mathbf1_{[1/(2n),1/n]}(x)$ trên $[0,1]$, tìm giới hạn từng điểm và tích phân.'], [
        ['For each fixed $x>0$, the interval eventually lies below $x$; at $x=0$ it is never included, so $p_n(x)\\to0$ everywhere.', 'Với mỗi $x>0$ cố định, khoảng cuối cùng nằm dưới $x$; tại $x=0$ điểm không thuộc khoảng, nên $p_n(x)\\to0$ khắp nơi.'],
        ['Each indicator is Riemann integrable and its support has length $1/(2n)$, so $\\int_0^1p_n=n/(2n)=1/2$.', 'Mỗi hàm chỉ thị khả tích Riemann, giá đỡ có độ dài $1/(2n)$, nên $\\int_0^1p_n=n/(2n)=1/2$.'],
        ['The pointwise limit has integral $0$, while the sequence of integrals stays $1/2$; shrinking support alone does not ensure interchange.', 'Giới hạn từng điểm có tích phân $0$, còn dãy tích phân luôn bằng $1/2$; riêng giá đỡ co lại không bảo đảm đổi giới hạn.']
      ]),
      q(['For $q_n(x)=x^n$ on $[0,1]$, find its pointwise limit and compare the limit of its integrals with the integral of the limit.', 'Với $q_n(x)=x^n$ trên $[0,1]$, tìm giới hạn từng điểm rồi so sánh giới hạn tích phân với tích phân giới hạn.'], [
        ['The limit is $0$ for $x<1$ and $1$ at $x=1$, whose Riemann integral is $0$.', 'Giới hạn bằng $0$ khi $x<1$ và bằng $1$ tại $x=1$, hàm này có tích phân Riemann bằng $0$.'],
        ['Direct integration gives $\\int_0^1x^n\\,dx=1/(n+1)\\to0$.', 'Tích phân trực tiếp cho $\\int_0^1x^n\\,dx=1/(n+1)\\to0$.'],
        ['The integrals converge to the integral of the limit even though convergence is not uniform, since the error supremum is $1$.', 'Tích phân hội tụ đến tích phân giới hạn dù hội tụ không đều, vì supremum sai số bằng $1$.']
      ]),
      q(['For $r_n(x)=\\max(2n(1-n|x-1/n|),0)$ on $[0,1]$ with $n\\ge2$, determine the pointwise limit and integral.', 'Với $r_n(x)=\\max(2n(1-n|x-1/n|),0)$ trên $[0,1]$, $n\\ge2$, tìm giới hạn từng điểm và tích phân.'], [
        ['The triangular support is $[0,2/n]$, with center $1/n$ and height $2n$.', 'Giá đỡ tam giác là $[0,2/n]$, tâm $1/n$ và chiều cao $2n$.'],
        ['For fixed $x>0$, eventually $2/n<x$, while $r_n(0)=0$; thus $r_n(x)\\to0$ for every fixed $x$.', 'Với $x>0$ cố định, cuối cùng $2/n<x$, còn $r_n(0)=0$; vậy $r_n(x)\\to0$ tại mọi điểm cố định $x$.'],
        ['Its area is $(1/2)(2/n)(2n)=2$ for every $n\\ge2$, although the pointwise limit has integral zero.', 'Diện tích là $(1/2)(2/n)(2n)=2$ với mọi $n\\ge2$, dù giới hạn từng điểm có tích phân bằng không.']
      ])
    ],
    reviewNote: 'Checked the fixed-height source triangle, pointwise behavior at its center, and the contrasting fixed-area spike examples.',
    sourceIds: ['f-18100a']
  },
  'f-w015-e3': {
    application: bi(['Absolute bounds on the terms of a function series can certify uniform convergence and give an explicit error bound independent of the input.', 'Các chặn tuyệt đối của số hạng trong chuỗi hàm có thể chứng nhận hội tụ đều và cho sai số tường minh không phụ thuộc đầu vào.']),
    formula: bi(['If $|g_k(x)|\\le a_k$ for every $x\\in D$ and $\\sum_{k=1}^\\infty a_k<\\infty$, then $\\sup_{x\\in D}|\\sum_{k=N+1}^m g_k(x)|\\le\\sum_{k=N+1}^m a_k$; the vanishing scalar tail makes the partial sums uniformly Cauchy.', 'Nếu $|g_k(x)|\\le a_k$ với mọi $x\\in D$ và $\\sum_{k=1}^\\infty a_k<\\infty$, thì $\\sup_{x\\in D}|\\sum_{k=N+1}^m g_k(x)|\\le\\sum_{k=N+1}^m a_k$; phần dư vô hướng tiến về không làm các tổng riêng Cauchy đều.']),
    steps: [
      bi(['Bound each finite function-series tail by the corresponding sum of scalar bounds.', 'Chặn mỗi đuôi hữu hạn của chuỗi hàm bằng tổng các chặn vô hướng tương ứng.']),
      bi(['Choose $N$ so the scalar tail is below a prescribed $\\varepsilon$; this estimate holds for every input at once.', 'Chọn $N$ để đuôi vô hướng nhỏ hơn $\\varepsilon$ cho trước; ước lượng này đúng đồng thời với mọi đầu vào.']),
      bi(['The partial sums are therefore uniformly Cauchy, and completeness of $\\mathbb R$ supplies a pointwise limit.', 'Do đó các tổng riêng Cauchy đều, còn tính đầy đủ của $\\mathbb R$ bảo đảm có giới hạn tại từng điểm.']),
      bi(['The same tail estimate proves uniform convergence to that limit and bounds the remainder.', 'Chính chặn đuôi đó chứng minh hội tụ đều đến giới hạn và chặn sai số phần dư.'])
    ],
    primarySolution: [
      bi(['For integers $m>n$, the geometric bound gives $|\\sum_{k=n+1}^m g_k(x)|\\le\\sum_{k=n+1}^m2^{-k}\\le2^{-n}$ for every $x$.', 'Với các số nguyên $m>n$, chặn hình học cho $|\\sum_{k=n+1}^m g_k(x)|\\le\\sum_{k=n+1}^m2^{-k}\\le2^{-n}$ với mọi $x$.']),
      bi(['Given $\\varepsilon>0$, choose $N$ with $2^{-N}<\\varepsilon$; then every tail after $N$ is smaller than $\\varepsilon$ uniformly in $x$.', 'Với $\\varepsilon>0$, chọn $N$ sao cho $2^{-N}<\\varepsilon$; khi đó mọi đuôi sau $N$ nhỏ hơn $\\varepsilon$ đồng đều theo $x$.']),
      bi(['Thus the partial sums form a uniformly Cauchy sequence; for each fixed $x$ they converge in $\\mathbb R$, defining a sum $G(x)$.', 'Vậy các tổng riêng là dãy Cauchy đều; với mỗi $x$ cố định chúng hội tụ trong $\\mathbb R$, xác định tổng $G(x)$.']),
      bi(['Taking the limit in the tail estimate yields $\\sup_x|G(x)-\\sum_{k=1}^N g_k(x)|\\le2^{-N}$, so convergence is uniform with the stated remainder bound.', 'Lấy giới hạn trong chặn đuôi được $\\sup_x|G(x)-\\sum_{k=1}^N g_k(x)|\\le2^{-N}$, nên hội tụ đều với chặn sai số đã nêu.'])
    ],
    companions: [
      q(['Suppose $|u_k(x)|\\le3^{-k}$ for all $x\\in D$. Prove uniform convergence of $\\sum_{k=1}^\\infty u_k$ and bound the tail after $N$ terms.', 'Giả sử $|u_k(x)|\\le3^{-k}$ với mọi $x\\in D$. Chứng minh $\\sum_{k=1}^\\infty u_k$ hội tụ đều và chặn đuôi sau $N$ số hạng.'], [
        ['For $m>N$, $|\\sum_{k=N+1}^m u_k(x)|\\le\\sum_{k=N+1}^m3^{-k}\\le\\sum_{k=N+1}^\\infty3^{-k}$.', 'Với $m>N$, $|\\sum_{k=N+1}^m u_k(x)|\\le\\sum_{k=N+1}^m3^{-k}\\le\\sum_{k=N+1}^\\infty3^{-k}$.'],
        ['The geometric tail is $\\sum_{k=N+1}^\\infty3^{-k}=3^{-N}/2$, independent of $x$.', 'Đuôi cấp số nhân là $\\sum_{k=N+1}^\\infty3^{-k}=3^{-N}/2$, không phụ thuộc $x$.'],
        ['Since $3^{-N}/2\\to0$, the partial sums are uniformly Cauchy and hence converge uniformly; the remainder is at most $3^{-N}/2$.', 'Vì $3^{-N}/2\\to0$, các tổng riêng Cauchy đều nên hội tụ đều; sai số phần dư không quá $3^{-N}/2$.']
      ]),
      q(['If $|v_k(x)|\\le4^{-k}$ on $D$, find an explicit bound for the error between the infinite sum and its $N$th partial sum.', 'Nếu $|v_k(x)|\\le4^{-k}$ trên $D$, hãy tìm chặn tường minh cho sai số giữa tổng vô hạn và tổng riêng thứ $N$.'], [
        ['For every finite tail, the triangle inequality gives $|\\sum_{k=N+1}^m v_k(x)|\\le\\sum_{k=N+1}^m4^{-k}$.', 'Với mọi đuôi hữu hạn, bất đẳng thức tam giác cho $|\\sum_{k=N+1}^m v_k(x)|\\le\\sum_{k=N+1}^m4^{-k}$.'],
        ['The infinite geometric tail equals $\\sum_{k=N+1}^\\infty4^{-k}=4^{-N}/3$.', 'Đuôi cấp số nhân vô hạn bằng $\\sum_{k=N+1}^\\infty4^{-k}=4^{-N}/3$.'],
        ['Letting $m\\to\\infty$ gives $\\sup_{x\\in D}|\\sum_{k=1}^\\infty v_k(x)-\\sum_{k=1}^N v_k(x)|\\le4^{-N}/3$, which tends to zero.', 'Cho $m\\to\\infty$ được $\\sup_{x\\in D}|\\sum_{k=1}^\\infty v_k(x)-\\sum_{k=1}^N v_k(x)|\\le4^{-N}/3$, và chặn này tiến về không.']
      ]),
      q(['On $D=[0,1)$ consider the series $\\sum_{k=1}^\\infty x^k$. It converges at each $x\\in D$; decide whether its convergence is uniform.', 'Trên $D=[0,1)$ xét chuỗi $\\sum_{k=1}^\\infty x^k$. Chuỗi hội tụ tại từng $x\\in D$; hãy xác định hội tụ có đều không.'], [
        ['At each fixed $x<1$, the geometric series converges to $x/(1-x)$.', 'Với mỗi $x<1$ cố định, chuỗi hình học hội tụ đến $x/(1-x)$.'],
        ['Uniform Cauchy convergence would force the individual terms to tend uniformly to zero, since $x^{N+1}=S_{N+1}(x)-S_N(x)$.', 'Tính Cauchy đều buộc từng số hạng tiến đều về không, vì $x^{N+1}=S_{N+1}(x)-S_N(x)$.'],
        ['But $\\sup_{0\\le x<1}x^{N+1}=1$ for every $N$, so the terms do not tend uniformly to zero and the series is not uniformly convergent.', 'Nhưng $\\sup_{0\\le x<1}x^{N+1}=1$ với mọi $N$, nên các số hạng không tiến đều về không và chuỗi không hội tụ đều.']
      ])
    ],
    reviewNote: 'Checked the geometric tail indices and sums; the third companion fails uniform convergence because its terms do not tend uniformly to zero.',
    sourceIds: ['f-18100a']
  },
  'f-w015-e4': {
    application: bi(['Differentiating a pointwise limit requires hypotheses; even when derivative limits agree with the limit derivative at one endpoint, the interchange theorem still needs its global conditions.', 'Lấy đạo hàm giới hạn từng điểm cần giả thiết; dù giới hạn đạo hàm trùng đạo hàm giới hạn tại một đầu mút, định lý đổi thứ tự vẫn cần điều kiện toàn cục.']),
    formula: bi(['For $f_n(x)=x^n$ on $[0,1]$ with $n\\ge2$, $f_n^{\\prime}(0)=0$ and the pointwise limit has right derivative $0$ at $0$; agreement there does not imply uniform derivative convergence.', 'Với $f_n(x)=x^n$ trên $[0,1]$, $n\\ge2$, ta có $f_n^{\\prime}(0)=0$ và giới hạn từng điểm có đạo hàm phải bằng $0$ tại $0$; sự trùng nhau đó không kéo theo hội tụ đều của đạo hàm.']),
    steps: [
      bi(['Differentiate each member and compute its derivative at the endpoint using the one-sided domain.', 'Lấy đạo hàm từng hàm rồi tính tại đầu mút theo miền một phía.']),
      bi(['Find the pointwise limit separately at interior points and at the other endpoint.', 'Tìm giới hạn từng điểm riêng tại điểm trong và tại đầu mút còn lại.']),
      bi(['Compute the relevant one-sided derivative of the limit directly from its difference quotient.', 'Tính đạo hàm một phía cần xét của giới hạn trực tiếp từ thương sai phân.']),
      bi(['Check whether the theorem hypotheses hold on the interval; a local equality alone does not establish interchange globally.', 'Kiểm tra giả thiết định lý trên cả đoạn; riêng sự bằng nhau cục bộ không thiết lập phép đổi thứ tự toàn cục.'])
    ],
    primarySolution: [
      bi(['For $n\\ge2$, $f_n^{\\prime}(x)=nx^{n-1}$, so $f_n^{\\prime}(0)=0$ and hence $\\lim_{n\\to\\infty}f_n^{\\prime}(0)=0$.', 'Với $n\\ge2$, $f_n^{\\prime}(x)=nx^{n-1}$, nên $f_n^{\\prime}(0)=0$ và do đó $\\lim_{n\\to\\infty}f_n^{\\prime}(0)=0$.']),
      bi(['For each $x<1$, $x^n\\to0$, while $f_n(1)=1$; thus $f(x)=0$ on $[0,1)$ and $f(1)=1$.', 'Với mỗi $x<1$, $x^n\\to0$, còn $f_n(1)=1$; vậy $f(x)=0$ trên $[0,1)$ và $f(1)=1$.']),
      bi(['For $0<h<1$, $[f(h)-f(0)]/h=0$, so the right derivative of $f$ at $0$ is $0$.', 'Với $0<h<1$, $[f(h)-f(0)]/h=0$, nên đạo hàm phải của $f$ tại $0$ bằng $0$.']),
      bi(['The two values agree at $0$, but $f$ is discontinuous at $1$ and $f_n^{\\prime}(1)=n$ is unbounded; the global hypotheses for interchanging derivatives are absent.', 'Hai giá trị trùng nhau tại $0$, nhưng $f$ gián đoạn tại $1$ và $f_n^{\\prime}(1)=n$ không bị chặn; các giả thiết toàn cục để đổi đạo hàm không có.'])
    ],
    companions: [
      q(['Let $g_n(x)=x^2/(x^2+1/n)$ on $[0,1]$. Find $\\lim_n g_n^{\\prime}(0)$ and determine whether the pointwise limit has a finite right derivative at $0$.', 'Cho $g_n(x)=x^2/(x^2+1/n)$ trên $[0,1]$. Tìm $\\lim_n g_n^{\\prime}(0)$ và xác định giới hạn từng điểm có đạo hàm phải hữu hạn tại $0$ hay không.'], [
        ['For each fixed $n$, $g_n(h)/h=h/(h^2+1/n)\\to0$ as $h\\downarrow0$, so $g_n^{\\prime}(0)=0$.', 'Với mỗi $n$ cố định, $g_n(h)/h=h/(h^2+1/n)\\to0$ khi $h\\downarrow0$, nên $g_n^{\\prime}(0)=0$.'],
        ['Thus $\\lim_n g_n^{\\prime}(0)=0$; pointwise, $g_n(0)=0$ but $g_n(x)\\to1$ for every fixed $x>0$.', 'Vậy $\\lim_n g_n^{\\prime}(0)=0$; theo từng điểm, $g_n(0)=0$ nhưng $g_n(x)\\to1$ với mỗi $x>0$ cố định.'],
        ['The limit $g$ satisfies $g(0)=0$ and $g(h)=1$ for $h>0$, so $[g(h)-g(0)]/h=1/h\\to+\\infty$; it has no finite right derivative at $0$.', 'Giới hạn $g$ thỏa $g(0)=0$ và $g(h)=1$ khi $h>0$, nên $[g(h)-g(0)]/h=1/h\\to+\\infty$; hàm không có đạo hàm phải hữu hạn tại $0$.']
      ]),
      q(['On $[0,1]$, let $p_n(x)=x+x^2/n$. Verify that both $p_n$ and their derivatives converge uniformly, and compare the derivative limits.', 'Trên $[0,1]$, cho $p_n(x)=x+x^2/n$. Kiểm tra $p_n$ và đạo hàm cùng hội tụ đều, rồi so sánh các giới hạn đạo hàm.'], [
        ['The function limit is $p(x)=x$, since $\\sup_{[0,1]}|p_n-p|=\\sup x^2/n=1/n\\to0$.', 'Giới hạn hàm là $p(x)=x$, vì $\\sup_{[0,1]}|p_n-p|=\\sup x^2/n=1/n\\to0$.'],
        ['Differentiation gives $p_n^{\\prime}(x)=1+2x/n$ and $p^{\\prime}(x)=1$.', 'Lấy đạo hàm được $p_n^{\\prime}(x)=1+2x/n$ và $p^{\\prime}(x)=1$.'],
        ['The derivative error has supremum $\\sup_{[0,1]}|p_n^{\\prime}-p^{\\prime}|=2/n\\to0$, so the derivative convergence is uniform and its limit equals $p^{\\prime}$.', 'Sai số đạo hàm có supremum $\\sup_{[0,1]}|p_n^{\\prime}-p^{\\prime}|=2/n\\to0$, nên đạo hàm hội tụ đều và giới hạn bằng $p^{\\prime}$.']
      ]),
      q(['State and prove a sufficient condition for differentiating a uniform limit on $[a,b]$ using convergence of derivatives and convergence at one point $x_0$.', 'Nêu và chứng minh điều kiện đủ để lấy đạo hàm qua giới hạn đều trên $[a,b]$ khi các đạo hàm hội tụ và giá trị tại một điểm $x_0$ hội tụ.'], [
        ['Assume $f_n\\in C^1([a,b])$, $f_n^{\\prime}\\to g$ uniformly for continuous $g$, and $f_n(x_0)$ converges to a number $c$.', 'Giả sử $f_n\\in C^1([a,b])$, $f_n^{\\prime}\\to g$ đều với $g$ liên tục, và $f_n(x_0)$ hội tụ đến số $c$.'],
        ['The fundamental theorem gives $f_n(x)=f_n(x_0)+\\int_{x_0}^x f_n^{\\prime}(t)\\,dt$; uniform convergence of derivatives makes the integral terms uniformly Cauchy, so $f_n$ converges uniformly to $f(x)=c+\\int_{x_0}^x g(t)\\,dt$.', 'Định lý cơ bản cho $f_n(x)=f_n(x_0)+\\int_{x_0}^x f_n^{\\prime}(t)\\,dt$; hội tụ đều của đạo hàm làm các tích phân Cauchy đều, nên $f_n$ hội tụ đều đến $f(x)=c+\\int_{x_0}^x g(t)\\,dt$.'],
        ['Because $g$ is continuous, the fundamental theorem implies $f^{\\prime}(x)=g(x)$; thus the derivative of the limit is the uniform limit of derivatives.', 'Vì $g$ liên tục, định lý cơ bản suy ra $f^{\\prime}(x)=g(x)$; do đó đạo hàm của giới hạn bằng giới hạn đều của các đạo hàm.']
      ])
    ],
    reviewNote: 'Checked the right derivatives from difference quotients; the first companion shows a failed interchange, while the theorem companion includes the required convergence at one point.',
    sourceIds: ['f-18100a']
  },
  'f-w015-e5': {
    application: bi(['Uniform approximation of an integrand on a finite interval lets an integral be replaced by the integral of its limit with a controlled error.', 'Xấp xỉ đều hàm dưới dấu tích phân trên đoạn hữu hạn cho phép thay tích phân bằng tích phân giới hạn với sai số được kiểm soát.']),
    formula: bi(['If $f_n\\to f$ uniformly on $[a,b]$ and these functions are Riemann integrable, then $|\\int_a^b f_n-\\int_a^b f|\\le(b-a)\\sup_{[a,b]}|f_n-f|\\to0$.', 'Nếu $f_n\\to f$ đều trên $[a,b]$ và các hàm khả tích Riemann, thì $|\\int_a^b f_n-\\int_a^b f|\\le(b-a)\\sup_{[a,b]}|f_n-f|\\to0$.']),
    steps: [
      bi(['Identify the pointwise limit of the integrand and keep the interval fixed.', 'Xác định giới hạn từng điểm của hàm dưới dấu tích phân và giữ nguyên đoạn tích phân.']),
      bi(['Bound the absolute error uniformly over the entire interval.', 'Chặn sai số tuyệt đối đồng đều trên toàn đoạn.']),
      bi(['Multiply that error by the interval length to bound the difference of integrals.', 'Nhân sai số với độ dài đoạn để chặn hiệu hai tích phân.']),
      bi(['Send the uniform error to zero, then evaluate the integral of the limiting function.', 'Cho sai số đều tiến về không rồi tính tích phân của hàm giới hạn.'])
    ],
    primarySolution: [
      bi(['Write $f_n(x)=e^{-x}+e^{-x}\\sin(x)/n$; since $e^{-x}\\le1$ and $|\\sin x|\\le1$ on $[0,2]$, $\\sup|f_n-e^{-x}|\\le1/n\\to0$.', 'Viết $f_n(x)=e^{-x}+e^{-x}\\sin(x)/n$; vì $e^{-x}\\le1$ và $|\\sin x|\\le1$ trên $[0,2]$, ta có $\\sup|f_n-e^{-x}|\\le1/n\\to0$.']),
      bi(['The limit function is $f(x)=e^{-x}$, which is continuous and integrable on $[0,2]$.', 'Hàm giới hạn là $f(x)=e^{-x}$, liên tục và khả tích trên $[0,2]$.']),
      bi(['The integral-error bound gives $|\\int_0^2 f_n-\\int_0^2e^{-x}|\\le2/n$, which tends to zero.', 'Chặn sai số tích phân cho $|\\int_0^2 f_n-\\int_0^2e^{-x}|\\le2/n$, và chặn này tiến về không.']),
      bi(['Therefore $\\lim_n\\int_0^2f_n=\\int_0^2e^{-x}\\,dx=1-e^{-2}$.', 'Vì vậy $\\lim_n\\int_0^2f_n=\\int_0^2e^{-x}\\,dx=1-e^{-2}$.'])
    ],
    companions: [
      q(['On $[0,1]$, set $u_n(x)=e^{-2x}(1+\\cos x/n)$. Prove uniform convergence and find the limit of the integrals.', 'Trên $[0,1]$, đặt $u_n(x)=e^{-2x}(1+\\cos x/n)$. Chứng minh hội tụ đều và tìm giới hạn của các tích phân.'], [
        ['The limit is $u(x)=e^{-2x}$, and $|u_n-u|=e^{-2x}|\\cos x|/n\\le1/n$ throughout the interval.', 'Giới hạn là $u(x)=e^{-2x}$, và $|u_n-u|=e^{-2x}|\\cos x|/n\\le1/n$ trên toàn đoạn.'],
        ['The uniform error tends to zero, so the integral difference is at most $(1-0)/n=1/n$.', 'Sai số đều tiến về không, nên hiệu tích phân không quá $(1-0)/n=1/n$.'],
        ['Hence $\\lim_n\\int_0^1u_n=\\int_0^1e^{-2x}\\,dx=(1-e^{-2})/2$.', 'Do đó $\\lim_n\\int_0^1u_n=\\int_0^1e^{-2x}\\,dx=(1-e^{-2})/2$.']
      ]),
      q(['For $v_n(x)=x^2+\\sin x/n$ on $[0,2]$, compute the limiting integral and give an error bound for $\\int_0^2v_n$.', 'Với $v_n(x)=x^2+\\sin x/n$ trên $[0,2]$, tính tích phân giới hạn và cho chặn sai số của $\\int_0^2v_n$.'], [
        ['The limit is $v(x)=x^2$, since $\\sup_{[0,2]}|v_n-v|\\le1/n$.', 'Giới hạn là $v(x)=x^2$, vì $\\sup_{[0,2]}|v_n-v|\\le1/n$.'],
        ['The integral error is at most the interval length times the uniform error, namely $2/n$.', 'Sai số tích phân không quá độ dài đoạn nhân sai số đều, tức $2/n$.'],
        ['Since $\\int_0^2x^2\\,dx=8/3$, we get $|\\int_0^2v_n-8/3|\\le2/n$ and therefore $\\int_0^2v_n\\to8/3$.', 'Vì $\\int_0^2x^2\\,dx=8/3$, ta có $|\\int_0^2v_n-8/3|\\le2/n$ và do đó $\\int_0^2v_n\\to8/3$.']
      ]),
      q(['On $[0,1]$, let $w_n(x)=\\sin(nx)/n$. Find its uniform limit and compare the integrals with the integral of the limit.', 'Trên $[0,1]$, cho $w_n(x)=\\sin(nx)/n$. Tìm giới hạn đều rồi so sánh các tích phân với tích phân của giới hạn.'], [
        ['Since $|w_n(x)|\\le1/n$ for every $x$, $w_n\\to0$ uniformly.', 'Vì $|w_n(x)|\\le1/n$ với mọi $x$, $w_n\\to0$ đều.'],
        ['The limit has integral zero, and direct integration gives $\\int_0^1w_n(x)\\,dx=(1-\\cos n)/n^2$.', 'Giới hạn có tích phân bằng không, còn tích phân trực tiếp cho $\\int_0^1w_n(x)\\,dx=(1-\\cos n)/n^2$.'],
        ['The explicit integral tends to zero because $0\\le1-\\cos n\\le2$, confirming convergence to the limit integral.', 'Tích phân tường minh tiến về không vì $0\\le1-\\cos n\\le2$, xác nhận hội tụ về tích phân của giới hạn.']
      ])
    ],
    reviewNote: 'Checked the uniform error bounds and evaluated the limiting elementary integrals; all intervals are finite and all integrands are continuous.',
    sourceIds: ['f-18100a']
  },
  'f-w016-e1': {
    application: bi(['Rank–nullity converts the number of input directions collapsed to zero into the dimension of the attainable output space.', 'Định lý hạng–kernel chuyển số hướng đầu vào bị ánh xạ về không thành số chiều của không gian đầu ra đạt được.']),
    formula: bi(['For a linear map $T:V\\to W$ between finite-dimensional vector spaces, $\\dim V=\\operatorname{rank}T+\\dim\\ker T$; onto $W$ requires $\\operatorname{rank}T=\\dim W$.', 'Với ánh xạ tuyến tính $T:V\\to W$ giữa các không gian vector hữu hạn chiều, $\\dim V=\\operatorname{rank}T+\\dim\\ker T$; phủ $W$ đòi hỏi $\\operatorname{rank}T=\\dim W$.']),
    steps: [
      bi(['Record the dimensions of the domain and codomain; rank–nullity applies to a finite-dimensional domain.', 'Ghi số chiều miền và đối miền; định lý hạng–kernel áp dụng khi miền hữu hạn chiều.']),
      bi(['Substitute the known nullity into $\\dim V=\\operatorname{rank}T+\\dim\\ker T$.', 'Thế số chiều kernel đã biết vào $\\dim V=\\operatorname{rank}T+\\dim\\ker T$.']),
      bi(['Compare the resulting rank with $\\dim W$, since the range lies in the codomain.', 'So sánh hạng thu được với $\\dim W$, vì ảnh là không gian con của đối miền.']),
      bi(['Conclude surjectivity only when the rank reaches the full codomain dimension.', 'Chỉ kết luận toàn ánh khi hạng bằng số chiều toàn bộ đối miền.'])
    ],
    primarySolution: [
      bi(['The domain $\\mathbb R^4$ has dimension $4$ and the given nullity is $\\dim\\ker T=2$.', 'Miền $\\mathbb R^4$ có số chiều $4$ và nullity đã cho là $\\dim\\ker T=2$.']),
      bi(['Rank–nullity gives $\\operatorname{rank}T=4-2=2$.', 'Định lý hạng–kernel cho $\\operatorname{rank}T=4-2=2$.']),
      bi(['A map onto $\\mathbb R^3$ must have rank $3$, because its image would equal a three-dimensional codomain.', 'Ánh xạ phủ $\\mathbb R^3$ phải có hạng $3$, vì ảnh khi đó bằng đối miền ba chiều.']),
      bi(['Since $2<3$, $T$ is not onto $\\mathbb R^3$.', 'Vì $2<3$, $T$ không phủ $\\mathbb R^3$.'])
    ],
    companions: [
      q(['A linear map $T:\\mathbb R^5\\to\\mathbb R^3$ has nullity $2$. Find its rank and decide whether it is onto.', 'Ánh xạ tuyến tính $T:\\mathbb R^5\\to\\mathbb R^3$ có nullity $2$. Tìm hạng và xác định ánh xạ có toàn ánh không.'], [
        ['The domain dimension is $5$, so rank–nullity states $\\operatorname{rank}T+2=5$.', 'Miền có số chiều $5$, nên định lý hạng–kernel cho $\\operatorname{rank}T+2=5$.'],
        ['Thus $\\operatorname{rank}T=3$.', 'Vậy $\\operatorname{rank}T=3$.'],
        ['The codomain has dimension $3$, so an image of rank $3$ equals the whole codomain; $T$ is onto.', 'Đối miền có số chiều $3$, nên ảnh hạng $3$ bằng toàn bộ đối miền; $T$ toàn ánh.']
      ]),
      q(['A linear map $S:\\mathbb R^3\\to\\mathbb R^4$ has rank $2$. Find its nullity and decide whether it is onto.', 'Ánh xạ tuyến tính $S:\\mathbb R^3\\to\\mathbb R^4$ có hạng $2$. Tìm nullity và xác định ánh xạ có toàn ánh không.'], [
        ['Rank–nullity gives $3=2+\\dim\\ker S$.', 'Định lý hạng–kernel cho $3=2+\\dim\\ker S$.'],
        ['Therefore $\\dim\\ker S=1$.', 'Do đó $\\dim\\ker S=1$.'],
        ['Surjectivity onto $\\mathbb R^4$ would require rank $4$, but the rank is $2$; hence $S$ is not onto.', 'Toàn ánh lên $\\mathbb R^4$ cần hạng $4$, nhưng hạng chỉ bằng $2$; vậy $S$ không toàn ánh.']
      ]),
      q(['Define $A:\\mathbb R^2\\to\\mathbb R^3$ by $A(u,v)=(u,v,u+v)$. Find its rank, kernel dimension, and range, then decide whether it is onto.', 'Định nghĩa $A:\\mathbb R^2\\to\\mathbb R^3$ bởi $A(u,v)=(u,v,u+v)$. Tìm hạng, số chiều kernel và ảnh, rồi xác định có toàn ánh không.'], [
        ['If $A(u,v)=(0,0,0)$, then its first two coordinates force $u=0$ and $v=0$, so $\\ker A=\\{(0,0)\\}$ and the nullity is $0$.', 'Nếu $A(u,v)=(0,0,0)$, hai tọa độ đầu buộc $u=0$ và $v=0$, nên $\\ker A=\\{(0,0)\\}$ và nullity bằng $0$.'],
        ['Rank–nullity on the two-dimensional domain gives $\\operatorname{rank}A=2-0=2$.', 'Định lý hạng–kernel trên miền hai chiều cho $\\operatorname{rank}A=2-0=2$.'],
        ['The range is the plane $\\{(a,b,c)\\in\\mathbb R^3:c=a+b\\}$, a proper subspace of $\\mathbb R^3$; thus $A$ is not onto.', 'Ảnh là mặt phẳng $\\{(a,b,c)\\in\\mathbb R^3:c=a+b\\}$, không gian con thực sự của $\\mathbb R^3$; do đó $A$ không toàn ánh.']
      ])
    ],
    reviewNote: 'Checked rank–nullity against the domain dimension in each case and compared rank with the full codomain dimension before deciding surjectivity.',
    sourceIds: ['f-18100a']
  },
  'f-w016-e2': {
    application: bi(['A local curvature bound converts a first-order prediction into a quantitative error guarantee for a short step.', 'Chặn độ cong cục bộ chuyển dự đoán bậc nhất thành bảo đảm sai số định lượng cho bước ngắn.']),
    formula: bi(['If $|f^{\\prime\\prime}(u)|\\le M$ on the full segment from $x$ to $x+h$, Taylor’s theorem gives $|f(x+h)-f(x)-hf^{\\prime}(x)|\\le M|h|^2/2$.', 'Nếu $|f^{\\prime\\prime}(u)|\\le M$ trên toàn đoạn từ $x$ đến $x+h$, định lý Taylor cho $|f(x+h)-f(x)-hf^{\\prime}(x)|\\le M|h|^2/2$.']),
    steps: [
      bi(['Verify that the whole segment between $x$ and $x+h$ lies in the region where the second derivative is bounded.', 'Kiểm tra toàn bộ đoạn giữa $x$ và $x+h$ nằm trong miền có đạo hàm bậc hai bị chặn.']),
      bi(['Use the first-order Taylor remainder estimate with the maximum curvature $M$.', 'Dùng chặn phần dư Taylor bậc nhất với độ cong lớn nhất $M$.']),
      bi(['Substitute the absolute step size $|h|$, because the error depends on $|h|^2$.', 'Thế độ dài bước $|h|$, vì sai số phụ thuộc $|h|^2$.']),
      bi(['Report an upper bound; the estimate need not equal the actual error.', 'Nêu cận trên; ước lượng không nhất thiết bằng sai số thực tế.'])
    ],
    primarySolution: [
      bi(['The hypothesis bounds $|f^{\\prime\\prime}(u)|$ whenever $|u-x|\\le0.2$; the segment from $x$ to $x+0.1$ lies within that neighborhood.', 'Giả thiết chặn $|f^{\\prime\\prime}(u)|$ khi $|u-x|\\le0.2$; đoạn từ $x$ đến $x+0.1$ nằm trong lân cận đó.']),
      bi(['Taylor’s first-order remainder bound is $|f(x+h)-f(x)-hf^{\\prime}(x)|\\le M|h|^2/2$.', 'Chặn phần dư Taylor bậc nhất là $|f(x+h)-f(x)-hf^{\\prime}(x)|\\le M|h|^2/2$.']),
      bi(['With $M=4$ and $h=0.1$, the error is at most $4(0.1)^2/2=0.02$.', 'Với $M=4$ và $h=0.1$, sai số không quá $4(0.1)^2/2=0.02$.']),
      bi(['Thus the linear approximation at $x$ predicts $f(x+0.1)$ with absolute error at most $0.02$.', 'Vì vậy xấp xỉ tuyến tính tại $x$ dự đoán $f(x+0.1)$ với sai số tuyệt đối không quá $0.02$.'])
    ],
    companions: [
      q(['Suppose $|f^{\\prime\\prime}(u)|\\le6$ on the segment from $x$ to $x+0.05$. Bound the error in the first-order approximation at $x+0.05$.', 'Giả sử $|f^{\\prime\\prime}(u)|\\le6$ trên đoạn từ $x$ đến $x+0.05$. Chặn sai số xấp xỉ bậc nhất tại $x+0.05$.'], [
        ['Here the curvature bound is $M=6$ and the step is $h=0.05$.', 'Ở đây chặn độ cong là $M=6$ và bước là $h=0.05$.'],
        ['Taylor’s estimate gives error at most $M|h|^2/2=6(0.05)^2/2$.', 'Ước lượng Taylor cho sai số không quá $M|h|^2/2=6(0.05)^2/2$.'],
        ['Since $(0.05)^2=0.0025$, the bound is $6(0.0025)/2=0.0075$.', 'Vì $(0.05)^2=0.0025$, cận bằng $6(0.0025)/2=0.0075$.']
      ]),
      q(['On the whole segment from $x$ to $x-0.2$, assume $|f^{\\prime\\prime}(u)|\\le3$. Bound the error of the linear approximation to $f(x-0.2)$.', 'Trên toàn đoạn từ $x$ đến $x-0.2$, giả sử $|f^{\\prime\\prime}(u)|\\le3$. Chặn sai số xấp xỉ tuyến tính cho $f(x-0.2)$.'], [
        ['The step is negative, but the remainder uses its magnitude $|h|=0.2$ and the bound $M=3$.', 'Bước âm, nhưng phần dư dùng độ lớn $|h|=0.2$ và chặn $M=3$.'],
        ['The error is at most $3(0.2)^2/2$.', 'Sai số không quá $3(0.2)^2/2$.'],
        ['Evaluating gives $3(0.04)/2=0.06$, so the absolute error is at most $0.06$.', 'Tính được $3(0.04)/2=0.06$, nên sai số tuyệt đối không quá $0.06$.']
      ]),
      q(['A function satisfies $|f^{\\prime\\prime}(u)|\\le8$ throughout a proposed step segment. How large may $|h|$ be to guarantee first-order Taylor error at most $0.04$?', 'Một hàm thỏa $|f^{\\prime\\prime}(u)|\\le8$ trên toàn đoạn bước dự kiến. $|h|$ lớn nhất là bao nhiêu để bảo đảm sai số Taylor bậc nhất không quá $0.04$?'], [
        ['The remainder bound requires $8|h|^2/2\\le0.04$.', 'Chặn phần dư đòi hỏi $8|h|^2/2\\le0.04$.'],
        ['Simplifying gives $4|h|^2\\le0.04$, hence $|h|^2\\le0.01$.', 'Rút gọn được $4|h|^2\\le0.04$, suy ra $|h|^2\\le0.01$.'],
        ['Therefore $|h|\\le0.1$ guarantees the requested tolerance, provided the second-derivative bound holds along that entire segment.', 'Vậy $|h|\\le0.1$ bảo đảm dung sai yêu cầu, miễn chặn đạo hàm bậc hai đúng trên toàn đoạn đó.']
      ])
    ],
    reviewNote: 'Checked the segment hypothesis and arithmetic in all four bounds; each estimate uses the absolute step size and states its curvature assumption.',
    sourceIds: ['f-18100a']
  },
  'f-w016-e3': {
    application: bi(['Compactness and continuity guarantee that an optimization problem has actual best and worst inputs, not merely values approached by a sequence.', 'Tính compact và liên tục bảo đảm bài toán tối ưu có đầu vào tốt nhất và kém nhất thật sự, không chỉ có giá trị được một dãy tiến gần.']),
    formula: bi(['For a nonempty compact set $K$ and continuous $f:K\\to\\mathbb R$, the image $f(K)$ is nonempty and compact in $\\mathbb R$; hence it contains its maximum and minimum.', 'Với tập compact không rỗng $K$ và hàm liên tục $f:K\\to\\mathbb R$, ảnh $f(K)$ không rỗng và compact trong $\\mathbb R$; do đó ảnh chứa giá trị lớn nhất và nhỏ nhất.']),
    steps: [
      bi(['Check that the domain is nonempty and compact; for an interval in $\\mathbb R$, closed and bounded suffices.', 'Kiểm tra miền không rỗng và compact; với đoạn trong $\\mathbb R$, đóng và bị chặn là đủ.']),
      bi(['Continuity maps a compact domain to a compact image.', 'Tính liên tục biến miền compact thành ảnh compact.']),
      bi(['A nonempty compact subset of $\\mathbb R$ is closed and bounded, so its supremum and infimum belong to the set.', 'Tập compact không rỗng trong $\\mathbb R$ đóng và bị chặn, nên supremum và infimum thuộc tập đó.']),
      bi(['Choose domain points mapping to those image values to obtain attained extrema.', 'Chọn các điểm miền ánh xạ đến những giá trị ấy để thu được cực trị đạt được.'])
    ],
    primarySolution: [
      bi(['The domain $K=[-2,3]$ is nonempty, closed, and bounded in $\\mathbb R$, hence compact.', 'Miền $K=[-2,3]$ không rỗng, đóng và bị chặn trong $\\mathbb R$, nên compact.']),
      bi(['Since $f$ is continuous on $K$, the image $f(K)$ is compact in $\\mathbb R$.', 'Vì $f$ liên tục trên $K$, ảnh $f(K)$ compact trong $\\mathbb R$.']),
      bi(['A nonempty compact subset of $\\mathbb R$ contains its supremum and infimum, so $f(K)$ has a maximum and a minimum.', 'Tập compact không rỗng trong $\\mathbb R$ chứa supremum và infimum của nó, nên $f(K)$ có giá trị lớn nhất và nhỏ nhất.']),
      bi(['Each extremal value in $f(K)$ has a preimage in $K$; therefore there exist points of $K$ where $f$ attains both extrema. No numerical values can be found without a specific formula for $f$.', 'Mỗi giá trị cực trị trong $f(K)$ có tiền ảnh thuộc $K$; do đó tồn tại điểm trong $K$ nơi $f$ đạt cả hai cực trị. Không thể tính giá trị số nếu chưa cho công thức cụ thể của $f$.'])
    ],
    companions: [
      q(['Find the maximum and minimum of $g(x)=x^2$ on $[-2,1]$, and explain why both are attained.', 'Tìm giá trị lớn nhất và nhỏ nhất của $g(x)=x^2$ trên $[-2,1]$, rồi giải thích vì sao cả hai đều đạt được.'], [
        ['The interval $[-2,1]$ is compact and nonempty, and $g$ is continuous, so the extreme value theorem guarantees both extrema.', 'Đoạn $[-2,1]$ compact và không rỗng, còn $g$ liên tục, nên định lý giá trị cực trị bảo đảm có cả hai cực trị.'],
        ['Since $x^2\\ge0$ with equality at $x=0$, the minimum is $0$ and is attained at $0$.', 'Vì $x^2\\ge0$ và bằng không tại $x=0$, giá trị nhỏ nhất là $0$ và đạt tại $0$.'],
        ['On this interval $|x|$ is largest at $x=-2$, so the maximum is $g(-2)=4$, which is attained.', 'Trên đoạn này $|x|$ lớn nhất tại $x=-2$, nên giá trị lớn nhất là $g(-2)=4$ và được đạt.']
      ]),
      q(['On the unit circle $K=\\{(x,y):x^2+y^2=1\\}$, find the extrema of $F(x,y)=x+2y$ and points where they occur.', 'Trên đường tròn đơn vị $K=\\{(x,y):x^2+y^2=1\\}$, tìm cực trị của $F(x,y)=x+2y$ và các điểm đạt chúng.'], [
        ['The unit circle is nonempty and compact, and $F$ is continuous, so both extrema exist.', 'Đường tròn đơn vị không rỗng và compact, còn $F$ liên tục, nên cả hai cực trị tồn tại.'],
        ['Cauchy–Schwarz gives $|x+2y|\\le\\sqrt{1^2+2^2}\\sqrt{x^2+y^2}=\\sqrt5$.', 'Cauchy–Schwarz cho $|x+2y|\\le\\sqrt{1^2+2^2}\\sqrt{x^2+y^2}=\\sqrt5$.'],
        ['Equality occurs at $(x,y)=(1,2)/\\sqrt5$ and its negative, giving maximum $\\sqrt5$ and minimum $-\\sqrt5$.', 'Dấu bằng xảy ra tại $(x,y)=(1,2)/\\sqrt5$ và điểm đối của nó, cho cực đại $\\sqrt5$ và cực tiểu $-\\sqrt5$.']
      ]),
      q(['On the noncompact domain $[0,\\infty)$, let $h(x)=x/(1+x)$. Determine its infimum and supremum, and whether they are attained.', 'Trên miền không compact $[0,\\infty)$, cho $h(x)=x/(1+x)$. Xác định infimum, supremum và xem chúng có đạt được không.'], [
        ['For every $x\\ge0$, $0\\le x/(1+x)<1$, and $h(0)=0$, so the infimum $0$ is attained.', 'Với mọi $x\\ge0$, $0\\le x/(1+x)<1$, và $h(0)=0$, nên infimum $0$ đạt được.'],
        ['As $x\\to\\infty$, $x/(1+x)=1-1/(1+x)\\to1$, so the supremum is $1$.', 'Khi $x\\to\\infty$, $x/(1+x)=1-1/(1+x)\\to1$, nên supremum bằng $1$.'],
        ['The strict inequality $h(x)<1$ for every finite $x$ shows this supremum is not attained; continuity and boundedness alone do not replace compactness.', 'Bất đẳng thức nghiêm $h(x)<1$ với mọi $x$ hữu hạn cho thấy supremum không đạt; riêng tính liên tục và bị chặn không thay thế được compact.']
      ])
    ],
    reviewNote: 'Included nonemptiness in the extreme value theorem; checked each domain’s compactness, continuity, and concrete extremal values or failure of attainment.',
    sourceIds: ['f-18100a']
  },
  'f-w016-e4': {
    application: bi(['A bounded continuous function on a noncompact domain can approach its best and worst bounds at missing boundary points without attaining them.', 'Hàm liên tục bị chặn trên miền không compact có thể tiến gần các cận tốt nhất và kém nhất tại biên bị thiếu mà không đạt chúng.']),
    formula: bi(['For $f(x)=x$ on $(0,1)$, $\\inf f=0$ and $\\sup f=1$, but every domain point satisfies $0<f(x)<1$.', 'Với $f(x)=x$ trên $(0,1)$, $\\inf f=0$ và $\\sup f=1$, nhưng mọi điểm trong miền đều thỏa $0<f(x)<1$.']),
    steps: [
      bi(['Use the open domain to check whether candidate boundary values are actually allowed inputs.', 'Dùng miền mở để kiểm tra các giá trị biên ứng viên có thật sự là đầu vào được phép không.']),
      bi(['Prove the proposed bounds hold for every domain point.', 'Chứng minh các cận dự kiến đúng với mọi điểm trong miền.']),
      bi(['Use sequences of domain points approaching each omitted endpoint to show the bounds are sharp.', 'Dùng các dãy điểm trong miền tiến đến từng đầu mút bị bỏ để chứng minh các cận là sắc.']),
      bi(['Separate supremum or infimum from maximum or minimum by checking attainment.', 'Phân biệt supremum hoặc infimum với cực đại hoặc cực tiểu bằng cách kiểm tra việc đạt cận.'])
    ],
    primarySolution: [
      bi(['For every $x\\in(0,1)$, $0<x<1$, so all function values lie strictly between $0$ and $1$.', 'Với mọi $x\\in(0,1)$, $0<x<1$, nên mọi giá trị hàm nằm nghiêm ngặt giữa $0$ và $1$.']),
      bi(['Taking $x_n=1/n$ for $n\\ge2$ gives $f(x_n)=1/n\\to0$, so $\\inf f=0$.', 'Lấy $x_n=1/n$ với $n\\ge2$ được $f(x_n)=1/n\\to0$, nên $\\inf f=0$.']),
      bi(['Taking $y_n=1-1/n$ for $n\\ge2$ gives $f(y_n)=1-1/n\\to1$, so $\\sup f=1$.', 'Lấy $y_n=1-1/n$ với $n\\ge2$ được $f(y_n)=1-1/n\\to1$, nên $\\sup f=1$.']),
      bi(['Neither bound is attained because $0$ and $1$ are excluded from the domain; continuity and boundedness do not guarantee extrema on an open interval.', 'Không cận nào đạt được vì $0$ và $1$ bị loại khỏi miền; tính liên tục và bị chặn không bảo đảm có cực trị trên khoảng mở.'])
    ],
    companions: [
      q(['For $s(x)=\\sin x$ on $(0,\\pi)$, find the infimum and supremum and state which are attained.', 'Với $s(x)=\\sin x$ trên $(0,\\pi)$, tìm infimum, supremum và cho biết cận nào đạt được.'], [
        ['On $(0,\\pi)$, $\\sin x>0$ and $\\sin x\\le1$, with equality at $x=\\pi/2$.', 'Trên $(0,\\pi)$, $\\sin x>0$ và $\\sin x\\le1$, dấu bằng đạt tại $x=\\pi/2$.'],
        ['Values tend to $0$ as $x\\downarrow0$ or $x\\uparrow\\pi$, so the infimum is $0$ but it is not attained.', 'Giá trị tiến về $0$ khi $x\\downarrow0$ hoặc $x\\uparrow\\pi$, nên infimum bằng $0$ nhưng không đạt được.'],
        ['The supremum is $1$, attained at $x=\\pi/2$; this example attains only one of its two bounds.', 'Supremum bằng $1$, đạt tại $x=\\pi/2$; ví dụ này chỉ đạt một trong hai cận.']
      ]),
      q(['For $r(x)=x$ on $[0,1)$, identify its minimum and supremum and determine attainment.', 'Với $r(x)=x$ trên $[0,1)$, xác định giá trị nhỏ nhất và supremum rồi xét việc đạt cận.'], [
        ['Every domain point satisfies $0\\le r(x)<1$, and $r(0)=0$, so the minimum is $0$ and is attained.', 'Mọi điểm miền thỏa $0\\le r(x)<1$, còn $r(0)=0$, nên giá trị nhỏ nhất là $0$ và được đạt.'],
        ['The sequence $x_n=1-1/n$ for $n\\ge2$ lies in the domain and gives $r(x_n)\\to1$.', 'Dãy $x_n=1-1/n$ với $n\\ge2$ thuộc miền và cho $r(x_n)\\to1$.'],
        ['Thus $\\sup r=1$, but no input equals $1$; the half-open domain allows only the upper bound to fail attainment.', 'Vậy $\\sup r=1$, nhưng không đầu vào nào bằng $1$; miền nửa mở chỉ làm cận trên không đạt được.']
      ]),
      q(['On $(0,2)$, let $q(x)=1/(1+x)$. Find its infimum and supremum and show neither is attained.', 'Trên $(0,2)$, cho $q(x)=1/(1+x)$. Tìm infimum, supremum và chứng minh không cận nào đạt được.'], [
        ['For every $0<x<2$, $1/3<1/(1+x)<1$, so all values lie strictly between these candidate bounds.', 'Với mọi $0<x<2$, $1/3<1/(1+x)<1$, nên mọi giá trị nằm nghiêm ngặt giữa hai cận ứng viên này.'],
        ['As $x\\downarrow0$, $q(x)\\to1$; as $x\\uparrow2$, $q(x)\\to1/3$. Hence $\\sup q=1$ and $\\inf q=1/3$.', 'Khi $x\\downarrow0$, $q(x)\\to1$; khi $x\\uparrow2$, $q(x)\\to1/3$. Do đó $\\sup q=1$ và $\\inf q=1/3$.'],
        ['The strict inequalities at every domain point show that neither $1$ nor $1/3$ is attained.', 'Bất đẳng thức nghiêm tại mọi điểm miền cho thấy cả $1$ lẫn $1/3$ đều không đạt được.']
      ])
    ],
    reviewNote: 'Checked sharpness with sequences approaching omitted endpoints and separately verified whether each bound is attained in the three variants.',
    sourceIds: ['f-18100a']
  },
  'f-w016-e5': {
    title:bi(['Directional derivatives and a linear differential','Đạo hàm theo hướng và vi phân tuyến tính']),
    prompt:bi(['Set $p(0,0)=0$ and $p(x,y)=x^3/(x^2+y^2)$ elsewhere. Prove continuity at the origin and compute $D_vp(0)=\\lim_{t\\to0}[p(tv)-p(0)]/t$ for every velocity vector v. Show these values cannot come from a linear differential, so p is not Fréchet differentiable.','Đặt $p(0,0)=0$, $p(x,y)=x^3/(x^2+y^2)$ ở nơi khác. Chứng minh liên tục tại gốc và tính $D_vp(0)=\\lim_{t\\to0}[p(tv)-p(0)]/t$ với mọi vector vận tốc v. Chứng minh các giá trị không thể do một vi phân tuyến tính sinh ra, nên p không khả vi Fréchet.']),
    rubric:[{points:3,criterion:bi(['Prove the continuity bound at the origin.','Chứng minh chặn cho tính liên tục tại gốc.'])},{points:4,critical:true,criterion:bi(['Compute all velocity-direction limits, including the zero direction.','Tính giới hạn theo mọi vector vận tốc, kể cả hướng không.'])},{points:3,critical:true,criterion:bi(['Reject linearity by an explicit additivity check and conclude failure of Fréchet differentiability.','Bác bỏ tính tuyến tính bằng phép kiểm tính cộng cụ thể, rồi kết luận không khả vi Fréchet.'])}],
    commonErrors:[bi(['Having a derivative along each fixed line does not imply a linear differential.','Có đạo hàm dọc mỗi đường thẳng cố định chưa suy ra vi phân tuyến tính.']),bi(['A velocity direction is not normalized here; scaling it scales the directional derivative.','Vector vận tốc ở đây không được chuẩn hóa; nhân nó với hệ số làm đạo hàm theo hướng đổi theo hệ số.'])],
    application:bi(['Gradient-based optimization uses one linear differential to predict changes in every small direction. Separate directional limits may exist without providing that linear predictor.','Tối ưu dùng gradient cần một vi phân tuyến tính để dự đoán thay đổi theo mọi hướng nhỏ. Các giới hạn riêng theo hướng có thể tồn tại mà không cho được bộ dự đoán tuyến tính đó.']),
    formula:bi(['Fréchet differentiability requires $p(h)=p(0)+Lh+o(\\|h\\|)$ for one linear map L. It implies $D_vp(0)=Lv$ for every v; existence of all directional limits alone is weaker.','Khả vi Fréchet đòi $p(h)=p(0)+Lh+o(\\|h\\|)$ với một ánh xạ tuyến tính L. Nó kéo theo $D_vp(0)=Lv$ với mọi v; chỉ tồn tại mọi giới hạn theo hướng là điều yếu hơn.']),
    steps: [
      bi(['First bound the function by the distance to the origin to establish continuity independently of differentiability.','Trước hết chặn hàm bằng khoảng cách tới gốc để xác lập liên tục riêng với khả vi.']),
      bi(['For each fixed velocity $v=(a,b)$, substitute $(x,y)=(ta,tb)$ and divide by t before taking the limit.','Với mỗi vector vận tốc cố định $v=(a,b)$, thế $(x,y)=(ta,tb)$ rồi chia cho t trước khi lấy giới hạn.']),
      bi(['If a linear differential exists, its values on the two coordinate vectors determine its value on their sum.','Nếu tồn tại vi phân tuyến tính, giá trị trên hai vector tọa độ quyết định giá trị trên tổng của chúng.']),
      bi(['Compare that forced value with the actual diagonal-direction limit. A disagreement rejects Fréchet differentiability.','So giá trị bị buộc đó với giới hạn thực theo hướng đường chéo. Không trùng nhau sẽ bác bỏ khả vi Fréchet.'])
    ],
    primarySolution: [
      bi(['For $r=\\sqrt{x^2+y^2}>0$, $|p(x,y)|=|x|^3/r^2\\le|x|\\le r$. Thus p tends to zero at the origin and is continuous there.','Với $r=\\sqrt{x^2+y^2}>0$, $|p(x,y)|=|x|^3/r^2\\le|x|\\le r$. Vậy p tiến về không tại gốc và liên tục ở đó.']),
      bi(['For $v=(a,b)\\ne0$ and $t\\ne0$, $p(ta,tb)/t=a^3/(a^2+b^2)$. The quotient is constant in t, so this is the directional derivative. For $v=0$, the derivative is zero.','Với $v=(a,b)\\ne0$, $t\\ne0$, $p(ta,tb)/t=a^3/(a^2+b^2)$. Thương không đổi theo t nên đó là đạo hàm theo hướng. Với $v=0$, đạo hàm bằng không.']),
      bi(['In particular, $D_{(1,0)}p=1$ and $D_{(0,1)}p=0$. Any linear differential matching them must give $L(1,1)=1$.','Cụ thể, $D_{(1,0)}p=1$, $D_{(0,1)}p=0$. Vi phân tuyến tính bất kỳ khớp chúng phải cho $L(1,1)=1$.']),
      bi(['But direct substitution gives $D_{(1,1)}p=1/2$. The directional map is not additive, so no linear differential exists. Continuity plus every directional derivative still does not suffice.','Nhưng thế trực tiếp cho $D_{(1,1)}p=1/2$. Ánh xạ đạo hàm theo hướng không có tính cộng, nên không tồn tại vi phân tuyến tính. Liên tục cùng mọi đạo hàm theo hướng vẫn chưa đủ.'])
    ],
    companions: [
      q(['Define $h(0,0)=0$ and $h(x,y)=x^2y/(x^2+y^2)$ elsewhere. Show that $h$ is continuous at the origin but not differentiable there.', 'Định nghĩa $h(0,0)=0$ và $h(x,y)=x^2y/(x^2+y^2)$ ở nơi khác. Chứng minh $h$ liên tục tại gốc nhưng không khả vi tại đó.'], [
        ['On both axes $h$ vanishes, so the two partial derivatives at the origin exist and equal $0$.', 'Trên cả hai trục, $h$ bằng không, nên hai đạo hàm riêng tại gốc tồn tại và bằng $0$.'],
        ['Writing $r=\\sqrt{x^2+y^2}$ gives $|h(x,y)|=x^2|y|/(x^2+y^2)\\le r$, so $h(x,y)\\to0=h(0,0)$ and $h$ is continuous.', 'Đặt $r=\\sqrt{x^2+y^2}$ thì $|h(x,y)|=x^2|y|/(x^2+y^2)\\le r$, nên $h(x,y)\\to0=h(0,0)$ và $h$ liên tục.'],
        ['The partials force any derivative to be the zero map, but along $(t,t)$, $|h(t,t)|/\\sqrt{t^2+t^2}=1/(2\\sqrt2)$; the differentiability remainder is not $o(r)$, so $h$ is not differentiable.', 'Các đạo hàm riêng buộc ánh xạ đạo hàm nếu có phải là ánh xạ không, nhưng dọc $(t,t)$, $|h(t,t)|/\\sqrt{t^2+t^2}=1/(2\\sqrt2)$; phần dư khả vi không là $o(r)$, nên $h$ không khả vi.']
      ]),
      q(['Let $g(0,0)=0$ and $g(x,y)=xy^2/(x^2+y^4)$ elsewhere. Compute its coordinate partials at the origin and test continuity along $x=y^2$.', 'Cho $g(0,0)=0$ và $g(x,y)=xy^2/(x^2+y^4)$ ở nơi khác. Tính đạo hàm riêng theo tọa độ tại gốc và kiểm tra tính liên tục dọc $x=y^2$.'], [
        ['On the $x$-axis and the $y$-axis, $g$ is zero, so both partial difference quotients at the origin are zero.', 'Trên trục $x$ và trục $y$, $g$ bằng không, nên cả hai thương sai phân riêng tại gốc đều bằng không.'],
        ['Set $x=y^2$ with $y\\ne0$; then $g(y^2,y)=y^4/(y^4+y^4)=1/2$.', 'Đặt $x=y^2$ với $y\\ne0$; khi đó $g(y^2,y)=y^4/(y^4+y^4)=1/2$.'],
        ['This path limit differs from $g(0,0)=0$, so $g$ is discontinuous and therefore not differentiable at the origin.', 'Giới hạn theo đường này khác $g(0,0)=0$, nên $g$ gián đoạn và do đó không khả vi tại gốc.']
      ]),
      q(['Set $r(0,0)=0$ and $r(x,y)=x^3y/(x^6+y^2)$ elsewhere. Show every directional derivative at the origin is zero, yet r is not continuous. Use the path $y=x^3$.','Đặt $r(0,0)=0$, $r(x,y)=x^3y/(x^6+y^2)$ ở nơi khác. Chứng minh mọi đạo hàm theo hướng tại gốc bằng không, nhưng r không liên tục. Dùng đường $y=x^3$.'],[
        ['For fixed $v=(a,b)$ with $b\\ne0$, $r(ta,tb)/t=a^3bt/(a^6t^4+b^2)\\to0$.','Với $v=(a,b)$ cố định có $b\\ne0$, $r(ta,tb)/t=a^3bt/(a^6t^4+b^2)\\to0$.'],
        ['If $b=0$, the entire line lies on the x-axis and r is zero there. The zero direction also gives zero. Thus all directional derivatives form the zero linear map.','Nếu $b=0$, toàn bộ đường thẳng nằm trên trục x và r bằng không ở đó. Hướng không cũng cho không. Vậy mọi đạo hàm theo hướng tạo ánh xạ tuyến tính không.'],
        ['Along $(x,y)=(t,t^3)$ for $t\\ne0$, $r(t,t^3)=t^6/(2t^6)=1/2$. This does not tend to the assigned value zero, so r is discontinuous.','Dọc $(x,y)=(t,t^3)$ với $t\\ne0$, $r(t,t^3)=t^6/(2t^6)=1/2$. Giá trị này không tiến về giá trị không đã gán nên r gián đoạn.'],
        ['Even linear dependence of directional derivatives on velocity is insufficient without a remainder estimate uniform over directions. Fréchet differentiability would imply continuity.','Ngay cả đạo hàm theo hướng phụ thuộc tuyến tính vào vận tốc cũng chưa đủ nếu thiếu chặn phần dư đều theo hướng. Khả vi Fréchet sẽ kéo theo liên tục.']
      ])
    ],
    reviewNote: 'Second reading replaced the primary that exactly repeated W9e3 with directional versus Frechet differentiability. Computed every velocity-direction limit, continuity bound, nonadditivity and the stronger all-zero-directional/discontinuous curved-path counterexample; rubric updated.',
    sourceIds: ['f-18100a']
  },
  };
export default reviewed;
