---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-or-silver-clad-with-gold-not-further-worked-than-semi-manufactured
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 包金的贱金属或银，加工程度不超过半制成品

## 1. 范围与适用性

本 PCR 适用于在工厂大门交付的半制成品生产：以贱金属或银为基体，通过软钎焊、硬钎焊、焊接、热轧或类似机械方式，在一个或多个表面牢固结合加工态金层。产品仍为半制成品时，以金镶嵌的贱金属也在范围内。类别边界遵循 CPC 3.0 正式类别身份以及“包覆贵金属的金属”的法定含义。仅镀金、电镀、气相沉积、涂覆或以其他薄层方式覆金的金属不属于本 PCR，因为镀层不等同于包覆层。成品首饰、具有特定制品功能的部件、包金废料，以及包银或包铂金属也不在范围内。

代表性路线为铜带与金带的连续轧制复合，包括表面准备、叠合、压力轧制、路线特定的热处理、定厚精轧、表面精整、分条、检验和过程废物管理。前景数据包可以表示其他涵盖的基体或其他符合法定定义的包覆路线，但必须将每种实际材料、能源、废物和基本流交换分别写成一个原子行。购入金属、化学品、燃料、电力、氧气和水的上游生产采用关联数据集表示；下游制品制造、使用和报废处理不属于前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-or-silver-clad-with-gold-not-further-worked-than-semi-manufactured |
| classification_refs | CPC 3.0: 41340 |
| covered_products | 在一个或多个表面以机械或冶金方式牢固结合金层的半制成贱金属或银带、片、板、棒、线或类似加工形态；符合定义的嵌金贱金属 |
| excluded_products | 电镀或仅作其他镀覆/涂覆的金属；不存在独立基体的纯金或金合金；包银或包铂金属；成品制品和首饰；包金废料和废碎屑 |
| representative_product | 采用固相轧制复合生产、以检验合格的半制成卷材或定尺带材交付的包金铜带 |
| production_route | 表面准备、叠合、轧制复合、路线特定的热处理、精轧、表面精整、分条、检验和包装；采用其他符合定义的软钎焊、硬钎焊、焊接、热轧或类似机械路线时须明确披露 |
| market_state | 工厂大门交付的干燥、固态、未装配半制成品，并声明基体、金层、几何形态和交付形态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产并交付具有机械或冶金结合金层的半制成贱金属或银产品 |
| How much | 工厂大门处 1 kg 合格产品净质量 |
| How well | 符合声明的基体规范、金纯度或合金、金层位置和厚度、尺寸、结合完整性判据、表面质量及验收试验 |
| How long or cycle | 工厂大门交付的一个生产批次；该产品为中间材料，不规定使用寿命 |
| reference_flow_link | `cddd034b-762c-49e3-af56-109b23cfc982` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品净质量 |
| 参考产品流 | 半制成而未进一步加工的镀金贱金属或银 `cddd034b-762c-49e3-af56-109b23cfc982` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 基体金属及合金；金纯度或合金；金质量及质量分数；包覆面和层厚；产品形态和尺寸；结合路线；热处理状态；表面质量；结合完整性和尺寸验收判据；各金属再生料含量；生产场址和地域；报告期；工厂大门交付形态 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除包装、卷轴、托盘及其他皮重后计量合格产品；所有清单交换均归一化至 1 kg 合格产品净产出。 |
| `metal_input_mass` | 铜基带、金带及包金废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各金属采用同一干质量基准记录；分别报告金质量和基体金属质量，以便核查组成和金属平衡。 |
| `gas_volume_basis` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积以及温度、压力和干/湿基准状态；仅使用有记录的系数进行换算。 |
| `electricity_energy_basis` | 交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电力以 kWh 采集时保留原始电表读数及换算系数；3.6 MJ/kWh 仅作为精确单位换算，不作为能耗绩效估计。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 前景系统边界 | 包括从接收基体金属和金包覆料，到表面准备、包覆或轧制复合、使用时的热处理、精轧、表面精整、分条、检验、内部搬运，直至半制成品在工厂大门放行的所有场内操作。 | `nist-clad-metals-1983` |
| `sb_cladding_identity` | 产品身份 | 仅纳入金层通过软钎焊、硬钎焊、焊接、热轧或类似机械方式结合的产品，包括符合定义的镶嵌；排除不符合该定义的镀覆或涂覆产品。 | `eu-cn-2020-1577-ch71` |
| `sb_upstream_inputs` | 购入投入 | 对跨越前景边界的每种购入金属、化学品、燃料、电力、氧气、水和润滑剂关联具有代表性的上游数据集；不得将这些上游排放再次作为直接前景基本流计入。 | `eu-pef-2021-2279` |
| `sb_direct_releases` | 场址直接输出 | 每项直接废物和基本流排放须在其离开前景过程的位置单独记录；不得把废料、废油、废水或大气排放合并成笼统行。 | `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | 下游生命周期 | 排除下游首饰或部件加工、产品使用、维护和报废；若研究明确扩展边界，则须单独报告这些阶段。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 代表性起始材料为购入紫铜带和金带；必须声明实际基体金属、合金、表面状态、尺寸、金纯度、金形态、再生料含量、供应商地域及交付状态。 |
| starting_condition_role | 界定首个前景转化步骤，防止把上游采矿、精炼、合金化或带材生产默认为场内包覆操作。 |
| product_classification_scope | 包金的贱金属或银，加工程度不超过半制成品；CPC 3.0 代码 41340 仅为映射语境，不构成规范 PCR 身份。 |
| recursive_input_rule | 若投入本身已经属于同一包金产品类别，则将其作为一个单独识别的购入产品投入并关联其上游数据集，同时声明起始状态；不得在前景过程中递归重建其包覆清单。 |
| upstream_dataset_requirement | 每种购入投入均需具有地域、技术、时间和材料代表性的上游数据集；否则须明确记录数据缺口。 |
| disclosure | 披露基体和金的规格、结合路线、热源、清洗及润滑系统、生产和废物处理地域、报告期、分配选择、数据缺口以及任何场外操作。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `gold_cladding_and_finishing` | 表面准备、包金和半精整 | `required` | 始终纳入；路线特定交换仅在声明的技术实际使用时记录。 | 从购入基体和金料到检验合格半制成包金产品的前景生产 | 1 kg 合格产品净产出 |

以下卡片描述代表性的铜带轧制复合路线。声明产品采用银或其他贱金属基体，或采用其他符合定义的包覆技术时，应替换或增加以实际基体及路线交换命名的原子行；不得把行名改成材料或公用工程集合。

### 过程：表面准备、包金和半精整（`gold_cladding_and_finishing`）

#### 输入

##### 产品流

###### 铜基带（`in_copper_strip`）

未涂覆紫铜带作为进入表面准备的代表性基体。非铜产品必须新增一个以实际基体金属或合金命名的原子行。

- 选定流：紫铜板带
- 流属性/单位：Mass / kg
- 数量规则：计量进入批次的干基净质量，扣除包装和不可回收供应商皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_metal_balance`
- 来源：`nist-clad-metals-1983`

###### 金包覆带材（`in_gold_strip`）

进入复合叠层的加工态金带与基体分开记录。金纯度或合金、厚度、宽度和再生料含量均为必需前景限定信息。

- 选定流：半制成金带材
- 流属性/单位：Mass / kg
- 数量规则：计量发放到批次的干质量，并扣除退回的未用金带
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_metal_balance`
- 来源：`eu-cn-2020-1577-ch71`; `nist-clad-metals-1983`

###### 交流电（`in_alternating_current`）

计量清洗设备、轧机、泵、通风、检验及其他可直接归属于前景的设备用电，或从已核对的分表中进行分配。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于批次的计量电量；从 kWh 换算时保留精确单位换算记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

###### 热处理用气态天然气（`in_natural_gas`）

仅当直接燃烧预热、退火或消除应力操作位于前景边界内时记录天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量归属于已纳入热处理的气态天然气体积，并保留体积基准状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`nist-clad-metals-1983`

###### 富氧加热用工业氧气（`in_industrial_oxygen`）

仅当声明的直接加热技术向燃烧器或炉窑单独供应工业氧气时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：计量归属于已纳入富氧加热操作的氧气体积，并保留纯度和体积基准状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

###### 水基表面清洗用工艺用水（`in_process_water`）

仅在复合前或精整后采用水基清洗或漂洗时记录用水；未跨越边界的闭路循环水不重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的补充水和一次通过工艺水质量，不计内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：

###### 碱性清洗用氢氧化钠（`in_sodium_hydroxide`）

仅在使用碱性表面清洗槽时记录氢氧化钠。按纯 NaOH 当量报告并保留供应溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：投入已纳入清洗操作的购入或配制氢氧化钠质量，按纯 NaOH 当量表示
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：

###### 轧制润滑油（`in_rolling_lubricant`）

仅记录前景润滑回路中消耗或损失的新增轧制润滑油；回路内循环油量不重复计入。

- 选定流：轧制润滑油
- 流属性/单位：Mass / kg
- 数量规则：新补充润滑油加归属于批次的润滑油损失，扣除返回同一回路的回收油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格包金半制成品（`out_reference_product`）

验收合格产品为定量参考；不合格材料及包装不计入产品净质量。

- 选定流：半制成而未进一步加工的镀金贱金属或银 `cddd034b-762c-49e3-af56-109b23cfc982`
- 流属性/单位：Mass / kg
- 数量规则：计量通过声明的尺寸、结合完整性、组成和表面质量验收判据的产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_metal_balance`
- 来源：`un-cpc-3-0-2025`; `eu-cn-2020-1577-ch71`

##### 废物流

###### 分类收集的包金边角废料（`out_gold_clad_scrap`）

仅当切边、下脚料和不合格包覆件仍保有金层，且离开前景过程进行回收或处理时，作为本废物流记录。

- 选定流：包金金属废料和废碎屑
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景边界的分类收集包金切边、下脚料和不合格件干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_metal_balance`
- 来源：`nist-clad-metals-1983`

###### 废润滑油（`out_used_lubricating_oil`）

从回路移出并转交回收、处理或处置的废轧制润滑油，与新增补充油分开记录。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景边界的废润滑油质量；若游离水单独计量，则扣除游离水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：

###### 清洗废水（`out_cleaning_wastewater`）

水基清洗及漂洗废水离开包覆过程进入场内处理、场外处理或有记录的排放时予以记录。碱度、溶解金属浓度和去向作为限定信息保留。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景过程的废水质量，并核对单独加入的水和移出的槽液存量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：

##### 基本流

###### 场内燃料燃烧直接排放的化石源二氧化碳（`out_fossil_carbon_dioxide`）

仅记录前景化石燃料燃烧直接释放的二氧化碳。电力相关及其他上游二氧化碳保留在关联的上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用有记录的燃料碳含量和氧化数据，计量或计算归属于已纳入燃烧的场址直接化石源二氧化碳质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包金产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | 共用前景操作 | 只要投入和排放能够直接归属于声明的包金产品，应通过分表计量或拆分清洗、轧制、热处理、精整和废物管理来避免分配。 | `eu-pef-2021-2279` |
| `alloc_physical_second` | 不可避免的多功能性 | 无法拆分或扩展系统时，采用与共用操作相关且有记录的因果物理关系；当包金产品与其他产出造成的负荷存在实质差异时，不得默认采用总质量分配。 | `eu-pef-2021-2279` |
| `alloc_economic_last` | 剩余共用负荷 | 仅在不存在合理物理关系时使用经济分配；采用所有共产品在生产阶段的同期工厂大门价值，披露价格来源和平均期，并因金含量可能主导价值而进行敏感性分析。 | `eu-pef-2021-2279` |
| `alloc_scrap_status` | 包金边角料及废旧材料 | 根据实际控制权、去向和市场状态，把每种输出材料判定为废物或共产品。除非明确扩展系统并报告替代证据，否则本工厂大门 PCR 内不赋予避免负荷抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_metal_balance` | `gold_cladding_and_finishing` | 铜基带、金带、合格产品和包金废料 | 地磅、校准秤、领料、退料和验收记录 | batch_id; material_id; alloy_or_purity; gross_mass; tare_mass; returned_mass; accepted_mass; scrap_mass; gold_layer_spec; calibration_id | 在统一干质量基准上核对供应商收货、批次领退料、产品验收和分类废料记录。 | kg | 每批 | 报告期内所有批次 | 声明场址内所有纳入的生产线 | 按批次汇总净投入和产出质量，再以报告期合格产品净质量归一化。 | 秤校准；材料证书；批次流转卡；验收及废料票据 |
| `cp_energy_meters` | `gold_cladding_and_finishing` | 交流电、天然气和工业氧气 | 公用工程表计、分表、账单和生产日志 | meter_id; opening_reading; closing_reading; unit; reference_conditions; batch_or_period; downtime; shared_load_basis | 优先使用专用表计；否则核对场址总量，并仅按有记录的运行数据分配可直接归属份额。 | 电力 MJ；气体 m3 | 每个表计间隔和生产活动期 | 至少 12 个月的代表性报告期，或不足 12 个月的完整生产活动期 | 所有纳入的前景设备 | 扣除非生产及排除负荷，核对账单，并按合格产品质量归一化归属总量。 | 表计校准；账单核对；运行时间及生产日志 |
| `cp_cleaning_records` | `gold_cladding_and_finishing` | 工艺用水、氢氧化钠和清洗废水 | 槽液批次表、化学品领用、水表、浓度测试和废水记录 | bath_id; water_makeup; NaOH_solution_mass; NaOH_concentration; rinse_water; wastewater_mass; pH; dissolved_metals; destination | 记录每次配槽、补加、排槽和漂洗；由溶液质量及实测浓度计算纯 NaOH 当量。 | kg | 每次槽液事件和表计间隔 | 报告期内所有清洗事件 | 所有纳入的清洗及漂洗工位 | 核对水和槽液存量，按期间汇总并以合格产品质量归一化。 | 表计校准；浓度分析；pH 和溶解金属结果；废物转移或排放记录 |
| `cp_lubricant_records` | `gold_cladding_and_finishing` | 新增轧制油和废润滑油 | 仓储领用、油箱存量、回收返回和废物转移记录 | lubricant_id; formulation; opening_stock; additions; recovered_return; closing_stock; used_oil_mass; free_water; destination | 进行润滑油存量平衡，并单独称量离场废油。 | kg | 每次添加/移出及每月存量结算 | 报告期内所有润滑油事件 | 纳入的轧制和精整设备 | 新增消耗量等于期初存量加添加量减期末存量及单独返回的回收油；新增和废油输出分别归一化。 | 油箱校准；采购领用；回收及废物转移记录 |
| `cp_direct_emissions` | `gold_cladding_and_finishing` | 直接化石源二氧化碳 | 燃料表计、燃料组成证书、烟气测量或经批准的场址质量平衡记录 | fuel_volume_or_mass; reference_conditions; carbon_content; fossil_fraction; oxidation_fraction; measured_CO2; method_id | 优先采用代表性烟气测量；否则根据采集的燃料量和供应商特定碳数据计算，并保留公式和全部系数。 | kg CO2 | 每次测试活动或每个报告期计算 | 报告期内具有代表性的运行模式 | 所有纳入的直接燃烧设备 | 仅汇总纳入设备的直接化石源 CO2，并以合格产品质量归一化。 | 实验室或分析仪 QA；燃料证书；表计校准；计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 合格产品 | 参考产品净质量 = 验收毛质量 - 包装、卷轴、托盘和其他实测皮重。 | 验收毛质量；皮重 | `out_reference_product` 净 kg | |
| `calc_pure_naoh` | 氢氧化钠投入 | 纯 NaOH 当量 = 溶液质量 × 实测 NaOH 质量分数；保留两个原始值。 | NaOH 溶液质量；实测浓度 | `in_sodium_hydroxide` kg 纯 NaOH | |
| `calc_inventory_normalization` | 每个清单行 | 归一化数量 = 报告期可归属数量 ÷ 报告期合格产品净质量。 | 可归属行数量；合格产品净质量 | 每 1 kg 参考产品的行数量 | `eu-pef-2021-2279` |
| `calc_metal_balance` | 基体、金、产品及含金属输出 | 将分别计量的基体金属和金投入与其在合格产品、分类废料、废水及任何其他单独命名的含金属输出中的质量进行核对；报告闭合度和未解决差异，不得强制配平。 | 金属投入质量；产品组成；废料组成；废水金属分析；其他命名金属输出 | 基体金属和金的质量平衡闭合度 | |
| `calc_direct_fossil_co2` | 直接化石源二氧化碳 | 采用代表性实测 CO2；或根据采集的燃料量、碳含量、化石比例和氧化比例计算；保留场址公式和全部系数。 | 采集燃料量；碳含量；化石比例；氧化比例或烟气测量 | `out_fossil_carbon_dioxide` kg | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和金属投入 | 保存能识别基体合金、金纯度或合金、层位置和厚度、产品形态、尺寸、结合路线及交付状态的采购和产品规范。 | 供应商证书；内部规范；批次流转卡；检验报告 |
| `dq_mass_completeness` | 金属质量平衡 | 覆盖报告期所有批次，并分别核对铜或实际基体金属和金；解释每项未闭合差异及被排除的含金属物流。 | 校准秤记录；领退料记录；产品及废料组成测试 |
| `dq_temporal_representativeness` | 所有前景交换 | 使用能覆盖正常产品组合、启动、停机、维护及路线变化的连续代表期；报告期不足 12 个月时须说明理由。 | 生产日历；表计覆盖；停机及维护日志 |
| `dq_technology_geography` | 前景场址和上游关联 | 声明场址、国家或电网区域、结合技术、热源、清洗系统、润滑系统和废物去向；选择与这些事实匹配的上游数据集，否则披露不匹配。 | 场址元数据；工艺流程图；供应商及公用工程记录；数据集代表性审查 |
| `dq_measurement_quality` | 表计、秤、分析和计算 | 对每项材料交换保留校准状态、适用时的检出限、采样计划、换算系数、估算标识和计算复核记录。 | 校准证书；实验室 QA/QC；计算工作簿或可复现记录 |
| `dq_primary_data_priority` | 最相关前景过程 | 包金和精整过程以及主要金属、能源、水、废物和直接排放交换采用场址特定初级数据；记录代理数据及其预期影响。 | 与 `eu-pef-2021-2279` 一致的初级数据登记表和数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity_boundary` | 产品分类 | 确认输出以贱金属或银为基体，金层通过符合定义的机械或冶金包覆方式结合，产品仍为半制成品，且不只是镀覆或涂覆。 | `un-cpc-3-0-2025`; `eu-cn-2020-1577-ch71` |
| `val_reference_flow` | 定量参考 | 确认参考数量恰为 1 kg 合格产品净质量，且所有必需限定信息均已填写。 | |
| `val_atomic_inventory` | 清单结构 | 确认每个选定流都是一个原子产品、废物或基本流交换；拒绝集合标签、合并公用工程、合并废物和未命名路线替代项。 | |
| `val_uuid_identity` | Tiangong 引用 | 确认每个已填写 UUID 均能在公开状态码 100 下解析，英文和中文名称、流类型、分类、属性和单位组匹配；未解决行保持 UUID 为空并记录。 | |
| `val_mass_balance` | 铜或实际基体金属和金 | 使用投入、合格产品组成、分类废料、废水分析以及每个新增命名的含金属输出，分别核查基体金属和金的闭合；调查差异，不得消除差异。 | |
| `val_energy_emissions` | 能源和直接排放 | 将电力、燃料和氧气记录与纳入设备及报告期核对；确保直接化石源 CO2 不包含上游电力和燃料供应排放。 | |
| `val_allocation` | 多功能操作 | 确认已优先尝试拆分，并披露所有剩余物理或经济分配基准、数据集、期间和敏感性。 | `eu-pef-2021-2279` |
| `val_bilingual_alignment` | 双语 PCR 使用 | 确认中英文文件包含相同的 process_id、row_id、受控值、rule_id、UUID 和 source id。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂大门处半制成包金贱金属或银的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 声明的基体、金层、产品形态、路线、场址、地域、报告期和工厂大门边界具有代表性的产品级或部件级 LCA |
| excluded_use | 金电镀或其他非包覆涂层；纯金产品；未增加下游过程的成品首饰或部件；未披露基体或金层；未经代表性审查即归用于不同路线或地域 |
| required_metadata | 规范 PCR id；产品 UUID；基体和金规格；产品形态和尺寸；结合及热处理路线；场址和地域；报告期；参考流；上游数据集选择；分配方法；再生料含量；废物去向 |
| required_quality_disclosure | 初级数据覆盖；表计和秤校准；金和基体金属质量平衡闭合度；数据缺口和代理；时间、技术和地域代表性；不确定性和分配敏感性 |
| update_trigger | 基体或金规格、包覆或热处理技术、产品形态、场址、能源系统、清洗或润滑系统、废物路线、分配基准、上游数据集代表性发生变化，或实测清单出现实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，代码 41340。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | 正式产品分类身份和名称 |
| `eu-cn-2020-1577-ch71` | 正式指南（`official_guidance`） | 欧盟委员会，《委员会实施条例 (EU) 2020/1577》，2021 年合并商品目录，第 71 章注释 6-7 及品目 7109。https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf（检索日期：2026-09-04） | 经原文核验的包覆贵金属定义、与镀层的区别及类别边界 |
| `nist-clad-metals-1983` | 文献（`literature`） | J. T. Skelly，“Clad Metals - Material Conservation Through Design for Corrosion Control and High Performance”，载于 Technical Aspects of Critical Materials Use by the Steel Industry, Volume I，NBSIR 83-2679-1，1983，P39-1 至 P39-2。https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir83-2679-1.pdf（检索日期：2026-09-04） | 经原文核验的清洗、连续冷轧复合、热处理、精轧、退火、抛光和分条过程分解；包覆金属与镀层金属的区别 |
| `eu-pef-2021-2279` | 正式指南（`official_guidance`） | 欧盟委员会，《建议 (EU) 2021/2279》附件 I，环境足迹方法，特别是第 4.5 节及数据质量条款。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期：2026-09-04） | 系统边界披露、分配层级、前景数据质量和代表性规则 |
