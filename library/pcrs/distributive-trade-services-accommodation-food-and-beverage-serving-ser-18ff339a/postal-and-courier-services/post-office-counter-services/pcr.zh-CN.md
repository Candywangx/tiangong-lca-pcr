---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.post-office-counter-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 邮局柜台服务：挂号或证明交寄邮件人工受理

## 1. 范围与适用性

本PCR保留原有产品类别身份，仅规定带单件标识和寄件收据的人工柜台挂号或证明交寄受理。CPC 68013还包括售邮票等业务，故本范围仅覆盖其一部分；不同事务不可仅因共用窗口而视为等价。各分层分别产出清单，不设缺数据情况下的平均柜台事务。约束及处理方法见以下规范表。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.post-office-counter-services |
| classification_refs | CPC 3.0 68013；对明确柜台受理事务族的覆盖为 narrower |
| covered_products | 邮局人工柜台对单件挂号或证明交寄函件或小包的受理，须有单件受理记录和寄件人收据；不同邮件形态及受理程序分别建立数据集分层 |
| excluded_products | 单独出售邮票；收件人领取；金融、护照及零售业务；自助设备；上门收寄；柜台交接后的分拣、储存、干线运输、投递及妥投证明 |
| representative_product | 一封在有人值守柜台验明可收寄条件、记录接收保管并向寄件人出具收据的带条码挂号信 |
| production_route | 核验可收寄条件及所选业务；需要时称重；核对或施加单件标识；登记受理和付款状态；出具收据；交到明确的柜台出件交接点 |
| market_state | 特定网点、期间、邮件形态及程序下已完成的柜台受理服务；不代表运输或投递已完成 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 人工受理挂号或证明交寄邮件并记录保管交接 |
| How much | 1件已验收邮件受理事务；一位顾客一次办理多件邮件时，逐件按独立验收标识计数一次 |
| How well | 完成已声明业务程序和可收寄核验；有有效受理事件和寄件人收据；投递成功不属本功能 |
| How long or cycle | 从首次在柜台办理该邮件起，至出具受理收据并在柜台出件点交接止；记录办理用时、核算期间及排队和闲置分配 |
| reference_flow_link | accepted_counter_transaction |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 单件挂号或证明交寄邮件柜台受理服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 网点和国家; 核算期间; 邮件形态及尺寸/质量档; 挂号/证明交寄受理程序; 标识和收据验收条件; 柜台起止gate; 每次办理邮件件数; 所含设备和场所服务边界; 分配驱动量及上游覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| measure_count | 参考产品 | 物品数量 | Item(s) | 统计同分层同期间已完成的唯一邮件受理事件 N_s，不按到访、邮票、尝试扫描、营业额、小时或运输质量计数。失败尝试与返工消耗投入但不增加 N_s。N_s 必须为正。 |
| measure_denominator | 全部清单行 | 逐行适用属性 | 逐行适用单位 | 先采集期间原始总量和活动驱动量。每项归属期间总量仅除以 N_s 一次。已按完成邮件单件表达的来源不得再次相除；应还原其期间总量用于对账。不得默认在邮件件数、质量、时间和货币之间换算。 |
| measure_units | counter_electricity; receipt_paper; acceptance_label | 能量；质量 | MJ; kg | 用电量按记录的 kWh 乘以3.6一次转换为 MJ。纸及标签质量使用经校准称重，或已核实每卷/每张质量和实际库存变动。购入标签产品按含离型纸整体称重；离型纸废物另行测量。无实测适用证据不得使用密度、水分或干质量换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已包装并呈交的邮件以及已安装柜台；这是起始条件，不是新造且无负担的产品 |
| starting_condition_role | foreground_start |
| product_classification_scope | 仅柜台受理，窄于CPC 68013整个子类 |
| recursive_input_rule | 执行 boundary_atomic_support：外部活动通过明确的单单位服务接口进入，不递归展开供应方内部。前景实物过程保留原卡及规则。保管货物不是制造投入。 |
| upstream_dataset_requirement | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |
| disclosure | 网点/期间/分层；受理gate；失败和更正；顾客出行排除；排队/闲置归属；实体邮件保管；服务供应方重叠；上游和UUID缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_counter | 纳入已声明gate内的可收寄核验、称重、扫描/登记、收据及实际施加的柜台标签、柜台内部交接、更正和未成功办理。成功受理不等于妥投。 | un-cpc-68013; usps-package; usps-extra-services |
| boundary_mail_money | 邮件内容、包装及预付邮票随顾客保管物到达，不是本服务消耗或生产的物品。保管/件数转移在交换清单之外跟踪。仅记录柜台实际新增材料。邮资、现金、税额及保价金额是财务记录，不得作为材料或基本流。若后续邮政服务数据集已含本柜台阶段，组合前须在该数据集中移除同阶段。 | un-cpc-68013; usps-package |
| boundary_support | 柜台电力、设备提供/维护/寿终、远程受理IT、场所及废物责任均计入一次。按 boundary_atomic_support 和 foreground_interface_coverage，运营方责任组成采用实物行；独立远程IT及场所供应方采用 svc_remote_acceptance_it 和 svc_premises_service。保留固定技术范围、活动分配及直接范围排除。有签署范围声明的兼容背景服务可以接受；发票本身不足以证明覆盖。 | ghg-product-2011 |
| boundary_exclusions | 排除顾客及员工出行/通勤、人体代谢能、后续分拣/运输/储存/投递以及单独售邮票、金融或零售业务；披露这些排除项。排队区占用对应照明、供暖/制冷及清洁保留在场所清单；顾客等待分钟本身不是排放流。 |  |
| boundary_extension | 定量前须筛查实际路线中的其他纸质表单、油墨、封签材料、包装、燃料、水、制冷和释放。每项实际新增交换须有独立具体卡、物理身份、单位和协议；现有卡不是完整性豁免。已包含在场所/设备/IT背景时，应在该背景定位一次并记录范围。经注明日期证据证明不存在的条件行使用 not_applicable；未知不得置零。 |  |

### 支持活动原子边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | 支持活动 | 每条启用交换表示一个明确的材料、设备或服务对象，只使用一个主属性和单位。不得仅因服务包含上游过程而禁止服务流。计量前按供应方、合同、场址、事件、接口和范围组成确定责任。运营方运行的过程及由运营方承担清单责任的独立委托现场任务采用前景实物行；责任范围外的独立供应活动采用其明确的服务接口行，供应方制造、公用工程、维护和废物保留在匹配的背景服务中，不另作前景交换。合同本身不使供应方内部过程成为前景。不得改变产品、路线、保管接口或原参考分母。执行 foreground_interface_method 和 foreground_interface_coverage；边界变化须经PCR审查，不得根据数据是否易得任意选择。 此处责任归属指清单责任，不仅指法律所有权：租赁设备的提供可以是外部服务，而运营方运行所用的独立计量电力仍属于前景。 |  |
| foreground_interface_coverage | 所有支持过程及重叠范围 | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| accept | 人工核验、记录及交接受理 | required | 实际流程；逐卡条件适用 | foreground_production | 每参考流 |
| support_premises_service | 支持接口／前景活动：柜台场所占用服务，不含独立记录的现场公用工程 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：仅 allocation_premises_inventory 下与场所期间/分区匹配的柜台场所；排除直接设备、插座负载、纸与远端IT。 | support | 归属至accepted_counter_transaction |
| support_remote_acceptance_it | 支持接口／前景活动：一次配置明确的邮政受理请求远程执行服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：声明受理端点实际执行的条码验证/记录写入/确认请求；含失败/重试，排除持续投递追踪。 | support | 归属至accepted_counter_transaction |

### 过程：人工核验、记录及交接受理（`accept`）

#### 输入

##### 产品流

###### 交流电（`counter_electricity`）

柜台计算机、秤、扫描及打印设备使用点电力，包含主动及待机/闲置负荷。电压、地域及发电组合仍须另作上游限定；该流身份不提供排放因子。

对实测归属期间电量使用 calc_energy 和 calc_normalize；cp_energy。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的实测归属交换量；cp_energy。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`ghg-product-2011`

###### 直接热敏收据纸（`receipt_paper`）

仅柜台实际供应的热敏收据纸；含作废及重打收据。普通表单或喷墨纸实际存在时另加具体卡。

对期间净耗纸量使用 calc_stock 和 calc_normalize；cp_stock。

- 选定流：直接热敏收据纸
- 流属性/单位：质量 / kg
- 数量规则：每参考流的实测归属交换量；cp_stock。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`
- 来源：`ghg-product-2011`

###### 带丙烯酸胶黏剂及硅涂层格拉辛离型纸的直接热敏纸标签（`acceptance_label`）

仅在记录证明柜台受理实际使用此结构标签时适用。使用本卡前应对照供应规格核实丙烯酸胶黏剂及硅涂层格拉辛离型纸。这是含该离型纸的一种购入复合产品；不得代以未知标签。其他结构须另加具体卡。

对含离型纸的整体标签用量使用 calc_stock 和 calc_normalize；cp_stock。

- 选定流：带丙烯酸胶黏剂及硅涂层格拉辛离型纸的直接热敏纸标签
- 流属性/单位：质量 / kg
- 数量规则：每参考流的实测归属交换量；cp_stock。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`
- 来源：`ghg-product-2011`

###### 带显示器的台式计算机（`counter_computer`）

实际安装柜台台式计算机，含显示器及内部组件，排除独立秤、条码扫描器和打印机。笔记本或一体式终端身份不同，须另加卡。

对归属的完整计算机消耗寿命当量使用 calc_device 和 calc_normalize；cp_assets。

- 选定流：带显示器的台式计算机
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的实测归属交换量；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 电子邮政秤（`counter_scale`）

条件适用：所声明邮件受理实际使用的独立秤，记录量程与精度；维护及校准保留在其生命周期覆盖内。

对归属的秤消耗寿命当量使用 calc_device 和 calc_normalize；cp_assets。

- 选定流：电子邮政秤
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的实测归属交换量；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 手持式条码扫描器（`barcode_scanner`）

条件适用：实际安装的独立扫描器；排除已包含在所选完整终端内的扫描部件。

对归属的扫描器消耗寿命当量使用 calc_device 和 calc_normalize；cp_assets。

- 选定流：手持式条码扫描器
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的实测归属交换量；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 直接热敏收据打印机（`receipt_printer`）

条件适用：独立收据打印机，排除收据纸及运行电；不得重复计入一体终端已含打印机。

对归属的收据打印机消耗寿命当量使用 calc_device 和 calc_normalize；cp_assets。

- 选定流：直接热敏收据打印机
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的实测归属交换量；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 直接热敏标签打印机（`label_printer`）

条件适用：独立安装的受理标签打印机；同一实体打印机兼打收据和标签时，序列号仅分配一次，两类工作量进入同一次寿命计算。

对归属的标签打印机消耗寿命当量使用 calc_device 和 calc_normalize；cp_assets。

- 选定流：直接热敏标签打印机
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流的实测归属交换量；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单件挂号或证明交寄邮件柜台受理服务（`accepted_counter_transaction`）

已声明分层的一项已完成受理事件，不是顾客到访、邮件妥投或金融交易。

- 选定流：单件挂号或证明交寄邮件柜台受理服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_acceptance`
- 来源：`un-cpc-68013`; `usps-extra-services`

##### 废物流

###### 废弃直接热敏收据纸（`receipt_paper_waste`）

在柜台产生点实际生成的废收据纸，包括期末仍留存的原事件废物。采用calc_waste_origin已按原始N_s归一的结果一次，不再调用calc_normalize二次相除。后续外运仅核对原事件库存及接收证据；按原事件模型保留储存、运输和处理，并排除已有重复范围。



- 选定流：废弃直接热敏收据纸
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/N_s；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 硅涂层格拉辛标签离型纸废物（`glassine_liner_waste`）

从完整标签实物分离后在柜台产生的硅涂层格拉辛标签离型纸废物，包括原事件留存量。采用calc_waste_origin已按原始N_s归一的结果一次，不再调用calc_normalize二次相除。后续外运仅核对原事件库存及接收证据；按原事件模型保留储存、运输和处理，并排除已有重复范围。



- 选定流：硅涂层格拉辛标签离型纸废物
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/N_s；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

##### 基本流

### 过程：支持接口及前景活动（柜台场所占用服务，不含独立记录的现场公用工程）(`support_premises_service`)

#### 输入

##### 产品流

###### 柜台场所占用服务 (`svc_premises_service`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的柜台场所占用服务，不含独立记录的现场公用工程。计量：完整柜台核算期间实际柜台面积平方米乘占用小时；保留原共享空间分配。按 cp_interface_premises_service 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_premises_service 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_premises_service。

- 选定流: 柜台场所占用服务
- 流属性/单位: 面积时间 / m2*h
- 数量规则： sum(A_s,e * alpha_s,e) / N_s；原生服务单位 m2*h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_premises_service`

###### 交流电 (`u_premises_service_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅限扣除直接柜台插座负载及远端IT后的实际分区/公共供电。 供电表电量；保留地点、电压及技术；不另加电器输出电量。 按第8节 `inv_premises_scope`、`inv_ac_basis` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 柜台场所自来水供给 (`u_premises_service_tap_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅实际分区供水，且未在其他直接盘查中计入。 进水计量，区分供水、污水与蒸发。 按第8节 `inv_premises_scope` 执行。

- 选定流: 柜台场所自来水供给
- 流属性/单位: 体积 / m3
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位m3；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 场所燃烧用交付天然气 (`u_premises_service_natural_gas`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅当天然气设备及供给有证据；按供应方证明的低位热值（NCV/LHV）计MJ。原表体积与热值须在相同温度、压力及干湿基准；基准不同先用有证据的换算，不能用通用倍率。 仅燃料供给，不是供热/燃烧服务；燃烧排放须独立识别物种。 按第8节先取同状态同期间原始NCV MJ，再用固定场所/服务层份额及N_s一次。 按第8节 `inv_premises_scope` 执行。

- 选定流: 场所燃烧用交付天然气
- 流属性/单位: 净热值 / MJ
- 数量规则： sum_j(Q_gas_NCV_MJ_j * s_c,gas,j) / N_s
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 外购区域热水供热 (`u_premises_service_hot_water_heat`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅实际计量的区域热水供热；不再计供应方燃料或循环水质量。 供热接口单一能量载体，不是完整场所包；保留匹配供应方制热盘查。 按第8节 `inv_premises_scope` 执行。

- 选定流: 外购区域热水供热
- 流属性/单位: 能量 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 交付建成的柜台场所建筑壳体 (`u_premises_service_building_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。仅实际独立交付结构，明确面积/部件/施工接口。 仅建设接口；该产品不含运行公用工程、后续维护或寿终。 输入Q_a为摊销前原始制造/建设交付接口实物量；按lifetime_driver仅应用一次f。 Q_a 为摊销前原始完整建筑壳体交付面积。f=目标队列/服务层已归属占用/保留面积小时/同资产完整寿命占用/保留面积小时；必须为同资产、同面积及同日历小时定义。premises_service 分子为F_s；premises 为其已归属队列面积小时。q_prod=Q_a×f/N_s；各完整生命周期拆除流Q_e使用完全相同f/N_s。队列/服务层份额已含f内，不得再乘。缺寿命/面积边界即阻断。 按第8节 `inv_premises_scope`、`inv_asset_basis` 执行。

- 选定流: 交付建成的柜台场所建筑壳体
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / N_s；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

#### 输出

##### 废物流

###### 柜台场所卫生及用水清洁污水入管网 (`u_premises_service_sanitary_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅限一个有证据的接收方/组成；不相容清洁化学品或接收处理分列。 实测/已验证水平衡、组成及接收管网；保留完整实际处理链，不得称为基本流水排放。 按第8节 `inv_premises_scope` 执行。

- 选定流: 柜台场所卫生及用水清洁污水入管网
- 流属性/单位: 体积 / m3
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位m3；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 柜台场所拆除混凝土废物 (`u_premises_service_concrete_demolition`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅同寿命建筑范围实际单独计量并有接收方的混凝土流。 寿终使用建筑资本份额；不得把当期整栋拆除吨数全计当期事务。其他拆除流在识别前保持缺口。 配对制造行u_premises_service_building_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_premises_scope`、`inv_terminal_basis` 执行。

- 选定流: 柜台场所拆除混凝土废物
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N_s；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

##### 基本流

###### 场所燃烧化石二氧化碳排放至空气 (`u_premises_service_co2_fossil_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 按第8节 `inv_premises_scope`、`inv_combustion_species` 执行。

- 选定流: 场所燃烧化石二氧化碳排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 场所燃烧一氧化氮排放至空气 (`u_premises_service_no_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 按第8节 `inv_premises_scope`、`inv_combustion_species` 执行。

- 选定流: 场所燃烧一氧化氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`

###### 场所燃烧二氧化氮排放至空气 (`u_premises_service_no2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 按第8节 `inv_premises_scope`、`inv_combustion_species` 执行。

- 选定流: 场所燃烧二氧化氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises_service`


### 过程：支持接口及前景活动（一次配置明确的邮政受理请求远程执行服务）(`support_remote_acceptance_it`)

#### 输入

##### 产品流

###### 一次配置明确的邮政受理请求远程执行服务 (`svc_remote_acceptance_it`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的一次配置明确的邮政受理请求远程执行服务。计量：在合同后端接口计数唯一已执行请求ID，包含独立执行的失败和重试请求；一项是一次请求执行，不是一项成功柜台产出。按 cp_interface_remote_acceptance_it 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_remote_acceptance_it 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_remote_acceptance_it。

- 选定流: 一次配置明确的邮政受理请求远程执行服务
- 流属性/单位: 件数 / Item(s)
- 数量规则： sum(A_s,e * alpha_s,e) / N_s；原生服务单位 Item(s)；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_remote_acceptance_it`

###### 交流电 (`u_remote_acceptance_it_datacentre_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 来自确切受理操作资源池的实物量。电表已含冷却时不得再加第二冷却用电总量。完整硬件仅到工厂接口；维护及寿终另列。退役产品须具有完整后续已识别处理链。 按第8节 `inv_ac_basis`、`inv_remote_it_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`

###### 交流电 (`u_remote_acceptance_it_network_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 来自确切受理操作资源池的实物量。电表已含冷却时不得再加第二冷却用电总量。完整硬件仅到工厂接口；维护及寿终另列。退役产品须具有完整后续已识别处理链。 按第8节 `inv_ac_basis`、`inv_remote_it_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`

###### 数据中心冷却补水 (`u_remote_acceptance_it_cooling_makeup_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 来自确切受理操作资源池的实物量。电表已含冷却时不得再加第二冷却用电总量。完整硬件仅到工厂接口；维护及寿终另列。退役产品须具有完整后续已识别处理链。 按第8节 `inv_remote_it_scope` 执行。

- 选定流: 数据中心冷却补水
- 流属性/单位: 体积 / m3
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N_s；原生数量单位m3；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`

###### 工厂交付完整服务器 (`u_remote_acceptance_it_server_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 摊销前、独立完整交付的工厂接口硬件产品。排除运行、维护/更换及寿终。使用原始实物Q_a，并仅应用一次关联lifetime_driver；不得把供应方期间寿命消耗当量作为Q_a。 Q_a 为摊销前、工厂交付接口的原始完整硬件数量。f=(供应方期间安装日历小时/有证据的完整安装日历寿命小时)×有证据的端点操作及服务层工作量份额。全部工作量及闲置能力须对账。q_prod=Q_a×f/N_s；同资产终态Q_e使用完全相同f/N_s。不得再乘工作量份额。缺寿命或工作量至资源关联即阻断。 按第8节 `inv_asset_basis`、`inv_remote_it_scope` 执行。

- 选定流: 工厂交付完整服务器
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N_s；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`

###### 工厂交付完整网络交换机 (`u_remote_acceptance_it_network_switch_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 摊销前、独立完整交付的工厂接口硬件产品。排除运行、维护/更换及寿终。使用原始实物Q_a，并仅应用一次关联lifetime_driver；不得把供应方期间寿命消耗当量作为Q_a。 Q_a 为摊销前、工厂交付接口的原始完整硬件数量。f=(供应方期间安装日历小时/有证据的完整安装日历寿命小时)×有证据的端点操作及服务层工作量份额。全部工作量及闲置能力须对账。q_prod=Q_a×f/N_s；同资产终态Q_e使用完全相同f/N_s。不得再乘工作量份额。缺寿命或工作量至资源关联即阻断。 按第8节 `inv_asset_basis`、`inv_remote_it_scope` 执行。

- 选定流: 工厂交付完整网络交换机
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N_s；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`

#### 输出

##### 废物流

###### 移交合规接收方的退役完整服务器 (`u_remote_acceptance_it_retired_server`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。 独立移交的退役完整硬件产品；完整下游拆解、残余物流、排放及最终处理须明确盘查。 配对制造行u_remote_acceptance_it_server_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_basis`、`inv_remote_it_scope` 执行。

- 选定流: 移交合规接收方的退役完整服务器
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(R_terminal_a * f_c,a) / N_s；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`

###### 移交合规接收方的退役完整网络交换机 (`u_remote_acceptance_it_retired_network_switch`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。 独立移交的退役完整硬件产品；完整下游拆解、残余物流、排放及最终处理须明确盘查。 配对制造行u_remote_acceptance_it_network_switch_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_basis`、`inv_remote_it_scope` 执行。

- 选定流: 移交合规接收方的退役完整网络交换机
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(R_terminal_a * f_c,a) / N_s；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_remote_acceptance_it`



## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_subdivide | 首先使用专用计量、带标记领料和设备/请求日志避免分配。余下共享负荷按下述物理驱动量在网点全部功能（含排除业务）之间分配，仅计目标份额。不得用整个网点负荷除以目标成功事务。 | ghg-product-2011 |
| allocation_session | 先测各件直接办理时间，并对每个有人值守窗口/资源使用无重叠主动区间。只有同邮件形态/程序且对真实共同活动的需求等价有证据时，才将实测共同办理活动时间在实际共享该活动的邮件间等分。保留共同活动标识、参与邮件标识及分母。不得把整次办理时间复制到每件。各件分配秒数合计须等于实际资源主动办理秒数，含失败/返工；等待另记。程序不同或等需求未证实时，应按件/程序计时，或保留分配缺口；不得默认均分。 |  |
| allocation_time | 逐资源j逐期间定义分层s的已标记主动办理秒数 T_sj，包含成功、拒收、中止及返工尝试。业务类型未知的尝试时间按各分层已标记主动秒数比例分配；单独保留未知时间量。w_sj 为调整后该分层秒数除以资源j服务全部功能的调整后秒数。若无已标记主动秒数或因果关系无法证实，共享资源结果不完整，不得置零。 |  |
| allocation_idle | 用 w_sj 同时分配资源j共享待机、闲置、开关机和闭店期间负荷及共享主动负荷；不得删去这些负荷，也不得先除营业小时再除吞吐量。直接标记的失败/返工投入归属原分层。失败尝试不产生已验收输出；全部可归属失败投入保留在完成产出分层的期间分子。披露失败率及敏感性。 |  |
| allocation_premises | 绘制无重叠占用面积图。共享大厅或支撑区按该面积乘以目标柜台计划有人值守窗口小时除以使用该区全部功能计划有人值守窗口小时分配；对账保留完整面积总量。加上直接保留柜台面积。所得有效面积乘核算期间全部日历小时（含闭店），再以 v_s 分给各分层；v_s 为分层s调整后主动办理秒数除以使用该保留柜台占用范围的全部事务类别调整后主动秒数，包括实际在该区办理的售邮票/金融/零售业务；此条件份额不是全网点份额w_sj。所得 F_s 单位为 m2*h；网点全部功能合计须恢复完整占用面积小时。分母为零或缺面积/排班资料时不得完成。 |  |
| allocation_premises_inventory | 以下实物方法仅适用于前景责任场所组成。外部占用使用 svc_premises_service，并按 foreground_interface_method 保留相同分区受益方驱动及排除项；供应方内部不属于前景采集。相容场所实物清单以同一场地产出期间的1 m2*h占用作来源原始分母，不作为产品交换。逐项单独采集每种计量能源载体及燃料、水、清洁产品、每种制冷剂、维护材料、建筑结构/资本份额和废物处理。先分区计量；剩余照明/暖通/水/清洁按受服务楼面面积日历小时分配，资本/建筑按保留楼面面积日历小时及有记录资产寿命分配，实际制冷剂损失按同一暖通区域份额分配。在该背景内逐燃料及逐排放物种和介质记录。排除本文已计入的柜台插座电、独立设备、纸及远程IT。匹配计量覆盖并剔除分包重叠后，背景总量仅除以场地占用m2*h一次。不得按通用租金价格换算，亦不得用未核实捆绑服务替代。 |  |
| allocation_device | 每个设备序列号仅按消耗寿命份额计一次：期间安装日历小时除以有证据的安装日历总寿命，再乘资源服务全部功能的 w_sj；不得再乘第二次柜台使用份额。设备生命周期数据集包含制造、更换/维修和寿命终结，排除运行电力与纸。完整计算机/设备已含的集成扫描/打印部件不得再作独立设备；独立外设须分别记录序列号。不得默认寿命、设备质量或利用率。估计须提供证据、不确定性和替代寿命敏感性。 |  |
| allocation_waste | 按废物流及去向记录实际收据纸和离型纸废物。外部处理只与实测废物输出连接一次；该连接或场所背景已含同一处理时，不得再列处理服务投入。不得将避免负担信用、财务收入或废物内含物质作为第二项实体输出。回收纸在此仍为废物转移；一致采用并披露再生含量核算。 | ghg-product-2011 |
| allocation_waste_origin | 每笔普通固体废物在产生时固定原服务队列及分层责任，不按后来外运时点归属。优先追溯直接产生任务；共享产生量采用现有场站/处理作业分配驱动，覆盖已记录产生区间内全部客户及非队列工作量。产生事件ID、产生日期、原份额和原参考流分母随暂存及内部转移保留。接入旧废物不是新产生。留存废物仍承担原处理责任，外运期服务不继承该负担。 对共享产生量，固定按当地日历月边界拆记录（68013仍采用已声明柜台核算期间）；在同一产生区间内采用既定场站任务/处理作业驱动，不用后来外运或完整队列窗口的份额。直接事件归属优先。 期间归属前记录场站时区。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | 支持过程的实物清单 | 逐供应方、场站、配置、事件及核算区间，先将每项实测实物总量划入互斥清单责任，再选研究队列。使用该支持过程固定的活动驱动，分母包含全部使用者及失败作业。直接因果归属优先于共享分配。数量已归属时不得再次乘队列份额。服务层分配量仅作原始驱动，不作交换量，也不再次除最终参考流件数。表计/库存、安装/替换资产、内部转移、产生废物及去向须在同一物理/时间边界闭合。完整产品gate可保留其制造背景，但不得换名重引入一张汇总服务卡。 |  |
| allocation_atomic_capital | 制造；安装；寿终资产 | 逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 |  |
| allocation_capital_restatement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| allocation_atomic_waste | 运行和维护产生的废物 | 运行及维护产生废物的原产生事件、供应方/活动队列、份额及原参考流分母须随暂存和转移保留。共享废物区间固定为声明时区的当地日历月，采用同区间因果活动及全部使用者；既有更具体维修年或柜台期间方法优先适用。在一致材料/水分基准核对：期末=期初+产生+内部转入-内部转出-外运-有证据物理损失。留存废物仍须有实际证据或明确有证据相容前瞻路线及不确定性的最终暂存/运输/处理，去向未知保持不完整。后来回执替换原事件模型，不新增外运期负担。资产寿终废物改用配对资本份额。废物载体及内含组分、储存损失/释放及残余处理不得重复；同一实测场站/暂存作业只归一个清单责任方。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | accept | 验收产出及办理驱动量 | event_log | 邮件标识；办理会话标识；分层；起止gate时间；有人值守窗口/资源标识；各件直接秒数；共同办理活动标识及秒数；参与邮件标识/件数及等需求证据；分配后办理秒数；结果；收据标识；交接标识；更正/尝试关联；原因 | 在柜台首次办理、出具收据及交接时采集；按邮件标识连接受理、收银及保管日志，去除重复成功事件，保留失败/返工/中止事件、主动耗时及无产出标志。先应用allocation_session，再计算T_sj；各件分配秒数合计与实际资源主动办理秒数对账。不要求顾客个人身份。 汇总细则：N_s为分层s唯一完成事件；按 allocation_time 求 T_sj 与 w_sj；仅用 N_s 作一次分母。 | Item(s); s | 逐事件；每日对账 | 一个完整声明核算期间；全部资源对齐 | 同网点及共享资源全部功能 | 每参考流 | 去身份事件/收据/保管对账；时钟核查；缺失日志登记 |
| cp_interface_premises_service | support_premises_service | svc_premises_service | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集完整柜台核算期间实际柜台面积平方米乘占用小时；保留原共享空间分配。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | m2*h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_remote_acceptance_it | support_remote_acceptance_it | svc_remote_acceptance_it | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集在合同后端接口计数唯一已执行请求ID，包含独立执行的失败和重试请求；一项是一次请求执行，不是一项成功柜台产出。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | Item(s) | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_capital_restatement | accept; support_premises_service; support_remote_acceptance_it | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| cp_energy | accept | counter_electricity | meter_log | 电表标识；线路图；期初/末kWh；区间；日期；设备状态；直接/共享标记；T_sj；供电边界 | 按班次及期间起止读经校准插座/分表；含待机、停机和闭店小时。仅扣独立计量非柜台线路并与上级供电对账；不得用账单减未知项形成余量。 汇总细则：直接标记量加共享期间量乘w_sj；先calc_energy再calc_normalize。 | kWh; MJ | 逐区间/班次及期间起止 | 同一完整核算期间 | 已映射柜台线路及相关全部设备 | 每参考流 | 电表序列号/校准及线路清册；供应地域/电压/范围 |
| cp_stock | accept | receipt_paper; acceptance_label | stock_ledger | 库存代码；含胶黏剂及离型涂层的准确结构；期初/末kg；入库；调入/调出；带去向和变动标识的退供应商/范围外料；内部未用料退库；领用卷/张；实测质量；作废/重打领料；库存单位 | 在领退料及期间盘点用经校准秤逐产品称重；或通过称量有记录样本核实每卷/张代表质量并保留样本变动。按唯一变动标识和去向对账采购及库存变动。同一库存边界内未用卷料退回已计入期末库存，不得再次扣除。退供应商/范围外未用料须与调出互斥；不得按邮资金额换算。 汇总细则：calc_stock；按分层直接领料，共用料仅在物理依据成立时按w_sj；calc_normalize。 | kg；卷；张 | 逐变动及期间盘点 | 同一完整核算期间 | 柜台库及直接标记分层；其他功能另记 | 每参考流 | 供应结构/定量、称重样本、秤及库存账；保留未解释差异 |
| cp_assets | accept | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer | asset_register | 序列号；型号；组件包含范围；安装/报废；日历寿命；维修；期间安装小时；受服务全部功能工作量份额；w_sj；生命周期数据集范围 | 在期初/末盘点检查已安装资产，保留采购/维修/报废记录，对照生命周期清单核验型号和组件范围。未报废时须说明预计寿命并量化不确定性。 汇总细则：先calc_device再calc_normalize；逐序列号在全部功能间仅有一个总寿命份额。 | Item(s); h | 逐安装/维修/报废；期间核查 | 同期间加有证据完整寿命 | 服务柜台的全部设备，含共享/集成设备 | 每参考流 | 资产/照片/型号清册；供应/维修证据；有记录寿命情景 |
| cp_premises | accept | activity_premises_service | facility_inventory | 区域标识；实测专用/共享m2；日历小时；逐功能计划有人值守窗口小时；逐载体区域计量；燃料/水/清洁材料量；逐制冷剂期初/末/补充/回收；维护和建筑资产量/寿命；废物/去向；柜台直接项排除；v_s | 初次及变更后实测平面；逐期间起止和区间读取分区公用设施，逐事件采集实际领料、维护/制冷剂记录，检查资产及废物记录。按allocation_premises_inventory建立匹配占用场所背景，逐能源载体/材料/物种独立记录交换。不得据缺账单推定不存在。 汇总细则：calc_premises；全部功能合计与场地占用面积小时及分区设施对账；calc_normalize。 | m2*h; 逐载体适用能量/质量/体积；资产件数 | 逐期间；逐材料/服务事件；变更时更新平面 | 同一完整期间及全部日历小时，含闭店 | 同一占用场地及服务网点全部功能的区域 | 每参考流 | 面积测绘、排班、电表/校准、材料与服务日志、背景范围/对应表、防重叠检查 |
| cp_remote | accept | activity_remote_acceptance_it | request_log | 端点；供应方；请求标识；操作；分层；成功/失败/重试；时间；请求数；字节数；背景范围/单位 | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。在执行时采集应用/服务器请求日志；纳入成功及失败/重试调用，与柜台尝试关联且不重复请求标识。取得匹配操作供应方活动清单，含传输、计算/制冷及硬件边界。缺清单阻断完整上游覆盖。 汇总细则：先calc_remote再calc_normalize；请求数独立于N_s。 | Item(s)（请求）；字节 | 逐执行请求；期间对账 | 同一完整核算期间 | 仅柜台受理实际使用端点 | 每参考流 | 已删敏请求计数、供应方范围/单位及分配证明；失败请求覆盖 |
| cp_waste | accept | receipt_paper_waste; glassine_liner_waste | waste_transfer | 废物流；准确材料；容器皮/毛/净重；分层/直接/共享；日期；去向；已含处理；出具纸/离型纸质量；库存余量; 产生事件generation_event_id；产生时间/场站；来源任务/队列/分层；原分配份额及参考流分母；产生质量及干湿/组成基准；按原来源期初末库存；内部转移ID及两端；外运；有证据物理损失/释放；接收方及去向份额；实际/前瞻路线及模型版本；证据/不确定性；回执替换状态及修订链 | 在产生点计量分流产生质量，暂存前记录责任任务/区间；若由完整库存平衡反推产生量，须记录全部转移、损失及测量不确定性，并保留原事件来源。执行allocation_waste_origin及calc_waste_origin。每次转移及期末，用校准及接收证据核对带来源库存。留存量必须有受支持的暂存/运输/处理覆盖；后续回执替换原事件模型，不新增外运期第二笔负担。 分离小票纸及离型纸；产生废物与净领料及交付客户纸/标签对账；不相容材料身份/去向缺口须保留。 | kg | 逐转移；期间平衡；逐次普通废物产生及每月来源库存对账 | 同一完整核算期间；原产生责任保留至最终处理证据 | 仅柜台产生废物，逐分层归属 | 每参考流 | 秤/皮重记录、转移联单、处理范围、材料平衡及未解释余量 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_premises_service | support_premises_service | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 燃气表体积；温度/压力及标准态；干湿基准；同批次低位热值及证明；供应数据与燃烧因子能量基准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。仅 allocation_premises_inventory 下与场所期间/分区匹配的柜台场所；排除直接设备、插座负载、纸与远端IT。 沿用 allocation_premises、allocation_premises_inventory、cp_premises、calc_premises、calc_normalize。先分区计量。剩余照明/暖通/水/清洁按服务面积日历小时份额；资本/建筑维护按保留面积日历小时及有证据寿命。F_s=(柜台专用m2+共享m2×柜台计划有人服务窗口小时/全部服务功能计划有人服务窗口小时)×期间全部日历小时×v_s；v_s 为该场地服务层调整后主动办理秒数/全部事务类别秒数。供应方实物总量及所选分区/资源池须对账到同一场所期间；use/maintenance 的 q=供应方同期间总量×固定资源池至F_s份额/N_s，仅除一次。资本与寿终采用完全相同寿命消耗份额。不得用全办公室w_sj代替v_s或重复套用场所强度/F_s。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 现场燃气按calc_premises_gas_ncv换算。仅用同低位热值基准的供应LCI和按MJ因子；高位或基准未知的源不可直接替代。 燃气协议向实物归属提交未分配的原始NCV MJ；已归属或按参考单位报告的供应强度须先还原同范围原量。 | 各卡原生单位；原始m2*h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 同一完整柜台核算期间，包含柜台gate内失败及返工；原资产寿命和原事件废物后续接收/处理证据分别持续追踪，不延长受理服务gate至下游寄递或退回 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_remote_acceptance_it | support_remote_acceptance_it | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。声明受理端点实际执行的条码验证/记录写入/确认请求；含失败/重试，排除持续投递追踪。 沿用 cp_remote、calc_remote、calc_normalize。去重实际请求ID，关联请求/服务层/端点/时刻/字节与实测CPU/网络/冷却工作量。每个明确边界供应方期间资源池，按实测受理操作工作量/全部操作工作量分配实物总量，再用有证据的服务层请求工作量份额；对账其他负载及基线/闲置需求，不得丢弃闲置基础设施或假定每件成功邮件仅一请求。use/maintenance 的 q=供应方同期间实物总量×固定归属份额/N_s，仅除一次。资本与寿终采用下述相同f，其中已各含一次有证据的安装寿命份额与操作份额。请求数/字节本身不足以换算资源消耗，须有供应方关联证据；缺关联阻断。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始Item(s) requests | 逐事件；当地月/维修年对账；每年及资产变化复审 | 同一完整柜台核算期间，包含柜台gate内失败及返工；原资产寿命和原事件废物后续接收/处理证据分别持续追踪，不延长受理服务gate至下游寄递或退回 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_energy | counter_electricity | 归属期间能量 = 3.6 *（直接标记kWh + 共享kWh * w_sj）；仅应用calc_normalize一次。 | cp_energy; allocation_time; allocation_idle | 期间MJ总量 |  |
| foreground_interface_method | svc_premises_service; svc_remote_acceptance_it | 计量前按 boundary_atomic_support 将每个事件/范围组成划为互不重叠的前景实物或外部服务。现有实物卡公式、组成规则及 cp_support 协议仅适用于前者，不得为启用服务接口而要求外部供应方BOM或内部表计账本。对服务行s采集固定原生单位的原始 A_s,e，并按原具名活动分配确定 alpha_s,e：直接属于队列的事件取1；确需共享的事件保留原全用户驱动、失败/空驶/待机处理及事件窗口。已归属服务量 T_s=sum(A_s,e*alpha_s,e)；原生活动账本已含队列归属时，不得再次乘份额。q_s=T_s/N_ref，N_ref为原队列正参考产出。零产出时保留原始总量并将单位结果标为未完成。时间、面积、计数和运输活动量不得无证据换成能量或设备质量。服务清单已包含资本分配时不得再乘实物资产寿命份额。背景连接仅以q_s乘每一相同服务单位的清单一次；排放因子不是服务交换数量。原实物专用指令及服务禁用措辞仅适用于前景实物分支；服务分支执行本规则及其明确接口协议。 未完成或中止的服务事件仍保留有证据的归属负担。不得因接口以完整单位计数就将其丢弃：须以合同及执行记录证明等效原生服务量，或在声明完整前增设身份明确的部分服务行；不得假定一整单位或零。 已按最终参考流表示的供应方数值不是原始A_s,e：重新计算前须恢复原总量和分母，或证明归一结果完全等价且不再除最终分母。供应方已包含的分配仅应用一次。 | cp_interface_premises_service; cp_interface_remote_acceptance_it | 每原参考流的原生服务单位 |  |
| calc_interface_premises_service | svc_premises_service | 执行 foreground_interface_method。原生活动 A_s,e（m2*h）：完整柜台核算期间实际柜台面积平方米乘占用小时；保留原共享空间分配。仅将原 activity_premises_service 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N_s，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_premises_service; activity_premises_service | m2*h/N_s |  |
| calc_interface_remote_acceptance_it | svc_remote_acceptance_it | 执行 foreground_interface_method。原生活动 A_s,e（Item(s)）：在合同后端接口计数唯一已执行请求ID，包含独立执行的失败和重试请求；一项是一次请求执行，不是一项成功柜台产出。仅将原 activity_remote_acceptance_it 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N_s，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_remote_acceptance_it; activity_remote_acceptance_it | Item(s)/N_s |  |
| calc_stock | receipt_paper; acceptance_label | 净消耗库存 = 期初 + 入库 + 调入 - 期末 - 退供应商/范围外未用料 - 调出，均为同结构库存kg。外部退料与调出按变动标识互斥；内部未用料退回保留在期末库存，不得再扣。按标记领料再按有依据共享驱动份额分给分层；包含作废/重打耗用。 | cp_stock | 期间kg总量 |  |
| calc_device | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer | 设备消耗当量 = 期间安装日历小时 / 有证据安装日历总寿命小时 * w_sj；按不同序列号汇总，再应用calc_normalize。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_assets; allocation_device | 期间Item(s)寿命当量总量 |  |
| calc_premises | activity_premises_service | F_s =（直接保留柜台m2 + sum（共享区m2 * 柜台计划有人值守窗口小时 / 全部受服务功能计划有人值守窗口小时））* 核算期间日历小时 * v_s。F_s保留原始面积时间；逐实物卡应用匹配清单强度及固定分配，再仅除一次最终N_s。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 燃气取第8节已换算的原始NCV MJ，再按场所资源池份额分配并除N_s一次。 | cp_premises; allocation_premises; allocation_premises_inventory | 原始活动诊断：期间m2*h总量 |  |
| calc_premises_gas_ncv | u_premises_service_natural_gas | 逐计量分区与供应期间j，Q_gas_NCV_MJ_j=同状态V_m3_j*NCV_MJ_per_m3_j。已报NCV MJ则直接保留原始总量。仅有高位热值时，用同气源、状态、期间的有证NCV/GCV比例或原体积与NCV换算；否则不完整。供应清单及燃烧因子的每MJ基准均须为NCV。本规则只输出未分配、未除N_s的原始供气MJ。 | cp_support_premises_service | 逐分区/期间的未分配NCV MJ |  |
| calc_remote | activity_remote_acceptance_it | 期间请求数 = 归属分层s的不同请求标识数，含实际失败/重试操作；未标记共享请求按全部受服务功能实测操作工作量份额分配并附不确定性。不得令请求数等于成功邮件数。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_remote | 原始活动诊断：期间Item(s)请求总数 |  |
| calc_normalize | 全部清单行 | 每参考流非参考行数量 = 归属期间交换总量 / N_s。accepted_counter_transaction 输出为1 Item(s)。已归一化投入须先还原及对账匹配期间总量；不得重复相除。 普通废物calc_waste_origin已给出kg/N_s，不得再次归一化或以外运期总量替换原期间责任。 | cp_acceptance; 逐行关联采集协议 | 行单位每参考流 |  |
| calc_waste_origin | receipt_paper_waste; glassine_liner_waste | 对每种指定普通固废r及产生事件j，A_c,r = sum_j(G_j,r*s_c,j)，随后q_c,r=A_c,r/原参考流件数，仅归一化一次。G为实测产生质量，不是外运质量。逐材料及原事件对账：期末=期初+产生+内部转入-内部转出-外部外运-有证据物理损失。记录实际水分/组成变化及互斥损失/释放；不得虚构差额，也不得完整残余质量与其已释放组分重复计量。内部转移保留来源，不产生另一笔交换。即使尚在实物暂存，也应建模原队列废物输出及必要暂存/运输/最终处理；使用实际相容接收证据，或有明确证据、匹配材料/组成/地域的前瞻处理路线并披露不确定性。去向份额和为一且仅乘一次，不默认回收或将留存质量处理计零。去向无依据则保持不完整。实际保管库存及外运另作控制台账，不再追加清单。后续接收证据须替换同一事件的前瞻模型，并用原分母重算原队列，不得将相同质量/处理新增给后来队列。用范围交叉表将必要生命周期各环节仅计一次，排除已含于场站/服务清单的暂存能源和搬运。资本寿终废物寿命份额及污水平衡继续使用各自独立规则。 原参考流件数为原队列/分层N_s。 废物交换gate在产生点。其链接的完整废物管理清单以同一产生质量基准的1kg为输入，覆盖暂存及后续全部去向；最终处理输入仅为扣除储存损失并换算水分基准后的相容实测/有证据预测残余量，不得完整原kg处理再加独立损失。显式储存释放须替换链接清单内相同释放；已含于场站/服务池的暂存/搬运作业须按有记录范围交叉表从废物链接剔除，不得重复。 | cp_waste; allocation_waste_origin | 每原参考流kg；原来源库存/模型台账 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_premises_service | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。沿用 allocation_premises、allocation_premises_inventory、cp_premises、calc_premises、calc_normalize。先分区计量。剩余照明/暖通/水/清洁按服务面积日历小时份额；资本/建筑维护按保留面积日历小时及有证据寿命。F_s=(柜台专用m2+共享m2×柜台计划有人服务窗口小时/全部服务功能计划有人服务窗口小时)×期间全部日历小时×v_s；v_s 为该场地服务层调整后主动办理秒数/全部事务类别秒数。供应方实物总量及所选分区/资源池须对账到同一场所期间；use/maintenance 的 q=供应方同期间总量×固定资源池至F_s份额/N_s，仅除一次。资本与寿终采用完全相同寿命消耗份额。不得用全办公室w_sj代替v_s或重复套用场所强度/F_s。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_premises_service | 原始m2*h及唯一归属实物总量，不是服务产品 |  |
| activity_remote_acceptance_it | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。沿用 cp_remote、calc_remote、calc_normalize。去重实际请求ID，关联请求/服务层/端点/时刻/字节与实测CPU/网络/冷却工作量。每个明确边界供应方期间资源池，按实测受理操作工作量/全部操作工作量分配实物总量，再用有证据的服务层请求工作量份额；对账其他负载及基线/闲置需求，不得丢弃闲置基础设施或假定每件成功邮件仅一请求。use/maintenance 的 q=供应方同期间实物总量×固定归属份额/N_s，仅除一次。资本与寿终采用下述相同f，其中已各含一次有证据的安装寿命份额与操作份额。请求数/字节本身不足以换算资源消耗，须有供应方关联证据；缺关联阻断。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_remote_acceptance_it | 原始Item(s) requests及唯一归属实物总量，不是服务产品 |  |
| calc_atomic_physical | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air; u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。对供应方相容区间j的运行实物流x，由计量、库存平衡、工单或相容的单物种/单材料单位清单取得本卡物理单位Q_x,j。若来源按活动单位提供强度，先算Q_x,j=强度_x,j*实际全使用者活动_j；不得用金额、通用服务排放篮子或未还原原分母的每参考流数值。再按固定过程驱动及全使用者份额，q_x=sum_j(Q_x,j*s_c,x,j)/N_ref，仅归一一次。卡用MJ时，电力kWh仅乘一次3.6；其他计数/质量/体积换算须有适用的实测配置单重、密度、浓度及水分。覆盖相同数量/期间/范围的共享表计或上游产品/服务须按实测重叠交叉表剔除，不能假定比例。 天然气行的Q_x,j=calc_premises_gas_ncv给出的原始Q_gas_NCV_MJ_j，s_c,gas,j为allocation_premises_inventory既定的分区至服务层份额；已测总量与用匹配强度重构的同一总量只取一个，最终仅除N_s一次。 | cp_support_premises_service; cp_support_remote_acceptance_it | 每原参考流的卡原生物理单位 |  |
| calc_atomic_capital | u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 | cp_support_premises_service; cp_support_remote_acceptance_it | 制造产品及配对终态残余，相同寿命份额 |  |
| calc_capital_restatement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| capital_premises_service_building_gate | u_premises_service_building_gate; u_premises_service_concrete_demolition | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_premises_service_building_gate：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/N_s。Q_a 为摊销前原始完整建筑壳体交付面积。f=目标队列/服务层已归属占用/保留面积小时/同资产完整寿命占用/保留面积小时；必须为同资产、同面积及同日历小时定义。premises_service 分子为F_s；premises 为其已归属队列面积小时。q_prod=Q_a×f/N_s；各完整生命周期拆除流Q_e使用完全相同f/N_s。队列/服务层份额已含f内，不得再乘。缺寿命/面积边界即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_premises_service_concrete_demolition：原生kg，q=sum(R_a*f_c,a)/N_s；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_premises_service | 每N_s的资产原生物理单位；终态自身原生单位，同f |  |
| capital_remote_acceptance_it_server_gate | u_remote_acceptance_it_server_gate; u_remote_acceptance_it_retired_server | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_remote_acceptance_it_server_gate：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N_s。Q_a 为摊销前、工厂交付接口的原始完整硬件数量。f=(供应方期间安装日历小时/有证据的完整安装日历寿命小时)×有证据的端点操作及服务层工作量份额。全部工作量及闲置能力须对账。q_prod=Q_a×f/N_s；同资产终态Q_e使用完全相同f/N_s。不得再乘工作量份额。缺寿命或工作量至资源关联即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_remote_acceptance_it_retired_server：原生Item(s)，q=sum(R_a*f_c,a)/N_s；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_remote_acceptance_it | 每N_s的资产原生物理单位；终态自身原生单位，同f |  |
| capital_remote_acceptance_it_network_switch_gate | u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_network_switch | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_remote_acceptance_it_network_switch_gate：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N_s。Q_a 为摊销前、工厂交付接口的原始完整硬件数量。f=(供应方期间安装日历小时/有证据的完整安装日历寿命小时)×有证据的端点操作及服务层工作量份额。全部工作量及闲置能力须对账。q_prod=Q_a×f/N_s；同资产终态Q_e使用完全相同f/N_s。不得再乘工作量份额。缺寿命或工作量至资源关联即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_remote_acceptance_it_retired_network_switch：原生Item(s)，q=sum(R_a*f_c,a)/N_s；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_remote_acceptance_it | 每N_s的资产原生物理单位；终态自身原生单位，同f |  |
| calc_atomic_species | 所有基本实物流清单行 | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。每张基本流卡对应一种物质或物理明确的颗粒载体，以及一个接收介质/子介质。采集实际物种/CAS或已验证化学身份、因子单位及质量/摩尔/碳表达、来源技术/燃料/负载、地点和接收介质。单物种实测排放或相容因子仅用一次。完整产品gate已含的工厂排放不得再列为供应方直接运行排放。颗粒粒径及去向份额互斥；物理颗粒不是虚构纯元素。NOx及NMVOC总量仅作QA观测，不替代基本交换。任何实际额外物种/材料必须在建模完成前拥有具体双语源卡、协议、单位、固定计算及正常投影，不使用选择器或族名占位卡。 | cp_support_premises_service; cp_support_remote_acceptance_it | 逐接收介质的单物质或明确实物载体 |  |
| calc_nox_speciation | u_premises_service_no_air; u_premises_service_no2_air | 仅对有明确证据定义为NOx=NO+NO2且按NO2等效表达的总量，记录T、单位/基准及匹配来源实测摩尔份额a=n_NO/(n_NO+n_NO2)。使用独立有据、单位一致的分子质量，m_NO=a*T*M_NO/M_NO2，m_NO2=(1-a)*T。优先采用直接单物种质量实测/因子，不再追加QA总量。T不是普通NO/NO2混合质量，不得直接把质量份额乘T或将全部T灌给NO2。若定义包含其他氮物种、缺组分或换算证据，不得二组分拆算：保留原QA观测，并阻断完成直至实际单物种行及数量确定。PCR不默认任何数值份额或分子质量。 | cp_support_premises_service | NO及NO2各自kg，不以NO2等效作交换 |  |
| calc_capital_restatement_driver_revision | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | 全部清单行 | 匹配网点、日历期间、分层、起止gate、供应方及物理单位；披露服务质量和单次办理邮件件数。挂号、证明交寄程序及不同邮件形态不得自动视为等价。 | cp_acceptance；供应方范围记录 |
| quality_unknown | 全部清单行 | 缺数量、未核实身份、缺上游清单、未知去向或对账失败均为明确缺口，阻止声称数据集完整。暂定估计须说明来源、方法、范围及敏感性；本文不提供默认数值强度、寿命、换算因子或合规限值。 | 缺口登记及情景证据 |
| quality_inventory | activity_premises_service; activity_remote_acceptance_it; counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer | 保留分解后的服务底层清单、单位、驱动证据及明确范围排除。检查全部物理来源是否重复电力、资产、制冷、纸、网络或废物处理。仅服务名、收据或价格不足为证。 | 供应方/前景背景对应及平衡 |
| quality_waste_origin | receipt_paper_waste; glassine_liner_waste | 逐种普通固废核验产生责任、原队列/分层/分母、带来源库存平衡、有证据的实际或前瞻完整处理及后来回执替换。来源/去向/物理损失未知保持明确缺口；后来外运本身不能闭合或改归责任。污水及按寿命摊销资产寿终处理采用各自独立方法。 | 产生/库存/转移台账；有证据路线模型；原队列回执替换 |
| quality_identity | 全部清单行 | 后续流UUID仅在直读确认已有中英文官方名称、流类型、记录状态、属性、单位及接收介质后绑定。搜索相似和历史引用不足为证；未解决卡在绑定前保持候选。 | 官方响应及哈希绑定身份依据 |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | 所有已拆分的支持过程和物种 | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | 范围到实物行对账；供应/BOM/物种原件；签署缺口表 |
| quality_service_interfaces | svc_premises_service; svc_remote_acceptance_it | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | cp_interface协议；签署的覆盖责任矩阵；原生单位对账；身份receipt |
| scope_interface_premises_service | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air; svc_premises_service | 对 support_premises_service，svc_premises_service 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_remote_acceptance_it | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch; svc_remote_acceptance_it | 对 support_remote_acceptance_it，svc_remote_acceptance_it 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| inv_premises_scope | u_premises_service_electricity; u_premises_service_tap_water; u_premises_service_natural_gas; u_premises_service_hot_water_heat; u_premises_service_building_gate; u_premises_service_sanitary_wastewater; u_premises_service_concrete_demolition; u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | 仅 allocation_premises_inventory 下与场所期间/分区匹配的柜台场所；排除直接设备、插座负载、纸与远端IT。 | 所列各清单行既有的采集协议和证据。 |
| inv_ac_basis | u_premises_service_electricity; u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity | 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 | 所列各清单行既有的采集协议和证据。 |
| inv_asset_basis | u_premises_service_building_gate; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate | 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 | 所列各清单行既有的采集协议和证据。 |
| inv_terminal_basis | u_premises_service_concrete_demolition; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 其原始Q_e为asset_suffix所指资产摊销前完整生命周期终态实物量，不是已摊销供应方期间量或后来期间外运总量。完全使用关联生产f一次，仅除原分母一次，不再乘运行归属份额。 | 所列各清单行既有的采集协议和证据。 |
| inv_combustion_species | u_premises_service_co2_fossil_air; u_premises_service_no_air; u_premises_service_no2_air | 仅在确切燃烧技术、物种、因子及接收区室均有证据时；不得用总NOx代替。按实测燃料与单物种因子计算一次，排除上游燃料链排放。 | 所列各清单行既有的采集协议和证据。 |
| inv_remote_it_scope | u_remote_acceptance_it_datacentre_electricity; u_remote_acceptance_it_network_electricity; u_remote_acceptance_it_cooling_makeup_water; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 声明受理端点实际执行的条码验证/记录写入/确认请求；含失败/重试，排除持续投递追踪。仅当实际端点/供应方资源及独立产品/接收接口有证据时；不同技术/型号/分区不得混合。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | foreground_dataset_conformance | N_s须与唯一有效受理/收据/交接事件对账；拒收、撤销、重复扫描或更正不得另计输出。拒绝 N_s <= 0；适用前核验全部限定。 |  |
| validate_service_interfaces | svc_premises_service; svc_remote_acceptance_it | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |
| validation_balance | foreground_dataset_conformance | 逐资源将直接量加全部功能分配份额与原始期间总量对账；w_sj在受服务功能上合计为1。分别检查场所占用面积小时、库存kg及废物kg。保留未解释差异；不得将缺失值改零强行平衡。 检验A期产生留存废物、B期外运：原A责任及分母保留，实际证据替换同一事件模型，不再给B追加负担。 |  |
| validation_material | foreground_dataset_conformance | 购入复合标签包含离型纸；随邮件贴出标签加离型纸废物、废次品/库存变化须与耗用库存对账，不得另列离型纸投入重复。已出具纸不得同时计废物。核验标签准确结构；未知或不同材料须另行辨明/建卡。 |  |
| validation_support | foreground_dataset_conformance | 对照直接前景投入核验全部场所、设备、远程IT和废物处理技术边界。底层背景证据缺失或资产/能源/处理范围重复时判为不完整；该检查本身不构成完整生命周期或方法批准。 |  |
| validation_projection | foreground_dataset_conformance | 全部强制边界、分配、采集、计算和质量要求须以相同的行/协议/规则标识保留在规范结构化投影中；核验双语语义及当前哈希，不得只验哈希。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | 所有支持过程和排放清单行 | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | counter_computer; counter_scale; barcode_scanner; receipt_printer; label_printer; u_premises_service_building_gate; u_premises_service_concrete_demolition; u_remote_acceptance_it_server_gate; u_remote_acceptance_it_network_switch_gate; u_remote_acceptance_it_retired_server; u_remote_acceptance_it_retired_network_switch | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有已声明上游连接的柜台受理单元过程服务清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅限匹配有人柜台受理分层、质量、地点、期间和gate；仅在移除重叠受理负担后与后续服务组合 |
| excluded_use | 通用全CPC覆盖、全部网点事务、顾客到访足迹、银行/零售业务或已完成邮政投递 |
| required_metadata | 全部参考限定、N_s、主动/闲置/失败记录、网点资源范围图、分配驱动量、期间总量、技术背景连接及单位兼容；普通废物产生来源、原份额/分母、留存库存及处理修订链；签署的前景/接口责任矩阵、原生服务活动及背景覆盖；仅对前景责任组成保留原实物活动、制造/终态配对及物种基准 |
| required_quality_disclosure | 未解决身份及上游缺口；不得以零代缺；时间/场址覆盖；前景估计及不确定性；服务/设施/设备范围排除 |
| update_trigger | 受理程序、邮件形态/质量、网点设施边界、设备/IT供应方、耗材结构、吞吐量/工作量或重要证据变化；后来普通废物回执/去向或产生量更正须更新原事件/队列模型；前景实物身份/物种变化或外部接口配置/单位/覆盖变化须复审适用具体卡并更新投影 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-68013 | official_guidance | UNSD, CPC Version 3.0, subclass 68013 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68013 | 分类包括售邮票及挂号/证明交寄办理；用于界定较窄边界，不提供默认强度 |
| usps-package | official_guidance | USPS, How to Prepare and Send a Package; https://www.usps.com/ship/packages.htm | 实际柜台称重、邮资打印/贴附及邮件呈交；为美国实例，不是全球通用材料规格 |
| usps-extra-services | official_guidance | USPS, Shipping Insurance and Delivery Services; https://www.usps.com/ship/insurance-extra-services.htm | 挂号/证明交寄及寄件收据与妥投证明的区别；须声明业务特定适用条件 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 7-10, especially chapter 9 allocation; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般过程细分、物理分配、一致回收及不确定性原则；本文柜台特定协议与分配驱动量为本PCR所定，不是该标准规定的数量因子 |
