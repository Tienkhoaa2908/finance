import {b, type ReviewedLesson} from './types';

const lessons: Record<string, ReviewedLesson> = {
  'm2-w061-e1': {
    application: b(String.raw`A production plan using two normalized resources is a point $(x_1,x_2)$ in the unit simplex: each activity is nonnegative and total resource use is at most one. Mixing two feasible plans should preserve feasibility.`, String.raw`Một kế hoạch sản xuất dùng hai nguồn lực đã chuẩn hóa là điểm $(x_1,x_2)$ trong đơn hình đơn vị: mỗi hoạt động không âm và tổng mức dùng nguồn lực không quá một. Trộn hai kế hoạch khả thi phải giữ được tính khả thi.`),
    formula: b(String.raw`A set $C\subseteq\mathbb R^d$ is convex iff $(1-t)x+ty\in C$ for every $x,y\in C$ and $t\in[0,1]$. Here $C=\{x\in\mathbb R^2:x_1\ge0,\ x_2\ge0,\ x_1+x_2\le1\}$.`, String.raw`Tập $C\subseteq\mathbb R^d$ lồi khi và chỉ khi $(1-t)x+ty\in C$ với mọi $x,y\in C$ và $t\in[0,1]$. Ở đây $C=\{x\in\mathbb R^2:x_1\ge0,\ x_2\ge0,\ x_1+x_2\le1\}$.`),
    steps: [
      b(String.raw`Choose arbitrary $x,y\in C$ and $t\in[0,1]$, then set $z=(1-t)x+ty$. The quantifiers matter: checking only a few points does not prove convexity.`, String.raw`Chọn $x,y\in C$ và $t\in[0,1]$ tùy ý, rồi đặt $z=(1-t)x+ty$. Các lượng từ rất quan trọng: kiểm tra vài điểm không chứng minh được tính lồi.`),
      b(String.raw`For each coordinate, $z_i=(1-t)x_i+ty_i\ge0$ because it is a nonnegative weighted average.`, String.raw`Với mỗi tọa độ, $z_i=(1-t)x_i+ty_i\ge0$ vì đây là trung bình có trọng số không âm.`),
      b(String.raw`Also $z_1+z_2=(1-t)(x_1+x_2)+t(y_1+y_2)\le(1-t)+t=1$, so all three defining inequalities hold and $z\in C$.`, String.raw`Đồng thời $z_1+z_2=(1-t)(x_1+x_2)+t(y_1+y_2)\le(1-t)+t=1$, nên cả ba bất đẳng thức xác định tập đều đúng và $z\in C$.`),
      b(String.raw`Every $x\in C$ has barycentric form $(1-x_1-x_2)(0,0)+x_1(1,0)+x_2(0,1)$ with nonnegative weights summing to one. Each listed point is extreme: a convex average giving a zero coordinate forces both averaged coordinates to be zero, and the sum constraint at $(1,0)$ or $(0,1)$ forces both inputs to that same vertex.`, String.raw`Mọi $x\in C$ có dạng barycentric $(1-x_1-x_2)(0,0)+x_1(1,0)+x_2(0,1)$ với các trọng số không âm có tổng bằng một. Mỗi điểm được liệt kê là điểm cực biên: trung bình lồi bằng không ở một tọa độ buộc cả hai tọa độ được trộn bằng không; tại $(1,0)$ hoặc $(0,1)$, đẳng thức ở ràng buộc tổng buộc hai điểm đầu vào đều là đỉnh đó.`),
    ],
    primarySolution: [
      b(String.raw`Let $x,y\in C$ and $t\in[0,1]$ be arbitrary, and define $z=(1-t)x+ty$.`, String.raw`Lấy tùy ý $x,y\in C$ và $t\in[0,1]$, rồi đặt $z=(1-t)x+ty$.`),
      b(String.raw`For $i=1,2$, $z_i=(1-t)x_i+ty_i\ge0$ since both endpoint coordinates are nonnegative and the weights are nonnegative.`, String.raw`Với $i=1,2$, ta có $z_i=(1-t)x_i+ty_i\ge0$ vì tọa độ ở hai đầu mút và các trọng số đều không âm.`),
      b(String.raw`The remaining constraint is preserved: $z_1+z_2=(1-t)(x_1+x_2)+t(y_1+y_2)\le(1-t)+t=1$. Thus $z\in C$, so $C$ is convex.`, String.raw`Ràng buộc còn lại cũng được bảo toàn: $z_1+z_2=(1-t)(x_1+x_2)+t(y_1+y_2)\le(1-t)+t=1$. Vậy $z\in C$, chứng minh $C$ lồi.`),
      b(String.raw`Finally, $(1-x_1-x_2),x_1,x_2$ are nonnegative weights summing to one, so $x=(1-x_1-x_2)(0,0)+x_1(1,0)+x_2(0,1)$. These three points are extreme: a convex representation of $(0,0)$ forces both nonnegative coordinates to vanish; for $(1,0)$ or $(0,1)$, equality in the sum bound and a zero coordinate force each represented point to equal that vertex.`, String.raw`Cuối cùng, $(1-x_1-x_2),x_1,x_2$ là các trọng số không âm có tổng bằng một, nên $x=(1-x_1-x_2)(0,0)+x_1(1,0)+x_2(0,1)$. Ba điểm này là điểm cực biên: biểu diễn lồi của $(0,0)$ buộc hai tọa độ không âm đều bằng không; với $(1,0)$ hoặc $(0,1)$, đẳng thức ở cận tổng cùng tọa độ bằng không buộc mỗi điểm được biểu diễn bằng đúng đỉnh đó.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Show directly that the interval $C=[-2,3]$ is convex, and identify its extreme points.`, String.raw`Chứng minh trực tiếp khoảng $C=[-2,3]$ là tập lồi và xác định các điểm cực biên.`),
        solution: [
          b(String.raw`Take arbitrary $x,y\in[-2,3]$ and $t\in[0,1]$, and put $z=(1-t)x+ty$.`, String.raw`Lấy $x,y\in[-2,3]$ và $t\in[0,1]$ tùy ý, rồi đặt $z=(1-t)x+ty$.`),
          b(String.raw`Using $-2\le x,y\le3$ and nonnegative weights, $-2=(1-t)(-2)+t(-2)\le z\le(1-t)3+t3=3$, so $z\in C$.`, String.raw`Do $-2\le x,y\le3$ và các trọng số không âm, $-2=(1-t)(-2)+t(-2)\le z\le(1-t)3+t3=3$, nên $z\in C$.`),
          b(String.raw`The endpoints are extreme: a weighted average of numbers at least $-2$ can equal $-2$ only when every positively weighted number is $-2$, and the analogous fact holds for $3$. Every interior point is a nontrivial average of the endpoints, so it is not extreme.`, String.raw`Hai đầu mút là điểm cực biên: trung bình có trọng số của các số không nhỏ hơn $-2$ chỉ có thể bằng $-2$ khi mọi số có trọng số dương đều bằng $-2$; lập luận tương tự áp dụng cho $3$. Mọi điểm trong khoảng là trung bình không tầm thường của hai đầu mút nên không cực biên.`),
        ],
      },
      {
        prompt: b(String.raw`Let $S=\{(x,y)\in\mathbb R^2:xy=0\}$, the union of the coordinate axes. Give two points in $S$ whose midpoint is not in $S$, and conclude whether $S$ is convex.`, String.raw`Cho $S=\{(x,y)\in\mathbb R^2:xy=0\}$, hợp của hai trục tọa độ. Hãy cho hai điểm trong $S$ có trung điểm không thuộc $S$ và kết luận $S$ có lồi hay không.`),
        solution: [
          b(String.raw`The points $a=(1,0)$ and $b=(0,1)$ both satisfy $xy=0$, so both lie in $S$.`, String.raw`Hai điểm $a=(1,0)$ và $b=(0,1)$ đều thỏa $xy=0$, nên cùng thuộc $S$.`),
          b(String.raw`Their midpoint is $m=\tfrac12a+\tfrac12b=(\tfrac12,\tfrac12)$.`, String.raw`Trung điểm của chúng là $m=\tfrac12a+\tfrac12b=(\tfrac12,\tfrac12)$.`),
          b(String.raw`At $m$, the product is $xy=\tfrac14\ne0$, so $m\notin S$. The defining segment condition fails, hence $S$ is not convex.`, String.raw`Tại $m$, tích tọa độ là $xy=\tfrac14\ne0$, do đó $m\notin S$. Điều kiện đoạn thẳng bị vi phạm nên $S$ không lồi.`),
        ],
      },
      {
        prompt: b(String.raw`Prove that $C=\{(x,y):x^2\le y\le1\}$ is convex by testing arbitrary convex combinations.`, String.raw`Chứng minh $C=\{(x,y):x^2\le y\le1\}$ là tập lồi bằng cách xét tổ hợp lồi tùy ý.`),
        solution: [
          b(String.raw`Take $(x_1,y_1),(x_2,y_2)\in C$ and $t\in[0,1]$. Set $x=(1-t)x_1+tx_2$ and $y=(1-t)y_1+ty_2$.`, String.raw`Lấy $(x_1,y_1),(x_2,y_2)\in C$ và $t\in[0,1]$. Đặt $x=(1-t)x_1+tx_2$ và $y=(1-t)y_1+ty_2$.`),
          b(String.raw`The upper bound is preserved: $y\le(1-t)1+t1=1$.`, String.raw`Cận trên được bảo toàn: $y\le(1-t)1+t1=1$.`),
          b(String.raw`For the lower bound, $y\ge(1-t)x_1^2+tx_2^2\ge((1-t)x_1+tx_2)^2=x^2$. The second inequality follows from $(1-t)x_1^2+tx_2^2-x^2=t(1-t)(x_1-x_2)^2\ge0$. Thus $(x,y)\in C$.`, String.raw`Với cận dưới, $y\ge(1-t)x_1^2+tx_2^2\ge((1-t)x_1+tx_2)^2=x^2$. Bất đẳng thức thứ hai theo $(1-t)x_1^2+tx_2^2-x^2=t(1-t)(x_1-x_2)^2\ge0$. Vậy $(x,y)\in C$.`),
        ],
      },
    ],
    reviewNote: 'Checked all three affine inequalities for arbitrary t including endpoints, and verified the simplex barycentric weights and extreme-point argument. Restriction: the proof uses this exact unit-simplex domain and its nonnegative-coordinate constraints.',
    sourceIds: ['o-boyd'],
  },
  'm2-w061-e2': {
    application: b(String.raw`A two-variable quadratic cost models a design choice with coupled marginal costs. A stationary design is globally best only after convexity is checked; positive curvature in every direction also rules out tied designs.`, String.raw`Chi phí bậc hai theo hai biến mô hình hóa lựa chọn thiết kế có các chi phí biên. Thiết kế dừng chỉ tối ưu toàn cục sau khi kiểm tra tính lồi; độ cong dương theo mọi hướng còn loại trừ các thiết kế đồng hạng.`),
    formula: b(String.raw`If $f$ is differentiable and convex on an open convex domain and $\nabla f(x^*)=0$, then $f(y)\ge f(x^*)$ for every feasible $y$. For a twice-differentiable quadratic, $\nabla^2f\succ0$ implies strict convexity and uniqueness.`, String.raw`Nếu $f$ khả vi và lồi trên miền mở lồi, đồng thời $\nabla f(x^*)=0$, thì $f(y)\ge f(x^*)$ với mọi $y$ khả thi. Với hàm bậc hai khả vi hai lần, $\nabla^2f\succ0$ suy ra lồi nghiêm và nghiệm duy nhất.`),
    steps: [
      b(String.raw`Differentiate the objective coordinatewise: for $f(x,y)=x^2+2y^2-2x+4y$, the gradient is $(2x-2,4y+4)$.`, String.raw`Lấy đạo hàm hàm mục tiêu theo từng tọa độ: với $f(x,y)=x^2+2y^2-2x+4y$, gradient là $(2x-2,4y+4)$.`),
      b(String.raw`Set each component to zero and solve; this gives the only stationary point $(1,-1)$.`, String.raw`Cho từng thành phần bằng không rồi giải; ta được điểm dừng duy nhất $(1,-1)$.`),
      b(String.raw`Compute $H=\operatorname{diag}(2,4)$. Its eigenvalues are positive, so $H\succ0$ and the quadratic is strictly convex on all of $\mathbb R^2$.`, String.raw`Tính $H=\operatorname{diag}(2,4)$. Các trị riêng dương nên $H\succ0$ và hàm bậc hai lồi nghiêm trên toàn $\mathbb R^2$.`),
      b(String.raw`The first-order convexity inequality certifies global minimality; strict convexity makes it unique. Direct substitution gives $f(1,-1)=-3$.`, String.raw`Bất đẳng thức lồi bậc nhất chứng nhận cực tiểu toàn cục; lồi nghiêm cho tính duy nhất. Thế trực tiếp được $f(1,-1)=-3$.`),
    ],
    primarySolution: [
      b(String.raw`The gradient is $\nabla f(x,y)=(2x-2,4y+4)$. Solving $\nabla f=0$ gives $x=1$ and $y=-1$.`, String.raw`Gradient là $\nabla f(x,y)=(2x-2,4y+4)$. Giải $\nabla f=0$ được $x=1$ và $y=-1$.`),
      b(String.raw`The Hessian is constant, $\nabla^2 f=\operatorname{diag}(2,4)\succ0$, so $f$ is strictly convex on $\mathbb R^2$.`, String.raw`Hessian không đổi, $\nabla^2 f=\operatorname{diag}(2,4)\succ0$, nên $f$ lồi nghiêm trên $\mathbb R^2$.`),
      b(String.raw`For any $z\in\mathbb R^2$, convexity gives $f(z)\ge f(x^*)+\nabla f(x^*)^T(z-x^*)=f(x^*)$ at $x^*=(1,-1)$, proving global optimality; strict convexity proves no other point ties.`, String.raw`Với mọi $z\in\mathbb R^2$, tính lồi cho $f(z)\ge f(x^*)+\nabla f(x^*)^T(z-x^*)=f(x^*)$ tại $x^*=(1,-1)$, chứng minh tối ưu toàn cục; lồi nghiêm chứng minh không có điểm khác đồng hạng.`),
      b(String.raw`Evaluating separately, $f(1,-1)=1+2-2-4=-3$.`, String.raw`Tính riêng giá trị hàm, $f(1,-1)=1+2-2-4=-3$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Find and certify the unique minimizer of $q(t)=3t^2-12t+7$ on $\mathbb R$. Give the minimum value.`, String.raw`Tìm và chứng nhận nghiệm cực tiểu duy nhất của $q(t)=3t^2-12t+7$ trên $\mathbb R$. Tính giá trị cực tiểu.`),
        solution: [
          b(String.raw`Differentiate: $q'(t)=6t-12$, so the stationary point is $t^*=2$.`, String.raw`Lấy đạo hàm: $q'(t)=6t-12$, nên điểm dừng là $t^*=2$.`),
          b(String.raw`Since $q''(t)=6>0$ for every $t$, $q$ is strictly convex, and its stationary point is the unique global minimizer.`, String.raw`Vì $q''(t)=6>0$ với mọi $t$, hàm $q$ lồi nghiêm; điểm dừng là cực tiểu toàn cục duy nhất.`),
          b(String.raw`Completing the square gives $q(t)=3(t-2)^2-5$, so $q(2)=-5$.`, String.raw`Hoàn thành bình phương được $q(t)=3(t-2)^2-5$, nên $q(2)=-5$.`),
        ],
      },
      {
        prompt: b(String.raw`Minimize $r(x,y)=x^2+xy+y^2$ on $\mathbb R^2$. Use the gradient and Hessian to prove the minimizer is unique.`, String.raw`Tối thiểu hóa $r(x,y)=x^2+xy+y^2$ trên $\mathbb R^2$. Dùng gradient và Hessian để chứng minh nghiệm duy nhất.`),
        solution: [
          b(String.raw`The gradient is $(2x+y,x+2y)$; solving both components equal to zero gives $x=y=0$.`, String.raw`Gradient là $(2x+y,x+2y)$; giải hệ hai thành phần bằng không được $x=y=0$.`),
          b(String.raw`The Hessian is $H=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, whose eigenvalues are $1$ and $3$. Hence $H\succ0$ and $r$ is strictly convex.`, String.raw`Hessian là $H=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, có các trị riêng $1$ và $3$. Do đó $H\succ0$ và $r$ lồi nghiêm.`),
          b(String.raw`The zero-gradient point is therefore the unique global minimizer, with $r(0,0)=0$.`, String.raw`Vì thế điểm gradient bằng không là cực tiểu toàn cục duy nhất, với $r(0,0)=0$.`),
        ],
      },
      {
        prompt: b(String.raw`Show that stationarity alone does not certify a minimum by examining $h(t)=t^3$ at $t=0$. Compare values on both sides.`, String.raw`Dùng $h(t)=t^3$ tại $t=0$ để chỉ ra riêng điều kiện dừng không chứng nhận cực tiểu. So sánh giá trị ở hai phía.`),
        solution: [
          b(String.raw`Differentiate to get $h'(t)=3t^2$, so $h'(0)=0$.`, String.raw`Lấy đạo hàm được $h'(t)=3t^2$, nên $h'(0)=0$.`),
          b(String.raw`For every $\varepsilon>0$, $h(-\varepsilon)=-\varepsilon^3<0=h(0)$, while $h(\varepsilon)=\varepsilon^3>h(0)$.`, String.raw`Với mọi $\varepsilon>0$, $h(-\varepsilon)=-\varepsilon^3<0=h(0)$, còn $h(\varepsilon)=\varepsilon^3>h(0)$.`),
          b(String.raw`Thus $0$ is neither a local minimum nor a local maximum. The convexity hypothesis in the global-minimum certificate cannot be omitted.`, String.raw`Do đó $0$ không là cực tiểu địa phương cũng không là cực đại địa phương. Không thể bỏ giả thiết lồi trong chứng chỉ cực tiểu toàn cục.`),
        ],
      },
    ],
    reviewNote: 'Checked the gradient root, Hessian eigenvalues (2 and 4), strict-convexity uniqueness, and the substituted value -3. Restriction: stationarity gives the global certificate here because the domain is all of R² and the objective is convex.',
    sourceIds: ['o-boyd'],
  },
  'm2-w061-e3': {
    application: b(String.raw`A design cost may penalize one measurement while ignoring another. Then the best cost can be stable across an entire family of designs, even though the parameter vector is not uniquely identified.`, String.raw`Chi phí thiết kế có thể phạt một phép đo nhưng bỏ qua phép đo khác. Khi đó chi phí tốt nhất ổn định trên cả một họ thiết kế, dù vectơ tham số không được xác định duy nhất.`),
    formula: b(String.raw`For $f(u,v)=(u-2)^2$, $\nabla f=(2(u-2),0)$ and $H=\operatorname{diag}(2,0)$. The minimizers are all $(u,v)$ with $u=2$; the zero eigenvalue marks a flat direction, not a negative-curvature direction.`, String.raw`Với $f(u,v)=(u-2)^2$, ta có $\nabla f=(2(u-2),0)$ và $H=\operatorname{diag}(2,0)$. Các nghiệm cực tiểu là mọi $(u,v)$ có $u=2$; trị riêng bằng không chỉ hướng phẳng, không phải hướng có độ cong âm.`),
    steps: [
      b(String.raw`Differentiate in both variables. Since $f$ does not depend on $v$, its partial derivative in that coordinate is zero everywhere.`, String.raw`Lấy đạo hàm theo cả hai biến. Vì $f$ không phụ thuộc $v$, đạo hàm riêng theo tọa độ đó bằng không ở mọi nơi.`),
      b(String.raw`Solve $\nabla f=0$ to obtain the full stationary set $u=2$ with arbitrary $v$, rather than selecting one representative.`, String.raw`Giải $\nabla f=0$ để được toàn bộ tập điểm dừng $u=2$ với $v$ tùy ý, thay vì chọn một đại diện.`),
      b(String.raw`Because $f=(u-2)^2\ge0$ and equals zero exactly on that line, this whole stationary set is the minimizer set.`, String.raw`Vì $f=(u-2)^2\ge0$ và chỉ bằng không trên đường đó, toàn bộ tập điểm dừng này là tập nghiệm cực tiểu.`),
      b(String.raw`The Hessian eigenvalues are $2$ and $0$: curvature penalizes changes in $u$, while moving along $(0,1)$ leaves both $f$ and its minimum value unchanged.`, String.raw`Hessian có trị riêng $2$ và $0$: độ cong phạt thay đổi theo $u$, còn dịch chuyển theo $(0,1)$ giữ nguyên cả $f$ lẫn giá trị cực tiểu.`),
    ],
    primarySolution: [
      b(String.raw`Compute $\nabla f(u,v)=(2(u-2),0)$. Stationarity requires $u=2$ and places no condition on $v$.`, String.raw`Tính $\nabla f(u,v)=(2(u-2),0)$. Điều kiện dừng yêu cầu $u=2$ và không đặt điều kiện nào lên $v$.`),
      b(String.raw`For every such point, $f(2,v)=0$, and $f(u,v)=(u-2)^2\ge0$ everywhere. Hence the complete minimizer set is $\{(2,v):v\in\mathbb R\}$.`, String.raw`Tại mọi điểm như vậy, $f(2,v)=0$, còn $f(u,v)=(u-2)^2\ge0$ ở mọi nơi. Vì thế tập nghiệm đầy đủ là $\{(2,v):v\in\mathbb R\}$.`),
      b(String.raw`The Hessian is $\begin{pmatrix}2&0\\0&0\end{pmatrix}$, with eigenvalues $2$ and $0$. Its null direction is $(0,1)$, along which the objective is constant, explaining nonuniqueness.`, String.raw`Hessian là $\begin{pmatrix}2&0\\0&0\end{pmatrix}$, có trị riêng $2$ và $0$. Hướng null là $(0,1)$, dọc theo đó hàm mục tiêu không đổi, giải thích tính không duy nhất.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(x,y)=(x+3)^2$, find the full minimizer set and the Hessian eigenvalues. Explain how they match.`, String.raw`Với $f(x,y)=(x+3)^2$, hãy tìm toàn bộ tập nghiệm cực tiểu và các trị riêng Hessian. Giải thích mối liên hệ.`),
        solution: [
          b(String.raw`The gradient is $(2(x+3),0)$, so stationary points satisfy $x=-3$ while $y$ is arbitrary.`, String.raw`Gradient là $(2(x+3),0)$, nên điểm dừng thỏa $x=-3$ còn $y$ tùy ý.`),
          b(String.raw`Since $f\ge0$ and vanishes exactly when $x=-3$, the minimizer set is $\{(-3,y):y\in\mathbb R\}$.`, String.raw`Vì $f\ge0$ và chỉ bằng không khi $x=-3$, tập nghiệm cực tiểu là $\{(-3,y):y\in\mathbb R\}$.`),
          b(String.raw`The Hessian $\operatorname{diag}(2,0)$ has eigenvalues $2,0$. The zero-curvature direction $(0,1)$ is tangent to the line of minimizers.`, String.raw`Hessian $\operatorname{diag}(2,0)$ có trị riêng $2,0$. Hướng độ cong bằng không $(0,1)$ tiếp tuyến với đường nghiệm cực tiểu.`),
        ],
      },
      {
        prompt: b(String.raw`Find the minimizers and Hessian eigenvalues of $g(x,y)=(2x-y+1)^2$. Is the minimizer unique?`, String.raw`Tìm các nghiệm cực tiểu và trị riêng Hessian của $g(x,y)=(2x-y+1)^2$. Nghiệm có duy nhất không?`),
        solution: [
          b(String.raw`The objective is a square, so its minimum is zero, attained exactly when $2x-y+1=0$, or $y=2x+1$.`, String.raw`Hàm mục tiêu là bình phương nên giá trị nhỏ nhất bằng không, đạt được đúng khi $2x-y+1=0$, hay $y=2x+1$.`),
          b(String.raw`Writing $a=(2,-1)^T$, the Hessian of $(a^Tz+1)^2$ is $2aa^T=\begin{pmatrix}8&-4\\-4&2\end{pmatrix}$.`, String.raw`Đặt $a=(2,-1)^T$, Hessian của $(a^Tz+1)^2$ là $2aa^T=\begin{pmatrix}8&-4\\-4&2\end{pmatrix}$.`),
          b(String.raw`This rank-one matrix has eigenvalues $2\|a\|^2=10$ and $0$. The null direction $(1,2)$ is parallel to $y=2x+1$, so the minimizers form a line and are not unique.`, String.raw`Ma trận hạng một này có trị riêng $2\|a\|^2=10$ và $0$. Hướng null $(1,2)$ song song với $y=2x+1$, nên nghiệm tạo thành một đường và không duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`For $h(x,y)=x^2+4y^2$, determine the unique minimizer and eigenvalues of the Hessian. What changes compared with a flat direction?`, String.raw`Với $h(x,y)=x^2+4y^2$, hãy xác định nghiệm cực tiểu duy nhất và các trị riêng Hessian. Điều gì khác khi không có hướng phẳng?`),
        solution: [
          b(String.raw`The gradient $(2x,8y)$ vanishes only at $(0,0)$.`, String.raw`Gradient $(2x,8y)$ chỉ bằng không tại $(0,0)$.`),
          b(String.raw`The Hessian is $\operatorname{diag}(2,8)$, whose eigenvalues are $2$ and $8$, both positive; the function is strictly convex.`, String.raw`Hessian là $\operatorname{diag}(2,8)$, có trị riêng $2$ và $8$, đều dương; hàm lồi nghiêm.`),
          b(String.raw`Also $h(x,y)\ge0$ with equality only at $(0,0)$, confirming the unique global minimum. There is no zero-curvature direction to create a tie.`, String.raw`Ngoài ra $h(x,y)\ge0$ và chỉ bằng không tại $(0,0)$, xác nhận cực tiểu toàn cục duy nhất. Không có hướng độ cong bằng không để tạo ra nhiều nghiệm đồng hạng.`),
        ],
      },
    ],
    reviewNote: 'Checked the full gradient-zero set, nonnegative objective values, Hessian rank, and the null direction. Restriction: the zero eigenvalue explains nonuniqueness for this quadratic; PSD alone does not guarantee a stationary point exists for every quadratic.',
    sourceIds: ['o-boyd'],
  },
  'm2-w061-e4': {
    application: b(String.raw`When an optimization variable must stay inside a restricted feasible region, a stationary candidate can be compared with any feasible alternative along the segment joining them. Convexity of the region is what keeps that comparison path valid.`, String.raw`Khi biến tối ưu phải nằm trong miền khả thi giới hạn, có thể so sánh ứng viên dừng với mọi phương án khả thi khác dọc đoạn nối chúng. Tính lồi của miền bảo đảm đường so sánh luôn hợp lệ.`),
    formula: b(String.raw`For differentiable convex $f$ on an open convex set $C$, $f(y)\ge f(x)+\nabla f(x)^T(y-x)$ for $x,y\in C$. Thus $\nabla f(x^*)=0$ implies a global minimum; no second derivative is required.`, String.raw`Với $f$ khả vi lồi trên tập mở lồi $C$, ta có $f(y)\ge f(x)+\nabla f(x)^T(y-x)$ với $x,y\in C$. Vì vậy $\nabla f(x^*)=0$ suy ra cực tiểu toàn cục; không cần đạo hàm bậc hai.`),
    steps: [
      b(String.raw`Fix an arbitrary feasible comparison point $y\in C$ and parameterize the segment by $\gamma(t)=x^*+t(y-x^*)$.`, String.raw`Cố định điểm so sánh khả thi $y\in C$ tùy ý và tham số hóa đoạn bằng $\gamma(t)=x^*+t(y-x^*)$.`),
      b(String.raw`Convexity of $C$ ensures $\gamma(t)\in C$ for every $t\in[0,1]$, so $\phi(t)=f(\gamma(t))$ is defined along the whole segment.`, String.raw`Tính lồi của $C$ bảo đảm $\gamma(t)\in C$ với mọi $t\in[0,1]$, nên $\phi(t)=f(\gamma(t))$ được xác định trên cả đoạn.`),
      b(String.raw`The first-order inequality for a differentiable convex function yields $f(y)\ge f(x^*)+\nabla f(x^*)^T(y-x^*)$.`, String.raw`Bất đẳng thức bậc nhất của hàm lồi khả vi cho $f(y)\ge f(x^*)+\nabla f(x^*)^T(y-x^*)$.`),
      b(String.raw`Using $\nabla f(x^*)=0$ gives $f(y)\ge f(x^*)$ for arbitrary $y$. If $C$ is nonconvex, the segment may leave $C$ and this comparison argument is unavailable.`, String.raw`Dùng $\nabla f(x^*)=0$ suy ra $f(y)\ge f(x^*)$ với $y$ tùy ý. Nếu $C$ không lồi, đoạn có thể rời khỏi $C$ và lập luận so sánh này không dùng được.`),
    ],
    primarySolution: [
      b(String.raw`Take an arbitrary $y\in C$ and define $\phi(t)=f(x^*+t(y-x^*))$ for $t\in[0,1]$. Convexity of $C$ keeps the entire segment in the domain.`, String.raw`Lấy $y\in C$ tùy ý và đặt $\phi(t)=f(x^*+t(y-x^*))$ với $t\in[0,1]$. Tính lồi của $C$ giữ toàn bộ đoạn trong miền xác định.`),
      b(String.raw`The restriction $\phi$ is convex and differentiable, with $\phi'(0)=\nabla f(x^*)^T(y-x^*)=0$. The one-dimensional first-order inequality gives $\phi(1)\ge\phi(0)+\phi'(0)$.`, String.raw`Hàm hạn chế $\phi$ lồi và khả vi, với $\phi'(0)=\nabla f(x^*)^T(y-x^*)=0$. Bất đẳng thức bậc nhất một chiều cho $\phi(1)\ge\phi(0)+\phi'(0)$.`),
      b(String.raw`Therefore $f(y)\ge f(x^*)$ for every $y\in C$, so $x^*$ is a global minimizer without any Hessian assumption.`, String.raw`Do đó $f(y)\ge f(x^*)$ với mọi $y\in C$, nên $x^*$ là cực tiểu toàn cục mà không cần giả thiết về Hessian.`),
      b(String.raw`If $C$ is nonconvex, some segment from $x^*$ to $y$ may leave the domain; then $\phi$ is not defined on all of $[0,1]$, so this proof cannot compare the endpoints.`, String.raw`Nếu $C$ không lồi, một số đoạn từ $x^*$ tới $y$ có thể rời miền; khi đó $\phi$ không xác định trên toàn $[0,1]$, nên chứng minh này không so sánh được hai đầu mút.`),
    ],
    companions: [
      {
        prompt: b(String.raw`On $C=\mathbb R$, let $f(x)=e^x-2x$. Find its stationary point and use convexity to prove it is the global minimizer.`, String.raw`Trên $C=\mathbb R$, cho $f(x)=e^x-2x$. Tìm điểm dừng và dùng tính lồi để chứng minh đó là cực tiểu toàn cục.`),
        solution: [
          b(String.raw`The derivative is $f'(x)=e^x-2$, so the unique stationary point solves $e^x=2$, giving $x^*=\ln2$.`, String.raw`Đạo hàm là $f'(x)=e^x-2$, nên điểm dừng duy nhất thỏa $e^x=2$, tức $x^*=\ln2$.`),
          b(String.raw`Since $f''(x)=e^x>0$ for every $x$, $f$ is strictly convex on the open convex domain $\mathbb R$.`, String.raw`Vì $f''(x)=e^x>0$ với mọi $x$, hàm $f$ lồi nghiêm trên miền mở lồi $\mathbb R$.`),
          b(String.raw`For every $y\in\mathbb R$, the first-order inequality at $x^*$ gives $f(y)\ge f(x^*)+f'(x^*)(y-x^*)=f(x^*)$; strict convexity makes the minimizer unique.`, String.raw`Với mọi $y\in\mathbb R$, bất đẳng thức bậc nhất tại $x^*$ cho $f(y)\ge f(x^*)+f'(x^*)(y-x^*)=f(x^*)$; lồi nghiêm làm nghiệm duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`On the open convex domain $C=(0,\infty)$, analyze $g(x)=x-\ln x$. Show that its stationary point is globally minimizing.`, String.raw`Trên miền mở lồi $C=(0,\infty)$, xét $g(x)=x-\ln x$. Chứng minh điểm dừng của hàm là cực tiểu toàn cục.`),
        solution: [
          b(String.raw`The derivative is $g'(x)=1-1/x$, so its only zero in $C$ is $x^*=1$.`, String.raw`Đạo hàm là $g'(x)=1-1/x$, nên nghiệm duy nhất trong $C$ là $x^*=1$.`),
          b(String.raw`For $x>0$, $g''(x)=1/x^2>0$, so $g$ is strictly convex on $C$.`, String.raw`Với $x>0$, $g''(x)=1/x^2>0$, nên $g$ lồi nghiêm trên $C$.`),
          b(String.raw`The first-order inequality gives $g(y)\ge g(1)+g'(1)(y-1)=1$ for every $y>0$. Hence $x=1$ is the unique global minimizer.`, String.raw`Bất đẳng thức bậc nhất cho $g(y)\ge g(1)+g'(1)(y-1)=1$ với mọi $y>0$. Vì vậy $x=1$ là cực tiểu toàn cục duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`Let $C=(-2,-1)\cup(1,2)$, $x^*=-3/2$, and $y=3/2$. Explain exactly why the segment proof comparing $x^*$ to $y$ cannot be used on this domain.`, String.raw`Cho $C=(-2,-1)\cup(1,2)$, $x^*=-3/2$ và $y=3/2$. Hãy giải thích chính xác vì sao không thể dùng chứng minh theo đoạn để so sánh $x^*$ với $y$ trên miền này.`),
        solution: [
          b(String.raw`Both endpoints lie in $C$, but their midpoint is $(x^*+y)/2=0$, which is not in $C$.`, String.raw`Cả hai đầu mút thuộc $C$, nhưng trung điểm là $(x^*+y)/2=0$, không thuộc $C$.`),
          b(String.raw`Thus the segment parameterization $\gamma(t)=x^*+t(y-x^*)$ leaves $C$ for intermediate values of $t$; in particular, it crosses the gap around zero.`, String.raw`Do đó tham số hóa đoạn $\gamma(t)=x^*+t(y-x^*)$ rời khỏi $C$ tại các giá trị $t$ ở giữa; cụ thể, đoạn đi qua khoảng trống quanh số không.`),
          b(String.raw`Consequently $f(\gamma(t))$ need not be defined throughout $[0,1]$. The segment-based proof has no valid path for this pair; this identifies a proof restriction, not by itself a counterexample to every possible optimality claim.`, String.raw`Vì vậy $f(\gamma(t))$ có thể không xác định trên toàn $[0,1]$. Chứng minh theo đoạn không có đường đi hợp lệ cho cặp điểm này; đây là giới hạn của chứng minh, tự nó không phải phản ví dụ cho mọi khẳng định tối ưu.`),
        ],
      },
    ],
    reviewNote: 'Checked the segment stays in C only under domain convexity, and the argument uses differentiability plus the first-order inequality without a Hessian. Restriction: on a nonconvex domain this proof may fail because the connecting path is undefined; no broader conclusion is inferred.',
    sourceIds: ['o-boyd'],
  },
  'm2-w061-e5': {
    application: b(String.raw`In model fitting, a zero gradient can mark a saddle or maximum when the loss is nonconvex. Separately, a convex loss can leave some parameters unidentified and have many equally good solutions; these are different failures to distinguish.`, String.raw`Trong khớp mô hình, gradient bằng không có thể chỉ điểm yên ngựa hoặc cực đại khi loss không lồi. Riêng loss lồi có thể không xác định một số tham số và có nhiều nghiệm tốt như nhau; cần phân biệt hai tình huống này.`),
    formula: b(String.raw`For an interior differentiable local extremum, $\nabla f(x^*)=0$ is necessary, not sufficient. Convexity plus stationarity implies global minimality; strict convexity on a convex domain implies at most one minimizer.`, String.raw`Tại cực trị địa phương nội khả vi, $\nabla f(x^*)=0$ là điều kiện cần, chưa đủ. Tính lồi cùng điều kiện dừng suy ra cực tiểu toàn cục; lồi nghiêm trên miền lồi suy ra nhiều nhất một nghiệm cực tiểu.`),
    steps: [
      b(String.raw`Use $f(x)=-x^2$ to test stationarity without convexity: calculate $f'(0)$, then compare the value at a different point.`, String.raw`Dùng $f(x)=-x^2$ để kiểm tra điều kiện dừng khi thiếu tính lồi: tính $f'(0)$ rồi so giá trị tại một điểm khác.`),
      b(String.raw`A lower value such as $f(1)=-1<f(0)=0$ directly disproves that $0$ is a global minimum; the negative second derivative also shows local maximality.`, String.raw`Giá trị thấp hơn như $f(1)=-1<f(0)=0$ trực tiếp bác bỏ việc $0$ là cực tiểu toàn cục; đạo hàm bậc hai âm còn cho thấy đó là cực đại địa phương.`),
      b(String.raw`For a different issue, inspect a convex objective that is flat on a set: every point in that set may minimize, so globality does not entail uniqueness.`, String.raw`Với vấn đề khác, xét hàm mục tiêu lồi phẳng trên một tập: mọi điểm của tập đó có thể là nghiệm cực tiểu, nên tối ưu toàn cục không đồng nghĩa duy nhất.`),
      b(String.raw`Name the missing hypothesis in each case: convexity supports globality, while strict convexity (or another identifying condition) supports uniqueness.`, String.raw`Nêu giả thiết còn thiếu ở từng trường hợp: tính lồi hỗ trợ kết luận toàn cục, còn lồi nghiêm (hoặc điều kiện nhận diện khác) hỗ trợ tính duy nhất.`),
    ],
    primarySolution: [
      b(String.raw`For $f(x)=-x^2$, $f'(x)=-2x$, so $f'(0)=0$.`, String.raw`Với $f(x)=-x^2$, ta có $f'(x)=-2x$, nên $f'(0)=0$.`),
      b(String.raw`But $f(1)=-1<0=f(0)$, so the stationary point $0$ is not a global minimizer; in fact $f''(0)=-2<0$ makes it a strict local maximum.`, String.raw`Nhưng $f(1)=-1<0=f(0)$, nên điểm dừng $0$ không là cực tiểu toàn cục; thực ra $f''(0)=-2<0$ khiến nó là cực đại địa phương nghiêm.`),
      b(String.raw`For $g(x)=0$ on $[0,1]$, convexity holds because every convex combination remains in the interval and both sides of the convexity inequality equal zero. Every $x\in[0,1]$ attains the same global minimum $0$.`, String.raw`Với $g(x)=0$ trên $[0,1]$, tính lồi đúng vì mọi tổ hợp lồi vẫn nằm trong khoảng và hai vế của bất đẳng thức lồi đều bằng không. Mọi $x\in[0,1]$ cùng đạt cực tiểu toàn cục $0$.`),
      b(String.raw`The first example shows why convexity is needed for a stationary point to certify global minimality; the second shows why convexity alone does not give uniqueness.`, String.raw`Ví dụ thứ nhất cho thấy cần tính lồi để điểm dừng chứng nhận cực tiểu toàn cục; ví dụ thứ hai cho thấy riêng tính lồi không cho nghiệm duy nhất.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $p(x)=x^4-2x^2$, verify that $x=0$ is stationary but not a minimum, and find points with lower values.`, String.raw`Với $p(x)=x^4-2x^2$, hãy kiểm tra $x=0$ là điểm dừng nhưng không phải cực tiểu, rồi tìm các điểm có giá trị thấp hơn.`),
        solution: [
          b(String.raw`Differentiate: $p'(x)=4x^3-4x=4x(x^2-1)$, so $p'(0)=0$.`, String.raw`Lấy đạo hàm: $p'(x)=4x^3-4x=4x(x^2-1)$, nên $p'(0)=0$.`),
          b(String.raw`At $x=1$ and $x=-1$, $p(\pm1)=1-2=-1$, while $p(0)=0$. Thus $0$ is not a global minimum.`, String.raw`Tại $x=1$ và $x=-1$, $p(\pm1)=1-2=-1$, còn $p(0)=0$. Do đó $0$ không là cực tiểu toàn cục.`),
          b(String.raw`Also $p''(0)=-4<0$, confirming a strict local maximum. The negative curvature is consistent with the failure of convexity near zero.`, String.raw`Ngoài ra $p''(0)=-4<0$, xác nhận cực đại địa phương nghiêm. Độ cong âm phù hợp với việc hàm không lồi quanh số không.`),
        ],
      },
      {
        prompt: b(String.raw`Let $q(x)=\max\{0,x\}$ on $[-1,1]$. Prove $q$ is convex and determine its complete minimizer set.`, String.raw`Cho $q(x)=\max\{0,x\}$ trên $[-1,1]$. Chứng minh $q$ lồi và xác định đầy đủ tập nghiệm cực tiểu.`),
        solution: [
          b(String.raw`The functions $0$ and $x$ are affine, and their pointwise maximum is convex: for $a,b$ in the domain, each affine value at $(1-t)a+tb$ is at most $(1-t)q(a)+tq(b)$. Taking the maximum preserves that bound.`, String.raw`Hai hàm $0$ và $x$ là affine, và giá trị lớn nhất từng điểm của chúng là hàm lồi: với $a,b$ trong miền, mỗi giá trị affine tại $(1-t)a+tb$ không vượt quá $(1-t)q(a)+tq(b)$. Lấy giá trị lớn nhất vẫn giữ được cận đó.`),
          b(String.raw`For every $x\in[-1,0]$, $q(x)=0$. For $x>0$, $q(x)=x>0$.`, String.raw`Với mọi $x\in[-1,0]$, $q(x)=0$. Với $x>0$, $q(x)=x>0$.`),
          b(String.raw`Since $q(x)\ge0$ throughout the domain, the full minimizer set is $[-1,0]$, demonstrating that a convex function need not have a unique minimum.`, String.raw`Vì $q(x)\ge0$ trên toàn miền, tập nghiệm cực tiểu đầy đủ là $[-1,0]$, cho thấy hàm lồi không nhất thiết có cực tiểu duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`On $[-2,2]$, find the minimizers of $r(x)=|x-1|$ and explain why its unique minimum does not come from differentiability at the minimizer.`, String.raw`Trên $[-2,2]$, hãy tìm nghiệm cực tiểu của $r(x)=|x-1|$ và giải thích vì sao cực tiểu duy nhất không xuất phát từ tính khả vi tại nghiệm.`),
        solution: [
          b(String.raw`Absolute value is nonnegative, and $r(x)=0$ exactly when $x=1$. Thus $x=1$ is the unique global minimizer.`, String.raw`Giá trị tuyệt đối không âm và $r(x)=0$ đúng khi $x=1$. Do đó $x=1$ là cực tiểu toàn cục duy nhất.`),
          b(String.raw`For $x<1$, $r(x)=1-x$ has derivative $-1$; for $x>1$, $r(x)=x-1$ has derivative $1$. The one-sided derivatives at $1$ disagree, so $r'(1)$ does not exist.`, String.raw`Với $x<1$, $r(x)=1-x$ có đạo hàm $-1$; với $x>1$, $r(x)=x-1$ có đạo hàm $1$. Hai đạo hàm một phía tại $1$ khác nhau, nên $r'(1)$ không tồn tại.`),
          b(String.raw`The function is convex as an absolute value of an affine expression. A smooth gradient equation is unavailable at the minimizer, so a subgradient condition is appropriate instead.`, String.raw`Hàm lồi vì là giá trị tuyệt đối của biểu thức affine. Phương trình gradient khả vi không dùng được tại nghiệm, nên điều kiện dưới vi phân phù hợp hơn.`),
        ],
      },
    ],
    reviewNote: 'Checked f′(0)=0 and f(1)<f(0), and verified the flat convex example has every point minimizing. Restriction: stationarity is necessary only for an interior differentiable extremum; convexity gives globality, while uniqueness needs an additional condition.',
    sourceIds: ['o-boyd'],
  },
  'm2-w062-e1': {
    application: b(String.raw`At a sharp corner in a convex loss, there is no single tangent slope. The subdifferential records every slope of a global affine lower support, which lets an optimization condition represent the kink without pretending a derivative exists.`, String.raw`Tại góc nhọn của loss lồi, không có một hệ số góc tiếp tuyến duy nhất. Dưới vi phân ghi lại mọi hệ số góc của đường affine đỡ phía dưới toàn cục, nhờ đó điều kiện tối ưu biểu diễn được điểm gấp khúc mà không giả vờ đạo hàm tồn tại.`),
    formula: b(String.raw`For convex $f:\mathbb R\to(-\infty,\infty]$, $g\in\partial f(x)$ iff $f(y)\ge f(x)+g(y-x)$ for every $y$. At the kink of $f(x)=|x|$, $\partial f(0)=[-1,1]$.`, String.raw`Với $f:\mathbb R\to(-\infty,\infty]$ lồi, $g\in\partial f(x)$ khi và chỉ khi $f(y)\ge f(x)+g(y-x)$ với mọi $y$. Tại điểm gấp khúc của $f(x)=|x|$, $\partial f(0)=[-1,1]$.`),
    steps: [
      b(String.raw`Set $x=0$ and $f(y)=|y|$ in the defining support inequality. A candidate slope $g$ must satisfy $|y|\ge gy$ for every real $y$.`, String.raw`Đặt $x=0$ và $f(y)=|y|$ trong bất đẳng thức đỡ định nghĩa. Hệ số góc ứng viên $g$ phải thỏa $|y|\ge gy$ với mọi số thực $y$.`),
      b(String.raw`For $y>0$, divide by $y$ to get $g\le1$. For $y<0$, dividing reverses the inequality and gives $g\ge-1$.`, String.raw`Với $y>0$, chia cho $y$ được $g\le1$. Với $y<0$, phép chia đảo chiều bất đẳng thức và cho $g\ge-1$.`),
      b(String.raw`Conversely, if $-1\le g\le1$, then for $y\ge0$, $gy\le y=|y|$, and for $y<0$, $gy\le -y=|y|$. Hence every such slope is a support and no other slope works.`, String.raw`Ngược lại, nếu $-1\le g\le1$, thì với $y\ge0$, $gy\le y=|y|$, còn với $y<0$, $gy\le-y=|y|$. Vậy mọi hệ số góc như thế đều là đường đỡ và không có hệ số nào khác dùng được.`),
    ],
    primarySolution: [
      b(String.raw`At $x=0$, the subgradient condition is $|y|\ge gy$ for every $y\in\mathbb R$, since $f(0)=0$.`, String.raw`Tại $x=0$, điều kiện dưới vi phân là $|y|\ge gy$ với mọi $y\in\mathbb R$, vì $f(0)=0$.`),
      b(String.raw`For $y>0$, this inequality requires $g\le1$. For $y<0$, it requires $g\ge-1$. These tests show that any subgradient lies in $[-1,1]$.`, String.raw`Với $y>0$, bất đẳng thức yêu cầu $g\le1$. Với $y<0$, nó yêu cầu $g\ge-1$. Hai phép thử cho thấy mọi dưới vi phân phải thuộc $[-1,1]$.`),
      b(String.raw`If $g\in[-1,1]$, then $gy\le|y|$ for both signs of $y$; equality also holds at $y=0$. Thus the defining inequality holds for every $y$, proving $\partial|\cdot|(0)=[-1,1]$.`, String.raw`Nếu $g\in[-1,1]$, thì $gy\le|y|$ với cả hai dấu của $y$; tại $y=0$ cũng có đẳng thức. Vậy bất đẳng thức định nghĩa đúng với mọi $y$, chứng minh $\partial|\cdot|(0)=[-1,1]$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Derive the subdifferential at the kink of $f(x)=2|x-1|$ directly from the support inequality.`, String.raw`Hãy suy ra dưới vi phân tại điểm gấp khúc của $f(x)=2|x-1|$ trực tiếp từ bất đẳng thức đỡ.`),
        solution: [
          b(String.raw`At $x=1$, $f(1)=0$, so a slope $g$ is valid exactly when $2|y-1|\ge g(y-1)$ for every $y$. Set $z=y-1$ to obtain $2|z|\ge gz$.`, String.raw`Tại $x=1$, $f(1)=0$, nên hệ số góc $g$ hợp lệ khi và chỉ khi $2|y-1|\ge g(y-1)$ với mọi $y$. Đặt $z=y-1$ được $2|z|\ge gz$.`),
          b(String.raw`For $z>0$, the inequality forces $g\le2$; for $z<0$, it forces $g\ge-2$.`, String.raw`Với $z>0$, bất đẳng thức buộc $g\le2$; với $z<0$, nó buộc $g\ge-2$.`),
          b(String.raw`Every $g\in[-2,2]$ satisfies $gz\le2|z|$ for both signs of $z$. Therefore $\partial f(1)=[-2,2]$.`, String.raw`Mọi $g\in[-2,2]$ đều thỏa $gz\le2|z|$ với cả hai dấu của $z$. Do đó $\partial f(1)=[-2,2]$.`),
        ],
      },
      {
        prompt: b(String.raw`For $h(x)=\max\{3x+1,-x+5\}$, find the kink location and subdifferential there by identifying the active affine slopes.`, String.raw`Với $h(x)=\max\{3x+1,-x+5\}$, hãy tìm vị trí gấp khúc và dưới vi phân tại đó bằng cách xác định các hệ số góc affine đang hoạt động.`),
        solution: [
          b(String.raw`The two pieces tie when $3x+1=-x+5$, so $x=1$ and $h(1)=4$.`, String.raw`Hai nhánh bằng nhau khi $3x+1=-x+5$, nên $x=1$ và $h(1)=4$.`),
          b(String.raw`For $x<1$, $-x+5$ is larger and has slope $-1$; for $x>1$, $3x+1$ is larger and has slope $3$.`, String.raw`Với $x<1$, nhánh $-x+5$ lớn hơn và có hệ số góc $-1$; với $x>1$, nhánh $3x+1$ lớn hơn và có hệ số góc $3$.`),
          b(String.raw`At the tie, every convex combination of active slopes supports the maximum: $\partial h(1)=\operatorname{conv}\{-1,3\}=[-1,3]$.`, String.raw`Tại điểm bằng nhau, mọi tổ hợp lồi của các hệ số góc đang hoạt động đều đỡ hàm cực đại: $\partial h(1)=\operatorname{conv}\{-1,3\}=[-1,3]$.`),
        ],
      },
      {
        prompt: b(String.raw`For $r(x)=|x+2|+2x$, compute $\partial r(-2)$ and decide whether $-2$ can minimize $r$ on $\mathbb R$.`, String.raw`Với $r(x)=|x+2|+2x$, hãy tính $\partial r(-2)$ và xét liệu $-2$ có thể là nghiệm cực tiểu của $r$ trên $\mathbb R$ không.`),
        solution: [
          b(String.raw`The absolute-value term has subdifferential $[-1,1]$ at $x=-2$, and the linear term $2x$ contributes slope $2$. Hence $\partial r(-2)=[1,3]$.`, String.raw`Số hạng giá trị tuyệt đối có dưới vi phân $[-1,1]$ tại $x=-2$, còn số hạng tuyến tính $2x$ đóng góp hệ số góc $2$. Vì vậy $\partial r(-2)=[1,3]$.`),
          b(String.raw`A necessary and sufficient convex optimality condition on $\mathbb R$ is $0\in\partial r(x)$. But $0\notin[1,3]$, so $-2$ is not a minimizer.`, String.raw`Điều kiện tối ưu lồi cần và đủ trên $\mathbb R$ là $0\in\partial r(x)$. Nhưng $0\notin[1,3]$, nên $-2$ không là nghiệm cực tiểu.`),
          b(String.raw`Indeed, to the left of $-2$ the slope is $1$, and to the right it is $3$; the function increases through the kink rather than changing from decreasing to increasing.`, String.raw`Thật vậy, bên trái $-2$ hệ số góc là $1$, còn bên phải là $3$; hàm tăng xuyên qua điểm gấp khúc thay vì chuyển từ giảm sang tăng.`),
        ],
      },
    ],
    reviewNote: 'Checked both signs of y in the defining inequality, including y=0 for sufficiency; the interval endpoints are attained supporting slopes. Restriction: this is the scalar absolute-value kink at zero, with the stated extended-real convex subgradient definition.',
    sourceIds: ['o-boyd'],
  },
  'm2-w062-e2': {
    application: b(String.raw`An $\ell_1$ penalty encourages a fitted coefficient to become exactly zero. At the nonsmooth point, a subgradient balances the quadratic data-fit force against the interval of penalty slopes.`, String.raw`Phạt $\ell_1$ khuyến khích hệ số khớp mô hình bằng đúng không. Tại điểm không khả vi, một dưới vi phân cân bằng lực từ số hạng bình phương khớp dữ liệu với khoảng hệ số góc của số hạng phạt.`),
    formula: b(String.raw`For $f(x)=\lambda|x|+\tfrac12(x-a)^2$ with $\lambda>0$, $\partial f(x)=\lambda\partial|x|+(x-a)$. A minimizer satisfies $0\in\partial f(x)$; the quadratic makes $f$ strictly convex, so the minimizer is unique.`, String.raw`Với $f(x)=\lambda|x|+\tfrac12(x-a)^2$, $\lambda>0$, ta có $\partial f(x)=\lambda\partial|x|+(x-a)$. Nghiệm cực tiểu thỏa $0\in\partial f(x)$; số hạng bình phương làm $f$ lồi nghiêm nên nghiệm duy nhất.`),
    steps: [
      b(String.raw`On $x>0$, differentiate to get $f'(x)=3+(x-1)=x+2>0$; on $x<0$, $f'(x)=-3+(x-1)=x-4<0$.`, String.raw`Trên $x>0$, đạo hàm là $f'(x)=3+(x-1)=x+2>0$; trên $x<0$, $f'(x)=-3+(x-1)=x-4<0$.`),
      b(String.raw`The objective decreases as $x$ approaches zero from the left and increases after zero, so zero is the candidate global minimizer.`, String.raw`Hàm mục tiêu giảm khi $x$ tiến tới không từ bên trái và tăng sau không, nên số không là ứng viên cực tiểu toàn cục.`),
      b(String.raw`At zero, $\partial f(0)=3[-1,1]+(0-1)=[-4,2]$, which contains zero and certifies convex optimality.`, String.raw`Tại không, $\partial f(0)=3[-1,1]+(0-1)=[-4,2]$, chứa số không và chứng nhận tối ưu lồi.`),
      b(String.raw`The quadratic term is strictly convex, so the full objective is strictly convex and this minimizer is unique.`, String.raw`Số hạng bình phương lồi nghiêm, nên toàn hàm mục tiêu lồi nghiêm và nghiệm này là duy nhất.`),
    ],
    primarySolution: [
      b(String.raw`For $x>0$, $f'(x)=3+x-1=x+2>0$. For $x<0$, $f'(x)=-3+x-1=x-4<0$. Thus the function falls toward zero from the left and rises to the right.`, String.raw`Với $x>0$, $f'(x)=3+x-1=x+2>0$. Với $x<0$, $f'(x)=-3+x-1=x-4<0$. Vì thế hàm giảm về phía không từ bên trái và tăng về bên phải.`),
      b(String.raw`At $x=0$, the absolute-value term contributes $3[-1,1]$ and the smooth term has derivative $0-1=-1$, so $\partial f(0)=[-3,3]-1=[-4,2]$.`, String.raw`Tại $x=0$, số hạng giá trị tuyệt đối đóng góp $3[-1,1]$ và số hạng trơn có đạo hàm $0-1=-1$, nên $\partial f(0)=[-3,3]-1=[-4,2]$.`),
      b(String.raw`Because $0\in[-4,2]$, the convex subgradient optimality condition holds at zero. The quadratic term is strictly convex, so this is the unique global minimizer.`, String.raw`Vì $0\in[-4,2]$, điều kiện tối ưu dưới vi phân lồi đúng tại không. Số hạng bình phương lồi nghiêm nên đây là cực tiểu toàn cục duy nhất.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Minimize $F(x)=2|x|+\tfrac12(x-3)^2$ on $\mathbb R$. Find the subgradient at the optimizer and verify uniqueness.`, String.raw`Tối thiểu hóa $F(x)=2|x|+\tfrac12(x-3)^2$ trên $\mathbb R$. Tìm dưới vi phân tại nghiệm và kiểm tra tính duy nhất.`),
        solution: [
          b(String.raw`For $x>0$, $F'(x)=2+(x-3)=x-1$, which vanishes at $x=1$. For $x<0$, $F'(x)=-2+(x-3)=x-5<0$, so no negative point minimizes.`, String.raw`Với $x>0$, $F'(x)=2+(x-3)=x-1$, bằng không tại $x=1$. Với $x<0$, $F'(x)=-2+(x-3)=x-5<0$, nên không điểm âm nào là nghiệm cực tiểu.`),
          b(String.raw`At $x=1$, $\partial F(1)=\{2\}+(1-3)=\{0\}$, so the subgradient condition holds.`, String.raw`Tại $x=1$, $\partial F(1)=\{2\}+(1-3)=\{0\}$, nên điều kiện dưới vi phân đúng.`),
          b(String.raw`The quadratic term is strictly convex, and adding the convex absolute-value term preserves strict convexity. Thus $x=1$ is the unique global minimizer.`, String.raw`Số hạng bình phương lồi nghiêm; cộng số hạng giá trị tuyệt đối lồi vẫn giữ tính lồi nghiêm. Vì vậy $x=1$ là cực tiểu toàn cục duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`For $G(x)=|x|+\tfrac12(x-4)^2$, solve for its minimizer and show how the quadratic gradient shifts the subgradient balance.`, String.raw`Với $G(x)=|x|+\tfrac12(x-4)^2$, hãy tìm nghiệm cực tiểu và chỉ ra gradient của số hạng bình phương làm dịch chuyển cân bằng dưới vi phân thế nào.`),
        solution: [
          b(String.raw`For $x>0$, $G'(x)=1+(x-4)=x-3$, giving candidate $x=3$. For $x<0$, $G'(x)=-1+(x-4)=x-5<0$, so the objective decreases toward zero there.`, String.raw`Với $x>0$, $G'(x)=1+(x-4)=x-3$, cho ứng viên $x=3$. Với $x<0$, $G'(x)=-1+(x-4)=x-5<0$, nên hàm giảm về phía không ở đó.`),
          b(String.raw`At $x=3$, $\partial|x|=\{1\}$ and the quadratic derivative is $3-4=-1$, so $\partial G(3)=\{0\}$.`, String.raw`Tại $x=3$, $\partial|x|=\{1\}$ và đạo hàm số hạng bình phương là $3-4=-1$, nên $\partial G(3)=\{0\}$.`),
          b(String.raw`The quadratic makes $G$ strictly convex, so the subgradient-zero point is the unique global minimizer.`, String.raw`Số hạng bình phương làm $G$ lồi nghiêm, nên điểm có dưới vi phân bằng không là cực tiểu toàn cục duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`For $a>0$ and $\lambda>0$, minimize $H(x)=\lambda|x|+\tfrac12(x-a)^2$. Derive the solution as a function of $a$ and $\lambda$, including the threshold where it becomes zero.`, String.raw`Với $a>0$ và $\lambda>0$, hãy tối thiểu hóa $H(x)=\lambda|x|+\tfrac12(x-a)^2$. Suy ra nghiệm theo $a$ và $\lambda$, gồm cả ngưỡng tại đó nghiệm bằng không.`),
        solution: [
          b(String.raw`For $x>0$, $H'(x)=\lambda+x-a$, whose zero is $x=a-\lambda$; this lies in the positive region exactly when $a>\lambda$.`, String.raw`Với $x>0$, $H'(x)=\lambda+x-a$, có nghiệm $x=a-\lambda$; nghiệm này dương đúng khi $a>\lambda$.`),
          b(String.raw`For $x<0$, $H'(x)=-\lambda+x-a<0$ because $a,\lambda>0$, so no negative point can be a minimizer.`, String.raw`Với $x<0$, $H'(x)=-\lambda+x-a<0$ vì $a,\lambda>0$, nên không điểm âm nào có thể là nghiệm cực tiểu.`),
          b(String.raw`At zero, $\partial H(0)=\lambda[-1,1]-a=[-\lambda-a,\lambda-a]$. It contains zero exactly when $a\le\lambda$. Therefore $x^*=\max\{a-\lambda,0\}$.`, String.raw`Tại không, $\partial H(0)=\lambda[-1,1]-a=[-\lambda-a,\lambda-a]$. Khoảng này chứa không đúng khi $a\le\lambda$. Do đó $x^*=\max\{a-\lambda,0\}$.`),
          b(String.raw`The quadratic term is strictly convex, so this piecewise solution is the unique global minimizer, including the boundary case $a=\lambda$.`, String.raw`Số hạng bình phương lồi nghiêm nên nghiệm từng đoạn này là cực tiểu toàn cục duy nhất, kể cả trường hợp biên $a=\lambda$.`),
        ],
      },
    ],
    reviewNote: 'Checked the one-sided derivative signs, subgradient interval [-4,2] at zero, and strict-convexity uniqueness. Restriction: the primary objective is the stated scalar absolute-value penalty plus quadratic; the subgradient sum rule is used with a differentiable smooth summand.',
    sourceIds: ['o-boyd'],
  },
  'm2-w062-e3': {
    application: b(String.raw`A piecewise-linear convex cost can be the worst of several affine scenarios. At a tie between scenarios, every convex combination of their active slopes is a valid subgradient, giving a range of marginal costs at the kink.`, String.raw`Chi phí lồi từng đoạn có thể là giá trị lớn nhất của nhiều kịch bản affine. Khi các kịch bản hòa nhau, mọi tổ hợp lồi của các hệ số góc đang hoạt động là dưới vi phân hợp lệ, tạo thành khoảng chi phí biên tại điểm gấp khúc.`),
    formula: b(String.raw`For $f(x)=\max_i(a_i x+b_i)$, the active index set is $I(x)=\{i:a_i x+b_i=f(x)\}$. At a kink, $\partial f(x)=\operatorname{conv}\{a_i:i\in I(x)\}$; away from a tie, the active affine slope is the derivative.`, String.raw`Với $f(x)=\max_i(a_i x+b_i)$, tập chỉ số hoạt động là $I(x)=\{i:a_i x+b_i=f(x)\}$. Tại điểm gấp khúc, $\partial f(x)=\operatorname{conv}\{a_i:i\in I(x)\}$; khi không có hòa, hệ số góc affine đang hoạt động là đạo hàm.`),
    steps: [
      b(String.raw`Solve $2x+1=-x+4$ to locate the tie at $x=1$, and evaluate the common height $f(1)=3$.`, String.raw`Giải $2x+1=-x+4$ để tìm điểm hòa $x=1$, rồi tính giá trị chung $f(1)=3$.`),
      b(String.raw`Compare the lines on either side: for $x<1$, $-x+4$ is larger; for $x>1$, $2x+1$ is larger.`, String.raw`So sánh hai đường ở hai phía: với $x<1$, $-x+4$ lớn hơn; với $x>1$, $2x+1$ lớn hơn.`),
      b(String.raw`The active slopes at the tie are $-1$ and $2$. Any convex combination $g=\theta(-1)+(1-\theta)2$ with $\theta\in[0,1]$ is a supporting slope.`, String.raw`Các hệ số góc hoạt động tại điểm hòa là $-1$ và $2$. Mọi tổ hợp lồi $g=\theta(-1)+(1-\theta)2$ với $\theta\in[0,1]$ đều là hệ số góc đỡ.`),
      b(String.raw`As $\theta$ varies, these slopes fill $[-1,2]$, so $\partial f(1)=[-1,2]$.`, String.raw`Khi $\theta$ thay đổi, các hệ số góc này lấp đầy $[-1,2]$, nên $\partial f(1)=[-1,2]$.`),
    ],
    primarySolution: [
      b(String.raw`The kink occurs where $2x+1=-x+4$, giving $3x=3$ and $x=1$. The function value there is $3$.`, String.raw`Điểm gấp khúc xảy ra khi $2x+1=-x+4$, suy ra $3x=3$ và $x=1$. Giá trị hàm tại đó là $3$.`),
      b(String.raw`For $x<1$, the line $-x+4$ is active with slope $-1$; for $x>1$, $2x+1$ is active with slope $2$.`, String.raw`Với $x<1$, đường $-x+4$ hoạt động với hệ số góc $-1$; với $x>1$, đường $2x+1$ hoạt động với hệ số góc $2$.`),
      b(String.raw`At $x=1$, both lines are active. Their convex hull of slopes is $\{\theta(-1)+(1-\theta)2:0\le\theta\le1\}=[-1,2]$, hence $\partial f(1)=[-1,2]$.`, String.raw`Tại $x=1$, cả hai đường đều hoạt động. Bao lồi các hệ số góc là $\{\theta(-1)+(1-\theta)2:0\le\theta\le1\}=[-1,2]$, do đó $\partial f(1)=[-1,2]$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $g(x)=\max\{4x-2,1-x\}$, find the tie point, the active slopes, and the subdifferential there.`, String.raw`Với $g(x)=\max\{4x-2,1-x\}$, hãy tìm điểm hòa, các hệ số góc hoạt động và dưới vi phân tại đó.`),
        solution: [
          b(String.raw`Set the affine pieces equal: $4x-2=1-x$ gives $5x=3$, so the tie is at $x=3/5$.`, String.raw`Cho hai nhánh affine bằng nhau: $4x-2=1-x$ cho $5x=3$, nên điểm hòa là $x=3/5$.`),
          b(String.raw`For $x<3/5$, $1-x$ is larger with slope $-1$; for $x>3/5$, $4x-2$ is larger with slope $4$.`, String.raw`Với $x<3/5$, $1-x$ lớn hơn và có hệ số góc $-1$; với $x>3/5$, $4x-2$ lớn hơn và có hệ số góc $4$.`),
          b(String.raw`At the tie both are active, so $\partial g(3/5)=\operatorname{conv}\{-1,4\}=[-1,4]$.`, String.raw`Tại điểm hòa, cả hai nhánh hoạt động, nên $\partial g(3/5)=\operatorname{conv}\{-1,4\}=[-1,4]$.`),
        ],
      },
      {
        prompt: b(String.raw`For $h(x)=\max\{2x+3,-3x-2\}$, compute the kink and subdifferential, then determine whether the kink minimizes $h$ on $\mathbb R$.`, String.raw`Với $h(x)=\max\{2x+3,-3x-2\}$, hãy tính điểm gấp khúc và dưới vi phân, rồi xét điểm đó có cực tiểu $h$ trên $\mathbb R$ không.`),
        solution: [
          b(String.raw`The pieces tie when $2x+3=-3x-2$, so $x=-1$ and $h(-1)=1$.`, String.raw`Hai nhánh hòa nhau khi $2x+3=-3x-2$, nên $x=-1$ và $h(-1)=1$.`),
          b(String.raw`The active slopes are $-3$ to the left and $2$ to the right; therefore $\partial h(-1)=[-3,2]$.`, String.raw`Các hệ số góc hoạt động là $-3$ ở bên trái và $2$ ở bên phải; vì vậy $\partial h(-1)=[-3,2]$.`),
          b(String.raw`Since $0\in[-3,2]$, the convex subgradient condition holds, so $x=-1$ is a global minimizer. The strict slope change makes this kink the unique minimizer.`, String.raw`Vì $0\in[-3,2]$, điều kiện tối ưu dưới vi phân lồi đúng, nên $x=-1$ là cực tiểu toàn cục. Sự đổi dấu hệ số góc nghiêm khiến điểm gấp khúc này là nghiệm duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`For $k(x)=\max\{0,2x-4\}$, find its kink and subdifferential there, and identify all global minimizers.`, String.raw`Với $k(x)=\max\{0,2x-4\}$, hãy tìm điểm gấp khúc, dưới vi phân tại đó và toàn bộ nghiệm cực tiểu toàn cục.`),
        solution: [
          b(String.raw`The two affine pieces tie when $0=2x-4$, so the kink is $x=2$.`, String.raw`Hai nhánh affine hòa nhau khi $0=2x-4$, nên điểm gấp khúc là $x=2$.`),
          b(String.raw`The active slopes there are $0$ and $2$, yielding $\partial k(2)=\operatorname{conv}\{0,2\}=[0,2]$.`, String.raw`Các hệ số góc hoạt động tại đó là $0$ và $2$, cho $\partial k(2)=\operatorname{conv}\{0,2\}=[0,2]$.`),
          b(String.raw`For every $x\le2$, $k(x)=0$; for $x>2$, $k(x)=2x-4>0$. Thus the full minimizer set is $(-\infty,2]$, consistent with $0\in\partial k(2)$.`, String.raw`Với mọi $x\le2$, $k(x)=0$; với $x>2$, $k(x)=2x-4>0$. Do đó toàn bộ tập nghiệm cực tiểu là $(-\infty,2]$, phù hợp với $0\in\partial k(2)$.`),
        ],
      },
    ],
    reviewNote: 'Checked the crossing equation x=1, which affine piece is active on each side, and the convex hull of the active slopes. Restriction: the max-of-affine rule is applied to exactly two scalar affine pieces; no differentiability is asserted at the tie.',
    sourceIds: ['o-boyd'],
  },
  'm2-w062-e4': {
    application: b(String.raw`A nonsmooth objective may be minimized at a feasible boundary where its subgradient is nonzero. The normal cone contributes the boundary force, so the correct certificate balances objective subgradients against feasible-set normals.`, String.raw`Hàm mục tiêu không trơn có thể đạt cực tiểu tại biên khả thi dù dưới vi phân của nó khác không. Nón pháp tuyến đóng góp lực biên, nên chứng chỉ đúng cân bằng dưới vi phân mục tiêu với pháp tuyến của tập khả thi.`),
    formula: b(String.raw`For a convex set $C$, $N_C(x)=\{v:v(y-x)\le0\ \forall y\in C\}$. A convex constrained minimizer satisfies $0\in\partial f(x)+N_C(x)$; at an interior point, $N_C(x)=\{0\}$.`, String.raw`Với tập lồi $C$, $N_C(x)=\{v:v(y-x)\le0\ \forall y\in C\}$. Nghiệm cực tiểu lồi có ràng buộc thỏa $0\in\partial f(x)+N_C(x)$; tại điểm trong, $N_C(x)=\{0\}$.`),
    steps: [
      b(String.raw`On $[2,5]$, the distance $|x|$ is increasing, so the nearest feasible point to zero is the left endpoint $x^*=2$.`, String.raw`Trên $[2,5]$, khoảng cách $|x|$ tăng, nên điểm khả thi gần không nhất là đầu mút trái $x^*=2$.`),
      b(String.raw`Because $x^*>0$, the objective is differentiable there and $\partial f(2)=\{1\}$; therefore the unconstrained condition $0\in\partial f(2)$ fails.`, String.raw`Vì $x^*>0$, hàm mục tiêu khả vi tại đó và $\partial f(2)=\{1\}$; do vậy điều kiện không ràng buộc $0\in\partial f(2)$ không đúng.`),
      b(String.raw`At the left endpoint, $N_{[2,5]}(2)=(-\infty,0]$ under the stated sign convention. Choose $v=-1$, giving $1+(-1)=0$.`, String.raw`Tại đầu mút trái, theo quy ước dấu đã nêu, $N_{[2,5]}(2)=(-\infty,0]$. Chọn $v=-1$, ta được $1+(-1)=0$.`),
      b(String.raw`Thus $0\in\partial f(2)+N_C(2)$ certifies the constrained optimum. The objective subgradient alone is not the constrained stationarity condition.`, String.raw`Vì vậy $0\in\partial f(2)+N_C(2)$ chứng nhận cực tiểu có ràng buộc. Riêng dưới vi phân mục tiêu không phải điều kiện dừng có ràng buộc.`),
    ],
    primarySolution: [
      b(String.raw`On $C=[2,5]$, $|x|=x$ and its smallest value occurs at the left endpoint, so $x^*=2$.`, String.raw`Trên $C=[2,5]$, $|x|=x$ và giá trị nhỏ nhất đạt tại đầu mút trái, nên $x^*=2$.`),
      b(String.raw`Since $2>0$, $\partial|\cdot|(2)=\{1\}$, so $0\notin\partial f(2)$. The unconstrained subgradient test omits the active boundary.`, String.raw`Vì $2>0$, $\partial|\cdot|(2)=\{1\}$, nên $0\notin\partial f(2)$. Điều kiện dưới vi phân không ràng buộc bỏ qua biên đang hoạt động.`),
      b(String.raw`By definition, $N_C(2)=\{v:v(y-2)\le0\ \forall y\in[2,5]\}=(-\infty,0]$. Taking $v=-1$ gives $1+v=0$, hence $0\in\partial f(2)+N_C(2)$.`, String.raw`Theo định nghĩa, $N_C(2)=\{v:v(y-2)\le0\ \forall y\in[2,5]\}=(-\infty,0]$. Chọn $v=-1$ cho $1+v=0$, suy ra $0\in\partial f(2)+N_C(2)$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Minimize $f(x)=|x+1|$ over $C=[-3,-2]$. Give a normal-cone certificate at the optimizer.`, String.raw`Tối thiểu hóa $f(x)=|x+1|$ trên $C=[-3,-2]$. Hãy đưa ra chứng chỉ nón pháp tuyến tại nghiệm.`),
        solution: [
          b(String.raw`Every feasible $x$ satisfies $x+1<0$, so $f(x)=-(x+1)$ decreases as $x$ increases. The minimum is at $x^*=-2$.`, String.raw`Mọi $x$ khả thi đều có $x+1<0$, nên $f(x)=-(x+1)$ giảm khi $x$ tăng. Cực tiểu đạt tại $x^*=-2$.`),
          b(String.raw`At $-2$, $\partial f(-2)=\{-1\}$. The normal cone at the right endpoint of $[-3,-2]$ is $N_C(-2)=[0,\infty)$.`, String.raw`Tại $-2$, $\partial f(-2)=\{-1\}$. Nón pháp tuyến tại đầu mút phải của $[-3,-2]$ là $N_C(-2)=[0,\infty)$.`),
          b(String.raw`Choose normal $v=1$. Then $-1+1=0$, proving $0\in\partial f(-2)+N_C(-2)$ and certifying constrained optimality.`, String.raw`Chọn pháp tuyến $v=1$. Khi đó $-1+1=0$, chứng minh $0\in\partial f(-2)+N_C(-2)$ và chứng nhận tối ưu có ràng buộc.`),
        ],
      },
      {
        prompt: b(String.raw`Minimize $g(x)=|x|$ on $C=[-1,2]$. Explain how the normal-cone condition reduces to the usual subgradient condition at the solution.`, String.raw`Tối thiểu hóa $g(x)=|x|$ trên $C=[-1,2]$. Giải thích vì sao điều kiện nón pháp tuyến rút về điều kiện dưới vi phân thông thường tại nghiệm.`),
        solution: [
          b(String.raw`The objective is nonnegative and equals zero only at $x^*=0$, which lies in the interior of $[-1,2]$.`, String.raw`Hàm mục tiêu không âm và chỉ bằng không tại $x^*=0$, nằm trong miền trong của $[-1,2]$.`),
          b(String.raw`At an interior point, $N_C(0)=\{0\}$. Also $\partial g(0)=[-1,1]$, which contains zero.`, String.raw`Tại điểm trong, $N_C(0)=\{0\}$. Đồng thời $\partial g(0)=[-1,1]$, chứa số không.`),
          b(String.raw`Therefore $0\in\partial g(0)+N_C(0)$ becomes exactly $0\in\partial g(0)$; the constrained and unconstrained certificates coincide here.`, String.raw`Do đó $0\in\partial g(0)+N_C(0)$ trở thành đúng $0\in\partial g(0)$; hai chứng chỉ có ràng buộc và không ràng buộc trùng nhau ở đây.`),
        ],
      },
      {
        prompt: b(String.raw`Minimize $h(x)=|x-4|$ over $C=[0,3]$. Find the active endpoint, objective subgradient, and a normal that balances it.`, String.raw`Tối thiểu hóa $h(x)=|x-4|$ trên $C=[0,3]$. Tìm đầu mút hoạt động, dưới vi phân mục tiêu và pháp tuyến cân bằng nó.`),
        solution: [
          b(String.raw`Every feasible $x$ is less than $4$, so $h(x)=4-x$ decreases across the interval and is minimized at $x^*=3$.`, String.raw`Mọi $x$ khả thi đều nhỏ hơn $4$, nên $h(x)=4-x$ giảm trên khoảng và đạt cực tiểu tại $x^*=3$.`),
          b(String.raw`The objective subgradient is $\partial h(3)=\{-1\}$. For the right endpoint of $[0,3]$, the normal cone under this convention is $N_C(3)=[0,\infty)$.`, String.raw`Dưới vi phân mục tiêu là $\partial h(3)=\{-1\}$. Với đầu mút phải của $[0,3]$, nón pháp tuyến theo quy ước này là $N_C(3)=[0,\infty)$.`),
          b(String.raw`Taking $v=1$ gives $-1+1=0$, so $0\in\partial h(3)+N_C(3)$ certifies the constrained minimum.`, String.raw`Chọn $v=1$ được $-1+1=0$, nên $0\in\partial h(3)+N_C(3)$ chứng nhận cực tiểu có ràng buộc.`),
        ],
      },
    ],
    reviewNote: 'Checked the normal-cone sign from its defining inequality at the left endpoint, the objective subgradient {1}, and the cancellation 1+(-1)=0. Restriction: the normal-cone optimality condition is stated for this closed convex interval and this sign convention.',
    sourceIds: ['o-boyd'],
  },
  'm2-w062-e5': {
    application: b(String.raw`A convex objective can have a sharp minimum where a classical derivative is undefined. A subgradient condition handles such corners and can distinguish a kink that minimizes from one that only changes slope.`, String.raw`Hàm mục tiêu lồi có thể đạt cực tiểu nhọn tại nơi đạo hàm thông thường không xác định. Điều kiện dưới vi phân xử lý các góc này và phân biệt điểm gấp khúc là cực tiểu với điểm chỉ đổi hệ số góc.`),
    formula: b(String.raw`For convex $f$ on $\mathbb R$, $x^*$ is a global minimizer iff $0\in\partial f(x^*)$. For $f(x)=|x|$, $f'(0)$ is undefined but $\partial f(0)=[-1,1]$ contains zero.`, String.raw`Với $f$ lồi trên $\mathbb R$, $x^*$ là cực tiểu toàn cục khi và chỉ khi $0\in\partial f(x^*)$. Với $f(x)=|x|$, $f'(0)$ không xác định nhưng $\partial f(0)=[-1,1]$ chứa số không.`),
    steps: [
      b(String.raw`Identify the kink of $f(x)=|x|$ at zero and note that the left and right derivatives are $-1$ and $1$, so no ordinary derivative exists there.`, String.raw`Xác định điểm gấp khúc của $f(x)=|x|$ tại không và nhận thấy đạo hàm trái, phải lần lượt là $-1$ và $1$, nên đạo hàm thông thường không tồn tại.`),
      b(String.raw`Use the subdifferential $\partial f(0)=[-1,1]$; because it contains zero, the convex optimality criterion certifies a global minimum.`, String.raw`Dùng dưới vi phân $\partial f(0)=[-1,1]$; vì khoảng này chứa số không, tiêu chuẩn tối ưu lồi chứng nhận cực tiểu toàn cục.`),
      b(String.raw`Away from zero, the subdifferential is a singleton: $\partial f(x)=\{1\}$ for $x>0$ and $\{-1\}$ for $x<0$. Neither contains zero.`, String.raw`Ngoài số không, dưới vi phân chỉ có một phần tử: $\partial f(x)=\{1\}$ khi $x>0$ và $\{-1\}$ khi $x<0$. Cả hai đều không chứa số không.`),
      b(String.raw`Therefore solving $f'(x)=0$ is the wrong method at the minimizer; the subgradient inclusion remains defined and gives the correct certificate.`, String.raw`Vì vậy giải $f'(x)=0$ là phương pháp sai tại nghiệm cực tiểu; bao hàm dưới vi phân vẫn xác định và đưa ra chứng chỉ đúng.`),
    ],
    primarySolution: [
      b(String.raw`For $f(x)=|x|$, the left derivative at zero is $-1$ and the right derivative is $1$, so $f'(0)$ does not exist. Yet $f(x)\ge0=f(0)$, with equality only at zero, so zero is the unique minimum.`, String.raw`Với $f(x)=|x|$, đạo hàm trái tại không là $-1$ và đạo hàm phải là $1$, nên $f'(0)$ không tồn tại. Tuy vậy $f(x)\ge0=f(0)$ và chỉ bằng tại không, nên không là cực tiểu duy nhất.`),
      b(String.raw`For $x>0$, $\partial f(x)=\{1\}$; for $x<0$, $\partial f(x)=\{-1\}$. At the kink, $\partial f(0)=[-1,1]$.`, String.raw`Với $x>0$, $\partial f(x)=\{1\}$; với $x<0$, $\partial f(x)=\{-1\}$. Tại điểm gấp khúc, $\partial f(0)=[-1,1]$.`),
      b(String.raw`The correct convex certificate is $0\in\partial f(0)$, not the undefined equation $f'(0)=0$.`, String.raw`Chứng chỉ lồi đúng là $0\in\partial f(0)$, không phải phương trình không xác định $f'(0)=0$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $p(x)=|x-3|+\tfrac12(x-3)^2$. Find its minimizer and explain why a derivative equation alone cannot be written at that point.`, String.raw`Cho $p(x)=|x-3|+\tfrac12(x-3)^2$. Hãy tìm nghiệm cực tiểu và giải thích vì sao không thể viết riêng phương trình đạo hàm tại điểm đó.`),
        solution: [
          b(String.raw`Both terms are nonnegative and vanish at $x=3$, so $x=3$ is the unique global minimizer.`, String.raw`Cả hai số hạng đều không âm và cùng bằng không tại $x=3$, nên $x=3$ là cực tiểu toàn cục duy nhất.`),
          b(String.raw`The absolute-value term has unequal one-sided derivatives at $3$, namely $-1$ and $1$; the quadratic derivative is zero there. Hence the total classical derivative still does not exist.`, String.raw`Số hạng giá trị tuyệt đối có đạo hàm một phía khác nhau tại $3$, lần lượt là $-1$ và $1$; đạo hàm số hạng bình phương tại đó bằng không. Vì vậy đạo hàm thông thường của tổng vẫn không tồn tại.`),
          b(String.raw`The subdifferential is $\partial p(3)=[-1,1]+0=[-1,1]$, which contains zero and certifies optimality.`, String.raw`Dưới vi phân là $\partial p(3)=[-1,1]+0=[-1,1]$, chứa số không và chứng nhận tối ưu.`),
        ],
      },
      {
        prompt: b(String.raw`For $q(x)=|x|+x/2$, find the full minimizer set and verify the kink condition with a subdifferential.`, String.raw`Với $q(x)=|x|+x/2$, hãy tìm toàn bộ tập nghiệm cực tiểu và kiểm tra điều kiện tại điểm gấp khúc bằng dưới vi phân.`),
        solution: [
          b(String.raw`For $x>0$, $q(x)=3x/2>0$ and increases; for $x<0$, $q(x)=-x/2>0$ and decreases as $x$ approaches zero.`, String.raw`Với $x>0$, $q(x)=3x/2>0$ và tăng; với $x<0$, $q(x)=-x/2>0$ và giảm khi $x$ tiến về không.`),
          b(String.raw`At zero, $\partial q(0)=[-1,1]+1/2=[-1/2,3/2]$, which contains zero.`, String.raw`Tại không, $\partial q(0)=[-1,1]+1/2=[-1/2,3/2]$, chứa số không.`),
          b(String.raw`Also $q(x)=0$ only at $x=0$, so the complete minimizer set is the singleton $\{0\}$.`, String.raw`Ngoài ra $q(x)=0$ chỉ tại $x=0$, nên tập nghiệm cực tiểu đầy đủ là tập đơn $\{0\}$.`),
        ],
      },
      {
        prompt: b(String.raw`For $r(x)=|x|+x$, find its global minimizers and subdifferential at zero. Explain how a valid zero subgradient can coexist with nonuniqueness.`, String.raw`Với $r(x)=|x|+x$, hãy tìm các nghiệm cực tiểu toàn cục và dưới vi phân tại không. Giải thích vì sao có dưới vi phân bằng không hợp lệ mà nghiệm vẫn không duy nhất.`),
        solution: [
          b(String.raw`For $x\le0$, $|x|=-x$, so $r(x)=0$. For $x>0$, $r(x)=2x>0$. Thus every $x\le0$ minimizes globally.`, String.raw`Với $x\le0$, $|x|=-x$, nên $r(x)=0$. Với $x>0$, $r(x)=2x>0$. Vì thế mọi $x\le0$ đều là cực tiểu toàn cục.`),
          b(String.raw`At zero, adding the linear slope gives $\partial r(0)=[-1,1]+1=[0,2]$, which contains zero.`, String.raw`Tại không, cộng hệ số góc tuyến tính được $\partial r(0)=[-1,1]+1=[0,2]$, chứa số không.`),
          b(String.raw`The subgradient condition certifies global minimality for a convex function but does not imply uniqueness; the flat half-line of equal values shows why.`, String.raw`Điều kiện dưới vi phân chứng nhận cực tiểu toàn cục cho hàm lồi nhưng không suy ra duy nhất; nửa đường thẳng phẳng có cùng giá trị cho thấy điều đó.`),
        ],
      },
    ],
    reviewNote: 'Checked nondifferentiability from unequal one-sided derivatives at zero, the interval subdifferential, and the convex zero-in-subgradient criterion. Restriction: the smooth derivative equation is unavailable at the kink; away from it the subdifferential is a singleton.',
    sourceIds: ['o-boyd'],
  },
  'm2-w063-e1': {
    application: b(String.raw`In a quadratic model, the conjugate exchanges an input value with a slope or price. The curvature coefficient controls the cost of a large dual slope, and the maximizing primal point identifies where the supporting slope matches the derivative.`, String.raw`Trong mô hình bậc hai, hàm liên hợp đổi giá trị đầu vào sang hệ số góc hay giá. Hệ số độ cong kiểm soát chi phí của hệ số góc đối ngẫu lớn, còn điểm tối đa hóa cho biết nơi hệ số góc đỡ khớp với đạo hàm.`),
    formula: b(String.raw`For $f(x)=\tfrac12 a x^2$ with $a>0$, $f^*(y)=\sup_x\{yx-f(x)\}=\tfrac{y^2}{2a}$. The supremum is attained uniquely at $x=y/a$, exactly when $y=f'(x)=ax$.`, String.raw`Với $f(x)=\tfrac12 a x^2$ và $a>0$, $f^*(y)=\sup_x\{yx-f(x)\}=\tfrac{y^2}{2a}$. Cực đại đạt duy nhất tại $x=y/a$, đúng khi $y=f'(x)=ax$.`),
    steps: [
      b(String.raw`Fix $y$ and maximize $yx-\tfrac12 ax^2$ over $x\in\mathbb R$. Since $a>0$, this is a strictly concave quadratic in $x$.`, String.raw`Cố định $y$ và tối đa hóa $yx-\tfrac12 ax^2$ theo $x\in\mathbb R$. Vì $a>0$, đây là hàm bậc hai lõm nghiêm theo $x$.`),
      b(String.raw`Differentiate with respect to $x$: $y-ax=0$, so the unique maximizer is $x=y/a$.`, String.raw`Lấy đạo hàm theo $x$: $y-ax=0$, nên điểm cực đại duy nhất là $x=y/a$.`),
      b(String.raw`Substitute to get $f^*(y)=y(y/a)-\tfrac12a(y/a)^2=y^2/a-y^2/(2a)=y^2/(2a)$.`, String.raw`Thế vào được $f^*(y)=y(y/a)-\tfrac12a(y/a)^2=y^2/a-y^2/(2a)=y^2/(2a)$.`),
      b(String.raw`The Fenchel–Young equality condition is $y=f'(x)=ax$, which is equivalent to the maximizing relation $x=y/a$.`, String.raw`Điều kiện đẳng thức Fenchel–Young là $y=f'(x)=ax$, tương đương với quan hệ cực đại $x=y/a$.`),
    ],
    primarySolution: [
      b(String.raw`For fixed $y$, the expression to maximize is $yx-\tfrac12ax^2$. Its derivative in $x$ is $y-ax$, and its second derivative is $-a<0$, so its unique maximum occurs at $x=y/a$.`, String.raw`Với $y$ cố định, biểu thức cần tối đa hóa là $yx-\tfrac12ax^2$. Đạo hàm theo $x$ là $y-ax$, đạo hàm bậc hai là $-a<0$, nên cực đại duy nhất đạt tại $x=y/a$.`),
      b(String.raw`Substitution gives $f^*(y)=y(y/a)-\tfrac12a(y/a)^2=\tfrac{y^2}{2a}$ for every $y\in\mathbb R$.`, String.raw`Thế vào được $f^*(y)=y(y/a)-\tfrac12a(y/a)^2=\tfrac{y^2}{2a}$ với mọi $y\in\mathbb R$.`),
      b(String.raw`Equality in Fenchel–Young occurs exactly when $y\in\partial f(x)$. Since $f'(x)=ax$, this is $y=ax$, equivalent to $x=y/a$, the unique maximizing point.`, String.raw`Đẳng thức Fenchel–Young xảy ra đúng khi $y\in\partial f(x)$. Vì $f'(x)=ax$, điều kiện là $y=ax$, tương đương $x=y/a$, điểm cực đại duy nhất.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(x)=\tfrac32x^2$, compute $f^*(y)$ from the supremum and state the equality relation between $x$ and $y$.`, String.raw`Với $f(x)=\tfrac32x^2$, hãy tính $f^*(y)$ từ supremum và nêu quan hệ đẳng thức giữa $x$ và $y$.`),
        solution: [
          b(String.raw`For fixed $y$, maximize $yx-\tfrac32x^2$. The derivative is $y-3x$, so the unique maximizer is $x=y/3$; the second derivative is $-3<0$.`, String.raw`Với $y$ cố định, tối đa hóa $yx-\tfrac32x^2$. Đạo hàm là $y-3x$, nên cực đại duy nhất tại $x=y/3$; đạo hàm bậc hai là $-3<0$.`),
          b(String.raw`Substitute: $f^*(y)=y(y/3)-\tfrac32(y/3)^2=y^2/3-y^2/6=y^2/6$.`, String.raw`Thế vào: $f^*(y)=y(y/3)-\tfrac32(y/3)^2=y^2/3-y^2/6=y^2/6$.`),
          b(String.raw`Here $f'(x)=3x$, so equality holds exactly when $y=3x$, or equivalently $x=y/3$.`, String.raw`Ở đây $f'(x)=3x$, nên đẳng thức xảy ra đúng khi $y=3x$, hay tương đương $x=y/3$.`),
        ],
      },
      {
        prompt: b(String.raw`Compute the conjugate of $g(x)=\tfrac12(x-2)^2$ and verify the Fenchel–Young equality condition.`, String.raw`Hãy tính hàm liên hợp của $g(x)=\tfrac12(x-2)^2$ và kiểm tra điều kiện đẳng thức Fenchel–Young.`),
        solution: [
          b(String.raw`Maximize $yx-\tfrac12(x-2)^2$. The derivative is $y-(x-2)$, so the unique maximizer is $x=2+y$.`, String.raw`Tối đa hóa $yx-\tfrac12(x-2)^2$. Đạo hàm là $y-(x-2)$, nên cực đại duy nhất tại $x=2+y$.`),
          b(String.raw`At that point, $g^*(y)=y(2+y)-\tfrac12y^2=2y+\tfrac12y^2$, finite for every real $y$.`, String.raw`Tại điểm đó, $g^*(y)=y(2+y)-\tfrac12y^2=2y+\tfrac12y^2$, hữu hạn với mọi $y$ thực.`),
          b(String.raw`Since $g'(x)=x-2$, equality requires $y=x-2$, which is precisely $x=2+y$.`, String.raw`Vì $g'(x)=x-2$, đẳng thức yêu cầu $y=x-2$, chính là $x=2+y$.`),
        ],
      },
      {
        prompt: b(String.raw`For $f(x)=\tfrac12a x^2+bx+c$ with $a>0$, derive its conjugate and identify the unique maximizing $x$.`, String.raw`Với $f(x)=\tfrac12a x^2+bx+c$, $a>0$, hãy suy ra hàm liên hợp và xác định điểm $x$ tối đa hóa duy nhất.`),
        solution: [
          b(String.raw`The quantity is $yx-f(x)=(y-b)x-\tfrac12a x^2-c$. Its derivative in $x$ is $(y-b)-ax$, so the unique maximizer is $x=(y-b)/a$.`, String.raw`Biểu thức là $yx-f(x)=(y-b)x-\tfrac12a x^2-c$. Đạo hàm theo $x$ là $(y-b)-ax$, nên cực đại duy nhất tại $x=(y-b)/a$.`),
          b(String.raw`Substituting yields $f^*(y)=\tfrac{(y-b)^2}{a}-\tfrac{(y-b)^2}{2a}-c=\tfrac{(y-b)^2}{2a}-c$.`, String.raw`Thế vào được $f^*(y)=\tfrac{(y-b)^2}{a}-\tfrac{(y-b)^2}{2a}-c=\tfrac{(y-b)^2}{2a}-c$.`),
          b(String.raw`The equality relation is $y=f'(x)=ax+b$, equivalent to the maximizing formula $x=(y-b)/a$.`, String.raw`Quan hệ đẳng thức là $y=f'(x)=ax+b$, tương đương công thức cực đại $x=(y-b)/a$.`),
        ],
      },
    ],
    reviewNote: 'Checked the supremum has a unique maximizer because a>0, substituted the optimizer without dropping the factor 1/2, and matched Fenchel–Young equality to y=ax. Restriction: the formula is finite on all real y only under the stated positive-curvature assumption.',
    sourceIds: ['o-boyd'],
  },
  'm2-w063-e2': {
    application: b(String.raw`An indicator function encodes a hard feasible range: it costs zero inside a set and infinity outside. Its conjugate is the support function, which reports the largest linear score attainable over that allowed range.`, String.raw`Hàm chỉ thị mã hóa miền khả thi cứng: chi phí bằng không trong tập và vô hạn ngoài tập. Hàm liên hợp là hàm tựa, cho biết điểm số tuyến tính lớn nhất đạt được trong miền cho phép.`),
    formula: b(String.raw`For a nonempty set $C$, $\delta_C(x)=0$ on $C$ and $+\infty$ otherwise, so $\delta_C^*(y)=\sup_{x\in C}yx=\sigma_C(y)$. For $C=[-1,2]$, this equals $-y$ if $y<0$, $0$ if $y=0$, and $2y$ if $y>0$.`, String.raw`Với tập không rỗng $C$, $\delta_C(x)=0$ trên $C$ và $+\infty$ ngoài tập, nên $\delta_C^*(y)=\sup_{x\in C}yx=\sigma_C(y)$. Với $C=[-1,2]$, giá trị lần lượt là $-y$ khi $y<0$, $0$ khi $y=0$ và $2y$ khi $y>0$.`),
    steps: [
      b(String.raw`In the conjugate supremum, any $x\notin[-1,2]$ contributes $yx-(+\infty)=-\infty$, so only feasible $x$ matter.`, String.raw`Trong supremum liên hợp, mọi $x\notin[-1,2]$ cho $yx-(+\infty)=-\infty$, nên chỉ các $x$ khả thi mới có tác dụng.`),
      b(String.raw`If $y<0$, the linear function $yx$ decreases with $x$, so its maximum on the interval is at $x=-1$ and equals $-y$.`, String.raw`Nếu $y<0$, hàm tuyến tính $yx$ giảm theo $x$, nên đạt cực đại trên khoảng tại $x=-1$ với giá trị $-y$.`),
      b(String.raw`If $y>0$, it increases and is maximized at $x=2$, giving $2y$; if $y=0$, it is zero everywhere.`, String.raw`Nếu $y>0$, hàm tăng và đạt cực đại tại $x=2$, cho $2y$; nếu $y=0$, hàm bằng không ở mọi nơi.`),
      b(String.raw`Combining the cases gives the support function $\sigma_{[-1,2]}(y)=\max\{-y,2y\}$, including value zero at $y=0$.`, String.raw`Gộp các trường hợp được hàm tựa $\sigma_{[-1,2]}(y)=\max\{-y,2y\}$, bao gồm giá trị không tại $y=0$.`),
    ],
    primarySolution: [
      b(String.raw`By definition, $\delta_C^*(y)=\sup_x\{yx-\delta_C(x)\}=\sup_{x\in[-1,2]}yx$ because points outside $C$ contribute $-\infty$.`, String.raw`Theo định nghĩa, $\delta_C^*(y)=\sup_x\{yx-\delta_C(x)\}=\sup_{x\in[-1,2]}yx$ vì các điểm ngoài $C$ đóng góp $-\infty$.`),
      b(String.raw`For $y<0$, $yx$ is decreasing, so the maximum is at $x=-1$: $\delta_C^*(y)=-y$. For $y>0$, the maximum is at $x=2$: $\delta_C^*(y)=2y$.`, String.raw`Với $y<0$, $yx$ giảm nên cực đại tại $x=-1$: $\delta_C^*(y)=-y$. Với $y>0$, cực đại tại $x=2$: $\delta_C^*(y)=2y$.`),
      b(String.raw`When $y=0$, the score is zero for every feasible $x$, so $\delta_C^*(0)=0$. Thus $\delta_C^*(y)=\max\{-y,2y\}$ for all real $y$.`, String.raw`Khi $y=0$, điểm số bằng không với mọi $x$ khả thi, nên $\delta_C^*(0)=0$. Do đó $\delta_C^*(y)=\max\{-y,2y\}$ với mọi $y$ thực.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $C=[0,1]$. Compute $\delta_C^*(y)$ for $y<0$, $y=0$, and $y>0$, and state which endpoint attains each nonzero case.`, String.raw`Cho $C=[0,1]$. Hãy tính $\delta_C^*(y)$ khi $y<0$, $y=0$, $y>0$, và nêu đầu mút đạt cực đại trong mỗi trường hợp khác không.`),
        solution: [
          b(String.raw`The conjugate is $\sup_{x\in[0,1]}yx$, since the indicator excludes all points outside the interval.`, String.raw`Hàm liên hợp là $\sup_{x\in[0,1]}yx$, vì hàm chỉ thị loại mọi điểm ngoài khoảng.`),
          b(String.raw`For $y<0$, the score decreases with $x$, so it is maximized at $x=0$ with value $0$. For $y>0$, it is maximized at $x=1$ with value $y$.`, String.raw`Với $y<0$, điểm số giảm theo $x$, nên đạt cực đại tại $x=0$ với giá trị $0$. Với $y>0$, cực đại tại $x=1$ với giá trị $y$.`),
          b(String.raw`At $y=0$, every feasible point scores zero. Therefore $\delta_C^*(y)=0$ for $y\le0$ and $\delta_C^*(y)=y$ for $y\ge0$, with the formulas agreeing at zero.`, String.raw`Tại $y=0$, mọi điểm khả thi đều có điểm số bằng không. Vì vậy $\delta_C^*(y)=0$ khi $y\le0$ và $\delta_C^*(y)=y$ khi $y\ge0$, hai công thức trùng nhau tại không.`),
        ],
      },
      {
        prompt: b(String.raw`For $C=[-2,3]$, derive the support function $\delta_C^*(y)$ and locate its maximizing endpoint for each sign of $y$.`, String.raw`Với $C=[-2,3]$, hãy suy ra hàm tựa $\delta_C^*(y)$ và xác định đầu mút tối đa hóa theo từng dấu của $y$.`),
        solution: [
          b(String.raw`The conjugate reduces to $\sup_{x\in[-2,3]}yx$.`, String.raw`Hàm liên hợp rút về $\sup_{x\in[-2,3]}yx$.`),
          b(String.raw`If $y<0$, the linear score decreases with $x$, so its maximum occurs at $x=-2$ and equals $-2y$.`, String.raw`Nếu $y<0$, điểm số tuyến tính giảm theo $x$, nên cực đại tại $x=-2$ và bằng $-2y$.`),
          b(String.raw`If $y>0$, it increases and the maximum is at $x=3$, giving $3y$. At $y=0$ it is zero throughout, hence $\delta_C^*(y)=\max\{-2y,3y\}$.`, String.raw`Nếu $y>0$, hàm tăng và cực đại tại $x=3$, cho $3y$. Tại $y=0$ giá trị bằng không trên cả khoảng, nên $\delta_C^*(y)=\max\{-2y,3y\}$.`),
        ],
      },
      {
        prompt: b(String.raw`Compute the conjugate of the indicator of the symmetric interval $C=[-2,2]$ and verify that it is even and nonnegative.`, String.raw`Hãy tính hàm liên hợp của hàm chỉ thị khoảng đối xứng $C=[-2,2]$ và kiểm tra nó là hàm chẵn, không âm.`),
        solution: [
          b(String.raw`The conjugate is $\sup_{x\in[-2,2]}yx$.`, String.raw`Hàm liên hợp là $\sup_{x\in[-2,2]}yx$.`),
          b(String.raw`For $y>0$, the maximum is at $x=2$ and equals $2y$. For $y<0$, it is at $x=-2$ and equals $-2y$.`, String.raw`Với $y>0$, cực đại tại $x=2$ và bằng $2y$. Với $y<0$, cực đại tại $x=-2$ và bằng $-2y$.`),
          b(String.raw`At zero the value is zero, so $\delta_C^*(y)=2|y|$. This formula is even and nonnegative, as the symmetry of $C$ also predicts.`, String.raw`Tại không, giá trị bằng không, nên $\delta_C^*(y)=2|y|$. Công thức này chẵn và không âm, đúng như tính đối xứng của $C$ dự đoán.`),
        ],
      },
    ],
    reviewNote: 'Checked that points outside C contribute negative infinity in the supremum, and that each sign of y selects the correct endpoint; the y=0 tie is handled explicitly. Restriction: C is the stated compact interval, so the support supremum is attained.',
    sourceIds: ['o-boyd'],
  },
  'm2-w063-e3': {
    application: b(String.raw`The conjugate of an absolute-value penalty becomes a hard bound on its dual slope. In a dual model, violating that slope budget makes the conjugate infinite and therefore excludes the candidate entirely.`, String.raw`Hàm liên hợp của một số hạng phạt giá trị tuyệt đối trở thành cận cứng cho hệ số góc đối ngẫu. Trong mô hình đối ngẫu, vượt ngân sách hệ số góc khiến hàm liên hợp vô hạn và loại hẳn ứng viên.`),
    formula: b(String.raw`For $f(x)=|x|$, $f^*(y)=\sup_x(yx-|x|)=0$ if $|y|\le1$ and $+\infty$ otherwise; equivalently $f^*=\delta_{[-1,1]}$. The finite-domain condition is essential.`, String.raw`Với $f(x)=|x|$, $f^*(y)=\sup_x(yx-|x|)=0$ nếu $|y|\le1$ và $+\infty$ nếu không; tương đương $f^*=\delta_{[-1,1]}$. Điều kiện miền hữu hiệu là thiết yếu.`),
    steps: [
      b(String.raw`Split the supremum into $x\ge0$ and $x\le0$. On the first half-line, $yx-|x|=(y-1)x$; on the second, it equals $(y+1)x$.`, String.raw`Tách supremum thành $x\ge0$ và $x\le0$. Trên nửa trục thứ nhất, $yx-|x|=(y-1)x$; trên nửa trục thứ hai, biểu thức bằng $(y+1)x$.`),
      b(String.raw`If $-1\le y\le1$, then $y-1\le0$ and $y+1\ge0$. Each half-line expression is at most zero, and $x=0$ attains zero.`, String.raw`Nếu $-1\le y\le1$, thì $y-1\le0$ và $y+1\ge0$. Mỗi biểu thức trên nửa trục đều không vượt quá không, và $x=0$ đạt giá trị không.`),
      b(String.raw`If $y>1$, then $(y-1)x\to+\infty$ as $x\to+\infty$. If $y<-1$, then $(y+1)x\to+\infty$ as $x\to-\infty$.`, String.raw`Nếu $y>1$, thì $(y-1)x\to+\infty$ khi $x\to+\infty$. Nếu $y<-1$, thì $(y+1)x\to+\infty$ khi $x\to-\infty$.`),
      b(String.raw`Thus the conjugate is zero exactly on the dual interval $[-1,1]$ and infinite outside it, not a finite penalty there.`, String.raw`Vì vậy hàm liên hợp bằng không đúng trên khoảng đối ngẫu $[-1,1]$ và vô hạn bên ngoài, chứ không phải một mức phạt hữu hạn ở đó.`),
    ],
    primarySolution: [
      b(String.raw`For $x\ge0$, $yx-|x|=(y-1)x$; for $x\le0$, $yx-|x|=(y+1)x$.`, String.raw`Với $x\ge0$, $yx-|x|=(y-1)x$; với $x\le0$, $yx-|x|=(y+1)x$.`),
      b(String.raw`When $-1\le y\le1$, both expressions are at most zero on their respective half-lines, and $x=0$ gives zero. Hence $f^*(y)=0$.`, String.raw`Khi $-1\le y\le1$, cả hai biểu thức đều không dương trên nửa trục tương ứng, còn $x=0$ cho giá trị không. Do đó $f^*(y)=0$.`),
      b(String.raw`When $y>1$, the first expression diverges as $x\to+\infty$; when $y<-1$, the second diverges as $x\to-\infty$. Thus $f^*(y)=+\infty$ outside $[-1,1]$, so $f^*=\delta_{[-1,1]}$.`, String.raw`Khi $y>1$, biểu thức thứ nhất tiến tới vô hạn khi $x\to+\infty$; khi $y<-1$, biểu thức thứ hai tiến tới vô hạn khi $x\to-\infty$. Vậy $f^*(y)=+\infty$ ngoài $[-1,1]$, nên $f^*=\delta_{[-1,1]}$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(x)=\lambda|x|$ with $\lambda>0$, compute $f^*(y)$ and its effective domain.`, String.raw`Với $f(x)=\lambda|x|$, $\lambda>0$, hãy tính $f^*(y)$ và miền hữu hiệu của nó.`),
        solution: [
          b(String.raw`For $x\ge0$, $yx-f(x)=(y-\lambda)x$; for $x\le0$, it is $(y+\lambda)x$.`, String.raw`Với $x\ge0$, $yx-f(x)=(y-\lambda)x$; với $x\le0$, biểu thức là $(y+\lambda)x$.`),
          b(String.raw`If $-\lambda\le y\le\lambda$, both half-line expressions are at most zero and $x=0$ attains zero.`, String.raw`Nếu $-\lambda\le y\le\lambda$, cả hai biểu thức trên nửa trục không vượt quá không và $x=0$ đạt giá trị không.`),
          b(String.raw`If $y>\lambda$ or $y<-\lambda$, the corresponding half-line expression grows without bound. Thus $f^*(y)=0$ on $[-\lambda,\lambda]$ and $+\infty$ outside.`, String.raw`Nếu $y>\lambda$ hoặc $y<-\lambda$, biểu thức trên nửa trục tương ứng tăng vô hạn. Do đó $f^*(y)=0$ trên $[-\lambda,\lambda]$ và $+\infty$ bên ngoài.`),
        ],
      },
      {
        prompt: b(String.raw`For a fixed $c\in\mathbb R$, compute the conjugate of $g(x)=|x-c|$. State its finite values and effective domain.`, String.raw`Với $c\in\mathbb R$ cố định, hãy tính hàm liên hợp của $g(x)=|x-c|$. Nêu các giá trị hữu hạn và miền hữu hiệu.`),
        solution: [
          b(String.raw`Set $z=x-c$. Then $yx-|x-c|=yc+(yz-|z|)$, so $g^*(y)=yc+\sup_z(yz-|z|)$.`, String.raw`Đặt $z=x-c$. Khi đó $yx-|x-c|=yc+(yz-|z|)$, nên $g^*(y)=yc+\sup_z(yz-|z|)$.`),
          b(String.raw`The remaining supremum is zero for $|y|\le1$ and infinite otherwise, by the two half-line calculation for absolute value.`, String.raw`Supremum còn lại bằng không khi $|y|\le1$ và vô hạn nếu không, theo phép tính trên hai nửa trục của giá trị tuyệt đối.`),
          b(String.raw`Therefore $g^*(y)=yc$ for $y\in[-1,1]$ and $+\infty$ outside that interval; its effective domain is $[-1,1]$.`, String.raw`Vì vậy $g^*(y)=yc$ khi $y\in[-1,1]$ và $+\infty$ ngoài khoảng đó; miền hữu hiệu là $[-1,1]$.`),
        ],
      },
      {
        prompt: b(String.raw`Compute the conjugate of $h(x)=\tfrac12x^2+|x|$. Show why adding a quadratic changes the effective domain from a bounded interval to all of $\mathbb R$.`, String.raw`Hãy tính hàm liên hợp của $h(x)=\tfrac12x^2+|x|$. Giải thích vì sao cộng số hạng bình phương làm miền hữu hiệu từ khoảng bị chặn thành toàn bộ $\mathbb R$.`),
        solution: [
          b(String.raw`For $x\ge0$, maximize $(y-1)x-\tfrac12x^2$; its maximum is zero if $y\le1$, and $(y-1)^2/2$ if $y>1$.`, String.raw`Với $x\ge0$, tối đa hóa $(y-1)x-\tfrac12x^2$; cực đại bằng không nếu $y\le1$, và bằng $(y-1)^2/2$ nếu $y>1$.`),
          b(String.raw`For $x\le0$, maximize $(y+1)x-\tfrac12x^2$; its maximum is zero if $y\ge-1$, and $(y+1)^2/2$ if $y<-1$.`, String.raw`Với $x\le0$, tối đa hóa $(y+1)x-\tfrac12x^2$; cực đại bằng không nếu $y\ge-1$, và bằng $(y+1)^2/2$ nếu $y<-1$.`),
          b(String.raw`Taking the larger half-line supremum gives $h^*(y)=0$ for $|y|\le1$ and $h^*(y)=\tfrac12(|y|-1)^2$ for $|y|>1$. The negative quadratic term forces a finite maximum for every $y$, so the domain is all $\mathbb R$.`, String.raw`Lấy supremum lớn hơn trên hai nửa trục được $h^*(y)=0$ khi $|y|\le1$ và $h^*(y)=\tfrac12(|y|-1)^2$ khi $|y|>1$. Số hạng bậc hai âm buộc cực đại hữu hạn với mọi $y$, nên miền là toàn $\mathbb R$.`),
        ],
      },
    ],
    reviewNote: 'Checked the exact dual interval including both endpoints, and the divergence directions for y>1 and y<-1. Restriction: the conjugate is an extended-real indicator; replacing infinity outside the interval by a finite quadratic changes the effective domain.',
    sourceIds: ['o-boyd'],
  },
  'm2-w063-e4': {
    application: b(String.raw`A Fenchel dual variable can certify a lower bound without identifying the primal optimizer. The two conjugate inequalities introduce opposite inner products, which cancel when the objective terms are added.`, String.raw`Biến đối ngẫu Fenchel có thể chứng nhận cận dưới mà không cần xác định nghiệm tối ưu gốc. Hai bất đẳng thức liên hợp tạo ra các tích vô hướng trái dấu, rồi triệt tiêu khi cộng các số hạng mục tiêu.`),
    formula: b(String.raw`For proper convex $f,g$ and linear $A$, Fenchel–Young gives $f(x)+g(Ax)\ge -f^*(-A^Tq)-g^*(q)$ for every $x,q$. Taking $\inf_x$ and then $\sup_q$ yields weak duality; equality needs further attainment or qualification conditions.`, String.raw`Với $f,g$ lồi chính thường và ánh xạ tuyến tính $A$, Fenchel–Young cho $f(x)+g(Ax)\ge -f^*(-A^Tq)-g^*(q)$ với mọi $x,q$. Lấy $\inf_x$ rồi $\sup_q$ cho đối ngẫu yếu; đẳng thức cần thêm điều kiện đạt được hoặc điều kiện chuẩn hóa.`),
    steps: [
      b(String.raw`Apply Fenchel–Young to $f$ at $x$ and slope $-A^Tq$: $f(x)+f^*(-A^Tq)\ge-q^TAx$.`, String.raw`Áp dụng Fenchel–Young cho $f$ tại $x$ với hệ số góc $-A^Tq$: $f(x)+f^*(-A^Tq)\ge-q^TAx$.`),
      b(String.raw`Apply it to $g$ at $Ax$ and slope $q$: $g(Ax)+g^*(q)\ge q^TAx$.`, String.raw`Áp dụng cho $g$ tại $Ax$ với hệ số góc $q$: $g(Ax)+g^*(q)\ge q^TAx$.`),
      b(String.raw`Add the inequalities. The terms $-q^TAx$ and $q^TAx$ cancel, leaving $f(x)+g(Ax)\ge-f^*(-A^Tq)-g^*(q)$.`, String.raw`Cộng hai bất đẳng thức. Các số hạng $-q^TAx$ và $q^TAx$ triệt tiêu, còn $f(x)+g(Ax)\ge-f^*(-A^Tq)-g^*(q)$.`),
      b(String.raw`The right side is a lower bound for every $x$. Infimizing the left side and maximizing over $q$ preserves the bound, but does not alone establish that either extremum is attained or that equality holds.`, String.raw`Vế phải là cận dưới đúng với mọi $x$. Lấy infimum vế trái và supremum theo $q$ vẫn giữ cận, nhưng tự nó không chứng minh hai cực trị đạt được hay có đẳng thức.`),
    ],
    primarySolution: [
      b(String.raw`Fenchel–Young for $f$ at $x$ with argument $-A^Tq$ gives $f(x)+f^*(-A^Tq)\ge(-A^Tq)^Tx=-q^TAx$.`, String.raw`Fenchel–Young cho $f$ tại $x$ với đối số $-A^Tq$ cho $f(x)+f^*(-A^Tq)\ge(-A^Tq)^Tx=-q^TAx$.`),
      b(String.raw`For $g$ at $Ax$ with argument $q$, it gives $g(Ax)+g^*(q)\ge q^TAx$.`, String.raw`Với $g$ tại $Ax$ và đối số $q$, ta có $g(Ax)+g^*(q)\ge q^TAx$.`),
      b(String.raw`Adding cancels the inner products, yielding $f(x)+g(Ax)\ge-f^*(-A^Tq)-g^*(q)$ for every $x,q$.`, String.raw`Cộng hai bất đẳng thức làm triệt tiêu tích vô hướng, thu được $f(x)+g(Ax)\ge-f^*(-A^Tq)-g^*(q)$ với mọi $x,q$.`),
      b(String.raw`Taking the infimum over $x$ and then the supremum over $q$ gives a weak-duality lower bound. Equality is not automatic because attainment and a suitable qualification have not been established.`, String.raw`Lấy infimum theo $x$ rồi supremum theo $q$ cho cận dưới đối ngẫu yếu. Đẳng thức không tự động xảy ra vì chưa chứng minh điều kiện đạt được hay một giả thiết chuẩn hóa phù hợp.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $F(x)=\tfrac12x^2+|2x|$. Use Fenchel–Young with scalar dual variable $q$ to derive a lower bound for every $x$ and identify a choice of $q$ giving the exact minimum.`, String.raw`Cho $F(x)=\tfrac12x^2+|2x|$. Dùng Fenchel–Young với biến đối ngẫu vô hướng $q$ để suy ra cận dưới với mọi $x$ và tìm $q$ cho đúng giá trị cực tiểu.`),
        solution: [
          b(String.raw`Write $F(x)=f(x)+g(2x)$ with $f(x)=\tfrac12x^2$ and $g(z)=|z|$. Their conjugates are $f^*(s)=\tfrac12s^2$ and $g^*(q)=\delta_{[-1,1]}(q)$.`, String.raw`Viết $F(x)=f(x)+g(2x)$ với $f(x)=\tfrac12x^2$ và $g(z)=|z|$. Hàm liên hợp là $f^*(s)=\tfrac12s^2$ và $g^*(q)=\delta_{[-1,1]}(q)$.`),
          b(String.raw`The cancellation inequality gives $F(x)\ge-f^*(-2q)-g^*(q)=-2q^2$ when $|q|\le1$; outside that interval the bound is $-\infty$.`, String.raw`Bất đẳng thức triệt tiêu cho $F(x)\ge-f^*(-2q)-g^*(q)=-2q^2$ khi $|q|\le1$; ngoài khoảng đó cận là $-\infty$.`),
          b(String.raw`Choosing $q=0$ gives $F(x)\ge0$. Since $F(0)=0$, the minimum is exactly zero and this dual choice certifies it.`, String.raw`Chọn $q=0$ được $F(x)\ge0$. Vì $F(0)=0$, cực tiểu đúng bằng không và lựa chọn đối ngẫu này chứng nhận kết quả.`),
        ],
      },
      {
        prompt: b(String.raw`For the problem $\min \tfrac12x^2$ subject to $x=2$, compute the equality Lagrangian dual function and show why its multiplier is unrestricted.`, String.raw`Với bài toán $\min \tfrac12x^2$ thỏa $x=2$, hãy tính hàm đối ngẫu Lagrange của ràng buộc đẳng thức và giải thích vì sao nhân tử không bị giới hạn dấu.`),
        solution: [
          b(String.raw`For any $\nu\in\mathbb R$, set $L(x,\nu)=\tfrac12x^2+\nu(x-2)$. The equality term vanishes at every feasible point, regardless of the sign of $\nu$.`, String.raw`Với mọi $\nu\in\mathbb R$, đặt $L(x,\nu)=\tfrac12x^2+\nu(x-2)$. Số hạng đẳng thức triệt tiêu tại mọi điểm khả thi, bất kể dấu của $\nu$.`),
          b(String.raw`Minimizing over $x$ gives $x=-\nu$ and $q(\nu)=-\tfrac12\nu^2-2\nu=2-\tfrac12(\nu+2)^2$.`, String.raw`Tối thiểu hóa theo $x$ cho $x=-\nu$ và $q(\nu)=-\tfrac12\nu^2-2\nu=2-\tfrac12(\nu+2)^2$.`),
          b(String.raw`Thus $q(\nu)\le2$ for every real $\nu$, with equality at $\nu=-2$. The primal feasible value is $\tfrac12(2)^2=2$, so the unrestricted dual maximizer certifies the same value.`, String.raw`Vì thế $q(\nu)\le2$ với mọi $\nu$ thực và đạt đẳng thức tại $\nu=-2$. Giá trị khả thi gốc là $\tfrac12(2)^2=2$, nên nghiệm đối ngẫu không giới hạn dấu chứng nhận cùng giá trị.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min x^2+1$ subject to $x\le-2$, compute the Lagrangian dual function and verify that a dual-feasible multiplier gives a valid lower bound.`, String.raw`Với $\min x^2+1$ thỏa $x\le-2$, hãy tính hàm đối ngẫu Lagrange và kiểm tra một nhân tử khả thi đối ngẫu cho cận dưới hợp lệ.`),
        solution: [
          b(String.raw`Write $g(x)=x+2\le0$, so $L(x,\lambda)=x^2+1+\lambda(x+2)$ for $\lambda\ge0$.`, String.raw`Viết $g(x)=x+2\le0$, nên $L(x,\lambda)=x^2+1+\lambda(x+2)$ với $\lambda\ge0$.`),
          b(String.raw`For fixed $\lambda$, the minimizing point solves $2x+\lambda=0$, hence $x=-\lambda/2$. Substitution gives $q(\lambda)=1+2\lambda-\lambda^2/4$.`, String.raw`Với $\lambda$ cố định, điểm cực tiểu giải $2x+\lambda=0$, nên $x=-\lambda/2$. Thế vào được $q(\lambda)=1+2\lambda-\lambda^2/4$.`),
          b(String.raw`At the dual-feasible choice $\lambda=4$, $q(4)=5$. The feasible primal point $x=-2$ has value $(-2)^2+1=5$, so weak duality is tight and certifies optimality.`, String.raw`Tại lựa chọn khả thi đối ngẫu $\lambda=4$, $q(4)=5$. Điểm gốc khả thi $x=-2$ có giá trị $(-2)^2+1=5$, nên đối ngẫu yếu đạt sát và chứng nhận tối ưu.`),
        ],
      },
    ],
    reviewNote: 'Checked the opposite signs of the Fenchel–Young inner products and the cancellation, and kept equality unrestricted. Restriction: the bound is weak duality only; no strong-duality claim is made without attainment or qualification.',
    sourceIds: ['o-boyd'],
  },
  'm2-w063-e5': {
    application: b(String.raw`A hard domain restriction can remove dual slopes entirely. A soft finite penalty may discourage such slopes, but it does not exclude them; that distinction changes the optimization model rather than merely its numerical scale.`, String.raw`Ràng buộc miền cứng có thể loại hẳn một số hệ số góc đối ngẫu. Phạt mềm hữu hạn có thể hạn chế các hệ số góc đó nhưng không loại chúng; đây là thay đổi mô hình tối ưu chứ không chỉ đổi thang số.`),
    formula: b(String.raw`For $f=\delta_{[0,\infty)}$, $f^*(y)=\sup_{x\ge0}yx=0$ if $y\le0$ and $+\infty$ if $y>0$. Thus $\operatorname{dom}f^*=(-\infty,0]$, an exact dual feasibility restriction.`, String.raw`Với $f=\delta_{[0,\infty)}$, $f^*(y)=\sup_{x\ge0}yx=0$ nếu $y\le0$ và $+\infty$ nếu $y>0$. Vì vậy $\operatorname{dom}f^*=(-\infty,0]$, một hạn chế khả thi đối ngẫu chính xác.`),
    steps: [
      b(String.raw`The indicator confines the supremum to $x\ge0$, so evaluate $\sup_{x\ge0}yx$.`, String.raw`Hàm chỉ thị giới hạn supremum trong $x\ge0$, nên ta tính $\sup_{x\ge0}yx$.`),
      b(String.raw`When $y\le0$, the product is at most zero and $x=0$ attains zero. When $y>0$, it grows without bound as $x\to+\infty$.`, String.raw`Khi $y\le0$, tích không vượt quá không và $x=0$ đạt giá trị không. Khi $y>0$, tích tăng vô hạn khi $x\to+\infty$.`),
      b(String.raw`Hence the conjugate is zero on $(-\infty,0]$ and infinite for positive $y$.`, String.raw`Do đó hàm liên hợp bằng không trên $(-\infty,0]$ và vô hạn với $y$ dương.`),
      b(String.raw`A finite quadratic conjugate penalty would assign a finite value to positive $y$, so it would permit candidates that the indicator conjugate forbids.`, String.raw`Một số hạng phạt bình phương hữu hạn sẽ gán giá trị hữu hạn cho $y$ dương, nên cho phép các ứng viên mà hàm liên hợp của chỉ thị cấm.`),
    ],
    primarySolution: [
      b(String.raw`For $f=\delta_{[0,\infty)}$, only $x\ge0$ contributes, so $f^*(y)=\sup_{x\ge0}yx$.`, String.raw`Với $f=\delta_{[0,\infty)}$, chỉ $x\ge0$ đóng góp, nên $f^*(y)=\sup_{x\ge0}yx$.`),
      b(String.raw`If $y\le0$, then $yx\le0$ for every feasible $x$, with equality at zero; hence $f^*(y)=0$. If $y>0$, taking $x\to+\infty$ makes $yx\to+\infty$.`, String.raw`Nếu $y\le0$, thì $yx\le0$ với mọi $x$ khả thi và có đẳng thức tại không; do đó $f^*(y)=0$. Nếu $y>0$, cho $x\to+\infty$ khiến $yx\to+\infty$.`),
      b(String.raw`Therefore $f^*=\delta_{(-\infty,0]}$. Its effective domain excludes positive slopes entirely, whereas a finite quadratic penalty remains finite there and describes a different dual feasible set.`, String.raw`Vì thế $f^*=\delta_{(-\infty,0]}$. Miền hữu hiệu loại hẳn các hệ số góc dương, còn phạt bình phương hữu hạn vẫn hữu hạn ở đó và mô tả tập khả thi đối ngẫu khác.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $f(x)=e^x$. Compute or characterize its conjugate, including exactly which $y$ give a finite value.`, String.raw`Cho $f(x)=e^x$. Hãy tính hoặc mô tả hàm liên hợp, gồm chính xác những $y$ nào cho giá trị hữu hạn.`),
        solution: [
          b(String.raw`For fixed $y$, maximize $yx-e^x$. If $y<0$, taking $x\to-\infty$ makes $yx-e^x\to+\infty$, so the conjugate is infinite.`, String.raw`Với $y$ cố định, tối đa hóa $yx-e^x$. Nếu $y<0$, cho $x\to-\infty$ khiến $yx-e^x\to+\infty$, nên hàm liên hợp vô hạn.`),
          b(String.raw`If $y=0$, the supremum of $-e^x$ is zero as $x\to-\infty$, so $f^*(0)=0$.`, String.raw`Nếu $y=0$, supremum của $-e^x$ tiến tới không khi $x\to-\infty$, nên $f^*(0)=0$.`),
          b(String.raw`For $y>0$, the derivative condition $y-e^x=0$ gives $x=\ln y$ and maximum $y\ln y-y$. Thus $f^*(y)=y\ln y-y$ for $y>0$, finite domain $[0,\infty)$.`, String.raw`Với $y>0$, điều kiện đạo hàm $y-e^x=0$ cho $x=\ln y$ và cực đại $y\ln y-y$. Vậy $f^*(y)=y\ln y-y$ khi $y>0$, với miền hữu hạn $[0,\infty)$.`),
        ],
      },
      {
        prompt: b(String.raw`For the linear function $f(x)=3x$, determine $f^*(y)$ and its effective domain.`, String.raw`Với hàm tuyến tính $f(x)=3x$, hãy xác định $f^*(y)$ và miền hữu hiệu.`),
        solution: [
          b(String.raw`By definition, $f^*(y)=\sup_x (y-3)x$.`, String.raw`Theo định nghĩa, $f^*(y)=\sup_x (y-3)x$.`),
          b(String.raw`If $y=3$, the expression is zero for every $x$, so the supremum is zero.`, String.raw`Nếu $y=3$, biểu thức bằng không với mọi $x$, nên supremum bằng không.`),
          b(String.raw`If $y>3$, send $x\to+\infty$; if $y<3$, send $x\to-\infty$. In either case it diverges, so $f^*(y)=0$ at $y=3$ and $+\infty$ otherwise.`, String.raw`Nếu $y>3$, cho $x\to+\infty$; nếu $y<3$, cho $x\to-\infty$. Cả hai trường hợp đều phân kỳ, nên $f^*(y)=0$ tại $y=3$ và $+\infty$ ở nơi khác.`),
        ],
      },
      {
        prompt: b(String.raw`For $C=[-1,1]$, find the conjugate of $\delta_C$ and compare its effective domain with that of the half-line indicator.`, String.raw`Với $C=[-1,1]$, hãy tìm hàm liên hợp của $\delta_C$ và so sánh miền hữu hiệu của nó với hàm chỉ thị nửa trục.`),
        solution: [
          b(String.raw`The conjugate is the support function $\sup_{x\in[-1,1]}yx$.`, String.raw`Hàm liên hợp là hàm tựa $\sup_{x\in[-1,1]}yx$.`),
          b(String.raw`For $y>0$, the maximum occurs at $x=1$ and equals $y$; for $y<0$, it occurs at $x=-1$ and equals $-y$. At zero it is zero.`, String.raw`Với $y>0$, cực đại tại $x=1$ và bằng $y$; với $y<0$, cực đại tại $x=-1$ và bằng $-y$. Tại không, giá trị bằng không.`),
          b(String.raw`Thus $\delta_C^*(y)=|y|$, finite for every real $y$. The bounded interval has a full real effective domain, unlike the half-line indicator whose conjugate is infinite for positive $y$.`, String.raw`Do đó $\delta_C^*(y)=|y|$, hữu hạn với mọi $y$ thực. Khoảng bị chặn có miền hữu hiệu là toàn trục thực, khác với hàm chỉ thị nửa trục có liên hợp vô hạn khi $y$ dương.`),
        ],
      },
    ],
    reviewNote: 'Checked the half-line supremum for y=0, y<0, and y>0 separately, and preserved infinity outside the effective domain. Restriction: this is a hard indicator domain; a finite penalty cannot be substituted without changing dual feasibility.',
    sourceIds: ['o-boyd'],
  },
  'm2-w064-e1': {
    application: b(String.raw`A one-sided design limit can force the best operating point onto a boundary. The KKT multiplier measures the boundary force that balances the objective gradient at that constrained optimum.`, String.raw`Giới hạn thiết kế một phía có thể buộc điểm vận hành tốt nhất nằm trên biên. Nhân tử KKT đo lực biên cân bằng gradient mục tiêu tại nghiệm có ràng buộc đó.`),
    formula: b(String.raw`For differentiable convex $f$ and $g$ with $g(x)\le0$, KKT requires feasibility, $\lambda\ge0$, stationarity $\nabla f(x^*)+\lambda\nabla g(x^*)=0$, and $\lambda g(x^*)=0$. Under these convex assumptions, any KKT point is globally optimal.`, String.raw`Với $f$ và $g$ khả vi lồi cùng $g(x)\le0$, KKT yêu cầu tính khả thi, $\lambda\ge0$, dừng $\nabla f(x^*)+\lambda\nabla g(x^*)=0$ và bù trừ $\lambda g(x^*)=0$. Với các giả thiết lồi này, mọi điểm KKT đều tối ưu toàn cục.`),
    steps: [
      b(String.raw`The unconstrained quadratic has its minimum at $x=-1$, which violates $x\ge0$; write the feasible constraint as $g(x)=-x\le0$.`, String.raw`Hàm bậc hai không ràng buộc đạt cực tiểu tại $x=-1$, vi phạm $x\ge0$; viết ràng buộc khả thi thành $g(x)=-x\le0$.`),
      b(String.raw`The feasible objective is increasing for $x\ge0$ because $f'(x)=x+1>0$, so the constrained minimizer is the boundary point $x^*=0$.`, String.raw`Hàm mục tiêu tăng trên $x\ge0$ vì $f'(x)=x+1>0$, nên nghiệm có ràng buộc là điểm biên $x^*=0$.`),
      b(String.raw`Stationarity is $x+1-\lambda=0$, so at zero the multiplier is $\lambda=1\ge0$. The constraint is active and $\lambda g(0)=1\cdot0=0$.`, String.raw`Điều kiện dừng là $x+1-\lambda=0$, nên tại không nhân tử là $\lambda=1\ge0$. Ràng buộc hoạt động và $\lambda g(0)=1\cdot0=0$.`),
      b(String.raw`Convexity makes these KKT conditions sufficient for global optimality, confirming $x^*=0$.`, String.raw`Tính lồi làm các điều kiện KKT này đủ cho tối ưu toàn cục, xác nhận $x^*=0$.`),
    ],
    primarySolution: [
      b(String.raw`Without the constraint, $\tfrac12(x+1)^2$ is minimized at $x=-1$, which is infeasible. On $x\ge0$, its derivative $x+1$ is positive, so the minimum is $x^*=0$.`, String.raw`Không có ràng buộc, $\tfrac12(x+1)^2$ đạt cực tiểu tại $x=-1$, không khả thi. Trên $x\ge0$, đạo hàm $x+1$ dương, nên cực tiểu tại $x^*=0$.`),
      b(String.raw`Use $g(x)=-x\le0$. At $x^*=0$, feasibility and activity hold. Stationarity $f'(0)+\lambda g'(0)=1-\lambda=0$ gives $\lambda=1\ge0$.`, String.raw`Dùng $g(x)=-x\le0$. Tại $x^*=0$, tính khả thi và tính hoạt động đều đúng. Điều kiện dừng $f'(0)+\lambda g'(0)=1-\lambda=0$ cho $\lambda=1\ge0$.`),
      b(String.raw`Complementary slackness is $\lambda g(0)=1\cdot0=0$. The convex KKT sufficiency result therefore certifies the global minimizer $x^*=0$.`, String.raw`Điều kiện bù trừ là $\lambda g(0)=1\cdot0=0$. Vì vậy định lý đủ KKT cho bài toán lồi chứng nhận cực tiểu toàn cục $x^*=0$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Solve $\min \tfrac12(x-2)^2$ subject to $x\le0$. Write and verify the KKT multiplier.`, String.raw`Giải $\min \tfrac12(x-2)^2$ với điều kiện $x\le0$. Hãy viết và kiểm tra nhân tử KKT.`),
        solution: [
          b(String.raw`The unconstrained minimizer is $x=2$, outside the feasible half-line $x\le0$. The objective decreases up to $2$, so its feasible minimum is $x^*=0$.`, String.raw`Nghiệm không ràng buộc là $x=2$, ngoài nửa trục khả thi $x\le0$. Hàm mục tiêu giảm tới $2$, nên cực tiểu khả thi là $x^*=0$.`),
          b(String.raw`Set $g(x)=x\le0$. Stationarity is $x-2+\lambda=0$, which at zero gives $\lambda=2\ge0$.`, String.raw`Đặt $g(x)=x\le0$. Điều kiện dừng là $x-2+\lambda=0$, tại không cho $\lambda=2\ge0$.`),
          b(String.raw`The constraint is active and $\lambda g(0)=2\cdot0=0$. Convexity and the verified KKT conditions prove global optimality.`, String.raw`Ràng buộc hoạt động và $\lambda g(0)=2\cdot0=0$. Tính lồi cùng các điều kiện KKT đã kiểm tra chứng minh tối ưu toàn cục.`),
        ],
      },
      {
        prompt: b(String.raw`Solve $\min \tfrac12(x-3)^2$ subject to $x\ge1$. Determine whether the constraint is active and find its KKT multiplier.`, String.raw`Giải $\min \tfrac12(x-3)^2$ với điều kiện $x\ge1$. Xác định ràng buộc có hoạt động không và tìm nhân tử KKT.`),
        solution: [
          b(String.raw`The unconstrained minimizer $x=3$ is feasible, so it remains the constrained minimizer.`, String.raw`Nghiệm không ràng buộc $x=3$ khả thi, nên vẫn là nghiệm có ràng buộc.`),
          b(String.raw`Write $g(x)=1-x\le0$. At $x=3$, $g(3)=-2<0$, so the inequality is inactive and complementary slackness requires $\lambda=0$.`, String.raw`Viết $g(x)=1-x\le0$. Tại $x=3$, $g(3)=-2<0$, nên bất đẳng thức không hoạt động và điều kiện bù trừ yêu cầu $\lambda=0$.`),
          b(String.raw`Stationarity is $x-3-\lambda=0$, which holds at $(x,\lambda)=(3,0)$. This feasible KKT point is globally optimal by convexity.`, String.raw`Điều kiện dừng là $x-3-\lambda=0$, đúng tại $(x,\lambda)=(3,0)$. Tính lồi cho biết điểm KKT khả thi này tối ưu toàn cục.`),
        ],
      },
      {
        prompt: b(String.raw`Solve $\min \tfrac12(x+2)^2$ subject to $x\ge0$ and verify all KKT conditions at the solution.`, String.raw`Giải $\min \tfrac12(x+2)^2$ với điều kiện $x\ge0$ và kiểm tra mọi điều kiện KKT tại nghiệm.`),
        solution: [
          b(String.raw`The unconstrained minimizer $-2$ is infeasible; on $x\ge0$, the derivative $x+2$ is positive, so $x^*=0$.`, String.raw`Nghiệm không ràng buộc $-2$ không khả thi; trên $x\ge0$, đạo hàm $x+2$ dương, nên $x^*=0$.`),
          b(String.raw`Use $g(x)=-x\le0$. Stationarity $x+2-\lambda=0$ gives $\lambda=2\ge0$ at zero.`, String.raw`Dùng $g(x)=-x\le0$. Điều kiện dừng $x+2-\lambda=0$ cho $\lambda=2\ge0$ tại không.`),
          b(String.raw`Primal feasibility holds, the constraint is active, and $\lambda g(0)=2\cdot0=0$. Thus all KKT conditions hold, and convexity certifies the global solution.`, String.raw`Tính khả thi gốc đúng, ràng buộc hoạt động và $\lambda g(0)=2\cdot0=0$. Vậy mọi điều kiện KKT đều đúng và tính lồi chứng nhận nghiệm toàn cục.`),
        ],
      },
    ],
    reviewNote: 'Checked the feasible boundary minimizer, the sign g(x)=-x for x≥0, multiplier λ=1, and complementarity at equality. Restriction: KKT sufficiency uses convex differentiable objective and constraint; no necessity claim beyond this regular scalar case is needed.',
    sourceIds: ['o-boyd'],
  },
  'm2-w064-e2': {
    application: b(String.raw`A KKT certificate explains why a feasible alternative cannot have lower objective: the objective's supporting plane, constraint curvature, equality feasibility, multiplier signs, and complementary slackness all contribute distinct pieces.`, String.raw`Chứng chỉ KKT giải thích vì sao phương án khả thi khác không thể có mục tiêu thấp hơn: mặt phẳng đỡ của mục tiêu, độ cong ràng buộc, tính khả thi đẳng thức, dấu nhân tử và điều kiện bù trừ mỗi yếu tố đóng góp riêng.`),
    formula: b(String.raw`For convex differentiable $f,g$ with $g(x)\le0$ and affine $Ax=b$, KKT sufficiency follows from $\nabla f(x^*)=-\lambda\nabla g(x^*)-A^T\nu$, $\lambda\ge0$, and $\lambda g(x^*)=0$, for feasible $x^*$.`, String.raw`Với $f,g$ lồi khả vi, $g(x)\le0$ và $Ax=b$ affine, tính đủ của KKT suy ra từ $\nabla f(x^*)=-\lambda\nabla g(x^*)-A^T\nu$, $\lambda\ge0$ và $\lambda g(x^*)=0$, tại điểm khả thi $x^*$.`),
    steps: [
      b(String.raw`Fix any feasible $y$. Convexity of $f$ gives $f(y)\ge f(x^*)+\nabla f(x^*)^T(y-x^*)$.`, String.raw`Cố định $y$ khả thi bất kỳ. Tính lồi của $f$ cho $f(y)\ge f(x^*)+\nabla f(x^*)^T(y-x^*)$.`),
      b(String.raw`Substitute stationarity. Since both $y$ and $x^*$ satisfy $Ax=b$, the term $\nu^TA(y-x^*)$ is zero, leaving the lower bound $f(y)\ge f(x^*)-\lambda\nabla g(x^*)^T(y-x^*)$.`, String.raw`Thế điều kiện dừng. Vì cả $y$ lẫn $x^*$ đều thỏa $Ax=b$, số hạng $\nu^TA(y-x^*)$ bằng không, còn cận $f(y)\ge f(x^*)-\lambda\nabla g(x^*)^T(y-x^*)$.`),
      b(String.raw`Convexity of $g$ gives $\nabla g(x^*)^T(y-x^*)\le g(y)-g(x^*)\le-g(x^*)$. Multiplying by $-\lambda$ reverses the inequality because $\lambda\ge0$.`, String.raw`Tính lồi của $g$ cho $\nabla g(x^*)^T(y-x^*)\le g(y)-g(x^*)\le-g(x^*)$. Nhân với $-\lambda$ đảo chiều bất đẳng thức vì $\lambda\ge0$.`),
      b(String.raw`Thus $-\lambda\nabla g(x^*)^T(y-x^*)\ge\lambda g(x^*)=0$ by complementary slackness, so $f(y)\ge f(x^*)$.`, String.raw`Do đó $-\lambda\nabla g(x^*)^T(y-x^*)\ge\lambda g(x^*)=0$ theo điều kiện bù trừ, nên $f(y)\ge f(x^*)$.`),
    ],
    primarySolution: [
      b(String.raw`For any feasible $y$, convexity gives $f(y)\ge f(x^*)+\nabla f(x^*)^T(y-x^*)$. Substitute stationarity to replace the gradient by $-\lambda\nabla g(x^*)-A^T\nu$.`, String.raw`Với $y$ khả thi bất kỳ, tính lồi cho $f(y)\ge f(x^*)+\nabla f(x^*)^T(y-x^*)$. Thế điều kiện dừng để thay gradient bằng $-\lambda\nabla g(x^*)-A^T\nu$.`),
      b(String.raw`The equality term vanishes because $A(y-x^*)=b-b=0$. Convexity of $g$ yields $\nabla g(x^*)^T(y-x^*)\le g(y)-g(x^*)\le-g(x^*)$.`, String.raw`Số hạng đẳng thức triệt tiêu vì $A(y-x^*)=b-b=0$. Tính lồi của $g$ cho $\nabla g(x^*)^T(y-x^*)\le g(y)-g(x^*)\le-g(x^*)$.`),
      b(String.raw`Since $\lambda\ge0$, multiplying by $-\lambda$ reverses the last bound: $-\lambda\nabla g(x^*)^T(y-x^*)\ge\lambda g(x^*)$. Complementary slackness makes $\lambda g(x^*)=0$.`, String.raw`Vì $\lambda\ge0$, nhân với $-\lambda$ đảo cận cuối: $-\lambda\nabla g(x^*)^T(y-x^*)\ge\lambda g(x^*)$. Điều kiện bù trừ cho $\lambda g(x^*)=0$.`),
      b(String.raw`Therefore $f(y)\ge f(x^*)$ for every feasible $y$, which proves KKT sufficiency. Convexity gives the supporting inequalities, and the multiplier sign is essential for the inequality direction.`, String.raw`Vì thế $f(y)\ge f(x^*)$ với mọi $y$ khả thi, chứng minh tính đủ của KKT. Tính lồi cho các bất đẳng thức đỡ, còn dấu nhân tử thiết yếu để giữ đúng chiều bất đẳng thức.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\min \tfrac12x^2$ subject to $x\ge1$, verify the KKT point and use the sufficiency argument to compare its objective with every feasible $y$.`, String.raw`Với $\min \tfrac12x^2$ thỏa $x\ge1$, hãy kiểm tra điểm KKT và dùng chứng minh tính đủ để so sánh mục tiêu với mọi $y$ khả thi.`),
        solution: [
          b(String.raw`Write $g(x)=1-x\le0$. The boundary candidate is $x^*=1$; stationarity $x-\lambda=0$ gives $\lambda=1\ge0$, and $\lambda g(1)=0$.`, String.raw`Viết $g(x)=1-x\le0$. Ứng viên biên là $x^*=1$; điều kiện dừng $x-\lambda=0$ cho $\lambda=1\ge0$, và $\lambda g(1)=0$.`),
          b(String.raw`For feasible $y\ge1$, the objective's first-order bound is $\tfrac12y^2\ge\tfrac12+1\cdot(y-1)$.`, String.raw`Với $y\ge1$ khả thi, cận bậc nhất của mục tiêu là $\tfrac12y^2\ge\tfrac12+1\cdot(y-1)$.`),
          b(String.raw`The right side is at least $1/2$ because $y-1\ge0$. Thus $f(y)\ge f(1)$ for every feasible $y$, directly proving optimality.`, String.raw`Vế phải không nhỏ hơn $1/2$ vì $y-1\ge0$. Do đó $f(y)\ge f(1)$ với mọi $y$ khả thi, trực tiếp chứng minh tối ưu.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12(x^2+y^2)$ subject to $x+y=1$, solve the equality KKT system and explain why no multiplier sign restriction is needed.`, String.raw`Với $\min \tfrac12(x^2+y^2)$ thỏa $x+y=1$, hãy giải hệ KKT đẳng thức và giải thích vì sao nhân tử không cần hạn chế dấu.`),
        solution: [
          b(String.raw`Use $L=\tfrac12(x^2+y^2)+\nu(x+y-1)$. Stationarity gives $x+\nu=0$ and $y+\nu=0$, so $x=y=-\nu$.`, String.raw`Dùng $L=\tfrac12(x^2+y^2)+\nu(x+y-1)$. Điều kiện dừng cho $x+\nu=0$ và $y+\nu=0$, nên $x=y=-\nu$.`),
          b(String.raw`The equality $x+y=1$ then gives $-2\nu=1$, so $\nu=-1/2$ and $(x^*,y^*)=(1/2,1/2)$.`, String.raw`Đẳng thức $x+y=1$ cho $-2\nu=1$, nên $\nu=-1/2$ và $(x^*,y^*)=(1/2,1/2)$.`),
          b(String.raw`For any feasible $(x,y)$, the equality residual is exactly zero, so its product with $\nu$ vanishes for every real sign. Convexity of the objective makes this KKT point globally minimizing.`, String.raw`Với mọi $(x,y)$ khả thi, phần dư đẳng thức đúng bằng không, nên tích với $\nu$ triệt tiêu dù dấu nào. Tính lồi của mục tiêu khiến điểm KKT này tối ưu toàn cục.`),
        ],
      },
      {
        prompt: b(String.raw`Show why a negative inequality multiplier cannot be allowed by considering $\min x$ subject to $x\le0$. At $x^*=0$, test stationarity with $\lambda=-1$ and compare with a feasible point.`, String.raw`Dùng $\min x$ với điều kiện $x\le0$ để chỉ ra vì sao không thể cho phép nhân tử bất đẳng thức âm. Tại $x^*=0$, hãy thử điều kiện dừng với $\lambda=-1$ và so với một điểm khả thi.`),
        solution: [
          b(String.raw`Set $g(x)=x\le0$. At $x^*=0$, primal feasibility and complementary slackness hold. With the invalid choice $\lambda=-1$, stationarity reads $1+\lambda=0$, so it also appears to hold.`, String.raw`Đặt $g(x)=x\le0$. Tại $x^*=0$, tính khả thi gốc và bù trừ đều đúng. Với lựa chọn không hợp lệ $\lambda=-1$, điều kiện dừng là $1+\lambda=0$, nên bề ngoài cũng đúng.`),
          b(String.raw`But $y=-1$ is feasible and has objective $f(y)=-1<0=f(0)$, so zero is not a minimizer.`, String.raw`Nhưng $y=-1$ khả thi và có mục tiêu $f(y)=-1<0=f(0)$, nên không là nghiệm cực tiểu.`),
          b(String.raw`The sufficiency proof fails at the sign step: multiplying a nonpositive constraint-gradient term by $-\lambda>0$ does not yield the needed nonnegative lower bound when $\lambda<0$. Hence inequality multipliers must satisfy $\lambda\ge0$.`, String.raw`Chứng minh tính đủ hỏng ở bước dấu: nhân một số hạng gradient ràng buộc không dương với $-\lambda>0$ khi $\lambda<0$ không cho cận dưới không âm cần thiết. Vì vậy nhân tử bất đẳng thức phải thỏa $\lambda\ge0$.`),
        ],
      },
    ],
    reviewNote: 'Checked the convex-gradient inequalities, equality cancellation A(y−x*)=0, sign reversal from λ≥0, and the exact use of complementary slackness. Restriction: differentiability and convexity of both f and g are required for the stated supporting inequalities.',
    sourceIds: ['o-boyd'],
  },
  'm2-w064-e3': {
    application: b(String.raw`Projecting an unconstrained target onto a feasible region models the closest admissible design or estimate. Active constraints determine the face reached, while their KKT multipliers balance the displacement from the target.`, String.raw`Chiếu mục tiêu không ràng buộc lên miền khả thi mô hình hóa thiết kế hoặc ước lượng hợp lệ gần nhất. Ràng buộc hoạt động xác định mặt biên đạt tới, còn nhân tử KKT cân bằng độ lệch khỏi mục tiêu.`),
    formula: b(String.raw`The Euclidean projection of $c$ onto a closed convex set $C$ minimizes $\tfrac12\|x-c\|^2$. For affine inequalities $g_i(x)\le0$, KKT stationarity is $x^*-c+\sum_i\lambda_i\nabla g_i=0$ with $\lambda_i\ge0$ and $\lambda_i g_i(x^*)=0$.`, String.raw`Phép chiếu Euclid của $c$ lên tập lồi đóng $C$ tối thiểu hóa $\tfrac12\|x-c\|^2$. Với bất đẳng thức affine $g_i(x)\le0$, điều kiện dừng KKT là $x^*-c+\sum_i\lambda_i\nabla g_i=0$, cùng $\lambda_i\ge0$ và $\lambda_i g_i(x^*)=0$.`),
    steps: [
      b(String.raw`The feasible set is $(-\infty,1]\times[0,\infty)$. The squared distance separates by coordinates, so clamp $c_1=2$ to the upper bound $1$ and $c_2=-1$ to the lower bound $0$.`, String.raw`Miền khả thi là $(-\infty,1]\times[0,\infty)$. Bình phương khoảng cách tách theo tọa độ, nên chặn $c_1=2$ tại cận trên $1$ và $c_2=-1$ tại cận dưới $0$.`),
      b(String.raw`This gives the projection $x^*=(1,0)$. Write the active inequalities as $g_1=x_1-1\le0$ and $g_2=-x_2\le0$.`, String.raw`Phép chiếu là $x^*=(1,0)$. Viết các bất đẳng thức hoạt động thành $g_1=x_1-1\le0$ và $g_2=-x_2\le0$.`),
      b(String.raw`Stationarity uses $x^*-c=(-1,1)$, so $(-1,1)+\lambda_1(1,0)+\lambda_2(0,-1)=0$ gives $\lambda_1=1$ and $\lambda_2=1$.`, String.raw`Điều kiện dừng dùng $x^*-c=(-1,1)$, nên $(-1,1)+\lambda_1(1,0)+\lambda_2(0,-1)=0$ cho $\lambda_1=1$ và $\lambda_2=1$.`),
      b(String.raw`Both multipliers are nonnegative and both constraints equal zero at $x^*$, so complementarity holds. Convexity makes this KKT projection globally optimal.`, String.raw`Cả hai nhân tử không âm và hai ràng buộc đều bằng không tại $x^*$, nên điều kiện bù trừ đúng. Tính lồi khiến phép chiếu KKT này tối ưu toàn cục.`),
    ],
    primarySolution: [
      b(String.raw`The feasible set is $x_1\le1$, $x_2\ge0$. Coordinatewise projection of $c=(2,-1)$ gives $x^*=(1,0)$.`, String.raw`Miền khả thi là $x_1\le1$, $x_2\ge0$. Phép chiếu theo từng tọa độ của $c=(2,-1)$ cho $x^*=(1,0)$.`),
      b(String.raw`Write $g_1=x_1-1$ and $g_2=-x_2$. Then $x^*-c=(-1,1)$ and stationarity becomes $(-1,1)+\lambda_1(1,0)+\lambda_2(0,-1)=(0,0)$.`, String.raw`Viết $g_1=x_1-1$ và $g_2=-x_2$. Khi đó $x^*-c=(-1,1)$ và điều kiện dừng là $(-1,1)+\lambda_1(1,0)+\lambda_2(0,-1)=(0,0)$.`),
      b(String.raw`Solving the two coordinates gives $\lambda_1=1$ and $\lambda_2=1$. Both are nonnegative; $g_1(x^*)=g_2(x^*)=0$, so complementary slackness holds.`, String.raw`Giải theo hai tọa độ cho $\lambda_1=1$ và $\lambda_2=1$. Cả hai không âm; $g_1(x^*)=g_2(x^*)=0$, nên điều kiện bù trừ đúng.`),
      b(String.raw`The squared-distance objective and the feasible rectangle are convex, so the KKT point is the unique Euclidean projection of $c$.`, String.raw`Mục tiêu bình phương khoảng cách và hình chữ nhật khả thi đều lồi, nên điểm KKT là phép chiếu Euclid duy nhất của $c$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Project $c=(3,2)$ onto $C=\{x:x_1\le1,\ x_2\le1\}$ by minimizing $\tfrac12\|x-c\|^2$. Give both KKT multipliers.`, String.raw`Chiếu $c=(3,2)$ lên $C=\{x:x_1\le1,\ x_2\le1\}$ bằng cách tối thiểu hóa $\tfrac12\|x-c\|^2$. Hãy tìm cả hai nhân tử KKT.`),
        solution: [
          b(String.raw`Each coordinate is above its upper bound, so the nearest feasible point is $x^*=(1,1)$. Set $g_1=x_1-1$ and $g_2=x_2-1$.`, String.raw`Mỗi tọa độ vượt cận trên, nên điểm khả thi gần nhất là $x^*=(1,1)$. Đặt $g_1=x_1-1$ và $g_2=x_2-1$.`),
          b(String.raw`The objective gradient is $x^*-c=(-2,-1)$. Stationarity $(-2,-1)+\lambda_1(1,0)+\lambda_2(0,1)=0$ gives $\lambda_1=2$, $\lambda_2=1$.`, String.raw`Gradient mục tiêu là $x^*-c=(-2,-1)$. Điều kiện dừng $(-2,-1)+\lambda_1(1,0)+\lambda_2(0,1)=0$ cho $\lambda_1=2$, $\lambda_2=1$.`),
          b(String.raw`Both constraints are active and both multipliers are nonnegative. Convexity of the squared distance certifies the projection.`, String.raw`Cả hai ràng buộc đều hoạt động và hai nhân tử không âm. Tính lồi của bình phương khoảng cách chứng nhận phép chiếu.`),
        ],
      },
      {
        prompt: b(String.raw`Project $c=(-2,1)$ onto the first quadrant $C=\{x_1\ge0,x_2\ge0\}$. Identify which constraint is active and compute its multiplier.`, String.raw`Chiếu $c=(-2,1)$ lên góc phần tư thứ nhất $C=\{x_1\ge0,x_2\ge0\}$. Hãy xác định ràng buộc nào hoạt động và tính nhân tử của nó.`),
        solution: [
          b(String.raw`The closest feasible point clamps the negative first coordinate to zero and leaves the already feasible second coordinate unchanged: $x^*=(0,1)$.`, String.raw`Điểm khả thi gần nhất chặn tọa độ thứ nhất âm về không và giữ nguyên tọa độ thứ hai đã khả thi: $x^*=(0,1)$.`),
          b(String.raw`Write $g_1=-x_1\le0$ and $g_2=-x_2\le0$. The gradient $x^*-c=(2,0)$ gives stationarity $(2,0)-\lambda_1(1,0)-\lambda_2(0,1)=0$, so $\lambda_1=2$, $\lambda_2=0$.`, String.raw`Viết $g_1=-x_1\le0$ và $g_2=-x_2\le0$. Gradient $x^*-c=(2,0)$ cho điều kiện dừng $(2,0)-\lambda_1(1,0)-\lambda_2(0,1)=0$, nên $\lambda_1=2$, $\lambda_2=0$.`),
          b(String.raw`The first constraint is active; the second is slack since $x_2^*=1$. Nonnegativity and complementary slackness hold, so this is the convex projection.`, String.raw`Ràng buộc thứ nhất hoạt động; ràng buộc thứ hai lỏng vì $x_2^*=1$. Tính không âm và bù trừ đều đúng, nên đây là phép chiếu lồi.`),
        ],
      },
      {
        prompt: b(String.raw`Project $c=(2,2)$ onto the half-space $C=\{x:x_1+x_2\le1\}$. Find the projection and its single multiplier.`, String.raw`Chiếu $c=(2,2)$ lên nửa mặt phẳng $C=\{x:x_1+x_2\le1\}$. Hãy tìm phép chiếu và nhân tử duy nhất.`),
        solution: [
          b(String.raw`By symmetry the projection has equal coordinates, and the active boundary requires their sum to be one; hence $x^*=(1/2,1/2)$.`, String.raw`Do tính đối xứng, phép chiếu có hai tọa độ bằng nhau; biên hoạt động yêu cầu tổng bằng một, nên $x^*=(1/2,1/2)$.`),
          b(String.raw`Let $g(x)=x_1+x_2-1\le0$. Then $x^*-c=(-3/2,-3/2)$, and stationarity is $x^*-c+\lambda(1,1)=0$.`, String.raw`Đặt $g(x)=x_1+x_2-1\le0$. Khi đó $x^*-c=(-3/2,-3/2)$, và điều kiện dừng là $x^*-c+\lambda(1,1)=0$.`),
          b(String.raw`Each coordinate gives $-3/2+\lambda=0$, so $\lambda=3/2\ge0$. The boundary is active and the convex KKT certificate proves this is the unique projection.`, String.raw`Mỗi tọa độ cho $-3/2+\lambda=0$, nên $\lambda=3/2\ge0$. Biên hoạt động và chứng chỉ KKT lồi chứng minh đây là phép chiếu duy nhất.`),
        ],
      },
    ],
    reviewNote: 'Checked coordinatewise projection, the signs of g1=x1−1 and g2=−x2, stationarity coordinates, and both active constraints. Restriction: the projection region is the stated product of half-lines; coordinatewise clamping applies because its constraints separate.',
    sourceIds: ['o-boyd'],
  },
  'm2-w064-e4': {
    application: b(String.raw`A convex feasible set can contain an optimizer at which the written constraint gradients fail to point toward useful supporting normals. Constraint qualifications explain when KKT multipliers are guaranteed to exist; they are not part of the sufficiency proof itself.`, String.raw`Tập khả thi lồi có thể chứa nghiệm tối ưu tại nơi gradient của các ràng buộc đã viết không tạo được pháp tuyến đỡ hữu ích. Điều kiện chuẩn hóa ràng buộc giải thích khi nào bảo đảm tồn tại nhân tử KKT; chúng không phải thành phần của chứng minh tính đủ.`),
    formula: b(String.raw`For a differentiable convex problem, any feasible KKT point is optimal. Slater's condition (a point satisfying every convex inequality strictly and the affine equalities) is a sufficient qualification for KKT multiplier existence; failure of Slater removes that guarantee but does not itself prove a duality gap.`, String.raw`Với bài toán lồi khả vi, mọi điểm KKT khả thi đều tối ưu. Điều kiện Slater (có điểm thỏa nghiêm mọi bất đẳng thức lồi và thỏa các đẳng thức affine) là điều kiện chuẩn hóa đủ để bảo đảm tồn tại nhân tử KKT; Slater thất bại làm mất bảo đảm đó nhưng tự nó không chứng minh có khoảng cách đối ngẫu.`),
    steps: [
      b(String.raw`The constraint $x^2\le0$ forces $x=0$, since a square is nonnegative. Thus zero is the only feasible point and is automatically optimal for the objective $x$.`, String.raw`Ràng buộc $x^2\le0$ buộc $x=0$ vì bình phương không âm. Do đó không là điểm khả thi duy nhất và tự động tối ưu cho mục tiêu $x$.`),
      b(String.raw`KKT stationarity would require $1+\lambda(2x)=0$ at $x=0$, which reduces to $1=0$ for every finite multiplier.`, String.raw`Điều kiện dừng KKT đòi hỏi $1+\lambda(2x)=0$ tại $x=0$, rút gọn thành $1=0$ với mọi nhân tử hữu hạn.`),
      b(String.raw`Slater requires some $x$ with $x^2<0$, but no real number satisfies that inequality. The qualification fails.`, String.raw`Slater đòi hỏi có $x$ thỏa $x^2<0$, nhưng không số thực nào thỏa bất đẳng thức đó. Điều kiện chuẩn hóa thất bại.`),
      b(String.raw`There is no contradiction with KKT sufficiency: that result says a KKT point is optimal, not that every optimizer has multipliers without a qualification.`, String.raw`Điều này không mâu thuẫn với tính đủ KKT: định lý nói điểm KKT là tối ưu, chứ không nói mọi nghiệm tối ưu đều có nhân tử khi thiếu điều kiện chuẩn hóa.`),
    ],
    primarySolution: [
      b(String.raw`Feasibility $x^2\le0$ and $x^2\ge0$ together imply $x=0$. Since this is the sole feasible point, it is the minimizer and its objective value is zero.`, String.raw`Tính khả thi $x^2\le0$ cùng $x^2\ge0$ suy ra $x=0$. Vì đây là điểm khả thi duy nhất, nó là nghiệm cực tiểu và giá trị mục tiêu bằng không.`),
      b(String.raw`With $g(x)=x^2$, KKT stationarity is $f'(x)+\lambda g'(x)=1+2\lambda x=0$. At the only feasible point $x=0$, this becomes $1=0$, so no multiplier exists.`, String.raw`Với $g(x)=x^2$, điều kiện dừng KKT là $f'(x)+\lambda g'(x)=1+2\lambda x=0$. Tại điểm khả thi duy nhất $x=0$, phương trình thành $1=0$, nên không có nhân tử.`),
      b(String.raw`Slater would require $x^2<0$, which is impossible, so Slater fails. KKT sufficiency remains valid: it makes existing KKT points optimal but does not guarantee an optimizer has multipliers when the qualification fails.`, String.raw`Slater sẽ yêu cầu $x^2<0$, điều không thể, nên Slater thất bại. Tính đủ KKT vẫn đúng: nó khiến điểm KKT đã có trở thành tối ưu nhưng không bảo đảm nghiệm có nhân tử khi điều kiện chuẩn hóa thất bại.`),
    ],
    companions: [
      {
        prompt: b(String.raw`In $\mathbb R^2$, minimize $f(x_1,x_2)=x_1$ subject to $x_1^2+x_2^2\le0$. Prove optimality and test whether KKT multipliers exist.`, String.raw`Trong $\mathbb R^2$, tối thiểu hóa $f(x_1,x_2)=x_1$ với điều kiện $x_1^2+x_2^2\le0$. Hãy chứng minh tối ưu và xét có nhân tử KKT không.`),
        solution: [
          b(String.raw`A sum of squares is nonnegative, so the constraint forces $x_1=x_2=0$. This singleton is feasible and therefore the unique optimizer, with value zero.`, String.raw`Tổng bình phương không âm, nên ràng buộc buộc $x_1=x_2=0$. Tập đơn này khả thi nên là nghiệm duy nhất, có giá trị không.`),
          b(String.raw`The constraint gradient is $\nabla g(0,0)=(0,0)$, while $\nabla f(0,0)=(1,0)$. Stationarity $(1,0)+\lambda(0,0)=(0,0)$ is impossible for every finite $\lambda$.`, String.raw`Gradient ràng buộc là $\nabla g(0,0)=(0,0)$, còn $\nabla f(0,0)=(1,0)$. Điều kiện dừng $(1,0)+\lambda(0,0)=(0,0)$ bất khả thi với mọi $\lambda$ hữu hạn.`),
          b(String.raw`No strict feasible point exists because $x_1^2+x_2^2<0$ is impossible. Thus Slater fails and provides no multiplier guarantee.`, String.raw`Không có điểm khả thi nghiêm vì $x_1^2+x_2^2<0$ là bất khả thi. Do đó Slater thất bại và không bảo đảm có nhân tử.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min x^2$ subject to $x^2\le0$, show that Slater fails but KKT multipliers do exist.`, String.raw`Với $\min x^2$ thỏa $x^2\le0$, hãy chỉ ra Slater thất bại nhưng nhân tử KKT vẫn tồn tại.`),
        solution: [
          b(String.raw`The feasible set is only $x=0$, so the optimizer is $x^*=0$ with value zero. Strict feasibility would require $x^2<0$, which is impossible.`, String.raw`Tập khả thi chỉ gồm $x=0$, nên nghiệm là $x^*=0$ với giá trị không. Tính khả thi nghiêm đòi hỏi $x^2<0$, điều không thể.`),
          b(String.raw`Stationarity is $2x+\lambda(2x)=0$. At zero it holds for every $\lambda\ge0$, for example $\lambda=0$.`, String.raw`Điều kiện dừng là $2x+\lambda(2x)=0$. Tại không, phương trình đúng với mọi $\lambda\ge0$, chẳng hạn $\lambda=0$.`),
          b(String.raw`Feasibility and complementary slackness also hold, so KKT multipliers exist despite failure of Slater. The failed qualification removes a guarantee; it does not force failure in every instance.`, String.raw`Tính khả thi và bù trừ cũng đúng, nên nhân tử KKT tồn tại dù Slater thất bại. Điều kiện chuẩn hóa thất bại làm mất sự bảo đảm, chứ không buộc mọi trường hợp đều thất bại.`),
        ],
      },
      {
        prompt: b(String.raw`Consider $\min x$ subject to the two convex inequalities $x\le0$ and $-x\le0$. Find a KKT certificate and check Slater's condition.`, String.raw`Xét $\min x$ với hai bất đẳng thức lồi $x\le0$ và $-x\le0$. Hãy tìm chứng chỉ KKT và kiểm tra điều kiện Slater.`),
        solution: [
          b(String.raw`The two inequalities force $x=0$, so zero is the only feasible point and is the optimizer.`, String.raw`Hai bất đẳng thức buộc $x=0$, nên không là điểm khả thi duy nhất và là nghiệm tối ưu.`),
          b(String.raw`Let $g_1(x)=x$ and $g_2(x)=-x$. Stationarity is $1+\lambda_1-\lambda_2=0$; choose $\lambda_1=0$, $\lambda_2=1$. Both are nonnegative, both constraints are active, and complementarity holds.`, String.raw`Đặt $g_1(x)=x$ và $g_2(x)=-x$. Điều kiện dừng là $1+\lambda_1-\lambda_2=0$; chọn $\lambda_1=0$, $\lambda_2=1$. Cả hai không âm, hai ràng buộc hoạt động và bù trừ đúng.`),
          b(String.raw`Slater would require both $x<0$ and $-x<0$, which cannot hold together. Thus Slater fails although this representation has KKT multipliers.`, String.raw`Slater sẽ đòi hỏi đồng thời $x<0$ và $-x<0$, điều không thể. Vì vậy Slater thất bại dù cách biểu diễn này có nhân tử KKT.`),
        ],
      },
    ],
    reviewNote: 'Checked the singleton feasible set, zero constraint gradient, impossible stationarity equation 1=0, and the exact strict-feasibility failure. Restriction: this diagnoses KKT multiplier necessity for the given representation; it does not challenge KKT sufficiency.',
    sourceIds: ['o-boyd'],
  },
  'm2-w064-e5': {
    application: b(String.raw`Complementary slackness links a multiplier to whether a constraint is tight, but it says nothing by itself about whether the objective gradient is balanced. A complete KKT certificate needs feasibility, the multiplier sign, stationarity, and complementarity together.`, String.raw`Điều kiện bù trừ liên kết nhân tử với việc ràng buộc có chặt hay không, nhưng riêng nó không nói gradient mục tiêu đã được cân bằng chưa. Chứng chỉ KKT đầy đủ cần đồng thời tính khả thi, dấu nhân tử, điều kiện dừng và điều kiện bù trừ.`),
    formula: b(String.raw`For $g_i(x)\le0$, complementary slackness is $\lambda_i g_i(x^*)=0$. It is only one KKT condition; stationarity $\nabla f(x^*)+\sum_i\lambda_i\nabla g_i(x^*)=0$, primal feasibility, and $\lambda_i\ge0$ are separate requirements.`, String.raw`Với $g_i(x)\le0$, điều kiện bù trừ là $\lambda_i g_i(x^*)=0$. Đây chỉ là một điều kiện KKT; dừng $\nabla f(x^*)+\sum_i\lambda_i\nabla g_i(x^*)=0$, tính khả thi gốc và $\lambda_i\ge0$ là các yêu cầu riêng.`),
    steps: [
      b(String.raw`Take the convex objective $f(x)=(x-2)^2$ and the always-feasible inequality $g(x)=-1\le0$. At $x=0$, feasibility holds.`, String.raw`Xét mục tiêu lồi $f(x)=(x-2)^2$ và bất đẳng thức luôn khả thi $g(x)=-1\le0$. Tại $x=0$, tính khả thi đúng.`),
      b(String.raw`Choosing $\lambda=0$ gives $\lambda g(0)=0$, so complementary slackness holds, and the multiplier is nonnegative.`, String.raw`Chọn $\lambda=0$ cho $\lambda g(0)=0$, nên bù trừ đúng và nhân tử không âm.`),
      b(String.raw`Stationarity would require $f'(0)+\lambda g'(0)=-4+0=0$, which is false.`, String.raw`Điều kiện dừng sẽ yêu cầu $f'(0)+\lambda g'(0)=-4+0=0$, điều này sai.`),
      b(String.raw`Indeed $f(0)=4$ while the feasible point $x=2$ has value zero. Complementarity alone therefore cannot certify optimality.`, String.raw`Thật vậy $f(0)=4$, còn điểm khả thi $x=2$ có giá trị không. Vì vậy riêng điều kiện bù trừ không thể chứng nhận tối ưu.`),
    ],
    primarySolution: [
      b(String.raw`Here $f(x)=(x-2)^2$ is convex and $g(x)=-1\le0$ is redundant. The point $x=0$ is feasible, and choosing $\lambda=0$ gives $\lambda g(0)=0$, satisfying complementary slackness.`, String.raw`Ở đây $f(x)=(x-2)^2$ lồi và $g(x)=-1\le0$ là ràng buộc dư. Điểm $x=0$ khả thi; chọn $\lambda=0$ cho $\lambda g(0)=0$, thỏa bù trừ.`),
      b(String.raw`But $f'(0)=2(0-2)=-4$ and $g'(0)=0$, so stationarity would require $-4+0=0$, which fails.`, String.raw`Nhưng $f'(0)=2(0-2)=-4$ và $g'(0)=0$, nên điều kiện dừng sẽ đòi $-4+0=0$, điều không đúng.`),
      b(String.raw`The feasible point $x=2$ has $f(2)=0<4=f(0)$, proving $x=0$ is not optimal. Complementary slackness without stationarity is insufficient.`, String.raw`Điểm khả thi $x=2$ có $f(2)=0<4=f(0)$, chứng minh $x=0$ không tối ưu. Bù trừ mà thiếu điều kiện dừng là chưa đủ.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\min (x+1)^2$ subject to $x\ge0$, choose a feasible point and multiplier satisfying complementary slackness but not stationarity, then show the point is not optimal.`, String.raw`Với $\min (x+1)^2$ thỏa $x\ge0$, hãy chọn một điểm khả thi và nhân tử thỏa bù trừ nhưng không thỏa dừng, rồi chứng minh điểm đó không tối ưu.`),
        solution: [
          b(String.raw`Write $g(x)=-x\le0$. Choose $x=2$ and $\lambda=0$. The point is feasible, the multiplier is nonnegative, and $\lambda g(2)=0$.`, String.raw`Viết $g(x)=-x\le0$. Chọn $x=2$ và $\lambda=0$. Điểm khả thi, nhân tử không âm và $\lambda g(2)=0$.`),
          b(String.raw`Stationarity fails: $f'(2)+\lambda g'(2)=2(2+1)-0=6\ne0$.`, String.raw`Điều kiện dừng thất bại: $f'(2)+\lambda g'(2)=2(2+1)-0=6\ne0$.`),
          b(String.raw`The feasible point $x=0$ has value $1$, while $x=2$ has value $9$, so the chosen point is not a minimizer.`, String.raw`Điểm khả thi $x=0$ có giá trị $1$, còn $x=2$ có giá trị $9$, nên điểm đã chọn không là nghiệm cực tiểu.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min (x-1)^2$ subject to $x\le0$, give a feasible point and nonnegative multiplier satisfying complementary slackness while failing stationarity.`, String.raw`Với $\min (x-1)^2$ thỏa $x\le0$, hãy cho điểm khả thi và nhân tử không âm thỏa bù trừ nhưng không thỏa dừng.`),
        solution: [
          b(String.raw`Let $g(x)=x\le0$ and choose the feasible point $x=-1$ with $\lambda=0$. Since the constraint is slack, $\lambda g(-1)=0$.`, String.raw`Đặt $g(x)=x\le0$ và chọn điểm khả thi $x=-1$ với $\lambda=0$. Vì ràng buộc lỏng, $\lambda g(-1)=0$.`),
          b(String.raw`The derivative is $f'(-1)=2(-1-1)=-4$, so stationarity $f'(-1)+\lambda g'(-1)=0$ fails.`, String.raw`Đạo hàm là $f'(-1)=2(-1-1)=-4$, nên điều kiện dừng $f'(-1)+\lambda g'(-1)=0$ thất bại.`),
          b(String.raw`The feasible point $x=0$ has objective $1$, whereas the selected point has $(-2)^2=4$. Thus feasibility and complementarity do not suffice.`, String.raw`Điểm khả thi $x=0$ có mục tiêu $1$, trong khi điểm đã chọn có $(-2)^2=4$. Vì vậy tính khả thi và bù trừ chưa đủ.`),
        ],
      },
      {
        prompt: b(String.raw`Minimize $\tfrac12\|x-(1,1)\|^2$ subject to $x_1\le0$. At $x=(-1,1)$ with $\lambda=0$, check feasibility and complementary slackness, then show stationarity and optimality fail.`, String.raw`Tối thiểu hóa $\tfrac12\|x-(1,1)\|^2$ với điều kiện $x_1\le0$. Tại $x=(-1,1)$ và $\lambda=0$, hãy kiểm tra tính khả thi, bù trừ, rồi chỉ ra dừng và tối ưu thất bại.`),
        solution: [
          b(String.raw`The point $(-1,1)$ is feasible and the constraint $g(x)=x_1\le0$ is slack. With $\lambda=0$, complementary slackness holds.`, String.raw`Điểm $(-1,1)$ khả thi và ràng buộc $g(x)=x_1\le0$ lỏng. Với $\lambda=0$, điều kiện bù trừ đúng.`),
          b(String.raw`The objective gradient there is $x-(1,1)=(-2,0)$, while $\lambda\nabla g=(0,0)$. Their sum is nonzero, so stationarity fails.`, String.raw`Gradient mục tiêu tại đó là $x-(1,1)=(-2,0)$, còn $\lambda\nabla g=(0,0)$. Tổng khác không nên điều kiện dừng thất bại.`),
          b(String.raw`The feasible point $(0,1)$ has objective $1/2$, while $(-1,1)$ has objective $2$. Hence the selected point is not optimal despite complementarity.`, String.raw`Điểm khả thi $(0,1)$ có mục tiêu $1/2$, còn $(-1,1)$ có mục tiêu $2$. Vì vậy điểm đã chọn không tối ưu dù bù trừ đúng.`),
        ],
      },
    ],
    reviewNote: 'Checked primal feasibility, λ≥0, λg=0, the failed stationarity equation, and an explicit feasible point with lower objective. Restriction: complementarity is tested under the g(x)≤0 convention; it is not treated as a stand-alone optimality theorem.',
    sourceIds: ['o-boyd'],
  },
  'm2-w065-e1': {
    application: b(String.raw`A dual multiplier prices a lower-bound requirement. Optimizing the Lagrangian over the unconstrained variable produces a concave function of that price; its maximum can certify the constrained quadratic's value.`, String.raw`Nhân tử đối ngẫu định giá một yêu cầu cận dưới. Tối ưu hóa Lagrangian theo biến không ràng buộc tạo ra hàm lõm theo mức giá đó; cực đại của nó có thể chứng nhận giá trị bài toán bậc hai có ràng buộc.`),
    formula: b(String.raw`For $\min f_0(x)$ subject to $g_i(x)\le0$, $q(\lambda)=\inf_x\{f_0(x)+\sum_i\lambda_i g_i(x)\}$ with $\lambda_i\ge0$. The dual maximizes this concave lower bound; here $g(x)=2-x$.`, String.raw`Với $\min f_0(x)$ thỏa $g_i(x)\le0$, $q(\lambda)=\inf_x\{f_0(x)+\sum_i\lambda_i g_i(x)\}$ với $\lambda_i\ge0$. Đối ngẫu tối đa hóa cận dưới lõm này; ở đây $g(x)=2-x$.`),
    steps: [
      b(String.raw`Write the constraint $x\ge2$ as $g(x)=2-x\le0$, giving $L(x,\lambda)=\tfrac12x^2+\lambda(2-x)$ for $\lambda\ge0$.`, String.raw`Viết ràng buộc $x\ge2$ thành $g(x)=2-x\le0$, nên $L(x,\lambda)=\tfrac12x^2+\lambda(2-x)$ với $\lambda\ge0$.`),
      b(String.raw`For fixed $\lambda$, minimize the quadratic in $x$: $\partial L/\partial x=x-\lambda=0$, so the unique minimizer is $x=\lambda$.`, String.raw`Với $\lambda$ cố định, tối thiểu hóa theo $x$: $\partial L/\partial x=x-\lambda=0$, nên nghiệm duy nhất là $x=\lambda$.`),
      b(String.raw`Substitute to obtain $q(\lambda)=\tfrac12\lambda^2+\lambda(2-\lambda)=2\lambda-\tfrac12\lambda^2$. This is concave on $\lambda\ge0$.`, String.raw`Thế vào được $q(\lambda)=\tfrac12\lambda^2+\lambda(2-\lambda)=2\lambda-\tfrac12\lambda^2$. Hàm này lõm trên $\lambda\ge0$.`),
      b(String.raw`Its derivative is $2-\lambda$, so the maximum occurs at $\lambda^*=2$ and equals $2$. The primal feasible minimum is at $x=2$ with value $2$, hence the gap is zero.`, String.raw`Đạo hàm là $2-\lambda$, nên cực đại đạt tại $\lambda^*=2$ với giá trị $2$. Cực tiểu khả thi gốc đạt tại $x=2$ với giá trị $2$, nên khoảng cách bằng không.`),
    ],
    primarySolution: [
      b(String.raw`The Lagrangian is $L(x,\lambda)=\tfrac12x^2+\lambda(2-x)$ for $\lambda\ge0$. Its derivative in $x$ is $x-\lambda$, so its infimum occurs at $x=\lambda$.`, String.raw`Lagrangian là $L(x,\lambda)=\tfrac12x^2+\lambda(2-x)$ với $\lambda\ge0$. Đạo hàm theo $x$ là $x-\lambda$, nên infimum đạt tại $x=\lambda$.`),
      b(String.raw`Substitution gives $q(\lambda)=\tfrac12\lambda^2+2\lambda-\lambda^2=2\lambda-\tfrac12\lambda^2$. Solving $q'(\lambda)=2-\lambda=0$ gives $\lambda^*=2$, and $q(2)=2$.`, String.raw`Thế vào được $q(\lambda)=\tfrac12\lambda^2+2\lambda-\lambda^2=2\lambda-\tfrac12\lambda^2$. Giải $q'(\lambda)=2-\lambda=0$ cho $\lambda^*=2$, và $q(2)=2$.`),
      b(String.raw`Primal feasibility requires $x\ge2$; the objective $\tfrac12x^2$ is minimized there at $x^*=2$ with $p^*=2$. Thus the dual optimum equals the primal optimum and the gap is zero.`, String.raw`Tính khả thi gốc yêu cầu $x\ge2$; mục tiêu $\tfrac12x^2$ đạt cực tiểu trên miền đó tại $x^*=2$ với $p^*=2$. Vậy cực đại đối ngẫu bằng cực tiểu gốc và khoảng cách bằng không.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\min \tfrac12x^2$ subject to $x\ge3$, derive and maximize the dual function, then compare the dual and primal values.`, String.raw`Với $\min \tfrac12x^2$ thỏa $x\ge3$, hãy suy ra và tối đa hóa hàm đối ngẫu, rồi so sánh giá trị đối ngẫu và gốc.`),
        solution: [
          b(String.raw`Set $g(x)=3-x\le0$. Then $L(x,\lambda)=\tfrac12x^2+\lambda(3-x)$ with $\lambda\ge0$, minimized in the variable $x$ at $x=\lambda$.`, String.raw`Đặt $g(x)=3-x\le0$. Khi đó $L(x,\lambda)=\tfrac12x^2+\lambda(3-x)$ với $\lambda\ge0$, đạt cực tiểu theo $x$ tại $x=\lambda$.`),
          b(String.raw`Substitution gives $q(\lambda)=3\lambda-\tfrac12\lambda^2$. Its derivative $3-\lambda$ vanishes at $\lambda^*=3$, where $q=9-9/2=9/2$.`, String.raw`Thế vào được $q(\lambda)=3\lambda-\tfrac12\lambda^2$. Đạo hàm $3-\lambda$ bằng không tại $\lambda^*=3$, nơi $q=9-9/2=9/2$.`),
          b(String.raw`The primal minimum is at $x=3$ with value $\tfrac12(3)^2=9/2$. The values agree, so this multiplier certifies zero duality gap.`, String.raw`Cực tiểu gốc đạt tại $x=3$ với giá trị $\tfrac12(3)^2=9/2$. Hai giá trị bằng nhau, nên nhân tử này chứng nhận khoảng cách đối ngẫu bằng không.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12(x-1)^2$ subject to $x\ge2$, find the dual function, its maximizing multiplier, and the primal value.`, String.raw`Với $\min \tfrac12(x-1)^2$ thỏa $x\ge2$, hãy tìm hàm đối ngẫu, nhân tử cực đại và giá trị gốc.`),
        solution: [
          b(String.raw`Write $g(x)=2-x\le0$. Then $L=\tfrac12(x-1)^2+\lambda(2-x)$, and stationarity in $x$ gives $x=1+\lambda$.`, String.raw`Viết $g(x)=2-x\le0$. Khi đó $L=\tfrac12(x-1)^2+\lambda(2-x)$, và điều kiện dừng theo $x$ cho $x=1+\lambda$.`),
          b(String.raw`Substituting yields $q(\lambda)=\tfrac12\lambda^2+\lambda(1-\lambda)=\lambda-\tfrac12\lambda^2$. This is maximized over $\lambda\ge0$ at $\lambda=1$, with value $1/2$.`, String.raw`Thế vào được $q(\lambda)=\tfrac12\lambda^2+\lambda(1-\lambda)=\lambda-\tfrac12\lambda^2$. Hàm đạt cực đại trên $\lambda\ge0$ tại $\lambda=1$, giá trị $1/2$.`),
          b(String.raw`The feasible objective is minimized at $x=2$, giving $p^*=\tfrac12(2-1)^2=1/2$. This matches the dual maximum.`, String.raw`Mục tiêu khả thi đạt cực tiểu tại $x=2$, cho $p^*=\tfrac12(2-1)^2=1/2$. Giá trị này bằng cực đại đối ngẫu.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12(x+1)^2$ subject to $x\le-2$, derive the dual function and show the optimizing multiplier gives the primal value.`, String.raw`Với $\min \tfrac12(x+1)^2$ thỏa $x\le-2$, hãy suy ra hàm đối ngẫu và chỉ ra nhân tử tối ưu cho giá trị gốc.`),
        solution: [
          b(String.raw`Write $g(x)=x+2\le0$, so $L=\tfrac12(x+1)^2+\lambda(x+2)$ for $\lambda\ge0$. Stationarity gives $x=-1-\lambda$.`, String.raw`Viết $g(x)=x+2\le0$, nên $L=\tfrac12(x+1)^2+\lambda(x+2)$ với $\lambda\ge0$. Điều kiện dừng cho $x=-1-\lambda$.`),
          b(String.raw`Substitution yields $q(\lambda)=\tfrac12\lambda^2+\lambda(1-\lambda)=\lambda-\tfrac12\lambda^2$, maximized at $\lambda=1$ with value $1/2$.`, String.raw`Thế vào được $q(\lambda)=\tfrac12\lambda^2+\lambda(1-\lambda)=\lambda-\tfrac12\lambda^2$, đạt cực đại tại $\lambda=1$ với giá trị $1/2$.`),
          b(String.raw`The primal feasible minimizer is the nearest point to the unconstrained center $-1$ in $x\le-2$, namely $x=-2$. Its value is $\tfrac12(-1)^2=1/2$, equal to the dual maximum.`, String.raw`Nghiệm khả thi gốc là điểm gần tâm không ràng buộc $-1$ nhất trong $x\le-2$, tức $x=-2$. Giá trị là $\tfrac12(-1)^2=1/2$, bằng cực đại đối ngẫu.`),
        ],
      },
    ],
    reviewNote: 'Checked the sign convention g(x)=2−x, Lagrangian minimizer x=λ, concave dual maximizer λ=2, and primal value 2. Restriction: this is the specified scalar quadratic with a single lower-bound inequality.',
    sourceIds: ['o-boyd'],
  },
  'm2-w065-e2': {
    application: b(String.raw`Weak duality gives a guaranteed lower bound for a minimization problem. Inequality multipliers must be nonnegative so they lower the Lagrangian at feasible points; equality multipliers can have either sign because equality residuals vanish.`, String.raw`Đối ngẫu yếu cho cận dưới được bảo đảm của bài toán cực tiểu. Nhân tử bất đẳng thức phải không âm để Lagrangian không lớn hơn mục tiêu tại điểm khả thi; nhân tử đẳng thức có thể mang dấu bất kỳ vì phần dư đẳng thức bằng không.`),
    formula: b(String.raw`For feasible $x$ and dual-feasible $(\lambda,\nu)$ with $\lambda\ge0$, $g_i(x)\le0$ and $Ax=b$ imply $L(x,\lambda,\nu)\le f_0(x)$. Since $q(\lambda,\nu)=\inf_zL(z,\lambda,\nu)\le L(x,\lambda,\nu)$, $q(\lambda,\nu)\le p^*$.`, String.raw`Với $x$ khả thi và $(\lambda,\nu)$ khả thi đối ngẫu, $\lambda\ge0$, các điều kiện $g_i(x)\le0$ và $Ax=b$ suy ra $L(x,\lambda,\nu)\le f_0(x)$. Vì $q(\lambda,\nu)=\inf_zL(z,\lambda,\nu)\le L(x,\lambda,\nu)$, ta có $q(\lambda,\nu)\le p^*$.`),
    steps: [
      b(String.raw`Fix any primal-feasible $x$ and dual-feasible $(\lambda,\nu)$ with $\lambda\ge0$ and $\nu\in\mathbb R^m$.`, String.raw`Cố định $x$ khả thi gốc bất kỳ và $(\lambda,\nu)$ khả thi đối ngẫu với $\lambda\ge0$, $\nu\in\mathbb R^m$.`),
      b(String.raw`For each inequality, $g_i(x)\le0$ and $\lambda_i\ge0$ imply $\lambda_i g_i(x)\le0$. The equality residual is $Ax-b=0$, so its product with any $\nu$ is zero.`, String.raw`Với mỗi bất đẳng thức, $g_i(x)\le0$ và $\lambda_i\ge0$ suy ra $\lambda_i g_i(x)\le0$. Phần dư đẳng thức là $Ax-b=0$, nên tích với mọi $\nu$ đều bằng không.`),
      b(String.raw`Therefore $L(x,\lambda,\nu)=f_0(x)+\sum_i\lambda_i g_i(x)+\nu^T(Ax-b)\le f_0(x)$.`, String.raw`Vì vậy $L(x,\lambda,\nu)=f_0(x)+\sum_i\lambda_i g_i(x)+\nu^T(Ax-b)\le f_0(x)$.`),
      b(String.raw`The dual function is an infimum over all arguments, so $q(\lambda,\nu)\le L(x,\lambda,\nu)\le f_0(x)$. Infimizing the feasible objective proves $q(\lambda,\nu)\le p^*$.`, String.raw`Hàm đối ngẫu là infimum trên mọi đối số, nên $q(\lambda,\nu)\le L(x,\lambda,\nu)\le f_0(x)$. Lấy infimum mục tiêu khả thi chứng minh $q(\lambda,\nu)\le p^*$.`),
    ],
    primarySolution: [
      b(String.raw`Take any primal-feasible $x$ and dual-feasible $\lambda\ge0$ with unrestricted $\nu$. Since $g_i(x)\le0$, each product $\lambda_i g_i(x)\le0$.`, String.raw`Lấy $x$ khả thi gốc và $\lambda\ge0$ khả thi đối ngẫu bất kỳ, cùng $\nu$ không hạn chế. Vì $g_i(x)\le0$, mỗi tích $\lambda_i g_i(x)\le0$.`),
      b(String.raw`The equality constraint gives $Ax-b=0$, so $\nu^T(Ax-b)=0$ for every real vector $\nu$; no sign condition is needed.`, String.raw`Ràng buộc đẳng thức cho $Ax-b=0$, nên $\nu^T(Ax-b)=0$ với mọi vectơ thực $\nu$; không cần điều kiện dấu.`),
      b(String.raw`Thus $L(x,\lambda,\nu)\le f_0(x)$. By definition, $q(\lambda,\nu)=\inf_zL(z,\lambda,\nu)\le L(x,\lambda,\nu)$.`, String.raw`Vậy $L(x,\lambda,\nu)\le f_0(x)$. Theo định nghĩa, $q(\lambda,\nu)=\inf_zL(z,\lambda,\nu)\le L(x,\lambda,\nu)$.`),
      b(String.raw`Since the bound holds for every feasible $x$, taking the primal infimum yields $q(\lambda,\nu)\le p^*$. The equality multiplier is unrestricted precisely because its residual vanishes on the feasible set.`, String.raw`Vì cận đúng với mọi $x$ khả thi, lấy infimum gốc cho $q(\lambda,\nu)\le p^*$. Nhân tử đẳng thức không hạn chế dấu chính vì phần dư triệt tiêu trên tập khả thi.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\min \tfrac12x^2$ subject to $x\ge1$, compute $q(\lambda)$ and verify the weak-duality bound for every $\lambda\ge0$.`, String.raw`Với $\min \tfrac12x^2$ thỏa $x\ge1$, hãy tính $q(\lambda)$ và kiểm tra cận đối ngẫu yếu với mọi $\lambda\ge0$.`),
        solution: [
          b(String.raw`Write $g(x)=1-x\le0$. Then $L=\tfrac12x^2+\lambda(1-x)$, and minimizing over $x$ gives $x=\lambda$.`, String.raw`Viết $g(x)=1-x\le0$. Khi đó $L=\tfrac12x^2+\lambda(1-x)$, và tối thiểu hóa theo $x$ cho $x=\lambda$.`),
          b(String.raw`Substitution gives $q(\lambda)=\lambda-\tfrac12\lambda^2=\tfrac12-\tfrac12(\lambda-1)^2\le\tfrac12$ for every $\lambda\ge0$.`, String.raw`Thế vào được $q(\lambda)=\lambda-\tfrac12\lambda^2=\tfrac12-\tfrac12(\lambda-1)^2\le\tfrac12$ với mọi $\lambda\ge0$.`),
          b(String.raw`The primal minimum is $p^*=1/2$ at $x=1$, so the displayed inequality is the required dual lower bound, tight at $\lambda=1$.`, String.raw`Cực tiểu gốc là $p^*=1/2$ tại $x=1$, nên bất đẳng thức trên là cận đối ngẫu yêu cầu và đạt sát tại $\lambda=1$.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12x^2$ subject to $x=3$, derive $q(\nu)$ for unrestricted $\nu$ and show $q(\nu)\le p^*$.`, String.raw`Với $\min \tfrac12x^2$ thỏa $x=3$, hãy suy ra $q(\nu)$ với $\nu$ không hạn chế và chứng minh $q(\nu)\le p^*$.`),
        solution: [
          b(String.raw`The Lagrangian is $L(x,\nu)=\tfrac12x^2+\nu(x-3)$. Its minimizer in $x$ is $x=-\nu$.`, String.raw`Lagrangian là $L(x,\nu)=\tfrac12x^2+\nu(x-3)$. Nghiệm cực tiểu theo $x$ là $x=-\nu$.`),
          b(String.raw`Substitution gives $q(\nu)=-\tfrac12\nu^2-3\nu=\tfrac92-\tfrac12(\nu+3)^2\le\tfrac92$ for every real $\nu$.`, String.raw`Thế vào được $q(\nu)=-\tfrac12\nu^2-3\nu=\tfrac92-\tfrac12(\nu+3)^2\le\tfrac92$ với mọi $\nu$ thực.`),
          b(String.raw`The only feasible primal point is $x=3$, with $p^*=\tfrac12(3)^2=9/2$. Thus $q(\nu)\le p^*$, with equality at the unrestricted multiplier $\nu=-3$.`, String.raw`Điểm gốc khả thi duy nhất là $x=3$, có $p^*=\tfrac12(3)^2=9/2$. Vậy $q(\nu)\le p^*$, đạt đẳng thức tại nhân tử không hạn chế dấu $\nu=-3$.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min x^2+2$ subject to $x\ge0$, use the dual-feasible choice $\lambda=0$ to get a lower bound and match it with a feasible primal value.`, String.raw`Với $\min x^2+2$ thỏa $x\ge0$, hãy dùng lựa chọn khả thi đối ngẫu $\lambda=0$ để lấy cận dưới và ghép với giá trị gốc khả thi.`),
        solution: [
          b(String.raw`Write $g(x)=-x\le0$. At $\lambda=0$, the Lagrangian is $L(x,0)=x^2+2$, whose infimum over all real $x$ is $q(0)=2$.`, String.raw`Viết $g(x)=-x\le0$. Tại $\lambda=0$, Lagrangian là $L(x,0)=x^2+2$, có infimum trên trục thực theo $x$ bằng $q(0)=2$.`),
          b(String.raw`Weak duality says $q(0)\le p^*$, so $2$ is a valid lower bound even without first finding the primal optimizer.`, String.raw`Đối ngẫu yếu cho $q(0)\le p^*$, nên $2$ là cận dưới hợp lệ dù chưa tìm nghiệm tối ưu gốc.`),
          b(String.raw`The feasible point $x=0$ has objective $2$, matching the bound. Therefore it is primal optimal, $q(0)$ is dual optimal, and the gap is zero.`, String.raw`Điểm khả thi $x=0$ có mục tiêu $2$, bằng cận dưới. Vì vậy nó tối ưu gốc, $q(0)$ tối ưu đối ngẫu và khoảng cách bằng không.`),
        ],
      },
    ],
    reviewNote: 'Checked λ_i g_i≤0 for feasible inequalities, the equality residual vanishing for every ν, and the infimum-to-primal-infimum bound direction. Restriction: weak duality requires dual-feasible nonnegative inequality multipliers; ν remains unrestricted.',
    sourceIds: ['o-boyd'],
  },
  'm2-w065-e3': {
    application: b(String.raw`A constraint threshold can change the optimal value as it tightens. While the same constraint stays active and the value function is differentiable, the optimal multiplier matches the marginal value of changing that threshold under the chosen sign convention.`, String.raw`Ngưỡng ràng buộc có thể làm thay đổi giá trị tối ưu khi nó siết chặt. Khi cùng ràng buộc vẫn hoạt động và hàm giá trị khả vi, nhân tử tối ưu bằng giá trị biên của việc thay đổi ngưỡng theo quy ước dấu đã chọn.`),
    formula: b(String.raw`For $p^*(u)=\min_x\{\tfrac12x^2:x\ge u\}$ with $u>0$, the active solution is $x^*(u)=u$, so $p^*(u)=u^2/2$ and $dp^*/du=u$. With $g(x,u)=u-x\le0$, stationarity gives $\lambda^*(u)=u$.`, String.raw`Với $p^*(u)=\min_x\{\tfrac12x^2:x\ge u\}$, $u>0$, nghiệm hoạt động là $x^*(u)=u$, nên $p^*(u)=u^2/2$ và $dp^*/du=u$. Với $g(x,u)=u-x\le0$, điều kiện dừng cho $\lambda^*(u)=u$.`),
    steps: [
      b(String.raw`Because $u>0$, the unconstrained minimizer $x=0$ violates $x\ge u$, so the constrained minimizer is the active boundary $x^*=u$.`, String.raw`Vì $u>0$, nghiệm không ràng buộc $x=0$ vi phạm $x\ge u$, nên nghiệm có ràng buộc là biên hoạt động $x^*=u$.`),
      b(String.raw`Substitute into the objective: $p^*(u)=\tfrac12u^2$, hence $dp^*/du=u$ on this regime.`, String.raw`Thế vào mục tiêu: $p^*(u)=\tfrac12u^2$, do đó $dp^*/du=u$ trong chế độ này.`),
      b(String.raw`With $g(x,u)=u-x\le0$, stationarity is $x-\lambda=0$. At $x^*=u$, it gives $\lambda^*=u$.`, String.raw`Với $g(x,u)=u-x\le0$, điều kiện dừng là $x-\lambda=0$. Tại $x^*=u$, ta được $\lambda^*=u$.`),
      b(String.raw`Thus the derivative equals the multiplier here because the same smooth active constraint determines the optimizer. The assumption $u>0$ keeps the problem in that active regime.`, String.raw`Vì vậy đạo hàm bằng nhân tử ở đây vì cùng một ràng buộc trơn đang hoạt động xác định nghiệm. Giả thiết $u>0$ giữ bài toán trong chế độ đó.`),
    ],
    primarySolution: [
      b(String.raw`For $u>0$, the feasible half-line starts to the right of the unconstrained minimizer $0$, so $x^*(u)=u$.`, String.raw`Với $u>0$, nửa trục khả thi bắt đầu bên phải nghiệm không ràng buộc $0$, nên $x^*(u)=u$.`),
      b(String.raw`The value function is $p^*(u)=\tfrac12(x^*(u))^2=\tfrac12u^2$, giving derivative $dp^*/du=u$.`, String.raw`Hàm giá trị là $p^*(u)=\tfrac12(x^*(u))^2=\tfrac12u^2$, nên đạo hàm $dp^*/du=u$.`),
      b(String.raw`Write the constraint as $g(x,u)=u-x\le0$. Stationarity $x+\lambda(-1)=0$ gives $\lambda^*=x^*=u$.`, String.raw`Viết ràng buộc thành $g(x,u)=u-x\le0$. Điều kiện dừng $x+\lambda(-1)=0$ cho $\lambda^*=x^*=u$.`),
      b(String.raw`The multiplier and value derivative agree throughout $u>0$. At $u=0$ the active-regime formula meets the inactive regime, so the stated argument is restricted to positive thresholds.`, String.raw`Nhân tử và đạo hàm hàm giá trị trùng nhau với mọi $u>0$. Tại $u=0$, công thức chế độ hoạt động gặp chế độ không hoạt động, nên lập luận được nêu giới hạn cho ngưỡng dương.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $p^*(u)=\min \tfrac12x^2$ subject to $x\ge u$, determine the value and multiplier for all real $u$, and compare the derivative at the transition $u=0$.`, String.raw`Với $p^*(u)=\min \tfrac12x^2$ thỏa $x\ge u$, hãy xác định giá trị và nhân tử với mọi $u$ thực, rồi so sánh đạo hàm tại ngưỡng chuyển $u=0$.`),
        solution: [
          b(String.raw`If $u\le0$, the unconstrained minimizer $x=0$ is feasible, so $x^*=0$, $p^*(u)=0$, and the constraint multiplier is $\lambda^*=0$.`, String.raw`Nếu $u\le0$, nghiệm không ràng buộc $x=0$ khả thi, nên $x^*=0$, $p^*(u)=0$ và nhân tử ràng buộc $\lambda^*=0$.`),
          b(String.raw`If $u>0$, the boundary is active: $x^*=u$, $p^*(u)=u^2/2$, and stationarity $x-\lambda=0$ gives $\lambda^*=u$.`, String.raw`Nếu $u>0$, biên hoạt động: $x^*=u$, $p^*(u)=u^2/2$ và điều kiện dừng $x-\lambda=0$ cho $\lambda^*=u$.`),
          b(String.raw`The piecewise value is $p^*(u)=0$ for $u\le0$ and $u^2/2$ for $u>0$. Its derivative at zero is zero from both sides, equal to $\lambda^*(0)=0$; the multiplier relation holds across the transition.`, String.raw`Hàm giá trị từng đoạn là $p^*(u)=0$ khi $u\le0$ và $u^2/2$ khi $u>0$. Đạo hàm tại không bằng không từ cả hai phía, trùng $\lambda^*(0)=0$; quan hệ với nhân tử vẫn đúng qua ngưỡng.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12(x-2)^2$ subject to $x\ge u$, derive the value function and multiplier for all $u$, including the active-set transition.`, String.raw`Với $\min \tfrac12(x-2)^2$ thỏa $x\ge u$, hãy suy ra hàm giá trị và nhân tử với mọi $u$, gồm cả ngưỡng chuyển tập hoạt động.`),
        solution: [
          b(String.raw`If $u\le2$, the unconstrained minimizer $x=2$ is feasible, so $x^*=2$, $p^*(u)=0$, and $\lambda^*=0$.`, String.raw`Nếu $u\le2$, nghiệm không ràng buộc $x=2$ khả thi, nên $x^*=2$, $p^*(u)=0$ và $\lambda^*=0$.`),
          b(String.raw`If $u>2$, the lower bound is active at $x^*=u$. With $g=u-x\le0$, stationarity $x-2-\lambda=0$ gives $\lambda^*=u-2$.`, String.raw`Nếu $u>2$, cận dưới hoạt động tại $x^*=u$. Với $g=u-x\le0$, điều kiện dừng $x-2-\lambda=0$ cho $\lambda^*=u-2$.`),
          b(String.raw`Thus $p^*(u)=0$ for $u\le2$ and $\tfrac12(u-2)^2$ for $u>2$. Its derivative is $0$ on the first regime and $u-2$ on the second, matching $\lambda^*$ including at $u=2$.`, String.raw`Vậy $p^*(u)=0$ khi $u\le2$ và $\tfrac12(u-2)^2$ khi $u>2$. Đạo hàm bằng $0$ ở chế độ đầu và $u-2$ ở chế độ sau, khớp $\lambda^*$ kể cả tại $u=2$.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12x^2$ subject to $x\le u$, analyze $u<0$ and compare $dp^*/du$ with the multiplier for $g(x,u)=x-u\le0$.`, String.raw`Với $\min \tfrac12x^2$ thỏa $x\le u$, hãy phân tích trường hợp $u<0$ và so sánh $dp^*/du$ với nhân tử của $g(x,u)=x-u\le0$.`),
        solution: [
          b(String.raw`For $u<0$, the feasible half-line lies left of zero, so the closest feasible point to the unconstrained minimizer is $x^*=u$.`, String.raw`Với $u<0$, nửa trục khả thi nằm bên trái số không, nên điểm khả thi gần nghiệm không ràng buộc nhất là $x^*=u$.`),
          b(String.raw`Then $p^*(u)=u^2/2$ and $dp^*/du=u$. Stationarity for $g=x-u\le0$ is $x+\lambda=0$, so $\lambda^*=-u>0$.`, String.raw`Khi đó $p^*(u)=u^2/2$ và $dp^*/du=u$. Điều kiện dừng với $g=x-u\le0$ là $x+\lambda=0$, nên $\lambda^*=-u>0$.`),
          b(String.raw`Here the derivative is $-\lambda^*$ rather than $+\lambda^*$ because increasing the upper bound relaxes the constraint; the sign follows from the chosen representation $x-u\le0$.`, String.raw`Ở đây đạo hàm bằng $-\lambda^*$ thay vì $+\lambda^*$ vì tăng cận trên làm lỏng ràng buộc; dấu xuất phát từ cách viết $x-u\le0$.`),
        ],
      },
    ],
    reviewNote: 'Checked the active condition u>0, value derivative u, stationarity sign for g=u−x, and the stated multiplier equality. Restriction: the primary comparison is within the positive active regime; companion cases separately check inactive and transition boundaries.',
    sourceIds: ['o-boyd'],
  },
  'm2-w065-e4': {
    application: b(String.raw`A feasible primal design gives an upper bound on the best cost, while any dual-feasible price gives a lower bound. When the two meet, their equality certifies both sides without needing to know how the candidates were discovered.`, String.raw`Thiết kế gốc khả thi cho cận trên của chi phí tốt nhất, còn mọi mức giá đối ngẫu khả thi cho cận dưới. Khi hai cận gặp nhau, đẳng thức chứng nhận cả hai phía mà không cần biết các ứng viên được tìm ra thế nào.`),
    formula: b(String.raw`For any dual-feasible $(\lambda,\nu)$ and primal-feasible $x$, weak duality gives $q(\lambda,\nu)\le p^*\le f_0(x)$. If $q(\lambda,\nu)=f_0(x)$, then $x$ is primal optimal, $(\lambda,\nu)$ is dual optimal, and the gap is zero.`, String.raw`Với $(\lambda,\nu)$ khả thi đối ngẫu và $x$ khả thi gốc bất kỳ, đối ngẫu yếu cho $q(\lambda,\nu)\le p^*\le f_0(x)$. Nếu $q(\lambda,\nu)=f_0(x)$, thì $x$ tối ưu gốc, $(\lambda,\nu)$ tối ưu đối ngẫu và khoảng cách bằng không.`),
    steps: [
      b(String.raw`Choose any dual-feasible multipliers. Weak duality supplies $q(\lambda,\nu)\le p^*$ even if the primal optimizer has not been computed.`, String.raw`Chọn các nhân tử khả thi đối ngẫu bất kỳ. Đối ngẫu yếu cho $q(\lambda,\nu)\le p^*$ ngay cả khi chưa tính nghiệm tối ưu gốc.`),
      b(String.raw`Choose any primal-feasible $x$. By definition of the infimum over feasible objective values, $p^*\le f_0(x)$.`, String.raw`Chọn $x$ khả thi gốc bất kỳ. Theo định nghĩa infimum của các giá trị mục tiêu khả thi, $p^*\le f_0(x)$.`),
      b(String.raw`Together these form the bracket $q(\lambda,\nu)\le p^*\le f_0(x)$.`, String.raw`Kết hợp lại được khoảng kẹp $q(\lambda,\nu)\le p^*\le f_0(x)$.`),
      b(String.raw`If the two endpoints are equal, every inequality is equality. This proves primal optimality, dual optimality, and zero gap without relying on the search process.`, String.raw`Nếu hai đầu mút bằng nhau, mọi bất đẳng thức đều thành đẳng thức. Điều này chứng minh tối ưu gốc, tối ưu đối ngẫu và khoảng cách bằng không mà không phụ thuộc quá trình tìm kiếm.`),
    ],
    primarySolution: [
      b(String.raw`For any dual-feasible $(\lambda,\nu)$, weak duality gives $q(\lambda,\nu)\le p^*$. For every primal-feasible $x$, the definition of $p^*$ gives $p^*\le f_0(x)$.`, String.raw`Với $(\lambda,\nu)$ khả thi đối ngẫu bất kỳ, đối ngẫu yếu cho $q(\lambda,\nu)\le p^*$. Với mọi $x$ khả thi gốc, định nghĩa $p^*$ cho $p^*\le f_0(x)$.`),
      b(String.raw`Therefore $q(\lambda,\nu)\le p^*\le f_0(x)$, a valid lower/upper bracket even when the primal optimizer is unknown.`, String.raw`Vì thế $q(\lambda,\nu)\le p^*\le f_0(x)$, một khoảng cận dưới/trên hợp lệ ngay cả khi chưa biết nghiệm tối ưu gốc.`),
      b(String.raw`If a feasible $x$ has $f_0(x)=q(\lambda,\nu)$, the bracket endpoints match, forcing $p^*=f_0(x)=q(\lambda,\nu)$.`, String.raw`Nếu $x$ khả thi có $f_0(x)=q(\lambda,\nu)$, hai đầu mút trùng nhau, buộc $p^*=f_0(x)=q(\lambda,\nu)$.`),
      b(String.raw`Thus $x$ is primal optimal, the multiplier pair is dual optimal, and the duality gap is zero. Feasibility and matching values are the certificate.`, String.raw`Do đó $x$ tối ưu gốc, cặp nhân tử tối ưu đối ngẫu và khoảng cách đối ngẫu bằng không. Tính khả thi và giá trị trùng nhau tạo thành chứng chỉ.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\min x^2+1$ subject to $x\le-2$, use $\lambda=4$ and the feasible point $x=-2$ to give matching dual and primal values and certify the optimum.`, String.raw`Với $\min x^2+1$ thỏa $x\le-2$, hãy dùng $\lambda=4$ và điểm khả thi $x=-2$ để cho giá trị gốc, đối ngẫu khớp nhau và chứng nhận cực tiểu.`),
        solution: [
          b(String.raw`Write $g(x)=x+2\le0$. The Lagrangian is $x^2+1+\lambda(x+2)$, whose infimum in $x$ for fixed $\lambda$ occurs at $x=-\lambda/2$.`, String.raw`Viết $g(x)=x+2\le0$. Lagrangian là $x^2+1+\lambda(x+2)$, có infimum theo $x$ với $\lambda$ cố định tại $x=-\lambda/2$.`),
          b(String.raw`The dual function is $q(\lambda)=1+2\lambda-\lambda^2/4$. At the dual-feasible $\lambda=4$, $q(4)=5$.`, String.raw`Hàm đối ngẫu là $q(\lambda)=1+2\lambda-\lambda^2/4$. Tại $\lambda=4$ khả thi đối ngẫu, $q(4)=5$.`),
          b(String.raw`The point $x=-2$ is feasible and has objective $(-2)^2+1=5$. The matching lower and upper bounds force $p^*=5$, certifying both candidates optimal.`, String.raw`Điểm $x=-2$ khả thi và có mục tiêu $(-2)^2+1=5$. Hai cận dưới và trên trùng nhau, buộc $p^*=5$ và chứng nhận cả hai ứng viên tối ưu.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min \tfrac12x^2$ subject to $x=3$, use the feasible point $x=3$ and multiplier $\nu=-3$ to construct an equality certificate.`, String.raw`Với $\min \tfrac12x^2$ thỏa $x=3$, hãy dùng điểm khả thi $x=3$ và nhân tử $\nu=-3$ để lập chứng chỉ đẳng thức.`),
        solution: [
          b(String.raw`The Lagrangian is $L(x,\nu)=\tfrac12x^2+\nu(x-3)$. Its infimum occurs at $x=-\nu$, so $q(\nu)=-\tfrac12\nu^2-3\nu$.`, String.raw`Lagrangian là $L(x,\nu)=\tfrac12x^2+\nu(x-3)$. Infimum đạt tại $x=-\nu$, nên $q(\nu)=-\tfrac12\nu^2-3\nu$.`),
          b(String.raw`At $\nu=-3$, $q(-3)=9/2$. The feasible point $x=3$ has objective $9/2$ as well.`, String.raw`Tại $\nu=-3$, $q(-3)=9/2$. Điểm khả thi $x=3$ cũng có mục tiêu $9/2$.`),
          b(String.raw`Weak duality brackets $q(-3)\le p^*\le f_0(3)$ with equal endpoints, so $x=3$ is primal optimal and $\nu=-3$ is dual optimal.`, String.raw`Đối ngẫu yếu kẹp $q(-3)\le p^*\le f_0(3)$ với hai đầu bằng nhau, nên $x=3$ tối ưu gốc và $\nu=-3$ tối ưu đối ngẫu.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min x^2+2$ subject to $x\ge0$, pair the dual-feasible multiplier $\lambda=0$ with a feasible point that attains the same value, then state the certificate.`, String.raw`Với $\min x^2+2$ thỏa $x\ge0$, hãy ghép nhân tử khả thi đối ngẫu $\lambda=0$ với điểm khả thi đạt cùng giá trị, rồi nêu chứng chỉ.`),
        solution: [
          b(String.raw`With $g(x)=-x\le0$, the choice $\lambda=0$ gives $L(x,0)=x^2+2$ and $q(0)=\inf_x(x^2+2)=2$.`, String.raw`Với $g(x)=-x\le0$, lựa chọn $\lambda=0$ cho $L(x,0)=x^2+2$ và $q(0)=\inf_x(x^2+2)=2$.`),
          b(String.raw`The feasible point $x=0$ has objective $f_0(0)=2$. Thus weak duality gives $2=q(0)\le p^*\le f_0(0)=2$.`, String.raw`Điểm khả thi $x=0$ có mục tiêu $f_0(0)=2$. Vậy đối ngẫu yếu cho $2=q(0)\le p^*\le f_0(0)=2$.`),
          b(String.raw`Equality throughout proves $p^*=2$, makes $x=0$ primal optimal, and makes $\lambda=0$ dual optimal with zero gap.`, String.raw`Đẳng thức ở mọi bước chứng minh $p^*=2$, $x=0$ tối ưu gốc và $\lambda=0$ tối ưu đối ngẫu với khoảng cách bằng không.`),
        ],
      },
    ],
    reviewNote: 'Checked the bound order q≤p*≤f0(x), dual feasibility of λ=4, and equality of the explicit values 5 for the primal point and dual function. Restriction: a matching certificate requires both candidates feasible; equality is used only after those checks.',
    sourceIds: ['o-boyd'],
  },
  'm2-w065-e5': {
    application: b(String.raw`When a constraint qualification fails, the primal and dual optimal values may still agree even though no finite multiplier reaches the dual supremum. The value can be approached by prices that grow without bound, so equality of values does not imply dual attainment.`, String.raw`Khi điều kiện chuẩn hóa thất bại, giá trị tối ưu gốc và đối ngẫu vẫn có thể bằng nhau dù không nhân tử hữu hạn nào đạt supremum đối ngẫu. Có thể tiến tới giá trị đó bằng các mức giá tăng vô hạn, nên bằng nhau về giá trị không suy ra đối ngẫu đạt được.`),
    formula: b(String.raw`For a convex primal with value $p^*$ and dual function $q$, define $d^*=\sup_{\lambda\ge0}q(\lambda)$. Equality $d^*=p^*$ does not imply there is a finite $\lambda^*$ with $q(\lambda^*)=d^*$; Slater failure removes a common attainment guarantee.`, String.raw`Với bài toán gốc lồi có giá trị $p^*$ và hàm đối ngẫu $q$, đặt $d^*=\sup_{\lambda\ge0}q(\lambda)$. Đẳng thức $d^*=p^*$ không suy ra có $\lambda^*$ hữu hạn sao cho $q(\lambda^*)=d^*$; Slater thất bại làm mất bảo đảm đạt cực đại thường dùng.`),
    steps: [
      b(String.raw`The constraint $x^2\le0$ forces the primal feasible set to be $\{0\}$, so for objective $-x$ the primal value is $p^*=0$.`, String.raw`Ràng buộc $x^2\le0$ buộc tập khả thi gốc là $\{0\}$, nên với mục tiêu $-x$ giá trị gốc là $p^*=0$.`),
      b(String.raw`The Lagrangian is $L(x,\lambda)=-x+\lambda x^2$. For $\lambda=0$, its infimum is $-\infty$. For $\lambda>0$, stationarity gives $x=1/(2\lambda)$.`, String.raw`Lagrangian là $L(x,\lambda)=-x+\lambda x^2$. Với $\lambda=0$, infimum bằng $-\infty$. Với $\lambda>0$, điều kiện dừng cho $x=1/(2\lambda)$.`),
      b(String.raw`Substitution gives $q(\lambda)=-1/(4\lambda)$ for $\lambda>0$. These values increase toward zero as $\lambda\to\infty$, while each value for finite $\lambda$ is strictly negative.`, String.raw`Thế vào được $q(\lambda)=-1/(4\lambda)$ khi $\lambda>0$. Các giá trị tăng tới không khi $\lambda\to\infty$, còn mọi giá trị với $\lambda$ hữu hạn đều âm nghiêm.`),
      b(String.raw`Thus $d^*=0=p^*$ but no finite multiplier attains the supremum. Slater fails because $x^2<0$ has no real solution; the example has no value gap, only loss of dual attainment.`, String.raw`Vì vậy $d^*=0=p^*$ nhưng không nhân tử hữu hạn nào đạt supremum. Slater thất bại vì $x^2<0$ không có nghiệm thực; ví dụ không có khoảng cách giá trị, chỉ mất tính đạt được của đối ngẫu.`),
    ],
    primarySolution: [
      b(String.raw`The constraint $x^2\le0$ permits only $x=0$, so the primal minimum of $-x$ is $p^*=0$.`, String.raw`Ràng buộc $x^2\le0$ chỉ cho phép $x=0$, nên cực tiểu gốc của $-x$ là $p^*=0$.`),
      b(String.raw`The Lagrangian is $L(x,\lambda)=-x+\lambda x^2$. At $\lambda=0$ its infimum is $-\infty$. For $\lambda>0$, the minimizing point solves $-1+2\lambda x=0$, so $x=1/(2\lambda)$.`, String.raw`Lagrangian là $L(x,\lambda)=-x+\lambda x^2$. Tại $\lambda=0$, infimum là $-\infty$. Với $\lambda>0$, điểm cực tiểu giải $-1+2\lambda x=0$, nên $x=1/(2\lambda)$.`),
      b(String.raw`At that point, $q(\lambda)=-1/(2\lambda)+\lambda/(4\lambda^2)=-1/(4\lambda)$. Hence $\sup_{\lambda\ge0}q(\lambda)=0$ as $\lambda\to\infty$, but $q(\lambda)<0$ for every finite positive $\lambda$.`, String.raw`Tại điểm đó, $q(\lambda)=-1/(2\lambda)+\lambda/(4\lambda^2)=-1/(4\lambda)$. Vì thế $\sup_{\lambda\ge0}q(\lambda)=0$ khi $\lambda\to\infty$, nhưng $q(\lambda)<0$ với mọi $\lambda$ dương hữu hạn.`),
      b(String.raw`Therefore the dual value equals the primal value, $d^*=p^*=0$, without a finite dual maximizer. Slater fails because $x^2<0$ is impossible; this is failure of attainment, not a positive duality gap.`, String.raw`Do đó giá trị đối ngẫu bằng giá trị gốc, $d^*=p^*=0$, nhưng không có nghiệm cực đại đối ngẫu hữu hạn. Slater thất bại vì $x^2<0$ bất khả thi; đây là mất tính đạt được, không phải khoảng cách đối ngẫu dương.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\min -2x$ subject to $x^2\le0$, compute the dual function and show whether its supremum is attained.`, String.raw`Với $\min -2x$ thỏa $x^2\le0$, hãy tính hàm đối ngẫu và xét supremum có đạt được không.`),
        solution: [
          b(String.raw`The only feasible primal point is $x=0$, so $p^*=0$. Slater fails because no real $x$ satisfies $x^2<0$.`, String.raw`Điểm gốc khả thi duy nhất là $x=0$, nên $p^*=0$. Slater thất bại vì không số thực $x$ nào thỏa $x^2<0$.`),
          b(String.raw`The Lagrangian is $L=-2x+\lambda x^2$. At $\lambda=0$, its infimum is $-\infty$; for $\lambda>0$, the minimizer is $x=1/\lambda$.`, String.raw`Lagrangian là $L=-2x+\lambda x^2$. Tại $\lambda=0$, infimum là $-\infty$; với $\lambda>0$, nghiệm cực tiểu là $x=1/\lambda$.`),
          b(String.raw`Substituting gives $q(\lambda)=-2/\lambda+1/\lambda=-1/\lambda$. Thus $d^*=0=p^*$ as $\lambda\to\infty$, but every finite positive multiplier has $q(\lambda)<0$, so the supremum is not attained.`, String.raw`Thế vào được $q(\lambda)=-2/\lambda+1/\lambda=-1/\lambda$. Vậy $d^*=0=p^*$ khi $\lambda\to\infty$, nhưng mọi nhân tử dương hữu hạn đều có $q(\lambda)<0$, nên supremum không đạt được.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min -x$ subject to $x^4\le0$, determine the primal value and dual supremum, and check whether any finite multiplier attains it.`, String.raw`Với $\min -x$ thỏa $x^4\le0$, hãy xác định giá trị gốc, supremum đối ngẫu và xét có nhân tử hữu hạn nào đạt được không.`),
        solution: [
          b(String.raw`The feasible set is only $x=0$, so $p^*=0$. The strict constraint $x^4<0$ is impossible, so Slater fails.`, String.raw`Tập khả thi chỉ là $x=0$, nên $p^*=0$. Ràng buộc nghiêm $x^4<0$ bất khả thi, nên Slater thất bại.`),
          b(String.raw`For $\lambda>0$, minimize $-x+\lambda x^4$. The first-order equation $-1+4\lambda x^3=0$ gives $x=(4\lambda)^{-1/3}$, and $\lambda x^4=x/4$.`, String.raw`Với $\lambda>0$, tối thiểu hóa $-x+\lambda x^4$. Phương trình bậc nhất $-1+4\lambda x^3=0$ cho $x=(4\lambda)^{-1/3}$, và $\lambda x^4=x/4$.`),
          b(String.raw`Hence $q(\lambda)=-3x/4=-\tfrac34(4\lambda)^{-1/3}$, which increases to zero as $\lambda\to\infty$ but remains negative for finite $\lambda$. At $\lambda=0$, the infimum is $-\infty$.`, String.raw`Do đó $q(\lambda)=-3x/4=-\tfrac34(4\lambda)^{-1/3}$, tăng tới không khi $\lambda\to\infty$ nhưng vẫn âm với $\lambda$ hữu hạn. Tại $\lambda=0$, infimum là $-\infty$.`),
          b(String.raw`Thus $d^*=p^*=0$ without a finite maximizing multiplier. The fourth-power inequality is convex, but its strict feasible set is empty.`, String.raw`Vì vậy $d^*=p^*=0$ mà không có nhân tử cực đại hữu hạn. Bất đẳng thức lũy thừa bậc bốn là lồi, nhưng tập khả thi nghiêm rỗng.`),
        ],
      },
      {
        prompt: b(String.raw`For $\min x^4$ subject to $x^2\le0$, show that Slater fails but the dual supremum is attained.`, String.raw`Với $\min x^4$ thỏa $x^2\le0$, hãy chỉ ra Slater thất bại nhưng supremum đối ngẫu vẫn đạt được.`),
        solution: [
          b(String.raw`Feasibility forces $x=0$, so the primal value is $p^*=0$. No point satisfies $x^2<0$, hence Slater fails.`, String.raw`Tính khả thi buộc $x=0$, nên giá trị gốc $p^*=0$. Không điểm nào thỏa $x^2<0$, nên Slater thất bại.`),
          b(String.raw`The Lagrangian is $L(x,\lambda)=x^4+\lambda x^2$. For every $\lambda\ge0$, it is nonnegative and attains its infimum zero at $x=0$.`, String.raw`Lagrangian là $L(x,\lambda)=x^4+\lambda x^2$. Với mọi $\lambda\ge0$, hàm không âm và đạt infimum bằng không tại $x=0$.`),
          b(String.raw`Thus $q(\lambda)=0$ for every dual-feasible multiplier, so $d^*=0=p^*$ and every finite $\lambda\ge0$ attains the dual value. Slater failure alone does not determine attainment.`, String.raw`Vậy $q(\lambda)=0$ với mọi nhân tử khả thi đối ngẫu, nên $d^*=0=p^*$ và mọi $\lambda\ge0$ hữu hạn đều đạt giá trị đối ngẫu. Slater thất bại tự nó không quyết định tính đạt được.`),
        ],
      },
    ],
    reviewNote: 'Checked q(0)=−∞, the λ>0 stationary point and value −1/(4λ), the limit 0, and nonattainment for every finite λ. Restriction: Slater failure is used to explain missing guarantees, not asserted as the sole cause or as a positive duality gap.',
    sourceIds: ['o-boyd'],
  },
};

export default lessons;
