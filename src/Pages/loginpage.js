
import javax.swing.*;
import java.awt.*;

public class LoginPage {
    public static void main(String[] args) {
    JFrame frame = new JFrame("Login Page");
    frame.setSize(400, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setLayout(new GridLayout(4, 2, 10, 10));

    JLabel userLabel = new JLabel("Username:");
    JTextField username = new JTextField();

    JLabel passLabel = new JLabel("Password:");
    JPasswordField password = new JPasswordField();

    JButton loginButton = new JButton("Login");
    JLabel message = new JLabel("");

    loginButton.addActionListener(e -> {
    String user = username.getText();
    String pass = new String(password.getPassword());

    if (user.equals("admin") &&
    pass.equals("1234")) {
    message.setText("Login Successful!");
} else {
    message.setText("Invalid Login!");
}
});

frame.add(userLabel);
frame.add(username);
frame.add(passLabel);
frame.add(password);
frame.add(loginButton);
frame.add(message);

frame.setLocationRelativeTo(null);
frame.setVisible(true);
}
}
