# Khoá Fulllstack Playwright Test Automation 
## Tổng hợp kiến thức đã học trong Lesson 03
### Học sinh: Rose Nguyen

Trong bài số 3 này, chúng ta đã học các phần tiếp theo trong hai nội dung: Git và Javascript

---

**Git**

1. Undo actions: Các câu lệnh để quay lại các vùng làm việc cũ
    - git restore --staged <file-name> : Từ Staging quay lại Working directory, áp dụng cho file trong ngoặc.
    - git restore --staged . : Áp dụng cho tất cả các file.
    - git reset HEAD~<số-commit> : Từ Resposity quay lại Working directory theo số commit trong ngoặc

2. Branching model: Các câu lệnh về nhánh của git. git sử dụng nhánh để tạo ra các phiên bản riêng của code, tránh ảnh hưởng tới bản gốc.
    - git branch: Kiểm tra các nhánh và màu xanh lá là nhánh mình đang đứng
    - git branch <tên-nhánh>: Tạo nhánh mới
    - git checkout <tên-nhánh>: Đi tới nhánh trong ngoặc.
    - git checkout -b <tên-nhánh>: Tạo nhánh mới và đi tới nhánh đó.
    - git branch -d <tên-nhánh>: Xoá nhánh, nhưng phải đứng ở nhánh khác mới xoá được nhánh trong ngoặc.

3. File .gitignore: Giúp mình chỉ định các file và thư mục không được theo dõi bởi git, không cần đưa vào git repository. Muốn các lệnh git không ảnh hưởng tới file và thư mục nào thì ghi tên file và thư mục đó vào file .gitignore

4. Amend: Các câu lệnh để thay đổi tin nhắn trong câu lệnh git commit -m
    - git commit --amend -m "new-message"
    - git commit --amend: Sửa trực tiếp message trên terminal

---

**Javascript**

1. Name convention: Cách viết tên khác nhau
    - snake_case
    - kebab-case
    - camelCase
    - PascalCase

2. Object: Một trong những kiểu lưu trữ dữ liệu quan trọng nhất trong javascript, dùng để lưu trữ dữ liệu dạng key-value.
    - Cú pháp
        - key: giống quy tắc đặt tên biến.
        - value: có kiểu giống biến, hoặc là một object khác.
    - Ví dụ: Const/let variable-name = {
        
        key 1: value1,
        
        key2: value2
    
    }
    - Truy xuất giá trị object: dùng dấu chấm . hoặc []

3. Array: Mảng
    
    - Tạo mảng
        Khai báo
        Sử dụng
    
    - Truy xuất mảng
            
        - Độ dài mảng: leng
        - Lấy phần tử theo index: [0], [1], [2]

4. Function
    - Hàm: Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện một nhiệm vụ hoặc một tính toán cụ thể.
    - Khai báo: function nameFunction () {
        
        // code
    
    }

***