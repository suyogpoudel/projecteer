import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailVerificationProps {
  username: string;
  verifyUrl: string;
}

const EmailVerification = (props: EmailVerificationProps) => {
  const { username, verifyUrl } = props;

  return (
    <Html
      lang="en"
      dir="ltr"
    >
      <Head />
      <Preview>
        Please verify your email address to complete your registration
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-lg shadow-sm max-w-[600px] mx-auto p-[40px]">
            <Section>
              <Heading className="text-[24px] font-bold text-gray-900 mb-[24px] text-center">
                Verify Your Email Address
              </Heading>

              <Text className="text-[16px] text-gray-700 mb-[8px] leading-[24px]">
                Hello {username},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Thank you for signing up! To complete your registration and
                secure your account, please verify your email address by
                clicking the button below.
              </Text>

              <Section className="text-center mb-[32px]">
                <Button
                  href={verifyUrl}
                  className="bg-blue-600 text-white px-[32px] py-[12px] rounded-md text-[16px] font-medium no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                If the button doesn't work, you can copy and paste this link
                into your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 mb-[32px] break-all">
                {verifyUrl}
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px]">
                This verification link will expire in 24 hours. If you didn't
                create an account, you can safely ignore this email.
              </Text>
            </Section>

            <Section className="border-t border-gray-200 pt-[24px] mt-[40px]">
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                Best regards,
                <br />
                The Team
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                123 Main Street, City, State 12345
                <br />
                <a
                  href="#"
                  className="text-gray-500 no-underline"
                >
                  Unsubscribe
                </a>{" "}
                | © 2026 Company Name
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailVerification;
