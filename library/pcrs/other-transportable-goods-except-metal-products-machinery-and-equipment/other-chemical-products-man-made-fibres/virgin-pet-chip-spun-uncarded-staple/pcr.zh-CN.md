---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.virgin-pet-chip-spun-uncarded-staple
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 原生 PET 切片熔纺未梳理短纤维制造

## 1. 范围与适用性

本方法适用于外购纤维级切片制原生 PET 均聚物、本色单组分实心圆截面切断短纤，含纺丝牵伸及终饰油剂并声明实际放行水分。连通路线为切片干燥调质、熔融过滤纺丝、风冷落桶成丝束、牵伸卷曲、干燥终饰、切断打包及未梳理未精梳短纤放行 [jrc-polymers-2007]。盛丝桶丝束是真实内部中间物，不是长丝纱线、单丝扁条或另一参考终产品。不因用途不同新建身份。

JRC 支持这一切片到落桶丝束再到短纤的具体顺序；EPA 独立区分熔纺、溶剂反应纺及切断短纤、丝束、连续长丝纱线 [epa-synthetic-fibres]。制造商手册核对工业转化环节，不代表各来源描述同一 SKU 或同一工厂 [neumag-staple-2023]。不移植温度、牵伸比、油剂配方、收率、产能、排放或标准水分回潮数值。实际数量条件由工厂记录确定。科学审查及分类映射接受均待定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.virgin-pet-chip-spun-uncarded-staple |
| classification_refs | CPC 3.0：35510，较窄语义子集；不代表映射批准 |
| covered_products | 原生 PET 均聚物、单组分本色实心圆截面、经牵伸卷曲切断的未梳理未精梳短纤，声明纺丝牵伸及终饰油剂与放行水分 |
| excluded_products | 作为终产品出售的连续丝束；长丝纱线；单丝或扁条；梳理或精梳纤维；其他聚合物；再生原料；双组分、中空或原液着色纤维；以 PET 切片为终产物；再生纤维素；聚合熔体直供路线 |
| representative_product | 原生 PET 切片熔纺未梳理短纤维制造 |
| production_route | 外购 PET 切片 → 结晶干燥 → 挤出过滤喷丝 → 风冷、纺丝牵伸上油、落桶 → 集束牵伸 → 卷曲 → 干燥及终饰 → 切断打包 → 生产质量放行 |
| market_state | 工厂生产放行门的打包纺织短纤，净纤维质量含实测残余水分及留存油剂，不含包布与打包带皮重 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应符合规格的未梳理原生 PET 短纤作为纺织原料 |
| How much | 生产放行门新增正验收净纤维 1 kg |
| How well | 按实际买方规范验收聚合物及原生身份、切长、细度、卷曲、强伸、油剂和水分，不套默认阈值 |
| How long or cycle | 一个匹配的实际生产报告期，含所有贡献运行及 WIP 负荷结转；不主张使用寿命功能 |
| reference_flow_link | pet_staple |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 涤纶短纤维 `03377e13-45a0-4774-9cc8-37c8c60523f2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | PET 均聚物、聚合物为 100% 原生及实际切片牌号与添加剂; 切片挤出路线及盛丝桶中间丝束; 未梳理未精梳、实心圆截面、单组分本色短纤; 实际切长分布、dtex、强伸及卷曲验收方法; 纺丝牵伸与终饰油剂身份、留存活性量和供货状态; 放行水分、烘干法、调湿及回潮口径; 净纤维质量、包装皮重及唯一首次放行批号; 生产放行 Q 门、WIP 及结转负荷、独立成品账; 实际场址及供货地域、工厂生产混合及公用工程供应商; 完整报告期、失败返工及纳入的仓储发运服务范围 |

所有限定信息必须在具体数据包中声明。参考单位是新增生产放行质量，不是无差别功能等价或实际净交付量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 是 cp_output 下首次生产放行新增正验收净纤维；1 kg 含实测留存油剂及水，不含包装皮重。退回和重复验收不再次创造同一质量。 |
| moisture_basis | material and product mass | Mass | kg | 分母采用实际放行称量。记录湿基水分 w，干燥非水质量 D=m(1-w)；另测留存油剂以确定聚合物质量。干基回潮率 R=m_water/D 给出 m=D(1+R)。合同标准回潮只经明确实测转换形成报告质量，不得默改 Q。 |
| linear_density | fibre fineness and length | Linear density | tex; dtex | tex、dtex 是线密度而非体积密度：1 tex = 1 g/km，1 dtex = 1 g/10000 m。长度转换须有实测相关总纤维长度和匹配细度；仅包数、面积或长度不能推出 kg。包数换质量用 cp_output 同配置实测平均净包质量 M，m=n*M，并保留离散程度。 |
| formulations | finish and additive inputs | Mass | kg | 整份外购湿制剂是外部投入。活性物与载体水为分账，不是额外采购；现场配制使用实际各原料、混配能耗及损失。切片原含添加剂与现场新增分开。 |
| raw_conversion | liquid/gas and energy measurements | Mass; energy | kg; MJ | normalize_period 前，积分体积按独立支持的组分密度和状态转换，流率按实际时长积分；已积分体积不再乘时间。电能 MJ = 实测 kWh * 3.6，能量只计一次。蒸汽质量焓和凝结水配对，不额外购买一次热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收外购原生纤维级 PET 切片及真实分别采购的油剂、公用工程和包材；无现场聚合 |
| starting_condition_role | 聚合物到纤维的门到门前景转换，分别链接上游供应端 |
| product_classification_scope | 仅 CPC 35510 内声明的未梳理原生 PET 切断短纤路线，不覆盖整叶 |
| recursive_input_rule | 盛丝桶丝束及内部 PET 回料作为含继承负荷的物理交接跟踪，不作为外购纤维或额外 Q。外购短纤或丝束会改变起点，须重新评估。 |
| upstream_dataset_requirement | 匹配实际原生纤维级切片、油剂制剂、包材及公用工程供应端；通用流 UUID 只确立身份，不确立供应商或摇篮到门数量 |
| disclosure | 声明工序、丝束落桶停留、真实能源及油剂系统、质量门、完整期间、水分油剂口径、WIP 负荷、纳入的仓储发运分账范围、实际地域和上游缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | pet_staple | 纳入切片接收调质、挤出过滤纺丝、冷却上油落桶、集束牵伸卷曲干燥终饰、切断打包及唯一生产放行。在连通过程内保留工序计量和中间丝束交接。 | `jrc-polymers-2007`; `neumag-staple-2023` |
| boundary_services | pet_staple | 保留全部可归属实际公用工程、开停机与失败运行能耗、冷却及风处理、治理、清洗、包装、搬运和返工。未列出的真实燃料、清洗药剂、替换件、废物及实测排放各增原子卡。条件行仅在记录证明未发生时不适用，不推定为零。 | `jrc-polymers-2007`; `epa-synthetic-fibres` |
| boundary_release_and_storage | pet_staple | 终端数量门为新增生产放行，不是净交付。生产账 Q 已含所有新增放行包，包括仍在期末成品库存者，不能再把这些库存加为产出。另设成品仓储发运质量及结转负荷账，含期初期末库存、退回及实际纳入的仓储包装搬运发运服务。按同一质量口径核对放行量+期初成品+退回=发运+期末成品+有记录的退出。合并时抵消内部放行接收及其继承负荷，不抵消真实服务负荷。将服务归属匹配的放行批群或留存库存，并披露未观测未来服务。交付数据集须另声明交付 Q 并完整结转成品负荷，不假定放行等于交付。 |  |
| boundary_reaction_water | pet_staple | 本切片重熔路线无固有聚合反应水输出。将切片油剂带水、浴水、凝结水和物理蒸发，与任何独立证实的水解降解物种及其耗水产水分开。不得引入 PTA/MEG 合成、聚合水系数、COD 物种，或用同一残差同时拟合未知反应水及未知出口。改为一体化合成路线须重评范围。 | `jrc-polymers-2007`; `epa-synthetic-fibres` |
| boundary_excluded | pet_staple | 前景不含原生切片合成、再生瓶片制备、聚合熔体直纺、纤维梳理精梳、纱线单丝扁条制造、纺织转化、使用及终端处置。运输段和资本基础设施处理须明确；有完整上游覆盖才可声称摇篮到门。 | `jrc-polymers-2007`; `epa-synthetic-fibres` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pet_staple | 切片到未梳理短纤的连通制造 | required | 声明的原生 PET 切片落桶路线 | 独立保留各工序记录及内部丝束质量负荷交接 | 每 1 kg 参考流 |

### 过程：切片到未梳理短纤制造（`pet_staple`）

所有中间丝束、浴液和同批返工均保留实物记录及累计负荷，在连通边界合并时抵消内部交接。以下公用工程及包装条件卡不证明其必然发生；实际不同配方、燃料、包材、治理物种及去向必须分设原子行。

#### 输入

##### 产品流

###### 原生纤维级 PET 切片 （`pet_chips`）

外购原生 PET 均聚物切片，实证供应牌号、特性黏度、消光剂及添加剂含量、结晶状态和水分。原生记录仅为通用 PET 粒料，未声明 CAS、牌号、原生状态、路线、混合类型或供货地域，不作推定。不替换为瓶级或固定纯度候选。整份切片按供货状态计入一次，不再次采购其单体或已含添加剂。

- 选定流：聚对苯二甲酸乙二醇酯粒料（PET） `4f19f119-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_feed`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 计量外购电力 （`electricity`）

采集收料、切片结晶干燥、挤出、过滤、纺丝箱体、冷却风调节、盛丝桶、牵伸、卷曲、干燥、切断、打包、控制、空压、治理及声明纳入的同批搬运仓储发运实际用电。保留工序分账，不用铭牌功率或仅成功运行估算替代。背景匹配前声明电压、供应商及地域。

- 选定流：电力
- 流属性/单位：Energy / MJ
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 外购工艺蒸汽 （`steam`）

仅真实外购蒸汽用于丝束牵伸、加热或干燥时适用。分别计量供汽质量、焓状态和返回凝结水。自产蒸汽为内部公用工程，应记录真实外部燃料、水及排放，不再叠加外购蒸汽负荷。

- 选定流：蒸汽
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 工艺补充水 （`water`）

用于现场油剂稀释、牵伸浴或冷却补水的实际外购去离子水，有实际使用才纳入。记录各去向，循环量不是新增取水。已随任一油剂乳液购买的载体水只是组分分账，不在本行重复采购。其他水质须另设原子行。

- 选定流：去离子水
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 外购纺丝牵伸油剂制剂 （`spin_finish`）

纺丝及丝束准备阶段使用的一种实际商业纺丝牵伸油剂水乳液。记录整份湿供货制剂、供应商标识、实测活性分数和载体水。不套通用配方，不按活性物重复采购，也不重复计水。若现场配制，用真实分别采购原料替代本外购行，并采集混配能耗与损失。

- 选定流：PET 纺丝牵伸油剂水乳液
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 外购终饰油剂制剂 （`final_finish`）

丝束干燥后切断前施加的一种实际客户规定终饰制剂。整份商业制剂独立于纺丝牵伸油剂记录。若两处共用一种供货制剂，将实测领用量分至工序并核对总和为一次采购总量。

- 选定流：PET 终饰油剂水乳液
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_finish`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 外购氮气 （`nitrogen`）

仅实际惰化或保护系统外购氮气时适用。记录纯度、气态、计量温压和标况体积定义，不从通用流程图假定用氮量。

- 选定流：氮气
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 纤维包包布 （`bale_wrap`）

仅实际采用聚丙烯编织包布时适用，与纤维 Q 分别称重。除合格包用量，还需计废料和更换包布；其他包材结构须另建具体行。

- 选定流：聚丙烯编织包布
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`jrc-polymers-2007`

###### 纤维包打包带 （`bale_strap`）

仅真实使用钢制打包带时适用，按净领用质量保留剪切余料和重新打包用量。不能由包数推定材质，也不能因 Q 不含皮重而漏掉包装负荷。

- 选定流：钢制打包带
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`jrc-polymers-2007`

###### 打包机液压油补充 （`hydraulic_oil`）

仅打包机真实使用外购矿物液压油时适用。用实测补加量及油库存变动，区分设备留存、泄漏和外送废油；其他真实润滑剂须分行。

- 选定流：矿物液压油
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_feed`
- 来源：

###### 替换熔体过滤器 （`new_filter`）

按替换及库存记录采集实际耗用的不锈钢熔体过滤器，区分清洗复用和新购替换。废过滤器残留聚合物纳入其实测废物分账。

- 选定流：不锈钢熔体过滤器
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_feed`
- 来源：`jrc-polymers-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 新增放行未梳理 PET 短纤维 （`pet_staple`）

终端 Product 输出：原生 PET 纺织短纤，工业路线，工厂生产混合。产品未梳理、未精梳，单组分、本色、实心圆截面，经牵伸、卷曲、切断和上油，按实际买方规范新增放行，净质量不含包布及打包带。原生记录声明 100%原生材料、纺织用纤维工业、生产混合，在工厂；未声明 CAS 或 geography/locationOfSupply。记录未规定切片路线、切长、细度、水分或油剂，须独立声明，不推定中国内地、香港或通用供应商。原生一般性描述不是配方或数值验收标准。

- 选定流：涤纶短纤维 `03377e13-45a0-4774-9cc8-37c8c60523f2`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_output`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 返回供应端的蒸汽凝结水 （`condensate`）

仅真实跨边界返回蒸汽供应端的凝结水适用，单独计量温度和质量。不把内部循环当外送，也不在供应端边界不相容时给替代信用。

- 选定流：蒸汽凝结水
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

##### 废物流

###### 挤出清机料 （`pet_purge`）

真实作为废物外送的 PET 熔体清机料及开车条料，记录组分、水分和去向。内部回熔料作为循环跟踪，不在本外送废物行重复计算。

- 选定流：PET 挤出清机废料
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 不合格纤维及捕集 PET 粉尘 （`offspec_fibre`）

从生产线移除的一股 PET 纤维废物；仅同材粉尘实际共同管理时才计入捕集粉尘。不同去向或组分的废物须分行。返工纤维保留负荷，离开前景边界之前不视作外送废物。

- 选定流：不合格 PET 短纤维废物
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 外送含油剂废水 （`wastewater`）

真实经现场处理后送外部处理的废水，有排出才适用。记录湿质量、溶解和分散组分及处理去向；COD 是处理指标，不是化学物种或反应水估算。若现场处理，须另纳入其真实能耗、药剂、污泥和物种行。

- 选定流：PET 纤维油剂废水
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 废熔体过滤器 （`spent_filter`）

仅真实报废不锈钢过滤器适用，记录残留 PET 实测量；消耗替换过滤器时另设实际产品投入行并记录组分与库存。若有过滤器清洗，耗材和排放须另设原子交换。

- 选定流：沾染 PET 的不锈钢熔体过滤器
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 打包机废油 （`spent_oil`）

真实外送废液压油单独记录，不并入纤维或油剂废水。核对设备油库存及实测泄漏，不套损失百分比。

- 选定流：废矿物液压油
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：

##### 基本流

###### 物理蒸发水 （`water_vapour`）

计量切片干燥、油剂载体水及真实牵伸浴和干燥器的物理水释放。独立于未明出口定量，核对产品水分与液态排水。外购聚合物重熔没有固有聚合反应水。

- 选定流：排向空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

###### 捕集后的残余 PET 粉尘 （`pet_dust_air`）

仅适用于经实际治理后独立识别和测量的 PET 颗粒排放，与捕集废物区分。有实际油剂气溶胶或挥发物种时逐项测量，不把未知气溶胶组分当 PET，也不虚构排放系数。

- 选定流：排向空气的 PET 颗粒物
- 流属性/单位：Mass / kg
- 数量规则：A_j/Q，仅作一次报告归一；A_j 是本卡采集协议提供并完成物理转换与负荷结转后、尚未除分母的实际期间分子，Q 为唯一新增放行净质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_residual`
- 来源：`jrc-polymers-2007`; `epa-synthetic-fibres`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_internal | pet_staple | 通过将丝束、油剂循环、复用盛丝桶及同批返工作为内部交接避免分配，跟踪质量与累计负荷。已放行包退回后再检或重包不是新产量，保留原放行身份并增加实际增量返工负荷。 |  |
| allocation_shared | pet_staple | 优先分表或细分共用公用工程及仓储服务。不可避免时，使用与服务相关且有记录的物理因果驱动，如实测设备时载、实际处理质量或实测占用包天。保留完整场址总量及其他产品和旧成品的分配，不仅采集本成功产出。不虚构通用收率、运行负荷或牵伸比。 | `jrc-ilcd-allocation-2010` |
| allocation_waste | pet_staple | PET 废料、捕集粉尘、凝结水或包材不自动获得替代原生料信用。独立确定真实废物产品状态、去向及真实联产品，按披露且相容的分配处理口径核算，不漏废物负荷或改变参考 Q。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | pet_staple | 唯一放行与质量 | 放行称重检测记录 | lot_id; first_release_id; prior_release_id; 毛重; 皮重; 净重; 湿基水分; 留存油剂; 聚合物分数; 切长; dtex; 卷曲; 强度; 伸长; 验收; 时间; M; 包配置 | 责任方：生产质量负责人。切断打包后首次放行用校准秤称量，并对匹配批次实测水分与留存油剂；扣包布和带。识别已放行退回质量，不再进入新 Q。采用包数时按配置采集 M 及分布。只留原始质量与检测，不除分母。 聚合语义：按唯一新增正放行净质量求 Q；最终报告仅用 normalize_period 一次，基准每 1 kg 参考流。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kg; kg/kg; dtex; mm | 每批每次放行 | 匹配全期及放行批群 | 工厂生产放行及买方规范 | 每 1 kg 参考流 | 校准、皮重检测、检验方法、批次验收和重复放行审计 |
| cp_feed | pet_staple | 外部固体原料及油 | 领退库存账 | material_id; 供应牌号; 批号; 期初; 接收; 未用退回; 期末; 湿质量; 水分; 组分; 工序; 过滤器替换; 油补加 | 责任方：物料核算员。称实际切片过滤器油品领退，核对接收库存并链接证书及工序批次。纳入开车失败返工领用，不限成功运行；独立保留水和添加剂分账。采集不做 A/Q。 聚合语义：保留原始净外用及工序总量，送 cp_burden，再由 normalize_period 一次形成每 1 kg 参考流。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kg | 每次领退及结账 | 完整期间含零产出运行 | 接收到连通纤维线 | 每 1 kg 参考流 | 供应证书、秤、库存核对及替换记录 |
| cp_finish | pet_staple | 实际油剂制剂 | 商业制剂及加料账 | formulation_id; 供货批; 湿领用; 退回; 活性分数; 载体水; 浴期初; 浴期末; 稀释水; 加料点; 留存; 排出; 混配能耗 | 责任方：油剂配制主管。计量两上油点各整份供货乳液及去向，测活性与水，核对留存油剂、浴库存及废水。现场混配记录每种独立采购组分及损失。载体水和活性质量不新计采购。保留原始记录，不归一。 聚合语义：每种实际外购制剂求和一次，原始总量经 cp_burden 后仅用 normalize_period 一次形成每 1 kg 参考流。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kg; kg/kg; MJ | 每次供货加料及期末 | 完整匹配期间及浴液结转 | 纺丝牵伸和终饰油剂系统 | 每 1 kg 参考流 | 供应商与 SDS 身份、检测、加料库存及废水核对 |
| cp_utilities | pet_staple | 工序公用工程负荷 | 表计及服务记录 | 工序; 载能体; 供应商; 地域; 电压; 期初表; 期末表; 时间; 流率; 积分体积; 温度; 压力; 密度; 纯度; 蒸汽焓; 凝结水; 运行时间; 他产品份额 | 责任方：公用工程工程师。采集完整实测工序和场址总量，含干燥风处理、空压、加热、治理、失败批、待机切换及返工。区分外购与自产循环，记录分配。原始单位用 convert_raw 转换，采集不存归一值。 聚合语义：保留原始归属总量和共用分配；经 cp_burden 后 normalize_period 一次形成每 1 kg 参考流。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kWh; MJ; kg; m3; h | 连续表计及每批 | 完整匹配期间含停车再开 | 声明的场址服务及实际供应端 | 每 1 kg 参考流 | 仪表校准、账单核对、密度焓口径及分配证据 |
| cp_pack | pet_staple | 包装及成品服务 | 领用称量及仓储账 | 批次; 包布; 打包带; 净领用; 余料; 重包; 首放行; 期初成品; 期末成品; 发运; 退回; 退出; 继承负荷; 存储天数; 搬运能耗; 发运能耗; 服务批群 | 责任方：包装仓储主管。称每种包材及实际废料。独立维护成品质量负荷账，按批群计量实际纳入的仓储搬运发运及重包；不假定交付等于放行，也不把期末成品加至生产产出。保留原始总量及期初库存负荷。 聚合语义：保留原始批群总量；合并抵消内部交接一次；经 cp_burden 后 normalize_period 一次形成每 1 kg 参考流。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kg; MJ; bale-day | 每次包装交接及期末 | 完整期间，明确放行和服务批群 | 打包及声明纳入的厂内成品服务 | 每 1 kg 参考流 | 皮重组件实测、成品账核对、服务驱动及负荷交接 |
| cp_residual | pet_staple | 原子残余物及物种 | 废物联单采样 | 流; 物种; 介质; 湿质量; 水; 聚合物; 油剂; 过滤器金属; 浓度; 采样时间; 积分流量; 干湿基; 治理; 去向; 内回流; 反应证据 | 责任方：环境工程师。称各废物流并测实际出口物种介质，保留采样覆盖与出口流量。独立测相态水，仅有独立证据才认定反应物种。捕集物与残余排放分开，不用 COD 推物种或用闭合残差拟合。采集不归一。 聚合语义：保留原始各流总量及不确定度；经 cp_burden 后 normalize_period 一次形成每 1 kg 参考流。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kg; m3; kg/m3 | 每事件及有代表性采样 | 完整期间含开车失败清洗 | 现场治理后各实际出口 | 每 1 kg 参考流 | 地磅联单、检测采样计划、物种证据和处理边界 |
| cp_burden | pet_staple | 期间 WIP 失败及库存负荷核对 | 关联质量负荷账 | 期间; run_id; 工序; 批次; 期初WIP; 期末WIP; 期初结转交换; 期末结转交换; 零产出运行; 返工交接; 成品交接; 他产出; 实际期间交换; 放行批群服务 | 责任方：LCI 核算员，与生产和仓储责任方核对。按工序批群保留每个原始分子及期初期末 WIP、成品结转负荷。期末 WIP 负荷结转下期，期初负荷在放行时耗用一次。失败零产出及返工负荷须归属或透明结转至匹配产品，不遗漏不重复。仅采集未除分母数量，不在此做 A/Q。 聚合语义：保留已核对原始 A_j 与 Q 供 normalize_period 使用；最终基准每 1 kg 参考流，不预先除分母。aggregation_rule 仅标示最终报告基准，不是采集端除法。 | kg; MJ; exchange-specific units | 每次交接运行及期末 | 跨相关期间边界的完整生产群 | 连通生产线及独立界定的成品服务 | 每 1 kg 参考流 | 质量负荷滚动、工序记录、失败日志、分配及批群核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 归一前将原始物理量转至各行单位：电能 MJ=3.6*kWh；液体质量=积分体积*实测密度；气体质量用实际组分及声明温压口径；流率总量=sum(rate*duration)。积分体积不再乘时长。 | raw_quantity; density; composition; temperature; pressure; duration; cp_utilities | converted raw quantities |  |
| release_q | pet_staple | Q=sum(唯一首次放行正验收净纤维 kg)，含实测残余水及油剂，不含包装皮重。后续退回返工重包再验收不重复计量。报告须 Q>0；零产出期保留全部原始负荷并明确结转至匹配批群。 | accepted_net_mass; first_release_id; prior_release_id; cp_output | Q |  |
| burden_rollforward | all inventory rows | 逐交换 j 组装原始 A_j=实际归属期间交换+期初 WIP 结转交换-期末 WIP 结转交换，必要时记录对其他真实产出的归属。内部交接返工抵消，但增量负荷不抵消。仅从独立成品账增加匹配批群服务增量，不把旧成品生产负荷装入新放行 Q。每项期末负荷有唯一下期接收方。 | actual_period_exchange; opening_carried_exchange; closing_carried_exchange; FG_service_increment; cp_burden; cp_pack | A_j |  |
| normalize_period | all inventory rows | q_j=A_j/Q 是唯一报告归一，形成每 1 kg 参考流。各协议只提供经 convert_raw、burden_rollforward 后未除分母原始分子。卡片数量公式与聚合引用均指同一次操作，不顺序重复除。终端 pet_staple=Q/Q=1 kg。 | A_j; Q; cp_burden; cp_output | q_j |  |
| physical_reconciliation | all inventory rows | 逐组分核对：期初生产库存+外部投入=Q 中组分+其他实测外部 Product 输出+外送废物排放+期末 WIP 及生产库存，内部交接抵消。返回凝结水纳入非参考 Product 输出分账；随放行纤维包交出的实测包装单列物理输出分账，排除于净纤维 Q，仅计该包装一次，不创造额外纤维产出。Q 已包含新放行成品库存，生产式不再加期末成品。按 boundary_release_and_storage 另列成品式。PET、油剂活性、水、过滤器金属及包装分账，并按实际物种检测核对相关元素；披露不确定度和未解释差额，不拟合未知反应水或出口。 | raw_materials; Q; waste; emissions; opening_stocks; closing_stocks; cp_residual; cp_burden; other_outputs; released_packaging; cp_utilities; cp_pack | constituent and elemental reconciliation |  |
| moisture_and_regain | pet_staple | 同一称重批 D=m*(1-w)；m_water=m*w；聚合物=D-实测非水油剂-其他实测非聚合物组分。R=m_water/D。合同质量 D*(1+R_standard) 须单独标示，不得默换实际放行 Q；不提供通用 w、油剂比例或 R_standard。 | net_mass; w; finish_nonwater; nonpolymer_constituents; cp_output | D; m_water; polymer; R |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inputs and reference | 按证书核实实际聚合物、原生切片路线、完整供货制剂及未梳理终态。通用 UUID 不补出缺失地域、牌号、水、油或数量。 | 供应证书；原生字段；批验收 |
| period | all inventory rows | 同一完整匹配期间批群，明确失败开车、零产出、返工、WIP 和成品负荷交接。不只用成功批分母，不遗漏负结余。 | cp_output; cp_burden; cp_pack |
| measurement | all measured quantities | 保留原始单位、校准、皮重、检测、密度状态、工序公用总量、不确定度及共用服务驱动。缺实测是具体数据缺口，不造默认值。 | 原始仪表实验室记录 |
| completeness | all physical outlets | 识别每个实际流及物种，区分物理水和反应化学、外购制剂和组分分账、捕集和释放、内部循环和外部供应。 | 质量元素核对及出口证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | pet_staple | 拒绝在本路线中替换长丝纱线、单丝扁条、出售丝束、梳理精梳纤维、再生或非 PET 原料、中空双组分原液着色纤维及聚合一体化路线。核查实际切断短纤及双语 pet_staple 行与参考 UUID 一致。 | `jrc-polymers-2007`; `epa-synthetic-fibres` |
| validate_denominator | all inventory rows | 须唯一正新增放行 Q、实际水分油剂口径、扣皮重和唯一归一。拒绝用交付质量、另加期末成品产出、重复退回再验收产量，或无实测质量证据的包数面积长度转换。 |  |
| validate_burden | all inventory rows | 须全期失败零产出负荷、WIP 成品结转及责任明确且提供未除分母分子的协议。期末负荷结转一次，期初负荷耗用一次，真实纳入的仓储发运包装返工负荷在内部抵消后仍保留。 |  |
| validate_physical | all material rows | 核查完整湿干油剂及相关元素守恒，出口物种独立实证；不得引入重熔固有聚合水、COD 物种、重复制剂载体采购或残差拟合。区分线密度体积密度及积分体积流率。 |  |
| validate_native | all UUID-bearing rows | 在可消费卡片描述保留完整原生身份限制。供应商、牌号、地域、路线和计量相容性须实际证据。辅助 UUID 空缺须后续匹配，不虚构确定性或替换最终参考。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 供应端及口径匹配后，用于纤维准备、纱线或非织造模型的合格投入 |
| allowed_use | 本切片路线声明的每 1 kg 生产放行未梳理原生 PET 短纤 |
| excluded_use | 整类 CPC 覆盖、寿命功能等价、交付 Q 等价、其他聚合物路线及科学批准声称 |
| required_metadata | 全部必需限定信息；精确边界服务；Q 及期间；上游供应端；单位；分配；WIP 成品负荷账；水分油剂；地域 |
| required_quality_disclosure | 原始数据完整性、不确定度、未观测未来服务、供应端缺口及独立科学审查待定 |
| update_trigger | 聚合物牌号原生状态、路线、油剂、水分参考门、场址服务、供应端或计量变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-polymers-2007 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | 2007年8月，§§10.2.6–10.2.7，印刷167–168页（PDF193–194），图10.7–10.9：切片调质、落桶纺丝及后处理切断打包路线。不采用温度配方收率水分性能数值。 |
| epa-synthetic-fibres | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c06s09_0.pdf | AP-42 §6.9，9/90、1/95重排，§6.9.2.1及图6.9-2，PDF2–3：独立核对熔纺与溶剂路线及短纤丝束纱线区别；真实油剂气溶胶治理须采集。不采用通用排放系数、固定长丝根数或工厂配方。 |
| neumag-staple-2023 | handbook | https://www.oerlikon.com/ecoma/files/DL_ONE_Staple_Fiber_Technology_2023_en.pdf?download=true | 2023年制造商手册，PDF2跨页的印刷第2页“The idea”：仅支持工业挤出纺丝牵伸卷曲切断打包环节。其他一步两步及一体化聚合系统、营销节能产能不是所选工厂 SKU 或数值默认。 |
| jrc-ilcd-allocation-2010 | official_guidance | 欧盟委员会JRC，ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance，2010年3月第一版，7.9.3节，印刷257–258页（PDF277–278）；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅在选择分配而非替代的归因型范围内，以虚拟细分及逐交换的决定性物理因果关系，支持现有实测共用公用工程及仓储服务分配规则。工艺文献支持制造背景，不提供这一LCA方法。未建立通用质量或时间份额、经济系数、产量收率公用工程因子、替代信用或PEF/CFF符合性；仍须实际服务专属驱动、场址总量及批群归属。 |
