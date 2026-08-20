---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.skim-milk-and-whey-powder
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 脱脂奶粉和乳清粉

## 1. 范围与适用性

本 PCR 适用于生产工厂门口可销售脱脂奶粉、乳清粉和酸乳清粉的前景数据生产。适用产品可供直接消费或进一步加工，前景范围包括已声明液态乳品原料的接收与调理、浓缩、干燥、粉体后处理、容装或包装、清洗，以及前景废物和排放处理。

必须声明产品路线。脱脂奶粉路线以脱脂乳为起点；若原料乳分离在前景内运行，则可以原料乳为起点。乳清粉路线以干酪、酪蛋白或类似产品生产中分离的乳清或酸乳清为起点。原料乳、干酪、酪蛋白以及外供液态原料的上游生产由上游数据集表示，不得隐含并入奶粉工厂清单。

除非经评审的范围更新明确纳入，否则乳清蛋白浓缩物和分离物、乳糖粉、酪蛋白粉、婴幼儿配方粉、配制乳品混合物、全脂奶粉、部分脱脂奶粉和稀奶油粉不在本 PCR 范围内。必须披露产品组成、路线、脱盐或中和等改性以及包装形式。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.skim-milk-and-whey-powder |
| classification_refs | CPC 3.0:22212 Skim milk and whey powder（精确范围参考） |
| covered_products | 脱脂奶粉；乳清粉；酸乳清粉；上述粉体的散装或包装市场形态 |
| excluded_products | 全脂和部分脱脂奶粉；稀奶油粉；乳清蛋白浓缩物或分离物；乳糖粉；酪蛋白粉；婴幼儿配方粉；配制乳品混合物 |
| representative_product | 可销售脱脂奶粉；乳清粉和酸乳清粉为本范围内通过必需 powder_type 限定信息识别的变体 |
| production_route | 已声明液态乳品原料接收与调理、浓缩、干燥、后处理、容装或包装，以及前景清洗和废物处理 |
| market_state | 制造工厂门口的干燥可销售粉体，采用已声明散装或包装形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供适用于已声明食品、饲料或配料用途的干燥脱脂奶粉、乳清粉或酸乳清粉 |
| How much | 制造工厂门口 1 kg 净可销售粉体 |
| How well | 已声明粉体类型和路线；组成和水分经适用 Codex 身份要求或披露的更严格市场规范验证；污染、不合格和未作为产品放行的返工质量不得计入可销售产出 |
| How long or cycle | 工厂门口完成的一个生产批次；不计入贮存寿命或下游使用时长收益 |
| reference_flow_link | packaged_reference_powder |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净可销售粉体 |
| 参考产品流 | 脱脂奶粉 `bf850eca-76f2-400d-9cfa-b62c10d64c0a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | powder_type; liquid_feed_type; skim_milk_or_whey_origin; whey_acidity_or_modification; dry_matter_content; moisture_content; milkfat_content; milk_protein_content; packaging_format; geography; technology; temporal_scope |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。所选 Tiangong 产品流是脱脂奶粉代表身份；数据集不得在产品说明或限定信息中掩盖乳清或酸乳清路线。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 净可销售参考粉体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 确定净粉体质量时排除包装、不合格粉体、留样、未作为产品放行的返工，以及产品规范不接受的水分或组成修正。 |
| `dry_matter_basis` | 分配所用产品、原料和乳品共产品 | Mass 及实测干物质分数 | kg 干物质和 kg 湿质量 | 分别保留湿质量和干物质分数。有代表性批次或生产期实测值时不得以名义固形物替代。 |
| `energy_preservation` | 电力、热能和燃料记录 | Energy 或燃料特定属性 | kWh、MJ 或燃料物理单位 | 保留计量单位和换算因子。分别报告电力和热能；无实测吞吐量和收率时，不得把欧盟 BAT 装置指标换算为产品归一化默认值。 |
| `water_balance` | 工艺用水、冷凝水、清洗水和废水 | Volume 或 Mass | m3 或 kg | 将总取水、回收或复用冷凝水、循环水和最终废水排放分别计量，以防重复计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 当前景奶粉生产场址接收已声明液态乳品原料时开始；仅当原料乳分离由报告场址实施时才纳入。 |
| starting_condition_role | 与外供脱脂乳、乳清、酸乳清或原料乳上游数据集连接的门到门前景起始条件。 |
| product_classification_scope | 语义产品边界内的脱脂奶粉、乳清粉和酸乳清粉；分类编码仅作为映射上下文。 |
| recursive_input_rule | 购入作为配料的脱脂奶粉或乳清粉作为具有自身数据集的上游产品投入记录；除非场内确有再加工，不得在本 PCR 中递归生产。 |
| upstream_dataset_requirement | 每种外供液态乳品原料及其他材料或能源投入都需要具有地理和时间代表性的上游数据集；使用代理时必须披露。 |
| disclosure | 声明原料类型与来源、分离位于前景还是上游、粉体类型、乳清酸度或改性、分配层级、已纳入共享公用工程、处理位置、包装形式和被排除的下游阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground_powder_manufacturing | 纳入原料接收与调理、浓缩、干燥与粉体后处理、容装或包装、清洗，以及由报告场址运营或为其运营的前景废物或排放处理。 | `eda-dairy-pefcr-2025`; `eu-fdm-bat-2019` |
| `boundary_upstream_feed` | supplied_liquid_dairy_feed | 通过明确的上游数据集建模外供脱脂乳、乳清、酸乳清或原料乳的生产与运输；不得在前景运行中再次计入这些负荷。 | `eda-dairy-pefcr-2025` |
| `boundary_route_specificity` | whey_and_acid_whey_routes | 识别原料属于乳清还是酸乳清，仅在实际发生时纳入澄清、中和、脱盐、结晶或膜处理等已声明路线特定操作。 | `codex-cxs-289-1995` |
| `boundary_downstream_exclusion` | factory_gate_dataset | 排除已声明工厂门口后的配送、零售、消费者制备、使用和生命周期末端；研究目标明确扩展边界并单独报告时除外。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_receipt_and_conditioning` | 液态原料接收与调理 | required | 始终纳入；仅在接收原料乳时启用分离 | 前景原料验收、贮存、过滤、分离和路线特定调理 | 已接收的已声明液态原料 kg |
| `concentration_and_drying` | 浓缩、干燥和粉体后处理 | required | 始终纳入；仅在实际实施时纳入路线特定膜处理、脱盐、中和或结晶 | 前景除水、干燥、冷却、筛分和粉体回收 | 可包装粉体中间体 kg |
| `packaging_and_storage` | 容装、包装和工厂门口贮存 | required | 不使用零售或工业包装时，将散装容装作为包装形式 | 前景最终产品质量、包装和仓库操作 | 1 kg 净可销售参考粉体 |
| `cleaning_and_wastewater` | 清洗和前景废水管理 | required | 通过直接计量或已披露分配规则纳入共享系统 | 前景清洗投入及废水或污泥产出 | 分配给已声明生产批次的服务 |

### 过程：液态原料接收与调理（`feed_receipt_and_conditioning`）

#### 输入

##### 产品流

###### 已接收液态乳品原料（`liquid_dairy_feed`）

记录已声明粉体路线中跨越场址边界的已接收脱脂乳、乳清、酸乳清或原料乳实测质量。数值来自供应商交付、验收、组成和来源记录。

- 选定流：已声明液态脱脂乳、乳清、酸乳清或原料乳产品流
- 流属性/单位：Mass / kg
- 数量规则：扣除拒收交付和退回物料后的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_composition`
- 来源：`codex-cxs-207-1999`; `codex-cxs-289-1995`

###### 调理用电（`conditioning_electricity`）

记录本过程内卸料、冷却、贮存、泵送、过滤，以及分离或路线特定调理的计量或分配电量。

- 选定流：Electricity，已声明供电组合
- 流属性/单位：Energy / kWh
- 数量规则：实测电量；或依据已记录运行时间及额定或分表负荷分配共享电表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_utilities`
- 来源：`eda-dairy-pefcr-2025`

##### 废物流

###### 拒收原料与调理残余物（`conditioning_rejects`）

按去向记录拒收液态原料、过滤残渣和其他调理损失，不得从公用工程记录中扣除。

- 选定流：乳品加工残余物或拒收原料废物流
- 流属性/单位：Mass / kg
- 数量规则：送往已声明去向的实测或按质量平衡计算的残余物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed_and_composition`
- 来源：

##### 基本流

###### 制冷剂向空气泄漏（`conditioning_refrigerant_loss`）

当含制冷剂设备位于前景内时，记录归属于原料冷却和冷藏的制冷剂泄漏。

- 选定流：已声明制冷剂向空气排放流
- 流属性/单位：Mass / kg
- 数量规则：依据维修记录或库存平衡确定并分配给生产批次的制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_processing_utilities`
- 来源：

#### 输出

##### 产品流

###### 已调理液态原料（`conditioned_feed`）

记录转移到浓缩和干燥的已调理液态原料质量与干物质。在场内分离的稀奶油或其他共产品应单独记录。

- 选定流：已调理脱脂乳、乳清或酸乳清中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及匹配的组成样品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_composition`
- 来源：`codex-cxs-207-1999`; `codex-cxs-289-1995`

###### 分离乳品共产品（`separated_dairy_coproduct`）

仅当分离或标准化发生在前景内时，记录稀奶油或其他可销售乳品共产品。

- 选定流：已声明稀奶油或乳品共产品
- 流属性/单位：Mass / kg
- 数量规则：实测共产品质量及实测干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_composition`
- 来源：`eda-dairy-pefcr-2025`

##### 废物流

##### 基本流

### 过程：浓缩、干燥和粉体后处理（`concentration_and_drying`）

#### 输入

##### 产品流

###### 已调理液态原料投入（`conditioned_feed_input`）

将实测已调理原料及其干物质转入蒸发、膜浓缩、结晶或干燥，且不改变上游负荷。

- 选定流：已调理脱脂乳、乳清或酸乳清中间体
- 流属性/单位：Mass / kg
- 数量规则：与 `conditioned_feed` 匹配的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_composition`
- 来源：`codex-cxs-207-1999`; `codex-cxs-289-1995`

###### 浓缩与干燥热能（`drying_thermal_energy`）

记录供浓缩与干燥使用的蒸汽、热量或燃料，与电力分开并以实测单位报告。

- 选定流：已声明蒸汽、热量或燃料产品流
- 流属性/单位：Energy / MJ
- 数量规则：实测热能；或使用已披露实测或供应商因子换算的燃料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_utilities`
- 来源：`eu-fdm-bat-2019`

###### 工艺用电（`drying_electricity`）

记录前景内泵、蒸发器、膜系统、喷雾或其他干燥器、流化床、风机、冷却、筛分、输送及粉体回收用电。

- 选定流：Electricity，已声明供电组合
- 流属性/单位：Energy / kWh
- 数量规则：实测电量或已记录的共享电表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_utilities`
- 来源：`eda-dairy-pefcr-2025`; `eu-fdm-bat-2019`

###### 工艺用水和路线特定材料（`drying_process_materials`）

将工艺用水，以及实际使用的中和、脱盐、膜清洗、乳糖晶种或抗结材料，按物质身份分别作为实测投入记录。

- 选定流：已声明工艺用水或路线特定材料产品流
- 流属性/单位：Mass / kg
- 数量规则：生产批次实测领用量；不存在该操作或材料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_utilities`
- 来源：`codex-cxs-289-1995`

##### 废物流

##### 基本流

###### 干燥空气投入（`drying_air_input`）

仅在目标数据模型要求时将干燥空气记录为基本流投入；气流未计量时不得虚构质量。

- 选定流：根据目标模型选择技术系统或环境中的 Air
- 流属性/单位：Volume / m3
- 数量规则：按已声明条件修正的实测干空气体积；否则报告为未解决而非估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_utilities`
- 来源：`eu-fdm-bat-2019`

#### 输出

##### 产品流

###### 可包装粉体中间体（`packable_powder`）

记录经冷却和后处理后可接受进入散装容装或包装的粉体，并记录实测水分和适用组成结果。

- 选定流：已声明脱脂奶粉、乳清粉或酸乳清粉中间体
- 流属性/单位：Mass / kg
- 数量规则：最终包装前实测合格粉体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_powder`
- 来源：`codex-cxs-207-1999`; `codex-cxs-289-1995`

###### 回收冷凝水（`recovered_condensate`）

将回收复用或作为产品流输出的冷凝水与总工艺取水分别记录。

- 选定流：回收水或冷凝水产品流
- 流属性/单位：Volume / m3
- 数量规则：按复用或输出去向计量的回收冷凝水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processing_utilities`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 不合格粉体和未回收细粉（`powder_rejects`）

按实际复用、返工、饲料化、处理或处置去向记录未计入可销售产出的粉体和未回收细粉。

- 选定流：乳品粉体残余物或不合格粉体废物流
- 流属性/单位：Mass / kg
- 数量规则：实测不合格粉体加上质量平衡计算的未回收细粉
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finished_powder`
- 来源：

##### 基本流

###### 有组织干燥粉尘向空气排放（`dryer_dust_to_air`）

记录已声明废气控制系统后的实测残余粉尘排放；返回产品或返工的回收粉体不是基本流排放。

- 选定流：Particulate matter 或 Dust 向空气排放流
- 流属性/单位：Mass / kg
- 数量规则：实测浓度乘以生产期间修正干气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-fdm-bat-2019`

### 过程：容装、包装和工厂门口贮存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 转入包装的粉体（`powder_for_packaging`）

转移可包装粉体时不得重复计入制造负荷。

- 选定流：已声明可包装粉体中间体
- 流属性/单位：Mass / kg
- 数量规则：与 `packable_powder` 匹配的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_powder`
- 来源：

###### 初级容装和包装（`primary_packaging`）

按材料和质量记录每种散装内衬、袋、纸箱、托盘膜或其他初级容装材料。1 kg 净产品参考流不包括包装质量。

- 选定流：产品特定包装材料流
- 流属性/单位：Mass / kg
- 数量规则：采购或领用包装质量与灌装单元及库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`eda-dairy-pefcr-2025`

###### 包装和仓库用电（`packaging_electricity`）

记录灌装、封口、输送、码垛和边界内仓库调节用电。

- 选定流：Electricity，已声明供电组合
- 流属性/单位：Energy / kWh
- 数量规则：实测电量或已记录的共享电表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可销售脱脂奶粉或乳清粉（`packaged_reference_powder`）

这是定量参考产出。记录工厂门口合格净粉体质量，不包括容器和包装质量。

- 选定流：脱脂奶粉 `bf850eca-76f2-400d-9cfa-b62c10d64c0a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据灌装单元或散装发运记录计算并经批次质量平衡验证的 1 kg 净合格可销售粉体
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可销售参考粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`codex-cxs-207-1999`; `codex-cxs-289-1995`

##### 废物流

###### 包装损失（`packaging_waste`）

按材料和实际去向记录损坏、裁切或拒收包装。

- 选定流：材料特定包装废物流
- 流属性/单位：Mass / kg
- 数量规则：实测包装废物；或期初库存加收货减期末库存再减发运单元所含包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：

##### 基本流

### 过程：清洗和前景废水管理（`cleaning_and_wastewater`）

#### 输入

##### 产品流

###### 清洗水（`cleaning_water`）

分别记录归属于所覆盖过程的就地清洗及其他卫生操作的新鲜和回用清洗水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：计量取水减去单独计量的非清洗用水；回用水作为不同内部流保留
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 清洗剂（`cleaning_agents`）

按产品质量记录每种酸、碱、消毒剂和其他清洗剂，适用时同时记录活性浓度。

- 选定流：产品特定清洗剂流
- 流属性/单位：Mass / kg
- 数量规则：归属于所覆盖过程的实测领用量或采购与库存平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处理废水（`process_wastewater`）

记录转移至场内或场外处理处的废水体积和污染物测量值。不得把回收冷凝水或回用水加入最终排放量。

- 选定流：乳品加工废水
- 流属性/单位：Volume / m3
- 数量规则：分配给所覆盖过程并与浓度或负荷样品匹配的计量废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 废水处理污泥（`wastewater_sludge`）

当处理位于前景内时，按实测湿质量、干物质和去向记录所分配的处理污泥。

- 选定流：Wastewater treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：按所覆盖废水负荷分配的实测污泥质量和干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：

##### 基本流

###### 处理水排放（`treated_water_discharge`）

仅当处理和排放位于前景内时，记录最终排放水及实测污染物负荷。

- 选定流：向受纳环境排放的 Water 及实测污染物流
- 流属性/单位：水为 Volume / m3，各污染物为 Mass / kg
- 数量规则：实测排放体积乘以匹配污染物浓度，并扣除明确建模的内部循环水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已声明生产批次及每 1 kg 净可销售粉体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_assignment` | product_specific_processes_and_inputs | 首先将已计量过程能源、材料、包装、废物和排放直接归属到引起它们的产品和阶段。应用分配前应细分独立计量的过程。 | `eda-dairy-pefcr-2025`; `eu-pef-method-2021` |
| `allocation_dry_matter` | joint_dairy_products | 联合乳品操作无法直接归属时，按各共产品实测干物质产出比例分配原乳品原料、运输负荷和联合加工负荷：share_i = DM_i × Q_i / sum(DM_j × Q_j)。 | `eda-dairy-pefcr-2025` |
| `allocation_factory_remainder` | whole_factory_or_shared_utility_data | 先归属可获得的产品特定数据并从已验证工厂总量中扣除，再仅按实测干物质产出在所覆盖共产品间分配余量。可直接归属的包装和配料不得纳入该余量。 | `eda-dairy-pefcr-2025` |
| `allocation_waste_and_rework` | rejected_product_rework_and_waste | 内部返工物料保留在质量平衡内，不作为第二个产品重复计算。按实际去向记录输出残余物和废物；除非明确建模并披露下游替代情景和质量等效性，否则不得主张避免负荷。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_and_composition` | `feed_receipt_and_conditioning` | 液态原料、已调理原料和乳品共产品 | 交付、转移计量、实验室和拒收记录 | timestamp; supplier_or_upstream_process; feed_type; wet_mass; dry_matter; fat; protein; moisture; acidity_or_pH; accepted_or_rejected; co_product_mass | 校准地磅、罐液位或质量流量计，并与代表性实验室样品和批次身份匹配 | kg; mass fraction; pH | 每次交付或转移及每个代表性批次样品 | 至少一个有代表性运行年度，并具有生产期层级追溯 | 数据集内所有场址和生产线 | 按路线和批次汇总接收质量；质量加权组成；核对转移、拒收和共产品 | 校准、采样方法、实验室结果、供应商记录和批次核对 |
| `cp_processing_utilities` | `concentration_and_drying` | 电力、热量、燃料、水、冷凝水和路线特定材料 | 计量表、账单、批次领用、运行小时和库存记录 | meter_start; meter_end; fuel_or_steam_quantity; energy_unit; conversion_factor; water_withdrawal; condensate_reuse; material_issue; line; operating_time | 优先使用分表；否则使用运行时间及实测或额定负荷，从完整场址总表进行已记录分配 | kWh; MJ; kg; m3 | 连续或按批次，按月汇总 | 至少一个有代表性运行年度及所有纳入生产期 | 所有纳入粉体生产线和共享公用工程 | 按能源载体和过程求和；保留原单位；分配前将分表总量与场址总量核对 | 计量表身份、校准、账单、库存核对和分配工作簿 |
| `cp_finished_powder` | `concentration_and_drying` | 可包装粉体、不合格粉体、细粉和组成 | 干燥器、料仓、实验室、返工和废物记录 | lot_id; powder_type; gross_powder_mass; accepted_mass; rejected_mass; recovered_fines; moisture; dry_matter; fat; protein; whey_pH_or_acidity | 校准料仓或包装秤，并与批次实验室放行和返工记录匹配 | kg; mass fraction; pH | 每个生产批次 | 代表期间所有批次 | 所有纳入干燥和后处理生产线 | 分别汇总合格和不合格质量；质量加权组成；核对原料干物质与粉体、共产品、残余物、废水及实测损失 | 秤校准、放行证书、采样计划和批次质量平衡签字确认 |
| `cp_air_emissions` | `concentration_and_drying` | 有组织干燥粉尘 | 烟道测试或连续监测及气体流量记录 | source_id; control_device; concentration; dry_gas_flow; reference_conditions; operating_time; production_lot | 适用标准烟道方法，并匹配气体流量和生产期间 | mg/Nm3; Nm3; kg | 至少达到适用法规频次；欧盟 BAT 比较要求乳品干燥至少每年监测 | 报告期间有代表性的运行条件 | 每个纳入干燥排放点 | 将浓度和修正气体体积换算为质量；除非粉体在排放点前可证明返回，否则不得扣除 | 测试报告、方法、认可、参考条件和运行状态记录 |
| `cp_packaging_and_dispatch` | `packaging_and_storage` | 净产品、包装、包装废物和发运 | 灌装秤、物料清单、库存、废物和发运记录 | lot_id; filled_units; net_mass_per_unit; bulk_dispatch_mass; packaging_material; packaging_issue; packaging_stock_change; packaging_waste; dispatch_status | 校准灌装或散装秤并进行库存核对 | kg | 每个批次和每次发运 | 代表期间所有合格批次 | 所有纳入包装线和散装料仓 | 净产品等于合格灌装或散装发运粉体且不含包装；包装领用与容装量和废物质量核对 | 秤校准、物料清单、发运记录和库存核对 |
| `cp_cleaning_and_wastewater` | `cleaning_and_wastewater` | 清洗水、清洗剂、废水、污泥和排放 | CIP 配方、流量计、化学品领用、废水计量、样品和污泥记录 | cleaning_event; process_line; water_withdrawal; reused_water; chemical_product; chemical_mass; wastewater_volume; pollutant_concentration; sludge_mass; sludge_dry_matter; destination | 事件或区域计量表，并与 CIP 日志和代表性废水样品匹配 | m3; kg; mg/L | 每次清洗事件或连续计量，按月汇总 | 至少一个有代表性运行年度 | 所有纳入生产线和共享处理系统 | 分别汇总总用水和回用水；污染物负荷等于匹配体积乘以浓度；直接归属后分配共享处理 | 计量表校准、CIP 日志、化学品库存平衡、样品交接和处理记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | 净可销售粉体 | 汇总合格净灌装单元质量和合格散装发运质量；排除包装、不合格批次、未放行返工、留样和未转移至已声明工厂门口的库存。 | filled_units; net_mass_per_unit; bulk_dispatch_mass; dispatch_status; rejected_mass; retained_samples | kg 净可销售粉体和归一化的 1 kg 参考流 | `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `calc_dry_matter_allocation` | 联合乳品共产品 | 每个联合操作使用分母中所有共产品匹配的湿质量和干物质实测值计算 AFi = DMi × Qi / sum(DMj × Qj)。 | co_product_mass; dry_matter; joint_process_total | 产品特定分配因子和已分配数量 | `eda-dairy-pefcr-2025` |
| `calc_dryer_dust` | 有组织干燥粉尘 | 排放粉尘质量等于实测浓度乘以匹配运行期间的修正干气体积，明确进行单位换算，且不得扣除已经排放的物料。 | concentration; dry_gas_flow; operating_time; reference_conditions | kg 粉尘排放及 kg/kg 参考粉体 | `eu-fdm-bat-2019` |
| `calc_wastewater_load` | 经处理或未经处理的废水排放 | 污染物负荷等于匹配排放体积乘以污染物浓度；回用水和回收冷凝水不计入最终排放体积。 | wastewater_volume; pollutant_concentration; reused_water; condensate_reuse | m3 排放和每 kg 参考粉体的 kg 污染物 | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_and_route` | 所有数据包 | 声明粉体类型、液态原料类型与来源、乳清酸度或改性、过程技术、包装形式和准确前景起始条件。 | 数据集元数据、过程图、供应商或上游数据集引用和批次记录 |
| `dqr_temporal_coverage` | 前景活动数据 | 当季节性和产品组合影响共享公用工程时，至少采用一个有代表性运行年度；保留批次或生产期记录，并说明停机、异常运行和缺失期间。 | 带日期的计量、生产、实验室、维护和发运记录 |
| `dqr_mass_balance` | 原料、共产品、粉体、残余物和废水 | 在可获得的最细实测过程层级闭合湿质量与干物质平衡；调查并披露无法解释的差异，不得通过改变可销售产品量强制闭合。 | 按批次、生产期和年度总量签字确认的湿质量与干物质核对 |
| `dqr_composition` | 可销售粉体 | 脱脂奶粉应验证乳脂最大 1.5% m/m、水最大 5% m/m、非脂乳固体中乳蛋白最小 34% m/m，除非采用更严格的已声明规范。乳清粉和酸乳清粉应保留适用 Codex 组成和酸度结果。 | 实验室放行结果和适用产品规范；`codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `dqr_bat_comparison` | 粉体主导乳品装置 QA | 粉体至少占产量 80% 时，保留年度原料吞吐量、总能耗和废水排放，以原始基准比较欧盟 BAT 指标 0.2-0.5 MWh/t 原料和 1.2-2.7 m3/t 原料。超出区间触发评审，而非自动替换或判定失败。 | 年度场址平衡和 `eu-fdm-bat-2019` |
| `dqr_data_gaps` | 缺失或共享前景数据 | 识别每项代理、共享计量分配、未核验 UUID 和默认干物质值；说明受影响数量和敏感性，并优先以直接记录替换。 | 数据缺口清单、分配工作簿、敏感性结果和评审签字确认 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | 要求恰好 1 kg 净可销售粉体，并包含 Mass 流属性、Units of mass 单位组、kg 参考单位、所选产品流 UUID 及所有必需限定信息。 | `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `validate_route_scope` | product_and_process_identity | 未识别脱脂奶粉、乳清粉或酸乳清粉及其液态原料来源的数据包应被拒绝；未经评审范围扩展而纳入被排除的浓缩蛋白、乳糖、酪蛋白、婴幼儿配方或混合产品时也应拒绝。 | `codex-cxs-207-1999`; `codex-cxs-289-1995` |
| `validate_required_processes` | foreground_process_map | 要求包含全部四个过程图条目，并为适用于场址的每个路线特定条件操作和每个清单行提供定量记录，或给出带理由的明确零值。 | `eda-dairy-pefcr-2025`; `eu-fdm-bat-2019` |
| `validate_mass_and_solids_balance` | foreground_inventory | 要求对已接收原料、共产品、可销售粉体、返工、废物、废水固体和实测损失进行湿质量及干物质核对；未解决不平衡属于发现项。 | `eda-dairy-pefcr-2025` |
| `validate_allocation` | shared_and_joint_operations | 要求先直接归属再分配，每个联合共产品均有完整干物质分母，已分配余量与已验证总量核对，并披露分配因子。 | `eda-dairy-pefcr-2025`; `eu-pef-method-2021` |
| `validate_energy_water_and_emissions` | utilities_wastewater_and_drying_air | 要求分开能源载体、总用水和回用水、最终废水排放及适用时的实测干燥粉尘。装置 BAT 指标只在其原始原料基准上比较。 | `eu-fdm-bat-2019` |
| `validate_composition` | released_product | 要求提供适用 Codex 或已声明更严格组成和酸度规范的批次证据；不合格物料不得计入可销售参考产出。 | `codex-cxs-207-1999`; `codex-cxs-289-1995` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定前景粉体制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品和供应链 LCA；其中地理、技术、粉体类型、原料来源、组成、分配方法、包装和时间覆盖具有代表性或经过透明调整 |
| excluded_use | 未加限定地比较脱脂奶粉和乳清路线；替代乳清蛋白浓缩物、乳糖、酪蛋白、婴幼儿配方粉或其他排除产品；用作农场、干酪、酪蛋白、零售、消费者使用或生命周期末端数据集 |
| required_metadata | PCR id 和版本状态；粉体类型；液态原料类型及上游数据集；乳清酸度或改性；地理；场址和技术；参考期间；净产品质量；组成；包装；过程图；分配因子；电力和热源；水和废水边界；排放控制 |
| required_quality_disclosure | 一手数据覆盖；计量与实验室方法；湿质量和干物质平衡；共享数据分配；UUID 缺口；代理数据集；异常运行；BAT 比较基准；重要缺口的不确定性和敏感性 |
| update_trigger | 原料来源或产品组合、粉体路线或技术、组成、分配、包装、能源或水系统、排放控制、法规或 Codex 要求、场址边界或代表期间发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-207-1999` | `standard` | FAO/WHO Codex Alimentarius，CXS 207-1999，Standard for Milk Powders and Cream Powder，修订至 2023 年，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B207-1999%2FCXS_207e.pdf（检索日期 2026-08-10） | 脱脂奶粉身份、范围、原料、组成和放行质量要求 |
| `codex-cxs-289-1995` | `standard` | FAO/WHO Codex Alimentarius，CXS 289-1995，Standard for Whey Powders，修订至 2022 年，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B289-1995%2FCXS_289e.pdf（检索日期 2026-08-10） | 乳清和酸乳清定义、原料来源、允许路线差异、组成、酸度和产品限定 |
| `eda-dairy-pefcr-2025` | `method_factor` | European Dairy Association，PEFCR for Dairy Products，部分修订版，2025 年 2 月，https://eda.euromilk.org/wp-content/uploads/2025/02/PEFCR-DairyProducts_update_final.pdf（检索日期 2026-08-10） | 乳品过程分解、干乳清产品强制企业特定数据、包装数据、直接归属、干物质分配和数据质量规则 |
| `eu-fdm-bat-2019` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-10） | 乳品粉体能耗和废水 QA 指标、多级干燥、水量核算及干燥粉尘监测 |
| `eu-pef-method-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，2022 年勘误，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279（检索日期 2026-08-10） | 生命周期边界、分配层级、数据质量披露和下游用途限制 |
