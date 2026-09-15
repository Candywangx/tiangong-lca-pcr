---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-steel-other-than-cast-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非铸钢制管子或管道附件

## 1. 范围与适用性

本 PCR 适用于用于连接、分支、变径、转向、封闭或终止管子与管道的成品锻制或其他非铸造钢制管件。覆盖产品包括对焊弯头、弯管、三通、异径管、管帽和封头、螺纹或承插焊管件，以及符合本产品类别边界的钢制法兰。只要管件不是以铸钢件制造，碳钢、低合金钢、合金钢和不锈钢牌号均可纳入。

铸铁管件、铸钢管件、未加工成管件而直接销售的管子或管道、阀门、安装服务、使用、维护和报废阶段均不在范围内。前景边界起于外购钢管、钢坯及其他分别识别的生产投入运抵管件工厂，止于未包装合格管件到达工厂大门。包装仅可作为另行声明的下游包装过程加入，不属于本参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-steel-other-than-cast-steel |
| classification_refs | CPC 3.0：41293，精确映射语境 |
| covered_products | 非铸钢制弯头、弯管、三通、异径管、管帽、封头、螺纹管件、承插焊管件、对焊管件和管道用法兰 |
| excluded_products | 铸铁或铸钢管件；未加工成管件的管子和管道；阀门；安装服务；未另行声明的包装 |
| representative_product | 符合所声明规范的成品钢制对焊弯头、三通、异径管、管帽、封头或同类管件 |
| production_route | 备料和切割后，根据产品路线进行钢管成形、热成形、锻造、焊接、机械加工、热处理、清洗、酸洗、镀锌和精整 |
| market_state | 经检验的未包装成品管件，位于工厂大门；声明钢种、尺寸、连接型式、热处理状态和涂镀状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可连接、分支、变径、转向、封闭或终止所声明管路的非铸造钢制成品管件 |
| How much | 工厂大门处 1 kg 合格成品管件 |
| How well | 满足所声明的管件几何形状、连接型式、钢种、尺寸、公差、热处理状态、表面状态及适用质量规范 |
| How long or cycle | 一个工厂大门生产报告期；不建模使用寿命和使用阶段 |
| reference_flow_link | 1 kg 合格成品管件输出等于 1 kg 参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铸钢以外的钢管或管件 `927f577f-735f-45ce-915c-5cac28802501` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 管件型式和连接型式；公称尺寸及壁厚或管表号；钢种和材料规范；钢管成形、锻造或焊接制造路线；热处理状态；表面和涂镀状态；符合性标准；工厂地理位置；报告期；上游钢材数据集身份；废钢和废酸去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和含钢物流质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终检验后称量合格且未包装的成品管件；剔除不合格品、可拆卸运输工装和包装。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录流量计的参考温度和压力，汇总前将全部气体体积换算到统一声明的参考状态。 |
| `electricity_energy_basis` | 外购电力 | Energy | kWh | 以 kWh 保留计量电量；若原始记录使用 MJ，按 1 kWh = 3.6 MJ 换算，并保留原始记录和换算过程。 |
| `solution_mass_basis` | 氢氧化钠和盐酸溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和浓度，不得混用溶液质量和干基有效物质质量。所选盐酸流表示交付浓度为 30% 的溶液。 |
| `mass_normalization` | 所有质量型清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 参考产品 | 用同一工厂、路线和报告期的合格成品管件质量对报告期合计值进行归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢管或钢坯及分别识别的辅助投入已运抵管件工厂 |
| starting_condition_role | 前景转换起点；外购投入的生产仍由所链接的上游数据集表示 |
| product_classification_scope | 非铸钢制管子或管道成品附件；铸铁和铸钢管件不在范围内 |
| recursive_input_rule | 若外购投入本身属于本 PCR 管件类别，则将其作为独立产品投入并链接上游数据集，不在同一前景过程中递归展开其管件制造 |
| upstream_dataset_requirement | 每项外购钢材形态、电力、燃料、气体、水、化学品和锌投入均应链接在地理和技术上具有代表性的上游数据集，并披露替代项和缺失数据集 |
| disclosure | 声明钢材形态和牌号、管件型式、制造路线、热处理、连接工序、酸洗和镀锌适用性、气体参考状态、工厂地理位置、报告期及废物去向 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_conversion_operations` | 厂内管件制造 | 当工序实际发生时，纳入厂内切割、加热和金属处理、钢管成形或锻造、焊接、机械加工、冷却和精整、热处理、清洗、检验和测试。 | `eu-jrc-sf-bref-2024` |
| `boundary_surface_treatment` | 厂内酸洗或镀锌 | 仅在所声明产品路线实际实施时纳入厂内脱脂、酸洗、助镀、热浸镀锌、漂洗和精整；否则将每项相关原子流标为不适用。 | `eu-jrc-fmp-bref-2022` |
| `boundary_upstream_inputs` | 外购投入 | 外购钢材和辅助投入的生产位于前景转换边界之外，但每项投入均须连接上游数据集。 | `eu-jrc-fmp-bref-2022` |
| `boundary_category_exclusions` | 产品身份 | 参考产品排除铸铁、铸钢管件和未加工成管件的管子或管道。 | `unsd-cpc-3-0-structure-2025` |
| `boundary_downstream` | 下游生命周期 | 除非研究明确增加独立下游过程，否则排除分销包装、安装、使用、维护和报废阶段。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `steel_fitting_manufacture` | 非铸钢制管子或管道附件综合制造 | required | 每种覆盖产品均必需；各投入和产出卡分别声明路线条件 | 将外购钢材形态转换为合格成品管件的前景过程 | 工厂大门处 1 kg 合格成品管件 |

### 过程：非铸钢制管子或管道附件综合制造（`steel_fitting_manufacture`）

#### 输入

##### 产品流

###### 焊接圆形钢管原料（`input_welded_steel_pipe`）

仅当管件由外购焊接圆形钢管成形或制造时记录本投入。钢种、直径、壁厚、涂镀状态和供应商数据集应与所声明管件相匹配。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：Mass / kg
- 数量规则：计量进入管件制造的焊接圆形钢管质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_feedstock`
- 来源：

###### 圆形无缝钢管原料（`input_seamless_steel_tube`）

仅当管件由外购圆形无缝钢管成形时记录本具体流。其精确 Tiangong UUID 尚未解决，不得用油气管线管、套管、非圆形管或焊接钢管替代。

- 选定流：圆形截面无缝钢管原料
- 流属性/单位：Mass / kg
- 数量规则：计量进入管件制造的圆形无缝钢管质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_feedstock`
- 来源：

###### 非合金钢方坯原料（`input_nonalloy_steel_billet`）

仅当锻制或热成形非合金钢管件路线以外购钢坯为起点时记录本投入。

- 选定流：钢坯 `7de70586-42d8-40bb-a687-e0e0c05722e4`
- 流属性/单位：Mass / kg
- 数量规则：计量进入锻造或热成形路线的非合金钢方坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_feedstock`
- 来源：

###### 合金钢方坯原料（`input_alloy_steel_billet`）

仅当锻制或热成形合金钢管件路线以外购方坯为起点时记录本具体流。其精确 Tiangong UUID 尚未解决，合金钢锭不得作为方坯的近似替代。

- 选定流：合金钢方坯
- 流属性/单位：Mass / kg
- 数量规则：计量进入锻造或热成形路线的合金钢方坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_feedstock`
- 来源：

###### 外购中压电力（`input_electricity`）

记录切割、成形、焊接、机械加工、热处理、泵送、通风、表面处理和精整所消耗的计量电力。必须声明供电电压、电网地理位置、供应组合和交付边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量本过程消耗的外购中压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：

###### 气态天然气（`input_natural_gas`）

仅当厂内燃烧天然气用于加热、热成形、热处理或干燥时记录本流。声明流量计参考状态，并从直接排放行中排除上游天然气供应链排放。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量输送至管件制造过程的气态天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：

###### 工业氧气（`input_industrial_oxygen`）

仅当氧燃料切割、加热或其他声明工序消耗工业氧气时记录本流。声明纯度、压力、体积参考状态以及外购或现场制备方式。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：计量或按供应记录确定本过程消耗的工业氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：

###### 工艺用水（`input_process_water`）

记录进入冷却、清洗、漂洗、酸洗槽补水或镀锌相关操作的工艺用水。厂内完全循环的冷却水不得重复计量，仅记录跨越边界的净补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越前景边界的工艺用水净投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：

###### 氢氧化钠溶液（`input_sodium_hydroxide`）

仅当碱性脱脂或清洗使用氢氧化钠溶液时记录本流。分别报告交付溶液质量和浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：计量厂内清洗所消耗氢氧化钠溶液的交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_chemicals`
- 来源：

###### 30% 盐酸溶液（`input_hydrochloric_acid_30pct`）

仅当厂内酸洗使用外购 30% 盐酸溶液时记录本流。其他交付浓度需要独立的浓度特定流身份或经审查的溶液质量换算。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass / kg
- 数量规则：计量酸洗所消耗 30% 盐酸溶液的交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_chemicals`
- 来源：

###### 特高纯锌金属（`input_zinc_metal`）

仅当厂内热浸镀锌槽加入特高纯锌金属时记录本流。记录供应金属总质量，不得使用矿石或精矿流的锌含量质量。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass / kg
- 数量规则：计量加入镀锌槽并归属于产品的特高纯锌金属质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_chemicals`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格钢制成品管件（`output_reference_product`）

仅记录通过所声明尺寸、材料、热处理、表面和质量检验的成品管件。不合格管件不得计入本输出。

- 选定流：铸钢以外的钢管或管件 `927f577f-735f-45ce-915c-5cac28802501`
- 流属性/单位：Mass / kg
- 数量规则：计量工厂大门处合格且未包装的成品管件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`bsi-bs-en-10253-2-2021-a1-2025`

##### 废物流

###### 工业后钢废料（`output_postindustrial_steel_scrap`）

记录工厂分别收集的钢质边角料、机加工切屑、锻造飞边和不合格钢件。基础记录应区分合金牌号和受污染废钢，并声明接收处理路线。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景过程的工业后钢废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

###### 钢管件酸洗废盐酸液（`output_spent_pickling_acid`）

仅当盐酸酸洗槽退役并跨越工厂边界时记录本具体废物。记录其质量、酸浓度、溶解金属含量和处理去向；精确 Tiangong 废物流 UUID 尚未解决。

- 选定流：钢管件酸洗废盐酸液
- 流属性/单位：Mass / kg
- 数量规则：计量外运的钢管件酸洗废盐酸液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 在酸洗槽服役期内生产的合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

###### 直接化石二氧化碳（`output_fossil_carbon_dioxide`）

仅记录分配给管件制造的厂内燃烧直接化石二氧化碳排放。本基本流不得包含上游电力、天然气供应或外购材料排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：计量或经独立核验并分配给本过程的场址直接化石二氧化碳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 分别计量的路线、生产线或批次 | 应先细分管件路线、生产线和批次，并在分配前直接归属其计量钢材、能源、化学品、水、废物和排放记录。 |  |
| `allocation_shared_operations` | 生产多种管件产品的共用工序 | 若无法细分，使用能反映消耗的有记录物理驱动量，例如机时、炉次装载量、计量能耗或加工质量；仅在没有更具代表性的计量驱动量时使用质量分配。 |  |
| `allocation_scrap` | 工业后钢废料 | 将离开过程的废钢作为前景边界处的废物流，不在本过程中给予避免生产信用；下游回收模型可另行表示后续处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_feedstock` | `steel_fitting_manufacture` | 每项所声明钢材投入卡 | 收货称量、采购和生产领料记录 | 材料身份；炉批号；钢种；产品形态；尺寸；收货质量；领用质量；供应商数据集 | 将校准衡器单据和材料领用记录与生产批次核对 | kg | 每次收货和每个生产批次 | 完整报告期 | 生产所声明管件的全部生产线 | 仅汇总适用的钢材形态行，并按合格输出质量归一化 | 衡器校准；材质证明；采购文件；批次核对 |
| `cp_energy_metering` | `steel_fitting_manufacture` | 外购电力和天然气 | 公用工程仪表和账单 | 仪表编号；期初与期末读数；单位；气体参考状态；分配驱动量；停机时间 | 读取专用仪表，或用有记录物理驱动量分配已核对的全厂仪表值 | kWh；m3 | 连续或至少每月 | 完整报告期 | 全部纳入设备和共用公用工程 | 扣除经核实的非生产用量，并按合格输出质量归一化 | 仪表校准；账单；核对记录；分配工作表 |
| `cp_process_gases` | `steel_fitting_manufacture` | 工业氧气 | 流量计、钢瓶或储罐交付记录 | 气体身份；纯度；压力；参考温度；参考压力；交付量；期末库存 | 核对计量值或交付量及库存变化以确定消耗气体 | m3 | 每次交付及每个报告期 | 完整报告期 | 所声明路线的氧燃料工序 | 消耗体积等于交付量加期初库存减期末库存，并换算至声明状态 | 供应商证书；仪表校准；库存核对 |
| `cp_process_water` | `steel_fitting_manufacture` | 工艺用水 | 水表和补水记录 | 仪表读数；水源；处理方式；循环量；补水体积或质量；排放关联 | 计量跨越过程边界的净补水 | kg | 连续或至少每月 | 完整报告期 | 范围内的冷却、清洗、漂洗、酸洗和镀锌系统 | 排除内部循环，并按合格输出质量归一化净投入 | 仪表校准；水平衡；账单或取水记录 |
| `cp_surface_chemicals` | `steel_fitting_manufacture` | 氢氧化钠、30% 盐酸和特高纯锌 | 采购、批次加料、槽液分析和库存记录 | 化学品身份；浓度或等级；交付质量；加料质量；期初和期末库存；槽号；适用批次 | 分别核对每种化学品的交付、加料和库存变化 | kg | 每次加料及每个报告期 | 与报告期重叠的完整槽液服役期 | 用于所声明产品的全部清洗、酸洗和镀锌槽 | 按通过槽液的产品计量产量分别归属每种化学品 | 供应商证书；浓度分析；校准衡器；库存核对 |
| `cp_product_output` | `steel_fitting_manufacture` | 合格参考产品 | 最终称量、检验和放行记录 | 产品编号；管件型式；连接；尺寸；钢种；热处理；涂镀；质量；检验结果；放行日期 | 仅称量并放行合格且未包装的管件 | kg | 每个批次 | 完整报告期 | 所声明管件的全部生产线 | 按同质的声明产品和路线汇总合格质量 | 衡器校准；检验报告；材质证明；放行记录 |
| `cp_waste_dispatch` | `steel_fitting_manufacture` | 工业后钢废料和酸洗废液 | 废物称重单、转移联单和换槽记录 | 废物身份；合金或污染状态；质量；槽号；酸浓度；溶解金属；日期；去向；处理方式 | 分别核对每种废物的内部收集和厂外转移文件 | kg | 每次转移和换槽 | 完整报告期及完整槽液服役期 | 全部纳入工序 | 分别汇总每种废物，并按通过槽液的产品产量归属共用槽液废物 | 校准衡器；废物联单；槽液分析；持证接收方记录 |
| `cp_direct_emissions` | `steel_fitting_manufacture` | 直接化石二氧化碳 | 连续排放监测、烟气测试支持记录或经核验设施排放记录 | 排放源编号；燃料关联；计量或核验质量；运行期；分配驱动量 | 优先采用直接计量，并将覆盖燃烧源与天然气记录核对 | kg | 连续或按报告期记录 | 完整报告期 | 分配给管件制造的厂内化石燃烧源 | 扣除排除源，并按合格输出质量归一化所分配排放 | 仪器质控记录；排放报告；燃料与排放核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 归一化数量等于报告期该行合计值除以报告期合格未包装管件质量 | 该行合计值；合格产品质量 | 每 1 kg 参考产品的数量 |  |
| `calc_gas_condition_conversion` | 天然气和工业氧气 | 归一化前，按所记录的仪表或供应商修正方法将气体体积换算到统一声明的参考温度和压力 | 报告体积；温度；压力；所用压缩因子方法 | 声明参考状态下的 m3 |  |
| `calc_steel_yield_check` | 含钢投入和产出 | 比较适用钢材投入总质量与合格管件、废钢及其他分别记录的含钢库存变化或残余物质量 | 钢材投入；合格管件；废钢；库存变化；分别记录的残余物 | 披露的钢材质量平衡差值 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 管件型式、连接、尺寸、钢种、制造路线、热处理状态、涂镀状态和符合性规范应完整且内部一致。 | 放行记录；图纸；材质证明；检验报告 |
| `dq_temporal_match` | 全部清单行 | 投入、产出、废物和直接排放记录覆盖同一声明报告期；槽液服役期分配应说明期间差异。 | 报告期核对和槽液服役期工作表 |
| `dq_metering` | 能源、气体、水和质量记录 | 仪表和衡器具有有效校准或有记录的准确度检查；估算替代项应标记并说明理由。 | 校准证书；账单核对；不确定性说明 |
| `dq_route_completeness` | 条件工序 | 每项成形、锻造、焊接、热处理、酸洗和镀锌工序均声明存在或不存在，并填写所有适用原子流行。 | 路线卡；工艺流程图；生产流转卡 |
| `dq_upstream_links` | 外购投入 | 每项适用的外购投入行均链接有代表性的上游数据集，或报告身份、地理、技术和替代缺口。 | 数据集引用和替代日志 |
| `dq_mass_balance` | 含钢物流 | 调查并解释钢材质量平衡差值，不得强制归零或隐瞒库存变化和残余物。 | 签署的核对表；库存变化记录；纠正措施说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 确认参考产品是精确的非铸钢制管件流，而不是铸造管件或未加工成管件的管子或管道。 | `unsd-cpc-3-0-structure-2025` |
| `validate_reference_amount` | 参考流 | 确认归一化分母恰为 1 kg 合格未包装输出，且全部行使用同一产品和报告期。 |  |
| `validate_product_qualifiers` | 产品放行 | 确认所声明管件型式、钢种、尺寸、公差、检验和试验要求及质量要求有产品记录及适用规范支持。 | `bsi-bs-en-10253-2-2021-a1-2025` |
| `validate_route_rows` | 过程清单 | 确认每项路线工序均已声明，并且每个条件原子流仅在该工序发生时填写。 | `eu-jrc-sf-bref-2024`；`eu-jrc-fmp-bref-2022` |
| `validate_solution_basis` | 表面处理化学品 | 确认氢氧化钠和盐酸按交付溶液质量及浓度报告，且所选盐酸流仅用于经核实的 30% 溶液。 |  |
| `validate_waste_destination` | 废钢和酸洗废液 | 确认每种废物具有计量质量、所声明组成或污染状态以及明确接收处理；不得合并废钢和废酸。 |  |
| `validate_direct_co2_boundary` | 直接化石二氧化碳 | 确认本行仅包含厂内化石燃烧排放，排除上游电力、天然气供应和外购材料排放。 |  |
| `validate_allocation` | 共用工序 | 确认已优先尝试过程细分，并披露其余物理分配驱动量、基准和受影响行。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 非铸钢制管子或管道成品附件的工厂大门前景生产数据集 |
| downstream_use | 可针对所声明管件型式和制造路线发布为 secondary_dataset 或 background_dataset |
| allowed_use | 与所声明钢种、管件型式、路线、尺寸、涂镀、地理位置、报告期和工厂大门边界相匹配的产品 LCA 和生命周期模型 |
| excluded_use | 铸铁或铸钢管件；未加工钢管；阀门；安装、使用或报废；路线或材料状态未披露的产品 |
| required_metadata | PCR 标识和版本；产品流 UUID；管件型式；连接型式；公称尺寸和壁厚；钢种和规范；路线；热处理；涂镀；地理位置；报告期；上游数据集；分配；数据质量 |
| required_quality_disclosure | 前景覆盖率；计量与估算份额；仪表和衡器质量；钢材质量平衡差值；条件过程适用性；未解决 UUID 替代；上游数据集代表性；废物去向 |
| update_trigger | 钢种或原料形态、成形或锻造技术、热处理燃料、供电、酸洗化学品、镀锌路线、产品规范、分配驱动量、工厂地理位置发生变化，或前景强度发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41293 精确产品身份及铸钢管件排除边界 |
| `bsi-bs-en-10253-2-2021-a1-2025` | 标准（`standard`） | BSI，BS EN 10253-2:2021+A1:2025，对焊管件——有特定检验要求的非合金钢和铁素体合金钢，https://knowledge.bsigroup.com/products/butt-welding-pipe-fittings-non-alloy-and-ferritic-alloy-steels-with-specific-inspection-requirements-2 | 代表性对焊管件类型，以及钢种、尺寸、公差、检验、试验和适用质量规范的声明要求 |
| `eu-jrc-sf-bref-2024` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《锻造和铸造行业最佳可行技术参考文件》，2024，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry | 锻造路线的加热、金属处理、锻造或锤锻、机械加工、冷却或精整及热处理工序分解 |
| `eu-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry | 下游黑色金属加工边界及脱脂、酸洗、助镀、镀锌和精整的条件批量镀锌顺序 |
