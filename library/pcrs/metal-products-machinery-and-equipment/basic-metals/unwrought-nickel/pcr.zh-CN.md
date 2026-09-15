---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-nickel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻轧镍

## 1. 范围与适用性

本 PCR 适用于以未锻轧市场形态离开精炼厂的镍金属前景数据包，包括阴极、压块、球团、粒状、圆片或类似初级形态。仅当明确声明镍含量、合金牌号、物理形态、纯度和生产路线时，才涵盖未锻轧非合金镍及未锻轧镍合金。现行路线清单适用于湿法净化后电积或氢还原；羰基法路线数据集须待后续完成经审核的路线扩展后方可使用。

本 PCR 不包括镍矿石及精矿；作为产品出售的镍锍、氧化镍烧结物及其他镍冶炼中间产品；镍铁及其他炉料镍；镍化学品；镍粉及片状粉末；镍废碎料；以及镍型材、条、杆、丝、板、片、带、箔、管及管件等锻轧或半制成品。外购含镍中间产品的上游生产应由单独的供应商数据集表示，不得与精炼厂前景记录暗中合并。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-nickel |
| classification_refs | CPC 3.0：41422，未锻轧镍 |
| covered_products | 以未锻轧精炼厂门形态存在的镍金属，包括阴极、压块、球团、粒状、圆片及其他已声明的初级形态；非合金镍及未锻轧镍合金 |
| excluded_products | 镍矿石及精矿；作为中间产品出售的镍锍和氧化镍烧结物；镍铁；镍化学品；镍粉及片状粉末；镍废碎料；锻轧及半制成镍产品 |
| representative_product | 具有已声明未锻轧市场形态的精炼非合金镍 |
| production_route | 湿法净化后电积或氢还原；羰基法精炼及其他路线须先完成经审核的前景清单扩展 |
| market_state | 精炼厂门处干燥、可销售的镍金属，并声明纯度、合金牌号、形态、包装状态、地理范围和路线 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在精炼厂门供应可销售的未锻轧镍金属 |
| How much | 1,000 kg 未锻轧镍产品净质量 |
| How well | 符合已声明的镍纯度或合金牌号及物理形态，不含包装质量 |
| How long or cycle | 一个报告期的生产输出，归一化为 1,000 kg |
| reference_flow_link | `out_unwrought_nickel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 未锻轧镍 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 镍纯度或合金牌号；未锻轧形态；精炼路线；进料中间产品及其镍品位；场址和地理范围；报告期；再生含量处理；共产品分配方法；包装纳入情况；水分和称量基准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有数量均归一化到 1,000 kg 干基净未锻轧镍输出；扣除托盘、容器及其他包装质量，并披露水分校正。 |
| `material_mass_basis` | 含镍进料和按质量计量的试剂 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录收到状态质量和化验值或浓度；只有通过基于采集字段的书面计算，才能使用干质量或活性物质量。 |
| `gas_volume_basis` | 氧气、氢气和天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积、参比温度、参比压力、干湿基和组成；未经换算不得比较不同参比条件下的体积。 |
| `electricity_energy_basis` | 交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的 kWh 原始记录，并按 1 kWh = 3.6 MJ 换算；声明电压等级、电网或厂内来源以及地理范围。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在精炼厂门接收的含镍中间产品，识别为高冰镍或一氧化镍等一个具体流，并记录供应商、产地、质量、镍化验值、水分和交付状态 |
| starting_condition_role | 精炼厂前景的上游切入点；外购中间产品负荷保留在相连的上游数据集中 |
| product_classification_scope | 仅限未锻轧镍金属；镍中间产品、镍铁、化学品、粉末和片状粉末以及半制成镍产品不属于参考产品范围 |
| recursive_input_rule | 作为循环料或调配料返回的任何外购未锻轧镍均作为独立输入并连接单独上游数据集；不得用同一前景过程递归重建 |
| upstream_dataset_requirement | 跨越前景边界的每项含镍进料、外购试剂、燃料、电力供应和水供应，均须连接具备地理和技术限定的上游数据集，或明确记录数据缺口 |
| disclosure | 声明精炼路线、纳入的单元操作、进料身份和品位、内部循环处理、直接排放监测边界、共产品和废物、包装处理以及所有排除的场内操作 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_refinery_gate` | 前景精炼厂边界 | 当净化、金属回收、路线特定的成形或压块、尾气处理、直接水处理、内部循环以及可销售产品称量由报告精炼厂运行时，应纳入这些环节；除非物理一体化并单独披露，否则排除上游采矿和中间产品生产。 | `eu-jrc-nfm-bref-2017` |
| `sb_route_disclosure` | 路线相关操作 | 仅在已声明技术使用该交换时应用相应条件性清单行；未报告路线份额和数据覆盖情况时，不得将电积和氢还原路线平均。羰基法精炼不属于现行路线清单。 | `eu-jrc-nfm-bref-2017` |
| `sb_direct_releases` | 直接排放和废物 | 对纳入精炼操作产生的每种实测或许可直接物质排放以及每项跨越场址边界的具体废物流，分别新增一个原子行；不得以笼统的排放或残渣行代替。 | `eu-jrc-nfm-bref-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pr_nickel_refining` | 镍中间产品净化、金属回收及未锻轧产品精整 | `required` | 始终纳入；注明的单项流卡按路线有条件适用 | 前景精炼生产 | 1,000 kg 干基净未锻轧镍输出 |

### 过程：镍中间产品净化、金属回收及未锻轧产品精整（`pr_nickel_refining`）

#### 输入

##### 产品流

###### 高冰镍进料（`in_nickel_matte`）

当高冰镍跨越精炼厂边界进入浸出和净化环节时记录。供应商、产地、镍化验值、水分及其他计价金属化验值应与前景记录一并保留。

- 选定流：高冰镍 `858f8544-ed53-473b-8bfa-734455a25f3c`
- 流属性/单位：Mass / kg
- 数量规则：报告期内消耗的高冰镍收到状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 一氧化镍进料（`in_nickel_monoxide`）

仅当一氧化镍为已声明还原路线的精炼进料时记录。纯度、颗粒或压块状态、水分、产地和供应商数据集应与数量分开保留。

- 选定流：一氧化镍 `3e78d4a3-6ff2-4726-b43c-d761ff8624b0`
- 流属性/单位：Mass / kg
- 数量规则：消耗的一氧化镍收到状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用路线每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`in_process_water`）

记录为浸出、洗涤、洗气、冷却补水或溶液配制而跨越前景边界的工艺用水。不得扣除内部循环水；内部循环应在过程说明中另行报告。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或由平衡计算的工艺用水输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_input`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工业氧气（`in_industrial_oxygen`）

仅当工业氧气用于浸出、氧化或其他纳入的精炼操作时记录。纯度和气体体积参比条件应与计量记录一并保留。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：消耗的工业氧气标准化计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用路线每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氢氧化钠（`in_sodium_hydroxide`）

仅当外购氢氧化钠用于中和或杂质沉淀时记录。分别记录交付溶液质量和浓度，并在不替代采集记录的前提下计算纯 NaOH 当量质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：交付产品实测质量，并记录溶液浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用净化路线每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 交流电（`in_alternating_current`）

在设施电表边界记录精炼用电。披露电压等级、电网或厂内发电来源、地理范围，以及是否纳入辅助和治理负荷。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量电耗由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_input`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氢气（`in_hydrogen`）

仅当分子氢用于还原净化镍溶液或氧化镍时记录。记录纯度、生产或供应路线以及体积参比条件。

- 选定流：氢气
- 流属性/单位：Volume / m3
- 数量规则：消耗氢气的标准化计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：氢还原路线每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`eu-jrc-nfm-bref-2017`

###### 气态天然气（`in_natural_gas`）

仅当气态天然气作为精炼燃料用于纳入的操作时记录。披露组成、供应地理范围、计量参比条件和用气操作。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：消耗的气态天然气标准化计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用路线每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

不得设置笼统废物流。对跨越选定场址边界的每种实测滤饼、含石膏残渣、粉尘、污泥、废电解液或其他具体废物，应新增独立流卡，并声明路线适用性和处理去向。

##### 基本流

不笼统规定基本流输入。当直接取用的每种资源跨越选定场址边界时，应按具体物质和环境介质新增独立行。

#### 输出

##### 产品流

###### 可销售未锻轧镍（`out_unwrought_nickel`）

记录离开精炼厂的合格未锻轧镍干基净质量。在汇总为参考产品前，保持每种形态、纯度或合金牌号以及不合格产出可单独追溯。

- 选定流：未锻轧镍
- 流属性/单位：Mass / kg
- 数量规则：合格可销售产品干基净质量实测值；归一化参考数量为 1,000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`src_unsd_cpc_3_0_2025`；`eu-jrc-nfm-bref-2017`

##### 废物流

不定义笼统废物输出。具体的路线相关废物必须依据系统边界规则 `sb_direct_releases` 作为原子行添加。

##### 基本流

###### 排放到空气的化石源二氧化碳（`out_carbon_dioxide_fossil`）

记录纳入的场内燃烧直接释放的化石源二氧化碳。排除上游电力排放，且不得与实测烟气总量中已包含的碳重复计算。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：纳入直接源的实测烟气排放量或燃料碳平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基净未锻轧镍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_co2`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 联合运行的精炼单元 | 在应用分配前，应先划分过程并使用直接计量、化验和质量平衡；路线特定的处理及治理负荷归于引起这些负荷的路线。 | `eu-jrc-nfm-bref-2017` |
| `al_recovered_metals` | 铜、钴、贵金属或其他回收共产品 | 无法通过划分分离回收共产品时，对投入、直接排放和废物一致采用一种书面分配方法；报告分配前数量，并对替代物理关系进行敏感性分析。 | `eu-jrc-nfm-bref-2017` |
| `al_internal_recycling` | 内部电解液、氯气、酸、水、粉尘和含镍循环料 | 内部闭环回用不产生上游抵扣；仅记录边界净投入和输出，同时保留过程控制所需的内部总循环量。 | `eu-jrc-nfm-bref-2017` |
| `al_external_recycling` | 外部供应的再生镍和外售可回收残渣 | 将外部再生进料和外售可回收材料记录为独立流；披露选定的再生分配或替代约定，不得在同一数据集中混用约定。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `pr_nickel_refining` | 含镍进料和质量试剂 | 地磅单、批记录、储罐收料、发票、化验 | 流身份；供应商；批次；毛重和皮重；水分；浓度或化验值；日期；路线 | 将收料和过程领用记录与库存变动核对 | kg 及质量分数 | 每次收料或每批；按月汇总 | 至少一个有代表性的连续 12 个月 | 所有纳入的精炼单元 | 期初库存 + 收料 - 期末库存 - 书面转移量，再按合格输出归一化 | 经校准的秤；化验证书；库存核对；异常日志 |
| `cp_water_input` | `pr_nickel_refining` | 工艺用水 | 水表和水平衡 | 仪表编号；起止读数；水源；质量换算的密度基准；循环水量；日期 | 读取边界供水表并与主要分表核对 | kg | 至少每月 | 与产品输出相同期间 | 所有纳入的精炼单元 | 外部补充水求和，不扣除内部循环，再归一化 | 仪表校准；水平衡闭合；缺失数据日志 |
| `cp_process_gases` | `pr_nickel_refining` | 路线特定工艺气体 | 交接计量表或过程仪表 | 气体身份；纯度或组成；仪表读数；温度；压力；干湿基；路线；日期 | 将体积标准化至已声明的参比条件 | m3 | 连续或每次交付；按月汇总 | 与适用路线输出相同期间 | 各纳入路线的供气仪表 | 标准化补充体积求和并按路线输出归一化 | 仪表校准；气体证书；换算工作表 |
| `cp_electricity_input` | `pr_nickel_refining` | 交流电 | 结算表和分表记录 | 仪表编号；kWh；电压；供应商或发电机；纳入单元；日期 | 将设施总表与路线及治理分表核对 | kWh 和 MJ | 连续计量；按月汇总 | 与产品输出相同期间 | 所有纳入的生产和直接处理单元 | kWh 求和，乘以 3.6 MJ/kWh，再归一化 | 仪表校准；发票核对；分表覆盖率 |
| `cp_product_output` | `pr_nickel_refining` | 可销售未锻轧镍 | 产品秤和质量放行记录 | 产品形态；纯度或合金牌号；毛重和皮重；水分；处置；日期 | 仅汇总合格放行产品，不合格物料单独保留 | kg | 每批；按月汇总 | 与投入相同期间 | 精炼厂门 | 按产品变体汇总干基净合格质量后再归一化 | 经校准的产品秤；实验室放行证书；批次核对 |
| `cp_direct_co2` | `pr_nickel_refining` | 直接化石源二氧化碳 | 烟气监测或燃料碳平衡 | 排放源编号；实测 CO2 或燃料量；含碳量；氧化率；生物源比例；运行期 | 优先采用实测烟气总量；否则按场址燃料记录计算且不含上游排放 | kg CO2 | 连续或每个燃料批次；按月汇总 | 与产品输出相同期间 | 前景边界内直接源 | 非重叠直接源求和并归一化 | 监测 QA 记录或燃料证书；计算审计；重叠检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 报告期交换量 / 干基净合格未锻轧镍输出 × 1,000 kg | 报告期交换量；`cp_product_output` 干基净输出 | 每 1,000 kg 参考产品的数量 |  |
| `calc_electricity_conversion` | `in_alternating_current` | MJ = 计量 kWh × 3.6 | `cp_electricity_input` 核对后的 kWh | 以 MJ 表示的电力输入 |  |
| `calc_active_reagent` | 溶液试剂 | 纯物质当量 = 交付溶液质量 × 实测质量分数；除非选定流身份为纯物质，否则仍以交付产品质量作为交换量 | 交付质量；证书或实测浓度 | 可审计的活性物质当量 |  |
| `calc_nickel_balance` | 含镍投入和输出 | 使用同期化验值，将进料中的镍与产品、共产品、废物、排放和库存变动中的镍核对；对无法解释的差额开展调查而非分配 | 质量；镍化验值；库存变动 | 镍质量平衡闭合及异常记录 | `eu-jrc-nfm-bref-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有交换 | 每行仅使用一个具体化学或物理流，并在已确认时保留 Tiangong UUID；未解决身份须明确。 | UUID 直读审计；批次和供应商记录 |
| `dq_route` | 过程覆盖 | 识别每条运行的精炼路线并量化其参考输出份额；不得将本数据集用于未表示的路线。 | 过程图；路线生产记录 |
| `dq_temporal` | 所有前景记录 | 使用一个共同的、有代表性的连续 12 个月期间，或说明并核对较短或错位的覆盖期。 | 仪表日期；批次日期；生产日历 |
| `dq_completeness` | 质量、能源、水、气体、废物和直接排放记录 | 将设施总量与纳入单元核对，识别缺失仪表和估算区间，并披露排除操作。 | 平衡检查；仪表覆盖图；缺失数据日志 |
| `dq_assay` | 含镍物料 | 对镍、水分和分配相关伴生金属采用同期代表性化验；披露采样和实验室方法。 | 分析证书；采样方案；实验室 QA |
| `dq_geography_technology` | 上游链接 | 使上游数据集与供应商地理范围、生产技术、产品状态和交付边界匹配，或披露每项不匹配。 | 供应商数据集元数据；代表性审查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_output` | 参考流 | 确认输出等于 1,000 kg 干基净合格未锻轧镍，并已声明纯度或合金牌号和物理形态。 | `src_unsd_cpc_3_0_2025` |
| `val_product_boundary` | 产品身份 | 参考产品为镍锍、氧化镍烧结物、镍铁、镍化学品、镍粉或片状粉末、废碎料或半制成镍产品的数据集应拒绝。 | `src_unsd_cpc_3_0_2025` |
| `val_route_rows` | 条件性清单 | 确认每项路线条件性投入均有前景记录支持，或明确不适用于已声明路线；不得以笼统的公用工程、气体、化学品、废物或排放名称替代。 | `eu-jrc-nfm-bref-2017` |
| `val_units` | 计量 | 归一化前核验干基/净质量处理、气体参比条件和 kWh 至 MJ 换算。 |  |
| `val_balance` | 镍质量平衡 | 要求进料、产品、共产品、废物、排放和库存变动之间具有可审计的镍平衡；无法解释的差额须标记审查。 | `eu-jrc-nfm-bref-2017` |
| `val_allocation` | 共产品和再生 | 确认已优先尝试过程划分，并披露且一致应用任何分配或再生约定。 | `eu-jrc-nfm-bref-2017` |
| `val_uuid_gaps` | 未解决身份 | 将未解决的参考产品和氢气 UUID 作为审查发现；不得替换为近似匹配或代理。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 面向一个已声明未锻轧镍产品和路线组合的前景精炼生产数据集 |
| downstream_use | `secondary_dataset`；经审查并解决阻碍发布的身份和证据缺口后可作为 `background_dataset` |
| allowed_use | 需要精炼厂门未锻轧镍，且路线、产品、地理范围和期间相匹配的 LCA 模型 |
| excluded_use | 镍采矿或精矿生产；镍冶炼中间产品；镍铁；镍化学品；粉末和片状粉末；半制成品；未表示的精炼路线；无代表性证据的全球平均代理声明 |
| required_metadata | PCR id；产品形态；镍纯度或合金牌号；精炼路线及份额；进料身份和化验；场址和地理范围；报告期；能源和水供应；共产品和再生方法；包装处理；未解决 UUID |
| required_quality_disclosure | 仪表和化验覆盖；质量平衡闭合；缺失数据和估算；时间、地理和技术代表性；直接排放监测；分配敏感性；上游数据集不匹配 |
| update_trigger | 路线、进料、产品牌号、能源来源、治理、分配、场址边界或代表性发生实质变化；未解决 UUID 得到确认；或未解决范围证据被替换 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_cpc_3_0_2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构和解释性说明》，2025 年 6 月 30 日更新。结构表：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；解释性说明：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 正式产品身份；与镍冶炼中间产品以及镍粉和片状粉末的区分 |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，EUR 28648 EN，JRC107041，DOI 10.2760/8224。https://publications.jrc.ec.europa.eu/repository/handle/JRC107041 | 精炼镍产品形态；精炼路线；过程分解；路线特定投入；废物和直接排放完整性规则 |
| `cn-sat-export-refund-2003` | `official_guidance` | 财政部、国家税务总局，《关于调整出口货物退税率的通知》，附件4，海关商品码7502“未锻轧镍”，2003年10月13日。https://www.chinatax.gov.cn/n810341/n810765/n812198/n813051/c1205357/content.html | 海关商品码7502的专业中文产品术语 |
