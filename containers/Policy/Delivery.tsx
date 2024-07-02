import React from "react";
import { ImageRatio } from "components";
import { DATA_BREADCRUMBS } from "routes";
import { BreadcrumbsCustom } from "compositions";
import { Container, Typography, styled, Stack, Divider } from "@mui/material";

export default function Delivery() {
  return (
    <Container>
      <BreadcrumbsCustom breadcrumbsData={DATA_BREADCRUMBS.delivery} />

      <Stack gap="32px">
        <Title>CHÍNH SÁCH VẬN CHUYỂN</Title>

        <ImageRatio
          ratio="16/9"
          imageProps={{ src: "/img/van-chuyen.jpg", alt: "img" }}
        />

        <Divider />

        <Stack gap="32px">
          <SubTitle textAlign="center">CHÍNH SÁCH VẬN CHUYỂN - THE HILL STORE</SubTitle>

          <Text>
            The Hill Store trực thuộc Công Ty TNHH The Hill Việt Nam thực hiện dịch vụ bán
            hàng & giao hàng tận nơi trên toàn lãnh thổ Việt Nam. Nhằm tạo điều kiện thuận
            lợi cho khách hàng khi giao dịch cũng như minh bạch chính sách vận chuyển,
            chúng tôi rất mong Quý khách hàng tham khảo thật kỹ chính sách vận chuyển của
            chúng tôi như sau:
          </Text>
        </Stack>

        <Stack gap="24px">
          <ListStyleSubTitle>
            <li>NHẬN HÀNG TẠI KHO THE HILL STORE</li>
          </ListStyleSubTitle>

          <Text>
            - Với những khách hàng đến mua / nhận hàng tại The Hill Store, Quý khách sẽ
            liên hệ đặt hàng qua tổng đài 19003338, nhân viên bán hàng sẽ kiểm tra, xác
            nhận và tạo đơn hàng trước cho quý khách, sau đó quý khách sẽ đến nhận hàng và
            thanh toán trực tiếp tại The Hill Store.
          </Text>

          <Text>
            - Quý khách vui lòng kiểm tra thật kỹ hàng hoá, đối chiếu sản phẩm với chứng
            từ, phiếu bảo hành (nếu có) trước khi nhận.
          </Text>

          <Text>
            - Quý khách sẽ được nhân viên bán hàng cung cấp đầy đủ chứng từ Hóa đơn bán
            hàng; hoặc (và) Hóa đơn tài chính (nếu khách hàng yêu cầu). Quý khách có quyền
            yêu cầu nhân viên bán hàng cung cấp chứng từ nếu chưa cung cấp kịp thời.
          </Text>

          <Text>
            - Quý khách hàng vui lòng đến kho nhận hàng trong vòng 24h tính từ thời điểm
            khách hẹn qua kho lấy hàng. Sau thời gian này, hệ thống xử lý đơn hàng của
            chúng tôi sẽ tự động hủy đơn hàng mà Quý khách đã đặt (trừ trường hợp Quý
            khách đã thanh toán trước).
          </Text>

          <ListStyleSubTitle>
            <li>NHÂN VIÊN THE HILL STORE GIAO</li>
          </ListStyleSubTitle>

          <Text>
            - Với những khách hàng thuộc khu vực nội thành Tp.HCM, nhân viên The Hill
            Store sẽ giao hàng tại địa chỉ của Quý khách.
          </Text>

          <Text>
            - Sau khi nhận được đơn hàng từ Quý khách, chúng tôi sẽ kiểm tra và xác nhận
            đơn hàng. Sau khi đơn hàng được duyệt, bộ phận giao hàng / đơn vị vận chuyển
            sẽ liên với Quý khách và vận chuyển sản phẩm đó tới địa chỉ đăng ký của Quý
            khách.
          </Text>

          <Text>
            - Thời gian giao hàng được tính bắt đầu từ lúc đơn hàng được giao cho bộ phận
            giao hàng / đơn vị vận chuyển.
          </Text>

          <Stack gap="4px">
            <Text>
              - Thời gian giao hàng cụ thể phụ thuộc vào khoảng cách địa lý, thông thường
              thời gian giao hàng được dự kiến như sau (không bao gồm chiều thứ 7, chủ
              nhật, các ngày lễ, tết, ngày nghỉ của The Hill Store ...):
            </Text>

            <Text>
              • Trong phạm vi Nội thành Tp.Hồ Chí Minh: thời gian giao hàng sẽ từ 1 - 3
              ngày.
            </Text>

            <Text>
              • Vận chuyển đến các tỉnh thành khác: thời gian giao hàng sẽ từ 4 - 7 ngày.
            </Text>
          </Stack>

          <Text>
            - Một số trường hợp khách hàng đặt mua sản phẩm cần lắp đặt và giá trị lớn và
            có địa chỉ ở các tỉnh lân cận xa Tp.HCM, nhân viên The Hill Store sẽ giao hàng
            tại địa chỉ của Quý khách (nếu khách hàng yêu cầu). Khi đó chúng tôi sẽ báo
            thêm chi phí phát sinh (tuỳ trường hợp).
          </Text>

          <Text>
            - Quý khách vui lòng trực tiếp kiểm tra kỹ hàng hóa ngay khi nhận hàng từ nhân
            viên giao hàng, nếu có vấn đề liên quan tới chủng loại, mẫu mã, chất lượng, số
            lượng hàng hoá không đúng như trong đơn đặt hàng thì vui lòng không nhận hàng
            và trả lại cho nhân viên giao hàng. Nếu không có bất cứ vấn đề gì, Quý khách
            vui lòng nhận hàng, ký nhận vào phiếu giao hàng và thanh toán cho nhân viên
            giao nhận toàn bộ hoặc một phần (nếu đã đặt cọc) giá trị hàng hóa đã mua, bao
            gồm: giá trị tiền hàng + phí vận chuyển (nếu có) + phí lắp đặt (nếu có).
          </Text>

          <Text>
            - Trường hợp có bất kỳ khiếu nại gì liên quan đến sản phẩm, nhân viên giao
            hàng, nhân viên bán hàng, ...Quý khách vui lòng báo ngay cho chúng tôi trong
            vòng 48h kể từ lúc nhận hàng qua tổng đài 1900338 để phối hợp xử lý. Sau thời
            gian này, chúng tôi sẽ không thể xử lý mọi khiếu nại của Quý khách.
          </Text>

          <Text>
            - Trường hợp hàng hóa không có sẵn tồn kho tại The Hill Store, nhân viên bán
            hàng sẽ liên hệ với Quý khách để thương thảo lại về thời gian giao hàng.
          </Text>

          <Text>
            - Trường hợp vì một lý do nào đó nhân viên của The Hill Store không thể giao
            hàng kịp thời, chúng tôi sẽ liên hệ lại và thông báo cho Quý khách được biết.
          </Text>

          <Stack>
            <Text>- Phí giao hàng:</Text>
            <Text>• Đơn hàng có giá trị từ 500.000 VNĐ đến dưới 1.000.000 VNĐ:</Text>
            <Text>- Khách hàng sẽ được miễn phí vận chuyển trong phạm vi 15km.</Text>
            <Text>- Thời gian giao hàng: Đơn hàng sẽ được giao trong ngày.</Text>
            <Text>• Đơn hàng có giá trị từ 1.000.000 VNĐ trở lên:</Text>
            <Text>- Khách hàng sẽ được miễn phí vận chuyển trong phạm vi 20km.</Text>
            <Text>- Thời gian giao hàng: Đơn hàng sẽ được giao trong vòng 48 tiếng.</Text>
            <Text>• Tất cả những trường hợp khác ngoài 2 trường hợp trên:</Text>
            <Text>
              - The Hill Store sẽ book đơn vị vận chuyển ngoài và khách hàng sẽ tự chịu
              phí giao hàng dựa theo phí giao hàng của đơn vị vận chuyển ngoài.
            </Text>
          </Stack>

          <Stack>
            <Text>** Lưu ý:</Text>
            <Text>
              - Đối với hàng hóa cồng kềnh hoặc nặng từ 50kg trở lên, tùy thuộc vào từng
              vị trí và yêu cầu của khách hàng, nhân viên bán hàng sẽ thông báo mức phí cụ
              thể sau khi nhận được đơn đặt hàng.
            </Text>
            <Text>
              - Một số đơn hàng có thể sẽ vận chuyển lâu hơn do Người Mua hẹn giao hàng
              muộn vì lý do cá nhân.
            </Text>
            <Text>
              - Trong trường hợp khu vực giao hàng của Khách Hàng có quy định về giờ cấm
              tải và hàng hóa được đặt mua là sản phẩm cồng kềnh, thời gian giao hàng có
              thể sẽ lâu hơn dự kiến.
            </Text>
          </Stack>

          <ListStyleSubTitle>
            <li>NHÂN VIÊN CHUYỂN PHÁT GIAO</li>
          </ListStyleSubTitle>

          <Text>
            - Với những khách hàng thuộc các quận, huyện ngoại thành Tp.HCM, các tỉnh
            ngoài Tp.HCM mà nhân viên The Hill Store không thể giao hàng được, chúng tôi
            sẽ ủy quyền cho 1 số đơn vị chuyển phát như Giao Hàng Nhanh, Ahamove hoặc 1 số
            đơn vị chuyển phát có uy tín khác vận chuyển đơn hàng đến Quý khách.
          </Text>

          <Text>
            - Khi đặt hàng, Quý khách vui lòng điền đầy đủ và chính xác các thông tin cần
            thiết theo yêu cầu để tạo điều kiện thuận lợi cho chúng tôi trong việc cung
            cấp hàng hóa và nhận thanh toán nhanh chóng. Chúng tôi cũng không chịu trách
            nhiệm đối với những trường hợp giao hàng chậm trễ hay thất lạc vì các thông
            tin do Quý khách cung cấp không chính xác.
          </Text>

          <Text>
            - Thời gian giao hàng tùy thuộc vào Quý khách lựa chọn chuyển phát nhanh hay
            chuyển phát thường, thời gian này chỉ mang tính chất tương đối. Chuyển phát
            nhanh: Từ 2 đến 3 ngày, Chuyển phát thường: Từ 5 đến 10 ngày (tuỳ vào từng đơn
            vị vận chuyển).
          </Text>

          <Text>
            - Quý khách vui lòng kiểm tra kỹ hàng hóa ngay khi nhận hàng từ người chuyển
            phát hàng hóa, nếu có vấn đề liên quan tới chủng loại, chất lượng, số lượng
            hàng hoá không đúng như trong đơn đặt hàng, Quý khách vui báo ngay cho chúng
            tôi để phối hợp với đơn vị chuyển phát hàng hóa xử lý thông qua tổng đài
            19003338. Sau khi khách hàng đã ký nhận từ người chuyển phát đã nhận đủ hàng
            thì chúng tôi không thể xử lý mọi khiếu nại của Quý khách liên quan đến đơn
            hàng đã nhận.
          </Text>

          <Text>
            - Nếu có bất kỳ sự cố nào liên quan đến hàng hóa như thất lạc, đổ vỡ thì khách
            hàng phải gọi điện báo ngay qua số tổng đài 19003338 ngay khi nhận hàng. The
            Hill Store sẽ có trách nhiệm đại diện cho khách hàng khiếu nại, làm việc, giải
            quyết sự cố với bên phía đơn vị vận chuyển để đền bù lại cho khách hàng.
          </Text>

          <Stack>
            <Text>- Phí giao hàng:</Text>
            <Text>• Đơn hàng có bao gồm 1 thùng cà phê (10kg) trở lên:</Text>
            <Text>- Khách hàng sẽ được hoàn toàn miễn phí vận chuyển.</Text>
            <Text>• Những trường hợp khác:</Text>
            <Text>
              - Khách hàng sẽ hoàn toàn tự chịu phí giao hàng của các đơn vị vận chuyển
              ngoài như GHN, GHTK, VNPost,...
            </Text>
            <Text>
              - Nhân viên bán hàng dựa vào phí tốt nhất của đơn vị vận chuyển tại từng
              thời điểm, áp dụng các ưu đãi vận chuyển (nếu có) cho khách hàng và sẽ xác
              nhận với khách hàng trước khi tạo đơn (trường hợp có sự thay đổi do sự thay
              đổi theo từng chính sách tại từng thời điểm của đơn vị vận chuyển, nhân viên
              bán hàng sẽ thông báo lại với khách hàng).
            </Text>
          </Stack>

          <Stack>
            <Text>** Lưu ý:</Text>
            <Text>
              - Đối với hàng hóa cồng kềnh hoặc nặng từ 50kg trở lên, tùy thuộc vào từng
              vị trí và yêu cầu của khách hàng, nhân viên bán hàng sẽ thông báo mức phí cụ
              thể sau khi nhận được đơn đặt hàng, đồng thời có thể phát sinh chi phí đóng
              gói, gia cố hàng hóa cồng kềnh, nhân viên bán hàng sẽ thông báo cụ thể cho
              từng đơn hàng.
            </Text>
            <Text>
              - Trọng lượng quy định do các đơn vị vận chuyển cập nhật, thay đổi theo từng
              thời điểm. The Hill Store sẽ thông tin đầy đủ, chính xác đến khách hàng
              trước khi giao hàng.
            </Text>
          </Stack>

          <ListStyleSubTitle>
            <li>GIAO HÀNG QUA CHÀNH XE (NHÀ XE)</li>
          </ListStyleSubTitle>

          <Text>
            - Thông thường hình thức giao hàng này sẽ áp dụng cho khách hàng các quận,
            huyện ngoại thành Tp.HCM, các tỉnh ngoài Tp.HCM, hoặc Quý khách muốn chuyển
            thông qua nhà xe để đảm bảo chi phí và thời gian giao hàng.
          </Text>

          <Text>
            - The Hill Store sẽ thực hiện giao hàng cho Quý khách đến nhà xe theo đúng yêu
            cầu của khách hàng (hoặc nhân viên The Hill Store sẽ gợi ý một vài chành xe có
            tuyến đường có thể giao đến địa chỉ của khách hàng). Quý khách vui lòng cung
            cấp chính xác thông tin nhà xe cho chúng tôi: Tên nhà xe (tên xe), Họ tên chủ
            xe (hoặc lái xe, phụ xe), Biển số xe, số điện thoại, thời gian xe đến và xe đi
            tại các bến xe,... và 1 số thông tin khác.
          </Text>

          <Text>
            - Quý khách vui lòng thanh toán toàn bộ giá trị đơn hàng trước khi The Hill
            Store chuyển hàng hoặc nhà của xe khách sẽ thanh toán toàn bộ giá trị đơn hàng
            khi nhân viên của The Hill Store giao hàng. Đồng thời, Quý khách nên yêu cầu
            chủ xe (người nhận hàng từ The Hill Store) kiểm tra kỹ hàng hóa trước khi
            nhận. The Hill Store sẽ không chịu bất kỳ khiếu nại nào liên quan đến số
            lượng, chất lượng, hư hỏng phát sinh kể từ khi đại diện của nhà xe đã ký nhận.
          </Text>

          <Stack>
            <Text>- Phí giao hàng:</Text>
            <Text>
              • Đơn hàng có bao gồm 1 thùng cà phê trở lên: Khách hàng sẽ được hoàn toàn
              miễn phí vận chuyển (bao gồm phí ra chành xe, phí chành xe).
            </Text>
            <Text>
              • Đơn hàng có giá trị từ 1.000.000 VNĐ trở lên và không bao gồm cà phê hoặc
              dưới 1 thùng cà phê: Khách hàng sẽ được miễn phí phí ra chành xe và tự chịu
              phí chành xe.
            </Text>
            <Text>
              • Tất cả những trường hợp khác ngoài 2 trường hợp trên: Khách hàng sẽ hoàn
              toàn tự chịu phí ra chành xe, phí chành xe.
            </Text>
            <Text>
              - Phí giao đến các bến xe, chành xe (nhà xe) tại Tp.HCM: 20.000 VNĐ đối với
              các đơn hàng dưới 1.000.000 VNĐ.
            </Text>
            <Text>
              - Khách hàng chịu phí vận chuyển từ bến xe, nhà xe (chành xe) đến địa chỉ
              của khách hàng. The Hill Store có thể ứng trước và cộng vào đơn hàng để
              khách hàng thanh toán.
            </Text>
          </Stack>

          <Stack>
            <Text>** Lưu ý:</Text>
            <Text>
              - Đối với hàng hóa cồng kềnh hoặc nặng từ 50kg trở lên, tùy thuộc vào từng
              vị trí và yêu cầu của khách hàng, nhân viên bán hàng sẽ thông báo mức phí cụ
              thể sau khi nhận được đơn đặt hàng.
            </Text>
            <Text>
              - Phía The Hill Store chỉ đảm bảo an toàn cho đơn hàng ra tới chành xe. Còn
              quá trình vận chuyển đơn hàng từ chành xe về tới khách hàng nếu có thất lạc
              hay đổ vỡ thì khách hàng sẽ chịu hoàn toàn trách nhiệm.
            </Text>
          </Stack>

          <ListStyleSubTitle>
            <li>THÔNG TIN CHUNG</li>
          </ListStyleSubTitle>

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

          <SubTitle textAlign="center">THE HILL STORE trân trọng.</SubTitle>
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

const SubTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h2,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    color: "#111827",

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  };
});

const ListStyleSubTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h2,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    color: "#111827",
    paddingLeft: "12px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
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
