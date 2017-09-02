package com.brij;

import java.util.*;
import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;
public class ServFirst extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException {
	     response.setContentType("text/html");
	     Cookie fn=new Cookie("firstname",request.getParameter("uname"));
	     fn.setMaxAge(60*60*24);
	     ln.setMaxAge(60*60*24);
	     Cookie ln=new Cookie("lastname",request.getParameter("pass"));
	     response.addCookie(ln);
	     response.addCookie(fn);
	     try {
			PrintWriter out=response.getWriter();
			String un=request.getParameter("uname");
			String pass=request.getParameter("pass");
			if(un==null || pass==null) {
				out.print("<h1>Nill</h1>");
			}
			else {
				out.print("<a href='ReadCookie'><h1>Welcome</h1></a>");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void doPost(HttpServletRequest request,HttpServletResponse response) {
		try {
			doGet(request,response);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}