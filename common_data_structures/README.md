### Підсумок складностей (коротко)

• Array access: O(1)
• Insert/delete middle (array): O(n)
• Linked list insert/remove head: O(1)
• Stack/Queue operations: O(1) (при правильній реалізації)
• HashMap/Set: average O(1)
• BST: average O(log n), worst O(n)
• Heap: push/pop O(log n)
• Trie: O(L) (L — довжина ключа)
• Union-Find: ~O(1) амортизовано
• Segment tree: O(log n) запит/оновлення

### Поради по вибору структури

• Потрібен випадковий доступ → масив / typed array.
• Потрібно часто вставляти/видаляти на початку → linked list або deque.
• Потрібно швидко знайти елемент за ключем → Map / HashMap.
• Потрібно пріоритетне вибирання найменшого/найбільшого → heap (priority queue).
• Працюєте зі словами/префіксами → Trie.
• Потрібно обʼєднувати компоненти/перевіряти connectivity → Union-Find.
• Діапазонні запити (sum/min/max) → Segment Tree або Fenwick (BIT) (якщо тільки сумування — BIT простіше).
