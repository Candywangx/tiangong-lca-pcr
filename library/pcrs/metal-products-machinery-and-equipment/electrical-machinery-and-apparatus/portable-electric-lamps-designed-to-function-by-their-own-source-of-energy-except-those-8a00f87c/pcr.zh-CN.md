---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-except-those-8a00f87c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 便携式电灯、照明器具、非电气灯具及发光标志

## 1. 范围与适用性

本 PCR 规定下述语义边界内完整照明产品或发光标识产品的前景工厂门数据生产规则。范围包括产品特定材料和部件接收、可选的场内表面处理、组装、最终测试、包装以及制造厂门交付。必须声明具体产品实例；本 PCR 不把所列产品形态视为可互换产品。

使用阶段的电力或燃料、安装、维护、制造厂门后的配送及寿命终止阶段不属于前景边界。外购材料、部件、电力、燃料、水和包装的上游生产仍须通过供应商或背景数据集连接。单独灯或光源的制造、圣诞树灯组、单独分类的 LED 专用灯具、公共露天场所或通行道路照明器具、车辆或自行车用灯以及单独交易的零件均不在本 PCR 范围内。

代表路线是使用外购机械、光学及电气部件组装并进行工厂测试的一件成品电气灯具。表面处理、一次电池、非电气灯具的燃料容器和灯芯，以及发光标志面板均为条件要素。该共同路线避免逐一展开每种产品形态与材料的组合。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-except-those-8a00f87c |
| classification_refs | CPC 3.0: 46531 |
| covered_products | 自备能源的便携式电灯（自行车或机动车辆用灯除外）；电气天花板或墙壁照明器具（公共露天场所或通行道路照明用除外）；电气台灯、书桌灯、床头灯及落地灯；非电气灯具及照明器具；发光标志、发光铭牌及类似成品。 |
| excluded_products | 自行车及机动车辆用灯；公共露天场所或通行道路照明器具；圣诞树灯组；单独分类的 LED 专用灯具；单独交易的灯或光源；单独交易的零件。 |
| representative_product | 由机械底架、光学部件、布线、控制装置和已声明光源模组组装，并经工厂测试和销售包装的一件完整室内电气灯具。 |
| production_route | 外购部件接收；条件适用的底架表面处理；机械、电气、燃料系统或标志组装；性能与安全测试；包装；工厂门交付。 |
| market_state | 制造厂门处完整、已包装的成品；光源、控制装置、电池、燃料容器、灯芯、安装件和标志面板的包含或排除情况必须与实际销售配置一致并予以声明。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可按已声明预期用途运行的完整照明产品或发光标识产品。 |
| How much | 1 kg 成品。 |
| How well | 符合已声明的产品子类型、出射光通量或发光可视面积、额定电气或燃料系统特性、随附部件、安全与性能测试准则及包装状态。 |
| How long or cycle | 一个直至制造厂门的工厂生产周期；进行任何下游功能比较时，必须另行声明指定使用寿命和可更换部件假设。 |
| reference_flow_link | `final_testing_and_packaging` 输出中恰好 1 kg 验收合格的已包装成品；相应件数和包装质量为必需限定信息。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 本 PCR 范围内的已包装照明成品或发光标识成品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；电气或非电气设计；安装或便携形态；型号及物料清单版本；出射光通量或发光可视面积；适用时的额定功率、电压及频率；光源技术及是否随附/可更换；是否随附控制装置；适用时的电池化学体系、容量及是否随附；适用时的燃料类型和容器容量；指定使用寿命；产品净质量；包装后毛质量；生产场址及期间；包装配置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

以质量计的参考数量是工厂生产核算基准，并不表示不同产品子类型之间功能等效。比较性照明研究必须按相容的光输出、使用寿命、运行模式和所提供功能归一化。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化到 1 kg 采用已声明销售配置的合格完整产品。按每个型号或产量加权型号组记录件数、产品净质量和包装后毛质量。 |
| `mu_mass_bom` | 材料、部件、中间产品及废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据经核验的部件质量把件数换算为供货状态干质量；当水分或涂层固体基准影响质量平衡时予以保留。 |
| `mu_electricity` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量电能，并按 1 kWh = 3.6 MJ 换算；披露电压等级、电网地域和分配方法。 |
| `mu_gas_volume` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量气体体积的温度、压力、干湿基准及供应商换算；不得与其他燃料合并。 |
| `mu_water_mass` | 工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只有在记录密度且时间汇总与表面处理批次一致时，才可把体积表读数换算为质量。 |
| `mu_internal_transfer` | 前景中间产品 | Mass | kg | 每项内部中间产品的输出质量必须等于转入下一过程的数量加上分别记录的损失、库存变化或返工。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购底架、光学、电气、燃料系统、标志面板、表面处理、能源、水及包装投入，以申报产品实际采用的供货状态到达报告设施。 |
| starting_condition_role | 前景从外购投入接收开始，仅涵盖由报告制造商控制的转化、组装、测试、包装及损失。 |
| product_classification_scope | 本 PCR 语义范围内一项已声明成品实例；相邻 CPC 照明产品及单独交易的零件不在范围内。 |
| recursive_input_rule | 若购买并纳入本 PCR 同类完整产品，则将其作为一项独立产品投入记录并连接上游数据集，不在本前景数据集中递归展开其制造。 |
| upstream_dataset_requirement | 跨越边界的每项外购材料、部件、能源、水流及包装均须连接与物质或产品身份、地域、技术及交付状态相匹配的上游数据集。 |
| disclosure | 声明外包与场内作业、随附部件、涂层路线、测试程序、不合格品处理、包装状态、截断、数据缺口及与其他产品共用的过程。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_gate_boundary` | 所有前景过程 | 纳入制造商控制的接收到工厂门活动：适用的表面处理、组装、工厂测试、包装、返工、不合格品及场内废物产生。排除安装、下游配送、使用、维护和寿命终止。 | `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012` |
| `sb_component_completeness` | 产品物料清单 | 纳入随产品交付或已声明销售配置正常工作所需的所有部件，并明确说明是否随附光源、控制装置、电池、安装件、燃料容器、灯芯或标志面板。 | `pep-ecopassport-psr-0014-2023`, `us-doe-luminaires-definition` |
| `sb_upstream_connection` | 外购投入 | 在相连背景数据集中建模上游原材料、部件、能源、水及包装生产；不得把这些上游过程重复计入前景制造。 | `us-doe-led-lca-part2-2012` |
| `sb_variant_condition` | 条件路线 | 只实例化已声明产品实际存在的行和过程。对于确实不存在的条件行标记 `not_applicable`；不得以其他材料、电池化学体系、燃料或部件替代。 | `un-cpc-3-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `surface_finishing` | 底架预处理和粉末涂装 | `conditional` | 报告设施控制金属底架预处理或粉末涂装时纳入。 | 前景表面处理 | 转入组装的涂装底架 kg |
| `product_assembly` | 机械、光学、电气、燃料系统或标志组装 | `required` | 纳入实际组装作业，并只保留已声明产品中存在的子类型特定部件行。 | 前景组装 | 合格未包装组件 |
| `final_testing_and_packaging` | 最终测试、包装及工厂门交付 | `required` | 每项申报产品均纳入验收测试、返工/不合格品处置、主要销售包装及交付。 | 前景测试与包装 | 1 kg 合格已包装成品 |

### 过程：底架预处理和粉末涂装（`surface_finishing`）

#### 输入

##### 产品流

###### 未涂装金属底架（`uncoated_metal_chassis`）

记录进入场内预处理或涂装的一项产品特定金属底架。

- 选定流：未涂装金属照明产品底架
- 流属性/单位：Mass / kg
- 数量规则：称量或按 BOM 计算进入表面处理线的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_materials`
- 来源：`pep-ecopassport-psr-0014-2023`

###### 热固性粉末涂料（`powder_coating_material`）

记录所消耗的具体粉末涂料配方；不得与液体涂料或预处理化学品合并。

- 选定流：热固性聚酯粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收货量减期末库存和分别回收的粉末
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finish_materials`
- 来源：

###### 碱性预处理化学品（`finish_sodium_hydroxide`）

仅在金属预处理槽实际投加氢氧化钠时纳入。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放到表面处理线的供货状态氢氧化钠产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_materials`
- 来源：

###### 表面处理用水（`finish_process_water`）

记录供应给本过程内预处理、漂洗或喷房清洁的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入表面处理过程的计量或槽罐平衡用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_materials`
- 来源：

###### 表面处理电力（`finish_electricity`）

记录预处理泵、通风、粉末喷涂和固化设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：分表计量电力或记录明确的设备运行时间分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_energy`
- 来源：

###### 固化用天然气（`finish_natural_gas`）

仅在场内固化炉燃烧气态天然气时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配给已声明表面处理批次的计量天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 涂装底架（`coated_chassis`）

记录转入组装的一项产品特定涂装底架。

- 选定流：粉末涂装金属照明产品底架
- 流属性/单位：Mass / kg
- 数量规则：转入 `product_assembly` 的合格涂装底架质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finish_outputs`
- 来源：

##### 废物流

###### 预处理废水（`pretreatment_wastewater`）

记录送往实际场内或场外处理路线的含水金属预处理排水。

- 选定流：金属预处理废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或槽罐平衡量，不含清洁雨水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_outputs`
- 来源：

###### 废粉末涂料（`spent_coating_powder`）

记录离开过程且未回收的热固性粉末涂料废物。

- 选定流：废热固性聚酯粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：称量送往已记录废物路线的收集粉末
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_outputs`
- 来源：

##### 基本流

###### 固化产生的化石二氧化碳（`finish_fossil_co2`）

仅对场内天然气燃烧纳入直接化石二氧化碳；本行不含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `calc_fossil_co2`，由分配后的天然气量、供应商碳因子及记录的氧化因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finish_energy`
- 来源：

### 过程：机械、光学、电气、燃料系统或标志组装（`product_assembly`）

#### 输入

##### 产品流

###### 进入组装的未涂装底架（`uncoated_chassis_for_assembly`）

已声明产品未采用场内表面处理过程时使用本行。

- 选定流：可直接组装的未涂装金属照明产品底架
- 流属性/单位：Mass / kg
- 数量规则：发往组装的称量质量或 BOM 计算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`pep-ecopassport-psr-0014-2023`

###### 进入组装的涂装底架（`coated_chassis_for_assembly`）

仅在 `surface_finishing` 产出涂装底架时使用本行。

- 选定流：可直接组装的粉末涂装金属照明产品底架
- 流属性/单位：Mass / kg
- 数量规则：由 `coated_chassis` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 玻璃光学部件（`glass_optical_component`）

产品随附时，纳入产品特定的玻璃透镜、扩散罩、灯罩或灯罩筒。

- 选定流：成形钠钙玻璃光学部件
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`us-doe-luminaires-definition`, `us-doe-led-lca-part2-2012`

###### 聚碳酸酯光学部件（`polycarbonate_optical_component`）

纳入实际随附的一项聚碳酸酯透镜或扩散罩；不得与其他聚合物合并。

- 选定流：注塑聚碳酸酯光学部件
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`us-doe-luminaires-definition`

###### 钢制安装件（`steel_mounting_component`）

纳入随已声明成品交付的钢制支架或安装板。

- 选定流：镀锌钢安装支架
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`us-doe-luminaires-definition`

###### 铜线（`copper_wire`）

纳入电气产品中裁切并安装的绝缘铜线。

- 选定流：PVC 绝缘铜线
- 流属性/单位：Mass / kg
- 数量规则：发料长度乘以经核验的单位长度质量，并扣除已记录边角料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`us-doe-luminaires-definition`

###### LED 模组（`led_module`）

仅在已声明产品随附 LED 模组时纳入。

- 选定流：LED 模组
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测模组质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012`

###### 电子控制装置（`electronic_control_gear`）

纳入随产品交付的具体驱动器、镇流器或控制装置。

- 选定流：灯具电子控制装置
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测控制装置质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`pep-ecopassport-psr-0014-2023`, `us-doe-luminaires-definition`

###### 一次电池（`primary_battery`）

仅在便携式电灯按销售配置随附该电池时，纳入一种已声明电池化学体系。

- 选定流：碱性锰一次电池
- 流属性/单位：Mass / kg
- 数量规则：随附电池数量乘以实测销售状态电池质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 燃料容器（`fuel_reservoir`）

非电气灯具随附液体燃料容器时纳入。

- 选定流：钢制液体燃料灯容器
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测空容器质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 灯芯（`wick`）

仅在非电气灯具随附灯芯时纳入。

- 选定流：编织棉灯芯
- 流属性/单位：Mass / kg
- 数量规则：随附灯芯数量或长度乘以经核验质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 发光标志面板（`illuminated_sign_face_panel`）

发光标志产品随附时，纳入一项产品特定的标志或铭牌面板。

- 选定流：印刷亚克力发光标志面板
- 流属性/单位：Mass / kg
- 数量规则：经核验的 BOM 数量乘以实测面板质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 环氧胶黏剂（`epoxy_adhesive`）

记录组装中消耗的供货状态双组分环氧胶黏剂。

- 选定流：双组分环氧胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收货量减期末库存和分别称量的未固化废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`us-doe-led-lca-part2-2012`

###### 无铅焊膏（`solder_paste`）

仅在前景控制范围内进行焊接时纳入。

- 选定流：锡银铜无铅焊膏
- 流属性/单位：Mass / kg
- 数量规则：发放焊膏质量减退回可用焊膏，并分配到合格组件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`us-doe-led-lca-part2-2012`

###### 组装电力（`assembly_electricity`）

记录组装工具、焊接、局部抽排及组装线辅助设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：分表计量电力或按有记录的运行时间分配给已声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已组装未包装产品（`assembled_unpacked_product`）

记录转入最终测试且尚未采用销售包装的每件合格组装产品。

- 选定流：已组装未包装照明产品
- 流属性/单位：Mass / kg
- 数量规则：合格组件数量乘以实测未包装产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_outputs`
- 来源：

##### 废物流

###### 焊渣（`solder_dross`）

记录离开焊接作业的氧化无铅焊渣。

- 选定流：锡银铜焊渣
- 流属性/单位：Mass / kg
- 数量规则：称量送往已记录回收或处理路线的焊渣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_outputs`
- 来源：

###### 不合格电子组件（`rejected_electronic_assembly`）

仅在失效的已装电子照明组件作为废物离开前景控制时记录。

- 选定流：不合格已装配灯具电子组件
- 流属性/单位：Mass / kg
- 数量规则：称量送往已记录处理路线的不合格电子组件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_outputs`
- 来源：

##### 基本流

### 过程：最终测试、包装及工厂门交付（`final_testing_and_packaging`）

#### 输入

##### 产品流

###### 进入测试的已组装产品（`assembled_product_for_test`）

记录从 `product_assembly` 接收的未包装组装产品。

- 选定流：进入最终测试的已组装未包装照明产品
- 流属性/单位：Mass / kg
- 数量规则：由 `assembled_unpacked_product` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_pack_inputs`
- 来源：

###### 测试电力（`testing_electricity`）

记录老化、电气安全、光度、标志照明测试及包装设备的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：测试及包装分表电量，或按测试功率乘持续时间进行有记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_energy`
- 来源：

###### 瓦楞纸箱（`corrugated_board_carton`）

纳入随产品交付的瓦楞纤维纸板箱。

- 选定流：瓦楞纤维纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：纸箱数量乘以经核验的干纸箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_pack_inputs`
- 来源：`pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012`

###### 聚乙烯薄膜袋（`polyethylene_film_bag`）

纳入一只随产品供应、作为主要保护包装的低密度聚乙烯薄膜袋。

- 选定流：低密度聚乙烯保护薄膜袋
- 流属性/单位：Mass / kg
- 数量规则：袋数乘以经核验的薄膜袋质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_pack_inputs`
- 来源：`pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 照明成品（`finished_lighting_product`）

本行为验收测试并包装后的已声明参考产品输出。

- 选定流：本 PCR 范围内的已包装照明成品或发光标识成品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格成品；同时记录相应件数和包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_outputs`
- 来源：`un-cpc-3-structure-2025`

##### 废物流

###### 不合格照明成品（`rejected_finished_product`）

仅当失效完整产品作为废物离开前景控制而非返工时记录。

- 选定流：不合格照明成品
- 流属性/单位：Mass / kg
- 数量规则：称量送往已记录处理路线的失效成品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_outputs`
- 来源：

###### 瓦楞纸箱边角料（`corrugated_board_scrap`）

记录包装环节作为废物离开的瓦楞纤维纸板边角料或损坏纸箱。

- 选定流：瓦楞纤维纸板箱边角料
- 流属性/单位：Mass / kg
- 数量规则：称量送往已记录处理路线的纸箱边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_outputs`
- 来源：

###### 聚乙烯薄膜边角料（`polyethylene_film_scrap`）

记录包装环节作为废物离开的低密度聚乙烯薄膜边角料或不合格袋。

- 选定流：低密度聚乙烯包装薄膜边角料
- 流属性/单位：Mass / kg
- 数量规则：称量送往已记录处理路线的薄膜边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装照明成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_outputs`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | 共用制造线 | 分配前优先采用过程细分、分表计量、工单记录或设备运行时间记录。 | `pep-ecopassport-psr-0014-2023` |
| `al_physical` | 剩余共用投入与输出 | 按引起负荷且有记录的物理驱动量分配未解决的共用前景数量，例如机器时间、涂装表面积、测试时长或质量吞吐量。 | `pep-ecopassport-psr-0014-2023` |
| `al_mass_fallback` | 缺乏更好因果驱动量的共产品 | 只有在无法细分且不存在更具体物理关系时才按输出质量分配；披露所有被分配产品和分配因子。 | `pep-ecopassport-psr-0014-2023` |
| `al_scrap` | 生产废料与回收材料 | 记录废料质量及其实际处理或回收投入，不在前景工厂门内计入避免负荷；替代信用只能进入另行声明的下游模型。 | `us-doe-led-lca-part2-2012` |
| `al_rework` | 返工产品 | 将返工材料和能源保留在前景分子中，参考输出只计最终合格产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finish_materials` | `surface_finishing` | 底架、涂料、氢氧化钠和水投入 | 采购、发料、库存、BOM、称量及水表记录 | 材料身份；批次；期初库存；收货；发料；退料；期末库存；底架数量和质量；水表 | 将库存平衡与表面处理批次及经核验 BOM 对账 | kg | 每批；每月对账 | 连续代表性 12 个月或已声明生产期 | 服务于申报产品的全部表面处理线 | 净消耗量除以合格参考产品质量（kg） | 校准称量/计量记录；库存对账；批次流转单 |
| `cp_finish_energy` | `surface_finishing` | 电力和天然气投入及直接燃烧 CO2 | 能源分表、账单、运行日志和供应商燃料数据 | 表计起止；kWh；m3；基准条件；设备运行时间；产品吞吐量；碳因子；氧化因子 | 分表计量或按有记录的设备运行时间和吞吐量分配 | MJ; m3; kg | 每批或每月计量期 | 与生产分母相同 | 全部表面处理能源和固化设备 | 分配能源除以合格参考产品质量（kg）；另算直接 CO2 | 计量校准；账单对账；供应商燃料规格 |
| `cp_finish_outputs` | `surface_finishing` | 涂装底架及表面处理废物 | 转移数量、称量、排水计量、槽罐和废物联单 | 合格底架数量和质量；排水质量或体积；废粉质量；去向 | 将输出、库存变化和废物与投入质量平衡对账 | kg | 每批及每次废物转移 | 与表面处理投入相同 | 场址控制的全部表面处理输出 | 总输出或废物除以合格参考产品质量（kg） | 转移票据；称量检查；排水计量；废物联单 |
| `cp_assembly_bom` | `product_assembly` | 产品特定组装投入 | 受控 BOM、发退料、部件数量、质量和长度记录 | 型号；BOM 版本；部件身份；数量；单位质量；导线长度和单位长度质量；耗材期初/期末库存 | 用实物样品核验 BOM 并对账发料耗材 | kg | 每次型号变更；每生产批 | 代表性 12 个月或已声明生产期 | 服务于申报产品的全部组装线 | 净部件或耗材质量除以合格参考产品质量（kg） | 批准 BOM；变更控制；校准部件质量；库存对账 |
| `cp_assembly_energy` | `product_assembly` | 组装电力 | 分表和设备运行时间记录 | kWh；计量期；设备功率；运行时间；产线吞吐量 | 分表计量或按有记录运行时间分配 | MJ | 每批或每月 | 与组装输出相同 | 全部组装设备和局部抽排 | 分配电力除以合格组件数 | 计量校准；运行日志；账单对账 |
| `cp_assembly_outputs` | `product_assembly` | 合格组件和组装废物 | 产量、质量、不合格和废物记录 | 合格数量；未包装质量；焊渣质量；不合格组件质量；去向 | 将转移、返工、不合格品和废物与发料投入对账 | kg | 每批及每次废物转移 | 与组装投入相同 | 场址控制的全部组装输出 | 输出或废物除以合格参考产品质量（kg） | 批次流转单；校准称量；不合格日志；废物联单 |
| `cp_test_pack_inputs` | `final_testing_and_packaging` | 已组装产品和包装投入 | 转移数量、包装 BOM、发料及部件质量记录 | 组件数量/质量；纸箱数量/质量；袋数量/质量；包装版本 | 将包装发料与已包装输出及包装边角料对账 | kg | 每批 | 代表性 12 个月或已声明生产期 | 全部最终测试和包装线 | 净投入除以合格已包装产品质量（kg） | 包装 BOM；部件质量检查；发退料记录 |
| `cp_test_energy` | `final_testing_and_packaging` | 测试和包装电力 | 测试日志、分表及设备功率时间记录 | kWh；测试类型；功率；时长；测试件数；包装运行时间 | 分表计量或按功率乘时间计算并与表计对账 | MJ | 每测试批或每月 | 与合格已包装输出相同 | 全部测试设备和包装设备 | 分配电力除以合格已包装产品质量（kg） | 测试系统校准；表计记录；测试日志 |
| `cp_final_outputs` | `final_testing_and_packaging` | 合格参考产品和最终废物 | 验收、包装、称量、不合格及废物记录 | 合格件数；净/毛质量；失效件数/质量；返工；纸箱边角料；薄膜边角料；去向 | 统计合格产品并分别称量每项分类废物流 | item; kg | 每批及每次废物转移 | 代表性 12 个月或已声明生产期 | 已声明产品的全部工厂门输出 | 恰好 1 kg 合格产品作为参考；各废物除以合格产品质量（kg） | 验收报告；称量校准；不合格处置；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_mass` | 计数部件 | 每 kg 参考产品的部件质量 = 净部件数量 × 经核验单位质量 ÷ 合格成品质量（kg） | BOM 数量；单位质量；合格成品质量 | kg 部件/kg 参考产品 |  |
| `calc_stock_consumption` | 涂料、胶黏剂和焊膏 | 消耗质量 = 期初库存 + 收货 − 退料 − 期末库存 − 分别回收的可复用材料 | 库存和发料记录 | kg 消耗量/参考产品 |  |
| `calc_energy_allocation` | 共用设备能源 | 分配能源 = 计量期能源 × 已声明因果分配因子 ÷ 合格成品质量（kg） | 表计读数；运行时间或吞吐量驱动量；合格成品质量 | MJ/kg 参考产品 | `pep-ecopassport-psr-0014-2023` |
| `calc_fossil_co2` | 场内天然气燃烧 | 直接化石 CO2 = 分配后的天然气量 × 有记录的供应商碳因子 × 氧化因子；保留因子单位及基准条件 | 天然气体积；碳因子；氧化因子 | kg 化石 CO2/参考产品 |  |
| `calc_transfer_balance` | 内部中间产品 | 上一过程合格输出 = 下一过程投入 + 分别记录的库存变化 + 返工 + 损失 | 转移和库存记录 | 经对账的 kg 中间产品 |  |
| `calc_final_yield` | 成品与不合格品 | 由测试、返工、不合格及合格件数计算一次及最终合格率；参考输出仍为一件最终合格产品 | 测试和处置数量 | 件数合格率披露及每 kg 合格产品的废品 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 已声明产品 | 固定报告期内的型号/BOM/包装版本及所有参考流限定信息；合并型号时披露产量加权方法。 | 批准规格、BOM、型号清单和产量 |
| `dq_completeness` | 清单 | 对账销售配置中的每项外购部件和耗材、每项能源计量、每项内部转移及每项分类输出；解释零值、排除和缺失行。 | 质量/能源对账及完整性清单 |
| `dq_measurement` | 实测数量 | 使用校准计量器具；无法直接计量时记录设备运行时间估算及其不确定性。 | 校准证书、计量日志及估算记录 |
| `dq_temporal` | 前景数据 | 可得时采用连续代表性 12 个月；否则披露生产期日期、季节性、停机及外推。 | 有日期的生产、能源和废物记录 |
| `dq_supplier_match` | 上游数据集 | 按实际材料、部件、化学体系、地域、技术及交付状态匹配外购流；披露每项代理。 | 供应商规格及数据集映射审查 |
| `dq_conditional_routes` | 类别变体 | 证明每项条件过程或行对已声明产品为何存在或不存在；不得平均不相容的电气、电池、燃料、标志或光学配置。 | 路线声明及签核 BOM 审查 |
| `dq_uuid_status` | Tiangong 身份 | 在完成公开 state-100 身份审计前，将 UUID 空缺行保留为未解决；不得把零件流或技术特定部件提升为成品参考产品。 | manifest 未解决清单及已最终确定的 UUID 搜索回执 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | 参考流 | 核验量化参考为恰好 1 kg 符合型号/BOM/包装版本的合格成品，并已声明件数和包装质量。 | `un-cpc-3-structure-2025` |
| `vr_scope` | 产品身份 | 确认产品在覆盖清单内，且不是车辆/自行车用灯、公共场所/通行道路照明器具、单独光源、圣诞树灯组、单独分类的 LED 专用灯具或零件。 | `un-cpc-3-structure-2025` |
| `vr_component_set` | 销售配置 | 确认随附光源、控制装置、电池、安装件、燃料容器、灯芯、标志面板和包装与实际销售产品一致。 | `pep-ecopassport-psr-0014-2023`, `us-doe-luminaires-definition` |
| `vr_atomic_flows` | 过程清单 | 拒绝合并材料、公用工程、燃料、包装、废物或排放的行；每项选定流必须表示一个原子交换。 |  |
| `vr_balance` | 前景过程 | 对账材料投入、内部转移、产品、返工、库存变化和分类废物；发布前调查未解释差异。 |  |
| `vr_energy` | 电力和天然气 | 检查计量期、生产分母、单位换算、电网地域、天然气基准条件和分配驱动量。 |  |
| `vr_conditional` | 条件过程和行 | 对表面处理、LED 模组、控制装置、电池、燃料容器、灯芯、标志面板及每项包装部件给出明确适用性结果。 |  |
| `vr_comparability` | 下游使用 | 拒绝仅按质量进行比较；要求光输出或发光功能、使用寿命、运行模式、产品状态和系统边界相容。 | `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；只有在已声明产品配置和地域匹配时才可作为 `background_dataset` |
| downstream_use | 用于相匹配照明成品或发光标识成品的前景产品足迹构建及下游 process 或 lifecyclemodel 投影 |
| allowed_use | 产品子类型、BOM、随附部件、性能限定、质量、包装、技术、地域及期间与预期用途相符的工厂门建模 |
| excluded_use | 不同产品子类型间的功能比较；对单独光源、零件、另行分类的 LED 专用灯具、公共场所照明、车辆/自行车用灯、使用阶段电力/燃料、安装、维护或寿命终止的无条件替代 |
| required_metadata | canonical PCR id；型号/BOM/包装版本；所有参考流限定信息；生产场址和期间；前景边界；条件路线判断；分配；合格件数；净/毛质量；数据源映射；未解决 UUID 和范围 |
| required_quality_disclosure | 计量器具覆盖；时间和场址代表性；质量/能源对账；供应商数据质量；代理；截断；返工和不合格品处理；背景数据集版本；不确定性及数据缺口 |
| update_trigger | 产品子类型、BOM、光源/控制装置/电池/燃料系统、标志面板、表面处理路线、包装、场址、能源供应、分配、使用寿命声明改变，或累计产品组合变化导致数据集不再具有代表性 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 46531 正式身份、纳入、排除及与相邻照明产品的区分。 |
| `pep-ecopassport-psr-0014-2023` | `standard` | PEP ecopassport，PSR-0014-ed2-EN-2023 07 13，《灯具产品专项规则》。https://register.pep-ecopassport.org/documents（检索日期：2026-09-04） | 电网连接灯具子集定义、参考流限定信息、部件完整性、制造阶段边界和共产品分配。 |
| `us-doe-led-lca-part2-2012` | `official_guidance` | 美国能源部，《LED 照明产品能源与环境影响生命周期评价，第 2 部分：LED 制造与性能》，PNNL-21443，2012 年 6 月。https://www.energy.gov/documents/2012ledlca-pt2pdf-0（检索日期：2026-09-04） | 灯制造边界、原材料和部件、组装/制造能源、包装及性能归一化背景。 |
| `us-doe-luminaires-definition` | `official_guidance` | 美国能源部，《灯具》。https://www.energy.gov/cmei/buildings/luminaires（检索日期：2026-09-04） | 灯具功能定义及机械、光学、电气和电子部件类型。 |
