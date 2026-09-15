---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-watch-or-clock-parts-including-jewels-cases-and-metal-watch-bands
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他钟表零件（包括宝石轴承、表壳及金属表带）

## 1. 范围与适用性

本 PCR 适用于 CPC 48490 语义边界内某一已声明钟表成品零件从摇篮到制造工厂门口的生产。涵盖的输出包括钟或表的表壳及表壳部件、金属表带及表带链节、加工成钟表零件的合成宝石轴承，以及不归类为完整机心的其他独立销售钟表零件。数据集应代表一种已声明的零件设计；除非披露产品组合及加权依据，不得将不同零件类型、材料或精加工路线平均合并。

成品手表、成品时钟、完整钟表机心、时间记录设备、非金属表带、未经光学加工的钟表玻璃毛坯、维修服务和流通服务不在本 PCR 范围内。金属、合成刚玉、化学品、电力和水的上游生产由供应方数据集表征。成品钟表的使用、维护、流通和生命周期末端阶段不在边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-watch-or-clock-parts-including-jewels-cases-and-metal-watch-bands |
| classification_refs | CPC 3.0：48490，语义精确对应（`un-cpc-3-0-structure-2025`） |
| covered_products | 钟或表的成品表壳及表壳部件；金属表带及链节；制成钟表零件的合成宝石轴承；CPC 48490 内的其他独立销售钟表零件 |
| excluded_products | 完整手表；完整时钟；完整机心；非金属表带；未经光学加工的钟表玻璃毛坯；维修、受托制造及贸易服务输出 |
| representative_product | 满足其图样和放行规范的已声明钟表成品零件；以不锈钢表壳部件或金属表带链节代表金属路线，以合成宝石轴承代表条件性精密矿物路线 |
| production_route | 针对具体配置的成形或精密加工、可选水基清洗和表面处理、精整、检验及放行；应声明实际路线以及所有未采用的条件性交换 |
| market_state | 制造场址门口的可销售成品零件，已经检验且尚未装入完整手表、时钟或机心；不含可移除运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种可装入手表、时钟或机心，或作为替换件销售的已声明钟表成品零件 |
| How much | 制造场址门口 1 kg 可销售成品零件 |
| How well | 符合已声明图样和放行规范中对材料牌号、尺寸与公差、表面精整或镀层以及适用皮肤接触要求的规定 |
| How long or cycle | 一个生产批次；不主张使用阶段寿命或计时服务 |
| reference_flow_link | 所表征生产批次中检验合格并放行的可销售零件净质量，不含不合格品、过程废料和可移除运输包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钟表成品零件（Tiangong UUID 未解决） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件类型及图样或库存标识；材料以及合金牌号或合成宝石规范；尺寸与公差等级；表面精整与镀层结构；生产技术；可销售产品状态；场址及国家或地区；生产期间；适用时的再生含量声明；皮肤接触状态；质量包含项和包装排除项 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有按质量归一化的清单 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化到 1 kg 合格可销售成品零件。参考产品质量包括一体化镀层和永久装配的子部件，不包括不合格品、过程废料、工装及可移除运输包装。 |
| `count_to_mass` | 以件数保存的记录 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用有记录的代表性样本批次平均质量或经核实的工程质量将件数转换为质量，并保留样本量、秤校准和计算过程。 |
| `electricity_energy` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 原始记录保留计量的 kWh，并按 1 kWh = 3.6 MJ 转换。声明电压等级、电网地域、现场发电处理方式以及是否包含厂内损耗。 |
| `water_mass` | 工艺用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录；按体积计量时，使用有记录且适合水温的密度换算，并保留原始体积和换算假设。 |

## 5. 系统边界

包括生产材料进入前景边界，以及针对已声明零件实际实施的成形、切割、机加工、磨削、抛光、钻孔、宝石成形、清洗、漂洗、表面处理、镀覆、检验、返工和现场处理；也包括直接公用工程、直接废物及直接基本流排放。具体路线取决于产品配置。水基化学或电解表面处理为条件性过程；采用时应包括相关材料、水、电力、废物和排放（`eu-jrc-stm-bref-2006`、`us-epa-ap42-electroplating-12-20`）。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景制造 | 纳入从生产用原料入厂到可销售零件放行的全部现场操作，包括归属于产品的返工以及现场废物或排放控制。 |  |
| `boundary_surface_treatment` | 水基化学或电解表面处理 | 当已声明路线采用相关工艺时，纳入清洗、漂洗、整流器电力、槽液补加化学品、带出或槽液损失、废水、处理残渣和直接雾状排放。 | `eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20` |
| `boundary_exclusions` | 下游阶段 | 除非研究明确扩展系统并单独报告增加的阶段，否则排除装配成完整机心、手表或时钟、流通、使用、维护和生命周期末端。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产用原料和化学品已交付至制造场址门口，并声明材料牌号、原料形态、供应地域、再生含量和交付状态 |
| starting_condition_role | 零件制造的前景入口；开采、精炼、合金生产、合成刚玉生产、化学品生产和能源供应保留在相连接的上游数据集中 |
| product_classification_scope | CPC 48490 语义边界内的独立销售钟表零件；分类仅作为映射语境，不决定本 PCR 的规范身份 |
| recursive_input_rule | 若采购投入本身是本 PCR 边界内的成品零件，将其作为带有独立上游数据集的产品投入记录，不在同一前景过程中递归重建其制造过程 |
| upstream_dataset_requirement | 每项采购材料、化学品、电力和水投入均应连接地域和技术上有代表性的上游数据集；采用代理数据时必须明确披露并进行敏感性审查 |
| disclosure | 声明零件类型、物料清单、合金牌号或合成宝石等级、路线步骤、表面处理化学品、返工、收率、外协操作、废物处理、空气排放区室、场址地域、生产期间和包装排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_manufacture_release` | 已声明钟表零件的制造、精整、检验和放行 | required | 始终纳入；每个条件性清单行仅在其所述材料或技术实际使用时记录，跳过的行应声明为不适用 | 汇总前景生产过程 | 1 kg 合格可销售成品零件 |

### 过程：制造、精整、检验和放行（`part_manufacture_release`）

#### 输入

##### 产品流

###### 不锈钢生产用原料（`stainless_steel_input`）

当已声明零件含不锈钢时，记录跨越前景边界的外购不锈钢。质量由物料清单和收料记录确定；合金牌号、原料形态、供应商、再生含量和交付状态作为前景限定信息保留。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：代表批次领用的外购不锈钢净质量，扣除有记录的退库量，再按可销售输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`reclaru-2023-watch-straps-corrosion`

###### 合成红宝石毛坯（`synthetic_ruby_blank`）

仅对已声明宝石轴承路线记录合成红宝石毛坯。选定流的 UUID 尚未解决；不得以橡胶、通用磨料或天然宝石流替代。

- 选定流：合成红宝石毛坯（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：代表批次领用的合成红宝石毛坯净质量，扣除有记录的退库量，再按可销售输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：

###### 外购电力（`electricity_input`）

记录归属于成形、机加工、宝石成形、清洗、表面处理、精整、检验和现场控制设备的电力。共享电表只能按有记录的因果驱动因素分配。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：代表批次计量或按因果关系分配的电力，并由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：

###### 工艺用水（`process_water_input`）

记录用于清洗、漂洗、水基金属加工液配制及归属于产品的现场处理的供水。闭路循环冷却水只记录跨越边界的净补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于代表批次的计量或按槽体衡算得到的工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20`

###### 碱洗用氢氧化钠（`sodium_hydroxide_input`）

仅当已声明零件采用加入氢氧化钠的碱性清洗槽时记录。记录纯物质当量，并保留溶液浓度和补加记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：外购溶液质量乘以经核实的氢氧化钠质量分数，经库存变化修正后按可销售输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用碱洗路线时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`us-epa-ap42-electroplating-12-20`

###### 六价铬处理用三氧化铬（`chromium_trioxide`）

仅当已声明路线采用六价铬槽液时记录三氧化铬。名称匹配候选项的化学品分类存在冲突，因此 UUID 保持未解决。

- 选定流：三氧化铬（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于相关槽液的纯三氧化铬当量补加量，经库存变化和有记录的回收量修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用六价铬路线时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`us-epa-ap42-electroplating-12-20`

###### 切削液（`cutting_fluid_input`）

机加工采用配制切削液时，记录其跨越前景边界的数量。保留配方类型、浓缩液稀释、补加、回收量和库存变化。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：消耗的切削液产品净质量，包括浓缩液和补加量，但不包括内部循环量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用切削液时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：

##### 废物流

本汇总前景过程不接受废物流作为投入。再生含量声明属于外购材料数据集及必需限定信息。

##### 基本流

不预设直接基本流投入。任何从环境中提取并跨越边界的场址特定资源，应在前景数据集中另增一个原子基本流行。

#### 输出

##### 产品流

###### 合格钟表成品零件（`finished_watch_clock_part`）

只记录检验合格并放行的可销售零件。由于可用候选项仅代表更窄的表壳部件、机心部件或套件组件状态，通用参考产品 UUID 尚未解决。

- 选定流：钟表成品零件（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由计量的可销售批次输出归一化后得到 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开前景过程并送往回收或处理的分选钢屑、车屑、冲压余料和钢制不合格件。仅在加工钢材时采用本行，并披露污染情况和去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开代表批次的工业后钢废料净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：采用钢材时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_shipments`
- 来源：

###### 废切削油（`waste_cutting_oil`）

仅当机加工液为油基时记录离开场址的废切削油。水基废金属加工液需要另行解析的原子废物流，不得使用本 UUID 报告。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移出场址的废切削油实测质量，经有记录的留存库存修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用油基切削液时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_shipments`
- 来源：

###### 含金属表面处理废水（`metal_bearing_wastewater`）

当含溶解态或悬浮态处理金属的水相排水离开前景过程，进入现场或场外处理时予以记录。UUID 尚未解决；通用清洗废水不是精确替代项。

- 选定流：含金属表面处理废水（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排水质量，或用有记录的密度将体积转换为质量；包括归属的漂洗水和废槽液，不包括内部循环量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用水基表面处理时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_liquid_waste`
- 来源：`eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20`

##### 基本流

###### 六价铬排放至空气，未指定（`chromium_vi_air`）

仅当采用六价铬工艺且场址无法支持更具体的空气区室流时，记录控制后的六价铬排放。不得包括电力或化学品生产的上游排放。

- 选定流：六价铬 `08a91e70-3ddc-11dd-950b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：代表批次的场址实测控制后排放量，或有完整记录的槽液特定质量衡算结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采用六价铬路线时每 1 kg 合格可销售成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-ap42-electroplating-12-20`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 多产品制造 | 优先采用过程细分、批次追溯、机器工时、材料领用及专用计量，使已声明零件获得可直接归属的投入和输出。 |  |
| `allocation_shared_operations` | 无法避免的共享公用工程及辅助作业 | 使用计量机器工时、槽体装载面积—时间或计量处理量等因果物理驱动因素。只有同一操作和材料状态使质量具有因果性时才允许质量分配；应披露驱动因素并进行敏感性检验。 |  |
| `allocation_scrap` | 工业后废料及回收材料 | 将过程废料作为前景边界上的废物输出。不得在清单内扣除所避免的原生生产或回收信用；任何生命周期末端或替代建模应单独报告。 |  |
| `allocation_no_value_default` | 有价值零件或副产品 | 经济分配不是默认方法。若无法确定物理因果关系而采用经济分配，应披露价格、期间、币种、分配份额和敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issues` | `part_manufacture_release` | 不锈钢原料；合成红宝石毛坯 | 采购、收料、库房领用、退库和物料清单记录 | 材料标识；合金或等级；原料形态；供应商；批次；领用总量；退库量；再生含量 | 将收料和库房收发存与生产订单及库存变化核对 | kg | 每次领用并按月核对 | 有代表性的连续 12 个月，或较短已声明生产期内的全部批次 | 数据集内全部制造场址 | 按原子材料汇总净领用量并除以合格可销售输出 | 采购规范、收料检验、校准秤记录和库存核对 |
| `cp_utility_meters` | `part_manufacture_release` | 电力；工艺用水 | 公用工程表计、分表日志和生产时间戳 | 起止读数；表计标识；单位；路线设备；生产订单；分配驱动因素 | 读取专用表计，或按有记录的机器工时或处理量分配共享表计 | kWh; m3; kg | 每批或每班，按月汇总 | 与所表征生产相同期间 | 所有可归属设备和现场控制装置 | 扣除基线、分配共享用量、换算单位并除以合格可销售输出 | 表计校准、账单、时间日志及与全厂总量的核对 |
| `cp_chemical_records` | `part_manufacture_release` | 氢氧化钠；三氧化铬；切削液 | 采购、槽液配制、领用、浓度、回收和库存记录 | 化学品标识；浓度；领用量；退回或回收量；期初期末库存；槽体或机器标识 | 按化学品核对净消耗，仅在要求时将配制产品换算为已声明纯物质基准 | kg | 每次补加并按月核对 | 与所表征生产相同期间 | 所有适用槽体和机加工设备 | 净补加量加期初库存、减期末库存和回收量，再除以合格可销售输出 | 供应商证书、浓度测试、领用日志、库存核对和秤校准 |
| `cp_product_output` | `part_manufacture_release` | 合格成品零件 | 生产订单、检验、不合格、返工和发运记录 | 零件标识；批次；总产出；不合格品质量；返工回流；合格放行质量 | 称量或计数放行零件，并按 `count_to_mass` 将件数换算为质量 | kg; item | 每批 | 与全部投入和输出相同期间 | 所有被表征生产线和场址 | 仅汇总合格放行质量，并作为归一化分母 | 放行证明、检验记录、秤校准和件数—质量样本 |
| `cp_waste_shipments` | `part_manufacture_release` | 工业后钢废料；废切削油 | 废物容器重量、联单、回收商收据和库存记录 | 废物标识；来源操作；毛重和皮重；水分或污染；去向；期初期末储存量 | 称量每个外运容器并核对储存废物 | kg | 每次外运并按月盘存 | 与所表征生产相同期间 | 所有被表征生产线和废物储存区 | 外运量加期末储存量减期初储存量，再除以合格可销售输出 | 校准秤单、废物联单、组成证据和回收商收据 |
| `cp_liquid_waste` | `part_manufacture_release` | 含金属表面处理废水 | 排水表计、槽体转移、实验室和处理记录 | 流量或转移体积；密度；金属种类及浓度；槽液来源；处理路线；循环量 | 计量排水或核对槽体转移量；将体积换算为质量并排除内部循环 | m3; kg; mg/L | 每次排放或连续计量，按月汇总 | 与所表征生产相同期间 | 所有适用表面处理线和处理单元 | 汇总跨边界净排水质量并除以合格可销售输出 | 表计校准、槽位记录、实验室样品监管链和处理联单 |
| `cp_air_emissions` | `part_manufacture_release` | 六价铬空气排放 | 烟道测试、连续或周期测量、槽体运行、控制设备和生产记录 | 六价铬浓度；气体流量；测试时长；控制状态；槽体电流—时间；所表征输出；排放区室 | 优先使用合规场址测量；无法测量时使用充分披露的槽液特定质量衡算并标明估算方法 | kg; mg/m3; m3/h | 每次规定测试及所表征的每个运行期间 | 相同生产期间或有正当理由的代表性测试期间 | 每个适用六价铬排放源和控制设备 | 对运行时间内实测排放积分并除以合格可销售输出 | 测试报告、方法、检出限、仪器校准、运行日志和控制装置检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 全部清单行 | 归一化数量 = 归属于代表批次的跨边界数量 / 合格放行产品质量 | 可归属流数量；合格放行质量 | 每 1 kg 参考产品的流数量 |  |
| `calc_electricity_conversion` | 电力 | 电力（MJ）= 计量电力（kWh）× 3.6 | 计量 kWh | MJ |  |
| `calc_solution_active_mass` | 氢氧化钠和三氧化铬 | 纯物质质量 = 外购或领用溶液质量 × 经核实质量分数，并按库存变化和回收量修正 | 溶液质量；浓度；库存变化；回收量 | kg 纯物质 | `us-epa-ap42-electroplating-12-20` |
| `calc_count_to_mass` | 以件数记录的输出 | 放行质量 = 放行件数 × 有记录的批次特定平均质量 | 件数；代表性样本质量 | kg 合格放行产品 |  |
| `calc_chromium_air` | 六价铬空气排放 | 对控制后实测浓度 × 干气流量 × 运行时间积分；采用质量衡算时披露每一项及不确定性 | 浓度；气体流量；时间；或槽液投入、回收、废物及留存库存 | kg 六价铬排放 | `us-epa-ap42-electroplating-12-20` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料 | 保留零件图样或库存标识、材料牌号、供应商、原料形态、表面精整，以及已解析的 Tiangong 流 UUID；不得在无权重情况下合并不同零件类型。 | 图样、物料清单、供应商证书、收料检验和流审计 |
| `dq_temporal` | 全部前景记录 | 条件允许时采用有代表性的连续 12 个月；较短生产期应涵盖全部批次，并披露季节性、维护、开停机和异常事件。 | 有日期的生产、表计、材料、废物和维护记录 |
| `dq_completeness` | 全部边界交换 | 核对材料投入与合格输出、不合格品、废料、废物、排放、库存变化和有记录的不确定性，并解释每项物料不平衡。 | 批次质量衡算及核对工作表 |
| `dq_measurement` | 表计、秤、浓度测试和排放测试 | 使用处于校准有效期内的仪器；保留单位、检出限、采样方法、换算因子和数据修正。 | 校准证书、实验室样品监管链和测试报告 |
| `dq_route_disclosure` | 条件性技术 | 声明不锈钢、合成宝石材料、切削液、水基清洗、铬处理和排放控制是否适用；跳过的行必须给出不适用理由。 | 工艺流程图、路线声明和生产订单证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 功能单位和参考流 | 核实参考输出恰为一种已声明合格零件设计的 1 kg 产品，且已提供全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_inventory_accounting` | 清单完整性 | 确认每项跨边界材料、化学品、公用工程、废物和直接基本流交换均为原子交换，只有一个方向和流类型，并按相同合格输出质量归一化。 |  |
| `validate_conditional_routes` | 条件性行 | 依据已声明物料清单和路线核实每个条件性行；适用时必须有数量，不适用时必须有记录的理由。 |  |
| `validate_mass_balance` | 材料转化 | 核对材料投入与合格输出、废料、液体废物、直接排放、库存变化和有记录的测量不确定性，并调查无法解释的差额。 |  |
| `validate_surface_treatment` | 水基或电解处理 | 采用表面处理时，依据运行和控制记录核实槽液化学品、水、电力、废水、处理残渣以及实测或计算的直接排放。 | `eu-jrc-stm-bref-2006`; `us-epa-ap42-electroplating-12-20` |
| `validate_uuid_scope` | Tiangong 引用 | 拒绝以范围更窄的表壳、机心部件、套件产品、外部供应废料、错误排放区室或化学分类错误的 UUID 替代已声明清单行。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由已核实前景生产数据包形成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 对一种已声明钟表零件进行产品系统建模，包括其后装入机心、手表或时钟的情形 |
| allowed_use | 用于已声明的零件设计、材料、精加工路线、场址或所代表地域、技术及生产期间；仅在记录差异和敏感性时允许调整使用 |
| excluded_use | 成品手表或时钟；完整机心；非金属表带；未经加工的玻璃毛坯；维修或贸易服务；未披露的不同零件平均；使用阶段寿命声明 |
| required_metadata | PCR id 和版本；零件标识；图样或库存标识；材料及合金牌号；尺寸；表面精整或镀层结构；皮肤接触状态；场址和地域；技术；生产期间；参考质量基准；物料清单；路线步骤；分配；上游数据集；未解决 UUID |
| required_quality_disclosure | 初级数据占比；时间、地域和技术代表性；表计与秤覆盖；质量衡算闭合；分配份额；代理数据集；返工；收率；废物去向；排放测量方法和检出限；被排除操作 |
| update_trigger | 零件设计或材料、合金供应商或再生含量、成形或机加工技术、表面处理化学品或控制、场址或电力组合、分配驱动因素、收率、废物路线、上游数据集发生变化，或任何前景数值超出其有记录的不确定性 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，第 48490 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | 官方分类身份及语义产品边界 |
| `eu-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会联合研究中心，《金属和塑料表面处理最佳可行技术参考文件》，2006 年 8 月通过。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索日期：2026-09-07） | 条件性水基电解或化学表面处理边界及相关活动 |
| `us-epa-ap42-electroplating-12-20` | `official_guidance` | 美国环境保护署，AP-42 第 12.20 节《电镀》。https://www.epa.gov/sites/default/files/2020-11/documents/b12s20.pdf（检索日期：2026-09-07） | 电镀过程分解、碱洗、漂洗、槽液化学品及直接雾状排放采集 |
| `reclaru-2023-watch-straps-corrosion` | `literature` | Reclaru, L.（2023），Sensitization to Corrosion of Austenitic Stainless Steels: Watch Straps Intended to Come into Direct and Prolonged Contact with Skin，Coatings 13(1), 18。https://doi.org/10.3390/coatings13010018 | 不锈钢表带材料身份，以及合金牌号和皮肤接触限定信息 |
