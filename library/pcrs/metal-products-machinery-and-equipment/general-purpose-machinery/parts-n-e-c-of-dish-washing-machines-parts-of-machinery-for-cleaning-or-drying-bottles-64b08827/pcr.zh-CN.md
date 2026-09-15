---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-n-e-c-of-dish-washing-machines-parts-of-machinery-for-cleaning-or-drying-bottles-64b08827
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 洗碗、容器处理、饮料充气、包装和裹包机械零件

## 1. 范围与适用性

本 PCR 涵盖可销售的替换零件、组件和专用子装配件，其设计功能专用于洗碗机械，或用于清洗、干燥、灌装、封口、密封、加盖、贴标签或以其他方式处理容器、饮料充气、包装或裹包的机械。本 PCR 适用于一个已声明零件设计和制造路线的质量基准、从摇篮到工厂大门前景数据集。

本 PCR 不包括整机、独立销售且不专用于所涵盖机械用途的通用紧固件和标准件、包装服务、安装、维护、分销、机器使用和寿命终止阶段。生产者应识别所涵盖设备系列、零件号、图纸版本、材料组成、制造路线、工厂、地理范围，以及产品属于单一组件还是装配零件。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-n-e-c-of-dish-washing-machines-parts-of-machinery-for-cleaning-or-drying-bottles-64b08827 |
| classification_refs | CPC 3.0: 43944（`un-cpc-3-0-structure-2025`） |
| covered_products | 洗碗、容器清洗或干燥、容器灌装/封口/密封/加盖/贴标签、饮料充气、包装和裹包机械的专用零件及子装配件 |
| excluded_products | 整机；通用紧固件和独立销售的标准件；归入其他特定机械零件类别的零件；服务；分销包装；安装、使用和寿命终止阶段 |
| representative_product | 一件符合已声明图纸和验收规范的成品、已检验、无分销包装机械零件或子装配件 |
| production_route | 从已声明物料接收开始，随后包括报告场址适用的成形、机加工、模塑、连接、清洗、表面精整、装配和检验操作 |
| market_state | 在工厂大门放行时已完工并验收，不含分销包装，且已声明设计版本和材料状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为所述设备系列提供具有已声明配合、材料、几何形状和功能接口的成品机械零件或子装配件 |
| How much | 1 kg 验收合格的成品零件输出 |
| How well | 符合已声明图纸版本、材料规范、尺寸公差、表面状态和工厂验收准则 |
| How long or cycle | 在所声明生产期内于工厂大门放行；使用寿命另行报告，不作为参考流持续期 |
| reference_flow_link | `part_manufacturing` 的验收合格净输出归一化为 1 kg，不包括不合格零件和生产废料 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | CPC 43944 机械成品零件或子装配件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 所涵盖设备系列；零件号和图纸版本；单一组件或子装配件；材料组成和牌号；成品质量；制造技术；表面处理；工厂和地理范围；报告期；验收规范；再生材料含量；内部返工处理；工厂大门无包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 验收合格的参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用验收合格成品的净质量。参考产品输出质量不包括分销包装、不合格零件和生产废料。 |
| `mu_material_mass` | 材料输入和废物输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将采购、领料和废物记录一致转换为干基或收到时质量；若水分、涂层或污染物具有重要性，应予披露。 |
| `mu_electricity` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量电能，并按 1 kWh = 3.6 MJ 换算；不得把上游发电损失并入前景计量用电。 |
| `mu_gas_volume_to_mass` | 二氧化碳保护气 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用供应商质量记录。体积转质量时必须记录气体组成、压力、温度和参考条件。 |

## 5. 系统边界

前景边界始于规定材料和耗材由报告场址接收，止于已声明零件以无包装工厂大门状态验收。纳入场内成形、机加工、模塑、连接、清洗、表面精整、装配、检验、内部物料搬运、计量公用工程、直接排放和所有生产废物。外购投入的上游生产应由单独数据集表示。分销包装、出厂运输、安装、使用、维护和寿命终止阶段不属于本 PCR。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接收的外购材料、耗材和外部制造组件，并声明供应商、牌号、形态、再生材料含量和交付边界 |
| starting_condition_role | 零件制造前景过程的上游产品输入 |
| product_classification_scope | 成品限于 CPC 3.0 子类 43944 的语义边界；排除整机和其他机械零件子类（`un-cpc-3-0-structure-2025`） |
| recursive_input_rule | 已采购且本身属于同一产品类别的零件，以具有自身数据集的上游产品输入记录一次；不得在本前景过程中递归展开其制造清单 |
| upstream_dataset_requirement | 可获得时使用供应商特定数据集；否则采用地理和技术具有代表性的数据集，并披露替代、再生材料含量基准和分配模型 |
| disclosure | 声明设备系列、零件身份、物料清单、材料牌号、所纳入技术、内部返工、废料去向、清洗路线、表面处理、能源边界、工厂大门无包装状态和所有排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_semantic_scope` | 产品身份 | 参考产品必须是 CPC 43944 范围内的成品零件或子装配件，不得为整机或通用金属制品。 | `un-cpc-3-0-structure-2025` |
| `sb_foreground_gate` | 前景过程 | 纳入报告场址控制的、将投入转化或装配成验收合格零件的所有操作，以及相应直接公用工程、废物和基本流排放。 |  |
| `sb_route_condition` | 条件性操作 | 仅纳入已声明零件路线实际采用的成形、机加工、模塑、连接、清洗、表面精整和装配操作；其他路线特定流行须明确标为不适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_manufacturing` | 零件制造、连接、清洗、表面精整和检验 | `required` | 始终纳入；各路线特定交换仅在已声明物料清单和路线采用时适用 | 生产验收合格工厂大门零件的前景过程 | 1 kg 验收合格无包装成品零件 |

### 过程：零件制造、连接、清洗、表面精整和检验（`part_manufacturing`）

#### 输入

##### 产品流

###### 不锈钢板材（`stainless_steel_sheet`）

当不锈钢板材投入已声明零件的成形或机加工时单独记录。

- 选定流：不锈钢板材（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：净领料质量减去有文件记录、原状退回受控库存的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：

###### 初级铝合金板材（`primary_aluminum_alloy_sheet`）

使用初级铝合金板材时单独记录；此流不得用于再生铝或铝箔。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：净领料质量减去有文件记录、原状退回受控库存的未用板材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：

###### 聚酰胺6（PA6）粒料（`pa6_granulate`）

PA6 粒料跨越边界用于模塑零件时单独记录；声明原生/再生含量、牌号、添加剂和返还回用料。

- 选定流：聚酰胺6（PA6）粒料 `55be6cb7-2fb9-4c6f-b37f-08c849c72cf5`
- 流属性/单位：Mass / kg
- 数量规则：净干基领料质量减去有文件记录的未开封退料和内部返还回用料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：

###### 外购电力（`electricity`）

记录所纳入生产操作消耗的计量电力及分配的厂区共用负荷。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量过程用电加按一致方法分配的场址共用电力，并按 `mu_electricity` 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 工艺用水（`process_water`）

工艺用水用于水洗、漂洗或水基机加工时记录；排除生活用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于已声明路线的计量或质量平衡工艺用水输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 实心钢焊丝（`solid_steel_welding_wire`）

仅在连接采用实心钢焊丝耗材时记录；药芯焊丝和焊条须另建前景行。

- 选定流：实心钢焊丝（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：焊丝领用质量减去退回受控库存的有文件记录未用焊丝
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_records`
- 来源：

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅在焊接采购二氧化碳作为保护气时记录；混合气体须拆分为单独原子流行。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：交付质量加期初库存，减去期末库存、退回钢瓶和计量回收气体
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_welding_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格机械成品零件（`reference_product`）

仅记录符合已声明图纸和工厂验收规范的验收合格输出。

- 选定流：CPC 43944 机械成品零件或子装配件
- 流属性/单位：Mass / kg
- 数量规则：验收合格成品净质量，不含分销包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_records`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 场内产生的不锈钢废料（`stainless_steel_scrap`）

记录以废物形式离开前景过程的分类不锈钢边角料、切屑和不合格不锈钢工件。

- 选定流：场内产生的不锈钢废料（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：送外部处理的称重不锈钢废料，扣除有文件记录的内部闭环返回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 铝废料（`aluminum_scrap`）

记录以废物形式离开前景过程的分类铝边角料、切屑和不合格铝工件。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：送外部处理的称重铝废料，扣除有文件记录的内部闭环返回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 聚酰胺6生产废料（`pa6_scrap`）

记录以废物形式离开前景过程的 PA6 流道料、清机料、修边料和不合格模塑件。

- 选定流：聚酰胺6生产废料（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：送外部处理的 PA6 废物称重质量，扣除前景系统内有文件记录的回用料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废切削液（`spent_coolant`）

记录从系统中更换并送外部处理的水混溶性机加工切削液。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的废切削液称重质量或转移文件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

记录水洗或漂洗零件产生并离开前景系统送处理或排放的废水。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或工艺用水扣除计量蒸发和内部循环后的水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：

##### 基本流

###### 排放至空气的化石二氧化碳（`fossil_co2_to_air`）

记录外购保护气输入直接释放的化石二氧化碳；排除上游电力排放和捕集或退回气体。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：外购保护气消耗量减去计量捕集或退回量；未使用二氧化碳保护气路线时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格无包装成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_welding_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | 多产品生产 | 分配前优先按零件系列和路线实施直接计量、物料清单追踪和过程细分。 |  |
| `al_shared_operations` | 共用公用工程和操作 | 无法避免的共用公用工程和操作应采用反映因果关系且有文件记录的物理驱动因素分配，例如机器时间、计量能耗、加工质量或生产时间；不得默认采用收入。 |  |
| `al_scrap` | 生产废料 | 将废料作为单独废物输出报告，并披露内部闭环返回。除非研究声明的分配模型有要求，不得在前景清单内扣除避免原生材料信用。 |  |
| `al_rework` | 内部返工 | 返工能源和材料损失保留在前景系统内，参考流仅计入最终验收合格输出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_records` | `part_manufacturing` | 不锈钢板材、初级铝合金板材和 PA6 输入 | 采购、仓库领料和物料清单记录 | 零件号；材料流行；牌号；形态；供应商；原生/再生状态；期初库存；收货；领料；原状退料；期末库存；质量 | 将材料台账与已声明零件和生产订单核对 | kg | 每个生产订单；每月核对 | 至少连续 12 个有代表性月份或完整生产活动 | 报告场址和已声明零件系列 | 按原子材料流汇总净领料量，再除以验收合格输出质量 | 批准的物料清单；供应商证明；经校准秤记录；库存核对 |
| `cp_utility_records` | `part_manufacturing` | 电力、工艺用水和清洗废水 | 仪表、账单和水量平衡 | 仪表编号；期初/期末读数；单位；过程分配；循环量；蒸发量；废水排放 | 可用时读取专用仪表；否则记录因果分配和水量平衡 | 电力 MJ；水 kg | 每月及路线变化时 | 与产品输出相同期间 | 报告场址；声明所纳入设备和共用负荷边界 | 转换单位、扣除排除负荷并按验收合格输出质量归一化 | 仪表校准；账单核对；分配工作表；水量平衡闭合 |
| `cp_welding_records` | `part_manufacturing` | 实心焊丝、二氧化碳输入和直接二氧化碳释放 | 领料、钢瓶和捕集记录 | 焊丝领用/退回质量；钢瓶交付/退回；气体期初/期末库存；气体组成；捕集气体 | 将耗材领用和钢瓶库存与焊接订单核对 | kg | 每个焊接订单；每月核对 | 与焊接产品输出相同期间 | 报告场址和已声明焊接单元 | 净焊丝领用量和气体消耗量除以验收合格输出；直接排放按 `calc_co2_release` 计算 | 供应商交付记录；库存核对；气体组成；采用捕集时的捕集仪表 |
| `cp_product_output_records` | `part_manufacturing` | 验收合格成品零件 | 生产和检验记录 | 零件号；图纸版本；生产数量；验收合格数量；不合格数量；单位净质量；验收合格总质量 | 称量代表性单件或生产批次，并与检验放行核对 | kg | 每批 | 完整报告期 | 报告场址和已声明零件 | 仅汇总验收合格无包装质量 | 经校准秤；检验放行；不合格记录 |
| `cp_waste_records` | `part_manufacturing` | 不锈钢废料、铝废料、PA6 废料和废切削液 | 废物容器、转移和处理记录 | 废物流行；材料牌号；毛重/皮重；内部返回；去向；处理路线；日期 | 称量分类废物或采用经核实的转移文件质量 | kg | 每次发运；每月核对 | 与产品输出相同期间 | 报告场址 | 按原子流汇总扣除有文件记录内部返回后的外送废物并归一化 | 秤校准；转移联单；废物分类；回收商收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 所有清单行 | 归一化数量 = 期间流量 / 期间验收合格无包装成品质量 | 期间原子流量；验收合格输出质量 | 每 1 kg 参考产品的数量 |  |
| `calc_electricity` | 电力 | MJ = 计量 kWh × 3.6 | 计量 kWh | MJ 电力 |  |
| `calc_cleaning_wastewater` | 清洗废水 | 废水质量 = 工艺用水输入 + 清洗液所含水 − 计量蒸发 − 产品夹带水 − 内部循环水 | 水输入；清洗液所含水；蒸发；夹带；循环 | kg 清洗废水 |  |
| `calc_co2_release` | 保护气二氧化碳 | 直接化石 CO2 释放 = 外购 CO2 净消耗 − 计量捕集 − 有文件记录退回 | 交付；期初/期末库存；退回；捕集气体 | kg 化石 CO2 排放至空气 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 每个汇总产品系列均保留零件号、图纸版本、设备系列、验收规范和单位质量。 | 图纸控制和检验放行记录 |
| `dq_completeness` | 过程清单 | 核对原子材料输入、验收合格输出、不合格品、废料、内部返回和库存变化；解释材料质量平衡差额。 | 签署的核对工作表和库存记录 |
| `dq_temporal` | 所有前景数据 | 采用一个一致且有代表性的期间，并记录停机、试制、异常批次和路线变化。 | 报告期登记和生产日志 |
| `dq_technology` | 路线特定交换 | 识别实际成形、机加工、模塑、连接、清洗和表面精整技术，并明确标记不适用的原子流行。 | 路线卡、设备清单和过程流程复核 |
| `dq_uuid` | 未解决身份 | 保留语义流名称，不得以代理 UUID 替代未解决的参考产品、不锈钢板材、实心焊丝、不锈钢废料或 PA6 废料。 | UUID 审查元数据和最终化搜索收据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | 参考产品 | 确认参考流恰为 1 kg 验收合格无包装成品输出，且产品限定信息完整。 | `un-cpc-3-0-structure-2025` |
| `val_atomic_rows` | 清单 | 拒绝合并的材料、公用工程、废物或排放标签；每项报告交换须保留一个物理或化学身份。 |  |
| `val_route_consistency` | 条件性流 | 确认每项材料、焊接、水、废物和直接排放行仅在其已声明路线适用时使用，否则明确标为不适用。 |  |
| `val_mass_balance` | 材料转化 | 核对净材料输入与验收合格产品、废物、内部返回和库存变化；发布前调查未解释差额。 |  |
| `val_no_double_count` | 能源和排放 | 从直接基本流输出中排除上游电力排放，不得把内部循环水、回用料或废料重复计作第二项外部输入或输出。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经方法审查和代表性汇总后可作为 `background_dataset` |
| downstream_use | 用于设备制造、维护或替换零件供应链中已声明 CPC 43944 机械零件的从摇篮到工厂大门建模 |
| allowed_use | 用于已声明零件设计、材料组合、生产路线、工厂地理范围、技术和时期；外推须记录代表性审查 |
| excluded_use | 整机、通用金属制品、其他机械零件类别、分销包装、安装、机器使用、维护服务和寿命终止阶段 |
| required_metadata | PCR id 和版本；零件号；图纸版本；所涵盖设备系列；产品质量；物料清单；材料牌号和再生材料含量；路线技术；工厂/地理范围；报告期；分配；上游数据集；废物去向；未解决 UUID |
| required_quality_disclosure | 仪表覆盖；材料和废物质量平衡闭合；共用负荷分配；供应商数据比例；时间覆盖；异常运行；内部返工；水循环；气体捕集；数据缺口和代理数据集 |
| update_trigger | 图纸或材料变化；路线或设备变化；表面处理变化；工厂/地理变化；供应商或再生材料含量变化；分配变化；年度能源、水、成品率或废物绩效发生重要变化；精确 UUID 得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；检索日期 2026-06-23；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | CPC 43944 正式身份、纳入措辞及其与相邻机械零件类别的区分 |
