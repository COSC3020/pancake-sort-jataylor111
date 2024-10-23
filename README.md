# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

-----------------------------------------------------------------------------------

First my comparisons.  This will be $\Theta(n^2)$, this is because at first it enters a while loop that will run the length of the array by starting with the length and incrementing down it.  Next there is a nested for loop that is also based on the variable "n" that will start at the length of the array and while it gets smaller as the while loop goes on, it still is linear time. Thus the runtime of this part is $\Theta(n*n) = \Theta(n^2)$

Next is the flips.  This has a runtime of $\Theta(n)$.  Since it contains just a single while loop that runs in linear time.


I wanted to get a better grasp of the concepts so I used this wikipedia article (https://en.wikipedia.org/wiki/Pancake_sorting) but I intentionally did not go over their code because I didn't want to get trapped in their method, I did compare my final product to their python code however.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice

