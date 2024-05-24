document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const submenuItems = document.querySelectorAll(".submenu-item");
    const contentDiv = document.getElementById("content");
    const employeeMenu = document.getElementById("employees-menu");
    const employeeSubmenu = document.getElementById("employee-submenu");

    if (employeeMenu) {
        employeeMenu.addEventListener("click", function(event) {
            event.preventDefault();
            employeeSubmenu.style.display = employeeSubmenu.style.display === "block" ? "none" : "block";
        });
    }

    submenuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const content = item.getAttribute("data-content");
            updateContent(content);
        });
    });

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const content = item.getAttribute("data-content");
            updateContent(content);
        });
    });

    function updateContent(content) {
        let html = '';

        switch(content) {
            case 'dashboard':
                html = '<h2>Dashboard</h2><p>Dashboard content goes here...</p>';
                break;
            case 'roles':
                html = `
                    <h2>Roles</h2>
                    <div id="class">
                        <ul>
                            <li>All Roles</li>
                            <li>Permissions</li>
                        </ul>
                    </div>
                    <p>Search Roles by Title, Teams, or any related keyword</p>
                    <input type="search" placeholder="Search Roles by Title, Teams, or any related keyword">
                    <ul class="role-list">
                        <li>All</li>
                        <li>Product</li>
                        <li>Engineering</li>
                        <li>Marketing</li>
                        <li>Recruitment</li>
                        <li>Sales</li>
                        <li>Customer Service</li>
                    </ul>
                `;
                break;
            case 'all-employees':
                html = `
                    <p>Search Employees by Name, Roles, ID, or any related keyword</p>
                    <input type="search" placeholder="Search Employees by Name, Roles, ID, or any related keyword">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Teams</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="path/to/image1.jpg" alt="Tanner Fisher" class="employee-img"> Tanner Fisher<br><a href="mailto:Tannerfisher@gmail.com">Tannerfisher@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status active">Active</button></td>
                                <td>Marketing Design</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image2.jpg" alt="Emeto Winner" class="employee-img"> Emeto Winner<br><a href="mailto:Emetowinner@gmail.com">Emetowinner@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status active">Active</button></td>
                                <td>Product Design</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image3.jpg" alt="Tassy Omah" class="employee-img"> Tassy Omah<br><a href="mailto:Tessyomah@gmail.com">tassyomah@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status active">Active</button></td>
                                <td>Product</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image4.jpg" alt="James Muriel" class="employee-img"> James Muriel<br><a href="mailto:jamesMuriel@Aerten.finance">jamesMuriel@Aerten.finance</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status inactive">Inactive</button></td>
                                <td>Engineering Design</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image5.jpg" alt="Emeto Winner" class="employee-img"> Emeto Winner<br><a href="mailto:Emetowinner@gmail.com">Emetowinner@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status active">Active</button></td>
                                <td>Product Design</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image6.jpg" alt="Tassy Omah" class="employee-img"> Tassy Omah<br><a href="mailto:tassyomah@gmail.com">tassyomah@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status active">Active</button></td>
                                <td>Engineering Design</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image7.jpg" alt="Emeto Winner" class="employee-img"> Emeto Winner<br><a href="mailto:Emetowinner@gmail.com">Emetowinner@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status inactive">Inactive</button></td>
                                <td>Product Design</td>
                            </tr>
                            <tr>
                                <td><img src="path/to/image8.jpg" alt="Tanner Fisher" class="employee-img"> Tanner Fisher<br><a href="mailto:Tannerfisher@gmail.com">Tannerfisher@gmail.com</a></td>
                                <td>#23454GH6J7YT6</td>
                                <td>Product Design</td>
                                <td><button class="status active">Active</button></td>
                                <td>Marketing Design</td>
                            </tr>
                        </tbody>
                    </table>
                `;
                break;
            case 'recent-hires':
                html = '<h2>Recent Hires</h2><p>Content for recent hires goes here...</p>';
                break;
            case 'payroll':
                html = '<h2>Payroll Report</h2><p>Payroll report content goes here...</p>';
                break;
            case 'settings':
                html = '<h2>Settings</h2><p>Settings content goes here...</p>';
                break;
            default:
                html = '<p>Select a menu item to view content</p>';
        }

        contentDiv.innerHTML = html;

        if (content === 'all-employees' || content === 'recent-hires') {
            const statusButtons = document.querySelectorAll(".status");
            statusButtons.forEach(button => {
                button.addEventListener("click", function() {
                    if (button.classList.contains("active")) {
                        button.classList.remove("active");
                        button.classList.add("inactive");
                        button.textContent = "Inactive";
                    } else {
                        button.classList.remove("inactive");
                        button.classList.add("active");
                        button.textContent = "Active";
                    }
                });
            });
        }
    }
});
