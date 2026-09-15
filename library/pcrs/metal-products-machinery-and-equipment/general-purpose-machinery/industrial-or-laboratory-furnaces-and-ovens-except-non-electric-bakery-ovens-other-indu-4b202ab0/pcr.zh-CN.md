---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-or-laboratory-furnaces-and-ovens-except-non-electric-bakery-ovens-other-indu-4b202ab0
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 工业或实验室用炉及烘箱（非电热烘焙炉除外）；其他工业或实验室用感应或介电加热设备

## 1. 范围与适用性

本 PCR 适用于工业或实验室用炉、烘箱、窑、干燥器、熔炼炉及其他以过程加热为主要功能的工业或实验室用感应、微波、射频或介电加热设备从摇篮到制造商工厂门的生产。范围包括所声明设备、工厂安装的加热系统、控制装置、隔热层或耐火衬里、随设备交付的辅助装置、工厂验收试验和运输包装。

本 PCR 不包括非电热烘焙炉、家用烹饪及空间加热器具、作为独立产品交付的炉用燃烧器或加煤机、单独供应的备件、锅炉制造、客户场址安装、使用阶段的能源和耗材、维护及寿命终止阶段。除非设备功能、加热技术、额定工况、最高工作温度、所含辅助装置和设计使用寿命等同，否则数据包不得声称产品类别层面的可比性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-or-laboratory-furnaces-and-ovens-except-non-electric-bakery-ovens-other-indu-4b202ab0 |
| classification_refs | CPC 3.0: 43420 |
| covered_products | 工业及实验室用炉、烘箱、窑、干燥器和熔炼炉；工业或实验室用感应、微波、射频及介电加热设备；作为设备组成部分交付的工厂集成控制装置和辅助装置 |
| excluded_products | 非电热烘焙炉；家用烹饪或空间加热器具；单独供应的炉用燃烧器、加煤机及部件；锅炉；客户场址安装；使用阶段及寿命终止阶段服务 |
| representative_product | 配有加热系统、壳体、所声明衬里或隔热层、控制装置及所含辅助装置并经工厂试验的工业或实验室过程加热设备总成 |
| production_route | 按产品特定物料清单进行金属备料与加工、按设计安装衬里或隔热层、电气与机械装配、工厂验收试验、按需进行表面处理并配置运输包装 |
| market_state | 客户场址安装前、位于制造商工厂门的完整且已完成工厂试验的设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供完整的工业或实验室过程加热设备，以完成所声明的加热、熔化、干燥、固化或热处理任务 |
| How much | 1,000 kg 完整且经工厂试验的设备净质量，不含单独报告的运输包装 |
| How well | 满足所声明的额定功率或能力、最高工作温度、有效炉膛或工作区尺寸、气氛或压力能力、温度控制性能、安全功能及验收试验规范 |
| How long or cycle | 所声明的设计使用寿命及参考负荷谱；使用阶段运行不计入本工厂门清单，但必须声明以支持下游建模 |
| reference_flow_link | 参考流为 `equipment_manufacturing` 的 1,000 kg 设备净输出（`reference_product`） |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 工业或实验室用燃烧炉及烘箱，非电热式烘箱除外，其他工业或实验室感应或非电热设备 `b7fbf2da-6bb0-4f10-b78b-fdf2207373d2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备子类型；加热技术和能源；直接或间接加热；额定功率或热输入；额定产能或批次能力；最高工作温度；炉膛或工作区尺寸；受控气氛、真空或压力能力；温度控制规范；所含燃烧器、电源、控制装置、风机、输送机、余热回收及其他辅助装置；设备净质量；包装质量及类型；工厂验收试验方案；制造地域；参考年份；设计使用寿命；参考负荷谱 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品及归一化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在工厂验收后确定设备净质量，排除单独报告的运输包装；将所有清单数量归一化到恰好 1,000 kg 设备净质量。 |
| `bom_mass_basis` | 物料清单产品输入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按具体材料记录实际领料质量，并核对退库、边角料、废料、返工和产品内含质量；不得用采购金额或通用材料占比替代。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的电能，并按 1 kWh = 3.6 MJ 转换；声明电网地域、电压等级、合同供电和所含损耗。 |
| `gas_volume_conditions` | 天然气及工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按所声明参考温度和压力报告气体体积；若仪表采用其他条件，应保留原始读数及换算到所声明参考条件的记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付到制造场址边界的外购材料、部件、燃料、气体、水和电力；每项均链接到符合其所声明规格及地域的上游数据集 |
| starting_condition_role | 进入前景设备制造单元过程的上游技术系统输入 |
| product_classification_scope | 经审查的 CPC 43420 语义边界内完整工业或实验室过程加热设备，不以外部分类代码本身定义 PCR 身份 |
| recursive_input_rule | 若外购的完整加热设备属于同一语义产品类别，则作为独立产品输入记录，并链接其自身上游数据集、声明质量；不得在本前景过程中再次展开其内部制造 |
| upstream_dataset_requirement | 每项外购材料、部件、燃料、公用工程和包装输入均采用规格、产品状态、技术、地域和时间具有代表性的数据集；披露所有代理项和未解决身份 |
| disclosure | 声明产品配置、BOM 范围、外包工序、制造场址、试验方案、分配、排除项、数据缺口、包装处理及是否包括工厂集成辅助装置 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | 前景设备生产 | 纳入产品特定 BOM 输入、场内加工与装配、衬里或隔热层安装、实际实施的表面处理、工厂验收试验、直接排放、废物离场前处理以及运输包装；边界止于制造商工厂门且位于客户场址安装之前。 | `eu-pef-method-2021`; `us-doe-process-heating-sourcebook-2007` |
| `boundary_outsourced_operations` | 外包加工、涂装、热处理或装配 | 对每项归属于参考产品的外包工序纳入上游产品或服务数据集，并披露供应商地域、技术、产品状态及返回部件质量。 | `eu-pef-method-2021` |
| `boundary_no_silent_cutoff` | 清单完整性 | 默认不得遗漏已知材料、能源、废物或直接排放流；任何排除均须针对所声明研究方法量化、论证，并披露其预计材料、能源及环境显著性。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `equipment_manufacturing` | 设备加工、装配、工厂验收试验及包装 | required | 始终纳入；以下各条件性原子交换仅在所声明产品设计或制造/试验操作实际使用该交换时纳入 | 完整过程加热设备的前景制造 | 1,000 kg 完整且经工厂试验的设备净输出 |

### 过程：设备加工、装配、工厂验收试验及包装（`equipment_manufacturing`）

#### 输入

##### 产品流

###### 用于壳体及加工部件的合金钢板（`alloy_steel_plate`）

当合金钢板被制成壳体、炉膛、管道、支承件或其他加工部件时，记录投入加工的合金钢板。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定 BOM 及仓储记录，在扣除有记录的退库后取得净领料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

###### 框架及支承用结构钢型材（`structural_steel_sections`）

记录装入设备框架或承载结构的焊接钢角材、型材及异型材。

- 选定流：钢材 `b5e4fcbb-ad3f-4511-b007-67131b98866a`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定 BOM 及仓储记录，在扣除有记录的退库后取得净领料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

###### 热区部件用耐热不锈合金钢板（`heat_resistant_alloy_plate`）

仅当设计在辐射管、马弗、蒸馏罐、加热元件支承件或其他热区部件中使用耐热不锈合金时纳入；记录确切合金牌号。

- 选定流：耐热不锈合金钢板
- 流属性/单位：Mass / kg
- 数量规则：按所声明合金牌号，从产品特定 BOM 和仓储记录取得净领料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`us-doe-process-heating-sourcebook-2007`; `eu-pef-method-2021`

###### 耐火砖衬里（`refractory_bricks`）

仅在安装耐火砖时纳入；声明化学组成、牌号、密度、最高使用温度及安装位置。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass / kg
- 数量规则：根据领用量及退回量取得净安装质量，并单独记录安装边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

###### 铝硅酸盐棉隔热材料（`aluminium_silicate_wool`）

仅在安装铝硅酸盐棉时纳入；声明牌号、密度、粘结剂、最高使用温度及安装位置。

- 选定流：铝硅酸盐棉 `fce8fd2c-a5f6-4eff-ae6b-0f8f7cf29dce`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定 BOM，在扣除有记录的退回量并单独记录边角料后取得净领料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

###### 岩棉隔热材料（`rock_wool`）

仅在安装岩棉时纳入；声明密度、粘结剂或贴面、最高使用温度及安装位置。

- 选定流：岩棉 `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定 BOM，在扣除有记录的退回量并单独记录边角料后取得净领料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

###### 导体及感应线圈用铜线材（`copper_wire`）

记录装入动力导体、绕组或感应线圈的铜线材；声明纯度、导体形态、绝缘状态和设备功能。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定 BOM 及仓储记录取得净内含质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`; `us-doe-process-heating-sourcebook-2007`

###### 电子控制单元（`electronic_control_unit`）

电子控制单元装入参考设备时，按净质量记录；声明电压等级、外壳防护等级和控制功能。

- 选定流：电子控制单元 `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定 BOM 及供应商记录取得净内含质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

###### 外购电力（`electricity`）

记录可归属于材料准备、加工、装配、通风、表面处理、工厂验收试验和包装的计量电力；直接排放行不得包含已由电力数据集表示的上游排放。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：产品线或设备订单的计量电量；或根据具有因果关系的设备工时或实测负荷从场址仪表进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-pef-method-2021`

###### 工厂验收试验用天然气（`natural_gas`）

仅纳入在场内为燃料式设备验收试验燃烧的天然气或可归属的制造用热；声明气体组成、参考条件和试验目的。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在所声明参考温度和压力下计量试验台或可归属批次的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuels_gases_water`
- 来源：`us-doe-process-heating-sourcebook-2007`

###### 切割或焊接用工业氧气（`industrial_oxygen`）

仅纳入用于可归属氧燃料切割或焊接的外购工业氧气；声明纯度、供气压力和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在所声明参考条件下计量可归属于参考产品的体积，或根据气瓶库存变化计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuels_gases_water`
- 来源：`eu-pef-method-2021`

###### 清洁及试验用工艺用水（`process_water`）

设备清洁、静水压试验或冷却回路试验实际发生时，纳入交付到这些操作的工艺用水；声明水源、水质及是否循环使用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量补充水量，或用有记录的水箱质量平衡分配到参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuels_gases_water`
- 来源：`eu-pef-method-2021`

###### 木制运输托盘（`wooden_pallet`）

仅纳入在工厂门随设备交付的木制托盘或装载板；声明托盘类型、木材处理、重复使用状态和质量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：包装 BOM 中的发运质量，或包装称量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经工厂试验的完整过程加热设备（`reference_product`）

记录验收试验后、客户场址安装前的完整设备净质量；运输包装作为单独输入报告，不计入设备净质量。

- 选定流：工业或实验室用燃烧炉及烘箱，非电热式烘箱除外，其他工业或实验室感应或非电热设备 `b7fbf2da-6bb0-4f10-b78b-fdf2207373d2`
- 流属性/单位：Mass / kg
- 数量规则：根据发运称量或工程质量记录归一化后，固定为恰好 1,000 kg 完整设备净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`; `us-doe-process-heating-sourcebook-2007`

##### 废物流

###### 分类收集的钢材加工废料（`steel_scrap`）

记录以分类钢材废料形式离开前景过程的含铁边角料、套裁骨架及不合格钢制部件；声明合金类别、污染状况及去向。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：按生产订单称量废料，或通过库存变化及有记录的分类收集记录确定
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`eu-pef-method-2021`

###### 耐火衬里安装边角料（`refractory_lining_offcut_waste`）

仅纳入安装期间产生的清洁耐火砖或耐火纤维边角料；不得将拆除的服役后污染耐火材料并入本新材料边角料流。

- 选定流：耐火衬里安装边角料
- 流属性/单位：Mass / kg
- 数量规则：称量分类边角料；无法实际称量时，按生产订单采用领用量减安装量和退回量的质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 排放到空气的化石源二氧化碳（`carbon_dioxide_fossil_to_air`）

纳入可归属于制造或工厂验收试验的场内燃烧直接化石源二氧化碳；排除已由电力数据集表示的发电上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据所记录化石燃料用量以及场址特定碳含量和氧化数据计算，或采用合规的直接烟气测量；记录所用方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_fuels_gases_water`
- 来源：`eu-pef-method-2021`

###### 排放到空气、粒径未特指的颗粒物（`particulate_matter_to_air`）

纳入经过控制装置后，可归属于切割、焊接、打磨及其他加工操作的实测或计算直接颗粒物排放；若有按粒径区分的测量值，应增加相应原子基本流，而不得并入本行。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：归属于生产订单的烟道或作业排风测量，或采用有记录的控制后排风量 × 浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-method-2021`

###### 排放到未特指空气区室的氮氧化物（`nitrogen_oxides_to_air`）

仅纳入燃料式制造或验收试验的直接氮氧化物排放，并注明报告口径（例如以 NO2 计的质量）；在确认未特指空气区室的精确身份前保持 UUID 为空。

- 选定流：排放到未特指空气区室的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：合规烟气测量，或根据所记录燃料式试验采用有记录的排风量 × 浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 完整设备净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-method-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造及试验操作 | 技术可行时，应通过对生产订单、工作中心、试验台和废物流进行计量或细分来避免分配。 | `eu-pef-method-2021` |
| `allocation_causal_driver` | 仍属共用的电力、燃料、水、气体及废物 | 无法细分时，采用与交换具有因果关系且有记录的驱动因素，例如电力采用实测设备工时及负荷，天然气采用燃烧器试验时间及热输入，废物采用称量的生产订单质量；除非无法论证物理关系，否则不得使用收入分配。 | `eu-pef-method-2021` |
| `allocation_coproduct_disclosure` | 可销售副产品及回收材料 | 在任何下游处理前记录每项实物共产品或废物输出，披露所有权及废物终止状态，并记录适用研究方法选择的分配或系统扩展处理；不得从前景数量中静默扣除避免负荷抵扣。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `equipment_manufacturing` | 材料、部件及包装输入 | 产品特定 BOM、仓库领退料、供应商规格及称量记录 | 生产订单；部件或材料 id；规格或牌号；供应商；领用质量；退回质量；安装质量；包装质量；日期 | 将批准的 BOM 与领用及退回量核对并保留供应商规格；BOM 无质量时称量包装 | kg | 每个生产订单 | 从领料到发运的完整生产订单 | 范围内全部制造场址及外包 BOM 贡献者 | 按原子材料/部件汇总净领料质量，并用 `calc_normalize_reference_mass` 归一化 | 批准的 BOM 修订版；仓储交易；校准记录；供应商证书；发运记录 |
| `cp_electricity` | `equipment_manufacturing` | 外购电力 | 结算仪表、分表及设备/试验台日志 | 仪表 id；期初与期末读数；单位；时间戳；生产订单；设备或试验台；运行小时；实测负荷；分配驱动因素 | 优先按生产订单分表计量；否则按具有因果关系的实测负荷或设备工时分配场址仪表差值 | kWh 和 MJ | 连续或每班，按订单汇总 | 完整加工、装配、试验及包装期间 | 每个前景制造场址 | 将 kWh 转为 MJ，用 `calc_normalize_reference_mass` 归一化，并与场址仪表核对分配总量 | 仪表校准；账单；分表导出；设备日志；核对记录 |
| `cp_fuels_gases_water` | `equipment_manufacturing` | 天然气、工业氧气、工艺用水及燃烧碳 | 仪表、气瓶库存、交付、组成及试验日志 | 流 id；期初/期末仪表；交付量与退回量；单位；温度；压力；组成或纯度；碳含量；试验目的；生产订单 | 计量可归属用量；否则将库存变化和交付记录与生产/试验记录核对 | 原始 m3 或 kg，并声明换算 | 每次试验或生产订单 | 完整制造及验收试验期间 | 使用该交换的每个场址 | 将气体换算到所声明参考条件；用 `calc_fossil_co2` 计算可归属化石源二氧化碳；全部数值归一化 | 校准仪表；气瓶台账；交货单；气体证书；水表；试验日志；计算表 |
| `cp_wastes` | `equipment_manufacturing` | 钢材废料及耐火衬里安装边角料 | 地磅、料箱秤、废物转移及生产订单分类记录 | 废物类型；组成；毛重/皮重/净重；生产订单；污染；去向；日期；废物终止状态 | 对每项原子废物流分类并称量；只有实际称量不可行时，才使用领用量减安装量、退回量的质量平衡 | kg | 每个容器或生产订单 | 完整制造期间 | 所有前景场址及可归属外包工序 | 按行汇总废物净质量，并用 `calc_normalize_reference_mass` 归一化 | 校准秤；照片或分类审计；转移联单；质量平衡核对 |
| `cp_direct_emissions` | `equipment_manufacturing` | 直接颗粒物及氮氧化物 | 烟道或排风测量及运行/试验日志 | 污染物身份；区室；浓度；排风体积或流量及持续时间；水分和参考条件；控制状态；燃料/试验事件；生产订单 | 法规要求时采用辖区合规测量；否则采用与可归属操作匹配且有记录的浓度 × 干烟气体积计算 | 计算后的 kg | 每次代表性试验活动及过程/控制变更时 | 代表报告年份及全部所声明排放路径 | 范围内每个前景排放点 | 计算控制后排放质量，按原子基本流汇总，并用 `calc_normalize_reference_mass` 归一化 | 实验室报告；仪器校准；采样计划；运行日志；计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每项非参考清单行 | 归一化数量 = 可归属交换数量 × 1,000 kg / 同一生产订单总体的完整设备净输出质量 | 可归属行数量；不含运输包装的设备净输出质量 | 每 1,000 kg 完整设备净输出的行数量 | `eu-pef-method-2021` |
| `calc_bom_reconciliation` | 材料及部件行 | 净领料质量 = 领用质量 − 退库质量；将净领料质量与内含质量 + 单独记录的废料/边角料 + 有记录的库存变化核对 | BOM；仓库领料；退库；内含质量；废物质量；库存变化 | 经核对的原子材料输入及质量平衡差 | `eu-pef-method-2021` |
| `calc_fossil_co2` | `carbon_dioxide_fossil_to_air` | 使用有记录的场址特定碳平衡或合规测量方法；若采用计算，化石源 CO2 排放 = 可归属燃料数量 × 实测碳含量基准 × 氧化率 × 分子质量换算，并明确全部单位及参考条件 | 可归属化石燃料数量；碳含量；氧化率；必要时的密度或体积换算 | 每 1,000 kg 设备净质量的化石源二氧化碳 kg | `eu-pef-method-2021` |
| `calc_direct_emission_mass` | 颗粒物及氮氧化物 | 排放质量 = 匹配的排风浓度 × 控制后干烟气体积，并修正到所声明参考条件和报告口径 | 浓度；流量或总体积；持续时间；水分/参考条件修正；控制状态 | 每 1,000 kg 设备净质量的具名基本流 kg | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 所声明产品配置及 CPC 43420 语义边界须由图纸、规格、额定工况数据及验收试验记录支持；不得将单独交付部件及排除产品并入参考输出。 | 批准的规格；图纸清单；验收证书；产品质量记录 |
| `dq_bom_completeness` | 材料及部件输入 | 使用最终产品特定 BOM 修订版，并核对领用、退回、内含和废弃质量；逐项披露遗漏的小型物料及外包总成。 | BOM 修订历史；仓储台账；核对记录；供应商文件 |
| `dq_temporal_scope` | 所有前景数量 | 采集完整生产订单或代表报告年份且按产量加权的订单集合；披露订单数量、异常试验、返工及停机期间。 | 订单清单；时间戳；生产汇总；代表性评估 |
| `dq_geography_technology` | 上游链接及前景场址 | 使上游数据集及前景记录与所声明制造地域、合金/材料牌号、加热技术、电力供应及气体参考条件匹配；披露每项代理。 | 数据集元数据；供应商证书；场址及仪表元数据；代理登记表 |
| `dq_measurement_quality` | 仪表、秤及排放测量 | 仪器须处于校准或检定有效期；估算或分配数据须识别方法、驱动因素、不确定性及受影响占比。 | 校准证书；QA 日志；分配工作表；不确定性说明 |
| `dq_completeness_review` | 整体清单 | 审查所有已知材料、能源、水、气体、废物和直接排放路径；记录排除项及数据缺口，不得用伞形标签代替原子流。 | 完整性核查表；过程走查；物料/能量平衡；未解决流登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流 | `reference_product` 输出归一化后须恰好为 1,000 kg，使用已确认的质量属性及单位组，排除运输包装质量，并包含全部必需限定信息。 | `un-cpc-3-0-structure-2025`; `eu-pef-method-2021` |
| `validate_atomic_inventory` | 过程清单 | 每个选定流须为单一原子产品、废物或基本交换，且方向、流类型、属性、单位、数量规则、基准、证据和采集协议相互一致；未解决 UUID 须保持为空并出现在 manifest 审查元数据中。 | `eu-pef-method-2021` |
| `validate_bom_balance` | BOM 及废物 | 对每个材料类别，净领料质量须在由测量不确定性支持且已披露的容差内，与产品内含质量、单独记录的废物/边角料及有记录的库存变化相平衡。 | `eu-pef-method-2021` |
| `validate_conditional_routes` | 技术及设计特定行 | 每项条件性行须由所声明设备设计或工厂操作支持；不存在时，应在有证据的情况下记录为不适用，不得无解释地记录为零。 | `us-doe-process-heating-sourcebook-2007` |
| `validate_energy_emission_boundary` | 电力、燃料及直接排放 | 直接排放行只能包含前景燃烧或加工释放；不得重复计算已由上游电力、燃料、材料或部件数据集表示的排放。 | `eu-pef-method-2021` |
| `validate_data_quality` | 发布数据集 | 发布前确认产品特定 BOM 及制造数据、时间/地域/技术代表性、仪表及秤校准、分配核对、明确排除项、数据缺口及代理披露。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整工业或实验室过程加热设备从摇篮到制造商工厂门的产品特定前景数据集 |
| downstream_use | 在必需限定信息及系统边界匹配时，可在下游过程或生命周期模型中作为设备生产的 `secondary_dataset` 或 `background_dataset` 使用 |
| allowed_use | 适用于功能、加热技术、额定工况、配置、制造地域及工厂门状态等同设备的产品足迹、资本设备清单、采购分析及下游生命周期建模 |
| excluded_use | 未限定不同炉/烘箱功能或技术类别的比较；没有所声明负荷谱的使用阶段能源建模；单独供应的燃烧器或部件；非电热烘焙炉；家用加热/烹饪设备；客户场址安装或寿命终止阶段 |
| required_metadata | PCR id 及版本状态；产品型号及配置；功能和设备子类型；加热技术及能源；额定功率/热输入及能力；最高温度；炉膛/工作区尺寸；气氛/真空/压力；所含辅助装置；净质量；包装；验收试验；场址及地域；参考年份；订单总体；使用寿命及负荷谱；分配；排除项；代理及未解决流 |
| required_quality_disclosure | BOM 核对及完整性；初级数据占比；仪表/秤/排放测量方法及校准；时间、地域及技术代表性；分配驱动因素；上游数据集选择；直接排放方法；包装处理；不确定性；排除项及数据缺口 |
| update_trigger | 产品重新设计导致质量、衬里、隔热层、控制装置、加热技术或辅助装置变化；供应商/材料牌号变化；制造场址或能源供应变化；验收试验方案修订；分配或排放控制变化；数据超过所声明代表性期间；任何未解决 UUID 或范围证据需求获得确认替代项 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-05 获取；已验证 SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | CPC 43420 的精确分类身份及其明示的非电热烘焙炉排除项 |
| `us-doe-process-heating-sourcebook-2007` | 官方指南（`official_guidance`） | 美国能源部能源效率与可再生能源办公室，《提高过程加热系统性能：工业资料手册》，第二版，2007，https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/process_heating_sourcebook2.pdf（2026-09-05 获取） | 经原文核验的产品功能及加热技术边界；燃料式与电热式设备区分；耐高温合金及集成系统限定信息 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，2021 年 12 月 15 日关于使用环境足迹方法的委员会建议（EU）2021/2279，英文合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230（2026-09-05 获取） | 经原文核验的产品特定 BOM 与企业特定制造数据要求；前景记录、分配层级、完整性、截断披露、数据质量及归一化规则 |
