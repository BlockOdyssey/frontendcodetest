# BlockOdyssey Front-End Recruitment Assignment

## **[Purpose]**

This assignment is to assess basic skills and knowledge.
<br />
<br />

## **[Assignment]**

Your objective is to implement an administrator page for a shopping mall that sells old smartphones and tablets.

You need to build a product list page with search and pagination.

Please complete the **[Required Tasks]**
<br />
<br />

## **[Available Libraries]**

-   **React v17 / v18** (Use React hooks, no class component)
-   **react-query v4**
-   **redux-toolkit**
    <br />
    <br />

## **[Submission]**

Please send the GitHub Repository Link to the recruiter.
<br />
<br />

## **[Guidance]**

-   Both **JavaScript** and **TypeScript** are allowed.
-   Your objective is to complete the [Required Tasks]. As long as you have the required components implemented, how it looks does not matter.
-   Only **HTML, CSS(SASS)** are allowed. Please do not use any other CSS Frameworks or UI Component libraries such as **bootstrap, material-ui, tailwindcss and styled-components**
-   If you need to use the state management library, please use **redux-toolkit.**
-   You are not allowed to use **redux-persist, localStorage**
    <br />
    <br />

## **[Required Tasks]**

### **API address** : <https://dummyjson.com/products?limit=100> [JSON]

`List`

-   It should be a search result list.

-   After page refresh, the search result should persist.

-   The column is in order of **[상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고]**.

-   Display the total amount of data at the top of the list.

-   The maximum length of **[상품내용]** is 40 characters. If it exceeds the maximum length, you should display the rest of the content using ellipsis `...`.

`Search`

-   Search conditions are the following : **[전체, 상품명, 브랜드, 상품내용].**
-   Both **search condition and keyword** must be persisted after the refresh.

`Pagination`

-   Implement **rows per page** using a select box. The select box should display **[10, 20, 50]** options.
-   Both **rows per page and page number** must be persisted after the refresh.
    <br />
    <br />

## **[Resources]**

![First Image](/1.png)  
<br />
<br />
![Second Image](/2.png)  
<br />
<br />
![Third Image](/3.gif)
