---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-coffee-tea-and-spices
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 密封250克无调味红茶袋货架与结账零售服务

## 1. 范围与适用性

本规则是非专门店到店零售的一个部分增量模块：供应商灌装、采用不透光热封PET/铝/PE复合袋、标称净含量250克、仅含山茶属茶树Camellia sinensis干燥无调味红茶叶的商品。每个数据集须固定一个制造商、SKU、茶叶等级、袋体结构和验收规范。逐收货批记录实际茶叶净质量及水分基准；250克仅标识包装规格，不得当作实测质量。在门店收货gate接收、检查后将未开封袋置于干燥常温货架，在有人结账处向自用购买者交付。本模块不含门店泡茶、品尝、研磨、拼配、分装、配送、制冷或除湿。排除咖啡、香辛料、绿茶/乌龙茶/速溶茶、调味茶、茶包、罐装和散装销售。实际事故和失败批群仍须纳入核算池；不得通过改名将被排除路线视为等价。本模块包括专用货架/结账电力、收据纸和列明的残余物载体。已知共用场所、资产和清洁维护仅依下述强制补全矩阵在本模块中排除。不得将部分结果描述为完整零售足迹。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-coffee-tea-and-spices |
| classification_refs | CPC 3.0 62127; narrower |
| covered_products | 上述密封无调味250克红茶袋服务 |
| excluded_products | 其他茶、咖啡/香辛料、制备、散销及其他路线；共用组须按矩阵补全 |
| representative_product | 密封250克无调味红茶袋货架与结账零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应商灌装→门店收货→未开封干燥常温货架→有人结账最终验收 |
| market_state | 未开封耐储干茶叶，自用购买 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一袋密封250克无调味红茶的最终验收零售服务 |
| How much | 一个唯一袋服务；不声明茶质量等价 |
| How well | 未开封，匹配供应商/SKU/状态及签署验收规范；不自动声明法律符合性 |
| How long or cycle | 完整收货至最终去向批群及声明验收/实物退回观察尾期；迟到修正重开原批群 |
| reference_flow_link | service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一袋密封250克无调味红茶的最终验收零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 门店和批群日期; 制造商和SKU; 红茶植物身份及等级; 标称规格及实测收货茶净质量/袋质量; 包装结构及封口完整性; 供应商验收及实际储存条件; 观察尾期及Q验收修正; 唯一袋保管/背景责任; 部分补全矩阵及排除模块; 供电及供应方边界; 实际废物载体和接收方; 未解决身份和不确定性 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_reference | service; failed_background; supplier_transfer; external_failure; continuing_transfer | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 一件仅按实际卡角色为一个定义原袋或其服务。不得替代kg、尝试次数、小时或异质袋。每1 Item(s)参考服务仅/Q一次。 |
| energy_unit | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 读原始kWh，先归属实测线路，按1 kWh=3.6 MJ换算一次；/Q一次。 |
| mass_carriers | receipt_paper; cardboard_waste; film_waste; sealed_waste; tea_waste; pouch_waste; receipt_core_waste; receipt_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实际具名全载体质量，按适用情况排除容器/芯皮重，优先直接kg。密度、涂层、水分或计数换算须实测匹配组成/状态和实际基准，不得以计数默认茶kg。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门店收货时零售方保管供应商灌装密封袋；仅其后列明的增量模块活动 |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC3.0 62127茶零售的较窄子集，不含咖啡或加工香辛料 |
| recursive_input_rule | 同一袋/gate不得递归再加零售服务。失败商品生产及转移责任按goods_calc；本模块不得再加成功商品生产输入。 |
| upstream_dataset_requirement | 可追溯实际收货gate袋商品生产/初级及供应商运输包装/入库运输及完整具名运行/材料/处理供应方；精确身份未解决阻断数据集完整性 |
| disclosure | 部分货架/结账服务；五组固定补全组、未解决候选流、实际排除项，不声明完整零售 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_route | all | 本规则是非专门店到店零售的一个部分增量模块：供应商灌装、采用不透光热封PET/铝/PE复合袋、标称净含量250克、仅含山茶属茶树Camellia sinensis干燥无调味红茶叶的商品。每个数据集须固定一个制造商、SKU、茶叶等级、袋体结构和验收规范。逐收货批记录实际茶叶净质量及水分基准；250克仅标识包装规格，不得当作实测质量。在门店收货gate接收、检查后将未开封袋置于干燥常温货架，在有人结账处向自用购买者交付。本模块不含门店泡茶、品尝、研磨、拼配、分装、配送、制冷或除湿。排除咖啡、香辛料、绿茶/乌龙茶/速溶茶、调味茶、茶包、罐装和散装销售。实际事故和失败批群仍须纳入核算池；不得通过改名将被排除路线视为等价。本模块包括专用货架/结账电力、收据纸和列明的残余物载体。已知共用场所、资产和清洁维护仅依下述强制补全矩阵在本模块中排除。不得将部分结果描述为完整零售足迹。 | un-cpc-62127; tea-board-storage |
| gates | all | 起点为门店收货gate零售方接受实物保管时；终点为预先声明的实物退回/验收观察期结束后的合格最终交付，或记录的失败终结/延续去向。记录gate日期、保管责任、封口/标签/批号/状态、买方验收及目的地。付款本身不等于合格验收。门店内部移架不构成第二次收货或服务。收货后的零售方运输不在本路线内；发生实际行程时须先完成独立路线模块再汇总。 | un-cpc-62127; ghg-product-2011 |
| partial_completion | all | 在作任何完整零售声明前，负责组装者须附上来源ID和边界相匹配的补全矩阵，涵盖：(i)未在专用电表内的共用场所照明、暖通、通风和办公/结账IT运行及实际支付/通信服务；(ii)建筑围护、固定布线/灯具和已装共用系统；(iii)货架、结账/POS及实际满载和空返搬运车/托盘设备；(iv)全部清洁用水、每种洗涤剂/抹布、废水和其他残余物；(v)维护、安装、资产终结载体和实际运输。各模块须使用同一批群及最终分母Q，记录电表/供应方交集，并按事件/资产/部件ID排除重复。保留失败、闲置、闭店和零产出期间。覆盖未知即阻断完整性，不得等于零。所需计量和分配方法固定在completion_calc及completion_protocol；建模者可提供实际数量和供应商，不得另选分母或截断规则。不得默认排除资产负荷不重要。 | ghg-product-2011 |
| goods_responsibility | failed_background; service; supplier_transfer; external_failure; continuing_transfer | 服务不同于茶叶制造。成功商品的制造、原袋、供应商运输纸箱/LDPE膜的实际份额和运至本收货gate的入库运输，仅在下游成功商品背景中承担一次，每个最终成功的唯一原袋对应一份。failed_background仅纳入按goods_calc归于本服务的失败终结原袋背景。退供应商、库存及其他延续接收方须保留明确的完整上游责任链；不得给予避免生产信用。退货后成功再售的原袋仅承担一次商品背景，不按尝试次数重复。最终失败但外部保留/消费须识别接收方及责任，不得自动归为零售方废物。实物转移输出不得再加一次上游背景。 | ghg-product-2011 |
| tea_integrity | all | 不透光防潮袋在销售前保持未开封。Tea Board建议仅涉及阴凉干燥保护及避异味，并非数值法定储存限值或本袋型的规范。取得签署的SKU/批次验收条件、保质期/日期编码和实际供应商包装声明；每营业日及每次收货/退货/去向事件记录货架温湿度、异味/污染检查和封口完整性。本PCR不提供默认水分、透过率、保质期或合规限值。茶叶吸水不得增加服务计数。不得从标称密封断定水分/挥发物转移为零。影响状态、质量对账或环境转移的变化须有实测界限；未知物质转移阻断闭合。 | tea-board-storage |
| incident_extension | tea_waste; pouch_waste; sealed_waste | 常规销售为未开封完整袋；损坏、已开封退回和抽样袋不得计作未开封成功袋。即使已记录外部消费使残余质量减少，也须保留其完整原袋背景责任。完整处置袋列入sealed_waste。事故中实际分离的散茶和空袋分别称重，不得再计原完整载体。tea_waste只含按实际湿度采集的干茶，不含清洁水；pouch_waste含实际排空复合袋，附着茶只分配一次。任何第三载体、泄漏收集材料、清洁、渗滤液、湿气/挥发物通量或异地样品处理，均须在数据集完整前新增具名双语卡及协议并正常同步。先确定物种身份、实际输入/输出介质、边界原始质量和接收方归属；事故去向未知即未解决，不得等于零或编造空气排放。 | ghg-product-2011 |
| waste_boundary | cardboard_waste; film_waste; sealed_waste; tea_waste; pouch_waste; receipt_core_waste; receipt_waste | 称量每种实际出场载体，保留期初/期末容器存量及收集日期。处理背景须匹配各载体和实际接收方，并包括有证据的收运及处理边界。废物输出仅链接一次该处理背景；不得再输入同一处理、所含茶/复合材料或供应方燃料。取得供应方路线及满载/空返覆盖证据；未覆盖的空驶距离不得因零吨公里消失，须另计实测车辆距离路线活动并排除交集。同一原始载体池的目的地比例和须为1，仅乘一次。不予回收或避免材料信用。接收方、处理所需载体组成或供应方交集未知均阻断完整性。 | ghg-product-2011 |
| identity_completion | all | 仅显示的电力UUID已绑定；它是在使用点的通用交流电，供应方及电压未特指，也不含排放因子。其他流身份均为具体但未绑定的候选。在完成前景数据集前，须为逐卡绑定精确官方产品/废物身份及兼容属性/单位，否则保留明确未解决项并禁止宣称完整。须以官方直读响应及匹配的完整性凭证确立UUID、状态、官方名称、限定及属性/单位链。搜索命中或相似名称不构成绑定。匹配实际供应商、组成和处理。候选可用不表示科学或发布批准。 | ghg-product-2011 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| handling | 收货、完整货架及有人结账 | required | 每个批群，包括失败 | foreground | service |
| residual | 分类实物残余物载体 | conditional | 实际载体发生；未发生须q_absence证据 | foreground | 实际载体总量后/Q |


### 过程：收货、货架和结账 (`handling`)

#### 输入

##### 产品流

###### 门店收货gate供应商灌装密封250克红茶袋 (`failed_background`)

作为失败商品背景责任消耗的具体原袋产品；本输入排除成功及延续袋。 B_terminal/Q Item(s)，按goods_calc；原袋背景含其实际收货批茶净质量、袋、供应商运输纸箱/LDPE份额及入库运输。

- 选定流：门店收货gate供应商灌装密封250克红茶袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：B_terminal/Q Item(s)
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

###### 交流电 (`electricity`)

使用点电力，电压及供应方未特指；通用供电技术未特指，实际电压/供电背景须另有证据。仅包括有线路记录的专用货架照明及结账运行。 3.6*E_attr/Q MJ，按energy_calc；E_attr为归属后的实测kWh，不是茶质量乘因子。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6*E_attr/Q MJ
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`ghg-product-2011`

###### 无塑料涂层热敏收据纸卷 (`receipt_paper`)

单一供应商规格热敏收据纸，含其固有热敏涂层但无另配合成衬层；纸净质量与芯分别称量。供应背景按此精确纸卷每kg净纸计，须含实测芯/纸比及纸芯制造一次；不得使用仅纸本身的背景。涂塑纸为不同身份，须具名新增卡。 P_attr/Q kg，按paper_calc；实际耗用纸质量按结账事件份额归属。

- 选定流：无塑料涂层热敏收据纸卷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：P_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper`
- 来源：`ghg-product-2011`

#### 输出

##### 产品流

###### 一袋密封250克无调味红茶的最终验收零售服务 (`service`)

本输出计量部分增量零售服务，不是茶制造或制成袋商品。 Q/Q = 1 Item(s)，按acceptance_calc；仅最终验收唯一未开封袋。

- 选定流：一袋密封250克无调味红茶的最终验收零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

###### 退供应商继续使用的密封250克红茶袋 (`supplier_transfer`)

实物商品转移，不是服务产出、零售方废物或避免生产信用。供应商拒收/销毁且无延续责任时应归失败终结。 N_supplier/Q Item(s)，按goods_calc；有签署延续背景责任的实际最终出场袋。

- 选定流：退供应商继续使用的密封250克红茶袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_supplier/Q Item(s)
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

###### 未获合格最终零售验收而交出的密封250克红茶袋 (`external_failure`)

失败实物交付不得自动视作废物。退回后再售袋须从本最终去向计数移除。实物出场gate状态为本完整密封袋。之后外部开封/消费属最终去向证据，不是另一份相同袋交换；实际出场状态不同于本卡时，须在完整前另设具名卡。 N_external/Q Item(s)，按goods_calc；识别原袋、实际状态/接收方及终结或延续责任附件。

- 选定流：未获合格最终零售验收而交出的密封250克红茶袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_external/Q Item(s)
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

###### 向另一零售保管方转移的密封250克红茶袋 (`continuing_transfer`)

排除内部移架。期末库存留在库存账，不作为输出交换。 N_transfer/Q Item(s)，按goods_calc；有继承背景记录的独立保管转移。

- 选定流：向另一零售保管方转移的密封250克红茶袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_transfer/Q Item(s)
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

### 过程：残余载体 (`residual`)

#### 输出

##### 废物流

###### 废弃干燥瓦楞纸板运输箱 (`cardboard_waste`)

清空商品后的供应商二次纸箱，含实际不可分印刷/粘合剂；不含茶或初级袋。 W_cardboard_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：废弃干燥瓦楞纸板运输箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_cardboard_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 废弃LDPE运输缠绕膜 (`film_waste`)

单一经确认LDPE膜身份，与纸箱/茶袋分开；不得泛指混合塑料包装。 W_film_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：废弃LDPE运输缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_film_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 废弃含茶完整密封PET铝PE复合袋 (`sealed_waste`)

一个实际完整废物载体：茶及其完整复合袋，按扣除收集容器后的整体质量计量；不得另加所含茶或铝箔废物。 W_sealed_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：废弃含茶完整密封PET铝PE复合袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_sealed_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 已收集散装无调味红茶叶废物 (`tea_waste`)

仅实际独立收集的破袋/样品/开封退货茶叶载体；记录实际水分、来源袋ID，附着包装另行说明；无默认水分。 W_tea_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：已收集散装无调味红茶叶废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_tea_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 废弃排空PET铝PE红茶袋复合材料 (`pouch_waste`)

实际排空复合袋为一个载体，固有层保持完整。称量附着茶并仅归属一次，不再作为第二份散茶输出。 W_pouch_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：废弃排空PET铝PE红茶袋复合材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_pouch_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 废弃中空纸板收据卷芯 (`receipt_core_waste`)

实际单独拆下的废卷芯；称实际芯质量及状态，含固有粘合剂。其制造仅在精确纸卷供应背景中承担一次；终结载体不是瓦楞运输箱。 W_receipt_core_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：废弃中空纸板收据卷芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_receipt_core_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 废弃无塑料涂层热敏收据纸 (`receipt_waste`)

实际门店保留并处置的失败/测试收据，不是全部耗纸；顾客收据在纸账中随成功/失败交付离场。实际拆出的纸板卷芯采用receipt_core_waste，不得混入瓦楞纸箱身份。 W_receipt_waste_attr/Q kg，按waste_calc；采用实际出场批净质量，不再扣期初/期末容器库存；独立核查产生/库存，来源批群归属及目的地份额仅一次。

- 选定流：废弃无塑料涂层热敏收据纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_receipt_waste_attr/Q kg
- 数值来源模式：计算所得（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool | all | 预先固定一个门店/配置/SKU批群及连续报告窗口，含失败收货批、闲置/闭店日和零销售子期间。每个原袋有唯一母ID、全部尝试及最终去向。校正服务数Q仅计唯一的最终验收未开封袋。仅价格调整不得冲减Q。实物拒收、其后合格再售及最终退货须同时修订原分子和Q。全池Q=0时保留未归一化总量，不得产生单位服务值；仅可合并预先声明的同配置相邻池，不得挑选成功期间。最终验收/去向未知保持暂定。 | ghg-product-2011 |
| shared_driver | electricity; receipt_paper; all | 先采用专用分表或直接事件材料归属，再分摊。共用结账运行按所有实际受益方的实测有人服务秒数分配；闲置/闭店区间按全部受益方声明的人员容量预留秒数分配，不得仅按成功销售分配。专用货架照明按实测占用袋位小时，闲置货架容量按分配袋位小时预留；保留所有受益方及失败/库存暴露量。先将份额作用于原始总量，对账分配和=含剩余项的原始池，再除Q一次。仅当有记录的线路拓扑确实包含分表时母表才可减分表；不相交电表不得相减。异质驱动合并前须分线路或使用兼容的具名路线模块。 | ghg-product-2011 |
| asset_completion | all | 对排除的资产模块固定互斥完整对象边界：建筑围护/固定设施排除已另计的货架、POS及搬运车；完整POS含随供电脑/显示器/扫描器/打印机；搬运车含轮和轴承；货架含原紧固件。不得重复供应方已含的制造、安装、流体、运输或维护。实际更换件及维护按事件归属，除非有证据证明已纳入同质签署合同包。维护以1 Item(s)计量仅允许固定contract_id、work_scope、service_type及package_version且背景兼容的单一合同包，不得按混合工单计数。终结直接净称重与部件BOM重构互斥；直接净质量已排除拆走部件。寿命分配及终结修正按completion_calc执行。 | ghg-product-2011 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | handling | 袋保管、服务及背景 | 原袋/事件/批次账 | cohort_id; packet_id; original_lot; supplier_SKU; gross_handover_id; physical_return_id; attempt_id; receipt_date; final_acceptance_date; condition; seal_status; final_fate; recipient; background_owner; original_net_tea_kg; pouch_tare_kg; moisture_basis; uncertainty | 收货、每次尝试、退回和去向扫描原袋唯一ID；签署保管和验收记录并区分财务事件。逐同质收货批以校准秤称代表性整袋和配对排空袋皮重；采用同一有记录样品方法测茶实际净质量及湿基水分，记录样品去向。保留按批次/收货日的样本量、选择方法、证书及校准/零点/核查砝码。核实完整背景涵盖实际供应商茶、该袋、实际分配的供应商运输纸箱/LDPE膜及入库gate，保留每袋实际质量及不确定性。 按acceptance_calc及goods_calc；唯一母袋分区，保留暂定记录；复用同一原ID而不重复计数 | Item(s); kg; fraction; timestamp | 逐保管/尝试/去向事件及逐收货批抽样 | 整个声明批群，含观察尾期及迟到修正 | 收货gate、货架、结账及具名接收方 | 每个参考流 | 签署收货/验收/接收方日志、库存快照、秤/水分质控及实验室不确定性、供应商背景范围 |
| cp_energy | handling | 专用线路电力 | 线路分时表 | meter_id; topology; timestamp; kWh_open; kWh_close; multiplier; circuit_scope; task_seconds; reservation_seconds; packet_slot_hours; all_beneficiaries; outage; missing_interval | 至少每日及配置变化时读取封签校准的专用货架及结账线路表；保留原始分时差、极性、倍率及账单。记录所有受益方实际任务/闲置预留时间及占用/预留袋位。相减前审计母分表拓扑。不得将整店账单剩余项归为专用电耗。 按energy_calc；先全受益方份额，后换MJ及/Q一次；缺区间须有证据的界限估计，不得为零 | kWh; s; slot*h | 逐区间，至少每日 | 批群所有营业、闲置、闭店和失败区间 | 仅有记录的货架/结账线路 | 每个参考流 | 电表校准、拓扑、分时导出、任务/预留日志及全受益方对账 |
| cp_paper | handling | 收据纸耗用 | 纸卷和打印账 | roll_id; supplier_spec; net_paper_kg; core_tare; spent_core_kg; core_background_ratio; opening_stock; received; closing_stock; sent_unused; print_event_id; length; paper_width; areal_mass; printed_receipt_open; printed_receipt_close; destination | 用校准秤称实际纸卷净纸；记录期初/收货/期末/未用转移库存。链接每次打印，含失败、测试及零销售日。优先直接称事件批次；替代为实际长度*宽度*实测含涂层面密度，二者互斥。纸芯单独计数。未用纸卷和已打印保留收据须作为不同实物库存盘点。 按paper_calc；直接事件或因果打印长度份额仅一次；耗纸对账门店废物、顾客离场及库存 | kg; m; m2; kg/m2 | 逐换卷及打印事件，期间盘点 | 完整批群及修正 | 指定结账打印机 | 每个参考流 | 秤核查、供应商纸结构、卷/打印日志及去向平衡 |
| cp_residual | residual | 具名实物废物载体 | 载体及目的地记录 | carrier_id; original_packet_id; material; seal_state; gross_kg; bin_tare_kg; opening_bin_kg; closing_bin_kg; dispatch_kg; other_carrier_transfer_kg; date; recipient; treatment; destination_fraction; provider_scope; loaded_distance; empty_distance; composition; uncertainty | 按具名载体分开，用校准秤称实际出场、容器存量及事故流净质量。在实际去向记录组成/封口/状态、袋来源，并采集茶水分及袋附着量。取得签署磅单及含满载/空返的接收/处理路线声明。共用容器须有来源份额记录。不得从未拆完整载体编造部件废物流。 按waste_calc；先原载体对账，归属/目的地各一次，/Q一次；匹配供应方事件ID防止处理/运输重复 | kg; km; fraction | 逐容器盘点、出场及事故 | 全部批群去向及延迟出场/修正 | 门店残余物暂存至核实接收设施 | 每个参考流 | 校准秤、容器表、签署接收单、组成/状态证据及供应方边界声明 |
| completion_protocol | handling | 必需外部补全模块 | 边界/资产/电表责任矩阵 | module_id; source_id; asset_id; component_id; contract_id; provider_scope; beneficiary_id; lifetime_exposure_version; current_exposure; remaining_exposure; cumulative_fraction; final_residual; maintenance_event; terminal_carrier; meter_intersection; effluent_mode; V_discharge; rho; I_piped_water; I_delivered_cleaner_solution; I_other_liquid; I_separate_dry_solid; S_open; S_close; E_vapour; E_product_pool_portion; E_other_carrier_pool_portion; E_separated_solid; missing_data; uncertainty | 组装责任人期初及每次变化/事件在现场盘点partial_completion五组。记录实际供应方/资产和完整合同包边界；取得原制造/安装记录、当期实测全受益方暴露量、有假设及修订历史的剩余暴露预测、实际维护和终结载体。搬运暴露含满载、空返/定位及预留闲置容量；建筑/货架按分配面积/袋位小时；POS/暖通按各受益方实际有人/负荷及预留容量小时。实际同质支付/通信供应方单位须采用计量时间或可追溯交易记录及签署供应范围，并排除已含公用工程/IT。清洁逐实物投入及全废液载体先计量再分配；入水表不得再扣内部回用，实际废液V*rho不得二次扣蒸发。 按completion_calc；分开模块原始总量、当期分配及共同/Q一次；保留原ID及明确交集排除；未知项阻断完整零售声明 | kg; Item(s); MJ; h; m2*h; slot*h; fraction | 期初盘点、逐事件/变化、逐期间及终结闭合 | 全部受益方和资产寿命，含零产出/闭店区间 | 所有排除的已知零售组，匹配门店及批群 | 每个参考流 | 签署矩阵、资产/供应方范围、校准、全寿命受益方账及修订平衡、维护合同和终结称量记录 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_calc | service | 每个母袋i仅在声明观察尾期结束后合格最终验收时s_i=1，否则s_i=0或未解决；Q=sum_i s_i。多次销售尝试不得新增s_i。后续实物冲回须替换原s_i并修订原批群全部分子/去向；追加带日期修正，不得只记入新池。Q=0保留原始总量不作/Q。无实物验收变化的财务退款不得自动改变s_i。 | packet_id; attempt_id; final_fate; final_acceptance_date; physical_return_id; cohort_id | Q个唯一最终验收袋服务 | ghg-product-2011 |
| goods_calc | failed_background; supplier_transfer; external_failure; continuing_transfer; all | 将每个原袋仅分区一次：s_i为最终成功，t_i为本服务承担背景的失败终结，c_i为供应商/其他延续责任，o_i为未结库存/去向，须s_i+t_i+c_i+o_i=1，不得假设未知分区已闭合。B_terminal=sum t_i；下游成功背景=sum s_i原袋，延续背景=sum c_i，暂定背景=sum o_i；合计等于原袋收货加独立期初库存，不得按重复尝试累计。一个失败完整原袋即使残余实物已拆分或先前外部消费减少剩余质量，仍t_i=1；仅处理实际部件残余，不予信用、不编造废物。N_supplier、N_transfer及终结/延续N_external分别作为实物最终去向；外部延续归c_i，外部终结归t_i，不得形成两份背景。实物袋账另行满足期初+收货+实际顾客退回=毛实物交付+退供应商+其他保管转移+退役进入残余/消费的袋+期末，唯一事件仅一次；毛交付不是Q。仅供应商背景需要kg链接时，茶原始kg使用同一选定母袋对应的原批次实测净质量之和及实际袋质量；不得默认0.25*计数，也不得将最终水分修正kg当作原茶kg。本计数服务不将原商品分配给部分零售份额：任何开袋抽样/事故袋均为失败完整原袋，不声明部分成功服务。 | packet_id; original_lot; final_fate; recipient; background_owner; original_net_tea_kg; pouch_tare_kg; gross_handover_id; physical_return_id | 唯一终结背景B_terminal及实物输出数；独立毛库存平衡 | ghg-product-2011 |
| energy_calc | electricity | 逐同质线路/区间E_raw=(close-open)*已核实倍率。分开货架及结账区间；采用shared_driver实测因果份额a_j，全受益方之和=1，保留闲置/预留剩余项。E_attr=sum E_raw*a_target；负值/缺读区间须修正或有证据的不确定性估计。kWh仅换MJ一次(1 kWh=3.6 MJ)，再/Q一次。通用交流电身份不提供电网因子。 | kWh_open; kWh_close; multiplier; task_seconds; reservation_seconds; packet_slot_hours; all_beneficiaries; topology | 3.6*E_attr/Q MJ | ghg-product-2011 |
| paper_calc | receipt_paper; receipt_waste | P_raw=期初净纸+收到净纸-期末净纸-未用转出；不得含皮重/纸芯。采用直接耗用质量或实际长度*宽度*实测含涂层面密度之一，不得相加。已知事件直接归属，共用测试/闲置打印按相应全受益方实测打印长度或声明容量份额分配，不仅按Q。P_attr=归属原纸之和，仅/Q一次。以唯一事件ID对账耗纸=门店纸废物+交顾客纸+(期末已打印收据-期初已打印收据)；已打印收据库存与P_raw已扣的未用纸卷库存是不同实物，不得二次应用未用纸卷库存；门店废纸须另测，不得默认等于输入。 | opening_stock; received; closing_stock; sent_unused; net_paper_kg; length; paper_width; areal_mass; printed_receipt_open; printed_receipt_close; destination | P_attr/Q kg及独立纸去向平衡 | ghg-product-2011 |
| waste_calc | cardboard_waste; film_waste; sealed_waste; tea_waste; pouch_waste; receipt_core_waste; receipt_waste | 逐载体W_dispatched=sum(毛重-容器皮重)实际出场批；原始产生量满足G+期初容器存量=出场+期末容器存量+其他有记录载体转移，不得自动将存量加到出场。共用容器采用来源独立称重或实测组成份额归属；目的地比例在同一已归属池上仅乘一次，再/Q一次。以后出场的库存载体责任仍归原批群。完整茶+袋载体和其拆分后代依袋/事件ID互斥。商品毛质量平衡使用原袋整体实测及实际退回/交付/残余份额，与Q分开；不得以整份废水、吸水、缺失质量或袋皮重替代损失茶。质量变化时须实测茶水分及实际接收/输出/环境转移和不确定性；未解决不平衡阻断完整性。 | carrier_id; gross_kg; bin_tare_kg; opening_bin_kg; closing_bin_kg; dispatch_kg; other_carrier_transfer_kg; destination_fraction; original_packet_id; composition | 归属出场载体kg/Q及未分配载体核查 | ghg-product-2011 |
| completion_calc | all | 逐排除模块先保留分配前实物原始总量。资产a、预测版本v的寿命暴露L_a,v=至当期累计实测全受益方暴露+预计剩余全受益方暴露，采用completion_protocol中同一物理驱动。当期制造份额f_target,p,v=x_target,p/L_a,v。逐资产保留跨全部期间/受益方唯一账；总份额<=1。预测修订须替换历史份额并向原批群记有符号差额，不得重新开始第二次制造寿命。终结时剩余暴露=0，按实测全寿命暴露对账剩余份额；最终载体为实际载体质量/计数*f_target,total，仅一次，不再乘制造份额。实际维护/更换事件数量按事件受益方仅归属一次，并排除有证据的供应方已含部分。其他共用运行池采用实测细分或声明的容量/暴露份额，含闲置/闭店失败；严格原始→归属→/Q一次。直接废液按匹配条件下实际V_discharge*rho计量。仅直接计量不可用时才可重构，且与直接V_discharge*rho互斥。按含溶解/夹带固体的完整排放液体载体kg重构：W=I_piped_water+I_delivered_cleaner_solution+I_other_liquid+I_separate_dry_solid+S_open-S_close-E_vapour-E_product_pool_portion-E_other_carrier_pool_portion-E_separated_solid。每项均在其实际控制体跨界处实测kg。管网水输入不含内部回用；交付清洁溶液按包含水及溶解物的整体实测质量计，其组分不得再加入管网水或独立干固体项。I_other_liquid及I_separate_dry_solid仅含未在其他输入内的互斥实际添加量。S_open/S_close为同一完整液池库存；输出水汽/挥发物、产品份额、其他载体份额和分离固体均须是同池互斥质量份额。抹布/载体输出仅扣本平衡已经纳入的液池来源液/固份额，不得扣从液池外引入的干载体，也不得再次作为分离固体或其他输出扣除。内部回用不跨本平衡边界。另存完整载体出场称量及组成/滞留证据。直接实测V_discharge*rho不得再作上述重构扣除，也不得将仅水平衡乘废液密度。与本部分模块组合前须对账原ID、实物边界及供应方交集。 | asset_id; component_id; beneficiary_id; lifetime_exposure_version; current_exposure; remaining_exposure; cumulative_fraction; final_residual; maintenance_event; terminal_carrier; meter_intersection; effluent_mode; V_discharge; rho; I_piped_water; I_delivered_cleaner_solution; I_other_liquid; I_separate_dry_solid; S_open; S_close; E_vapour; E_product_pool_portion; E_other_carrier_pool_portion; E_separated_solid | 采用同一Q的必需来源绑定补全模块数量 | ghg-product-2011 |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_evidence | all | 按门店/批次/期间保留原始校准读数、抽样选择、保管链、供应商结构/验收声明及实际不确定性。未知/缺失数据须标记缺口，采用有证据的界限估计和敏感性分析或明确不完整结果，不得当零。任何示例、来源建议或估计区间均不得作默认值或法定合规限值。 | 原始电表/秤/实验室记录、带日期偏差及不确定性报告 |
| q_absence | all | 期初、逐营业日及每次变化，以现场巡查、人员签署、采购/线路记录及事故/退货日志确认密封路线，并确认门店加工、配送、加热/制冷/除湿、清洁和事故载体是否发生。条件零须有实际未发生证据；未知即未解决。已存在共用服务属于partial_completion排除模块，不是未发生过程。 | 签署配置/未发生记录及补全矩阵 |
| q_translation | all | 逐项比较英文已填业务字段和对应中文，含实际公式、输入、限定、来源用途、约束强度及例外；稳定标识和单过程协议引用须匹配。官方名称本地化核查、语义翻译审查须与仅存在中文区分。 | 字段/数组比较及实质双语阅读记录 |


## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | all | 须有Q>0、同质定义的袋服务单位、全部限定、最终实物验收证据及闭合的收货/尝试/去向账。Q不得等于毛交付、发票数、kg、茶吸水增重或拒收后保留袋。独立检查goods_calc唯一分区闭合与水分/质量不确定性。未知项阻断闭合。 | ghg-product-2011 |
| v_rows | all | 核验每张实际卡的过程/方向/类型、单一载体或产品身份、单位、原始规则、归属、来源ID、原始证据、协议及最终仅一次/Q。检查供应方交集及原供应商袋背景仅一次。任何未知投入、路线、捕集、库存或去向不得默认为零；实际新增交换须先具名双语卡及支持协议，再同步并判定完整。 | ghg-product-2011 |
| v_projection | all | 逐项比较双语约束、限定、条件、例外、公式及分母，保留精确卡/规则/协议身份。从规范Markdown重新生成structured，并比较实际机器guidance是否含全部义务及补全职责。指纹/schema通过不等于语义审查或方法批准。须将本部分模块和未解决身份与已做/未完成检查分别报告。 | ghg-product-2011 |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅按一个最终验收定义茶袋使用本实测部分服务模块，须先解决卡身份和完整来源数据 |
| allowed_use | 依partial_completion及completion_calc采用同一Q及来源绑定交集排除，明确模块组合 |
| excluded_use | 未补全的完整零售足迹；替代茶制造；其他茶/咖啡/香辛料或渠道；法律符合性或方法发布声明 |
| required_metadata | 全部参考限定、原袋/批次谱系、实际gate、Q及修正、补全矩阵、供应商/背景责任、原始分配、供应方交集及来源 |
| required_quality_disclosure | 部分边界；未解决身份；实际缺失数据及不确定性；时空/场址适用性；已完成与未完成检查；无虚构默认值 |
| update_trigger | SKU/包装/路线/gate变化；新事故/载体；迟到验收/去向修正；来源/供应方/资产变化或身份解决 |


## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62127 | official_guidance | UNSD CPC3.0 explanatory note 62127, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62127 | 2391咖啡/茶及2392加工香辛料仅确定分类语境；本PCR范围较窄 |
| tea-board-storage | official_guidance | Tea Board India FAQ, How should we store tea at home?, https://teaboard.gov.in/TEABOARDCSM/NDQ%3D | 仅定性防潮/光/异味保护；零售实施为PCR设计，不提供数值限值或具体袋验证 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters6–7 and9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分析单位/服务和分配层级作为一般方法语境。具体gate、公式、部分模块及采集义务为PCR设计，不声明完整标准符合性或强制数值。 |
