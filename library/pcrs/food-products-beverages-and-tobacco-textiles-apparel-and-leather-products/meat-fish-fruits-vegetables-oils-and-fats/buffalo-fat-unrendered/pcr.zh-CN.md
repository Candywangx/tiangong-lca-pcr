---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.buffalo-fat-unrendered
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未熬制水牛脂肪

## 1. 范围与适用性

本 PCR 适用于水牛经屠宰、胴体处理、分割或修整后，仍以脂肪组织或脂肪原料形态存在且未经熬制的脂肪。范围包括在屠宰或分割共同生产边界内进行的物理回收与修整、可选的冷却或冷冻、包装、内部搬运以及所声明的运输交接。应声明预期等级或路线（食品、饲料、技术用途或其他已声明路线）；仅当产品拟供人类食用时，食品路线卫生规定才适用。

默认前景不包括热法熬制、湿法或干法熬制、萃取、以使脂肪与组织分离为目的的熔化、精炼、分提、氢化、酯交换、脱臭或其他将产品转化为已熬制脂肪或油的过程。CPC 21521–21529 中的已熬制水牛牛脂和动物油或其馏分不在范围内。尤其不得用本 PCR 表示 CPC 21523 牛脂或 CPC 21529 骨髓油、骨油、蹄油及其馏分。牛、绵羊、山羊、猪、家禽或其他动物的脂肪同样不在范围内。

UNSD CPC 3.0 是分类边界的权威依据。Codex CXC 58-2005 为适用食品路线的屠宰、胴体处理、检验、卫生、温度控制、贮存、包装和运输控制提供背景。Codex CXS 211-1999 仅用于区分命名的已熬制动物脂肪与本未熬制产品；其中关于已熬制脂肪的描述、组成范围和质量数值不是未熬制水牛脂肪的产品规范，不得用作类别默认值。

不得将牛的产率、组成、价格或分配因子套用于水牛。缺少水牛产品特定的公开定量证据时，本 PCR 要求使用水牛批次和场址记录。清单中唯一允许的暂定替代方案是明确标注、可审计的设备能耗 `reasoned_estimate`；其中不含任何跨物种默认值，并应在取得分表计量或其他经核实的过程能耗后替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.buffalo-fat-unrendered |
| classification_refs | CPC 3.0：21513，Buffalo fat, unrendered（精确分类引用） |
| covered_products | 水牛经屠宰、胴体处理、分割或修整后物理分离的未熬制脂肪；散装、大包装或已包装；处于所声明交接点的环境温度、冷却或冷冻状态 |
| excluded_products | 已熬制牛脂；CPC 21521–21529 的已熬制动物脂肪和油；骨髓油、骨油或蹄油及其馏分；精炼、分提、氢化或其他改性脂肪；非水牛物种的脂肪；无法单独计量未熬制水牛脂肪质量的混合物 |
| representative_product | 在生产者发运交接点的一批已声明未熬制水牛脂肪组织或脂肪原料 |
| production_route | 水牛屠宰/胴体处理及物理脂肪分离或修整；可选冷却/冷冻；包装与内部搬运；可选的至客户交接点运输；不熬制、不精炼 |
| market_state | 未熬制脂肪组织或脂肪原料，并声明等级/预期用途、解剖或来源组织描述、温度状态、包装状态和交接点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的交接点提供未熬制水牛脂肪组织或水牛脂肪原料，供声明的下游用途使用 |
| How much | 1 kg 产品净质量，不含包装和运输设备 |
| How well | 水牛身份可追溯；材料保持未熬制；已声明组织/来源描述、预期等级或用途、验收状态、温度状态和包装状态 |
| How long or cycle | 在声明的交接时点；任何贮存时长、保质期声明及冷却或冷冻持有时间均应报告，不得假定 |
| reference_flow_link | 将实测批次数量归一化后，在声明交接点的 1 kg 参考产品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species: buffalo; material_state: unrendered; tissue_or_source_description; intended_grade_or_use; post_mortem_or_acceptance_status where applicable; temperature_state and handoff_temperature; packaging_state; lot_or_batch; geography; declared_handoff_point; storage_duration when applicable |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将实测合格交接质量归一化后，报告 1 kg 未熬制水牛脂肪净输出；不得计入包装、托盘、容器、冰或运输设备。 |
| `weighing_state` | 参考产品与共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录毛重、皮重、净重、称量时间、温度状态、秤标识和批次；不得用假定组成因子在不同解剖组织状态或动物物种之间换算。 |
| `batch_mass_balance` | 联合屠宰、胴体处理及分离批次 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一批次基准上核对实测水牛投入与全部产品、共产品、留存、判废、废物及实测损失输出；应披露任何残差，不得用牛或通用产率强行配平。 |
| `utility_units` | 水、电力、燃料及制冷剂 | 与选定流相适用的数量属性 | kg、m3、kWh、MJ 或其他已声明的 SI 兼容单位 | 保留账单或计量表的实测单位，并记录换算到归一化参考流的每一步；按能源载体分别记录，不得合并质量量和能量量。 |
| `transport_service` | 纳入的至声明交接点运输 | 质量与距离 | t·km | 以实际发运净质量和实际路线距离计算吨公里；在具有实质影响时，分别记录载荷、空返和冷链条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入共同产出该脂肪的屠宰/胴体处理操作的已识别水牛，或终止于相同宰后检验合格分离点的上游水牛屠宰/胴体处理数据集 |
| starting_condition_role | 在直接脂肪回收、修整、温度调节和交接之前，用于归属水牛养殖与屠宰负荷的共同生产起始条件 |
| product_classification_scope | 仅限未熬制水牛脂肪；CPC 3.0 代码 21513 是分类引用，不把边界扩展到已熬制脂肪或其他物种 |
| recursive_input_rule | 从其他设施购入并进入前景的未熬制水牛脂肪，只作为技术领域产品投入记录一次，并配套终止于供应商交接点的上游数据集；不得在接收过程中递归重建其此前的屠宰和分离 |
| upstream_dataset_requirement | 活水牛和购入投入应使用可追溯的水牛生产及供应商数据集；上游未熬制脂肪数据集必须披露相同物种、状态、交接点和共同生产分配依据 |
| disclosure | 声明实际起始点、设施操作、组织/来源描述、适用时的检验或验收状态、温度路线、贮存时长、包装、纳入的运输、交接点、排除的操作及全部分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_joint_origin` | 屠宰、胴体处理、分割及脂肪分离 | 纳入物理分离未熬制水牛脂肪的操作，以及应用共产品规则所需的联合输出。如果该操作在上游表示，应明确其分配结果和交接点。 | `unsd-cpc-3-21513`; `eu-pef-2021-2279` |
| `boundary_unrendered` | 所有前景操作 | 默认前景不得包含熬制或精炼。凡以熬制、熔出、萃取、精炼或分提脂肪为目的或产生该效果的加热都会改变产品状态，应改用已熬制脂肪 PCR 或单独声明的下游系统。 | `unsd-cpc-3-21513`; `codex-cxs-211-1999` |
| `boundary_conditioning` | 冷却、冷冻、贮存及包装 | 纳入声明交接前实际发生的温度调节和包装所使用的电力、制冷剂、水、包装、产品损失和废物；记录温度和持有时间，不得使用通用水牛脂肪假设。 | `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031` |
| `boundary_transport_handoff` | 运输 | 默认交接点为生产者装载后的发运点，因此默认排除外运。仅当声明的参考产品为交付至其他交接点时纳入运输，并记录实际路线、载荷、温控和返程假设。 | `eu-pef-2021-2279` |
| `boundary_hygiene` | 拟供人类食用的产品 | 记录适用于实际食品路线的宰后验收、卫生分离、污染控制、温度控制、贮存及包装控制。本 PCR 不创设法律限值，也不证明食品合规。 | `codex-cxc-58-2005` |
| `boundary_inventory_completeness` | 前景设施 | 在与操作相适应的过程或设施层级清查水、能源、原料、废水、废气或直接大气排放流以及残余物。不得将 EU BAT 数值或法律适用门槛引入本 PCR。 | `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_fat_recovery` | 水牛屠宰、胴体处理及未熬制脂肪回收 | required | 始终直接纳入，或通过可追溯的上游共同生产数据集纳入 | 在不熬制的条件下确定联合输出、物理分离和直接回收负荷 | 每个实测共同生产批次，归一化至交接点 1 kg 合格未熬制水牛脂肪 |
| `temperature_conditioning` | 冷却、冷冻及冷藏 | conditional | 声明交接前发生冷却、冷冻或受控贮存时纳入 | 使产品达到并保持声明的温度状态 | 每 1 kg 温度调节后的未熬制水牛脂肪，并计入实际持有时间 |
| `packaging_handoff` | 包装、内部搬运及发运交接 | required | 纳入经装载的实际散装、可重复使用容器或包装路线 | 确定净交接质量、包装、搬运和发运损失 | 每 1 kg 发运的未熬制水牛脂肪净质量 |
| `transport_to_handoff` | 至交付交接点运输 | conditional | 仅当声明的交接点位于生产者发运点之外时纳入 | 表示实际交付路线且不重复背景运输服务 | 每 1 kg 交付产品及实际吨公里 |

### 过程：水牛屠宰、胴体处理及未熬制脂肪回收（`slaughter_fat_recovery`）

#### 输入

##### 产品流

###### 已分配的活水牛或上游共同生产投入（`buffalo_joint_input`）

记录产生联合屠宰输出的水牛投入。分配至未熬制脂肪的数量按第 7 节规则计算，绝不得从牛的产率或牛的分配因子推导。

- 选定流：场址选定的活水牛产品流或可追溯的上游水牛共同生产数据集
- 流属性/单位：质量 / kg
- 数量规则：实测水牛投入乘以计算得到的水牛脂肪分配因子，再除以合格未熬制脂肪输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_joint_batch`
- 来源：`eu-pef-2021-2279`

###### 分离过程实测电力和其他能源（`separation_energy_metered`）

按能源载体分别记录屠宰区操作和物理脂肪分离所用的实测电力、蒸汽、燃料或其他能源；共享用量应按有记录的计量表或工程依据分配。

- 选定流：场址选定的电力或能源载体产品流，每种载体一行
- 流属性/单位：能量或质量 / kWh、MJ 或 kg，按实际情况
- 数量规则：直接归属和联合过程分配后的实测过程能耗除以合格未熬制脂肪输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 暂定设备模型能耗替代值（`separation_energy_provisional`）

仅在无法取得过程特定计量数据时使用本行。这是基于实际设备和运行记录的可审计、无预设数值的推理估算；同一能源载体和期间内，本行与实测数量互斥。

- 选定流：场址选定的电力或能源载体产品流，每种载体一行
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：设备额定功率乘以记录的运行时间和已说明的设备特定负载因子后求和，再除以合格未熬制脂肪输出；披露每个负载因子和不确定性
- 数值来源模式：模型估计（`modelled_estimate`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：推理估算（`reasoned_estimate`）
- 采集协议：`cp_utilities`
- 来源：

###### 过程及卫生用水（`recovery_water`）

记录为适用屠宰、清洁、卫生和物理分离操作而跨越设施边界的水；通过实测细分排除分配给无关产品的水。

- 选定流：场址选定的供水产品流
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：直接归属于脂肪回收的实测用水，加上联合过程用水的有记录分配份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### 清洁、卫生及其他操作材料（`operating_materials`）

记录适用路线中跨越边界的每种化学品、耗材或其他产品投入。不得从其他动物物种推断配方或投加量。

- 选定流：场址选定的操作材料产品流，每种材料一行
- 流属性/单位：质量 / kg
- 数量规则：可归属于本过程的实测采购、领用或投加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operating_materials`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未熬制水牛脂肪参考输出（`unrendered_buffalo_fat_output`）

该输出是在声明状态下离开过程链的合格未熬制水牛脂肪组织或脂肪原料。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测合格交接净质量归一化后固定为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明交接点的参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_fat_output`
- 来源：`unsd-cpc-3-21513`

###### 其他水牛屠宰和分割共产品（`joint_co_products`）

将每种可单独销售的水牛输出（如胴体/肉、食用内脏、皮张、骨或其他已声明材料）作为独立产品流记录，并记录实测质量和去向。

- 选定流：场址选定的共产品流，每种输出一行
- 流属性/单位：质量 / kg
- 数量规则：共同生产批次的实测可销售或转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个实测共同生产批次，并按每 1 kg 合格未熬制水牛脂肪报告
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joint_batch`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 判废、拒收或非产品组织及残余物（`rejected_tissue_residues`）

记录实际质量、拒收原因、适用时的监管类别、去向和处理路线。不得把已熬制输出或其他动物的脂肪重新标记为未熬制水牛脂肪。

- 选定流：场址选定的废物流，每个废物类别和处理路线一行
- 流属性/单位：质量 / kg
- 数量规则：离开过程的实测拒收或判废质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### 过程废水（`process_wastewater`）

记录废水体积或质量及处理交接点；在适用设施背景下，当已有实测且有要求时记录相关特性。

- 选定流：场址选定的废水流
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：可归属于前景过程的实测排放或处理转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 直接前景排放（`direct_recovery_emissions`）

将现场燃料使用或过程操作产生的每种实测或计算直接排放记录为相应基本流。不得重复计入已由购入电力、燃料或处理数据集表示的排放。

- 选定流：相应的 Tiangong 基本流，每种排放物质和环境区室一行
- 流属性/单位：质量 / kg
- 数量规则：实测直接排放，或由记录的前景燃料/活动量和单独记录的适用因子计算的数值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交接点的合格未熬制水牛脂肪
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：冷却、冷冻及冷藏（`temperature_conditioning`）

#### 输入

##### 产品流

###### 进入温度调节的未熬制水牛脂肪（`fat_to_conditioning`）

记录进入温度调节的实测未熬制脂肪，并保持批次身份和状态。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入温度调节的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 温度调节后产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`codex-cxc-58-2005`

###### 温度调节电力和能源（`conditioning_energy`）

按能源载体记录在实际持有时间内用于冷却、冷冻和贮存的实测或有记录分配能源。

- 选定流：场址选定的电力或能源载体产品流，每种载体一行
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：按产品质量、设备时间或其他有记录因果驱动因素分配的实测温度调节能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 温度调节后产品输出及实际贮存时长
- 基准类型：贮存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### 制冷剂补充（`refrigerant_makeup`）

记录分配到相关设备和期间的实际制冷剂补充量。

- 选定流：场址选定的制冷剂产品流
- 流属性/单位：质量 / kg
- 数量规则：可归属于温度调节设备和清单期间的实测制冷剂补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 温度调节后产品输出及实际贮存时长
- 基准类型：贮存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 温度调节后的未熬制水牛脂肪（`conditioned_fat_output`）

记录温度调节后的净质量和实际温度状态；冷却或冷冻不意味着允许熬制。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开温度调节的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 温度调节后产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 温度调节损失或拒收产品（`conditioning_loss`）

记录质量损失、拒收材料和去向，不得假定水牛产品特定的贮存损失因子。

- 选定流：按实际去向选择的场址废物或回收流
- 流属性/单位：质量 / kg
- 数量规则：实测投入质量减去合格输出和其他实测留存或转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 温度调节后产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_conditioning`
- 来源：

##### 基本流

###### 排放至空气的制冷剂（`refrigerant_release`）

当排放已实测或由经核实的设备质量平衡计算时，记录相应的制冷剂基本流。

- 选定流：相应的 Tiangong 制冷剂空气排放流
- 流属性/单位：质量 / kg
- 数量规则：期初充注量加补充量，减期末充注量和记录的回收量，并分配至温度调节期间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 温度调节后产品输出及实际贮存时长
- 基准类型：贮存时长（`storage_duration`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：包装、内部搬运及发运交接（`packaging_handoff`）

#### 输入

##### 产品流

###### 进入交接准备的未熬制水牛脂肪（`fat_to_handoff`）

记录进入包装或散装装载的批次和实测产品质量。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入交接准备的实测产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_output`
- 来源：

###### 初级、次级和运输包装（`packaging_materials`）

记录跨越边界的每种包装材料、可重复使用容器、内衬、标签、托盘或其他包装；从实际记录取得重复使用次数或返还率。

- 选定流：场址选定的包装产品流，每种材料一行
- 流属性/单位：质量或计数 / kg 或件；需要时用有记录的单件质量换算为 kg
- 数量规则：实测领用包装减去有记录返还量，并归一化至发运产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handoff`
- 来源：`eu-pef-2021-2279`

###### 内部搬运能源（`handling_energy`）

记录装载前泵、输送机、叉车或其他搬运所用的实测电力或燃料。

- 选定流：场址选定的电力或燃料产品流，每种载体一行
- 流属性/单位：能量或质量 / kWh、MJ 或 kg，按实际情况
- 数量规则：实测或有记录分配的搬运能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handoff`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运点未熬制水牛脂肪净输出（`dispatch_output`）

记录发运交接点的净质量、包装或散装状态、温度、批次和时间戳。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运净质量，归一化为 1 kg 参考流
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：发运交接点的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_fat_output`
- 来源：`unsd-cpc-3-21513`

##### 废物流

###### 包装废料和交接产品损失（`packaging_handoff_waste`）

按材料和去向分别记录包装废料和产品损失。

- 选定流：场址选定的废物流，每种材料和处理路线一行
- 流属性/单位：质量 / kg
- 数量规则：实测废弃包装或产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handoff`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：至交付交接点运输（`transport_to_handoff`）

#### 输入

##### 产品流

###### 生产者发运点的产品（`fat_for_transport`）

声明交付交接点时，记录发运净质量和发运状态。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_handoff`
- 来源：

###### 至交付交接点的运输服务（`transport_service_input`）

承运人在前景控制之外时，使用合适的背景运输服务。若自有运输按前景燃料和直接排放建模，则省略本服务行以防重复计算。

- 选定流：场址选定的实际运输方式和温度条件运输服务产品流
- 流属性/单位：运输服务 / t·km
- 数量规则：实际路线距离乘以发运净吨数；仅按有记录的分配、载荷和返程假设调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_transport_handoff`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付交接点的未熬制水牛脂肪净输出（`delivered_output`）

记录交付交接点的验收净质量、温度、包装状况、交付时间和损失。

- 选定流：水牛脂肪，未加工 `788db006-278e-41d6-ac60-d33b1d3edf34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测交付验收净质量；当交付交接点定义参考流时归一化为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交付交接点的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_transport_handoff`
- 来源：`unsd-cpc-3-21513`

##### 废物流

###### 运输损失或交付拒收（`transport_loss`）

记录实测产品损失或拒收质量及其去向；不得假定通用冷链损失百分比。

- 选定流：按实际去向选择的场址废物或回收流
- 流属性/单位：质量 / kg
- 数量规则：实测发运质量减去交付验收质量和有记录的留存或退回质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_transport_handoff`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | 联合屠宰、胴体处理、分割、分离、温度调节、包装和运输操作 | 在分配剩余联合负荷之前，先细分并直接归属与未熬制水牛脂肪回收或其他输出有因果关系的投入、排放、废物和处理流。 | `eu-pef-2021-2279` |
| `alloc_joint_residual` | 剩余联合屠宰和胴体处理负荷 | 无法细分时，使用实测输出质量和匹配的净收入或价格记录，在全部可销售水牛输出之间计算场址和期间特定的经济分配：输出 i 的分配因子 =（质量 i × 价格 i）/ sum（质量 j × 价格 j）。报告每种输出、价值依据、币种、期间和因子。 | `eu-pef-2021-2279` |
| `alloc_no_cattle_proxy` | 水牛脂肪分配 | 不得使用牛、猪、绵羊或山羊的屠宰质量份额、价格、产率、组成或默认分配因子。Recommendation (EU) 2021/2279 提供的屠宰默认值覆盖牛、猪、绵羊和山羊，不覆盖水牛；缺少水牛场址数据意味着分配不完整，而不是允许使用牛代理。 | `eu-pef-2021-2279` |
| `alloc_fat_specific_operations` | 脂肪修整、温度调节、包装和交付 | 仅为未熬制脂肪输出执行的操作应直接归属于该输出。不得把这些负荷摊薄到胴体肉、内脏、皮张或其他联合输出。 | `eu-pef-2021-2279` |
| `alloc_waste_and_negative_value` | 判废材料、残余物和不具正向市场功能的输出 | 记录实际分类和去向。将处理负荷归于产生废物的过程；除非单独声明的下游建模方法和证据另有合理依据，不得应用避免负荷或负价值抵扣。 | `eu-pef-2021-2279`; `codex-cxc-58-2005` |
| `alloc_sensitivity` | 经济分配结果 | 若价格波动、关联交易、缺失或对结果产生实质改变，应披露该问题，并测试有记录的替代价格期间和质量分配敏感性。除非研究目标要求其他经评审方法，所报告的主模型仍采用场址特定经济分配。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_joint_batch` | `slaughter_fat_recovery` | 水牛投入、联合输出及分配证据 | 批次生产和销售/转移记录 | 水牛批次与物种证据；活重或接收质量；合格和拒收状态；脂肪、胴体/肉、内脏、皮张、骨、残余物及所有其他输出的质量；输出去向；净收入或匹配价格；币种；日期 | 与批次记录和财务或转移记录关联的校准秤 | kg 和 币种/kg | 每个共同生产批次；价格与清单期间匹配 | 具有代表性的生产期间，并披露季节和异常批次 | 所有纳入的屠宰/分割场址 | 按输出汇总物理量，并由匹配的期间特定价值计算分配；分别保留零价值和废物输出 | 秤校准；批次核对；物种和批次追溯；发票或经批准的转移定价依据；审核签字 |
| `cp_fat_output` | `slaughter_fat_recovery`; `packaging_handoff` | 合格未熬制脂肪质量和状态 | 批次称量和交接记录 | 毛重；皮重；净重；秤标识；日期/时间；批次；组织/来源描述；预期等级/用途；验收状态；未熬制声明；温度状态和值；包装/散装状态；交接点 | 经校准的净重称量和批次检查 | kg，适用时 °C | 每个批次和每个交接点 | 完整清单期间 | 所有纳入场址和交接点 | 按声明状态汇总合格净质量；分别保留拒收、留存和转移质量 | 校准证书；批次记录；状态和温度记录；验收或发运文件 |
| `cp_utilities` | `slaughter_fat_recovery` | 电力、燃料、蒸汽、水及暂定能耗替代值 | 计量表、发票、设备和生产记录 | 表读数；载体；账单量；分表边界；设备标识；额定功率；运行时间；使用替代值时说明负载因子；分配驱动因素；换算因子 | 优先直接计量；其次经核对的发票分配；仅将设备模型作为已标注替代值 | 各载体使用 kWh、MJ、kg 或 m3 | 计量间隔或每生产班次；至少每月核对 | 与生产输出相同期间 | 每个纳入设施和相关公用工程边界 | 首先直接计量归属；否则按有记录的因果驱动因素分配；同一载体/期间不得同时使用实测与替代能耗 | 计量校准或发票；设备铭牌；运行日志；计算表；重复计算检查 |
| `cp_operating_materials` | `slaughter_fat_recovery` | 清洁、卫生及操作材料 | 采购、领用和投加记录 | 材料身份；采购/领用量；期初和期末库存；投加记录；过程归属；废弃或退回 | 库存核对和投加日志 | kg、L 或有记录的件单位 | 每次领用或每批；每月核对 | 与生产输出相同期间 | 每个纳入设施 | 消耗 = 期初库存 + 收货 - 期末库存 - 有记录转移；共享用量按有记录驱动因素分配 | 库存记录；供应商记录；投加设备检查 |
| `cp_waste_emissions` | `slaughter_fat_recovery`; `temperature_conditioning`; `packaging_handoff` | 废物、废水、直接排放及处理交接 | 废物联单、排放计量、监测记录和排放计算 | 废物身份和质量；去向；废水体积及可得特性；排放物质和环境区室；直接活动数据；计算时使用的因子和来源 | 直接测量，或由采集的前景活动量与有记录因子计算 | kg、m3 或参数特定单位 | 每次外运或监测间隔 | 与生产输出相同期间 | 每个纳入场址和排放点 | 按流和去向/环境区室汇总；将直接排放与背景服务排放分开 | 称重联单；实验室/监测记录；计算表；处理接收记录 |
| `cp_temperature_conditioning` | `temperature_conditioning` | 产品质量、时间-温度状态、温度调节能源、制冷剂和损失 | 批次、记录仪、计量表和制冷维修记录 | 投入/输出质量；进出时间；温度读数；设定值；贮存时长；各载体能源；制冷剂类型；可得时的期初/期末充注量；补充；回收；拒收/损失质量 | 校准秤和温度记录仪；能源计量表；制冷维修质量平衡 | kg、°C、h、kWh/MJ 及 kg 制冷剂 | 每批；连续或基于风险的温度记录；每次制冷剂维修事件 | 完整温度调节期间 | 每个纳入冷库、冷冻机或温度调节单元 | 按实际持有时间和因果驱动因素汇总质量和能源；由核实质量平衡计算制冷剂排放 | 记录仪和秤校准；计量记录；维修报告；批次核对 |
| `cp_packaging_handoff` | `packaging_handoff` | 包装、内部搬运、废料和装载 | 材料领用、返还、设备和发运记录 | 材料身份；件数；单件质量；领用/返还/重复使用件数；搬运能源；废料；产品损失；发运批次、质量、温度和时间 | 包装计数和称重；搬运计量或燃料日志；发运秤 | kg、件、kWh/MJ、°C | 每批或每次发运；每月核对 | 完整清单期间 | 每个包装和装载地点 | 用实测单件质量换算计数；应用实际重复使用/返还次数；归一化至发运净质量 | 供应商规范或抽样单件质量；库存核对；发运记录 |
| `cp_transport_handoff` | `transport_to_handoff` | 交付质量和运输服务 | 发运、承运人、路线和收货记录 | 起点/终点；方式；车辆类别；路线距离；发运和验收净质量；载荷；空返；制冷条件；发运/收货时间和温度；损失或拒收 | 承运文件、路线记录、发运和收货秤/记录仪 | km、kg、t·km、h、°C | 每次运输 | 清单期间内所有纳入交付 | 每条声明路线和交接点 | 吨公里 = 发运净吨数 × 实际距离；仅从有记录路线数据建模返程和制冷 | 提单；承运记录；路线证据；发运/收货核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景流 | 归一化数量 = 期间或批次流数量 / 声明参考交接点的合格未熬制水牛脂肪净质量 | 匹配期间流数量；合格交接质量 | 每 1 kg 参考流的数量 | `eu-pef-2021-2279` |
| `calc_economic_allocation` | 剩余联合屠宰/胴体处理负荷 | 输出 i 的分配因子 =（质量 i × 匹配净价格 i）/ sum（质量 j × 匹配净价格 j）；分配至脂肪的流 = 细分后的剩余联合流 × 水牛脂肪因子 | 实测质量；匹配价格或净收入；细分后的剩余联合流 | 场址特定分配因子和分配至水牛脂肪的流 | `eu-pef-2021-2279` |
| `calc_energy_fallback` | `separation_energy_provisional` | 暂定能耗 = sum（额定功率 × 记录运行时间 × 已说明负载因子），按能源载体分开；取得实测或核实分配能耗后替换 | 设备标识和额定功率；运行时间；已说明负载因子；合格脂肪输出 | 每 1 kg 参考流的暂定 kWh 或 MJ，并披露不确定性 |  |
| `calc_mass_balance` | 联合批次及各温度调节/交接过程 | 残差 = 实测投入 - 实测产品 - 实测共产品 - 实测废物 - 实测留存/转移质量；报告残差大小和解释 | 所有匹配的质量记录 | 质量平衡残差和核对状态 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_release` | 制冷设备 | 排放 = 期初充注量 + 补充量 - 期末充注量 - 记录回收量；仅分配至相关设备、期间和产品 | 充注、补充、回收及设备/产品运行记录 | 每 1 kg 温度调节输出的制冷剂排放 kg | `eu-fdm-bat-2019-2031` |
| `calc_transport_service` | 纳入的交付交接 | t·km = 实际路线 km × 发运净 kg / 1,000；将空返和制冷作为单独记录的模型参数 | 路线距离；发运质量；载荷/返程/冷链记录 | 每个交付参考流的 t·km | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_species_state_identity` | 参考产品和联合投入 | 在整个交接链追溯水牛物种、批次、未熬制状态、组织/来源描述和预期等级/用途；隔离其他物种和已熬制材料。 | 供应商/动物身份；批次和批号记录；产品声明；分离记录；`unsd-cpc-3-21513` |
| `dq_temporal_match` | 所有前景记录 | 使用期间匹配的生产、公用工程、价格、废物、温度调节、包装和运输记录；披露停产、异常批次、季节性和缺失区间。 | 带日期记录和覆盖表；`eu-pef-2021-2279` |
| `dq_mass_and_allocation` | 共同生产 | 核对批次质量，并保留分配所用每种可销售或废物输出；保存质量、价值、币种、期间和直接归属决定的源记录。 | 批次质量平衡；秤校准；发票/转移依据；分配工作表；`eu-pef-2021-2279` |
| `dq_process_completeness` | 前景设施 | 核查水、能源、原料、废水、适用的直接排放/废气及残余物；对零值、不适用、排除或不可得状态作出记录，不得无说明遗漏类别。 | 过程流程图；计量表和材料清单；废物/排放登记；`eu-fdm-bat-2019-2031` |
| `dq_hygiene_food_route` | 拟供人类食用的产品 | 保留适用的检验/验收、卫生分离、温度、贮存、污染控制和包装证据。不得把本 PCR 解释为法律合规判断。 | 检验/验收和过程控制记录；温度日志；卫生记录；`codex-cxc-58-2005` |
| `dq_reasoned_estimate` | 暂定分离能耗 | 保存设备、运行时间、负载因子依据、不确定性和重复计算检查。取得过程分表、经核实的公用工程分配，或设备/操作发生实质变化时替换该估算。 | 设备铭牌；运行日志；计算和不确定性记录；替换审核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 必须为 `788db006-278e-41d6-ac60-d33b1d3edf34`；Mass 属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考数量必须为产品净质量 1 kg。 |  |
| `validate_unrendered_scope` | 产品和过程边界 | 如果默认前景包含熬制、萃取、精炼或其他向已熬制脂肪转化的过程，或者参考输出为牛脂、油、馏分或其他已熬制产品，则校验失败。 | `unsd-cpc-3-21513`; `codex-cxs-211-1999` |
| `validate_buffalo_identity` | 产品和分配 | 如果其他物种混入参考质量，或者把牛或其他物种的产率、组成、价格、质量份额或分配默认值用于水牛，则校验失败。 | `unsd-cpc-3-21513`; `eu-pef-2021-2279` |
| `validate_required_qualifiers` | 参考流元数据 | 缺少物种、未熬制状态、组织/来源描述、预期等级/用途、温度状态、包装状态、批次、地理或交接点时校验失败；适用食品路线必须提供验收状态。 | `unsd-cpc-3-21513`; `codex-cxc-58-2005` |
| `validate_mass_balance` | 联合批次和前景过程 | 要求实测投入/输出核对并解释残差；若缺失共产品、废物、留存材料或损失可能实质改变归一化或分配，则校验失败。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_allocation` | 联合屠宰/胴体处理负荷 | 要求先直接细分再分配剩余负荷，并为经济分配提供完整的场址特定水牛输出质量/价值证据。不得接受牛或通用分配代理。 | `eu-pef-2021-2279` |
| `validate_conditioning_handoff` | 冷却、冷冻、贮存、包装和运输 | 要求实际状态、温度、持有时间、包装、发运点及纳入的运输路线。若运输服务与前景燃料/排放无解释地重复，则校验失败。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_inventory_completeness` | 前景清单 | 要求为水、能源、原料、废水、适用的直接排放/废气和残余物提供明确状态与证据。不得把 EU BAT 法律门槛或绩效值作为 PCR 默认值。 | `eu-fdm-bat-2019-2031` |
| `validate_reasoned_estimate` | 暂定能耗行 | 仅当实测或经核实分配能耗不可得、披露输入和不确定性、不从其他动物物种复制数量且记录替换触发条件时，才允许 `separation_energy_provisional`。 |  |
| `validate_cxs_limit` | 产品规范 | 不得将 CXS 211-1999 的已熬制脂肪组成或质量值用于未熬制水牛脂肪；该来源只支持已熬制/未熬制区分及适用限制。 | `codex-cxs-211-1999` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在声明生产者发运或交付交接点的未熬制水牛脂肪前景生产数据集 |
| downstream_use | 经评审后可作为需要未熬制水牛脂肪组织或脂肪原料，并保持声明状态和分配背景的系统所用 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 产品足迹和 LCA 建模；水牛物种、未熬制状态、等级/用途、地理、技术、温度路线、交接点和分配解释必须匹配 |
| excluded_use | 已熬制牛脂或油；CPC 21521–21529 已熬制脂肪；其他动物物种；未披露的混合物种脂肪；食品法律合规证明；应用牛默认值；未满足适用 PEF/核查要求的比较声明 |
| required_metadata | PCR id 和版本；产品 UUID；CPC 引用；水牛追溯；组织/来源描述；未熬制声明；预期等级/用途；适用时的宰后或验收状态；地理；技术；清单期间；温度与贮存；包装；交接点；运输；共产品；分配公式、因子、质量、价值、期间和币种；数据源 |
| required_quality_disclosure | 前景记录覆盖和校准；质量平衡残差；缺失数据；推理估算的使用和不确定性；代表性；分配敏感性；排除过程；直接/背景排放拆分；食品路线的卫生证据范围 |
| update_trigger | 新的水牛产品特定证据；产品状态、组织混合、等级、屠宰或分离路线、设备、能源来源、冷却/冷冻、包装、交接点、运输、共产品市场、分配结果、法规、Tiangong UUID 身份变化，或暂定能耗估算被替换 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-21513` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, subclass 21513 “Buffalo fat, unrendered”, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 权威产品身份和分类边界：包括未熬制水牛脂肪；排除已熬制水牛牛脂和骨髓油、骨油或蹄油/馏分。不提供 LCA 产率、组成或分配因子。 |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, adopted 2005, editorial amendments 2013. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf（检索日期 2026-08-11） | 为适用食品路线的屠宰/胴体处理过程控制、宰后检验、卫生分离、防止污染、温度控制、贮存、包装及运输提供背景。不作为 LCA 数量来源或通用法律门槛。 |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, amended 2024. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf（检索日期 2026-08-11） | 区分 premier jus、edible tallow 等命名已熬制脂肪与本未熬制类别。其已熬制脂肪描述、组成表和质量值明确不是未熬制水牛脂肪的产品规范或 LCA 默认值。 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-11） | 功能单位/参考流结构、系统边界完整性、企业特定前景数据、直接细分及剩余屠宰共产品分配框架。其屠宰默认值覆盖牛、猪、绵羊和山羊，不覆盖水牛；本 PCR 不移植这些默认值。 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 of 12 November 2019 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-11） | 在适用情况下支持水、能源、原料、废水、废气/直接排放和残余物的过程清单与监测完整性。不用于把法律适用性、监测频次、排放水平或绩效门槛扩展到本 PCR。 |
