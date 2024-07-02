import React from "react";
import { ImageRatio } from "components";
import { DATA_BREADCRUMBS } from "routes";
import { BreadcrumbsCustom } from "compositions";
import { Container, Typography, styled, Stack, Divider } from "@mui/material";

export default function Terms() {
  return (
    <Container>
      <BreadcrumbsCustom breadcrumbsData={DATA_BREADCRUMBS.terms} />

      <Stack gap="32px">
        <Title>ĐIỀU KHOẢN - CHÍNH SÁCH SỬ DỤNG</Title>

        <ImageRatio
          ratio="16/9"
          imageProps={{ src: "/img/dieu-khoan-va-chinh-sach-su-dung.jpg", alt: "img" }}
        />

        <Text sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "24px" }}>
          Chào mừng bạn đến với website THE HILL STORE. THE HILL STORE là website cung cấp
          nguyên liệu pha chế trực thuộc Công Ty TNHH The Hill Việt Nam.
        </Text>

        <Divider />

        <SubTitle textAlign="center">ĐIỀU KHOẢN SỬ DỤNG</SubTitle>

        <Stack gap="16px">
          <ListStyleSubTitle>1. GIỚI THIỆU</ListStyleSubTitle>

          <Stack>
            <Text>Chào mừng bạn đến với Website.</Text>
            <Text>
              THE HILL STORE là Website cung cấp nguyên liệu pha chế trực thuộc Công Ty
              TNHH The Hill Việt Nam, có văn phòng tại: 14E41 Đường Thảo Điền, Phường Thảo
              Điền, Thành phố Thủ Đức, Thành phố Hồ Chí Minh.
            </Text>
            <Text>
              Khi bạn truy cập vào Website của chúng tôi có nghĩa là bạn đã đồng ý với các
              điều khoản này.
            </Text>
            <Text>
              Website THE HILL STORE có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất
              kỳ phần nào trong Điều khoản mua bán sản phẩm, dịch vụ vào bất cứ lúc nào.
            </Text>
            <Text>
              Các thay đổi có hiệu lực ngay khi được cập nhật trên Website mà không cần
              phải thông báo trước.
            </Text>
            <Text>
              Và khi bạn tiếp tục sử dụng Website sau khi có các thay đổi về Điều khoản
              này được đăng tải, có nghĩa là bạn chấp nhận với những thay đổi đó.
            </Text>
          </Stack>
        </Stack>

        <Stack gap="16px">
          <ListStyleSubTitle>2. QUYỀN VÀ TRÁCH NHIỆM CỦA KHÁCH HÀNG</ListStyleSubTitle>

          <Stack>
            <Text>
              Khi truy cập Website THE HILL STORE, khách hàng phải đảm bảo cung cấp đầy đủ
              thông tin xác thực của bản thân và phải cập nhật nếu như có bất kỳ thay đổi
              nào.
            </Text>
            <Text>
              Khách hàng phải bảo mật các thông tin cá nhân, thông báo cho chúng tôi biết
              khi tài khoản bị truy cập trái phép. Chúng tôi không chịu bất kỳ trách nhiệm
              nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra
              khi khách không tuân thủ đúng quy định.
            </Text>
            <Text>
              Không sử dụng Website để gây khó khăn cho việc hoạt động kinh doanh của THE
              HILL STORE cũng như can thiệp vào hệ thống hay làm thay đổi các cấu trúc dữ
              liệu.
            </Text>
            <Text>
              Khách hàng có thể gửi yêu cầu hỗ trợ trong quá trình sử dụng Website của
              chúng tôi thông qua hình thức gọi điện đến số tổng đài chăm sóc khách hàng
              hoặc hình thức khác theo quy định của Công ty.
            </Text>
          </Stack>
        </Stack>

        <Stack gap="16px">
          <ListStyleSubTitle>3. QUYỀN VÀ TRÁCH NHIỆM CỦA CHÚNG TÔI</ListStyleSubTitle>
          <Stack>
            <Text>
              THE HILL STORE có quyền sở hữu tất cả các quyền sỡ hữu tài sản trí tuệ, lợi
              ích có liên quan đối với Website.
            </Text>
            <Text>Tuân thủ đúng các quy định của pháp luật liên quan.</Text>
            <Text>
              Đảm bảo đáp ứng đầy đủ sản phẩm, dịch vụ cho khách hàng theo đúng như thỏa
              thuận.
            </Text>
            <Text>
              Giải đáp thắc mắc, khiếu nại của khách hàng liên quan đến việc cung cấp sản
              phẩm, dịch vụ.
            </Text>
            <Text>
              Chúng tôi coi trọng việc bảo mật thông tin khách hàng, trừ trường hợp phải
              cung cấp thông tin theo quy định của pháp luật.
            </Text>
            <Text>Các quyền khác theo quy định của Công ty và pháp luật.</Text>
          </Stack>
        </Stack>

        <Stack gap="16px">
          <ListStyleSubTitle>4. Ý KIẾN CỦA KHÁCH HÀNG</ListStyleSubTitle>
          <Stack>
            <Text>
              Tất cả nội dung trên Website và ý kiến phản hồi của khách hàng đều là tài
              sản của chúng tôi.
            </Text>
            <Text>
              Nếu phát hiện bất kỳ thông tin giả mạo nào, chúng tôi sẽ khóa tài khoản của
              khách hàng ngay lập tức hoặc áp dụng các biện pháp khác theo quy định của
              pháp luật Việt Nam.
            </Text>
          </Stack>
        </Stack>

        <Stack gap="16px">
          <ListStyleSubTitle>5. CHẤP NHẬN ĐƠN HÀNG VÀ GIÁ CẢ</ListStyleSubTitle>
          <Stack>
            <Text>
              Chúng tôi cam kết sẽ cung cấp thông tin giá cả một cách chính xác nhất cho
              khách hàng.
            </Text>
            <Text>
              Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá sản phẩm
              không hiển thị chính xác trên trang Website hoặc sai giá, tùy theo từng
              trường hợp chúng tôi sẽ liên hệ hướng dẫn hoặc thông báo hủy đơn hàng đó cho
              khách hàng.
            </Text>
          </Stack>
        </Stack>

        <Stack gap="16px">
          <ListStyleSubTitle>6. THAY ĐỔI HOẶC HỦY BỎ GIAO DỊCH</ListStyleSubTitle>
          <Stack>
            <Text>
              Trong mọi trường hợp, khách hàng đều có quyền chấm dứt giao dịch nếu đã thực
              hiện các biện pháp sau đây:
            </Text>
            <Text>
              Thông báo cho chúng tôi về việc hủy giao dịch qua
              {<span style={{ fontWeight: 700 }}> Hotline: 0939 079 779</span>}
            </Text>
            <Text>
              - Trả lại hàng hoá đã nhận nhưng chưa sử dụng theo đúng Chính sách Đổi Trả.
            </Text>
          </Stack>
        </Stack>

        <Stack gap="16px">
          <ListStyleSubTitle>7. THANH TOÁN AN TOÀN VÀ TIỆN LỢI</ListStyleSubTitle>
          <Stack>
            <Text>
              Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp
              dụng phương thức phù hợp:
            </Text>
            <Text>
              - Cách 1: Thanh toán sau{" "}
              <span style={{ fontStyle: "italic" }}>
                (COD – giao hàng và thu tiền tận nơi)
              </span>
              .
            </Text>
            <Text>- Cách 2: Thanh toán bằng chuyển khoản.</Text>
            <Text>
              Đối với người mua hàng từ Website THE HILL STORE thì phải tuẩn thu theo
              chính sách thanh toán của công ty đưa ra.
            </Text>
          </Stack>
        </Stack>

        <SubTitle textAlign="center">CHÍNH SÁCH SỬ DỤNG</SubTitle>

        <Stack gap="16px">
          <Text>A. MỤC ĐÍCH</Text>
          <Text>
            Chính sách hoạt động Website THE HILL STORE được ban hành bởi Công Ty TNHH The
            Hill Việt Nam, bao gồm các quy định, chính sách liên quan đến hoạt động trên
            Website THE HILL STORE của công ty.
          </Text>
          <Text>B. PHẠM VI VÀ HIỆU LỰC</Text>
          <Stack>
            <Text>Đối tượng áp dụng: Tất cả người dùng trên Website THE HILL STORE.</Text>
            <Text>Thời gian có hiệu lực: từ 22/06/2020.</Text>
          </Stack>
          <Text>C. NỘI DUNG</Text>
          <Text sx={{ fontWeight: 700 }}>QUY ĐỊNH</Text>
          <Text sx={{ fontWeight: 700 }}>1. QUY ĐỊNH CHUNG</Text>
          <Text sx={{ fontWeight: 700 }}>1.1. Mục đích</Text>
          <Stack>
            <Text>
              <span style={{ fontWeight: 700 }}>Công Ty TNHH The Hill Việt Nam</span> ban
              hành chính sách hoạt động của trang thương mại điện tử nhằm đảm bảo lợi ích
              của Khách Hàng, khi Khách Hàng đăng ký sử dụng, thực hiện mua Hàng Hóa, sử
              dụng các Dịch Vụ, thanh toán và sử dụng các tính năng được thực hiện trên
              Website THE HILL STORE.
            </Text>

            <Text>
              Tổ chức, cá nhân tham gia giao dịch trên Website THE HILL STORE tự do thỏa
              thuận trên cơ sở tôn trọng quyền và lợi ích hợp pháp của các bên và không
              trái với qui định của pháp luật.
            </Text>

            <Text>
              Hoạt động mua bán Hàng Hóa, cung ứng Dịch vụ trên Website THE HILL STORE
              phải được thực hiện công khai, minh bạch, đảm bảo quyền lợi của người tiêu
              dùng.
            </Text>

            <Text>
              Tất cả các nội dung trong Quy định này phải tuân thủ theo hệ thống pháp luật
              hiện hành của Việt Nam. Thành viên khi tham gia trên Website THE HILL STORE
              phải tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành
              của Việt Nam và cam kết thực hiện đúng những nội dung trong Quy chế trên
              Website THE HILL STORE.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>
            1.2. Địa chỉ trang thương mại điện tử The Hill Việt Nam
          </Text>
          <Stack>
            <Text>
              Website THE HILL STORE phát triển và phát hành trên nền tảng website và các
              kho dùng cho điện thoại thông minh sử dụng hệ điều hành Android của Google
              và IOS của hãng Apple Inc. có địa chỉ liên kết như dưới đây:
            </Text>
            <Text>
              <a
                href="https://www.thehillstore.com.vn/"
                style={{ textDecoration: "none", color: "#374151" }}
              >
                - Website: https://www.thehillstore.com.vn/
              </a>
            </Text>
            <Text>Hỗ trợ khách hàng Website THE HILL STORE:</Text>
            <Text>
              - Hotline:{" "}
              <a
                href={`tel:0939 079 779`}
                style={{ textDecoration: "none", color: "#374151" }}
              >
                0939 079 779
              </a>
            </Text>
            <Text>
              - Email:{" "}
              <a
                href={`mailto:info@thehillcoffee.vn`}
                style={{ textDecoration: "none", color: "#374151" }}
              >
                info@thehillcoffee.vn
              </a>
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>1.3. Định nghĩa và diễn giải</Text>
          <Stack>
            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Công Ty TNHH The Hill Việt Nam:
              </span>{" "}
              Là chủ sở hữu hợp pháp của Website THE HILL STORE.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Trang thương mại điện tử:
              </span>{" "}
              Là website thương mại điện tử cho phép người dùng truy cập vào cơ sở dữ liệu
              của Website THE HILL STORE để mua hàng hóa, sử dụng các dịch vụ do THE HILL
              STORE cung cấp.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Khách Hàng:
              </span>{" "}
              Là tổ chức, cá nhân mua Hàng Hóa, sử dụng Dịch vụ hoặc các tính năng có trên
              Website THE HILL STORE. Khách Hàng bắt buộc phải đăng ký tài khoản để tham
              gia giao dịch mua Hàng Hóa.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Kho The Hill:
              </span>{" "}
              Là đơn vị thuộc quyền quản lý, sử dụng, sở hữu của THE HILL STORE.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Đơn Hàng:
              </span>{" "}
              Là chứng từ điện tử của THE HILL STORE nhằm xác nhận việc Khách Hàng đã thực
              hiện giao dịch trên Website THE HILL STORE.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Ngày làm việc:
              </span>{" "}
              Là các ngày từ thứ hai đến thứ sáu (08h30 – 17h30), thứ bảy (08h30 đến
              12h30), trừ các ngày Chủ Nhật và ngày lễ theo quy định của pháp luật.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                COD:
              </span>{" "}
              Là phương thức thanh toán dùng tiền mặt khi giao hàng thành công.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Đơn Vị Vận Chuyển:
              </span>{" "}
              Là tổ chức, cá nhân thuộc THE HILL STORE hoặc đối tác của THE HILL STORE
              nhằm thực hiện việc vận chuyển Hàng Hóa.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Giao Hàng Không Thành Công:
              </span>{" "}
              Là trường hợp Đơn Vị Vận Chuyển không thể thực hiện thành công việc giao
              hàng cho Khách Hàng.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Giao Hàng Thành Công:
              </span>{" "}
              Là Hàng Hóa được giao thành công và đã thu tiền của Khách Hàng{" "}
              <span style={{ fontStyle: "italic" }}>(nếu có)</span>.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Dịch Vụ Thương Mại Điện Tử:
              </span>{" "}
              Là các dịch vụ bao gồm nhưng không giới hạn khởi tạo, giao hàng, lưu trữ, xử
              lý Đơn Hàng, ... được cung cấp bởi THE HILL STORE.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Đối Tác Cổng Thanh Toán:
              </span>{" "}
              Là các đối tác cổng thanh toán đã được cấp phép hoạt động hợp pháp tại Việt
              Nam.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Phiếu đổi trả hàng:
              </span>{" "}
              Là chứng từ nhằm mục đích hỗ trợ cho việc đổi trả hàng.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Phiếu giao hàng:
              </span>{" "}
              Là chứng từ nhằm mục đích xác nhận việc giao hàng.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Phí Dịch Vụ:
              </span>{" "}
              Là các khoản phí mà THE HILL STORE thu từ Khách Hàng thông qua các dịch vụ
              được cung cấp theo Chính sách phí và biểu phí.
            </Text>

            <Text>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                E-Voucher:
              </span>{" "}
              Là phiếu mua Hàng Hóa/Dịch vụ điện tử.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>
            1.4. Quyền & Nghĩa vụ của Công Ty TNHH The Hill Việt Nam
          </Text>
          <Stack>
            <Text>
              Ban hành, điều chỉnh, sửa đổi, bổ sung các chính sách, quy định, quy trình
              nhằm phù hợp với hoạt động của Website THE HILL STORE.
            </Text>

            <Text>
              Ban hành, điều chỉnh, sửa đổi, bổ sung các biểu giá dịch vụ, phí, phương
              thức thanh toán trong thời gian cung cấp Dịch Vụ Thương Mại Điện Tử.
            </Text>

            <Text>
              Đảm bảo Hàng Hóa, Dịch Vụ tham gia giao dịch trên Website THE HILL STORE là
              Hàng Hóa đã được cơ quan nhà nước có thẩm quyền của Việt Nam phê duyệt, đạt
              tiêu chuẩn chất lượng, có xuất xứ rõ ràng, hợp pháp theo quy định pháp luật
              Việt Nam và được phép lưu hành tại thị trường Việt Nam.
            </Text>

            <Text>
              Đảm bảo hoạt động thương mại điện tử trên Website THE HILL STORE tuân thủ
              theo pháp luật Việt Nam.
            </Text>

            <Text>
              Áp dụng các biện pháp cần thiết bảo đảm an toàn thông tin liên quan đến bí
              mật kinh doanh và thông tin của Khách Hàng.
            </Text>

            <Text>
              Hỗ trợ Khách Hàng khi giải quyết tất cả các khiếu nại phát sinh trong quá
              trình thực hiện việc mua bán Hàng Hóa,cung ứng dịch vụ.
            </Text>

            <Text>
              Bảo lưu, toàn quyền sở hữu, sử dụng hợp pháp các nội dung bao gồm nhưng
              không giới hạn hình ảnh, thông tin, thiết kế, âm thanh trên Website THE HILL
              STORE.
            </Text>

            <Text>
              Nhằm đảm bảo lợi ích cho Khách Hàng, theo quyết định của mình, THE HILL
              STORE có quyền yêu cầu Khách Hàng thực hiện các hành động và/hoặc không hành
              động trong các trường hợp phát sinh mâu thuẫn, khiếu nại, tranh chấp liên
              quan.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>1.5. Quyền & Nghĩa vụ của Khách Hàng</Text>
          <Stack>
            <Text>
              Khi đăng ký trở thành thành viên của Website THE HILL STORE và được THE HILL
              STORE đồng ý, <span style={{ fontWeight: 700 }}>Khách Hàng</span> sẽ được
              mua Hàng Hóa, sử dụng Dịch Vụ hoặc các tính năng có trên Website THE HILL
              STORE.
            </Text>

            <Text>
              <span style={{ fontWeight: 700 }}>Khách Hàng</span> có quyền đóng góp ý kiến
              cho THE HILL STORE trong quá trình hoạt động. Các kiến nghị được gửi trực
              tiếp bằng thư, fax, email hoặc gọi điện cho THE HILL STORE.
            </Text>

            <Text>
              <span style={{ fontWeight: 700 }}>Khách Hàng</span> có nghĩa vụ và trách
              nhiệm cung cấp các thông tin cần thiết liên quan đến bản thân để đảm bảo
              hoàn thành đơn hàng bao gồm: họ và tên giao dịch, địa chỉ, phương thức thanh
              toán lựa chọn, điện thoại liên hệ, và cam kết các thông tin trên là chính
              xác.
            </Text>

            <Text>
              <span style={{ fontWeight: 700 }}>Khách Hàng</span> có nghĩa vụ bảo vệ mật
              khẩu, khóa mật mã, thông tin cá nhân, hệ thống thiết bị của mình và chấp
              hành các quy định của pháp luật về an toàn, an ninh thông tin.
            </Text>

            <Text>
              <span style={{ fontWeight: 700 }}>Khách Hàng</span> chịu trách nhiệm đối với
              các nội dung đăng tải, các hành vi và nguyên tắc ứng xử khi tham gia trên
              Website THE HILL STORE.
            </Text>

            <Text>
              <span style={{ fontWeight: 700 }}>Khách Hàng</span> có trách nhiệm thông báo
              kịp thời cho THE HILL STORE về những hành vi sử dụng trái phép, lạm dụng, vi
              phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của mình để hai bên cùng hợp
              tác xử lý.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>1.6. Thông báo</Text>
          <Stack>
            <Text>
              Trong trường hợp có sự thay đổi quy định, thay đổi chính sách, THE HILL
              STORE sẽ thông báo trước 07{" "}
              <span style={{ fontStyle: "italic" }}>(bảy)</span> ngày kể từ ngày sự thay
              đổi có hiệu lực thông qua hòm thư điện tử{" "}
              <span style={{ fontStyle: "italic" }}>(email)</span> mà khách hàng đã đăng
              ký trên hệ thống. Trong trường hợp không đồng ý với sự thay đổi, Khách hàng
              có trách nhiệm thông báo trước ngày áp dụng thay đổi cho THE HILL STORE
              thông qua các kênh liên hệ chính thức tổng đài hoặc hòm thư điện tử{" "}
              <span style={{ fontStyle: "italic" }}>(email)</span> cskh@thehillcoffee.vn
              để xử lý chấm dứt hoạt động giữa hai bên.
            </Text>
            <Text>
              Nếu quá thời hạn trên mà THE HILL STORE không nhận được bất kỳ phản hồi nào
              từ phía khách hàng thì mặc nhiên thông báo có hiệu lực và khách hàng đã đồng
              ý với nội dung thông báo.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>2. CHÍNH SÁCH QUẢN LÝ TÀI KHOẢN</Text>
          <Text sx={{ fontWeight: 700 }}>2.1. Thông tin tên tài khoản</Text>
          <Stack>
            <Text>
              Đảm bảo thông tin đăng ký của Người dùng trùng khớp với tên chính thức hiển
              thị trên Website THE HILL STORE.
            </Text>

            <Text>
              Tên người dùng không quá 20{" "}
              <span style={{ fontStyle: "italic" }}>(hai mươi)</span> ký tự và không chứa
              tên miền.
            </Text>

            <Text>
              Không sử dụng từ ngữ, hình ảnh phản cảm, đồi trụy, trái với thuần phong mỹ
              tục Việt Nam.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>2.2. Hình ảnh của tài khoản</Text>
          <Stack>
            <Text>
              Tuân thủ theo kích thước đã hướng dẫn trên Website THE HILL STORE.
            </Text>

            <Text>
              Không sử dụng hình ảnh liên quan đến các vấn đề nhạy cảm như chính trị, tôn
              giáo, văn hóa, chủng tộc, bạo lực, định kiến về giới, về người khuyết tật,
              ... dưới bất cứ hình thức nào.
            </Text>

            <Text>
              Không sử dụng từ ngữ, hình ảnh phản cảm, đồi trụy, trái với thuần phong mỹ
              tục Việt Nam.
            </Text>

            <Text>
              Không sử dụng hình ảnh để chỉ trích, bôi bác, vu khống, xuyên tạc, xúc phạm
              nhân phẩm của bất cứ cá nhân hay tổ chức nào.
            </Text>

            <Text>
              Không sử dụng hình ảnh để khuyến khích quảng cáo cho việc sử dụng các sản
              phẩm độc hại như rượu, bia, thuốc lá, ...
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>2.3. Thông tin xuất hóa đơn</Text>
          <Stack>
            <Text>
              Khách hàng kiểm tra và đảm bảo các thông tin xuất hóa đơn là chính xác để
              phục vụ hệ thống thanh toán tự động xử lý chính xác.
            </Text>
            <Text>
              Trong trường hợp sai thông tin xuất hóa đơn, THE HILL STORE không thể hỗ trợ
              xuất lại{" "}
              <span style={{ fontStyle: "italic" }}>
                (trừ trường hợp do bộ phận kế toán của chúng tôi xuất sai thông tin so với
                thông tin khách hàng đã cung cấp).
              </span>
            </Text>
            <Text>
              Khách Hàng có trách nhiệm cung cấp và yêu cầu chỉnh sửa thông tin để không
              xảy ra trường hợp này lại trong các lần kế tiếp.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>2.4. Thông tin thanh toán</Text>
          <Stack>
            <Text>Cung cấp thông tin tài khoản thanh toán hợp pháp.</Text>
            <Text>
              Trong trường hợp thông tin cung cấp không chính xác dẫn đến giao dịch không
              thực hiện được, việc thanh toán sẽ được chuyển qua lần thanh toán sau khi
              Khách Hàng đã cung cấp thông tin chính xác.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>2.5. Thông tin liên hệ</Text>
          <Stack>
            <Text>
              Cung cấp thông tin chính xác để có thể nhận các thông báo cập nhật từ
              Website THE HILL STORE.
            </Text>
            <Text>
              Mọi thông báo trên Website THE HILL STORE là thông báo chính thức của THE
              HILL STORE và THE HILL STORE được miễn trừ mọi trách nhiệm trong trường hợp
              Khách Hàng không tiếp nhận được thông tin.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>3. CHÍNH SÁCH HÀNG HÓA</Text>
          <Text sx={{ fontWeight: 700 }}>3.1. Điều kiện Hàng Hóa</Text>
          <Stack>
            <Text>Có nguồn gốc, xuất xứ rõ ràng, có chứng từ hợp lệ.</Text>
            <Text>Được phân phối, lưu thông hợp pháp trên thị trường.</Text>
            <Text>
              Không thuộc danh mục Hàng Hóa bị cấm lưu thông, phân phối theo quy định pháp
              luật.
            </Text>
            <Text>
              Không vi phạm pháp luật sở hữu trí tuệ, pháp luật cạnh tranh và các quy định
              khác.
            </Text>
            <Text>
              Không phải là hàng giả, hàng nhái, kém chất lượng, bị hư hỏng, lỗi....
            </Text>
            <Text>Đảm bảo bao bì, đóng gói theo các tiêu chuẩn của nhà sản xuất.</Text>
            <Text>
              Các tiêu chuẩn, quy chuẩn khác đối với Hàng Hóa theo quy định của pháp luật.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>
            3.2. Danh sách Hàng Hóa hạn chế vận chuyển bằng đường hàng không
          </Text>
          <Stack>
            <Text>
              Tất cả các loại vũ khí{" "}
              <span style={{ fontStyle: "italic" }}>
                (
                <span style={{ fontWeight: 700, textDecoration: "underline" }}>
                  Ví dụ:
                </span>{" "}
                dao, sủng, lưỡi lê, côn, dùi cui, vũ khí thô sơ...).
              </span>
            </Text>
            <Text>
              Các loại vật dụng khác nhưng có hình dạng như dao, súng{" "}
              <span style={{ fontStyle: "italic" }}>
                (
                <span style={{ fontWeight: 700, textDecoration: "underline" }}>
                  Ví dụ:
                </span>{" "}
                bật lửa hình súng, hình dao...).
              </span>
            </Text>
            <Text>Súng hơi, súng lò xo, súng tự chế các loại.</Text>
            <Text>Bình xịt hơi cay.</Text>
            <Text>Roi điện.</Text>
            <Text>Đèn pin siêu sáng.</Text>
            <Text>
              Ác quy{" "}
              <span style={{ fontStyle: "italic" }}>
                (khối lượng trên 100 gram hoặc thể tích trên 100 ml).
              </span>
            </Text>
            <Text>
              Pin, sạc dự phòng, bình xăng{" "}
              <span style={{ fontStyle: "italic" }}>(gas)</span>, loa bluetooth, micro
              không dây{" "}
              <span style={{ fontStyle: "italic" }}>(các sản phẩm sử dụng Pin)</span>,
              tinh dầu tràm, ...
            </Text>
            <Text>
              Kim loại{" "}
              <span style={{ fontStyle: "italic" }}>(khối lượng trên 200 gram).</span>
            </Text>
            <Text>
              Dụng cụ chứa ga <span style={{ fontStyle: "italic" }}>(bật lửa)</span> có
              thể tích trên 50 ml.
            </Text>
            <Text>
              Các loại gel{" "}
              <span style={{ fontStyle: "initial" }}>(kem dưỡng, mỹ phẩm, nước hoa)</span>{" "}
              có thể tích trên 50 ml.
            </Text>
            <Text>Rượu, bia, chất có cồn thể tích trên 200 ml.</Text>
            <Text>Nước các loại - thể tích trên 500 ml.</Text>
            <Text>Tất cả các Hàng Hóa khác theo quy định của pháp luật Việt Nam.</Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>3.3. Tiêu chuẩn thông tin đăng tải</Text>
          <Stack>
            <Text>
              Đảm bảo thông tin thống nhất, rõ ràng, không gây nhầm lẫn cho Khách Hàng.
            </Text>
            <Text>
              Không được dùng các hình ảnh không phù hợp với thuần phong mỹ tục của Việt
              Nam.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>
            3.4. Quy định về giá bán trên trang thương mại điện tử
          </Text>
          <Stack>
            <Text>Giá niêm yết: là mức giá thị trường của Hàng Hóa.</Text>
            <Text>
              Giá bán: là giá mà Khách Hàng sẽ phải thanh toán. Trong một số trường hợp
              giá bán chưa bao gồm thuế VAT, phí vận chuyển và những chi phí liên quan
              khác <span style={{ fontStyle: "italic" }}>(nếu có)</span> sẽ được thể hiện
              rõ trên trang thương mại điện tử.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>3.5. Quy định về hạn sử dụng của sản phẩm</Text>
          <Stack>
            <Text>
              Ngày sản xuất, thời hạn sử dụng phải bảo đảm thể hiện thông tin chính xác và
              trung thực
            </Text>
            <Text>Thời hạn sử dụng phải bao gồm các thông tin sau đây:</Text>
            <Text>
              Ngày và tháng đối với sản phẩm có thời hạn sử dụng không quá ba tháng.
            </Text>
            <Text>Tháng và năm đối với sản phẩm có thời hạn sử dụng trên ba tháng.</Text>
            <Text>Ngày, tháng và năm phải được ghi theo dãy số không mã hóa.</Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>4. QUY TRÌNH GIAO DỊCH</Text>
          <Text>
            Khi có nhu cầu mua hàng trên Website THE HILL STORE, Khách Hàng cần thực hiện
            các bước sau đây:
          </Text>
          <Stack>
            <Text>Đăng nhập tài khoản.</Text>
            <Text>
              Tìm kiếm, tham khảo thông tin sản phẩm, dịch vụ, khuyến mại mà Khách Hàng
              đang quan tâm.
            </Text>
            <Text>
              Khách Hàng đưa ra quyết định đặt hàng trực tuyến bằng cách thêm sản phẩm vào
              giỏ hàng kiểm tra giỏ hàng và đặt hàng bằng cách click vào “Đặt hàng”.
            </Text>
            <Text>
              Đơn hàng của Khách Hàng sẽ được chuyển thông tin đến THE HILL STORE. Tùy vào
              thỏa thuận THE HILL STORE duyệt đơn hàng và có thể hỗ trợ quá trình vận
              chuyển hàng hóa và thanh toán đảm bảo.
            </Text>
            <Text>Khách Hàng nhận sản phẩm, dịch vụ.</Text>
            <Text>
              Khách Hàng thắc mắc, khiếu nại{" "}
              <span style={{ fontStyle: "italic" }}>(nếu có)</span> qua tổng đài hỗ trợ
              của THE HILL STORE.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>5. CHÍNH SÁCH GIAO NHẬN VẬN CHUYỂN</Text>
          <Stack>
            <Text>
              Sau khi nhận được đơn hàng từ Khách Hàng, THE HILL STORE sẽ kiểm tra và xác
              nhận hình thức giao dịch. Sau khi đơn hàng được duyệt, đơn vị vận chuyển sẽ
              vận chuyển sản phẩm đó tới địa chỉ đăng ký của Khách Hàng. Thời gian giao
              hàng được bắt đầu tính từ lúc đơn hàng được giao cho đơn vị vận chuyển thành
              công tới khi đơn vị vận chuyển liên hệ lần đầu tiên với Khách Hàng để giao
              hàng.
            </Text>

            <Text>
              Thời gian giao hàng cụ thể phụ thuộc vào khoảng cách địa lý. Tuy nhiên, THE
              HILL STORE ước tính thời gian chuyển hàng như sau{" "}
              <span style={{ fontStyle: "italic" }}>(không kể Chủ nhật, ngày Lễ):</span>
            </Text>

            <Text>
              Trong phạm vi Nội thành Tp.Hồ Chí Minh: thời gian giao hàng sẽ từ 1 - 3
              ngày.
            </Text>

            <Text>
              Vận chuyển đến các tỉnh thành khác: thời gian giao hàng sẽ từ 4 - 7 ngày.
            </Text>

            <Text sx={{ textDecoration: "underline" }}>Lưu ý:</Text>

            <Text>
              Một số đơn hàng có thể sẽ vận chuyển lâu hơn do Người Mua hẹn giao hàng muộn
              vì lý do cá nhân.
            </Text>

            <Text>
              Một số đơn hàng có thể sẽ vận chuyển lâu hơn do Người Mua ở vùng sâu; vùng
              xa hoặc hải đảo.
            </Text>

            <Text>
              Trong trường hợp khu vực giao hàng của Khách Hàng có quy định về giờ cấm tải
              và hàng hóa được đặt mua là sản phẩm cồng kềnh, thời gian giao hàng có thể
              sẽ lâu hơn dự kiến.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>6. CHÍNH SÁCH TRẢ HÀNG</Text>
          <Text sx={{ fontWeight: 700 }}>6.1. Đối tượng áp dụng</Text>
          <Stack>
            <Text>Hàng Hóa giao thành công và còn thời hạn đổi trả hàng.</Text>
            <Text>Hàng Hóa lỗi do nhà sản xuất.</Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>6.2. Nguyên tắc chung</Text>
          <Stack>
            <Text>
              Khi nhận được sản phẩm khác so với mô tả trên Website THE HILL STORE hoặc
              thiếu so với đơn hàng đã đặt, Khách Hàng có thể phản hồi THE HILL STORE
              trong vòng 24h kể từ lúc đơn hàng được cập nhật giao hàng thành công.
            </Text>
            <Text>
              Sau thời hạn trên, THE HILL STORE được quyền từ chối trả lời thông tin về
              các đơn hàng này.
            </Text>
            <Text>
              Hình thức trả hàng/ đổi hàng/ bổ sung hàng sẽ được thỏa thuận thương lượng
              giữa 2 bên.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>6.3. Điều kiện trả hàng</Text>
          <Stack>
            <Text>Không quá 24h kể từ ngày nhận hàng.</Text>

            <Text>
              Không có dấu hiệu đã qua sử dụng, còn nguyên bao bì đóng gói của nhà sản
              xuất, đầy đủ phụ kiện{" "}
              <span style={{ fontStyle: "italic" }}>(tem, phiếu bảo hành....)</span> cùng
              quà tặng kèm <span style={{ fontStyle: "italic" }}>(nếu có)</span>.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>6.4. Quy trình xử lý</Text>
          <Text sx={{ fontWeight: 700 }}>Bước 1: Đăng ký</Text>
          <Stack>
            <Text>
              Khách Hàng liên hệ với{" "}
              <span style={{ fontWeight: 700 }}>The Hill Việt Nam</span> qua{" "}
              <span style={{ fontWeight: 700 }}>Hotline: 0939 079 779</span> hoặc truy cập
              trang “Gửi yêu cầu” và cung cấp thông tin chi tiết về sản phẩm lỗi gồm:
            </Text>
            <Text>- Mã số đơn hàng.</Text>
            <Text>- Tên sản phẩm.</Text>
            <Text>
              - Lỗi sản phẩm{" "}
              <span style={{ fontStyle: "italic" }}>
                (mô tả chi tiết và kèm ảnh chụp nếu có).
              </span>
            </Text>
            <Text>- Nhu cầu cần hỗ trợ: đổi/trả/bảo hành.</Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>
            Bước 2: Nhận xác nhận đã đăng ký đổi / trả thành công và hướng dẫn đóng gói
          </Text>
          <Text>
            Sau khi yêu cầu đổi/trả/bảo hành được bộ phận phụ trách của chúng tôi chấp
            nhận, THE HILL STORE sẽ gửi đến quý khách một tin nhắn và email hướng dẫn gửi
            hàng về THE HILL STORE thông qua đối tác giao hàng.
          </Text>
          <Text sx={{ fontWeight: 700 }}>
            Bước 3: Đóng gói và mang sản phẩm đến bưu điện
          </Text>
          <Text>
            Quý khách có thể tham khảo mạng lưới bưu điện trên toàn quốc tại:
            <a
              href="http://www.vnpost.vn/POLocation.aspx"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              http://www.vnpost.vn/POLocation.aspx
            </a>
          </Text>
          <Text sx={{ fontWeight: 700 }}>Bước 4: Gửi sản phẩm về THE HILL STORE</Text>
          <Stack>
            <Text>
              Quý khách vui lòng gửi sản phẩm qua đường bưu điện về THE HILL STORE trong
              vòng 3 ngày làm việc kể từ khi thông báo với bộ phận Chăm sóc khách hàng và
              gửi kèm:
            </Text>
            <Text>
              - Hóa đơn bán hàng hoặc đính kèm giấy ghi chú có mã đơn hàng, Hóa đơn giá
              trị gia tăng <span style={{ fontStyle: "italic" }}>(nếu có)</span>.
            </Text>
            <Text>
              - Phụ kiện đi kèm sản phẩm và tặng khuyến mãi kèm theo{" "}
              <span style={{ fontStyle: "italic" }}>(nếu có).</span>
            </Text>
          </Stack>
          <Text>Một số lưu ý khi gửi hàng đến bưu điện:</Text>
          <Stack>
            <Text>
              Đóng gói, chèn lót sản phẩm như ban đầu nhưng không niêm phong bề mặt thùng
              ​trước khi hoàn tất quá trình gửi hàng ​vì có thể bưu điện cần kiểm tra
              trước khi nhận hàng từ quý khách.
            </Text>

            <Text>
              Cung cấp mã đơn hàng và mã gửi hàng THE HILL STORE đã gửi cho nhân viên bưu
              điện.
            </Text>

            <Text>
              Lưu ý không dán băng keo trực tiếp lên hộp sản phẩm vì yêu cầu đổi/trả có
              thể sẽ bị từ chối nếu hộp sản phẩm bị hư hỏng.
            </Text>

            <Text>
              Liên hệ <span style={{ fontWeight: 700 }}>Hotline: 0939 079 779</span> khi
              có bất cứ khó khăn xảy ra trong quá trình làm việc với bưu điện.
            </Text>

            <Text>
              Điền thông tin mã số đơn hàng lên thùng hàng và gửi hàng theo địa chỉ nhân
              viên chăm sóc khách hàng đã cung cấp.
            </Text>

            <Text>
              Lưu ý quý khách vui lòng chỉ gởi sản phẩm qua đường bưu điện và chịu trách
              nhiệm về trạng thái nguyên vẹn của sản phẩm khi gửi.
            </Text>

            <Text>
              Quý khách có thể ghi nhớ mã bưu gửi và tra cứu thông tin kiện hàng gửi trả
              tại:{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#374151",
                }}
                href="http://tracuudinhvi.hcmpost.vn/dv"
              >
                {" "}
                http://tracuudinhvi.hcmpost.vn/dv
              </a>
            </Text>

            <Text>
              Sau khi nhận được sản phẩm quý khách gởi về, THE HILL STORE sẽ phản hồi và
              cập nhật thông tin trên từng giai đoạn xử lý đến quý khách qua email.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>6.5. Phương thức hoàn tiền</Text>
          <Stack>
            <Text>
              Với đơn hàng đã được thanh toán bằng tiền mặt: THE HILL STORE tiến hành hoàn
              tiền theo phương thức chuyển khoản sau khi nhận được sản phẩm trả về của
              Khách hàng.
            </Text>
            <Text>
              Với đơn hàng đã được thanh toán online: THE HILL STORE sẽ hoàn tiền vào tài
              khoản mà quý khách đã sử dụng khi thanh toán.
            </Text>
            <Text>
              THE HILL STORE sẽ có thông báo qua email khi đã nhận được sản phẩm từ quý
              khách gởi về.
            </Text>
            <Text>
              Xin lưu ý, THE HILL STORE sẽ hoàn lại giá trị sản phẩm mà quý khách đã thanh
              toán. Phí vận chuyển, phụ phí và các khuyến mãi cộng thêm sẽ không được hoàn
              lại.
            </Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>7. CHÍNH SÁCH BẢO TRÌ, BẢO HÀNH</Text>
          <Text sx={{ fontWeight: 700 }}>7.1. Đối tượng áp dụng</Text>
          <Stack>
            <Text>Hàng Hóa giao thành công và còn thời hạn bảo hành.</Text>
            <Text>Hàng Hóa lỗi đã xử lý tiếp nhận bảo hành cho Khách Hàng.</Text>
          </Stack>
          <Text sx={{ fontWeight: 700 }}>7.2. Nguyên tắc chung</Text>
          <Stack>
            <Text>
              Bảo hành sản phẩm là khắc phục những lỗi hư hỏng, sự cố kỹ thuật xảy ra do
              lỗi của nhà sản xuất.
            </Text>

            <Text>
              Thời hạn bảo hành của sản phẩm{" "}
              <span style={{ fontStyle: "italic" }}>(nếu có)</span> được ghi chi tiết trên
              phiếu bảo hành <span style={{ fontStyle: "italic" }}>(nếu có)</span>.
            </Text>

            <Text>
              Trong thời gian bảo hành, sản phẩm phát sinh các lỗi do nhà sản xuất, sẽ
              được bảo hành miễn phí tại các trung tâm bảo của THE HILL STORE hoặc tại các
              đối tác của THE HILL STORE.
            </Text>

            <Text>
              Khi đổi sản phẩm mới, thời hạn bảo hành còn lại của sản phẩm cũ được chuyển
              sang sản phẩm mới.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>7.3 Điều kiện bảo hành đối với hàng hóa</Text>
          <Stack>
            <Text>
              Còn thời hạn bảo hành{" "}
              <span style={{ fontStyle: "italic" }}>
                (dựa trên tem/phiếu bảo hành/hoặc thời điểm kích hoạt bảo hành điện tử)
              </span>{" "}
              theo quy định của từng sản phẩm.
            </Text>
            <Text>Còn tem/phiếu bảo hành.</Text>
            <Text>
              Sản phẩm bị lỗi kỹ thuật hoặc theo quy định của từng sản phẩm được thể hiện
              trên Phiếu bảo hành.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>
            7.4 Các trường hợp có thể phát sinh phí bảo hành
          </Text>
          <Stack>
            <Text>Sản phẩm hết thời hạn bảo hành.</Text>
            <Text>
              Sản phẩm bị bể, biến dạng, cháy, nổ, ẩm thấp trong động cơ... do người sử
              dụng.
            </Text>
            <Text>
              Chi phí phát sinh sẽ được THE HILL STORE hoặc đối tác của THE HILL STORE
              thông báo trực tiếp đến khách hàng.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>
            8. CHÍNH SÁCH BẢO VỆ THÔNG TIN CÁ NHÂN KHÁCH HÀNG
          </Text>
          <Text sx={{ fontWeight: 700 }}>8.1. Mục đích thu thập thông tin cá nhân</Text>
          <Stack>
            <Text>
              Việc thu thập dữ liệu chủ yếu trên Website THE HILL STORE bao gồm: họ tên,
              email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ khách hàng
              (thành viên).
            </Text>

            <Text>
              Đây là các thông tin mà THE HILL STORE cần thành viên cung cấp bắt buộc khi
              đăng ký sử dụng dịch vụ và để THE HILL STORE liên hệ xác nhận khi khách hàng
              đăng ký sử dụng dịch vụ trên Trang thương mại điện tử THEHILL STORE nhằm đảm
              bảo quyền lợi cho cho người tiêu dùng.
            </Text>

            <Text>
              Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử
              dụng dịch vụ dưới tên đăng ký, số điện thoại đăng ký, mật khẩu và hộp thư
              điện tử của mình.
            </Text>

            <Text>
              Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho THE HILL STORE về
              những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng
              ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>8.2. Phạm vi sử dụng thông tin</Text>
          <Text>THE HILL STORE sử dụng thông tin thành viên cung cấp để:</Text>
          <Stack>
            <Text>Cung cấp các dịch vụ đến Thành viên.</Text>
            <Text>
              Gửi các thông báo về các hoạt động trao đổi thông tin giữa thành viên và THE
              HILL STORE.
            </Text>

            <Text>
              Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của thành
              viên hoặc các hoạt động giả mạo Thành viên.
            </Text>

            <Text>
              Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt.
            </Text>

            <Text>
              Trong trường hợp có yêu cầu của các cơ quan có thẩm quyền như Viện kiểm sát,
              Tòa án, Cơ quan Công an điều tra hoặc các Tổ chức thẻ Visa/Mastercard liên
              quan đến hành vi vi phạm pháp luật hoặc gian lận thẻ tín dụng nào đó của
              khách hàng, THE HILL STORE có trách nhiệm hợp tác cung cấp thông tin cá nhân
              thành viên.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>8.3. Thời gian lưu trữ thông tin</Text>
          <Stack>
            <Text>
              Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ
              hoặc tự thành viên đăng nhập và thực hiện hủy bỏ.
            </Text>

            <Text>
              Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật
              trên máy chủ của THE HILL STORE.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>
            8.4. Phương thức và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu
            cá nhân của mình trên hệ thống thương mại điện tử của đơn vị thu thập thông
            tin.
          </Text>

          <Text>
            Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá
            nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân
            hoặc yêu cầu THE HILL STORE thực hiện việc này.
          </Text>

          <Text sx={{ fontWeight: 700 }}>8.5. Cam kết bảo mật thông tin cá nhân</Text>

          <Stack>
            <Text>
              Thông tin cá nhân của thành viên trên Website THE HILL STORE được THE HILL
              STORE cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của
              THE HILL STORE.
            </Text>

            <Text>
              Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi
              có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định
              khác.
            </Text>

            <Text>
              Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất
              mát dữ liệu cá nhân thành viên, THEHILL STORE sẽ có trách nhiệm thông báo vụ
              việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành
              viên được biết.
            </Text>

            <Text>
              THE HILL STORE yêu cầu khách hàng khi đăng ký thành viên /mua hàng, phải
              cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên
              lạc, email, điện thoại, số tài khoản, số thẻ thanh toán…, và chịu trách
              nhiệm về tính pháp lý của những thông tin trên.
            </Text>

            <Text>
              THE HILL STORE không chịu trách nhiệm cũng như không giải quyết mọi khiếu
              nại có liên quan đến quyền lợi của khách hàng đó nếu xét thấy tất cả thông
              tin cá nhân của khách hàng đó cung cấp khi đăng ký ban đầu là không chính
              xác.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>
            8.6. Cơ chế tiếp nhận và giải quyết khiếu nại của khách hàng khi thông tin cá
            nhân bị sử dụng sai mục đích hoặc phạm vi
          </Text>

          <Text>
            Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi,
            người dùng có quyền gởi email khiếu nại đến cskh@thehillcoffee.vn với các
            thông tin, chứng cứ liên quan tới việc này. THE HILL STORE sẽ phản hồi và phối
            hợp cùng khách hàng thống nhất phương án giải quyết.
          </Text>

          <Text sx={{ fontWeight: 700 }}>9. CHÍNH SÁCH THANH TOÁN</Text>

          <Text>
            Khách hàng có thể tham khảo các phương thức thanh toán sau đây và lựa chọn
            phương thức phù hợp:
          </Text>

          <Text sx={{ fontWeight: 700 }}>
            Cách 1: Thanh toán khi nhận hàng (COD – giao hàng và thu tiền tận nơi):
          </Text>

          <Stack>
            <Text>
              Bước 1: Khách Hàng tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.
            </Text>
            <Text>
              Bước 2: Khách Hàng đặt đơn hàng trên Trang thương mại điện tử THE HILL
              STORE.
            </Text>
            <Text>
              Bước 3: THE HILL STORE xác nhận thông tin Khách Hàng và xử lý đơn hàng.
            </Text>
            <Text>Bước 4: THE HILL STORE chuyển hàng thông qua Đơn vị vận chuyển.</Text>
            <Text>Bước 5: Khách Hàng nhận hàng và thanh toán cho THE HILL STORE.</Text>
            <Text>
              Bước 6: Sau khi hết thời gian khiếu nại của đơn hàng hoặc Người Mua xác nhận
              không có khiếu nại, đơn hàng sẽ được hoàn tất.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>
            Cách 2: Thanh toán online qua chuyển khoản ngân hàng:
          </Text>

          <Stack>
            <Text>
              THE HILL STORE chấp nhận thanh toán online bằng hình thức chuyển khoản ngân
              hàng qua danh sách tài khoản ngân hàng sau:
            </Text>
            <Text>0261003453999 Ngân hàng TMCP Ngoại thương Việt Nam Quận 2</Text>
          </Stack>

          <Stack>
            <Text>
              Bước 1: Khách Hàng tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.
            </Text>
            <Text>Bước 2: Khách Hàng đặt đơn hàng trên Website THE HILL STORE.</Text>
            <Text>Bước 3: Khách Hàng thanh toán.</Text>
            <Text>
              Bước 4: THE HILL STORE xác nhận thông tin Khách Hàng và xử lý đơn hàng.
            </Text>
            <Text>Bước 5: THE HILL STORE chuyển hàng thông qua Đơn vị vận chuyển.</Text>
            <Text>Bước 6: Khách Hàng nhận hàng.</Text>
            <Text>
              Bước 7: Sau khi hết thời gian khiếu nại của đơn hàng hoặc Người Mua xác nhận
              không có khiếu nại, đơn hàng sẽ được hoàn tất.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>
            Cách 3: Thanh toán online bằng thẻ tín dụng/ghi nợ:
          </Text>

          <Text>
            THE HILL STORE chấp nhận thanh toán bằng thẻ tín dụng/ghi nợ do các ngân hàng
            tại Việt Nam phát hành với điều kiện được cổng thanh toán liên kết với The
            Hill Việt Nam chấp nhận.
          </Text>

          <Stack>
            <Text>
              Bước 1: Khách Hàng tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.
            </Text>
            <Text>
              Bước 2: Khách Hàng đặt đơn hàng trên Trang thương mại điện tử THE HILL
              STORE.
            </Text>
            <Text>Bước 3: Khách Hàng thanh toán.</Text>
            <Text>
              Bước 4: THE HILL STORE xác nhận thông tin Khách Hàng và xử lý đơn hàng.
            </Text>
            <Text>Bước 5: THE HILL STORE chuyển hàng thông qua Đơn vị vận chuyển.</Text>
            <Text>Bước 6: Khách Hàng nhận hàng.</Text>
            <Text>
              Bước 7: Sau khi hết thời gian khiếu nại của đơn hàng hoặc Người Mua xác nhận
              không có khiếu nại, đơn hàng sẽ được hoàn tất.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>10. CHÍNH SÁCH XUẤT HÓA ĐƠN</Text>

          <Stack>
            <Text>
              Khách Hàng có quyền yêu cầu xuất hoá đơn giá trị gia tăng{" "}
              <span style={{ fontStyle: "italic" }}>(GTGT)</span> đối với Hàng Hóa có giá
              trị sau khi đã trừ các khoản giảm giá{" "}
              <span style={{ fontStyle: "italic" }}>(nếu có)</span> từ 200.000 VND{" "}
              <span style={{ fontStyle: "italic" }}>(Hai trăm ngàn đồng)</span> trở lên.
            </Text>

            <Text>
              Trường hợp Hàng Hóa áp dụng Mã giảm giá hóa đơn sẽ xuất theo giá bán đã áp
              dụng giảm giá.
            </Text>

            <Text>Thông tin trên hóa đơn:</Text>

            <Text>
              Thông tin bên mua hàng: là thông tin được Khách Hàng cung cấp lúc yêu cầu
              xuất hóa đơn.
            </Text>

            <Text>Ngày hóa đơn: là ngày giao hàng thành công.</Text>

            <Text>
              Tổng tiền xuất hóa đơn: là tổng tiền hàng mà Khách Hàng thanh toán.
            </Text>

            <Text>
              Hình thức hóa đơn: Hóa đơn điện tử được cập nhật trên hệ thống Trung Tâm Bán
              Hàng. Khách Hàng có quyền tra cứu, xem và tải dữ liệu về hóa đơn điện tử
              tương ứng.
            </Text>

            <Text>( link thông tin xuất VAT: bit.ly/hoadondientu-thehillstore)</Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>11. CHÍNH SÁCH BẢO MẬT THANH TOÁN</Text>

          <Text sx={{ fontWeight: 700 }}>11.1. Mục đích áp dụng</Text>

          <Stack>
            <Text>
              Hệ thống thanh toán trên Website THE HILL STORE được cung cấp bởi các đối
              tác cổng thanh toán đã được cấp phép hoạt động hợp pháp tại Việt Nam.
            </Text>
            <Text>
              Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ của THE HILL STORE đảm bảo
              tuân thủ theo các tiêu chuẩn bảo mật của Đối Tác Cổng Thanh Toán.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>11.2. Quy định cụ thể</Text>

          <Stack>
            <Text>
              Chính sách giao dịch thanh toán bằng thẻ nội địa và thẻ quốc tế đảm bảo tuân
              thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán gồm:
            </Text>
            <Text>
              Tiêu chuẩn bảo mật dữ liệu trên internet SSL (Secure Sockets Layer).
            </Text>
            <Text>Tiêu chuẩn mã hóa SSL/TLS 256bit và RSA 2047- bit (hoặc 4096).</Text>
            <Text>
              Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng
              theo quy định của Ngân hàng nhà nước Việt Nam.
            </Text>
            <Text>
              Chính sách bảo mật giao dịch trong thanh toán của THE HILL STORE áp dụng với
              khách hàng được dựa theo những chính sách bảo mật của đối tác Cổng thanh
              toán quy định. Do đó, khi phát sinh các khiếu nại liên quan đến chính sách
              bảo mật trong giao dịch, khách hàng vui lòng liên hệ trực tiếp với đối tác
              Cổng thanh toán của THEHILL STORE.
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>12. ĐIỀU KHOẢN CAM KẾT</Text>

          <Stack>
            <Text>
              Mọi thành viên và Khách Hàng khi sử dụng Website THE HILL STORE thì đồng
              nghĩa việc các bên có liên quan đã chấp thuận tuân theo Chính sách hoạt động
              này.
            </Text>
            <Text>
              Mọi thắc mắc của khách hàng xin vui lòng liên hệ với THE HILL STORE theo
              thông tin dưới đây để được giải đáp:
            </Text>
            <Text>Hỗ trợ khách hàng trang thương mại điện tử THE HILL STORE</Text>
            <Text>
              - Địa chỉ: 14E41 Đường Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức, Thành
              phố Hồ Chí Minh.
            </Text>
            <Text>- Hotline: 0939 079 779</Text>
            <Text>
              - Email:{" "}
              <a
                style={{ textDecoration: "none", color: "#374151" }}
                href="mailto:info@thehillcoffee.vn"
              >
                info@thehillcoffee.vn
              </a>
            </Text>
          </Stack>

          <Text sx={{ fontWeight: 700 }}>13. CÁC QUY ĐỊNH CHUNG VỀ KHIẾU NẠI</Text>

          <Stack>
            <Text>
              Trong trường hợp có bất kỳ thắc mắc hay khiếu nại nào, bao gồm nhưng không
              giới hạn ở chất lượng hàng hóa/dịch vụ, việc giao Sản Phẩm, thái độ của nhân
              viên giao hàng, việc đổi/ trả Sản Phẩm, …
            </Text>

            <Text>
              Khách Hàng có thể liên hệ với Trung Tâm Chăm Sóc Khách Hàng của THE HILL
              STORE qua <span style={{ fontWeight: 700 }}>Hotline: 0939 079 779</span>{" "}
              hoặc Email{" "}
              <a
                style={{ textDecoration: "none", color: "#374151" }}
                href="mailto:info@thehillstore.com.vn"
              >
                info@thehillstore.com.vn
              </a>
            </Text>

            <Text>
              Khi liên hệ với Trung Tâm Chăm Sóc Khách Hàng, Khách Hàng phải cung cấp số
              Đơn Đặt Hàng ghi trong email hoặc tin nhắn xác nhận Đơn Đặt Hàng mà THE HILL
              STORE gửi cho Khách Hàng.
            </Text>

            <Text>
              Trung Tâm Chăm Sóc Khách Hàng sẽ tiếp nhận và phản hồi lại cho Khách Hàng
              trong thời gian sớm nhất.
            </Text>
          </Stack>
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
