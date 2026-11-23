import {b, type ReviewedLesson} from './types';

const lessons: Record<string, ReviewedLesson> = {
  'm2-w066-e1': {
    application: b(String.raw`A gradient step updates a scalar control parameter to reduce a smooth energy. The descent certificate predicts a guaranteed objective drop from the current gradient magnitude and a valid global smoothness constant.`, String.raw`Bước gradient cập nhật một tham số điều khiển vô hướng để giảm năng lượng trơn. Chứng chỉ giảm dự đoán mức giảm mục tiêu được bảo đảm từ độ lớn gradient hiện tại và hằng số trơn toàn cục hợp lệ.`),
    formula: b(String.raw`If $\nabla f$ is $L$-Lipschitz on a convex domain containing the segment from $x$ to $x^+=x-\nabla f(x)/L$, then $f(x^+)\le f(x)-\|\nabla f(x)\|^2/(2L)$. Convexity of $f$ is not required for this descent bound.`, String.raw`Nếu $\nabla f$ là $L$-Lipschitz trên miền lồi chứa đoạn từ $x$ đến $x^+=x-\nabla f(x)/L$, thì $f(x^+)\le f(x)-\|\nabla f(x)\|^2/(2L)$. Không cần hàm $f$ lồi để có cận giảm này.`),
    steps: [
      b(String.raw`Differentiate $f(x)=3x^2-6x$ to obtain $f'(x)=6x-6$ and evaluate the current gradient at $x_0=0$.`, String.raw`Lấy đạo hàm $f(x)=3x^2-6x$ được $f'(x)=6x-6$ rồi tính gradient hiện tại tại $x_0=0$.`),
      b(String.raw`Apply the specified step size $1/L=1/6$: $x_1=0-(1/6)(-6)=1$.`, String.raw`Áp dụng kích thước bước đã cho $1/L=1/6$: $x_1=0-(1/6)(-6)=1$.`),
      b(String.raw`Evaluate the objective at both points: $f(0)=0$ and $f(1)=3-6=-3$, so the actual decrease is $3$.`, String.raw`Tính mục tiêu tại hai điểm: $f(0)=0$ và $f(1)=3-6=-3$, nên mức giảm thực tế là $3$.`),
      b(String.raw`The certificate guarantees $|f'(0)|^2/(2L)=36/12=3$. It is tight for this quadratic and this step.`, String.raw`Chứng chỉ bảo đảm $|f'(0)|^2/(2L)=36/12=3$. Cận đạt đúng đẳng thức với hàm bậc hai và bước này.`),
    ],
    primarySolution: [
      b(String.raw`The derivative is $f'(x)=6x-6$, hence $f'(0)=-6$.`, String.raw`Đạo hàm là $f'(x)=6x-6$, do đó $f'(0)=-6$.`),
      b(String.raw`Using $1/L=1/6$ gives $x_1=0-(1/6)(-6)=1$.`, String.raw`Dùng $1/L=1/6$ được $x_1=0-(1/6)(-6)=1$.`),
      b(String.raw`The objective values are $f(x_0)=f(0)=0$ and $f(x_1)=f(1)=3-6=-3$, so the actual decrease is $0-(-3)=3$.`, String.raw`Giá trị mục tiêu là $f(x_0)=f(0)=0$ và $f(x_1)=f(1)=3-6=-3$, nên mức giảm thực tế là $0-(-3)=3$.`),
      b(String.raw`The descent theorem guarantees $|f'(0)|^2/(2L)=(-6)^2/12=3$, matching the actual decrease exactly.`, String.raw`Định lý giảm bảo đảm $|f'(0)|^2/(2L)=(-6)^2/12=3$, đúng bằng mức giảm thực tế.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $q(x)=2x^2-8x$, use its smoothness constant $L=4$ and one step from $x_0=0$. Compute the new point, actual decrease, and certified decrease.`, String.raw`Với $q(x)=2x^2-8x$, dùng hằng số trơn $L=4$ và một bước từ $x_0=0$. Hãy tính điểm mới, mức giảm thực tế và mức giảm được chứng nhận.`),
        solution: [
          b(String.raw`The gradient is $q'(x)=4x-8$, so $q'(0)=-8$ and $x_1=0-(-8)/4=2$.`, String.raw`Gradient là $q'(x)=4x-8$, nên $q'(0)=-8$ và $x_1=0-(-8)/4=2$.`),
          b(String.raw`The values are $q(0)=0$ and $q(2)=8-16=-8$, giving actual decrease $8$.`, String.raw`Các giá trị là $q(0)=0$ và $q(2)=8-16=-8$, nên mức giảm thực tế bằng $8$.`),
          b(String.raw`The certificate is $|q'(0)|^2/(2L)=64/8=8$, so it is tight in this case.`, String.raw`Chứng chỉ là $|q'(0)|^2/(2L)=64/8=8$, nên đạt đẳng thức trong trường hợp này.`),
        ],
      },
      {
        prompt: b(String.raw`For $r(x)=\sin x$, use $L=1$ and one gradient step from $x_0=0$. Compute the actual decrease and verify the descent certificate; note whether convexity was used.`, String.raw`Với $r(x)=\sin x$, dùng $L=1$ và một bước gradient từ $x_0=0$. Hãy tính mức giảm thực tế, kiểm tra chứng chỉ giảm và nêu có dùng tính lồi không.`),
        solution: [
          b(String.raw`Here $r'(x)=\cos x$ and $|r''(x)|=|\sin x|\le1$, so the gradient is $1$-Lipschitz. Since $r'(0)=1$, the step gives $x_1=-1$.`, String.raw`Ở đây $r'(x)=\cos x$ và $|r''(x)|=|\sin x|\le1$, nên gradient là $1$-Lipschitz. Vì $r'(0)=1$, bước đi cho $x_1=-1$.`),
          b(String.raw`The actual decrease is $r(0)-r(-1)=0-(-\sin1)=\sin1\approx0.8415$.`, String.raw`Mức giảm thực tế là $r(0)-r(-1)=0-(-\sin1)=\sin1\approx0.8415$.`),
          b(String.raw`The certificate gives $|r'(0)|^2/(2L)=1/2=0.5$, which is below the actual decrease. The descent lemma only needs gradient smoothness; $\sin x$ is not globally convex.`, String.raw`Chứng chỉ cho $|r'(0)|^2/(2L)=1/2=0.5$, nhỏ hơn mức giảm thực tế. Bổ đề giảm chỉ cần gradient trơn; $\sin x$ không lồi toàn cục.`),
        ],
      },
      {
        prompt: b(String.raw`Let $f$ have an $L$-Lipschitz gradient on a convex domain. Prove the two-sided linearization-error bound $|f(y)-f(x)-\nabla f(x)^T(y-x)|\le (L/2)\|y-x\|^2$.`, String.raw`Cho $f$ có gradient $L$-Lipschitz trên miền lồi. Hãy chứng minh cận sai số tuyến tính hóa hai phía $|f(y)-f(x)-\nabla f(x)^T(y-x)|\le (L/2)\|y-x\|^2$.`),
        solution: [
          b(String.raw`Set $d=y-x$ and $\phi(t)=f(x+td)$. The fundamental theorem of calculus gives the remainder $\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`, String.raw`Đặt $d=y-x$ và $\phi(t)=f(x+td)$. Định lý cơ bản của giải tích cho phần dư $\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`),
          b(String.raw`Taking absolute values and applying Cauchy–Schwarz bounds the integrand by $\|\nabla f(x+td)-\nabla f(x)\|\|d\|\le Lt\|d\|^2$.`, String.raw`Lấy giá trị tuyệt đối và dùng Cauchy–Schwarz, tích phân được chặn bởi $\|\nabla f(x+td)-\nabla f(x)\|\|d\|\le Lt\|d\|^2$.`),
          b(String.raw`Integrating yields $\int_0^1 Lt\|d\|^2dt=(L/2)\|d\|^2$. This bounds the absolute remainder and therefore both its upper and lower deviations.`, String.raw`Lấy tích phân được $\int_0^1 Lt\|d\|^2dt=(L/2)\|d\|^2$. Cận này áp dụng cho trị tuyệt đối phần dư, nên chặn cả độ lệch trên lẫn dưới.`),
        ],
      },
    ],
    reviewNote: 'Checked the update sign, both objective values, and the tight certificate 36/(2·6)=3. Added the necessary segment-containment condition to the formula: an L-Lipschitz gradient on a convex domain does not by itself ensure the gradient step remains in that domain. No convexity of f is invoked.',
    sourceIds: ['o-boyd'],
  },
  'm2-w066-e2': {
    application: b(String.raw`A smoothness bound controls how far a differentiable objective can rise above its tangent plane. This gives a safe quadratic model for choosing a step, even when the objective itself is not convex.`, String.raw`Cận trơn kiểm soát mức hàm khả vi có thể vượt mặt phẳng tiếp tuyến. Điều này tạo mô hình bậc hai an toàn để chọn bước, kể cả khi bản thân hàm không lồi.`),
    formula: b(String.raw`If $\nabla f$ is $L$-Lipschitz on a convex domain containing the segment from $x$ to $y$, then $f(y)\le f(x)+\nabla f(x)^T(y-x)+(L/2)\|y-x\|^2$.`, String.raw`Nếu $\nabla f$ là $L$-Lipschitz trên miền lồi chứa đoạn nối $x$ với $y$, thì $f(y)\le f(x)+\nabla f(x)^T(y-x)+(L/2)\|y-x\|^2$.`),
    steps: [
      b(String.raw`Let $d=y-x$ and define $\phi(t)=f(x+td)$ for $0\le t\le1$. The segment lies in the domain by convexity.`, String.raw`Đặt $d=y-x$ và $\phi(t)=f(x+td)$ với $0\le t\le1$. Đoạn nằm trong miền xác định nhờ tính lồi.`),
      b(String.raw`By the fundamental theorem of calculus, $f(y)-f(x)-\nabla f(x)^Td=\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`, String.raw`Theo định lý cơ bản của giải tích, $f(y)-f(x)-\nabla f(x)^Td=\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`),
      b(String.raw`Cauchy–Schwarz and gradient Lipschitzness bound the integrand above by $\|\nabla f(x+td)-\nabla f(x)\|\|d\|\le Lt\|d\|^2$.`, String.raw`Cauchy–Schwarz và tính Lipschitz của gradient chặn tích phân phía trên bởi $\|\nabla f(x+td)-\nabla f(x)\|\|d\|\le Lt\|d\|^2$.`),
      b(String.raw`Integrating $Lt$ over $[0,1]$ gives $L/2$, so the remainder is at most $(L/2)\|d\|^2$ and the stated upper model follows.`, String.raw`Lấy tích phân $Lt$ trên $[0,1]$ được $L/2$, nên phần dư không vượt quá $(L/2)\|d\|^2$ và suy ra mô hình phía trên.`),
    ],
    primarySolution: [
      b(String.raw`Set $d=y-x$ and $\phi(t)=f(x+td)$. Differentiability and the fundamental theorem of calculus give $f(y)-f(x)=\int_0^1\nabla f(x+td)^Td\,dt$.`, String.raw`Đặt $d=y-x$ và $\phi(t)=f(x+td)$. Tính khả vi và định lý cơ bản của giải tích cho $f(y)-f(x)=\int_0^1\nabla f(x+td)^Td\,dt$.`),
      b(String.raw`Subtract the linear term to get the remainder $\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`, String.raw`Trừ số hạng tuyến tính để được phần dư $\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`),
      b(String.raw`By Cauchy–Schwarz and $L$-Lipschitzness, the integrand is at most $\|\nabla f(x+td)-\nabla f(x)\|\|d\|\le Lt\|d\|^2$.`, String.raw`Theo Cauchy–Schwarz và tính $L$-Lipschitz, tích phân không vượt quá $\|\nabla f(x+td)-\nabla f(x)\|\|d\|\le Lt\|d\|^2$.`),
      b(String.raw`Integrating gives a remainder at most $(L/2)\|d\|^2$. Substituting $d=y-x$ proves the descent lemma.`, String.raw`Lấy tích phân cho phần dư không quá $(L/2)\|d\|^2$. Thế $d=y-x$ chứng minh bổ đề giảm.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(t)=2t^2$, verify the descent-lemma upper bound from $x=-1$ to $y=2$ using $L=4$, and check whether it is tight.`, String.raw`Với $f(t)=2t^2$, hãy kiểm tra cận trên bổ đề giảm từ $x=-1$ đến $y=2$ bằng $L=4$ và xem cận có đạt đẳng thức không.`),
        solution: [
          b(String.raw`Here $f'(t)=4t$, whose Lipschitz constant is $L=4$. At $x=-1$, $f(x)=2$ and $f'(x)=-4$; the displacement is $y-x=3$.`, String.raw`Ở đây $f'(t)=4t$, có hằng số Lipschitz $L=4$. Tại $x=-1$, $f(x)=2$ và $f'(x)=-4$; độ dời là $y-x=3$.`),
          b(String.raw`The model predicts $f(y)\le2+(-4)(3)+(4/2)3^2=2-12+18=8$.`, String.raw`Mô hình dự đoán $f(y)\le2+(-4)(3)+(4/2)3^2=2-12+18=8$.`),
          b(String.raw`Directly, $f(2)=8$, so equality holds. A quadratic with constant Hessian $L$ attains the smoothness remainder exactly.`, String.raw`Tính trực tiếp $f(2)=8$, nên có đẳng thức. Hàm bậc hai có Hessian không đổi bằng $L$ đạt đúng phần dư trơn.`),
        ],
      },
      {
        prompt: b(String.raw`For $f(t)=\sin t$, verify the descent-lemma bound with $L=1$ from $x=0$ to $y=-1$. Explain why this does not require $f$ to be convex.`, String.raw`Với $f(t)=\sin t$, hãy kiểm tra cận bổ đề giảm với $L=1$ từ $x=0$ tới $y=-1$. Giải thích vì sao không cần $f$ lồi.`),
        solution: [
          b(String.raw`Since $f''(t)=-\sin t$ and $|f''(t)|\le1$, the gradient is $1$-Lipschitz. At $x=0$, $f(x)=0$ and $f'(x)=1$.`, String.raw`Vì $f''(t)=-\sin t$ và $|f''(t)|\le1$, gradient là $1$-Lipschitz. Tại $x=0$, $f(x)=0$ và $f'(x)=1$.`),
          b(String.raw`The right side of the model is $0+1(-1)+(1/2)(1)^2=-1/2$. The actual endpoint value is $f(-1)=-\sin1\approx-0.8415$.`, String.raw`Vế phải của mô hình là $0+1(-1)+(1/2)(1)^2=-1/2$. Giá trị đầu mút thực tế là $f(-1)=-\sin1\approx-0.8415$.`),
          b(String.raw`Because $-0.8415\le-0.5$, the upper bound holds. The proof uses only Lipschitz continuity of the gradient, while $\sin t$ is not convex on all of $\mathbb R$.`, String.raw`Vì $-0.8415\le-0.5$, cận trên đúng. Chứng minh chỉ dùng tính Lipschitz của gradient, còn $\sin t$ không lồi trên toàn $\mathbb R$.`),
        ],
      },
      {
        prompt: b(String.raw`Let $f$ have an $L$-Lipschitz gradient on the segment from $x$ to $y$. Use the integral remainder to prove both $f(y)\le f(x)+\nabla f(x)^T(y-x)+(L/2)\|y-x\|^2$ and its corresponding lower bound.`, String.raw`Cho $f$ có gradient $L$-Lipschitz trên đoạn từ $x$ tới $y$. Dùng phần dư tích phân để chứng minh cả $f(y)\le f(x)+\nabla f(x)^T(y-x)+(L/2)\|y-x\|^2$ lẫn cận dưới tương ứng.`),
        solution: [
          b(String.raw`Set $d=y-x$. The fundamental theorem of calculus writes the deviation from the tangent as $R=\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`, String.raw`Đặt $d=y-x$. Định lý cơ bản của giải tích viết độ lệch khỏi tiếp tuyến thành $R=\int_0^1(\nabla f(x+td)-\nabla f(x))^Td\,dt$.`),
          b(String.raw`Cauchy–Schwarz and Lipschitzness give $|R|\le\int_0^1 Lt\|d\|^2dt=(L/2)\|d\|^2$.`, String.raw`Cauchy–Schwarz và tính Lipschitz cho $|R|\le\int_0^1 Lt\|d\|^2dt=(L/2)\|d\|^2$.`),
          b(String.raw`The inequality $-|R|\le R\le|R|$ yields both $R\le(L/2)\|d\|^2$ and $R\ge-(L/2)\|d\|^2$. Adding the tangent term proves the upper and lower bounds.`, String.raw`Bất đẳng thức $-|R|\le R\le|R|$ cho cả $R\le(L/2)\|d\|^2$ và $R\ge-(L/2)\|d\|^2$. Cộng số hạng tiếp tuyến chứng minh cận trên và cận dưới.`),
        ],
      },
    ],
    reviewNote: 'Checked the path integral remainder and its Lipschitz/Cauchy bound Lt||d||², then integrated t over [0,1]. Restriction: the whole segment must lie in the domain where the gradient is L-Lipschitz.',
    sourceIds: ['o-boyd'],
  },
  'm2-w066-e3': {
    application: b(String.raw`In an anisotropic quadratic loss, some parameter directions are much steeper than others. A single gradient step must respect the steepest direction, so the flatter direction often determines the slow part of convergence.`, String.raw`Trong loss bậc hai dị hướng, một số hướng tham số dốc hơn nhiều hướng khác. Một bước gradient phải tôn trọng hướng dốc nhất, nên hướng thoải thường quyết định phần hội tụ chậm.`),
    formula: b(String.raw`For $f(x)=\tfrac12x^TQx$ with symmetric positive-definite $Q$, the strong-convexity and smoothness constants are $\mu=\lambda_{\min}(Q)$ and $L=\lambda_{\max}(Q)$. The condition number is $\kappa=L/\mu$; level-set axis-length ratio is $\sqrt{\kappa}$.`, String.raw`Với $f(x)=\tfrac12x^TQx$ và $Q$ đối xứng xác định dương, hằng số lồi mạnh và trơn là $\mu=\lambda_{\min}(Q)$ và $L=\lambda_{\max}(Q)$. Số điều kiện là $\kappa=L/\mu$; tỷ số độ dài trục của đường mức là $\sqrt{\kappa}$.`),
    steps: [
      b(String.raw`For $Q=\operatorname{diag}(1,9)$, the eigenvalues are $1$ and $9$. The smallest eigenvalue is the strong-convexity constant $\mu=1$.`, String.raw`Với $Q=\operatorname{diag}(1,9)$, các trị riêng là $1$ và $9$. Trị riêng nhỏ nhất là hằng số lồi mạnh $\mu=1$.`),
      b(String.raw`The largest eigenvalue is the smoothness constant $L=9$, so $\kappa=L/\mu=9$.`, String.raw`Trị riêng lớn nhất là hằng số trơn $L=9$, nên $\kappa=L/\mu=9$.`),
      b(String.raw`The level-set semiaxis lengths scale as $1/\sqrt{1}$ and $1/\sqrt{9}$, so their ratio is $3=\sqrt{\kappa}$.`, String.raw`Độ dài bán trục đường mức tỷ lệ với $1/\sqrt{1}$ và $1/\sqrt{9}$, nên tỷ số là $3=\sqrt{\kappa}$.`),
      b(String.raw`With step $1/L$, the shallow direction has iteration factor $1-\mu/L=8/9$, while the steep direction factor is zero. Thus the ellipse's shallow axis controls the slower linear progress.`, String.raw`Với bước $1/L$, hướng thoải có hệ số lặp $1-\mu/L=8/9$, còn hướng dốc có hệ số bằng không. Vì vậy trục thoải của ellipse kiểm soát tiến triển tuyến tính chậm hơn.`),
    ],
    primarySolution: [
      b(String.raw`The Hessian is $\nabla^2f=Q=\operatorname{diag}(1,9)$, so its minimum and maximum eigenvalues are $1$ and $9$.`, String.raw`Hessian là $\nabla^2f=Q=\operatorname{diag}(1,9)$, nên trị riêng nhỏ nhất và lớn nhất lần lượt là $1$ và $9$.`),
      b(String.raw`Therefore $\mu=1$, $L=9$, and $\kappa=L/\mu=9$.`, String.raw`Do đó $\mu=1$, $L=9$ và $\kappa=L/\mu=9$.`),
      b(String.raw`The level sets have axis lengths proportional to $1/\sqrt{1}$ and $1/\sqrt{9}$, a ratio of $3=\sqrt{\kappa}$.`, String.raw`Các đường mức có độ dài trục tỷ lệ với $1/\sqrt{1}$ và $1/\sqrt{9}$, tỷ số bằng $3=\sqrt{\kappa}$.`),
      b(String.raw`For step $1/L$, the eigen-direction factors of gradient descent are $1-1/9=8/9$ and $1-9/9=0$. The shallow direction therefore contracts slowly; conditioning governs the linear rate, not just arithmetic scale.`, String.raw`Với bước $1/L$, hệ số lặp theo các hướng riêng là $1-1/9=8/9$ và $1-9/9=0$. Vì vậy hướng thoải co chậm; số điều kiện chi phối tốc độ tuyến tính chứ không chỉ thang tính toán.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(2,8)$ in $f(x)=\tfrac12x^TQx$, find $\mu,L,\kappa$ and the ratio of the level-set semiaxes.`, String.raw`Với $Q=\operatorname{diag}(2,8)$ trong $f(x)=\tfrac12x^TQx$, hãy tìm $\mu,L,\kappa$ và tỷ số bán trục đường mức.`),
        solution: [
          b(String.raw`The eigenvalues of $Q$ are $2$ and $8$, so $\mu=2$ and $L=8$.`, String.raw`Các trị riêng của $Q$ là $2$ và $8$, nên $\mu=2$ và $L=8$.`),
          b(String.raw`The condition number is $\kappa=L/\mu=8/2=4$.`, String.raw`Số điều kiện là $\kappa=L/\mu=8/2=4$.`),
          b(String.raw`Semiaxis lengths vary inversely with square roots of eigenvalues, so the long-to-short ratio is $\sqrt{8/2}=2=\sqrt{\kappa}$.`, String.raw`Bán trục biến thiên tỷ lệ nghịch với căn bậc hai trị riêng, nên tỷ số trục dài/trục ngắn là $\sqrt{8/2}=2=\sqrt{\kappa}$.`),
        ],
      },
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(1/4,4)$, compute the condition number and the slow-direction contraction factor under step size $1/L$.`, String.raw`Với $Q=\operatorname{diag}(1/4,4)$, hãy tính số điều kiện và hệ số co theo hướng chậm với kích thước bước $1/L$.`),
        solution: [
          b(String.raw`The eigenvalues give $\mu=1/4$ and $L=4$, so $\kappa=4/(1/4)=16$.`, String.raw`Các trị riêng cho $\mu=1/4$ và $L=4$, nên $\kappa=4/(1/4)=16$.`),
          b(String.raw`Under step $1/L$, an eigen-direction with eigenvalue $\lambda$ is multiplied by $1-\lambda/L$.`, String.raw`Với bước $1/L$, hướng riêng có trị riêng $\lambda$ được nhân với $1-\lambda/L$.`),
          b(String.raw`The shallow direction has $\lambda=\mu=1/4$, giving factor $1-(1/4)/4=15/16$. The ellipse semiaxis ratio is $\sqrt{16}=4$.`, String.raw`Hướng thoải có $\lambda=\mu=1/4$, cho hệ số $1-(1/4)/4=15/16$. Tỷ số bán trục ellipse là $\sqrt{16}=4$.`),
        ],
      },
      {
        prompt: b(String.raw`For $Q=3I$, find $\mu,L,\kappa$ and show what a gradient step of size $1/L$ does to any starting vector.`, String.raw`Với $Q=3I$, hãy tìm $\mu,L,\kappa$ và chỉ ra bước gradient kích thước $1/L$ tác động thế nào lên mọi vectơ khởi đầu.`),
        solution: [
          b(String.raw`All eigenvalues equal $3$, so $\mu=L=3$ and $\kappa=1$. The level sets are spheres, with no preferred steep or shallow direction.`, String.raw`Mọi trị riêng đều bằng $3$, nên $\mu=L=3$ và $\kappa=1$. Các đường mức là mặt cầu, không có hướng dốc hay thoải ưu tiên.`),
          b(String.raw`The gradient is $\nabla f(x)=3x$. With step $1/L=1/3$, the update is $x^+=x-(1/3)(3x)=0$.`, String.raw`Gradient là $\nabla f(x)=3x$. Với bước $1/L=1/3$, phép cập nhật là $x^+=x-(1/3)(3x)=0$.`),
          b(String.raw`Thus the method reaches the minimizer in one step, matching contraction factor $1-\mu/L=0$.`, String.raw`Vì vậy phương pháp tới nghiệm trong một bước, khớp với hệ số co $1-\mu/L=0$.`),
        ],
      },
    ],
    reviewNote: 'Checked the eigenvalue extrema, κ=9, semiaxis ratio √κ=3, and the gradient factors 8/9 and 0. Restriction: these calculations assume the stated symmetric positive-definite quadratic and exact full-gradient updates.',
    sourceIds: ['o-boyd'],
  },
  'm2-w066-e4': {
    application: b(String.raw`A contraction proof quantifies how repeated exact gradient steps shrink parameter error around the minimizer. For a quadratic, the Hessian eigenvalues make each direction's contraction visible and expose the role of the condition number.`, String.raw`Chứng minh co định lượng sai số tham số quanh nghiệm bị thu nhỏ thế nào qua các bước gradient chính xác lặp lại. Với hàm bậc hai, trị riêng Hessian cho thấy độ co từng hướng và vai trò của số điều kiện.`),
    formula: b(String.raw`For $f(x)=\tfrac12(x-x^*)^TQ(x-x^*)$ with $Q=Q^T$ and $\mu I\preceq Q\preceq LI$ where $0<\mu\le L$, gradient descent with $\eta=1/L$ obeys $\|x_1-x^*\|\le(1-\mu/L)\|x_0-x^*\|$.`, String.raw`Với $f(x)=\tfrac12(x-x^*)^TQ(x-x^*)$, $Q=Q^T$ và $\mu I\preceq Q\preceq LI$ trong đó $0<\mu\le L$, gradient descent với $\eta=1/L$ thỏa $\|x_1-x^*\|\le(1-\mu/L)\|x_0-x^*\|$.`),
    steps: [
      b(String.raw`For the quadratic, $\nabla f(x)=Q(x-x^*)$. One gradient step gives $x_1-x^*=(I-Q/L)(x_0-x^*)$.`, String.raw`Với hàm bậc hai, $\nabla f(x)=Q(x-x^*)$. Một bước gradient cho $x_1-x^*=(I-Q/L)(x_0-x^*)$.`),
      b(String.raw`By the spectral bounds $\mu I\preceq Q\preceq LI$, every eigenvalue $\lambda$ of $Q$ lies in $[\mu,L]$.`, String.raw`Theo cận phổ $\mu I\preceq Q\preceq LI$, mọi trị riêng $\lambda$ của $Q$ nằm trong $[\mu,L]$.`),
      b(String.raw`The eigenvalues of $I-Q/L$ are $1-\lambda/L$, which lie in $[0,1-\mu/L]$. This interval is nonnegative precisely because $\mu\le L$.`, String.raw`Các trị riêng của $I-Q/L$ là $1-\lambda/L$, nằm trong $[0,1-\mu/L]$. Khoảng này không âm chính nhờ $\mu\le L$.`),
      b(String.raw`Since $I-Q/L$ is symmetric, its operator norm is its largest absolute eigenvalue, at most $1-\mu/L$. Multiplying by $\|x_0-x^*\|$ proves the contraction.`, String.raw`Vì $I-Q/L$ đối xứng, chuẩn toán tử bằng trị tuyệt đối trị riêng lớn nhất, không quá $1-\mu/L$. Nhân với $\|x_0-x^*\|$ chứng minh tính co.`),
    ],
    primarySolution: [
      b(String.raw`For $f(x)=\tfrac12(x-x^*)^TQ(x-x^*)$, the gradient is $Q(x-x^*)$. Thus the exact step gives $x_1-x^*=(I-Q/L)(x_0-x^*)$.`, String.raw`Với $f(x)=\tfrac12(x-x^*)^TQ(x-x^*)$, gradient là $Q(x-x^*)$. Vì thế bước chính xác cho $x_1-x^*=(I-Q/L)(x_0-x^*)$.`),
      b(String.raw`The eigenvalues of $Q$ lie in $[\mu,L]$, so those of $I-Q/L$ lie in $[0,1-\mu/L]$.`, String.raw`Các trị riêng của $Q$ nằm trong $[\mu,L]$, nên trị riêng của $I-Q/L$ nằm trong $[0,1-\mu/L]$.`),
      b(String.raw`Because $0<\mu\le L$, the interval is nonnegative and the spectral norm of the symmetric matrix $I-Q/L$ is at most $1-\mu/L$.`, String.raw`Vì $0<\mu\le L$, khoảng trên không âm và chuẩn phổ của ma trận đối xứng $I-Q/L$ không quá $1-\mu/L$.`),
      b(String.raw`Therefore $\|x_1-x^*\|\le\|I-Q/L\|_2\|x_0-x^*\|\le(1-\mu/L)\|x_0-x^*\|$. For a general function, this quadratic Hessian argument alone does not prove the same result.`, String.raw`Do đó $\|x_1-x^*\|\le\|I-Q/L\|_2\|x_0-x^*\|\le(1-\mu/L)\|x_0-x^*\|$. Với hàm tổng quát, riêng lập luận Hessian bậc hai này chưa chứng minh kết quả tương tự.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $Q=\operatorname{diag}(2,8)$, $x^*=0$, and $x_0=(4,-1)$, compute one gradient step with $\eta=1/8$ and verify the contraction bound.`, String.raw`Với $Q=\operatorname{diag}(2,8)$, $x^*=0$ và $x_0=(4,-1)$, hãy tính một bước gradient với $\eta=1/8$ và kiểm tra cận co.`),
        solution: [
          b(String.raw`The gradient is $Qx_0=(8,-8)$. Hence $x_1=x_0-(1/8)(8,-8)=(3,0)$.`, String.raw`Gradient là $Qx_0=(8,-8)$. Do đó $x_1=x_0-(1/8)(8,-8)=(3,0)$.`),
          b(String.raw`Here $\mu=2$, $L=8$, so the contraction factor is $1-\mu/L=3/4$. The initial error norm is $\sqrt{4^2+(-1)^2}=\sqrt{17}$.`, String.raw`Ở đây $\mu=2$, $L=8$, nên hệ số co là $1-\mu/L=3/4$. Chuẩn sai số ban đầu là $\sqrt{4^2+(-1)^2}=\sqrt{17}$.`),
          b(String.raw`The bound is $(3/4)\sqrt{17}\approx3.092$, while the new error norm is $\|(3,0)\|=3$, so the inequality holds.`, String.raw`Cận là $(3/4)\sqrt{17}\approx3.092$, còn chuẩn sai số mới là $\|(3,0)\|=3$, nên bất đẳng thức đúng.`),
        ],
      },
      {
        prompt: b(String.raw`Let $Q=\mu I$ with $\mu>0$. Determine $L$, the condition number, and the result of a gradient step of size $1/L$ from arbitrary $x_0$ when the minimizer is $0$.`, String.raw`Cho $Q=\mu I$ với $\mu>0$. Hãy xác định $L$, số điều kiện và kết quả của bước gradient kích thước $1/L$ từ $x_0$ bất kỳ khi nghiệm là $0$.`),
        solution: [
          b(String.raw`Every eigenvalue equals $\mu$, so the smallest and largest eigenvalues are both $\mu$: $L=\mu$ and $\kappa=1$.`, String.raw`Mọi trị riêng đều bằng $\mu$, nên trị riêng nhỏ nhất và lớn nhất cùng là $\mu$: $L=\mu$ và $\kappa=1$.`),
          b(String.raw`The gradient is $\nabla f(x)=\mu x$. A step of size $1/L=1/\mu$ gives $x_1=x_0-(1/\mu)\mu x_0=0$.`, String.raw`Gradient là $\nabla f(x)=\mu x$. Bước kích thước $1/L=1/\mu$ cho $x_1=x_0-(1/\mu)\mu x_0=0$.`),
          b(String.raw`The contraction factor $1-\mu/L$ is zero, matching exact arrival at the minimizer in one step.`, String.raw`Hệ số co $1-\mu/L$ bằng không, khớp với việc tới nghiệm chính xác sau một bước.`),
        ],
      },
      {
        prompt: b(String.raw`Suppose the eigenvalues of a symmetric matrix $Q$ lie in $[2,5]$. For step size $1/5$, prove the operator norm of $I-Q/5$ is at most $3/5$, and explain the endpoint cases.`, String.raw`Giả sử các trị riêng của ma trận đối xứng $Q$ nằm trong $[2,5]$. Với kích thước bước $1/5$, hãy chứng minh chuẩn toán tử của $I-Q/5$ không quá $3/5$ và giải thích các trường hợp biên.`),
        solution: [
          b(String.raw`If $\lambda\in[2,5]$, the corresponding eigenvalue of $I-Q/5$ is $1-\lambda/5$.`, String.raw`Nếu $\lambda\in[2,5]$, trị riêng tương ứng của $I-Q/5$ là $1-\lambda/5$.`),
          b(String.raw`As $\lambda$ varies from $2$ to $5$, this value varies from $3/5$ down to $0$, so it is nonnegative and at most $3/5$.`, String.raw`Khi $\lambda$ chạy từ $2$ tới $5$, giá trị này chạy từ $3/5$ xuống $0$, nên không âm và không vượt quá $3/5$.`),
          b(String.raw`The matrix is symmetric, so its operator norm is the largest absolute eigenvalue, at most $3/5$. Equality occurs along an eigenvector with $\lambda=2$; a direction with $\lambda=5$ is sent to zero.`, String.raw`Ma trận đối xứng nên chuẩn toán tử là trị tuyệt đối trị riêng lớn nhất, không quá $3/5$. Đẳng thức đạt theo vectơ riêng có $\lambda=2$; hướng có $\lambda=5$ bị đưa về không.`),
        ],
      },
    ],
    reviewNote: 'Checked the update matrix, eigenvalue interval [0,1−μ/L], and the required 0<μ≤L restriction for a nonnegative factor. Restriction: the proof applies to the stated exact quadratic Hessian bounds, not to arbitrary nonsmooth objectives.',
    sourceIds: ['o-boyd'],
  },
  'm2-w066-e5': {
    application: b(String.raw`A learning rate that is too large can move past a minimizer and amplify the error on every iteration. The one-dimensional quadratic makes the oscillation and growth visible from a single update factor.`, String.raw`Tốc độ học quá lớn có thể vượt qua nghiệm và khuếch đại sai số ở mỗi vòng lặp. Hàm bậc hai một chiều cho thấy rõ dao động và tăng trưởng qua một hệ số cập nhật.`),
    formula: b(String.raw`For $f(x)=\tfrac12x^2$ and step size $\eta\ge0$, gradient descent updates $x_{k+1}=(1-\eta)x_k$. The objective decreases strictly when $0<\eta<2$, is unchanged at $\eta=0$ or $\eta=2$, and grows when $\eta>2$.`, String.raw`Với $f(x)=\tfrac12x^2$ và kích thước bước $\eta\ge0$, gradient descent cập nhật $x_{k+1}=(1-\eta)x_k$. Mục tiêu giảm nghiêm khi $0<\eta<2$, không đổi tại $\eta=0$ hoặc $\eta=2$, và tăng khi $\eta>2$.`),
    steps: [
      b(String.raw`Here $f'(x)=x$, so with $\eta=2.2$ the update is $x_{k+1}=(1-2.2)x_k=-1.2x_k$.`, String.raw`Ở đây $f'(x)=x$, nên với $\eta=2.2$ phép cập nhật là $x_{k+1}=(1-2.2)x_k=-1.2x_k$.`),
      b(String.raw`Starting from $x_0=1$ gives $x_1=-1.2$ and $x_2=1.44$; the sign alternates and the magnitude grows by a factor $1.2$ per step.`, String.raw`Bắt đầu từ $x_0=1$ cho $x_1=-1.2$ và $x_2=1.44$; dấu luân phiên còn độ lớn tăng $1.2$ lần mỗi bước.`),
      b(String.raw`The objective values are $f(x_0)=0.5$, $f(x_1)=0.72$, and $f(x_2)=1.0368$, so each of these steps increases the objective.`, String.raw`Giá trị mục tiêu là $f(x_0)=0.5$, $f(x_1)=0.72$ và $f(x_2)=1.0368$, nên mỗi bước này đều làm mục tiêu tăng.`),
      b(String.raw`Since $|1-\eta|=1.2>1$, the error grows. Smoothness alone does not guarantee descent for an arbitrary oversized step.`, String.raw`Vì $|1-\eta|=1.2>1$, sai số tăng. Chỉ tính trơn không bảo đảm giảm với bước tùy ý quá lớn.`),
    ],
    primarySolution: [
      b(String.raw`For $f(x)=\tfrac12x^2$, the gradient is $x$, so $x_{n+1}=(1-2.2)x_n=-1.2x_n$.`, String.raw`Với $f(x)=\tfrac12x^2$, gradient là $x$, nên $x_{n+1}=(1-2.2)x_n=-1.2x_n$.`),
      b(String.raw`From $x_0=1$, this gives $x_1=-1.2$ and $x_2=(-1.2)(-1.2)=1.44$.`, String.raw`Từ $x_0=1$, ta được $x_1=-1.2$ và $x_2=(-1.2)(-1.2)=1.44$.`),
      b(String.raw`The objective values are $f(x_0)=0.5$, $f(x_1)=\tfrac12(1.44)=0.72$, and $f(x_2)=\tfrac12(1.44)^2=1.0368$. Both updates increase the objective.`, String.raw`Các giá trị mục tiêu là $f(x_0)=0.5$, $f(x_1)=\tfrac12(1.44)=0.72$ và $f(x_2)=\tfrac12(1.44)^2=1.0368$. Cả hai bước đều làm mục tiêu tăng.`),
      b(String.raw`The multiplier has magnitude $|1-2.2|=1.2>1$, so iterates alternate sign while moving farther from zero. The objective is smooth, but this step is too large for descent.`, String.raw`Hệ số có độ lớn $|1-2.2|=1.2>1$, nên các bước luân phiên dấu nhưng càng xa số không. Hàm trơn, song kích thước bước này quá lớn để giảm.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(x)=\tfrac12x^2$, take $\eta=2$ and $x_0=2$. Compute two updates and determine whether the objective decreases, stays constant, or grows.`, String.raw`Với $f(x)=\tfrac12x^2$, chọn $\eta=2$ và $x_0=2$. Hãy tính hai bước cập nhật và xác định mục tiêu giảm, giữ nguyên hay tăng.`),
        solution: [
          b(String.raw`The update factor is $1-\eta=-1$, so $x_1=-2$ and $x_2=2$.`, String.raw`Hệ số cập nhật là $1-\eta=-1$, nên $x_1=-2$ và $x_2=2$.`),
          b(String.raw`The objective is $2$ at each of $x_0=2$, $x_1=-2$, and $x_2=2$.`, String.raw`Mục tiêu bằng $2$ tại cả $x_0=2$, $x_1=-2$ và $x_2=2$.`),
          b(String.raw`Thus the iterates oscillate without objective decrease. The step lies at the stability boundary $\eta=2$, where $|1-\eta|=1$.`, String.raw`Vì vậy các điểm lặp dao động mà mục tiêu không giảm. Bước nằm đúng biên ổn định $\eta=2$, nơi $|1-\eta|=1$.`),
        ],
      },
      {
        prompt: b(String.raw`For $f(x)=\tfrac12x^2$, use $\eta=1.5$ from $x_0=2$. Compute $x_1,x_2$ and their objective values; explain the alternating signs.`, String.raw`Với $f(x)=\tfrac12x^2$, dùng $\eta=1.5$ từ $x_0=2$. Hãy tính $x_1,x_2$ và giá trị mục tiêu; giải thích dấu luân phiên.`),
        solution: [
          b(String.raw`The update factor is $1-1.5=-0.5$, so $x_1=-1$ and $x_2=0.5$.`, String.raw`Hệ số cập nhật là $1-1.5=-0.5$, nên $x_1=-1$ và $x_2=0.5$.`),
          b(String.raw`The objective values are $f(x_0)=2$, $f(x_1)=0.5$, and $f(x_2)=0.125$, which decrease at each step.`, String.raw`Các giá trị mục tiêu là $f(x_0)=2$, $f(x_1)=0.5$ và $f(x_2)=0.125$, giảm sau mỗi bước.`),
          b(String.raw`The negative factor reverses the sign, while its magnitude $0.5<1$ shrinks the error. Hence the iterates oscillate but converge toward zero.`, String.raw`Hệ số âm làm đảo dấu, còn độ lớn $0.5<1$ thu nhỏ sai số. Vì vậy các điểm lặp dao động nhưng hội tụ về không.`),
        ],
      },
      {
        prompt: b(String.raw`For $f(x)=\tfrac12x^2$, take $\eta=2.1$ and $x_0=0.25$. Compute one update and show the objective increases by the factor $(1-\eta)^2$.`, String.raw`Với $f(x)=\tfrac12x^2$, chọn $\eta=2.1$ và $x_0=0.25$. Hãy tính một bước cập nhật và chỉ ra mục tiêu tăng theo hệ số $(1-\eta)^2$.`),
        solution: [
          b(String.raw`The update factor is $1-2.1=-1.1$, so $x_1=-1.1(0.25)=-0.275$.`, String.raw`Hệ số cập nhật là $1-2.1=-1.1$, nên $x_1=-1.1(0.25)=-0.275$.`),
          b(String.raw`Since $f(x)=\tfrac12x^2$, $f(x_1)/f(x_0)=x_1^2/x_0^2=(1-\eta)^2=1.21$.`, String.raw`Vì $f(x)=\tfrac12x^2$, $f(x_1)/f(x_0)=x_1^2/x_0^2=(1-\eta)^2=1.21$.`),
          b(String.raw`Thus $f(x_1)=1.21f(x_0)>f(x_0)$; the negative update factor causes overshoot and its magnitude exceeds one.`, String.raw`Vì vậy $f(x_1)=1.21f(x_0)>f(x_0)$; hệ số cập nhật âm gây vượt quá nghiệm và độ lớn của nó lớn hơn một.`),
        ],
      },
    ],
    reviewNote: 'Checked xₙ₊₁=−1.2xₙ, the two objective values, and the stability boundary |1−η|=1. Restriction: this counterexample uses the one-dimensional unit-curvature quadratic; it shows smoothness alone cannot justify an oversized step.',
    sourceIds: ['o-boyd'],
  },
  'm2-w067-e1': {
    application: b(String.raw`An $\ell_1$ regularizer promotes sparse parameter vectors by shrinking small coordinates to exactly zero. The threshold depends on both the penalty weight and the proximal step size.`, String.raw`Điều chuẩn hóa $\ell_1$ khuyến khích vectơ tham số thưa bằng cách co các tọa độ nhỏ về đúng không. Ngưỡng phụ thuộc cả trọng số phạt lẫn kích thước bước proximal.`),
    formula: b(String.raw`For $\lambda\ge0$ and $\gamma>0$, $\operatorname{prox}_{\gamma\lambda\|\cdot\|_1}(v)_j=\operatorname{sign}(v_j)(|v_j|-\gamma\lambda)_+$, where $(a)_+=\max\{a,0\}$. Coordinates with $|v_j|\le\gamma\lambda$ become zero.`, String.raw`Với $\lambda\ge0$ và $\gamma>0$, $\operatorname{prox}_{\gamma\lambda\|\cdot\|_1}(v)_j=\operatorname{sign}(v_j)(|v_j|-\gamma\lambda)_+$, trong đó $(a)_+=\max\{a,0\}$. Tọa độ có $|v_j|\le\gamma\lambda$ trở thành không.`),
    steps: [
      b(String.raw`The scalar objective separates by coordinate, so apply soft thresholding independently with threshold $\gamma\lambda=(0.5)(2)=1$.`, String.raw`Hàm mục tiêu tách theo tọa độ, nên áp dụng ngưỡng mềm riêng với ngưỡng $\gamma\lambda=(0.5)(2)=1$.`),
      b(String.raw`For $v_1=3$, the signed excess is $\operatorname{sign}(3)(3-1)=2$.`, String.raw`Với $v_1=3$, phần vượt ngưỡng có dấu là $\operatorname{sign}(3)(3-1)=2$.`),
      b(String.raw`For $v_2=-0.5$, $|v_2|<1$, so its thresholded value is zero. For $v_3=-4$, the result is $\operatorname{sign}(-4)(4-1)=-3$.`, String.raw`Với $v_2=-0.5$, $|v_2|<1$, nên giá trị sau ngưỡng bằng không. Với $v_3=-4$, kết quả là $\operatorname{sign}(-4)(4-1)=-3$.`),
      b(String.raw`Therefore the proximal vector is $(2,0,-3)$. A coordinate exactly at the threshold also maps to zero.`, String.raw`Do đó vectơ proximal là $(2,0,-3)$. Tọa độ đúng bằng ngưỡng cũng được đưa về không.`),
    ],
    primarySolution: [
      b(String.raw`The threshold is $\gamma\lambda=0.5\cdot2=1$.`, String.raw`Ngưỡng là $\gamma\lambda=0.5\cdot2=1$.`),
      b(String.raw`Apply $\operatorname{sign}(v_j)(|v_j|-1)_+$ to each coordinate: $3\mapsto2$, $-0.5\mapsto0$, and $-4\mapsto-3$.`, String.raw`Áp dụng $\operatorname{sign}(v_j)(|v_j|-1)_+$ cho từng tọa độ: $3\mapsto2$, $-0.5\mapsto0$ và $-4\mapsto-3$.`),
      b(String.raw`The output is $(2,0,-3)$. The middle coordinate vanishes because $|-0.5|\le1$.`, String.raw`Kết quả là $(2,0,-3)$. Tọa độ giữa bằng không vì $|-0.5|\le1$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Compute $\operatorname{prox}_{\gamma\lambda\|\cdot\|_1}(v)$ for $v=(-2,1,2.5)$, $\gamma=0.25$, and $\lambda=4$.`, String.raw`Hãy tính $\operatorname{prox}_{\gamma\lambda\|\cdot\|_1}(v)$ với $v=(-2,1,2.5)$, $\gamma=0.25$ và $\lambda=4$.`),
        solution: [
          b(String.raw`The threshold is $\gamma\lambda=0.25\cdot4=1$.`, String.raw`Ngưỡng là $\gamma\lambda=0.25\cdot4=1$.`),
          b(String.raw`The first coordinate becomes $\operatorname{sign}(-2)(2-1)=-1$; the second is at threshold and becomes zero.`, String.raw`Tọa độ thứ nhất thành $\operatorname{sign}(-2)(2-1)=-1$; tọa độ thứ hai đúng ngưỡng nên thành không.`),
          b(String.raw`The third becomes $\operatorname{sign}(2.5)(2.5-1)=1.5$. Thus the result is $(-1,0,1.5)$.`, String.raw`Tọa độ thứ ba thành $\operatorname{sign}(2.5)(2.5-1)=1.5$. Vậy kết quả là $(-1,0,1.5)$.`),
        ],
      },
      {
        prompt: b(String.raw`With $v=(1,-1.5)$, $\gamma=0.3$, and $\lambda=2$, compute the soft-thresholded vector and identify which coordinates retain their signs.`, String.raw`Với $v=(1,-1.5)$, $\gamma=0.3$ và $\lambda=2$, hãy tính vectơ ngưỡng mềm và xác định tọa độ nào giữ dấu ban đầu.`),
        solution: [
          b(String.raw`The threshold is $\gamma\lambda=0.6$. Both magnitudes, $1$ and $1.5$, exceed $0.6$, so neither coordinate is set to zero.`, String.raw`Ngưỡng là $\gamma\lambda=0.6$. Cả hai độ lớn $1$ và $1.5$ đều vượt $0.6$, nên không tọa độ nào bị đưa về không.`),
          b(String.raw`The first output is $1-0.6=0.4$. The second output is $-1.5+0.6=-0.9$, retaining its negative sign.`, String.raw`Đầu ra thứ nhất là $1-0.6=0.4$. Đầu ra thứ hai là $-1.5+0.6=-0.9$, giữ dấu âm.`),
          b(String.raw`Thus the proximal vector is $(0.4,-0.9)$, and both nonzero coordinates retain their input signs.`, String.raw`Do đó vectơ proximal là $(0.4,-0.9)$, và cả hai tọa độ khác không đều giữ dấu đầu vào.`),
        ],
      },
      {
        prompt: b(String.raw`For the scalar penalty $\lambda|x|$ with $\lambda=2$ and $\gamma=0.4$, test inputs $v=0.75$ and $v=-1.4$. Verify the zero case with the proximal subgradient condition.`, String.raw`Với số hạng phạt vô hướng $\lambda|x|$, $\lambda=2$ và $\gamma=0.4$, hãy xét $v=0.75$ và $v=-1.4$. Kiểm tra trường hợp bằng không bằng điều kiện dưới vi phân proximal.`),
        solution: [
          b(String.raw`The threshold is $\gamma\lambda=0.8$. Since $|0.75|<0.8$, soft thresholding returns zero.`, String.raw`Ngưỡng là $\gamma\lambda=0.8$. Vì $|0.75|<0.8$, ngưỡng mềm trả về không.`),
          b(String.raw`At $x=0$, the inclusion requires $v/\gamma\in\partial(\lambda|\cdot|)(0)=[-2,2]$. Here $0.75/0.4=1.875\in[-2,2]$, verifying the zero solution.`, String.raw`Tại $x=0$, bao hàm yêu cầu $v/\gamma\in\partial(\lambda|\cdot|)(0)=[-2,2]$. Ở đây $0.75/0.4=1.875\in[-2,2]$, xác nhận nghiệm không.`),
          b(String.raw`For $v=-1.4$, the output is $\operatorname{sign}(-1.4)(1.4-0.8)=-0.6$. Thus the two proximal values are $0$ and $-0.6$, respectively.`, String.raw`Với $v=-1.4$, đầu ra là $\operatorname{sign}(-1.4)(1.4-0.8)=-0.6$. Vì vậy hai giá trị proximal lần lượt là $0$ và $-0.6$.`),
        ],
      },
    ],
    reviewNote: 'Checked threshold γλ=1, the signs of all coordinates, and the equality/strict-threshold zero cases. Restriction: the coordinate formula assumes the separable ℓ1 penalty, λ≥0, and γ>0.',
    sourceIds: ['o-prox'],
  },
  'm2-w067-e2': {
    application: b(String.raw`A proximal step balances a convex penalty against squared distance from the current point. Its optimality condition says the step direction is a subgradient of the penalty, which turns a minimization problem into a local inclusion.`, String.raw`Bước proximal cân bằng số hạng phạt lồi với bình phương khoảng cách tới điểm hiện tại. Điều kiện tối ưu nói hướng bước là một dưới vi phân của số hạng phạt, biến bài toán cực tiểu thành một bao hàm địa phương.`),
    formula: b(String.raw`For proper lower-semicontinuous convex $h$ and $\gamma>0$, $x=\operatorname{prox}_{\gamma h}(v)$ iff $0\in\partial h(x)+(x-v)/\gamma$, equivalently $(v-x)/\gamma\in\partial h(x)$. If $h$ is differentiable, this becomes $v-x=\gamma\nabla h(x)$.`, String.raw`Với $h$ lồi chính thường nửa liên tục dưới và $\gamma>0$, $x=\operatorname{prox}_{\gamma h}(v)$ khi và chỉ khi $0\in\partial h(x)+(x-v)/\gamma$, tương đương $(v-x)/\gamma\in\partial h(x)$. Nếu $h$ khả vi, điều này trở thành $v-x=\gamma\nabla h(x)$.`),
    steps: [
      b(String.raw`The proximal objective is $H(x)=h(x)+\|x-v\|^2/(2\gamma)$. For differentiable $h$, its gradient is $\nabla h(x)+(x-v)/\gamma$.`, String.raw`Hàm mục tiêu proximal là $H(x)=h(x)+\|x-v\|^2/(2\gamma)$. Nếu $h$ khả vi, gradient là $\nabla h(x)+(x-v)/\gamma$.`),
      b(String.raw`At a minimizer, the first-order condition is $\nabla h(x)+(x-v)/\gamma=0$, which rearranges to $v-x=\gamma\nabla h(x)$.`, String.raw`Tại cực tiểu, điều kiện bậc nhất là $\nabla h(x)+(x-v)/\gamma=0$, sắp xếp lại thành $v-x=\gamma\nabla h(x)$.`),
      b(String.raw`For nonsmooth proper closed convex $h$, replace the gradient condition by $0\in\partial h(x)+(x-v)/\gamma$.`, String.raw`Với $h$ lồi chính thường đóng không trơn, thay điều kiện gradient bằng $0\in\partial h(x)+(x-v)/\gamma$.`),
      b(String.raw`Rearranging gives $(v-x)/\gamma\in\partial h(x)$. The quadratic term is strongly convex, so the proximal minimizer is unique.`, String.raw`Sắp xếp lại được $(v-x)/\gamma\in\partial h(x)$. Số hạng bình phương lồi mạnh, nên nghiệm proximal là duy nhất.`),
    ],
    primarySolution: [
      b(String.raw`For differentiable convex $h$, the proximal objective $h(x)+\|x-v\|^2/(2\gamma)$ is differentiable and strongly convex. Its minimizer is characterized by zero gradient.`, String.raw`Với $h$ lồi khả vi, hàm mục tiêu proximal $h(x)+\|x-v\|^2/(2\gamma)$ khả vi và lồi mạnh. Nghiệm cực tiểu được đặc trưng bởi gradient bằng không.`),
      b(String.raw`Differentiating gives $\nabla h(x)+(x-v)/\gamma=0$, equivalent to $v-x=\gamma\nabla h(x)$.`, String.raw`Lấy đạo hàm được $\nabla h(x)+(x-v)/\gamma=0$, tương đương $v-x=\gamma\nabla h(x)$.`),
      b(String.raw`For proper closed convex nonsmooth $h$, the exact convex optimality condition is $0\in\partial h(x)+(x-v)/\gamma$, or $(v-x)/\gamma\in\partial h(x)$.`, String.raw`Với $h$ lồi chính thường đóng không trơn, điều kiện tối ưu lồi chính xác là $0\in\partial h(x)+(x-v)/\gamma$, hay $(v-x)/\gamma\in\partial h(x)$.`),
      b(String.raw`The quadratic makes the objective strongly convex for $\gamma>0$, so the inclusion characterizes its unique minimizer.`, String.raw`Số hạng bình phương làm hàm mục tiêu lồi mạnh khi $\gamma>0$, nên bao hàm đặc trưng nghiệm duy nhất.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $h(x)=\tfrac a2x^2$ with $a>0$, derive $\operatorname{prox}_{\gamma h}(v)$ from the differentiable optimality condition.`, String.raw`Với $h(x)=\tfrac a2x^2$, $a>0$, hãy suy ra $\operatorname{prox}_{\gamma h}(v)$ từ điều kiện tối ưu khả vi.`),
        solution: [
          b(String.raw`The derivative is $h'(x)=ax$. The proximal condition is $v-x=\gamma ax$.`, String.raw`Đạo hàm là $h'(x)=ax$. Điều kiện proximal là $v-x=\gamma ax$.`),
          b(String.raw`Rearrange to $(1+\gamma a)x=v$, so $x=v/(1+\gamma a)$.`, String.raw`Sắp xếp lại thành $(1+\gamma a)x=v$, nên $x=v/(1+\gamma a)$.`),
          b(String.raw`Because $1+\gamma a>0$, this is the unique minimizer: $\operatorname{prox}_{\gamma h}(v)=v/(1+\gamma a)$.`, String.raw`Vì $1+\gamma a>0$, đây là nghiệm duy nhất: $\operatorname{prox}_{\gamma h}(v)=v/(1+\gamma a)$.`),
        ],
      },
      {
        prompt: b(String.raw`For the linear convex function $h(x)=c^Tx$ on $\mathbb R^n$, compute its proximal map and verify the subgradient inclusion.`, String.raw`Với hàm tuyến tính lồi $h(x)=c^Tx$ trên $\mathbb R^n$, hãy tính ánh xạ proximal và kiểm tra bao hàm dưới vi phân.`),
        solution: [
          b(String.raw`The subdifferential is the singleton $\partial h(x)=\{c\}$ at every $x$.`, String.raw`Dưới vi phân là tập đơn $\partial h(x)=\{c\}$ tại mọi $x$.`),
          b(String.raw`The optimality inclusion $(v-x)/\gamma\in\partial h(x)$ therefore requires $(v-x)/\gamma=c$.`, String.raw`Bao hàm tối ưu $(v-x)/\gamma\in\partial h(x)$ vì thế yêu cầu $(v-x)/\gamma=c$.`),
          b(String.raw`Solving gives $x=v-\gamma c$. Since the proximal objective has positive quadratic curvature, this stationary point is its unique minimizer.`, String.raw`Giải được $x=v-\gamma c$. Vì hàm mục tiêu proximal có độ cong bậc hai dương, điểm dừng này là cực tiểu duy nhất.`),
        ],
      },
      {
        prompt: b(String.raw`For $h(x)=\tfrac12\|Ax-b\|^2$, derive a linear system for $x=\operatorname{prox}_{\gamma h}(v)$ and explain why it has a unique solution for every $A$.`, String.raw`Với $h(x)=\tfrac12\|Ax-b\|^2$, hãy suy ra hệ tuyến tính cho $x=\operatorname{prox}_{\gamma h}(v)$ và giải thích vì sao hệ có nghiệm duy nhất với mọi $A$.`),
        solution: [
          b(String.raw`The gradient is $\nabla h(x)=A^T(Ax-b)$. The proximal condition is $v-x=\gamma A^T(Ax-b)$.`, String.raw`Gradient là $\nabla h(x)=A^T(Ax-b)$. Điều kiện proximal là $v-x=\gamma A^T(Ax-b)$.`),
          b(String.raw`Rearrange to $(I+\gamma A^TA)x=v+\gamma A^Tb$.`, String.raw`Sắp xếp lại thành $(I+\gamma A^TA)x=v+\gamma A^Tb$.`),
          b(String.raw`For every $z\ne0$, $z^T(I+\gamma A^TA)z=\|z\|^2+\gamma\|Az\|^2>0$. Thus the matrix is positive definite and invertible, yielding a unique solution for every $A$.`, String.raw`Với mọi $z\ne0$, $z^T(I+\gamma A^TA)z=\|z\|^2+\gamma\|Az\|^2>0$. Vì thế ma trận xác định dương và khả nghịch, cho nghiệm duy nhất với mọi $A$.`),
        ],
      },
    ],
    reviewNote: 'Checked the gradient sign, division by γ>0, and the nonsmooth inclusion form; the quadratic guarantees uniqueness. Restriction: h must be proper, lower-semicontinuous and convex for the stated exact subgradient characterization.',
    sourceIds: ['o-prox'],
  },
  'm2-w067-e3': {
    application: b(String.raw`Firm nonexpansiveness says a proximal map cannot amplify differences and also preserves an inner-product alignment with the input difference. This stronger property supports stability proofs for splitting and iterative optimization methods.`, String.raw`Tính không giãn chặt nói ánh xạ proximal không khuếch đại chênh lệch và còn giữ sự tương hợp tích vô hướng với chênh lệch đầu vào. Tính chất mạnh hơn này hỗ trợ chứng minh ổn định cho phương pháp tách và tối ưu lặp.`),
    formula: b(String.raw`For proper lower-semicontinuous convex $h$ and $\gamma>0$, $P=\operatorname{prox}_{\gamma h}$ is firmly nonexpansive: $\|P(u)-P(v)\|^2\le(P(u)-P(v))^T(u-v)$ for all $u,v$.`, String.raw`Với $h$ lồi chính thường nửa liên tục dưới và $\gamma>0$, $P=\operatorname{prox}_{\gamma h}$ không giãn chặt: $\|P(u)-P(v)\|^2\le(P(u)-P(v))^T(u-v)$ với mọi $u,v$.`),
    steps: [
      b(String.raw`Let $x=P(u)$ and $y=P(v)$. The proximal optimality inclusions give $a=(u-x)/\gamma\in\partial h(x)$ and $b=(v-y)/\gamma\in\partial h(y)$.`, String.raw`Đặt $x=P(u)$ và $y=P(v)$. Các bao hàm tối ưu proximal cho $a=(u-x)/\gamma\in\partial h(x)$ và $b=(v-y)/\gamma\in\partial h(y)$.`),
      b(String.raw`Add the two subgradient inequalities: $h(y)\ge h(x)+a^T(y-x)$ and $h(x)\ge h(y)+b^T(x-y)$. This yields $(a-b)^T(x-y)\ge0$.`, String.raw`Cộng hai bất đẳng thức dưới vi phân: $h(y)\ge h(x)+a^T(y-x)$ và $h(x)\ge h(y)+b^T(x-y)$. Suy ra $(a-b)^T(x-y)\ge0$.`),
      b(String.raw`Substitute $a-b=(u-v-x+y)/\gamma$ and multiply by $\gamma>0$: $(u-v-x+y)^T(x-y)\ge0$.`, String.raw`Thế $a-b=(u-v-x+y)/\gamma$ rồi nhân với $\gamma>0$: $(u-v-x+y)^T(x-y)\ge0$.`),
      b(String.raw`Rearranging gives $\|x-y\|^2\le(x-y)^T(u-v)$, the desired firm inequality.`, String.raw`Sắp xếp lại được $\|x-y\|^2\le(x-y)^T(u-v)$, chính là bất đẳng thức không giãn chặt cần chứng minh.`),
    ],
    primarySolution: [
      b(String.raw`Set $x=\operatorname{prox}(u)$ and $y=\operatorname{prox}(v)$. Then $a=(u-x)/\gamma\in\partial h(x)$ and $b=(v-y)/\gamma\in\partial h(y)$.`, String.raw`Đặt $x=\operatorname{prox}(u)$ và $y=\operatorname{prox}(v)$. Khi đó $a=(u-x)/\gamma\in\partial h(x)$ và $b=(v-y)/\gamma\in\partial h(y)$.`),
      b(String.raw`The two subgradient inequalities add to $(a-b)^T(x-y)\ge0$. Substitute the inclusions to get $(u-v-x+y)^T(x-y)\ge0$, using $\gamma>0$.`, String.raw`Cộng hai bất đẳng thức dưới vi phân được $(a-b)^T(x-y)\ge0$. Thế các bao hàm cho $(u-v-x+y)^T(x-y)\ge0$, dùng $\gamma>0$.`),
      b(String.raw`Expand: $(u-v)^T(x-y)-\|x-y\|^2\ge0$. Thus $\|\operatorname{prox}(u)-\operatorname{prox}(v)\|^2\le(\operatorname{prox}(u)-\operatorname{prox}(v))^T(u-v)$.`, String.raw`Khai triển: $(u-v)^T(x-y)-\|x-y\|^2\ge0$. Do đó $\|\operatorname{prox}(u)-\operatorname{prox}(v)\|^2\le(\operatorname{prox}(u)-\operatorname{prox}(v))^T(u-v)$.`),
      b(String.raw`The key inequality came from convex subgradient inequalities, equivalently monotonicity of $\partial h$.`, String.raw`Bất đẳng thức then chốt đến từ các bất đẳng thức dưới vi phân lồi, tương đương tính đơn điệu của $\partial h$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $h\equiv0$, identify its proximal map and verify firm nonexpansiveness directly for arbitrary $u,v\in\mathbb R^n$.`, String.raw`Với $h\equiv0$, hãy xác định ánh xạ proximal và kiểm tra trực tiếp tính không giãn chặt với $u,v\in\mathbb R^n$ bất kỳ.`),
        solution: [
          b(String.raw`The proximal objective is $\|x-v\|^2/(2\gamma)$, minimized uniquely at $x=v$. Thus $P(u)=u$ and $P(v)=v$.`, String.raw`Hàm mục tiêu proximal là $\|x-v\|^2/(2\gamma)$, đạt cực tiểu duy nhất tại $x=v$. Do đó $P(u)=u$ và $P(v)=v$.`),
          b(String.raw`The firm inequality becomes $\|u-v\|^2\le(u-v)^T(u-v)$.`, String.raw`Bất đẳng thức không giãn chặt trở thành $\|u-v\|^2\le(u-v)^T(u-v)$.`),
          b(String.raw`Both sides are equal, so the identity map is firmly nonexpansive.`, String.raw`Hai vế bằng nhau, nên ánh xạ đồng nhất không giãn chặt.`),
        ],
      },
      {
        prompt: b(String.raw`For $h=\delta_{[0,\infty)}$ with $\gamma=1$, take $u=2$ and $v=-1$. Compute both sides of the firm inequality.`, String.raw`Với $h=\delta_{[0,\infty)}$ và $\gamma=1$, lấy $u=2$, $v=-1$. Hãy tính hai vế của bất đẳng thức không giãn chặt.`),
        solution: [
          b(String.raw`The proximal map is projection onto $[0,\infty)$, so $P(2)=2$ and $P(-1)=0$.`, String.raw`Ánh xạ proximal là phép chiếu lên $[0,\infty)$, nên $P(2)=2$ và $P(-1)=0$.`),
          b(String.raw`The left side is $|2-0|^2=4$. The right side is $(2-0)(2-(-1))=2\cdot3=6$.`, String.raw`Vế trái là $|2-0|^2=4$. Vế phải là $(2-0)(2-(-1))=2\cdot3=6$.`),
          b(String.raw`Since $4\le6$, the firm inequality holds strictly for this pair.`, String.raw`Vì $4\le6$, bất đẳng thức không giãn chặt đúng nghiêm với cặp này.`),
        ],
      },
      {
        prompt: b(String.raw`Use firm nonexpansiveness and Cauchy–Schwarz to prove that every proximal map of a proper closed convex function is $1$-Lipschitz.`, String.raw`Dùng tính không giãn chặt và Cauchy–Schwarz để chứng minh mọi ánh xạ proximal của hàm lồi chính thường đóng đều là $1$-Lipschitz.`),
        solution: [
          b(String.raw`Write $p=P(u)-P(v)$ and $d=u-v$. Firm nonexpansiveness says $\|p\|^2\le p^Td$.`, String.raw`Đặt $p=P(u)-P(v)$ và $d=u-v$. Tính không giãn chặt cho $\|p\|^2\le p^Td$.`),
          b(String.raw`By Cauchy–Schwarz, $p^Td\le\|p\|\|d\|$. Thus $\|p\|^2\le\|p\|\|d\|$.`, String.raw`Theo Cauchy–Schwarz, $p^Td\le\|p\|\|d\|$. Vì vậy $\|p\|^2\le\|p\|\|d\|$.`),
          b(String.raw`If $p=0$, the Lipschitz inequality is immediate; otherwise divide by $\|p\|>0$ to obtain $\|P(u)-P(v)\|\le\|u-v\|$.`, String.raw`Nếu $p=0$, bất đẳng thức Lipschitz hiển nhiên đúng; nếu không, chia cho $\|p\|>0$ được $\|P(u)-P(v)\|\le\|u-v\|$.`),
        ],
      },
    ],
    reviewNote: 'Checked the subgradient inequality directions, monotonicity expression, multiplication by γ>0, and final rearrangement. Restriction: convexity is essential for monotonicity; the proof does not cover nonconvex proximal objectives.',
    sourceIds: ['o-prox'],
  },
  'm2-w067-e4': {
    application: b(String.raw`A hard feasibility constraint can be handled by a proximal map that simply projects onto the allowed set. For a one-sided bound, the map clips infeasible inputs at the boundary and leaves feasible inputs unchanged.`, String.raw`Ràng buộc khả thi cứng có thể xử lý bằng ánh xạ proximal chỉ chiếu lên tập cho phép. Với cận một phía, ánh xạ chặn đầu vào không khả thi tại biên và giữ nguyên đầu vào khả thi.`),
    formula: b(String.raw`For a nonempty closed convex set $C$, $\operatorname{prox}_{\gamma\delta_C}(v)=\Pi_C(v)$ for every $\gamma>0$. The optimality condition is $(v-x)/\gamma\in N_C(x)$, where $N_C(x)=\{w:w^T(y-x)\le0\ \forall y\in C\}$.`, String.raw`Với tập lồi đóng không rỗng $C$, $\operatorname{prox}_{\gamma\delta_C}(v)=\Pi_C(v)$ với mọi $\gamma>0$. Điều kiện tối ưu là $(v-x)/\gamma\in N_C(x)$, trong đó $N_C(x)=\{w:w^T(y-x)\le0\ \forall y\in C\}$.`),
    steps: [
      b(String.raw`Since $h=\delta_{[0,\infty)}$, finite objective values require $x\ge0$; among those points minimize $(x-v)^2/(2\gamma)$.`, String.raw`Vì $h=\delta_{[0,\infty)}$, giá trị mục tiêu hữu hạn đòi hỏi $x\ge0$; trong số đó tối thiểu hóa $(x-v)^2/(2\gamma)$.`),
      b(String.raw`If $v\ge0$, the feasible point closest to $v$ is $x=v$, giving $(v-x)/\gamma=0$. At an interior point the normal cone is $\{0\}$; at $v=0$, zero also belongs to the boundary normal cone.`, String.raw`Nếu $v\ge0$, điểm khả thi gần $v$ nhất là $x=v$, cho $(v-x)/\gamma=0$. Tại điểm trong, nón pháp tuyến là $\{0\}$; tại $v=0$, số không cũng thuộc nón pháp tuyến ở biên.`),
      b(String.raw`If $v<0$, the closest feasible point is the endpoint $x=0$. Then $(v-x)/\gamma=v/\gamma<0$, which lies in $N_{[0,\infty)}(0)=(-\infty,0]$.`, String.raw`Nếu $v<0$, điểm khả thi gần nhất là đầu mút $x=0$. Khi đó $(v-x)/\gamma=v/\gamma<0$, thuộc $N_{[0,\infty)}(0)=(-\infty,0]$.`),
      b(String.raw`Thus $x=\max(v,0)$ satisfies the exact proximal inclusion in both cases and is the unique projection.`, String.raw`Vì vậy $x=\max(v,0)$ thỏa bao hàm proximal chính xác trong cả hai trường hợp và là phép chiếu duy nhất.`),
    ],
    primarySolution: [
      b(String.raw`The indicator restricts the proximal minimization to $x\ge0$, where it minimizes squared distance from $v$. Therefore $x=\Pi_{[0,\infty)}(v)=\max(v,0)$.`, String.raw`Hàm chỉ thị giới hạn phép cực tiểu proximal vào $x\ge0$, nơi nó tối thiểu hóa bình phương khoảng cách tới $v$. Vì vậy $x=\Pi_{[0,\infty)}(v)=\max(v,0)$.`),
      b(String.raw`If $v\ge0$, then $x=v$ and $(v-x)/\gamma=0$. This belongs to $N_C(x)=\{0\}$ for $x>0$ and to $N_C(0)=(-\infty,0]$ when $v=0$.`, String.raw`Nếu $v\ge0$, thì $x=v$ và $(v-x)/\gamma=0$. Phần tử này thuộc $N_C(x)=\{0\}$ khi $x>0$ và thuộc $N_C(0)=(-\infty,0]$ khi $v=0$.`),
      b(String.raw`If $v<0$, then $x=0$ and $(v-x)/\gamma=v/\gamma<0\in N_C(0)=(-\infty,0]$. Thus the inclusion holds for every sign of $v$.`, String.raw`Nếu $v<0$, thì $x=0$ và $(v-x)/\gamma=v/\gamma<0\in N_C(0)=(-\infty,0]$. Vậy bao hàm đúng với mọi dấu của $v$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $C=[2,\infty)$, compute $\operatorname{prox}_{\gamma\delta_C}(v)$ and verify the normal-cone inclusion for $v=1$ and $v=3$ with $\gamma=1/4$.`, String.raw`Với $C=[2,\infty)$, hãy tính $\operatorname{prox}_{\gamma\delta_C}(v)$ và kiểm tra bao hàm nón pháp tuyến khi $v=1$ và $v=3$, $\gamma=1/4$.`),
        solution: [
          b(String.raw`Projection onto $[2,\infty)$ is $x=\max(v,2)$. Thus the outputs are $x=2$ for $v=1$ and $x=3$ for $v=3$.`, String.raw`Phép chiếu lên $[2,\infty)$ là $x=\max(v,2)$. Vì thế đầu ra là $x=2$ khi $v=1$ và $x=3$ khi $v=3$.`),
          b(String.raw`For $v=1$, $(v-x)/\gamma=(1-2)/(1/4)=-4$. The normal cone at the left endpoint is $N_C(2)=(-\infty,0]$, so inclusion holds.`, String.raw`Với $v=1$, $(v-x)/\gamma=(1-2)/(1/4)=-4$. Nón pháp tuyến tại đầu mút trái là $N_C(2)=(-\infty,0]$, nên bao hàm đúng.`),
          b(String.raw`For $v=3$, $x=3$ is interior and $(v-x)/\gamma=0\in N_C(3)=\{0\}$.`, String.raw`Với $v=3$, $x=3$ là điểm trong và $(v-x)/\gamma=0\in N_C(3)=\{0\}$.`),
        ],
      },
      {
        prompt: b(String.raw`Find the proximal map of $\delta_{[-1,2]}$ for arbitrary real $v$, and state the three regions where the formula changes.`, String.raw`Hãy tìm ánh xạ proximal của $\delta_{[-1,2]}$ với $v$ thực bất kỳ và nêu ba miền mà công thức thay đổi.`),
        solution: [
          b(String.raw`The proximal map is the Euclidean projection onto the interval $[-1,2]$.`, String.raw`Ánh xạ proximal là phép chiếu Euclid lên khoảng $[-1,2]$.`),
          b(String.raw`If $v<-1$, the closest feasible point is $-1$; if $-1\le v\le2$, the point $v$ is already feasible; if $v>2$, the closest point is $2$.`, String.raw`Nếu $v<-1$, điểm khả thi gần nhất là $-1$; nếu $-1\le v\le2$, điểm $v$ đã khả thi; nếu $v>2$, điểm gần nhất là $2$.`),
          b(String.raw`Therefore $\operatorname{prox}_{\delta_{[-1,2]}}(v)=\min\{2,\max\{-1,v\}\}$. At either endpoint the projection formula is continuous and agrees from both adjacent regions.`, String.raw`Do đó $\operatorname{prox}_{\delta_{[-1,2]}}(v)=\min\{2,\max\{-1,v\}\}$. Tại mỗi đầu mút, công thức chiếu liên tục và trùng nhau từ hai miền kề.`),
        ],
      },
      {
        prompt: b(String.raw`For $C=(-\infty,0]$, compute $\operatorname{prox}_{\gamma\delta_C}(v)$ and verify the inclusion at $v=2$ and $v=-1$.`, String.raw`Với $C=(-\infty,0]$, hãy tính $\operatorname{prox}_{\gamma\delta_C}(v)$ và kiểm tra bao hàm tại $v=2$ và $v=-1$.`),
        solution: [
          b(String.raw`Projection onto $(-\infty,0]$ is $x=\min(v,0)$, so the outputs are $0$ for $v=2$ and $-1$ for $v=-1$.`, String.raw`Phép chiếu lên $(-\infty,0]$ là $x=\min(v,0)$, nên đầu ra lần lượt là $0$ khi $v=2$ và $-1$ khi $v=-1$.`),
          b(String.raw`At $v=2$, $x=0$ and $(v-x)/\gamma=2/\gamma>0$. The normal cone at the right endpoint is $N_C(0)=[0,\infty)$, so the inclusion holds.`, String.raw`Tại $v=2$, $x=0$ và $(v-x)/\gamma=2/\gamma>0$. Nón pháp tuyến tại đầu mút phải là $N_C(0)=[0,\infty)$, nên bao hàm đúng.`),
          b(String.raw`At $v=-1$, $x=v$ is interior and $(v-x)/\gamma=0\in N_C(x)=\{0\}$.`, String.raw`Tại $v=-1$, $x=v$ là điểm trong và $(v-x)/\gamma=0\in N_C(x)=\{0\}$.`),
        ],
      },
    ],
    reviewNote: 'Checked projection cases v≥0 and v<0, especially v=0 at the boundary, and the normal-cone sign N(0)=(-∞,0]. Restriction: the formula uses the closed convex half-line indicator and γ>0.',
    sourceIds: ['o-prox'],
  },
  'm2-w067-e5': {
    application: b(String.raw`A nonconvex regularizer can make the proximal subproblem have several equally good solutions. Then a single-valued, stable proximal map is no longer guaranteed, changing the behavior of algorithms that rely on it.`, String.raw`Số hạng điều chuẩn không lồi có thể khiến bài toán proximal có nhiều nghiệm tốt như nhau. Khi đó không còn bảo đảm ánh xạ proximal đơn trị, làm thay đổi hành vi của thuật toán dựa vào nó.`),
    formula: b(String.raw`For $h(x)=-|x|$ and $\gamma=1$, the proximal objective at $v=0$ is $-|x|+x^2/2$. Its two global minimizers are $x=\pm1$, so $\operatorname{prox}_{\gamma h}(0)=\{-1,1\}$.`, String.raw`Với $h(x)=-|x|$ và $\gamma=1$, hàm mục tiêu proximal tại $v=0$ là $-|x|+x^2/2$. Hai cực tiểu toàn cục là $x=\pm1$, nên $\operatorname{prox}_{\gamma h}(0)=\{-1,1\}$.`),
    steps: [
      b(String.raw`On $x\ge0$, the objective is $-x+x^2/2=(x-1)^2/2-1/2$, minimized at $x=1$.`, String.raw`Trên $x\ge0$, hàm mục tiêu là $-x+x^2/2=(x-1)^2/2-1/2$, đạt cực tiểu tại $x=1$.`),
      b(String.raw`On $x\le0$, it is $x+x^2/2=(x+1)^2/2-1/2$, minimized at $x=-1$.`, String.raw`Trên $x\le0$, hàm bằng $x+x^2/2=(x+1)^2/2-1/2$, đạt cực tiểu tại $x=-1$.`),
      b(String.raw`Both minima have value $-1/2$, and each branch is bounded below by that value. Thus the proximal argmin contains both points.`, String.raw`Cả hai cực tiểu có giá trị $-1/2$, và mỗi nhánh đều bị chặn dưới bởi giá trị đó. Vì vậy argmin proximal chứa cả hai điểm.`),
      b(String.raw`The convex proof of firm nonexpansiveness uses monotonicity of $\partial h$. That property is unavailable for this nonconvex $h$, so the single-valued convex proximal conclusion does not apply.`, String.raw`Chứng minh không giãn chặt cho trường hợp lồi dùng tính đơn điệu của $\partial h$. Tính chất đó không có với $h$ không lồi này, nên kết luận proximal lồi đơn trị không áp dụng.`),
    ],
    primarySolution: [
      b(String.raw`For $x\ge0$, $-|x|+x^2/2=-x+x^2/2=(x-1)^2/2-1/2$, whose minimum on that half-line is at $x=1$.`, String.raw`Với $x\ge0$, $-|x|+x^2/2=-x+x^2/2=(x-1)^2/2-1/2$, đạt cực tiểu trên nửa trục tại $x=1$.`),
      b(String.raw`For $x\le0$, the objective is $x+x^2/2=(x+1)^2/2-1/2$, minimized on that half-line at $x=-1$.`, String.raw`Với $x\le0$, hàm mục tiêu là $x+x^2/2=(x+1)^2/2-1/2$, đạt cực tiểu trên nửa trục tại $x=-1$.`),
      b(String.raw`Both points give value $-1/2$, and each completed square proves no lower value on its half-line. Hence the argmin is $\{-1,1\}$.`, String.raw`Cả hai điểm đều cho giá trị $-1/2$, và mỗi bình phương hoàn chỉnh chứng minh không có giá trị thấp hơn trên nửa trục tương ứng. Do đó argmin là $\{-1,1\}$.`),
      b(String.raw`The convex proof step that invokes monotonicity of the subdifferential fails because $h=-|x|$ is nonconvex. The proximal argmin is therefore set-valued here.`, String.raw`Bước của chứng minh lồi viện dẫn tính đơn điệu của dưới vi phân thất bại vì $h=-|x|$ không lồi. Vì thế argmin proximal ở đây là tập nhiều giá trị.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $h(x)=-|x|$, $\gamma=1$, and input $v=2$, find the proximal minimizer and check whether it is unique.`, String.raw`Với $h(x)=-|x|$, $\gamma=1$ và đầu vào $v=2$, hãy tìm nghiệm proximal và xét nghiệm có duy nhất không.`),
        solution: [
          b(String.raw`For $x\ge0$, the objective is $-x+(x-2)^2/2=(x-3)^2/2-5/2$, minimized at $x=3$ with value $-5/2$.`, String.raw`Với $x\ge0$, hàm mục tiêu là $-x+(x-2)^2/2=(x-3)^2/2-5/2$, đạt cực tiểu tại $x=3$ với giá trị $-5/2$.`),
          b(String.raw`For $x\le0$, it is $x+(x-2)^2/2=(x-1)^2/2+3/2$. On this half-line it is minimized at the boundary $x=0$, with value $2$.`, String.raw`Với $x\le0$, hàm bằng $x+(x-2)^2/2=(x-1)^2/2+3/2$. Trên nửa trục này, cực tiểu đạt tại biên $x=0$ với giá trị $2$.`),
          b(String.raw`Since $-5/2<2$, the global minimizer is uniquely $x=3$. Nonconvexity permits set-valued proximal maps but does not force every input to have multiple minimizers.`, String.raw`Vì $-5/2<2$, nghiệm toàn cục duy nhất là $x=3$. Không lồi cho phép ánh xạ proximal nhiều giá trị nhưng không buộc mọi đầu vào đều có nhiều nghiệm.`),
        ],
      },
      {
        prompt: b(String.raw`Let $h$ be zero on $\{-1,1\}$ and $+\infty$ elsewhere. Compute $\operatorname{prox}_{\gamma h}(0)$ for any $\gamma>0$ and explain why it is set-valued.`, String.raw`Cho $h$ bằng không trên $\{-1,1\}$ và $+\infty$ ở ngoài. Hãy tính $\operatorname{prox}_{\gamma h}(0)$ với mọi $\gamma>0$ và giải thích vì sao ánh xạ có nhiều giá trị.`),
        solution: [
          b(String.raw`Finite proximal objective values are possible only at $x=-1$ or $x=1$.`, String.raw`Giá trị mục tiêu proximal hữu hạn chỉ có thể tại $x=-1$ hoặc $x=1$.`),
          b(String.raw`At either point, the indicator value is zero and the quadratic term is $x^2/(2\gamma)=1/(2\gamma)$.`, String.raw`Tại mỗi điểm, giá trị chỉ thị bằng không và số hạng bình phương là $x^2/(2\gamma)=1/(2\gamma)$.`),
          b(String.raw`Both candidates attain the same minimum, so $\operatorname{prox}_{\gamma h}(0)=\{-1,1\}$. The nonconvex domain prevents the convex uniqueness guarantee.`, String.raw`Cả hai ứng viên cùng đạt cực tiểu, nên $\operatorname{prox}_{\gamma h}(0)=\{-1,1\}$. Miền không lồi làm mất bảo đảm duy nhất của trường hợp lồi.`),
        ],
      },
      {
        prompt: b(String.raw`For $h(x)=-x^2$, evaluate the proximal objective at $v=0$ and determine what happens when $\gamma<1/2$, $\gamma=1/2$, and $\gamma>1/2$.`, String.raw`Với $h(x)=-x^2$, hãy xét hàm mục tiêu proximal tại $v=0$ và xác định điều gì xảy ra khi $\gamma<1/2$, $\gamma=1/2$ và $\gamma>1/2$.`),
        solution: [
          b(String.raw`The objective is $-x^2+x^2/(2\gamma)=(1/(2\gamma)-1)x^2$.`, String.raw`Hàm mục tiêu là $-x^2+x^2/(2\gamma)=(1/(2\gamma)-1)x^2$.`),
          b(String.raw`If $0<\gamma<1/2$, the coefficient is positive, so the unique minimizer is $x=0$. At $\gamma=1/2$, the objective is identically zero and every $x$ minimizes.`, String.raw`Nếu $0<\gamma<1/2$, hệ số dương nên nghiệm duy nhất là $x=0$. Khi $\gamma=1/2$, hàm mục tiêu đồng nhất bằng không nên mọi $x$ đều là nghiệm.`),
          b(String.raw`If $\gamma>1/2$, the coefficient is negative and the objective tends to $-\infty$ as $|x|\to\infty$, so no proximal minimizer exists.`, String.raw`Nếu $\gamma>1/2$, hệ số âm và hàm mục tiêu tiến tới $-\infty$ khi $|x|\to\infty$, nên không tồn tại nghiệm proximal.`),
        ],
      },
    ],
    reviewNote: 'Checked both completed-square branches, their equal minimum −1/2, and the distinct nonconvex examples. Restriction: without convexity, a proximal argmin may be multiple or fail to exist; no single-valued-map theorem is claimed.',
    sourceIds: ['o-prox'],
  },
  'm2-w068-e1': {
    application: b(String.raw`Choosing a constant learning rate trades off initial-distance error against accumulated gradient noise. The optimal rate balances those two terms and turns an iteration-dependent regret bound into a simple average excess guarantee.`, String.raw`Chọn tốc độ học không đổi là sự đánh đổi giữa sai số khoảng cách ban đầu và nhiễu gradient tích lũy. Tốc độ tối ưu cân bằng hai số hạng đó, biến cận regret phụ thuộc số vòng thành bảo đảm excess trung bình đơn giản.`),
    formula: b(String.raw`For $D>0$, $G>0$, $T>0$, minimize $R(\eta)=D^2/(2\eta)+\eta G^2T/2$ over $\eta>0$. The minimizer is $\eta^*=D/(G\sqrt T)$, giving $R(\eta^*)=DG\sqrt T$ and average bound $DG/\sqrt T$.`, String.raw`Với $D>0$, $G>0$, $T>0$, tối thiểu hóa $R(\eta)=D^2/(2\eta)+\eta G^2T/2$ theo $\eta>0$. Nghiệm là $\eta^*=D/(G\sqrt T)$, cho $R(\eta^*)=DG\sqrt T$ và cận trung bình $DG/\sqrt T$.`),
    steps: [
      b(String.raw`Differentiate the stated bound: $R'(\eta)=-D^2/(2\eta^2)+G^2T/2$.`, String.raw`Lấy đạo hàm cận đã cho: $R'(\eta)=-D^2/(2\eta^2)+G^2T/2$.`),
      b(String.raw`Set $R'(\eta)=0$, giving $D^2/\eta^2=G^2T$. Since $\eta>0$, the optimizer is $\eta^*=D/(G\sqrt T)$.`, String.raw`Cho $R'(\eta)=0$, được $D^2/\eta^2=G^2T$. Vì $\eta>0$, nghiệm là $\eta^*=D/(G\sqrt T)$.`),
      b(String.raw`The second derivative $R''(\eta)=D^2/\eta^3>0$, so this critical point is the unique minimum.`, String.raw`Đạo hàm bậc hai $R''(\eta)=D^2/\eta^3>0$, nên điểm tới hạn này là cực tiểu duy nhất.`),
      b(String.raw`Substituting gives $D^2/(2\eta^*)+\eta^*G^2T/2=DG\sqrt T$. Dividing by $T=100$ yields average excess bound $60/100=0.6$.`, String.raw`Thế vào được $D^2/(2\eta^*)+\eta^*G^2T/2=DG\sqrt T$. Chia cho $T=100$ cho cận excess trung bình $60/100=0.6$.`),
    ],
    primarySolution: [
      b(String.raw`The derivative of $D^2/(2\eta)+\eta G^2T/2$ is $-D^2/(2\eta^2)+G^2T/2$. Setting it to zero gives $\eta^*=D/(G\sqrt T)$.`, String.raw`Đạo hàm của $D^2/(2\eta)+\eta G^2T/2$ là $-D^2/(2\eta^2)+G^2T/2$. Cho bằng không được $\eta^*=D/(G\sqrt T)$.`),
      b(String.raw`With $D=3$, $G=2$, and $T=100$, $\eta^*=3/(2\cdot10)=3/20=0.15$.`, String.raw`Với $D=3$, $G=2$ và $T=100$, $\eta^*=3/(2\cdot10)=3/20=0.15$.`),
      b(String.raw`The optimized total bound is $DG\sqrt T=3\cdot2\cdot10=60$.`, String.raw`Cận tổng tối ưu là $DG\sqrt T=3\cdot2\cdot10=60$.`),
      b(String.raw`Dividing by $T=100$ gives average excess at most $60/100=0.6$.`, String.raw`Chia cho $T=100$ cho excess trung bình không quá $60/100=0.6$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $D=2$, $G=3$, and $T=25$, find the minimizing constant step and both the total and average regret bounds.`, String.raw`Với $D=2$, $G=3$ và $T=25$, hãy tìm bước không đổi tối ưu cùng cận regret tổng và trung bình.`),
        solution: [
          b(String.raw`The optimal step is $\eta^*=D/(G\sqrt T)=2/(3\cdot5)=2/15$.`, String.raw`Bước tối ưu là $\eta^*=D/(G\sqrt T)=2/(3\cdot5)=2/15$.`),
          b(String.raw`The total bound is $DG\sqrt T=2\cdot3\cdot5=30$.`, String.raw`Cận tổng là $DG\sqrt T=2\cdot3\cdot5=30$.`),
          b(String.raw`Dividing by $T=25$ gives average bound $30/25=1.2$.`, String.raw`Chia cho $T=25$ được cận trung bình $30/25=1.2$.`),
        ],
      },
      {
        prompt: b(String.raw`With $D=4$, $G=1$, and $T=16$, compute the optimal step and verify that the two terms of the regret bound are equal there.`, String.raw`Với $D=4$, $G=1$ và $T=16$, hãy tính bước tối ưu và kiểm tra hai số hạng của cận regret bằng nhau tại đó.`),
        solution: [
          b(String.raw`The optimal rate is $\eta^*=4/(1\cdot4)=1$.`, String.raw`Tốc độ tối ưu là $\eta^*=4/(1\cdot4)=1$.`),
          b(String.raw`The distance term is $D^2/(2\eta^*)=16/2=8$. The gradient term is $\eta^*G^2T/2=1\cdot1\cdot16/2=8$.`, String.raw`Số hạng khoảng cách là $D^2/(2\eta^*)=16/2=8$. Số hạng gradient là $\eta^*G^2T/2=1\cdot1\cdot16/2=8$.`),
          b(String.raw`They balance at $8$ each, giving total $16=DG\sqrt T$. The average bound is $16/16=1$.`, String.raw`Hai số hạng cân bằng, mỗi số bằng $8$, cho tổng $16=DG\sqrt T$. Cận trung bình là $16/16=1$.`),
        ],
      },
      {
        prompt: b(String.raw`For $D=1.5$, $G=4$, and $T=36$, calculate the optimal step, total regret bound, and average excess bound.`, String.raw`Với $D=1.5$, $G=4$ và $T=36$, hãy tính bước tối ưu, cận regret tổng và cận excess trung bình.`),
        solution: [
          b(String.raw`Since $\sqrt T=6$, the optimal step is $\eta^*=1.5/(4\cdot6)=1.5/24=1/16=0.0625$.`, String.raw`Vì $\sqrt T=6$, bước tối ưu là $\eta^*=1.5/(4\cdot6)=1.5/24=1/16=0.0625$.`),
          b(String.raw`The total bound is $DG\sqrt T=1.5\cdot4\cdot6=36$.`, String.raw`Cận tổng là $DG\sqrt T=1.5\cdot4\cdot6=36$.`),
          b(String.raw`Dividing by $36$ gives average excess bound $1$.`, String.raw`Chia cho $36$ được cận excess trung bình bằng $1$.`),
        ],
      },
    ],
    reviewNote: 'Checked the derivative, strict convexity of the scalar bound, η*=3/20, total bound 60, and average 0.6. Restriction: the formula assumes positive D,G,T and the stated constant-step bound.',
    sourceIds: ['o-hazan'],
  },
  'm2-w068-e2': {
    application: b(String.raw`Projection keeps each stochastic iterate inside the feasible set. The projection variational inequality turns that geometric correction into a distance comparison with any feasible comparator, which can then telescope over time.`, String.raw`Phép chiếu giữ mỗi điểm lặp ngẫu nhiên trong tập khả thi. Bất đẳng thức biến phân của phép chiếu biến hiệu chỉnh hình học thành so sánh khoảng cách với mọi điểm đối chiếu khả thi, rồi có thể cộng rút gọn theo thời gian.`),
    formula: b(String.raw`For closed convex $C$, $p=\Pi_C(z)$ iff $(z-p)^T(x-p)\le0$ for every $x\in C$. Hence for comparator $x^*\in C$, $\|p-x^*\|^2\le\|z-x^*\|^2$.`, String.raw`Với $C$ lồi đóng, $p=\Pi_C(z)$ khi và chỉ khi $(z-p)^T(x-p)\le0$ với mọi $x\in C$. Vì vậy với điểm đối chiếu $x^*\in C$, $\|p-x^*\|^2\le\|z-x^*\|^2$.`),
    steps: [
      b(String.raw`Let $p=\Pi_C(z)$ and use the projection variational inequality with the feasible comparator $x^*$: $(z-p)^T(x^*-p)\le0$.`, String.raw`Đặt $p=\Pi_C(z)$ và dùng bất đẳng thức biến phân của phép chiếu với điểm đối chiếu khả thi $x^*$: $(z-p)^T(x^*-p)\le0$.`),
      b(String.raw`Expanding $\|z-x^*\|^2=\|z-p\|^2+\|p-x^*\|^2+2(z-p)^T(p-x^*)$, the cross term is nonnegative because $(z-p)^T(p-x^*)\ge0$.`, String.raw`Khai triển $\|z-x^*\|^2=\|z-p\|^2+\|p-x^*\|^2+2(z-p)^T(p-x^*)$, số hạng chéo không âm vì $(z-p)^T(p-x^*)\ge0$.`),
      b(String.raw`Dropping the nonnegative terms gives $\|p-x^*\|^2\le\|z-x^*\|^2$, and taking square roots gives the distance inequality.`, String.raw`Bỏ các số hạng không âm cho $\|p-x^*\|^2\le\|z-x^*\|^2$, rồi lấy căn bậc hai được bất đẳng thức khoảng cách.`),
      b(String.raw`For $z=x_t-\eta g_t$, expand $\|z-x^*\|^2=\|x_t-x^*\|^2-2\eta g_t^T(x_t-x^*)+\eta^2\|g_t\|^2$.`, String.raw`Với $z=x_t-\eta g_t$, khai triển $\|z-x^*\|^2=\|x_t-x^*\|^2-2\eta g_t^T(x_t-x^*)+\eta^2\|g_t\|^2$.`),
    ],
    primarySolution: [
      b(String.raw`Let $p=\Pi_C(z)$. The variational inequality gives $(z-p)^T(x^*-p)\le0$, so $(z-p)^T(p-x^*)\ge0$.`, String.raw`Đặt $p=\Pi_C(z)$. Bất đẳng thức biến phân cho $(z-p)^T(x^*-p)\le0$, nên $(z-p)^T(p-x^*)\ge0$.`),
      b(String.raw`Expand $\|z-x^*\|^2=\|z-p\|^2+\|p-x^*\|^2+2(z-p)^T(p-x^*)$. Since the first and cross terms are nonnegative, $\|p-x^*\|^2\le\|z-x^*\|^2$.`, String.raw`Khai triển $\|z-x^*\|^2=\|z-p\|^2+\|p-x^*\|^2+2(z-p)^T(p-x^*)$. Vì số hạng thứ nhất và số hạng chéo không âm, $\|p-x^*\|^2\le\|z-x^*\|^2$.`),
      b(String.raw`For $z=x_t-\eta g_t$, expand the right side as $\|x_t-x^*\|^2-2\eta g_t^T(x_t-x^*)+\eta^2\|g_t\|^2$.`, String.raw`Với $z=x_t-\eta g_t$, khai triển vế phải thành $\|x_t-x^*\|^2-2\eta g_t^T(x_t-x^*)+\eta^2\|g_t\|^2$.`),
      b(String.raw`The comparator must lie in $C$ for the projection variational inequality to apply; this is why the condition $x^*\in C$ is required.`, String.raw`Điểm đối chiếu phải thuộc $C$ để áp dụng bất đẳng thức biến phân của phép chiếu; vì vậy cần điều kiện $x^*\in C$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $C=[0,2]$, $z=-1$, and feasible comparator $x^*=1$, compute $p=\Pi_C(z)$ and verify the projection distance inequality and variational inequality.`, String.raw`Với $C=[0,2]$, $z=-1$ và điểm đối chiếu khả thi $x^*=1$, hãy tính $p=\Pi_C(z)$ rồi kiểm tra bất đẳng thức khoảng cách và bất đẳng thức biến phân.`),
        solution: [
          b(String.raw`The projection is the nearest feasible point, $p=0$.`, String.raw`Phép chiếu là điểm khả thi gần nhất, $p=0$.`),
          b(String.raw`The variational product is $(z-p)(x^*-p)=(-1-0)(1-0)=-1\le0$.`, String.raw`Tích biến phân là $(z-p)(x^*-p)=(-1-0)(1-0)=-1\le0$.`),
          b(String.raw`The distances are $|p-x^*|=1$ and $|z-x^*|=2$, so $1\le2$ as required.`, String.raw`Khoảng cách là $|p-x^*|=1$ và $|z-x^*|=2$, nên $1\le2$ như yêu cầu.`),
        ],
      },
      {
        prompt: b(String.raw`Assume $x_{t+1}=\Pi_C(x_t-\eta g_t)$, $x^*\in C$, $\|x_t-x^*\|\le D$, and $\|g_t\|\le G$. Sum the one-step inequality to bound $\sum_{t=1}^T g_t^T(x_t-x^*)$.`, String.raw`Giả sử $x_{t+1}=\Pi_C(x_t-\eta g_t)$, $x^*\in C$, $\|x_t-x^*\|\le D$ và $\|g_t\|\le G$. Hãy cộng bất đẳng thức một bước để chặn $\sum_{t=1}^T g_t^T(x_t-x^*)$.`),
        solution: [
          b(String.raw`Projection nonexpansiveness gives $\|x_{t+1}-x^*\|^2\le\|x_t-x^*\|^2-2\eta g_t^T(x_t-x^*)+\eta^2G^2$.`, String.raw`Tính không giãn của phép chiếu cho $\|x_{t+1}-x^*\|^2\le\|x_t-x^*\|^2-2\eta g_t^T(x_t-x^*)+\eta^2G^2$.`),
          b(String.raw`Rearrange and sum over $t$: $2\eta\sum_tg_t^T(x_t-x^*)\le\|x_1-x^*\|^2-\|x_{T+1}-x^*\|^2+\eta^2G^2T$.`, String.raw`Sắp xếp lại rồi cộng theo $t$: $2\eta\sum_tg_t^T(x_t-x^*)\le\|x_1-x^*\|^2-\|x_{T+1}-x^*\|^2+\eta^2G^2T$.`),
          b(String.raw`Drop the nonpositive final-distance term and use $\|x_1-x^*\|\le D$. Dividing by $2\eta>0$ gives $\sum_tg_t^T(x_t-x^*)\le D^2/(2\eta)+\eta G^2T/2$.`, String.raw`Bỏ số hạng khoảng cách cuối không dương và dùng $\|x_1-x^*\|\le D$. Chia cho $2\eta>0$ được $\sum_tg_t^T(x_t-x^*)\le D^2/(2\eta)+\eta G^2T/2$.`),
        ],
      },
      {
        prompt: b(String.raw`Show that the projection distance inequality can fail if the comparator is outside the set: take $C=[0,1]$, $z=2$, and $x^*=2$.`, String.raw`Hãy chỉ ra bất đẳng thức khoảng cách của phép chiếu có thể thất bại nếu điểm đối chiếu ở ngoài tập: lấy $C=[0,1]$, $z=2$ và $x^*=2$.`),
        solution: [
          b(String.raw`The projection of $z=2$ onto $[0,1]$ is $p=1$.`, String.raw`Phép chiếu của $z=2$ lên $[0,1]$ là $p=1$.`),
          b(String.raw`The projected distance to the proposed comparator is $|p-x^*|=|1-2|=1$, while the original distance is $|z-x^*|=|2-2|=0$.`, String.raw`Khoảng cách sau chiếu tới điểm đối chiếu là $|p-x^*|=|1-2|=1$, còn khoảng cách ban đầu là $|z-x^*|=|2-2|=0$.`),
          b(String.raw`Thus $1\le0$ is false. The theorem requires $x^*\in C$, and here that hypothesis fails.`, String.raw`Vậy $1\le0$ là sai. Định lý yêu cầu $x^*\in C$, nhưng giả thiết đó thất bại ở đây.`),
        ],
      },
    ],
    reviewNote: 'Checked the projection VI sign, expansion cross-term sign, telescoping distance terms, and the comparator membership restriction. Restriction: the comparator must belong to the closed convex set C.',
    sourceIds: ['o-hazan'],
  },
  'm2-w068-e3': {
    application: b(String.raw`A projected stochastic update first moves along a sampled gradient and then clips the tentative point back to the feasible interval. Tracking squared distance to a chosen comparator reveals the realized potential change.`, String.raw`Bước cập nhật ngẫu nhiên có chiếu trước hết đi theo gradient lấy mẫu rồi chặn điểm tạm thời về khoảng khả thi. Theo dõi bình phương khoảng cách tới điểm đối chiếu cho thấy mức thay đổi thế năng thực tế.`),
    formula: b(String.raw`For $C=[0,2]$, $x_{t+1}=\Pi_C(x_t-\eta g_t)=\min\{2,\max\{0,x_t-\eta g_t\}\}$. The potential to comparator $x^*$ is $V_t=(x_t-x^*)^2$.`, String.raw`Với $C=[0,2]$, $x_{t+1}=\Pi_C(x_t-\eta g_t)=\min\{2,\max\{0,x_t-\eta g_t\}\}$. Thế năng tới điểm đối chiếu $x^*$ là $V_t=(x_t-x^*)^2$.`),
    steps: [
      b(String.raw`Compute the tentative update $z=x_1-\eta g_1=1.8-0.4(3)=0.6$.`, String.raw`Tính bước tạm thời $z=x_1-\eta g_1=1.8-0.4(3)=0.6$.`),
      b(String.raw`Since $0.6\in[0,2]$, projection leaves it unchanged: $x_2=0.6$.`, String.raw`Vì $0.6\in[0,2]$, phép chiếu giữ nguyên: $x_2=0.6$.`),
      b(String.raw`The initial potential is $V_1=(1.8-0.5)^2=1.69$ and the next is $V_2=(0.6-0.5)^2=0.01$, a decrease of $1.68$.`, String.raw`Thế năng ban đầu là $V_1=(1.8-0.5)^2=1.69$ và bước sau là $V_2=(0.6-0.5)^2=0.01$, giảm $1.68$.`),
      b(String.raw`The unprojected expansion gives $1.69-2(0.4)(3)(1.3)+(0.4)^2(3)^2=0.01$, agreeing because the tentative point was feasible.`, String.raw`Khai triển chưa chiếu cho $1.69-2(0.4)(3)(1.3)+(0.4)^2(3)^2=0.01$, trùng kết quả vì điểm tạm thời khả thi.`),
    ],
    primarySolution: [
      b(String.raw`The tentative point is $1.8-0.4(3)=0.6$, which already lies in $[0,2]$, so $x_2=0.6$.`, String.raw`Điểm tạm thời là $1.8-0.4(3)=0.6$, đã nằm trong $[0,2]$, nên $x_2=0.6$.`),
      b(String.raw`Before the step, squared distance to $x^*=0.5$ is $(1.8-0.5)^2=1.69$. Afterward it is $(0.6-0.5)^2=0.01$, a decrease of $1.68$.`, String.raw`Trước bước này, bình phương khoảng cách tới $x^*=0.5$ là $(1.8-0.5)^2=1.69$. Sau bước là $(0.6-0.5)^2=0.01$, giảm $1.68$.`),
      b(String.raw`The unprojected identity gives $1.69-2(0.4)(3)(1.3)+(0.4)^2(9)=0.01$. Projection does not alter this step because the tentative point is feasible.`, String.raw`Đẳng thức chưa chiếu cho $1.69-2(0.4)(3)(1.3)+(0.4)^2(9)=0.01$. Phép chiếu không đổi bước vì điểm tạm thời khả thi.`),
    ],
    companions: [
      {
        prompt: b(String.raw`On $C=[-1,1]$, let $x_t=0.5$, $\eta=0.25$, and sampled gradient $g_t=-4$. Compute the projected update and squared-distance potential to comparator $x^*=0$.`, String.raw`Trên $C=[-1,1]$, cho $x_t=0.5$, $\eta=0.25$ và gradient lấy mẫu $g_t=-4$. Hãy tính bước có chiếu và thế năng bình phương khoảng cách tới $x^*=0$.`),
        solution: [
          b(String.raw`The tentative point is $z=0.5-0.25(-4)=1.5$.`, String.raw`Điểm tạm thời là $z=0.5-0.25(-4)=1.5$.`),
          b(String.raw`Projecting onto $[-1,1]$ clips it to $x_{t+1}=1$.`, String.raw`Chiếu lên $[-1,1]$ chặn nó tại $x_{t+1}=1$.`),
          b(String.raw`The potential changes from $(0.5-0)^2=0.25$ to $(1-0)^2=1$. It increases by $0.75$ because this sampled direction points away from the comparator, despite feasibility being restored.`, String.raw`Thế năng đổi từ $(0.5-0)^2=0.25$ thành $(1-0)^2=1$. Nó tăng $0.75$ vì hướng lấy mẫu đi xa điểm đối chiếu, dù tính khả thi được khôi phục.`),
        ],
      },
      {
        prompt: b(String.raw`On $C=[0,1]$, let $x_t=0.2$, $\eta=0.5$, and $g_t=1$. Compute the tentative point, projection, and potential to $x^*=0$.`, String.raw`Trên $C=[0,1]$, cho $x_t=0.2$, $\eta=0.5$ và $g_t=1$. Hãy tính điểm tạm thời, phép chiếu và thế năng tới $x^*=0$.`),
        solution: [
          b(String.raw`The tentative point is $z=0.2-0.5(1)=-0.3$.`, String.raw`Điểm tạm thời là $z=0.2-0.5(1)=-0.3$.`),
          b(String.raw`Projection onto $[0,1]$ gives $x_{t+1}=0$.`, String.raw`Phép chiếu lên $[0,1]$ cho $x_{t+1}=0$.`),
          b(String.raw`The potential falls from $(0.2-0)^2=0.04$ to zero. The projected boundary step exactly reaches the comparator.`, String.raw`Thế năng giảm từ $(0.2-0)^2=0.04$ về không. Bước biên sau chiếu đi đúng tới điểm đối chiếu.`),
        ],
      },
      {
        prompt: b(String.raw`On $C=[0,2]$, let $x_t=-1$ be an infeasible point, $\eta=0.5$, and $g_t=1$. Compute the projected update and explain why the algorithm's usual invariant has already been violated at the start.`, String.raw`Trên $C=[0,2]$, cho $x_t=-1$ là điểm không khả thi, $\eta=0.5$ và $g_t=1$. Hãy tính bước có chiếu và giải thích vì sao bất biến thông thường của thuật toán đã bị vi phạm ngay từ đầu.`),
        solution: [
          b(String.raw`The tentative point is $z=-1-0.5=-1.5$, and projection onto $[0,2]$ gives $x_{t+1}=0$.`, String.raw`Điểm tạm thời là $z=-1-0.5=-1.5$, còn phép chiếu lên $[0,2]$ cho $x_{t+1}=0$.`),
          b(String.raw`The update restores feasibility, but the state $x_t=-1$ was outside $C$ before the step.`, String.raw`Bước cập nhật khôi phục tính khả thi, nhưng trạng thái $x_t=-1$ đã ở ngoài $C$ trước bước đó.`),
          b(String.raw`Standard projected-SGD guarantees assume the initial point and every iterate lie in $C$. Starting outside invalidates the bounded-distance and conditional-gradient assumptions until feasibility is established.`, String.raw`Bảo đảm projected-SGD tiêu chuẩn giả sử điểm đầu và mọi điểm lặp đều nằm trong $C$. Bắt đầu ở ngoài làm mất giả thiết khoảng cách bị chặn và gradient có điều kiện cho tới khi tính khả thi được thiết lập.`),
        ],
      },
    ],
    reviewNote: 'Checked tentative update 0.6 remains feasible, the potential values 1.69 and 0.01, and the unprojected identity. Restriction: the primary calculation is one realized step; it is not an expected-regret guarantee.',
    sourceIds: ['o-hazan'],
  },
  'm2-w068-e4': {
    application: b(String.raw`A biased gradient oracle can systematically steer projected SGD away from the true gradient. If the bias is bounded and iterates remain within the feasible diameter, its worst-case contribution accumulates linearly over the horizon.`, String.raw`Oracle gradient lệch có thể đẩy projected SGD đi chệch có hệ thống khỏi gradient thật. Nếu độ lệch bị chặn và các điểm lặp nằm trong đường kính khả thi, đóng góp xấu nhất tích lũy tuyến tính theo số vòng.`),
    formula: b(String.raw`Under the projected-SGD assumptions that $f$ is convex on a closed convex $C$, $x_{t+1}=\Pi_C(x_t-\eta g_t)$, $x^*\in C$, $\eta>0$, $\|x_t-x^*\|\le D$, and $\mathbb E[\|g_t\|^2\mid\mathcal F_t]\le G^2$, suppose $x_t$ is $\mathcal F_t$-measurable and $\mathbb E[g_t\mid\mathcal F_t]=\nabla f(x_t)+b_t$ with $\|b_t\|\le\beta$. Then expected cumulative excess is at most $D^2/(2\eta)+\eta G^2T/2+\beta DT$; the average bound adds $\beta D$.`, String.raw`Theo các giả thiết của projected-SGD: $f$ lồi trên tập lồi đóng $C$, $x_{t+1}=\Pi_C(x_t-\eta g_t)$, $x^*\in C$, $\eta>0$, $\|x_t-x^*\|\le D$ và $\mathbb E[\|g_t\|^2\mid\mathcal F_t]\le G^2$, giả sử $x_t$ đo được theo $\mathcal F_t$ và $\mathbb E[g_t\mid\mathcal F_t]=\nabla f(x_t)+b_t$ với $\|b_t\|\le\beta$. Khi đó mức vượt trội tích lũy kỳ vọng không quá $D^2/(2\eta)+\eta G^2T/2+\beta DT$; cận trung bình tăng thêm $\beta D$.`),
    steps: [
      b(String.raw`Let $d_t=x_t-x^*$. Convexity gives $f(x_t)-f(x^*)\le\nabla f(x_t)^Td_t$.`, String.raw`Đặt $d_t=x_t-x^*$. Tính lồi cho $f(x_t)-f(x^*)\le\nabla f(x_t)^Td_t$.`),
      b(String.raw`Use $\nabla f(x_t)=\mathbb E[g_t\mid\mathcal F_t]-b_t$ to write the upper bound as $\mathbb E[g_t^Td_t\mid\mathcal F_t]-b_t^Td_t$.`, String.raw`Dùng $\nabla f(x_t)=\mathbb E[g_t\mid\mathcal F_t]-b_t$ để viết cận trên thành $\mathbb E[g_t^Td_t\mid\mathcal F_t]-b_t^Td_t$.`),
      b(String.raw`By Cauchy–Schwarz, $-b_t^Td_t\le\|b_t\|\|d_t\|\le\beta D$. Thus each round adds at most $\beta D$ beyond the projected-gradient term.`, String.raw`Theo Cauchy–Schwarz, $-b_t^Td_t\le\|b_t\|\|d_t\|\le\beta D$. Vì vậy mỗi vòng tăng nhiều nhất $\beta D$ ngoài số hạng gradient có chiếu.`),
      b(String.raw`Summing and using the usual potential bound gives $D^2/(2\eta)+\eta G^2T/2+\beta DT$. Dividing by $T$ yields an additional average term $\beta D$.`, String.raw`Cộng theo thời gian và dùng cận thế năng thông thường được $D^2/(2\eta)+\eta G^2T/2+\beta DT$. Chia cho $T$ cho số hạng trung bình bổ sung $\beta D$.`),
    ],
    primarySolution: [
      b(String.raw`Set $d_t=x_t-x^*$. Convexity gives $f(x_t)-f(x^*)\le\nabla f(x_t)^Td_t$.`, String.raw`Đặt $d_t=x_t-x^*$. Tính lồi cho $f(x_t)-f(x^*)\le\nabla f(x_t)^Td_t$.`),
      b(String.raw`Since $\mathbb E[g_t\mid\mathcal F_t]=\nabla f(x_t)+b_t$, we have $\nabla f(x_t)^Td_t=\mathbb E[g_t^Td_t\mid\mathcal F_t]-b_t^Td_t\le\mathbb E[g_t^Td_t\mid\mathcal F_t]+\beta D$.`, String.raw`Vì $\mathbb E[g_t\mid\mathcal F_t]=\nabla f(x_t)+b_t$, ta có $\nabla f(x_t)^Td_t=\mathbb E[g_t^Td_t\mid\mathcal F_t]-b_t^Td_t\le\mathbb E[g_t^Td_t\mid\mathcal F_t]+\beta D$.`),
      b(String.raw`Summing the expected gradient inner products via the projection potential inequality gives $D^2/(2\eta)+\eta G^2T/2$. Adding the per-round bias term yields cumulative excess at most $D^2/(2\eta)+\eta G^2T/2+\beta DT$.`, String.raw`Cộng các tích vô hướng gradient kỳ vọng qua bất đẳng thức thế năng phép chiếu cho $D^2/(2\eta)+\eta G^2T/2$. Cộng số hạng lệch từng vòng được excess tích lũy không quá $D^2/(2\eta)+\eta G^2T/2+\beta DT$.`),
      b(String.raw`After dividing by $T$, the extra average term is $\beta D$. If $\beta=0$, the unbiased bound is recovered.`, String.raw`Sau khi chia cho $T$, số hạng trung bình bổ sung là $\beta D$. Nếu $\beta=0$, ta thu lại cận không chệch.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Suppose the usual cumulative bound is $D^2/(2\eta)+\eta G^2T/2=20$, and the oracle bias satisfies $\beta=0.1$, $D=2$, $T=10$. Compute the biased total and average bounds.`, String.raw`Giả sử cận tích lũy thông thường là $D^2/(2\eta)+\eta G^2T/2=20$, oracle lệch có $\beta=0.1$, $D=2$, $T=10$. Hãy tính cận tổng và trung bình có độ lệch.`),
        solution: [
          b(String.raw`The additional cumulative bias term is $\beta DT=0.1\cdot2\cdot10=2$.`, String.raw`Số hạng lệch tích lũy bổ sung là $\beta DT=0.1\cdot2\cdot10=2$.`),
          b(String.raw`The total bound is $20+2=22$.`, String.raw`Cận tổng là $20+2=22$.`),
          b(String.raw`Dividing by $T=10$ gives average excess bound $2.2$; the extra average amount is $\beta D=0.2$.`, String.raw`Chia cho $T=10$ được cận excess trung bình $2.2$; phần trung bình bổ sung là $\beta D=0.2$.`),
        ],
      },
      {
        prompt: b(String.raw`For a fixed displacement $d=(3,4)$ and bias norm bound $\|b\|\le0.2$, find the largest possible value of the bias contribution $-b^Td$.`, String.raw`Với độ dời cố định $d=(3,4)$ và cận chuẩn độ lệch $\|b\|\le0.2$, hãy tìm giá trị lớn nhất có thể của đóng góp độ lệch $-b^Td$.`),
        solution: [
          b(String.raw`Cauchy–Schwarz gives $-b^Td\le\|b\|\|d\|\le0.2\sqrt{3^2+4^2}$.`, String.raw`Cauchy–Schwarz cho $-b^Td\le\|b\|\|d\|\le0.2\sqrt{3^2+4^2}$.`),
          b(String.raw`Since $\|d\|=5$, the upper bound is $0.2\cdot5=1$.`, String.raw`Vì $\|d\|=5$, cận trên là $0.2\cdot5=1$.`),
          b(String.raw`It is attained by $b=-0.2d/\|d\|=(-0.12,-0.16)$, for which $-b^Td=1$. Thus the worst-case one-step bias term is exactly $\beta D$.`, String.raw`Cận đạt được tại $b=-0.2d/\|d\|=(-0.12,-0.16)$, khi đó $-b^Td=1$. Vì vậy số hạng lệch một bước xấu nhất đúng bằng $\beta D$.`),
        ],
      },
      {
        prompt: b(String.raw`If the stochastic gradients are conditionally unbiased ($\beta=0$), write the cumulative bound and average excess bound after applying the potential argument.`, String.raw`Nếu gradient ngẫu nhiên không chệch có điều kiện ($\beta=0$), hãy viết cận tích lũy và cận excess trung bình sau khi áp dụng lập luận thế năng.`),
        solution: [
          b(String.raw`With $\beta=0$, the bias contribution $\beta DT$ vanishes.`, String.raw`Với $\beta=0$, đóng góp độ lệch $\beta DT$ triệt tiêu.`),
          b(String.raw`The cumulative excess bound is $D^2/(2\eta)+\eta G^2T/2$.`, String.raw`Cận excess tích lũy là $D^2/(2\eta)+\eta G^2T/2$.`),
          b(String.raw`Dividing by $T$ gives average excess bound $D^2/(2\eta T)+\eta G^2/2$.`, String.raw`Chia cho $T$ được cận excess trung bình $D^2/(2\eta T)+\eta G^2/2$.`),
        ],
      },
    ],
    reviewNote: 'Checked the sign in grad=E[g|F]−b, the Cauchy–Schwarz bound βD, and the cumulative/average factors T. Restriction: the claim requires bounded bias, bounded comparator distance, and the stated conditional second-moment bound.',
    sourceIds: ['o-hazan'],
  },
  'm2-w068-e5': {
    application: b(String.raw`An oracle may be unbiased yet produce rare, extremely large gradients. A uniform second-moment bound controls how much those rare updates can inflate the expected squared step and is separate from the unbiasedness condition.`, String.raw`Oracle có thể không chệch nhưng thỉnh thoảng tạo gradient rất lớn. Cận moment bậc hai đồng đều kiểm soát mức các bước hiếm đó làm tăng bình phương bước kỳ vọng, tách biệt với điều kiện không chệch.`),
    formula: b(String.raw`An unbiased oracle satisfies $\mathbb E[g\mid\mathcal F]=\nabla f(x)$; the projected-SGD bound also assumes $\mathbb E[\|g\|^2\mid\mathcal F]\le G^2$ uniformly. Unbiasedness alone does not imply a finite uniform $G$.`, String.raw`Oracle không chệch thỏa $\mathbb E[g\mid\mathcal F]=\nabla f(x)$; cận projected-SGD còn giả sử $\mathbb E[\|g\|^2\mid\mathcal F]\le G^2$ đồng đều. Riêng tính không chệch không suy ra có $G$ hữu hạn đồng đều.`),
    steps: [
      b(String.raw`At $x_1=1$, the true derivative of $f(x)=x$ is $f'(1)=1$.`, String.raw`Tại $x_1=1$, đạo hàm thật của $f(x)=x$ là $f'(1)=1$.`),
      b(String.raw`The oracle mean is $\mathbb E[g_1]=M(1/M)+0(1-1/M)=1$, so it is unbiased.`, String.raw`Kỳ vọng oracle là $\mathbb E[g_1]=M(1/M)+0(1-1/M)=1$, nên oracle không chệch.`),
      b(String.raw`Its second moment is $\mathbb E[g_1^2]=M^2(1/M)=M$. As $M\to\infty$, no fixed finite uniform upper bound remains.`, String.raw`Moment bậc hai là $\mathbb E[g_1^2]=M^2(1/M)=M$. Khi $M\to\infty$, không còn cận trên hữu hạn đồng đều cố định.`),
      b(String.raw`Thus an SGD guarantee using a fixed $G^2$ does not apply uniformly over this family, even though each individual oracle is unbiased.`, String.raw`Vì vậy bảo đảm SGD dùng $G^2$ cố định không áp dụng đồng đều cho họ oracle này, dù từng oracle riêng đều không chệch.`),
    ],
    primarySolution: [
      b(String.raw`The true gradient is $f'(1)=1$. Since $g_1=M$ with probability $1/M$ and zero otherwise, $\mathbb E[g_1]=M(1/M)=1$, so the oracle is unbiased.`, String.raw`Gradient thật là $f'(1)=1$. Vì $g_1=M$ với xác suất $1/M$ và bằng không nếu không, $\mathbb E[g_1]=M(1/M)=1$, nên oracle không chệch.`),
      b(String.raw`The second moment is $\mathbb E[g_1^2]=M^2(1/M)=M$.`, String.raw`Moment bậc hai là $\mathbb E[g_1^2]=M^2(1/M)=M$.`),
      b(String.raw`As $M$ grows, this moment has no fixed finite uniform upper bound. The required $G^2$ must scale with $M$, so unbiasedness alone cannot support the advertised uniform regret bound.`, String.raw`Khi $M$ tăng, moment này không có cận trên hữu hạn đồng đều cố định. $G^2$ cần thiết phải tăng theo $M$, nên riêng tính không chệch không đủ cho cận regret đồng đều đã nêu.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $M=100$, let an oracle output $100$ with probability $0.01$ and zero otherwise. Compute its mean and second moment and identify the corresponding gradient norm bound.`, String.raw`Với $M=100$, cho oracle trả về $100$ với xác suất $0.01$ và bằng không nếu không. Hãy tính kỳ vọng, moment bậc hai và cận chuẩn gradient tương ứng.`),
        solution: [
          b(String.raw`The mean is $100(0.01)=1$, so it is unbiased for a true gradient equal to $1$.`, String.raw`Kỳ vọng là $100(0.01)=1$, nên không chệch với gradient thật bằng $1$.`),
          b(String.raw`The second moment is $100^2(0.01)=100$.`, String.raw`Moment bậc hai là $100^2(0.01)=100$.`),
          b(String.raw`A bound $\mathbb E[g^2]\le G^2$ therefore needs $G^2\ge100$, or $G\ge10$.`, String.raw`Cận $\mathbb E[g^2]\le G^2$ vì vậy cần $G^2\ge100$, hay $G\ge10$.`),
        ],
      },
      {
        prompt: b(String.raw`Let an oracle return $2$ or $0$, each with probability $1/2$, for a true gradient of $1$. Check unbiasedness and the second-moment bound.`, String.raw`Cho oracle trả về $2$ hoặc $0$, mỗi giá trị với xác suất $1/2$, khi gradient thật bằng $1$. Hãy kiểm tra tính không chệch và cận moment bậc hai.`),
        solution: [
          b(String.raw`The expectation is $(2+0)/2=1$, equal to the true gradient.`, String.raw`Kỳ vọng là $(2+0)/2=1$, bằng gradient thật.`),
          b(String.raw`The second moment is $(2^2+0^2)/2=2$. Thus $G=\sqrt2$ is a valid second-moment bound for this oracle.`, String.raw`Moment bậc hai là $(2^2+0^2)/2=2$. Vì thế $G=\sqrt2$ là cận moment bậc hai hợp lệ cho oracle này.`),
          b(String.raw`This distribution is unbiased and has a finite bound; unlike the rare-large family, its second moment is fixed.`, String.raw`Phân phối này không chệch và có cận hữu hạn; khác họ hiếm-nhưng-lớn, moment bậc hai của nó cố định.`),
        ],
      },
      {
        prompt: b(String.raw`Let $g=1+\xi$, where $\xi$ is $a$ or $-a$ with equal probability. Compute the mean and second moment, then determine whether a uniform bound exists as $a$ ranges without bound.`, String.raw`Cho $g=1+\xi$, trong đó $\xi$ bằng $a$ hoặc $-a$ với xác suất bằng nhau. Hãy tính kỳ vọng, moment bậc hai và xét có cận đồng đều khi $a$ không bị chặn không.`),
        solution: [
          b(String.raw`Since $\mathbb E[\xi]=0$, $\mathbb E[g]=1$, so the estimator is unbiased for gradient $1$.`, String.raw`Vì $\mathbb E[\xi]=0$, ta có $\mathbb E[g]=1$, nên ước lượng không chệch cho gradient $1$.`),
          b(String.raw`The second moment is $\mathbb E[(1+\xi)^2]=1+2\mathbb E[\xi]+\mathbb E[\xi^2]=1+a^2$.`, String.raw`Moment bậc hai là $\mathbb E[(1+\xi)^2]=1+2\mathbb E[\xi]+\mathbb E[\xi^2]=1+a^2$.`),
          b(String.raw`As $a\to\infty$, $1+a^2$ diverges, so no fixed finite $G^2$ bounds the whole family even though every member is unbiased.`, String.raw`Khi $a\to\infty$, $1+a^2$ phân kỳ, nên không $G^2$ hữu hạn cố định nào chặn được cả họ dù từng thành viên đều không chệch.`),
        ],
      },
    ],
    reviewNote: 'Checked the Bernoulli mean M·(1/M)=1 and second moment M²·(1/M)=M. Restriction: the failure is uniformity of the second-moment bound as M grows; each fixed M remains finite.',
    sourceIds: ['o-hazan'],
  },
  'm2-w069-e1': {
    application: b(String.raw`The singular spectrum measures how much a least-squares problem stretches different directions. Forming normal equations squares that spread, so the resulting linear system can be substantially more sensitive than the original one.`, String.raw`Phổ kỳ dị đo mức bài toán bình phương tối thiểu kéo giãn các hướng khác nhau. Lập phương trình chuẩn bình phương độ trải đó, khiến hệ tuyến tính thu được có thể nhạy hơn đáng kể so với hệ ban đầu.`),
    formula: b(String.raw`For full-column-rank $A$, $\kappa_2(A)=\sigma_{\max}/\sigma_{\min}$ and $\kappa_2(A^TA)=\kappa_2(A)^2$. Thus the ratio $\kappa_2(A^TA)/\kappa_2(A)=\kappa_2(A)$.`, String.raw`Với $A$ hạng cột đầy đủ, $\kappa_2(A)=\sigma_{\max}/\sigma_{\min}$ và $\kappa_2(A^TA)=\kappa_2(A)^2$. Do đó tỷ số $\kappa_2(A^TA)/\kappa_2(A)=\kappa_2(A)$.`),
    steps: [
      b(String.raw`The largest singular value is $5$ and the smallest is $0.01$, so $\kappa_2(A)=5/0.01=500$.`, String.raw`Trị kỳ dị lớn nhất là $5$ và nhỏ nhất là $0.01$, nên $\kappa_2(A)=5/0.01=500$.`),
      b(String.raw`The normal-equation condition number is the square: $\kappa_2(A^TA)=500^2=250{,}000$.`, String.raw`Số điều kiện của phương trình chuẩn là bình phương: $\kappa_2(A^TA)=500^2=250{,}000$.`),
      b(String.raw`The amplification ratio is $250{,}000/500=500$, equal to $\kappa_2(A)$.`, String.raw`Tỷ số khuếch đại là $250{,}000/500=500$, bằng $\kappa_2(A)$.`),
      b(String.raw`Thus the normal equations square the sensitivity scale; forming them can lose substantially more numerical accuracy.`, String.raw`Vì vậy phương trình chuẩn bình phương thang độ nhạy; việc lập chúng có thể làm mất độ chính xác số đáng kể hơn.`),
    ],
    primarySolution: [
      b(String.raw`Compute $\kappa_2(A)=5/0.01=500$.`, String.raw`Tính $\kappa_2(A)=5/0.01=500$.`),
      b(String.raw`Since singular values of $A^TA$ are eigenvalues $\sigma_i^2$, its condition number is $\kappa_2(A^TA)=500^2=250{,}000$.`, String.raw`Vì các trị kỳ dị của $A^TA$ là trị riêng $\sigma_i^2$, số điều kiện là $\kappa_2(A^TA)=500^2=250{,}000$.`),
      b(String.raw`The ratio is $250{,}000/500=500$, so the normal-equation condition number is $500$ times the original matrix condition number.`, String.raw`Tỷ số là $250{,}000/500=500$, nên số điều kiện phương trình chuẩn lớn gấp $500$ lần số điều kiện ma trận ban đầu.`),
      b(String.raw`This is a squared sensitivity scale, not a statement that every computed answer has exactly $500$ times the error.`, String.raw`Đây là thang độ nhạy bình phương, không có nghĩa mọi nghiệm tính được đều có sai số chính xác gấp $500$ lần.`),
    ],
    companions: [
      {
        prompt: b(String.raw`A full-rank matrix has singular values $8$, $2$, and $0.5$. Compute $\kappa_2(A)$, $\kappa_2(A^TA)$, and their ratio.`, String.raw`Ma trận hạng đầy đủ có các trị kỳ dị $8$, $2$ và $0.5$. Hãy tính $\kappa_2(A)$, $\kappa_2(A^TA)$ và tỷ số của chúng.`),
        solution: [
          b(String.raw`The extreme singular values give $\kappa_2(A)=8/0.5=16$.`, String.raw`Hai trị kỳ dị biên cho $\kappa_2(A)=8/0.5=16$.`),
          b(String.raw`The normal-equation value is $\kappa_2(A^TA)=16^2=256$.`, String.raw`Giá trị phương trình chuẩn là $\kappa_2(A^TA)=16^2=256$.`),
          b(String.raw`Their ratio is $256/16=16$, equal to the original condition number.`, String.raw`Tỷ số là $256/16=16$, bằng số điều kiện ban đầu.`),
        ],
      },
      {
        prompt: b(String.raw`If $\kappa_2(A)=10^3$ and $A$ has full column rank, what is $\kappa_2(A^TA)$? By what factor does forming normal equations increase the condition number?`, String.raw`Nếu $\kappa_2(A)=10^3$ và $A$ hạng cột đầy đủ, $\kappa_2(A^TA)$ bằng bao nhiêu? Lập phương trình chuẩn làm tăng số điều kiện theo hệ số nào?`),
        solution: [
          b(String.raw`The singular-value identity gives $\kappa_2(A^TA)=\kappa_2(A)^2=(10^3)^2=10^6$.`, String.raw`Đẳng thức trị kỳ dị cho $\kappa_2(A^TA)=\kappa_2(A)^2=(10^3)^2=10^6$.`),
          b(String.raw`Dividing by the original value gives amplification factor $10^6/10^3=10^3$.`, String.raw`Chia cho giá trị ban đầu được hệ số khuếch đại $10^6/10^3=10^3$.`),
          b(String.raw`Thus the normal equations increase the condition number by a factor of one thousand in this example.`, String.raw`Vì vậy phương trình chuẩn làm số điều kiện tăng một nghìn lần trong ví dụ này.`),
        ],
      },
      {
        prompt: b(String.raw`For the full-rank diagonal matrix $A=\operatorname{diag}(2,0.5)$, compute the 2-norm condition numbers of $A$ and $A^TA$.`, String.raw`Với ma trận đường chéo hạng đầy đủ $A=\operatorname{diag}(2,0.5)$, hãy tính số điều kiện chuẩn 2 của $A$ và $A^TA$.`),
        solution: [
          b(String.raw`The singular values of this positive diagonal matrix are $2$ and $0.5$, so $\kappa_2(A)=2/0.5=4$.`, String.raw`Các trị kỳ dị của ma trận đường chéo dương này là $2$ và $0.5$, nên $\kappa_2(A)=2/0.5=4$.`),
          b(String.raw`Then $A^TA=\operatorname{diag}(4,0.25)$, whose singular-value ratio is $4/0.25=16$.`, String.raw`Khi đó $A^TA=\operatorname{diag}(4,0.25)$, có tỷ số trị kỳ dị $4/0.25=16$.`),
          b(String.raw`The result agrees with $\kappa_2(A)^2=4^2=16$.`, String.raw`Kết quả khớp $\kappa_2(A)^2=4^2=16$.`),
        ],
      },
    ],
    reviewNote: 'Checked σmax/σmin=500, the squared value 250,000, and the amplification ratio 500. Restriction: A must have full column rank; otherwise σmin=0 and AᵀA is singular.',
    sourceIds: ['o-boyd'],
  },
  'm2-w069-e2': {
    application: b(String.raw`The SVD reveals how the normal-equation matrix changes each singular direction: it squares every singular value. Full column rank is the condition that keeps all these squared values positive and the least-squares system nonsingular.`, String.raw`SVD cho thấy ma trận phương trình chuẩn biến đổi từng hướng kỳ dị thế nào: nó bình phương mọi trị kỳ dị. Hạng cột đầy đủ bảo đảm các bình phương đều dương và hệ bình phương tối thiểu không suy biến.`),
    formula: b(String.raw`For full-column-rank $A=U\Sigma V^T$, $A^TA=V\Sigma^2V^T$. Its eigenvalues are $\sigma_i^2>0$, hence $\kappa_2(A^TA)=\sigma_{\max}^2/\sigma_{\min}^2=\kappa_2(A)^2$.`, String.raw`Với $A=U\Sigma V^T$ hạng cột đầy đủ, $A^TA=V\Sigma^2V^T$. Các trị riêng là $\sigma_i^2>0$, nên $\kappa_2(A^TA)=\sigma_{\max}^2/\sigma_{\min}^2=\kappa_2(A)^2$.`),
    steps: [
      b(String.raw`Write a thin SVD $A=U\Sigma V^T$, where $U^TU=I$ and the diagonal entries of $\Sigma$ are the positive singular values.`, String.raw`Viết SVD mỏng $A=U\Sigma V^T$, với $U^TU=I$ và các phần tử đường chéo của $\Sigma$ là trị kỳ dị dương.`),
      b(String.raw`Multiply to obtain $A^TA=V\Sigma^TU^TU\Sigma V^T=V\Sigma^2V^T$.`, String.raw`Nhân ma trận được $A^TA=V\Sigma^TU^TU\Sigma V^T=V\Sigma^2V^T$.`),
      b(String.raw`The eigenvalues of $A^TA$ are the squared singular values, with largest $\sigma_{\max}^2$ and smallest $\sigma_{\min}^2$.`, String.raw`Các trị riêng của $A^TA$ là bình phương trị kỳ dị, lớn nhất $\sigma_{\max}^2$ và nhỏ nhất $\sigma_{\min}^2$.`),
      b(String.raw`Full column rank guarantees $\sigma_{\min}>0$. Taking the ratio gives $\kappa_2(A^TA)=(\sigma_{\max}/\sigma_{\min})^2=\kappa_2(A)^2$.`, String.raw`Hạng cột đầy đủ bảo đảm $\sigma_{\min}>0$. Lấy tỷ số được $\kappa_2(A^TA)=(\sigma_{\max}/\sigma_{\min})^2=\kappa_2(A)^2$.`),
    ],
    primarySolution: [
      b(String.raw`Let $A=U\Sigma V^T$ be a thin SVD. Then $A^TA=V\Sigma^TU^TU\Sigma V^T=V\Sigma^2V^T$.`, String.raw`Cho $A=U\Sigma V^T$ là SVD mỏng. Khi đó $A^TA=V\Sigma^TU^TU\Sigma V^T=V\Sigma^2V^T$.`),
      b(String.raw`The eigenvalues of $A^TA$ are $\sigma_i^2$, so the largest and smallest are $\sigma_{\max}^2$ and $\sigma_{\min}^2$.`, String.raw`Các trị riêng của $A^TA$ là $\sigma_i^2$, nên giá trị lớn nhất và nhỏ nhất là $\sigma_{\max}^2$ và $\sigma_{\min}^2$.`),
      b(String.raw`Full column rank is needed for $\sigma_{\min}>0$. It yields $\kappa_2(A^TA)=\sigma_{\max}^2/\sigma_{\min}^2=\kappa_2(A)^2$.`, String.raw`Cần hạng cột đầy đủ để $\sigma_{\min}>0$. Khi đó $\kappa_2(A^TA)=\sigma_{\max}^2/\sigma_{\min}^2=\kappa_2(A)^2$.`),
      b(String.raw`If $A$ is rank deficient, $A^TA$ has a zero eigenvalue and its 2-norm condition number is infinite.`, String.raw`Nếu $A$ thiếu hạng, $A^TA$ có trị riêng không và số điều kiện chuẩn 2 là vô hạn.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Suppose a full-column-rank matrix has singular values $6$, $2$, and $0.5$. List the eigenvalues of $A^TA$ and compute its condition number.`, String.raw`Giả sử ma trận hạng cột đầy đủ có các trị kỳ dị $6$, $2$ và $0.5$. Hãy liệt kê trị riêng của $A^TA$ và tính số điều kiện.`),
        solution: [
          b(String.raw`The eigenvalues of $A^TA$ are the squares: $36$, $4$, and $0.25$.`, String.raw`Các trị riêng của $A^TA$ là bình phương: $36$, $4$ và $0.25$.`),
          b(String.raw`The largest-to-smallest ratio is $36/0.25=144$.`, String.raw`Tỷ số lớn nhất/trong nhỏ nhất là $36/0.25=144$.`),
          b(String.raw`The original condition number is $6/0.5=12$, and $12^2=144$, confirming the identity.`, String.raw`Số điều kiện ban đầu là $6/0.5=12$, và $12^2=144$, xác nhận đẳng thức.`),
        ],
      },
      {
        prompt: b(String.raw`Let $A=\begin{pmatrix}1&0\\0&0\\0&1\end{pmatrix}$. Determine its rank, whether $A^TA$ is invertible, and the condition number of $A^TA$.`, String.raw`Cho $A=\begin{pmatrix}1&0\\0&0\\0&1\end{pmatrix}$. Hãy xác định hạng, xét $A^TA$ khả nghịch không và tìm số điều kiện của $A^TA$.`),
        solution: [
          b(String.raw`The two columns are orthonormal nonzero vectors, so $A$ has full column rank $2$.`, String.raw`Hai cột là các vectơ trực chuẩn khác không, nên $A$ có hạng cột đầy đủ $2$.`),
          b(String.raw`Their Gram matrix is $A^TA=I_2$, which is invertible with eigenvalues $1,1$.`, String.raw`Ma trận Gram của chúng là $A^TA=I_2$, khả nghịch với hai trị riêng $1,1$.`),
          b(String.raw`Thus $\kappa_2(A^TA)=1$. This example checks the full-rank case even though $A$ is rectangular.`, String.raw`Vì vậy $\kappa_2(A^TA)=1$. Ví dụ này kiểm tra trường hợp đủ hạng dù $A$ là ma trận chữ nhật.`),
        ],
      },
      {
        prompt: b(String.raw`If $A$ is rank deficient, explain what happens to $\sigma_{\min}$, $A^TA$, and $\kappa_2(A^TA)$, and why the squared identity is interpreted as infinite conditioning.`, String.raw`Nếu $A$ thiếu hạng, hãy giải thích điều gì xảy ra với $\sigma_{\min}$, $A^TA$ và $\kappa_2(A^TA)$, đồng thời nêu vì sao đẳng thức bình phương được hiểu là điều kiện vô hạn.`),
        solution: [
          b(String.raw`Rank deficiency means at least one column-direction singular value is zero, so $\sigma_{\min}=0$.`, String.raw`Thiếu hạng nghĩa là có ít nhất một trị kỳ dị theo hướng cột bằng không, nên $\sigma_{\min}=0$.`),
          b(String.raw`Then $A^TA$ has a zero eigenvalue and is singular; its 2-norm condition number is defined as $+\infty$.`, String.raw`Khi đó $A^TA$ có trị riêng không và suy biến; số điều kiện chuẩn 2 được xem là $+\infty$.`),
          b(String.raw`Also $\kappa_2(A)=\sigma_{\max}/0=+\infty$, so the relation $\kappa_2(A^TA)=\kappa_2(A)^2$ is understood in the extended sense as infinite conditioning.`, String.raw`Đồng thời $\kappa_2(A)=\sigma_{\max}/0=+\infty$, nên quan hệ $\kappa_2(A^TA)=\kappa_2(A)^2$ được hiểu theo nghĩa mở rộng là điều kiện vô hạn.`),
        ],
      },
    ],
    reviewNote: 'Checked the thin-SVD multiplication, squared singular spectrum, and the role of σmin>0; rank deficiency makes the normal matrix singular. Restriction: the finite identity requires full column rank; infinity is only the extended-condition interpretation.',
    sourceIds: ['o-boyd'],
  },
  'm2-w069-e3': {
    application: b(String.raw`A small residual is an absolute statement about equation mismatch; forward error is a relative statement about solution parameters. Conditioning connects them only after the residual is normalized and the perturbation model is specified.`, String.raw`Residual nhỏ là phát biểu tuyệt đối về độ lệch phương trình; sai số tiến là phát biểu tương đối về tham số nghiệm. Số điều kiện chỉ nối được chúng sau khi chuẩn hóa residual và xác định mô hình nhiễu.`),
    formula: b(String.raw`For full-column-rank $A$, compatible $b=Ax$ with $b\ne0$, and fixed $A$, let $r=A\hat x-b$ and $\eta_b=\|r\|_2/\|b\|_2$. Then $\|\hat x-x\|_2/\|x\|_2\le\kappa_2(A)\eta_b$; a small forward error requires $\kappa_2(A)\eta_b\ll1$. If $A$ is perturbed in inconsistent least squares, terms involving the nonzero residual enter sensitivity.`, String.raw`Với $A$ hạng cột đầy đủ, $b=Ax$ tương thích, $b\ne0$ và $A$ cố định, đặt $r=A\hat x-b$ và $\eta_b=\|r\|_2/\|b\|_2$. Khi đó $\|\hat x-x\|_2/\|x\|_2\le\kappa_2(A)\eta_b$; sai số tiến nhỏ cần $\kappa_2(A)\eta_b\ll1$. Nếu $A$ bị nhiễu trong bình phương tối thiểu không tương thích, các số hạng chứa residual khác không tham gia vào độ nhạy.`),
    steps: [
      b(String.raw`The given residual $10^{-8}$ is absolute. A relative backward error for a fixed compatible system is $\eta_b=\|A\hat x-b\|_2/\|b\|_2$, so the missing scale $\|b\|_2$ is needed.`, String.raw`Residual đã cho $10^{-8}$ là giá trị tuyệt đối. Sai số lùi tương đối của hệ tương thích với A cố định là $\eta_b=\|A\hat x-b\|_2/\|b\|_2$, nên cần thang $\|b\|_2$ còn thiếu.`),
      b(String.raw`For exact $x=A^\dagger b$ and $r=A(\hat x-x)$, $\|\hat x-x\|_2\le\|A^\dagger\|_2\|r\|_2=\|r\|_2/\sigma_{\min}$.`, String.raw`Với nghiệm chính xác $x=A^\dagger b$ và $r=A(\hat x-x)$, $\|\hat x-x\|_2\le\|A^\dagger\|_2\|r\|_2=\|r\|_2/\sigma_{\min}$.`),
      b(String.raw`Since $\|b\|_2=\|Ax\|_2\le\sigma_{\max}\|x\|_2$, dividing gives $\|\hat x-x\|_2/\|x\|_2\le(\sigma_{\max}/\sigma_{\min})(\|r\|_2/\|b\|_2)=\kappa_2(A)\eta_b$.`, String.raw`Vì $\|b\|_2=\|Ax\|_2\le\sigma_{\max}\|x\|_2$, chia hai vế được $\|\hat x-x\|_2/\|x\|_2\le(\sigma_{\max}/\sigma_{\min})(\|r\|_2/\|b\|_2)=\kappa_2(A)\eta_b$.`),
      b(String.raw`Thus $\kappa_2(A)$ and the absolute residual alone do not determine relative forward error. In inconsistent least squares, perturbing $A$ adds a first-order term involving the nonzero least-squares residual and $(A^TA)^{-1}$, which can introduce $\kappa_2(A)^2$ scaling.`, String.raw`Vì vậy riêng $\kappa_2(A)$ và residual tuyệt đối không xác định sai số tiến tương đối. Trong bình phương tối thiểu không tương thích, nhiễu $A$ thêm số hạng bậc nhất chứa residual bình phương tối thiểu khác không và $(A^TA)^{-1}$, có thể đưa vào hệ số tỷ lệ $\kappa_2(A)^2$.`),
    ],
    primarySolution: [
      b(String.raw`An absolute residual $10^{-8}$ does not determine the relative backward error because $\eta_b=\|A\hat x-b\|_2/\|b\|_2$ also needs $\|b\|_2$.`, String.raw`Residual tuyệt đối $10^{-8}$ không xác định sai số lùi tương đối vì $\eta_b=\|A\hat x-b\|_2/\|b\|_2$ còn cần $\|b\|_2$.`),
      b(String.raw`For a fixed full-rank compatible system, $\hat x-x=A^\dagger(A\hat x-b)$, so $\|\hat x-x\|_2/\|x\|_2\le\kappa_2(A)\eta_b$. This is informative when $\kappa_2(A)\eta_b$ is small.`, String.raw`Với hệ tương thích hạng đầy đủ và A cố định, $\hat x-x=A^\dagger(A\hat x-b)$, nên $\|\hat x-x\|_2/\|x\|_2\le\kappa_2(A)\eta_b$. Cận hữu ích khi $\kappa_2(A)\eta_b$ nhỏ.`),
      b(String.raw`Because $\|b\|_2$ is not supplied, the relative backward error cannot be computed from the stated absolute residual and condition number alone.`, String.raw`Vì chưa cho $\|b\|_2$, không thể tính sai số lùi tương đối chỉ từ residual tuyệt đối và số điều kiện đã nêu.`),
      b(String.raw`For inconsistent least squares with perturbations in $A$, differentiating the normal equations adds a residual-coupled term $-(A^TA)^{-1}(\delta A)^Tr$. Since $(A^TA)^{-1}$ scales as $1/\sigma_{\min}^2$, sensitivity can involve $\kappa_2(A)^2$ as well as residual size; QR/SVD avoids explicitly forming $A^TA$ but does not remove intrinsic forward sensitivity.`, String.raw`Với bình phương tối thiểu không tương thích có nhiễu $A$, vi phân phương trình chuẩn thêm số hạng ghép residual $-(A^TA)^{-1}(\delta A)^Tr$. Vì $(A^TA)^{-1}$ có thang $1/\sigma_{\min}^2$, độ nhạy có thể chứa $\kappa_2(A)^2$ cùng độ lớn residual; QR/SVD tránh lập tường minh $A^TA$ nhưng không loại bỏ độ nhạy tiến nội tại.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For a fixed full-rank compatible system, prove the bound $\|\hat x-x\|_2/\|x\|_2\le\kappa_2(A)\|A\hat x-b\|_2/\|b\|_2$ when $b\ne0$.`, String.raw`Với hệ tương thích hạng đầy đủ và A cố định, hãy chứng minh cận $\|\hat x-x\|_2/\|x\|_2\le\kappa_2(A)\|A\hat x-b\|_2/\|b\|_2$ khi $b\ne0$.`),
        solution: [
          b(String.raw`Let $r=A\hat x-b$. Since $b=Ax$, $r=A(\hat x-x)$ and full column rank gives $\hat x-x=A^\dagger r$.`, String.raw`Đặt $r=A\hat x-b$. Vì $b=Ax$, $r=A(\hat x-x)$ và hạng cột đầy đủ cho $\hat x-x=A^\dagger r$.`),
          b(String.raw`Thus $\|\hat x-x\|_2\le\|A^\dagger\|_2\|r\|_2=\|r\|_2/\sigma_{\min}$. Also $\|b\|_2=\|Ax\|_2\le\sigma_{\max}\|x\|_2$.`, String.raw`Do đó $\|\hat x-x\|_2\le\|A^\dagger\|_2\|r\|_2=\|r\|_2/\sigma_{\min}$. Đồng thời $\|b\|_2=\|Ax\|_2\le\sigma_{\max}\|x\|_2$.`),
          b(String.raw`Combining and dividing by $\|x\|_2$ gives the ratio factor $\sigma_{\max}/\sigma_{\min}=\kappa_2(A)$ times $\|r\|_2/\|b\|_2$.`, String.raw`Kết hợp rồi chia cho $\|x\|_2$ cho hệ số tỷ số $\sigma_{\max}/\sigma_{\min}=\kappa_2(A)$ nhân với $\|r\|_2/\|b\|_2$.`),
        ],
      },
      {
        prompt: b(String.raw`Fix $A=\operatorname{diag}(1,\varepsilon)$ with $0<\varepsilon<1$. For each $M\ge1$, let $x_M=(M,M)$, $b_M=Ax_M$, and $\hat x_M=(M,M-1)$. Compute the condition number, absolute residual, and relative forward error.`, String.raw`Cố định $A=\operatorname{diag}(1,\varepsilon)$ với $0<\varepsilon<1$. Với mỗi $M\ge1$, cho $x_M=(M,M)$, $b_M=Ax_M$ và $\hat x_M=(M,M-1)$. Hãy tính số điều kiện, residual tuyệt đối và sai số tiến tương đối.`),
        solution: [
          b(String.raw`The singular values are $1$ and $\varepsilon$, so $\kappa_2(A)=1/\varepsilon$ for every $M$.`, String.raw`Các trị kỳ dị là $1$ và $\varepsilon$, nên $\kappa_2(A)=1/\varepsilon$ với mọi $M$.`),
          b(String.raw`We have $A\hat x_M-b_M=(0,-\varepsilon)$, so the absolute residual norm is $\varepsilon$, independent of $M$.`, String.raw`Ta có $A\hat x_M-b_M=(0,-\varepsilon)$, nên chuẩn residual tuyệt đối là $\varepsilon$, không phụ thuộc $M$.`),
          b(String.raw`The parameter error norm is $1$ and $\|x_M\|_2=\sqrt2M$, giving relative error $1/(\sqrt2M)$. Thus the same condition number and absolute residual can accompany very different relative forward errors as $M$ varies.`, String.raw`Chuẩn sai số tham số là $1$ và $\|x_M\|_2=\sqrt2M$, nên sai số tương đối là $1/(\sqrt2M)$. Vì vậy cùng số điều kiện và residual tuyệt đối có thể đi cùng sai số tiến tương đối rất khác khi $M$ thay đổi.`),
        ],
      },
      {
      prompt: b(String.raw`For full-column-rank $A$ and its unique inconsistent least-squares solution $x$ with residual $r=Ax-b\ne0$, linearize the normal equations after perturbing $A$ by $E$ and $b$ by $\delta b$. Identify the residual-dependent term.`, String.raw`Với $A$ hạng cột đầy đủ và nghiệm bình phương tối thiểu không tương thích duy nhất $x$ có residual $r=Ax-b\ne0$, hãy tuyến tính hóa phương trình chuẩn sau khi nhiễu $A$ bởi $E$ và $b$ bởi $\delta b$. Xác định số hạng phụ thuộc residual.`),
        solution: [
          b(String.raw`The original normal equations are $A^Tr=0$. For perturbed data and solution $x+\delta x$, the residual changes to first order by $r+A\delta x+Ex-\delta b$.`, String.raw`Phương trình chuẩn ban đầu là $A^Tr=0$. Với dữ liệu và nghiệm nhiễu $x+\delta x$, residual đổi ở bậc nhất thành $r+A\delta x+Ex-\delta b$.`),
          b(String.raw`Expanding $(A+E)^T(r+A\delta x+Ex-\delta b)=0$ to first order and using $A^Tr=0$ gives $A^TA\delta x=A^T(\delta b-Ex)-E^Tr$.`, String.raw`Khai triển $(A+E)^T(r+A\delta x+Ex-\delta b)=0$ ở bậc nhất và dùng $A^Tr=0$ cho $A^TA\delta x=A^T(\delta b-Ex)-E^Tr$.`),
          b(String.raw`Therefore $\delta x=(A^TA)^{-1}A^T(\delta b-Ex)-(A^TA)^{-1}E^Tr$. The second term vanishes for a compatible system with $r=0$ but remains for inconsistent least squares.`, String.raw`Vì vậy $\delta x=(A^TA)^{-1}A^T(\delta b-Ex)-(A^TA)^{-1}E^Tr$. Số hạng thứ hai mất đi nếu hệ tương thích có $r=0$, nhưng còn lại trong bình phương tối thiểu không tương thích.`),
          b(String.raw`Because $(A^TA)^{-1}$ contains $1/\sigma_{\min}^2$, that residual-coupled term can have squared-condition-number scaling; its size also depends on $r$ and $E$.`, String.raw`Vì $(A^TA)^{-1}$ chứa $1/\sigma_{\min}^2$, số hạng ghép residual này có thể mang hệ số tỷ lệ bình phương số điều kiện; độ lớn còn phụ thuộc $r$ và $E$.`),
        ],
      },
    ],
    reviewNote: 'Checked the fixed-A compatible bound with relative residual ηb, the missing ||b|| scale, and the first-order Eᵀr term for inconsistent least squares. Added full column rank to the perturbation companion because its displayed formula uses (AᵀA)⁻¹ and the least-squares solution must be unique. Restriction: the κ-scaled bound is for compatible systems with fixed A; perturbing A in inconsistent least squares changes the sensitivity model.',
    sourceIds: ['o-boyd'],
  },
  'm2-w069-e4': {
    application: b(String.raw`Reduced QR solves least squares by separating the component of $b$ inside the column space of $A$ from its orthogonal residual. Solving the triangular factor avoids explicitly forming a matrix whose condition number is squared.`, String.raw`QR rút gọn giải bình phương tối thiểu bằng cách tách thành phần của $b$ trong không gian cột của $A$ khỏi residual trực giao. Giải nhân tử tam giác tránh lập tường minh ma trận có số điều kiện bị bình phương.`),
    formula: b(String.raw`If $A=QR$ with $Q^TQ=I$ and nonsingular upper-triangular $R$, then $\|Ax-b\|_2^2=\|Rx-Q^Tb\|_2^2+\|(I-QQ^T)b\|_2^2$. The minimizer solves $Rx=Q^Tb$.`, String.raw`Nếu $A=QR$ với $Q^TQ=I$ và $R$ tam giác trên khả nghịch, thì $\|Ax-b\|_2^2=\|Rx-Q^Tb\|_2^2+\|(I-QQ^T)b\|_2^2$. Nghiệm cực tiểu giải $Rx=Q^Tb$.`),
    steps: [
      b(String.raw`Write $QRx-b=Q(Rx-Q^Tb)-(I-QQ^T)b$. The first vector lies in the column space of $Q$ and the second is orthogonal to it.`, String.raw`Viết $QRx-b=Q(Rx-Q^Tb)-(I-QQ^T)b$. Vectơ thứ nhất nằm trong không gian cột của $Q$, còn vectơ thứ hai trực giao với không gian đó.`),
      b(String.raw`By the Pythagorean theorem, $\|QRx-b\|^2=\|Q(Rx-Q^Tb)\|^2+\|(I-QQ^T)b\|^2$.`, String.raw`Theo định lý Pythagore, $\|QRx-b\|^2=\|Q(Rx-Q^Tb)\|^2+\|(I-QQ^T)b\|^2$.`),
      b(String.raw`Since $Q^TQ=I$, $\|Qw\|=\|w\|$, so the variable term is $\|Rx-Q^Tb\|^2$ and the orthogonal residual term is constant in $x$.`, String.raw`Vì $Q^TQ=I$, $\|Qw\|=\|w\|$, nên số hạng phụ thuộc biến là $\|Rx-Q^Tb\|^2$ còn residual trực giao không đổi theo $x$.`),
      b(String.raw`As $R$ is nonsingular, the variable term reaches zero at the unique solution of $Rx=Q^Tb$. A triangular solve avoids forming $A^TA$.`, String.raw`Vì $R$ khả nghịch, số hạng phụ thuộc biến đạt không tại nghiệm duy nhất của $Rx=Q^Tb$. Giải tam giác tránh lập $A^TA$.`),
    ],
    primarySolution: [
      b(String.raw`Decompose $QRx-b=Q(Rx-Q^Tb)-(I-QQ^T)b$. The two terms are orthogonal because the first lies in $\operatorname{range}(Q)$ and the second in its orthogonal complement.`, String.raw`Phân tích $QRx-b=Q(Rx-Q^Tb)-(I-QQ^T)b$. Hai số hạng trực giao vì số hạng thứ nhất thuộc $\operatorname{range}(Q)$ còn số hạng thứ hai thuộc phần bù trực giao.`),
      b(String.raw`Thus $\|QRx-b\|^2=\|Q(Rx-Q^Tb)\|^2+\|(I-QQ^T)b\|^2=\|Rx-Q^Tb\|^2+\text{constant}$.`, String.raw`Vì vậy $\|QRx-b\|^2=\|Q(Rx-Q^Tb)\|^2+\|(I-QQ^T)b\|^2=\|Rx-Q^Tb\|^2+\text{hằng số}$.`),
      b(String.raw`The first term is minimized to zero by solving $Rx=Q^Tb$. Because $R$ is triangular and nonsingular, use a triangular solve rather than form $A^TA$.`, String.raw`Số hạng đầu đạt cực tiểu bằng không khi giải $Rx=Q^Tb$. Vì $R$ tam giác và khả nghịch, dùng phép giải tam giác thay vì lập $A^TA$.`),
      b(String.raw`This avoids explicitly squaring the singular spectrum; QR improves numerical stability but does not remove intrinsic conditioning of the original problem.`, String.raw`Cách này tránh bình phương tường minh phổ kỳ dị; QR cải thiện ổn định số nhưng không loại bỏ điều kiện vốn có của bài toán ban đầu.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Let $Q=\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}$, $R=\begin{pmatrix}2&1\\0&3\end{pmatrix}$, and $b=(4,6,10)^T$. Solve the least-squares problem using $Rx=Q^Tb$ and identify the residual.`, String.raw`Cho $Q=\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}$, $R=\begin{pmatrix}2&1\\0&3\end{pmatrix}$ và $b=(4,6,10)^T$. Hãy giải bài toán bình phương tối thiểu bằng $Rx=Q^Tb$ và xác định residual.`),
        solution: [
          b(String.raw`The columns of $Q$ are orthonormal, so $Q^Tb=(4,6)^T$.`, String.raw`Các cột của $Q$ trực chuẩn, nên $Q^Tb=(4,6)^T$.`),
          b(String.raw`Solve $3x_2=6$ to get $x_2=2$, then $2x_1+x_2=4$ gives $x_1=1$. Thus $x=(1,2)^T$.`, String.raw`Giải $3x_2=6$ được $x_2=2$, rồi $2x_1+x_2=4$ cho $x_1=1$. Vậy $x=(1,2)^T$.`),
          b(String.raw`Then $Ax=QRx=Q(4,6)^T=(4,6,0)^T$, so $Ax-b=(0,0,-10)^T$. The third component is the orthogonal residual and does not affect the minimizer.`, String.raw`Khi đó $Ax=QRx=Q(4,6)^T=(4,6,0)^T$, nên $Ax-b=(0,0,-10)^T$. Thành phần thứ ba là residual trực giao và không ảnh hưởng nghiệm cực tiểu.`),
        ],
      },
      {
        prompt: b(String.raw`Let $Q^TQ=I$ and $A=QR$. Show that the residual at the QR least-squares solution is orthogonal to every column of $A$.`, String.raw`Cho $Q^TQ=I$ và $A=QR$. Hãy chứng minh residual tại nghiệm bình phương tối thiểu QR trực giao với mọi cột của $A$.`),
        solution: [
          b(String.raw`The QR solution satisfies $Rx=Q^Tb$.`, String.raw`Nghiệm QR thỏa $Rx=Q^Tb$.`),
          b(String.raw`Its residual is $r=Ax-b=QRx-b=QQ^Tb-b=-(I-QQ^T)b$.`, String.raw`Residual là $r=Ax-b=QRx-b=QQ^Tb-b=-(I-QQ^T)b$.`),
          b(String.raw`Since $Q^T(I-QQ^T)=Q^T-Q^TQQ^T=Q^T-Q^T=0$, we have $Q^Tr=0$ and thus $A^Tr=R^TQ^Tr=0$.`, String.raw`Vì $Q^T(I-QQ^T)=Q^T-Q^TQQ^T=Q^T-Q^T=0$, ta có $Q^Tr=0$ và do đó $A^Tr=R^TQ^Tr=0$.`),
        ],
      },
      {
        prompt: b(String.raw`Given $A=QR$ with $Q^TQ=I$, explain why minimizing $\|Ax-b\|^2$ is equivalent to minimizing $\|Rx-Q^Tb\|^2$, even when the least-squares residual is nonzero.`, String.raw`Cho $A=QR$ với $Q^TQ=I$, hãy giải thích vì sao tối thiểu hóa $\|Ax-b\|^2$ tương đương tối thiểu hóa $\|Rx-Q^Tb\|^2$, kể cả khi residual bình phương tối thiểu khác không.`),
        solution: [
          b(String.raw`Decompose $b=QQ^Tb+(I-QQ^T)b$ into its column-space projection and orthogonal component.`, String.raw`Phân tích $b=QQ^Tb+(I-QQ^T)b$ thành hình chiếu lên không gian cột và thành phần trực giao.`),
          b(String.raw`Then $Ax-b=Q(Rx-Q^Tb)-(I-QQ^T)b$, and the two terms are orthogonal.`, String.raw`Khi đó $Ax-b=Q(Rx-Q^Tb)-(I-QQ^T)b$, hai số hạng trực giao.`),
          b(String.raw`Consequently $\|Ax-b\|^2=\|Rx-Q^Tb\|^2+\|(I-QQ^T)b\|^2$. The second term is independent of $x$, so both objectives have the same minimizer even if that residual term is positive.`, String.raw`Do đó $\|Ax-b\|^2=\|Rx-Q^Tb\|^2+\|(I-QQ^T)b\|^2$. Số hạng thứ hai không phụ thuộc $x$, nên hai mục tiêu có cùng nghiệm tối ưu dù số hạng residual đó dương.`),
        ],
      },
    ],
    reviewNote: 'Checked the orthogonal decomposition, constant residual term, and triangular solve condition R nonsingular. Restriction: the result uses reduced QR with orthonormal Q columns; normal-equation conditioning is not assumed benign.',
    sourceIds: ['o-boyd'],
  },
  'm2-w069-e5': {
    application: b(String.raw`When a matrix has a nearly null singular direction, a parameter error in that direction can create only a tiny data residual. Residual size alone can therefore hide a large error in the recovered parameters.`, String.raw`Khi ma trận có hướng trị kỳ dị gần không, sai số tham số theo hướng đó chỉ tạo residual dữ liệu rất nhỏ. Vì vậy riêng độ lớn residual có thể che giấu sai số lớn trong tham số khôi phục.`),
    formula: b(String.raw`For $A=\operatorname{diag}(1,\varepsilon)$ with $0<\varepsilon<1$, $\kappa_2(A)=1/\varepsilon$. If $b=Ax$ and an error lies in the second coordinate, its residual is scaled by $\varepsilon$ while its parameter error is not.`, String.raw`Với $A=\operatorname{diag}(1,\varepsilon)$, $0<\varepsilon<1$, $\kappa_2(A)=1/\varepsilon$. Nếu $b=Ax$ và sai số nằm ở tọa độ thứ hai, residual bị co theo $\varepsilon$ còn sai số tham số thì không.`),
    steps: [
      b(String.raw`The exact system is $\operatorname{diag}(1,\varepsilon)x=(1,\varepsilon)^T$, so $x=(1,1)^T$ for $\varepsilon>0$.`, String.raw`Hệ chính xác là $\operatorname{diag}(1,\varepsilon)x=(1,\varepsilon)^T$, nên $x=(1,1)^T$ với $\varepsilon>0$.`),
      b(String.raw`For $\tilde x=(1,0)^T$, the parameter error is $\|\tilde x-x\|_2=1$.`, String.raw`Với $\tilde x=(1,0)^T$, sai số tham số là $\|\tilde x-x\|_2=1$.`),
      b(String.raw`The residual is $A\tilde x-b=(0,-\varepsilon)^T$, with norm $\varepsilon\to0$ as $\varepsilon\to0^+$.`, String.raw`Residual là $A\tilde x-b=(0,-\varepsilon)^T$, có chuẩn $\varepsilon\to0$ khi $\varepsilon\to0^+$.`),
      b(String.raw`Meanwhile $\kappa_2(A)=1/\varepsilon\to\infty$. The matrix approaches rank deficiency, so the small residual does not imply a small parameter error.`, String.raw`Trong khi đó $\kappa_2(A)=1/\varepsilon\to\infty$. Ma trận tiến gần thiếu hạng, nên residual nhỏ không suy ra sai số tham số nhỏ.`),
    ],
    primarySolution: [
      b(String.raw`For $0<\varepsilon<1$, the exact solution of $A=\operatorname{diag}(1,\varepsilon)$ and $b=(1,\varepsilon)^T$ is $x=(1,1)^T$.`, String.raw`Với $0<\varepsilon<1$, nghiệm chính xác của $A=\operatorname{diag}(1,\varepsilon)$ và $b=(1,\varepsilon)^T$ là $x=(1,1)^T$.`),
      b(String.raw`The candidate $\tilde x=(1,0)^T$ has parameter error $\|\tilde x-x\|_2=1$.`, String.raw`Ứng viên $\tilde x=(1,0)^T$ có sai số tham số $\|\tilde x-x\|_2=1$.`),
      b(String.raw`Its residual is $A\tilde x-b=(0,-\varepsilon)^T$, whose norm tends to zero as $\varepsilon\to0^+$.`, String.raw`Residual là $A\tilde x-b=(0,-\varepsilon)^T$, có chuẩn tiến về không khi $\varepsilon\to0^+$.`),
      b(String.raw`Because $\kappa_2(A)=1/\varepsilon$, the nearly null second direction permits a vanishing residual while parameter error stays one.`, String.raw`Vì $\kappa_2(A)=1/\varepsilon$, hướng thứ hai gần null cho phép residual tiến về không trong khi sai số tham số vẫn bằng một.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $A=\operatorname{diag}(1,\varepsilon)$, $0<\varepsilon<1$, and exact solution $x=(1,1)^T$, compare $\tilde x=(1,0)^T$ and its residual as $\varepsilon\to0^+$.`, String.raw`Với $A=\operatorname{diag}(1,\varepsilon)$, $0<\varepsilon<1$, và nghiệm chính xác $x=(1,1)^T$, hãy so sánh $\tilde x=(1,0)^T$ với residual khi $\varepsilon\to0^+$.`),
        solution: [
          b(String.raw`The parameter error is $\|\tilde x-x\|_2=1$.`, String.raw`Sai số tham số là $\|\tilde x-x\|_2=1$.`),
          b(String.raw`With $b=Ax=(1,\varepsilon)^T$, the residual is $A\tilde x-b=(0,-\varepsilon)^T$, of norm $\varepsilon$.`, String.raw`Với $b=Ax=(1,\varepsilon)^T$, residual là $A\tilde x-b=(0,-\varepsilon)^T$, có chuẩn $\varepsilon$.`),
          b(String.raw`As $\varepsilon\to0^+$ the residual vanishes while the error stays one, and $\kappa_2(A)=1/\varepsilon$ diverges.`, String.raw`Khi $\varepsilon\to0^+$, residual tiến về không nhưng sai số vẫn bằng một, còn $\kappa_2(A)=1/\varepsilon$ phân kỳ.`),
        ],
      },
      {
        prompt: b(String.raw`For the fixed matrix $A=\operatorname{diag}(1,\varepsilon)$, let $x_M=(M,M)^T$, $b_M=Ax_M$, and $\hat x_M=(M,M-1)^T$. Show that the absolute residual is constant while relative parameter error changes with $M$.`, String.raw`Với ma trận cố định $A=\operatorname{diag}(1,\varepsilon)$, cho $x_M=(M,M)^T$, $b_M=Ax_M$ và $\hat x_M=(M,M-1)^T$. Hãy chỉ ra residual tuyệt đối không đổi còn sai số tham số tương đối thay đổi theo $M$.`),
        solution: [
          b(String.raw`The residual is $A\hat x_M-b_M=(0,-\varepsilon)^T$, so its absolute norm is always $\varepsilon$.`, String.raw`Residual là $A\hat x_M-b_M=(0,-\varepsilon)^T$, nên chuẩn tuyệt đối luôn bằng $\varepsilon$.`),
          b(String.raw`The parameter error norm is $1$, while $\|x_M\|_2=\sqrt2M$. Hence relative forward error is $1/(\sqrt2M)$.`, String.raw`Chuẩn sai số tham số là $1$, còn $\|x_M\|_2=\sqrt2M$. Do đó sai số tiến tương đối là $1/(\sqrt2M)$.`),
          b(String.raw`The matrix and absolute residual are fixed as $M$ varies, but relative error tends to zero as $M\to\infty$. Thus the absolute residual alone cannot determine relative error.`, String.raw`Ma trận và residual tuyệt đối cố định khi $M$ thay đổi, nhưng sai số tương đối tiến về không khi $M\to\infty$. Vậy riêng residual tuyệt đối không xác định sai số tương đối.`),
        ],
      },
      {
        prompt: b(String.raw`For full-rank $A$, state why QR/SVD can improve the computed least-squares solution without guaranteeing small forward error when $\kappa_2(A)$ is large.`, String.raw`Với $A$ hạng đầy đủ, hãy nêu vì sao QR/SVD có thể cải thiện nghiệm bình phương tối thiểu tính được nhưng không bảo đảm sai số tiến nhỏ khi $\kappa_2(A)$ lớn.`),
        solution: [
          b(String.raw`QR and SVD avoid forming $A^TA$, whose condition number is $\kappa_2(A)^2$, so they reduce extra numerical damage from the algorithm.`, String.raw`QR và SVD tránh lập $A^TA$, có số điều kiện $\kappa_2(A)^2$, nên giảm tổn hại số phát sinh từ thuật toán.`),
          b(String.raw`But perturbation analysis of the original problem still contains $A^\dagger$, whose norm is $1/\sigma_{\min}$; a large $\kappa_2(A)$ can amplify data perturbations.`, String.raw`Nhưng phân tích nhiễu của bài toán gốc vẫn chứa $A^\dagger$, có chuẩn $1/\sigma_{\min}$; $\kappa_2(A)$ lớn có thể khuếch đại nhiễu dữ liệu.`),
          b(String.raw`Therefore a stable algorithm controls its backward error but cannot remove intrinsic forward sensitivity of an ill-conditioned problem.`, String.raw`Vì vậy thuật toán ổn định kiểm soát sai số lùi nhưng không loại bỏ độ nhạy tiến nội tại của bài toán điều kiện kém.`),
        ],
      },
    ],
    reviewNote: 'Checked the exact solution, unit parameter error, residual ε, and limit ε→0+ while κ=1/ε grows. Restriction: ε remains positive; at ε=0 the system loses full column rank and a unique exact solution is not guaranteed.',
    sourceIds: ['o-boyd'],
  },
  'm2-w070-e1': {
    application: b(String.raw`A measured gradient can certify how close an iterate is to the optimum in objective value, provided curvature is bounded below uniformly across the feasible domain.`, String.raw`Gradient đo được có thể chứng nhận iterate gần tối ưu đến đâu về giá trị mục tiêu, nếu độ cong có cận dưới đồng đều trên miền khả thi.`),
    formula: b(String.raw`If $f$ is differentiable and $\mu$-strongly convex for $\mu>0$ on a convex domain, with attained minimum $f^*$, then $0\le f(x)-f^*\le \|\nabla f(x)\|^2/(2\mu)$.`, String.raw`Nếu $f$ khả vi và lồi mạnh $\mu$ với $\mu>0$ trên miền lồi, có giá trị nhỏ nhất đạt được $f^*$, thì $0\le f(x)-f^*\le \|\nabla f(x)\|^2/(2\mu)$.`),
    steps: [
      b(String.raw`Use the global strong-convexity premise and the gradient norm $0.04$; the norm must be squared.`, String.raw`Dùng giả thiết lồi mạnh toàn cục và chuẩn gradient $0.04$; cần bình phương chuẩn này.`),
      b(String.raw`Compute $2\mu=2(0.5)=1$, so the certificate is $(0.04)^2/1=0.0016$.`, String.raw`Tính $2\mu=2(0.5)=1$, nên chứng chỉ là $(0.04)^2/1=0.0016$.`),
      b(String.raw`Conclude $0\le f(x)-f^*\le0.0016$. This is an upper bound, not an assertion that the gap equals the bound.`, String.raw`Kết luận $0\le f(x)-f^*\le0.0016$. Đây là cận trên, không khẳng định gap bằng cận này.`),
    ],
    primarySolution: [
      b(String.raw`For a differentiable globally μ-strongly convex objective with $\mu=0.5$, the gradient-gap theorem gives $f(x)-f^*\le\|\nabla f(x)\|^2/(2\mu)$.`, String.raw`Với mục tiêu khả vi lồi mạnh $\mu=0.5$ toàn cục, định lý gradient-gap cho $f(x)-f^*\le\|\nabla f(x)\|^2/(2\mu)$.`),
      b(String.raw`Substitute $\|\nabla f(x)\|=0.04$: the numerator is $(0.04)^2=0.0016$ and the denominator is $2(0.5)=1$.`, String.raw`Thế $\|\nabla f(x)\|=0.04$: tử số là $(0.04)^2=0.0016$ và mẫu số là $2(0.5)=1$.`),
      b(String.raw`Thus the suboptimality satisfies $0\le f(x)-f^*\le0.0016$. The conclusion relies on global strong convexity; a small gradient alone is insufficient.`, String.raw`Vậy độ không tối ưu thỏa $0\le f(x)-f^*\le0.0016$. Kết luận dựa vào lồi mạnh toàn cục; chỉ gradient nhỏ thì chưa đủ.`),
    ],
    companions: [
      {
        prompt: b(String.raw`A differentiable objective is globally $2$-strongly convex and an iterate has gradient norm $0.3$. Find the certified objective-gap upper bound.`, String.raw`Một mục tiêu khả vi lồi mạnh toàn cục $2$ và iterate có chuẩn gradient $0.3$. Hãy tìm cận trên gap mục tiêu được chứng nhận.`),
        solution: [
          b(String.raw`Apply $f(x)-f^*\le\|\nabla f(x)\|^2/(2\mu)$, whose assumptions hold with $\mu=2$.`, String.raw`Áp dụng $f(x)-f^*\le\|\nabla f(x)\|^2/(2\mu)$ với giả thiết đúng cho $\mu=2$.`),
          b(String.raw`Square the measured norm: $(0.3)^2=0.09$, and compute $2\mu=4$.`, String.raw`Bình phương chuẩn đo được: $(0.3)^2=0.09$, và tính $2\mu=4$.`),
          b(String.raw`Therefore $0\le f(x)-f^*\le0.09/4=0.0225$; the actual gap may be smaller.`, String.raw`Do đó $0\le f(x)-f^*\le0.09/4=0.0225$; gap thực tế có thể nhỏ hơn.`),
        ],
      },
      {
        prompt: b(String.raw`Suppose $f$ is globally $0.5$-strongly convex and a certificate reports $f(x)-f^*\le0.005$. What upper bound on $\|\nabla f(x)\|$ follows from the gradient-gap theorem?`, String.raw`Giả sử $f$ lồi mạnh toàn cục $0.5$ và chứng chỉ cho $f(x)-f^*\le0.005$. Từ định lý gradient-gap suy ra cận trên nào cho $\|\nabla f(x)\|$?`),
        solution: [
          b(String.raw`The strong-convexity certificate is an upper bound on gap in terms of gradient; its inequality direction cannot be rearranged into an upper bound on gradient from a gap upper bound.`, String.raw`Chứng chỉ lồi mạnh chặn trên gap theo gradient; không thể đảo chiều bất đẳng thức để chặn trên gradient từ cận trên gap.`),
          b(String.raw`To show insufficiency even when the gap is exactly $0.005$, take $f_K(t)=\frac K2t^2$ and $x_K=\sqrt{0.01/K}$ for any $K\ge0.5$. This function is at least $0.5$-strongly convex.`, String.raw`Để thấy dữ kiện chưa đủ ngay cả khi gap đúng bằng $0.005$, lấy $f_K(t)=\frac K2t^2$ và $x_K=\sqrt{0.01/K}$ với mọi $K\ge0.5$. Hàm này lồi mạnh ít nhất $0.5$.`),
          b(String.raw`Then $f_K(x_K)-f_K(0)=0.005$, but $|f_K'(x_K)|=\sqrt{0.01K}$, which grows without bound as $K\to\infty$. Hence no finite gradient upper bound follows.`, String.raw`Khi đó $f_K(x_K)-f_K(0)=0.005$, nhưng $|f_K'(x_K)|=\sqrt{0.01K}$ tăng không giới hạn khi $K\to\infty$. Vì vậy không suy ra được cận trên gradient hữu hạn.`),
        ],
      },
      {
        prompt: b(String.raw`For $q(t)=\tfrac{\mu}{2}t^2$ with $\mu=3$, evaluate the objective gap and the gradient certificate at $t=2$. Is the bound tight?`, String.raw`Với $q(t)=\tfrac{\mu}{2}t^2$, $\mu=3$, hãy tính gap mục tiêu và chứng chỉ gradient tại $t=2$. Cận có chặt không?`),
        solution: [
          b(String.raw`The minimizer is $t^*=0$, so $q(2)-q(0)=\tfrac32(2)^2=6$.`, String.raw`Điểm cực tiểu là $t^*=0$, nên $q(2)-q(0)=\tfrac32(2)^2=6$.`),
          b(String.raw`The gradient is $q'(2)=3(2)=6$, and its certificate is $|q'(2)|^2/(2\mu)=36/6=6$.`, String.raw`Gradient là $q'(2)=3(2)=6$, và chứng chỉ là $|q'(2)|^2/(2\mu)=36/6=6$.`),
          b(String.raw`The values agree exactly because this quadratic has constant curvature $\mu$; for general strongly convex functions the bound need not be tight.`, String.raw`Hai giá trị bằng nhau vì quadratic này có độ cong không đổi $\mu$; với hàm lồi mạnh tổng quát, cận không nhất thiết chặt.`),
        ],
      },
    ],
    reviewNote: 'Checked 0.04²=0.0016 and 2μ=1. Restriction: requires differentiability, μ>0, global strong convexity on the convex feasible domain, and an attained minimum; the reported quantity is an upper bound, not the exact gap.',
    sourceIds: ['o-boyd'],
  },
  'm2-w070-e2': {
    application: b(String.raw`The gradient-gap certificate comes from optimizing a linear gradient term against the quadratic penalty supplied by strong convexity. Completing the square makes the best possible upper bound explicit.`, String.raw`Chứng chỉ gradient-gap xuất phát từ việc cân bằng hạng tuyến tính gradient với penalty bậc hai do lồi mạnh cung cấp. Hoàn thành bình phương làm cận trên tốt nhất hiện rõ.`),
    formula: b(String.raw`For differentiable μ-strongly convex $f$ with $\mu>0$ on a convex domain and minimizer $x^*$, set $a=\nabla f(x)$ and $d=x-x^*$. Then $0\le f(x)-f(x^*)\le a^Td-\frac{\mu}{2}\|d\|^2=\frac{\|a\|^2}{2\mu}-\frac{\mu}{2}\|d-a/\mu\|^2\le\frac{\|a\|^2}{2\mu}$.`, String.raw`Với $f$ khả vi lồi mạnh $\mu>0$ trên miền lồi và điểm cực tiểu $x^*$, đặt $a=\nabla f(x)$, $d=x-x^*$. Khi đó $0\le f(x)-f(x^*)\le a^Td-\frac{\mu}{2}\|d\|^2=\frac{\|a\|^2}{2\mu}-\frac{\mu}{2}\|d-a/\mu\|^2\le\frac{\|a\|^2}{2\mu}$.`),
    steps: [
      b(String.raw`Strong convexity at $x$ with comparison point $x^*$ gives $f(x^*)\ge f(x)+a^T(x^*-x)+\frac{\mu}{2}\|x^*-x\|^2$.`, String.raw`Lồi mạnh tại $x$ với điểm so sánh $x^*$ cho $f(x^*)\ge f(x)+a^T(x^*-x)+\frac{\mu}{2}\|x^*-x\|^2$.`),
      b(String.raw`Rearrange and use $d=x-x^*$ to get $f(x)-f(x^*)\le a^Td-\frac{\mu}{2}\|d\|^2$.`, String.raw`Biến đổi và đặt $d=x-x^*$ được $f(x)-f(x^*)\le a^Td-\frac{\mu}{2}\|d\|^2$.`),
      b(String.raw`Expand $\|d-a/\mu\|^2$ to obtain $a^Td-\frac{\mu}{2}\|d\|^2=\frac{\|a\|^2}{2\mu}-\frac{\mu}{2}\|d-a/\mu\|^2$.`, String.raw`Khai triển $\|d-a/\mu\|^2$ để có $a^Td-\frac{\mu}{2}\|d\|^2=\frac{\|a\|^2}{2\mu}-\frac{\mu}{2}\|d-a/\mu\|^2$.`),
      b(String.raw`Since $\mu>0$, the subtracted square is nonnegative, giving the upper bound; optimality gives $f(x^*)\le f(x)$ and hence the lower bound zero.`, String.raw`Vì $\mu>0$, bình phương bị trừ không âm nên suy ra cận trên; tính tối ưu cho $f(x^*)\le f(x)$ nên có cận dưới không.`),
    ],
    primarySolution: [
      b(String.raw`Let $a=\nabla f(x)$ and $d=x-x^*$. Strong convexity applied at $x$ toward $x^*$ yields $f(x)-f(x^*)\le a^Td-\frac{\mu}{2}\|d\|^2$.`, String.raw`Đặt $a=\nabla f(x)$ và $d=x-x^*$. Áp dụng lồi mạnh tại $x$ hướng đến $x^*$ cho $f(x)-f(x^*)\le a^Td-\frac{\mu}{2}\|d\|^2$.`),
      b(String.raw`Complete the square exactly: $a^Td-\frac{\mu}{2}\|d\|^2=\frac{\|a\|^2}{2\mu}-\frac{\mu}{2}\|d-a/\mu\|^2$.`, String.raw`Hoàn thành bình phương chính xác: $a^Td-\frac{\mu}{2}\|d\|^2=\frac{\|a\|^2}{2\mu}-\frac{\mu}{2}\|d-a/\mu\|^2$.`),
      b(String.raw`The square term is nonnegative and $\mu>0$, so discarding only its negative contribution gives $f(x)-f(x^*)\le\|a\|^2/(2\mu)$.`, String.raw`Hạng bình phương không âm và $\mu>0$, nên chỉ bỏ phần đóng góp âm ấy được $f(x)-f(x^*)\le\|a\|^2/(2\mu)$.`),
      b(String.raw`Because $x^*$ minimizes $f$ on the domain, $f(x)-f(x^*)\ge0$. No unconstrained condition $\nabla f(x^*)=0$ is needed for this argument.`, String.raw`Vì $x^*$ cực tiểu $f$ trên miền nên $f(x)-f(x^*)\ge0$. Lập luận không cần điều kiện không ràng buộc $\nabla f(x^*)=0$.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(t)=\frac{3}{2}(t-1)^2$, take $x=3$ and $x^*=1$. Verify the strong-convexity gap estimate and identify whether square completion is tight.`, String.raw`Với $f(t)=\frac{3}{2}(t-1)^2$, lấy $x=3$, $x^*=1$. Hãy kiểm tra cận gap lồi mạnh và xác định hoàn thành bình phương có chặt không.`),
        solution: [
          b(String.raw`Here $\mu=3$, $a=f'(3)=3(3-1)=6$, and $d=x-x^*=2$.`, String.raw`Ở đây $\mu=3$, $a=f'(3)=3(3-1)=6$, và $d=x-x^*=2$.`),
          b(String.raw`The gap is $f(3)-f(1)=6-0=6$, while $ad-\frac{\mu}{2}d^2=12-6=6$.`, String.raw`Gap là $f(3)-f(1)=6-0=6$, còn $ad-\frac{\mu}{2}d^2=12-6=6$.`),
          b(String.raw`The certificate is $a^2/(2\mu)=36/6=6$, so equality holds; the centered square vanishes because $d=a/\mu=2$.`, String.raw`Chứng chỉ là $a^2/(2\mu)=36/6=6$, nên đạt đẳng thức; bình phương tâm hóa bằng không vì $d=a/\mu=2$.`),
        ],
      },
      {
        prompt: b(String.raw`In two dimensions let $a=(3,4)$, $\mu=2$, and $d=(1,2)$. Evaluate the quadratic expression and the completed-square upper bound.`, String.raw`Trong hai chiều, cho $a=(3,4)$, $\mu=2$, $d=(1,2)$. Hãy tính biểu thức bậc hai và cận trên sau khi hoàn thành bình phương.`),
        solution: [
          b(String.raw`Compute $a^Td=3(1)+4(2)=11$ and $\frac{\mu}{2}\|d\|^2=1(1^2+2^2)=5$, giving $a^Td-\frac{\mu}{2}\|d\|^2=6$.`, String.raw`Tính $a^Td=3(1)+4(2)=11$ và $\frac{\mu}{2}\|d\|^2=1(1^2+2^2)=5$, nên $a^Td-\frac{\mu}{2}\|d\|^2=6$.`),
          b(String.raw`The maximum over all $d$ is $\|a\|^2/(2\mu)=25/4=6.25$.`, String.raw`Giá trị lớn nhất trên mọi $d$ là $\|a\|^2/(2\mu)=25/4=6.25$.`),
          b(String.raw`Indeed, $a/\mu=(1.5,2)$ and $\|d-a/\mu\|^2=0.25$, so $25/4-(2/2)(0.25)=6$, matching the direct computation.`, String.raw`Thật vậy, $a/\mu=(1.5,2)$ và $\|d-a/\mu\|^2=0.25$, nên $25/4-(2/2)(0.25)=6$, trùng với phép tính trực tiếp.`),
        ],
      },
      {
        prompt: b(String.raw`On the feasible interval $C=[0,1]$, let $f(t)=\frac12(t-2)^2$. At the boundary minimizer $x^*=1$, use $x=0$ to verify the gradient-gap estimate even though $f'(x^*)\ne0$.`, String.raw`Trên đoạn khả thi $C=[0,1]$, cho $f(t)=\frac12(t-2)^2$. Tại điểm cực tiểu biên $x^*=1$, dùng $x=0$ để kiểm tra cận gradient-gap dù $f'(x^*)\ne0$.`),
        solution: [
          b(String.raw`The constrained minimizer is $x^*=1$ and $f'(0)=0-2=-2$; at the minimizer $f'(1)=-1\ne0$ because it is a boundary point.`, String.raw`Điểm cực tiểu có ràng buộc là $x^*=1$ và $f'(0)=0-2=-2$; tại điểm cực tiểu $f'(1)=-1\ne0$ vì đây là điểm biên.`),
          b(String.raw`The gap is $f(0)-f(1)=2-\frac12=\frac32$, whereas the certificate is $|f'(0)|^2/(2\mu)=4/2=2$ with $\mu=1$.`, String.raw`Gap là $f(0)-f(1)=2-\frac12=\frac32$, còn chứng chỉ là $|f'(0)|^2/(2\mu)=4/2=2$ với $\mu=1$.`),
          b(String.raw`Thus $0\le\frac32\le2$. Strong convexity on the convex feasible interval suffices; an unconstrained zero-gradient condition at $x^*$ is unnecessary.`, String.raw`Vậy $0\le\frac32\le2$. Lồi mạnh trên đoạn khả thi lồi là đủ; không cần gradient tại $x^*$ bằng không theo bài toán không ràng buộc.`),
        ],
      },
    ],
    reviewNote: 'Checked the rearrangement sign, the μ-scaled square center d=a/μ, and that the discarded term is nonpositive only for μ>0. Restriction: strong convexity must hold on a convex domain containing x and x*; constrained boundary minimizers are allowed, but the minimum must exist.',
    sourceIds: ['o-boyd'],
  },
  'm2-w070-e3': {
    application: b(String.raw`An approximate constrained iterate should be diagnosed with separate primal feasibility, dual feasibility, stationarity, and complementarity residuals. Reporting them separately shows which KKT condition is causing the largest error.`, String.raw`Một iterate có ràng buộc gần đúng nên được chẩn đoán riêng bằng residual khả thi primal, khả thi dual, stationarity và complementarity. Báo riêng giúp thấy điều kiện KKT nào gây sai số lớn nhất.`),
    formula: b(String.raw`For $g_i(x)\le0$, equality $h(x)=0$, and multipliers $\lambda,\nu$, report $r_p=\max_i[g_i(x)]_+$ and $|h(x)|$, $r_d=\max_i[-\lambda_i]_+$, $r_s=\|\nabla f(x)+\sum_i\lambda_i\nabla g_i(x)+\nu\nabla h(x)\|_2$, and $r_{c,i}=|\lambda_i g_i(x)|$. These are raw residuals; scaling requires explicit positive scales.`, String.raw`Với $g_i(x)\le0$, đẳng thức $h(x)=0$ và multiplier $\lambda,\nu$, báo $r_p=\max_i[g_i(x)]_+$ cùng $|h(x)|$, $r_d=\max_i[-\lambda_i]_+$, $r_s=\|\nabla f(x)+\sum_i\lambda_i\nabla g_i(x)+\nu\nabla h(x)\|_2$, và $r_{c,i}=|\lambda_i g_i(x)|$. Đây là residual thô; muốn co giãn cần nêu thang đo dương cụ thể.`),
    steps: [
      b(String.raw`Evaluate $g_1=1.02-1=0.02$, $g_2=-(-0.01)=0.01$, and $h=1.02-0.01-1=0.01$. Thus the inequality violation is $0.02$ and equality residual magnitude is $0.01$.`, String.raw`Tính $g_1=1.02-1=0.02$, $g_2=-(-0.01)=0.01$, và $h=1.02-0.01-1=0.01$. Vì vậy vi phạm bất đẳng thức là $0.02$ và độ lớn residual đẳng thức là $0.01$.`),
      b(String.raw`The dual violation is $[-(-0.02)]_+=0.02$. Also $\nabla f=(-0.98,-1.01)$, $\nabla g_1=(1,0)$, $\nabla g_2=(0,-1)$, and $\nabla h=(1,1)$.`, String.raw`Vi phạm dual là $[-(-0.02)]_+=0.02$. Ngoài ra $\nabla f=(-0.98,-1.01)$, $\nabla g_1=(1,0)$, $\nabla g_2=(0,-1)$ và $\nabla h=(1,1)$.`),
      b(String.raw`The stationarity vector is $(-0.98,-1.01)+0.4(1,0)-0.02(0,1)+0.3(1,1)=(-0.28,-0.69)$, whose norm is $\sqrt{0.5545}\approx0.7446$.`, String.raw`Vector stationarity là $(-0.98,-1.01)+0.4(1,0)-0.02(0,1)+0.3(1,1)=(-0.28,-0.69)$, có chuẩn $\sqrt{0.5545}\approx0.7446$.`),
      b(String.raw`Complementarity magnitudes are $|0.4(0.02)|=0.008$ and $|(-0.02)(0.01)|=0.0002$. Keep all four diagnostic types separate; any combined scaled score needs declared scaling factors.`, String.raw`Độ lớn complementarity là $|0.4(0.02)|=0.008$ và $|(-0.02)(0.01)|=0.0002$. Giữ riêng bốn loại chẩn đoán; điểm co giãn gộp cần hệ số co giãn được nêu rõ.`),
    ],
    primarySolution: [
      b(String.raw`The inequality values at $x=(1.02,-0.01)$ are $g_1=0.02$ and $g_2=0.01$, so the maximum positive violation is $0.02$. The equality residual is $1.02-0.01-1=0.01$.`, String.raw`Giá trị bất đẳng thức tại $x=(1.02,-0.01)$ là $g_1=0.02$ và $g_2=0.01$, nên vi phạm dương lớn nhất là $0.02$. Residual đẳng thức là $1.02-0.01-1=0.01$.`),
      b(String.raw`Since $\lambda=(0.4,-0.02)$, the dual violation is $\max(0,-\lambda_1,-\lambda_2)=0.02$. The objective gradient is $\nabla f=x-(2,1)=(-0.98,-1.01)$.`, String.raw`Vì $\lambda=(0.4,-0.02)$, vi phạm dual là $\max(0,-\lambda_1,-\lambda_2)=0.02$. Gradient mục tiêu là $\nabla f=x-(2,1)=(-0.98,-1.01)$.`),
      b(String.raw`Using $\nabla g_1=(1,0)$, $\nabla g_2=(0,-1)$ and equality gradient $(1,1)$, stationarity vector equals $(-0.98,-1.01)+(0.4,0.02)+(0.3,0.3)=(-0.28,-0.69)$.`, String.raw`Dùng $\nabla g_1=(1,0)$, $\nabla g_2=(0,-1)$ và gradient đẳng thức $(1,1)$, vector stationarity bằng $(-0.98,-1.01)+(0.4,0.02)+(0.3,0.3)=(-0.28,-0.69)$.`),
      b(String.raw`Its Euclidean norm is $\sqrt{(-0.28)^2+(-0.69)^2}=\sqrt{0.5545}\approx0.7446$. The two complementarity magnitudes are $0.008$ and $0.0002$, respectively.`, String.raw`Chuẩn Euclid là $\sqrt{(-0.28)^2+(-0.69)^2}=\sqrt{0.5545}\approx0.7446$. Hai độ lớn complementarity lần lượt là $0.008$ và $0.0002$.`),
      b(String.raw`The report is therefore inequality violation $0.02$, equality residual $0.01$, dual violation $0.02$, stationarity norm approximately $0.7446$, and complementarity magnitudes $0.008$ and $0.0002$. No arbitrary scaling is inferred.`, String.raw`Vậy báo cáo gồm vi phạm bất đẳng thức $0.02$, residual đẳng thức $0.01$, vi phạm dual $0.02$, chuẩn stationarity xấp xỉ $0.7446$, và độ lớn complementarity $0.008$ cùng $0.0002$. Không tự giả định thang co giãn.`),
    ],
    companions: [
      {
        prompt: b(String.raw`For $f(x)=\frac12\|x-(2,1)\|^2$, inequalities $x_1-1\le0$, $-x_2\le0$, and equality $x_1+x_2-1=0$, compute the separate KKT residuals at $x=(0.9,0.2)$, $\lambda=(0.1,0.3)$, $\nu=-0.4$.`, String.raw`Với $f(x)=\frac12\|x-(2,1)\|^2$, bất đẳng thức $x_1-1\le0$, $-x_2\le0$ và đẳng thức $x_1+x_2-1=0$, hãy tính riêng residual KKT tại $x=(0.9,0.2)$, $\lambda=(0.1,0.3)$, $\nu=-0.4$.`),
        solution: [
          b(String.raw`The constraint values are $g_1=-0.1$, $g_2=-0.2$, and $h=0.1$. Inequality violation is $0$ and equality residual magnitude is $0.1$.`, String.raw`Giá trị ràng buộc là $g_1=-0.1$, $g_2=-0.2$ và $h=0.1$. Vi phạm bất đẳng thức bằng $0$ và độ lớn residual đẳng thức là $0.1$.`),
          b(String.raw`Both multipliers are nonnegative, so dual violation is $0$. The objective gradient is $(-1.1,-0.8)$.`, String.raw`Cả hai multiplier không âm nên vi phạm dual bằng $0$. Gradient mục tiêu là $(-1.1,-0.8)$.`),
          b(String.raw`Stationarity vector is $(-1.1,-0.8)+0.1(1,0)+0.3(0,-1)-0.4(1,1)=(-1.4,-1.5)$, with norm $\sqrt{4.21}\approx2.052$.`, String.raw`Vector stationarity là $(-1.1,-0.8)+0.1(1,0)+0.3(0,-1)-0.4(1,1)=(-1.4,-1.5)$, có chuẩn $\sqrt{4.21}\approx2.052$.`),
          b(String.raw`Complementarity magnitudes are $|0.1(-0.1)|=0.01$ and $|0.3(-0.2)|=0.06$; these do not replace the separate feasibility residuals.`, String.raw`Độ lớn complementarity là $|0.1(-0.1)|=0.01$ và $|0.3(-0.2)|=0.06$; chúng không thay thế residual khả thi được báo riêng.`),
        ],
      },
      {
        prompt: b(String.raw`For a single constraint $g(x)=x-1\le0$, consider minimizing $f(x)=\frac12(x-2)^2$. At $x=1$, $\lambda=1$, compute feasibility, dual, stationarity, and complementarity residuals and explain the active boundary.`, String.raw`Với ràng buộc đơn $g(x)=x-1\le0$, xét cực tiểu $f(x)=\frac12(x-2)^2$. Tại $x=1$, $\lambda=1$, hãy tính residual khả thi, dual, stationarity, complementarity và giải thích biên hoạt động.`),
        solution: [
          b(String.raw`The boundary is active: $g(1)=0$, so inequality violation is $[0]_+=0$.`, String.raw`Ràng buộc biên hoạt động: $g(1)=0$, nên vi phạm bất đẳng thức là $[0]_+=0$.`),
          b(String.raw`Dual feasibility holds because $\lambda=1\ge0$, giving dual violation $[-1]_+=0$.`, String.raw`Khả thi dual đúng vì $\lambda=1\ge0$, nên vi phạm dual là $[-1]_+=0$.`),
          b(String.raw`Here $f'(1)=-1$ and $g'(1)=1$, so stationarity residual is $|-1+1|=0$.`, String.raw`Ở đây $f'(1)=-1$ và $g'(1)=1$, nên residual stationarity là $|-1+1|=0$.`),
          b(String.raw`Complementarity is $|\lambda g(1)|=|1(0)|=0$. This is an exact KKT point with an active constraint and positive multiplier.`, String.raw`Complementarity là $|\lambda g(1)|=|1(0)|=0$. Đây là điểm KKT chính xác với ràng buộc hoạt động và multiplier dương.`),
        ],
      },
      {
        prompt: b(String.raw`For $g(x)=x-1\le0$ and $h(x)=x-0.8=0$, let $x=0.7$, $\lambda=0.2$, and $\nu=0.5$. Report raw inequality/equality feasibility, dual, stationarity and complementarity residuals for $f(x)=\frac12(x-1)^2$.`, String.raw`Với $g(x)=x-1\le0$ và $h(x)=x-0.8=0$, cho $x=0.7$, $\lambda=0.2$, $\nu=0.5$. Hãy báo residual thô khả thi bất đẳng thức/đẳng thức, dual, stationarity và complementarity cho $f(x)=\frac12(x-1)^2$.`),
        solution: [
          b(String.raw`The inequality value is $g(0.7)=-0.3$, so its positive violation is $0$; equality residual magnitude is $|0.7-0.8|=0.1$.`, String.raw`Giá trị bất đẳng thức là $g(0.7)=-0.3$, nên vi phạm dương bằng $0$; độ lớn residual đẳng thức là $|0.7-0.8|=0.1$.`),
          b(String.raw`Since $\lambda=0.2\ge0$, dual violation is $0$. The objective derivative is $f'(0.7)=-0.3$.`, String.raw`Vì $\lambda=0.2\ge0$, vi phạm dual bằng $0$. Đạo hàm mục tiêu là $f'(0.7)=-0.3$.`),
          b(String.raw`Both constraint derivatives are $1$, so stationarity residual is $|-0.3+0.2+0.5|=0.4$.`, String.raw`Đạo hàm cả hai ràng buộc đều bằng $1$, nên residual stationarity là $|-0.3+0.2+0.5|=0.4$.`),
          b(String.raw`Complementarity magnitude is $|0.2(-0.3)|=0.06$. The raw report is therefore $(0,0.1)$ for primal, $0$ dual, $0.4$ stationarity, and $0.06$ complementarity.`, String.raw`Độ lớn complementarity là $|0.2(-0.3)|=0.06$. Báo cáo thô là primal $(0,0.1)$, dual $0$, stationarity $0.4$ và complementarity $0.06$.`),
        ],
      },
    ],
    reviewNote: 'Recomputed both constraint values, multiplier signs, stationarity vector and Euclidean norm, and both signed products before taking absolute values. Restriction: these are unscaled diagnostics under the stated sign convention; objective/constraint rescaling changes magnitudes, and no combined score is defined.',
    sourceIds: ['o-boyd'],
  },
  'm2-w070-e4': {
    application: b(String.raw`When gradients come from an approximate oracle, its error radius must be included before applying a gradient-gap certificate. Otherwise the reported objective-gap bound can be too optimistic.`, String.raw`Khi gradient đến từ oracle xấp xỉ, cần cộng bán kính sai số trước khi áp dụng chứng chỉ gradient-gap. Nếu không, cận gap được báo có thể quá lạc quan.`),
    formula: b(String.raw`If $\|\nabla f(x)-\hat g\|\le\varepsilon$ and $f$ is differentiable and globally μ-strongly convex for $\mu>0$, then $\|\nabla f(x)\|\le\|\hat g\|+\varepsilon$ and $0\le f(x)-f^*\le(\|\hat g\|+\varepsilon)^2/(2\mu)$.`, String.raw`Nếu $\|\nabla f(x)-\hat g\|\le\varepsilon$ và $f$ khả vi, lồi mạnh toàn cục $\mu>0$, thì $\|\nabla f(x)\|\le\|\hat g\|+\varepsilon$ và $0\le f(x)-f^*\le(\|\hat g\|+\varepsilon)^2/(2\mu)$.`),
    steps: [
      b(String.raw`Use the triangle inequality in the form $\|\nabla f(x)\|\le\|\hat g\|+\|\nabla f(x)-\hat g\|$.`, String.raw`Dùng bất đẳng thức tam giác dưới dạng $\|\nabla f(x)\|\le\|\hat g\|+\|\nabla f(x)-\hat g\|$.`),
      b(String.raw`Substitute the oracle guarantee to get $\|\nabla f(x)\|\le\|\hat g\|+\varepsilon$; both terms are nonnegative, so the squared upper bound preserves order.`, String.raw`Thế bảo đảm oracle để được $\|\nabla f(x)\|\le\|\hat g\|+\varepsilon$; hai hạng không âm nên bình phương vẫn giữ thứ tự cận trên.`),
      b(String.raw`Apply the strong-convexity theorem to the true gradient, giving $f(x)-f^*\le(\|\hat g\|+\varepsilon)^2/(2\mu)$.`, String.raw`Áp dụng định lý lồi mạnh cho gradient thật, được $f(x)-f^*\le(\|\hat g\|+\varepsilon)^2/(2\mu)$.`),
      b(String.raw`This bound is conservative because it allows worst-case alignment of oracle error with $\hat g$; omitting $\varepsilon$ is not certified unless it is known to be zero.`, String.raw`Cận này bảo thủ vì cho phép sai số oracle cùng hướng xấu nhất với $\hat g$; bỏ $\varepsilon$ không được chứng nhận trừ khi biết sai số bằng không.`),
    ],
    primarySolution: [
      b(String.raw`By the triangle inequality, $\|\nabla f(x)\|\le\|\hat g\|+\|\nabla f(x)-\hat g\|$.`, String.raw`Theo bất đẳng thức tam giác, $\|\nabla f(x)\|\le\|\hat g\|+\|\nabla f(x)-\hat g\|$.`),
      b(String.raw`The assumed oracle error gives $\|\nabla f(x)\|\le\|\hat g\|+\varepsilon$.`, String.raw`Giả thiết sai số oracle cho $\|\nabla f(x)\|\le\|\hat g\|+\varepsilon$.`),
      b(String.raw`Since $f$ is globally μ-strongly convex with $\mu>0$, its gap obeys $f(x)-f^*\le\|\nabla f(x)\|^2/(2\mu)$.`, String.raw`Vì $f$ lồi mạnh toàn cục $\mu>0$, gap thỏa $f(x)-f^*\le\|\nabla f(x)\|^2/(2\mu)$.`),
      b(String.raw`Combining the bounds yields $0\le f(x)-f^*\le(\|\hat g\|+\varepsilon)^2/(2\mu)$. Treating $\hat g$ as exact would omit the permitted oracle error.`, String.raw`Kết hợp các cận được $0\le f(x)-f^*\le(\|\hat g\|+\varepsilon)^2/(2\mu)$. Coi $\hat g$ là chính xác sẽ bỏ qua sai số oracle cho phép.`),
    ],
    companions: [
      {
        prompt: b(String.raw`A $2$-strongly convex objective has approximate gradient norm $\|\hat g\|=0.12$ with error at most $\varepsilon=0.03$. Compute the certified gap bound.`, String.raw`Một mục tiêu lồi mạnh $2$ có gradient xấp xỉ chuẩn $\|\hat g\|=0.12$ với sai số không quá $\varepsilon=0.03$. Hãy tính cận gap được chứng nhận.`),
        solution: [
          b(String.raw`First bound the true gradient norm by $0.12+0.03=0.15$.`, String.raw`Trước hết chặn chuẩn gradient thật bởi $0.12+0.03=0.15$.`),
          b(String.raw`Square this bound to get $0.15^2=0.0225$, and use $2\mu=4$.`, String.raw`Bình phương cận này được $0.15^2=0.0225$, và dùng $2\mu=4$.`),
          b(String.raw`Thus $f(x)-f^*\le0.0225/4=0.005625$.`, String.raw`Vậy $f(x)-f^*\le0.0225/4=0.005625$.`),
        ],
      },
      {
        prompt: b(String.raw`An oracle returns $\hat g=0$ with error bound $\varepsilon=0.1$ for a globally $0.5$-strongly convex objective. What gap bound is certified, and why is zero not certified?`, String.raw`Oracle trả $\hat g=0$ với cận sai số $\varepsilon=0.1$ cho mục tiêu lồi mạnh toàn cục $0.5$. Cận gap nào được chứng nhận và vì sao không chứng nhận được gap bằng không?`),
        solution: [
          b(String.raw`The true gradient norm may be as large as $0+0.1=0.1$, so the measured zero does not imply a zero true gradient.`, String.raw`Chuẩn gradient thật có thể lớn đến $0+0.1=0.1$, nên giá trị đo bằng không không suy ra gradient thật bằng không.`),
          b(String.raw`The robust certificate is $(0.1)^2/(2(0.5))=0.01$.`, String.raw`Chứng chỉ vững là $(0.1)^2/(2(0.5))=0.01$.`),
          b(String.raw`A zero-gap claim would require additional information that the true gradient vanishes or the iterate is optimal; the nonzero error radius alone gives no such fact.`, String.raw`Khẳng định gap bằng không cần thêm thông tin gradient thật bằng không hoặc iterate tối ưu; bán kính sai số khác không không cung cấp điều đó.`),
        ],
      },
      {
        prompt: b(String.raw`For a $1$-strongly convex objective, suppose $\varepsilon=0.02$ and you need to certify gap at most $0.002$. What largest $\|\hat g\|$ suffices?`, String.raw`Với mục tiêu lồi mạnh $1$, giả sử $\varepsilon=0.02$ và cần chứng nhận gap không quá $0.002$. Giá trị $\|\hat g\|$ lớn nhất nào vẫn đủ?`),
        solution: [
          b(String.raw`Require $(\|\hat g\|+0.02)^2/2\le0.002$, which is equivalent to $\|\hat g\|+0.02\le\sqrt{0.004}$.`, String.raw`Cần $(\|\hat g\|+0.02)^2/2\le0.002$, tương đương $\|\hat g\|+0.02\le\sqrt{0.004}$.`),
          b(String.raw`Since $\sqrt{0.004}\approx0.0632456$, it suffices that $\|\hat g\|\le0.0632456-0.02\approx0.0432456$.`, String.raw`Vì $\sqrt{0.004}\approx0.0632456$, điều kiện đủ là $\|\hat g\|\le0.0632456-0.02\approx0.0432456$.`),
          b(String.raw`At this threshold the robust bound equals $0.002$; any smaller observed norm also certifies the target, while a larger one is inconclusive under this bound.`, String.raw`Tại ngưỡng này cận vững bằng $0.002$; chuẩn quan sát nhỏ hơn cũng chứng nhận mục tiêu, còn giá trị lớn hơn chưa kết luận được theo cận này.`),
        ],
      },
    ],
    reviewNote: 'Checked triangle-inequality direction, nonnegative squaring, and substitution of the true-gradient bound into the strong-convexity theorem. Restriction: ε must be a valid norm-error bound at this iterate, μ>0 must hold globally, and the result is conservative rather than an estimate of the exact gap.',
    sourceIds: ['o-boyd'],
  },
  'm2-w070-e5': {
    application: b(String.raw`A tiny gradient may reflect flat curvature rather than proximity to a minimizer in objective value. A gradient-gap certificate needs a uniform positive curvature bound; pointwise convexity alone does not supply one.`, String.raw`Gradient rất nhỏ có thể do độ cong phẳng, chứ không chứng tỏ giá trị mục tiêu gần cực tiểu. Chứng chỉ gradient-gap cần cận độ cong dương đồng đều; tính lồi điểmwise không cung cấp cận đó.`),
    formula: b(String.raw`For twice-differentiable $f$ on a convex domain, $\nabla^2 f(x)\succeq\mu I$ for all $x$ implies $\mu$-strong convexity. For $f(x)=x^4$ on $\mathbb R$, $f'(x)=4x^3$, $f''(x)=12x^2$, and $\inf_{\mathbb R}f''=0$, so no fixed $\mu>0$ gives the global gradient-gap certificate.`, String.raw`Với $f$ khả vi hai lần trên miền lồi, $\nabla^2 f(x)\succeq\mu I$ với mọi $x$ suy ra lồi mạnh $\mu$. Với $f(x)=x^4$ trên $\mathbb R$, $f'(x)=4x^3$, $f''(x)=12x^2$, và $\inf_{\mathbb R}f''=0$, nên không có $\mu>0$ cố định để dùng chứng chỉ gradient-gap toàn cục.`),
    steps: [
      b(String.raw`At $x=0.01$, compute $f(x)=(10^{-2})^4=10^{-8}$ and $|f'(x)|=4(10^{-2})^3=4\cdot10^{-6}$.`, String.raw`Tại $x=0.01$, tính $f(x)=(10^{-2})^4=10^{-8}$ và $|f'(x)|=4(10^{-2})^3=4\cdot10^{-6}$.`),
      b(String.raw`At $x=1$, the values are $f(1)=1$ and $|f'(1)|=4$.`, String.raw`Tại $x=1$, các giá trị là $f(1)=1$ và $|f'(1)|=4$.`),
      b(String.raw`The second derivative is $12x^2$, whose infimum over $\mathbb R$ is $0$. A fixed positive lower curvature bound therefore fails near zero.`, String.raw`Đạo hàm bậc hai là $12x^2$, có infimum trên $\mathbb R$ bằng $0$. Vì vậy cận dưới độ cong dương cố định thất bại gần gốc.`),
      b(String.raw`Although both gradient and gap happen to be small at $0.01$, no global $\mu>0$-strong-convexity premise holds, so the theorem's certificate cannot be invoked for this function on $\mathbb R$.`, String.raw`Dù gradient và gap đều tình cờ nhỏ tại $0.01$, tiền đề lồi mạnh toàn cục $\mu>0$ không đúng, nên không thể viện dẫn chứng chỉ của định lý cho hàm này trên $\mathbb R$.`),
    ],
    primarySolution: [
      b(String.raw`For $f(x)=x^4$, differentiation gives $f'(x)=4x^3$ and $f''(x)=12x^2$.`, String.raw`Với $f(x)=x^4$, lấy đạo hàm được $f'(x)=4x^3$ và $f''(x)=12x^2$.`),
      b(String.raw`At $x=0.01$, $f=10^{-8}$ and $|f'|=4\cdot10^{-6}$; at $x=1$, $f=1$ and $|f'|=4$.`, String.raw`Tại $x=0.01$, $f=10^{-8}$ và $|f'|=4\cdot10^{-6}$; tại $x=1$, $f=1$ và $|f'|=4$.`),
      b(String.raw`Since $\inf_{x\in\mathbb R}12x^2=0$, there is no fixed $\mu>0$ such that $f''(x)\ge\mu$ everywhere. Thus $x^4$ is not globally strongly convex on $\mathbb R$.`, String.raw`Vì $\inf_{x\in\mathbb R}12x^2=0$, không có $\mu>0$ cố định sao cho $f''(x)\ge\mu$ ở mọi nơi. Do đó $x^4$ không lồi mạnh toàn cục trên $\mathbb R$.`),
      b(String.raw`The small gradient at $0.01$ is observed but does not establish a certified gap: the uniform curvature hypothesis needed for that theorem is absent.`, String.raw`Gradient nhỏ tại $0.01$ là điều quan sát được nhưng không xác lập gap được chứng nhận: thiếu giả thiết độ cong đồng đều cần cho định lý.`),
    ],
    companions: [
      {
        prompt: b(String.raw`Prove directly from the strong-convexity inequality that $f(x)=x^4$ cannot be $\mu$-strongly convex on $\mathbb R$ for any fixed $\mu>0$.`, String.raw`Hãy chứng minh trực tiếp từ bất đẳng thức lồi mạnh rằng $f(x)=x^4$ không thể lồi mạnh $\mu$ trên $\mathbb R$ với bất kỳ $\mu>0$ cố định nào.`),
        solution: [
          b(String.raw`Strong convexity would require $f(y)\ge f(x)+f'(x)(y-x)+\frac{\mu}{2}(y-x)^2$ for every $x,y$.`, String.raw`Lồi mạnh đòi hỏi $f(y)\ge f(x)+f'(x)(y-x)+\frac{\mu}{2}(y-x)^2$ với mọi $x,y$.`),
          b(String.raw`Set $x=0$ and $y=t$. Since $f(0)=f'(0)=0$, this requires $t^4\ge\frac{\mu}{2}t^2$.`, String.raw`Đặt $x=0$, $y=t$. Vì $f(0)=f'(0)=0$, điều kiện đòi hỏi $t^4\ge\frac{\mu}{2}t^2$.`),
      b(String.raw`For $t\ne0$, it implies $t^2\ge\mu/2$, which fails by choosing $0<|t|<\sqrt{\mu/2}$. Hence no fixed $\mu>0$ works.`, String.raw`Với $t\ne0$, điều này suy ra $t^2\ge\mu/2$, nhưng sai khi chọn $0<|t|<\sqrt{\mu/2}$. Vậy không có $\mu>0$ cố định phù hợp.`),
        ],
      },
      {
        prompt: b(String.raw`Restrict $f(x)=x^4$ to $C=[1,\infty)$. Verify a strong-convexity parameter and use it to bound the gap at $x=2$, whose constrained minimizer is $x^*=1$.`, String.raw`Giới hạn $f(x)=x^4$ trên $C=[1,\infty)$. Hãy xác minh tham số lồi mạnh rồi dùng nó chặn gap tại $x=2$, với điểm cực tiểu có ràng buộc $x^*=1$.`),
        solution: [
          b(String.raw`On $C$, $f''(x)=12x^2\ge12$, so $f$ is $12$-strongly convex there. Its minimum on $C$ is at the boundary $x^*=1$.`, String.raw`Trên $C$, $f''(x)=12x^2\ge12$, nên $f$ lồi mạnh $12$. Cực tiểu trên $C$ ở biên $x^*=1$.`),
          b(String.raw`At $x=2$, the actual gap is $2^4-1^4=15$ and the gradient is $f'(2)=32$.`, String.raw`Tại $x=2$, gap thực tế là $2^4-1^4=15$ và gradient là $f'(2)=32$.`),
          b(String.raw`The certificate gives $|f'(2)|^2/(2\mu)=32^2/24=128/3\approx42.67$, so it validly bounds $15$ despite the boundary minimizer having nonzero derivative.`, String.raw`Chứng chỉ cho $|f'(2)|^2/(2\mu)=32^2/24=128/3\approx42.67$, nên chặn hợp lệ giá trị $15$ dù đạo hàm tại cực tiểu biên khác không.`),
        ],
      },
      {
        prompt: b(String.raw`On $[0,1000]$, let $q(t)=0.001t$, with minimizer $t^*=0$. Compare the gradient magnitude and objective gap at $t=1000$, and explain why the gradient-gap theorem is unavailable.`, String.raw`Trên $[0,1000]$, cho $q(t)=0.001t$ với điểm cực tiểu $t^*=0$. Hãy so sánh độ lớn gradient và gap mục tiêu tại $t=1000$, rồi giải thích vì sao không dùng được định lý gradient-gap.`),
        solution: [
          b(String.raw`The function is increasing, so its minimum on the interval is $q(0)=0$; at $t=1000$, the gap is $q(1000)-q(0)=1$.`, String.raw`Hàm tăng nên cực tiểu trên đoạn là $q(0)=0$; tại $t=1000$, gap là $q(1000)-q(0)=1$.`),
          b(String.raw`Its derivative is constant $q'(t)=0.001$, so the gradient magnitude is only $0.001$ at that point.`, String.raw`Đạo hàm không đổi $q'(t)=0.001$, nên độ lớn gradient tại điểm đó chỉ là $0.001$.`),
          b(String.raw`This affine function has zero curvature and is not μ-strongly convex for any $\mu>0$ on the interval. A small gradient alone therefore gives no strong-convexity gap certificate.`, String.raw`Hàm affine này có độ cong bằng không và không lồi mạnh $\mu>0$ trên đoạn với bất kỳ μ nào. Do đó riêng gradient nhỏ không tạo chứng chỉ gap lồi mạnh.`),
        ],
      },
    ],
    reviewNote: 'Checked f′=4x³, f″=12x², endpoint evaluations, and the zero curvature infimum at x=0. Restriction: the failure is for a fixed global μ>0 on R; on domains bounded away from zero (for example [1,∞)) the same function has a positive strong-convexity constant.',
    sourceIds: ['o-boyd'],
  },
};

export default lessons;
