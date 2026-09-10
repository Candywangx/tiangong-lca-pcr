---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-waterproof-footwe-77c37fd8
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 外底和鞋帮以橡胶或塑料制成的鞋类，防水鞋或运动鞋除外

## 1. 范围与适用性

本 PCR 适用于外底和鞋帮均由橡胶或塑料制成、且既不是防水鞋也不是运动鞋的成品鞋类前景制造数据包。范围涵盖 CPC 3.0 子类 29320 中露趾或不露趾的非运动鞋，包括合成鞋帮与模压或胶粘鞋底分开成型的鞋类，以及一次注塑成型的休闲鞋。每个数据包必须声明产品款式、参考尺码、物料清单（BOM）、材料配方、制造路线、场址、地理区域和报告期。

默认前景边界始于制造场址接收外购聚合物或橡胶混合料、片材、成品组件、化学品、能源、水和包装材料。边界纳入所有场内组件成型、鞋帮裁切或焊接、鞋底或整鞋模塑、适用时的硫化、装配、整理、检验、边角料处理和销售包装，止于工厂大门处可发运的合格成品鞋。外购投入的上游生产和场外废物处理通过链接数据集表示。

防水鞋、运动鞋、皮革或纺织材料鞋帮的鞋类、归入其他类别的防护金属鞋头鞋、矫形鞋、溜冰鞋以及单独销售的鞋类零件不在范围内。分销、零售、使用、修理和寿命终止阶段不在默认前景边界内。不得仅因鞋类采用橡胶或塑料结构而推定其具备防水性能；任何按防水鞋销售或测试的产品均不属于本 PCR。

代表性路线是一双采用带纺织物背衬的 PVC 涂层塑料鞋帮、EVA 中底和模压合成橡胶外底，并以聚氨酯胶粘剂装配的不露趾休闲鞋。过程清单另列出有条件适用的一次注塑 PVC 鞋类路线。符合本 PCR 的数据包应把不适用的代表性卡片标为 `not_applicable`，并为实际使用的每种材料、化学品、公用工程、废物和基本排放分别增加原子流卡片。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-waterproof-footwe-77c37fd8 |
| classification_refs | CPC 3.0: 29320, exact |
| covered_products | 外底和鞋帮均为橡胶或塑料的非防水、非运动成品鞋；可露趾或不露趾；可分体装配或一次模塑成型 |
| excluded_products | 防水鞋；运动鞋；皮革或纺织材料鞋帮的鞋类；CPC 29320 以外的防护金属鞋头鞋；矫形鞋；溜冰鞋；单独销售的鞋类零件 |
| representative_product | 一双采用 PVC 涂层塑料鞋帮、EVA 中底和合成橡胶外底的不露趾非运动休闲鞋 |
| production_route | 聚合物片材裁切或焊接及鞋帮成型；橡胶或塑料鞋底成型；绷帮或直接装配；涂胶；整理、检验和包装；或声明的一次注塑成型 |
| market_state | 分销前、工厂大门处的合格成品鞋 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供外底和鞋帮为橡胶或塑料、可使足部免受地面影响并满足声明产品规范的非防水、非运动鞋 |
| How much | 由产品 BOM 和声明参考尺码定义的一双鞋 |
| How well | 符合声明的休闲、城镇、学校、婴幼儿、室内或等效非运动用途，状态良好，并具有声明的结构和质量测试结果 |
| How long or cycle | 一次使用；当数据包用于完整生命周期研究时，另行声明使用寿命和使用次数 |
| reference_flow_link | 参考流为一双合格鞋；记录不含可拆卸销售包装的实测质量 `m_pair`（kg），清单按双报告，并提供可逆的每 kg 归一化结果 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s)，代表一双匹配的合格鞋 |
| 参考产品流 | 外底和鞋帮以橡胶或塑料制成的鞋类，防水鞋和运动鞋除外 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | CPC 29320 确认；橡胶或塑料鞋帮材料及配方；橡胶或塑料外底材料及配方；产品既非防水鞋也非运动鞋的确认；露趾或不露趾款式；预期用途；参考尺码；不含销售包装的双鞋质量；BOM；装配或模塑路线；制造场址和地理区域；报告期；产品质量规范；不合格鞋处理方式 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_pair_count` | 合格成品鞋 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 最终检验后，将匹配的左鞋和右鞋作为一个计量件；单只鞋只有在左右鞋匹配成双后才能计为一件。 |
| `reference_pair_mass` | 一双合格成品鞋 | 质量 | kg | 调节状态后称量整双鞋，排除可拆卸销售包装，并保留参考尺码、样本数、算术平均值和秤分辨率，记为 `m_pair`。 |
| `pair_mass_conversion` | 按双与按质量报告的换算 | 质量 | kg/pair | 将每项按双交换除以 `m_pair` 得到按 kg 结果；保留原始按双清单和 `m_pair`，确保换算可逆。 |
| `component_mass_basis` | 混合料、片材、组件、产品和固体废物 | 质量 | kg | 按具体材料和去向记录投入总量、合格并入质量、可回用回料或边角料、不合格品和处置质量；不得把损失隐藏在产品净重中。 |
| `energy_unit_preservation` | 电力和燃料投入 | 能量或低位热值 | 电力用 kWh；燃料用 MJ | 保留计量单位和换算因子。电力、外购热、蒸汽和每种燃料分别作为独立交换。 |
| `water_unit_preservation` | 工艺水和冷却水 | 体积 | m3 | 按来源和处理路线分别记录供水和排水；记录内部循环水量，但不得把它重复计为跨边界投入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购橡胶或塑料混合料、片材、成品组件、化学品、公用工程、水和包装材料在鞋类制造场址大门处被接收、识别并验收 |
| starting_condition_role | 组件生产和最终鞋类制造的前景门到门起始条件 |
| product_classification_scope | 仅 CPC 3.0 子类 29320 |
| recursive_input_rule | 若部分制成或制成的 CPC 29320 鞋类进入系统，应作为一个明确的产品投入记录并链接其上游数据集；不得在此前景边界内递归重建同一类别。 |
| upstream_dataset_requirement | 每种外购材料、组件、化学品、公用工程、包装项目和场外废物处理服务必须链接地理和技术上具有代表性的上游数据集，或披露具体数据缺口。 |
| disclosure | 声明场内和外购组件步骤、合同制造、BOM 和参考尺码、橡胶与塑料配方、再生含量和回料处理、工艺与装配损失、能源与水分配、VOC 与颗粒物控制、不合格品去向、包装纳入情况及所有排除过程。 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景鞋类制造 | 纳入接收和内部搬运、场内鞋帮与底部组件成型、适用时的一次模塑、装配、整理、检验、边角料处理和销售包装，直至工厂大门处的合格鞋类。 | `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982` |
| `boundary_route_specificity` | 制造路线 | 明确产品采用分体成型并装配的组件、直接模压鞋底还是一次注塑成型；仅纳入实际步骤，并使每个外购组件保持可见。 | `unido-ilo-footwear-1982` |
| `boundary_bom_and_losses` | 材料与组件核算 | 维护产品特定 BOM，并将每个制造步骤分解为各自投入、合格产出、剩余料、工艺损失、装配损失和不合格品记录。 | `afw-pefcr-v3-1-2025` |
| `boundary_data_gaps` | 排除项与缺失数据 | 披露每项被排除的可归因流和缺失数据集；不得把数据缺口表示为零。 | `afw-pefcr-v3-1-2025`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `polymer_upper_forming` | 塑料或橡胶鞋帮裁切、焊接和成型 | conditional | 分体鞋帮路线纳入；完整一次模塑产品不纳入。 | 前景组件制造 | kg 合格鞋帮组件 |
| `bottom_component_forming` | 橡胶或塑料外底及中底成型 | conditional | 外底、中底或其他底部组件在报告场址成型时纳入；否则在最终装配中直接记录外购组件。 | 前景组件制造 | 按材料和组件类型计的 kg 合格组件 |
| `one_piece_moulding` | 一次注塑塑料鞋类 | conditional | 仅在鞋帮和外底于一次模塑周期中共同制成时纳入。 | 前景整鞋模塑 | 一双合格鞋及其实测双鞋质量 |
| `final_assembly_and_packaging` | 装配、整理、检验和包装 | required | 始终纳入；对于一次成型鞋类，可仅包括修边、可选配件安装、整理、检验和包装。 | 前景最终制造 | 一双合格鞋及其实测双鞋质量 |

### 过程：塑料或橡胶鞋帮裁切、焊接和成型（`polymer_upper_forming`）

#### 输入

##### 产品流

###### PVC 涂层合成鞋帮片材（`upper_pvc_sheet_input`）

记录用于外部鞋帮的增塑 PVC 片材，包括声明的背衬和涂层结构。

- 选定流：PVC 涂层合成鞋帮片材
- 流属性/单位：质量 / kg
- 数量规则：发往鞋帮裁切和成型的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982`

###### 聚酯鞋帮背衬织物（`upper_polyester_backing_input`）

仅在机织聚酯背衬与 PVC 涂层分开供应时记录。

- 选定流：机织聚酯鞋帮背衬织物
- 流属性/单位：质量 / kg
- 数量规则：发往复合或鞋帮成型的实测合格背衬织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### 鞋帮成型用电力（`upper_electricity_input`）

记录裁切、高频焊接、成型、适用时的缝制以及局部抽风所用电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：过程分表读数，或依据设备运行时间对场址电表进行有文件记录的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`unido-ilo-footwear-1982`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成型 PVC 鞋帮组件（`formed_pvc_upper_output`）

仅记录经检验后转入最终装配的鞋帮组件。

- 选定流：成型 PVC 鞋帮组件
- 流属性/单位：质量 / kg
- 数量规则：实测合格鞋帮组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：鞋帮成型报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`unido-ilo-footwear-1982`

##### 废物流

###### PVC 鞋帮裁切废料（`pvc_upper_cutting_scrap_output`）

按去向区分内部回用边角料、外部回收、能源回收和处置量。

- 选定流：PVC 涂层鞋帮片材裁切废料
- 流属性/单位：质量 / kg
- 数量规则：按去向实测裁切废料和不合格鞋帮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：橡胶或塑料外底及中底成型（`bottom_component_forming`）

#### 输入

##### 产品流

###### 丁苯橡胶外底混合料（`bottom_sbr_compound_input`）

仅对场内合成橡胶外底路线记录配制的 SBR 混合料。

- 选定流：丁苯橡胶外底混合料
- 流属性/单位：质量 / kg
- 数量规则：投入外底成型的实测合格混合料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格 SBR 外底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### EVA 中底混合料（`bottom_eva_compound_input`）

仅在报告场址成型泡沫中底时记录 EVA 混合料。

- 选定流：乙烯-醋酸乙烯酯中底混合料
- 流属性/单位：质量 / kg
- 数量规则：投入中底成型的实测合格 EVA 混合料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格 EVA 中底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### PVC 外底混合料（`bottom_pvc_compound_input`）

仅对单独模塑或直接模压在鞋帮上的 PVC 外底记录 PVC 混合料。

- 选定流：增塑 PVC 外底混合料
- 流属性/单位：质量 / kg
- 数量规则：投入外底模塑的实测合格 PVC 混合料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格 PVC 外底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### 底部组件成型用电力（`bottom_electricity_input`）

记录混炼、预成型、注塑或压塑、修边和抽风所用电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：过程分表读数或有文件记录的设备运行时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格底部组件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982`

###### 硫化热用天然气（`bottom_natural_gas_input`）

仅在天然气直接用于橡胶硫化或模具加热时记录；不得与电力合并。

- 选定流：天然气
- 流属性/单位：低位热值 / MJ
- 数量规则：实测燃料体积按记录的低位热值换算并分配到生产线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格硫化外底
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`unido-ilo-footwear-1982`

###### 底部组件成型冷却水（`bottom_cooling_water_input`）

记录跨越边界的补充冷却水，不包括内部循环水量。

- 选定流：工艺冷却水
- 流属性/单位：体积 / m3
- 数量规则：入口水表或补水罐平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格底部组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成型 SBR 外底（`formed_sbr_outsole_output`）

记录从成型转入最终装配的合格 SBR 外底。

- 选定流：成型丁苯橡胶外底
- 流属性/单位：质量 / kg
- 数量规则：转入装配的实测合格 SBR 外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：底部组件报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`unido-ilo-footwear-1982`

###### 成型 EVA 中底（`formed_eva_midsole_output`）

记录从成型转入最终装配的合格 EVA 中底。

- 选定流：成型乙烯-醋酸乙烯酯中底
- 流属性/单位：质量 / kg
- 数量规则：转入装配的实测合格 EVA 中底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：底部组件报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`afw-pefcr-v3-1-2025`

###### 成型 PVC 外底（`formed_pvc_outsole_output`）

记录从模塑转入最终装配的合格 PVC 外底。

- 选定流：成型增塑 PVC 外底
- 流属性/单位：质量 / kg
- 数量规则：转入装配的实测合格 PVC 外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：底部组件报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`unido-ilo-footwear-1982`

##### 废物流

###### SBR 修边废料（`rubber_trimming_scrap_output`）

将 SBR 飞边、修边和不合格外底作为一种材料特定废物流记录。

- 选定流：丁苯橡胶外底修边废料
- 流属性/单位：质量 / kg
- 数量规则：按去向实测 SBR 飞边、修边和不合格外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格 SBR 外底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

###### EVA 模塑废料（`eva_moulding_scrap_output`）

将 EVA 飞边、修边和不合格中底与橡胶及 PVC 废物分开记录。

- 选定流：乙烯-醋酸乙烯酯中底模塑废料
- 流属性/单位：质量 / kg
- 数量规则：按去向实测 EVA 飞边、修边和不合格中底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格 EVA 中底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

###### PVC 外底模塑废料（`pvc_moulding_scrap_output`）

记录 PVC 流道、飞边、修边和不合格外底，包括送往内部回料的部分。

- 选定流：增塑 PVC 外底模塑废料
- 流属性/单位：质量 / kg
- 数量规则：按内部回用和每种外部去向实测 PVC 流道、飞边、修边和不合格外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格 PVC 外底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`unido-ilo-footwear-1982`

###### 底部组件冷却废水（`bottom_cooling_wastewater_output`）

将冷却系统排污或排放冷却水与仍在内部循环的水量分开记录。

- 选定流：底部组件冷却废水
- 流属性/单位：体积 / m3
- 数量规则：按处理路线实测排污和排放冷却水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格底部组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-ecolabel-footwear-2016`

##### 基本流

### 过程：一次注塑塑料鞋类（`one_piece_moulding`）

#### 输入

##### 产品流

###### 一次成型用 PVC 混合料（`moulding_pvc_compound_input`）

记录用于模塑完整鞋体的具体增塑 PVC 配方。

- 选定流：增塑 PVC 鞋类模塑混合料
- 流属性/单位：质量 / kg
- 数量规则：投入一次鞋类模具的实测合格 PVC 混合料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格一次成型 PVC 鞋类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### 一次模塑用电力（`moulding_electricity_input`）

记录注塑单元及可直接归因辅助设备消耗的电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：注塑单元分表读数或有文件记录的设备运行时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格一次成型 PVC 鞋类
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`unido-ilo-footwear-1982`

###### 一次模塑冷却水（`moulding_cooling_water_input`）

仅记录跨越前景边界的冷却补水。

- 选定流：注塑冷却水
- 流属性/单位：体积 / m3
- 数量规则：实测跨越边界的补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格一次成型 PVC 鞋类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`unido-ilo-footwear-1982`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 一次成型 PVC 鞋类（`one_piece_pvc_footwear_output`）

记录通过模塑阶段检验的完整成型鞋双。

- 选定流：一次注塑 PVC 鞋类
- 流属性/单位：双数 / pair
- 数量规则：计数转入最终检验的合格鞋双并实测双鞋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：模塑报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`unido-ilo-footwear-1982`

##### 废物流

###### 一次成型 PVC 模塑飞边（`one_piece_pvc_flash_output`）

记录该路线产生的 PVC 流道、浇口、飞边和不合格模塑件。

- 选定流：一次成型 PVC 鞋类模塑飞边
- 流属性/单位：质量 / kg
- 数量规则：实测流道、浇口、飞边和不合格模塑件质量，并区分内部回料和每种外部去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格一次成型 PVC 鞋类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`unido-ilo-footwear-1982`

###### 一次模塑冷却废水（`moulding_cooling_wastewater_output`）

按实际处理路线记录模塑冷却系统排污或排放。

- 选定流：一次模塑冷却废水
- 流属性/单位：体积 / m3
- 数量规则：按处理路线实测排污和排放冷却水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格一次成型 PVC 鞋类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-ecolabel-footwear-2016`

##### 基本流

### 过程：装配、整理、检验和包装（`final_assembly_and_packaging`）

#### 输入

##### 产品流

###### 成型 PVC 鞋帮（`assembly_formed_upper_input`）

记录进入绷帮或最终装配的合格成型鞋帮，无论其为场内生产还是外购。

- 选定流：成型 PVC 鞋帮组件
- 流属性/单位：质量 / kg
- 数量规则：发往绷帮和装配的实测合格鞋帮组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### SBR 外底（`assembly_sbr_outsole_input`）

记录进入最终装配的合格 SBR 外底。

- 选定流：成型丁苯橡胶外底
- 流属性/单位：质量 / kg
- 数量规则：发往装配的实测合格 SBR 外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### EVA 中底（`assembly_eva_midsole_input`）

记录并入所声明产品款式的合格 EVA 中底。

- 选定流：成型乙烯-醋酸乙烯酯中底
- 流属性/单位：质量 / kg
- 数量规则：发往装配的实测合格 EVA 中底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### PVC 外底（`assembly_pvc_outsole_input`）

仅对采用这种底部结构的款式记录合格 PVC 外底。

- 选定流：成型增塑 PVC 外底
- 流属性/单位：质量 / kg
- 数量规则：发往装配的实测合格 PVC 外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### 聚氨酯鞋用胶粘剂（`assembly_pu_adhesive_input`）

将配制的聚氨酯胶粘剂与底涂剂、清洁剂和整理剂分别记录。

- 选定流：聚氨酯鞋用胶粘剂
- 流属性/单位：质量 / kg
- 数量规则：期初库存加购入减期末库存和单独计量的回收量，并与生产订单核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals`
- 来源：`unido-ilo-footwear-1982`; `eu-ecolabel-footwear-2016`

###### 聚氨酯鞋用底涂剂（`assembly_pu_primer_input`）

记录用于准备鞋帮或鞋底粘接面的具体聚氨酯底涂剂。

- 选定流：聚氨酯鞋用底涂剂
- 流属性/单位：质量 / kg
- 数量规则：与生产订单核对的底涂剂库存平衡消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals`
- 来源：`unido-ilo-footwear-1982`; `eu-ecolabel-footwear-2016`

###### 聚酯鞋带（`assembly_polyester_lace_input`）

仅对系带款式记录聚酯鞋带；不得在此卡中替换为其他扣合组件。

- 选定流：聚酯鞋带
- 流属性/单位：质量 / kg
- 数量规则：实测并入产品的合格鞋带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 纸板鞋盒（`assembly_cardboard_box_input`）

将销售鞋盒与薄页纸及其他每种包装组件分开记录。

- 选定流：纸板鞋盒
- 流属性/单位：质量 / kg
- 数量规则：实测单个鞋盒质量乘以消耗数量，包括损坏鞋盒
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双包装待售的合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 薄页包装纸（`assembly_tissue_paper_input`）

将薄页纸与鞋盒和任何塑料附件分开记录。

- 选定流：薄页包装纸
- 流属性/单位：质量 / kg
- 数量规则：实测单张质量乘以消耗张数，包括损坏纸张
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双包装待售的合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终装配用电力（`assembly_electricity_input`）

记录绷帮、表面处理、胶粘剂活化、压合、整理、检验和包装所用电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：过程分表读数或有文件记录的场址电表分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 橡胶或塑料成品鞋（`finished_footwear_output`）

仅计数满足声明规范和检验准则的鞋双。

- 选定流：外底和鞋帮以橡胶或塑料制成的鞋类，防水鞋和运动鞋除外
- 流属性/单位：双数 / pair
- 数量规则：计数合格鞋双并实测 `m_pair`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一双参考鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

###### 不合格橡胶或塑料鞋（`rejected_footwear_output`）

记录未满足声明规范并以规定去向离开过程的成品鞋双。

- 选定流：不合格橡胶塑料复合鞋
- 流属性/单位：质量 / kg
- 数量规则：按修理、返工、材料回收、能源回收和处置去向实测不合格成品鞋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

###### 废聚氨酯胶粘剂（`spent_pu_adhesive_output`）

将已固化和未固化聚氨酯胶粘剂残余作为化学品特定废物流记录。

- 选定流：废聚氨酯鞋用胶粘剂
- 流属性/单位：质量 / kg
- 数量规则：实测送往声明处理路线的已固化和未固化胶粘剂残余质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-ecolabel-footwear-2016`

##### 基本流

###### 向空气排放的挥发性有机物（`assembly_voc_air_output`）

在计入捕集后，记录实际胶粘剂、底涂剂、清洁剂或整理路线释放的 NMVOC。

- 选定流：向空气排放的非甲烷挥发性有机物
- 流属性/单位：质量 / kg
- 数量规则：烟道或工作场所抽风实测结果，或采用产品特定溶剂含量和捕集废物记录的化学品质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-ecolabel-footwear-2016`

###### 打磨产生的向空气颗粒物排放（`assembly_particulate_air_output`）

扣除集尘系统截留的粉尘后，记录鞋底或鞋帮打磨释放的颗粒物。

- 选定流：鞋类打磨产生的向空气颗粒物
- 流属性/单位：质量 / kg
- 数量规则：实测排放，或扣除捕集打磨粉尘后的材料平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`unido-ilo-footwear-1982`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 所有前景过程 | 优先采用直接计量、物理拆分和独立分表。仅在无法拆分时分配共享投入或排放。 | `eu-pef-method-2021` |
| `allocation_shared_energy` | 共享设备和场址公用工程 | 依据设备运行时间乘以实测或额定负载的因果驱动分配共享电力和燃料；披露电表、期间、分配驱动和未分配余额。 | `afw-pefcr-v3-1-2025` |
| `allocation_material_regrind` | 内部 PVC、EVA 或橡胶回料 | 将送往粉碎的材料和返回后续投料的材料记录为两个相互链接的内部数量；系统边界处只计入补充的原生或外购材料，并披露品质损失。 | `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982` |
| `allocation_waste_fate` | 边角料、不合格品、废水和化学品残余 | 按实际再利用、回收、回收利用、处理和处置去向拆分数量。除非下游研究明确采用获认可的分配或循环足迹方法，否则不得在门到门前景数据包内给予避免产品信用。 | `afw-pefcr-v3-1-2025`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_product` | `final_assembly_and_packaging` | 合格与不合格鞋双产出 | 生产、检验和称量记录 | style_id; size; conforming_pairs; rejected_pairs; pair_mass_kg; scale_id; disposition | 核对生产线计数与检验处置，并对调节状态后的鞋双进行有文件记录的抽样称量 | pair; kg | 每批，按月汇总 | 完整报告期 | 所有纳入的装配线 | 汇总计数；按款式和参考尺码计算双鞋质量算术平均值；单独保留不合格品 | 签字生产核对表、校准记录和检验日志 |
| `cp_bom_materials` | all foreground processes | 混合料、片材、组件和辅件 | 批准的 BOM、领用、退料和库存记录 | material_id; formulation; supplier; lot; opening_stock; receipts; issue; return; closing_stock; component_mass | 按原子材料核对批准 BOM 与材料领用及库存变动 | kg | 每个生产订单，按月汇总 | 完整报告期 | 所有纳入的组件和装配场址 | 期初加购入减期末和有文件记录的退料；不得跨材料聚合 | 批准的 BOM 版本、供应商规范和库存核对 |
| `cp_process_energy` | all foreground processes | 电力和天然气 | 分表、燃料发票和设备工时记录 | meter_id; start; end; fuel_volume; net_calorific_value; machine_id; operating_hours; rated_load; output | 使用分表消耗量；否则记录因果设备工时分配 | kWh; MJ | 连续或每班，按月汇总 | 完整报告期 | 所有纳入过程和共享公用工程 | 扣除已核实的非生产负荷；仅分配剩余共享余额 | 仪表校准、发票核对和分配工作表 |
| `cp_process_water` | `bottom_component_forming`; `one_piece_moulding` | 冷却水投入和废水产出 | 入口水表、补水罐、排污和排放记录 | inlet_m3; recirculated_m3; blowdown_m3; discharge_m3; treatment_route | 计量补水和排水；识别循环水但不重复计量 | m3 | 每日或每批，按月汇总 | 完整报告期 | 所有纳入的模塑和硫化线 | 按路线汇总边界补水和排水；核对水量平衡 | 仪表校准、水量平衡和处理凭证 |
| `cp_process_outputs` | all foreground processes | 合格组件产出 | 转移和检验记录 | component_id; material; good_mass; reject_mass; transfer_lot | 称量验收组件转移量并与不合格品核对 | kg; pair | 每批，按月汇总 | 完整报告期 | 所有纳入生产线 | 按材料和组件身份汇总合格产出 | 签字转移和检验记录 |
| `cp_process_chemicals` | `final_assembly_and_packaging` | 胶粘剂和底涂剂消耗 | 配方、安全数据、库存和容器记录 | product_id; solvent_fraction; opening_stock; receipts; closing_stock; returned_product; residue | 化学品特定库存平衡，并与使用和废弃容器核对 | kg | 每个生产订单，按月汇总 | 完整报告期 | 所有涂胶和底涂工位 | 每种化学品分别计算；不得合并胶粘剂、底涂剂、清洁剂或整理剂 | 现行配方/SDS、库存核对和废物联单 |
| `cp_packaging_materials` | `final_assembly_and_packaging` | 纸板鞋盒和薄页纸 | 包装 BOM、计数、质量和损坏记录 | packaging_id; unit_mass; issued_count; returned_count; damaged_count | 称量每个包装组件并核对领用数量 | kg; item | 每个包装订单，按月汇总 | 完整报告期 | 所有包装线 | 单位质量乘以净消耗数量，按包装组件分别计算 | 秤校准和包装领用记录 |
| `cp_waste_and_emissions` | all foreground processes | 固体废物、化学残余、VOC 和颗粒物排放 | 分类废物箱称量、废物联单、化学品平衡、烟道或抽风测试 | row_id; waste_mass; fate; treatment_provider; solvent_input; solvent_waste; captured_dust; measured_emission | 计量每种材料特定废物；无直接测量时仅用有文件记录的计算规则推导排放 | kg | 每次收集或测试，按月汇总 | 完整报告期，并具代表性排放测试 | 所有纳入过程和控制设备 | 按原子流和去向汇总；核对计算排放与投入及捕集产出 | 校准秤/测试报告、化学组成、废物联单和质量平衡工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_pair_mass_normalization` | 所有交换 | `amount_per_kg = amount_per_pair / m_pair`；保留原始按双结果。 | 每双交换量；`m_pair` | 每 kg 成品鞋交换量 | `afw-pefcr-v3-1-2025` |
| `calc_material_reconciliation` | 每种混合料、片材、组件和化学品 | `consumption = opening stock + receipts - closing stock - documented return`；与合格并入质量及每种废物去向比较。 | 库存变动；产出；废物 | 核对后的材料消耗和闭合差 | `afw-pefcr-v3-1-2025` |
| `calc_step_yield` | 每个组件成型步骤 | `yield = conforming output mass / accepted input mass`；报告互补损失，不得隐藏。 | 合格投入；合格产出；材料特定损失 | 步骤收率和未核对损失 | `afw-pefcr-v3-1-2025` |
| `calc_shared_energy` | 共享电力或燃料 | `allocated energy = shared metered energy × causal driver share`；驱动份额采用设备工时乘以实测或额定负载。 | 共享仪表；运行时间；负载；产出 | 按过程和参考鞋双分配的能源 | `afw-pefcr-v3-1-2025` |
| `calc_water_balance` | 冷却水系统 | `balance difference = make-up water - discharge - evaporation - water retained in output`；循环水仅作备忘信息。 | 补水；排水；蒸发估算；产品带出水 | 水量平衡闭合 | `eu-pef-method-2021` |
| `calc_voc_mass_balance` | 胶粘剂和底涂剂使用 | `VOC to air = solvent-containing input - solvent in product - captured solvent waste - solvent sent to wastewater`；可用时采用直接测量。 | 化学品消耗及溶剂比例；捕集废物；废水 | 按化学品路线的 NMVOC 排放 | `eu-ecolabel-footwear-2016` |
| `calc_packaging_mass` | 每种销售包装组件 | `packaging mass = unit mass × net consumed count`；损坏项目同时纳入消耗和废物记录。 | 单位质量；领用、退回和损坏数量 | 每双合格鞋的包装投入 | `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认 CPC 29320 范围，并记录鞋帮与外底材料、非防水和非运动排除项、款式、尺码、路线和双鞋质量。 | 批准的产品规范、标签记录、BOM 和检验记录 |
| `dq_bom_coverage` | 产品 BOM | 为至少 95% 的 BOM 质量以及 100% 的主要鞋帮、外底、中底、衬里、金属和电子零件提供原始数据；披露每项剩余份额的处理。 | BOM 覆盖率计算和供应商规范 |
| `dq_atomicity` | 清单 | 每个选定流均为一种具体材料、组件、公用工程、废物或基本排放；路线替代项保持为不同卡片。 | 将逐行清单与领用、仪表和废物记录核对 |
| `dq_temporal` | 前景记录 | 使用完整、有代表性的报告期，通常为连续 12 个月；披露停机、启动、异常批次和较短期间。 | 期间核对和生产日历 |
| `dq_mass_balance` | 每个成型和装配步骤 | 将原子材料投入与合格产出、内部回料、场外回收、其他回收利用、处置和无法解释的差异核对。 | 签字的步骤质量平衡 |
| `dq_energy_water` | 公用工程 | 将过程合计与场址仪表和发票核对；披露分配驱动和剩余未分配余额。 | 仪表、发票和分配核对 |
| `dq_emissions` | VOC 和颗粒物排放 | 保留测试条件、化学组成、控制设备状态、计算投入和捕集废物证据；不得把未测量的数据缺口报告为零。 | 获认可或有文件记录的测试报告和质量平衡工作表 |
| `dq_background_links` | 外购投入和场外处理 | 链接地理和技术上具有代表性的数据集，或披露具体未解决数据集缺口。 | 数据集标识符和代表性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考产品 | 若鞋帮和外底未同时声明为橡胶或塑料，或产品为防水鞋、运动鞋或其他排除类别，则校验失败。 | `afw-pefcr-v3-1-2025` |
| `validate_reference_flow` | 参考流 | 若未完整声明一双合格鞋、参考尺码、`m_pair`、BOM 版本、制造路线、场址和报告期，则校验失败。 | `afw-pefcr-v3-1-2025` |
| `validate_process_route` | 过程图 | 要求选择分体组件路线或一次模塑路线之一，并纳入最终检验和包装；拒绝相互矛盾的路线选择。 | `unido-ilo-footwear-1982` |
| `validate_bom_and_losses` | 材料清单 | 若主要材料被聚合、BOM 覆盖率未达到声明要求且未披露，或过程投入未与合格产出和材料特定损失核对，则校验失败。 | `afw-pefcr-v3-1-2025` |
| `validate_atomic_flows` | 所有清单行 | 任何作为选定流使用的集合标签、合并能源载体、合并化学品、合并包装材料、合并废物或合并排放均导致校验失败。 | `afw-pefcr-v3-1-2025` |
| `validate_energy_water` | 公用工程 | 电力、每种燃料、水投入和废水产出必须为独立行，并具有仪表、期间、分配和归一化证据。 | `afw-pefcr-v3-1-2025`; `eu-pef-method-2021` |
| `validate_voc` | 胶粘剂和底涂剂路线 | 使用含溶剂胶粘剂、底涂剂、清洁剂或整理剂时，必须提供单独化学品消耗和 VOC 计算或测量证据。 | `eu-ecolabel-footwear-2016` |
| `validate_unresolved_identities` | 参考流和清单流 | 将 manifest 审查元数据中每个未解决 Tiangong UUID 视为发布阻断项，但不得以更窄或集合级流身份替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 非防水、非运动橡胶或塑料鞋类的场址特定、产品特定前景制造数据集 |
| downstream_use | 在鞋类身份、路线、地理、技术和期间兼容的产品系统中，可作为 `secondary_dataset` 或 `background_dataset` 链接 |
| allowed_use | 门到门制造模型；供应商特定组件研究；添加兼容上游和下游阶段的下游摇篮到大门或完整生命周期模型 |
| excluded_use | 防水鞋；运动鞋；皮革或纺织鞋帮鞋类；未经代表性评估的通用鞋类平均值；未按适用 PEF/PCR 完成核查的直接公共比较声明 |
| required_metadata | 规范 PCR id；CPC 范围；产品款式和预期用途；鞋帮和外底配方；参考尺码；双鞋质量；BOM 版本和覆盖率；路线和技术；场址和地理；报告期；场内与外购组件；分配方法；回料和废物去向；未解决数据缺口 |
| required_quality_disclosure | 原始数据占比；仪表和秤覆盖；BOM 完整性；步骤质量平衡闭合；能源和水分配；VOC 和颗粒物方法；背景数据集代表性；排除项；不确定性和未解决身份 |
| update_trigger | 材料或配方变化；改归防水或运动用途；路线、场址、供应商、技术、能源结构、水系统、排放控制、分配或废物去向变化；报告期滚动；实质性数据质量变化；或 Tiangong UUID 缺口解决 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `afw-pefcr-v3-1-2025` | official_guidance | Product Environmental Footprint Category Rules (PEFCR): Apparel and Footwear, Version 3.1, 29 April 2025, Technical Secretariat supported by the European Commission. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | 一双鞋功能单位；BOM 覆盖和尺码；鞋类过程分解；制造损失；前景数据采集；电力、分配、包装、数据质量和核查规则 |
| `unido-ilo-footwear-1982` | official_guidance | UNIDO/ILO Technical Memorandum No. 2, Small-scale Manufacture of Footwear, 1982, ISBN 92-2-103079-2. https://www.unido.org/publications/ot/9648584/pdf | 焊接合成鞋帮与模压鞋底路线；缝制合成鞋帮路线；一次注塑 PVC 鞋类；鞋帮、鞋底、装配、修边、回料、检验和包装过程分解 |
| `eu-ecolabel-footwear-2016` | standard | Commission Decision (EU) 2016/1349 of 5 August 2016 establishing ecological criteria for the award of the EU Ecolabel for footwear, with official application materials. https://eur-lex.europa.eu/eli/dec/2016/1349/oj | 鞋类化学品和生产污染控制；VOC 与废水证据；耐久性和质量披露 |
| `eu-pef-method-2021` | standard | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 系统边界、数据缺口、分配层级、企业特定数据、水量平衡、数据集质量和核查原则 |
