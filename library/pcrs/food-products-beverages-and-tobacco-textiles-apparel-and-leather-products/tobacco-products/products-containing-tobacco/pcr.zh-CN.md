---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.products-containing-tobacco
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含烟草的产品

## 1. 范围与适用性

本 PCR 适用于实际含有烟草或再造烟草、预期以不燃烧方式吸入的制成消费品的工厂门前景数据包。联合国 CPC 3.0 版解释性说明通过 HS 2022 品目 24.04 定义子类 25092；该品目下，HS 2404.11 专门指含烟草或再造烟草、预期以不燃烧方式吸入的产品。对于以“含烟草的产品”为名称的本 PCR，必须实际含有烟草或再造烟草，并在数据包中声明。来源：`un-cpc-3-2025`；`wco-hs-2022-chapter-24`。

前景边界包括烟草物料接收与制备、条件性场内再造烟草薄片生产、配方、含烟草消费品成形与组装、质量放行和包装。代表性路线为含成形烟草芯的加热烟草消费品。FDA 技术审评描述了由皱褶铸片再造烟草构成的烟草芯，以及水、甘油、瓜尔胶、纤维素纤维和路线特定非烟草组件；EPA 记录了烟草调湿、混配、切割、干燥、回潮、再造烟草片生产、成形、不合格品回收、包装及相关废水。来源：`us-fda-iqos-tpl-2019`；`us-epa-tobacco-processing-2006`。

本 PCR 不包括可燃雪茄、方头雪茄、小雪茄和卷烟；散装吸用烟草；水烟烟草；烟草浸膏和香精；作为材料销售的独立再造烟草；不含烟草的纯尼古丁液体、烟弹、口含产品或透皮产品；烟草替代品；以及可重复使用的加热装置。烟草种植、调制、去梗、复烤和外购再造烟草生产属于上游，除非这些操作在报告场址实施并明确纳入。消费者使用和生命末期不在工厂门前景边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.products-containing-tobacco |
| classification_refs | CPC 3.0: 25092；CPC 解释性说明通过 HS 2022 品目 24.04 定义，其中 HS 2404.11 识别含烟草且不燃烧吸入的产品 |
| covered_products | 实际含烟草或再造烟草、预期以不燃烧方式吸入的制成消费品；当含烟草消费品本身为销售参考产品时，包括烟草棒、烟草芯、烟草胶囊或烟草荚 |
| excluded_products | 可燃雪茄和卷烟；散装或水烟吸用烟草；烟草浸膏；独立再造烟草材料；不含烟草的纯尼古丁产品；烟草替代品；可重复使用的加热装置；药用尼古丁产品 |
| representative_product | 工厂放行的含烟草不燃烧消费品成品，以不含独立零售、运输和托盘包装质量的产品净质量表示 |
| production_route | 烟草物料接收；条件性调湿、混配或再造；配方；成形与组件组装；质量放行；零售和运输包装；条件性场内废水处理 |
| market_state | 包装成品或已声明散装形式的含烟草消费品；声明产品结构、烟草形态、配方、预期用途、单件质量、每包装数量、包装配置、水分规格和货架期条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供实际含有烟草或再造烟草、预期以不燃烧方式吸入的制成消费品 |
| How much | 1,000 kg 合格含烟草产品净质量，不含单独列入清单的包装质量 |
| How well | 符合已声明的配方、烟草含量、产品结构、单件质量、水分、物理性能、化学和目标市场规格 |
| How long or cycle | 一个在工厂门完成生产和放行的批次；声明货架期，但不指定消费者使用寿命 |
| reference_flow_link | 扣除有记录的不合格品和返工后的合格含烟草产品净放行质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 成品净质量 |
| 参考产品流 | 含烟草的产品 `653e40de-b5ea-4e0c-8542-98a32e6bae12` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | tobacco_present=true；烟草形态和来源；再造烟草含量；不燃烧吸入路线；产品结构和组件清单；按质量列出的完整配方；保润剂和香味规格；单件净质量和每包装数量；受控时的水分和水活度规格；各包装组件质量；放行规格；生产场址、地域、批次和参考期；可重复使用装置是否排除或单独建模 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品净输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化到恰好 1,000 kg 合格产品净质量。一次、二次和三次包装不计入参考量，并按组件分别列入清单。 |
| `unit_count_to_mass` | 以件数记录的生产和包装记录 | Mass | kg | 使用产品特定的实测平均单件质量及留存的抽样记录将件数换算为产品净质量；保留件数、抽样方案、实测质量和换算过程。 |
| `ingredient_mass` | 烟草、保润剂、黏结剂、纤维、添加剂和胶黏剂 | Mass | kg | 根据经校准的领料或批次记录，将每一种物理上独立的成分记录为单独交换；不得汇总为配方总量。 |
| `component_mass` | 管件、滤材、包裹材料、纸和包装组件 | Mass | kg | 分别记录每一组件的领用量和退回量；只有具备组件特定实测质量时才允许件数转质量。 |
| `energy_separation` | 电力、外购蒸汽和天然气 | Energy | kWh 或 MJ | 将电力、外购蒸汽和每一种燃烧燃料分别记录；保留计量基础、热值基础和换算因子。 |
| `water_separation` | 配方、工艺调湿、设备清洗和处理 | Volume 或 Mass | m3 或 kg | 按用途角色和过程分别记录用水；不得将进入产品的水与清洗水或处理用水合并。 |
| `wastewater_load` | 每一直接排放指标 | Mass | kg | 使用相匹配的排放体积和浓度记录分别计算各污染物负荷；保留采样时间、处理边界和受纳环境。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告场址门口接收烟草混合料、烟梗/烟末、外购再造烟草以及非烟草成分和组件；声明所选起始物料及任何场内再造路线 |
| starting_condition_role | 含烟草消费品成品前景制造的上游产品投入 |
| product_classification_scope | 实际含有烟草或再造烟草、预期以不燃烧方式吸入的成品；排除纯尼古丁、无烟草、可燃和可重复使用装置产品 |
| recursive_input_rule | 已属于本类别的退回或返工产品作为单独计量的同类别产品投入记录，并保留其既有负荷；不得无说明地视为原生烟草或零负荷材料 |
| upstream_dataset_requirement | 为烟草种植和调制、外购烟草制备或再造烟草片生产、电力、蒸汽、天然气、水、化学品、聚合物、纸、胶黏剂、包装和场外处理关联具有代表性的上游数据集 |
| disclosure | 声明产品路线、前景起始物料、场内或外购烟草制备、装置排除、电力和水计量、不合格品与返工去向、废水处理、空气污染控制、包装边界、储存条件和所有截断项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入从已声明烟草物料和组件接收到成品质量放行及工厂门交付的所有直接控制操作。 | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `boundary_route_specific` | 烟草制备和产品结构 | 仅当已声明产品路线实际实施或使用时，纳入再造、调湿、蒸汽、干燥、切割、成形、滤材、管件、纸和胶黏剂；外购中间品作为上游数据集披露。 | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `boundary_complete_inventory` | 每个纳入过程 | 将电力、外购蒸汽、天然气、工艺水、每一种成分、每一个产品组件、每一个包装组件、每一项废物、每一种直接空气排放、废水和每一种废水污染物分别列为交换。 | `us-epa-tobacco-processing-2006`; `eu-pef-2021` |
| `boundary_device_exclusion` | 烟草消费品和可重复使用加热器 | 从本消费品参考流中排除可重复使用的加热装置。纳入装置的研究应将其作为独立产品系统建模，并披露装置寿命分配。 | `us-fda-iqos-tpl-2019`; `wco-hs-2022-chapter-24` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tobacco_preparation` | 烟草制备与配方 | `conditional` | 报告场址对烟草进行调湿、混配、研磨、再造、配方、干燥或切割时纳入 | 生产已声明的制备烟草物料 | 转移到组装的制备烟草物料 kg |
| `forming_assembly` | 成形与产品组装 | `required` | 含烟草消费品成品始终纳入 | 成形烟草部分并组装各非烟草组件 | 未包装合格产品 kg |
| `packaging_release` | 包装、质量放行与交付准备 | `required` | 始终纳入；组件行按已声明包装配置适用 | 检验、包装和放行成品 | 1,000 kg 产品净放行量 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 烟草工艺废水在前景控制下处理或直接排放时纳入 | 处理废水并量化污泥和各项排放负荷 | 处理废水 m3 |

### 过程：烟草制备与配方（`tobacco_preparation`）

#### 输入

##### 产品流

###### 混合烟草物料（`blended_tobacco_input`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：成品烟草用混合烟草
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收和领料记录取得净接收质量，并注明烟草形态和水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tobacco_materials`
- 来源：`us-epa-tobacco-processing-2006`

###### 进入烟草的工艺水（`process_water`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量或批次投加到调湿、提取、浆料或配方的水；排除清洗水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`

###### 甘油保润剂（`glycerol`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：甘油
- 流属性/单位：Mass / kg
- 数量规则：称量配方批次领用的甘油；仅当已声明配方中不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`us-fda-iqos-tpl-2019`

###### 丙二醇保润剂（`propylene_glycol`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：丙二醇
- 流属性/单位：Mass / kg
- 数量规则：存在时称量配方批次领用的丙二醇。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`us-fda-iqos-tpl-2019`

###### 瓜尔胶黏结剂（`guar_gum`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：瓜尔胶
- 流属性/单位：Mass / kg
- 数量规则：存在时称量再造烟草或烟草芯配方领用的瓜尔胶。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`us-fda-iqos-tpl-2019`

###### 纤维素纤维增强材料（`cellulose_fibre`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：纤维素纤维
- 流属性/单位：Mass / kg
- 数量规则：存在时称量薄片或烟草芯配方添加的纤维素纤维。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`us-fda-iqos-tpl-2019`

###### 烟草制备用电（`preparation_electricity`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：对实际实施的输送、研磨、混合、提取、蒸发、成片、干燥和切割记录计量或有依据的分表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`us-epa-tobacco-processing-2006`

###### 调湿或干燥用外购蒸汽（`purchased_steam`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：工厂端蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量进入调湿、蒸发或干燥的外购蒸汽；排除由另行列入清单的场内天然气产生的蒸汽。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_records`
- 来源：`us-epa-tobacco-processing-2006`

###### 场内热设备用天然气（`natural_gas`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量直接控制的干燥机或锅炉消耗的天然气，并声明低位或高位热值基础。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_records`
- 来源：`us-epa-tobacco-processing-2006`

#### 输出

##### 产品流

###### 制备烟草物料（`prepared_tobacco_material`）

该产品流作为所述中间产品或参考产品离开过程边界。其数量按照下述规则从前景记录取得。

- 选定流：不燃烧产品组装用制备烟草物料
- 流属性/单位：Mass / kg
- 数量规则：实际实施的调湿、配方、成片、干燥和切割之后的净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tobacco_materials`
- 来源：`us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`

##### 废物流

###### 烟草制备拒收薄片边角料（`tobacco_solids_waste`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：烟草薄片边角废物
- 流属性/单位：Mass / kg
- 数量规则：测量送往回收、处理或处置的烟草薄片边角废物净质量，并声明去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-tobacco-processing-2006`

###### 烟草制备工艺废水（`tobacco_process_wastewater`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：烟草加工废水
- 流属性/单位：Volume / m3
- 数量规则：测量处理前来自成片、烟草浸出液损失、设备清洗、空气污染控制排污及其他纳入烟草制备操作的废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`us-epa-tobacco-processing-2006`

##### 基本流

###### 烟草颗粒物排放到空气（`tobacco_pm10_to_air`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：粒径小于 10 微米的颗粒物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：由实测浓度和风量计算烟囱或无组织 PM10 质量，或采用纳入烟草处理设备的场址排放计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-tobacco-processing-2006`

###### 天然气产生的化石二氧化碳（`fossil_co2_to_air`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：化石二氧化碳，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：由计量天然气和有记录的场址或辖区燃烧因子计算；未场内燃烧天然气时标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-tobacco-processing-2006`

###### 天然气产生的氮氧化物（`nitrogen_oxides_to_air`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：氮氧化物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：采用烟囱监测，或由计量天然气和适用设备特定因子计算；无场内燃烧时标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 制备烟草物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-tobacco-processing-2006`

### 过程：成形与产品组装（`forming_assembly`）

#### 输入

##### 产品流

###### 供应组装的制备烟草（`assembly_tobacco_material`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：不燃烧产品组装用制备烟草物料
- 流属性/单位：Mass / kg
- 数量规则：按场内制备领用或外购制备烟草接收记录测量领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 成形与组装用电（`assembly_electricity`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有依据地分表记录皱褶、成形、切割、包裹、涂胶、滤材插入、输送和检验用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`

###### 醋酸纤维素中空管（`cellulose_acetate_tube`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：醋酸纤维素中空管
- 流属性/单位：Mass / kg
- 数量规则：已声明结构含中空醋酸纤维管时记录组件净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 聚乳酸冷却滤材（`polylactic_acid_filter`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：聚乳酸滤芯
- 流属性/单位：Mass / kg
- 数量规则：存在聚乳酸冷却组件时记录组件净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 醋酸纤维素口含端滤材（`cellulose_acetate_filter`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：醋酸纤维素口含端滤材
- 流属性/单位：Mass / kg
- 数量规则：存在醋酸纤维素口含端时记录组件净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 烟草芯包裹纸（`plug_wrap_paper`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：烟草芯包裹纸
- 流属性/单位：Mass / kg
- 数量规则：记录直接包裹烟草部分的纸张净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 外层结构纸（`outer_paper`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：烟草消费品外层结构纸
- 流属性/单位：Mass / kg
- 数量规则：记录维持组装消费品结构的外层纸张净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 接装纸（`tipping_paper`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：接装纸
- 流属性/单位：Mass / kg
- 数量规则：存在时记录连接口含端或下游组件与烟草部分的接装纸净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

###### 乙烯-醋酸乙烯酯胶黏剂（`eva_adhesive`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：乙烯-醋酸乙烯酯胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退回量后，记录结构纸和接装纸黏结的胶黏剂净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`us-fda-iqos-tpl-2019`

#### 输出

##### 产品流

###### 未包装合格含烟草产品（`unpacked_tobacco_product`）

该产品流作为所述中间产品或参考产品离开过程边界。其数量按照下述规则从前景记录取得。

- 选定流：未包装含烟草的产品
- 流属性/单位：Mass / kg
- 数量规则：通过零售包装前的过程内物理和配方检查的合格净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：`us-fda-iqos-tpl-2019`

##### 废物流

###### 不合格含烟草产品（`off_spec_tobacco_product`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：不合格含烟草的产品
- 流属性/单位：Mass / kg
- 数量规则：测量不合格产品质量，并按内部返工、烟草回收、处理和处置去向分别记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-tobacco-processing-2006`

###### 组装纸边角废物（`paper_trim_waste`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：产品组装纸边角废物
- 流属性/单位：Mass / kg
- 数量规则：测量离开组装的纸边角和不合格包裹材料质量，扣除有记录的内部回用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-tobacco-processing-2006`

###### 塑料滤材边角废物（`plastic_filter_trim_waste`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：塑料滤材边角废物
- 流属性/单位：Mass / kg
- 数量规则：测量醋酸纤维素和聚乳酸边角或不合格滤材质量，并保留去向和聚合物身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-fda-iqos-tpl-2019`

###### 胶黏剂污染固体废物（`adhesive_contaminated_waste`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：乙烯-醋酸乙烯酯胶黏剂污染固体废物
- 流属性/单位：Mass / kg
- 数量规则：测量送往已声明处理路线的废弃胶黏剂残余、擦拭物或受污染包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-fda-iqos-tpl-2019`

### 过程：包装、质量放行与交付准备（`packaging_release`）

#### 输入

##### 产品流

###### 供应包装的未包装含烟草产品（`packaging_product_input`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：未包装含烟草的产品
- 流属性/单位：Mass / kg
- 数量规则：从组装转移到包装的合格产品净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：`us-fda-iqos-tpl-2019`

###### 包装与质量放行用电（`packaging_electricity`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有依据地分表记录批次检验、包装、喷码、装箱、托盘搬运和受控储存用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`us-fda-iqos-tpl-2019`

###### 纸板零售包装盒（`paperboard_retail_pack`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：折叠纸板盒
- 流属性/单位：Mass / kg
- 数量规则：根据领用、退回和组件称重记录取得围绕销售单元投放的纸板净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`us-fda-iqos-tpl-2019`

###### 聚丙烯零售外包膜（`polypropylene_overwrap`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：聚丙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：已声明零售包装使用薄膜外包时记录投放市场的聚丙烯膜净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-pef-2021`

###### 瓦楞运输箱（`corrugated_shipping_case`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：记录归属于放行产品的运输箱瓦楞纸板净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-pef-2021`

###### 木制交付托盘（`wooden_pallet`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：按有记录的周转次数或一次性使用将实测托盘质量分配给批次，并声明重复使用次数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-pef-2021`

###### R-410A 制冷剂补充量（`r410a_makeup`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：R-410A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：按实测运行时间分配包装或受控储存暖通系统的年度 R-410A 补充量；未使用 R-410A 时标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`us-fda-iqos-tpl-2019`

#### 输出

##### 产品流

###### 放行成品（`finished_product`）

该产品流作为所述中间产品或参考产品离开过程边界。其数量按照下述规则从前景记录取得。

- 选定流：含烟草的产品 `653e40de-b5ea-4e0c-8542-98a32e6bae12`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1,000 kg 合格成品净质量；包装质量排除在外并单独记录。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021`; `un-cpc-3-2025`

##### 废物流

###### 包装废纸板（`waste_paperboard`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：废纸板
- 流属性/单位：Mass / kg
- 数量规则：测量离开包装过程的不合格零售盒和瓦楞纸板质量，扣除内部回用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-2021`

###### 包装废聚丙烯薄膜（`waste_polypropylene_film`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：废聚丙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：测量离开包装过程的聚丙烯膜边角和不合格外包膜质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-2021`

###### 损坏托盘废木材（`waste_wood`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：托盘废木材
- 流属性/单位：Mass / kg
- 数量规则：测量退出使用的托盘木材质量，并按已声明重复使用分配归属于批次的份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-2021`

##### 基本流

###### R-410A 制冷剂泄漏到空气（`r410a_to_air`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：R-410A 制冷剂，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：等于有记录的 R-410A 补充量并按库存变化和回收量调整；未使用 R-410A 时标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 产品净放行量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 废物流

###### 进入处理的烟草加工废水（`treatment_wastewater_input`）

该废水作为待处理废物投入进入处理过程。其数量按照下述规则从前景记录取得。

- 选定流：烟草加工废水
- 流属性/单位：Volume / m3
- 数量规则：计量从纳入前景过程进入场内处理系统的废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`us-epa-tobacco-processing-2006`

##### 产品流

###### 废水处理用电（`treatment_electricity`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量筛分、泵送、曝气、混合、澄清和污泥脱水用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`us-epa-tobacco-processing-2006`

###### 除磷用三氯化铁（`ferric_chloride`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：三氯化铁
- 流属性/单位：Mass / kg
- 数量规则：由配方浓度和投加溶液质量计算三氯化铁活性质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_chemicals`
- 来源：`us-epa-tobacco-processing-2006`

###### 消毒用次氯酸钠（`sodium_hypochlorite`）

该材料或能源投入因在所述操作中被消耗而进入过程边界。其数量按照下述规则从前景记录取得。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：采用氯化消毒时，由溶液浓度和投加体积计算次氯酸钠活性质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_chemicals`
- 来源：`us-epa-tobacco-processing-2006`

#### 输出

##### 废物流

###### 脱水废水处理污泥（`wastewater_sludge`）

该废物流离开过程边界进入回收、处理或处置，并与其他废物分别记录。其数量按照下述规则从前景记录取得。

- 选定流：脱水烟草废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：测量离开带式压滤机的湿污泥质量，并保留干固体含量和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-tobacco-processing-2006`

##### 基本流

###### 排放到水体的化学需氧量（`cod_to_water`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：化学需氧量，排放到水体
- 流属性/单位：Mass / kg
- 数量规则：相匹配的处理出水体积乘以实测 COD 浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge_monitoring`
- 来源：`us-epa-tobacco-processing-2006`

###### 排放到水体的总氮（`total_nitrogen_to_water`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：总氮，排放到水体
- 流属性/单位：Mass / kg
- 数量规则：相匹配的处理出水体积乘以实测总氮浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge_monitoring`
- 来源：`us-epa-tobacco-processing-2006`

###### 排放到水体的总磷（`total_phosphorus_to_water`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：总磷，排放到水体
- 流属性/单位：Mass / kg
- 数量规则：相匹配的处理出水体积乘以实测总磷浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge_monitoring`
- 来源：`us-epa-tobacco-processing-2006`

###### 排放到水体的悬浮固体（`suspended_solids_to_water`）

该基本流穿过过程边界进入所述环境介质，并与其他排放分别记录。其数量按照下述前景记录或计算规则取得。

- 选定流：悬浮固体，排放到水体
- 流属性/单位：Mass / kg
- 数量规则：相匹配的处理出水体积乘以实测总悬浮固体浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge_monitoring`
- 来源：`us-epa-tobacco-processing-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用公用工程和多输出操作 | 优先通过分表或过程细分避免分配。无法细分时，采用与过程输出相关的有记录物理关系；只有在说明细分、系统扩展和物理分配均不可行后，才采用经济价值等其他关系。 | `eu-pef-2021` |
| `allocation_internal_rework` | 烟草、薄片和成品返工 | 将内部返工纳入过程质量平衡，不给予第二次产品收益。保留不合格发生前的全部负荷，并量化额外返工投入。 | `us-epa-tobacco-processing-2006`; `eu-pef-2021` |
| `allocation_exported_tobacco_residue` | 作为共产品销售的烟草残余 | 除非残余具有有记录的规格、客户和正经济价值，否则按废物处理。作为共产品时执行 `allocation_subdivision_first` 层级，并披露数量、价格、期间和敏感性。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tobacco_materials` | `tobacco_preparation` | 烟草投入与制备输出 | 接收、领用、转移和水分记录 | 物料 id；供应商；烟草形态；毛重和皮重；水分；批次；转移质量 | 经校准衡器和批次核算 | kg | 每批来料和生产批次 | 完整参考期 | 所有纳入产线 | 一致地汇总净干基或接收基质量；核对期初期末库存 | 校准、供应商规格、批次追溯和签字批记录 |
| `cp_formulation_ingredients` | `tobacco_preparation` | 每一种配方成分 | 配方和领用记录 | 成分 id；浓度；领用质量；退回质量；批次 | 经校准配料和配方系统导出 | kg | 每批次 | 完整参考期 | 范围内全部配方 | 按成分分别汇总净领用量并归一化到输出 | 衡器校准、批准配方和物料证书 |
| `cp_water_records` | `tobacco_preparation` | 产品水和工艺水 | 仪表和批次投加记录 | 仪表 id；起止读数；批次投加；用途；过程 | 独立水表或校准投加系统 | m3 或 kg | 每批次或每日 | 具有代表性的完整生产期 | 每个纳入过程 | 扣除核实的非工艺用水并按用途汇总 | 仪表校准和水平衡 |
| `cp_electricity_records` | 全部过程 | 电力 | 仪表和设备记录 | 仪表 id；读数；间隔；运行时间；额定负荷；过程 | 分表；否则采用有记录的工程分配 | kWh | 连续或每班 | 至少一个代表年或完整生产期 | 全部纳入产线和处理 | 汇总计量用电；按有记录因果驱动分配共用电 | 仪表校准、覆盖率和分配核对 |
| `cp_steam_records` | `tobacco_preparation` | 外购蒸汽 | 供应商仪表和冷凝水记录 | 蒸汽质量或能量；压力；温度；冷凝水回流 | 经校准交接或过程仪表 | kg 蒸汽或 MJ | 连续或每批次 | 完整参考期 | 纳入热设备 | 换算为已声明能量基础，回流收益仅扣除一次 | 仪表校准和热力换算记录 |
| `cp_natural_gas_records` | `tobacco_preparation` | 天然气 | 燃料仪表和账单 | 仪表读数；体积；温度；压力；热值 | 经校准仪表并与账单核对 | m3 和 MJ | 每月并分配到批次 | 完整参考期 | 纳入锅炉和干燥机 | 使用已声明热值换算并按计量或运行时长分配 | 账单核对和仪表校准 |
| `cp_component_materials` | `forming_assembly` | 烟草、管件、滤材、纸和胶黏剂组件 | 物料表、领用、退回和组件称重记录 | 组件 id；供应商；件数；平均质量；领用；退回；批次 | ERP 领料加组件质量核验 | kg | 每批次 | 完整参考期 | 全部组装线 | 按原子组件计算净领用量；与产品和废物质量核对 | 批准物料表、证书和称重检查 |
| `cp_product_release` | `forming_assembly`; `packaging_release` | 合格中间品和成品输出 | 批次、件数、质量和放行记录 | 产品 id；件数；样品质量；批次净质量；不合格量；放行状态 | 经校准衡器和质量放行系统 | kg | 每批次 | 完整参考期 | 范围内全部产品 | 仅汇总放行净质量；排除包装质量 | 放行证书、抽样方案和质量平衡 |
| `cp_packaging_components` | `packaging_release` | 每一包装组件 | 包装领用、退回和规格记录 | 组件 id；材料；件数；单件质量；领用；退回；周转次数 | ERP 领用记录和组件称重 | kg | 每批次 | 完整参考期 | 全部包装形式 | 投放市场的净组件质量；按记录周转次数分配可重复使用托盘 | 供应商规格、样品质量和退回记录 |
| `cp_waste_records` | 全部过程 | 每一废物流 | 容器、衡器和去向记录 | 废物 id；毛重/皮重；适用时干固体；去向；处理 | 经校准衡器或经核实承包商票据 | kg | 每容器或每批运出 | 完整参考期 | 全部纳入操作 | 按原子废物和去向分别汇总；不得与产品投入相抵 | 称重票、联单和质量平衡检查 |
| `cp_wastewater_records` | `tobacco_preparation`; `onsite_wastewater_treatment` | 烟草工艺废水 | 流量计和路线记录 | 进出水体积；来源过程；日期；处理路线 | 经校准流量计或验证水平衡 | m3 | 连续或每日 | 具有代表性的完整生产期 | 范围内全部工艺排水 | 按来源和处理路线汇总，不含生活污水 | 流量计校准、排水图和水平衡 |
| `cp_direct_emissions` | `tobacco_preparation` | PM10 和燃烧排放 | 烟囱、风量、燃料和运行记录 | 浓度；风量；时长；燃料用量；设备；因子版本 | 合规烟囱测试或有记录计算 | kg | 许可频率并分配到批次 | 代表性运行工况 | 全部纳入排放点 | 分别计算每种污染物并按因果操作分配 | 测试报告、实验室 QA 和因子来源 |
| `cp_refrigerant_records` | `packaging_release` | R-410A 补充和泄漏 | 维修和制冷剂库存记录 | 期初库存；采购；充注；回收；期末库存；设备 | 由认证维修记录实施质量平衡 | kg | 每次维修及年度 | 完整参考年 | 可归属暖通设备 | 泄漏=期初+采购-期末-回收-转出；按运行时间分配 | 技术人员记录和库存核对 |
| `cp_treatment_chemicals` | `onsite_wastewater_treatment` | 三氯化铁和次氯酸钠 | 投加和浓度记录 | 化学品 id；溶液质量或体积；浓度；批次 | 经校准计量泵和供应商分析 | kg 活性物质 | 每日 | 完整处理期 | 场内处理 | 分别计算每种化学品活性质量 | 投加校准和分析证书 |
| `cp_discharge_monitoring` | `onsite_wastewater_treatment` | 每一种水污染物 | 流量和实验室记录 | 排放体积；采样时间；COD；总氮；总磷；TSS；方法 | 流量比例采样和认可分析 | m3；mg/L；kg | 许可频率 | 具有代表性的完整生产期 | 最终受控排放 | 浓度与对应体积配对；分别报告各污染物 | 样品流转记录、方法检出限和实验室认可 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化量 = 期间交换量 × 1,000 kg / 同期合格成品净质量 | 期间交换量；放行产品净质量 | 每 1,000 kg 参考产品交换量 |  |
| `calc_component_mass` | 以件数记录的产品和组件 | 质量 = 合格件数 × 经核实平均单件质量；保留抽样不确定性，不得混合产品质量和包装质量 | 件数；样品质量；组件身份 | 按产品或组件的 kg | `us-fda-iqos-tpl-2019` |
| `calc_material_balance` | 烟草制备与组装 | 期初库存+接收-期末库存=合格转移+返工+各废物+实测损失；调查超过场址批准阈值的未核对损失 | 库存、接收、转移、产品、返工和废物记录 | 核对后的物料平衡 | `us-epa-tobacco-processing-2006` |
| `calc_wastewater_load` | 每种排放到水体的污染物 | 负荷 kg = 对应排放体积 m3 × 浓度 mg/L × 0.001 | 流量和污染物浓度 | 排放到水体的污染物 kg | `us-epa-tobacco-processing-2006` |
| `calc_refrigerant_loss` | R-410A | 排放质量=期初库存+采购-期末库存-回收量-转出量 | 年度制冷剂库存和维修记录 | 排放到空气的 R-410A kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明实际含有烟草或再造烟草、预期为不燃烧用途、产品结构以及排除可重复使用装置质量。 | 批准规格、物料表、标签和放行记录；`un-cpc-3-2025`; `wco-hs-2022-chapter-24` |
| `dq_formula_completeness` | 烟草和非烟草配方 | 按数量核算每一种唯一识别的成分、添加剂和组件；不得用保密或汇总总量替代物料表。 | 受控配方、组件清单、供应商证书和批次领用记录；`us-fda-iqos-tpl-2019` |
| `dq_mass_balance` | 烟草制备、组装和包装 | 对每个过程和报告期核对投入与产品、返工、废物、排放和库存变化。 | 签字质量平衡表和差异调查 |
| `dq_temporal_coverage` | 全部前景数据 | 覆盖完整参考年或完整生产期，包括启停、清洗、不合格品和季节性储存负荷。 | 仪表覆盖报告和生产日历 |
| `dq_route_disclosure` | 全部条件过程与流 | 声明再造、蒸汽、天然气、每一组件、R-410A 和场内处理是否适用；缺失行必须有不适用说明。 | 过程图、设备清单、产品结构和废水路线 |
| `dq_source_separation` | UUID 身份和定量证据 | 将 Tiangong UUID 身份与外部过程证据及前景数量分开。 | UUID 直读记录、来源表和采集记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 产品不实际含烟草或再造烟草、预期燃烧、属于纯尼古丁或无烟草产品，或未单独建模而包含可重复使用装置质量时失败。 | `un-cpc-3-2025`; `wco-hs-2022-chapter-24`; `us-fda-iqos-tpl-2019` |
| `validate_reference_mass` | 参考量 | 归一化后合格产品净质量不等于恰好 1,000 kg，或参考量包含包装质量时失败。 |  |
| `validate_atomic_inventory` | 全部清单行 | 电力、蒸汽、天然气、水、成分、组件、包装、废物、制冷剂或排放被合并为集合行而非单独交换时失败。 | `eu-pef-2021`; `us-epa-tobacco-processing-2006` |
| `validate_route_completeness` | 过程图 | 缺少成形与组装或包装与放行时失败；烟草制备和场内废水处理必须有适用性判定。 | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `validate_formula_and_mass_balance` | 前景数据包 | 受控配方、原子组件数量、放行质量、返工和废物不能核对，或差异未经调查时失败。 | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `validate_allocation` | 共用操作和共产品 | 使用分配却未说明细分或系统扩展不可行的原因、所选关系、数据期间和敏感性时失败。 | `eu-pef-2021` |
| `validate_uuid_support` | 含 UUID 的参考产品 | 产品流 UUID、Mass 属性 UUID、Units of mass UUID 或 kg 参考单位不能一致解析时失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经独立方法学审查和发布后可为 `background_dataset` |
| downstream_use | 含烟草产品前景过程数据集和工厂门生命周期模型投影 |
| allowed_use | 烟草存在、不燃烧预期用途、配方、结构、路线、包装和地域与数据集元数据匹配时的产品特定工厂门建模 |
| excluded_use | 可燃烟草产品；纯尼古丁或无烟草产品；可重复使用加热装置；使用阶段健康或暴露评价；不同产品结构之间无支撑比较 |
| required_metadata | 规范 PCR id 和版本；参考 UUID；CPC 和 HS 背景；产品规格；烟草形态和质量分数；完整配方和组件清单；单件质量和件数；路线；包装配置；场址和地域；参考期；上游数据集；分配；废物和处理路线 |
| required_quality_disclosure | 一手数据覆盖率；仪表和衡器校准；配方保密限制；质量平衡闭合；条件流适用性；未解决 UUID 和范围；来源版本；时间、地域和技术代表性 |
| update_trigger | 配方或组件变更；制造路线或场址变更；包装重新设计；新加热结构；物料计量变更；废水路线变更；CPC/HS 范围修订；参考 UUID 变更；新增经审查范围或排放证据 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司：《Central Product Classification (CPC) Version 3.0 Explanatory Notes》，子类 25092，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问日期：2026-08-20）。 | CPC 官方身份及子类 25092 与 HS 2022 品目 24.04 的联系 |
| `wco-hs-2022-chapter-24` | standard | 世界海关组织：《Harmonized System Nomenclature 2022, Chapter 24》，品目 24.04 和子目 2404.11。https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0424_2022e.pdf?la=en（访问日期：2026-08-20）。 | 含烟草、不燃烧吸入产品范围及排除项 |
| `us-fda-iqos-tpl-2019` | official_guidance | 美国食品药品监督管理局：《Premarket Tobacco Product Applications: Technical Project Lead Review, IQOS Tobacco Heating System and Heatsticks》，2019。https://www.fda.gov/media/124247/download?attachment=（访问日期：2026-08-20）。 | 代表性产品结构、烟草芯、配方成分、组件身份、制造控制、质量和稳定性要求 |
| `us-epa-tobacco-processing-2006` | official_guidance | 美国环境保护署：《Final Engineering Report: Tobacco Products Processing Detailed Study》，EPA-821-R-06-015，2006。https://19january2017snapshot.epa.gov/sites/production/files/2015-09/documents/tobacco-products-processing-study_2006.pdf（访问日期：2026-08-20）。 | 烟草调湿、混配、切割、再造薄片生产、成形、包装、不合格品、废水来源、空气污染控制和处理操作 |
| `eu-pef-2021` | official_guidance | 欧盟委员会：《Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods》，Annex I，2021。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（访问日期：2026-08-20）。 | 清单完整性、多功能过程层级、包装和数据质量原则 |
