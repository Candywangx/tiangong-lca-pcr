---
pcr_id: pcr.constructions-and-construction-services.construction-services.dry-laid-neoprene-equipment-isolation-pad-installation-services
language: zh-CN
translation_status: aligned
status: candidate
sync_with: pcr.en-US.md
---

# 干铺氯丁橡胶设备隔振垫安装服务

## 1. 范围与适用性

本 PCR 适用于单独承包的首次隔振垫安装：在既有且已验收的支承面上，为一台室内设备干铺单层、非粘结式模块化氯丁橡胶隔振垫。实际设备及垫材供应商须允许在所申报位置采用不锚固的干铺方案。设备已到安装位置，停机并完成隔离，且具备吊升位置和载荷资料。安装方核查支承点及批准的垫材布置，需要时沿完整模块手工切分，就地抬升设备、铺垫、落位，检查加载状态，纠正缺陷并交付已验收的隔振安装。

不包括设备制造或整体安装、远距离就位、地坪或基础施工、锚固及抗震约束、胶粘或灌浆、多层叠垫或添加垫片、弹簧隔振器、墙顶面吸声饰面、旧垫拆除、动力切割、化学清洗、运行性能测试及后续运行。如必须实施这些活动，仅用本类别不足以描述全部工作，不得从更大系统中漏计。交付关口证明安装符合要求，不代表某个振动衰减数值，也不是设备运行调试验收。Mason SW 资料用于说明模块化氯丁橡胶垫及部分免螺栓应用，不能作为普遍免锚固设计依据（`mason-super-w-2014`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.dry-laid-neoprene-equipment-isolation-pad-installation-services |
| classification_refs | cpc:3.0:54651 — 隔声或隔振服务；narrower |
| covered_products | 在所申报室内设备下首次干铺单层模块化氯丁橡胶垫，包括就地抬升、加载检查、纠正及仅隔振安装的签字交接 |
| excluded_products | 整机安装；基础；约束件；粘结、加垫片或多层系统；弹簧隔振器；墙面吸声饰面；更换；设备运行 |
| representative_product | 一台设备已验收的干铺氯丁橡胶隔振安装 |
| production_route | 批准实际支承载荷布置 → 接收垫材和设备接口 → 手工切分完整模块 → 就地抬升及干铺 → 落位、检查和纠正 → 签字交付 |
| market_state | 在客户设备上完成的隔振安装服务，处于设备调试前 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台设备已验收的干铺氯丁橡胶隔振安装 |
| How much | 1 Item(s)，对应一种已申报设备配置的完整已验收安装 |
| How well | 实际供应商批准的垫材牌号、模块布置及各支承点载荷；承压面完整接触、稳定且水平、无非预期刚性短路；安装检查已签字 |
| How long or cycle | 一份包含纠正和最终验收的安装工单；资产负担可跨报告期；不指定设备运行寿命 |
| reference_flow_link | `accepted_isolation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的干铺氯丁橡胶设备隔振安装 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 场址和工单；设备编号、支承质量及载荷分布；设计采用的最低激振频率；实际供应商对免锚固应用的设计批准；氯丁橡胶牌号、硬度、厚度、模块尺寸和布置；各支承点设计载荷；安装说明版本；抬升方法；加载检查标准及实际结果；起始条件排除项；验收日期；资源和废物所有权 |

仅合并设备、载荷、布置及交付关口具有等效性的安装。实质不同的配置应分开；按次数计量不证明声学性能相同。实际签字验收数量 D 必须为正，拒收工单不得计入 D。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需属性（`required_property`） | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_isolation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | D 为 cp_gate 独立记录的同配置完整已验收安装数量。按完整安装计数，不按单块垫或支承点计数。 |
| mass_records | neoprene_pads; `refine_packaging`要求细化的实际交换; `usable_returns_pad_module`; `usable_returns_usable_offcut`; `installation_waste_neoprene` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实际牌号和交接状态称量材料。件数换算质量须有实际 SKU 及核实的单件净质量；额定支承载荷、运输毛重及垫材平面面积均不是垫材净质量。 |
| interface_count | equipment_interface | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按实际设备交接记录一次，包括未成功工单；不得将投入台数固定为最终参考量，也不得再次计入客户设备采购。 |
| service_units | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access`; installation_electricity | 实际核实的计数、服务或能量属性 | Item(s); 实际服务单位; kWh | 计量能量与额定功率分开。服务包仅在范围和数量有定义时可计数；按小时租用须保留时间单位及核实的支持链。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 客户设备已在准备好的位置停机隔离；既有支承面已验收，载荷和垫材布置已批准，抬升方案获准，免锚固干铺许可已核实 |
| starting_condition_role | 客户设备及既有基面属于物理接口；供应的隔振垫作为新耗材进入 |
| product_classification_scope | 仅隔振安装，是 CPC 54651 的较窄子集；不包括整机安装和吸声饰面服务 |
| recursive_input_rule | 采购的隔振分包要么按有据服务包计入，要么按前景活动拆分，不能两者并计；不得递归加入同一完整隔振服务 |
| upstream_dataset_requirement | 为实际消耗的垫材、包装、电力、自有资源份额和外包服务配置交付关口匹配的供应链数据；不再次计入客户设备或既有建筑制造 |
| disclosure | 说明设备、抬升工具、运输、包装、拒收物及外部处理各自责任方；排除的工作确有需要时与更大项目衔接；不声称覆盖整机或建筑全生命周期 |

### 边界规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本 PCR 适用于单独承包的首次隔振垫安装：在既有且已验收的支承面上，为一台室内设备干铺单层、非粘结式模块化氯丁橡胶隔振垫。实际设备及垫材供应商须允许在所申报位置采用不锚固的干铺方案。设备已到安装位置，停机并完成隔离，且具备吊升位置和载荷资料。安装方核查支承点及批准的垫材布置，需要时沿完整模块手工切分，就地抬升设备、铺垫、落位，检查加载状态，纠正缺陷并交付已验收的隔振安装。 不包括设备制造或整体安装、远距离就位、地坪或基础施工、锚固及抗震约束、胶粘或灌浆、多层叠垫或添加垫片、弹簧隔振器、墙顶面吸声饰面、旧垫拆除、动力切割、化学清洗、运行性能测试及后续运行。如必须实施这些活动，仅用本类别不足以描述全部工作，不得从更大系统中漏计。交付关口证明安装符合要求，不代表某个振动衰减数值，也不是设备运行调试验收。Mason SW 资料用于说明模块化氯丁橡胶垫及部分免螺栓应用，不能作为普遍免锚固设计依据（`mason-super-w-2014`）。 | `mason-super-w-2014` |
| installation_gate | place_inspect | 两个物理构件角色是客户设备接口和供应的隔振垫，既有地面为申报的基面接口。仅为铺垫而就地抬升属于本服务；加载检查完成后，将所有支承点作为一项完整安装验收。 |  |
| route_eligibility | neoprene_pads; accepted_isolation | 采用单层氯丁橡胶完整模块及实际批准布置。厂家资料支持该产品族及部分免螺栓应用，不支持所有位置；要求锚固或叠层时超出本范围。 | mason-super-w-2014 |
| design_inputs | accepted_isolation | 保留各支承点实际载荷、垫材数量和布置、激振频率及设计证据。不得仅以总重除以垫数就假设均匀分载，实际产品设计批准控制施工。 | karman-isolator-selection |
| event_ownership | all cards | 记录整个工单的接收、就地抬升、切分、纠正、检查、清理和出界事件。有实际电池充电和外部支持时计入。化学品或动力作业应作为范围变化核查，不能假设排放为零。 |  |
| time_boundary | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | 可重复使用设备的采购、维护、更换和报废分别建立期间索引，与工单活动和验收日期区分；计入负担及转移须归属于实际报告期。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| place_inspect | 干铺及加载检查 | required | 获准采用免锚固单层氯丁橡胶布置的首次安装 | 将垫材与客户设备集成，检查并保留所有纠正负担，仅放行已验收隔振安装 | accepted_isolation |

一个节点负责就地抬升、手工切分、铺设和检查。垫材牌号错误、模块损伤、支承不稳、未经批准的载荷分布或刚性短路均为不合格状态。在 place_inspect 内纠正并重新检查，或按实际材料去向归入 `usable_returns_pad_module`; `usable_returns_usable_offcut` 或 `installation_waste_neoprene`。未解决的拒收项不得产生已验收参考输出。

### 过程：干铺及加载检查 (`place_inspect`)

#### 输入

##### 产品流

###### 铺垫接口处的客户设备 (`equipment_interface`)

记录实际接收以进行就地铺垫的客户自有设备及交接时的归还。该流是接口及保管责任交换；对于本单独声明的服务，上游制造在范围外，不是再次采购设备。

- 选定流：铺垫接口处的客户设备
- 流属性/单位：Number of items / Item(s)
- 数量规则：进入工单的实际设备台数，包括未验收工单，除以 D
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gate`

范围证据需求：保留实际设备编号、接收记录及最终状态。通用的每次已验收输出对应一台投入比例会隐藏未成功工作。

###### 现场供应的模块化氯丁橡胶隔振垫 (`neoprene_pads`)

用于单层受压铺设的实际氯丁橡胶牌号及模块几何。计入工单领用总量、手工切分损失和替换件。单列未使用退回物和废物，避免重复扣减接收量。

- 选定流：现场供应的模块化氯丁橡胶隔振垫
- 流属性/单位：Mass / kg
- 数量规则：按库存核对得到的实际领用垫材质量，除以 D
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`mason-super-w-2014`

范围证据需求：各支承点设计及实际 SKU 净质量决定耗量；供应商以 kg 表示的载荷指所支承设备，而非垫材质量。尚未确立通用的每次安装 kg 区间。

###### 完整自有抬升千斤顶资产当量 (`owned_resources_jack`)

仅记录本项独立识别的“完整自有抬升千斤顶资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`resource_share`；保留下列原方法明确公式。

- 选定流：完整自有抬升千斤顶资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确全寿命资源包，归属份额s_j = u_j / sum(u_all)；交换量 = s_j / D Item(s)。保留完整全部使用者正分母、期间所有权和无重叠维护替换及退役，不按每次安装采购整件工具。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整自有吊索资产当量 (`owned_resources_sling`)

仅记录本项独立识别的“完整自有吊索资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`resource_share`；保留下列原方法明确公式。

- 选定流：完整自有吊索资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确全寿命资源包，归属份额s_j = u_j / sum(u_all)；交换量 = s_j / D Item(s)。保留完整全部使用者正分母、期间所有权和无重叠维护替换及退役，不按每次安装采购整件工具。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整自有手工切刀资产当量 (`owned_resources_hand_cutter`)

仅记录本项独立识别的“完整自有手工切刀资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`resource_share`；保留下列原方法明确公式。

- 选定流：完整自有手工切刀资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确全寿命资源包，归属份额s_j = u_j / sum(u_all)；交换量 = s_j / D Item(s)。保留完整全部使用者正分母、期间所有权和无重叠维护替换及退役，不按每次安装采购整件工具。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整自有检验量具资产当量 (`owned_resources_gauge`)

仅记录本项独立识别的“完整自有检验量具资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`resource_share`；保留下列原方法明确公式。

- 选定流：完整自有检验量具资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：对本项准确全寿命资源包，归属份额s_j = u_j / sum(u_all)；交换量 = s_j / D Item(s)。保留完整全部使用者正分母、期间所有权和无重叠维护替换及退役，不按每次安装采购整件工具。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整且合同定义的就地支持服务包 (`contracted_services`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。仅当供应方实际定义完整计数服务包时启用。此 Item(s) 卡绝不表示小时租赁或货运周转量。实际范围及覆盖负担只计一次。

- 选定流：完整且合同定义的就地支持服务包
- 流属性/单位：Number of items / Item(s)
- 数量规则：归属于工单且范围已定义的实际服务商服务包，除以 D
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：实际合同范围、运输趟次或租赁记录及上游包含项；无通用次数、小时数或距离。


###### 实际完整按小时提供的就地搬运服务 (`local_support_hourly_service_handling`)

仅记录本项独立识别的“实际完整按小时提供的就地搬运服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际完整按小时提供的就地搬运服务
- 流属性/单位：Duration / h
- 数量规则：仅在实际完整单一职能服务的服务方原生参考确为h且其资产生命周期和已含运行投入边界匹配时启用。按实际服务方、配置、期间及所有使用者独立记录起止和服务小时，避免重复已含投入，按原已验收产出正分母仅归一化一次；不得将费用、事件数或其他参考强转小时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际完整按小时提供的就地通行服务 (`local_support_hourly_service_access`)

仅记录本项独立识别的“实际完整按小时提供的就地通行服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际完整按小时提供的就地通行服务
- 流属性/单位：Duration / h
- 数量规则：仅在实际完整单一职能服务的服务方原生参考确为h且其资产生命周期和已含运行投入边界匹配时启用。按实际服务方、配置、期间及所有使用者独立记录起止和服务小时，避免重复已含投入，按原已验收产出正分母仅归一化一次；不得将费用、事件数或其他参考强转小时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 安装仪器或充电用电 (`installation_electricity`)

仅在规定安装工作实际用电时启用。手工切垫和铺设不代表仪器充电为零。共享充电按实测使用量分配，不重复计入服务商服务已含用电。设备运行能耗在交付关口外。

- 选定流：安装仪器或充电用电
- 流属性/单位：Energy / kWh
- 数量规则：包含充电损失的实际可归属计量用电，除以 D
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：电表或充电会话记录及分配依据；不得从设备电机额定值、电池铭牌或运行功率推定。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的干铺氯丁橡胶设备隔振安装 (`accepted_isolation`)

在所申报设备下完成一项完整安装，按实际验收标准检查牌号和布置、载荷适配、接触、水平稳定性及刚性短路。保留签字记录及全部返工。静态验收不构成运行衰减性能声明。

- 选定流：已验收的干铺氯丁橡胶设备隔振安装
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gate`

参考量是归一化定义，不是经验产率范围。独立记录 D 及拒收工单数量。

###### 退回的可用未安装原状氯丁橡胶垫模块 (`usable_returns_pad_module`)

仅记录本项独立识别的“退回的可用未安装原状氯丁橡胶垫模块”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：退回的可用未安装原状氯丁橡胶垫模块
- 流属性/单位：Mass / kg
- 数量规则：按本项“退回的可用未安装原状氯丁橡胶垫模块”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 向外接收为可用产品的氯丁橡胶垫切余 (`usable_returns_usable_offcut`)

仅记录本项独立识别的“向外接收为可用产品的氯丁橡胶垫切余”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：向外接收为可用产品的氯丁橡胶垫切余
- 流属性/单位：Mass / kg
- 数量规则：按本项“向外接收为可用产品的氯丁橡胶垫切余”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 废物流

###### 收集的不可用氯丁橡胶垫废物 (`installation_waste_neoprene`)

仅记录本项独立识别的“收集的不可用氯丁橡胶垫废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：收集的不可用氯丁橡胶垫废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“收集的不可用氯丁橡胶垫废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| retain_rework | place_inspect | 所有重复抬升、切分、更换及检查均保留在原工单。未验收设备不增加 D。若 D 为零，保留失败工单清单而不作除法；凭证据将其负担衔接到后续服务，或单独报告。 |  |
| materials_and_returns | neoprene_pads; `refine_packaging`要求细化的实际交换; `usable_returns_pad_module`; `usable_returns_usable_offcut`; `installation_waste_neoprene` | 按材料和所有权跟踪库存及出界。仅在上游清单同步调整时，净采购可剔除真实退回的未用物资；不能先从投入质量扣减，再作为避免生产重复抵扣。本 PCR 不给出替代信用。真正出售的联产品需要另行审查分配决定。 |  |
| shared_life | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | 对每个实际资源包列出所有消费节点、工单和期间、维护、更换及报废事件，以及实测因果使用量。按 s_j = u_j / sum(u_all) 分配；全部受益方份额之和为 1。不得每期重复计入完整采购，也不得将本工单小时作为全寿命分母。寿命活动缺失属于须披露的阻碍，不能用默认值代替。 |  |
| service_ownership | contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access`; installation_electricity | 区分服务商自有资源与自有资源包；打包服务及其内含能量和资产，是同一负担的互斥表示。周转包装物理交接量不能随上游负担份额缩放。 |  |


## 8. 前景数据采集、计算与质量规则


仅对真实完整计数服务包使用 Item(s)，仅对实际匹配的小时服务使用 h；同一事件只能采用一种表示。实际货运与废物处理服务保留各自核实的物理参考单位及独立具体服务交换，绝不把小时、距离或质量换成虚构计数事件。继续要求核对共享/供应方覆盖及全部用户归属。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | place_inspect | equipment_interface; accepted_isolation | 交接和验收记录 | work_id; machine_id; configuration; loading_schedule; pad_layout; eligibility_approval; inspection_criteria; observations; correction_id; receipt_count; accepted_count; D; date | 将每台接收设备与签字安装验收或拒收状态核对；在实际静载下检查每个支承点。 | Item(s) | 每次接收、纠正和验收 | 完整工单直至签字交付 | 实际场址和配置 | 每参考流 | D 为正且独立计数；原始文件和检查人身份；原始接收台数除以 D；未验收工作不进入 D |
| cp_materials | place_inspect | neoprene_pads; `refine_packaging`要求细化的实际交换 | 库存和质量记录 | SKU; grade; dimensions; opening_stock; receipts; closing_stock; drawn_mass; packaging_material; scale_id; tare; return_ticket; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 用称量接收量和未用库存核对工单领料；将垫材净质量与包装及所支承机器重量分开。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg | 每次接收、领用和结存 | 完整工单包括纠正 | 实际现场仓库和安装节点 | 每参考流 | 分材料库存平衡及秤核查；总领用量包含后续退回和废物；各 drawn_mass 除以 D |
| cp_resources | place_inspect | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | 资源和供应商记录 | asset_id; owner; whole_life_packet; acquisition; maintenance; replacement; retirement; all_consumers; period; u_j; u_all; provider; service_scope; actual_unit; activity; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 核对实际设备使用记录和合同；选择服务包或拆分服务表示；核实全寿命分母及期间分配。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | 每个已定义资源包 Item(s)；保留原服务单位; Item(s); h | 每次资产或服务事件 | 工单及有据的资源全寿命 | 所有共享消费场址、工单及目标节点 | 每参考流 | 全寿命资源包证据，份额之和为 1；资源包份额或实际服务量除以 D；未知报废或寿命证据保留为待解决项 |
| cp_energy | place_inspect | installation_electricity | 电表或充电记录 | meter_id; start; end; session; owner; charging_losses; attribution_basis; allocated_kWh | 读取安装专用表，或按实测会话使用量分配共享充电；排除另行计入的服务商用电。 | kWh | 每次使用或充电会话 | 因果归属于工单的会话 | 现场供电或有据的场外充电 | 每参考流 | 校准读数及会话责任；将包含损失的 allocated_kWh 相加后除以 D；无使用须有明确记录，不能假设为零 |
| cp_exits | place_inspect | `usable_returns_pad_module`; `usable_returns_usable_offcut`; `installation_waste_neoprene` | 交接及接收记录 | material; condition; quantity; tare; ticket; owner; destination; receiver; treatment_scope; correction_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 放行时分别称量核对可用退回物和废物，与实际接收方及原工单材料关联。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg | 每次出界 | 工单及有联系的后续出界 | 节点放行和申报接收关口 | 每参考流 | 签字单据及材料平衡；按类别汇总出界质量后除以 D；不得为匹配 UUID 将废物改成产品 |

### 计算规则

| 规则编号 | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | 来源 |
| --- | --- | --- | --- | --- | --- |
| normalization | all non-reference cards | 对于工单实际数量 Q_i，q_i = Q_i / D；D > 0。对每种材料、资产包及真实服务单位分别保留数量。 | Q_i; D; cp_gate; cp_materials; cp_resources; cp_energy; cp_exits | 每参考流数量 |  |
| stock_closure | neoprene_pads; `refine_packaging`要求细化的实际交换 | 对每种材料，期初库存 + 接收量 = 期末未用库存 + 安装保留材料 + 可用退回物 + 废物 + 有据差异。纠正归属及称量差异，不得强行将差异计作排放。 | cp_materials; cp_exits; installation records | 经核对的材料清单 |  |
| resource_share | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | 对每个已定义的全寿命资源包，s_j = u_j / sum(u_all)；q_resource = s_j / D。要求完整且为正的分母、明确期间责任以及维护或报废资源包无重叠。 | cp_resources; cp_gate | 每参考流资源包份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| configuration | accepted_isolation | 保留牌号、载荷分布、模块几何及设计批准的适用条件；不同设计分开，不声称性能相等。 | 供应商或项目设计和签字交付记录 |
| range_evidence | all cards | 定量核查区间仅来自独立且可比的实测工单或已核实 SKU 数据。厂家支承载荷表既不是耗材质量，也不是安装产率。 | 逐卡实际证据及独立样本范围 |
| identity | all cards | 最终数据集生产前核实实际交换的身份、状态、服务商或目的地、属性及单位。条件性总卡应展开为实际交换，不能假设通用 UUID。 | 完整匹配的流及属性单位证据 |
| periods | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | 闭合所有权和期间分配、更换及报废记录，防止工单或服务间重复负担。 | 资源寿命及全体消费者台账 |
| `refine_packaging` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按实际材质及一次性或可周转交接责任展开。不得再次计入供应商清单已含的包装。周转包装物理质量与分配后的上游负担分开。 范围证据需求：实际包装规格、称量及复用交接证据；仅有送货毛重不足。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_owned_resources` | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：对于实际使用的千斤顶、吊索、手工切刀、量具等自有资产，逐项定义包含采购、维护、更换及报废的全寿命资源包。按全部工单、节点和期间的实测因果使用量分配负担；保留实物资产编号，不重复计入服务商自有设备。 范围证据需求：各资产全寿命服务证据及实际使用记录；不假设寿命或固定设备消耗比例。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_resources`; 实际独立记录及身份／单位证据 |
| `refine_local_support_hourly_service` | `local_support_hourly_service_handling`; `local_support_hourly_service_access` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。仅当真实供应方数据集以服务小时为参考且范围及完整生命周期覆盖匹配时启用。同一事件不得另计完整服务包。时间不是物料计数。 范围证据需求：实际合同范围、运输趟次或租赁记录及上游包含项；无通用次数、小时数或距离。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_resources`; 实际独立记录及身份／单位证据 |
| `refine_usable_returns` | `usable_returns_pad_module`; `usable_returns_usable_offcut` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性记录实际可再用边角料、未安装垫材模块及离开工单并交给明确责任方和目的地的周转包装。区分污染和损伤；不自动视为销售、联产品或回收抵扣。 范围证据需求：称重退料单、状态及所有权；不假设可回收比例。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_exits`; 实际独立记录及身份／单位证据 |
| `refine_installation_waste` | `installation_waste_neoprene` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按实际氯丁橡胶或其他材质、污染、状态和明确的接收处理关口展开废物。包括无法恢复的纠正用料和收集碎屑；固体边角料是废物，不能自动视为排入空气的基本流。处置服务与废物转移质量应具有一致且不重复的处理责任。 范围证据需求：实际切分计划、废物单据及纠正历史；不预设废料率或回收率。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_exits`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母均须保留原验收配置分层、状态交付点及因果归属；不得把不等价线路、路线、产品或工单按等价数量盲目相除。 | 实际身份、单位、保管及独立数量证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |


## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| gate_complete | accepted_isolation | 核查供应商或项目的免约束许可、批准的各支承点载荷及布置、实际接触/水平稳定/刚性短路标准及纠正闭环。设计批准或检查标准缺失时不得验收；不声称数值化运行衰减。 |  |
| row_completeness | all cards | 核实 place_inspect 的每项实际投入、退回、废物及条件服务，核对材料和设备交接。实际发生排除项时须扩展边界，不能静默删除。 |  |
| resource_closure | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | 列明全部消费者及期间；份额之和为 1，自有和服务商负担无重叠。寿命、更换或报废分配未知时阻止最终定稿。 |  |
| normalization_check | all cards | D 必须为正且不含拒收工单。参考输出恰为 1 Item(s)；其他量来自实际记录，不能固定为一。保留真实服务单位、能量及质量换算。 |  |
| exchange_readiness | all cards | 最终交换须具备精确核实的身份、属性单位链及可追溯数量，检查器结果不能代替这些记录。 |  |
| `atomization_packaging_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_packaging`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_owned_resources_complete` | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_owned_resources`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_local_support_hourly_service_complete` | `local_support_hourly_service_handling`; `local_support_hourly_service_access` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_local_support_hourly_service`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_usable_returns_complete` | `usable_returns_pad_module`; `usable_returns_usable_offcut` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_usable_returns`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_installation_waste_complete` | `installation_waste_neoprene` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_installation_waste`；必要细化尚未解决时阻断数据集。 |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景隔振安装服务数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有相同申报交付关口及配置的首次干铺单层氯丁橡胶设备隔振服务 |
| excluded_use | 整机制造、安装和运行，抗震设计，弹簧或多层隔振，声学性能保证及未限定类别均值 |
| required_metadata | 地点、日期、设备及垫材配置、载荷布置、适用条件批准、检查关口、D、方法及来源版本、所有权和边界接口 |
| required_quality_disclosure | 条件活动的实际发生或缺失；UUID 和定量缺口；服务单位转换；资源寿命分配；材料差异及配置代表性 |
| update_trigger | 垫材牌号、支承设计、约束要求、安装技术、交接标准或已核实证据变化 |


## 11. 数据源

| source_id | type | reference | 用途（`used_for`） |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC 3.0 解释说明，2025年6月30日，第295及298页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围：隔振与墙顶面吸声饰面的区别 |
| mason-super-w-2014 | handbook | Mason Industries，SW-16-3 技术资料，2014年5月；https://mason-ind.com/download/36780/ | 模块化氯丁橡胶供货、完整模块切分及部分免螺栓应用；不提供通用清单用量 |
| karman-isolator-selection | handbook | Karman Rubber，Selecting the Right Vibro-Isolators；https://karman.com/products/selection-steps | 设计输入及载荷分布限定；未采用性能百分比或通用载荷质量系数 |
