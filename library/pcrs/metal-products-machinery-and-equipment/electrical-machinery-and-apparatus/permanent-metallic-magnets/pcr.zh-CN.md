---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-metallic-magnets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 金属永磁体

## 1. 范围与适用性

本 PCR 适用于硬磁相为金属材料的成品永磁体本体前景数据包，具体包括采用常规工艺制造的烧结钕铁硼磁体、烧结钐钴磁体以及铸造或烧结铝镍钴磁体。产品评价点为制造商出厂门：产品已完成尺寸精加工、已声明的表面处理、充磁和检验，并已计入不合格品。

金属永磁体不包括陶瓷或铁氧体永磁体、电磁铁、软磁元件、聚合物黏结磁体、带外壳或其他功能件的磁组件，以及作为原料出售的未充磁合金或磁粉。前景边界始于接收特定路线的可直接成形磁性合金或磁粉；该原料及所有其他外购投入的上游生产仍须通过关联的上游数据集纳入。数据集必须声明合金体系、工艺路线、产品牌号、涂层状态、充磁状态、几何形状和生产地域。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-metallic-magnets |
| classification_refs | CPC 3.0：46931，金属永磁体 |
| covered_products | 烧结钕铁硼磁体成品；烧结钐钴磁体成品；铸造或烧结铝镍钴磁体成品 |
| excluded_products | 陶瓷或铁氧体永磁体；电磁铁；软磁磁芯；聚合物黏结磁体；磁组件；作为原料出售的未充磁磁性合金和磁粉 |
| representative_product | 制造商出厂门处已充磁并完成尺寸精加工的金属永磁体本体 |
| production_route | 以可直接成形的钕铁硼磁粉、钐钴磁性合金或磁粉、或铝镍钴磁性合金为原料，经过成形或铸造、热处理、机械加工、条件适用的表面处理、充磁和检验 |
| market_state | 已完成并验收合格的磁体本体；按声明为有涂层或无涂层；不含运输包装和任何组件五金件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 无需持续外部电激励即可维持磁场的金属永磁体成品本体 |
| How much | 1 kg 合格磁体产品净质量 |
| How well | 符合声明的合金体系、牌号或成分规范、磁性能试验、尺寸与公差、涂层规范、充磁方向和磁极配置 |
| How long or cycle | 制造商出厂门处的一次交付产品；本从摇篮到大门参考不声明使用寿命 |
| reference_flow_link | 计入全部制造不合格品、机械加工损失和涂层增加量后的合格产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 磁铁 `0286ac90-a513-4ed7-9f8e-c2df707e5dbb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 金属磁体合金体系；牌号或声明成分；烧结或铸造路线；原生、再生或混合原料占比；产品几何形状和尺寸；产品净质量；涂层材料和厚度或无涂层状态；充磁方向和磁极配置；磁性能验收试验及结果；制造场址和地域；报告期 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。只有与这些限定信息一起使用时，通用的 TianGong 产品流身份才完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_product_mass` | 参考产品和固体材料交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考数量以合格成品磁体净质量确定，不包括运输包装、工装和组件五金件。涂层质量计入成品，同时作为投入单独记录。 |
| `energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始计量能源记录，按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；不得将电力换算为燃料质量。 |
| `gas_reference_conditions` | 氢气和天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量气体体积时须同时报告温度、压力以及干基或湿基；只有保留所用基准状态和换算方法时才可归一化。 |
| `water_conversion` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用实测质量；若计量体积，须保留原体积和质量换算所用密度，并核对取水、循环、蒸发、进入产品和排放。 |
| `direct_fossil_co2` | 现场燃烧二氧化碳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅计算或测量在前景边界内实际释放的排放；不含电力和燃料供应的上游排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址大门接收的可直接成形钕铁硼磁粉、钐钴磁性合金或磁粉、或铝镍钴磁性合金，并声明成分、供应商、再生料含量和物理状态 |
| starting_condition_role | 成形或铸造、热处理、机械加工、条件适用的表面处理、充磁、检验和不合格品核算的前景起点 |
| product_classification_scope | 对应 CPC 3.0 子类 46931 的金属永磁体成品本体；不包括陶瓷或铁氧体磁体和磁组件 |
| recursive_input_rule | 成品金属永磁体作为原料重新投入时，必须作为独立的回收磁体投入记录，披露其前一生命周期和制备边界；不得以参考产品身份递归记录 |
| upstream_dataset_requirement | 为每项外购磁性合金或磁粉、气体、电力、水、涂层材料、化学品和废物处理服务关联与成分和地域相符的上游数据集 |
| disclosure | 声明原料体系和状态、所有纳入的单元操作、成形或铸造和热处理技术、机械加工方式、表面处理、充磁和检验路线、废料回收、污染控制、场址地域、报告期以及任何被排除的操作 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_material` | foreground_start | 前景采集始于接收一种已声明的可直接成形磁性合金或磁粉；其上游生产须以关联数据集纳入，不得省略。 | `cui-et-al-2022-permanent-magnet-manufacturing` |
| `boundary_required_operations` | manufacturing_operations | 纳入将该原料转化为合格磁体的所有场内操作：材料调理、成形或铸造、热处理或烧结、机械加工、条件适用的表面处理、充磁、检验、内部循环和不合格品处理。 | `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing` |
| `boundary_direct_exchanges` | foreground_environment | 纳入场内能源和用水、材料投入、废物、废水和直接基本流排放；不得把关联供应过程的上游排放复制到前景过程。 | `netl-2014-ndfeb-magnet-manufacturing` |
| `boundary_route_disclosure` | route_variation | 只有生产记录能够证明某路线或处理确实不存在时，才可将相应条件流标记为不适用。 | `cui-et-al-2022-permanent-magnet-manufacturing` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `magnet_manufacturing` | 金属永磁体制造 | required | 始终纳入；单元操作记录必须区分适用的成形或铸造、热处理、机械加工、涂覆、充磁和检验步骤 | 将特定路线的磁性原料转化为合格成品磁体的前景过程 | 1 kg 合格金属永磁体净输出 |

### 过程：金属永磁体制造（`magnet_manufacturing`）

#### 输入

##### 产品流

###### 钕铁硼磁粉原料（`ndfeb_magnet_powder`）

记录烧结或其他粉末成形钕铁硼路线接收的钕铁硼磁粉。本行不得用于钐钴、铝镍钴或回收成品磁体。

- 选定流：钕铁硼磁粉，约200微米 `f1334ecc-c198-46fa-b1e8-d7bdc75262b9`
- 流属性/单位：Mass / kg
- 数量规则：计量或计算投入纳入制造操作的干磁粉质量，扣除单独记录的返还物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### 钐钴磁性合金或磁粉原料（`smco_magnet_alloy`）

记录供应给钐钴路线的已声明 SmCo5 或 Sm2Co17 体系磁性合金或磁粉。成分和物理状态是必需的前景限定信息。

- 选定流：钐钴磁性合金或磁粉
- 流属性/单位：Mass / kg
- 数量规则：计量或计算投入纳入制造操作的干燥钐钴磁性原料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`

###### 铝镍钴磁性合金原料（`alnico_magnet_alloy`）

记录供应给铸造或粉末成形操作的铝镍钴合金。必须声明牌号以及采用铸造还是烧结路线。

- 选定流：铝镍钴磁性合金
- 流属性/单位：Mass / kg
- 数量规则：计量或计算投入纳入制造操作的铝镍钴合金
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`

###### 氢破碎用氢气（`hydrogen_gas`）

采用氢破碎或其他纳入的氢处理工艺时，记录跨越场址边界的工业氢气。

- 选定流：工业氢气
- 流属性/单位：Volume / m3
- 数量规则：计量适用处理过程的氢气供应量，并保留基准状态和吹扫气去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_energy_records`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### 外购电能（`electricity`）

记录输送至纳入范围内的调理、成形、炉窑、机械加工、表面处理、充磁、检验和污染控制设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：汇总纳入操作的结算电表和分表记录，并与经分配的场址总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_energy_records`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### 场内热工设备用天然气（`natural_gas`）

仅在纳入的场内热工设备燃烧或消耗气态天然气时记录本流；电力或其他燃料须作为独立交换记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量纳入操作使用的天然气，并保留基准状态和低位热值数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_energy_records`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`

###### 工艺用水（`process_water`）

分别记录冷却、机械加工、清洗或表面处理使用的工艺用水投入，不得与废水输出合并。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越场址边界的补充水，并核对循环、蒸发、进入产品和排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`netl-2014-ndfeb-magnet-manufacturing`

###### 涂层用镍金属（`nickel_metal`）

采用镀镍时，记录跨越过程边界的高纯镍金属。必须声明涂层体系和厚度。

- 选定流：镍金属 `8a1cacfb-0b44-404e-93e0-01a9b7a4403c`
- 流属性/单位：Mass / kg
- 数量规则：根据阳极消耗或经核实的镀液平衡测定镍消耗量，扣除可回收返还镍
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`netl-2014-ndfeb-magnet-manufacturing`

###### 表面处理用氢氧化钠（`sodium_hydroxide`）

采用相应化学体系时，记录清洗或镀镍槽配制所用氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据外购溶液质量和经核实的浓度计算纯 NaOH 质量，并校正库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`netl-2014-ndfeb-magnet-manufacturing`

###### 表面处理用硫酸（`sulfuric_acid`）

采用相应化学体系时，记录清洗、活化或镀镍操作所用硫酸。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：根据外购溶液质量和经核实的浓度计算纯 H2SO4 质量，并校正库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`netl-2014-ndfeb-magnet-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格金属永磁体（`reference_product`）

仅记录通过已声明的尺寸、涂层、充磁和磁性能验收要求的磁体成品本体。

- 选定流：磁铁 `0286ac90-a513-4ed7-9f8e-c2df707e5dbb`
- 流属性/单位：Mass / kg
- 数量规则：在制造商出厂门放行的合格成品磁体实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_quality_records`
- 来源：`un-cpc-3-0-structure-2025`; `cui-et-al-2022-permanent-magnet-manufacturing`

##### 废物流

###### 钕铁硼磁体物料损失（`ndfeb_material_loss`）

将离开前景边界的钕铁硼磨屑、切片损失、磁粉损失和不合格钕铁硼材料作为一种实测废物流记录；其去向和任何内部返料另行报告。

- 选定流：钕铁硼磁体物料损失 `8744667e-6800-4d35-823a-d1c0ef727ab9`
- 流属性/单位：Mass / kg
- 数量规则：将实测外运钕铁硼废物与投入、合格输出、库存变化和内部循环核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### 钐钴磁体物料损失（`smco_material_loss`）

将离开前景边界的钐钴磨屑、磁粉损失和不合格钐钴材料作为具体的钐钴废物流记录。

- 选定流：钐钴磁体物料损失
- 流属性/单位：Mass / kg
- 数量规则：将实测外运钐钴废物与投入、合格输出、库存变化和内部循环核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`

###### 铝镍钴磁体物料损失（`alnico_material_loss`）

将离开前景边界的铝镍钴浇冒口、磨屑和不合格铝镍钴材料作为具体的铝镍钴废物流记录。

- 选定流：铝镍钴磁体物料损失
- 流属性/单位：Mass / kg
- 数量规则：将实测外运铝镍钴废物与投入、合格输出、库存变化和内部循环核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`

###### 镀镍废水（`nickel_plating_wastewater`）

将镀镍、漂洗或相关镀液处理排出的含水废液作为独立废物流记录；不得与固体污泥或直接水体排放合并。

- 选定流：镀镍废水
- 流属性/单位：Mass / kg
- 数量规则：计量送至场内或场外处理的废水，并与表面处理水量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`netl-2014-ndfeb-magnet-manufacturing`

##### 基本流

###### 直接化石源二氧化碳（`fossil_carbon_dioxide`）

记录纳入制造设备现场燃烧天然气产生的化石源二氧化碳。不包括电网和燃料供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据计量的前景天然气消耗和已披露的碳含量或排放因子方法计算，或采用质量受控的直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`cui-et-al-2022-permanent-magnet-manufacturing`

###### 直接排放 PM2.5 颗粒物（`pm25_to_air`）

记录纳入的磁粉处理、炉窑、机械加工和表面处理操作经污染控制后直接释放的有组织及无组织 PM2.5。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用烟道测试、连续或定期监测，或基于实测活动量和污染控制绩效的获准场址计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格金属永磁体净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`netl-2014-ndfeb-magnet-manufacturing`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_site_operations | 在实施分配前，优先按产品体系或生产批次划分计量的生产线、炉窑、机械加工单元、涂覆线和污染控制设备。 |  |
| `allocation_physical_driver` | residual_shared_inputs | 无法划分时，使用设备时间、炉次装料质量、处理表面积或实测产量等有因果关系的物理驱动量分配共用电力、气体、水和耗材；质量不具因果关系时不得默认按产品质量分配。 |  |
| `allocation_scrap_treatment` | magnet_material_loss | 前景边界处的外运物料损失按废物处理，不计入替代原生材料的收益；若建立扩展的回收系统，须披露替代方法，并将其置于不含回收收益的前景结果之外。 | `cui-et-al-2022-permanent-magnet-manufacturing` |
| `allocation_rejects` | internal_recycling | 内部循环的磁粉、浇冒口或磨屑返回物料平衡时，不得重复计为第二项外部投入或输出；须披露内部回收率和损失。 | `cui-et-al-2022-permanent-magnet-manufacturing` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `magnet_manufacturing` | 特定路线的磁性原料和物料损失 | 称量单、批次记录、库存记录和废物转移记录 | alloy_family; grade; physical_state; supplier; recycled_content; opening_inventory_kg; receipts_kg; charge_kg; accepted_output_kg; internal_return_kg; off_site_loss_kg; closing_inventory_kg | 采用经校准的衡器进行批次级物料核对 | kg | 每批或每个生产周期采集并按月汇总 | 至少 12 个有代表性的月份；按生产周期生产时覆盖完整周期 | 声明场址内全部纳入生产线 | 汇总外部投入和输出；内部返料不得重复；按合格产品质量归一化 | 衡器校准、签署的批次记录、库存核对、废物转移记录和未闭合平衡说明 |
| `cp_gas_and_energy_records` | `magnet_manufacturing` | 电力、天然气和氢气 | 公用工程计量、账单、设备分表和批次记录 | meter_id; opening_reading; closing_reading; unit; temperature; pressure; gas_basis; lower_heating_value; operation; lot_or_campaign; allocation_driver | 将场址账单与纳入设备核对，仅分配其余共用耗量 | MJ; m3 | 每月；有分表时按批次 | 与产品输出相同的期间，通常至少 12 个有代表性的月份 | 纳入的生产和污染控制设备 | 电力按 3.6 MJ/kWh 换算；经书面分配后按合格输出归一化 | 仪表校准、账单核对、分表覆盖率、换算记录和分配工作表 |
| `cp_water_balance` | `magnet_manufacturing` | 工艺用水和镀镍废水 | 取水与排水计量、槽罐记录、处理记录和水质记录 | intake_mass_or_volume; density; recirculated_water; evaporation; product_incorporation; wastewater_mass_or_volume; destination; nickel_concentration; sludge_mass | 对纳入操作的取水、回用、损失和废水排放进行核对 | kg; m3 | 每月；适用时关联涂覆批次 | 与产品输出相同的期间 | 纳入的全部冷却、机械加工、清洗、涂覆和处理系统 | 按已披露密度换算体积；分别报告补充水和废水；按合格输出归一化 | 仪表校准、实验室分析、处理联单和水量平衡闭合 |
| `cp_surface_treatment_records` | `magnet_manufacturing` | 镍、氢氧化钠和硫酸 | 采购、镀液配制、浓度、阳极、带出液和库存记录 | coating_system; coated_area_m2; thickness; chemical_name; solution_mass; concentration; anode_mass_change; opening_inventory; additions; returns; closing_inventory | 按涂覆批次分别核对每种化学品和金属 | kg; m2; µm | 每个涂覆批次并按月汇总 | 与涂覆产品输出相同的期间 | 纳入的表面处理线 | 根据溶液质量和浓度计算纯化学品质量；按合格磁体质量归一化并保留处理面积 | 浓度证书、镀液分析、经校准衡器、涂层厚度试验和库存核对 |
| `cp_product_and_quality_records` | `magnet_manufacturing` | 合格金属永磁体 | 最终称量、检验和放行记录 | alloy_family; grade; route; dimensions; coating; magnetization_direction; pole_configuration; mass_kg; magnetic_test_method; test_result; accepted_or_rejected | 采用经校准的最终称量并实施书面尺寸与磁性能验收试验 | kg | 每个生产批次 | 与清单记录相同的期间 | 全部参考产品批次 | 仅汇总合格产品净质量；不含包装和不合格品 | 衡器校准、检验报告、试验设备校准和放行批准 |
| `cp_direct_emissions` | `magnet_manufacturing` | 直接化石源 CO2 和 PM2.5 | 燃料记录、烟道测试、监测数据、污染控制日志和获准计算表 | emission_source; fuel_volume; fuel_carbon_content; factor; stack_flow; concentration; test_duration; abatement_status; operating_hours | 采用源特定测量或基于采集的前景活动数据计算 | kg | 按规定测试计划并按月计算 | 与产品输出相同的期间 | 每个纳入的直接排放源 | 汇总污染控制后的源排放并按合格产品质量归一化；不含上游供应排放 | 实验室认可、监测仪校准、因子来源、计算复核和异常事件日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化数量 = 报告期交换量 / 同期合格产品净质量 | 交换量；合格产品质量 | 每 kg 参考产品的交换量 |  |
| `calc_material_balance` | 各磁性材料体系 | 平衡差额 = 期初库存 + 外部接收量 - 合格输出 - 外运物料损失 - 期末库存；内部返料不计作外部交换 | 期初库存；接收量；合格输出；外运损失；期末库存；内部返料 | 各体系质量平衡差额和核对状态 |  |
| `calc_pure_chemical` | 氢氧化钠和硫酸 | 纯化学品质量 = 供应溶液质量 × 经核实的质量分数，并校正归属于报告期的期初和期末溶液库存 | 溶液质量；浓度；期初库存；期末库存 | kg 纯化学品 | `netl-2014-ndfeb-magnet-manufacturing` |
| `calc_fossil_co2` | 直接燃烧天然气 | 根据计量气量和已披露的碳含量或排放因子方法计算化石源 CO2；保留因子身份、氧化假设和基准状态 | 气体体积；基准状态；低位热值或碳含量；因子；氧化假设 | 直接释放的 kg 化石源 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每批产品必须识别合金体系、牌号或成分、路线、几何形状、涂层、充磁状态和验收结果。 | 产品规范、批次记录、检验报告和磁性能试验结果 |
| `dq_temporal_alignment` | 全部前景记录 | 投入、输出、废物和排放必须覆盖相同生产期间；说明停产、试制、异常事件和跨期库存。 | 带日期的计量、批次、库存、处理和输出记录 |
| `dq_mass_balance` | 磁性材料和水 | 核对各材料体系的物料平衡和场址水量平衡；调查而非掩盖无法解释的差额。 | 已签署的核对工作表和纠正措施记录 |
| `dq_route_coverage` | 条件流 | 只有证据表明相关路线、燃料、涂层或排放源不存在时，才可将条件行标记为不适用。 | 工艺流程图、设备清单、配方和生产记录 |
| `dq_upstream_representativeness` | 关联数据集 | 上游合金或磁粉数据集应尽可能匹配材料体系、成分或牌号、再生料含量、技术和地域；须说明代理数据。 | 供应商声明、数据集元数据和代理理由 |
| `dq_uuid_gaps` | UUID 为空的行 | 在确认准确的 TianGong 公开 state-100 流之前，保留准确的具体流名称和限定信息；不得改用更宽泛或分类不同的 UUID。 | UUID 审查记录和前景流规范 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_product` | reference_flow | 确认输出为已完成并充磁的金属永磁体本体，归一化后等于 1 kg 合格产品净质量，并具备全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_category_exclusions` | product_scope | 拒绝铁氧体或陶瓷磁体、电磁铁、黏结复合磁体、磁组件以及在最终磁体制造前作为原料出售的产品数据集。 | `un-cpc-3-0-structure-2025`; `cui-et-al-2022-permanent-magnet-manufacturing` |
| `validate_route_inventory` | process_inventory | 核实声明路线与所选磁性原料、纳入的单元操作、条件适用的气体和涂覆化学品、废物身份以及合格产品状态一致。 | `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing` |
| `validate_mass_and_water_balance` | completeness | 要求物料体系平衡和水量平衡已核对，内部循环不重复计数，并披露所有无法解释的差额。 |  |
| `validate_direct_emissions` | elementary_flows | 确认化石源 CO2 和 PM2.5 行仅含前景直接释放，且不重复电力、气体、材料或处理数据集中的排放。 |  |
| `validate_evidence_and_uuid_status` | evidence | 确认每项数值来自所声明的采集协议或计算，UUID 为空的流继续明确标记为未解决且未被赋予代理 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以已声明的可直接成形磁性原料制造金属永磁体成品的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 保留合金体系、路线、地域、产品状态、涂层和数据质量元数据的从摇篮到大门产品足迹、组件清单和生命周期模型 |
| excluded_use | 陶瓷或铁氧体磁体；电磁铁；黏结复合磁体；完整磁组件；使用阶段性能或寿命声明；未进行功能等效分析而在钕铁硼、钐钴和铝镍钴之间替代 |
| required_metadata | PCR id 和版本；合金体系和牌号或成分；原料状态和再生料含量；路线和单元操作；场址和地域；报告期；合格输出质量；涂层；充磁；磁性能试验；分配；上游数据集身份；未解决 UUID |
| required_quality_disclosure | 仪表和衡器覆盖率；时间覆盖；物料和水量平衡闭合；条件行证据；分配依据；上游代理；排放方法；不合格批次；缺失数据；不确定性；未解决范围和 UUID 证据需求 |
| update_trigger | 合金体系或牌号、原料来源或再生料含量、成形或热处理技术、机械加工收得率、涂层体系、能源供应、污染控制、场址、分配方法发生变化，或获得足以解决 UUID 或定量范围的证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | CPC 46931 的正式身份及其与陶瓷或铁氧体永磁体的区分 |
| `cui-et-al-2022-permanent-magnet-manufacturing` | 文献（`literature`） | Cui, J. 等（2022），Manufacturing Processes for Permanent Magnets: Part I—Sintering and Casting，JOM 74，1279–1295，https://doi.org/10.1007/s11837-022-05156-9 | 金属磁体材料体系边界；常规钕铁硼、钐钴和铝镍钴工艺分解；机械加工和物料损失相关性 |
| `netl-2014-ndfeb-magnet-manufacturing` | 数据集（`dataset`） | 美国能源部国家能源技术实验室（2014），NETL Life Cycle Inventory Data – Process Documentation File: NdFeB Permanent Magnet Manufacturing，https://www.netl.doe.gov/projects/files/DF_Stage1_O_NdFeB_Magnet_Manufacturing-2014-01.pdf（检索于 2026-09-04） | 钕铁硼工艺顺序；原子投入、废物和排放候选；制造商出厂门采集字段 |
