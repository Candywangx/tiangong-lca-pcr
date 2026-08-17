---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-processed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 加工茴香、八角、芫荽、孜然、葛缕子、甜茴香和杜松子

## 1. 范围与适用性

本 PCR 适用于 CPC 23924 下的一种加工香辛料产品：经破碎、切片、折断、开裂、研磨、制粉、干燥、清理或以其他方式加工的茴香果实、八角（大料）果实、芫荽果实、孜然果实、葛缕子果实、甜茴香果实或杜松子。每个前景数据包必须仅代表一个植物学物种和一种最终形态；不得在不同物种之间平均，也不得把整粒、切片、折断、开裂、研磨和粉末形态混合平均。

前景边界从所声明植物原料进入加工设施开始，到净合格加工产品完成包装并在工厂门口放行为止。它包括实际发生的接收与身份核验、干式清理与分级、条件性清洗、干燥与冷却、条件性微生物减除、条件性破碎或研磨与筛分、包装、储存、清洁消毒和条件性场内废水处理。种植、收获、入厂运输、外购物料与公用工程生产、分销、零售、使用及寿命终止不在前景边界内；研究范围需要时由关联的上游或下游数据集表示。

数据包必须声明商品植物部位和科学物种、来料鲜态或干态、来料水分或水活度基准、实际执行的每项加工操作、干燥技术与热源、最终形态、相关粒径或筛分规格、微生物减除路线、包装配置、设施地域和报告期。排除 CPC 01654 未加工品、其他香辛料、多物种混合物、精油、油树脂、提取物和复合食品制品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-processed |
| classification_refs | CPC 3.0：23924，exact |
| covered_products | 加工茴香果实、八角或大料果实、芫荽果实、孜然果实、葛缕子果实、甜茴香果实或杜松子；每个数据包仅报告一个物种和一种明确声明的整粒、切片、折断、开裂、研磨、粉末或其他加工形态 |
| excluded_products | CPC 01654 原料或未加工品；七种指定植物以外的香辛料；多物种混合物；精油；油树脂；提取物；复合食品；未明确物种或跨物种平均 |
| representative_product | 一个已声明物种和加工形态、符合适用合同、食品安全、水分、粒径和包装规格的产品 |
| production_route | 物种特定接收、身份核验、清理分级、条件性清洗、条件性干燥冷却、条件性微生物减除、条件性破碎或研磨筛分、包装、储存、清洁消毒和条件性场内废水处理 |
| market_state | 工厂门口的净合格加工产品，具有所声明的整粒、切片、折断、开裂、研磨、粉末或其他加工状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 恰好由茴香、八角、芫荽、孜然、葛缕子、甜茴香或杜松子之一制成的合格加工产品 |
| How much | 1 kg 净产品，不含一级、二级和三级包装 |
| How well | 满足所声明物种身份、最终形态、粒径或筛分规格、水分或水活度准则、食品安全规格和放行等级 |
| How long or cycle | 在工厂门口放行的一批完整制造批次或报告期生产批；声明储存时长 |
| reference_flow_link | 包装与储存过程放行的净合格 CPC 23924 产品质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed `1ae74dcb-8fbf-4b6d-a2d4-d2effa668cce` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 准确普通名和科学物种；商品植物部位；来料状态和水分基准；加工路线；干燥技术与热源；微生物减除路线或明确未采用；最终形态；粒径或筛分规格；净产品质量；包装配置；放行等级；场址地域；报告期；储存时长 |

构建前景数据包时，`必需限定信息` 中的每一项必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息会使参考流不完整。包装质量作为清单投入记录，不计入 1 kg 参考数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 净合格产品；从参考质量中排除全部包装和不合格品。 |
| `wet_dry_basis` | 植物投入、产品、筛下物、粉尘和拒收物 | Mass | kg | 记录实测来料质量及水分或水活度；任何干物质换算必须保留测量方法与计算。 |
| `stage_energy` | 用电、蒸汽、热水及每种燃料 | Energy 或质量/体积及有文件依据的换算 | kWh、MJ、kg、m3 或 L | 在使用阶段分别记录每种载体；不得用合并能源总量替代。 |
| `water_balance` | 清洗与清洁消毒用水及废水 | Volume 或 Mass | m3 或 kg | 分别计量供水和每股废水；体积转质量时记录密度。 |
| `packaging_mass` | 每个包装组件及其废料 | Mass | kg | 分材料计量，并从净参考产品质量中排除包装。 |
| `particle_size` | 切片、折断、开裂、研磨或粉末产品 | 所声明筛分或粒径指标 | mm、µm 或筛上/筛下质量分数 | 声明测试方法、筛孔和实测分布；不得混合不同形态。 |
| `emission_load` | 直接空气与水排放 | Mass | kg | 使用直接测量，或按实测活动数据及有引用或场址依据的因子透明计算；逐物质报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一种进入加工设施的指定植物原料，并声明植物部位、科学物种、鲜态或干态、水分或水活度、来源及供应商批次 |
| starting_condition_role | 前景门口投入；种植、收获和入厂运输作为关联上游，而非加工操作 |
| product_classification_scope | 仅 CPC 23924；七种指定物种之一和一种明确加工形态 |
| recursive_input_rule | 若投入已符合 CPC 23924，则作为外购加工香辛料投入记录并关联其上游数据集，不在同一前景过程中对该投入递归应用本 PCR |
| upstream_dataset_requirement | 为植物投入、公用工程、化学品、包装、辐照服务和场外处理关联物种、来源、状态及供应商具有代表性的数据集；披露全部代理 |
| disclosure | 报告纳入和省略阶段、来料状态、全部路线选择、共用设备分配、储存条件、废水去向、废物处置及数据缺口 |

| rule_id | 规则 |
| --- | --- |
| `boundary_species_lock` | 数据包必须仅含一个已声明植物物种和一种最终产品形态；禁止跨物种和跨形态平均。 |
| `boundary_route_lock` | 仅纳入所声明批次或同质生产期实际执行的操作，并以证据将每个条件性过程标记为适用或不适用。 |
| `boundary_foreground_gate` | 采集从原料接收到包装产品放行的设施操作；研究需要时以关联数据集建模种植、入厂运输、外购投入生产、分销、使用和寿命终止。 |
| `boundary_internal_transfer` | 工厂门口过程可合并内部中间转移，但阶段投入、损失、废物及排放必须可追溯至过程图和质量平衡。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_identity_control` | 接收、身份核验与初步分选 | required | 加工 CPC 23924 产品始终纳入 | 建立单一物种批次身份、来料状态、接受质量、拒收物及来料包装废物 | 按供应商批次计的接受植物原料质量 |
| `dry_cleaning_grading` | 干式清理、分级与异物去除 | required | 始终纳入并记录实际设备组合 | 将所声明植物原料与筛下物、捕集粉尘、石块、金属及逸散粉尘分开 | 按批次计的清理后植物原料质量 |
| `wet_washing_draining` | 湿法清洗与沥水 | conditional | 仅在实际使用饮用级水清洗时纳入 | 记录清洗水、阶段用电和物种特定清洗废水 | 按批次计的清洗后植物原料质量 |
| `controlled_drying_cooling` | 受控干燥与冷却 | conditional | 场址实施干燥、复干、调质或主动冷却时纳入 | 记录阶段用电、每种热载体、每种燃料、制冷剂及直接空气排放 | 按批次计的干燥后植物原料质量 |
| `microbial_reduction` | 微生物减除处理 | conditional | 仅对所声明蒸汽、辐照或其他依法允许并验证的路线纳入 | 记录处理专用公用工程、服务和冷凝液 | 按批次计的处理后植物原料质量 |
| `crushing_grinding_sieving` | 破碎、研磨与筛分 | conditional | 切片、破碎、开裂、研磨、粉末形态或采用粒度缩减/筛分时纳入 | 记录用电、压缩空气、允许的单一抗结剂、筛上物、捕集粉尘和逸散粉尘 | 按形态和筛分规格计的合格加工质量 |
| `packaging_storage_release` | 包装、受控储存与放行 | required | 始终纳入；冷藏储存为条件性 | 记录每种包装材料、储存用电、制冷剂、包装废料、不合格品和参考输出 | 净放行产品质量 |
| `cleaning_sanitation` | 设备与区域清洁消毒 | required | 优先干式清洁；仅在使用时记录液体清洁和每种化学品 | 记录水、热、用电、每种化学品及其废水流 | 清洁设备面积或生产批次 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 工艺废水在前景设施内处理时纳入 | 记录每种进水废水、处理投入、污泥、出水和每种水排放 | 处理废水体积 |

### 过程：接收、身份核验与初步分选（`receipt_and_identity_control`）

#### 输入

##### 产品流

###### 茴香 原料（`anise_material_input`）

本卡仅记录具体流“Anise fruit for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise fruit for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 八角 原料（`star_anise_material_input`）

本卡仅记录具体流“Star anise fruit for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise fruit for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 芫荽 原料（`coriander_material_input`）

本卡仅记录具体流“Coriander fruit for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander fruit for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 孜然 原料（`cumin_material_input`）

本卡仅记录具体流“Cumin fruit for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin fruit for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxs-327-2017`, `eu-pef-2021-2279`

###### 葛缕子 原料（`caraway_material_input`）

本卡仅记录具体流“Caraway fruit for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway fruit for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 甜茴香 原料（`fennel_material_input`）

本卡仅记录具体流“Sweet fennel fruit for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel fruit for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 杜松子 原料（`juniper_material_input`）

本卡仅记录具体流“Juniper berries for food processing”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berries for food processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net conforming product of the 同一物种和形态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`un-cpc-3-0`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 接收用电（`receipt_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃黄麻袋（`receipt_jute_sack_waste`）

本卡仅记录具体流“Used jute sack”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Used jute sack
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 废弃聚丙烯编织袋（`receipt_pp_sack_waste`）

本卡仅记录具体流“Used polypropylene woven sack”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Used polypropylene woven sack
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 废弃聚乙烯袋内衬（`receipt_pe_liner_waste`）

本卡仅记录具体流“Used polyethylene bag liner”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Used polyethylene bag liner
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`eu-pef-2021-2279`

###### 拒收的 茴香 fruit（`rejected_anise_material`）

本卡仅记录具体流“Rejected anise fruit”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected anise fruit
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 拒收的 star 茴香 fruit（`rejected_star_anise_material`）

本卡仅记录具体流“Rejected star anise fruit”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected star anise fruit
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 star 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 拒收的 芫荽 fruit（`rejected_coriander_material`）

本卡仅记录具体流“Rejected coriander fruit”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected coriander fruit
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 芫荽果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 拒收的 孜然 fruit（`rejected_cumin_material`）

本卡仅记录具体流“Rejected cumin fruit”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected cumin fruit
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 孜然果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxs-327-2017`, `eu-pef-2021-2279`

###### 拒收的 葛缕子 fruit（`rejected_caraway_material`）

本卡仅记录具体流“Rejected caraway fruit”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected caraway fruit
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 葛缕子果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 拒收的 甜茴香 fruit（`rejected_fennel_material`）

本卡仅记录具体流“Rejected sweet fennel fruit”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected sweet fennel fruit
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 甜茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 拒收的 杜松子 berries（`rejected_juniper_material`）

本卡仅记录具体流“Rejected juniper berries”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Rejected juniper berries
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接受的 杜松子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 分离出的石块（`foreign_stone_waste`）

本卡仅记录具体流“Separated stones from food raw material”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Separated stones from food raw material
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxs-327-2017`, `eu-pef-2021-2279`

###### 分离出的黑色金属（`foreign_metal_waste`）

本卡仅记录具体流“Separated ferrous metal from food raw material”跨越“接收、身份核验与初步分选”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Separated ferrous metal from food raw material
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity`
- 来源：`codex-cxs-327-2017`, `eu-pef-2021-2279`

##### 基本流

### 过程：干式清理、分级与异物去除（`dry_cleaning_grading`）

#### 输入

##### 产品流

###### 干式清理用电（`dry_cleaning_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `fao-herb-spice-processing`, `eu-bat-fdm-2019-2031`

###### 干式清理压缩空气（`dry_cleaning_compressed_air_input`）

本卡仅记录具体流“Compressed air for food-processing equipment”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Compressed air for food-processing equipment
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 清理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 茴香 清理筛下物（`anise_cleaning_screenings`）

本卡仅记录具体流“Anise cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxc-78-2017`

###### 八角 清理筛下物（`star_anise_cleaning_screenings`）

本卡仅记录具体流“Star anise cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 star 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxs-358-2024`

###### 芫荽 清理筛下物（`coriander_cleaning_screenings`）

本卡仅记录具体流“Coriander cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 芫荽果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxc-78-2017`

###### 孜然 清理筛下物（`cumin_cleaning_screenings`）

本卡仅记录具体流“Cumin cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 孜然果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxs-327-2017`

###### 葛缕子 清理筛下物（`caraway_cleaning_screenings`）

本卡仅记录具体流“Caraway cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 葛缕子果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxc-78-2017`

###### 甜茴香 清理筛下物（`fennel_cleaning_screenings`）

本卡仅记录具体流“Sweet fennel cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 甜茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxc-78-2017`

###### 杜松子 清理筛下物（`juniper_cleaning_screenings`）

本卡仅记录具体流“Juniper berry cleaning screenings”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 杜松子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`codex-cxc-42-1995`, `codex-cxs-358-2024`

###### 捕集的 茴香 粉尘（`captured_anise_cleaning_dust`）

本卡仅记录具体流“Captured anise fruit dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured anise fruit dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 star 茴香 粉尘（`captured_star_anise_cleaning_dust`）

本卡仅记录具体流“Captured star anise fruit dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured star anise fruit dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 star 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 芫荽 粉尘（`captured_coriander_cleaning_dust`）

本卡仅记录具体流“Captured coriander fruit dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured coriander fruit dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 芫荽果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 孜然 粉尘（`captured_cumin_cleaning_dust`）

本卡仅记录具体流“Captured cumin fruit dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured cumin fruit dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 孜然果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 葛缕子 粉尘（`captured_caraway_cleaning_dust`）

本卡仅记录具体流“Captured caraway fruit dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured caraway fruit dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 葛缕子果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 甜茴香 粉尘（`captured_fennel_cleaning_dust`）

本卡仅记录具体流“Captured sweet fennel fruit dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured sweet fennel fruit dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 甜茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 杜松子 粉尘（`captured_juniper_cleaning_dust`）

本卡仅记录具体流“Captured juniper berry dust”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured juniper berry dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清理后的 杜松子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

###### 茴香 粉尘 to air（`anise_cleaning_dust_to_air`）

本卡仅记录具体流“Anise fruit dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 八角 粉尘 to air（`star_anise_cleaning_dust_to_air`）

本卡仅记录具体流“Star anise fruit dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 star 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 芫荽 粉尘 to air（`coriander_cleaning_dust_to_air`）

本卡仅记录具体流“Coriander fruit dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 芫荽果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 孜然 粉尘 to air（`cumin_cleaning_dust_to_air`）

本卡仅记录具体流“Cumin fruit dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 孜然果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 葛缕子 粉尘 to air（`caraway_cleaning_dust_to_air`）

本卡仅记录具体流“Caraway fruit dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 葛缕子果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 甜茴香 粉尘 to air（`fennel_cleaning_dust_to_air`）

本卡仅记录具体流“Sweet fennel fruit dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 甜茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

###### 杜松子 粉尘 to air（`juniper_cleaning_dust_to_air`）

本卡仅记录具体流“Juniper berry dust to air”跨越“干式清理、分级与异物去除”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清理后的 杜松子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dry_cleaning`
- 来源：`eu-bat-fdm-2019-2031`

### 过程：湿法清洗与沥水（`wet_washing_draining`）

#### 输入

##### 产品流

###### 饮用级清洗水（`washing_water_input`）

本卡仅记录具体流“Potable water”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清洗后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `fao-herb-spice-processing`, `eu-bat-fdm-2019-2031`

###### 清洗用电（`washing_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 清洗后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 茴香 清洗废水（`anise_washing_wastewater`）

本卡仅记录具体流“Anise fruit washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 八角 清洗废水（`star_anise_washing_wastewater`）

本卡仅记录具体流“Star anise fruit washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 star 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 芫荽 清洗废水（`coriander_washing_wastewater`）

本卡仅记录具体流“Coriander fruit washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 芫荽果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 孜然 清洗废水（`cumin_washing_wastewater`）

本卡仅记录具体流“Cumin fruit washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 孜然果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `codex-cxs-327-2017`, `eu-bat-fdm-2019-2031`

###### 葛缕子 清洗废水（`caraway_washing_wastewater`）

本卡仅记录具体流“Caraway fruit washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 葛缕子果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 甜茴香 清洗废水（`fennel_washing_wastewater`）

本卡仅记录具体流“Sweet fennel fruit washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 甜茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 杜松子 清洗废水（`juniper_washing_wastewater`）

本卡仅记录具体流“Juniper berry washing wastewater”跨越“湿法清洗与沥水”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 清洗后的 杜松子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_washing`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

##### 基本流

### 过程：受控干燥与冷却（`controlled_drying_cooling`）

#### 输入

##### 产品流

###### 干燥用电（`drying_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### 外购干燥蒸汽（`drying_steam_input`）

本卡仅记录具体流“Purchased steam”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 外购干燥热水（`drying_hot_water_input`）

本卡仅记录具体流“Purchased hot water for food processing”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Purchased hot water for food processing
- 流属性/单位：Energy / MJ
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-bat-fdm-2019-2031`

###### 干燥机用天然气（`dryer_natural_gas_input`）

本卡仅记录具体流“Natural gas”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 干燥机用柴油（`dryer_diesel_input`）

本卡仅记录具体流“Diesel fuel”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 干燥机用液化石油气（`dryer_lpg_input`）

本卡仅记录具体流“Liquefied petroleum gas”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 干燥机用煤油（`dryer_kerosene_input`）

本卡仅记录具体流“Kerosene”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Kerosene
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `fao-herb-spice-processing`

###### 烟熏干燥机用干薪柴（`dryer_firewood_input`）

本卡仅记录具体流“Dry firewood for spice smoke drying”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Dry firewood for spice smoke drying
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、称量和燃料台账采集干薪柴质量及其水分基准；仅在烟熏干燥路线实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 烟熏干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 氨制冷剂补充（`drying_r717_makeup_input`）

本卡仅记录具体流“Ammonia refrigerant R717”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：从制冷剂充注、维护和库存记录采集本制冷剂的具体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 主动冷却的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`

###### 二氧化碳制冷剂补充（`drying_r744_makeup_input`）

本卡仅记录具体流“Carbon dioxide refrigerant R744”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon dioxide refrigerant R744
- 流属性/单位：Mass / kg
- 数量规则：从制冷剂充注、维护和库存记录采集本制冷剂的具体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 主动冷却的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`

###### 丙烷制冷剂补充（`drying_r290_makeup_input`）

本卡仅记录具体流“Propane refrigerant R290”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Propane refrigerant R290
- 流属性/单位：Mass / kg
- 数量规则：从制冷剂充注、维护和库存记录采集本制冷剂的具体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 主动冷却的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 干燥机燃烧产生的化石二氧化碳（`dryer_fossil_co2_to_air`）

本卡仅记录具体流“Carbon dioxide, fossil, to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

###### 干燥机燃烧产生的生物源二氧化碳（`dryer_biogenic_co2_to_air`）

本卡仅记录具体流“Carbon dioxide, biogenic, to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：以实测干薪柴质量、实测水分及有文件依据的生物源碳含量或排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 烟熏干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 干燥机燃烧产生的一氧化碳（`dryer_co_to_air`）

本卡仅记录具体流“Carbon monoxide to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-bat-fdm-2019-2031`

###### 干燥机燃烧产生的氮氧化物（`dryer_nox_to_air`）

本卡仅记录具体流“Nitrogen oxides to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-bat-fdm-2019-2031`

###### 干燥机燃烧产生的硫氧化物（`dryer_sox_to_air`）

本卡仅记录具体流“Sulfur oxides to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sulfur oxides to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-bat-fdm-2019-2031`

###### 干燥机燃烧产生的 PM10（`dryer_pm10_to_air`）

本卡仅记录具体流“Particulate matter, less than 10 micrometres, to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Particulate matter, less than 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-bat-fdm-2019-2031`

###### 干燥机燃烧产生的 PM2.5（`dryer_pm25_to_air`）

本卡仅记录具体流“Particulate matter, less than 2.5 micrometres, to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Particulate matter, less than 2.5 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-bat-fdm-2019-2031`

###### 氨制冷剂向空气泄漏（`drying_r717_to_air`）

本卡仅记录具体流“Ammonia refrigerant R717 to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Ammonia refrigerant R717 to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 主动冷却的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`

###### 二氧化碳制冷剂向空气泄漏（`drying_r744_to_air`）

本卡仅记录具体流“Carbon dioxide refrigerant R744 to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon dioxide refrigerant R744 to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 主动冷却的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`

###### 丙烷制冷剂向空气泄漏（`drying_r290_to_air`）

本卡仅记录具体流“Propane refrigerant R290 to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Propane refrigerant R290 to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 主动冷却的植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`eu-pef-2021-2279`

###### 茴香 干燥粉尘向空气排放（`anise_drying_dust_to_air`）

本卡仅记录具体流“Anise fruit dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 八角 干燥粉尘向空气排放（`star_anise_drying_dust_to_air`）

本卡仅记录具体流“Star anise fruit dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 star 茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 芫荽 干燥粉尘向空气排放（`coriander_drying_dust_to_air`）

本卡仅记录具体流“Coriander fruit dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 芫荽果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 孜然 干燥粉尘向空气排放（`cumin_drying_dust_to_air`）

本卡仅记录具体流“Cumin fruit dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 孜然果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `codex-cxs-327-2017`, `eu-bat-fdm-2019-2031`

###### 葛缕子 干燥粉尘向空气排放（`caraway_drying_dust_to_air`）

本卡仅记录具体流“Caraway fruit dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 葛缕子果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 甜茴香 干燥粉尘向空气排放（`fennel_drying_dust_to_air`）

本卡仅记录具体流“Sweet fennel fruit dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 甜茴香果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### 杜松子 干燥粉尘向空气排放（`juniper_drying_dust_to_air`）

本卡仅记录具体流“Juniper berry dust to air”跨越“受控干燥与冷却”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥后的 杜松子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_cooling`
- 来源：`codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

### 过程：微生物减除处理（`microbial_reduction`）

#### 输入

##### 产品流

###### 微生物减除用电（`microbial_reduction_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“微生物减除处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 处理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_reduction`
- 来源：`codex-cxc-42-1995`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 产品接触蒸汽（`microbial_reduction_steam_input`）

本卡仅记录具体流“Food-grade product-contact steam”跨越“微生物减除处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Food-grade product-contact steam
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg steam-处理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_reduction`
- 来源：`codex-cxc-42-1995`, `codex-cxc-78-2017`

###### 蒸汽处理用水（`microbial_reduction_water_input`）

本卡仅记录具体流“Potable water”跨越“微生物减除处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg steam-处理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_reduction`
- 来源：`codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

###### 伽马辐照处理服务（`gamma_irradiation_service_input`）

本卡仅记录具体流“Gamma irradiation treatment service for food”跨越“微生物减除处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Gamma irradiation treatment service for food
- 流属性/单位：Mass / kg treated
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 伽马辐照后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_reduction`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 电子束辐照处理服务（`electron_beam_service_input`）

本卡仅记录具体流“Electron-beam irradiation treatment service for food”跨越“微生物减除处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Electron-beam irradiation treatment service for food
- 流属性/单位：Mass / kg treated
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg electron-beam-处理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_reduction`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 蒸汽处理冷凝液（`microbial_reduction_condensate`）

本卡仅记录具体流“Steam-treatment condensate from food processing”跨越“微生物减除处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Steam-treatment condensate from food processing
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg steam-处理后植物原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_reduction`
- 来源：`codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

##### 基本流

### 过程：破碎、研磨与筛分（`crushing_grinding_sieving`）

#### 输入

##### 产品流

###### 研磨用电（`milling_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格加工产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxs-327-2017`, `codex-cxs-358-2024`, `eu-bat-fdm-2019-2031`

###### 研磨压缩空气（`milling_compressed_air_input`）

本卡仅记录具体流“Compressed air for food-processing equipment”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Compressed air for food-processing equipment
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格加工产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

###### 二氧化硅抗结剂（`silicon_dioxide_input`）

本卡仅记录具体流“Silicon dioxide, food grade”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Silicon dioxide, food grade
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格粉状产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxs-327-2017`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 磷酸三钙抗结剂（`tricalcium_phosphate_input`）

本卡仅记录具体流“Tricalcium phosphate, food grade”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Tricalcium phosphate, food grade
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格粉状产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxs-327-2017`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 茴香 研磨筛上物（`anise_milling_oversize`）

本卡仅记录具体流“Anise milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

###### 八角 研磨筛上物（`star_anise_milling_oversize`）

本卡仅记录具体流“Star anise milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming star 茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 芫荽 研磨筛上物（`coriander_milling_oversize`）

本卡仅记录具体流“Coriander milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 芫荽产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

###### 孜然 研磨筛上物（`cumin_milling_oversize`）

本卡仅记录具体流“Cumin milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 孜然产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxs-327-2017`, `eu-pef-2021-2279`

###### 葛缕子 研磨筛上物（`caraway_milling_oversize`）

本卡仅记录具体流“Caraway milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 葛缕子产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

###### 甜茴香 研磨筛上物（`fennel_milling_oversize`）

本卡仅记录具体流“Sweet fennel milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 甜茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

###### 杜松子 研磨筛上物（`juniper_milling_oversize`）

本卡仅记录具体流“Juniper berry milling oversize”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry milling oversize
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 杜松子产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 捕集的 茴香 milling 粉尘（`captured_anise_milling_dust`）

本卡仅记录具体流“Captured anise milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured anise milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 star 茴香 milling 粉尘（`captured_star_anise_milling_dust`）

本卡仅记录具体流“Captured star anise milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured star anise milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming star 茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 芫荽 milling 粉尘（`captured_coriander_milling_dust`）

本卡仅记录具体流“Captured coriander milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured coriander milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 芫荽产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 孜然 milling 粉尘（`captured_cumin_milling_dust`）

本卡仅记录具体流“Captured cumin milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured cumin milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 孜然产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 葛缕子 milling 粉尘（`captured_caraway_milling_dust`）

本卡仅记录具体流“Captured caraway milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured caraway milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 葛缕子产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 甜茴香 milling 粉尘（`captured_fennel_milling_dust`）

本卡仅记录具体流“Captured sweet fennel milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured sweet fennel milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 甜茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 捕集的 杜松子 milling 粉尘（`captured_juniper_milling_dust`）

本卡仅记录具体流“Captured juniper berry milling dust”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Captured juniper berry milling dust
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 杜松子产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

###### 茴香 研磨粉尘向空气排放（`anise_milling_dust_to_air`）

本卡仅记录具体流“Anise fruit dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 八角 研磨粉尘向空气排放（`star_anise_milling_dust_to_air`）

本卡仅记录具体流“Star anise fruit dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming star 茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 芫荽 研磨粉尘向空气排放（`coriander_milling_dust_to_air`）

本卡仅记录具体流“Coriander fruit dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 芫荽产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 孜然 研磨粉尘向空气排放（`cumin_milling_dust_to_air`）

本卡仅记录具体流“Cumin fruit dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 孜然产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 葛缕子 研磨粉尘向空气排放（`caraway_milling_dust_to_air`）

本卡仅记录具体流“Caraway fruit dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 葛缕子产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 甜茴香 研磨粉尘向空气排放（`fennel_milling_dust_to_air`）

本卡仅记录具体流“Sweet fennel fruit dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel fruit dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 甜茴香产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

###### 杜松子 研磨粉尘向空气排放（`juniper_milling_dust_to_air`）

本卡仅记录具体流“Juniper berry dust to air”跨越“破碎、研磨与筛分”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry dust to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg conforming 杜松子产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-bat-fdm-2019-2031`

### 过程：包装、受控储存与放行（`packaging_storage_release`）

#### 输入

##### 产品流

###### 包装与储存用电（`packaging_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

###### 牛皮纸袋（`kraft_paper_sack_input`）

本卡仅记录具体流“Kraft paper sack”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Kraft paper sack
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

###### 聚丙烯编织袋（`pp_woven_sack_input`）

本卡仅记录具体流“Polypropylene woven sack”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Polypropylene woven sack
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 低密度聚乙烯内衬（`ldpe_liner_input`）

本卡仅记录具体流“Low-density polyethylene bag liner”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Low-density polyethylene bag liner
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-42-1995`, `eu-pef-2021-2279`

###### 高密度聚乙烯罐（`hdpe_jar_input`）

本卡仅记录具体流“High-density polyethylene jar”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：High-density polyethylene jar
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 玻璃罐（`glass_jar_input`）

本卡仅记录具体流“Clear glass jar”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Clear glass jar
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 镀锡钢罐（`tinplate_can_input`）

本卡仅记录具体流“Tinplate food can”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Tinplate food can
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸箱（`corrugated_box_input`）

本卡仅记录具体流“Corrugated fibreboard box”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 纸标签（`paper_label_input`）

本卡仅记录具体流“Paper product label”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Paper product label
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 木托盘（`wood_pallet_input`）

本卡仅记录具体流“Wood pallet”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯缠绕膜（`ldpe_stretch_film_input`）

本卡仅记录具体流“Low-density polyethylene stretch film”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 储存系统氨制冷剂补充（`storage_r717_makeup_input`）

本卡仅记录具体流“Ammonia refrigerant R717”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：从制冷剂充注、维护和库存记录采集本制冷剂的具体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏放行产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 储存系统二氧化碳制冷剂补充（`storage_r744_makeup_input`）

本卡仅记录具体流“Carbon dioxide refrigerant R744”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon dioxide refrigerant R744
- 流属性/单位：Mass / kg
- 数量规则：从制冷剂充注、维护和库存记录采集本制冷剂的具体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏放行产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 储存系统丙烷制冷剂补充（`storage_r290_makeup_input`）

本卡仅记录具体流“Propane refrigerant R290”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Propane refrigerant R290
- 流属性/单位：Mass / kg
- 数量规则：从制冷剂充注、维护和库存记录采集本制冷剂的具体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏放行产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考加工香辛料输出（`reference_product_output`）

本卡仅记录具体流“Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed `1ae74dcb-8fbf-4b6d-a2d4-d2effa668cce`”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed `1ae74dcb-8fbf-4b6d-a2d4-d2effa668cce`
- 流属性/单位：Mass / kg
- 数量规则：固定为 1 kg 净合格产品，并排除所有包装组件与不合格品。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg net conforming product 并声明全部必需限定信息
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_release`
- 来源：`un-cpc-3-0`, `codex-cxs-327-2017`, `codex-cxs-358-2024`

##### 废物流

###### 牛皮纸袋废料（`kraft_paper_sack_scrap`）

本卡仅记录具体流“Kraft paper sack scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Kraft paper sack scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 聚丙烯编织袋废料（`pp_woven_sack_scrap`）

本卡仅记录具体流“Polypropylene woven sack scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Polypropylene woven sack scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯内衬废料（`ldpe_liner_scrap`）

本卡仅记录具体流“Low-density polyethylene liner scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Low-density polyethylene liner scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 高密度聚乙烯罐废料（`hdpe_jar_scrap`）

本卡仅记录具体流“High-density polyethylene jar scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：High-density polyethylene jar scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 玻璃罐废料（`glass_jar_scrap`）

本卡仅记录具体流“Clear glass jar scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Clear glass jar scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 镀锡钢罐废料（`tinplate_can_scrap`）

本卡仅记录具体流“Tinplate food can scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Tinplate food can scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸箱废料（`corrugated_box_scrap`）

本卡仅记录具体流“Corrugated fibreboard box scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Corrugated fibreboard box scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 纸标签废料（`paper_label_scrap`）

本卡仅记录具体流“Paper product label scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Paper product label scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 木托盘废物（`wood_pallet_waste`）

本卡仅记录具体流“Damaged wood pallet”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Damaged wood pallet
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯缠绕膜废料（`ldpe_stretch_film_scrap`）

本卡仅记录具体流“Low-density polyethylene stretch film scrap”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Low-density polyethylene stretch film scrap
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 不合格加工 茴香（`offspec_anise_product`）

本卡仅记录具体流“Off-specification processed anise”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed anise
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released 茴香产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 不合格加工 star 茴香（`offspec_star_anise_product`）

本卡仅记录具体流“Off-specification processed star anise”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed star anise
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released star 茴香产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxs-358-2024`, `eu-pef-2021-2279`

###### 不合格加工 芫荽（`offspec_coriander_product`）

本卡仅记录具体流“Off-specification processed coriander”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed coriander
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released 芫荽产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 不合格加工 孜然（`offspec_cumin_product`）

本卡仅记录具体流“Off-specification processed cumin”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed cumin
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released 孜然产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxs-327-2017`, `eu-pef-2021-2279`

###### 不合格加工 葛缕子（`offspec_caraway_product`）

本卡仅记录具体流“Off-specification processed caraway”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed caraway
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released 葛缕子产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 不合格加工 甜茴香（`offspec_fennel_product`）

本卡仅记录具体流“Off-specification processed sweet fennel”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed sweet fennel
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released 甜茴香产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxc-78-2017`, `eu-pef-2021-2279`

###### 不合格加工 杜松子（`offspec_juniper_product`）

本卡仅记录具体流“Off-specification processed juniper berry”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Off-specification processed juniper berry
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg net released 杜松子产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`codex-cxs-358-2024`, `eu-pef-2021-2279`

##### 基本流

###### 储存系统氨制冷剂向空气泄漏（`storage_r717_to_air`）

本卡仅记录具体流“Ammonia refrigerant R717 to air”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Ammonia refrigerant R717 to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏放行产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 储存系统二氧化碳制冷剂向空气泄漏（`storage_r744_to_air`）

本卡仅记录具体流“Carbon dioxide refrigerant R744 to air”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Carbon dioxide refrigerant R744 to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏放行产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 储存系统丙烷制冷剂向空气泄漏（`storage_r290_to_air`）

本卡仅记录具体流“Propane refrigerant R290 to air”跨越“包装、受控储存与放行”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Propane refrigerant R290 to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接测量，或以实测活动数据和有文件依据的单项因子计算该具体空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏放行产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

### 过程：设备与区域清洁消毒（`cleaning_sanitation`）

#### 输入

##### 产品流

###### 清洁消毒用水（`sanitation_water_input`）

本卡仅记录具体流“Potable water”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

###### 清洁消毒用电（`sanitation_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### 清洁消毒热水（`sanitation_hot_water_input`）

本卡仅记录具体流“Purchased hot water for food processing”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Purchased hot water for food processing
- 流属性/单位：Energy / MJ
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner_input`）

本卡仅记录具体流“Sodium hydroxide”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### 硝酸清洗剂（`nitric_acid_cleaner_input`）

本卡仅记录具体流“Nitric acid”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### 过氧乙酸消毒剂（`peracetic_acid_disinfectant_input`）

本卡仅记录具体流“Peracetic acid”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_disinfectant_input`）

本卡仅记录具体流“Sodium hypochlorite”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 碱性清洗废水（`alkaline_cleaning_wastewater`）

本卡仅记录具体流“Sodium-hydroxide cleaning wastewater”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium-hydroxide cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`

###### 硝酸清洗废水（`nitric_acid_cleaning_wastewater`）

本卡仅记录具体流“Nitric-acid cleaning wastewater”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Nitric-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`

###### 过氧乙酸消毒废水（`peracetic_acid_wastewater`）

本卡仅记录具体流“Peracetic-acid disinfection wastewater”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Peracetic-acid disinfection wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`

###### 次氯酸钠消毒废水（`hypochlorite_wastewater`）

本卡仅记录具体流“Sodium-hypochlorite disinfection wastewater”跨越“设备与区域清洁消毒”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium-hypochlorite disinfection wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电（`wwt_electricity_input`）

本卡仅记录具体流“Grid electricity, medium voltage”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### 氯化铁混凝剂（`wwt_ferric_chloride_input`）

本卡仅记录具体流“Ferric chloride”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 废水处理用氢氧化钠（`wwt_sodium_hydroxide_input`）

本卡仅记录具体流“Sodium hydroxide”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 聚丙烯酰胺絮凝剂（`wwt_polyacrylamide_input`）

本卡仅记录具体流“Polyacrylamide flocculant”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Polyacrylamide flocculant
- 流属性/单位：Mass / kg
- 数量规则：使用与该批次或报告期对应的实测活动数据，按第 8 节适用计算规则计算，并保留因子与单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

##### 废物流

###### 茴香 清洗废水进入处理（`wwt_anise_washing_wastewater_input`）

本卡仅记录具体流“Anise fruit washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Anise fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 八角 清洗废水进入处理（`wwt_star_anise_washing_wastewater_input`）

本卡仅记录具体流“Star anise fruit washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Star anise fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 芫荽 清洗废水进入处理（`wwt_coriander_washing_wastewater_input`）

本卡仅记录具体流“Coriander fruit washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Coriander fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 孜然 清洗废水进入处理（`wwt_cumin_washing_wastewater_input`）

本卡仅记录具体流“Cumin fruit washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Cumin fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 葛缕子 清洗废水进入处理（`wwt_caraway_washing_wastewater_input`）

本卡仅记录具体流“Caraway fruit washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Caraway fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 甜茴香 清洗废水进入处理（`wwt_fennel_washing_wastewater_input`）

本卡仅记录具体流“Sweet fennel fruit washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sweet fennel fruit washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 杜松子 清洗废水进入处理（`wwt_juniper_washing_wastewater_input`）

本卡仅记录具体流“Juniper berry washing wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Juniper berry washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 碱性清洗废水 to treatment（`wwt_alkaline_wastewater_input`）

本卡仅记录具体流“Sodium-hydroxide cleaning wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium-hydroxide cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 硝酸清洗废水 to treatment（`wwt_nitric_wastewater_input`）

本卡仅记录具体流“Nitric-acid cleaning wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Nitric-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### Peracetic-acid 废水进入处理（`wwt_peracetic_wastewater_input`）

本卡仅记录具体流“Peracetic-acid disinfection wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Peracetic-acid disinfection wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### Sodium-hypochlorite 废水进入处理（`wwt_hypochlorite_wastewater_input`）

本卡仅记录具体流“Sodium-hypochlorite disinfection wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Sodium-hypochlorite disinfection wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后工艺废水（`treated_process_wastewater_output`）

本卡仅记录具体流“Treated CPC 23924 process wastewater”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Treated CPC 23924 process wastewater
- 流属性/单位：Volume / m3
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 脱水生物污泥（`wwt_biological_sludge_output`）

本卡仅记录具体流“Dewatered biological wastewater-treatment sludge”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Dewatered biological wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 废水处理筛渣（`wwt_screen_rejects_output`）

本卡仅记录具体流“Wastewater-treatment screen rejects from spice processing”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Wastewater-treatment screen rejects from spice processing
- 流属性/单位：Mass / kg
- 数量规则：从所列采集协议对应的批次、计量、称量、台账或处置记录采集该具体流数量；仅在该原子交换实际适用时记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理后的工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

###### 向水体排放的化学需氧量（`cod_to_water`）

本卡仅记录具体流“Chemical oxygen demand to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 向水体排放的五日生化需氧量（`bod5_to_water`）

本卡仅记录具体流“Biochemical oxygen demand, five-day, to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Biochemical oxygen demand, five-day, to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 向水体排放的总有机碳（`toc_to_water`）

本卡仅记录具体流“Total organic carbon to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Total organic carbon to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 向水体排放的总氮（`total_nitrogen_to_water`）

本卡仅记录具体流“Total nitrogen to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 向水体排放的总磷（`total_phosphorus_to_water`）

本卡仅记录具体流“Total phosphorus to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 向水体排放的总悬浮物（`tss_to_water`）

本卡仅记录具体流“Total suspended solids to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

###### 向水体排放的氯化物（`chloride_to_water`）

本卡仅记录具体流“Chloride to water”跨越“场内废水处理”过程边界的数量；其适用性、归一化和证据要求由下列机器字段确定。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：以同期间实测排水量与该单一污染物浓度计算，保留采样方法、单位换算和计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wwt`
- 来源：`eu-bat-fdm-2019-2031`

## 7. 分配与共产品处理

| rule_id | 规则 |
| --- | --- |
| `allocation_avoid_first` | 使用物种、形态、批次和阶段特定的计量与记录优先避免分配。绝不得把一个物种的物料损失或直接排放分配给另一物种。 |
| `allocation_shared_utilities` | 仪表服务多个产品时，仅以同期因果驱动量分配，例如实测运行时间乘以设备负荷、交付热量或处理体积；披露驱动量、期间和余量。仅在没有更具因果性的记录时允许按生产质量分配，并须标记。 |
| `allocation_rework` | 有文件记录并返回同一过程的返工物料是内部回路，不报告为废物或共产品；记录返工质量以闭合阶段平衡。 |
| `allocation_residue_status` | 筛下物、捕集粉尘、不合格品、包装废料、污泥和筛渣保持废物身份，除非有文件证明接受方、规格和经济交易形成共产品功能。每种物种或材料分别报告。 |
| `allocation_no_cross_style_average` | 整粒、切片、折断、开裂、研磨、粉末及其他加工形态不得共用平均产率、能源、损失或包装数据，除非实际生产期产出不可分离的单一声明形态。 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_identity` | `receipt_and_identity_control` | 植物投入、接收用电、来料包装废物、拒收植物物料、石块和金属 | 地磅、秤、检查、供应商及仪表记录 | 物种；科学名；植物部位；批次；来料状态；来源；毛重与皮重；水分或水活度；接受质量；拒收原因；用电；废物质量；去向 | 按批次核对供应商交付、经校准质量读数、身份核验及检查处置 | kg；kWh | 每批并按月核对 | 研究期内各批次 | 所声明加工设施 | 仅汇总一个所声明物种和来料状态；质量核对后归一化 | 校准记录；供应商规格；身份结果；批次台账；废物联单 |
| `cp_dry_cleaning` | `dry_cleaning_grading` | 用电、压缩空气、物种特定筛下物、捕集粉尘和向空气排放的粉尘 | 分表、运行日志、收集器称量及排放测量 | 设备；运行时长；功率；空气体积和压力；投入质量；筛下物；收集器质量；排气流量；粉尘浓度；物种 | 读取阶段仪表并按批称量每个分离组分；排放样品与生产期匹配 | kWh；m3；kg | 每个生产期并按报告期核对 | 覆盖研究期的代表性生产期 | 所声明加工设施 | 不跨物种合并；由匹配流量和浓度计算排放负荷 | 仪表记录；秤检查；收集器日志；排放测试 |
| `cp_wet_washing` | `wet_washing_draining` | 清洗水、用电和物种特定清洗废水 | 水表、电表、批次和废水记录 | 物种；批次；投入质量；水量；用电；废水量；去向；采样时间 | 差额核查供水、保留水分和废水；清洁消毒水保持分开 | m3；kWh；kg | 每个清洗生产期 | 研究期全部适用生产期 | 所声明加工设施 | 仅汇总相同物种和清洗路线的生产期 | 仪表校准；批记录；排放记录 |
| `cp_drying_cooling` | `controlled_drying_cooling` | 用电、蒸汽、热水、每种燃料、制冷剂、燃烧排放和物种特定粉尘 | 分表、燃料、蒸汽、温度、制冷剂、批次和排放记录 | 干燥机；物种；进出质量与水分；时长；用电；蒸汽质量与状态；热水流量与温度；燃料量与热值；制冷剂平衡；烟气流量与浓度 | 将公用工程和排放记录匹配到所声明干燥生产期；记录间接或直接加热 | kWh；MJ；kg；m3；L | 每生产期并按年核对制冷剂 | 代表性生产期和完整报告期 | 所声明加工设施 | 共用干燥机按实测时长和负荷分配；不得无拆分地平均物种 | 仪表校准；燃料发票；热值证明；维护日志；烟气测试；水分测试 |
| `cp_microbial_reduction` | `microbial_reduction` | 用电、产品接触蒸汽、水、辐照服务和冷凝液 | 处理批次、公用工程仪表、服务证书、剂量及排放记录 | 技术；物种；批质量；用电；蒸汽质量与状态；水；吸收剂量；服务商；冷凝液体积；验证结果 | 将处理批质量与经验证路线及公用工程或服务记录核对 | kg；kWh；m3；适用时 kGy | 每个处理批次 | 研究期全部适用批次 | 所声明设施和受托处理设施 | 蒸汽、伽马、电子束和 UV 路线保持分开 | 批放行；仪表记录；处理证书；验证记录 |
| `cp_milling_sieving` | `crushing_grinding_sieving` | 用电、压缩空气、每种抗结剂、物种特定筛上物、捕集粉尘和逸散粉尘 | 批次、配方、分表、筛分、收集器和排放记录 | 物种；形态；磨机；筛孔；粒径分布；时长；用电；压缩空气；添加剂质量；进料与产品质量；筛上物；收集器质量；排气数据 | 将物料平衡和能源匹配到一个物种、一种形态和一个筛分规格 | kg；kWh；m3；mm；µm | 每生产期 | 覆盖研究期的代表性生产期 | 所声明加工设施 | 不跨物种或形态汇总；内部返工不计废物 | 批记录；配方；筛分测试；校准；收集器日志；排放测试 |
| `cp_packaging_release` | `packaging_storage_release` | 用电、每个包装组件、制冷剂、包装废料、不合格品和参考输出 | 包装领用、生产、仓储、维护和放行记录 | 物种；形态；粒径规格；净产品质量；包装组件及质量；拒收包装质量；放行件数；用电；制冷剂期初、补充、回收和期末量；储存时长；放行状态 | 核对领用组件、退库、废料、包装后毛重、包装皮重和净放行质量 | kg；kWh；day | 每包装批并按月、年核对 | 完整报告期内的全部包装批次 | 所声明加工设施 | 仅对净放行产品归一化；排除包装和不合格质量 | 秤校准；包装 BOM；库存台账；放行证书；制冷剂日志 |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | 水、用电、热水、每种清洗或消毒化学品及每股废水 | 清洁消毒计划、仪表、加药、供应商和排放记录 | 区域或设备；干式清洁动作；水；用电；热水流量与温度；化学品身份、浓度及剂量；废水体积、pH 和去向 | 分别记录每种化学品有效成分，并将液体排放关联到清洁步骤 | m3；kWh；MJ；kg | 每次清洁消毒事件并按生产期分配 | 完整报告期内全部适用清洁消毒事件 | 服务所声明产品的整个前景设施区域 | 共用清洁消毒按设备清洁时长或面积及生产期使用量分配；披露驱动量 | 仪表记录；加药日志；安全数据表；清洁消毒验证；排放记录 |
| `cp_onsite_wwt` | `onsite_wastewater_treatment` | 每股进水废水、用电、每种处理化学品、出水、污泥、筛渣及每种污染物 | 流量计、加药、实验室、污泥及废物记录 | 来源流；进出水流量；用电；化学品身份与剂量；pH；COD；BOD5；TOC；总氮；总磷；TSS；氯化物；污泥湿质量和干固体；去向 | 可用时使用同期流量比例复合采样并保留实验室方法 | m3；kWh；kg；mg/L | 连续或按批计量流量；按许可或代表性频率测污染物 | 完整报告期 | 服务所声明设施的场内处理 | 由匹配的流量和浓度逐污染物计算负荷；共用处理按实测来源负荷或体积分配 | 流量校准；实验室报告；加药日志；污泥联单；排放许可记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个前景交换 | 归一化量 = 报告期交换量 / 同一物种和形态的净合格产品质量 | 核对后的交换记录；不含包装的净放行质量 | 每 1 kg 参考产品的量 | `eu-pef-2021-2279` |
| `calc_stage_electricity` | 无专用分表的阶段用电 | 阶段用电 = 实测设备功率 × 运行时间 × 有文件依据的负荷系数；与设施总表核对 | 功率测量；运行时间；负荷系数；设施总表 | 阶段特定 kWh | `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031` |
| `calc_hot_water_heat` | 外购热水 | 交付热量 = 实测质量流量 × 有文件依据的比热容 ×（入口温度 - 出口温度） | 流量；温度；比热容 | MJ 交付热量 | `eu-bat-fdm-2019-2031` |
| `calc_steam_heat` | 外购蒸汽 | 交付热量 = 蒸汽质量 ×（供汽比焓 - 回流冷凝水比焓） | 蒸汽质量；压力；温度；冷凝水回流状态 | MJ 交付热量 | `eu-bat-fdm-2019-2031` |
| `calc_refrigerant_balance` | 每套 R717、R744 或 R290 系统 | 损失 = 期初充注量 + 补充量 - 期末充注量 - 回收量；负值或无法解释的平衡须纠正 | 期初期末库存；补充；回收 | 同一种制冷剂向空气排放的 kg | `eu-pef-2021-2279` |
| `calc_combustion_emission` | 每项干燥机燃烧空气排放 | 排放 = 实测燃料量 × 燃料特定且有文件依据的因子，或直接实测烟气负荷；燃料活动记录保持分开 | 燃料使用；适用时热值；因子或烟气测量 | 一种指定空气物质的 kg | `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031` |
| `calc_water_pollutant_load` | 每项最终出水污染物 | 负荷 = 同期出水体积 × 实测浓度并作单位换算 | 出水流量；一种污染物浓度 | 一种指定污染物向水体排放的 kg | `eu-bat-fdm-2019-2031` |
| `calc_mass_balance` | 每个物种特定生产期 | 植物来料质量 + 实测添加剂 = 净放行产品 + 每项实测植物损失 + 实测保留或去除水分 + 期末在制品；调查余量 | 批质量；水分；添加剂；筛下物；粉尘；拒收物；产品；在制品 | 物种和形态特定平衡及余量 | `codex-cxc-78-2017`, `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_species_identity` | 植物投入和参考输出 | 科学物种、商品植物部位、供应商批次及最终形态必须经核验并可追溯；混合物种记录无效。 | 供应商规格、身份测试、批次台账、放行记录 |
| `dq_route_representativeness` | 全部过程 | 记录必须代表实际设备、来料状态、干燥路线、微生物处理、形态、粒径规格、包装、场址和报告期。 | 过程流程图、批记录、设备日志、包装 BOM |
| `dq_meter_traceability` | 质量、水、能源、燃料、制冷剂和排放 | 保留校准状态、仪表边界、读数期间、单位换算、缺失数据处理和核对。 | 校准证书、仪表导出、发票、计算工作簿 |
| `dq_no_default_quantity` | 全部清单卡 | 本 PCR 的任何来源数值都不是默认量。每个适用量必须来自前景采集，或由采集记录透明计算。 | 记录到卡片的追溯和计算记录 |
| `dq_conditional_closure` | 条件性过程和卡片 | 每个条件性过程及原子交换必须以路线证据标记为适用或不适用；未记录不等于零。 | 路线声明、设备清单、配方、处理及清洁消毒记录 |
| `dq_source_transparency` | 代理、因子、分配和背景链接 | 披露每个代理或因子的来源、版本、地域、技术、时间、转换和使用理由。 | 数据源登记、计算说明、DQR 评估 |
| `dq_mass_and_release` | 植物物料与产品 | 核对来料和干基质量、内部返工、每项物种特定损失、包装皮重和净合格放行量。 | 质量平衡表、水分结果、放行和废料记录 |

## 9. 校验规则

| rule_id | 规则 |
| --- | --- |
| `validate_reference_identity` | 参考流 UUID、Mass 属性 UUID、Units of mass UUID、1 kg 数量、CPC 23924 身份及必需限定信息必须全部存在且一致。 |
| `validate_one_species_style` | 必须恰好启用七种指定物种之一和一种最终形态；拒绝跨物种或整粒/切片/折断/开裂/研磨/粉末形态平均的数据集。 |
| `validate_atomic_exchange` | 每张清单卡必须仅含一个具体材料、载体、燃料、制冷剂、包装组件、废物流、污染物或排放；拒绝类别标签和选择指令。 |
| `validate_route_closure` | 清洗、受控干燥、微生物减除、研磨、冷藏储存、液体清洁消毒及场内废水处理均须有记录支持的适用性判断。 |
| `validate_uuid_gate` | 本候选 PCR 中参考产品 UUID 是唯一填入 Selected flow 的 UUID；任何其他 UUID 仅在混合检索和公开 state-100 直读均确认精确语义后填写。 |
| `validate_quantity_provenance` | 除固定 1 kg 参考输出外，每个适用量必须为 `foreground_record` 或由采集记录得到的 `calculated_value`；拒绝无引用默认值、范围和无文件估算。 |
| `validate_mass_balance` | 物种特定投入、水分变化、添加剂、产品、返工、筛下物、捕集粉尘、拒收物和在制品须在设施记录的测量不确定度内闭合；解释并纠正物料余量。 |
| `validate_energy_separation` | 用电、外购蒸汽、外购热水、天然气、柴油、LPG 和煤油须保持阶段特定的独立记录；拒绝合并能源或燃料总量。 |
| `validate_refrigerant_balance` | 每套适用 R717、R744 或 R290 系统的补充与直接空气损失须与期初、期末及回收充注量核对，且不得混合制冷剂。 |
| `validate_wastewater_loads` | 每项 COD、BOD5、TOC、总氮、总磷、TSS 和氯化物负荷须使用同期流量与浓度记录，并保持独立排放。 |
| `validate_packaging_exclusion` | 包装投入和废料须按材料完整记录，但任何包装质量不得计入 1 kg 净参考产品。 |
| `validate_bilingual_alignment` | 英文和中文的 process_id、row_id、有序机器令牌、Selected flow 身份、UUID、协议、rule_id 和 source_id 必须完全一致。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种 CPC 23924 产品的物种、形态、路线、场址和期间特定前景数据包 |
| downstream_use | 构建工厂门口过程数据集和生命周期模型，并关联上游植物原料、公用工程、材料、服务、处理和包装数据集 |
| allowed_use | 建模记录所代表的物种、来料状态、制造路线、最终形态、粒径规格、包装、地域和期间 |
| excluded_use | 跨物种平均；未明确的加工香辛料；CPC 01654 未加工品；多物种混合物；精油、油树脂或提取物；记录未代表的路线或包装 |
| required_metadata | 科学物种；植物部位；来料状态和水分基准；来源；全部过程适用性决定；干燥与微生物减除路线；最终形态和粒径规格；包装 BOM；净放行质量；场址；期间；储存时长；分配；背景链接 |
| required_quality_disclosure | 仪表和秤覆盖；校准；批次代表性；水分方法；质量平衡余量；共用资源分配；排放计算；废水采样；制冷剂平衡；代理；数据缺口；验证状态 |
| update_trigger | 物种、供应商状态、干燥或处理技术、最终形态、粒径规格、配方、包装、能源或制冷系统、废水路线、场址或报告期变化；或实测产率、损失、公用工程或排放特征发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | 联合国统计司 CPC 3.0 保留原始结构 CSV，CPC 23924 与 CPC 01654，2026-06-23 获取；来源 URL：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；保留 SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | 精确加工产品分类边界及排除未加工品 |
| `codex-cxc-42-1995` | standard | Codex Alimentarius，《香辛料和干制芳香草本卫生操作规范》CXC 42-1995，修订至 2014，https://www.fao.org/input/download/standards/27/CXP_042e_2014.pdf | 清理、分选、干燥、研磨或开裂、微生物减除、包装、清洁消毒、优先干式清洁和污染控制过程结构 |
| `codex-cxc-78-2017` | standard | Codex Alimentarius，《香辛料中霉菌毒素预防与降低操作规范》CXC 78-2017，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B78-2017%252FCXC_078e.pdf | 来料状态披露、分选、条件性清洗、自然或受控干燥、热风燃料隔离、辐照、储存、批次控制及物种特定损失结构 |
| `codex-cxs-327-2017` | standard | Codex Alimentarius，《孜然标准》CXS 327-2017，2022 修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B327-2017%252FCXS_327e.pdf | 孜然物种身份、清理/干燥/研磨/筛分路线、整粒/开裂/研磨形态、质量控制及条件性抗结剂规则 |
| `codex-cxs-358-2024` | standard | Codex Alimentarius，《干制或脱水果实和浆果香辛料标准：多香果、杜松子和八角》CXS 358-2024，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B358-2024%252FCXS_358e.pdf | 杜松子与八角准确身份、整粒/切片/折断/研磨/粉末形态、规格声明、包装标签及粉末产品条件性抗结剂 |
| `fao-herb-spice-processing` | extension_guidance | FAO，《小规模乡村食品工业质量保证》第 2.2 章“草本与香辛料产品”，https://www.fao.org/4/V5380E/V5380E09.htm | 清洗、分级清理、干燥、研磨、包装、干湿区分离及前景过程图佐证 |
| `jrc-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，《食品、饮料和乳品工业最佳可行技术参考文件》，JRC118627，2019，DOI 10.2760/243911，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | 行业边界、过程资源清单、水和能源管理、清洁、废水、废气、残余物及监测结构；不把 BAT 数值作为 PCR 默认值 |
| `eu-bat-fdm-2019-2031` | official_guidance | 欧盟委员会执行决定 (EU) 2019/2031（食品、饮料和乳品工业 BAT 结论），https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 分列水、能源、原料、废水和废气；阶段流程图；清洁；COD/TOC/氮/磷/氯化物；粉尘、CO、NOx 和 SOx；包装不计产品质量；不把 BAT-AEL 用作默认量 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会建议 (EU) 2021/2279（环境足迹方法），合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BOM、企业特定制造数据、能源/水/材料/产品/共产品/废物及空气/水/土壤排放完整 LCI、分配、数据质量、透明度和验证 |
