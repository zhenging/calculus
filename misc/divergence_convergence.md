---
tags: [infinite series, divergence, convergence]
page: 668
section: 9.5 The Ratio, Root, and Comparison Tests
---

### Guideline
When testing a series of positive terms $\sum a_k$ for convergence
1. Begin with _The Divergence Test_.
2. Is the series a special series? Recall the convergence of the following series.
  + Geometric Series
  + p-Series
  + Check also for a telescoping series
3. If the general kth term of the series looks like a function you can integrate, then try the _Integral Test_.
4. If the general kth term of the series involves $k!, k^k, a^k$, where $a$ is a constant, the Ratio Test is advisable. Series with k in an exponent yield to the Root Test.
5. If the general kth term of the series is a rational function of $k$ (or a root of a rational function), Use the _Direct Comparison Test_ or the _Limit Comparison Test_. (Use the families of series given in Step 2 as comparison series)

#### The Ratio Test

>Theorem The Ratio Test
Let $\sum a_k$ be an infinite series with positive terms and let $r = \dlim_{k \to \infty} \frac{a_{k+1}}{a_k}$
1\. If $0 \les r < 1$, the series converges.
2\. If $r > 1$ (including $r=\infty$), the series diverges.
3\. If $r=1$, the test in inconclusive.
