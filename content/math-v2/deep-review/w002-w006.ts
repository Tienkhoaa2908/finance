import {b, type ReviewedLesson} from './types';

type TextPair = readonly [string, string];
const bi = ([en, vi]: TextPair) => b(String.raw`${en}`, String.raw`${vi}`);
const q = (prompt: TextPair, solution: TextPair[]) => ({
  prompt: bi(prompt),
  solution: solution.map(bi),
});

const reviewed: Record<string, ReviewedLesson> = {
  'f-w002-e1': {
    application: bi([
      'Negating a quantified tail condition identifies a fixed tolerance at which no cutoff makes all later errors small.',
      'Phủ định điều kiện đuôi có lượng từ xác định một sai số cố định mà không cutoff nào làm mọi sai số về sau đủ nhỏ.'
    ]),
    formula: bi([
      'For a sequence $(a_n)$ and target $L$, convergence means $\\forall\\varepsilon>0\\;\\exists N\\in\\mathbb N\\;\\forall n\\ge N:\\ |a_n-L|<\\varepsilon$. Its exact negation is $\\exists\\varepsilon_0>0\\;\\forall N\\in\\mathbb N\\;\\exists n\\ge N:\\ |a_n-L|\\ge\\varepsilon_0$.',
      'Với dãy $(a_n)$ và đích $L$, hội tụ nghĩa là $\\forall\\varepsilon>0\\;\\exists N\\in\\mathbb N\\;\\forall n\\ge N:\\ |a_n-L|<\\varepsilon$. Phủ định chính xác là $\\exists\\varepsilon_0>0\\;\\forall N\\in\\mathbb N\\;\\exists n\\ge N:\\ |a_n-L|\\ge\\varepsilon_0$.'
    ]),
    steps: [
      bi(['Negate the outer universal tolerance first; the failure must use one fixed $\\varepsilon_0>0$.', 'Phủ định lượng từ phổ quát ngoài cùng trước; sự thất bại phải dùng một $\\varepsilon_0>0$ cố định.']),
      bi(['Negating “there exists a cutoff $N$” makes every proposed $N$ fail, so require a violating $n\\ge N$.', 'Phủ định “tồn tại cutoff $N$” khiến mọi $N$ đề xuất đều thất bại, nên yêu cầu có chỉ số vi phạm $n\\ge N$.']),
      bi(['Negate the strict error bound $|a_n-L|<\\varepsilon_0$ as $|a_n-L|\\ge\\varepsilon_0$; the same tolerance is violated arbitrarily late.', 'Phủ định cận sai số nghiêm $|a_n-L|<\\varepsilon_0$ thành $|a_n-L|\\ge\\varepsilon_0$; cùng một sai số bị vi phạm tùy ý xa về sau.'])
    ],
    primarySolution: [
      bi(['Start with the quantifier string $\\forall\\varepsilon>0\\;\\exists N\\;\\forall n\\ge N$.', 'Bắt đầu từ chuỗi lượng từ $\\forall\\varepsilon>0\\;\\exists N\\;\\forall n\\ge N$.']),
      bi(['Negating the first quantifier gives one witness $\\varepsilon_0>0$; negating $\\exists N$ gives $\\forall N$.', 'Phủ định lượng từ đầu cho một nhân chứng $\\varepsilon_0>0$; phủ định $\\exists N$ cho $\\forall N$.']),
      bi(['Negating the final universal tail gives some $n\\ge N$ with the error inequality reversed: $|a_n-L|\\ge\\varepsilon_0$.', 'Phủ định lượng từ phổ quát cuối cùng cho một $n\\ge N$ với bất đẳng thức sai số đảo chiều: $|a_n-L|\\ge\\varepsilon_0$.']),
      bi(['Thus one positive tolerance fails at arbitrarily large indices; convergence instead requires every positive tolerance eventually to hold for all later indices.', 'Vậy một sai số dương bị vi phạm tại các chỉ số lớn tùy ý; hội tụ đòi hỏi mọi sai số dương cuối cùng đúng với tất cả chỉ số về sau.'])
    ],
    companions: [
      q(
        ['Write the exact negation of $\\forall r>0\\;\\exists N\\in\\mathbb N\\;\\forall n\\ge N:\\ 1/n<r$. Then show this negation is false.', 'Viết phủ định chính xác của $\\forall r>0\\;\\exists N\\in\\mathbb N\\;\\forall n\\ge N:\\ 1/n<r$. Sau đó chứng minh phủ định này sai.'],
        [
          ['Negate the quantifiers in order to get $\\exists r_0>0\\;\\forall N\\;\\exists n\\ge N$ such that $1/n\\ge r_0$.', 'Đảo phủ định các lượng từ theo thứ tự để được $\\exists r_0>0\\;\\forall N\\;\\exists n\\ge N$ sao cho $1/n\\ge r_0$.'],
          ['For any proposed $r_0>0$, choose an integer $N>1/r_0$ and then take any $n\\ge N$.', 'Với mọi $r_0>0$ được đề xuất, chọn số nguyên $N>1/r_0$ rồi lấy bất kỳ $n\\ge N$.'],
          ['Then $1/n\\le1/N<r_0$, contradicting the required violation; hence the negation is false and $1/n\\to0$.', 'Khi đó $1/n\\le1/N<r_0$, mâu thuẫn với điều kiện vi phạm; vì thế phủ định sai và $1/n\\to0$.']
        ]
      ),
      q(
        ['Use the definition to prove that $a_n=(-1)^n$ does not converge to $0$. Give one explicit tolerance and the violating index for each cutoff.', 'Dùng định nghĩa để chứng minh $a_n=(-1)^n$ không hội tụ đến $0$. Hãy nêu một sai số cụ thể và chỉ số vi phạm cho mỗi cutoff.'],
        [
          ['Choose the fixed tolerance $\\varepsilon_0=1/2$; for every integer $N$, choose an integer $n\\ge N$.', 'Chọn sai số cố định $\\varepsilon_0=1/2$; với mọi số nguyên $N$, chọn một số nguyên $n\\ge N$.'],
          ['Since $|(-1)^n-0|=1$, this index satisfies $|a_n-0|=1\\ge1/2$.', 'Vì $|(-1)^n-0|=1$, chỉ số này thỏa $|a_n-0|=1\\ge1/2$.'],
          ['Every cutoff therefore has a later violation at the same tolerance, which is exactly the negation of convergence to zero.', 'Do đó mọi cutoff đều có một vi phạm về sau tại cùng sai số; đây chính là phủ định của hội tụ về không.']
        ]
      ),
      q(
        ['Negate $\\exists x\\in\\mathbb R\\;\\forall y\\in\\mathbb R:\\ y^2\\ge x$, and determine whether the negated statement is true.', 'Phủ định $\\exists x\\in\\mathbb R\\;\\forall y\\in\\mathbb R:\\ y^2\\ge x$ và xác định mệnh đề phủ định có đúng không.'],
        [
          ['The negation is $\\forall x\\in\\mathbb R\\;\\exists y\\in\\mathbb R$ such that $y^2<x$.', 'Phủ định là $\\forall x\\in\\mathbb R\\;\\exists y\\in\\mathbb R$ sao cho $y^2<x$.'],
          ['This is false at $x=0$, because every real square satisfies $y^2\\ge0$.', 'Mệnh đề sai tại $x=0$, vì bình phương của mọi số thực đều thỏa $y^2\\ge0$.'],
          ['Indeed the original statement is true with witness $x=0$, so its negation must be false.', 'Thật vậy, mệnh đề gốc đúng với nhân chứng $x=0$, nên phủ định của nó phải sai.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the quantifier order and reversed weak/strict inequality: failure requires one fixed positive tolerance with arbitrarily late violations. Assumes $N,n$ range over positive integers.`,
    sourceIds: ['f-book-proof']
  },
  'f-w002-e2': {
    application: bi([
      'Induction checks that a proposed closed form obeys both the starting value and every update of a recurrence.',
      'Quy nạp kiểm tra dạng tường minh đề xuất khớp cả giá trị đầu lẫn mọi bước cập nhật của truy hồi.'
    ]),
    formula: bi([
      'For $a_1=c$ and $a_{n+1}=ra_n+s$ with $r\\ne1$, the fixed point is $-s/(r-1)$ and $a_n=(c+s/(r-1))r^{n-1}-s/(r-1)$. An induction proof still needs a base case and the recurrence step.',
      'Với $a_1=c$ và $a_{n+1}=ra_n+s$, $r\\ne1$, điểm bất động là $-s/(r-1)$ và $a_n=(c+s/(r-1))r^{n-1}-s/(r-1)$. Chứng minh quy nạp vẫn cần bước đầu và bước truy hồi.'
    ]),
    steps: [
      bi(['Substitute $n=1$ into the candidate expression and compare it with the specified initial value.', 'Thay $n=1$ vào biểu thức dự đoán và so sánh với giá trị đầu đã cho.']),
      bi(['Assume the expression holds at $n$; insert it into the full update, retaining every additive term.', 'Giả sử biểu thức đúng tại $n$; thay vào toàn bộ quy tắc cập nhật và giữ đủ mọi số hạng cộng.']),
      bi(['Simplify to the same expression with exponent index advanced by one, then invoke induction for all $n\\ge1$.', 'Rút gọn về chính biểu thức đó với số mũ tăng một đơn vị, rồi kết luận bằng quy nạp với mọi $n\\ge1$.'])
    ],
    primarySolution: [
      bi(['At $n=1$, $(5\\cdot3^0-1)/2=2$, so the formula matches $a_1$.', 'Tại $n=1$, $(5\\cdot3^0-1)/2=2$, nên công thức khớp với $a_1$.']),
      bi(['Assume $a_n=(5\\cdot3^{n-1}-1)/2$. The recurrence gives $a_{n+1}=3a_n+1$.', 'Giả sử $a_n=(5\\cdot3^{n-1}-1)/2$. Truy hồi cho $a_{n+1}=3a_n+1$.']),
      bi(['Substitute and simplify: $a_{n+1}=3(5\\cdot3^{n-1}-1)/2+1=(15\\cdot3^{n-1}-1)/2=(5\\cdot3^n-1)/2$.', 'Thay vào và rút gọn: $a_{n+1}=3(5\\cdot3^{n-1}-1)/2+1=(15\\cdot3^{n-1}-1)/2=(5\\cdot3^n-1)/2$.']),
      bi(['This is the claimed expression with $n+1$ in place of $n$, so the induction proves the formula for every $n\\ge1$.', 'Đây là biểu thức đã cho với $n+1$ thay cho $n$, nên quy nạp chứng minh công thức đúng với mọi $n\\ge1$.'])
    ],
    companions: [
      q(
        ['Let $b_1=4$ and $b_{n+1}=2b_n+1$. Prove by induction that $b_n=5\\cdot2^{n-1}-1$ for every $n\\ge1$.', 'Cho $b_1=4$ và $b_{n+1}=2b_n+1$. Chứng minh bằng quy nạp rằng $b_n=5\\cdot2^{n-1}-1$ với mọi $n\\ge1$.'],
        [
          ['Base case: $5\\cdot2^0-1=4=b_1$.', 'Bước đầu: $5\\cdot2^0-1=4=b_1$.'],
          ['Assume $b_n=5\\cdot2^{n-1}-1$. Then $b_{n+1}=2(5\\cdot2^{n-1}-1)+1=5\\cdot2^n-1$.', 'Giả sử $b_n=5\\cdot2^{n-1}-1$. Khi đó $b_{n+1}=2(5\\cdot2^{n-1}-1)+1=5\\cdot2^n-1$.'],
          ['The last expression is the proposed formula at $n+1$; the base and step prove the claim for all $n\\ge1$.', 'Biểu thức cuối là công thức dự đoán tại $n+1$; bước đầu và bước quy nạp chứng minh mệnh đề với mọi $n\\ge1$.']
        ]
      ),
      q(
        ['Prove by induction that $1^3+2^3+\\cdots+n^3=\\bigl(n(n+1)/2\\bigr)^2$ for every integer $n\\ge1$.', 'Chứng minh bằng quy nạp rằng $1^3+2^3+\\cdots+n^3=\\bigl(n(n+1)/2\\bigr)^2$ với mọi số nguyên $n\\ge1$.'],
        [
          ['At $n=1$, both sides equal $1$. Assume the formula holds at $n$.', 'Tại $n=1$, hai vế đều bằng $1$. Giả sử công thức đúng tại $n$.'],
          ['Add the next cube: the sum through $n+1$ is $n^2(n+1)^2/4+(n+1)^3$.', 'Cộng lập phương tiếp theo: tổng đến $n+1$ là $n^2(n+1)^2/4+(n+1)^3$.'],
          ['Factor to get $(n+1)^2[n^2/4+(n+1)]=(n+1)^2(n+2)^2/4$, the claimed square at $n+1$.', 'Phân tích được $(n+1)^2[n^2/4+(n+1)]=(n+1)^2(n+2)^2/4$, đúng bằng bình phương cần có tại $n+1$.']
        ]
      ),
      q(
        ['Let $c_1=3$ and $c_{n+1}=c_n+4$. Find a formula for $c_n$ and prove it by induction.', 'Cho $c_1=3$ và $c_{n+1}=c_n+4$. Tìm công thức $c_n$ và chứng minh bằng quy nạp.'],
        [
          ['The first terms are $3,7,11$, suggesting $c_n=4n-1$; this must be checked, not inferred from samples alone.', 'Các số hạng đầu là $3,7,11$, gợi ý $c_n=4n-1$; cần chứng minh chứ không chỉ suy từ vài mẫu.'],
          ['At $n=1$, $4(1)-1=3$. If $c_n=4n-1$, then $c_{n+1}=c_n+4=4n+3=4(n+1)-1$.', 'Tại $n=1$, $4(1)-1=3$. Nếu $c_n=4n-1$ thì $c_{n+1}=c_n+4=4n+3=4(n+1)-1$.'],
          ['The induction step matches the formula at the next index, proving it for all positive integers.', 'Bước quy nạp khớp công thức ở chỉ số kế tiếp, nên công thức đúng với mọi số nguyên dương.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the base value and recurrence substitution; the added $+1$ is essential to obtain the stated numerator $5\cdot3^n-1$. Assumes the recurrence is defined for every integer $n\ge1$.`,
    sourceIds: ['f-book-proof']
  },
  'f-w002-e3': {
    application: bi([
      'A function has an inverse on its stated codomain only when each output is attained exactly once; restricting a domain can remove collisions.',
      'Hàm có hàm ngược trên đối miền đã nêu khi mỗi đầu ra được đạt đúng một lần; giới hạn miền có thể loại bỏ các va chạm.'
    ]),
    formula: bi([
      'For $f:D\\to C$, bijectivity means injectivity and surjectivity together. The inverse $f^{-1}:C\\to D$ exists exactly under bijectivity; both domain and codomain matter.',
      'Với $f:D\\to C$, song ánh nghĩa là vừa đơn ánh vừa toàn ánh. Hàm ngược $f^{-1}:C\\to D$ tồn tại đúng khi song ánh; cả miền xác định và đối miền đều quan trọng.'
    ]),
    steps: [
      bi(['Test injectivity by equating outputs for arbitrary allowed inputs and checking whether the inputs must agree.', 'Kiểm tra đơn ánh bằng cách cho đầu ra của hai đầu vào hợp lệ bằng nhau rồi xét liệu hai đầu vào có buộc bằng nhau không.']),
      bi(['Test surjectivity against the stated codomain: for each target value, exhibit an allowed preimage.', 'Kiểm tra toàn ánh theo đúng đối miền: với mỗi giá trị đích, nêu một tiền ảnh hợp lệ.']),
      bi(['State an inverse only after both checks; verify its input and output domains explicitly.', 'Chỉ nêu hàm ngược sau khi kiểm tra cả hai tính chất; ghi rõ miền vào và miền ra của nó.'])
    ],
    primarySolution: [
      bi(['On $\\mathbb R$, the distinct inputs $1$ and $-1$ both map to $1$, so $x\\mapsto x^2$ is not injective.', 'Trên $\\mathbb R$, hai đầu vào khác nhau $1$ và $-1$ đều được ánh xạ đến $1$, nên $x\\mapsto x^2$ không đơn ánh.']),
      bi(['For $x,y\\ge0$, equality $x^2=y^2$ gives $(x-y)(x+y)=0$.', 'Với $x,y\\ge0$, đẳng thức $x^2=y^2$ cho $(x-y)(x+y)=0$.']),
      bi(['If $x+y=0$, nonnegativity forces $x=y=0$; otherwise $x+y>0$ and the product equation forces $x=y$. Thus the restriction is injective.', 'Nếu $x+y=0$, tính không âm buộc $x=y=0$; nếu không thì $x+y>0$ và tích bằng không buộc $x=y$. Vậy hàm thu hẹp là đơn ánh.']),
      bi(['For each $z\\ge0$, $x=\\sqrt z$ belongs to the restricted domain and $x^2=z$, so the map is onto. Its inverse is $f^{-1}(z)=\\sqrt z$ for $z\\ge0$.', 'Với mỗi $z\\ge0$, $x=\\sqrt z$ thuộc miền đã thu hẹp và $x^2=z$, nên hàm toàn ánh. Hàm ngược là $f^{-1}(z)=\\sqrt z$ với $z\\ge0$.'])
    ],
    companions: [
      q(
        ['Show that $g(x)=x^3$ is a bijection from $\\mathbb R$ to $\\mathbb R$ and give its inverse.', 'Chứng minh $g(x)=x^3$ là song ánh từ $\\mathbb R$ lên $\\mathbb R$ và nêu hàm ngược.'],
        [
          ['If $x<y$, then $y^3-x^3=(y-x)(y^2+xy+x^2)>0$, so $g(x)<g(y)$; hence $g$ is injective.', 'Nếu $x<y$ thì $y^3-x^3=(y-x)(y^2+xy+x^2)>0$, nên $g(x)<g(y)$; do đó $g$ đơn ánh.'],
          ['For any $z\\in\\mathbb R$, the real cube root $x=\\sqrt[3]{z}$ satisfies $x^3=z$, proving surjectivity.', 'Với mọi $z\\in\\mathbb R$, căn bậc ba thực $x=\\sqrt[3]{z}$ thỏa $x^3=z$, chứng minh toàn ánh.'],
          ['Thus the inverse is $g^{-1}(z)=\\sqrt[3]{z}$ on all real inputs and outputs.', 'Vì vậy hàm ngược là $g^{-1}(z)=\\sqrt[3]{z}$ trên toàn bộ số thực.']
        ]
      ),
      q(
        ['Consider $h(x)=x^2$ as a map from $(-\\infty,0]$ to $[0,\\infty)$. Prove it is bijective and find $h^{-1}$.', 'Xét $h(x)=x^2$ là ánh xạ từ $(-\\infty,0]$ đến $[0,\\infty)$. Chứng minh song ánh và tìm $h^{-1}$.'],
        [
          ['If $x,y\\le0$ and $x^2=y^2$, then $(x-y)(x+y)=0$; the alternative $x+y=0$ also forces both to be zero, so $x=y$.', 'Nếu $x,y\\le0$ và $x^2=y^2$ thì $(x-y)(x+y)=0$; trường hợp $x+y=0$ cũng buộc cả hai bằng không, nên $x=y$.'],
          ['For every $z\\ge0$, the input $x=-\\sqrt z$ lies in $(-\\infty,0]$ and maps to $z$. Thus the map is onto.', 'Với mọi $z\\ge0$, đầu vào $x=-\\sqrt z$ thuộc $(-\\infty,0]$ và được ánh xạ đến $z$. Do đó hàm toàn ánh.'],
          ['The unique preimage formula gives $h^{-1}(z)=-\\sqrt z$ for $z\\ge0$.', 'Công thức tiền ảnh duy nhất cho $h^{-1}(z)=-\\sqrt z$ với $z\\ge0$.']
        ]
      ),
      q(
        ['Let $p(x)=x(1-x)$ with domain $(-\\infty,1/2]$ and codomain $(-\\infty,1/4]$. Prove bijectivity and find the inverse.', 'Cho $p(x)=x(1-x)$ với miền $(-\\infty,1/2]$ và đối miền $(-\\infty,1/4]$. Chứng minh song ánh và tìm hàm ngược.'],
        [
          ['For $x<y\\le1/2$, $p(y)-p(x)=(y-x)(1-x-y)>0$, because $1-x-y\\ge1-2y\\ge0$ and is positive when $x<y$. Hence $p$ is injective.', 'Với $x<y\\le1/2$, $p(y)-p(x)=(y-x)(1-x-y)>0$, vì $1-x-y\\ge1-2y\\ge0$ và thực tế dương khi $x<y$. Vậy $p$ đơn ánh.'],
          ['Solving $z=x(1-x)$ gives $x=(1\\pm\\sqrt{1-4z})/2$; for $z\\le1/4$, the minus branch lies at most $1/2$.', 'Giải $z=x(1-x)$ được $x=(1\\pm\\sqrt{1-4z})/2$; với $z\\le1/4$, nhánh dấu trừ không lớn hơn $1/2$.'],
          ['Every codomain value therefore has an allowed preimage, and injectivity makes it unique; $p^{-1}(z)=(1-\\sqrt{1-4z})/2$.', 'Vì vậy mọi giá trị trong đối miền có tiền ảnh hợp lệ, và tính đơn ánh khiến tiền ảnh duy nhất; $p^{-1}(z)=(1-\\sqrt{1-4z})/2$.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the collision, factorization, endpoint case, and range: nonnegative inputs make $x^2$ one-to-one and every nonnegative output has exactly one square-root preimage. The inverse is stated on the codomain $[0,\infty)$.`,
    sourceIds: ['f-book-proof']
  },
  'f-w002-e4': {
    application: bi([
      'A contrapositive proof is useful when denying the conclusion creates a simpler algebraic form than assuming the original hypothesis.',
      'Chứng minh phản đảo hữu ích khi phủ định kết luận tạo ra dạng đại số đơn giản hơn giả sử trực tiếp tiền đề.'
    ]),
    formula: bi([
      'For any statements $P,Q$, $P\\Rightarrow Q$ is equivalent to $\\neg Q\\Rightarrow\\neg P$. For integer parity, even means $n=2k$ and odd means $n=2k+1$ for some $k\\in\\mathbb Z$.',
      'Với mọi mệnh đề $P,Q$, $P\\Rightarrow Q$ tương đương $\\neg Q\\Rightarrow\\neg P$. Với tính chẵn lẻ của số nguyên, chẵn nghĩa là $n=2k$ và lẻ nghĩa là $n=2k+1$ với một $k\\in\\mathbb Z$.'
    ]),
    steps: [
      bi(['Name the original hypothesis $P$ and conclusion $Q$; write the contrapositive as $\\neg Q\\Rightarrow\\neg P$.', 'Đặt tên tiền đề gốc là $P$ và kết luận là $Q$; viết phản đảo $\\neg Q\\Rightarrow\\neg P$.']),
      bi(['Translate the negated conclusion into an explicit integer representation, such as $n=2k$ when $n$ is not odd.', 'Chuyển phủ định kết luận thành biểu diễn số nguyên cụ thể, chẳng hạn $n=2k$ khi $n$ không lẻ.']),
      bi(['Use algebra to establish the negated hypothesis, then invoke logical equivalence to conclude the original implication.', 'Dùng đại số để suy ra phủ định tiền đề, rồi dùng tương đương logic để kết luận kéo theo ban đầu.'])
    ],
    primarySolution: [
      bi(['To prove the implication by contrapositive, assume $n$ is even: write $n=2k$ for an integer $k$.', 'Để chứng minh bằng phản đảo, giả sử $n$ chẵn: viết $n=2k$ với số nguyên $k$.']),
      bi(['Then $n^2=(2k)^2=4k^2=2(2k^2)$, which is even because $2k^2$ is an integer.', 'Khi đó $n^2=(2k)^2=4k^2=2(2k^2)$, là số chẵn vì $2k^2$ nguyên.']),
      bi(['Thus even $n$ implies even $n^2$, which is the contrapositive of “odd $n^2$ implies odd $n$.”', 'Vậy $n$ chẵn kéo theo $n^2$ chẵn; đây là phản đảo của mệnh đề “$n^2$ lẻ kéo theo $n$ lẻ”.']),
      bi(['The contrapositive is equivalent to the original implication, proving the claim for every integer $n$.', 'Phản đảo tương đương với mệnh đề ban đầu, nên khẳng định đúng với mọi số nguyên $n$.'])
    ],
    companions: [
      q(
        ['Prove by contrapositive: if $3n+1$ is even for an integer $n$, then $n$ is odd.', 'Chứng minh bằng phản đảo: nếu $3n+1$ chẵn với số nguyên $n$ thì $n$ lẻ.'],
        [
          ['The contrapositive says that if $n$ is even, then $3n+1$ is odd.', 'Phản đảo phát biểu rằng nếu $n$ chẵn thì $3n+1$ lẻ.'],
          ['Write $n=2k$ with $k\\in\\mathbb Z$. Then $3n+1=6k+1=2(3k)+1$, which is odd.', 'Viết $n=2k$ với $k\\in\\mathbb Z$. Khi đó $3n+1=6k+1=2(3k)+1$, là số lẻ.'],
          ['This proves the contrapositive and hence the requested implication.', 'Điều này chứng minh phản đảo và do đó chứng minh kéo theo đã yêu cầu.']
        ]
      ),
      q(
        ['Prove that if $4$ divides $n^2$ for an integer $n$, then $n$ is even, using a contrapositive modulo $4$.', 'Chứng minh nếu $4$ chia hết $n^2$ với số nguyên $n$ thì $n$ chẵn, bằng phản đảo theo modulo $4$.'],
        [
          ['The contrapositive is: if $n$ is odd, then $4$ does not divide $n^2$. Write $n=2k+1$.', 'Phản đảo là: nếu $n$ lẻ thì $4$ không chia hết $n^2$. Viết $n=2k+1$.'],
          ['Then $n^2=4k^2+4k+1=4k(k+1)+1$, so $n^2$ has remainder $1$ modulo $4$.', 'Khi đó $n^2=4k^2+4k+1=4k(k+1)+1$, nên $n^2$ dư $1$ khi chia cho $4$.'],
          ['Thus an odd square is not divisible by $4$; the contrapositive proves the claim.', 'Vậy bình phương số lẻ không chia hết cho $4$; phản đảo chứng minh mệnh đề cần có.']
        ]
      ),
      q(
        ['Prove that if $3$ divides $n^2$ for an integer $n$, then $3$ divides $n$, by proving the contrapositive.', 'Chứng minh nếu $3$ chia hết $n^2$ với số nguyên $n$ thì $3$ chia hết $n$, bằng cách chứng minh phản đảo.'],
        [
          ['The contrapositive assumes $3\\nmid n$; the possible residues are $n\\equiv1$ or $n\\equiv2\\pmod3$.', 'Phản đảo giả sử $3\\nmid n$; các số dư có thể là $n\\equiv1$ hoặc $n\\equiv2\\pmod3$.'],
          ['Squaring either residue gives $n^2\\equiv1^2=1$ or $2^2=4\\equiv1\\pmod3$.', 'Bình phương mỗi số dư cho $n^2\\equiv1^2=1$ hoặc $2^2=4\\equiv1\\pmod3$.'],
          ['So $3\\nmid n^2$. This proves the contrapositive and therefore the original divisibility implication.', 'Vì thế $3\\nmid n^2$. Điều này chứng minh phản đảo và do đó chứng minh kéo theo chia hết ban đầu.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the parity representation and integer closure: $2k^2$ is integral, so the contrapositive is valid for every $n\in\mathbb Z$.`,
    sourceIds: ['f-book-proof']
  },
  'f-w002-e5': {
    application: bi([
      'A universal implication is disproved by one allowed input pair, while a carefully chosen domain can make a formerly false injectivity claim true.',
      'Một kéo theo phổ quát bị bác bỏ bởi một cặp đầu vào hợp lệ; chọn miền thích hợp có thể khiến khẳng định đơn ánh trước đó sai trở thành đúng.'
    ]),
    formula: bi([
      'For $x,y\\in\\mathbb R$, $x^2=y^2$ iff $(x-y)(x+y)=0$, so $x=y$ or $x=-y$. Restricting both inputs to $[0,\\infty)$ eliminates the second distinct-input possibility.',
      'Với $x,y\\in\\mathbb R$, $x^2=y^2$ khi và chỉ khi $(x-y)(x+y)=0$, nên $x=y$ hoặc $x=-y$. Giới hạn cả hai đầu vào trong $[0,\\infty)$ loại bỏ khả năng thứ hai với hai đầu vào khác nhau.'
    ]),
    steps: [
      bi(['Test a universal implication by finding inputs that satisfy its premise but violate its conclusion.', 'Kiểm tra kéo theo phổ quát bằng cách tìm đầu vào thỏa tiền đề nhưng làm kết luận sai.']),
      bi(['To repair injectivity, specify a domain that excludes the symmetry responsible for the collision.', 'Để khôi phục tính đơn ánh, hãy chỉ rõ miền loại bỏ đối xứng gây va chạm.']),
      bi(['Prove the repaired claim for arbitrary allowed inputs and handle any zero-factor boundary case.', 'Chứng minh mệnh đề đã sửa cho đầu vào hợp lệ tùy ý và xử lý trường hợp biên khi thừa số bằng không.'])
    ],
    primarySolution: [
      bi(['The unrestricted claim is false: $1^2=(-1)^2$ but $1\\ne-1$.', 'Mệnh đề không giới hạn là sai: $1^2=(-1)^2$ nhưng $1\\ne-1$.']),
      bi(['Restrict to $x,y\\ge0$. From $x^2=y^2$, factor to obtain $(x-y)(x+y)=0$.', 'Giới hạn $x,y\\ge0$. Từ $x^2=y^2$, phân tích thành $(x-y)(x+y)=0$.']),
      bi(['If $x+y=0$, nonnegativity gives $x=y=0$; if $x+y>0$, the product equation gives $x-y=0$.', 'Nếu $x+y=0$, tính không âm cho $x=y=0$; nếu $x+y>0$, phương trình tích cho $x-y=0$.']),
      bi(['Hence $x=y$ in either case, so the implication is valid on the restricted domain.', 'Vậy cả hai trường hợp đều cho $x=y$, nên kéo theo đúng trên miền đã giới hạn.'])
    ],
    companions: [
      q(
        ['Assess the claim “for all real $x,y$, $|x|=|y|$ implies $x=y$.” Give a counterexample and a domain restriction that makes it true.', 'Xét mệnh đề “với mọi $x,y$ thực, $|x|=|y|$ kéo theo $x=y$.” Hãy cho phản ví dụ và một giới hạn miền khiến mệnh đề đúng.'],
        [
          ['Take $x=2$ and $y=-2$: the absolute values agree but the inputs differ, so the unrestricted claim is false.', 'Lấy $x=2$ và $y=-2$: giá trị tuyệt đối bằng nhau nhưng đầu vào khác nhau, nên mệnh đề không giới hạn sai.'],
          ['Restrict both variables to $[0,\\infty)$. Then $|x|=x$ and $|y|=y$.', 'Giới hạn cả hai biến trong $[0,\\infty)$. Khi đó $|x|=x$ và $|y|=y$.'],
          ['The premise becomes $x=y$, proving the implication on that domain.', 'Tiền đề trở thành $x=y$, chứng minh kéo theo trên miền ấy.']
        ]
      ),
      q(
        ['For $g(x)=x(1-x)$ on $\\mathbb R$, find distinct inputs with equal outputs. Then show $g$ is bijective from $(-\\infty,1/2]$ to $(-\\infty,1/4]$ and give its inverse.', 'Với $g(x)=x(1-x)$ trên $\\mathbb R$, tìm hai đầu vào khác nhau có cùng đầu ra. Sau đó chứng minh $g$ là song ánh từ $(-\\infty,1/2]$ đến $(-\\infty,1/4]$ và nêu hàm ngược.'],
        [
          ['The inputs $0$ and $1$ both give $g=0$, so $g$ is not injective on all real numbers.', 'Hai đầu vào $0$ và $1$ đều cho $g=0$, nên $g$ không đơn ánh trên toàn bộ số thực.'],
          ['For $x<y\\le1/2$, $g(y)-g(x)=(y-x)(1-x-y)>0$; thus $g$ is strictly increasing on the restricted domain.', 'Với $x<y\\le1/2$, $g(y)-g(x)=(y-x)(1-x-y)>0$; do đó $g$ tăng nghiêm ngặt trên miền đã thu hẹp.'],
          ['Solving $z=x(1-x)$ gives $x=(1\\pm\\sqrt{1-4z})/2$. The minus branch is at most $1/2$ for every $z\\le1/4$, so it is an allowed preimage.', 'Giải $z=x(1-x)$ được $x=(1\\pm\\sqrt{1-4z})/2$. Nhánh dấu trừ không lớn hơn $1/2$ với mọi $z\\le1/4$, nên là tiền ảnh hợp lệ.'],
          ['Strict increase gives uniqueness; hence the map is onto the stated codomain and $g^{-1}(z)=(1-\\sqrt{1-4z})/2$.', 'Tính tăng nghiêm ngặt cho tính duy nhất; vì thế hàm toàn ánh lên đối miền đã nêu và $g^{-1}(z)=(1-\\sqrt{1-4z})/2$.']
        ]
      ),
      q(
        ['Prove that $h(x)=1/x$ is injective on $\\mathbb R\\setminus\\{0\\}$ and determine its image.', 'Chứng minh $h(x)=1/x$ đơn ánh trên $\\mathbb R\\setminus\\{0\\}$ và xác định ảnh của hàm.'],
        [
          ['For nonzero $x,y$, if $1/x=1/y$, multiplying by the nonzero product $xy$ gives $y=x$.', 'Với $x,y$ khác không, nếu $1/x=1/y$ thì nhân với tích khác không $xy$ cho $y=x$.'],
          ['Every output $1/x$ is nonzero, so the image is contained in $\\mathbb R\\setminus\\{0\\}$.', 'Mọi đầu ra $1/x$ đều khác không, nên ảnh nằm trong $\\mathbb R\\setminus\\{0\\}$.'],
          ['Conversely, for any nonzero $z$, the allowed input $x=1/z$ satisfies $h(x)=z$; thus the image is exactly $\\mathbb R\\setminus\\{0\\}$.', 'Ngược lại, với mọi $z$ khác không, đầu vào hợp lệ $x=1/z$ thỏa $h(x)=z$; vậy ảnh đúng bằng $\\mathbb R\\setminus\\{0\\}$.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the counterexample and the repaired factor argument, including the zero case. The domain restriction is essential because unrestricted squaring identifies opposite inputs.`,
    sourceIds: ['f-book-proof']
  },
  'f-w003-e1': {
    application: bi([
      'The equality case of Cauchy–Schwarz identifies exactly when a norm bound is sharp, which is useful when optimizing a linear score.',
      'Trường hợp đẳng thức của Cauchy–Schwarz xác định chính xác khi nào cận chuẩn đạt chặt, hữu ích khi tối ưu một điểm tuyến tính.'
    ]),
    formula: bi([
      'For $x,y\\in\\mathbb R^n$, $|x^Ty|\\le\\|x\\|_2\\|y\\|_2$; equality holds exactly when $x,y$ are linearly dependent, including the case where one vector is zero.',
      'Với $x,y\\in\\mathbb R^n$, $|x^Ty|\\le\\|x\\|_2\\|y\\|_2$; đẳng thức xảy ra đúng khi $x,y$ phụ thuộc tuyến tính, kể cả trường hợp một vector bằng không.'
    ]),
    steps: [
      bi(['Use the equality criterion: one vector must be a scalar multiple of the other (or one is zero).', 'Dùng tiêu chuẩn đẳng thức: một vector phải là bội vô hướng của vector kia (hoặc một vector bằng không).']),
      bi(['Match coordinates to determine the scalar and any unknown parameter.', 'So sánh các tọa độ để tìm hệ số vô hướng và tham số chưa biết.']),
      bi(['Check the candidate by substitution; proportionality gives equality in the absolute-value inequality.', 'Thay kết quả để kiểm tra; tính tỷ lệ cho đẳng thức trong bất đẳng thức trị tuyệt đối.'])
    ],
    primarySolution: [
      bi(['Equality in Cauchy–Schwarz requires $(c,1)=t(1,2)$ for some $t\\in\\mathbb R$, because neither vector is zero.', 'Đẳng thức Cauchy–Schwarz đòi hỏi $(c,1)=t(1,2)$ với một $t\\in\\mathbb R$, vì cả hai vector đều khác không.']),
      bi(['The second coordinate gives $1=2t$, hence $t=1/2$.', 'Tọa độ thứ hai cho $1=2t$, nên $t=1/2$.']),
      bi(['The first coordinate then gives $c=t=1/2$.', 'Tọa độ thứ nhất suy ra $c=t=1/2$.']),
      bi(['Conversely, at $c=1/2$ the vectors are proportional, so equality does hold; no other $c$ satisfies the coordinate equations.', 'Ngược lại, khi $c=1/2$ hai vector tỷ lệ nên thật sự có đẳng thức; không có $c$ nào khác thỏa các phương trình tọa độ.'])
    ],
    companions: [
      q(
        ['Find all $c\\in\\mathbb R$ for which equality holds in $|(2,c)^T(1,3)|\\le\\|(2,c)\\|_2\\|(1,3)\\|_2$, and verify the result.', 'Tìm mọi $c\\in\\mathbb R$ để có đẳng thức trong $|(2,c)^T(1,3)|\\le\\|(2,c)\\|_2\\|(1,3)\\|_2$, rồi kiểm tra kết quả.'],
        [
          ['Both vectors are nonzero, so equality requires $(2,c)=\\lambda(1,3)$.', 'Cả hai vector đều khác không, nên đẳng thức đòi hỏi $(2,c)=\\lambda(1,3)$.'],
          ['The first coordinate forces $\\lambda=2$, and the second then forces $c=6$.', 'Tọa độ thứ nhất buộc $\\lambda=2$, rồi tọa độ thứ hai buộc $c=6$.'],
          ['At $c=6$, the dot product is $20$ and both sides equal $20$, confirming equality.', 'Khi $c=6$, tích vô hướng bằng $20$ và hai vế đều bằng $20$, xác nhận đẳng thức.']
        ]
      ),
      q(
        ['Let $u=0\\in\\mathbb R^3$. For which $v\\in\\mathbb R^3$ is $|u^Tv|=\\|u\\|_2\\|v\\|_2$? Explain the zero-vector case.', 'Cho $u=0\\in\\mathbb R^3$. Với những $v\\in\\mathbb R^3$ nào thì $|u^Tv|=\\|u\\|_2\\|v\\|_2$? Giải thích trường hợp vector không.'],
        [
          ['For every $v$, $u^Tv=0$ because $u=0$, so the left side is zero.', 'Với mọi $v$, $u^Tv=0$ vì $u=0$, nên vế trái bằng không.'],
          ['Also $\\|u\\|_2\\|v\\|_2=0\\cdot\\|v\\|_2=0$, so the right side is zero too.', 'Đồng thời $\\|u\\|_2\\|v\\|_2=0\\cdot\\|v\\|_2=0$, nên vế phải cũng bằng không.'],
          ['Thus equality holds for every $v$, including vectors not proportional to a nonzero $u$; the equality criterion explicitly includes a zero vector.', 'Vậy đẳng thức đúng với mọi $v$, kể cả vector không tỷ lệ với một $u$ khác không; tiêu chuẩn đẳng thức có nêu rõ trường hợp vector không.']
        ]
      ),
      q(
        ['Can equality hold in $|(1,-1,2)^T(t,2,0)|\\le\\|(1,-1,2)|_2\\|(t,2,0)\\|_2$ for any real $t$? Justify your answer from the equality condition.', 'Có thể xảy ra đẳng thức trong $|(1,-1,2)^T(t,2,0)|\\le\\|(1,-1,2)|_2\\|(t,2,0)\\|_2$ với số thực $t$ nào không? Hãy giải thích bằng điều kiện đẳng thức.'],
        [
          ['The first vector is nonzero. The second is also nonzero for every $t$ because its second coordinate is $2$.', 'Vector thứ nhất khác không. Vector thứ hai cũng khác không với mọi $t$ vì tọa độ thứ hai bằng $2$.'],
          ['Equality would require $(t,2,0)=\\lambda(1,-1,2)$ for some scalar $\\lambda$.', 'Đẳng thức đòi hỏi $(t,2,0)=\\lambda(1,-1,2)$ với một vô hướng $\\lambda$.'],
          ['The third coordinate would give $0=2\\lambda$, hence $\\lambda=0$, but the second coordinate would then say $2=0$, impossible; no $t$ gives equality.', 'Tọa độ thứ ba cho $0=2\\lambda$, nên $\\lambda=0$, nhưng tọa độ thứ hai khi đó thành $2=0$, vô lý; không có $t$ nào cho đẳng thức.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the proportionality equations: $1=2t$ and $c=t$ give the unique value $c=1/2$. Both vectors are nonzero, so no zero-vector exception applies.`,
    sourceIds: ['f-1806sc']
  },
  'f-w003-e2': {
    application: bi([
      'A norm constraint on inputs yields a sharp worst-case bound for any linear measurement $a^Tx$.',
      'Một ràng buộc chuẩn trên đầu vào cho cận xấu nhất chặt cho mọi phép đo tuyến tính $a^Tx$.'
    ]),
    formula: bi([
      'For $a,x\\in\\mathbb R^n$ and $R\\ge0$, $|a^Tx|\\le\\|a\\|_2\\|x\\|_2\\le R\\|a\\|_2$ whenever $\\|x\\|_2\\le R$. If $a\\ne0$ and $R>0$, equality is attained at $x=\\pm R a/\\|a\\|_2$.',
      'Với $a,x\\in\\mathbb R^n$ và $R\\ge0$, $|a^Tx|\\le\\|a\\|_2\\|x\\|_2\\le R\\|a\\|_2$ khi $\\|x\\|_2\\le R$. Nếu $a\\ne0$ và $R>0$, đẳng thức đạt tại $x=\\pm R a/\\|a\\|_2$.'
    ]),
    steps: [
      bi(['View $a^Tx$ as an inner product and apply Cauchy–Schwarz.', 'Xem $a^Tx$ là tích vô hướng và áp dụng Cauchy–Schwarz.']),
      bi(['Use the feasible constraint to replace $\\|x\\|_2$ by its upper bound $R$.', 'Dùng ràng buộc khả thi để thay $\\|x\\|_2$ bằng cận trên $R$.']),
      bi(['For sharpness, choose a feasible vector parallel or antiparallel to $a$ and evaluate the score.', 'Để chứng minh cận chặt, chọn vector khả thi cùng hoặc ngược hướng với $a$ rồi tính giá trị.'])
    ],
    primarySolution: [
      bi(['Cauchy–Schwarz gives $|a^Tx|\\le\\|a\\|_2\\|x\\|_2$.', 'Cauchy–Schwarz cho $|a^Tx|\\le\\|a\\|_2\\|x\\|_2$.']),
      bi(['Since $\\|x\\|_2\\le3$, the upper bound is $|a^Tx|\\le3\\|a\\|_2$.', 'Vì $\\|x\\|_2\\le3$, ta có cận $|a^Tx|\\le3\\|a\\|_2$.']),
      bi(['When $a\\ne0$, choose $x=3a/\\|a\\|_2$; then $\\|x\\|_2=3$, so it is feasible.', 'Khi $a\\ne0$, chọn $x=3a/\\|a\\|_2$; khi đó $\\|x\\|_2=3$, nên vector khả thi.']),
      bi(['Its score is $a^Tx=3a^Ta/\\|a\\|_2=3\\|a\\|_2$, proving the bound is sharp.', 'Giá trị là $a^Tx=3a^Ta/\\|a\\|_2=3\\|a\\|_2$, chứng minh cận là chặt.'])
    ],
    companions: [
      q(
        ['Let $a=(1,-2,2)$ and $\\|x\\|_2\\le2$. Find the sharp upper bound on $|a^Tx|$ and give an attaining vector.', 'Cho $a=(1,-2,2)$ và $\\|x\\|_2\\le2$. Tìm cận trên chặt của $|a^Tx|$ và nêu vector đạt cận.'],
        [
          ['Compute $\\|a\\|_2=\\sqrt{1+4+4}=3$.', 'Tính $\\|a\\|_2=\\sqrt{1+4+4}=3$.'],
          ['Cauchy–Schwarz gives $|a^Tx|\\le\\|a\\|_2\\|x\\|_2\\le3\\cdot2=6$.', 'Cauchy–Schwarz cho $|a^Tx|\\le\\|a\\|_2\\|x\\|_2\\le3\\cdot2=6$.'],
          ['Choose $x=2a/\\|a\\|_2=(2/3,-4/3,4/3)$; it has norm $2$ and $a^Tx=6$, so the bound is attained.', 'Chọn $x=2a/\\|a\\|_2=(2/3,-4/3,4/3)$; vector có chuẩn $2$ và $a^Tx=6$, nên cận đạt được.']
        ]
      ),
      q(
        ['For $a\\in\\mathbb R^n\\setminus\\{0\\}$ and $R>0$, determine $\\max_{\\|x\\|_2\\le R}a^Tx$ and prove which input attains it.', 'Với $a\\in\\mathbb R^n\\setminus\\{0\\}$ và $R>0$, hãy tìm $\\max_{\\|x\\|_2\\le R}a^Tx$ và chứng minh đầu vào nào đạt cực đại.'],
        [
          ['Cauchy–Schwarz yields $a^Tx\\le|a^Tx|\\le\\|a\\|_2\\|x\\|_2\\le R\\|a\\|_2$.', 'Cauchy–Schwarz cho $a^Tx\\le|a^Tx|\\le\\|a\\|_2\\|x\\|_2\\le R\\|a\\|_2$.'],
          ['Set $x=Ra/\\|a\\|_2$. Its norm is $R$, and its inner product with $a$ equals $R\\|a\\|_2$.', 'Đặt $x=Ra/\\|a\\|_2$. Chuẩn của nó là $R$, và tích vô hướng với $a$ bằng $R\\|a\\|_2$.'],
          ['This attains the upper bound, so the maximum is $R\\|a\\|_2$; antiparallel inputs minimize rather than maximize the signed score.', 'Vector này đạt cận trên, nên cực đại là $R\\|a\\|_2$; đầu vào ngược hướng cho cực tiểu của điểm có dấu.']
        ]
      ),
      q(
        ['What is $\\max_{\\|x\\|_2\\le R}|a^Tx|$ when $a=0$? Explain why the formula $x=Ra/\\|a\\|_2$ cannot be used.', 'Giá trị $\\max_{\\|x\\|_2\\le R}|a^Tx|$ bằng bao nhiêu khi $a=0$? Giải thích vì sao không dùng được công thức $x=Ra/\\|a\\|_2$.'],
        [
          ['For every feasible $x$, $a^Tx=0^Tx=0$, so the maximum absolute score is $0$.', 'Với mọi $x$ khả thi, $a^Tx=0^Tx=0$, nên giá trị tuyệt đối lớn nhất bằng $0$.'],
          ['The bound $R\\|a\\|_2$ also equals zero, and every feasible input attains it.', 'Cận $R\\|a\\|_2$ cũng bằng không, và mọi đầu vào khả thi đều đạt cận.'],
          ['The proposed direction divides by $\\|a\\|_2=0$, so it is undefined; the nonzero assumption is needed only for that attaining-vector formula.', 'Hướng đề xuất chia cho $\\|a\\|_2=0$ nên không xác định; giả thiết khác không chỉ cần cho công thức vector đạt cận ấy.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the norm bound and attaining vector: when $a\ne0$, its norm is exactly $3$ and its inner product is $3\|a\|_2$. The zero-vector case is excluded only from the direction formula.`,
    sourceIds: ['f-1806sc']
  },
  'f-w003-e3': {
    application: bi([
      'The null space records parameter changes invisible to a linear model; it determines which linear contrasts can be recovered from the output.',
      'Không gian-kernel ghi lại các thay đổi tham số mà mô hình tuyến tính không nhìn thấy; nó quyết định tổ hợp tuyến tính nào có thể suy ra từ đầu ra.'
    ]),
    formula: bi([
      'For $A\\in\\mathbb R^{m\\times n}$, $N(A)=\\{h:Ah=0\\}$ and $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$. A contrast $c^T\\beta$ is identifiable from $A\\beta$ exactly when $c^Th=0$ for every $h\\in N(A)$.',
      'Với $A\\in\\mathbb R^{m\\times n}$, $N(A)=\\{h:Ah=0\\}$ và $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$. Tổ hợp $c^T\\beta$ nhận diện được từ $A\\beta$ đúng khi $c^Th=0$ với mọi $h\\in N(A)$. '
    ]),
    steps: [
      bi(['Solve $Ah=0$ to find the null-space directions and determine their dimension.', 'Giải $Ah=0$ để tìm các hướng trong kernel và xác định số chiều của chúng.']),
      bi(['Use rank–nullity with the number of columns to check the rank and nullity sum.', 'Dùng định lý hạng–kernel với số cột để kiểm tra tổng hạng và số chiều kernel.']),
      bi(['A contrast is identifiable precisely if adding any null vector to $\\beta$ leaves its value unchanged.', 'Một tổ hợp nhận diện được đúng khi cộng bất kỳ vector kernel nào vào $\\beta$ cũng không đổi giá trị của nó.'])
    ],
    primarySolution: [
      bi(['The equations $Ah=0$ reduce to $h_1+2h_2=0$, so $N(A)=\\operatorname{span}\\{(-2,1)\\}$.', 'Hệ $Ah=0$ rút về $h_1+2h_2=0$, nên $N(A)=\\operatorname{span}\\{(-2,1)\\}$.']),
      bi(['The two rows (and the two columns) span one direction, so $\\operatorname{rank}(A)=1$; rank–nullity gives nullity $2-1=1$.', 'Hai hàng (và hai cột) sinh một hướng, nên $\\operatorname{rank}(A)=1$; hạng–kernel cho số chiều kernel $2-1=1$.']),
      bi(['For any compatible coefficients, differences lie in $N(A)$; therefore a contrast $c^T\\beta$ is identifiable iff $c^T(-2,1)=0$.', 'Với mọi cặp hệ số tương thích, hiệu của chúng nằm trong $N(A)$; vì vậy $c^T\\beta$ nhận diện được khi và chỉ khi $c^T(-2,1)=0$.']),
      bi(['The output reveals $\\beta_1+2\\beta_2$, while neither coefficient is separately identifiable because the null direction changes both without changing $A\\beta$.', 'Đầu ra cho biết $\\beta_1+2\\beta_2$, còn từng hệ số riêng không nhận diện được vì hướng kernel làm đổi cả hai mà vẫn giữ nguyên $A\\beta$.'])
    ],
    companions: [
      q(
        ['For $B=\\begin{bmatrix}1&0&1\\\\0&1&1\\end{bmatrix}$, find $N(B)$ and rank. Decide whether $c^T\\beta$ is identifiable for $c=(1,-1,0)$ and for $d=(1,0,0)$.', 'Với $B=\\begin{bmatrix}1&0&1\\\\0&1&1\\end{bmatrix}$, hãy tìm $N(B)$ và hạng. Xác định $c^T\\beta$ có nhận diện được với $c=(1,-1,0)$ và với $d=(1,0,0)$ không.'],
        [
          ['Solving $Bh=0$ gives $h_1=-h_3$ and $h_2=-h_3$, hence $N(B)=\\operatorname{span}\\{(-1,-1,1)\\}$.', 'Giải $Bh=0$ được $h_1=-h_3$ và $h_2=-h_3$, nên $N(B)=\\operatorname{span}\\{(-1,-1,1)\\}$.'],
          ['The two rows are independent, so $\\operatorname{rank}(B)=2$; rank–nullity gives nullity $3-2=1$, agreeing with the kernel basis.', 'Hai hàng độc lập nên $\\operatorname{rank}(B)=2$; hạng–kernel cho số chiều $3-2=1$, khớp với cơ sở kernel.'],
          ['Compute $c^T(-1,-1,1)=0$, so $c^T\\beta$ is identifiable; $d^T(-1,-1,1)=-1$, so $d^T\\beta$ is not.', 'Tính $c^T(-1,-1,1)=0$, nên $c^T\\beta$ nhận diện được; $d^T(-1,-1,1)=-1$, nên $d^T\\beta$ không nhận diện được.']
        ]
      ),
      q(
        ['Suppose compatible coefficient vectors are $\\beta=(2,1)$ and $\\beta^{\\prime}=(0,2)$ for the same observed output. Which of $\\beta_1+2\\beta_2$ and $\\beta_1$ is identifiable from that output? Explain using their difference.', 'Giả sử hai vector hệ số tương thích là $\\beta=(2,1)$ và $\\beta^{\\prime}=(0,2)$ cho cùng một đầu ra quan sát. Đại lượng nào trong $\\beta_1+2\\beta_2$ và $\\beta_1$ nhận diện được từ đầu ra ấy? Hãy giải thích bằng hiệu của chúng.'],
        [
          ['Their difference is $\\beta^{\\prime}-\\beta=(-2,1)$, a direction along which the output does not change.', 'Hiệu của chúng là $\\beta^{\\prime}-\\beta=(-2,1)$, một hướng không làm đầu ra thay đổi.'],
          ['The first contrast has the same value at both vectors: $2+2(1)=4$ and $0+2(2)=4$.', 'Tổ hợp thứ nhất có cùng giá trị ở cả hai vector: $2+2(1)=4$ và $0+2(2)=4$.'],
          ['The coefficient $\\beta_1$ changes from $2$ to $0$, so it is not identifiable; the contrast $\\beta_1+2\\beta_2$ is constant along this null direction.', 'Hệ số $\\beta_1$ đổi từ $2$ thành $0$ nên không nhận diện được; tổ hợp $\\beta_1+2\\beta_2$ không đổi theo hướng kernel này.']
        ]
      ),
      q(
        ['Let $C=\\begin{bmatrix}1&1&1\\\\2&2&2\\end{bmatrix}$. Find its rank and null space, then characterize all identifiable contrasts $c^T\\beta$.', 'Cho $C=\\begin{bmatrix}1&1&1\\\\2&2&2\\end{bmatrix}$. Tìm hạng và kernel, rồi mô tả mọi tổ hợp nhận diện được $c^T\\beta$.'],
        [
          ['The second row is twice the first nonzero row, so $\\operatorname{rank}(C)=1$.', 'Hàng thứ hai gấp đôi hàng thứ nhất khác không, nên $\\operatorname{rank}(C)=1$.'],
          ['The kernel equation is $h_1+h_2+h_3=0$, a plane of dimension $2$, matching $3-1$ by rank–nullity.', 'Phương trình kernel là $h_1+h_2+h_3=0$, một mặt phẳng có số chiều $2$, khớp với $3-1$ theo hạng–kernel.'],
          ['The orthogonal complement of that plane is $\\operatorname{span}\\{(1,1,1)\\}$; thus exactly contrasts $c=t(1,1,1)$ are identifiable.', 'Không gian trực giao của mặt phẳng là $\\operatorname{span}\\{(1,1,1)\\}$; do đó đúng các tổ hợp $c=t(1,1,1)$ nhận diện được.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the row dependence, null-space basis, and rank–nullity identity: rank $1$ plus nullity $1$ equals the two-column domain dimension. The identifiable combination is exactly orthogonal to $(-2,1)$.`,
    sourceIds: ['f-1806sc']
  },
  'f-w003-e4': {
    application: bi([
      'Cauchy–Schwarz is an upper bound on an inner product; orthogonality is the separate condition that the inner product equals zero.',
      'Cauchy–Schwarz là cận trên cho tích vô hướng; trực giao là điều kiện riêng rằng tích vô hướng bằng không.'
    ]),
    formula: bi([
      'For vectors $x,y$, orthogonality means $x^Ty=0$. Equality in $|x^Ty|\\le\\|x\\|_2\\|y\\|_2$ means linear dependence (including a zero vector), not orthogonality.',
      'Với các vector $x,y$, trực giao nghĩa là $x^Ty=0$. Đẳng thức trong $|x^Ty|\\le\\|x\\|_2\\|y\\|_2$ nghĩa là phụ thuộc tuyến tính (kể cả vector không), chứ không phải trực giao.'
    ]),
    steps: [
      bi(['Check orthogonality by computing the inner product and asking whether it is zero.', 'Kiểm tra trực giao bằng cách tính tích vô hướng và xem nó có bằng không không.']),
      bi(['Check equality in Cauchy–Schwarz by testing whether the vectors are scalar multiples.', 'Kiểm tra đẳng thức Cauchy–Schwarz bằng cách xem hai vector có là bội vô hướng của nhau không.']),
      bi(['Keep the tests distinct: an inequality may hold strictly or with equality without implying a zero inner product.', 'Phân biệt hai phép kiểm tra: bất đẳng thức có thể nghiêm hoặc có đẳng thức mà không suy ra tích vô hướng bằng không.'])
    ],
    primarySolution: [
      bi(['No: choose $x=y=(1,0)$. Then $|x^Ty|=1$ and $\\|x\\|_2\\|y\\|_2=1$, so the inequality holds with equality.', 'Không: chọn $x=y=(1,0)$. Khi đó $|x^Ty|=1$ và $\\|x\\|_2\\|y\\|_2=1$, nên bất đẳng thức đạt đẳng thức.']),
      bi(['But $x^Ty=1\\ne0$, so these vectors are not orthogonal.', 'Nhưng $x^Ty=1\\ne0$, nên hai vector không trực giao.']),
      bi(['The correct orthogonality test is $x^Ty=0$; equality in Cauchy–Schwarz instead characterizes linear dependence, including a zero vector.', 'Tiêu chuẩn trực giao đúng là $x^Ty=0$; còn đẳng thức Cauchy–Schwarz đặc trưng cho phụ thuộc tuyến tính, kể cả vector không.'])
    ],
    companions: [
      q(
        ['For $x=(2,0)$ and $y=(1,3)$, compute the dot product and norm product. Is the pair orthogonal, and is Cauchy–Schwarz strict?', 'Với $x=(2,0)$ và $y=(1,3)$, hãy tính tích vô hướng và tích hai chuẩn. Hai vector có trực giao không, và Cauchy–Schwarz có nghiêm không?'],
        [
          ['The inner product is $x^Ty=2$, which is nonzero, so the vectors are not orthogonal.', 'Tích vô hướng là $x^Ty=2$, khác không, nên hai vector không trực giao.'],
          ['Their norm product is $\\sqrt4\\sqrt{10}=2\\sqrt{10}$, which is greater than $|x^Ty|=2$.', 'Tích hai chuẩn là $\\sqrt4\\sqrt{10}=2\\sqrt{10}$, lớn hơn $|x^Ty|=2$.'],
          ['Thus the inequality is strict here, yet orthogonality still fails; strictness does not imply zero inner product.', 'Vậy bất đẳng thức nghiêm nhưng hai vector vẫn không trực giao; tính nghiêm không kéo theo tích vô hướng bằng không.']
        ]
      ),
      q(
        ['Show that $u=(1,-1)$ and $v=(1,1)$ are orthogonal, and compare both sides of Cauchy–Schwarz.', 'Chứng minh $u=(1,-1)$ và $v=(1,1)$ trực giao, rồi so sánh hai vế Cauchy–Schwarz.'],
        [
          ['Compute $u^Tv=1\\cdot1+(-1)\\cdot1=0$, so the vectors are orthogonal.', 'Tính $u^Tv=1\\cdot1+(-1)\\cdot1=0$, nên hai vector trực giao.'],
          ['Each norm is $\\sqrt2$, so the norm product is $2$.', 'Mỗi chuẩn bằng $\\sqrt2$, nên tích hai chuẩn bằng $2$.'],
          ['Cauchy–Schwarz reads $0<2$ here; orthogonality gives zero inner product, not equality in the norm bound.', 'Cauchy–Schwarz ở đây là $0<2$; trực giao cho tích vô hướng bằng không, chứ không cho đẳng thức với tích chuẩn.']
        ]
      ),
      q(
        ['Find a pair of nonzero vectors in $\\mathbb R^2$ for which Cauchy–Schwarz is an equality but the vectors are not orthogonal; verify both claims.', 'Tìm hai vector khác không trong $\\mathbb R^2$ để Cauchy–Schwarz đạt đẳng thức nhưng hai vector không trực giao; hãy kiểm tra cả hai điều.'],
        [
          ['Take $u=(2,1)$ and $v=-3u=(-6,-3)$, so the vectors are linearly dependent and nonzero.', 'Lấy $u=(2,1)$ và $v=-3u=(-6,-3)$; hai vector phụ thuộc tuyến tính và đều khác không.'],
          ['Their inner product is $u^Tv=-15$, so $|u^Tv|=15$.', 'Tích vô hướng là $u^Tv=-15$, nên $|u^Tv|=15$.'],
          ['Their norm product is $\\sqrt5\\cdot3\\sqrt5=15$, giving equality, while the nonzero inner product shows they are not orthogonal.', 'Tích hai chuẩn là $\\sqrt5\\cdot3\\sqrt5=15$, cho đẳng thức; tích vô hướng khác không cho thấy chúng không trực giao.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the counterexample: the inner product and norm product both equal $1$, while the inner product is nonzero. Equality therefore does not certify orthogonality.`,
    sourceIds: ['f-1806sc']
  },
  'f-w003-e5': {
    application: bi([
      'The triangle inequality bounds the length of a combined displacement by the total length of its component displacements.',
      'Bất đẳng thức tam giác chặn độ dài của tổng độ dời bằng tổng độ dài các độ dời thành phần.'
    ]),
    formula: bi([
      'For $x,y\\in\\mathbb R^n$, $\\|x+y\\|_2^2=\\|x\\|_2^2+2x^Ty+\\|y\\|_2^2\\le(\\|x\\|_2+\\|y\\|_2)^2$ by Cauchy–Schwarz; nonnegative square roots give $\\|x+y\\|_2\\le\\|x\\|_2+\\|y\\|_2$.',
      'Với $x,y\\in\\mathbb R^n$, $\\|x+y\\|_2^2=\\|x\\|_2^2+2x^Ty+\\|y\\|_2^2\\le(\\|x\\|_2+\\|y\\|_2)^2$ theo Cauchy–Schwarz; lấy căn không âm cho $\\|x+y\\|_2\\le\\|x\\|_2+\\|y\\|_2$.'
    ]),
    steps: [
      bi(['Expand $\\|x+y\\|_2^2$ using the inner product identity.', 'Khai triển $\\|x+y\\|_2^2$ bằng đẳng thức tích vô hướng.']),
      bi(['Bound the cross term by $x^Ty\\le|x^Ty|\\le\\|x\\|_2\\|y\\|_2$ using Cauchy–Schwarz.', 'Chặn số hạng chéo bởi $x^Ty\\le|x^Ty|\\le\\|x\\|_2\\|y\\|_2$ theo Cauchy–Schwarz.']),
      bi(['Factor the resulting right side as a squared sum of norms, then take square roots because both sides are nonnegative.', 'Phân tích vế phải thu được thành bình phương tổng hai chuẩn, rồi lấy căn vì hai vế không âm.'])
    ],
    primarySolution: [
      bi(['Expand: $\\|x+y\\|_2^2=\\|x\\|_2^2+2x^Ty+\\|y\\|_2^2$.', 'Khai triển: $\\|x+y\\|_2^2=\\|x\\|_2^2+2x^Ty+\\|y\\|_2^2$.']),
      bi(['Cauchy–Schwarz gives $x^Ty\\le|x^Ty|\\le\\|x\\|_2\\|y\\|_2$.', 'Cauchy–Schwarz cho $x^Ty\\le|x^Ty|\\le\\|x\\|_2\\|y\\|_2$.']),
      bi(['Substitute to obtain $\\|x+y\\|_2^2\\le\\|x\\|_2^2+2\\|x\\|_2\\|y\\|_2+\\|y\\|_2^2=(\\|x\\|_2+\\|y\\|_2)^2$.', 'Thay vào được $\\|x+y\\|_2^2\\le\\|x\\|_2^2+2\\|x\\|_2\\|y\\|_2+\\|y\\|_2^2=(\\|x\\|_2+\\|y\\|_2)^2$.']),
      bi(['Both sides before squaring are nonnegative, so taking square roots proves $\\|x+y\\|_2\\le\\|x\\|_2+\\|y\\|_2$.', 'Hai vế trước khi bình phương đều không âm, nên lấy căn chứng minh $\\|x+y\\|_2\\le\\|x\\|_2+\\|y\\|_2$.'])
    ],
    companions: [
      q(
        ['For $x=(1,2)$ and $y=(2,-1)$, verify the triangle inequality and determine whether equality holds.', 'Với $x=(1,2)$ và $y=(2,-1)$, hãy kiểm tra bất đẳng thức tam giác và xác định có đẳng thức không.'],
        [
          ['The sum is $x+y=(3,1)$, so $\\|x+y\\|_2=\\sqrt{10}$.', 'Tổng là $x+y=(3,1)$, nên $\\|x+y\\|_2=\\sqrt{10}$.'],
          ['Each input has norm $\\sqrt5$, giving $\\|x\\|_2+\\|y\\|_2=2\\sqrt5=\\sqrt{20}$.', 'Mỗi vector có chuẩn $\\sqrt5$, nên $\\|x\\|_2+\\|y\\|_2=2\\sqrt5=\\sqrt{20}$.'],
          ['Since $10<20$, we have $\\sqrt{10}<2\\sqrt5$; the inequality is strict for this non-collinear pair.', 'Vì $10<20$, ta có $\\sqrt{10}<2\\sqrt5$; bất đẳng thức nghiêm với cặp không cùng phương này.']
        ]
      ),
      q(
        ['Characterize when equality holds in $\\|x+y\\|_2\\le\\|x\\|_2+\\|y\\|_2$. Include zero-vector cases.', 'Mô tả khi nào có đẳng thức trong $\\|x+y\\|_2\\le\\|x\\|_2+\\|y\\|_2$. Hãy bao gồm trường hợp vector không.'],
        [
          ['If either vector is zero, both sides equal the norm of the other vector.', 'Nếu một vector bằng không, hai vế đều bằng chuẩn của vector còn lại.'],
          ['If both are nonzero, equality in the squared proof requires $x^Ty=\\|x\\|_2\\|y\\|_2$.', 'Nếu cả hai khác không, đẳng thức trong chứng minh bình phương đòi hỏi $x^Ty=\\|x\\|_2\\|y\\|_2$.'],
          ['Cauchy–Schwarz equality makes them linearly dependent, and the positive inner product makes the scalar nonnegative; thus $y=t x$ for some $t\\ge0$ (or symmetrically $x=t y$).', 'Đẳng thức Cauchy–Schwarz khiến chúng phụ thuộc tuyến tính, còn tích vô hướng dương khiến hệ số không âm; do đó $y=t x$ với $t\\ge0$ (hoặc tương tự $x=t y$).']
        ]
      ),
      q(
        ['Derive the reverse triangle inequality $|\\|x\\|_2-\\|y\\|_2|\\le\\|x-y\\|_2$ from the triangle inequality.', 'Suy ra bất đẳng thức tam giác ngược $|\\|x\\|_2-\\|y\\|_2|\\le\\|x-y\\|_2$ từ bất đẳng thức tam giác.'],
        [
          ['Write $x=(x-y)+y$ and apply the triangle inequality: $\\|x\\|_2\\le\\|x-y\\|_2+\\|y\\|_2$.', 'Viết $x=(x-y)+y$ rồi áp dụng bất đẳng thức tam giác: $\\|x\\|_2\\le\\|x-y\\|_2+\\|y\\|_2$.'],
          ['Rearrange to get $\\|x\\|_2-\\|y\\|_2\\le\\|x-y\\|_2$.', 'Chuyển vế được $\\|x\\|_2-\\|y\\|_2\\le\\|x-y\\|_2$.'],
          ['Swap $x$ and $y$ to get the reverse difference too; combining both inequalities yields the absolute-value statement.', 'Đổi vai $x$ và $y$ để được hiệu ngược lại; ghép hai bất đẳng thức cho mệnh đề trị tuyệt đối.']
        ]
      )
    ],
    reviewNote: String.raw`Checked the expansion and Cauchy–Schwarz step. Taking square roots is valid because both norms and their sum are nonnegative.`,
    sourceIds: ['f-1806sc']
  },
  'f-w004-e1': {
    application: bi([
      'The difference quotient separates a finite increment from the local slope, so cancellation can reveal the exact derivative.',
      'Thương sai phân tách độ tăng hữu hạn khỏi độ dốc cục bộ; phép rút gọn có thể cho thấy đạo hàm chính xác.'
    ]),
    formula: bi([
      'A function is differentiable at $a$ when $f^{\\prime}(a)=\\lim_{h\\to0}[f(a+h)-f(a)]/h$ exists as a finite limit. For $f(x)=x^3$, this gives $f^{\\prime}(a)=3a^2$.',
      'Hàm khả vi tại $a$ khi $f^{\\prime}(a)=\\lim_{h\\to0}[f(a+h)-f(a)]/h$ tồn tại hữu hạn. Với $f(x)=x^3$, ta được $f^{\\prime}(a)=3a^2$.'
    ]),
    steps: [
      bi(['Substitute the function into the difference quotient and expand the finite increment.', 'Thay hàm vào thương sai phân rồi khai triển độ tăng hữu hạn.']),
      bi(['Factor and cancel $h$ only while $h\\ne0$; then take the limit of the simplified expression.', 'Phân tích và rút gọn $h$ chỉ khi $h\\ne0$; sau đó lấy giới hạn của biểu thức đã rút gọn.']),
      bi(['Substitute the requested point into the derivative formula after taking the limit.', 'Thay điểm cần tính vào công thức đạo hàm sau khi đã lấy giới hạn.'])
    ],
    primarySolution: [
      bi(['Start with $[(a+h)^3-a^3]/h$.', 'Bắt đầu từ $[(a+h)^3-a^3]/h$.']),
      bi(['Expand and cancel for $h\\ne0$: the quotient becomes $3a^2+3ah+h^2$.', 'Khai triển và rút gọn khi $h\\ne0$: thương thành $3a^2+3ah+h^2$.']),
      bi(['As $h\\to0$, the last two terms vanish, so $f^{\\prime}(a)=3a^2$.', 'Khi $h\\to0$, hai số hạng cuối tiến về không, nên $f^{\\prime}(a)=3a^2$.']),
      bi(['At $a=-2$, $f^{\\prime}(-2)=3(-2)^2=12$.', 'Tại $a=-2$, $f^{\\prime}(-2)=3(-2)^2=12$.'])
    ],
    companions: [
      q(
        ['Use the difference quotient to derive the derivative of $f(x)=x^4$ at an arbitrary real $a$.', 'Dùng thương sai phân để suy ra đạo hàm của $f(x)=x^4$ tại số thực tùy ý $a$.'],
        [
          ['Expand $(a+h)^4-a^4=4a^3h+6a^2h^2+4ah^3+h^4$.', 'Khai triển $(a+h)^4-a^4=4a^3h+6a^2h^2+4ah^3+h^4$.'],
          ['For $h\\ne0$, divide by $h$ to get $4a^3+6a^2h+4ah^2+h^3$.', 'Với $h\\ne0$, chia cho $h$ được $4a^3+6a^2h+4ah^2+h^3$.'],
          ['Taking $h\\to0$ leaves $f^{\\prime}(a)=4a^3$; cancellation is valid with $h=0$ excluded before taking the limit.', 'Cho $h\\to0$ còn $f^{\\prime}(a)=4a^3$; phép rút gọn hợp lệ khi loại $h=0$ trước lúc lấy giới hạn.']
        ]
      ),
      q(
        ['For $f(x)=1/x$ and $a\\ne0$, compute $f^{\\prime}(a)$ from the definition and explain why the quotient is defined when $h$ is near $0$.', 'Với $f(x)=1/x$ và $a\\ne0$, hãy tính $f^{\\prime}(a)$ từ định nghĩa và giải thích vì sao thương xác định khi $h$ gần $0$.'],
        [
          ['Combining fractions in $[1/(a+h)-1/a]/h$ gives $-1/[a(a+h)]$.', 'Quy đồng thương $[1/(a+h)-1/a]/h$ được $-1/[a(a+h)]$.'],
          ['Since $a\\ne0$, choose $h$ sufficiently close to zero that $a+h\\ne0$; the simplified quotient is defined.', 'Vì $a\\ne0$, chọn $h$ đủ gần không để $a+h\\ne0$; thương đã rút gọn xác định.'],
          ['Letting $h\\to0$ gives $f^{\\prime}(a)=-1/a^2$.', 'Cho $h\\to0$ được $f^{\\prime}(a)=-1/a^2$.']
        ]
      ),
      q(
        ['For $f(x)=\\sqrt{x}$ at an interior point $a>0$, derive $f^{\\prime}(a)$ from the difference quotient.', 'Với $f(x)=\\sqrt{x}$ tại điểm trong miền $a>0$, hãy suy ra $f^{\\prime}(a)$ từ thương sai phân.'],
        [
          ['Start with $[\\sqrt{a+h}-\\sqrt a]/h$ for small enough $h$ that $a+h\\ge0$.', 'Bắt đầu với $[\\sqrt{a+h}-\\sqrt a]/h$ khi $h$ đủ nhỏ để $a+h\\ge0$.'],
          ['Multiply by the conjugate to rewrite the quotient as $1/(\\sqrt{a+h}+\\sqrt a)$.', 'Nhân với biểu thức liên hợp để viết lại thương thành $1/(\\sqrt{a+h}+\\sqrt a)$.'],
          ['As $h\\to0$, the denominator tends to $2\\sqrt a>0$, so $f^{\\prime}(a)=1/(2\\sqrt a)$.', 'Khi $h\\to0$, mẫu tiến đến $2\\sqrt a>0$, nên $f^{\\prime}(a)=1/(2\\sqrt a)$.']
        ]
      )
    ],
    reviewNote: 'Checked the cubic quotient and evaluation: the simplified expression tends to three times the square of the base point, giving 12 at negative two.',
    sourceIds: ['f-1801sc']
  },
  'f-w004-e2': {
    application: bi([
      'Taylor’s theorem turns a tangent-line prediction into an estimate with a guaranteed curvature error.',
      'Định lý Taylor biến dự đoán bằng tiếp tuyến thành ước lượng có cận sai số độ cong được bảo đảm.'
    ]),
    formula: bi([
      'If $f$ is twice continuously differentiable on the segment from $a$ to $a+h$, then $|f(a+h)-f(a)-f^{\\prime}(a)h|\\le\\frac12\\sup|f^{(2)}|\\,h^2$ over that segment.',
      'Nếu $f$ khả vi liên tục đến bậc hai trên đoạn từ $a$ đến $a+h$, thì $|f(a+h)-f(a)-f^{\\prime}(a)h|\\le\\frac12\\sup|f^{(2)}|\\,h^2$ trên đoạn ấy.'
    ]),
    steps: [
      bi(['Compute $f(a)$ and $f^{\\prime}(a)$ to form $T_1(a+h)=f(a)+f^{\\prime}(a)h$.', 'Tính $f(a)$ và $f^{\\prime}(a)$ để lập $T_1(a+h)=f(a)+f^{\\prime}(a)h$.']),
      bi(['Bound $|f^{(2)}|$ throughout the segment; the remainder depends on the whole interval.', 'Chặn $|f^{(2)}|$ trên toàn bộ đoạn; số dư phụ thuộc cả khoảng.']),
      bi(['Multiply that bound by $h^2/2$ and state the approximation separately from its error guarantee.', 'Nhân cận đó với $h^2/2$ rồi nêu riêng giá trị xấp xỉ và bảo đảm sai số.'])
    ],
    primarySolution: [
      bi(['At zero, $e^0=1$ and $(e^x)\\prime|_{x=0}=1$, so the first-order approximation is $1+h$.', 'Tại không, $e^0=1$ và $(e^x)\\prime|_{x=0}=1$, nên xấp xỉ bậc nhất là $1+h$.']),
      bi(['Taylor’s theorem gives $|e^h-(1+h)|=\\frac12e^\\xi h^2$ for some $\\xi$ between $0$ and $h$.', 'Định lý Taylor cho $|e^h-(1+h)|=\\frac12e^\\xi h^2$ với một $\\xi$ nằm giữa $0$ và $h$.']),
      bi(['For $|h|\\le0.1$, the segment lies in $[-0.1,0.1]$, so $e^\\xi\\le e^{0.1}$.', 'Với $|h|\\le0.1$, đoạn nằm trong $[-0.1,0.1]$, nên $e^\\xi\\le e^{0.1}$.']),
      bi(['Therefore $|e^h-(1+h)|\\le\\frac12e^{0.1}(0.1)^2=0.005e^{0.1}\\approx0.005526$.', 'Do đó $|e^h-(1+h)|\\le\\frac12e^{0.1}(0.1)^2=0.005e^{0.1}\\approx0.005526$.'])
    ],
    companions: [
      q(
        ['Approximate $\\cos(0.2)$ by its first-order Taylor polynomial at $0$ and give an absolute remainder bound.', 'Xấp xỉ $\\cos(0.2)$ bằng đa thức Taylor bậc nhất tại $0$ và cho cận sai số tuyệt đối.'],
        [
          ['Since $\\cos0=1$ and $(\\cos x)\\prime|_{x=0}=0$, the polynomial is $T_1(h)=1$.', 'Vì $\\cos0=1$ và $(\\cos x)\\prime|_{x=0}=0$, đa thức là $T_1(h)=1$.'],
          ['On $[0,0.2]$, $|f^{(2)}(x)|=|\\cos x|\\le1$.', 'Trên $[0,0.2]$, $|f^{(2)}(x)|=|\\cos x|\\le1$.'],
          ['Hence the remainder is at most $(1/2)(1)(0.2)^2=0.02$.', 'Vì thế số dư không quá $(1/2)(1)(0.2)^2=0.02$.']
        ]
      ),
      q(
        ['Approximate $\\sin(0.1)$ by its first-order Taylor polynomial at zero and prove the absolute error is at most $0.0005$.', 'Xấp xỉ $\\sin(0.1)$ bằng đa thức Taylor bậc nhất tại không và chứng minh sai số tuyệt đối không quá $0.0005$.'],
        [
          ['The value and derivative at zero are $\\sin0=0$ and $\\cos0=1$, so $T_1(h)=h$.', 'Giá trị và đạo hàm tại không là $\\sin0=0$ và $\\cos0=1$, nên $T_1(h)=h$.'],
          ['For $|x|\\le0.1$, $|f^{(2)}(x)|=|\\sin x|\\le|x|\\le0.1$.', 'Với $|x|\\le0.1$, $|f^{(2)}(x)|=|\\sin x|\\le|x|\\le0.1$.'],
          ['Thus the remainder is at most $(1/2)(0.1)(0.1)^2=0.0005$.', 'Vậy số dư không quá $(1/2)(0.1)(0.1)^2=0.0005$.']
        ]
      ),
      q(
        ['Approximate $\\sqrt{1.2}$ by the first-order Taylor polynomial of $f(x)=\\sqrt{x}$ at $x=1$, with an error bound.', 'Xấp xỉ $\\sqrt{1.2}$ bằng đa thức Taylor bậc nhất của $f(x)=\\sqrt{x}$ tại $x=1$, kèm cận sai số.'],
        [
          ['At $1$, $f(1)=1$ and $f^{\\prime}(1)=1/2$, so $T_1(1+h)=1+h/2$; at $h=0.2$ this is $1.1$.', 'Tại $1$, $f(1)=1$ và $f^{\\prime}(1)=1/2$, nên $T_1(1+h)=1+h/2$; tại $h=0.2$ được $1.1$.'],
          ['Here $f^{(2)}(x)=-1/(4x^{3/2})$; on $[1,1.2]$, its magnitude is at most $1/4$.', 'Ở đây $f^{(2)}(x)=-1/(4x^{3/2})$; trên $[1,1.2]$, trị tuyệt đối không quá $1/4$.'],
          ['The error is bounded by $(1/2)(1/4)(0.2)^2=0.005$, so $|\\sqrt{1.2}-1.1|\\le0.005$.', 'Sai số bị chặn bởi $(1/2)(1/4)(0.2)^2=0.005$, nên $|\\sqrt{1.2}-1.1|\\le0.005$.']
        ]
      )
    ],
    reviewNote: 'Checked the Taylor remainder over the full interval; for the primary example the bound is about 0.005526.',
    sourceIds: ['f-1801sc']
  },
  'f-w004-e3': {
    application: bi([
      'Continuity controls nearby function values; differentiability requires a single finite linear slope from both sides.',
      'Tính liên tục kiểm soát giá trị hàm lân cận; tính khả vi đòi hỏi một độ dốc tuyến tính hữu hạn duy nhất từ cả hai phía.'
    ]),
    formula: bi([
      'Continuity at $a$ means $\\lim_{x\\to a}f(x)=f(a)$. At an interior point, differentiability requires the finite two-sided limit $\\lim_{h\\to0}[f(a+h)-f(a)]/h$.',
      'Liên tục tại $a$ nghĩa là $\\lim_{x\\to a}f(x)=f(a)$. Tại điểm trong miền, khả vi đòi hỏi giới hạn hai phía hữu hạn $\\lim_{h\\to0}[f(a+h)-f(a)]/h$.'
    ]),
    steps: [
      bi(['Check continuity by comparing the nearby-value limit with the value at the point.', 'Kiểm tra liên tục bằng cách so sánh giới hạn giá trị lân cận với giá trị tại điểm.']),
      bi(['Compute the difference quotient for positive and negative increments separately.', 'Tính thương sai phân riêng cho độ tăng dương và âm.']),
      bi(['If the one-sided limits disagree, the derivative does not exist even when the function is continuous.', 'Nếu hai giới hạn một phía khác nhau, đạo hàm không tồn tại dù hàm liên tục.'])
    ],
    primarySolution: [
      bi(['At zero, $f(0)=0$ and $||x|-f(0)|=|x|\\to0$, so $f(x)=|x|$ is continuous there.', 'Tại không, $f(0)=0$ và $||x|-f(0)|=|x|\\to0$, nên $f(x)=|x|$ liên tục tại đó.']),
      bi(['For $h>0$, the quotient $|h|/h$ equals $1$.', 'Với $h>0$, thương $|h|/h$ bằng $1$.']),
      bi(['For $h<0$, the quotient equals $-1$.', 'Với $h<0$, thương bằng $-1$.']),
      bi(['The one-sided limits differ, so the derivative at zero does not exist although continuity holds.', 'Hai giới hạn một phía khác nhau, nên đạo hàm tại không không tồn tại dù hàm liên tục.'])
    ],
    companions: [
      q(
        ['Show $f(x)=|x-2|$ is continuous but not differentiable at $x=2$.', 'Chứng minh $f(x)=|x-2|$ liên tục nhưng không khả vi tại $x=2$.'],
        [
          ['Since $f(2)=0$ and $|f(x)-f(2)|=|x-2|\\to0$, it is continuous at $2$.', 'Vì $f(2)=0$ và $|f(x)-f(2)|=|x-2|\\to0$, hàm liên tục tại $2$.'],
          ['With $h=x-2$, the quotient is $|h|/h=1$ for $h>0$ and $-1$ for $h<0$.', 'Đặt $h=x-2$, thương là $|h|/h=1$ khi $h>0$ và $-1$ khi $h<0$.'],
          ['The one-sided slopes disagree, so no derivative exists at $2$.', 'Hai độ dốc một phía khác nhau, nên đạo hàm tại $2$ không tồn tại.']
        ]
      ),
      q(
        ['For $f(x)=\\sqrt{x}$ on $[0,\\infty)$, show continuity at zero and determine whether the right difference quotient has a finite limit.', 'Với $f(x)=\\sqrt{x}$ trên $[0,\\infty)$, hãy chứng minh liên tục tại không và xác định thương sai phân phải có giới hạn hữu hạn không.'],
        [
          ['As $x\\downarrow0$, $\\sqrt{x}\\to0=f(0)$, so the function is continuous at the endpoint.', 'Khi $x\\downarrow0$, $\\sqrt{x}\\to0=f(0)$, nên hàm liên tục tại đầu mút.'],
          ['For $h>0$, the right quotient is $[\\sqrt h-0]/h=1/\\sqrt h$.', 'Với $h>0$, thương phải là $[\\sqrt h-0]/h=1/\\sqrt h$.'],
          ['As $h\\downarrow0$, it grows without bound, so there is no finite one-sided derivative at zero.', 'Khi $h\\downarrow0$, thương tăng không bị chặn, nên đạo hàm một phía hữu hạn tại không không tồn tại.']
        ]
      ),
      q(
        ['Let $g(x)=0$ for $x\\le0$ and $g(x)=x^2$ for $x>0$. Prove continuity and differentiability at zero and find $g^{\\prime}(0)$.', 'Cho $g(x)=0$ khi $x\\le0$ và $g(x)=x^2$ khi $x>0$. Chứng minh liên tục và khả vi tại không, rồi tìm $g^{\\prime}(0)$.'],
        [
          ['Both sides approach $0=g(0)$: values are zero on the left and $x^2\\to0$ on the right.', 'Hai phía tiến đến $0=g(0)$: bên trái giá trị bằng không và bên phải $x^2\\to0$.'],
          ['For $h<0$, $[g(h)-g(0)]/h=0$; for $h>0$, it equals $h^2/h=h$.', 'Với $h<0$, $[g(h)-g(0)]/h=0$; với $h>0$, thương bằng $h^2/h=h$.'],
          ['Both one-sided limits are zero, so $g^{\\prime}(0)=0$ and the derivative exists.', 'Hai giới hạn một phía đều bằng không, nên $g^{\\prime}(0)=0$ và đạo hàm tồn tại.']
        ]
      )
    ],
    reviewNote: 'Checked continuity at zero and the one-sided quotient limits: positive and negative increments give 1 and negative 1.',
    sourceIds: ['f-1801sc']
  },
  'f-w004-e4': {
    application: bi([
      'The chain rule propagates local changes through nested functions, and the composition’s domain follows every stage of the input map.',
      'Quy tắc dây chuyền truyền biến thiên cục bộ qua các hàm lồng nhau; miền của hàm hợp phụ thuộc từng tầng đầu vào.'
    ]),
    formula: bi([
      'If $g$ is differentiable at $x$ and $F$ at $g(x)$, then $(F\\circ g)\\prime(x)=F^{\\prime}(g(x))g^{\\prime}(x)$. Use the formula only where the composition and both derivatives are defined.',
      'Nếu $g$ khả vi tại $x$ và $F$ tại $g(x)$, thì $(F\\circ g)\\prime(x)=F^{\\prime}(g(x))g^{\\prime}(x)$. Chỉ dùng công thức nơi hàm hợp và cả hai đạo hàm xác định.'
    ]),
    steps: [
      bi(['Identify the inner function and differentiate it.', 'Nhận diện hàm trong và lấy đạo hàm.']),
      bi(['Differentiate the outer function at the inner output, then multiply by the inner derivative.', 'Lấy đạo hàm hàm ngoài tại đầu ra hàm trong, rồi nhân với đạo hàm hàm trong.']),
      bi(['Substitute the requested point and check the real domain of the composition.', 'Thay điểm cần tính và kiểm tra miền thực của hàm hợp.'])
    ],
    primarySolution: [
      bi(['Let $g(x)=x^2+1$; then $g^{\\prime}(x)=2x$.', 'Đặt $g(x)=x^2+1$; khi đó $g^{\\prime}(x)=2x$.']),
      bi(['The derivative of the outer sine at $g(x)$ is $\\cos(x^2+1)$.', 'Đạo hàm hàm sin ngoài tại $g(x)$ là $\\cos(x^2+1)$.']),
      bi(['By the chain rule, $q^{\\prime}(x)=2x\\cos(x^2+1)$.', 'Theo quy tắc dây chuyền, $q^{\\prime}(x)=2x\\cos(x^2+1)$.']),
      bi(['At $x=0$, $q^{\\prime}(0)=0$. The polynomial and sine are differentiable for every real input, so the formula holds on $\\mathbb R$.', 'Tại $x=0$, $q^{\\prime}(0)=0$. Đa thức và hàm sin khả vi với mọi đầu vào thực, nên công thức đúng trên $\\mathbb R$.'])
    ],
    companions: [
      q(
        ['For $q(x)=e^{3x-1}$, find $q^{\\prime}(x)$ and $q^{\\prime}(0)$, and state the domain.', 'Với $q(x)=e^{3x-1}$, tìm $q^{\\prime}(x)$ và $q^{\\prime}(0)$, rồi nêu miền xác định.'],
        [
          ['The inner affine function $3x-1$ has derivative $3$.', 'Hàm affine bên trong $3x-1$ có đạo hàm $3$.'],
          ['The chain rule gives $q^{\\prime}(x)=3e^{3x-1}$.', 'Quy tắc dây chuyền cho $q^{\\prime}(x)=3e^{3x-1}$.'],
          ['At zero, $q^{\\prime}(0)=3/e$; the formula is valid for every real $x$.', 'Tại không, $q^{\\prime}(0)=3/e$; công thức đúng với mọi $x$ thực.']
        ]
      ),
      q(
        ['For $r(x)=\\sqrt{4-x^2}$, derive its derivative and state the real domain where the formula is valid.', 'Với $r(x)=\\sqrt{4-x^2}$, suy ra đạo hàm và nêu miền thực mà công thức đúng.'],
        [
          ['The function is real-valued when $4-x^2\\ge0$, or $-2\\le x\\le2$.', 'Hàm có giá trị thực khi $4-x^2\\ge0$, tức $-2\\le x\\le2$.'],
          ['On the interior, the chain rule gives $r^{\\prime}(x)=(-2x)/(2\\sqrt{4-x^2})=-x/\\sqrt{4-x^2}$.', 'Trên khoảng trong, quy tắc dây chuyền cho $r^{\\prime}(x)=(-2x)/(2\\sqrt{4-x^2})=-x/\\sqrt{4-x^2}$.'],
          ['The denominator vanishes at $x=\\pm2$, so this derivative formula is valid on $(-2,2)$ only.', 'Mẫu bằng không tại $x=\\pm2$, nên công thức đạo hàm chỉ đúng trên $(-2,2)$.']
        ]
      ),
      q(
        ['Differentiate $s(x)=\\cos((2x+1)^3)$ and evaluate $s^{\\prime}(0)$.', 'Lấy đạo hàm $s(x)=\\cos((2x+1)^3)$ và tính $s^{\\prime}(0)$.'],
        [
          ['The inner cube has derivative $3(2x+1)^2\\cdot2=6(2x+1)^2$.', 'Hàm lập phương bên trong có đạo hàm $3(2x+1)^2\\cdot2=6(2x+1)^2$.'],
          ['Multiplying by the outer derivative gives $s^{\\prime}(x)=-6(2x+1)^2\\sin((2x+1)^3)$.', 'Nhân với đạo hàm hàm ngoài được $s^{\\prime}(x)=-6(2x+1)^2\\sin((2x+1)^3)$.'],
          ['Thus $s^{\\prime}(0)=-6\\sin(1)$; every component is differentiable on $\\mathbb R$.', 'Vậy $s^{\\prime}(0)=-6\\sin(1)$; mọi hàm thành phần khả vi trên $\\mathbb R$.']
        ]
      )
    ],
    reviewNote: 'Checked the chain-rule factors and domains: the primary composition is differentiable on all real inputs.',
    sourceIds: ['f-1801sc']
  },
  'f-w004-e5': {
    application: bi([
      'A second-order Taylor polynomial captures local curvature, while a bound on the third derivative controls error across an interval.',
      'Đa thức Taylor bậc hai nắm bắt độ cong cục bộ, còn cận đạo hàm bậc ba kiểm soát sai số trên cả khoảng.'
    ]),
    formula: bi([
      'If $f$ is three times continuously differentiable between $a$ and $a+h$, then $T_2(a+h)=f(a)+f^{\\prime}(a)h+\\frac12f^{(2)}(a)h^2$ and $|R_3|\\le\\sup|f^{(3)}|\\,|h|^3/6$ on that segment.',
      'Nếu $f$ khả vi liên tục đến bậc ba giữa $a$ và $a+h$, thì $T_2(a+h)=f(a)+f^{\\prime}(a)h+\\frac12f^{(2)}(a)h^2$ và $|R_3|\\le\\sup|f^{(3)}|\\,|h|^3/6$ trên đoạn ấy.'
    ]),
    steps: [
      bi(['Evaluate $f$, $f^{\\prime}$, and $f^{(2)}$ at the expansion point to assemble the quadratic polynomial.', 'Tính $f$, $f^{\\prime}$ và $f^{(2)}$ tại điểm khai triển để lập đa thức bậc hai.']),
      bi(['Differentiate once more and bound $|f^{(3)}|$ over the whole interval.', 'Lấy thêm đạo hàm và chặn $|f^{(3)}|$ trên toàn bộ khoảng.']),
      bi(['Multiply the supremum bound by $|h|^3/6$ and report the approximation separately from its error guarantee.', 'Nhân cận trên với $|h|^3/6$ rồi báo riêng giá trị xấp xỉ và sai số được bảo đảm.'])
    ],
    primarySolution: [
      bi(['At $x=1$, $f(1)=0$, $f^{\\prime}(1)=1$, and $f^{(2)}(1)=-1$ for $f(x)=\\ln x$.', 'Tại $x=1$, $f(1)=0$, $f^{\\prime}(1)=1$, và $f^{(2)}(1)=-1$ với $f(x)=\\ln x$.']),
      bi(['For $h=0.1$, $T_2(1+h)=h-h^2/2$, so $\\ln(1.1)\\approx0.1-0.005=0.095$.', 'Với $h=0.1$, $T_2(1+h)=h-h^2/2$, nên $\\ln(1.1)\\approx0.1-0.005=0.095$.']),
      bi(['Since $f^{(3)}(x)=2/x^3$, its magnitude is at most $2$ on $[1,1.1]$.', 'Vì $f^{(3)}(x)=2/x^3$, trị tuyệt đối không vượt quá $2$ trên $[1,1.1]$.']),
      bi(['Thus $|R_3|\\le2(0.1)^3/6=1/3000\\approx0.0003333$.', 'Vậy $|R_3|\\le2(0.1)^3/6=1/3000\\approx0.0003333$.'])
    ],
    companions: [
      q(
        ['Use a second-order Taylor polynomial at $2$ to approximate $\\ln(2.1)$ and bound its error.', 'Dùng đa thức Taylor bậc hai tại $2$ để xấp xỉ $\\ln(2.1)$ và chặn sai số.'],
        [
          ['For $f(x)=\\ln x$, $f(2)=\\ln2$, $f^{\\prime}(2)=1/2$, and $f^{(2)}(2)=-1/4$.', 'Với $f(x)=\\ln x$, $f(2)=\\ln2$, $f^{\\prime}(2)=1/2$, và $f^{(2)}(2)=-1/4$.'],
          ['With $h=0.1$, $T_2=\\ln2+0.05-0.00125=\\ln2+0.04875$.', 'Với $h=0.1$, $T_2=\\ln2+0.05-0.00125=\\ln2+0.04875$.'],
          ['On $[2,2.1]$, $f^{(3)}(x)=2/x^3\\le1/4$, so $|R_3|\\le(1/4)(0.1)^3/6=1/24000$.', 'Trên $[2,2.1]$, $f^{(3)}(x)=2/x^3\\le1/4$, nên $|R_3|\\le(1/4)(0.1)^3/6=1/24000$.']
        ]
      ),
      q(
        ['Approximate $e^{1.2}$ by a second-order Taylor polynomial at $1$ and give a Lagrange remainder bound.', 'Xấp xỉ $e^{1.2}$ bằng đa thức Taylor bậc hai tại $1$ và cho cận số dư Lagrange.'],
        [
          ['For $f(x)=e^x$, its first three derivatives equal $e^x$, so $T_2(1+h)=e(1+h+h^2/2)$.', 'Với $f(x)=e^x$, ba đạo hàm đầu đều bằng $e^x$, nên $T_2(1+h)=e(1+h+h^2/2)$.'],
          ['At $h=0.2$, this gives $e(1+0.2+0.02)=1.22e$.', 'Tại $h=0.2$, đa thức cho $e(1+0.2+0.02)=1.22e$.'],
          ['On $[1,1.2]$, $|f^{(3)}(x)|\\le e^{1.2}$, hence $|R_3|\\le e^{1.2}(0.2)^3/6=e^{1.2}/750$.', 'Trên $[1,1.2]$, $|f^{(3)}(x)|\\le e^{1.2}$, nên $|R_3|\\le e^{1.2}(0.2)^3/6=e^{1.2}/750$.']
        ]
      ),
      q(
        ['For $f(x)=1/x$, use a second-order Taylor polynomial at $2$ to approximate $f(2.2)$ and bound its remainder.', 'Với $f(x)=1/x$, dùng đa thức Taylor bậc hai tại $2$ để xấp xỉ $f(2.2)$ và chặn số dư.'],
        [
          ['At $2$, $f=1/2$, $f^{\\prime}=-1/4$, and $f^{(2)}=1/4$, so $T_2=1/2-0.2/4+0.2^2/8=0.455$.', 'Tại $2$, $f=1/2$, $f^{\\prime}=-1/4$, và $f^{(2)}=1/4$, nên $T_2=1/2-0.2/4+0.2^2/8=0.455$.'],
          ['The third derivative is $-6/x^4$; on $[2,2.2]$ its magnitude is at most $3/8$.', 'Đạo hàm bậc ba là $-6/x^4$; trên $[2,2.2]$ trị tuyệt đối không quá $3/8$.'],
          ['Thus $|R_3|\\le(3/8)(0.2)^3/6=1/2000=0.0005$.', 'Vì vậy $|R_3|\\le(3/8)(0.2)^3/6=1/2000=0.0005$.']
        ]
      )
    ],
    reviewNote: 'Checked the third-derivative bound on the full interval; the primary approximation is 0.095 with error at most 1/3000.',
    sourceIds: ['f-1801sc']
  },
  'f-w005-e1': {
    application: bi([
      'The kernel contains exactly the inputs a linear transformation sends to zero; closure verifies that invisible directions form a vector space.',
      'Kernel chứa đúng các đầu vào mà phép biến đổi tuyến tính gửi về không; tính đóng xác nhận các hướng không nhìn thấy tạo thành một không gian vector.'
    ]),
    formula: bi([
      'For a linear map $T:V\\to W$, $\\ker(T)=\\{v\\in V:T(v)=0\\}$. Linearity gives $T(0)=0$, $T(u+v)=T(u)+T(v)$, and $T(cv)=cT(v)$, so the kernel is a subspace.',
      'Với ánh xạ tuyến tính $T:V\\to W$, $\\ker(T)=\\{v\\in V:T(v)=0\\}$. Tính tuyến tính cho $T(0)=0$, $T(u+v)=T(u)+T(v)$ và $T(cv)=cT(v)$, nên kernel là không gian con.'
    ]),
    steps: [
      bi(['Show the zero vector belongs to the kernel by applying linearity to $T(0)$.', 'Dùng tính tuyến tính để chứng minh vector không thuộc kernel qua $T(0)$.']),
      bi(['For kernel vectors $u,v$, use $T(u+v)=T(u)+T(v)=0$ to prove closure under addition.', 'Với $u,v$ trong kernel, dùng $T(u+v)=T(u)+T(v)=0$ để chứng minh tính đóng với phép cộng.']),
      bi(['For any scalar $c$, use $T(cu)=cT(u)=0$ to prove scalar closure; these criteria establish a subspace.', 'Với mọi vô hướng $c$, dùng $T(cu)=cT(u)=0$ để chứng minh tính đóng với nhân vô hướng; các tiêu chí này xác lập không gian con.'])
    ],
    primarySolution: [
      bi(['Because $T$ is linear, $T(0)=0$, so $0\\in\\ker(T)$.', 'Vì $T$ tuyến tính, $T(0)=0$, nên $0\\in\\ker(T)$.']),
      bi(['If $u,v\\in\\ker(T)$, then $T(u)=T(v)=0$ and $T(u+v)=T(u)+T(v)=0$, so $u+v\\in\\ker(T)$.', 'Nếu $u,v\\in\\ker(T)$ thì $T(u)=T(v)=0$ và $T(u+v)=T(u)+T(v)=0$, nên $u+v\\in\\ker(T)$.']),
      bi(['For a scalar $c$ and $u\\in\\ker(T)$, $T(cu)=cT(u)=c\\cdot0=0$, so $cu\\in\\ker(T)$.', 'Với vô hướng $c$ và $u\\in\\ker(T)$, $T(cu)=cT(u)=c\\cdot0=0$, nên $cu\\in\\ker(T)$.']),
      bi(['The kernel contains zero and is closed under addition and scalar multiplication, hence it is a subspace of $V$.', 'Kernel chứa vector không và đóng với phép cộng cùng phép nhân vô hướng, nên là không gian con của $V$.'])
    ],
    companions: [
      q(
        ['Let $T(x,y)=x-2y$ from $\\mathbb R^2$ to $\\mathbb R$. Find its kernel and verify directly that the result is a subspace.', 'Cho $T(x,y)=x-2y$ từ $\\mathbb R^2$ đến $\\mathbb R$. Tìm kernel và kiểm tra trực tiếp kết quả là không gian con.'],
        [
          ['The equation $T(x,y)=0$ is $x-2y=0$, so $x=2y$ and $\\ker(T)=\\{(2t,t):t\\in\\mathbb R\\}=\\operatorname{span}\\{(2,1)\\}$.', 'Phương trình $T(x,y)=0$ là $x-2y=0$, nên $x=2y$ và $\\ker(T)=\\{(2t,t):t\\in\\mathbb R\\}=\\operatorname{span}\\{(2,1)\\}$.'],
          ['It contains $(0,0)$ by taking $t=0$. If $(2s,s)$ and $(2t,t)$ are in the set, their sum is $(2(s+t),s+t)$.', 'Tập chứa $(0,0)$ khi lấy $t=0$. Nếu $(2s,s)$ và $(2t,t)$ thuộc tập, tổng của chúng là $(2(s+t),s+t)$.'],
          ['For any scalar $c$, $c(2t,t)=(2(ct),ct)$ remains in the set; thus the kernel is closed under both operations.', 'Với mọi vô hướng $c$, $c(2t,t)=(2(ct),ct)$ vẫn thuộc tập; vậy kernel đóng với cả hai phép toán.']
        ]
      ),
      q(
        ['The zero set of $F(x)=x^2-1$ is $S=\\{-1,1\\}$. Show that $S$ is not a subspace of $\\mathbb R$ and identify why the kernel theorem does not apply.', 'Tập nghiệm không của $F(x)=x^2-1$ là $S=\\{-1,1\\}$. Chứng minh $S$ không là không gian con của $\\mathbb R$ và nêu vì sao định lý kernel không áp dụng.'],
        [
          ['The set does not contain $0$, since $F(0)=-1\\ne0$; this alone violates a subspace criterion.', 'Tập không chứa $0$, vì $F(0)=-1\\ne0$; riêng điều này đã vi phạm tiêu chí không gian con.'],
          ['It also fails addition: $1,-1\\in S$ but $1+(-1)=0\\notin S$.', 'Tập cũng không đóng với phép cộng: $1,-1\\in S$ nhưng $1+(-1)=0\\notin S$.'],
          ['The map $F$ is nonlinear because of $x^2$, so its zero set need not be a subspace and is not the kernel of a linear map.', 'Ánh xạ $F$ phi tuyến do có $x^2$, nên tập nghiệm không không nhất thiết là không gian con và không phải kernel của ánh xạ tuyến tính.']
        ]
      ),
      q(
        ['For a linear map $T:V\\to W$ and fixed $w\\in W$, prove that $\\{v:T(v)=w\\}$ is either empty or a translate of $\\ker(T)$.', 'Với ánh xạ tuyến tính $T:V\\to W$ và $w\\in W$ cố định, chứng minh $\\{v:T(v)=w\\}$ hoặc rỗng hoặc là một phép tịnh tiến của $\\ker(T)$.'],
        [
          ['If there is no $v_0$ with $T(v_0)=w$, the fiber is empty.', 'Nếu không có $v_0$ nào thỏa $T(v_0)=w$, thớ nghiệm là tập rỗng.'],
          ['If $v_0$ exists, then $T(v)=w$ iff $T(v-v_0)=T(v)-T(v_0)=0$, so $v-v_0\\in\\ker(T)$.', 'Nếu tồn tại $v_0$, thì $T(v)=w$ khi và chỉ khi $T(v-v_0)=T(v)-T(v_0)=0$, tức $v-v_0\\in\\ker(T)$.'],
          ['Therefore the fiber is exactly $v_0+\\ker(T)$. It is a subspace only in special cases such as $w=0$, which gives the kernel itself.', 'Vì vậy thớ nghiệm đúng bằng $v_0+\\ker(T)$. Nó chỉ là không gian con trong trường hợp đặc biệt như $w=0$, khi thớ chính là kernel.']
        ]
      )
    ],
    reviewNote: 'Checked the subspace criteria from linearity: zero maps to zero, addition preserves zero output, and scalar multiplication preserves zero output. Linearity is essential.',
    sourceIds: ['f-1806sc']
  },
  'f-w005-e2': {
    application: bi([
      'Rank–nullity divides input directions into visible directions measured by the map and invisible directions in its kernel.',
      'Định lý hạng–kernel chia các hướng đầu vào thành hướng được ánh xạ nhìn thấy và hướng không nhìn thấy nằm trong kernel.'
    ]),
    formula: bi([
      'For a linear map $T:V\\to W$ with finite-dimensional domain, $\\dim V=\\dim\\ker(T)+\\dim\\operatorname{im}(T)$. For an $n$-column matrix, $\\operatorname{nullity}(A)=n-\\operatorname{rank}(A)$.',
      'Với ánh xạ tuyến tính $T:V\\to W$ có miền hữu hạn chiều, $\\dim V=\\dim\\ker(T)+\\dim\\operatorname{im}(T)$. Với ma trận có $n$ cột, $\\operatorname{nullity}(A)=n-\\operatorname{rank}(A)$.'
    ]),
    steps: [
      bi(['Reduce the homogeneous system to identify independent equations and determine the rank.', 'Rút gọn hệ thuần nhất để nhận diện các phương trình độc lập và xác định hạng.']),
      bi(['Parameterize all solutions of $Ax=0$ to obtain a basis of the kernel.', 'Tham số hóa mọi nghiệm của $Ax=0$ để có một cơ sở của kernel.']),
      bi(['Count the basis vectors for nullity and verify that rank plus nullity equals the number of columns.', 'Đếm các vector cơ sở để có số chiều kernel rồi kiểm tra hạng cộng số chiều kernel bằng số cột.'])
    ],
    primarySolution: [
      bi(['The third row is the sum of the first two, while the first two are independent, so $\\operatorname{rank}(A)=2$.', 'Hàng thứ ba là tổng hai hàng đầu, còn hai hàng đầu độc lập, nên $\\operatorname{rank}(A)=2$.']),
      bi(['Solving $Ax=0$ gives $x_2=-x_3$ from row two and $x_1=-2x_2=2x_3$ from row one.', 'Giải $Ax=0$ cho $x_2=-x_3$ từ hàng hai và $x_1=-2x_2=2x_3$ từ hàng một.']),
      bi(['Thus $x=t(2,-1,1)$ and $\\ker(A)=\\operatorname{span}\\{(2,-1,1)\\}$, a one-dimensional space.', 'Vậy $x=t(2,-1,1)$ và $\\ker(A)=\\operatorname{span}\\{(2,-1,1)\\}$, là không gian một chiều.']),
      bi(['Rank–nullity checks: $2+1=3$, equal to the number of columns.', 'Kiểm tra hạng–kernel: $2+1=3$, bằng số cột.'])
    ],
    companions: [
      q(
        ['For $B=\\begin{bmatrix}1&1&0&0\\\\0&0&1&1\\end{bmatrix}$, find rank, nullity, and a basis for $\\ker(B)$; verify rank–nullity.', 'Với $B=\\begin{bmatrix}1&1&0&0\\\\0&0&1&1\\end{bmatrix}$, hãy tìm hạng, số chiều kernel và một cơ sở của $\\ker(B)$; kiểm tra hạng–kernel.'],
        [
          ['The two nonzero rows are independent, so $\\operatorname{rank}(B)=2$.', 'Hai hàng khác không độc lập, nên $\\operatorname{rank}(B)=2$.'],
          ['The equations are $x_1=-x_2$ and $x_3=-x_4$, giving $x=s(1,-1,0,0)+t(0,0,1,-1)$.', 'Các phương trình là $x_1=-x_2$ và $x_3=-x_4$, cho $x=s(1,-1,0,0)+t(0,0,1,-1)$.'],
          ['These two independent directions form a kernel basis, so nullity is $2$ and $2+2=4$, the number of columns.', 'Hai hướng độc lập này tạo cơ sở kernel, nên số chiều kernel bằng $2$ và $2+2=4$, đúng bằng số cột.']
        ]
      ),
      q(
        ['A linear map $T:\\mathbb R^5\\to\\mathbb R^3$ has rank $2$. How many independent null directions does it have? Justify the count.', 'Ánh xạ tuyến tính $T:\\mathbb R^5\\to\\mathbb R^3$ có hạng $2$. Nó có bao nhiêu hướng kernel độc lập? Hãy biện minh số lượng.'],
        [
          ['The domain dimension is $5$, and rank–nullity says $5=\\operatorname{nullity}(T)+2$.', 'Miền xác định có số chiều $5$, và hạng–kernel cho $5=\\operatorname{nullity}(T)+2$.'],
          ['Subtract rank from domain dimension to get nullity $3$.', 'Lấy số chiều miền trừ hạng để được số chiều kernel bằng $3$.'],
          ['A basis of the kernel therefore has exactly three independent vectors; no particular basis can be named without knowing the map.', 'Vì vậy một cơ sở kernel có đúng ba vector độc lập; chưa thể nêu cơ sở cụ thể nếu chưa biết ánh xạ.']
        ]
      ),
      q(
        ['For $C=\\begin{bmatrix}1&2\\\\2&4\\\\0&0\\end{bmatrix}$, find rank, nullity, and $\\ker(C)$, then check the dimension identity.', 'Với $C=\\begin{bmatrix}1&2\\\\2&4\\\\0&0\\end{bmatrix}$, hãy tìm hạng, số chiều kernel và $\\ker(C)$, rồi kiểm tra đẳng thức số chiều.'],
        [
          ['The second row is twice the first and the last row is zero, so there is one independent row and rank is $1$.', 'Hàng thứ hai gấp đôi hàng thứ nhất và hàng cuối bằng không, nên có một hàng độc lập và hạng bằng $1$.'],
          ['The equation $Cx=0$ reduces to $x_1+2x_2=0$, so $\\ker(C)=\\operatorname{span}\\{(-2,1)\\}$ and nullity is $1$.', 'Phương trình $Cx=0$ rút về $x_1+2x_2=0$, nên $\\ker(C)=\\operatorname{span}\\{(-2,1)\\}$ và số chiều kernel bằng $1$.'],
          ['The domain has two coordinates, and $1+1=2$ verifies rank–nullity.', 'Miền có hai tọa độ, và $1+1=2$ xác nhận định lý hạng–kernel.']
        ]
      )
    ],
    reviewNote: 'Checked the row dependence and null-vector substitution: $A(2,-1,1)^T=0$, rank is $2$, and nullity is $1$ in a three-column domain.',
    sourceIds: ['f-1806sc']
  },
  'f-w005-e3': {
    application: bi([
      'To design a linear measurement that erases exactly a chosen subspace, use independent row vectors orthogonal to that subspace.',
      'Để thiết kế phép đo tuyến tính xóa đúng một không gian con đã chọn, hãy dùng các vector hàng độc lập và trực giao với không gian đó.'
    ]),
    formula: bi([
      'In $\\mathbb R^n$ with the standard inner product, if the rows of $A$ form a basis of $K^\\perp$, then $\\ker(A)=K$ and $\\operatorname{rank}(A)=n-\\dim K$.',
      'Trong $\\mathbb R^n$ với tích vô hướng chuẩn, nếu các hàng của $A$ tạo cơ sở của $K^\\perp$, thì $\\ker(A)=K$ và $\\operatorname{rank}(A)=n-\\dim K$.'
    ]),
    steps: [
      bi(['Choose linear equations whose row vectors vanish on every vector in the target kernel.', 'Chọn các phương trình tuyến tính có vector hàng cho giá trị không trên mọi vector thuộc kernel đích.']),
      bi(['Solve the equations to verify that every target vector is in the kernel and that no additional vectors are.', 'Giải các phương trình để xác nhận mọi vector đích nằm trong kernel và không có vector thừa nào khác.']),
      bi(['Check the chosen rows are independent, then confirm rank–nullity matches the kernel dimension.', 'Kiểm tra các hàng đã chọn độc lập, rồi xác nhận hạng–kernel khớp với số chiều kernel.'])
    ],
    primarySolution: [
      bi(['Choose rows $(1,-1,0)$ and $(0,0,1)$, yielding $A=\\begin{bmatrix}1&-1&0\\\\0&0&1\\end{bmatrix}$.', 'Chọn các hàng $(1,-1,0)$ và $(0,0,1)$, được $A=\\begin{bmatrix}1&-1&0\\\\0&0&1\\end{bmatrix}$.']),
      bi(['The equation $Ax=0$ says $x_1=x_2$ and $x_3=0$, so every solution has form $t(1,1,0)$.', 'Phương trình $Ax=0$ cho $x_1=x_2$ và $x_3=0$, nên mọi nghiệm có dạng $t(1,1,0)$.']),
      bi(['Thus the kernel is exactly $\\operatorname{span}\\{(1,1,0)\\}$, as requested.', 'Vì vậy kernel đúng bằng $\\operatorname{span}\\{(1,1,0)\\}$ như yêu cầu.']),
      bi(['The two rows are independent, giving rank $2$; rank–nullity gives nullity $3-2=1$, consistent with the one-dimensional target kernel.', 'Hai hàng độc lập nên hạng bằng $2$; hạng–kernel cho số chiều $3-2=1$, khớp với kernel đích một chiều.'])
    ],
    companions: [
      q(
        ['Construct a linear map $T:\\mathbb R^4\\to\\mathbb R^2$ whose kernel is $K=\\operatorname{span}\\{(1,1,0,0),(0,0,1,1)\\}$; give a matrix and verify the kernel.', 'Xây dựng ánh xạ tuyến tính $T:\\mathbb R^4\\to\\mathbb R^2$ có kernel $K=\\operatorname{span}\\{(1,1,0,0),(0,0,1,1)\\}$; hãy cho ma trận và kiểm tra kernel.'],
        [
          ['The row vectors $(1,-1,0,0)$ and $(0,0,1,-1)$ are orthogonal to both generators of $K$; use them as rows of $A$.', 'Các vector hàng $(1,-1,0,0)$ và $(0,0,1,-1)$ trực giao với cả hai vector sinh $K$; dùng chúng làm các hàng của $A$.'],
          ['Then $Ax=0$ is the pair of equations $x_1=x_2$ and $x_3=x_4$.', 'Khi đó $Ax=0$ là cặp phương trình $x_1=x_2$ và $x_3=x_4$.'],
          ['Every solution is $s(1,1,0,0)+t(0,0,1,1)$, exactly $K$; the two rows are independent, so the map has rank $2$.', 'Mọi nghiệm là $s(1,1,0,0)+t(0,0,1,1)$, đúng bằng $K$; hai hàng độc lập nên ánh xạ có hạng $2$.']
        ]
      ),
      q(
        ['Construct a linear map $T:\\mathbb R^3\\to\\mathbb R$ whose kernel is the plane $K=\\{(x,y,z):x+y+z=0\\}$, and verify the kernel and rank.', 'Xây dựng ánh xạ tuyến tính $T:\\mathbb R^3\\to\\mathbb R$ có kernel là mặt phẳng $K=\\{(x,y,z):x+y+z=0\\}$, rồi kiểm tra kernel và hạng.'],
        [
          ['Define $T(x,y,z)=x+y+z$, whose matrix is the single row $[1\\ 1\\ 1]$.', 'Đặt $T(x,y,z)=x+y+z$, có ma trận là hàng duy nhất $[1\\ 1\\ 1]$.'],
          ['By definition, $T(x,y,z)=0$ exactly when $x+y+z=0$, so $\\ker(T)=K$.', 'Theo định nghĩa, $T(x,y,z)=0$ đúng khi $x+y+z=0$, nên $\\ker(T)=K$.'],
          ['The row is nonzero, so rank is $1$; the plane kernel has dimension $2$, and $1+2=3$ checks rank–nullity.', 'Hàng khác không nên hạng bằng $1$; kernel mặt phẳng có số chiều $2$, và $1+2=3$ kiểm tra định lý hạng–kernel.']
        ]
      ),
      q(
        ['Find a nonzero linear functional $T:\\mathbb R^2\\to\\mathbb R$ with kernel $\\operatorname{span}\\{(1,2)\\}$. Verify its rank.', 'Tìm phiếm hàm tuyến tính khác không $T:\\mathbb R^2\\to\\mathbb R$ có kernel $\\operatorname{span}\\{(1,2)\\}$. Hãy kiểm tra hạng.'],
        [
          ['A row orthogonal to $(1,2)$ is $(2,-1)$, so set $T(x,y)=2x-y$.', 'Một hàng trực giao với $(1,2)$ là $(2,-1)$, nên đặt $T(x,y)=2x-y$.'],
          ['The equation $T(x,y)=0$ gives $y=2x$, hence $(x,y)=x(1,2)$ and the kernel is the required line.', 'Phương trình $T(x,y)=0$ cho $y=2x$, nên $(x,y)=x(1,2)$ và kernel là đường thẳng yêu cầu.'],
          ['The nonzero row has rank $1$; nullity is also $1$, and their sum is the domain dimension $2$.', 'Hàng khác không có hạng $1$; số chiều kernel cũng là $1$, tổng bằng số chiều miền $2$.']
        ]
      )
    ],
    reviewNote: 'Checked the equations: the solutions satisfy exactly $x_1=x_2$ and $x_3=0$, giving the prescribed kernel; the two rows are independent.',
    sourceIds: ['f-1806sc']
  },
  'f-w005-e4': {
    application: bi([
      'A linear contrast is identifiable when it stays unchanged across every coefficient vector that produces the same observed data.',
      'Một tổ hợp tuyến tính nhận diện được khi nó không đổi giữa mọi vector hệ số tạo ra cùng dữ liệu quan sát.'
    ]),
    formula: bi([
      'If $X\\beta=X\\beta^{\\prime}$, then $\\beta^{\\prime}-\\beta\\in N(X)$. Therefore $c^T\\beta$ is identifiable exactly when $c^Th=0$ for every $h\\in N(X)$, or $c\\in N(X)^\\perp$.',
      'Nếu $X\\beta=X\\beta^{\\prime}$, thì $\\beta^{\\prime}-\\beta\\in N(X)$. Vì thế $c^T\\beta$ nhận diện được đúng khi $c^Th=0$ với mọi $h\\in N(X)$, tức $c\\in N(X)^\\perp$.'
    ]),
    steps: [
      bi(['If two coefficient vectors give the same output, subtract their equations to show their difference lies in the null space.', 'Nếu hai vector hệ số cho cùng đầu ra, trừ hai phương trình để thấy hiệu của chúng nằm trong kernel.']),
      bi(['The contrast changes by $c^Th$ along such a null direction $h$.', 'Tổ hợp thay đổi một lượng $c^Th$ theo hướng kernel $h$ đó.']),
      bi(['It is identifiable iff every such change is zero, equivalently iff $c$ is orthogonal to the entire null space.', 'Tổ hợp nhận diện được khi mọi thay đổi ấy bằng không, tương đương $c$ trực giao với toàn bộ kernel.'])
    ],
    primarySolution: [
      bi(['If $X\\beta=X\\beta^{\\prime}$, then $h=\\beta^{\\prime}-\\beta$ satisfies $Xh=0$, hence $h\\in N(X)$.', 'Nếu $X\\beta=X\\beta^{\\prime}$, thì $h=\\beta^{\\prime}-\\beta$ thỏa $Xh=0$, nên $h\\in N(X)$.']),
      bi(['The contrast changes by $c^T\\beta^{\\prime}-c^T\\beta=c^Th$.', 'Tổ hợp thay đổi một lượng $c^T\\beta^{\\prime}-c^T\\beta=c^Th$.']),
      bi(['It is constant over all coefficient vectors compatible with the data iff $c^Th=0$ for every null vector, which is exactly $c\\perp N(X)$.', 'Nó không đổi với mọi vector hệ số tương thích dữ liệu khi và chỉ khi $c^Th=0$ với mọi vector kernel, tức $c\\perp N(X)$.']),
      bi(['For $h=(1,-1,0)$, $(1,1,0)^Th=0$ so that contrast is identifiable; $(1,0,0)^Th=1$, so the second contrast is not.', 'Với $h=(1,-1,0)$, $(1,1,0)^Th=0$ nên tổ hợp thứ nhất nhận diện được; $(1,0,0)^Th=1$ nên tổ hợp thứ hai không nhận diện được.'])
    ],
    companions: [
      q(
        ['Suppose $N(X)=\\operatorname{span}\\{(2,-1)\\}$ in $\\mathbb R^2$. Characterize all identifiable contrasts $c^T\\beta$ and test $c=(1,2)$ and $d=(1,0)$.', 'Giả sử $N(X)=\\operatorname{span}\\{(2,-1)\\}$ trong $\\mathbb R^2$. Mô tả mọi tổ hợp nhận diện được $c^T\\beta$ rồi kiểm tra $c=(1,2)$ và $d=(1,0)$.'],
        [
          ['Write $c=(c_1,c_2)$. Orthogonality to the kernel generator requires $2c_1-c_2=0$.', 'Viết $c=(c_1,c_2)$. Tính trực giao với vector sinh kernel đòi hỏi $2c_1-c_2=0$.'],
          ['Thus $c_2=2c_1$, so all identifiable contrasts have coefficient vectors $c=t(1,2)$.', 'Vì vậy $c_2=2c_1$, nên mọi tổ hợp nhận diện được có vector hệ số $c=t(1,2)$.'],
          ['The vector $(1,2)$ satisfies the condition, while $(1,0)$ has dot product $2$ with $(2,-1)$ and is not identifiable.', 'Vector $(1,2)$ thỏa điều kiện, còn $(1,0)$ có tích vô hướng $2$ với $(2,-1)$ nên không nhận diện được.']
        ]
      ),
      q(
        ['If $N(X)=\\operatorname{span}\\{(1,1,0),(0,1,1)\\}$, find a basis for the identifiable contrast vectors.', 'Nếu $N(X)=\\operatorname{span}\\{(1,1,0),(0,1,1)\\}$, hãy tìm một cơ sở cho các vector tổ hợp nhận diện được.'],
        [
          ['Let $c=(c_1,c_2,c_3)$ and require orthogonality to each generator: $c_1+c_2=0$ and $c_2+c_3=0$.', 'Đặt $c=(c_1,c_2,c_3)$ và yêu cầu trực giao với từng vector sinh: $c_1+c_2=0$ và $c_2+c_3=0$.'],
          ['Set $c_2=-c_1$; the second equation gives $c_3=c_1$. Hence $c=t(1,-1,1)$.', 'Đặt $c_2=-c_1$; phương trình thứ hai cho $c_3=c_1$. Do đó $c=t(1,-1,1)$.'],
          ['The vector $(1,-1,1)$ spans the orthogonal complement and is a basis of all identifiable contrasts.', 'Vector $(1,-1,1)$ sinh không gian trực giao và là cơ sở của mọi tổ hợp nhận diện được.']
        ]
      ),
      q(
        ['For $X=\\begin{bmatrix}1&1&0\\\\0&0&1\\end{bmatrix}$, identify all coefficient contrasts determined by $X\\beta$.', 'Với $X=\\begin{bmatrix}1&1&0\\\\0&0&1\\end{bmatrix}$, hãy xác định mọi tổ hợp hệ số được quyết định bởi $X\\beta$.'],
        [
          ['Solving $Xh=0$ gives $h_1+h_2=0$ and $h_3=0$, so $N(X)=\\operatorname{span}\\{(1,-1,0)\\}$.', 'Giải $Xh=0$ cho $h_1+h_2=0$ và $h_3=0$, nên $N(X)=\\operatorname{span}\\{(1,-1,0)\\}$.'],
          ['A contrast $c=(c_1,c_2,c_3)$ is identifiable iff $c_1-c_2=0$, so $c_1=c_2$ while $c_3$ is unrestricted.', 'Tổ hợp $c=(c_1,c_2,c_3)$ nhận diện được khi và chỉ khi $c_1-c_2=0$, nên $c_1=c_2$ còn $c_3$ tùy ý.'],
          ['Thus the identifiable space is spanned by $(1,1,0)$ and $(0,0,1)$; the output directly gives $\\beta_1+\\beta_2$ and $\\beta_3$.', 'Vậy không gian nhận diện được sinh bởi $(1,1,0)$ và $(0,0,1)$; đầu ra trực tiếp cho $\\beta_1+\\beta_2$ và $\\beta_3$.']
        ]
      )
    ],
    reviewNote: 'Checked the null direction (1,-1,0): the first proposed contrast has dot product zero and the second has dot product one. This criterion covers every compatible coefficient vector.',
    sourceIds: ['f-1806sc']
  },
  'f-w005-e5': {
    application: bi([
      'A nonzero kernel direction lets a consistent linear system move between distinct solutions without changing its output.',
      'Một hướng kernel khác không cho phép hệ tuyến tính tương thích di chuyển giữa các nghiệm khác nhau mà vẫn giữ nguyên đầu ra.'
    ]),
    formula: bi([
      'For $A\\in\\mathbb R^{m\\times n}$, $Ax=b$ has a unique solution iff it is consistent and $N(A)=\\{0\\}$, equivalently iff $A$ has full column rank. If consistent, every solution is $x_0+h$ with $h\\in N(A)$.',
      'Với $A\\in\\mathbb R^{m\\times n}$, $Ax=b$ có nghiệm duy nhất khi và chỉ khi hệ tương thích và $N(A)=\\{0\\}$, tương đương $A$ đủ hạng cột. Nếu tương thích, mọi nghiệm có dạng $x_0+h$ với $h\\in N(A)$.'
    ]),
    steps: [
      bi(['Apply rank–nullity to the domain dimension to determine whether the kernel contains nonzero vectors.', 'Áp dụng hạng–kernel theo số chiều miền để xác định kernel có chứa vector khác không hay không.']),
      bi(['If $x_0$ solves the system, add a kernel vector $h$ and check $A(x_0+h)=b$.', 'Nếu $x_0$ là nghiệm, cộng vector kernel $h$ rồi kiểm tra $A(x_0+h)=b$.']),
      bi(['Separate the inconsistent case (no solutions) from the consistent case; a nonzero kernel makes the latter nonunique.', 'Tách trường hợp không tương thích (vô nghiệm) khỏi trường hợp tương thích; kernel khác không khiến trường hợp sau không duy nhất.'])
    ],
    primarySolution: [
      bi(['The domain has dimension $4$ and rank is $2$, so rank–nullity gives nullity $4-2=2$.', 'Miền có số chiều $4$ và hạng bằng $2$, nên hạng–kernel cho số chiều kernel $4-2=2$.']),
      bi(['Thus there is a nonzero vector $h\\in N(A)$ with $Ah=0$.', 'Vì vậy tồn tại vector khác không $h\\in N(A)$ với $Ah=0$.']),
      bi(['If $x_0$ solves $Ax=b$, then for every real $t$, $A(x_0+th)=Ax_0+tAh=b$. These are distinct solutions as $t$ varies.', 'Nếu $x_0$ giải $Ax=b$, thì với mọi số thực $t$, $A(x_0+th)=Ax_0+tAh=b$. Khi $t$ thay đổi, các nghiệm này khác nhau.']),
      bi(['If the system is inconsistent there is no solution; otherwise the nonzero kernel creates infinitely many. It can never have exactly one solution.', 'Nếu hệ không tương thích thì vô nghiệm; nếu tương thích thì kernel khác không tạo vô số nghiệm. Hệ không thể có đúng một nghiệm.'])
    ],
    companions: [
      q(
        ['Let $A=\\begin{bmatrix}1&0\\\\0&1\\\\1&1\\end{bmatrix}$. Solve $Ax=(2,3,5)^T$ and determine whether the solution is unique; then check $b=(2,3,6)^T$.', 'Cho $A=\\begin{bmatrix}1&0\\\\0&1\\\\1&1\\end{bmatrix}$. Giải $Ax=(2,3,5)^T$ và xác định nghiệm có duy nhất không; sau đó kiểm tra $b=(2,3,6)^T$.'],
        [
          ['The first two rows force $x_1=2$ and $x_2=3$; the third row then gives $x_1+x_2=5$, so the system is consistent.', 'Hai hàng đầu buộc $x_1=2$ và $x_2=3$; hàng thứ ba cho $x_1+x_2=5$, nên hệ tương thích.'],
          ['The columns are independent, so rank is $2$, equal to the number of columns; the kernel is zero and the solution is unique.', 'Hai cột độc lập nên hạng bằng $2$, bằng số cột; kernel chỉ có vector không nên nghiệm duy nhất.'],
          ['For right side $(2,3,6)^T$, the first rows still force $(2,3)$ but the last row would require $5=6$; that system is inconsistent, not nonunique.', 'Với vế phải $(2,3,6)^T$, hai hàng đầu vẫn buộc $(2,3)$ nhưng hàng cuối đòi $5=6$; hệ đó không tương thích chứ không phải không duy nhất.']
        ]
      ),
      q(
        ['Solve $x_1+x_3=2$, $x_2+x_3=3$. Describe every solution and identify a nonzero null direction.', 'Giải $x_1+x_3=2$, $x_2+x_3=3$. Mô tả mọi nghiệm và chỉ ra một hướng kernel khác không.'],
        [
          ['Let $x_3=t$ be free. The equations give $x_1=2-t$ and $x_2=3-t$.', 'Đặt $x_3=t$ tự do. Hai phương trình cho $x_1=2-t$ và $x_2=3-t$.'],
          ['Thus $x=(2,3,0)+t(-1,-1,1)$ for every $t\\in\\mathbb R$.', 'Vậy $x=(2,3,0)+t(-1,-1,1)$ với mọi $t\\in\\mathbb R$.'],
          ['The vector $h=(-1,-1,1)$ satisfies both homogeneous equations, so it is a nonzero null direction and the consistent system has infinitely many solutions.', 'Vector $h=(-1,-1,1)$ thỏa cả hai phương trình thuần nhất, nên là hướng kernel khác không và hệ tương thích có vô số nghiệm.']
        ]
      ),
      q(
        ['Prove that a consistent system $Ax=b$ has exactly one solution if and only if $A$ has full column rank.', 'Chứng minh hệ tương thích $Ax=b$ có đúng một nghiệm khi và chỉ khi $A$ đủ hạng cột.'],
        [
          ['If $A$ has full column rank, rank–nullity gives $\\dim N(A)=0$, so the only null vector is $0$.', 'Nếu $A$ đủ hạng cột, định lý hạng–kernel cho $\\dim N(A)=0$, nên vector kernel duy nhất là $0$.'],
          ['For a consistent system choose one solution $x_0$. Any other solution $x$ satisfies $A(x-x_0)=0$, hence $x-x_0\\in N(A)$.', 'Với hệ tương thích, chọn một nghiệm $x_0$. Mọi nghiệm khác $x$ thỏa $A(x-x_0)=0$, nên $x-x_0\\in N(A)$.'],
          ['A zero kernel forces $x=x_0$, proving uniqueness. Conversely, a nonzero null vector would produce $x_0+h\\ne x_0$, so uniqueness implies full column rank.', 'Kernel không buộc $x=x_0$, chứng minh tính duy nhất. Ngược lại, vector kernel khác không tạo nghiệm $x_0+h\\ne x_0$, nên tính duy nhất kéo theo đủ hạng cột.']
        ]
      )
    ],
    reviewNote: 'Checked rank–nullity: four columns minus rank two gives a two-dimensional kernel. Any consistent solution can be shifted along a nonzero null vector.',
    sourceIds: ['f-1806sc']
  },
  'f-w006-e1': {
    application: bi([
      'Least squares chooses a fitted vector whose residual is orthogonal to every direction allowed by the model.',
      'Bình phương tối thiểu chọn vector khớp sao cho phần dư trực giao với mọi hướng mà mô hình cho phép.'
    ]),
    formula: bi([
      'For real $X\\in\\mathbb R^{m\\times p}$ and $y\\in\\mathbb R^m$, $J(\\beta)=\\|y-X\\beta\\|_2^2$ has gradient $\\nabla J=-2X^T(y-X\\beta)$. Its stationary points satisfy $X^TX\\beta=X^Ty$, equivalently $X^Tr=0$ for $r=y-X\\beta$; every stationary point is a global minimizer.',
      'Với $X\\in\\mathbb R^{m\\times p}$ và $y\\in\\mathbb R^m$ thực, $J(\\beta)=\\|y-X\\beta\\|_2^2$ có gradient $\\nabla J=-2X^T(y-X\\beta)$. Điểm dừng thỏa $X^TX\\beta=X^Ty$, tương đương $X^Tr=0$ với $r=y-X\\beta$; mọi điểm dừng đều là cực tiểu toàn cục.'
    ]),
    steps: [
      bi(['Set $r=y-X\\beta$ and expand the squared residual or differentiate it with respect to $\\beta$.', 'Đặt $r=y-X\\beta$ rồi khai triển bình phương phần dư hoặc lấy đạo hàm theo $\\beta$.']),
      bi(['Set the gradient to zero and rearrange to obtain the normal equations $X^TX\\beta=X^Ty$.', 'Cho gradient bằng không và sắp xếp lại để được phương trình chuẩn $X^TX\\beta=X^Ty$.']),
      bi(['Rewrite the equations as $X^Tr=0$; each entry says the residual is orthogonal to one design column, hence to their span.', 'Viết lại thành $X^Tr=0$; mỗi tọa độ nói phần dư trực giao với một cột thiết kế, nên trực giao với không gian sinh bởi chúng.'])
    ],
    primarySolution: [
      bi(['Expand $J(\\beta)=(y-X\\beta)^T(y-X\\beta)=y^Ty-2\\beta^TX^Ty+\\beta^TX^TX\\beta$.', 'Khai triển $J(\\beta)=(y-X\\beta)^T(y-X\\beta)=y^Ty-2\\beta^TX^Ty+\\beta^TX^TX\\beta$.']),
      bi(['Differentiating gives $\\nabla J=-2X^Ty+2X^TX\\beta=-2X^T(y-X\\beta)$.', 'Lấy đạo hàm được $\\nabla J=-2X^Ty+2X^TX\\beta=-2X^T(y-X\\beta)$.']),
      bi(['Setting the gradient to zero gives $X^TX\\beta=X^Ty$, which is equivalent to $X^T(y-X\\beta)=X^Tr=0$.', 'Cho gradient bằng không được $X^TX\\beta=X^Ty$, tương đương $X^T(y-X\\beta)=X^Tr=0$.']),
      bi(['The last equation says every column of $X$ has zero inner product with $r$, so $r\\perp\\operatorname{Col}(X)$. Since $J$ is a convex quadratic, every stationary point is a global minimizer.', 'Phương trình cuối nói mọi cột của $X$ có tích vô hướng bằng không với $r$, nên $r\\perp\\operatorname{Col}(X)$. Vì $J$ là hàm bậc hai lồi, mọi điểm dừng đều là cực tiểu toàn cục.'])
    ],
    companions: [
      q(
        ['Let $X=(1,1,1)^T$ and $y=(1,2,5)^T$. Solve the normal equation for the least-squares coefficient and verify residual orthogonality.', 'Cho $X=(1,1,1)^T$ và $y=(1,2,5)^T$. Giải phương trình chuẩn để tìm hệ số bình phương tối thiểu và kiểm tra phần dư trực giao.'],
        [
          ['Here $X^TX=3$ and $X^Ty=1+2+5=8$, so the normal equation gives $\\widehat\\beta=8/3$.', 'Ở đây $X^TX=3$ và $X^Ty=1+2+5=8$, nên phương trình chuẩn cho $\\widehat\\beta=8/3$.'],
          ['The fitted vector is $(8/3,8/3,8/3)^T$, so $r=(-5/3,-2/3,7/3)^T$.', 'Vector khớp là $(8/3,8/3,8/3)^T$, nên $r=(-5/3,-2/3,7/3)^T$.'],
          ['Compute $X^Tr=-5/3-2/3+7/3=0$; the residual is orthogonal to the model column.', 'Tính $X^Tr=-5/3-2/3+7/3=0$; phần dư trực giao với cột mô hình.']
        ]
      ),
      q(
        ['Let $X=(1,0,1)^T$ and $y=(2,2,0)^T$. Find the least-squares coefficient and residual, then verify $X^Tr=0$.', 'Cho $X=(1,0,1)^T$ và $y=(2,2,0)^T$. Tìm hệ số bình phương tối thiểu và phần dư, rồi kiểm tra $X^Tr=0$.'],
        [
          ['The normal equation is $(X^TX)\\beta=X^Ty$, with $X^TX=2$ and $X^Ty=2$, so $\\widehat\\beta=1$.', 'Phương trình chuẩn là $(X^TX)\\beta=X^Ty$, với $X^TX=2$ và $X^Ty=2$, nên $\\widehat\\beta=1$.'],
          ['Then $X\\widehat\\beta=(1,0,1)^T$ and $r=y-X\\widehat\\beta=(1,2,-1)^T$.', 'Khi đó $X\\widehat\\beta=(1,0,1)^T$ và $r=y-X\\widehat\\beta=(1,2,-1)^T$.'],
          ['The residual dot product is $X^Tr=1+(-1)=0$, which verifies the normal equation and hence least-squares optimality.', 'Tích vô hướng với phần dư là $X^Tr=1+(-1)=0$, xác nhận phương trình chuẩn và do đó tính tối ưu bình phương tối thiểu.']
        ]
      ),
      q(
        ['Suppose $r=y-X\\beta$ and $X^Tr=0$. Prove directly that $\\beta$ minimizes $\\|y-X\\beta\\|_2^2$.', 'Giả sử $r=y-X\\beta$ và $X^Tr=0$. Hãy chứng minh trực tiếp $\\beta$ tối thiểu hóa $\\|y-X\\beta\\|_2^2$.'],
        [
          ['Compare any other coefficient $\\beta+\\delta$: its residual is $r-X\\delta$.', 'So sánh với hệ số bất kỳ khác $\\beta+\\delta$: phần dư của nó là $r-X\\delta$.'],
          ['Expand $\\|r-X\\delta\\|_2^2=\\|r\\|_2^2-2\\delta^TX^Tr+\\|X\\delta\\|_2^2$.', 'Khai triển $\\|r-X\\delta\\|_2^2=\\|r\\|_2^2-2\\delta^TX^Tr+\\|X\\delta\\|_2^2$.'],
          ['Since $X^Tr=0$, the middle term vanishes and the objective difference is $\\|X\\delta\\|_2^2\\ge0$, so no competitor has smaller loss.', 'Vì $X^Tr=0$, số hạng giữa triệt tiêu và độ chênh mục tiêu là $\\|X\\delta\\|_2^2\\ge0$, nên không hệ số nào khác có loss nhỏ hơn.']
        ]
      )
    ],
    reviewNote: 'Checked the expansion and gradient signs; setting the gradient to zero yields exactly $X^Tr=0$. Positive semidefiniteness of $X^TX$ makes stationarity sufficient.',
    sourceIds: ['f-1806sc']
  },
  'f-w006-e2': {
    application: bi([
      'Projection finds the point on a model line closest to an observed vector, and the leftover residual is orthogonal to that line.',
      'Phép chiếu tìm điểm trên đường mô hình gần vector quan sát nhất; phần dư còn lại trực giao với đường đó.'
    ]),
    formula: bi([
      'For a nonzero vector $u\\in\\mathbb R^n$, the projection of $y$ onto $\\operatorname{span}\\{u\\}$ is $p=(u^Ty/u^Tu)u$. Then $r=y-p$ satisfies $u^Tr=0$ and $\\|y\\|_2^2=\\|p\\|_2^2+\\|r\\|_2^2$.',
      'Với vector khác không $u\\in\\mathbb R^n$, phép chiếu $y$ lên $\\operatorname{span}\\{u\\}$ là $p=(u^Ty/u^Tu)u$. Khi đó $r=y-p$ thỏa $u^Tr=0$ và $\\|y\\|_2^2=\\|p\\|_2^2+\\|r\\|_2^2$.'
    ]),
    steps: [
      bi(['Compute $u^Ty$ and the positive denominator $u^Tu$; their ratio is the projection coefficient.', 'Tính $u^Ty$ và mẫu dương $u^Tu$; tỷ số của chúng là hệ số chiếu.']),
      bi(['Multiply that coefficient by $u$ to get $p$, then set the residual $r=y-p$.', 'Nhân hệ số ấy với $u$ để được $p$, rồi đặt phần dư $r=y-p$.']),
      bi(['Verify $u^Tr=0$ and use orthogonality to split the squared norm by Pythagoras.', 'Kiểm tra $u^Tr=0$ rồi dùng trực giao để phân rã bình phương chuẩn theo định lý Pythagoras.'])
    ],
    primarySolution: [
      bi(['Compute $u^Ty=3$ and $u^Tu=2$, so the projection coefficient is $3/2$.', 'Tính $u^Ty=3$ và $u^Tu=2$, nên hệ số chiếu bằng $3/2$.']),
      bi(['Thus $p=(3/2)u=(3/2,3/2,0)$.', 'Vậy $p=(3/2)u=(3/2,3/2,0)$.']),
      bi(['Subtract to get $r=y-p=(1/2,-1/2,2)$, and check $u^Tr=1/2-1/2=0$.', 'Lấy hiệu được $r=y-p=(1/2,-1/2,2)$, và kiểm tra $u^Tr=1/2-1/2=0$.']),
      bi(['The squared lengths are $\\|y\\|_2^2=9$, $\\|p\\|_2^2=9/2$, and $\\|r\\|_2^2=9/2$, so $9=9/2+9/2$.', 'Các bình phương độ dài là $\\|y\\|_2^2=9$, $\\|p\\|_2^2=9/2$, và $\\|r\\|_2^2=9/2$, nên $9=9/2+9/2$.'])
    ],
    companions: [
      q(
        ['Project $y=(3,0)$ onto the line spanned by $u=(1,2)$. Find $p$ and $r$, then verify orthogonality and the Pythagorean norm split.', 'Chiếu $y=(3,0)$ lên đường sinh bởi $u=(1,2)$. Tìm $p$ và $r$, rồi kiểm tra tính trực giao và phân rã chuẩn Pythagoras.'],
        [
          ['Compute $u^Ty=3$ and $u^Tu=5$, giving $p=(3/5)u=(3/5,6/5)$.', 'Tính $u^Ty=3$ và $u^Tu=5$, nên $p=(3/5)u=(3/5,6/5)$.'],
          ['Then $r=y-p=(12/5,-6/5)$ and $u^Tr=12/5-12/5=0$.', 'Khi đó $r=y-p=(12/5,-6/5)$ và $u^Tr=12/5-12/5=0$.'],
          ['The squared norms are $\\|y\\|^2=9$, $\\|p\\|^2=9/5$, and $\\|r\\|^2=36/5$; indeed $9=9/5+36/5$.', 'Các bình phương chuẩn là $\\|y\\|^2=9$, $\\|p\\|^2=9/5$, và $\\|r\\|^2=36/5$; thật vậy $9=9/5+36/5$.']
        ]
      ),
      q(
        ['For fixed $u\\ne0$, show that the scalar $c=u^Ty/(u^Tu)$ minimizes $\\|y-cu\\|_2^2$ over all real $c$.', 'Với $u\\ne0$ cố định, hãy chứng minh vô hướng $c=u^Ty/(u^Tu)$ tối thiểu hóa $\\|y-cu\\|_2^2$ trên mọi $c$ thực.'],
        [
          ['Expand $\\phi(c)=\\|y-cu\\|_2^2=\\|y\\|_2^2-2c\\,u^Ty+c^2u^Tu$.', 'Khai triển $\\phi(c)=\\|y-cu\\|_2^2=\\|y\\|_2^2-2c\\,u^Ty+c^2u^Tu$.'],
          ['Since $u^Tu>0$, complete the square: $\\phi(c)=u^Tu(c-u^Ty/u^Tu)^2+\\|y\\|_2^2-(u^Ty)^2/(u^Tu)$.', 'Vì $u^Tu>0$, hoàn thành bình phương: $\\phi(c)=u^Tu(c-u^Ty/u^Tu)^2+\\|y\\|_2^2-(u^Ty)^2/(u^Tu)$.'],
          ['The first term is nonnegative and is zero exactly at $c=u^Ty/(u^Tu)$, proving that coefficient is the unique minimizer.', 'Số hạng đầu không âm và bằng không đúng tại $c=u^Ty/(u^Tu)$, chứng minh hệ số ấy là cực tiểu duy nhất.']
        ]
      ),
      q(
        ['Project $y=(1,0,0)$ onto the span of $u=(1,-1,1)$. Give the projection and residual and verify their orthogonality.', 'Chiếu $y=(1,0,0)$ lên không gian sinh bởi $u=(1,-1,1)$. Hãy nêu hình chiếu và phần dư rồi kiểm tra tính trực giao.'],
        [
          ['Here $u^Ty=1$ and $u^Tu=3$, so $p=(1/3)u=(1/3,-1/3,1/3)$.', 'Ở đây $u^Ty=1$ và $u^Tu=3$, nên $p=(1/3)u=(1/3,-1/3,1/3)$.'],
          ['Subtract to find $r=y-p=(2/3,1/3,-1/3)$.', 'Lấy hiệu được $r=y-p=(2/3,1/3,-1/3)$.'],
          ['The dot product is $u^Tr=2/3-1/3-1/3=0$, confirming the residual is perpendicular to the projected line.', 'Tích vô hướng là $u^Tr=2/3-1/3-1/3=0$, xác nhận phần dư vuông góc với đường được chiếu.']
        ]
      )
    ],
    reviewNote: 'Checked the dot products and squared norms: $u^Ty=3$, $u^Tu=2$, $u^Tr=0$, and $9/2+9/2=9$.',
    sourceIds: ['f-1806sc']
  },
  'f-w006-e3': {
    application: bi([
      'A rank-deficient design may have many coefficient vectors that fit equally well even though its projected fitted vector is unique.',
      'Thiết kế thiếu hạng có thể có nhiều vector hệ số khớp tốt như nhau dù vector giá trị khớp sau phép chiếu là duy nhất.'
    ]),
    formula: bi([
      'If $\\beta_0$ is one least-squares minimizer, every minimizer is in $\\beta_0+\\ker(X)$. The fitted vector is the unique orthogonal projection of $y$ onto $\\operatorname{Col}(X)$, even when coefficients are not unique.',
      'Nếu $\\beta_0$ là một nghiệm bình phương tối thiểu, mọi nghiệm đều thuộc $\\beta_0+\\ker(X)$. Vector khớp là phép chiếu trực giao duy nhất của $y$ lên $\\operatorname{Col}(X)$, kể cả khi hệ số không duy nhất.'
    ]),
    steps: [
      bi(['Identify the coefficient combinations that determine $X\\beta$; null vectors change coefficients without changing the fit.', 'Xác định tổ hợp hệ số quyết định $X\\beta$; vector kernel làm đổi hệ số mà không đổi giá trị khớp.']),
      bi(['Find one minimizing fitted vector by projecting $y$ onto the column space.', 'Tìm một vector khớp tối ưu bằng cách chiếu $y$ lên không gian cột.']),
      bi(['Add arbitrary null vectors to describe all minimizing coefficients, then distinguish coefficient uniqueness from fitted-vector uniqueness.', 'Cộng các vector kernel tùy ý để mô tả mọi hệ số tối ưu, rồi phân biệt tính duy nhất của hệ số với tính duy nhất của vector khớp.'])
    ],
    primarySolution: [
      bi(['Write $X\\beta=u(\\beta_1+2\\beta_2)$ and set $c=\\beta_1+2\\beta_2$. The fit depends only on this one scalar.', 'Viết $X\\beta=u(\\beta_1+2\\beta_2)$ và đặt $c=\\beta_1+2\\beta_2$. Giá trị khớp chỉ phụ thuộc một vô hướng này.']),
      bi(['Minimizing over coefficient pairs is equivalent to minimizing $\\|y-cu\\|_2^2$ over $c$. Since $u\\ne0$, the unique best scalar is $\\widehat c=u^Ty/(u^Tu)$.', 'Tối thiểu hóa theo cặp hệ số tương đương tối thiểu hóa $\\|y-cu\\|_2^2$ theo $c$. Vì $u\\ne0$, vô hướng tối ưu duy nhất là $\\widehat c=u^Ty/(u^Tu)$.']),
      bi(['Thus every pair satisfying $\\beta_1+2\\beta_2=\\widehat c$ minimizes the residual; for any $t$, set $(\\beta_1,\\beta_2)=(\\widehat c-2t,t)$.', 'Vì vậy mọi cặp thỏa $\\beta_1+2\\beta_2=\\widehat c$ đều tối thiểu hóa phần dư; với mọi $t$, đặt $(\\beta_1,\\beta_2)=(\\widehat c-2t,t)$.']),
      bi(['The fitted vector $\\widehat c u$ is the unique projection onto $\\operatorname{span}\\{u\\}$, so the fit is unique even though the coefficient pair is not.', 'Vector khớp $\\widehat c u$ là phép chiếu duy nhất lên $\\operatorname{span}\\{u\\}$, nên giá trị khớp duy nhất dù cặp hệ số không duy nhất.'])
    ],
    companions: [
      q(
        ['Let $X=\\begin{bmatrix}1&0&1\\\\0&1&1\\end{bmatrix}$ and $y=(2,3)^T$. Find all coefficient vectors that attain zero residual and show the fitted vector is the same for all of them.', 'Cho $X=\\begin{bmatrix}1&0&1\\\\0&1&1\\end{bmatrix}$ và $y=(2,3)^T$. Tìm mọi vector hệ số cho phần dư bằng không và chứng minh vector khớp giống nhau với tất cả chúng.'],
        [
          ['The equations are $\\beta_1+\\beta_3=2$ and $\\beta_2+\\beta_3=3$. Let $\\beta_3=t$.', 'Các phương trình là $\\beta_1+\\beta_3=2$ và $\\beta_2+\\beta_3=3$. Đặt $\\beta_3=t$.'],
          ['Then $\\beta=(2-t,3-t,t)$ for every real $t$, and direct substitution gives $X\\beta=(2,3)^T=y$.', 'Khi đó $\\beta=(2-t,3-t,t)$ với mọi $t$ thực, và thay trực tiếp cho $X\\beta=(2,3)^T=y$.'],
          ['The coefficient vectors vary along $(-1,-1,1)\\in\\ker(X)$, but every one has the same fitted vector $y$ and zero residual.', 'Các vector hệ số thay đổi theo $(-1,-1,1)\\in\\ker(X)$, nhưng tất cả đều có cùng vector khớp $y$ và phần dư bằng không.']
        ]
      ),
      q(
        ['A least-squares minimizer is $\\beta_0=(1,0,1)$ and $\\ker(X)=\\operatorname{span}\\{(1,-1,0)\\}$. Describe all minimizers and test whether $\\beta_1+\\beta_2$ is fixed.', 'Một nghiệm bình phương tối thiểu là $\\beta_0=(1,0,1)$ và $\\ker(X)=\\operatorname{span}\\{(1,-1,0)\\}$. Mô tả mọi nghiệm và kiểm tra $\\beta_1+\\beta_2$ có cố định không.'],
        [
          ['Every minimizer is $\\beta_0+t(1,-1,0)=(1+t,-t,1)$ for some $t\\in\\mathbb R$.', 'Mọi nghiệm là $\\beta_0+t(1,-1,0)=(1+t,-t,1)$ với một $t\\in\\mathbb R$.'],
          ['Its first two coordinates always sum to $(1+t)+(-t)=1$.', 'Hai tọa độ đầu luôn có tổng $(1+t)+(-t)=1$.'],
          ['Thus the coefficients vary, but the contrast $\\beta_1+\\beta_2$ is constant across all minimizers and is identifiable along the null direction.', 'Vậy các hệ số thay đổi nhưng tổ hợp $\\beta_1+\\beta_2$ không đổi giữa mọi nghiệm và nhận diện được theo hướng kernel.']
        ]
      ),
      q(
        ['Prove that two least-squares minimizing fitted vectors in a linear subspace $S$ must be equal.', 'Chứng minh hai vector khớp tối ưu bình phương tối thiểu trong không gian con tuyến tính $S$ phải bằng nhau.'],
        [
          ['Suppose $p,q\\in S$ both minimize distance to $y$. Their midpoint $m=(p+q)/2$ also lies in $S$.', 'Giả sử $p,q\\in S$ cùng tối thiểu hóa khoảng cách đến $y$. Trung điểm $m=(p+q)/2$ cũng thuộc $S$.'],
          ['The squared-distance identity gives $\\|y-m\\|^2=\\tfrac12\\|y-p\\|^2+\\tfrac12\\|y-q\\|^2-\\tfrac14\\|p-q\\|^2$.', 'Đẳng thức khoảng cách bình phương cho $\\|y-m\\|^2=\\tfrac12\\|y-p\\|^2+\\tfrac12\\|y-q\\|^2-\\tfrac14\\|p-q\\|^2$.'],
          ['If $p\\ne q$, the last term is strictly negative while the first two terms equal the minimum, making $m$ closer than a minimizer; contradiction. Hence $p=q$.', 'Nếu $p\\ne q$, số hạng cuối âm nghiêm ngặt còn hai số hạng đầu bằng mức tối thiểu, khiến $m$ gần hơn một nghiệm tối ưu; mâu thuẫn. Vậy $p=q$.']
        ]
      )
    ],
    reviewNote: 'Checked the collapsed scalar $c=\\beta_1+2\\beta_2$ and its unique projection coefficient. The coefficient solutions form a line, while the fitted vector is unique.',
    sourceIds: ['f-1806sc']
  },
  'f-w006-e4': {
    application: bi([
      'A projection matrix maps observations into a model subspace, leaves points in that subspace unchanged, and gives an orthogonal residual.',
      'Ma trận chiếu ánh xạ dữ liệu vào không gian con mô hình, giữ nguyên điểm vốn ở trong đó và tạo phần dư trực giao.'
    ]),
    formula: bi([
      'If $X\\in\\mathbb R^{n\\times p}$ has full column rank, then $P=X(X^TX)^{-1}X^T$ is defined and satisfies $P^T=P$ and $P^2=P$. Its image is $\\operatorname{Col}(X)$, and it is the orthogonal projection onto that space.',
      'Nếu $X\\in\\mathbb R^{n\\times p}$ đủ hạng cột, thì $P=X(X^TX)^{-1}X^T$ xác định và thỏa $P^T=P$ cùng $P^2=P$. Ảnh của nó là $\\operatorname{Col}(X)$, và nó là phép chiếu trực giao lên không gian đó.'
    ]),
    steps: [
      bi(['Full column rank makes $X^TX$ invertible and symmetric, so its inverse is symmetric.', 'Hạng cột đầy đủ làm $X^TX$ khả nghịch và đối xứng, nên nghịch đảo của nó cũng đối xứng.']),
      bi(['Transpose the product to prove $P^T=P$, then multiply two copies and cancel $X^TX$ to get $P^2=P$.', 'Chuyển vị tích để chứng minh $P^T=P$, rồi nhân hai bản và rút gọn $X^TX$ để được $P^2=P$.']),
      bi(['Symmetry and idempotence together imply the image is orthogonal to the residual space, giving the geometric projection.', 'Đối xứng và lũy đẳng kết hợp cho ảnh trực giao với không gian phần dư, tạo nên phép chiếu hình học.'])
    ],
    primarySolution: [
      bi(['Full column rank implies $X^TX$ is invertible. It is symmetric, so $(X^TX)^{-1}$ is symmetric too.', 'Hạng cột đầy đủ suy ra $X^TX$ khả nghịch. Ma trận này đối xứng nên $(X^TX)^{-1}$ cũng đối xứng.']),
      bi(['Transpose $P=X(X^TX)^{-1}X^T$ and reverse the factor order; using symmetry of the middle inverse gives $P^T=P$.', 'Chuyển vị $P=X(X^TX)^{-1}X^T$ và đảo thứ tự các thừa số; nhờ nghịch đảo giữa đối xứng, được $P^T=P$.']),
      bi(['Multiply: $P^2=X(X^TX)^{-1}(X^TX)(X^TX)^{-1}X^T=P$, proving idempotence.', 'Nhân ma trận: $P^2=X(X^TX)^{-1}(X^TX)(X^TX)^{-1}X^T=P$, chứng minh tính lũy đẳng.']),
      bi(['Idempotence means a second projection changes nothing; symmetry makes the residual orthogonal to $\\operatorname{Col}(X)$, so this is the orthogonal projection.', 'Tính lũy đẳng nghĩa là chiếu lần nữa không làm đổi kết quả; đối xứng khiến phần dư trực giao với $\\operatorname{Col}(X)$, nên đây là phép chiếu trực giao.'])
    ],
    companions: [
      q(
        ['For $X=(1,1)^T$, compute $P=X(X^TX)^{-1}X^T$, verify symmetry and idempotence, and find $P(2,0)^T$.', 'Với $X=(1,1)^T$, hãy tính $P=X(X^TX)^{-1}X^T$, kiểm tra đối xứng và lũy đẳng, rồi tính $P(2,0)^T$.'],
        [
          ['Since $X^TX=2$, $P=\\frac12\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$. This matrix is visibly symmetric.', 'Vì $X^TX=2$, $P=\\frac12\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$. Ma trận này hiển nhiên đối xứng.'],
          ['Multiplying gives $P^2=\\frac14\\begin{bmatrix}2&2\\\\2&2\\end{bmatrix}=P$.', 'Nhân ma trận được $P^2=\\frac14\\begin{bmatrix}2&2\\\\2&2\\end{bmatrix}=P$.'],
          ['Apply it to $(2,0)^T$: $P(2,0)^T=(1,1)^T$, the closest point on the line $\\operatorname{span}\\{(1,1)\\}$.', 'Áp dụng cho $(2,0)^T$: $P(2,0)^T=(1,1)^T$, là điểm gần nhất trên đường $\\operatorname{span}\\{(1,1)\\}$.']
        ]
      ),
      q(
        ['Let $Q=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}$. Show $Q^2=Q$ but $Q$ is not an orthogonal projection.', 'Cho $Q=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}$. Chứng minh $Q^2=Q$ nhưng $Q$ không phải phép chiếu trực giao.'],
        [
          ['Direct multiplication gives $Q^2=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}=Q$, so $Q$ is idempotent.', 'Nhân trực tiếp được $Q^2=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}=Q$, nên $Q$ lũy đẳng.'],
          ['But $Q^T=\\begin{bmatrix}1&0\\\\1&0\\end{bmatrix}\\ne Q$, so it is not symmetric.', 'Nhưng $Q^T=\\begin{bmatrix}1&0\\\\1&0\\end{bmatrix}\\ne Q$, nên không đối xứng.'],
          ['It maps $(x,y)$ to $(x+y,0)$ along the horizontal direction; the residual $(-y,y)$ is not generally orthogonal to that image direction, so this is an oblique projection.', 'Nó ánh xạ $(x,y)$ thành $(x+y,0)$ theo hướng ngang; phần dư $(-y,y)$ nói chung không trực giao với hướng ảnh ấy, nên đây là phép chiếu xiên.']
        ]
      ),
      q(
        ['Prove that a real matrix $P$ with $P^T=P$ and $P^2=P$ is the orthogonal projection onto $\\operatorname{im}(P)$.', 'Chứng minh ma trận thực $P$ thỏa $P^T=P$ và $P^2=P$ là phép chiếu trực giao lên $\\operatorname{im}(P)$.'],
        [
          ['For any $x$, $Px\\in\\operatorname{im}(P)$ and $P(I-P)x=(P-P^2)x=0$, so $(I-P)x\\in\\ker(P)$.', 'Với mọi $x$, $Px\\in\\operatorname{im}(P)$ và $P(I-P)x=(P-P^2)x=0$, nên $(I-P)x\\in\\ker(P)$.'],
          ['If $u=Pa$ is in the image and $v\\in\\ker(P)$, then $u^Tv=a^TP^Tv=a^TPv=0$ using symmetry; hence image and kernel are orthogonal.', 'Nếu $u=Pa$ thuộc ảnh và $v\\in\\ker(P)$, thì $u^Tv=a^TP^Tv=a^TPv=0$ nhờ đối xứng; vì vậy ảnh và kernel trực giao.'],
          ['Every $x=Px+(I-P)x$ is therefore a sum of an image vector and an orthogonal kernel vector, exactly the orthogonal projection decomposition.', 'Mọi $x=Px+(I-P)x$ do đó là tổng của vector ảnh và vector kernel trực giao; đây chính là phân rã của phép chiếu trực giao.']
        ]
      )
    ],
    reviewNote: 'Checked the transpose and cancellation identities under the full-column-rank assumption; symmetry alone would not establish idempotence or orthogonal projection.',
    sourceIds: ['f-1806sc']
  },
  'f-w006-e5': {
    application: bi([
      'The Pythagorean error split separates unavoidable projection error from the extra error caused by choosing another model fit.',
      'Phân rã sai số Pythagoras tách sai số chiếu không tránh khỏi khỏi sai số tăng thêm khi chọn một kết quả khớp khác.'
    ]),
    formula: bi([
      'If $p$ is the orthogonal projection of $y$ onto a subspace $S$ and $q\\in S$, then $y-p\\perp p-q$ and $\\|y-q\\|_2^2=\\|y-p\\|_2^2+\\|p-q\\|_2^2$.',
      'Nếu $p$ là phép chiếu trực giao của $y$ lên không gian con $S$ và $q\\in S$, thì $y-p\\perp p-q$ và $\\|y-q\\|_2^2=\\|y-p\\|_2^2+\\|p-q\\|_2^2$.'
    ]),
    steps: [
      bi(['Rewrite the candidate residual as $y-q=(y-p)+(p-q)$.', 'Viết lại phần dư ứng viên thành $y-q=(y-p)+(p-q)$.']),
      bi(['The projection residual $y-p$ is orthogonal to $S$, while $p-q\\in S$, so the cross inner product vanishes.', 'Phần dư chiếu $y-p$ trực giao với $S$, còn $p-q\\in S$, nên tích vô hướng chéo bằng không.']),
      bi(['Expand the squared norm; the remaining extra term $\\|p-q\\|_2^2$ measures how far the candidate is from the projection.', 'Khai triển bình phương chuẩn; số hạng tăng thêm $\\|p-q\\|_2^2$ đo khoảng cách ứng viên đến hình chiếu.'])
    ],
    primarySolution: [
      bi(['Because $p,q\\in S$, their difference $p-q$ also lies in $S$.', 'Vì $p,q\\in S$, hiệu $p-q$ cũng nằm trong $S$.']),
      bi(['Write $y-q=(y-p)+(p-q)$ and expand its squared norm.', 'Viết $y-q=(y-p)+(p-q)$ rồi khai triển bình phương chuẩn.']),
      bi(['The cross term is zero because $y-p\\perp S$ and $p-q\\in S$, giving $\\|y-q\\|^2=\\|y-p\\|^2+\\|p-q\\|^2$.', 'Số hạng chéo bằng không vì $y-p\\perp S$ và $p-q\\in S$, nên $\\|y-q\\|^2=\\|y-p\\|^2+\\|p-q\\|^2$.']),
      bi(['For $q\\ne p$, the extra squared distance is positive; thus $p$ has the unique smallest residual norm. Among candidates, the one closer to $p$ has smaller error.', 'Nếu $q\\ne p$, bình phương khoảng cách tăng thêm dương; vì vậy $p$ có chuẩn phần dư nhỏ nhất duy nhất. Trong các ứng viên, điểm gần $p$ hơn có sai số nhỏ hơn.'])
    ],
    companions: [
      q(
        ['Let $S=\\operatorname{span}\\{(1,1)\\}$ and $y=(2,0)$. The projection is $p=(1,1)$. Compare the squared residuals for $q_1=(2,2)$ and $q_2=(1/2,1/2)$ using the Pythagorean split.', 'Cho $S=\\operatorname{span}\\{(1,1)\\}$ và $y=(2,0)$. Hình chiếu là $p=(1,1)$. Hãy so sánh bình phương phần dư với $q_1=(2,2)$ và $q_2=(1/2,1/2)$ bằng phân rã Pythagoras.'],
        [
          ['The projection error is $\\|y-p\\|^2=\\|(1,-1)\\|^2=2$.', 'Sai số chiếu là $\\|y-p\\|^2=\\|(1,-1)\\|^2=2$.'],
          ['For $q_1$, $\\|p-q_1\\|^2=2$, so $\\|y-q_1\\|^2=2+2=4$.', 'Với $q_1$, $\\|p-q_1\\|^2=2$, nên $\\|y-q_1\\|^2=2+2=4$.'],
          ['For $q_2$, $\\|p-q_2\\|^2=1/2$, so $\\|y-q_2\\|^2=2+1/2=5/2$; the closer candidate has smaller residual.', 'Với $q_2$, $\\|p-q_2\\|^2=1/2$, nên $\\|y-q_2\\|^2=2+1/2=5/2$; ứng viên gần hình chiếu hơn có phần dư nhỏ hơn.']
        ]
      ),
      q(
        ['Use the error-splitting identity to prove that the orthogonal projection $p$ is the unique point of a subspace $S$ closest to $y$.', 'Dùng đẳng thức phân rã sai số để chứng minh hình chiếu trực giao $p$ là điểm duy nhất trong không gian con $S$ gần $y$ nhất.'],
        [
          ['For every $q\\in S$, the identity gives $\\|y-q\\|^2=\\|y-p\\|^2+\\|p-q\\|^2$.', 'Với mọi $q\\in S$, đẳng thức cho $\\|y-q\\|^2=\\|y-p\\|^2+\\|p-q\\|^2$.'],
          ['The second term is nonnegative, so no candidate has smaller error than $p$.', 'Số hạng thứ hai không âm, nên không ứng viên nào có sai số nhỏ hơn $p$.'],
          ['It is zero exactly when $q=p$; every other point has strictly larger error, proving uniqueness.', 'Số hạng ấy bằng không đúng khi $q=p$; mọi điểm khác có sai số lớn hơn nghiêm ngặt, chứng minh tính duy nhất.']
        ]
      ),
      q(
        ['Show that the Pythagorean split can fail if $p$ is not the orthogonal projection. Take $S=\\operatorname{span}\\{(1,0)\\}$, $y=(1,0)$, $p=(0,0)$, and $q=(1,0)$.', 'Chứng minh phân rã Pythagoras có thể sai nếu $p$ không phải hình chiếu trực giao. Lấy $S=\\operatorname{span}\\{(1,0)\\}$, $y=(1,0)$, $p=(0,0)$ và $q=(1,0)$.'],
        [
          ['Both $p,q$ lie in $S$, but $y-p=(1,0)$ is not orthogonal to $S$.', 'Cả $p,q$ đều thuộc $S$, nhưng $y-p=(1,0)$ không trực giao với $S$.'],
          ['The left side is $\\|y-q\\|^2=0$, whereas the proposed right side is $\\|y-p\\|^2+\\|p-q\\|^2=1+1=2$.', 'Vế trái là $\\|y-q\\|^2=0$, còn vế phải dự đoán là $\\|y-p\\|^2+\\|p-q\\|^2=1+1=2$.'],
          ['The unequal values show why $y-p\\perp S$ is necessary: without it, a nonzero cross term remains.', 'Hai giá trị khác nhau cho thấy $y-p\\perp S$ là điều kiện cần: nếu thiếu, số hạng chéo khác không còn lại.']
        ]
      )
    ],
    reviewNote: 'Checked the orthogonal decomposition and its cross term; the error identity assumes $p$ is the projection, so $y-p$ must be orthogonal to $S$.',
    sourceIds: ['f-1806sc']
  },
};

export default reviewed;
