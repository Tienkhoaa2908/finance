import {b, type ReviewedLesson} from './types';

const lessons: Record<string, ReviewedLesson> = {
  'm2-w071-e1': {
    application: b(String.raw`A composite proximal-gradient step first follows the smooth loss, then applies a threshold that can set a coefficient to zero. The objective values show the effect of both pieces.`, String.raw`Một bước proximal-gradient hợp thành đi theo hàm mất mát trơn trước, rồi áp dụng ngưỡng có thể đưa hệ số về không. Giá trị mục tiêu thể hiện tác động của cả hai phần.`),
    formula: b(String.raw`For $F=f+h$, $x^+=\operatorname{prox}_{\eta h}(x-\eta\nabla f(x))$. For $h(x)=|x|$ and $\eta=1$, $\operatorname{prox}_{|\cdot|}(v)=\operatorname{sign}(v)(|v|-1)_+$.`, String.raw`Với $F=f+h$, $x^+=\operatorname{prox}_{\eta h}(x-\eta\nabla f(x))$. Với $h(x)=|x|$ và $\eta=1$, $\operatorname{prox}_{|\cdot|}(v)=\operatorname{sign}(v)(|v|-1)_+$.`),
    steps: [
      b(String.raw`For $f(x)=\tfrac12(x-4)^2$, $f'(0)=-4$, so the gradient proposal is $v=0-(-4)=4$.`, String.raw`Với $f(x)=\tfrac12(x-4)^2$, $f'(0)=-4$, nên đề xuất gradient là $v=0-(-4)=4$.`),
      b(String.raw`The proximal map thresholds $v=4$ by one: $x_1=4-1=3$.`, String.raw`Ánh xạ proximal ngưỡng $v=4$ ở mức một: $x_1=4-1=3$.`),
      b(String.raw`The composite values are $F(0)=\tfrac12(0-4)^2+0=8$ and $F(3)=\tfrac12(3-4)^2+3=3.5$.`, String.raw`Giá trị hợp thành là $F(0)=\tfrac12(0-4)^2+0=8$ và $F(3)=\tfrac12(3-4)^2+3=3.5$.`),
    ],
    primarySolution: [
      b(String.raw`The smooth part has derivative $f'(x)=x-4$, so at $x_0=0$ its gradient is $-4$.`, String.raw`Phần trơn có đạo hàm $f'(x)=x-4$, nên tại $x_0=0$ gradient bằng $-4$.`),
      b(String.raw`With $\eta=1$, the point before thresholding is $v=x_0-\eta f'(x_0)=0-(-4)=4$.`, String.raw`Với $\eta=1$, điểm trước khi ngưỡng là $v=x_0-\eta f'(x_0)=0-(-4)=4$.`),
      b(String.raw`Soft threshold at one gives $x_1=\operatorname{sign}(4)(4-1)=3$.`, String.raw`Ngưỡng mềm mức một cho $x_1=\operatorname{sign}(4)(4-1)=3$.`),
      b(String.raw`Using the full objective, $F(x_0)=8$ and $F(x_1)=\tfrac12(3-4)^2+|3|=3.5$.`, String.raw`Dùng toàn bộ mục tiêu, $F(x_0)=8$ và $F(x_1)=\tfrac12(3-4)^2+|3|=3.5$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $F(x)=\tfrac12(x+3)^2+2|x|$, take $L=1$, $\eta=0.5$, and $x_0=0$. Compute the proximal-gradient update and both objective values.`, String.raw`Với $F(x)=\tfrac12(x+3)^2+2|x|$, lấy $L=1$, $\eta=0.5$ và $x_0=0$. Hãy tính cập nhật proximal-gradient và cả hai giá trị mục tiêu.`),
        solution: [
          b(String.raw`The smooth gradient is $f'(0)=3$, so the proposal is $v=0-0.5(3)=-1.5$.`, String.raw`Gradient phần trơn là $f'(0)=3$, nên đề xuất là $v=0-0.5(3)=-1.5$.`),
          b(String.raw`The threshold is $\eta\lambda=0.5(2)=1$, hence $x_1=\operatorname{sign}(-1.5)(1.5-1)=-0.5$.`, String.raw`Ngưỡng là $\eta\lambda=0.5(2)=1$, nên $x_1=\operatorname{sign}(-1.5)(1.5-1)=-0.5$.`),
          b(String.raw`Evaluate $F(0)=\tfrac12(3)^2=4.5$ and $F(-0.5)=\tfrac12(2.5)^2+2(0.5)=4.125$.`, String.raw`Tính $F(0)=\tfrac12(3)^2=4.5$ và $F(-0.5)=\tfrac12(2.5)^2+2(0.5)=4.125$.`),
        ],
      },
      {
        prompt: b(String.raw`For $F(x)=\tfrac12(x-0.4)^2+|x|$, with $L=\eta=1$ and $x_0=0$, compute the update and explain why it lands in the zero region of the threshold.`, String.raw`Với $F(x)=\tfrac12(x-0.4)^2+|x|$, $L=\eta=1$ và $x_0=0$, hãy tính cập nhật và giải thích vì sao nó nằm trong miền ngưỡng trả về không.`),
        solution: [
          b(String.raw`Here $f'(0)=-0.4$, so the gradient proposal is $v=0.4$.`, String.raw`Ở đây $f'(0)=-0.4$, nên đề xuất gradient là $v=0.4$.`),
          b(String.raw`The prox threshold is $\eta\lambda=1$, larger than $|v|=0.4$, so soft thresholding returns $x_1=0$.`, String.raw`Ngưỡng prox là $\eta\lambda=1$, lớn hơn $|v|=0.4$, nên ngưỡng mềm trả về $x_1=0$.`),
          b(String.raw`Thus $F(x_1)=F(0)=\tfrac12(0.4)^2=0.08$; equality at $|v|=\eta\lambda$ would also return zero.`, String.raw`Vậy $F(x_1)=F(0)=\tfrac12(0.4)^2=0.08$; trường hợp bằng $|v|=\eta\lambda$ cũng trả về không.`),
        ],
      },
      {
        prompt: b(String.raw`For $F(x)=\tfrac12\|x-(2,-4)\|_2^2+2\|x\|_1$ in $\mathbb R^2$, use $\eta=0.5$ from $x_0=(0,0)$ to find $x_1$ and compare $F(x_0)$ with $F(x_1)$.`, String.raw`Với $F(x)=\tfrac12\|x-(2,-4)\|_2^2+2\|x\|_1$ trên $\mathbb R^2$, dùng $\eta=0.5$ từ $x_0=(0,0)$ để tìm $x_1$ và so sánh $F(x_0)$ với $F(x_1)$.`),
        solution: [
          b(String.raw`The smooth gradient at zero is $(-2,4)$, giving proposal $v=(1,-2)$ after the half step.`, String.raw`Gradient phần trơn tại không là $(-2,4)$, cho đề xuất $v=(1,-2)$ sau bước một nửa.`),
          b(String.raw`The coordinate threshold is $\eta\lambda=1$, so soft thresholding yields $x_1=(0,-1)$.`, String.raw`Ngưỡng từng tọa độ là $\eta\lambda=1$, nên ngưỡng mềm cho $x_1=(0,-1)$.`),
          b(String.raw`The values are $F(0)=10$ and $F(0,-1)=\tfrac12(4+9)+2=8.5$, so the objective decreases by $1.5$.`, String.raw`Các giá trị là $F(0)=10$ và $F(0,-1)=\tfrac12(4+9)+2=8.5$, nên mục tiêu giảm $1.5$.`),
        ],
      },
    ],
    reviewNote: 'Recomputed the gradient proposal, threshold ηλ, and full composite values at both iterates. Restriction: the example uses the stated unit smoothness; soft thresholding returns zero whenever |v|≤ηλ.',
    sourceIds: ['o-prox'],
  },
  'm2-w071-e2': {
    application: b(String.raw`The proximal-gradient point exactly minimizes a local quadratic model plus the nonsmooth penalty. Its subgradient inclusion is a stationarity condition with the correct step-size scaling.`, String.raw`Điểm proximal-gradient cực tiểu chính xác mô hình quadratic cục bộ cộng penalty không trơn. Bao hàm dưới-gradient là điều kiện dừng với hệ số kích thước bước đúng.`),
    formula: b(String.raw`For $\eta>0$ and proper closed convex $h$, $x^+=\arg\min_u\{h(u)+\nabla f(x)^T(u-x)+\|u-x\|^2/(2\eta)\}=\operatorname{prox}_{\eta h}(x-\eta\nabla f(x))$, and $0\in\partial h(x^+)+\nabla f(x)+(x^+-x)/\eta$.`, String.raw`Với $\eta>0$ và $h$ proper lồi đóng, $x^+=\arg\min_u\{h(u)+\nabla f(x)^T(u-x)+\|u-x\|^2/(2\eta)\}=\operatorname{prox}_{\eta h}(x-\eta\nabla f(x))$, và $0\in\partial h(x^+)+\nabla f(x)+(x^+-x)/\eta$.`),
    steps: [
      b(String.raw`Let $g=\nabla f(x)$. Expanding the square centered at $x-\eta g$ gives the linear term $g^T(u-x)$, the quadratic term, and a constant independent of $u$.`, String.raw`Đặt $g=\nabla f(x)$. Khai triển bình phương tâm tại $x-\eta g$ cho hạng tuyến tính $g^T(u-x)$, hạng quadratic và một hằng số không phụ thuộc $u$.`),
      b(String.raw`The constant does not change the argmin, so the model minimizer is $\operatorname{prox}_{\eta h}(x-\eta g)$.`, String.raw`Hằng số không đổi argmin, nên nghiệm cực tiểu mô hình là $\operatorname{prox}_{\eta h}(x-\eta g)$.`),
      b(String.raw`Fermat's rule gives $0\in\partial h(x^+)+(x^+-(x-\eta g))/\eta$.`, String.raw`Quy tắc Fermat cho $0\in\partial h(x^+)+(x^+-(x-\eta g))/\eta$.`),
      b(String.raw`Simplification yields $0\in\partial h(x^+)+g+(x^+-x)/\eta$, or $-g-(x^+-x)/\eta\in\partial h(x^+)$.`, String.raw`Rút gọn được $0\in\partial h(x^+)+g+(x^+-x)/\eta$, hay $-g-(x^+-x)/\eta\in\partial h(x^+)$.`),
    ],
    primarySolution: [
      b(String.raw`Complete the square: $\nabla f(x)^T(u-x)+\|u-x\|^2/(2\eta)=\|u-(x-\eta\nabla f(x))\|^2/(2\eta)-\eta\|\nabla f(x)\|^2/2$.`, String.raw`Hoàn thành bình phương: $\nabla f(x)^T(u-x)+\|u-x\|^2/(2\eta)=\|u-(x-\eta\nabla f(x))\|^2/(2\eta)-\eta\|\nabla f(x)\|^2/2$.`),
      b(String.raw`The last term is independent of $u$, so the minimizer is $x^+=\operatorname{prox}_{\eta h}(x-\eta\nabla f(x))$.`, String.raw`Hạng cuối không phụ thuộc $u$, nên nghiệm cực tiểu là $x^+=\operatorname{prox}_{\eta h}(x-\eta\nabla f(x))$.`),
      b(String.raw`Since $\eta>0$ and $h$ is proper closed convex, the quadratic-regularized objective has a unique minimizer. Fermat's rule gives $0\in\partial h(x^+)+\nabla f(x)+(x^+-x)/\eta$.`, String.raw`Vì $\eta>0$ và $h$ proper lồi đóng, mục tiêu được điều chuẩn quadratic có nghiệm cực tiểu duy nhất. Quy tắc Fermat cho $0\in\partial h(x^+)+\nabla f(x)+(x^+-x)/\eta$.`),
      b(String.raw`Rearranging gives $-\nabla f(x)-(x^+-x)/\eta\in\partial h(x^+)$; the correction is divided by $\eta$.`, String.raw`Biến đổi được $-\nabla f(x)-(x^+-x)/\eta\in\partial h(x^+)$; hiệu chỉnh được chia cho $\eta$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $h(u)=2|u|$, $\eta=0.5$, and proximal center $v=-3$, compute $\operatorname{prox}_{\eta h}(v)$ and verify its subgradient condition.`, String.raw`Với $h(u)=2|u|$, $\eta=0.5$ và tâm proximal $v=-3$, hãy tính $\operatorname{prox}_{\eta h}(v)$ và kiểm tra điều kiện dưới-gradient.`),
        solution: [
          b(String.raw`The scaled threshold is $\eta\lambda=0.5(2)=1$, so soft thresholding gives $u^+=-2$.`, String.raw`Ngưỡng co giãn là $\eta\lambda=0.5(2)=1$, nên ngưỡng mềm cho $u^+=-2$.`),
          b(String.raw`The prox condition is $(v-u^+)/\eta\in\partial h(u^+)$; its left side is $(-3+2)/0.5=-2$.`, String.raw`Điều kiện prox là $(v-u^+)/\eta\in\partial h(u^+)$; vế trái bằng $(-3+2)/0.5=-2$.`),
          b(String.raw`Since $u^+<0$, $\partial h(u^+)=\{-2\}$, so the inclusion holds exactly.`, String.raw`Vì $u^+<0$, $\partial h(u^+)=\{-2\}$, nên bao hàm đúng chính xác.`),
        ],
      },
      {
        prompt: b(String.raw`Let $h$ be the indicator of $C=[-1,2]$, $x=3$, and $\eta\nabla f(x)=0.5$. Find the proximal-gradient point and check the normal-cone condition at the boundary.`, String.raw`Cho $h$ là hàm chỉ thị của $C=[-1,2]$, $x=3$ và $\eta\nabla f(x)=0.5$. Hãy tìm điểm proximal-gradient và kiểm tra điều kiện nón pháp tuyến tại biên.`),
        solution: [
          b(String.raw`The center is $v=x-\eta\nabla f(x)=2.5$, so projection onto $[-1,2]$ gives $x^+=2$.`, String.raw`Tâm là $v=x-\eta\nabla f(x)=2.5$, nên phép chiếu lên $[-1,2]$ cho $x^+=2$.`),
          b(String.raw`For an indicator, $\partial h(2)=N_C(2)=[0,\infty)$.`, String.raw`Với hàm chỉ thị, $\partial h(2)=N_C(2)=[0,\infty)$.`),
          b(String.raw`The condition is $(v-x^+)/\eta\in N_C(2)$; this equals $0.5/\eta>0$ for $\eta>0$, so it holds.`, String.raw`Điều kiện là $(v-x^+)/\eta\in N_C(2)$; giá trị bằng $0.5/\eta>0$ khi $\eta>0$, nên điều kiện đúng.`),
        ],
      },
      {
        prompt: b(String.raw`For $h(u)=0.5\|u\|_1$ in $\mathbb R^2$, $\eta=1$, and center $v=(0.5,-2)$, compute the prox and exhibit its subgradient at the zero coordinate.`, String.raw`Với $h(u)=0.5\|u\|_1$ trên $\mathbb R^2$, $\eta=1$ và tâm $v=(0.5,-2)$, hãy tính prox và chỉ ra dưới-gradient tại tọa độ bằng không.`),
        solution: [
          b(String.raw`Thresholding coordinatewise at $0.5$ gives $u^+=(0,-1.5)$.`, String.raw`Ngưỡng từng tọa độ ở mức $0.5$ cho $u^+=(0,-1.5)$.`),
          b(String.raw`The inclusion asks for $v-u^+\in\partial h(u^+)$, and $v-u^+=(0.5,-0.5)$.`, String.raw`Bao hàm yêu cầu $v-u^+\in\partial h(u^+)$, và $v-u^+=(0.5,-0.5)$.`),
          b(String.raw`At $u_1^+=0$, the subgradient interval is $[-0.5,0.5]$ and contains $0.5$; at $u_2^+<0$, the subgradient is $-0.5$.`, String.raw`Tại $u_1^+=0$, khoảng dưới-gradient là $[-0.5,0.5]$ và chứa $0.5$; tại $u_2^+<0$, dưới-gradient bằng $-0.5$.`),
        ],
      },
    ],
    reviewNote: 'Checked the square-completion constant, prox center, and Fermat inclusion signs. Restriction: η>0 and h proper closed convex; at an ℓ1 zero coordinate the subgradient is an interval.',
    sourceIds: ['o-prox'],
  },
  'm2-w071-e3': {
    application: b(String.raw`A one-step descent inequality can be accumulated across iterations: distance potentials cancel, giving an objective guarantee for an average even when individual iterates are not monotone.`, String.raw`Có thể cộng bất đẳng thức giảm một bước qua các vòng lặp: potential khoảng cách triệt tiêu, tạo bảo đảm mục tiêu cho iterate trung bình dù từng iterate không giảm đơn điệu.`),
    formula: b(String.raw`If $F(x_{t+1})-F(z)\le(\|x_t-z\|^2-\|x_{t+1}-z\|^2)/(2\eta)$, then $\sum_{t=1}^T(F(x_{t+1})-F(x^*))\le\|x_1-x^*\|^2/(2\eta)$. Convexity gives $F(\bar x_T)-F(x^*)\le\|x_1-x^*\|^2/(2\eta T)$ for $\bar x_T=T^{-1}\sum_{t=1}^T x_{t+1}$.`, String.raw`Nếu $F(x_{t+1})-F(z)\le(\|x_t-z\|^2-\|x_{t+1}-z\|^2)/(2\eta)$, thì $\sum_{t=1}^T(F(x_{t+1})-F(x^*))\le\|x_1-x^*\|^2/(2\eta)$. Tính lồi cho $F(\bar x_T)-F(x^*)\le\|x_1-x^*\|^2/(2\eta T)$ với $\bar x_T=T^{-1}\sum_{t=1}^T x_{t+1}$.`),
    steps: [
      b(String.raw`Set $z=x^*$ in the one-step inequality and sum it for $t=1,\ldots,T$.`, String.raw`Đặt $z=x^*$ trong bất đẳng thức một bước rồi cộng theo $t=1,\ldots,T$.`),
      b(String.raw`The squared distances cancel in sequence, leaving $(\|x_1-x^*\|^2-\|x_{T+1}-x^*\|^2)/(2\eta)$.`, String.raw`Các bình phương khoảng cách triệt tiêu liên tiếp, chỉ còn $(\|x_1-x^*\|^2-\|x_{T+1}-x^*\|^2)/(2\eta)$.`),
      b(String.raw`Since the terminal squared distance is nonnegative, the sum is at most $\|x_1-x^*\|^2/(2\eta)$.`, String.raw`Vì bình phương khoảng cách cuối không âm, tổng không vượt quá $\|x_1-x^*\|^2/(2\eta)$.`),
      b(String.raw`Divide by $T$ and apply Jensen to the convex $F$ at $\bar x_T=T^{-1}\sum_{t=1}^T x_{t+1}$ to obtain the stated average-objective rate.`, String.raw`Chia cho $T$ rồi áp dụng Jensen cho $F$ lồi tại $\bar x_T=T^{-1}\sum_{t=1}^T x_{t+1}$ để được tốc độ mục tiêu trung bình đã nêu.`),
    ],
    primarySolution: [
      b(String.raw`With $z=x^*$, sum the assumed inequalities to get $\sum_{t=1}^T[F(x_{t+1})-F(x^*)]\le(\|x_1-x^*\|^2-\|x_{T+1}-x^*\|^2)/(2\eta)$.`, String.raw`Với $z=x^*$, cộng các bất đẳng thức giả thiết được $\sum_{t=1}^T[F(x_{t+1})-F(x^*)]\le(\|x_1-x^*\|^2-\|x_{T+1}-x^*\|^2)/(2\eta)$.`),
      b(String.raw`Dropping only the nonpositive terminal contribution gives the cumulative bound $\sum_{t=1}^T[F(x_{t+1})-F(x^*)]\le\|x_1-x^*\|^2/(2\eta)$.`, String.raw`Chỉ bỏ đóng góp cuối không dương để có cận tích lũy $\sum_{t=1}^T[F(x_{t+1})-F(x^*)]\le\|x_1-x^*\|^2/(2\eta)$.`),
      b(String.raw`After division by $T$, the average objective gap is at most $\|x_1-x^*\|^2/(2\eta T)$.`, String.raw`Sau khi chia $T$, gap mục tiêu trung bình không quá $\|x_1-x^*\|^2/(2\eta T)$.`),
      b(String.raw`Convexity gives $F(\bar x_T)\le T^{-1}\sum_{t=1}^T F(x_{t+1})$, hence $F(\bar x_T)-F(x^*)\le\|x_1-x^*\|^2/(2\eta T)$.`, String.raw`Tính lồi cho $F(\bar x_T)\le T^{-1}\sum_{t=1}^T F(x_{t+1})$, nên $F(\bar x_T)-F(x^*)\le\|x_1-x^*\|^2/(2\eta T)$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`If $\|x_1-x^*\|=3$, $\eta=0.5$, and $T=4$, what upper bound does the telescoping theorem give for the average objective gap and for $F(\bar x_T)-F(x^*)$?`, String.raw`Nếu $\|x_1-x^*\|=3$, $\eta=0.5$ và $T=4$, định lý telescoping cho cận trên nào cho gap mục tiêu trung bình và $F(\bar x_T)-F(x^*)$?`),
        solution: [
          b(String.raw`The cumulative gap is bounded by $\|x_1-x^*\|^2/(2\eta)=9/1=9$.`, String.raw`Gap tích lũy được chặn bởi $\|x_1-x^*\|^2/(2\eta)=9/1=9$.`),
          b(String.raw`Dividing by four gives average gap at most $9/4=2.25$.`, String.raw`Chia cho bốn được gap trung bình không quá $9/4=2.25$.`),
          b(String.raw`Jensen transfers this same average upper bound to the convex average iterate: $F(\bar x_4)-F(x^*)\le2.25$.`, String.raw`Jensen chuyển cùng cận trung bình sang iterate trung bình lồi: $F(\bar x_4)-F(x^*)\le2.25$.`),
        ],
      },
      {
        prompt: b(String.raw`For $T=3$ and $\eta=0.5$, suppose summing the one-step bounds leaves initial squared distance $10$ and terminal squared distance $2$. Compute the resulting cumulative gap bound.`, String.raw`Với $T=3$ và $\eta=0.5$, giả sử cộng các cận một bước còn bình phương khoảng cách đầu là $10$ và cuối là $2$. Hãy tính cận gap tích lũy thu được.`),
        solution: [
          b(String.raw`The telescoped numerator is $10-2=8$; the positive terminal term is subtracted, not added.`, String.raw`Tử số sau telescoping là $10-2=8$; hạng cuối dương bị trừ, không phải cộng.`),
          b(String.raw`The denominator is $2\eta=1$, so the cumulative gap is at most $8$.`, String.raw`Mẫu số là $2\eta=1$, nên gap tích lũy không quá $8$.`),
          b(String.raw`The corresponding arithmetic-average gap is at most $8/3$ after dividing by $T=3$.`, String.raw`Gap trung bình số học tương ứng không quá $8/3$ sau khi chia $T=3$.`),
        ],
      },
      {
        prompt: b(String.raw`For convex $F(t)=t^2/2$ and the three points $x_2=-1$, $x_3=1$, $x_4=3$, verify Jensen's step for $\bar x_3$ and compare it with the average of the three objective values.`, String.raw`Với $F(t)=t^2/2$ lồi và ba điểm $x_2=-1$, $x_3=1$, $x_4=3$, hãy kiểm tra bước Jensen cho $\bar x_3$ và so sánh với trung bình ba giá trị mục tiêu.`),
        solution: [
          b(String.raw`The average iterate is $\bar x_3=(-1+1+3)/3=1$, so $F(\bar x_3)=1/2$.`, String.raw`Iterate trung bình là $\bar x_3=(-1+1+3)/3=1$, nên $F(\bar x_3)=1/2$.`),
          b(String.raw`The objective values are $1/2$, $1/2$, and $9/2$, whose average is $11/6$.`, String.raw`Các giá trị mục tiêu là $1/2$, $1/2$ và $9/2$, có trung bình $11/6$.`),
          b(String.raw`Indeed $1/2\le11/6$, illustrating $F(\bar x_3)\le\frac13\sum_{t=2}^4F(x_t)$; convexity is the needed assumption.`, String.raw`Thật vậy $1/2\le11/6$, minh họa $F(\bar x_3)\le\frac13\sum_{t=2}^4F(x_t)$; giả thiết cần dùng là tính lồi.`),
        ],
      },
    ],
    reviewNote: 'Checked the telescoping endpoints x₁ and x_{T+1}, the sign of the dropped terminal square, division by T, and the indexing of the averaged points. Restriction: Jensen requires F convex and the one-step inequality must hold for every step.',
    sourceIds: ['o-prox'],
  },
  'm2-w071-e4': {
    application: b(String.raw`LASSO separates a differentiable least-squares fit from a nonsmooth sparsity penalty. Its prox is coordinatewise soft thresholding, so the update uses matrix-vector products rather than a matrix inverse.`, String.raw`LASSO tách phần khớp bình phương tối thiểu khả vi khỏi penalty thưa không trơn. Prox của penalty là ngưỡng mềm theo tọa độ, nên cập nhật chỉ cần nhân ma trận-vector, không cần nghịch đảo.`),
    formula: b(String.raw`For $A\ne0$, let $f(x)=\frac12\|Ax-b\|_2^2$, $h(x)=\lambda\|x\|_1$, and $L=\|A\|_2^2$. For $0<\eta\le1/L$, $x^+=S_{\eta\lambda}(x-\eta A^T(Ax-b))$ coordinatewise. If $A=0$, $\nabla f=0$ and any $\eta>0$ is valid.`, String.raw`Với $A\ne0$, đặt $f(x)=\frac12\|Ax-b\|_2^2$, $h(x)=\lambda\|x\|_1$ và $L=\|A\|_2^2$. Với $0<\eta\le1/L$, $x^+=S_{\eta\lambda}(x-\eta A^T(Ax-b))$ theo từng tọa độ. Nếu $A=0$, $\nabla f=0$ và mọi $\eta>0$ đều hợp lệ.`),
    steps: [
      b(String.raw`Assign $f(x)=\frac12\|Ax-b\|^2$ to the smooth term and $h(x)=\lambda\|x\|_1$ to the prox term.`, String.raw`Gán $f(x)=\frac12\|Ax-b\|^2$ cho phần trơn và $h(x)=\lambda\|x\|_1$ cho phần prox.`),
      b(String.raw`Differentiation gives $\nabla f(x)=A^T(Ax-b)$ and Hessian $A^TA$, whose largest eigenvalue is $L=\|A\|_2^2$.`, String.raw`Lấy đạo hàm được $\nabla f(x)=A^T(Ax-b)$ và Hessian $A^TA$, có trị riêng lớn nhất $L=\|A\|_2^2$.`),
      b(String.raw`Use $0<\eta\le1/L$ for $L>0$, take the gradient proposal, then apply $S_{\eta\lambda}$ coordinatewise.`, String.raw`Dùng $0<\eta\le1/L$ khi $L>0$, lập đề xuất gradient rồi áp dụng $S_{\eta\lambda}$ theo từng tọa độ.`),
    ],
    primarySolution: [
      b(String.raw`The least-squares term is smooth: $\nabla f(x)=A^T(Ax-b)$ and its gradient Lipschitz constant is $L=\|A\|_2^2$.`, String.raw`Hạng bình phương tối thiểu là trơn: $\nabla f(x)=A^T(Ax-b)$ và hằng số Lipschitz gradient là $L=\|A\|_2^2$.`),
      b(String.raw`The nonsmooth part is $h(x)=\lambda\|x\|_1$, whose prox at scale $\eta$ is $S_{\eta\lambda}$.`, String.raw`Phần không trơn là $h(x)=\lambda\|x\|_1$, có prox ở thang $\eta$ là $S_{\eta\lambda}$.`),
      b(String.raw`Thus for $A\ne0$ choose $0<\eta\le1/\|A\|_2^2$ and write $x^+=S_{\eta\lambda}(x-\eta A^T(Ax-b))$.`, String.raw`Vì vậy với $A\ne0$, chọn $0<\eta\le1/\|A\|_2^2$ rồi viết $x^+=S_{\eta\lambda}(x-\eta A^T(Ax-b))$.`),
      b(String.raw`This uses products by $A$ and $A^T$ plus thresholding; if $A=0$, the smooth gradient vanishes and the prox step is valid for any positive scale.`, String.raw`Cách này dùng phép nhân với $A$, $A^T$ và ngưỡng; nếu $A=0$, gradient trơn bằng không và bước prox hợp lệ với mọi thang dương.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $A=\operatorname{diag}(1,3)$, $b=(1,-2)$, $\lambda=0.5$, and $x_0=(0,0)$. Use $\eta=1/9$ to compute one LASSO proximal-gradient step.`, String.raw`Cho $A=\operatorname{diag}(1,3)$, $b=(1,-2)$, $\lambda=0.5$ và $x_0=(0,0)$. Dùng $\eta=1/9$ để tính một bước proximal-gradient LASSO.`),
        solution: [
          b(String.raw`The smooth gradient is $A^T(Ax_0-b)=(-1,6)$, so the proposal is $x_0-\eta\nabla f(x_0)=(1/9,-2/3)$.`, String.raw`Gradient trơn là $A^T(Ax_0-b)=(-1,6)$, nên đề xuất là $x_0-\eta\nabla f(x_0)=(1/9,-2/3)$.`),
          b(String.raw`The step is safe since $\|A\|_2^2=9$ and $\eta=1/9$; the threshold is $\eta\lambda=1/18$.`, String.raw`Bước an toàn vì $\|A\|_2^2=9$ và $\eta=1/9$; ngưỡng là $\eta\lambda=1/18$.`),
          b(String.raw`Applying signed thresholds gives $x_1=(1/18,-11/18)$.`, String.raw`Áp ngưỡng có dấu được $x_1=(1/18,-11/18)$.`),
        ],
      },
      {
        prompt: b(String.raw`For scalar $F(x)=\frac12(2x-3)^2+1.5|x|$, start at $x_0=0$ and use $\eta=1/4$. Find the gradient proposal, threshold, and next point.`, String.raw`Với $F(x)=\frac12(2x-3)^2+1.5|x|$, bắt đầu tại $x_0=0$ và dùng $\eta=1/4$. Hãy tìm đề xuất gradient, ngưỡng và điểm tiếp theo.`),
        solution: [
          b(String.raw`Here $f'(x)=2(2x-3)$, so $f'(0)=-6$ and the proposal is $v=0-(1/4)(-6)=1.5$.`, String.raw`Ở đây $f'(x)=2(2x-3)$, nên $f'(0)=-6$ và đề xuất là $v=0-(1/4)(-6)=1.5$.`),
          b(String.raw`The smooth curvature is $L=4$, making $\eta=1/L$ safe; the prox threshold is $\eta\lambda=0.375$.`, String.raw`Độ cong phần trơn là $L=4$, nên $\eta=1/L$ an toàn; ngưỡng prox là $\eta\lambda=0.375$.`),
          b(String.raw`Soft thresholding yields $x_1=1.5-0.375=1.125$.`, String.raw`Ngưỡng mềm cho $x_1=1.5-0.375=1.125$.`),
        ],
      },
      {
        prompt: b(String.raw`If $A=0$, $b$ is fixed, $\lambda=1$, and $x_0=(1,-0.5)$, compute a proximal-gradient step with $\eta=0.25$ and explain why the usual $1/L$ expression is unnecessary.`, String.raw`Nếu $A=0$, $b$ cố định, $\lambda=1$ và $x_0=(1,-0.5)$, hãy tính bước proximal-gradient với $\eta=0.25$ và giải thích vì sao không cần biểu thức $1/L$ thông thường.`),
        solution: [
          b(String.raw`The loss $\frac12\|b\|^2$ is constant in $x$, so $\nabla f(x)=0$ and the gradient proposal remains $(1,-0.5)$.`, String.raw`Loss $\frac12\|b\|^2$ không đổi theo $x$, nên $\nabla f(x)=0$ và đề xuất gradient vẫn là $(1,-0.5)$.`),
          b(String.raw`Thresholding by $\eta\lambda=0.25$ gives $x_1=(0.75,-0.25)$.`, String.raw`Ngưỡng với $\eta\lambda=0.25$ cho $x_1=(0.75,-0.25)$.`),
          b(String.raw`Here $L=\|A\|_2^2=0$, so $1/L$ is undefined; since the smooth gradient is identically zero, any $\eta>0$ can be used for the prox operation.`, String.raw`Ở đây $L=\|A\|_2^2=0$ nên $1/L$ không xác định; vì gradient trơn đồng nhất bằng không, có thể dùng mọi $\eta>0$ cho phép prox.`),
        ],
      },
    ],
    reviewNote: 'Checked the gradient, Hessian norm, threshold scale, and the degenerate A=0 case where 1/L is undefined. Restriction: λ≥0 is assumed for convex LASSO; the standard smooth-step bound uses L>0 or any positive upper Lipschitz bound.',
    sourceIds: ['o-prox'],
  },
  'm2-w071-e5': {
    application: b(String.raw`The descent guarantee for proximal gradient uses a safe step size. A large step can cross the minimizer and amplify the quadratic error rather than reduce it.`, String.raw`Bảo đảm giảm của proximal-gradient cần kích thước bước an toàn. Bước lớn có thể vượt qua cực tiểu và khuếch đại sai số quadratic thay vì giảm nó.`),
    formula: b(String.raw`For $f(x)=\frac12x^2$, $L=1$, and $h=0$, the update is $x^+=(1-\eta)x$ and $F(x^+)/F(x)=(1-\eta)^2$ when $x\ne0$. The general proximal-gradient theorem guarantees descent for $0<\eta\le1/L$.`, String.raw`Với $f(x)=\frac12x^2$, $L=1$ và $h=0$, cập nhật là $x^+=(1-\eta)x$ và $F(x^+)/F(x)=(1-\eta)^2$ khi $x\ne0$. Định lý proximal-gradient tổng quát bảo đảm giảm khi $0<\eta\le1/L$.`),
    steps: [
      b(String.raw`Since $h=0$, its prox is the identity; at $x=1$ and $\eta=3$, $x^+=1-3=-2$.`, String.raw`Vì $h=0$, prox là đồng nhất; tại $x=1$ và $\eta=3$, $x^+=1-3=-2$.`),
      b(String.raw`The objective values are $F(1)=1/2$ and $F(-2)=2$, so the new value is four times larger.`, String.raw`Giá trị mục tiêu là $F(1)=1/2$ và $F(-2)=2$, nên giá trị mới lớn gấp bốn lần.`),
      b(String.raw`The theorem's safe condition is $\eta\le1/L=1$, violated by $\eta=3$; here the stronger fact $\eta>2/L$ makes the quadratic objective increase.`, String.raw`Điều kiện an toàn của định lý là $\eta\le1/L=1$, bị vi phạm bởi $\eta=3$; ở đây điều kiện mạnh hơn $\eta>2/L$ làm mục tiêu quadratic tăng.`),
    ],
    primarySolution: [
      b(String.raw`With $h=0$, $\operatorname{prox}_{\eta h}$ is the identity, so $x^+=x-\eta f'(x)=(1-3)(1)=-2$.`, String.raw`Với $h=0$, $\operatorname{prox}_{\eta h}$ là đồng nhất, nên $x^+=x-\eta f'(x)=(1-3)(1)=-2$.`),
      b(String.raw`The objective is $F(x)=x^2/2$, hence $F(1)=0.5$ and $F(-2)=2$.`, String.raw`Mục tiêu là $F(x)=x^2/2$, nên $F(1)=0.5$ và $F(-2)=2$.`),
      b(String.raw`Thus this step increases the objective by a factor of four. The guarantee requires $0<\eta\le1/L=1$, while the chosen $\eta=3$ is outside it.`, String.raw`Vậy bước này làm mục tiêu tăng gấp bốn. Bảo đảm cần $0<\eta\le1/L=1$, còn $\eta=3$ đã chọn nằm ngoài khoảng đó.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $F(x)=x^2/2$ and $x\ne0$, evaluate the update at $\eta=2/L=2$. Does it decrease the objective, and what does this say about the theorem's step bound?`, String.raw`Với $F(x)=x^2/2$ và $x\ne0$, hãy tính cập nhật tại $\eta=2/L=2$. Mục tiêu có giảm không, và điều này nói gì về cận bước của định lý?`),
        solution: [
          b(String.raw`Here $x^+=(1-\eta)x=-x$.`, String.raw`Ở đây $x^+=(1-\eta)x=-x$.`),
          b(String.raw`Since the objective is quadratic, $F(x^+)=(-x)^2/2=F(x)$: the value is unchanged.`, String.raw`Vì mục tiêu là quadratic, $F(x^+)=(-x)^2/2=F(x)$: giá trị không đổi.`),
          b(String.raw`The sufficient descent theorem only guarantees the range $\eta\le1/L$; violating that bound does not force failure for every individual objective, as this boundary case shows.`, String.raw`Định lý giảm đủ chỉ bảo đảm miền $\eta\le1/L$; vi phạm cận đó không buộc mọi mục tiêu riêng lẻ đều thất bại, như trường hợp biên này cho thấy.`),
        ],
      },
      {
        prompt: b(String.raw`For $F(x)=x^2/2$, take $\eta=1.5$ and $x=2$. Compute the objective ratio and explain whether this particular step succeeds despite exceeding $1/L$.`, String.raw`Với $F(x)=x^2/2$, lấy $\eta=1.5$ và $x=2$. Hãy tính tỷ số mục tiêu và giải thích bước cụ thể này có thành công dù vượt $1/L$ không.`),
        solution: [
          b(String.raw`The update is $x^+=(1-1.5)2=-1$.`, String.raw`Cập nhật là $x^+=(1-1.5)2=-1$.`),
          b(String.raw`Then $F(x)=2$ and $F(x^+)=1/2$, so the ratio is $1/4$.`, String.raw`Khi đó $F(x)=2$ và $F(x^+)=1/2$, nên tỷ số bằng $1/4$.`),
          b(String.raw`This step decreases the objective even though $\eta=1.5>1/L$; the safe theorem bound is sufficient, not a necessary condition for this specific quadratic step.`, String.raw`Bước này vẫn giảm mục tiêu dù $\eta=1.5>1/L$; cận an toàn của định lý là điều kiện đủ, không phải điều kiện cần cho bước quadratic cụ thể này.`),
        ],
      },
      {
        prompt: b(String.raw`For $F(x)=2x^2$ (so $L=4$), take $x=1$ and $\eta=0.6$. Compute the next point and objective ratio, then compare $\eta$ with both $1/L$ and $2/L$.`, String.raw`Với $F(x)=2x^2$ (nên $L=4$), lấy $x=1$ và $\eta=0.6$. Hãy tính điểm tiếp theo và tỷ số mục tiêu, rồi so sánh $\eta$ với cả $1/L$ và $2/L$.`),
        solution: [
          b(String.raw`The gradient is $4x$, so $x^+=1-0.6(4)=-1.4$.`, String.raw`Gradient là $4x$, nên $x^+=1-0.6(4)=-1.4$.`),
          b(String.raw`The objective ratio is $F(-1.4)/F(1)=(-1.4)^2=1.96$, so the objective grows.`, String.raw`Tỷ số mục tiêu là $F(-1.4)/F(1)=(-1.4)^2=1.96$, nên mục tiêu tăng.`),
          b(String.raw`Here $1/L=0.25<0.6$ and $2/L=0.5<0.6$; this step is beyond the quadratic stability threshold as well as outside the theorem's safe range.`, String.raw`Ở đây $1/L=0.25<0.6$ và $2/L=0.5<0.6$; bước này vượt cả ngưỡng ổn định quadratic lẫn miền an toàn của định lý.`),
        ],
      },
    ],
    reviewNote: 'Checked x⁺=(1−η)x, objective ratio (1−η)², and the distinction between a sufficient η≤1/L guarantee and the quadratic decrease interval 0<η<2/L. Restriction: the ratio formula assumes x≠0; the zero iterate is unchanged.',
    sourceIds: ['o-prox'],
  },
  'm2-w072-e1': {
    application: b(String.raw`A box-constrained quadratic can have an exact primal-dual certificate while a tiny-curvature coordinate remains highly sensitive to data perturbations. The KKT report and scaled residual diagnose different things from the condition number.`, String.raw`Quadratic có ràng buộc hộp có thể có chứng chỉ primal-dual chính xác trong khi tọa độ độ cong rất nhỏ vẫn nhạy với nhiễu dữ liệu. Báo cáo KKT và residual co giãn chẩn đoán những điều khác với số điều kiện.`),
    formula: b(String.raw`For $Q\succ0$, the box Lagrangian is $\mathcal L(x,\lambda,\mu)=\frac12(x-c)^TQ(x-c)+\lambda^T(x-\mathbf1)-\mu^Tx$, with $\lambda,\mu\ge0$. Its dual is $q=\frac12c^TQc-\mathbf1^T\lambda-\frac12(-Qc+\lambda-\mu)^TQ^{-1}(-Qc+\lambda-\mu)$. A feasible pair with stationarity, complementary slackness, and equal primal/dual values certifies the unique minimizer. For $Q=\operatorname{diag}(1,10^{-8})$, $\kappa_2(Q)=10^8$.`, String.raw`Với $Q\succ0$, Lagrangian của ràng buộc hộp là $\mathcal L(x,\lambda,\mu)=\frac12(x-c)^TQ(x-c)+\lambda^T(x-\mathbf1)-\mu^Tx$, với $\lambda,\mu\ge0$. Đối ngẫu là $q=\frac12c^TQc-\mathbf1^T\lambda-\frac12(-Qc+\lambda-\mu)^TQ^{-1}(-Qc+\lambda-\mu)$. Cặp khả thi thỏa dừng, bổ sung chặt và giá trị primal/dual bằng nhau chứng nhận nghiệm cực tiểu duy nhất. Với $Q=\operatorname{diag}(1,10^{-8})$, $\kappa_2(Q)=10^8$.`),
    steps: [
      b(String.raw`Write the Lagrangian using $x_i-1\le0$ and $-x_i\le0$; minimizing its quadratic over $x$ gives the displayed concave dual function.`, String.raw`Viết Lagrangian với $x_i-1\le0$ và $-x_i\le0$; cực tiểu quadratic theo $x$ cho hàm đối ngẫu lõm đã nêu.`),
      b(String.raw`At $x^*=(1,0.5)$, box feasibility holds and $Q(x^*-c)=(-1,0)$. With $\lambda^*=(1,0)$ and $\mu^*=(0,0)$, stationarity and complementary slackness both hold.`, String.raw`Tại $x^*=(1,0.5)$, khả thi hộp đúng và $Q(x^*-c)=(-1,0)$. Với $\lambda^*=(1,0)$, $\mu^*=(0,0)$, điều kiện dừng và bổ sung chặt đều đúng.`),
      b(String.raw`The primal value is $P(x^*)=0.5$. Substitution in $q$ gives $q(\lambda^*,\mu^*)=0.5$; weak duality and equality prove global optimality, and $Q\succ0$ makes it unique.`, String.raw`Giá trị primal là $P(x^*)=0.5$. Thế vào $q$ được $q(\lambda^*,\mu^*)=0.5$; đối ngẫu yếu và dấu bằng chứng minh tối ưu toàn cục, còn $Q\succ0$ cho tính duy nhất.`),
      b(String.raw`For the SPD system, $x=Q^{-1}b=(1,1)$ and $\tilde x=Q^{-1}\tilde b=(1,1.01)$. The data change is about $10^{-10}$ relative, while the solution change is $0.01/\sqrt2\approx7.07\cdot10^{-3}$ relative; $\kappa_2(Q)=10^8$.`, String.raw`Với hệ SPD, $x=Q^{-1}b=(1,1)$ và $\tilde x=Q^{-1}\tilde b=(1,1.01)$. Nhiễu dữ liệu tương đối khoảng $10^{-10}$, còn nhiễu nghiệm là $0.01/\sqrt2\approx7.07\cdot10^{-3}$ tương đối; $\kappa_2(Q)=10^8$.`),
      b(String.raw`The exact scaled residual $\|Q\tilde x-\tilde b\|/(\|Q\|\|\tilde x\|+\|\tilde b\|)$ is zero for the perturbed system, yet the solution differs from the original. Use a backward-stable Cholesky solve for generic SPD systems, optionally equilibrate, and report both residual and conditioning.`, String.raw`Residual co giãn chính xác $\|Q\tilde x-\tilde b\|/(\|Q\|\|\tilde x\|+\|\tilde b\|)$ bằng không cho hệ đã nhiễu, nhưng nghiệm khác nghiệm ban đầu. Dùng Cholesky ổn định lùi cho hệ SPD tổng quát, có thể cân bằng thang, và báo cả residual lẫn điều kiện.`),
    ],
    primarySolution: [
      b(String.raw`The Lagrangian is $\frac12(x-c)^TQ(x-c)+\lambda^T(x-\mathbf1)-\mu^Tx$ with nonnegative multipliers. Its $x$-dependent linear coefficient is $-Qc+\lambda-\mu$, so completing the quadratic and taking the infimum gives the stated $q(\lambda,\mu)$.`, String.raw`Lagrangian là $\frac12(x-c)^TQ(x-c)+\lambda^T(x-\mathbf1)-\mu^Tx$ với multiplier không âm. Hệ số tuyến tính phụ thuộc $x$ là $-Qc+\lambda-\mu$, nên hoàn thành quadratic rồi lấy infimum cho $q(\lambda,\mu)$ đã nêu.`),
      b(String.raw`The point $x^*=(1,0.5)$ lies in $[0,1]^2$. Its gradient is $Q(x^*-c)=(-1,0)$; adding $\lambda^*-\mu^*=(1,0)$ gives zero, and $\lambda_i(x_i-1)=\mu_i(-x_i)=0$ for each coordinate.`, String.raw`Điểm $x^*=(1,0.5)$ thuộc $[0,1]^2$. Gradient là $Q(x^*-c)=(-1,0)$; cộng $\lambda^*-\mu^*=(1,0)$ được không, và $\lambda_i(x_i-1)=\mu_i(-x_i)=0$ ở từng tọa độ.`),
      b(String.raw`Its primal value is $\frac12(1)(1-2)^2=0.5$. The candidate multipliers are dual feasible, and substitution into the dual formula also gives $q(\lambda^*,\mu^*)=0.5$.`, String.raw`Giá trị primal là $\frac12(1)(1-2)^2=0.5$. Các multiplier khả thi dual, và thế vào công thức đối ngẫu cũng cho $q(\lambda^*,\mu^*)=0.5$.`),
      b(String.raw`Since a dual feasible value cannot exceed a primal feasible value, equality certifies global optimality; strict convexity from $Q\succ0$ makes this optimizer unique.`, String.raw`Vì giá trị dual khả thi không thể vượt giá trị primal khả thi, dấu bằng chứng nhận tối ưu toàn cục; tính lồi nghiêm ngặt do $Q\succ0$ làm nghiệm cực tiểu duy nhất.`),
      b(String.raw`The perturbed right side gives $\tilde x=(1,1.01)$, with relative solution change about $7.07\cdot10^{-3}$ despite a data change near $10^{-10}$. The system condition number is $10^8$, so forward sensitivity is expected.`, String.raw`Vế phải đã nhiễu cho $\tilde x=(1,1.01)$, với nhiễu nghiệm tương đối khoảng $7.07\cdot10^{-3}$ dù nhiễu dữ liệu gần $10^{-10}$. Số điều kiện hệ là $10^8$, nên độ nhạy tiến là điều dự kiến.`),
      b(String.raw`The scaled residual for $(Q,\tilde b,\tilde x)$ is zero in exact arithmetic. A tiny backward residual confirms equation satisfaction, not closeness to the solution for the unperturbed data; use Cholesky with scaling as needed and report $\kappa_2(Q)$.`, String.raw`Residual co giãn của $(Q,\tilde b,\tilde x)$ bằng không trong số học chính xác. Residual lùi nhỏ xác nhận thỏa phương trình, không xác nhận gần nghiệm với dữ liệu chưa nhiễu; dùng Cholesky kèm cân bằng thang nếu cần và báo $\kappa_2(Q)$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(2,1)$, $c=(2,-1)$, and $0\le x\le1$, verify the box-constrained minimizer $x^*=(1,0)$ with multipliers $\lambda=(2,0)$, $\mu=(0,1)$, and compare primal and dual values.`, String.raw`Với $Q=\operatorname{diag}(2,1)$, $c=(2,-1)$ và $0\le x\le1$, hãy kiểm tra nghiệm hộp $x^*=(1,0)$ với multiplier $\lambda=(2,0)$, $\mu=(0,1)$, rồi so sánh giá trị primal và dual.`),
        solution: [
          b(String.raw`The point is feasible. Its objective gradient is $Q(x^*-c)=(-2,1)$, so stationarity $Q(x^*-c)+\lambda-\mu=0$ holds.`, String.raw`Điểm khả thi. Gradient mục tiêu là $Q(x^*-c)=(-2,1)$, nên điều kiện dừng $Q(x^*-c)+\lambda-\mu=0$ đúng.`),
          b(String.raw`The upper multiplier is positive only where $x_1=1$, and the lower multiplier only where $x_2=0$; thus complementary slackness holds.`, String.raw`Multiplier trên chỉ dương tại $x_1=1$, còn multiplier dưới chỉ dương tại $x_2=0$; vì vậy bổ sung chặt đúng.`),
          b(String.raw`The primal value is $\frac12[2(1-2)^2+(0+1)^2]=1.5$. In the dual formula, $c^TQc=9$ and $-Qc+\lambda-\mu=(-2,0)$, giving $q=4.5-2-1=1.5$.`, String.raw`Giá trị primal là $\frac12[2(1-2)^2+(0+1)^2]=1.5$. Trong công thức dual, $c^TQc=9$ và $-Qc+\lambda-\mu=(-2,0)$, nên $q=4.5-2-1=1.5$.`),
        ],
      },
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(2,0.02)$, compare the solutions of $Qx=b$ and $Q\tilde x=\tilde b$ with $b=(2,0.02)$ and $\tilde b=(2,0.0202)$. Compute $\kappa_2(Q)$ and relative data and solution changes.`, String.raw`Với $Q=\operatorname{diag}(2,0.02)$, hãy so sánh nghiệm của $Qx=b$ và $Q\tilde x=\tilde b$ với $b=(2,0.02)$, $\tilde b=(2,0.0202)$. Tính $\kappa_2(Q)$ và mức đổi tương đối của dữ liệu và nghiệm.`),
        solution: [
          b(String.raw`The eigenvalues are $2$ and $0.02$, so $\kappa_2(Q)=100$; coordinatewise solutions are $x=(1,1)$ and $\tilde x=(1,1.01)$.`, String.raw`Trị riêng là $2$ và $0.02$, nên $\kappa_2(Q)=100$; nghiệm theo tọa độ là $x=(1,1)$ và $\tilde x=(1,1.01)$.`),
          b(String.raw`The relative right-side change is $0.0002/\sqrt{4+0.02^2}\approx10^{-4}$.`, String.raw`Mức đổi tương đối của vế phải là $0.0002/\sqrt{4+0.02^2}\approx10^{-4}$.`),
          b(String.raw`The relative solution change is $0.01/\sqrt2\approx7.07\cdot10^{-3}$, much larger but below the rough $\kappa_2(Q)$ amplification scale.`, String.raw`Mức đổi tương đối của nghiệm là $0.01/\sqrt2\approx7.07\cdot10^{-3}$, lớn hơn nhiều nhưng vẫn dưới thang khuếch đại gần đúng $\kappa_2(Q)$.`),
        ],
      },
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(1,10^{-4})$, $b=(2,10^{-4})$, and candidate $\hat x=(2,0.9)$, compute the scaled residual, relative forward error from the exact solution, and condition number.`, String.raw`Với $Q=\operatorname{diag}(1,10^{-4})$, $b=(2,10^{-4})$ và ứng viên $\hat x=(2,0.9)$, hãy tính residual co giãn, sai số tiến tương đối so với nghiệm chính xác và số điều kiện.`),
        solution: [
          b(String.raw`The exact solution is $x=(2,1)$, while $Q\hat x-b=(0,-10^{-5})$ and $\kappa_2(Q)=10^4$.`, String.raw`Nghiệm chính xác là $x=(2,1)$, còn $Q\hat x-b=(0,-10^{-5})$ và $\kappa_2(Q)=10^4$.`),
          b(String.raw`The scaled residual is $10^{-5}/(\|Q\|_2\|\hat x\|_2+\|b\|_2)\approx10^{-5}/(2.19+2)\approx2.4\cdot10^{-6}$.`, String.raw`Residual co giãn là $10^{-5}/(\|Q\|_2\|\hat x\|_2+\|b\|_2)\approx10^{-5}/(2.19+2)\approx2.4\cdot10^{-6}$.`),
          b(String.raw`The relative forward error is $0.1/\sqrt5\approx0.0447$. Thus a small backward residual can coexist with a visible parameter error when the matrix is ill-conditioned.`, String.raw`Sai số tiến tương đối là $0.1/\sqrt5\approx0.0447$. Vì vậy residual lùi nhỏ vẫn có thể đi cùng sai số tham số đáng kể khi ma trận điều kiện kém.`),
        ],
      },
    ],
    reviewNote: 'Checked Lagrangian signs for upper/lower box constraints, stationarity, complementarity, and q=P=0.5. Recomputed both diagonal solves and relative perturbations. Restriction: exact zero residual is for the perturbed right side in exact arithmetic; it does not undo data sensitivity.',
    sourceIds: ['o-boyd'],
  },
  'm2-w072-e2': {
    application: b(String.raw`An equality-constrained quadratic admits a Lagrange multiplier certificate, while ridge regression gives a positive-definite Hessian whose eigenmodes control gradient-descent convergence.`, String.raw`Quadratic có ràng buộc đẳng thức có chứng chỉ multiplier Lagrange, còn hồi quy ridge có Hessian xác định dương với các mode riêng kiểm soát tốc độ gradient descent.`),
    formula: b(String.raw`For $H\succ0$ and $a^Tx=d$, $q(\nu)=-\frac12(b-\nu a)^TH^{-1}(b-\nu a)-\nu d$; stationarity is $Hx-b+\nu a=0$. For ridge, $M=A^TA+\lambda I$, $m=\lambda$, $L=\|A\|_2^2+\lambda$, and GD with $\eta=1/L$ satisfies $f(z^+)-f^*\le(1-m/L)^2(f(z)-f^*)$.`, String.raw`Với $H\succ0$ và $a^Tx=d$, $q(\nu)=-\frac12(b-\nu a)^TH^{-1}(b-\nu a)-\nu d$; điều kiện dừng là $Hx-b+\nu a=0$. Với ridge, $M=A^TA+\lambda I$, $m=\lambda$, $L=\|A\|_2^2+\lambda$, và GD với $\eta=1/L$ thỏa $f(z^+)-f^*\le(1-m/L)^2(f(z)-f^*)$.`),
    steps: [
      b(String.raw`For part (i), add $\nu(a^Tx-d)$ to the objective. Minimizing the resulting strictly convex quadratic over $x$ gives $x=H^{-1}(b-\nu a)$ and the stated $q(\nu)$.`, String.raw`Ở phần (i), cộng $\nu(a^Tx-d)$ vào mục tiêu. Cực tiểu quadratic lồi nghiêm ngặt theo $x$ cho $x=H^{-1}(b-\nu a)$ và $q(\nu)$ đã nêu.`),
      b(String.raw`Use $a^Tx=d$ to determine $\nu$; then verify stationarity and equality feasibility before comparing primal and dual values.`, String.raw`Dùng $a^Tx=d$ để tìm $\nu$; sau đó kiểm tra điều kiện dừng và khả thi đẳng thức trước khi so sánh giá trị primal và dual.`),
      b(String.raw`For part (ii), the ridge Hessian $M=A^TA+\lambda I$ has eigenvalues $h_j\in[\lambda,L]$, so it is strongly convex and smooth with the stated constants.`, String.raw`Ở phần (ii), Hessian ridge $M=A^TA+\lambda I$ có trị riêng $h_j\in[\lambda,L]$, nên lồi mạnh và trơn với các hằng số đã nêu.`),
      b(String.raw`The error update is $e^+=(I-M/L)e$. In each eigenmode the objective weight is multiplied by $(1-h_j/L)^2\le(1-\lambda/L)^2$.`, String.raw`Cập nhật sai số là $e^+=(I-M/L)e$. Ở mỗi mode riêng, trọng số mục tiêu được nhân với $(1-h_j/L)^2\le(1-\lambda/L)^2$.`),
    ],
    primarySolution: [
      b(String.raw`The Lagrangian is $\frac12x^THx-b^Tx+\nu(a^Tx-d)$. Its infimum over $x$ occurs at $Hx-b+\nu a=0$, hence $x=H^{-1}(b-\nu a)$ and $q(\nu)=-\frac12(b-\nu a)^TH^{-1}(b-\nu a)-\nu d$.`, String.raw`Lagrangian là $\frac12x^THx-b^Tx+\nu(a^Tx-d)$. Infimum theo $x$ đạt tại $Hx-b+\nu a=0$, nên $x=H^{-1}(b-\nu a)$ và $q(\nu)=-\frac12(b-\nu a)^TH^{-1}(b-\nu a)-\nu d$.`),
      b(String.raw`With the supplied values, $x=(1-\nu/2,-\nu/4)$. The constraint gives $1-3\nu/4=1$, so $\nu^*=0$ and $x^*=(1,0)$.`, String.raw`Với dữ liệu đã cho, $x=(1-\nu/2,-\nu/4)$. Ràng buộc cho $1-3\nu/4=1$, nên $\nu^*=0$ và $x^*=(1,0)$.`),
      b(String.raw`The primal value is $\frac12(1)(2)-2=-1$, and the dual value is $q(0)=-\frac12(2,0)H^{-1}(2,0)^T=-1$. Equal feasible values certify zero gap and optimality.`, String.raw`Giá trị primal là $\frac12(1)(2)-2=-1$, còn dual là $q(0)=-\frac12(2,0)H^{-1}(2,0)^T=-1$. Hai giá trị khả thi bằng nhau chứng nhận gap bằng không và tính tối ưu.`),
      b(String.raw`For ridge, $M=A^TA+\lambda I$ has eigenvalues $h_j\in[m,L]$ with $m=\lambda>0$. If $e=z-z^*$, a step of size $1/L$ gives $e^+=(I-M/L)e$.`, String.raw`Với ridge, $M=A^TA+\lambda I$ có trị riêng $h_j\in[m,L]$ với $m=\lambda>0$. Nếu $e=z-z^*$, bước $1/L$ cho $e^+=(I-M/L)e$.`),
      b(String.raw`In an orthonormal eigenbasis, $f(z)-f^*=\frac12\sum_jh_je_j^2$ and $f(z^+)-f^*=\frac12\sum_jh_j(1-h_j/L)^2e_j^2$.`, String.raw`Trong cơ sở trực chuẩn các vectơ riêng, $f(z)-f^*=\frac12\sum_jh_je_j^2$ và $f(z^+)-f^*=\frac12\sum_jh_j(1-h_j/L)^2e_j^2$.`),
      b(String.raw`Because $\lambda\le h_j\le L$, $0\le1-h_j/L\le1-\lambda/L$. Termwise comparison proves the factor $(1-\lambda/L)^2$ bound.`, String.raw`Vì $\lambda\le h_j\le L$, $0\le1-h_j/L\le1-\lambda/L$. So sánh từng hạng chứng minh cận hệ số $(1-\lambda/L)^2$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $H=\operatorname{diag}(1,3)$, $b=(0,3)$, $a=(1,2)$, and constraint $a^Tx=4$, derive $q(\nu)$, solve the KKT system, and check primal-dual equality.`, String.raw`Với $H=\operatorname{diag}(1,3)$, $b=(0,3)$, $a=(1,2)$ và ràng buộc $a^Tx=4$, hãy suy ra $q(\nu)$, giải hệ KKT và kiểm tra primal-dual bằng nhau.`),
        solution: [
          b(String.raw`The Lagrangian is $\frac12x^THx-b^Tx+\nu(a^Tx-4)$, so minimizing over $x$ gives $q(\nu)=-\frac12(b-\nu a)^TH^{-1}(b-\nu a)-4\nu$.`, String.raw`Lagrangian là $\frac12x^THx-b^Tx+\nu(a^Tx-4)$, nên cực tiểu theo $x$ cho $q(\nu)=-\frac12(b-\nu a)^TH^{-1}(b-\nu a)-4\nu$.`),
          b(String.raw`Stationarity yields $x=(-\nu,1-2\nu/3)$. The constraint gives $2-7\nu/3=4$, so $\nu=-6/7$ and $x=(6/7,11/7)$.`, String.raw`Điều kiện dừng cho $x=(-\nu,1-2\nu/3)$. Ràng buộc cho $2-7\nu/3=4$, nên $\nu=-6/7$ và $x=(6/7,11/7)$.`),
          b(String.raw`The primal value is $\frac12[(6/7)^2+3(11/7)^2]-3(11/7)=-9/14$. Substituting $\nu=-6/7$ into $q$ gives the same value, certifying the constrained optimum.`, String.raw`Giá trị primal là $\frac12[(6/7)^2+3(11/7)^2]-3(11/7)=-9/14$. Thế $\nu=-6/7$ vào $q$ được cùng giá trị, chứng nhận cực tiểu có ràng buộc.`),
        ],
      },
      {
        prompt: b(String.raw`For ridge with $A=\operatorname{diag}(2,0)$, $\lambda=1$, and initial error $e=(1,2)$, compute the initial and next objective errors for step $\eta=1/L$. Verify the theorem's contraction bound.`, String.raw`Với ridge có $A=\operatorname{diag}(2,0)$, $\lambda=1$ và sai số đầu $e=(1,2)$, hãy tính sai số mục tiêu đầu và sau bước $\eta=1/L$. Kiểm tra cận co của định lý.`),
        solution: [
          b(String.raw`The Hessian is $M=\operatorname{diag}(5,1)$, so $m=1$, $L=5$, and $\eta=1/5$.`, String.raw`Hessian là $M=\operatorname{diag}(5,1)$, nên $m=1$, $L=5$ và $\eta=1/5$.`),
          b(String.raw`The initial error is $\frac12(5\cdot1^2+1\cdot2^2)=4.5$. The update scales the two modes by $0$ and $0.8$, giving $e^+=(0,1.6)$ and objective error $1.28$.`, String.raw`Sai số đầu là $\frac12(5\cdot1^2+1\cdot2^2)=4.5$. Cập nhật co hai mode theo hệ số $0$ và $0.8$, cho $e^+=(0,1.6)$ và sai số mục tiêu $1.28$.`),
          b(String.raw`The guaranteed factor is $(1-m/L)^2=(4/5)^2=0.64$, and $1.28\le0.64(4.5)=2.88$.`, String.raw`Hệ số bảo đảm là $(1-m/L)^2=(4/5)^2=0.64$, và $1.28\le0.64(4.5)=2.88$.`),
        ],
      },
      {
        prompt: b(String.raw`Let $A=\operatorname{diag}(0,2)$ and $\lambda=2$ in ridge regression. Use an error along the eigenvector with eigenvalue $m$ to show the factor $(1-m/L)^2$ can be attained exactly.`, String.raw`Cho $A=\operatorname{diag}(0,2)$ và $\lambda=2$ trong hồi quy ridge. Dùng sai số theo vectơ riêng có trị riêng $m$ để chỉ ra hệ số $(1-m/L)^2$ có thể đạt đúng dấu bằng.`),
        solution: [
          b(String.raw`Here $M=A^TA+\lambda I=\operatorname{diag}(2,6)$, so $m=2$, $L=6$, and the first coordinate is a minimum-eigenvalue direction.`, String.raw`Ở đây $M=A^TA+\lambda I=\operatorname{diag}(2,6)$, nên $m=2$, $L=6$ và tọa độ đầu là hướng trị riêng nhỏ nhất.`),
          b(String.raw`Take $e=(1,0)$. A step of size $1/6$ gives $e^+=(1-2/6)e=(2/3,0)$.`, String.raw`Lấy $e=(1,0)$. Bước kích thước $1/6$ cho $e^+=(1-2/6)e=(2/3,0)$.`),
          b(String.raw`The quadratic objective error is multiplied by $(2/3)^2=4/9=(1-m/L)^2$, so the bound is tight in this eigendirection.`, String.raw`Sai số mục tiêu quadratic được nhân $(2/3)^2=4/9=(1-m/L)^2$, nên cận chặt theo hướng riêng này.`),
        ],
      },
    ],
    reviewNote: 'Checked the Lagrange multiplier sign, dual constant −νd, KKT equality solution and matching values. For ridge, verified λ≤h_j≤L and squared eigenmode factors. Restriction: λ>0 ensures strict convexity; the stated contraction is for the fixed step 1/L.',
    sourceIds: ['o-boyd'],
  },
  'm2-w072-e3': {
    application: b(String.raw`A perturbation in a weak singular direction can make a fitted parameter change far more than the data. QR or SVD avoids the extra conditioning from normal equations, while a scaled residual measures equation fit rather than intrinsic sensitivity.`, String.raw`Nhiễu theo hướng kỳ dị yếu có thể làm tham số ước lượng đổi nhiều hơn dữ liệu. QR hoặc SVD tránh thêm điều kiện do phương trình chuẩn, còn residual co giãn đo mức khớp phương trình chứ không đo độ nhạy nội tại.`),
    formula: b(String.raw`For full-rank $A$, $\kappa_2(A)=\sigma_{\max}/\sigma_{\min}$ and $\kappa_2(A^TA)=\kappa_2(A)^2$. A normwise scaled residual is $\eta=\|A\hat x-\tilde b\|_2/(\|A\|_2\|\hat x\|_2+\|\tilde b\|_2)$.`, String.raw`Với $A$ hạng đầy đủ, $\kappa_2(A)=\sigma_{\max}/\sigma_{\min}$ và $\kappa_2(A^TA)=\kappa_2(A)^2$. Residual co giãn theo chuẩn là $\eta=\|A\hat x-\tilde b\|_2/(\|A\|_2\|\hat x\|_2+\|\tilde b\|_2)$.`),
    steps: [
      b(String.raw`The diagonal singular values are $1$ and $10^{-5}$, so $\kappa_2(A)=10^5$ and the normal-equation matrix has $\kappa_2(A^TA)=10^{10}$.`, String.raw`Các trị kỳ dị đường chéo là $1$ và $10^{-5}$, nên $\kappa_2(A)=10^5$ và ma trận phương trình chuẩn có $\kappa_2(A^TA)=10^{10}$.`),
      b(String.raw`The perturbed right side is $\tilde b=(1,1.001\cdot10^{-5})$, giving $\tilde x=A^{-1}\tilde b=(1,1.001)$.`, String.raw`Vế phải nhiễu là $\tilde b=(1,1.001\cdot10^{-5})$, cho $\tilde x=A^{-1}\tilde b=(1,1.001)$.`),
      b(String.raw`The relative data change is about $10^{-8}$, whereas the relative solution change is $0.001/\sqrt2\approx7.07\cdot10^{-4}$.`, String.raw`Mức đổi tương đối của dữ liệu khoảng $10^{-8}$, còn mức đổi tương đối của nghiệm là $0.001/\sqrt2\approx7.07\cdot10^{-4}$.`),
      b(String.raw`Normal equations square the condition number; QR or SVD works with $A$ directly. Report a scaled residual and singular-value/rank information, since a small residual alone does not ensure small forward error.`, String.raw`Phương trình chuẩn bình phương số điều kiện; QR hoặc SVD làm việc trực tiếp với $A$. Hãy báo residual co giãn và thông tin trị kỳ dị/hạng, vì residual nhỏ riêng lẻ không bảo đảm sai số tiến nhỏ.`),
    ],
    primarySolution: [
      b(String.raw`The singular values of $A=\operatorname{diag}(1,10^{-5})$ are $1$ and $10^{-5}$, so $\kappa_2(A)=10^5$ and $\kappa_2(A^TA)=10^{10}$.`, String.raw`Các trị kỳ dị của $A=\operatorname{diag}(1,10^{-5})$ là $1$ và $10^{-5}$, nên $\kappa_2(A)=10^5$ và $\kappa_2(A^TA)=10^{10}$.`),
      b(String.raw`Since $b=(1,10^{-5})$ and $\tilde b=(1,1.001\cdot10^{-5})$, coordinatewise solution gives $\tilde x=(1,1.001)$.`, String.raw`Vì $b=(1,10^{-5})$ và $\tilde b=(1,1.001\cdot10^{-5})$, giải theo tọa độ cho $\tilde x=(1,1.001)$.`),
      b(String.raw`The relative input perturbation is $10^{-8}/\|b\|_2\approx10^{-8}$; the relative parameter perturbation is $0.001/\sqrt2\approx7.07\cdot10^{-4}$.`, String.raw`Nhiễu đầu vào tương đối là $10^{-8}/\|b\|_2\approx10^{-8}$; nhiễu tham số tương đối là $0.001/\sqrt2\approx7.07\cdot10^{-4}$.`),
      b(String.raw`Forming $A^TA$ raises the condition number to $10^{10}$, risking loss of small-direction information. QR or SVD is preferable; the scaled residual checks the computed equation but conditioning governs forward sensitivity.`, String.raw`Lập $A^TA$ làm số điều kiện tăng lên $10^{10}$, có nguy cơ mất thông tin hướng nhỏ. Nên dùng QR hoặc SVD; residual co giãn kiểm tra phương trình tính được, còn số điều kiện chi phối độ nhạy tiến.`),
      b(String.raw`Here the exact perturbed solve has residual zero; in floating point report $\|A\tilde x-\tilde b\|_2/(\|A\|_2\|\tilde x\|_2+\|\tilde b\|_2)$ together with $\kappa_2(A)$ or singular-value diagnostics.`, String.raw`Ở đây nghiệm chính xác cho dữ liệu nhiễu có residual bằng không; trong số thực dấu phẩy động, hãy báo $\|A\tilde x-\tilde b\|_2/(\|A\|_2\|\tilde x\|_2+\|\tilde b\|_2)$ cùng $\kappa_2(A)$ hoặc chẩn đoán trị kỳ dị.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $A=\operatorname{diag}(1,10^{-3})$, $x=(2,-1)$, and $b=Ax$. Perturb $b$ to $\tilde b=b+(0,-10^{-4})$. Compute the condition number and relative input/output changes.`, String.raw`Cho $A=\operatorname{diag}(1,10^{-3})$, $x=(2,-1)$ và $b=Ax$. Nhiễu $b$ thành $\tilde b=b+(0,-10^{-4})$. Hãy tính số điều kiện và mức đổi tương đối đầu vào/đầu ra.`),
        solution: [
          b(String.raw`The singular values are $1$ and $10^{-3}$, so $\kappa_2(A)=10^3$.`, String.raw`Các trị kỳ dị là $1$ và $10^{-3}$, nên $\kappa_2(A)=10^3$.`),
          b(String.raw`Solving the diagonal system gives $\tilde x=(2,-1.1)$; the relative data change is $10^{-4}/\sqrt{4+10^{-6}}\approx5\cdot10^{-5}$.`, String.raw`Giải hệ đường chéo được $\tilde x=(2,-1.1)$; mức đổi dữ liệu tương đối là $10^{-4}/\sqrt{4+10^{-6}}\approx5\cdot10^{-5}$.`),
          b(String.raw`The relative solution change is $0.1/\sqrt5\approx0.0447$, much larger than the data change and consistent with a condition number of one thousand.`, String.raw`Mức đổi nghiệm tương đối là $0.1/\sqrt5\approx0.0447$, lớn hơn nhiều mức đổi dữ liệu và phù hợp với số điều kiện một nghìn.`),
        ],
      },
      {
        prompt: b(String.raw`A full-column-rank matrix has singular values $12$ and $0.3$. Compute $\kappa_2(A)$ and $\kappa_2(A^TA)$, and explain the numerical consequence of forming normal equations.`, String.raw`Ma trận hạng cột đầy đủ có trị kỳ dị $12$ và $0.3$. Hãy tính $\kappa_2(A)$, $\kappa_2(A^TA)$ và giải thích hệ quả số của việc lập phương trình chuẩn.`),
        solution: [
          b(String.raw`The condition number is $\kappa_2(A)=12/0.3=40$.`, String.raw`Số điều kiện là $\kappa_2(A)=12/0.3=40$.`),
          b(String.raw`The Gram matrix squares the singular values, so $\kappa_2(A^TA)=40^2=1600$.`, String.raw`Ma trận Gram bình phương các trị kỳ dị, nên $\kappa_2(A^TA)=40^2=1600$.`),
          b(String.raw`This larger condition number amplifies rounding effects more; QR/SVD avoids explicitly squaring the spectrum, although the original problem remains sensitive.`, String.raw`Số điều kiện lớn hơn khuếch đại ảnh hưởng làm tròn nhiều hơn; QR/SVD tránh bình phương tường minh phổ, dù bài toán gốc vẫn nhạy.`),
        ],
      },
      {
        prompt: b(String.raw`For $A=\operatorname{diag}(2,10^{-4})$, exact $x=(1,100)$, and $\hat x=(1,99.9)$, compute the residual, relative forward error, and condition number. Explain their scale difference.`, String.raw`Với $A=\operatorname{diag}(2,10^{-4})$, nghiệm chính xác $x=(1,100)$ và $\hat x=(1,99.9)$, hãy tính residual, sai số tiến tương đối và số điều kiện. Giải thích chênh lệch thang đo.`),
        solution: [
          b(String.raw`The data are $b=Ax=(2,0.01)$; the residual is $A\hat x-b=(0,-10^{-5})$, and $\kappa_2(A)=2/10^{-4}=20000$.`, String.raw`Dữ liệu là $b=Ax=(2,0.01)$; residual là $A\hat x-b=(0,-10^{-5})$, và $\kappa_2(A)=2/10^{-4}=20000$.`),
          b(String.raw`The parameter error norm is $0.1$, while $\|x\|_2=\sqrt{10001}$, so relative forward error is about $10^{-3}$.`, String.raw`Chuẩn sai số tham số là $0.1$, còn $\|x\|_2=\sqrt{10001}$, nên sai số tiến tương đối xấp xỉ $10^{-3}$.`),
          b(String.raw`The scaled residual is roughly $10^{-5}/(2(99.9)+2)\approx5\cdot10^{-8}$. A small residual coexists with a larger parameter error because the weak singular direction has high sensitivity.`, String.raw`Residual co giãn xấp xỉ $10^{-5}/(2(99.9)+2)\approx5\cdot10^{-8}$. Residual nhỏ vẫn đi cùng sai số tham số lớn hơn vì hướng kỳ dị yếu có độ nhạy cao.`),
        ],
      },
    ],
    reviewNote: 'Recomputed both singular-value ratios, the perturbed coordinate solution, relative perturbation norms, and scaled-residual denominator. Restriction: QR/SVD improves algorithmic stability but cannot remove forward sensitivity inherent in a large condition number.',
    sourceIds: ['o-boyd'],
  },
  'm2-w072-e4': {
    application: b(String.raw`A LASSO solution can be certified optimal by pairing its residual with a feasible dual vector. The residual identity and the ℓ1 subgradient condition make both Fenchel inequalities tight.`, String.raw`Có thể chứng nhận nghiệm LASSO tối ưu bằng cách ghép residual với vectơ dual khả thi. Đẳng thức residual và điều kiện dưới-gradient ℓ1 làm hai bất đẳng thức Fenchel đạt dấu bằng.`),
    formula: b(String.raw`For $\lambda>0$, $P(x)=g(Ax-b)+h(x)$ with $g(r)=\frac12\|r\|^2$ and $h(x)=\lambda\|x\|_1$ has dual $D(u)=-\frac12\|u\|^2-b^Tu$ subject to $\|A^Tu\|_\infty\le\lambda$. A certificate requires $u=Ax-b$ and $-A^Tu\in\partial h(x)=\lambda\partial\|x\|_1$.`, String.raw`Với $\lambda>0$, $P(x)=g(Ax-b)+h(x)$, $g(r)=\frac12\|r\|^2$, $h(x)=\lambda\|x\|_1$, có dual $D(u)=-\frac12\|u\|^2-b^Tu$ với điều kiện $\|A^Tu\|_\infty\le\lambda$. Chứng chỉ cần $u=Ax-b$ và $-A^Tu\in\partial h(x)=\lambda\partial\|x\|_1$.`),
    steps: [
      b(String.raw`The conjugate of $g(r)=\frac12\|r\|^2$ is $g^*(u)=\frac12\|u\|^2$, obtained by maximizing $u^Tr-\frac12\|r\|^2$.`, String.raw`Hàm liên hợp của $g(r)=\frac12\|r\|^2$ là $g^*(u)=\frac12\|u\|^2$, thu được khi cực đại $u^Tr-\frac12\|r\|^2$.`),
      b(String.raw`For $h(x)=\lambda\|x\|_1$, its conjugate is zero on $\{s:\|s\|_\infty\le\lambda\}$ and $+\infty$ outside that set.`, String.raw`Với $h(x)=\lambda\|x\|_1$, hàm liên hợp bằng không trên $\{s:\|s\|_\infty\le\lambda\}$ và bằng $+\infty$ bên ngoài tập đó.`),
      b(String.raw`Using $g(y)=\sup_u\{u^Ty-g^*(u)\}$ with $y=Ax-b$, minimizing over $x$ gives $D(u)=-g^*(u)-b^Tu-h^*(-A^Tu)$.`, String.raw`Dùng $g(y)=\sup_u\{u^Ty-g^*(u)\}$ với $y=Ax-b$, lấy infimum theo $x$ cho $D(u)=-g^*(u)-b^Tu-h^*(-A^Tu)$.`),
      b(String.raw`The effective domain condition is $\|A^Tu\|_\infty\le\lambda$, producing the stated dual objective. Fenchel equality for $g$ requires $u=Ax-b$; for $h$ it requires $-A^Tu\in\partial h(x)$.`, String.raw`Miền hữu hiệu cần $\|A^Tu\|_\infty\le\lambda$, cho mục tiêu dual đã nêu. Dấu bằng Fenchel của $g$ cần $u=Ax-b$; của $h$ cần $-A^Tu\in\partial h(x)$.`),
      b(String.raw`When both equalities hold, the primal and dual values match. Weak duality then proves optimality; the conditions are a sufficient certificate and do not assert that every arbitrary pair works.`, String.raw`Khi cả hai dấu bằng đúng, giá trị primal và dual bằng nhau. Đối ngẫu yếu khi đó chứng minh tối ưu; các điều kiện là chứng chỉ đủ, không nói mọi cặp tùy ý đều dùng được.`),
    ],
    primarySolution: [
      b(String.raw`The quadratic conjugate is $g^*(u)=\frac12\|u\|^2$. The scaled ℓ1 conjugate satisfies $h^*(s)=0$ if $\|s\|_\infty\le\lambda$ and is infinite otherwise.`, String.raw`Hàm liên hợp quadratic là $g^*(u)=\frac12\|u\|^2$. Hàm liên hợp ℓ1 co giãn thỏa $h^*(s)=0$ nếu $\|s\|_\infty\le\lambda$ và vô hạn ở ngoài.`),
      b(String.raw`Fenchel representation of $g(Ax-b)$ yields the dual expression $-\frac12\|u\|^2-b^Tu-h^*(-A^Tu)$; its finite domain is $\|A^Tu\|_\infty\le\lambda$.`, String.raw`Biểu diễn Fenchel của $g(Ax-b)$ cho biểu thức dual $-\frac12\|u\|^2-b^Tu-h^*(-A^Tu)$; miền hữu hạn là $\|A^Tu\|_\infty\le\lambda$.`),
      b(String.raw`For the proposed pair, $u=Ax-b$ is exactly the quadratic Fenchel equality condition, and $-A^Tu\in\partial h(x)$ is the ℓ1 Fenchel equality condition.`, String.raw`Với cặp đề xuất, $u=Ax-b$ đúng điều kiện dấu bằng Fenchel quadratic, còn $-A^Tu\in\partial h(x)$ là điều kiện dấu bằng Fenchel ℓ1.`),
      b(String.raw`Adding these two equalities gives $P(x)=D(u)$. Since $x$ is primal feasible and $u$ dual feasible, weak duality certifies that both are optimal.`, String.raw`Cộng hai dấu bằng được $P(x)=D(u)$. Vì $x$ khả thi primal và $u$ khả thi dual, đối ngẫu yếu chứng nhận cả hai tối ưu.`),
      b(String.raw`For this finite-dimensional LASSO, the Fenchel–Rockafellar qualification holds: $g$ is continuous everywhere and $h$ is finite everywhere. The pairwise equal-value certificate still verifies optimality directly.`, String.raw`Với LASSO hữu hạn chiều này, điều kiện Fenchel–Rockafellar đúng: $g$ liên tục mọi nơi và $h$ hữu hạn mọi nơi. Chứng chỉ cặp có giá trị bằng nhau vẫn xác minh tối ưu trực tiếp.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For scalar LASSO with $A=2$, $b=0.2$, and $\lambda=0.5$, test $x=0$ and $u=Ax-b$ for dual feasibility, the subgradient condition, and equality of primal and dual values.`, String.raw`Với LASSO vô hướng $A=2$, $b=0.2$, $\lambda=0.5$, hãy kiểm tra $x=0$, $u=Ax-b$ về khả thi dual, điều kiện dưới-gradient và primal/dual bằng nhau.`),
        solution: [
          b(String.raw`The residual is $u=2(0)-0.2=-0.2$, and $\|A^Tu\|_\infty=|2(-0.2)|=0.4\le0.5$.`, String.raw`Residual là $u=2(0)-0.2=-0.2$, và $\|A^Tu\|_\infty=|2(-0.2)|=0.4\le0.5$.`),
          b(String.raw`At $x=0$, $\partial h(0)=0.5[-1,1]$; $-A^Tu=0.4$ belongs to this interval, so the ℓ1 equality condition holds.`, String.raw`Tại $x=0$, $\partial h(0)=0.5[-1,1]$; $-A^Tu=0.4$ thuộc khoảng này, nên điều kiện dấu bằng ℓ1 đúng.`),
          b(String.raw`The primal value is $\frac12(0.2)^2=0.02$ and the dual value is $-\frac12(0.2)^2-0.2(-0.2)=0.02$, certifying optimality.`, String.raw`Giá trị primal là $\frac12(0.2)^2=0.02$ và dual là $-\frac12(0.2)^2-0.2(-0.2)=0.02$, chứng nhận tối ưu.`),
        ],
      },
      {
        prompt: b(String.raw`For scalar LASSO with $A=1$, $b=3$, and $\lambda=1$, verify the primal-dual certificate at $x=2$ using $u=Ax-b$.`, String.raw`Với LASSO vô hướng $A=1$, $b=3$, $\lambda=1$, hãy kiểm tra chứng chỉ primal-dual tại $x=2$ bằng $u=Ax-b$.`),
        solution: [
          b(String.raw`The residual dual candidate is $u=2-3=-1$, and dual feasibility holds because $|A^Tu|=1=\lambda$.`, String.raw`Ứng viên dual residual là $u=2-3=-1$, và khả thi dual đúng vì $|A^Tu|=1=\lambda$.`),
          b(String.raw`Since $x=2>0$, $\partial(\lambda|x|)=\{1\}$; indeed $-A^Tu=1$ lies in it.`, String.raw`Vì $x=2>0$, $\partial(\lambda|x|)=\{1\}$; thật vậy $-A^Tu=1$ thuộc tập này.`),
          b(String.raw`The primal value is $\frac12(2-3)^2+2=2.5$, and the dual value is $-\frac12(-1)^2-3(-1)=2.5$.`, String.raw`Giá trị primal là $\frac12(2-3)^2+2=2.5$, còn dual là $-\frac12(-1)^2-3(-1)=2.5$.`),
        ],
      },
      {
        prompt: b(String.raw`For $A=2$, $b=1$, $\lambda=0.5$, and candidate $x=0$, let $u=Ax-b$. Does this residual produce a Fenchel certificate? Identify the failed condition.`, String.raw`Với $A=2$, $b=1$, $\lambda=0.5$ và ứng viên $x=0$, đặt $u=Ax-b$. Residual này có tạo chứng chỉ Fenchel không? Hãy nêu điều kiện thất bại.`),
        solution: [
          b(String.raw`The residual is $u=-1$. Dual feasibility would require $|A^Tu|=2\le0.5$, which is false.`, String.raw`Residual là $u=-1$. Khả thi dual đòi $|A^Tu|=2\le0.5$, điều này sai.`),
          b(String.raw`At $x=0$, the ℓ1 subgradient interval is $[-0.5,0.5]$, but $-A^Tu=2$ is outside it as well.`, String.raw`Tại $x=0$, khoảng dưới-gradient ℓ1 là $[-0.5,0.5]$, nhưng $-A^Tu=2$ cũng nằm ngoài khoảng.`),
          b(String.raw`Thus the residual identity alone is insufficient; the pair fails dual feasibility and the second Fenchel equality, so no optimality certificate follows.`, String.raw`Vậy riêng đẳng thức residual chưa đủ; cặp không khả thi dual và không thỏa dấu bằng Fenchel thứ hai, nên chưa có chứng chỉ tối ưu.`),
        ],
      },
    ],
    reviewNote: 'Checked both conjugates, the minus sign in h*(−Aᵀu), and equality condition −Aᵀu∈∂h(x). For λ>0, g is continuous everywhere and h is finite everywhere, so the Fenchel–Rockafellar qualification holds. Restriction: the stated equal-value pair is a sufficient certificate, not a claim that every candidate x already supplies one.',
    sourceIds: ['o-boyd'],
  },
  'daily-schur-sensitivity': {
    application: b(String.raw`A constrained quadratic's Schur complement maps a required exposure vector to both the optimal position and its minimum cost. Full row rank makes the reduced system invertible and exposes cost sensitivity.`, String.raw`Schur complement của quadratic có ràng buộc ánh xạ vector mức phơi nhiễm yêu cầu sang cả vị thế tối ưu lẫn chi phí tối thiểu. Hạng hàng đầy đủ làm hệ rút gọn khả nghịch và cho thấy độ nhạy chi phí.`),
    formula: b(String.raw`For $Q\succ0$ and full-row-rank $A\in\mathbb R^{m\times n}$, let $S=AQ^{-1}A^T\succ0$. For $\min_x\frac12x^TQx$ subject to $Ax=b$, KKT gives $x^*=Q^{-1}A^TS^{-1}b$, $\lambda^*=-S^{-1}b$, $v(b)=\frac12b^TS^{-1}b$, and $\nabla v(b)=S^{-1}b=-\lambda^*$.`, String.raw`Với $Q\succ0$ và $A\in\mathbb R^{m\times n}$ hạng hàng đầy đủ, đặt $S=AQ^{-1}A^T\succ0$. Với $\min_x\frac12x^TQx$ thỏa $Ax=b$, KKT cho $x^*=Q^{-1}A^TS^{-1}b$, $\lambda^*=-S^{-1}b$, $v(b)=\frac12b^TS^{-1}b$ và $\nabla v(b)=S^{-1}b=-\lambda^*$.`),
    steps: [
      b(String.raw`Use Lagrangian $\mathcal L(x,\lambda)=\frac12x^TQx+\lambda^T(Ax-b)$. Stationarity requires $Qx+A^T\lambda=0$, so $x=-Q^{-1}A^T\lambda$.`, String.raw`Dùng Lagrangian $\mathcal L(x,\lambda)=\frac12x^TQx+\lambda^T(Ax-b)$. Điều kiện dừng yêu cầu $Qx+A^T\lambda=0$, nên $x=-Q^{-1}A^T\lambda$.`),
      b(String.raw`Substitute into $Ax=b$ to obtain $-S\lambda=b$. Full row rank and $Q\succ0$ imply $z^TSz=(A^Tz)^TQ^{-1}(A^Tz)>0$ for every $z\ne0$, so $S$ is invertible.`, String.raw`Thế vào $Ax=b$ được $-S\lambda=b$. Hạng hàng đầy đủ và $Q\succ0$ suy ra $z^TSz=(A^Tz)^TQ^{-1}(A^Tz)>0$ với mọi $z\ne0$, nên $S$ khả nghịch.`),
      b(String.raw`Thus $\lambda^*=-S^{-1}b$ and $x^*=Q^{-1}A^TS^{-1}b$; direct substitution verifies primal feasibility and stationarity.`, String.raw`Vậy $\lambda^*=-S^{-1}b$ và $x^*=Q^{-1}A^TS^{-1}b$; thế trực tiếp xác minh khả thi primal và điều kiện dừng.`),
      b(String.raw`Substitution into the objective gives $v(b)=\frac12b^TS^{-1}b$. Since $S^{-1}$ is symmetric, differentiation yields $\nabla v(b)=S^{-1}b=-\lambda^*$.`, String.raw`Thế vào mục tiêu được $v(b)=\frac12b^TS^{-1}b$. Vì $S^{-1}$ đối xứng, lấy gradient cho $\nabla v(b)=S^{-1}b=-\lambda^*$.`),
    ],
    primarySolution: [
      b(String.raw`Here $Q=\operatorname{diag}(1,4)$, $A=(1,1)$, so $S=AQ^{-1}A^T=1+\frac14=\frac54$ and $S^{-1}=\frac45$.`, String.raw`Ở đây $Q=\operatorname{diag}(1,4)$, $A=(1,1)$, nên $S=AQ^{-1}A^T=1+\frac14=\frac54$ và $S^{-1}=\frac45$.`),
      b(String.raw`With $b=5$, the formula gives $x^*=Q^{-1}A^TS^{-1}b=(4,1)$. It is feasible since $4+1=5$.`, String.raw`Với $b=5$, công thức cho $x^*=Q^{-1}A^TS^{-1}b=(4,1)$. Điểm khả thi vì $4+1=5$.`),
      b(String.raw`The multiplier is $\lambda^*=-S^{-1}b=-4$. Stationarity checks as $Qx^*+A^T\lambda^*=(4,4)+(-4,-4)=0$.`, String.raw`Multiplier là $\lambda^*=-S^{-1}b=-4$. Điều kiện dừng kiểm tra được $Qx^*+A^T\lambda^*=(4,4)+(-4,-4)=0$.`),
      b(String.raw`The minimum value is $v(5)=\frac12(5)(\frac45)(5)=10$, and its derivative is $v'(b)=\frac45b$, hence $v'(5)=4=-\lambda^*$.`, String.raw`Giá trị nhỏ nhất là $v(5)=\frac12(5)(\frac45)(5)=10$, đạo hàm là $v'(b)=\frac45b$, nên $v'(5)=4=-\lambda^*$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(2,8)$, $A=(1,2)$, and target $b=4$, compute the Schur complement, optimal $x$, multiplier, and value function derivative.`, String.raw`Với $Q=\operatorname{diag}(2,8)$, $A=(1,2)$ và mục tiêu $b=4$, hãy tính Schur complement, nghiệm tối ưu $x$, multiplier và đạo hàm hàm giá trị.`),
        solution: [
          b(String.raw`The Schur complement is $S=AQ^{-1}A^T=\frac12+\frac{4}{8}=1$, so $S^{-1}=1$.`, String.raw`Schur complement là $S=AQ^{-1}A^T=\frac12+\frac{4}{8}=1$, nên $S^{-1}=1$.`),
          b(String.raw`The KKT formulas give $\lambda^*=-4$ and $x^*=Q^{-1}A^T(4)=(2,1)$, satisfying $Ax=2+2=4$.`, String.raw`Công thức KKT cho $\lambda^*=-4$ và $x^*=Q^{-1}A^T(4)=(2,1)$, thỏa $Ax=2+2=4$.`),
          b(String.raw`The value is $v(4)=\frac12(4)^2=8$ and $v'(b)=S^{-1}b=b$, so $v'(4)=4=-\lambda^*$.`, String.raw`Giá trị là $v(4)=\frac12(4)^2=8$ và $v'(b)=S^{-1}b=b$, nên $v'(4)=4=-\lambda^*$.`),
        ],
      },
      {
        prompt: b(String.raw`For $Q=I_3$, $A=\begin{pmatrix}1&0&0\\0&1&0\end{pmatrix}$, and $b=(3,-1)$, find $S$, $x^*$, $\lambda^*$, and $v(b)$. Verify both KKT equations.`, String.raw`Với $Q=I_3$, $A=\begin{pmatrix}1&0&0\\0&1&0\end{pmatrix}$ và $b=(3,-1)$, hãy tìm $S$, $x^*$, $\lambda^*$, $v(b)$. Kiểm tra cả hai phương trình KKT.`),
        solution: [
          b(String.raw`The rows of $A$ are independent and $S=A A^T=I_2$, so $S^{-1}=I_2$.`, String.raw`Các hàng của $A$ độc lập và $S=A A^T=I_2$, nên $S^{-1}=I_2$.`),
          b(String.raw`The solution and multiplier are $x^*=A^Tb=(3,-1,0)$ and $\lambda^*=-b=(-3,1)$. Feasibility gives $Ax^*=b$.`, String.raw`Nghiệm và multiplier là $x^*=A^Tb=(3,-1,0)$, $\lambda^*=-b=(-3,1)$. Khả thi cho $Ax^*=b$.`),
          b(String.raw`Stationarity is $x^*+A^T\lambda^*=(3,-1,0)+(-3,1,0)=0$, and the value is $v=\frac12\|b\|^2=5$.`, String.raw`Điều kiện dừng là $x^*+A^T\lambda^*=(3,-1,0)+(-3,1,0)=0$, và giá trị là $v=\frac12\|b\|^2=5$.`),
        ],
      },
      {
        prompt: b(String.raw`Let $Q=I_2$, $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$, and $b=(1,2)$. Show that the Schur inverse formula fails, then solve the feasible primal problem and explain the rank condition.`, String.raw`Cho $Q=I_2$, $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$ và $b=(1,2)$. Hãy chỉ ra công thức nghịch đảo Schur thất bại, rồi giải bài toán primal khả thi và giải thích điều kiện hạng.`),
        solution: [
          b(String.raw`The two rows of $A$ are dependent, so $\operatorname{rank}(A)=1<2$ and $S=AA^T=\begin{pmatrix}2&4\\4&8\end{pmatrix}$ is singular. Do not use $S^{-1}$.`, String.raw`Hai hàng của $A$ phụ thuộc, nên $\operatorname{rank}(A)=1<2$ và $S=AA^T=\begin{pmatrix}2&4\\4&8\end{pmatrix}$ suy biến. Không dùng $S^{-1}$.`),
          b(String.raw`The constraints reduce to $x_1+x_2=1$. Minimizing $\frac12(x_1^2+x_2^2)$ gives $x^*=(0.5,0.5)$ and value $0.25$.`, String.raw`Ràng buộc rút về $x_1+x_2=1$. Cực tiểu $\frac12(x_1^2+x_2^2)$ cho $x^*=(0.5,0.5)$ và giá trị $0.25$.`),
          b(String.raw`The primal minimizer remains unique because $Q\succ0$, but equality multipliers are nonunique; remove the redundant row or use a compatible pseudoinverse treatment.`, String.raw`Nghiệm primal vẫn duy nhất vì $Q\succ0$, nhưng multiplier đẳng thức không duy nhất; hãy bỏ hàng dư hoặc dùng xử lý giả nghịch đảo tương thích.`),
        ],
      },
    ],
    reviewNote: 'Checked the KKT stationarity sign against the chosen +λᵀ(Ax−b) convention, primal feasibility, positive definiteness of S under full row rank, and ∇v=−λ*. Restriction: dependent equality rows make S singular even when the feasible primal minimizer exists.',
    sourceIds: ['o-boyd'],
  },
  'm2-w073-e1': {
    application: b(String.raw`Summing an autocovariance sequence gives the long-run variance that controls the leading variance of a long sample mean. Positive and negative lags both contribute, even when covariance decays geometrically.`, String.raw`Cộng chuỗi tự hiệp phương sai cho phương sai dài hạn, chi phối bậc chính phương sai của trung bình mẫu dài. Cả lag dương và âm đều đóng góp, kể cả khi hiệp phương sai giảm hình học.`),
    formula: b(String.raw`For $\gamma(h)=\gamma(0)\phi^{|h|}$ with $\gamma(0)>0$ and $|\phi|<1$, $\Omega=\sum_{h\in\mathbb Z}\gamma(h)=\gamma(0)\left(1+2\sum_{h=1}^\infty\phi^h\right)=\gamma(0)\frac{1+\phi}{1-\phi}>0$.`, String.raw`Với $\gamma(h)=\gamma(0)\phi^{|h|}$, $\gamma(0)>0$ và $|\phi|<1$, $\Omega=\sum_{h\in\mathbb Z}\gamma(h)=\gamma(0)\left(1+2\sum_{h=1}^\infty\phi^h\right)=\gamma(0)\frac{1+\phi}{1-\phi}>0$.`),
    steps: [
      b(String.raw`Use symmetry to write $\Omega=\gamma(0)+2\sum_{h\ge1}\gamma(0)(0.6)^h$.`, String.raw`Dùng tính đối xứng để viết $\Omega=\gamma(0)+2\sum_{h\ge1}\gamma(0)(0.6)^h$.`),
      b(String.raw`The positive-lag series is geometric: $\sum_{h\ge1}(0.6)^h=0.6/(1-0.6)=1.5$.`, String.raw`Chuỗi lag dương là cấp số nhân: $\sum_{h\ge1}(0.6)^h=0.6/(1-0.6)=1.5$.`),
      b(String.raw`Thus $\Omega=0.25[1+2(1.5)]=1$. It is positive, consistent with a valid AR(1)-form covariance and nonnegative spectrum.`, String.raw`Vậy $\Omega=0.25[1+2(1.5)]=1$. Giá trị dương phù hợp với hiệp phương sai dạng AR(1) hợp lệ và phổ không âm.`),
    ],
    primarySolution: [
      b(String.raw`The zero-lag covariance is $\gamma(0)=0.25$; symmetry gives $\gamma(1)=\gamma(-1)=0.25(0.6)=0.15$.`, String.raw`Hiệp phương sai lag không là $\gamma(0)=0.25$; tính đối xứng cho $\gamma(1)=\gamma(-1)=0.25(0.6)=0.15$.`),
      b(String.raw`For positive lags, $\sum_{h\ge1}\gamma(h)=0.25\sum_{h\ge1}(0.6)^h=0.25(1.5)=0.375$.`, String.raw`Với lag dương, $\sum_{h\ge1}\gamma(h)=0.25\sum_{h\ge1}(0.6)^h=0.25(1.5)=0.375$.`),
      b(String.raw`Include the equal negative-lag sum: $\Omega=0.25+2(0.375)=1$.`, String.raw`Cộng chuỗi lag âm bằng nhau: $\Omega=0.25+2(0.375)=1$.`),
      b(String.raw`Because $0.6\in(-1,1)$, the covariance series converges and $(1+0.6)/(1-0.6)>0$; hence the long-run variance is positive.`, String.raw`Vì $0.6\in(-1,1)$, chuỗi hiệp phương sai hội tụ và $(1+0.6)/(1-0.6)>0$; do đó phương sai dài hạn dương.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $\gamma(h)=2(-0.5)^{|h|}$, compute $\gamma(0)$, $\gamma(\pm1)$, and the long-run variance. Explain why alternating negative lags do not make it negative.`, String.raw`Với $\gamma(h)=2(-0.5)^{|h|}$, hãy tính $\gamma(0)$, $\gamma(\pm1)$ và phương sai dài hạn. Giải thích vì sao lag âm luân phiên không làm nó âm.`),
        solution: [
          b(String.raw`We have $\gamma(0)=2$ and $\gamma(1)=\gamma(-1)=2(-0.5)=-1$.`, String.raw`Ta có $\gamma(0)=2$ và $\gamma(1)=\gamma(-1)=2(-0.5)=-1$.`),
          b(String.raw`The geometric formula gives $\Omega=2\frac{1-0.5}{1+0.5}=2/3$.`, String.raw`Công thức cấp số nhân cho $\Omega=2\frac{1-0.5}{1+0.5}=2/3$.`),
          b(String.raw`Although individual lag covariances are negative, the convergent full sum is positive; here $|\phi|<1$ and $1+\phi$, $1-\phi$ are both positive.`, String.raw`Dù từng hiệp phương sai lag âm, tổng hội tụ đầy đủ vẫn dương; ở đây $|\phi|<1$ và cả $1+\phi$, $1-\phi$ đều dương.`),
        ],
      },
      {
        prompt: b(String.raw`An AR(1)-form covariance has $\gamma(0)=0.04$ and $\phi=0.9$. Compute its long-run variance and the first-lag covariance.`, String.raw`Hiệp phương sai dạng AR(1) có $\gamma(0)=0.04$ và $\phi=0.9$. Hãy tính phương sai dài hạn và hiệp phương sai lag một.`),
        solution: [
          b(String.raw`The first lag is $\gamma(1)=0.9(0.04)=0.036$, with $\gamma(-1)=0.036$ by symmetry.`, String.raw`Lag một là $\gamma(1)=0.9(0.04)=0.036$, và theo đối xứng $\gamma(-1)=0.036$.`),
          b(String.raw`Since $|\phi|<1$, $\Omega=0.04(1+0.9)/(1-0.9)=0.04(19)=0.76$.`, String.raw`Vì $|\phi|<1$, $\Omega=0.04(1+0.9)/(1-0.9)=0.04(19)=0.76$.`),
          b(String.raw`The large positive value reflects the slowly decaying positive correlations; the geometric series still converges.`, String.raw`Giá trị dương lớn phản ánh tương quan dương giảm chậm; chuỗi hình học vẫn hội tụ.`),
        ],
      },
      {
        prompt: b(String.raw`For $\gamma(h)=0.09(-0.8)^{|h|}$, evaluate $\Omega$ and state how negative serial dependence affects it relative to $\gamma(0)$.`, String.raw`Với $\gamma(h)=0.09(-0.8)^{|h|}$, hãy tính $\Omega$ và nêu phụ thuộc chuỗi âm ảnh hưởng thế nào so với $\gamma(0)$.`),
        solution: [
          b(String.raw`The parameter has $|\phi|=0.8<1$, so the geometric covariance sum is valid.`, String.raw`Tham số có $|\phi|=0.8<1$, nên tổng hiệp phương sai hình học hợp lệ.`),
          b(String.raw`Compute $\Omega=0.09(1-0.8)/(1+0.8)=0.09(1/9)=0.01$.`, String.raw`Tính $\Omega=0.09(1-0.8)/(1+0.8)=0.09(1/9)=0.01$.`),
          b(String.raw`The alternating negative correlations reduce long-run variance below the one-period variance $0.09$, but the result remains nonnegative.`, String.raw`Tương quan âm luân phiên làm phương sai dài hạn thấp hơn phương sai một kỳ $0.09$, nhưng kết quả vẫn không âm.`),
        ],
      },
    ],
    reviewNote: 'Checked γ(±1), both signed geometric tails, convergence for |φ|<1, and positivity of (1+φ)/(1−φ), including negative φ. Restriction: Ω is the covariance sum under this AR(1)-form sequence; a generic sequence needs its own summability/validity assumptions.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w073-e2': {
    application: b(String.raw`A finite dependent sample mean uses fewer observation pairs at large lags. Counting those pairs produces triangular lag weights in the exact variance formula.`, String.raw`Trung bình mẫu hữu hạn có phụ thuộc dùng ít cặp quan sát hơn ở lag lớn. Đếm các cặp này tạo trọng số lag tam giác trong công thức phương sai chính xác.`),
    formula: b(String.raw`For weakly stationary $X_t$ with finite variance, $\operatorname{Var}(\bar X_n)=\frac1{n^2}\sum_{|h|<n}(n-|h|)\gamma(h)$ and $n\operatorname{Var}(\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(h)$.`, String.raw`Với $X_t$ dừng yếu có phương sai hữu hạn, $\operatorname{Var}(\bar X_n)=\frac1{n^2}\sum_{|h|<n}(n-|h|)\gamma(h)$ và $n\operatorname{Var}(\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(h)$.`),
    steps: [
      b(String.raw`Expand $\operatorname{Var}(\sum_{t=1}^n X_t)=\sum_{s=1}^n\sum_{t=1}^n\operatorname{Cov}(X_s,X_t)$ and use weak stationarity to replace the covariance by $\gamma(s-t)$.`, String.raw`Khai triển $\operatorname{Var}(\sum_{t=1}^n X_t)=\sum_{s=1}^n\sum_{t=1}^n\operatorname{Cov}(X_s,X_t)$ và dùng dừng yếu để thay hiệp phương sai bằng $\gamma(s-t)$.`),
      b(String.raw`For a fixed signed lag $h=s-t$, there are exactly $n-|h|$ pairs when $|h|<n$, and none otherwise.`, String.raw`Với lag có dấu cố định $h=s-t$, có đúng $n-|h|$ cặp khi $|h|<n$, và không có cặp nếu ngược lại.`),
      b(String.raw`Group by lag to obtain $\operatorname{Var}(\sum X_t)=\sum_{|h|<n}(n-|h|)\gamma(h)$, then divide by $n^2$ for the sample mean.`, String.raw`Gom theo lag được $\operatorname{Var}(\sum X_t)=\sum_{|h|<n}(n-|h|)\gamma(h)$, rồi chia $n^2$ cho trung bình mẫu.`),
      b(String.raw`Multiplying by $n$ exposes the Bartlett weights $1-|h|/n$, which equal one at lag zero and taper to zero at the outer included lags.`, String.raw`Nhân $n$ làm hiện trọng số Bartlett $1-|h|/n$, bằng một tại lag không và giảm về không ở lag ngoài cùng được tính.`),
    ],
    primarySolution: [
      b(String.raw`Weak stationarity gives $\operatorname{Var}(\sum_{t=1}^nX_t)=\sum_{s,t}\gamma(s-t)$.`, String.raw`Dừng yếu cho $\operatorname{Var}(\sum_{t=1}^nX_t)=\sum_{s,t}\gamma(s-t)$.`),
      b(String.raw`At each signed lag $h$ with $|h|<n$, exactly $n-|h|$ ordered pairs $(s,t)$ satisfy $s-t=h$.`, String.raw`Với mỗi lag có dấu $h$ thỏa $|h|<n$, có đúng $n-|h|$ cặp có thứ tự $(s,t)$ thỏa $s-t=h$.`),
      b(String.raw`Therefore $\operatorname{Var}(\bar X_n)=n^{-2}\sum_{|h|<n}(n-|h|)\gamma(h)$.`, String.raw`Vì vậy $\operatorname{Var}(\bar X_n)=n^{-2}\sum_{|h|<n}(n-|h|)\gamma(h)$.`),
      b(String.raw`Multiplying by $n$ gives $n\operatorname{Var}(\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(h)$, the finite-$n$ Bartlett-weighted covariance sum.`, String.raw`Nhân $n$ được $n\operatorname{Var}(\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(h)$, tức tổng hiệp phương sai có trọng số Bartlett ở $n$ hữu hạn.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $n=4$, suppose $\gamma(0)=1$, $\gamma(1)=\gamma(-1)=0.5$, and all other lags vanish. Compute $\operatorname{Var}(\bar X_4)$ and $4\operatorname{Var}(\bar X_4)$.`, String.raw`Với $n=4$, giả sử $\gamma(0)=1$, $\gamma(1)=\gamma(-1)=0.5$, các lag khác bằng không. Hãy tính $\operatorname{Var}(\bar X_4)$ và $4\operatorname{Var}(\bar X_4)$.`),
        solution: [
          b(String.raw`There are four zero-lag pairs, contributing $4\gamma(0)=4$.`, String.raw`Có bốn cặp lag không, đóng góp $4\gamma(0)=4$.`),
          b(String.raw`Each of lags $h=\pm1$ has three pairs, contributing $3(0.5)+3(0.5)=3$ in total.`, String.raw`Mỗi lag $h=\pm1$ có ba cặp, đóng góp tổng cộng $3(0.5)+3(0.5)=3$.`),
          b(String.raw`Thus the sum variance is $7$, so $\operatorname{Var}(\bar X_4)=7/16$ and $4\operatorname{Var}(\bar X_4)=7/4$.`, String.raw`Vậy phương sai tổng là $7$, nên $\operatorname{Var}(\bar X_4)=7/16$ và $4\operatorname{Var}(\bar X_4)=7/4$.`),
        ],
      },
      {
        prompt: b(String.raw`For $n=3$, let $\gamma(0)=2$, $\gamma(\pm1)=-0.5$, with other included lags zero. Compute the sample-mean variance and explain the contribution of negative covariance.`, String.raw`Với $n=3$, cho $\gamma(0)=2$, $\gamma(\pm1)=-0.5$, các lag được xét khác bằng không. Hãy tính phương sai trung bình mẫu và giải thích đóng góp của hiệp phương sai âm.`),
        solution: [
          b(String.raw`The zero-lag contribution to the sum variance is $3(2)=6$.`, String.raw`Đóng góp lag không vào phương sai tổng là $3(2)=6$.`),
          b(String.raw`Each signed unit lag has two pairs, so together they contribute $2(2)(-0.5)=-2$.`, String.raw`Mỗi lag đơn vị có dấu có hai cặp, nên cả hai đóng góp $2(2)(-0.5)=-2$.`),
          b(String.raw`The sum variance is $4$ and $\operatorname{Var}(\bar X_3)=4/9$; negative covariance reduces it while the total remains nonnegative.`, String.raw`Phương sai tổng là $4$ và $\operatorname{Var}(\bar X_3)=4/9$; hiệp phương sai âm làm giảm giá trị nhưng tổng vẫn không âm.`),
        ],
      },
      {
        prompt: b(String.raw`Use the Bartlett formula at $n=1$ to show that the variance of a one-observation average equals $\gamma(0)$ and no nonzero lag contributes.`, String.raw`Dùng công thức Bartlett tại $n=1$ để chỉ ra phương sai trung bình một quan sát bằng $\gamma(0)$ và không có lag khác không đóng góp.`),
        solution: [
          b(String.raw`The condition $|h|<1$ leaves only $h=0$ in the finite sum.`, String.raw`Điều kiện $|h|<1$ chỉ giữ lag $h=0$ trong tổng hữu hạn.`),
          b(String.raw`Its pair count is $1-|0|=1$, so $\operatorname{Var}(\bar X_1)=1^{-2}\gamma(0)$.`, String.raw`Số cặp là $1-|0|=1$, nên $\operatorname{Var}(\bar X_1)=1^{-2}\gamma(0)$.`),
          b(String.raw`Hence $\operatorname{Var}(\bar X_1)=\gamma(0)$, as expected because $\bar X_1=X_1$.`, String.raw`Vậy $\operatorname{Var}(\bar X_1)=\gamma(0)$, đúng vì $\bar X_1=X_1$.`),
        ],
      },
    ],
    reviewNote: 'Checked ordered-pair counts n−|h| for positive and negative lags, the n² denominator, and the n multiplier yielding Bartlett weights. Restriction: the identity uses weak stationarity and finite second moments; no independence assumption is needed.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w073-e3': {
    application: b(String.raw`First and second moments can remain unchanged under time shifts while a higher-order joint pattern changes. This separates weak stationarity from the stronger requirement of shift-invariant finite-dimensional distributions.`, String.raw`Moment bậc nhất và bậc hai có thể không đổi khi dịch thời gian trong khi cấu trúc kết hợp bậc cao thay đổi. Điều này phân biệt dừng yếu với yêu cầu mạnh hơn là các phân phối hữu hạn chiều bất biến theo dịch.`),
    formula: b(String.raw`Weak stationarity requires constant $E[X_t]$ and $\operatorname{Cov}(X_t,X_s)=\gamma(t-s)$. Strict stationarity requires every finite-dimensional law to be invariant under a common time shift.`, String.raw`Dừng yếu yêu cầu $E[X_t]$ không đổi và $\operatorname{Cov}(X_t,X_s)=\gamma(t-s)$. Dừng nghiêm ngặt yêu cầu mọi phân phối hữu hạn chiều bất biến khi dịch chung thời gian.`),
    steps: [
      b(String.raw`Each coordinate is a Rademacher variable, so $E[X_t]=0$ and $\operatorname{Var}(X_t)=1$ for every $t$.`, String.raw`Mỗi tọa độ là biến Rademacher, nên $E[X_t]=0$ và $\operatorname{Var}(X_t)=1$ với mọi $t$.`),
      b(String.raw`Within a block, each distinct pair among $U_k,V_k,(-1)^kU_kV_k$ is independent; different blocks are independent. Thus every nonzero-lag covariance is zero, regardless of time position.`, String.raw`Trong một khối, mọi cặp phân biệt giữa $U_k,V_k,(-1)^kU_kV_k$ độc lập; các khối khác nhau cũng độc lập. Vì vậy mọi hiệp phương sai lag khác không đều bằng không, không phụ thuộc vị trí thời gian.`),
      b(String.raw`The aligned triple product is $X_{3k}X_{3k+1}X_{3k+2}=(-1)^k$ deterministically. Shifting the triple by three time units flips this value, so its joint law changes.`, String.raw`Tích bộ ba cùng khối là $X_{3k}X_{3k+1}X_{3k+2}=(-1)^k$ một cách tất định. Dịch bộ ba ba đơn vị thời gian làm giá trị này đổi dấu, nên phân phối chung thay đổi.`),
      b(String.raw`Hence the process is weakly stationary but not strictly stationary; the failure is visible in a third-order statistic that covariance does not capture.`, String.raw`Vậy quá trình dừng yếu nhưng không dừng nghiêm ngặt; thất bại thể hiện ở thống kê bậc ba mà hiệp phương sai không ghi nhận.`),
    ],
    primarySolution: [
      b(String.raw`Each $X_t$ is Rademacher, hence has mean zero and variance one. Distinct variables in one block are pairwise independent, and variables from different blocks are independent.`, String.raw`Mỗi $X_t$ là Rademacher, nên có kỳ vọng không và phương sai một. Các biến phân biệt trong một khối độc lập từng cặp, còn biến ở các khối khác nhau thì độc lập.`),
      b(String.raw`Therefore all covariances at nonzero lags vanish and $\gamma(0)=1$, giving a time-invariant lag-only covariance; this proves weak stationarity.`, String.raw`Do đó mọi hiệp phương sai ở lag khác không bằng không và $\gamma(0)=1$, tạo hiệp phương sai chỉ phụ thuộc lag và không đổi theo thời gian; đây là dừng yếu.`),
      b(String.raw`But $X_{3k}X_{3k+1}X_{3k+2}=(-1)^k$ with probability one. At even $k$ the product is $1$, and at odd $k$ it is $-1$.`, String.raw`Nhưng $X_{3k}X_{3k+1}X_{3k+2}=(-1)^k$ với xác suất một. Khi $k$ chẵn tích bằng $1$, còn khi $k$ lẻ tích bằng $-1$.`),
      b(String.raw`The distribution of this consecutive triple is therefore not invariant under a three-step shift, violating strict stationarity while preserving all first and second moments.`, String.raw`Vì thế phân phối bộ ba liên tiếp không bất biến dưới dịch ba bước, vi phạm dừng nghiêm ngặt dù mọi moment bậc nhất và hai vẫn giữ nguyên.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $U,V,W$ be independent Rademacher variables and define $Z=(-1)^kUVW$ for a fixed block index $k$. Show every pair among $(U,V,W,Z)$ is independent, but their fourfold product is deterministic.`, String.raw`Cho $U,V,W$ là các biến Rademacher độc lập và đặt $Z=(-1)^kUVW$ với chỉ số khối $k$ cố định. Hãy chỉ ra mọi cặp trong $(U,V,W,Z)$ độc lập nhưng tích bốn biến là tất định.`),
        solution: [
          b(String.raw`The pair $(U,V)$ is independent by assumption, as are $(U,W)$ and $(V,W)$.`, String.raw`Cặp $(U,V)$ độc lập theo giả thiết, tương tự $(U,W)$ và $(V,W)$.`),
          b(String.raw`For example, conditional on $U$, $Z=(-1)^kUVW$ is a uniform sign because $VW$ is independent uniform; hence $U$ and $Z$ are independent. The same argument applies to $V,Z$ and $W,Z$.`, String.raw`Chẳng hạn, khi cố định $U$, $Z=(-1)^kUVW$ vẫn là dấu đều vì $VW$ độc lập và đều; do đó $U$ và $Z$ độc lập. Lập luận tương tự cho $V,Z$ và $W,Z$.`),
          b(String.raw`Yet $UVWZ=(-1)^k(UVW)^2=(-1)^k$ always. Pairwise laws alone do not determine the full joint law.`, String.raw`Nhưng $UVWZ=(-1)^k(UVW)^2=(-1)^k$ luôn đúng. Các phân phối từng cặp không xác định được phân phối chung đầy đủ.`),
        ],
      },
      {
        prompt: b(String.raw`Prove that a jointly Gaussian process with constant mean and lag-only covariance is strictly stationary.`, String.raw`Hãy chứng minh quá trình Gaussian đồng thời có kỳ vọng không đổi và hiệp phương sai chỉ phụ thuộc lag là dừng nghiêm ngặt.`),
        solution: [
          b(String.raw`Take any finite index set $(t_1,\ldots,t_m)$. The vector $(X_{t_1},\ldots,X_{t_m})$ is multivariate Gaussian by joint Gaussianity.`, String.raw`Lấy tập chỉ số hữu hạn bất kỳ $(t_1,\ldots,t_m)$. Vector $(X_{t_1},\ldots,X_{t_m})$ Gaussian đa biến do tính Gaussian đồng thời.`),
          b(String.raw`Its mean vector is constant across time, and each covariance entry is $\gamma(t_i-t_j)$. Shifting every index by the same amount leaves both unchanged.`, String.raw`Vector kỳ vọng không đổi theo thời gian, còn mỗi phần tử hiệp phương sai là $\gamma(t_i-t_j)$. Dịch mọi chỉ số cùng một lượng giữ nguyên cả hai.`),
          b(String.raw`A Gaussian law is determined by its mean and covariance, so every shifted finite-dimensional vector has the same distribution. This is strict stationarity.`, String.raw`Phân phối Gaussian được xác định bởi kỳ vọng và hiệp phương sai, nên mọi vector hữu hạn chiều sau khi dịch có cùng phân phối. Đây là dừng nghiêm ngặt.`),
        ],
      },
      {
        prompt: b(String.raw`An IID Cauchy sequence is strictly stationary. Explain why it is not weakly stationary under the usual finite-variance definition.`, String.raw`Dãy Cauchy độc lập cùng phân phối là dừng nghiêm ngặt. Hãy giải thích vì sao nó không dừng yếu theo định nghĩa thông thường yêu cầu phương sai hữu hạn.`),
        solution: [
          b(String.raw`IID means every finite vector has a product law unchanged by shifting the indices, so the sequence is strictly stationary.`, String.raw`Tính độc lập cùng phân phối làm mọi vector hữu hạn có phân phối tích không đổi khi dịch chỉ số, nên dãy dừng nghiêm ngặt.`),
          b(String.raw`A Cauchy variable has no finite expectation or variance, so its mean and covariance function required for weak stationarity are undefined.`, String.raw`Biến Cauchy không có kỳ vọng hữu hạn hay phương sai hữu hạn, nên kỳ vọng và hàm hiệp phương sai cần cho dừng yếu không xác định.`),
          b(String.raw`Thus strict stationarity does not by itself imply weak stationarity; moment existence is an additional requirement.`, String.raw`Vậy dừng nghiêm ngặt tự nó không suy ra dừng yếu; tồn tại moment là yêu cầu bổ sung.`),
        ],
      },
    ],
    reviewNote: 'Checked within-block pairwise independence, cross-block independence, constant mean/variance and zero nonzero-lag covariance; the alternating block triple product changes law under a three-step shift. Restriction: weak stationarity does not imply strict stationarity without distributional assumptions.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w073-e4': {
    application: b(String.raw`A covariance matrix must assign nonnegative variance to every linear contrast. This gives a direct positive-semidefinite test and helps distinguish invalid covariance estimates from small floating-point artifacts.`, String.raw`Ma trận hiệp phương sai phải gán phương sai không âm cho mọi tổ hợp tuyến tính. Điều này cho phép kiểm tra bán xác định dương trực tiếp và phân biệt ước lượng covariance sai với sai số dấu phẩy động nhỏ.`),
    formula: b(String.raw`For a finite-second-moment vector $X$, its covariance matrix $\Gamma=\operatorname{Cov}(X)$ satisfies $a^T\Gamma a=\operatorname{Var}(a^TX)\ge0$ for every $a$, hence $\Gamma\succeq0$.`, String.raw`Với vector $X$ có moment bậc hai hữu hạn, ma trận hiệp phương sai $\Gamma=\operatorname{Cov}(X)$ thỏa $a^T\Gamma a=\operatorname{Var}(a^TX)\ge0$ với mọi $a$, nên $\Gamma\succeq0$.`),
    steps: [
      b(String.raw`By covariance bilinearity, $a^T\Gamma a=\operatorname{Cov}(a^TX,a^TX)$.`, String.raw`Theo tính song tuyến của covariance, $a^T\Gamma a=\operatorname{Cov}(a^TX,a^TX)$.`),
      b(String.raw`The right side is $\operatorname{Var}(a^TX)$, which is nonnegative for every deterministic vector $a$.`, String.raw`Vế phải là $\operatorname{Var}(a^TX)$, không âm với mọi vector xác định $a$.`),
      b(String.raw`This is exactly the definition of positive semidefiniteness, so every exact covariance matrix is symmetric PSD.`, String.raw`Đây chính là định nghĩa bán xác định dương, nên mọi ma trận hiệp phương sai chính xác đều đối xứng PSD.`),
      b(String.raw`An exact centered sample covariance is a Gram matrix and PSD; rounding, asymmetric truncation, or independently estimated entries can introduce small negative eigenvalues, while large negatives indicate a substantive construction problem.`, String.raw`Covariance mẫu đã tâm hóa chính xác là ma trận Gram và PSD; làm tròn, cắt cụt bất đối xứng hoặc ước lượng riêng từng phần tử có thể tạo trị riêng âm nhỏ, còn trị âm lớn báo vấn đề cấu trúc đáng kể.`),
    ],
    primarySolution: [
      b(String.raw`For any deterministic $a$, expand $a^T\Gamma a$ using $\Gamma_{ij}=\operatorname{Cov}(X_i,X_j)$ to obtain $\operatorname{Cov}(\sum_i a_iX_i,\sum_j a_jX_j)$.`, String.raw`Với $a$ xác định bất kỳ, khai triển $a^T\Gamma a$ theo $\Gamma_{ij}=\operatorname{Cov}(X_i,X_j)$ được $\operatorname{Cov}(\sum_i a_iX_i,\sum_j a_jX_j)$.`),
      b(String.raw`The two sums are the same scalar, so this equals $\operatorname{Var}(a^TX)$.`, String.raw`Hai tổng là cùng một đại lượng vô hướng, nên biểu thức bằng $\operatorname{Var}(a^TX)$.`),
      b(String.raw`Finite second moments make the variance well-defined, and variance is nonnegative. Thus $a^T\Gamma a\ge0$ for every $a$, proving $\Gamma\succeq0$.`, String.raw`Moment bậc hai hữu hạn làm phương sai xác định, và phương sai không âm. Vậy $a^T\Gamma a\ge0$ với mọi $a$, chứng minh $\Gamma\succeq0$.`),
      b(String.raw`Negative eigenvalues in computed estimates can result from rounding or inconsistent construction; exact covariance geometry itself never has a negative quadratic form.`, String.raw`Trị riêng âm trong ước lượng số có thể do làm tròn hoặc cách dựng không nhất quán; hình học covariance chính xác không bao giờ có dạng toàn phương âm.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Check whether $\Gamma=\begin{pmatrix}4&-1\\-1&1\end{pmatrix}$ is PSD by writing $a^T\Gamma a$ as a sum of nonnegative terms.`, String.raw`Hãy kiểm tra $\Gamma=\begin{pmatrix}4&-1\\-1&1\end{pmatrix}$ có PSD không bằng cách viết $a^T\Gamma a$ thành tổng các hạng không âm.`),
        solution: [
          b(String.raw`For $a=(u,v)$, the quadratic form is $4u^2-2uv+v^2$.`, String.raw`Với $a=(u,v)$, dạng toàn phương là $4u^2-2uv+v^2$.`),
          b(String.raw`Complete a square: $4u^2-2uv+v^2=4(u-v/4)^2+3v^2/4$.`, String.raw`Hoàn thành bình phương: $4u^2-2uv+v^2=4(u-v/4)^2+3v^2/4$.`),
          b(String.raw`Both terms are nonnegative for all $u,v$, so $\Gamma\succeq0$; its positive determinant also confirms positive definiteness.`, String.raw`Cả hai hạng không âm với mọi $u,v$, nên $\Gamma\succeq0$; định thức dương cũng xác nhận xác định dương.`),
        ],
      },
      {
        prompt: b(String.raw`Show that $\Gamma=\begin{pmatrix}1&2\\2&1\end{pmatrix}$ cannot be a covariance matrix by finding a contrast with negative variance.`, String.raw`Hãy chỉ ra $\Gamma=\begin{pmatrix}1&2\\2&1\end{pmatrix}$ không thể là ma trận hiệp phương sai bằng cách tìm tổ hợp có phương sai âm.`),
        solution: [
          b(String.raw`Choose $a=(1,-1)$, which subtracts the second coordinate from the first.`, String.raw`Chọn $a=(1,-1)$, tức lấy hiệu tọa độ thứ nhất và thứ hai.`),
          b(String.raw`Then $a^T\Gamma a=1-2-2+1=-2<0$.`, String.raw`Khi đó $a^T\Gamma a=1-2-2+1=-2<0$.`),
          b(String.raw`A variance cannot be negative, so the proposed symmetric matrix fails the PSD requirement and is not a valid covariance matrix.`, String.raw`Phương sai không thể âm, nên ma trận đối xứng đề xuất không đạt yêu cầu PSD và không phải covariance hợp lệ.`),
        ],
      },
      {
        prompt: b(String.raw`For a centered data matrix $Y$ with $m>1$ observations, prove the sample covariance $S=Y^TY/(m-1)$ is PSD and state one source of numerical negative eigenvalues.`, String.raw`Với ma trận dữ liệu đã tâm hóa $Y$ có $m>1$ quan sát, hãy chứng minh covariance mẫu $S=Y^TY/(m-1)$ PSD và nêu một nguồn trị riêng âm số học.`),
        solution: [
          b(String.raw`For any vector $a$, $a^TSa=a^TY^TYa/(m-1)$.`, String.raw`Với vector $a$ bất kỳ, $a^TSa=a^TY^TYa/(m-1)$.`),
          b(String.raw`This equals $\|Ya\|_2^2/(m-1)\ge0$ because $m-1>0$.`, String.raw`Biểu thức bằng $\|Ya\|_2^2/(m-1)\ge0$ vì $m-1>0$.`),
          b(String.raw`Thus the exact sample covariance is PSD. Floating-point rounding during its construction can create tiny negative computed eigenvalues.`, String.raw`Vậy covariance mẫu chính xác là PSD. Làm tròn dấu phẩy động khi dựng ma trận có thể tạo trị riêng tính được âm rất nhỏ.`),
        ],
      },
    ],
    reviewNote: 'Expanded aᵀΓa as the variance of aᵀX and checked the finite-moment premise. Companion quadratic forms include both a PSD example and an explicit negative-variance contradiction. Restriction: negative eigenvalues from rounded estimates should be interpreted by scale and construction method.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w073-e5': {
    application: b(String.raw`Absolute covariance summability lets the finite-sample Bartlett weights converge through the covariance series. This establishes a variance limit for the sample mean without asserting a distributional central limit theorem.`, String.raw`Tính tổng tuyệt đối hiệp phương sai cho phép trọng số Bartlett hữu hạn hội tụ xuyên qua chuỗi covariance. Điều này xác lập giới hạn phương sai trung bình mẫu mà không khẳng định định lý giới hạn trung tâm phân phối.`),
    formula: b(String.raw`If $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$, then $n\operatorname{Var}(\bar X_n)=\sum_h\mathbf1_{\{|h|<n\}}(1-|h|/n)\gamma(h)\to\Omega=\sum_h\gamma(h)$.`, String.raw`Nếu $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$, thì $n\operatorname{Var}(\bar X_n)=\sum_h\mathbf1_{\{|h|<n\}}(1-|h|/n)\gamma(h)\to\Omega=\sum_h\gamma(h)$.`),
    steps: [
      b(String.raw`Extend the finite Bartlett sum to all integer lags by setting $a_{n,h}=\mathbf1_{\{|h|<n\}}(1-|h|/n)\gamma(h)$.`, String.raw`Mở rộng tổng Bartlett hữu hạn ra mọi lag nguyên bằng cách đặt $a_{n,h}=\mathbf1_{\{|h|<n\}}(1-|h|/n)\gamma(h)$.`),
      b(String.raw`For each fixed $h$, the indicator is eventually one and $1-|h|/n\to1$, so $a_{n,h}\to\gamma(h)$.`, String.raw`Với mỗi $h$ cố định, chỉ thị cuối cùng bằng một và $1-|h|/n\to1$, nên $a_{n,h}\to\gamma(h)$.`),
      b(String.raw`The weight lies in $[0,1]$ when included, hence $|a_{n,h}|\le|\gamma(h)|$.`, String.raw`Trọng số thuộc $[0,1]$ khi được tính, nên $|a_{n,h}|\le|\gamma(h)|$.`),
      b(String.raw`Absolute summability provides the summable dominating sequence, so dominated convergence for series yields $\sum_h a_{n,h}\to\sum_h\gamma(h)=\Omega$. This proves a variance limit only, not a CLT.`, String.raw`Tổng tuyệt đối hội tụ cung cấp dãy trội khả tổng, nên hội tụ bị chặn cho chuỗi cho $\sum_h a_{n,h}\to\sum_h\gamma(h)=\Omega$. Điều này chỉ chứng minh giới hạn phương sai, không phải CLT.`),
    ],
    primarySolution: [
      b(String.raw`The finite-sample identity is $n\operatorname{Var}(\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(h)$.`, String.raw`Đẳng thức mẫu hữu hạn là $n\operatorname{Var}(\bar X_n)=\sum_{|h|<n}(1-|h|/n)\gamma(h)$.`),
      b(String.raw`Write it as a sum over all $h\in\mathbb Z$ with the indicator $\mathbf1_{\{|h|<n\}}$. For each fixed $h$, its coefficient converges to one.`, String.raw`Viết tổng trên mọi $h\in\mathbb Z$ với chỉ thị $\mathbf1_{\{|h|<n\}}$. Với mỗi $h$ cố định, hệ số hội tụ về một.`),
      b(String.raw`The absolute value of each weighted term is at most $|\gamma(h)|$, and the assumed series $\sum_h|\gamma(h)|$ is finite.`, String.raw`Giá trị tuyệt đối của mỗi hạng có trọng số không quá $|\gamma(h)|$, và chuỗi giả thiết $\sum_h|\gamma(h)|$ hữu hạn.`),
      b(String.raw`Dominated convergence for countable sums therefore gives $n\operatorname{Var}(\bar X_n)\to\sum_{h\in\mathbb Z}\gamma(h)=\Omega$. No distributional limit follows from this variance argument alone.`, String.raw`Hội tụ bị chặn cho tổng đếm được do đó cho $n\operatorname{Var}(\bar X_n)\to\sum_{h\in\mathbb Z}\gamma(h)=\Omega$. Riêng lập luận phương sai này không suy ra giới hạn phân phối.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Suppose $\gamma(0)=2$, $\gamma(\pm1)=0.5$, and all other lags are zero. Compute $n\operatorname{Var}(\bar X_n)$ for $n=5$ and its limit as $n\to\infty$.`, String.raw`Giả sử $\gamma(0)=2$, $\gamma(\pm1)=0.5$ và các lag khác bằng không. Hãy tính $n\operatorname{Var}(\bar X_n)$ khi $n=5$ và giới hạn khi $n\to\infty$.`),
        solution: [
          b(String.raw`At $n=5$, the lag-zero contribution is $2$.`, String.raw`Khi $n=5$, đóng góp lag không là $2$.`),
          b(String.raw`Each of the two unit lags has weight $1-1/5=0.8$, adding $2(0.8)(0.5)=0.8$, so $5\operatorname{Var}(\bar X_5)=2.8$.`, String.raw`Mỗi lag đơn vị có trọng số $1-1/5=0.8$, cộng thêm $2(0.8)(0.5)=0.8$, nên $5\operatorname{Var}(\bar X_5)=2.8$.`),
          b(String.raw`As $n\to\infty$, both nonzero-lag weights tend to one, giving $\Omega=2+0.5+0.5=3$.`, String.raw`Khi $n\to\infty$, trọng số hai lag khác không tiến về một, cho $\Omega=2+0.5+0.5=3$.`),
        ],
      },
      {
        prompt: b(String.raw`For $\gamma(h)=0.25^{|h|}$, verify absolute summability and compute the limiting value of $n\operatorname{Var}(\bar X_n)$.`, String.raw`Với $\gamma(h)=0.25^{|h|}$, hãy kiểm tra tổng tuyệt đối hội tụ và tính giới hạn của $n\operatorname{Var}(\bar X_n)$.`),
        solution: [
          b(String.raw`The absolute sum is $1+2\sum_{h\ge1}0.25^h$, a convergent geometric series because $0.25<1$.`, String.raw`Tổng tuyệt đối là $1+2\sum_{h\ge1}0.25^h$, hội tụ hình học vì $0.25<1$.`),
          b(String.raw`Its value is $1+2(0.25)/(1-0.25)=1+2/3=5/3$.`, String.raw`Giá trị là $1+2(0.25)/(1-0.25)=1+2/3=5/3$.`),
          b(String.raw`The dominated-convergence result therefore gives $\lim_{n\to\infty}n\operatorname{Var}(\bar X_n)=\Omega=5/3$.`, String.raw`Kết quả hội tụ bị chặn cho $\lim_{n\to\infty}n\operatorname{Var}(\bar X_n)=\Omega=5/3$.`),
        ],
      },
      {
        prompt: b(String.raw`Let $X_t=Z$ for every $t$, where $E[Z]=0$ and $\operatorname{Var}(Z)=1$. Show why the absolute-summability condition fails and what happens to $n\operatorname{Var}(\bar X_n)$.`, String.raw`Cho $X_t=Z$ với mọi $t$, trong đó $E[Z]=0$ và $\operatorname{Var}(Z)=1$. Hãy chỉ ra điều kiện tổng tuyệt đối thất bại và điều gì xảy ra với $n\operatorname{Var}(\bar X_n)$.`),
        solution: [
          b(String.raw`The process is weakly stationary with $\gamma(h)=1$ for every integer lag.`, String.raw`Quá trình dừng yếu với $\gamma(h)=1$ tại mọi lag nguyên.`),
          b(String.raw`Thus $\sum_h|\gamma(h)|=\sum_h1=\infty$, so the summability hypothesis does not hold.`, String.raw`Vì vậy $\sum_h|\gamma(h)|=\sum_h1=\infty$, nên giả thiết tổng tuyệt đối không đúng.`),
          b(String.raw`Every sample mean equals $Z$, so $\operatorname{Var}(\bar X_n)=1$ and $n\operatorname{Var}(\bar X_n)=n\to\infty$; there is no finite long-run variance sum.`, String.raw`Mọi trung bình mẫu đều bằng $Z$, nên $\operatorname{Var}(\bar X_n)=1$ và $n\operatorname{Var}(\bar X_n)=n\to\infty$; tổng phương sai dài hạn không hữu hạn.`),
        ],
      },
    ],
    reviewNote: 'Verified pointwise convergence of Bartlett weights, domination by |γ(h)|, and the exact assumption Σ|γ(h)|<∞. Restriction: this yields convergence of scaled variances, not a CLT or a distributional approximation.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w074-e1': {
    application: b(String.raw`For a stationary AR(1), one innovation variance and one autoregressive coefficient determine every lag covariance by geometric decay. The condition $|\phi|<1$ keeps the variance finite and the covariance sequence summable.`, String.raw`Với AR(1) dừng, phương sai nhiễu và hệ số tự hồi quy xác định mọi covariance theo suy giảm hình học. Điều kiện $|\phi|<1$ giữ phương sai hữu hạn và chuỗi hiệp phương sai khả tổng.`),
    formula: b(String.raw`For $X_t=\phi X_{t-1}+\epsilon_t$ with white-noise variance $\sigma^2$ and $|\phi|<1$, $\gamma(0)=\sigma^2/(1-\phi^2)$ and $\gamma(h)=\phi^{|h|}\gamma(0)$.`, String.raw`Với $X_t=\phi X_{t-1}+\epsilon_t$, nhiễu trắng phương sai $\sigma^2$ và $|\phi|<1$, $\gamma(0)=\sigma^2/(1-\phi^2)$ và $\gamma(h)=\phi^{|h|}\gamma(0)$.`),
    steps: [
      b(String.raw`Check $|\phi|=0.8<1$ so the stationary causal AR(1) variance formula applies.`, String.raw`Kiểm tra $|\phi|=0.8<1$ để áp dụng công thức phương sai AR(1) nhân quả dừng.`),
      b(String.raw`Compute $\gamma(0)=1.44/(1-0.8^2)=1.44/0.36=4$.`, String.raw`Tính $\gamma(0)=1.44/(1-0.8^2)=1.44/0.36=4$.`),
      b(String.raw`Use one recurrence to get $\gamma(1)=0.8(4)=3.2$.`, String.raw`Dùng một lần truy hồi để được $\gamma(1)=0.8(4)=3.2$.`),
      b(String.raw`For lag three, $\gamma(3)=0.8^3(4)=2.048$; the positive coefficient keeps these covariances positive.`, String.raw`Với lag ba, $\gamma(3)=0.8^3(4)=2.048$; hệ số dương giữ các covariance này dương.`),
    ],
    primarySolution: [
      b(String.raw`Because $|\phi|=0.8<1$, the causal stationary AR(1) has $\gamma(0)=\sigma^2/(1-\phi^2)$.`, String.raw`Vì $|\phi|=0.8<1$, AR(1) nhân quả dừng có $\gamma(0)=\sigma^2/(1-\phi^2)$.`),
      b(String.raw`Substitute $\sigma^2=1.44$ and $\phi=0.8$: $\gamma(0)=1.44/(1-0.64)=4$.`, String.raw`Thế $\sigma^2=1.44$ và $\phi=0.8$: $\gamma(0)=1.44/(1-0.64)=4$.`),
      b(String.raw`Then $\gamma(1)=\phi\gamma(0)=0.8(4)=3.2$.`, String.raw`Khi đó $\gamma(1)=\phi\gamma(0)=0.8(4)=3.2$.`),
      b(String.raw`Applying the recurrence three times gives $\gamma(3)=\phi^3\gamma(0)=0.512(4)=2.048$.`, String.raw`Áp dụng truy hồi ba lần được $\gamma(3)=\phi^3\gamma(0)=0.512(4)=2.048$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For a stationary AR(1) with $\phi=-0.5$ and $\sigma^2=3$, compute $\gamma(0)$, $\gamma(1)$, and $\gamma(2)$.`, String.raw`Với AR(1) dừng có $\phi=-0.5$ và $\sigma^2=3$, hãy tính $\gamma(0)$, $\gamma(1)$ và $\gamma(2)$.`),
        solution: [
          b(String.raw`Since $|\phi|<1$, $\gamma(0)=3/(1-0.25)=4$.`, String.raw`Vì $|\phi|<1$, $\gamma(0)=3/(1-0.25)=4$.`),
          b(String.raw`The first lag is $\gamma(1)=(-0.5)(4)=-2$.`, String.raw`Lag một là $\gamma(1)=(-0.5)(4)=-2$.`),
          b(String.raw`The second lag is $\gamma(2)=(-0.5)^2(4)=1$, showing the covariance sign alternates with lag.`, String.raw`Lag hai là $\gamma(2)=(-0.5)^2(4)=1$, cho thấy dấu covariance luân phiên theo lag.`),
        ],
      },
      {
        prompt: b(String.raw`For $\phi=0.25$ and $\sigma^2=2$, compute the stationary variance, $\gamma(1)$, and $\gamma(3)$.`, String.raw`Với $\phi=0.25$ và $\sigma^2=2$, hãy tính phương sai dừng, $\gamma(1)$ và $\gamma(3)$.`),
        solution: [
          b(String.raw`The variance is $\gamma(0)=2/(1-0.25^2)=32/15$.`, String.raw`Phương sai là $\gamma(0)=2/(1-0.25^2)=32/15$.`),
          b(String.raw`Then $\gamma(1)=0.25(32/15)=8/15$.`, String.raw`Khi đó $\gamma(1)=0.25(32/15)=8/15$.`),
          b(String.raw`At lag three, $\gamma(3)=0.25^3(32/15)=1/30$.`, String.raw`Ở lag ba, $\gamma(3)=0.25^3(32/15)=1/30$.`),
        ],
      },
      {
        prompt: b(String.raw`Choose $\phi=0.9$ and $\sigma^2=0.19$ so the stationary AR(1) variance is one. Verify that variance and compute $\gamma(3)$.`, String.raw`Chọn $\phi=0.9$ và $\sigma^2=0.19$ để phương sai AR(1) dừng bằng một. Hãy kiểm tra phương sai đó và tính $\gamma(3)$.`),
        solution: [
          b(String.raw`The stationarity condition holds because $|0.9|<1$.`, String.raw`Điều kiện dừng đúng vì $|0.9|<1$.`),
          b(String.raw`The variance is $\gamma(0)=0.19/(1-0.81)=1$.`, String.raw`Phương sai là $\gamma(0)=0.19/(1-0.81)=1$.`),
          b(String.raw`Thus $\gamma(3)=0.9^3(1)=0.729$.`, String.raw`Vậy $\gamma(3)=0.9^3(1)=0.729$.`),
        ],
      },
    ],
    reviewNote: 'Recomputed 1−φ²=0.36, γ₀=4, and powers φ and φ³; checked the |φ|<1 premise before using the stationary variance formula. Restriction: σ² is innovation variance, not marginal variance.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w074-e2': {
    application: b(String.raw`Yule–Walker follows when a current innovation is orthogonal to the process past. The positive-lag recurrence uses that orthogonality, while lag zero includes the innovation variance and must be handled separately.`, String.raw`Yule–Walker suy ra khi nhiễu hiện tại trực giao với quá khứ của quá trình. Truy hồi lag dương dùng tính trực giao đó, còn lag không chứa phương sai nhiễu và phải xử lý riêng.`),
    formula: b(String.raw`For $X_t=\phi X_{t-1}+\epsilon_t$ with mean zero and $E[\epsilon_tX_{t-h}]=0$ for $h\ge1$, $\gamma(h)=\phi\gamma(h-1)$. At $h=0$, if $E[\epsilon_tX_{t-1}]=0$, then $\gamma(0)=\phi\gamma(1)+\sigma^2$.`, String.raw`Với $X_t=\phi X_{t-1}+\epsilon_t$, kỳ vọng không và $E[\epsilon_tX_{t-h}]=0$ khi $h\ge1$, $\gamma(h)=\phi\gamma(h-1)$. Tại $h=0$, nếu $E[\epsilon_tX_{t-1}]=0$, thì $\gamma(0)=\phi\gamma(1)+\sigma^2$.`),
    steps: [
      b(String.raw`Multiply the AR equation by $X_{t-h}$ and take expectations: $\gamma(h)=\phi E[X_{t-1}X_{t-h}]+E[\epsilon_tX_{t-h}]$.`, String.raw`Nhân phương trình AR với $X_{t-h}$ rồi lấy kỳ vọng: $\gamma(h)=\phi E[X_{t-1}X_{t-h}]+E[\epsilon_tX_{t-h}]$.`),
      b(String.raw`For $h\ge1$, $X_{t-h}$ is in the past; innovation orthogonality makes the last term zero, and stationarity identifies the first expectation as $\gamma(h-1)$.`, String.raw`Với $h\ge1$, $X_{t-h}$ thuộc quá khứ; trực giao của nhiễu làm hạng cuối bằng không, còn dừng tính đồng nhất kỳ vọng đầu với $\gamma(h-1)$.`),
      b(String.raw`At $h=0$, $E[\epsilon_tX_t]=E[\epsilon_t(\phi X_{t-1}+\epsilon_t)]=\sigma^2$ when the innovation is orthogonal to $X_{t-1}$.`, String.raw`Tại $h=0$, $E[\epsilon_tX_t]=E[\epsilon_t(\phi X_{t-1}+\epsilon_t)]=\sigma^2$ khi nhiễu trực giao với $X_{t-1}$.`),
      b(String.raw`Thus the variance equation is $\gamma(0)=\phi\gamma(1)+\sigma^2$; it is not obtained by incorrectly setting the current innovation term to zero.`, String.raw`Vậy phương trình phương sai là $\gamma(0)=\phi\gamma(1)+\sigma^2$; không được đặt sai hạng nhiễu hiện tại bằng không.`),
    ],
    primarySolution: [
      b(String.raw`Multiplying by $X_{t-h}$ and taking expectations gives $\gamma(h)=\phi E[X_{t-1}X_{t-h}]+E[\epsilon_tX_{t-h}]$.`, String.raw`Nhân với $X_{t-h}$ rồi lấy kỳ vọng cho $\gamma(h)=\phi E[X_{t-1}X_{t-h}]+E[\epsilon_tX_{t-h}]$.`),
      b(String.raw`For $h\ge1$, the variable $X_{t-h}$ is past-measurable, so the innovation has zero cross-moment with it. Stationarity makes $E[X_{t-1}X_{t-h}]=\gamma(h-1)$.`, String.raw`Với $h\ge1$, biến $X_{t-h}$ đo được theo quá khứ nên nhiễu có moment chéo bằng không với nó. Tính dừng cho $E[X_{t-1}X_{t-h}]=\gamma(h-1)$.`),
      b(String.raw`Therefore $\gamma(h)=\phi\gamma(h-1)$ for every $h\ge1$.`, String.raw`Do đó $\gamma(h)=\phi\gamma(h-1)$ với mọi $h\ge1$.`),
      b(String.raw`For $h=0$, $E[\epsilon_tX_t]=E[\epsilon_t(\phi X_{t-1}+\epsilon_t)]=0+\sigma^2$, giving $\gamma(0)=\phi\gamma(1)+\sigma^2$. The current innovation is part of $X_t$.`, String.raw`Với $h=0$, $E[\epsilon_tX_t]=E[\epsilon_t(\phi X_{t-1}+\epsilon_t)]=0+\sigma^2$, cho $\gamma(0)=\phi\gamma(1)+\sigma^2$. Nhiễu hiện tại là một phần của $X_t$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For a causal AR(1) with $\phi=0.5$ and $\gamma(0)=4$, use innovation orthogonality to compute $\gamma(1)$ and $\gamma(2)$.`, String.raw`Với AR(1) nhân quả có $\phi=0.5$ và $\gamma(0)=4$, hãy dùng tính trực giao của nhiễu để tính $\gamma(1)$ và $\gamma(2)$.`),
        solution: [
          b(String.raw`At positive lag one, $\gamma(1)=\phi\gamma(0)=0.5(4)=2$.`, String.raw`Ở lag dương một, $\gamma(1)=\phi\gamma(0)=0.5(4)=2$.`),
          b(String.raw`Apply the recurrence again: $\gamma(2)=\phi\gamma(1)=0.5(2)=1$.`, String.raw`Áp dụng truy hồi lần nữa: $\gamma(2)=\phi\gamma(1)=0.5(2)=1$.`),
          b(String.raw`The recurrence relies on the lagged value being in the past and uncorrelated with the current innovation.`, String.raw`Truy hồi dựa vào giá trị trễ thuộc quá khứ và không tương quan với nhiễu hiện tại.`),
        ],
      },
      {
        prompt: b(String.raw`For $\phi=0.4$ and innovation variance $\sigma^2=3$ in a stationary causal AR(1), derive $\gamma(0)$ from the separate lag-zero equation, then find $\gamma(1)$.`, String.raw`Với $\phi=0.4$ và phương sai nhiễu $\sigma^2=3$ trong AR(1) nhân quả dừng, hãy suy ra $\gamma(0)$ từ phương trình riêng tại lag không rồi tìm $\gamma(1)$.`),
        solution: [
          b(String.raw`The positive-lag recurrence gives $\gamma(1)=0.4\gamma(0)$.`, String.raw`Truy hồi lag dương cho $\gamma(1)=0.4\gamma(0)$.`),
          b(String.raw`At lag zero, $\gamma(0)=\phi\gamma(1)+\sigma^2=0.16\gamma(0)+3$, so $\gamma(0)=3/0.84=25/7$.`, String.raw`Tại lag không, $\gamma(0)=\phi\gamma(1)+\sigma^2=0.16\gamma(0)+3$, nên $\gamma(0)=3/0.84=25/7$.`),
          b(String.raw`Thus $\gamma(1)=0.4(25/7)=10/7$; the innovation variance enters through the lag-zero equation.`, String.raw`Vậy $\gamma(1)=0.4(25/7)=10/7$; phương sai nhiễu đi vào qua phương trình lag không.`),
        ],
      },
      {
        prompt: b(String.raw`If $\operatorname{Cov}(\epsilon_t,X_{t-1})=c$ instead of zero, derive the modified lag-one relation and evaluate it for $\phi=0.5$, $\gamma(0)=4$, $c=0.2$.`, String.raw`Nếu $\operatorname{Cov}(\epsilon_t,X_{t-1})=c$ thay vì không, hãy suy ra quan hệ lag một sửa đổi và tính với $\phi=0.5$, $\gamma(0)=4$, $c=0.2$.`),
        solution: [
          b(String.raw`At $h=1$, the expectation equation is $\gamma(1)=\phi\gamma(0)+E[\epsilon_tX_{t-1}]$ for zero means.`, String.raw`Tại $h=1$, phương trình kỳ vọng là $\gamma(1)=\phi\gamma(0)+E[\epsilon_tX_{t-1}]$ với kỳ vọng không.`),
          b(String.raw`The nonzero cross-covariance changes it to $\gamma(1)=\phi\gamma(0)+c$.`, String.raw`Hiệp phương sai chéo khác không sửa thành $\gamma(1)=\phi\gamma(0)+c$.`),
          b(String.raw`Substitution gives $\gamma(1)=0.5(4)+0.2=2.2$; the usual Yule–Walker recurrence would incorrectly give $2$ without orthogonality.`, String.raw`Thế số được $\gamma(1)=0.5(4)+0.2=2.2$; truy hồi Yule–Walker thường sẽ sai thành $2$ nếu thiếu trực giao.`),
        ],
      },
    ],
    reviewNote: 'Checked the positive-lag covariance index h−1 and kept h=0 separate, where E[εₜXₜ]=σ² under orthogonality to the past. Restriction: the recurrence requires zero-mean stationarity and innovation orthogonality; it is not implied by the AR equation alone.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w074-e3': {
    application: b(String.raw`Lag-polynomial roots diagnose causal stability for AR terms and invertibility for MA terms. These are distinct properties, even though both use a root-outside-the-unit-circle test under the stated convention.`, String.raw`Nghiệm của đa thức trễ chẩn đoán tính ổn định nhân quả cho AR và tính khả nghịch cho MA. Đây là các tính chất khác nhau, dù theo quy ước đã nêu cả hai dùng kiểm tra nghiệm nằm ngoài đường tròn đơn vị.`),
    formula: b(String.raw`Under the convention $\phi(z)=1-\phi z$ and $\theta(z)=1+\theta z$, causal AR(1) requires its AR root outside $|z|=1$, while invertible MA(1) requires its MA root outside $|z|=1$. The MA(1) finite filter is stationary for finite-variance white noise regardless of invertibility.`, String.raw`Theo quy ước $\phi(z)=1-\phi z$ và $\theta(z)=1+\theta z$, AR(1) nhân quả cần nghiệm AR ngoài $|z|=1$, còn MA(1) khả nghịch cần nghiệm MA ngoài $|z|=1$. Bộ lọc MA(1) hữu hạn vẫn dừng với nhiễu trắng phương sai hữu hạn dù có khả nghịch hay không.`),
    steps: [
      b(String.raw`For the AR equation, solve $1-0.7z=0$ to get $z=1/0.7\approx1.429$.`, String.raw`Với phương trình AR, giải $1-0.7z=0$ được $z=1/0.7\approx1.429$.`),
      b(String.raw`Its modulus exceeds one, so the AR(1) has a causal stationary representation driven by present and past innovations.`, String.raw`Môđun lớn hơn một, nên AR(1) có biểu diễn nhân quả dừng theo nhiễu hiện tại và quá khứ.`),
      b(String.raw`For the MA polynomial, $1+0.8z=0$ gives $z=-1/0.8=-1.25$, also outside the unit circle.`, String.raw`Với đa thức MA, $1+0.8z=0$ cho $z=-1/0.8=-1.25$, cũng nằm ngoài đường tròn đơn vị.`),
      b(String.raw`Thus this MA(1) is invertible under the specified root convention; the AR causality and MA invertibility conclusions come from their separate polynomials.`, String.raw`Vậy MA(1) này khả nghịch theo quy ước nghiệm đã cho; kết luận nhân quả AR và khả nghịch MA đến từ hai đa thức riêng.`),
    ],
    primarySolution: [
      b(String.raw`The AR polynomial is $1-0.7z$, with root $z=1/0.7=10/7\approx1.429$ and modulus greater than one.`, String.raw`Đa thức AR là $1-0.7z$, có nghiệm $z=1/0.7=10/7\approx1.429$ với môđun lớn hơn một.`),
      b(String.raw`Therefore the AR(1) admits a causal stationary solution for finite-variance white-noise innovations.`, String.raw`Vì vậy AR(1) có nghiệm dừng nhân quả với nhiễu trắng phương sai hữu hạn.`),
      b(String.raw`The MA polynomial is $1+0.8z$, whose root is $z=-1/0.8=-1.25$, also of modulus greater than one.`, String.raw`Đa thức MA là $1+0.8z$, có nghiệm $z=-1/0.8=-1.25$, cũng có môđun lớn hơn một.`),
      b(String.raw`Hence the MA(1) is invertible under this convention. A finite MA remains stationary independently; invertibility concerns recovery of innovations, not stationarity.`, String.raw`Do đó MA(1) khả nghịch theo quy ước này. MA hữu hạn vẫn dừng độc lập; khả nghịch liên quan đến khôi phục nhiễu, không phải tính dừng.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Classify causality for AR coefficient $\phi=-0.4$ and invertibility for MA coefficient $\theta=-0.5$ using $\phi(z)=1-\phi z$ and $\theta(z)=1+\theta z$.`, String.raw`Hãy phân loại tính nhân quả với hệ số AR $\phi=-0.4$ và tính khả nghịch với hệ số MA $\theta=-0.5$ theo $\phi(z)=1-\phi z$ và $\theta(z)=1+\theta z$.`),
        solution: [
          b(String.raw`The AR root solves $1+0.4z=0$, giving $z=-2.5$ outside the unit circle.`, String.raw`Nghiệm AR giải $1+0.4z=0$, được $z=-2.5$ ngoài đường tròn đơn vị.`),
          b(String.raw`The MA root solves $1-0.5z=0$, giving $z=2$ outside the unit circle.`, String.raw`Nghiệm MA giải $1-0.5z=0$, được $z=2$ ngoài đường tròn đơn vị.`),
          b(String.raw`Thus the AR has a causal stationary solution and the MA is invertible, each by its own root test.`, String.raw`Vậy AR có nghiệm dừng nhân quả và MA khả nghịch, mỗi kết luận theo phép thử nghiệm riêng.`),
        ],
      },
      {
        prompt: b(String.raw`For the AR(1) equation with $\phi=1.2$, locate its polynomial root and distinguish causal stationarity from the possible noncausal stationary solution.`, String.raw`Với phương trình AR(1) có $\phi=1.2$, hãy tìm nghiệm đa thức và phân biệt dừng nhân quả với khả năng có nghiệm dừng phi nhân quả.`),
        solution: [
          b(String.raw`The root of $1-1.2z=0$ is $z=1/1.2=5/6$, inside the unit circle.`, String.raw`Nghiệm của $1-1.2z=0$ là $z=1/1.2=5/6$, nằm trong đường tròn đơn vị.`),
          b(String.raw`It fails the outside-root criterion for a causal representation in terms of current and past innovations.`, String.raw`Nó không đạt tiêu chuẩn nghiệm ngoài để có biểu diễn nhân quả theo nhiễu hiện tại và quá khứ.`),
          b(String.raw`Because $|\phi|>1$, a stationary anti-causal representation using future innovations can still exist; the inside root rules out causality, not every possible stationary solution.`, String.raw`Vì $|\phi|>1$, vẫn có thể tồn tại biểu diễn dừng phản nhân quả dùng nhiễu tương lai; nghiệm trong loại nhân quả, không loại mọi nghiệm dừng có thể.`),
        ],
      },
      {
        prompt: b(String.raw`For the MA(1) $X_t=\epsilon_t+2\epsilon_{t-1}$, determine stationarity and invertibility from its filter and polynomial root.`, String.raw`Với MA(1) $X_t=\epsilon_t+2\epsilon_{t-1}$, hãy xác định tính dừng và khả nghịch từ bộ lọc và nghiệm đa thức.`),
        solution: [
          b(String.raw`The MA polynomial is $1+2z$, with root $z=-1/2$ inside the unit circle, so the model is not invertible under the outside-root criterion.`, String.raw`Đa thức MA là $1+2z$, có nghiệm $z=-1/2$ trong đường tròn đơn vị, nên mô hình không khả nghịch theo tiêu chuẩn nghiệm ngoài.`),
          b(String.raw`It is a finite linear filter of white noise, so with finite innovation variance it is weakly stationary even though it is not invertible.`, String.raw`Đây là bộ lọc tuyến tính hữu hạn của nhiễu trắng, nên dừng yếu nếu phương sai nhiễu hữu hạn dù không khả nghịch.`),
          b(String.raw`This separates the two properties: the root condition tests invertibility, while finite MA length ensures stationarity here.`, String.raw`Điều này tách hai tính chất: điều kiện nghiệm kiểm tra khả nghịch, còn độ dài MA hữu hạn bảo đảm dừng ở đây.`),
        ],
      },
    ],
    reviewNote: 'Checked each polynomial under the declared lag convention and compared root moduli strictly with one. Restriction: an inside AR root rules out a causal representation but can permit an anti-causal stationary solution; an MA root test addresses invertibility, not finite-MA stationarity.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w074-e4': {
    application: b(String.raw`Differencing a random walk removes its accumulated level and leaves stationary innovations. Statistical results requiring stationary levels or lag-only covariances cannot be applied to the undifferenced process.`, String.raw`Lấy sai phân random walk loại bỏ mức tích lũy và còn lại nhiễu dừng. Không thể áp dụng kết quả thống kê cần mức dừng hoặc hiệp phương sai chỉ theo lag cho quá trình chưa sai phân.`),
    formula: b(String.raw`If $X_t=X_{t-1}+\epsilon_t$, $X_0$ is fixed, and $\epsilon_t$ are IID with mean zero and variance $\sigma^2>0$, then $\Delta X_t=\epsilon_t$ is weakly stationary white noise, while $\operatorname{Var}(X_t)=t\sigma^2$.`, String.raw`Nếu $X_t=X_{t-1}+\epsilon_t$, $X_0$ cố định, và $\epsilon_t$ IID có kỳ vọng không, phương sai $\sigma^2>0$, thì $\Delta X_t=\epsilon_t$ là nhiễu trắng dừng yếu, còn $\operatorname{Var}(X_t)=t\sigma^2$.`),
    steps: [
      b(String.raw`Subtract $X_{t-1}$ from both sides to obtain $\Delta X_t=\epsilon_t$.`, String.raw`Lấy $X_{t-1}$ trừ hai vế được $\Delta X_t=\epsilon_t$.`),
      b(String.raw`IID centered innovations have constant variance $\sigma^2$ and zero covariance at nonzero lags, so the increment process is weakly stationary white noise.`, String.raw`Nhiễu IID có kỳ vọng không có phương sai không đổi $\sigma^2$ và covariance bằng không tại lag khác không, nên quá trình gia số là nhiễu trắng dừng yếu.`),
      b(String.raw`Summing gives $X_t=X_0+\sum_{j=1}^t\epsilon_j$, hence $\operatorname{Var}(X_t)=t\sigma^2$ for fixed $X_0$.`, String.raw`Cộng truy hồi được $X_t=X_0+\sum_{j=1}^t\epsilon_j$, nên $\operatorname{Var}(X_t)=t\sigma^2$ khi $X_0$ cố định.`),
      b(String.raw`The level variance depends on $t$ and $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$, so levels are not weakly stationary and a stationary-level ARMA limit theorem is inapplicable.`, String.raw`Phương sai mức phụ thuộc $t$ và $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$, nên mức không dừng yếu và định lý giới hạn ARMA yêu cầu mức dừng không áp dụng được.`),
    ],
    primarySolution: [
      b(String.raw`The first difference is $\Delta X_t=X_t-X_{t-1}=\epsilon_t$. IID centered innovations with variance $\sigma^2$ give this increment a constant mean, constant variance, and zero nonzero-lag covariance.`, String.raw`Sai phân bậc nhất là $\Delta X_t=X_t-X_{t-1}=\epsilon_t$. Nhiễu IID kỳ vọng không, phương sai $\sigma^2$ cho gia số có kỳ vọng và phương sai không đổi, covariance lag khác không bằng không.`),
      b(String.raw`Thus $\Delta X_t$ is weakly stationary white noise.`, String.raw`Vậy $\Delta X_t$ là nhiễu trắng dừng yếu.`),
      b(String.raw`With fixed $X_0$, the level is $X_t=X_0+\sum_{j=1}^t\epsilon_j$, so $\operatorname{Var}(X_t)=t\sigma^2$; for $s,t\ge0$, $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$.`, String.raw`Với $X_0$ cố định, mức là $X_t=X_0+\sum_{j=1}^t\epsilon_j$, nên $\operatorname{Var}(X_t)=t\sigma^2$; với $s,t\ge0$, $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$.`),
      b(String.raw`The level variance changes over time, and covariance is not a function only of $t-s$. Therefore the levels are not weakly stationary; a theorem requiring stationary ARMA levels or summable level covariances has no valid premise.`, String.raw`Phương sai mức thay đổi theo thời gian, còn covariance không chỉ là hàm của $t-s$. Do đó mức không dừng yếu; định lý cần mức ARMA dừng hoặc covariance mức khả tổng không đủ tiền đề.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For a random walk with $X_0=0$ and innovation variance $\sigma^2=2$, compute $\operatorname{Var}(X_2)$ and $\operatorname{Var}(X_5)$. What stationarity condition do these values violate?`, String.raw`Với random walk có $X_0=0$ và phương sai nhiễu $\sigma^2=2$, hãy tính $\operatorname{Var}(X_2)$ và $\operatorname{Var}(X_5)$. Các giá trị vi phạm điều kiện dừng nào?`),
        solution: [
          b(String.raw`The level variance formula is $\operatorname{Var}(X_t)=t\sigma^2$.`, String.raw`Công thức phương sai mức là $\operatorname{Var}(X_t)=t\sigma^2$.`),
          b(String.raw`Thus $\operatorname{Var}(X_2)=4$ and $\operatorname{Var}(X_5)=10$.`, String.raw`Vậy $\operatorname{Var}(X_2)=4$ và $\operatorname{Var}(X_5)=10$.`),
          b(String.raw`Weak stationarity requires time-invariant variance, so these distinct values rule it out.`, String.raw`Dừng yếu đòi hỏi phương sai không đổi theo thời gian, nên hai giá trị khác nhau này loại trừ tính dừng.`),
        ],
      },
      {
        prompt: b(String.raw`For IID innovations with variance $\sigma^2$, compare the covariance structure of the differenced random walk $\Delta X_t$ with its ordinary spectral density under the convention $f(\omega)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\omega}$.`, String.raw`Với nhiễu IID phương sai $\sigma^2$, hãy so sánh cấu trúc covariance của sai phân random walk $\Delta X_t$ với mật độ phổ thông thường theo quy ước $f(\omega)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\omega}$.`),
        solution: [
          b(String.raw`The difference is $\Delta X_t=\epsilon_t$, so its covariance is $\gamma(0)=\sigma^2$ and $\gamma(h)=0$ for $h\ne0$.`, String.raw`Sai phân là $\Delta X_t=\epsilon_t$, nên covariance là $\gamma(0)=\sigma^2$ và $\gamma(h)=0$ khi $h\ne0$.`),
          b(String.raw`Substitution into the Fourier convention gives the flat density $f_{\Delta X}(\omega)=\sigma^2/(2\pi)$.`, String.raw`Thế vào quy ước Fourier cho mật độ phẳng $f_{\Delta X}(\omega)=\sigma^2/(2\pi)$.`),
          b(String.raw`This ordinary stationary density describes increments; it is not the spectral density of the nonstationary level.`, String.raw`Mật độ dừng thông thường này mô tả gia số, không phải mật độ phổ của mức không dừng.`),
        ],
      },
      {
        prompt: b(String.raw`Suppose $X_0$ is independent of the innovations with variance $\tau^2$, while $\sigma^2>0$. Compute $\operatorname{Var}(X_t)$ and explain why randomizing the initial level does not restore stationarity.`, String.raw`Giả sử $X_0$ độc lập với nhiễu và có phương sai $\tau^2$, trong khi $\sigma^2>0$. Hãy tính $\operatorname{Var}(X_t)$ và giải thích vì sao ngẫu nhiên hóa mức đầu không khôi phục tính dừng.`),
        solution: [
          b(String.raw`Write $X_t=X_0+\sum_{j=1}^t\epsilon_j$. Independence makes the initial-level and innovation-sum variances add.`, String.raw`Viết $X_t=X_0+\sum_{j=1}^t\epsilon_j$. Tính độc lập làm phương sai mức đầu và tổng nhiễu cộng lại.`),
          b(String.raw`Therefore $\operatorname{Var}(X_t)=\tau^2+t\sigma^2$.`, String.raw`Vì vậy $\operatorname{Var}(X_t)=\tau^2+t\sigma^2$.`),
          b(String.raw`Because $\sigma^2>0$, this still varies with time, so weak stationarity fails.`, String.raw`Vì $\sigma^2>0$, phương sai vẫn đổi theo thời gian, nên dừng yếu thất bại.`),
        ],
      },
    ],
    reviewNote: 'Checked the difference operator, IID increment moments, level variance and min(s,t) covariance. Restriction: conclusions use fixed or independent initial level and σ²>0; stationary theorems for levels do not transfer to increments without reformulating the target.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w074-e5': {
    application: b(String.raw`A deterministic level shift changes the mean but need not increase within-regime variance. A random walk accumulates shocks, so its variance grows; an omitted mean break can mimic persistence in sample diagnostics.`, String.raw`Dịch mức tất định làm thay đổi kỳ vọng nhưng không nhất thiết tăng phương sai trong mỗi chế độ. Random walk tích lũy cú sốc nên phương sai tăng; bỏ sót điểm gãy trung bình có thể giả dạng tính bền trong chẩn đoán mẫu.`),
    formula: b(String.raw`For a fixed deterministic mean path $\mu_t$ and IID noise with variance $\sigma^2$, $X_t=\mu_t+\epsilon_t$ has $\operatorname{Var}(X_t)=\sigma^2$. A random walk with fixed $X_0$ has $\operatorname{Var}(X_t)=t\sigma^2$.`, String.raw`Với đường trung bình tất định cố định $\mu_t$ và nhiễu IID phương sai $\sigma^2$, $X_t=\mu_t+\epsilon_t$ có $\operatorname{Var}(X_t)=\sigma^2$. Random walk với $X_0$ cố định có $\operatorname{Var}(X_t)=t\sigma^2$.`),
    steps: [
      b(String.raw`Treat the change time and $\mu_t$ as fixed. The deterministic mean contributes no variance, so $\operatorname{Var}(\mu_t+\epsilon_t)=\sigma^2$ on both sides of the break.`, String.raw`Coi thời điểm đổi và $\mu_t$ là cố định. Trung bình tất định không góp phương sai, nên $\operatorname{Var}(\mu_t+\epsilon_t)=\sigma^2$ ở cả hai phía điểm gãy.`),
      b(String.raw`For a random walk with fixed initial value, independent innovations add variance each period, giving $\operatorname{Var}(X_t)=t\sigma^2$.`, String.raw`Với random walk có giá trị đầu cố định, nhiễu độc lập cộng phương sai mỗi kỳ, cho $\operatorname{Var}(X_t)=t\sigma^2$.`),
      b(String.raw`Thus the break process has a changing mean but constant marginal variance, whereas the random walk has growing variance. These are different sources of nonstationarity.`, String.raw`Vậy quá trình có điểm gãy đổi kỳ vọng nhưng phương sai biên không đổi, còn random walk có phương sai tăng. Đây là hai nguồn không dừng khác nhau.`),
      b(String.raw`An omitted deterministic shift can create persistent deviations and alter sample autocorrelations; it can confuse a unit-root diagnosis, so model the break or qualify the inference.`, String.raw`Dịch tất định bị bỏ sót có thể tạo lệch kéo dài và đổi tự tương quan mẫu; nó có thể làm nhiễu chẩn đoán unit root, nên cần mô hình hóa điểm gãy hoặc thận trọng với suy luận.`),
    ],
    primarySolution: [
      b(String.raw`For the fixed break path, $\mu_t=0$ for $t\le0$ and $5$ for $t>0$, only the deterministic mean changes. Since $\epsilon_t$ has variance $\sigma^2$, $\operatorname{Var}(X_t)=\sigma^2$ at every time.`, String.raw`Với đường gãy cố định, $\mu_t=0$ khi $t\le0$ và $5$ khi $t>0$, chỉ trung bình tất định thay đổi. Vì $\epsilon_t$ có phương sai $\sigma^2$, $\operatorname{Var}(X_t)=\sigma^2$ ở mọi thời điểm.`),
      b(String.raw`For a random walk starting from fixed $X_0$, independent innovations accumulate, so $\operatorname{Var}(X_t)=t\sigma^2$ and grows linearly.`, String.raw`Với random walk bắt đầu từ $X_0$ cố định, nhiễu độc lập tích lũy nên $\operatorname{Var}(X_t)=t\sigma^2$ và tăng tuyến tính.`),
      b(String.raw`Therefore the fixed mean-break model does not have growing variance, but the random walk does.`, String.raw`Vì vậy mô hình gãy trung bình cố định không có phương sai tăng, còn random walk thì có.`),
      b(String.raw`A level shift can distort sample autocorrelations and appear persistent even without a unit root. The test must account for deterministic breaks rather than equating every persistent pattern with stochastic integration.`, String.raw`Dịch mức có thể làm lệch tự tương quan mẫu và trông bền dù không có unit root. Kiểm định cần tính đến điểm gãy tất định, không đồng nhất mọi mẫu hình bền với tích phân ngẫu nhiên.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $\mu_t=0$ for $t\le2$ and $\mu_t=3$ for $t>2$, with IID noise variance $4$. Compare the marginal variance before and after the fixed break with a random walk having the same innovation variance at $t=5$.`, String.raw`Cho $\mu_t=0$ khi $t\le2$ và $\mu_t=3$ khi $t>2$, với nhiễu IID phương sai $4$. Hãy so sánh phương sai biên trước/sau điểm gãy cố định với random walk cùng phương sai nhiễu tại $t=5$.`),
        solution: [
          b(String.raw`For the mean-break process, $\operatorname{Var}(\mu_t+\epsilon_t)=4$ both before and after the shift because $\mu_t$ is deterministic.`, String.raw`Với quá trình gãy trung bình, $\operatorname{Var}(\mu_t+\epsilon_t)=4$ cả trước và sau dịch vì $\mu_t$ tất định.`),
          b(String.raw`For a fixed-start random walk, $\operatorname{Var}(X_5)=5(4)=20$.`, String.raw`Với random walk đầu cố định, $\operatorname{Var}(X_5)=5(4)=20$.`),
          b(String.raw`The break changes the mean level; accumulated innovations cause the random-walk variance to grow.`, String.raw`Điểm gãy đổi mức trung bình; nhiễu tích lũy làm phương sai random walk tăng.`),
        ],
      },
      {
        prompt: b(String.raw`For the fixed step mean $\mu_t=0$ for $t\le0$ and $5$ for $t>0$, decompose $\Delta X_t$ when $X_t=\mu_t+\epsilon_t$ and $\epsilon_t$ is IID with variance $\sigma^2$. Contrast this with differencing a random walk.`, String.raw`Với trung bình bước cố định $\mu_t=0$ khi $t\le0$ và $5$ khi $t>0$, hãy phân tích $\Delta X_t$ khi $X_t=\mu_t+\epsilon_t$ và $\epsilon_t$ IID có phương sai $\sigma^2$. So sánh với sai phân random walk.`),
        solution: [
          b(String.raw`Differencing gives $\Delta X_t=\Delta\mu_t+\epsilon_t-\epsilon_{t-1}$, where $\Delta\mu_t$ is a single deterministic pulse of size $5$ at the break.`, String.raw`Sai phân cho $\Delta X_t=\Delta\mu_t+\epsilon_t-\epsilon_{t-1}$, trong đó $\Delta\mu_t$ là một xung tất định duy nhất độ lớn $5$ tại điểm gãy.`),
          b(String.raw`After accounting for that pulse, the noise difference is a stationary MA(1): its variance is $2\sigma^2$ and lag-one covariance is $-\sigma^2$.`, String.raw`Sau khi tính đến xung đó, sai phân nhiễu là MA(1) dừng: phương sai $2\sigma^2$ và covariance lag một $-\sigma^2$.`),
          b(String.raw`A random walk instead has $\Delta X_t=\epsilon_t$, IID white noise; the fixed mean break is an impulse plus differenced stationary noise, not a unit root.`, String.raw`Ngược lại random walk có $\Delta X_t=\epsilon_t$, nhiễu trắng IID; điểm gãy trung bình cố định là xung cộng sai phân nhiễu dừng, không phải unit root.`),
        ],
      },
      {
        prompt: b(String.raw`At a time $t$, suppose the break mean is uncertain: $\mu_t=0$ or $5$ with equal probability, independently of noise with variance $1$. Compute the unconditional variance and explain why a fixed-break variance statement needs qualification.`, String.raw`Tại thời điểm $t$, giả sử trung bình điểm gãy chưa biết: $\mu_t=0$ hoặc $5$ với xác suất bằng nhau, độc lập với nhiễu phương sai $1$. Hãy tính phương sai vô điều kiện và giải thích vì sao phát biểu phương sai điểm gãy cố định cần điều kiện.`),
        solution: [
          b(String.raw`The random mean has expectation $2.5$ and variance $(0-2.5)^2/2+(5-2.5)^2/2=6.25$.`, String.raw`Trung bình ngẫu nhiên có kỳ vọng $2.5$ và phương sai $(0-2.5)^2/2+(5-2.5)^2/2=6.25$.`),
          b(String.raw`Independence adds the noise variance, giving $\operatorname{Var}(X_t)=6.25+1=7.25$.`, String.raw`Tính độc lập làm cộng phương sai nhiễu, cho $\operatorname{Var}(X_t)=6.25+1=7.25$.`),
          b(String.raw`With a fixed known break path the marginal variance is only the noise variance; uncertainty about the break adds between-mean variance.`, String.raw`Với đường điểm gãy cố định đã biết, phương sai biên chỉ là phương sai nhiễu; bất định về điểm gãy cộng thêm phương sai giữa các trung bình.`),
        ],
      },
    ],
    reviewNote: 'Checked fixed-date deterministic means versus accumulated innovation variance, and qualified the result for an uncertain break date. Restriction: the constant-variance claim is conditional on a fixed mean path; random break timing can add mixture variance.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w075-e1': {
    application: b(String.raw`A two-tap filter combines current white noise with part of the previous shock. Its transfer-function magnitude shows how the filter redistributes power across frequencies under the $1/(2\pi)$ convention.`, String.raw`Bộ lọc hai tap kết hợp nhiễu trắng hiện tại với một phần cú sốc trước. Độ lớn hàm truyền cho thấy bộ lọc phân bố lại công suất theo tần số dưới quy ước $1/(2\pi)$.`),
    formula: b(String.raw`For $X_t=\epsilon_t+\theta\epsilon_{t-1}$, $f_X(\omega)=\frac{\sigma^2}{2\pi}|1+\theta e^{-i\omega}|^2=\frac{\sigma^2}{2\pi}(1+\theta^2+2\theta\cos\omega)$.`, String.raw`Với $X_t=\epsilon_t+\theta\epsilon_{t-1}$, $f_X(\omega)=\frac{\sigma^2}{2\pi}|1+\theta e^{-i\omega}|^2=\frac{\sigma^2}{2\pi}(1+\theta^2+2\theta\cos\omega)$.`),
    steps: [
      b(String.raw`The transfer function is $\Psi(e^{-i\omega})=1+0.5e^{-i\omega}$.`, String.raw`Hàm truyền là $\Psi(e^{-i\omega})=1+0.5e^{-i\omega}$.`),
      b(String.raw`Multiply by the conjugate: $|\Psi|^2=(1+0.5e^{-i\omega})(1+0.5e^{i\omega})=1.25+\cos\omega$.`, String.raw`Nhân với liên hợp: $|\Psi|^2=(1+0.5e^{-i\omega})(1+0.5e^{i\omega})=1.25+\cos\omega$.`),
      b(String.raw`Apply the stated convention with $\sigma^2=4$: $f_X(\omega)=4(1.25+\cos\omega)/(2\pi)$.`, String.raw`Áp dụng quy ước đã nêu với $\sigma^2=4$: $f_X(\omega)=4(1.25+\cos\omega)/(2\pi)$.`),
      b(String.raw`At $\omega=0$, $f_X(0)=9/(2\pi)=4.5/\pi$; at $\omega=\pi$, $f_X(\pi)=1/(2\pi)=0.5/\pi$.`, String.raw`Tại $\omega=0$, $f_X(0)=9/(2\pi)=4.5/\pi$; tại $\omega=\pi$, $f_X(\pi)=1/(2\pi)=0.5/\pi$.`),
    ],
    primarySolution: [
      b(String.raw`For filter $1+0.5L$, the frequency response is $\Psi(e^{-i\omega})=1+0.5e^{-i\omega}$.`, String.raw`Với bộ lọc $1+0.5L$, đáp ứng tần số là $\Psi(e^{-i\omega})=1+0.5e^{-i\omega}$.`),
      b(String.raw`Its squared magnitude is $1+0.25+e^{-i\omega}(0.5)+e^{i\omega}(0.5)=1.25+\cos\omega$.`, String.raw`Bình phương độ lớn là $1+0.25+e^{-i\omega}(0.5)+e^{i\omega}(0.5)=1.25+\cos\omega$.`),
      b(String.raw`With innovation variance $4$, the spectral density is $f_X(\omega)=4(1.25+\cos\omega)/(2\pi)$.`, String.raw`Với phương sai nhiễu $4$, mật độ phổ là $f_X(\omega)=4(1.25+\cos\omega)/(2\pi)$.`),
      b(String.raw`At zero frequency this is $4(2.25)/(2\pi)=4.5/\pi$; at $\pi$ it is $4(0.25)/(2\pi)=0.5/\pi$. The low-frequency power is larger.`, String.raw`Ở tần số không, giá trị là $4(2.25)/(2\pi)=4.5/\pi$; tại $\pi$ là $4(0.25)/(2\pi)=0.5/\pi$. Công suất tần số thấp lớn hơn.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $X_t=\epsilon_t+0.2\epsilon_{t-1}$ with white-noise variance $9$, derive the spectral density and evaluate it at $0$ and $\pi$.`, String.raw`Với $X_t=\epsilon_t+0.2\epsilon_{t-1}$ và nhiễu trắng phương sai $9$, hãy suy ra mật độ phổ và tính tại $0$, $\pi$.`),
        solution: [
          b(String.raw`The squared gain is $|1+0.2e^{-i\omega}|^2=1.04+0.4\cos\omega$.`, String.raw`Độ lợi bình phương là $|1+0.2e^{-i\omega}|^2=1.04+0.4\cos\omega$.`),
          b(String.raw`Thus $f_X(\omega)=9(1.04+0.4\cos\omega)/(2\pi)$.`, String.raw`Vậy $f_X(\omega)=9(1.04+0.4\cos\omega)/(2\pi)$.`),
          b(String.raw`The endpoint values are $f_X(0)=6.48/\pi$ and $f_X(\pi)=2.88/\pi$.`, String.raw`Các giá trị đầu mút là $f_X(0)=6.48/\pi$ và $f_X(\pi)=2.88/\pi$.`),
        ],
      },
      {
        prompt: b(String.raw`For $X_t=\epsilon_t-0.5\epsilon_{t-1}$ with variance $\sigma^2=2$, evaluate the spectrum at zero and Nyquist frequency $\pi$. Which frequency is amplified?`, String.raw`Với $X_t=\epsilon_t-0.5\epsilon_{t-1}$ và phương sai $\sigma^2=2$, hãy tính phổ tại tần số không và tần số Nyquist $\pi$. Tần số nào được khuếch đại?`),
        solution: [
          b(String.raw`The squared gain is $1.25-\cos\omega$ because the lag coefficient is negative.`, String.raw`Độ lợi bình phương là $1.25-\cos\omega$ vì hệ số trễ âm.`),
          b(String.raw`At zero, $f(0)=2(0.25)/(2\pi)=0.25/\pi$; at $\pi$, $f(\pi)=2(2.25)/(2\pi)=2.25/\pi$.`, String.raw`Tại không, $f(0)=2(0.25)/(2\pi)=0.25/\pi$; tại $\pi$, $f(\pi)=2(2.25)/(2\pi)=2.25/\pi$.`),
          b(String.raw`The negative filter coefficient suppresses low frequency and amplifies high frequency, reversing the primary example's pattern.`, String.raw`Hệ số bộ lọc âm triệt tần số thấp và khuếch đại tần số cao, đảo ngược mẫu của ví dụ chính.`),
        ],
      },
      {
        prompt: b(String.raw`For the primary filter $\epsilon_t+0.5\epsilon_{t-1}$ with variance $4$, compute $\gamma_X(0)$ and verify it by integrating the spectrum over $[-\pi,\pi]$.`, String.raw`Với bộ lọc chính $\epsilon_t+0.5\epsilon_{t-1}$ và phương sai $4$, hãy tính $\gamma_X(0)$ rồi kiểm tra bằng tích phân phổ trên $[-\pi,\pi]$.`),
        solution: [
          b(String.raw`The two innovation terms are uncorrelated, so $\gamma_X(0)=4(1+0.5^2)=5$.`, String.raw`Hai hạng nhiễu không tương quan, nên $\gamma_X(0)=4(1+0.5^2)=5$.`),
          b(String.raw`Integrate $f_X(\omega)=4(1.25+\cos\omega)/(2\pi)$; the cosine integrates to zero over $[-\pi,\pi]$.`, String.raw`Tích phân $f_X(\omega)=4(1.25+\cos\omega)/(2\pi)$; cosine có tích phân bằng không trên $[-\pi,\pi]$.`),
          b(String.raw`The remaining integral is $[4(1.25)/(2\pi)](2\pi)=5$, agreeing with the variance.`, String.raw`Tích phân còn lại là $[4(1.25)/(2\pi)](2\pi)=5$, khớp với phương sai.`),
        ],
      },
    ],
    reviewNote: 'Checked the complex-conjugate product, values at 0 and π, and the 1/(2π) normalization against γ(0)=5. Restriction: frequencies are in radians on [−π,π]; this density convention integrates to variance.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w075-e2': {
    application: b(String.raw`An absolutely summable linear filter has covariance equal to the convolution of its coefficients, and its spectrum is the squared magnitude of its frequency response times innovation power. Absolute summability justifies rearranging the infinite sums.`, String.raw`Bộ lọc tuyến tính có hệ số khả tổng tuyệt đối có covariance bằng phép chập hệ số, còn phổ là bình phương độ lớn đáp ứng tần số nhân công suất nhiễu. Tính khả tổng tuyệt đối cho phép đổi thứ tự tổng vô hạn.`),
    formula: b(String.raw`For real $\ell_1$ coefficients $\{\psi_j\}$ and white noise variance $\sigma^2$, $\gamma_X(h)=\sigma^2\sum_j\psi_j\psi_{j-h}$. With $\Psi(e^{-i\omega})=\sum_j\psi_je^{-ij\omega}$, $f_X(\omega)=\frac{\sigma^2}{2\pi}|\Psi(e^{-i\omega})|^2$.`, String.raw`Với hệ số thực $\ell_1$ $\{\psi_j\}$ và nhiễu trắng phương sai $\sigma^2$, $\gamma_X(h)=\sigma^2\sum_j\psi_j\psi_{j-h}$. Với $\Psi(e^{-i\omega})=\sum_j\psi_je^{-ij\omega}$, $f_X(\omega)=\frac{\sigma^2}{2\pi}|\Psi(e^{-i\omega})|^2$.`),
    steps: [
      b(String.raw`Expand $X_tX_{t-h}=\sum_j\sum_k\psi_j\psi_k\epsilon_{t-j}\epsilon_{t-h-k}$; white-noise orthogonality kills terms unless $k=j-h$.`, String.raw`Khai triển $X_tX_{t-h}=\sum_j\sum_k\psi_j\psi_k\epsilon_{t-j}\epsilon_{t-h-k}$; tính trực giao nhiễu trắng triệt các hạng trừ khi $k=j-h$.`),
      b(String.raw`The surviving covariance is $\gamma_X(h)=\sigma^2\sum_j\psi_j\psi_{j-h}$.`, String.raw`Covariance còn lại là $\gamma_X(h)=\sigma^2\sum_j\psi_j\psi_{j-h}$.`),
      b(String.raw`Fourier-transform in $h$ and factor the double sum into $\Psi(e^{-i\omega})\overline{\Psi(e^{-i\omega})}$.`, String.raw`Biến đổi Fourier theo $h$ và phân tích tổng kép thành $\Psi(e^{-i\omega})\overline{\Psi(e^{-i\omega})}$.`),
      b(String.raw`Because $\sum_j|\psi_j|<\infty$, the coefficient convolution and double Fourier series are absolutely summable; Fubini and reindexing are valid, yielding the stated nonnegative density.`, String.raw`Vì $\sum_j|\psi_j|<\infty$, phép chập hệ số và chuỗi Fourier kép khả tổng tuyệt đối; Fubini và đổi chỉ số hợp lệ, cho mật độ không âm đã nêu.`),
    ],
    primarySolution: [
      b(String.raw`Expand the covariance using uncorrelated white-noise terms. Only matching innovation indices survive, which gives $\gamma_X(h)=\sigma^2\sum_j\psi_j\psi_{j-h}$.`, String.raw`Khai triển covariance bằng các hạng nhiễu trắng không tương quan. Chỉ chỉ số nhiễu trùng nhau còn lại, cho $\gamma_X(h)=\sigma^2\sum_j\psi_j\psi_{j-h}$.`),
      b(String.raw`By absolute summability of $\psi$, the convolution is summable and the Fourier sums can be reordered.`, String.raw`Do $\psi$ khả tổng tuyệt đối, phép chập khả tổng và có thể đổi thứ tự tổng Fourier.`),
      b(String.raw`Factoring the Fourier series yields $\sigma^2\Psi(e^{-i\omega})\overline{\Psi(e^{-i\omega})}$. Divide by $2\pi$ under the specified convention to get $f_X(\omega)=\sigma^2|\Psi(e^{-i\omega})|^2/(2\pi)$.`, String.raw`Phân tích chuỗi Fourier được $\sigma^2\Psi(e^{-i\omega})\overline{\Psi(e^{-i\omega})}$. Chia $2\pi$ theo quy ước đã cho để có $f_X(\omega)=\sigma^2|\Psi(e^{-i\omega})|^2/(2\pi)$.`),
      b(String.raw`The squared magnitude is nonnegative at every frequency, as required for a spectral density.`, String.raw`Bình phương độ lớn không âm tại mọi tần số, đúng yêu cầu của mật độ phổ.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $X_t=\epsilon_t-0.25\epsilon_{t-1}$ with white-noise variance $2$, compute $\gamma_X(0)$, $\gamma_X(\pm1)$, and factor the spectrum.`, String.raw`Với $X_t=\epsilon_t-0.25\epsilon_{t-1}$ và nhiễu trắng phương sai $2$, hãy tính $\gamma_X(0)$, $\gamma_X(\pm1)$ và phân tích mật độ phổ.`),
        solution: [
          b(String.raw`The variance is $\gamma_X(0)=2(1+0.25^2)=17/8$.`, String.raw`Phương sai là $\gamma_X(0)=2(1+0.25^2)=17/8$.`),
          b(String.raw`The only nonzero off-zero covariances are $\gamma_X(1)=\gamma_X(-1)=2(1)(-0.25)=-0.5$.`, String.raw`Các covariance khác không khác không duy nhất là $\gamma_X(1)=\gamma_X(-1)=2(1)(-0.25)=-0.5$.`),
          b(String.raw`The gain is $|1-0.25e^{-i\omega}|^2=1.0625-0.5\cos\omega$, so $f_X(\omega)=(1.0625-0.5\cos\omega)/\pi$.`, String.raw`Độ lợi là $|1-0.25e^{-i\omega}|^2=1.0625-0.5\cos\omega$, nên $f_X(\omega)=(1.0625-0.5\cos\omega)/\pi$.`),
        ],
      },
      {
        prompt: b(String.raw`For the first-difference filter $X_t=\epsilon_t-\epsilon_{t-1}$ with innovation variance $1$, derive its covariance sequence and spectral density.`, String.raw`Với bộ lọc sai phân bậc nhất $X_t=\epsilon_t-\epsilon_{t-1}$ và phương sai nhiễu $1$, hãy suy ra chuỗi covariance và mật độ phổ.`),
        solution: [
          b(String.raw`There are two unit-variance terms in $X_t$, so $\gamma_X(0)=2$.`, String.raw`Có hai hạng phương sai một trong $X_t$, nên $\gamma_X(0)=2$.`),
          b(String.raw`Adjacent outputs share one innovation with opposite signs, giving $\gamma_X(1)=\gamma_X(-1)=-1$; all larger-lag covariances vanish.`, String.raw`Hai đầu ra kề nhau dùng chung một nhiễu với dấu ngược nhau, cho $\gamma_X(1)=\gamma_X(-1)=-1$; covariance lag xa hơn bằng không.`),
          b(String.raw`The gain is $|1-e^{-i\omega}|^2=2-2\cos\omega$, hence $f_X(\omega)=(1-\cos\omega)/\pi$.`, String.raw`Độ lợi là $|1-e^{-i\omega}|^2=2-2\cos\omega$, nên $f_X(\omega)=(1-\cos\omega)/\pi$.`),
        ],
      },
      {
        prompt: b(String.raw`Let $\psi_j=0.5^j$ for $j\ge0$ and zero otherwise, with white-noise variance $1$. Compute $\gamma_X(h)$ and express the spectrum using the geometric transfer function.`, String.raw`Cho $\psi_j=0.5^j$ khi $j\ge0$ và bằng không nếu ngược lại, với nhiễu trắng phương sai $1$. Hãy tính $\gamma_X(h)$ và viết phổ bằng hàm truyền hình học.`),
        solution: [
          b(String.raw`For $h\ge0$, $\gamma_X(h)=\sum_{j=h}^\infty0.5^j0.5^{j-h}=0.5^h/(1-0.25)=\frac43(0.5)^h$; symmetry gives the same value at $|h|$.`, String.raw`Với $h\ge0$, $\gamma_X(h)=\sum_{j=h}^\infty0.5^j0.5^{j-h}=0.5^h/(1-0.25)=\frac43(0.5)^h$; tính đối xứng cho cùng giá trị tại $|h|$.`),
          b(String.raw`The transfer function is $\Psi(e^{-i\omega})=1/(1-0.5e^{-i\omega})$, an absolutely summable geometric series.`, String.raw`Hàm truyền là $\Psi(e^{-i\omega})=1/(1-0.5e^{-i\omega})$, chuỗi hình học khả tổng tuyệt đối.`),
          b(String.raw`Thus $f_X(\omega)=1/[2\pi|1-0.5e^{-i\omega}|^2]=1/[2\pi(1.25-\cos\omega)]$.`, String.raw`Vậy $f_X(\omega)=1/[2\pi|1-0.5e^{-i\omega}|^2]=1/[2\pi(1.25-\cos\omega)]$.`),
        ],
      },
    ],
    reviewNote: 'Checked the matching-index condition k=j−h, the conjugate response product, and absolute-summability use for rearranging sums. Restriction: the stated real-coefficient formula uses white, uncorrelated innovations and the 1/(2π) spectral convention.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w075-e3': {
    application: b(String.raw`Integrating a spectral density recovers the marginal variance because Fourier modes at nonzero integer lags have zero integral over a full period. The normalization interval and $2\pi$ factor must be kept consistent.`, String.raw`Tích phân mật độ phổ khôi phục phương sai biên vì các mode Fourier ở lag nguyên khác không có tích phân bằng không trên cả chu kỳ. Cần giữ nhất quán khoảng chuẩn hóa và hệ số $2\pi$.`),
    formula: b(String.raw`If $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$ and $f(\omega)=\frac1{2\pi}\sum_h\gamma(h)e^{-ih\omega}$ on $[-\pi,\pi]$, then $\int_{-\pi}^{\pi}f(\omega)\,d\omega=\gamma(0)=\operatorname{Var}(X_t)$.`, String.raw`Nếu $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$ và $f(\omega)=\frac1{2\pi}\sum_h\gamma(h)e^{-ih\omega}$ trên $[-\pi,\pi]$, thì $\int_{-\pi}^{\pi}f(\omega)\,d\omega=\gamma(0)=\operatorname{Var}(X_t)$.`),
    steps: [
      b(String.raw`Insert the absolutely convergent Fourier series into the integral and exchange sum and integral.`, String.raw`Thế chuỗi Fourier hội tụ tuyệt đối vào tích phân rồi đổi thứ tự tổng và tích phân.`),
      b(String.raw`For integer $h$, $\int_{-\pi}^{\pi}e^{-ih\omega}\,d\omega$ is $2\pi$ when $h=0$ and zero otherwise.`, String.raw`Với $h$ nguyên, $\int_{-\pi}^{\pi}e^{-ih\omega}\,d\omega$ bằng $2\pi$ khi $h=0$ và bằng không nếu ngược lại.`),
      b(String.raw`Only $\gamma(0)$ remains after multiplication by $1/(2\pi)$, so the integral equals the variance.`, String.raw`Chỉ còn $\gamma(0)$ sau khi nhân $1/(2\pi)$, nên tích phân bằng phương sai.`),
      b(String.raw`Absolute summability is the condition used for termwise integration; changing to a half interval changes the factor because $f$ is even.`, String.raw`Tổng tuyệt đối hội tụ là điều kiện dùng để tích phân từng hạng; đổi sang nửa khoảng sẽ đổi hệ số vì $f$ chẵn.`),
    ],
    primarySolution: [
      b(String.raw`Substitute $f(\omega)=\frac1{2\pi}\sum_h\gamma(h)e^{-ih\omega}$. Absolute summability permits termwise integration on the finite interval.`, String.raw`Thế $f(\omega)=\frac1{2\pi}\sum_h\gamma(h)e^{-ih\omega}$. Tổng tuyệt đối hội tụ cho phép tích phân từng hạng trên khoảng hữu hạn.`),
      b(String.raw`The integral of each Fourier mode is $\int_{-\pi}^{\pi}e^{-ih\omega}\,d\omega=2\pi$ for $h=0$ and $0$ for every nonzero integer $h$.`, String.raw`Tích phân mỗi mode Fourier là $\int_{-\pi}^{\pi}e^{-ih\omega}\,d\omega=2\pi$ khi $h=0$ và $0$ với mọi số nguyên $h$ khác không.`),
      b(String.raw`Consequently only the zero-lag coefficient remains: $\int_{-\pi}^{\pi}f_X(\omega)\,d\omega=\gamma_X(0)$.`, String.raw`Vì thế chỉ còn hệ số lag không: $\int_{-\pi}^{\pi}f_X(\omega)\,d\omega=\gamma_X(0)$.`),
      b(String.raw`For a weakly stationary process, $\gamma_X(0)=\operatorname{Var}(X_t)$, proving the claim under the stated convention.`, String.raw`Với quá trình dừng yếu, $\gamma_X(0)=\operatorname{Var}(X_t)$, chứng minh kết quả theo quy ước đã nêu.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For the even density $f(\omega)=(2+\cos\omega)/(2\pi)$, integrate over $[-\pi,\pi]$ and recover the implied variance.`, String.raw`Với mật độ chẵn $f(\omega)=(2+\cos\omega)/(2\pi)$, hãy tích phân trên $[-\pi,\pi]$ để khôi phục phương sai tương ứng.`),
        solution: [
          b(String.raw`The constant term contributes $(2/(2\pi))(2\pi)=2$.`, String.raw`Hạng hằng đóng góp $(2/(2\pi))(2\pi)=2$.`),
          b(String.raw`The cosine term integrates to zero over the symmetric full period.`, String.raw`Hạng cosine có tích phân bằng không trên cả chu kỳ đối xứng.`),
          b(String.raw`The implied variance is therefore $\int_{-\pi}^{\pi}f(\omega)\,d\omega=2$.`, String.raw`Vì vậy phương sai tương ứng là $\int_{-\pi}^{\pi}f(\omega)\,d\omega=2$.`),
        ],
      },
      {
        prompt: b(String.raw`White noise has variance $\sigma^2=3$ and spectral density $f(\omega)=3/(2\pi)$. Verify the variance-recovery identity.`, String.raw`Nhiễu trắng có phương sai $\sigma^2=3$ và mật độ phổ $f(\omega)=3/(2\pi)$. Hãy kiểm tra đẳng thức khôi phục phương sai.`),
        solution: [
          b(String.raw`The density is constant, so its integral is $(3/(2\pi))$ times the interval length $2\pi$.`, String.raw`Mật độ không đổi, nên tích phân bằng $(3/(2\pi))$ nhân độ dài khoảng $2\pi$.`),
          b(String.raw`This evaluates to $3$.`, String.raw`Giá trị bằng $3$.`),
          b(String.raw`It equals the white-noise variance $\gamma(0)=3$, confirming the normalization.`, String.raw`Nó bằng phương sai nhiễu trắng $\gamma(0)=3$, xác nhận chuẩn hóa.`),
        ],
      },
      {
        prompt: b(String.raw`For the even density $f(\omega)=(1+0.5\cos\omega)/\pi$, compute the integral over $[0,\pi]$ and state how to recover the variance on $[-\pi,\pi]$.`, String.raw`Với mật độ chẵn $f(\omega)=(1+0.5\cos\omega)/\pi$, hãy tính tích phân trên $[0,\pi]$ và nêu cách khôi phục phương sai trên $[-\pi,\pi]$.`),
        solution: [
          b(String.raw`On $[0,\pi]$, the constant term integrates to $\pi/\pi=1$.`, String.raw`Trên $[0,\pi]$, hạng hằng có tích phân $\pi/\pi=1$.`),
          b(String.raw`The cosine term contributes $(0.5/\pi)[\sin\omega]_0^\pi=0$, so the half-interval integral is $1$.`, String.raw`Hạng cosine đóng góp $(0.5/\pi)[\sin\omega]_0^\pi=0$, nên tích phân nửa khoảng bằng $1$.`),
          b(String.raw`Evenness gives the full integral as twice this value, namely variance $2$; using only $[0,\pi]$ without doubling would miss a factor of two.`, String.raw`Tính chẵn cho tích phân toàn khoảng gấp đôi, tức phương sai $2$; dùng riêng $[0,\pi]$ mà không nhân đôi sẽ thiếu hệ số hai.`),
        ],
      },
    ],
    reviewNote: 'Checked termwise integration under absolute covariance summability, the full-period orthogonality factor 2π, and the 1/(2π) normalization. Restriction: one-sided integration equals half the variance only for an even density and requires doubling.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w075-e4': {
    application: b(String.raw`Long-run variance is the sum of lag covariances and, under the chosen convention, equals $2\pi$ times spectral power at frequency zero. For AR(1), geometric covariance summation and the spectrum must agree.`, String.raw`Phương sai dài hạn là tổng covariance theo lag và theo quy ước đã chọn bằng $2\pi$ nhân công suất phổ tại tần số không. Với AR(1), tổng covariance hình học và phổ phải khớp nhau.`),
    formula: b(String.raw`If $\sum_h|\gamma(h)|<\infty$, then $\Omega=\sum_h\gamma(h)=2\pi f(0)$. For stationary AR(1) with $|\phi|<1$, $f(0)=\sigma^2/[2\pi(1-\phi)^2]$ and $\Omega=\sigma^2/(1-\phi)^2$.`, String.raw`Nếu $\sum_h|\gamma(h)|<\infty$, thì $\Omega=\sum_h\gamma(h)=2\pi f(0)$. Với AR(1) dừng có $|\phi|<1$, $f(0)=\sigma^2/[2\pi(1-\phi)^2]$ và $\Omega=\sigma^2/(1-\phi)^2$.`),
    steps: [
      b(String.raw`Set $\omega=0$ in $f(\omega)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\omega}$; absolute convergence gives $2\pi f(0)=\sum_h\gamma(h)=\Omega$.`, String.raw`Đặt $\omega=0$ trong $f(\omega)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\omega}$; hội tụ tuyệt đối cho $2\pi f(0)=\sum_h\gamma(h)=\Omega$.`),
      b(String.raw`For AR(1), the response is $(1-\phi e^{-i\omega})^{-1}$, so at zero $f(0)=\sigma^2/[2\pi(1-\phi)^2]$.`, String.raw`Với AR(1), đáp ứng là $(1-\phi e^{-i\omega})^{-1}$, nên tại không $f(0)=\sigma^2/[2\pi(1-\phi)^2]$.`),
      b(String.raw`Multiplying by $2\pi$ yields $\Omega=\sigma^2/(1-\phi)^2$.`, String.raw`Nhân $2\pi$ được $\Omega=\sigma^2/(1-\phi)^2$.`),
      b(String.raw`Independently, sum $\gamma(0)\phi^{|h|}$ over positive and negative lags to verify the same value when $|\phi|<1$.`, String.raw`Độc lập kiểm tra lại bằng cách cộng $\gamma(0)\phi^{|h|}$ trên lag dương và âm để thu cùng kết quả khi $|\phi|<1$.`),
    ],
    primarySolution: [
      b(String.raw`Absolute summability makes the Fourier series valid at $\omega=0$, so $2\pi f(0)=\sum_{h\in\mathbb Z}\gamma(h)=\Omega$.`, String.raw`Tổng tuyệt đối hội tụ làm chuỗi Fourier hợp lệ tại $\omega=0$, nên $2\pi f(0)=\sum_{h\in\mathbb Z}\gamma(h)=\Omega$.`),
      b(String.raw`For a stationary AR(1), the transfer function at zero is $1/(1-\phi)$; therefore $f(0)=\sigma^2/[2\pi(1-\phi)^2]$.`, String.raw`Với AR(1) dừng, hàm truyền tại không là $1/(1-\phi)$; do đó $f(0)=\sigma^2/[2\pi(1-\phi)^2]$.`),
      b(String.raw`Thus $\Omega=2\pi f(0)=\sigma^2/(1-\phi)^2$.`, String.raw`Vậy $\Omega=2\pi f(0)=\sigma^2/(1-\phi)^2$.`),
      b(String.raw`The geometric sum independently gives $\gamma(0)[1+2\sum_{h\ge1}\phi^h]=\frac{\sigma^2}{1-\phi^2}\frac{1+\phi}{1-\phi}=\frac{\sigma^2}{(1-\phi)^2}$, agreeing for $|\phi|<1$.`, String.raw`Tổng hình học độc lập cho $\gamma(0)[1+2\sum_{h\ge1}\phi^h]=\frac{\sigma^2}{1-\phi^2}\frac{1+\phi}{1-\phi}=\frac{\sigma^2}{(1-\phi)^2}$, khớp khi $|\phi|<1$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For stationary AR(1) with $\phi=-0.5$ and $\sigma^2=3$, compute $\Omega$ from both the geometric covariance sum and $2\pi f(0)$.`, String.raw`Với AR(1) dừng có $\phi=-0.5$ và $\sigma^2=3$, hãy tính $\Omega$ bằng cả tổng covariance hình học và $2\pi f(0)$.`),
        solution: [
          b(String.raw`The marginal variance is $\gamma(0)=3/(1-0.25)=4$, so the geometric sum is $4(1-0.5)/(1+0.5)=4/3$.`, String.raw`Phương sai biên là $\gamma(0)=3/(1-0.25)=4$, nên tổng hình học là $4(1-0.5)/(1+0.5)=4/3$.`),
          b(String.raw`The zero-frequency density is $f(0)=3/[2\pi(1.5)^2]=2/(3\pi)$.`, String.raw`Mật độ tần số không là $f(0)=3/[2\pi(1.5)^2]=2/(3\pi)$.`),
          b(String.raw`Then $2\pi f(0)=4/3$, matching the covariance sum.`, String.raw`Khi đó $2\pi f(0)=4/3$, khớp tổng covariance.`),
        ],
      },
      {
        prompt: b(String.raw`For AR(1) with $\phi=0.5$ and $\sigma^2=2$, compute $f(0)$ and the long-run variance, and verify by summing covariances.`, String.raw`Với AR(1) có $\phi=0.5$ và $\sigma^2=2$, hãy tính $f(0)$ và phương sai dài hạn, rồi kiểm tra bằng tổng covariance.`),
        solution: [
          b(String.raw`The spectrum gives $f(0)=2/[2\pi(0.5)^2]=4/\pi$, hence $\Omega=2\pi f(0)=8$.`, String.raw`Phổ cho $f(0)=2/[2\pi(0.5)^2]=4/\pi$, nên $\Omega=2\pi f(0)=8$.`),
          b(String.raw`The covariance variance is $\gamma(0)=2/(1-0.25)=8/3$.`, String.raw`Phương sai covariance là $\gamma(0)=2/(1-0.25)=8/3$.`),
          b(String.raw`Since $\sum_{h\ge1}0.5^h=1$, summing both tails gives $\gamma(0)(1+2\cdot1)=(8/3)(3)=8$, confirming the result.`, String.raw`Vì $\sum_{h\ge1}0.5^h=1$, cộng hai đuôi được $\gamma(0)(1+2\cdot1)=(8/3)(3)=8$, xác nhận kết quả.`),
        ],
      },
      {
        prompt: b(String.raw`For $X_t=\epsilon_t+0.5\epsilon_{t-1}$ with $\sigma^2=4$, compute its long-run variance from its three nonzero covariance lags and from $2\pi f(0)$.`, String.raw`Với $X_t=\epsilon_t+0.5\epsilon_{t-1}$ và $\sigma^2=4$, hãy tính phương sai dài hạn từ ba lag covariance khác không và từ $2\pi f(0)$.`),
        solution: [
          b(String.raw`The covariances are $\gamma(0)=4(1+0.25)=5$ and $\gamma(1)=\gamma(-1)=4(0.5)=2$.`, String.raw`Các covariance là $\gamma(0)=4(1+0.25)=5$ và $\gamma(1)=\gamma(-1)=4(0.5)=2$.`),
          b(String.raw`Their sum is $\Omega=5+2+2=9$.`, String.raw`Tổng là $\Omega=5+2+2=9$.`),
          b(String.raw`At zero, $f(0)=4|1+0.5|^2/(2\pi)=9/(2\pi)$, so $2\pi f(0)=9$.`, String.raw`Tại không, $f(0)=4|1+0.5|^2/(2\pi)=9/(2\pi)$, nên $2\pi f(0)=9$.`),
        ],
      },
    ],
    reviewNote: 'Checked the absolute-summability condition, the 2π relation at zero frequency, and agreement of AR geometric sums with the spectral formula for positive and negative φ. Restriction: Ω is finite under |φ|<1; at a unit root the covariance series does not converge.',
    sourceIds: ['o-mit-ts'],
  },
  'm2-w075-e5': {
    application: b(String.raw`A random-walk level is nonstationary because its accumulated variance and covariance depend on calendar time. Its innovations are stationary white noise, but that does not give the level an ordinary stationary spectral density.`, String.raw`Mức random walk không dừng vì phương sai tích lũy và covariance phụ thuộc thời gian lịch. Nhiễu của nó là nhiễu trắng dừng, nhưng điều đó không cho mức một mật độ phổ dừng thông thường.`),
    formula: b(String.raw`For $X_t=X_{t-1}+\epsilon_t$ with fixed $X_0$ and IID centered innovations of variance $\sigma^2>0$, $\operatorname{Var}(X_t)=t\sigma^2$ and $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$. The ordinary Fourier spectral density requires a stationary covariance sequence.`, String.raw`Với $X_t=X_{t-1}+\epsilon_t$, $X_0$ cố định và nhiễu IID kỳ vọng không, phương sai $\sigma^2>0$, $\operatorname{Var}(X_t)=t\sigma^2$ và $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$. Mật độ phổ Fourier thông thường cần chuỗi covariance dừng.`),
    steps: [
      b(String.raw`Iterating the recursion gives $X_t=X_0+\sum_{j=1}^t\epsilon_j$. With fixed $X_0$, independent shocks yield variance $t\sigma^2$.`, String.raw`Lặp truy hồi được $X_t=X_0+\sum_{j=1}^t\epsilon_j$. Với $X_0$ cố định, các cú sốc độc lập cho phương sai $t\sigma^2$.`),
      b(String.raw`For $s\le t$, the two sums share exactly the first $s$ innovations, so $\operatorname{Cov}(X_s,X_t)=s\sigma^2=\sigma^2\min(s,t)$.`, String.raw`Với $s\le t$, hai tổng dùng chung đúng $s$ nhiễu đầu, nên $\operatorname{Cov}(X_s,X_t)=s\sigma^2=\sigma^2\min(s,t)$.`),
      b(String.raw`The variance changes with $t$ and covariance is not a function only of the lag, so the level is not weakly stationary.`, String.raw`Phương sai đổi theo $t$ và covariance không chỉ là hàm của lag, nên mức không dừng yếu.`),
      b(String.raw`Its difference is $\Delta X_t=\epsilon_t$, stationary white noise with flat density $\sigma^2/(2\pi)$ under the stated convention; that density belongs to increments, not levels.`, String.raw`Sai phân là $\Delta X_t=\epsilon_t$, nhiễu trắng dừng có mật độ phẳng $\sigma^2/(2\pi)$ theo quy ước đã nêu; mật độ đó thuộc gia số, không thuộc mức.`),
    ],
    primarySolution: [
      b(String.raw`With $X_0=0$, $X_t=\sum_{j=1}^t\epsilon_j$. Independence and centering give $\operatorname{Var}(X_t)=t\sigma^2$.`, String.raw`Với $X_0=0$, $X_t=\sum_{j=1}^t\epsilon_j$. Tính độc lập và kỳ vọng không cho $\operatorname{Var}(X_t)=t\sigma^2$.`),
      b(String.raw`For $s,t\ge0$, shared shocks give $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$, which depends on the absolute times, not just their difference.`, String.raw`Với $s,t\ge0$, các cú sốc chung cho $\operatorname{Cov}(X_s,X_t)=\sigma^2\min(s,t)$, phụ thuộc thời gian tuyệt đối chứ không chỉ hiệu thời gian.`),
      b(String.raw`Thus the level process fails weak stationarity; no lag-only stationary covariance sequence exists to insert into the ordinary Fourier series.`, String.raw`Vậy quá trình mức không đạt dừng yếu; không tồn tại chuỗi covariance chỉ theo lag để thế vào chuỗi Fourier thông thường.`),
      b(String.raw`The differenced process is $\Delta X_t=\epsilon_t$, whose covariance is $\gamma(0)=\sigma^2$ and zero at nonzero lags; its ordinary density is $\sigma^2/(2\pi)$. This describes increments only.`, String.raw`Quá trình sai phân là $\Delta X_t=\epsilon_t$, có covariance $\gamma(0)=\sigma^2$ và bằng không ở lag khác không; mật độ thông thường là $\sigma^2/(2\pi)$. Điều này chỉ mô tả gia số.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For a random walk with $X_0=0$ and innovation variance $2$, compute $\operatorname{Var}(X_0)$, $\operatorname{Var}(X_4)$, and the covariance of $(X_1,X_2)$ and $(X_4,X_5)$. Use them to test weak stationarity.`, String.raw`Với random walk có $X_0=0$ và phương sai nhiễu $2$, hãy tính $\operatorname{Var}(X_0)$, $\operatorname{Var}(X_4)$, covariance của $(X_1,X_2)$ và $(X_4,X_5)$. Dùng chúng kiểm tra dừng yếu.`),
        solution: [
          b(String.raw`The variances are $\operatorname{Var}(X_0)=0$ and $\operatorname{Var}(X_4)=4(2)=8$.`, String.raw`Các phương sai là $\operatorname{Var}(X_0)=0$ và $\operatorname{Var}(X_4)=4(2)=8$.`),
          b(String.raw`The two pairs each have lag one, but $\operatorname{Cov}(X_1,X_2)=2\min(1,2)=2$ while $\operatorname{Cov}(X_4,X_5)=2\min(4,5)=8$.`, String.raw`Hai cặp đều có lag một, nhưng $\operatorname{Cov}(X_1,X_2)=2\min(1,2)=2$ còn $\operatorname{Cov}(X_4,X_5)=2\min(4,5)=8$.`),
          b(String.raw`Time-varying variance and unequal same-lag covariances both contradict weak stationarity.`, String.raw`Phương sai đổi theo thời gian và covariance cùng lag không bằng nhau đều mâu thuẫn với dừng yếu.`),
        ],
      },
      {
        prompt: b(String.raw`For random-walk innovations with variance $3$, find the ordinary spectral density of $\Delta X_t$ under $f(\omega)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\omega}$ and verify its integral.`, String.raw`Với nhiễu random walk phương sai $3$, hãy tìm mật độ phổ thông thường của $\Delta X_t$ theo $f(\omega)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\omega}$ rồi kiểm tra tích phân.`),
        solution: [
          b(String.raw`The increments are IID white noise, with $\gamma(0)=3$ and $\gamma(h)=0$ for $h\ne0$.`, String.raw`Gia số là nhiễu trắng IID, có $\gamma(0)=3$ và $\gamma(h)=0$ khi $h\ne0$.`),
          b(String.raw`The Fourier series is constant: $f_{\Delta X}(\omega)=3/(2\pi)$.`, String.raw`Chuỗi Fourier là hằng số: $f_{\Delta X}(\omega)=3/(2\pi)$.`),
          b(String.raw`Integrating gives $\int_{-\pi}^{\pi}3/(2\pi)\,d\omega=3$, the increment variance, not a level variance.`, String.raw`Tích phân cho $\int_{-\pi}^{\pi}3/(2\pi)\,d\omega=3$, là phương sai gia số, không phải phương sai mức.`),
        ],
      },
      {
        prompt: b(String.raw`Let $X_0$ be independent of IID innovations with $\operatorname{Var}(X_0)=\tau^2$ and $\operatorname{Var}(\epsilon_t)=\sigma^2>0$. Compute the level variance and decide whether it becomes stationary.`, String.raw`Cho $X_0$ độc lập nhiễu IID với $\operatorname{Var}(X_0)=\tau^2$ và $\operatorname{Var}(\epsilon_t)=\sigma^2>0$. Hãy tính phương sai mức và quyết định liệu nó có dừng không.`),
        solution: [
          b(String.raw`The level is $X_t=X_0+\sum_{j=1}^t\epsilon_j$. Independence makes the variances add.`, String.raw`Mức là $X_t=X_0+\sum_{j=1}^t\epsilon_j$. Tính độc lập làm phương sai cộng lại.`),
          b(String.raw`Therefore $\operatorname{Var}(X_t)=\tau^2+t\sigma^2$.`, String.raw`Vì vậy $\operatorname{Var}(X_t)=\tau^2+t\sigma^2$.`),
          b(String.raw`Since $\sigma^2>0$, this is not constant in $t$; randomizing the initial level does not restore weak stationarity.`, String.raw`Vì $\sigma^2>0$, phương sai không hằng theo $t$; ngẫu nhiên hóa mức đầu không khôi phục dừng yếu.`),
        ],
      },
    ],
    reviewNote: 'Checked the random-walk sum, variance growth, min(s,t) covariance, and the white-noise density convention for increments. Restriction: the ordinary Fourier spectral density is for stationary levels; the flat density here applies only to the differenced process.',
    sourceIds: ['o-mit-ts'],
  },
};

export default lessons;
