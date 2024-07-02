import React from "react";
import { ImageRatio } from "components";
import { DATA_BREADCRUMBS } from "routes";
import { BreadcrumbsCustom } from "compositions";
import { Container, Typography, styled, Stack, Divider } from "@mui/material";

export default function CheckGoods() {
  return (
    <Container>
      <BreadcrumbsCustom breadcrumbsData={DATA_BREADCRUMBS.returnOrder} />

      <Stack gap="32px">
        <Title>CHÍNH SÁCH KIỂM HÀNG</Title>

        <ImageRatio ratio="16/9" imageProps={{ src: "/img/kiem-hang.jpg", alt: "img" }} />

        <Divider />

        <Stack gap="24px">
          <Text>
            - Quý khách vui lòng kiểm tra thật kỹ hàng hoá, đối chiếu sản phẩm với chứng
            từ, phiếu bảo hành (nếu có) trước khi nhận. Trường hợp Quý khách nhờ người
            thân/nhân viên nhận hàng, thì vẫn cần kiểm tra hàng kỹ trước khi nhận. Sau khi
            đã giao hàng thành công và sau 48h kể từ thời điểm giao hàng thành công, The
            Hill Store chỉ chịu trách nhiệm nếu xảy ra lỗi kỹ thuật do Nhà sản xuất (theo
            quy định Đổi/Trả hàng và Quy định Bảo hành), mọi trường hợp khiếu nại khác sẽ
            không thuộc trách nhiệm của chúng tôi và chúng tôi có quyền từ chối yêu cầu xử
            lý của Quý khách.
          </Text>

          <Text>
            - Quý khách lưu ý, tất cả các sản phẩm do The Hill Store bán ra đều có đầy đủ
            chứng từ như: Hóa đơn bán hàng; hoặc (và) Phiếu giao hàng; hoặc (và) Biên bản
            giao hàng; hoặc (và) Hóa đơn tài chính (nếu khách hàng yêu cầu). Do vậy khách
            hàng có quyền từ chối nhận hàng khi không có 1 trong 4 loại chứng từ trên,
            việc này nhằm đảm bảo chất lượng sản phẩm, mua đúng hàng tại The Hill Store,
            đồng thời đảm bảo quyền lợi của Quý khách trong việc Đổi/Trả hàng.
          </Text>

          <Text>
            - Thời gian giao hàng có thể chậm hơn dự kiến vì một số lý do như: Địa chỉ
            khách hàng không đúng, Khách hàng không có ở nhà, Nhân viên giao hàng không
            liên hệ được với khách hàng, thiên tai, hỏa hoạn, dịch bệnh, khu phong tỏa,
            cách ly tại từng địa phương,... Nếu vì lý do của The Hill Store, chúng tôi sẽ
            liên hệ với Quý khách để sắp xếp lại thời gian giao hàng hợp lý.
          </Text>

          <Text>
            - Trường hợp đã quá số thời gian dự kiến mà khách hàng chưa nhận được hàng,
            vui lòng phản hồi lại với chúng tôi qua tổng đài 19003338 để chúng tôi có biện
            pháp khắc phục nhanh nhất. Trong thời gian chờ hàng nếu Quý khách muốn thay
            đổi đơn hàng (Thay đổi sản phẩm, Không muốn nhận hàng nữa,...) mà bên dịch vụ
            chưa phát khách hàng, vui lòng thông báo lại The Hill Store để chúng tôi giải
            quyết với bên dịch vụ chuyển phát.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h2,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: 700,
    color: "#111827",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    color: "#374151",
    textAlign: "justify",
  };
});
