---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-welded-of-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 钢制焊接石油或天然气管道用管线管

## 1. 范围与适用性

本 PCR 适用于石油或天然气管道输送用钢制焊接管线管的前景数据集。前景边界始于采购的热轧钢卷或钢板及制造耗材进入制管厂，终于经检验合格的焊接管线管交付至制管厂厂门。

覆盖高频焊或电阻焊（HFW/ERW）、螺旋埋弧焊（HSAW）和直缝埋弧焊（LSAW），并分别声明路线特定投入。不包括无缝管、铸管、套管、油管和钻杆、非管道用结构管、管道施工与使用及生命末期。外防腐、保温或混凝土配重涂层不在默认边界内；若声明产品为涂覆管，应附加单独的前景涂覆过程。采购钢材、电力、燃料、水和耗材的上游生产以关联上游数据集表示，不在制管厂前景清单内重复建立。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-welded-of-steel |
| classification_refs | CPC 3.0：41285，精确产品类别语境 |
| covered_products | 石油或天然气管道输送用圆形钢制焊接管线管，包括 HFW/ERW、HSAW 和 LSAW 制造 |
| excluded_products | 无缝管线管；铸管；套管、油管和钻杆；非管道用结构管；管件；现场焊接管道系统；单独施加的外部功能性涂层系统 |
| representative_product | 符合所声明管线管规范、在生产厂厂门交付、经检验的平端钢制焊接管线管 |
| production_route | 热轧钢卷成形后采用 HFW/ERW 或 HSAW；或钢板成形后采用 LSAW；随后按适用要求进行热处理、定径、管端加工、检验和水压试验 |
| market_state | 厂门处已干燥、标识并按所声明规范验收的裸管或仅经常规轧管厂精整的焊接管线管；外部功能性涂层单独建模 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合所声明石油或天然气管道输送规范的钢制焊接管线管 |
| How much | 生产厂厂门处 1 kg 合格钢制焊接管线管 |
| How well | 符合所声明规范、产品规范等级、钢级、尺寸公差、焊接类型以及检验和试验验收准则 |
| How long or cycle | 一个在厂门验收的生产批次；本从门到门产品边界不包含服役寿命 |
| reference_flow_link | 功能单位恰由 1 kg 合格参考产品净质量实现；除非单独建模，否则不含包装和外部功能性涂层 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 用于石油或天然气管道的钢制焊接管材 `e505f1de-c307-4319-a6b6-371b34e7b1ed` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造路线（HFW/ERW、HSAW 或 LSAW）；钢级和合金状态；适用的管线管规范及版本；产品规范等级；外径；壁厚；管长；焊缝方向；热处理状态；管端形式；检验和水压试验状态；涂层状态；生产场址和国家；生产期间；产品净质量基准 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息即表示参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 厂门处合格管线管 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格钢管净干质量。1 kg 参考量不含可移除运输包装和单独建模的外部功能性涂层。 |
| `material_mass_normalization` | 钢卷、钢板、焊丝、焊剂、废钢及内部钢管中间体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 参考产品 | 归一化前，应在同一报告期内核对称重入库、领用、退库、库存变化、回收焊剂、废钢和合格产品。 |
| `electricity_energy_conversion` | 交流电投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留电表 kWh，并按 1 kWh = 3.6 MJ 换算；披露电压等级及供应商或电网地域。 |
| `gas_volume_conditions` | 气态天然气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积及温度、压力和干湿基准条件；不得与其他燃料合并。 |
| `water_mass_conversion` | 水压试验工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用称重或质量流量计。若按体积计量，记录密度及换算基准，并区分循环总量与跨边界补水量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | HFW/ERW 或 HSAW 使用采购热轧钢卷，LSAW 使用采购钢板；进入制管厂时声明钢级、尺寸、供应商、产地和上游数据集 |
| starting_condition_role | 进入下游成形与焊接的采购钢材；上游炼铁、炼钢、铸造和热轧保留在关联上游数据集中 |
| product_classification_scope | 石油或天然气管道用钢制焊接管线管；不含无缝管、铸管、钻采用管和结构管产品 |
| recursive_input_rule | 若采购或转入同一类别的焊接管线管继续精整，应作为独立投入关联供应商或转移数据集，不得递归重建其上游制管过程 |
| upstream_dataset_requirement | 为采购钢卷或钢板、电力、天然气、工艺用水、焊接耗材和废物处理关联地域和技术代表性上游数据集，并披露代理数据 |
| disclosure | 声明场址、期间、路线、原料形态、钢级、尺寸、热处理、管端形式、试验、涂层状态、分配、内部回收、废钢去向、水循环及排除的下游作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_pipe_mill_gate` | 制管厂前景制造 | 纳入钢材准备、成形、焊缝焊接、适用的焊后热处理、定径、冷却、切断、坡口加工、检验、标识和水压试验，直至生产厂厂门处合格产品。 | `usitc-welded-line-pipe-2014`; `api-spec-5l-47-announcement-2026` |
| `boundary_upstream_links` | 采购产品和能源 | 采购投入的生产置于前景边界之外，但必须关联代表性上游数据集，避免供应商数据集与制管厂清单重复计入。 | `worldsteel-lci-methodology-2017` |
| `boundary_route_specificity` | HFW/ERW、HSAW 和 LSAW | 只声明适用的原料形态和焊接耗材：HFW/ERW 与 HSAW 用钢卷，LSAW 用钢板，仅 SAW 路线使用焊丝和焊剂。 | `usitc-welded-line-pipe-2014` |
| `boundary_external_coating` | 外部功能性涂层 | 默认排除外防腐、保温和混凝土配重涂层；声明市场状态包含涂层时，应附加单独计量的前景涂覆过程并披露边界变化。 | `api-spec-5l-47-announcement-2026` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 原料准备与管体成形 | `required` | 始终纳入；HFW/ERW 或 HSAW 只用钢卷，LSAW 只用钢板 | 前景准备与成形 | 每 kg 转入焊接的成形管坯及每 1 kg 合格参考产品 |
| `welding` | 焊缝焊接及适用的焊后热处理 | `required` | 始终纳入；HSAW 或 LSAW 才使用 SAW 焊丝和焊剂，现场热处理耗用天然气时才记录天然气 | 前景连接与热处理 | 每 kg 转入精整的未精整焊管及每 1 kg 合格参考产品 |
| `finishing_testing` | 定径、切断、管端加工、检验、标识和水压试验 | `required` | 始终纳入；仅记录跨越场址边界的水压试验补水和废水 | 前景精整与质量验收 | 每 1 kg 厂门处合格钢制焊接管线管 |

### 过程：原料准备与管体成形（`forming`）

#### 输入

##### 产品流

###### 钢卷路线用热轧钢卷（`forming_coil_input`）

记录 HFW/ERW 或 HSAW 成形所领用的采购热轧扁平钢卷；LSAW 钢板路线不适用。

- 选定流：热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格产品生产领用钢卷净质量，并校正退卷和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_issues`
- 来源：`usitc-welded-line-pipe-2014`

###### LSAW 用热轧钢板（`forming_plate_input`）

记录 LSAW 成形所领用的每张采购定尺热轧钢板；在确认精确公共流身份前 UUID 留空。

- 选定流：LSAW 管线管制造用热轧钢板
- 流属性/单位：Mass / kg
- 数量规则：合格 LSAW 产品生产领用钢板净质量，并校正退料和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_issues`
- 来源：`usitc-welded-line-pipe-2014`

###### 成形用电（`forming_electricity_input`）

记录开卷、纵剪、边缘加工、压力机和成形辊所用交流电；共用电表采用有依据的运行或工程驱动量分配。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：成形设备实测或有依据分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成形未焊钢制管坯（`formed_shell_output`）

记录从成形转入焊接的成形未焊管坯内部转移质量；该内部中间体需要前景专用流。

- 选定流：成形未焊钢制管坯
- 流属性/单位：Mass / kg
- 数量规则：边缘加工后从成形转入焊接的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_internal_transfers`
- 来源：`usitc-welded-line-pipe-2014`

##### 废物流

###### 成形废钢（`forming_scrap_output`）

记录作为工业后废钢离开过程的切边、纵剪损失、裁切料和不合格成形钢材，不含仍在管坯中的金属。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开成形过程的称重废钢，扣除同期返回生产的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_waste`
- 来源：`usitc-welded-line-pipe-2014`

##### 基本流

### 过程：焊缝焊接及适用的焊后热处理（`welding`）

#### 输入

##### 产品流

###### 成形未焊钢制管坯投入（`formed_shell_input`）

记录从成形转入焊接的同一内部中间体；报告期质量和流身份应与 `formed_shell_output` 一致。

- 选定流：成形未焊钢制管坯
- 流属性/单位：Mass / kg
- 数量规则：焊接过程接收的成形管坯质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_internal_transfers`
- 来源：`usitc-welded-line-pipe-2014`

###### 焊接用电（`welding_electricity_input`）

记录 HFW/ERW 或埋弧焊设备及焊线辅助设备所用交流电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：焊线实测或有依据分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`usitc-welded-line-pipe-2014`; `worldsteel-lci-methodology-2017`

###### 焊后热处理用天然气（`postweld_natural_gas_input`）

仅在气态天然气跨越场址边界并用于焊缝或全管体焊后热处理时记录，否则标记不适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于适用焊后热处理的实测天然气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_fuel`
- 来源：`usitc-welded-line-pipe-2014`; `worldsteel-lci-methodology-2017`

###### 埋弧焊焊丝（`saw_welding_wire_input`）

仅对 HSAW 或 LSAW 记录所声明的实心或其他规定形态焊丝；除非确为实际合格耗材，不得以药芯焊丝替代。

- 选定流：埋弧焊用钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：生产批次焊丝领用质量减实测退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts_issues`
- 来源：`usitc-welded-line-pipe-2014`

###### 埋弧焊焊剂（`saw_welding_flux_input`）

仅对 HSAW 或 LSAW 记录颗粒状埋弧焊焊剂；应核对总领用、回收焊剂、退库和处置量。

- 选定流：颗粒状埋弧焊焊剂
- 流属性/单位：Mass / kg
- 数量规则：新焊剂领用量加期初库存，减可回用焊剂、期末库存和退库量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts_issues`
- 来源：`usitc-welded-line-pipe-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未精整钢制焊接管线管（`unfinished_pipe_output`）

记录在最终检验和水压试验验收之前转入定径与精整的焊管；该流不是厂门参考产品。

- 选定流：精整前未精整钢制焊接管线管
- 流属性/单位：Mass / kg
- 数量规则：焊缝处理后从焊接转入精整的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_internal_transfers`
- 来源：`usitc-welded-line-pipe-2014`

##### 废物流

###### 焊接废钢（`welding_scrap_output`）

记录焊瘤、切除修补料和不合格焊管作为工业后废钢离开焊接过程的质量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开焊接过程的称重废钢，扣除同期返回生产的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_waste`
- 来源：`usitc-welded-line-pipe-2014`

###### 废埋弧焊焊剂（`spent_flux_output`）

仅记录不能返回 SAW 工序且跨越废物边界的废颗粒焊剂；不得与焊接烟尘或废钢合并。

- 选定流：废埋弧焊焊剂
- 流属性/单位：Mass / kg
- 数量规则：送往所声明处理或处置路线的废焊剂称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_waste`
- 来源：`usitc-welded-line-pipe-2014`

##### 基本流

###### 热处理直接化石源二氧化碳（`direct_fossil_co2_output`）

记录适用热处理中现场天然气燃烧直接排放的化石源二氧化碳，不含燃料和电力上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址报告的、归属于所记录天然气燃烧的直接化石源 CO2
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`worldsteel-lci-methodology-2017`

### 过程：定径、管端加工、检验和水压试验（`finishing_testing`）

#### 输入

##### 产品流

###### 未精整钢制焊接管线管投入（`unfinished_pipe_input`）

记录从焊接接收的内部中间体，其质量和身份应与 `unfinished_pipe_output` 一致。

- 选定流：精整前未精整钢制焊接管线管
- 流属性/单位：Mass / kg
- 数量规则：精整过程从焊接接收的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_internal_transfers`
- 来源：`usitc-welded-line-pipe-2014`

###### 精整与试验用电（`finishing_electricity_input`）

记录定径、冷却辅助、切断、坡口加工、检验、标识、搬运及水压试验设备所用交流电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：精整和试验实测或有依据分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`usitc-welded-line-pipe-2014`; `worldsteel-lci-methodology-2017`

###### 水压试验补充水（`hydrotest_water_input`）

记录为补充水压试验损失而进入场址或清单边界的工艺用水，不得将循环水反复报告为新投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的水压试验实测补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrotest_water`
- 来源：`usitc-welded-line-pipe-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格钢制焊接管线管（`reference_line_pipe_output`）

仅记录完成所需定径、精整、检验、标识和水压试验后验收合格的钢管；本行采用参考产品身份。

- 选定流：用于石油或天然气管道的钢制焊接管材 `e505f1de-c307-4319-a6b6-371b34e7b1ed`
- 流属性/单位：Mass / kg
- 数量规则：厂门处合格钢管净干质量；归一化后参考输出等于 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_acceptance`
- 来源：`un-cpc-3-structure-2025`; `iso-3183-2019`; `api-spec-5l-47-announcement-2026`

##### 废物流

###### 精整废钢（`finishing_scrap_output`）

记录作为工业后废钢离开过程的管端切料、以钢材收集的坡口切屑、破坏性试验试样和不合格成品管。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开精整过程的称重废钢，扣除同期返回生产的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_waste`
- 来源：`usitc-welded-line-pipe-2014`

###### 水压试验废水（`hydrotest_wastewater_output`）

记录从前景边界排往场内或场外处理的水压试验用水；应识别水质和去向，不得与无关废水合并。

- 选定流：钢制焊接管线管精整水压试验废水
- 流属性/单位：Mass / kg
- 数量规则：送往所声明处理路线的实测或由体积换算的水压试验废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钢制焊接管线管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrotest_water`
- 来源：`usitc-welded-line-pipe-2014`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 混合钢管产品和路线 | 在记录允许时，先细分 HFW/ERW、HSAW、LSAW 生产线及单独计量作业，再进行分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_operations` | 共用成形、精整、公用工程和处理作业 | 共用负荷按设备用电、运行时间、加工质量、水量或废物处理质量等有文件依据的因果驱动量分配；仅在无更具因果性的计量时采用合格产品质量。 | `worldsteel-lci-methodology-2017` |
| `allocation_scrap` | 工业后废钢 | 单独报告废钢质量、品质、去向、内部返回和外部回收。除非下游研究明确选择并记录一致的回收方法，不得在本从门到门数据集内计入避免原生钢生产信用。 | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_flux` | 回收埋弧焊焊剂 | 返回同一 SAW 工序的焊剂作为内部循环而非共产品；仅以新鲜补充焊剂作为边界投入，以不可回用废焊剂作为废物输出。 | `usitc-welded-line-pipe-2014` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts_issues` | forming; welding | 钢卷、钢板、焊丝和焊剂 | 采购、地磅、仓库领用、退库和库存记录 | material_id; specification; grade; supplier; origin; opening_stock; receipts; issues; returns; recovered_flux; closing_stock; mass | 按路线和生产批次核对可追溯物料批次 | kg | 每次收料和领用；每月核对 | 至少连续 12 个有代表性的月份，或完整的更短生产期 | 生产声明产品的全部前景制管作业 | 按材料和路线汇总净消耗量，再除以合格参考产品质量 | 校准秤；供应商证书；仓库台账；批次追溯；核对签字 |
| `cp_process_energy` | forming; welding; finishing_testing | 交流电 | 分时电表、分表、公用事业账单和设备分配记录 | meter_id; voltage_level; start_reading; end_reading; kWh; production_line; route; operating_hours; allocation_driver | 读取专用电表；共用电力按有文件依据的因果驱动量分配 | kWh | 电表间隔及月结 | 与产品输出相同期间 | 前景场址所有相关电表 | 净 kWh 换算为 MJ 后按合格产品质量归一化 | 电表校准；账单核对；分配工作表；电网或供应商身份 |
| `cp_process_fuel` | welding | 热处理天然气 | 燃气表、账单和热处理批次记录 | meter_id; volume; temperature; pressure; moisture_basis; route; furnace_id; campaign; allocation_driver | 炉前计量，或按热处理记录分配已核对的场址总表 | m3 | 每批次及月结 | 与适用热处理产品相同期间 | 场内热处理设备 | 基准条件体积按适用合格产品质量归一化 | 仪表校准；账单核对；基准条件计算；批次记录 |
| `cp_internal_transfers` | forming; welding; finishing_testing | 成形管坯和未精整焊管 | 转移称重、产线计数、尺寸记录和质量平衡表 | transfer_id; route; count; length; outside_diameter; wall_thickness; measured_mass; calculated_mass; rejects | 可行时称重，否则由核实尺寸和密度计算并与原料、废钢和产出核对 | kg | 每批次或班次 | 与产品输出相同期间 | 前景制管厂内部转移 | 内部中间体输出与输入相匹配，并按合格产品质量归一化 | 转移记录；尺寸检验；秤校准；签字质量平衡表 |
| `cp_scrap_and_waste` | forming; welding; finishing_testing | 废钢和废焊剂 | 废料箱称重、废物联单、回收焊剂台账和处理记录 | waste_id; process_origin; material; gross_mass; tare; net_mass; destination; internal_return; treatment; hazardous_status | 每批外运废物称重，内部返回量单独核对 | kg | 每次外运；月结 | 与产品输出相同期间 | 所有前景废物收集点 | 按原子废物流和过程汇总净废物量，再按合格产品质量归一化 | 校准秤；废物联单；接收方凭证；回收物台账 |
| `cp_hydrotest_water` | finishing_testing | 工艺补水和水压试验废水 | 进出水表、储罐平衡、循环记录和处理记录 | inlet_volume; discharge_volume; opening_storage; closing_storage; recirculated_volume; density; water_quality; destination | 计量边界补水和排水；仅在无仪表时采用储量平衡 | kg 或 m3 | 每试验批次及月结 | 与产品输出相同期间 | 水压试验系统和所声明处理边界 | 用有文件依据的密度将边界体积换算为质量；内部循环不重复计入投入 | 仪表和储罐校准；水质分析；排放或处理记录 |
| `cp_direct_emissions` | welding | 直接化石源二氧化碳 | 连续监测、核实排放报告或场址燃烧清单 | source_id; fuel_id; monitored_CO2; reporting_method; period; allocation_driver | 使用场址报告的直接排放，仅在共用燃烧源的产品之间分配 | kg | 连续或报告期总量 | 与燃料和产品输出相同期间 | 场内热处理燃烧源 | 汇总直接化石源 CO2 并按适用合格产品质量归一化 | 监测 QA/QC 或核实排放清单；燃料核对；分配工作表 |
| `cp_product_acceptance` | finishing_testing | 合格钢制焊接管线管 | 生产、检验、水压试验、标识和发运记录 | lot_id; route; specification; edition; product_specification_level; grade; dimensions; heat_treatment; end_finish; coating_state; accepted_mass; rejected_mass; test_status | 合格批次称重并与检验和水压试验验收记录核对 | kg | 每批次 | 与全部投入和产出相同期间 | 前景场址所有声明产品生产线 | 仅汇总合格产品净干质量，归一化输出设为 1 kg | 秤校准；材质证明；检验和试验记录；批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化量 = 报告期原子流量 / 报告期合格参考产品质量 | 原子流量；合格产品质量 | 每 1 kg 合格钢制焊接管线管的量 | `worldsteel-lci-methodology-2017` |
| `calc_material_reconciliation` | 钢卷、钢板、焊丝和焊剂 | 净消耗 = 期初库存 + 收料 - 退料 - 经核实可回用回收量 - 期末库存 | 库存和交易记录 | 按原子材料及路线的净消耗量 | `worldsteel-lci-methodology-2017` |
| `calc_internal_mass_balance` | 成形管坯和未精整焊管 | 每次内部转移的输出与输入质量必须一致；发布前调查任何差额 | 转移称重或尺寸计算质量；记录的废品 | 核对后的内部中间体质量 | `usitc-welded-line-pipe-2014` |
| `calc_water_boundary` | 水压试验用水 | 净水投入 = 边界补水；废水输出 = 边界排水；循环水为内部循环，仅作辅助信息报告 | 进水、排水、储量、循环和密度记录 | 工艺用水投入和水压试验废水输出 | `usitc-welded-line-pipe-2014` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和钢材原料 | 每个生产批次追溯至路线、适用规范及版本、产品规范等级、钢级、尺寸、焊缝方向、热处理、检验状态和供应商钢材批次。 | 材质证明；生产流转卡；检验和水压试验记录；供应商证书 |
| `dq_temporal_representativeness` | 所有前景记录 | 至少使用连续 12 个有代表性的月份；批次生产或场址运行期较短时除外，并披露期间、停机、异常运行和排除项。 | 有日期的台账、电表导出、生产日历和异常记录 |
| `dq_geographic_technology` | 上游数据集 | 选择供应商和地域代表性的上游钢材数据，以及国家或地区代表性的电力和燃料数据；说明每项代理，并声明 HFW/ERW、HSAW 或 LSAW 路线。 | 供应商产地；数据集元数据；电网或合同记录；路线声明 |
| `dq_completeness_reconciliation` | 质量、能源、水、废物和直接排放 | 各采集协议与源台账核对；说明缺失仪表、估算分配、库存差异、未计量释放和从报告清单中排除的任何流。 | 签字核对表；仪表覆盖清单；废物联单；排放清单 |
| `dq_no_cartesian_variants` | 路线和产品变体 | 对实际生产批次和路线特定原子流建模，不得将钢级、直径、壁厚、涂层和路线的组合展开为合成清单行。 | 批次加权汇总文件和变体至批次映射 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 确认参考产品 UUID、1 kg 净干质量、焊接路线、石油或天然气管道用途、规范、钢级、尺寸、热处理、管端形式、试验状态和涂层状态。 | `un-cpc-3-structure-2025`; `iso-3183-2019`; `api-spec-5l-47-announcement-2026` |
| `validation_route_inputs` | 路线特定清单 | HFW/ERW 或 HSAW 必须用钢卷而不用钢板，LSAW 必须用钢板而不用钢卷，且只有 SAW 路线使用焊丝和焊剂；例外须有过程证据。 | `usitc-welded-line-pipe-2014` |
| `validation_internal_transfers` | 内部产品流 | 成形管坯和未精整焊管的内部输出、输入配对行必须具有相同报告期质量和身份。 | `usitc-welded-line-pipe-2014` |
| `validation_mass_balance` | 前景制管厂 | 将钢材原料质量与合格产品、分别记录的全部废钢、库存变化和有文件依据的未计量损失核对；发布前调查未解决差额。 | `worldsteel-lci-methodology-2017` |
| `validation_energy_water_emissions` | 公用工程和直接释放 | 将电力和天然气与仪表或账单核对，将水压试验补水和排水与水量平衡核对，将直接化石源 CO2 与场址排放或燃烧记录核对，不得加入电力或燃料上游排放。 | `worldsteel-lci-methodology-2017` |
| `validation_boundary` | 数据集完整性 | 不得无说明地纳入外部功能性涂层、管道安装、使用或生命末期，也不得无说明地遗漏适用热处理、检验、水压试验、废钢或废水。 | `iso-3183-2019`; `api-spec-5l-47-announcement-2026` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 钢制焊接管线管在生产厂厂门处的从门到门前景生产数据集 |
| downstream_use | 当产品、路线、地域、时间、钢级、尺寸、规范和涂层状态兼容时，可作为管道产品与系统的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 产品碳足迹、EPD、采购、设计和生命周期研究；须关联兼容的上游钢材和能源数据集，并按需附加下游涂覆、运输、施工、使用和生命末期 |
| excluded_use | 直接比较不兼容路线或钢级；代表无缝管、铸管、钻采用管、结构管、未附加涂层数据的涂覆管、管道安装、服役性能或生命末期 |
| required_metadata | PCR id 和版本；场址和地域；报告期；HFW/ERW、HSAW 或 LSAW 路线；规范和版本；产品规范等级；钢级；直径；壁厚；长度；热处理；管端形式；检验和水压试验状态；涂层状态；参考质量；上游数据集身份；分配规则 |
| required_quality_disclosure | 初级数据占比和仪表覆盖；路线及产品加权；供应商和上游数据集代表性；材料、能源、水、废物和排放核对；代理数据集；排除项；内部回收；不确定性及未解决 UUID 或范围证据需求 |
| update_trigger | 路线、原料形态或供应商钢材数据集、产品组合、规范、炉或焊接技术、电力或燃料供应、水压试验水系统、分配方法、场址地域或代表性生产期间发生实质变化时重新计算 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41285 正式分类身份及其与相邻钢管类别的区别 |
| `iso-3183-2019` | `standard` | ISO 3183:2019，Petroleum and natural gas industries — Steel pipe for pipeline transportation systems，https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/07/66/76676.html?browse=ics | 产品应用边界；无缝和焊管范围；排除铸管；规范限定信息 |
| `api-spec-5l-47-announcement-2026` | `standard` | 美国石油学会，API Announces 47th Edition of Foundational Line Pipe Standard，2026-06-02，https://www.api.org/products-and-services/standards/important-standards-announcements/api-announces-47th-edition-of-foundational-line-pipe-standard-5l | 制造、检验、试验、标识、追溯、HFW 质量及产品限定要求 |
| `usitc-welded-line-pipe-2014` | `official_guidance` | 美国国际贸易委员会，Certain Welded Line Pipe from Korea and Turkey，调查编号 701-TA-524-525 和 731-TA-1260-1261（初裁），2014，https://www.govinfo.gov/content/pkg/GOVPUB-ITC1-PURL-gpo54228/pdf/GOVPUB-ITC1-PURL-gpo54228.pdf | ERW、HSAW 和 LSAW 过程分解；钢卷与钢板原料；焊接、热处理、定径、切断、检验和水压试验 |
| `worldsteel-lci-methodology-2017` | `method_factor` | 世界钢铁协会，Life Cycle Inventory Methodology Report，2017，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | 声明质量单位、边界透明度、上游数据集代表性、分配、数据采集及避免重复计算 |
