---
pcr_id: pcr.constructions-and-construction-services.construction-services.other-electrical-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 室内六类非屏蔽双绞线永久链路安装服务

## 1. 范围与适用性

首次安装一条室内固定四对六类非屏蔽实心铜导体永久链路，连接既有配线面板承载件端口与既有工作区插座承载件。通过已验收、可进入的预备路径，采用不加化学助剂的手工敷设；两端安装兼容的免打线工具绝缘位移连接数据模块。安装方标识链路，完成永久链路测试，纠正缺陷，并连同实际配置和测试文件交付验收合格链路。Leviton Atlas-X1 61UJK 仅说明模块接口，不构成品牌限定。[leviton-atlasx1-utp]

排除新建桥架、导管、穿孔、机架、配线面板或插座承载件及建筑施工；既有链路拆除；屏蔽、光纤、同轴、室外或跨建筑路线；接头、集合点及插头端接的 MPTL；设备线和跳线；有源设备、网络配置、PoE 负载测试和运行。另行采购的路径或承载件施工服务属于上游接口，不能隐含计入本安装清单。需要化学牵引助剂、钻孔或不同端接技术的作业，须先审查范围变更。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.other-electrical-installation-services |
| classification_refs | CPC 3.0 54619, Other electrical installation services; narrower |
| covered_products | 首次安装一条室内固定四对六类非屏蔽实心铜导体永久链路，连接既有配线面板承载件端口与既有工作区插座承载件。通过已验收、可进入的预备路径，采用不加化学助剂的手工敷设；两端安装兼容的免打线工具绝缘位移连接数据模块。安装方标识链路，完成永久链路测试，纠正缺陷，并连同实际配置和测试文件交付验收合格链路。Leviton Atlas-X1 61UJK 仅说明模块接口，不构成品牌限定。[leviton-atlasx1-utp] |
| excluded_products | 排除新建桥架、导管、穿孔、机架、配线面板或插座承载件及建筑施工；既有链路拆除；屏蔽、光纤、同轴、室外或跨建筑路线；接头、集合点及插头端接的 MPTL；设备线和跳线；有源设备、网络配置、PoE 负载测试和运行。另行采购的路径或承载件施工服务属于上游接口，不能隐含计入本安装清单。需要化学牵引助剂、钻孔或不同端接技术的作业，须先审查范围变更。 |
| representative_product | 预备承载件上采用两个兼容免打线工具 IDC 数据模块的固定四对六类非屏蔽链路 |
| production_route | 接收匹配的线缆、数据模块和附件；确认预备路径、承载件和断开连接的接口；按实际弯曲及牵引限制手工干式敷设；按声明的线对接法端接两端模块；固定和标识；采用选定的六类永久链路限值及适用适配器测试；修复并复测；验收并交付竣工及测试记录。 |
| market_state | 安装方交接时验收合格的室内六类非屏蔽双绞线永久链路 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 安装方交接时验收合格的室内六类非屏蔽双绞线永久链路 |
| How much | 一条同配置验收完整链路；归一化前独立确认实际 D |
| How well | 通过选定六类永久链路限值测试，保留原始测试证据，缺陷闭合并签字交接 |
| How long or cycle | 一次收货至验收作业，包含实际纠正及复测，分别索引资源生命周期和报告期 |
| reference_flow_link | `accepted_link` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 安装方交接时验收合格的室内六类非屏蔽双绞线永久链路 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 链路编号及两端端口；实际线缆厂家和型号、四对实心铜导体结构、护套及防火等级、含保留余量的实装实体长度；数据模块型号和线对接法；承载件及路径的就绪状态和责任人；安装日期；测试标准及版次、永久链路限值组、线缆传播速度设置、测试仪和适配器标识及校准信息；完整原始结果、修复、复测和签字验收记录。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性（`required_property`） | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_basis | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 使用 cp_acceptance 计数同一已披露配置的实际唯一验收完整链路数 D。D 必须大于零。线缆米数、连接器、测试次数或通过测试的线对均不是链路数。输出数量为 1 Item(s)；不进行服务数量与质量之间的换算。 |
| material_mass | copper_data_cable, cat6_utp_jacks, `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier`, `incoming_packaging_carton`; `incoming_packaging_bag`, `refine_usable_material_returns`要求细化的实际交换, `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_materials 记录输入净质量；cp_releases 记录退回产品和废物净质量。使用校准称量，或同一实际 SKU 的可追溯件数、长度与净质量换算证据。实装线缆长度包含保留余量和端接插入段；电气测试长度不能自动等同于实体耗用长度。不得用含包装运输质量代替净质量，也不得把不同材料合计成一个交换。 |
| electricity_basis | installation_electricity | Energy | kWh | 通过 cp_energy 记录外部充电、测试和工具的实际用电，包含验收前修正及复测。保留供应方、电压和电表边界。电池安时、测试仪运行时间和净热值均不能代替电量。仅有 kWh 单位组记录不能验证 Energy 流属性。 |
| resource_basis | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger`, `contracted_support_test`; `contracted_support_access` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | cp_resources 区分某一自有资产的生命周期份额与实际采购的完整服务事件。实际按小时租赁需要兼容的 Duration 支撑及单独审查的交换，不得将小时改称 Item(s)。测试适配器及可重复使用的测试引线属于工具资产，不是实装跳线。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收、可进入的既有路径和承载端口；通信接口断开；接收实际物资 |
| starting_condition_role | 声明的前提，位于前景施工责任外 |
| product_classification_scope | 建筑内通信布线；CPC3.0 54619 的较窄子集，排除有线电视、报警及公共网络施工 |
| recursive_input_rule | 声明同类别输入先前状态及交付点；不得重复计入已安装链路 |
| upstream_dataset_requirement | 兼容的具体供料部件及资源数据包，声明制造、交付、包装和服务商资产包含项 |
| disclosure | 链路编号及两端端口；实际线缆厂家和型号、四对实心铜导体结构、护套及防火等级、含保留余量的实装实体长度；数据模块型号和线对接法；承载件及路径的就绪状态和责任人；安装日期；测试标准及版次、永久链路限值组、线缆传播速度设置、测试仪和适配器标识及校准信息；完整原始结果、修复、复测和签字验收记录。 |

| rule_id | 规则 | 来源 |
| --- | --- | --- |
| `scope_eligibility` | 首次安装一条室内固定四对六类非屏蔽实心铜导体永久链路，连接既有配线面板承载件端口与既有工作区插座承载件。通过已验收、可进入的预备路径，采用不加化学助剂的手工敷设；两端安装兼容的免打线工具绝缘位移连接数据模块。安装方标识链路，完成永久链路测试，纠正缺陷，并连同实际配置和测试文件交付验收合格链路。Leviton Atlas-X1 61UJK 仅说明模块接口，不构成品牌限定。[leviton-atlasx1-utp] 排除新建桥架、导管、穿孔、机架、配线面板或插座承载件及建筑施工；既有链路拆除；屏蔽、光纤、同轴、室外或跨建筑路线；接头、集合点及插头端接的 MPTL；设备线和跳线；有源设备、网络配置、PoE 负载测试和运行。另行采购的路径或承载件施工服务属于上游接口，不能隐含计入本安装清单。需要化学牵引助剂、钻孔或不同端接技术的作业，须先审查范围变更。 | `leviton-atlasx1-utp` |
| prepared_interface | 始于已验收的既有路径、承载件和已断开的通信接口，以及安装方负责物资的接收。记录实际接口责任人及就绪证据；就绪状态既不是产品交换，也不是避免施工的抵扣。 |  |
| supply_boundary | 使用包含部件制造及实际交付的上游数据包，并明确包装是否计入。即便上游已含包装制造，也须追踪入场包装的实体去向；仅对有证据的上游排除项另加负荷。模块自带理线件及成套紧固件仅计一次。 |  |
| same_category_input | 采购的已安装永久链路不是原始线缆。应声明既有状态、先前交付点及全部上游作业，不得递归地把同一次安装计为新首次安装输出。翻新或承接已在范围内的作业须另行审查范围。 |  |
| integration_and_rejects | install_certify 负责线缆敷设、线对端接、固定、标识、永久链路测试及签字交接。线序或性能测试失败属于节点内未验收状态；其原始问题、修理或更换及复测事件均须关联本节点。全部必需测试通过且缺陷闭合前，不得计为合格输出。 |  |
| resource_and_periods | 逐项识别自有剪切工具、剥线工具、测试仪、适配器和充电器，覆盖购置、使用或报告期、校准维护、更换及退役阶段。在资源数据包中列出全部受益作业、节点及期间，包含本数据集以外的作业。外包服务商负责其设备生命周期。即便收货和验收跨报告期，也保留原始资源及作业期间。排除后续联网、维护和运行电量。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| install_certify | 安装并测试永久链路 | required | 所有范围内首次安装 | 独立集成：线缆、两端数据模块组件及永久附件；负责实际手工干式敷设、端接、标识、未验收状态纠正及测试交接 | 一条同配置验收完整链路；实际正值 D |

### 过程：安装并测试永久链路 (`install_certify`)

条件卡按实际 SKU、状态及接收方形成零个、一个或多个独立交换。缺少记录不能证明零值。手工干式作业不假定钻孔、化学品、燃烧或直接排放；出现意外活动或排放时，完成前须明确审查范围及清单，不能静默遗漏。失败端接在 install_certify 内返工，仅能经记录的可用退料或实际废物退出。

#### 输入

##### 产品流

###### 供安装的四对六类非屏蔽实心铜导体线缆 (`copper_data_cable`)

使用实际线缆 SKU、导体结构及护套防火等级。追踪全部领用线缆数量、保留余量及剥除线端，保留匹配库存和上游交付边界。铜包铝、屏蔽线缆和工厂跳线属于不同身份。

范围证据需求：同一 SKU 的单位实体长度净质量、实际领用、实装、库存及废料长度和同配置链路长度；不得设定每条链路通用千克数。

- 选定流：供安装的四对六类非屏蔽实心铜导体线缆
- 流属性/单位：Mass / kg
- 数量规则：实际可归属供料线缆净质量 / D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`

###### 匹配的六类非屏蔽免打线工具数据模块组件 (`cat6_utp_jacks`)

分别记录两端实际兼容模块型号，随附理线件仅计一次。线对排列、准备及闭合按所交付型号说明执行。数据模块产品不是已安装测试链路。[leviton-atlasx1-utp]

范围证据需求：匹配型号组件质量、实际领用、更换及退回数量和成套部件证据；包装质量单独处理。

- 选定流：匹配的六类非屏蔽免打线工具数据模块组件
- 流属性/单位：Mass / kg
- 数量规则：实际可归属供料数据模块组件净质量 / D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`

###### 单独供应的扎带 (`permanent_accessories_tie`)

仅记录本项独立识别的“单独供应的扎带”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的扎带
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的扎带”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的线缆卡夹 (`permanent_accessories_clip`)

仅记录本项独立识别的“单独供应的线缆卡夹”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的线缆卡夹
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的线缆卡夹”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的永久链路标识件 (`permanent_accessories_identifier`)

仅记录本项独立识别的“单独供应的永久链路标识件”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的永久链路标识件
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的永久链路标识件”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 线缆或模块货运纸箱 (`incoming_packaging_carton`)

仅记录本项独立识别的“线缆或模块货运纸箱”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：线缆或模块货运纸箱
- 流属性/单位：Mass / kg
- 数量规则：按本项“线缆或模块货运纸箱”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 线缆或模块货运包装袋 (`incoming_packaging_bag`)

仅记录本项独立识别的“线缆或模块货运包装袋”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：线缆或模块货运包装袋
- 流属性/单位：Mass / kg
- 数量规则：按本项“线缆或模块货运包装袋”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有剥线工具资产当量 (`owned_tools_and_certifier_stripper`)

仅记录本项独立识别的“自有剥线工具资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：自有剥线工具资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确资源按原全寿命归属方法执行：a_rj = A_rj / sum_k(A_rk)，包括同一完整资源寿命包全部工单；交换量 = a_rj / D Item(s)，负担 = B_r * a_rj / D，仅乘一次。保留兼容实际驱动量、完整正分母和逐期所有权，不按每条链路采购一整件工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有剪线工具资产当量 (`owned_tools_and_certifier_cutter`)

仅记录本项独立识别的“自有剪线工具资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：自有剪线工具资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确资源按原全寿命归属方法执行：a_rj = A_rj / sum_k(A_rk)，包括同一完整资源寿命包全部工单；交换量 = a_rj / D Item(s)，负担 = B_r * a_rj / D，仅乘一次。保留兼容实际驱动量、完整正分母和逐期所有权，不按每条链路采购一整件工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有永久链路认证测试仪资产当量 (`owned_tools_and_certifier_certifier`)

仅记录本项独立识别的“自有永久链路认证测试仪资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：自有永久链路认证测试仪资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确资源按原全寿命归属方法执行：a_rj = A_rj / sum_k(A_rk)，包括同一完整资源寿命包全部工单；交换量 = a_rj / D Item(s)，负担 = B_r * a_rj / D，仅乘一次。保留兼容实际驱动量、完整正分母和逐期所有权，不按每条链路采购一整件工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有永久链路适配器资产当量 (`owned_tools_and_certifier_adapter`)

仅记录本项独立识别的“自有永久链路适配器资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：自有永久链路适配器资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确资源按原全寿命归属方法执行：a_rj = A_rj / sum_k(A_rk)，包括同一完整资源寿命包全部工单；交换量 = a_rj / D Item(s)，负担 = B_r * a_rj / D，仅乘一次。保留兼容实际驱动量、完整正分母和逐期所有权，不按每条链路采购一整件工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有可重复使用测试线资产当量 (`owned_tools_and_certifier_test_lead`)

仅记录本项独立识别的“自有可重复使用测试线资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：自有可重复使用测试线资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确资源按原全寿命归属方法执行：a_rj = A_rj / sum_k(A_rk)，包括同一完整资源寿命包全部工单；交换量 = a_rj / D Item(s)，负担 = B_r * a_rj / D，仅乘一次。保留兼容实际驱动量、完整正分母和逐期所有权，不按每条链路采购一整件工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有充电器资产当量 (`owned_tools_and_certifier_charger`)

仅记录本项独立识别的“自有充电器资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：自有充电器资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确资源按原全寿命归属方法执行：a_rj = A_rj / sum_k(A_rk)，包括同一完整资源寿命包全部工单；交换量 = a_rj / D Item(s)，负担 = B_r * a_rj / D，仅乘一次。保留兼容实际驱动量、完整正分母和逐期所有权，不按每条链路采购一整件工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际外部安装及测试用电 (`installation_electricity`)

条件项：交接前工具、测试仪充电及初测纠正测试的外部用电。按实际供应方、电压及供电技术展开身份，区分服务商已含电力。电池属于资产或部件，不是电量。

范围证据需求：作业及充电测试计量证据、完整共享分母及具体供电身份；Energy 支撑仍须验证。

- 选定流：实际外部安装及测试用电
- 流属性/单位：Energy / kWh
- 数量规则：实际可归属外部用电量 / D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy`

###### 独立完整的永久链路合同测试事件 (`contracted_support_test`)

仅记录本项独立识别的“独立完整的永久链路合同测试事件”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：独立完整的永久链路合同测试事件
- 流属性/单位：Number of items / Item(s)
- 数量规则：仅在本项实际服务确实提供具名、边界明确且原生参考为Item(s)的独立完整物理成果或服务事件时启用。独立清点实际已完成且接收的服务ID、配置与交付点，并核对服务方生命周期及已含资源；按原已验收产出正分母仅归一化一次，不将费用或劳动小时换成事件。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 独立完整的安装作业面使用合同事件 (`contracted_support_access`)

仅记录本项独立识别的“独立完整的安装作业面使用合同事件”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：独立完整的安装作业面使用合同事件
- 流属性/单位：Number of items / Item(s)
- 数量规则：仅在本项实际服务确实提供具名、边界明确且原生参考为Item(s)的独立完整物理成果或服务事件时启用。独立清点实际已完成且接收的服务ID、配置与交付点，并核对服务方生命周期及已含资源；按原已验收产出正分母仅归一化一次，不将费用或劳动小时换成事件。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 安装方交接时验收合格的室内六类非屏蔽双绞线永久链路 (`accepted_link`)

两端声明数据模块接口之间的完整已标识永久链路，具备合格六类永久链路测试证据、缺陷闭合及安装方签字交接。排除有源设备和设备线。一条链路只计一次，不按线对、模块或复测次数计数。

范围证据需求：该定义要求独立观测 D 和实际匹配配置及测试验收；不是假设成品率或数量先验。

- 选定流：安装方交接时验收合格的室内六类非屏蔽双绞线永久链路
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`

##### 废物流

###### 废绝缘导体剪余料 (`installation_waste_insulated_conductor_offcut`)

仅记录本项独立识别的“废绝缘导体剪余料”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：废绝缘导体剪余料
- 流属性/单位：Mass / kg
- 数量规则：按本项“废绝缘导体剪余料”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独废弃的护套剪余料 (`installation_waste_separated_jacket_offcut`)

仅记录本项独立识别的“单独废弃的护套剪余料”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独废弃的护套剪余料
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独废弃的护套剪余料”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独废弃的线缆填充物剪余料 (`installation_waste_separated_filler_offcut`)

仅记录本项独立识别的“单独废弃的线缆填充物剪余料”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独废弃的线缆填充物剪余料
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独废弃的线缆填充物剪余料”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | 来源 |
| --- | --- | --- |
| failed_work | 失败测试、废弃线端及纠正作业耗用均留在原始链路作业中；不得转移给假设合格链路，不给出避免生产抵扣，也不把退料视为预定联产品。回收或废物处理从声明的实际接收方开始，禁止重复计入。 |  |
| resource_share | 对每项资源 r，使用有记录的因果物理活动 A_rj，并在同一资源生命周期数据包的全部受益作业 k 上计算 a_rj = A_rj / sum_k(A_rk)。采用同一有依据的活动基准且总量大于零；完整数据包中的份额之和应为 1。归属生命周期负荷 B_r * a_rj / D，以及该实际自有资产的 a_rj / D Item(s)。缺少寿命、剩余使用或其他消费者记录属于证据缺口，不能填入默认寿命或按链路数平均分摊。 |  |
| period_closure | 分别索引原始制造或购置、各使用期、校准修理、更换及退役。所有输入、输出、资产和缺陷事件均关联作业及期间。记录各期归属决定，数据包总量仅核对一次；更换事件不意味着每条链路自动新增整台测试仪。 |  |
| purchased_service | 按合同参考单位及包含项记录实际采购的测试、登高或辅助服务事件。另加前景消耗前，先核对服务商自有资产及已含燃料、交付和电力。外包测试事件与内部实施的同一次测试不能同时承担同一份负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色（`flow_role`） | 记录类型（`record_type`） | 原始字段（`raw_fields`） | 采集方法（`collection_method`） | 单位（`unit`） | 频率（`frequency`） | 时间覆盖（`temporal_coverage`） | 场址范围（`site_scope`） | 汇总规则（`aggregation_rule`） | 质量证据（`quality_evidence`） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_certify | 合格链路及测试证据 | 安装验收记录 | job/link/end-port IDs; configuration and physical cable length; actual D; standard edition/limits; NVP; certifier/adapter serial/calibration; original pass/fail files; repairs/retests; acceptance date/signature; 作业、链路和两端端口编号；配置及实体线缆长度；实际 D；标准版次及限值；NVP；测试仪和适配器序列号及校准；原始通过或失败文件；修复及复测；验收日期及签字 | 从签字记录独立计数完整验收的唯一链路；逐条核对原始永久链路测试文件、选定限值及完整缺陷闭合。简单通断检查或完整通道测试不能代替选定的验收测试。 | Item(s) | 每条链路及每次初测或纠正测试 | 收货至签字验收，保留原始报告日期 | 声明的室内作业及已披露的同配置组 | 每参考流 | 签字竣工及端口图、包含失败尝试的完整原生结果、选定测试设置和校准证据；汇总口径：独立验收数量 D；每参考流 |
| cp_materials | install_certify | 物资接收及安装输入 | SKU 保管及计量记录 | shipment/job/SKU; manufacturer/model/material; net mass; delivered and used lengths/counts; exact-SKU conversion; installed slack; opening/closing stock; bundled parts; upstream delivery/packaging inclusion; 批次、作业和 SKU；厂家、型号及材料；净质量；收货及使用长度或件数；同一 SKU 换算；保留余量；期初期末库存；成套部件；上游交付及包装包含项; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 按匹配 SKU 分别称量，或使用同一 SKU 可追溯的单位长度或件数净质量证据。核对实际线缆盘和两端端接材料的实装长度、保留线端、废物及库存；不得以电气测试长度代替实测耗用量。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg | 每次收货、领料及库存事件 | 收货至验收作业可归属的全部材料 | 实际安装作业及供货记录 | 每参考流 | 校准秤或匹配换算证据；供应商包含项清单；事件级库存闭合；汇总口径：实际可归属供料净质量；每参考流 |
| cp_energy | install_certify | 外部用电 | 电表及充电记录 | meter start/end kWh; date; provider/voltage; exact charger/tester; activities for all shared users; embedded service energy; corrections/retests; 电表起止 kWh；日期；供应方和电压；具体充电器及测试仪；全部共享用户活动；服务已含能源；修正及复测 | 在声明的外部供电边界计量可归属电量，包含为本作业充电。核对共享消费者活动及服务包含项；缺少计量属于缺口，不等于零或电池容量。 | kWh | 每个相关充电或测试区间 | 实际验收前区间，保留原始日期 | 声明作业及全部共享消费者 | 每参考流 | 电表轨迹及校准，以及完整共享分配和包含项台账；汇总口径：实际可归属外部用电；每参考流 |
| cp_resources | install_certify | 自有资源及外包辅助服务 | 资源生命周期及合同事件台账 | asset/model/serial/owner; acquisition/use/maintenance/replacement/retirement dates; complete lifecycle packet B_r; every consuming job/node/period; physical activity A_rj; future-use gap; contract event/reference/inclusions; 资产、型号、序列号及所有者；购置、使用、维护、更换及退役日期；完整生命周期数据包 B_r；全部消费者作业、节点及期间；物理活动 A_rj；未来使用缺口；合同事件、参考单位及包含项; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 将实际重复使用工具、测试仪、适配器及充电器关联全部实际消费者和生命周期期间。分别记录因果活动及实际采购的完整服务事件，核对服务商资产责任及能源包含项。不得假设寿命。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | Item(s) | 每个资源期间及合同事件 | 完整资源数据包及原始作业期间，披露未知剩余使用 | 全部消费者作业或节点，包含报告场址以外的消费者 | 每参考流 | 所有权、序列号、活动及包含项记录；完整消费者、期间及份额闭合，明确缺口；汇总口径：可归属的具体资产份额或真实完整服务事件；每参考流 |
| cp_releases | install_certify | 可用退料及废物 | 流出及接收凭证 | original job/issue/defect ID; material/SKU; actual mass and state; reusable versus waste classification; receiver and date; authorised treatment boundary; retained/captured/emitted distinction; closure residual; 原始作业、领料及缺陷编号；材料和 SKU；实际质量及状态；可用退料与废物分类；接收方及日期；许可处理边界；保留、收集及排放区别；闭合残差; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 逐项称量未改变用途的可用退料，另按实际材料、状态及接收方分别称量废物流。将被拒收端接件及线缆端料关联节点内原始纠正事件。调查质量残差，不得将其命名为空气排放或填零。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg | 每次退料、拒收及处置事件 | 交接前全部原始安装及纠正流出事件 | 声明作业及各实际接收方 | 每参考流 | 可追溯的原始领料及缺陷关联、称量、保管和接收证据；汇总口径：实际可归属可用退料或废物净质量；每参考流 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | 来源 |
| --- | --- | --- | --- | --- | --- |
| normalize_job | all inventory rows | q_i = attributable collected numerator_i / D；D 为 cp_acceptance 独立采集的同配置链路验收数量。各分子均独立计量，并包含失败作业。 | numerator_i; D; cp_acceptance | q_i |  |
| owned_resource_share | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | a_rj = A_rj / sum_k(A_rk)；求和覆盖同一完整资源生命周期数据包的全部作业 k。归属资产 = a_rj / D Item(s)；负荷 = B_r * a_rj / D。保留各期责任归属决定。 | A_rj; A_rk; B_r; D; cp_resources | attributed asset quantity and lifecycle burden |  |
| material_closure | copper_data_cable, cat6_utp_jacks, `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier`, `incoming_packaging_carton`; `incoming_packaging_bag`, `refine_usable_material_returns`要求细化的实际交换, `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | 期初库存 + 收货 = 实装保留材料 + 期末库存 + 可用退料 + 实际废物 + 已识别排放 + 未解释残差，按匹配材料或 SKU 及作业核对。分别报告实测容差及未解决残差；不同材料质量合计仅用于诊断。 | cp_materials; cp_releases | SKU custody closure and residual |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| range_copper_data_cable | copper_data_cable | 范围证据需求：同一 SKU 的单位实体长度净质量、实际领用、实装、库存及废料长度和同配置链路长度；不得设定每条链路通用千克数。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_cat6_utp_jacks | cat6_utp_jacks | 范围证据需求：匹配型号组件质量、实际领用、更换及退回数量和成套部件证据；包装质量单独处理。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_permanent_accessories | `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier` | 范围证据需求：实际保留的 SKU 清单、供料退料废料件数及匹配净质量。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_incoming_packaging | `incoming_packaging_carton`; `incoming_packaging_bag` | 范围证据需求：匹配批次材料质量、回用保管记录及上游包含项证据。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_owned_tools_and_certifier | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | 范围证据需求：完整资源生命周期数据包、全部作业及期间的因果使用、更换和剩余使用证据；不得采用通用寿命。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_installation_electricity | installation_electricity | 范围证据需求：作业及充电测试计量证据、完整共享分母及具体供电身份；Energy 支撑仍须验证。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_contracted_support | `contracted_support_test`; `contracted_support_access` | 范围证据需求：原始合同事件参考单位、范围包含项、数量及共享活动；小时租赁需要 Duration 支撑。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_usable_material_returns | `refine_usable_material_returns`要求细化的实际交换 | 范围证据需求：匹配退料凭证、原始领料库存关联、可用性状态及净质量。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_installation_waste | `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | 范围证据需求：原始剪切、缺陷及包装事件、材料状态区分、实际凭证净质量和处理边界。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| range_accepted_link | accepted_link | 范围证据需求：该定义要求独立观测 D 和实际匹配配置及测试验收；不是假设成品率或数量先验。 | 实际匹配配置及计量记录；缺失明确保留为缺口，不设默认数量 |
| configuration_group | all inventory rows | 保持作业、场址、时间、实体长度、线缆模块配置及验收范围一致；对实质不同组，若无实际等效证据则拆分 | 竣工图、匹配 BOM、原始测试及全部分子和 D 原始记录 |
| support_chain | all inventory rows | 将 Energy 和实际按小时 Duration 缺口与已验证 Mass/kg、计数/Item(s) 区分，禁止使用近似 UUID | 具体详情及精确属性单位参考链 |
| `refine_permanent_accessories` | `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件项：本链路实际保留的每种扎带、卡扣、标识及另行供给兼容紧固件，按 SKU 及材料分别展开。排除既有承载件。不得重复模块成套部件，也不得假设固定附件数。 范围证据需求：实际保留的 SKU 清单、供料退料废料件数及匹配净质量。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_incoming_packaging` | `incoming_packaging_carton`; `incoming_packaging_bag` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件项：各实际线盘、纸箱、袋或保护材料。记录保管去向及制造交付是否已含于上游供料包。可回用线盘记录完整实际接收及退回实体质量；负荷份额由单独匹配的上游资源生命周期数据包给出。不得用该份额缩减实体保管质量，也不得每次作业都计全新线盘。 范围证据需求：匹配批次材料质量、回用保管记录及上游包含项证据。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_owned_tools_and_certifier` | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件项：每项实际自有剥线或剪切工具、测试仪、永久链路适配器、重复使用测试引线或充电器。展开具体资产型号、序列号及全部消费者期间。制造维护归属来自完整资源数据包；不得将可回用测试引线视为实装永久部件。 范围证据需求：完整资源生命周期数据包、全部作业及期间的因果使用、更换和剩余使用证据；不得采用通用寿命。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_resources`; 实际独立记录及身份／单位证据 |
| `refine_contracted_support` | `contracted_support_test`; `contracted_support_access` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件项：每次真实采购的完整测试、登高或其他辅助服务事件，披露合同配置及参考单位。服务商负责其设备生命周期；核对已含交付能源，避免重复内部测试资源。小时数不是事件数。 范围证据需求：原始合同事件参考单位、范围包含项、数量及共享活动；小时租赁需要 Duration 支撑。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_resources`; 实际独立记录及身份／单位证据 |
| `refine_usable_material_returns` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件项：每种实际退回的可用未用线缆、部件或可回用线盘及包装，保留原 SKU 身份、状态及接收方。先核对未用库存；不自动给予避免生产抵扣。不可用失败材料属于废物，不属于本产品输出。 范围证据需求：匹配退料凭证、原始领料库存关联、可用性状态及净质量。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_releases`; 实际独立记录及身份／单位证据 |
| `refine_installation_waste` | `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件项：分别展开实际剪除绝缘导体、护套及填充物边角料、拒收部件、废包装及其他废物。区分复合线缆与已分离铜或聚合物，并记录实际危险状态及许可接收方。不得假定回收，也不得把实测闭合残差称为空气粉尘。 范围证据需求：原始剪切、缺陷及包装事件、材料状态区分、实际凭证净质量和处理边界。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_releases`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母均须保留原验收配置分层、状态交付点及因果归属；不得把不等价线路、路线、产品或工单按等价数量盲目相除。 | 实际身份、单位、保管及独立数量证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |

## 9. 校验规则

| rule_id | applies_to | 规则 | 来源 |
| --- | --- | --- | --- |
| link_gate | foreground_dataset_conformance | 要求每条实际验收链路具备声明的端点及配置、可进入的既有路径和承载件、匹配的线缆及模块和原始永久链路测试结果。记录选定标准版次、限值组、传播速度设置、适配器及测试仪校准。保留失败和复测；完整通道测试或仅通断检查不能确立此交付点。 | fluke-permanent-link-testing |
| reference_integrity | foreground_dataset_conformance | 最终输出、参考名称及 accepted_link 关联必须表示同一完整服务和 Number of items / Item(s) 基准。D 应独立观测；未完成或未验收链路不进入 D。对实体长度或配置有实质差异的链路，须有明确等效证据才能分组，否则拆分；不得仅凭计数相同认定全部链路等效。 |  |
| custody_and_sources | foreground_dataset_conformance | 将条件卡展开为各实际 SKU、材料、状态和接收方交换，并各自验证具体身份和净数量。核查供应商交付及包装包含项、库存、退料、废物及更换事件。零值须有明确无活动证据；未解释残差属于缺口。端接技术来源不能证明资源寿命、排放因子或废物范围。 |  |
| resource_closure | foreground_dataset_conformance | 核对每项自有资源、外包服务商、消费者作业或节点、报告或使用期及更换退役事件。要求因果活动总量大于零、份额完整且资产或能源不重复。未知未来使用或未决 Duration、Energy 支撑会阻止最终交换绑定。 |  |
| identity_and_range | foreground_dataset_conformance | 下游创建交换前，验证选定具体流详情及流属性至单位组参考链。保留材料及护套、交付状态、方向和去向；不得只按名称匹配或用净热值替代。范围证据必须匹配实际配置及归一化分母。检查通过仅验证声明关系，不代表实体数值、UUID 已解析或具备发布条件。 |  |
| `atomization_permanent_accessories_complete` | `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_permanent_accessories`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_incoming_packaging_complete` | `incoming_packaging_carton`; `incoming_packaging_bag` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_incoming_packaging`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_owned_tools_and_certifier_complete` | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_owned_tools_and_certifier`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_contracted_support_complete` | `contracted_support_test`; `contracted_support_access` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_contracted_support`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_usable_material_returns_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_usable_material_returns`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_installation_waste_complete` | `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_installation_waste`；必要细化尚未解决时阻断数据集。 |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景安装数据包 |
| downstream_use | process 及 lifecyclemodel 投影；仅在边界兼容时用于 secondary_dataset 或 background_dataset |
| allowed_use | 同一已披露室内固定四对六类非屏蔽实心铜导体、两端免打线工具数据模块永久链路安装，且实体长度配置和验收交付点兼容 |
| excluded_use | 排除新建桥架、导管、穿孔、机架、配线面板或插座承载件及建筑施工；既有链路拆除；屏蔽、光纤、同轴、室外或跨建筑路线；接头、集合点及插头端接的 MPTL；设备线和跳线；有源设备、网络配置、PoE 负载测试和运行。另行采购的路径或承载件施工服务属于上游接口，不能隐含计入本安装清单。需要化学牵引助剂、钻孔或不同端接技术的作业，须先审查范围变更。 |
| required_metadata | 链路编号及两端端口；实际线缆厂家和型号、四对实心铜导体结构、护套及防火等级、含保留余量的实装实体长度；数据模块型号和线对接法；承载件及路径的就绪状态和责任人；安装日期；测试标准及版次、永久链路限值组、线缆传播速度设置、测试仪和适配器标识及校准信息；完整原始结果、修复、复测和签字验收记录。 |
| required_quality_disclosure | 实际分子及 D 记录；全部方法来源及匹配 SKU 换算证据；完整自有或服务商资源及期间数据包；供料包含项及保管闭合；身份支撑、数量范围及剩余寿命缺口 |
| update_trigger | 线缆或模块配置、路径接口责任、端接或测试限值组、合同服务责任变化，或出现更强数量资源及身份凭据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-54619 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 说明 PDF 第293至294页：通信布线包含项及邻近排除项；仅用于分类语境 |
| leviton-atlasx1-utp | handbook | https://leviton.com/content/dam/leviton/network-solutions/product_documents/instruction_sheet/Leviton_IST_5EUJK_61UJK_6AUJK_AtlasX1_UTP_Jacks.pdf | PK-A3036-10-02-0D，PDF 第1至2页：示例匹配非屏蔽模块、随附理线件、手工具端接及承载接口；不支持数量或资产寿命 |
| fluke-permanent-link-testing | handbook | https://www.flukenetworks.com/blog/cabling-chronicles/top-10-cable-testing-mistakes | 2025年6月5日，第1、2、4、6节：选定测试设置及原始结果、永久链路与完整通道交付区别；不支持通用实装材料或电量 |
