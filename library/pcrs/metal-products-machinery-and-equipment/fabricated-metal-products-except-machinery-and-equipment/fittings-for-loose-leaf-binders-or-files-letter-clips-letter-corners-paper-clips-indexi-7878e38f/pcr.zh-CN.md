---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.fittings-for-loose-leaf-binders-or-files-letter-clips-letter-corners-paper-clips-indexi-7878e38f
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 活页夹或文件夹用配件；贱金属制信夹、信件护角、回形针、索引标签及类似办公用品；贱金属制成条订书钉

## 1. 范围与适用性

本 PCR 适用于以下产品的工厂门生产：活页夹或文件夹用配件、信夹、信件护角、回形针、索引标签及以贱金属制品为其定义性主体的类似办公用品，以及成条供应的贱金属订书钉。核算对象应为已声明的产品 SKU 或同质生产系列，边界从外购金属丝或带材及辅助材料开始，涵盖成形、切断、有条件适用的表面处理、有条件适用的订书钉成条组装、检验和包装。

外购金属丝、带材、化学品、能源和包装物的生产以其上游数据集表示。前景边界只包括申报设施控制的作业。使用、维护和报废阶段不在默认边界内。经核验的 CPC 来源确定产品类别身份；历史专利全文确定金属丝成形和订书钉成条两条工艺分支；JRC 黑色金属加工 BREF 为有条件适用的处理、镀层和废水清单提示提供依据，但本 PCR 不把该文件的工业产能阈值施加给数据集。

完全由塑料制成的办公用品、办公家具、文件柜、订书机、不以贱金属配件表示的文件夹主体、非成条供应的散装单枚订书钉以及一般建筑紧固件不在范围内。非钢类贱金属产品只有在将实际金属原料和路线特定交换逐项作为原子流补充后方可使用本 PCR；下列钢丝和钢带行不得作为其他金属的代理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.fittings-for-loose-leaf-binders-or-files-letter-clips-letter-corners-paper-clips-indexi-7878e38f |
| classification_refs | CPC 3.0：42995（精确类别参考） |
| covered_products | 贱金属制活页夹和文件夹配件；信夹；信件护角；回形针；索引标签；类似贱金属办公用品；成条供应的贱金属订书钉 |
| excluded_products | 纯塑料办公用品；办公家具和文件柜；订书机；非成条供应的散装订书钉；建筑紧固件；外购金属原料的上游生产 |
| representative_product | 一个同质的可销售 SKU 或生产系列，以钢丝回形针为代表；适用时单独声明订书钉成条分支 |
| production_route | 外购钢丝或冷轧钢带 -> 成形和切断 -> 有条件适用的表面处理 -> 有条件适用的订书钉成条组装 -> 检验和包装 |
| market_state | 在制造场址门口交付的干燥、完工、检验合格并已包装制品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应能够实现所声明纸张夹持、归档或索引功能的贱金属办公用品 |
| How much | 1 kg 可销售制品；计入申报销售单元的包装只作为单独清单投入列示 |
| How well | 符合已声明的 SKU、尺寸或线规、金属牌号、镀层、每包制品数量和适用采购规范 |
| How long or cycle | 一次工厂门供应事件；相关时披露产品使用寿命，但不改变质量参考基准 |
| reference_flow_link | 下述 1 kg 可销售 CPC 42995 产品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 贱金属制的用于活页夹、卷宗夹、信件夹、信件角曲别针、索引标签及类似文具的配件，贱金属制的条形订书钉 `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类和 SKU；制品尺寸或线规；贱金属牌号；钢丝或钢带起始形态；镀层或表面状态；适用时的订书钉成条胶黏剂和纸条状态；每个销售单元的制品数量及计数转质量因子；所含包装；设施地域；生产期；工厂门边界 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少必需限定信息将导致参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 可销售参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准衡器确定制品净质量；包装应作为单独投入列示，并说明商业毛重记录是否包含任何包装质量。 |
| `count_to_mass_conversion` | 只有制品数或包装数的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一 SKU 和批次的同期实测平均单件质量把数量转换为质量，并保留样本数量、称量结果和不确定度。 |
| `material_mass_basis` | 金属原料、化学品、胶黏剂、纸条、纸盒、废钢、污泥和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按供应状态记录质量。不得把溶液质量不加说明地换算为有效成分质量，也不得以金属含量质量代替产品总质量。 |
| `zinc_content_basis` | 特高品位锌金属 | Zinc content `7c367337-54f2-4fe9-8ee3-3f42681b0792` | kg | 针对所选 SHG 锌流报告锌含量 kg；当供应产品总质量与锌含量不同时，另行保留供应商牌号和总质量。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh 原始记录，并按 1 kWh = 3.6 MJ 转换；声明电压、电网地域和电表边界。 |
| `gas_volume_basis` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告供应商计量体积，并声明参考温度、压力及电表所示为标准体积还是工况体积。 |
| `direct_emission_mass_basis` | 直接化石源二氧化碳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测排放，或根据前景燃料记录和经验证的场址因子计算；不得计入上游电力排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至申报设施的外购钢丝、冷轧钢带或其他已明确识别的贱金属原料，以及分别识别的辅助材料 |
| starting_condition_role | 前景成形过程的上游产品投入；上游生产负荷保留在供应商或背景数据集中 |
| product_classification_scope | CPC 3.0 代码 42995 范围内的办公用品和成条订书钉；典型 PCR 身份不从属于 CPC |
| recursive_input_rule | 若外购 CPC 42995 制品被组装进另一种本范围产品，应将其作为具有自身上游数据集的外购产品投入记录一次，不得在接收过程中递归重建其制造清单 |
| upstream_dataset_requirement | 每项外购产品或能源投入都需要地域和技术适配的上游数据集，或明确记录数据缺口 |
| disclosure | 声明设施、期间、产品 SKU 或系列、起始原料形态和牌号、成形技术、表面处理路线、订书钉成条路线、包装配置、排除作业和任何外包过程 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | 纳入制造场址控制的成形、切断、有条件适用的表面处理、有条件适用的订书钉成条组装、检验和包装，直至场址门口。 | `un-cpc-3-0-2025` |
| `boundary_upstream_inputs` | purchased_inputs | 用上游数据集表示外购金属原料、化学品、能源和包装物的生产；不得在前景清单内重复这些上游过程。 |  |
| `boundary_conditional_finishing` | surface_finishing | 只有在清洗、酸洗、金属镀覆、电镀、干燥及相关废水处理受设施控制时才将其纳入；否则对外购预处理原料建模并披露外包路线。 | `ec-jrc-ferrous-metals-processing-bref-2022` |
| `boundary_staple_strip_branch` | staple_strip_assembly | 只有对成条供应的订书钉才纳入胶黏剂、可能使用的薄纸载条和组装电力；不得把该分支用于回形针或文件夹配件。 | `us-1665051-staple-strip-1928` |
| `boundary_downstream_exclusion` | downstream_life_cycle | 默认数据集排除工厂门之后的分销、使用、维护和报废；仅在单独声明的下游研究中补充。 |  |
| `boundary_direct_emissions` | controlled_emissions_and_wastes | 每种跨越设施边界的直接基本流排放和每项废物均应单独记录；不得把上游电力排放列入前景。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_forming` | 金属原料成形和切断 | required | 以外购钢丝或钢带制造时始终纳入；若只对成品重新包装，应说明偏离情况和外购制品投入。 | 前景生产 | 每 1 kg 可销售参考产品 |
| `surface_finishing` | 清洗和表面处理 | conditional | 清洗、酸洗、金属镀覆、电镀或热干燥受申报设施控制时纳入。 | 前景调质 | 每 1 kg 可销售参考产品 |
| `staple_strip_assembly` | 订书钉成条组装 | conditional | 仅对成条供应的订书钉纳入。 | 前景组装 | 每 1 kg 可销售参考产品 |
| `inspection_packaging` | 检验和包装 | required | 纳入工厂门参考产品放行前实施的检验和所有包装。 | 前景完工 | 每 1 kg 可销售参考产品 |

### 过程：金属原料成形和切断（`metal_forming`）

#### 输入

##### 产品流

###### 非合金钢丝原料（`steel_wire_input`）

仅对钢丝成形路线纳入外购钢丝，并计量归属于申报产品的领料。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：符合条件生产批次实测领用钢丝质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_mass_balance`
- 来源：`us-1355587-paper-clip-machine-1920`

###### 冷轧碳钢带原料（`cold_rolled_steel_strip_input`）

仅对冲压或弯曲钢带路线纳入这一具体钢带投入；其 Tiangong UUID 尚未解决。

- 选定流：冷轧碳钢带
- 流属性/单位：Mass / kg
- 数量规则：符合条件生产批次实测领用钢带质量；采用钢丝路线而不存在此流时，记录为不适用并说明路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_mass_balance`
- 来源：

###### 成形润滑油（`forming_lubricating_oil`）

只有在弯曲、冲压或切断中消耗润滑油，且在报告期内未完全回用时才纳入。

- 选定流：金属成形润滑油
- 流属性/单位：Mass / kg
- 数量规则：计量补充油量加净库存减少量并分配至合格批次；另行记录回收和处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_mass_balance`
- 来源：

###### 成形电力（`forming_electricity`）

记录跨越成形单元电表边界、用于送料、弯曲、冲压、切断和局部抽风的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：成形过程实测电力；共用设备应采用有依据的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_electricity`
- 来源：

#### 输出

##### 产品流

###### 已成形办公用品中间体（`formed_article_intermediate`）

计量转入下一受控过程的已成形、已切断中间体；该前景中间体没有公共 Tiangong UUID。

- 选定流：已成形贱金属办公用品中间体
- 流属性/单位：Mass / kg
- 数量规则：成形和切断后合格输出的实测质量或批次质量平衡值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_mass_balance`
- 来源：`us-1355587-paper-clip-machine-1920`

###### 分选可回收废钢（`steel_scrap_output`）

把从成形过程实际送出回收的黑色金属边角料和不合格钢件作为产品输出记录；不得混入有色金属或废电池。

- 选定流：钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位：Mass / kg
- 数量规则：称量离开成形过程的分选废钢。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_mass_balance`
- 来源：

### 过程：清洗和表面处理（`surface_finishing`）

#### 输入

##### 产品流

###### 表面处理工艺用水（`finishing_process_water`）

纳入清洗、漂洗、配槽或其他受控表面处理作业所供应的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入合格表面处理批次的电表或槽体平衡用水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_water`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 氢氧化钠清洗剂（`finishing_sodium_hydroxide`）

只有在碱性清洗或处理槽中按供应状态消耗氢氧化钠时才纳入。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：归属于合格批次的供应质量加浴槽补加记录；保留供应浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_balance`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 30% 盐酸溶液（`finishing_hydrochloric_acid_30pct`）

只有当外购酸洗剂或调槽产品为 30% 溶液时才纳入；不得在未另设流身份的情况下替换为其他浓度。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass / kg
- 数量规则：加入或补充至合格表面处理批次的 30% 供应溶液实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_balance`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 特高品位锌金属（`finishing_shg_zinc_metal`）

只有在设施控制金属锌镀覆路线时才纳入 SHG 锌。

- 选定流：特高品位（SHG）锌金属 `4719799f-8e90-4dce-83f6-55d932702228`
- 流属性/单位：Zinc content / kg
- 数量规则：加入锌含量加可归属于合格产品的浴槽净库存减少量，扣除另行记录的回收金属锌。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_balance`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 电镀用镍金属（`finishing_nickel_metal`）

只有在消耗金属镍阳极时才纳入精炼镍金属；其精确 Tiangong UUID 尚未解决，若使用镍盐则必须另设清单行。

- 选定流：精炼镍金属
- 流属性/单位：Mass / kg
- 数量规则：合格电镀批次实测消耗的镍阳极质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_balance`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 表面处理电力（`finishing_electricity`）

纳入表面处理边界内泵、整流器、通风、处理和干燥所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：表面处理实测电力；共用负荷应按运行小时或分表记录进行有依据的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_electricity`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 表面处理供热天然气（`finishing_natural_gas`）

只有在场内燃烧气态天然气用于槽液加热、固化或干燥时才纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考状态计量、归属于合格表面处理批次的天然气体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_natural_gas`
- 来源：

#### 输出

##### 产品流

###### 表面处理后办公用品中间体（`finished_surface_intermediate`）

计量转入订书钉成条组装或包装的合格表面处理制品；该内部状态没有公共 Tiangong UUID。

- 选定流：表面处理后贱金属办公用品中间体
- 流属性/单位：Mass / kg
- 数量规则：表面处理后、成条组装或包装前的合格输出实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_mass_balance`
- 来源：

##### 废物流

###### 金属表面处理废水（`metal_finishing_wastewater`）

记录外送处理前跨越表面处理边界的含水废物；不得以冷凝水作为代理。

- 选定流：含溶解金属的金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：用实测密度换算的排放体积或直接称量质量，并保留组成和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

###### 含金属废水处理污泥（`metal_bearing_sludge`）

将表面处理废水产生的脱水污泥与市政污泥或生物处理回流污泥分开记录。

- 选定流：含金属废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：称量离开设施的湿污泥，并保留干固体分数、金属分析和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste`
- 来源：`ec-jrc-ferrous-metals-processing-bref-2022`

##### 基本流

###### 天然气燃烧直接化石源二氧化碳（`finishing_fossil_co2`）

只纳入受控天然气燃烧直接释放的化石源二氧化碳；排除燃料和电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据前景燃料体积和有文件依据、经验证的场址排放因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_emissions`
- 来源：

### 过程：订书钉成条组装（`staple_strip_assembly`）

#### 输入

##### 产品流

###### 已成形单枚订书钉中间体（`formed_staple_intermediate`）

记录转入成条组装作业的已成形订书钉；该内部产品状态没有公共 Tiangong UUID。

- 选定流：已成形贱金属单枚订书钉
- 流属性/单位：Mass / kg
- 数量规则：发往成条组装的合格已成形订书钉实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_mass_balance`
- 来源：`us-1665051-staple-strip-1928`

###### 水基型订书钉成条胶黏剂（`water_based_adhesive`）

只纳入用于把订书钉结合成可分离钉条的水基型胶黏剂；使用其他胶黏剂系列时必须另设清单行。

- 选定流：水基型胶黏剂 `9857328f-8b47-4ee5-99a6-e6c95b4d8dd0`
- 流属性/单位：Mass / kg
- 数量规则：可归属于合格钉条的胶黏剂补加量，加容器和生产线净库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_mass_balance`
- 来源：`us-1665051-staple-strip-1928`

###### 薄纸组装条（`tissue_paper_strip`）

只有在裁切薄纸载条保留为可分离钉条的一部分时才纳入；其精确 Tiangong UUID 尚未解决。

- 选定流：裁切薄纸订书钉组装条
- 流属性/单位：Mass / kg
- 数量规则：合格钉条实测领用薄纸条质量；采用仅胶黏剂路线时记录为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_mass_balance`
- 来源：`us-1665051-staple-strip-1928`

###### 订书钉成条组装电力（`assembly_electricity`）

记录组装单元内用于排列、涂胶、干燥、切断和传送的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于合格订书钉成条批次的实测电力或有依据的共用负荷电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_electricity`
- 来源：

#### 输出

##### 产品流

###### 成条订书钉（`staple_strip_output`）

把合格的可分离成条贱金属订书钉作为本范围产品输出记录。

- 选定流：贱金属制的用于活页夹、卷宗夹、信件夹、信件角曲别针、索引标签及类似文具的配件，贱金属制的条形订书钉 `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd`
- 流属性/单位：Mass / kg
- 数量规则：最终包装前的合格钉条实测输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_mass_balance`
- 来源：`us-1665051-staple-strip-1928`

### 过程：检验和包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 已检验未包装办公用品（`packable_article_intermediate`）

记录转入最终包装的合格未包装制品；该内部状态没有公共 Tiangong UUID。

- 选定流：已检验未包装贱金属办公用品
- 流属性/单位：Mass / kg
- 数量规则：发往包装的合格未包装制品实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：

###### 纸板销售盒（`paper_box_input`）

按质量记录申报销售包装所用的每个纸盒；其他包装组件必须另设原子流行。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：供应商或抽样单盒净质量乘以合格生产消耗纸盒数，并根据有记录的包装废品调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：

###### 包装电力（`packaging_electricity`）

记录包装单元边界内用于计数、检验、纸盒成形、封盒和装箱的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于合格产品的实测包装电力或有依据的共用负荷电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_electricity`
- 来源：

#### 输出

##### 产品流

###### 可销售参考办公用品（`reference_office_article_output`）

该输出在检验和包装后实现参考流。

- 选定流：贱金属制的用于活页夹、卷宗夹、信件夹、信件角曲别针、索引标签及类似文具的配件，贱金属制的条形订书钉 `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd`
- 流属性/单位：Mass / kg
- 数量规则：可销售制品净质量实测值归一化为恰好 1 kg 参考产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`un-cpc-3-0-2025`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | 通过对申报产品系列的成形、表面处理、组装和包装分别计量或按批记录，优先避免分配。 |  |
| `allocation_internal_intermediates` | internal_intermediates | 内部中间体转移应携带其实测负荷进入后续过程，不得获得单独共产品抵扣或分配。 |  |
| `allocation_recycled_scrap` | recyclable_steel_scrap | 把分选废钢作为单独产品输出报告。不得在前景清单内给予替代原生金属的避免负荷抵扣；任何生命周期模型采用的下游回收方法均须披露。 |  |
| `allocation_multi_product_shared_loads` | shared_energy_and_materials | 无法细分时，按机器时间、实测运行小时、槽液处理量或处理表面积等有文件依据的因果驱动因素分配共用负荷；只有在没有更合适物理驱动因素时才按质量分配。 |  |
| `allocation_economic_last_resort` | valuable_co_products | 只有物理细分或因果分配均不能得到支持时才使用经济分配，并披露价格、币种、期间、地域和敏感性。 |  |
| `allocation_internal_rework` | internally_reworked_rejects | 返回同一生产系统的材料是内部循环而非边界输出；计入其追加能源和材料消耗，并防止质量重复计算。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_mass_balance` | `metal_forming` | 金属原料、润滑油、合格中间体和废钢 | 称量单、ERP 领退料记录和批次流转卡 | lot_id; SKU; stock_grade; opening_inventory; issued_mass; returned_mass; accepted_output_mass; scrap_mass; oil_makeup_mass | 按合格批次核对经校准衡器和库存变动 | kg | 每批；每月核对 | 有代表性的连续 12 个月或已声明生产期 | 生产申报产品的全部成形线 | 汇总合格净投入和输出、核对质量平衡，再除以可销售参考产品输出质量 | 衡器校准；签字称量单；库存核对；未解释质量平衡差 |
| `cp_forming_electricity` | `metal_forming` | 成形电力 | 分表或设备功率日志 | meter_id; opening_reading; closing_reading; eligible_runtime; shared_load_driver | 优先分表；否则按有记录运行时间分配成形单元实测负荷 | kWh | 每批或每班；每月核对 | 与产品输出相同期间 | 仅成形单元和局部抽风 | 净 kWh 转换为 MJ 后除以参考产品输出质量 | 电表校准；覆盖检查；共用负荷分配记录 |
| `cp_finishing_mass_balance` | `surface_finishing` | 化学品、镀层金属和合格表面处理中间体 | 供应单据、浴槽日志、槽体库存和批次流转卡 | lot_id; chemical_identity; concentration; opening_inventory; additions; recoveries; closing_inventory; accepted_output_mass | 针对合格表面处理批次逐项核对每种原子化学品或金属 | kg | 每次补加和每批；每月核对 | 与表面处理后输出相同期间 | 仅受控表面处理线 | 净消耗等于期初加补加减期末、回收和有记录退回，再按参考输出质量归一化 | 供应商证书；浴槽日志；经校准衡器；回收记录 |
| `cp_finishing_water` | `surface_finishing` | 工艺用水 | 水分表和槽体日志 | meter_id; opening_reading; closing_reading; tank_change; density; eligible_lots | 分表直接计量；只有具备有文件依据的密度时才把体积转换为质量 | kg | 每日或每批；每月核对 | 与表面处理后输出相同期间 | 仅表面处理和漂洗边界 | 净投入减回流水后除以参考输出质量 | 电表校准；密度记录；泄漏和循环检查 |
| `cp_finishing_electricity` | `surface_finishing` | 表面处理电力 | 分表、整流器和设备日志 | meter_id; readings; rectifier_kWh; eligible_runtime; shared_load_driver | 汇总表面处理实测负荷并按因果关系分配共用负荷 | kWh | 每班或每批；每月核对 | 与表面处理后输出相同期间 | 表面处理、通风和受控处理设备 | 净 kWh 转换为 MJ 后除以参考输出质量 | 电表校准；运行日志；分配记录 |
| `cp_finishing_natural_gas` | `surface_finishing` | 天然气 | 供应商电表和燃烧器日志 | meter_id; opening_volume; closing_volume; temperature; pressure; standard_condition; eligible_runtime | 读取专用电表，或按实测热负荷或运行时间分配共用燃烧器燃料 | m3 | 每班或每批；每月核对 | 与表面处理后输出相同期间 | 仅受控表面处理供热 | 按参考产品输出质量归一化声明状态体积 | 电表校准；供应商报表；参考状态记录 |
| `cp_finishing_waste` | `surface_finishing` | 分别记录的废水和含金属污泥 | 排放电表、废物转移联单和实验室报告 | stream_id; mass_or_volume; density; dry_solids; metals_analysis; treatment_destination; date | 废水计量；污泥称量；逐流保留组成和去向 | kg | 每次排放或运输；每月核对 | 与表面处理后输出相同期间 | 所有受控表面处理排放 | 各原子废物流分别汇总后除以参考输出质量 | 电表或衡器校准；废物联单；实验室样品交接记录 |
| `cp_finishing_emissions` | `surface_finishing` | 直接化石源二氧化碳 | 烟道测量或燃料计算记录 | fuel_volume; reference_condition; emission_factor; factor_source; measured_co2; oxidation_basis; eligible_output_mass | 优先采用合规烟道测量；否则将所采集燃料活动数据乘以经验证且有文件依据的场址因子 | kg | 每报告期；每月核对 | 与表面处理后输出相同期间 | 仅场内受控天然气燃烧 | 使用实测 CO2，或燃料活动数据乘经验证因子，再除以参考输出质量 | 测量 QA；因子批准；燃料与排放核对 |
| `cp_assembly_mass_balance` | `staple_strip_assembly` | 已成形订书钉、水基型胶黏剂、薄纸条和合格钉条 | 批次流转卡、衡器、胶黏剂容器日志和纸张领料记录 | lot_id; staple_mass; adhesive_opening; adhesive_additions; adhesive_closing; tissue_mass; accepted_strip_mass; rejects | 按订书钉成条批次分别称量每项原子投入和合格输出 | kg | 每批；每月核对 | 与订书钉成条输出相同期间 | 申报订书钉 SKU 的所有组装线 | 各净投入或输出除以可销售参考产品输出质量 | 衡器校准；物料领用记录；生产线清空和废品记录 |
| `cp_assembly_electricity` | `staple_strip_assembly` | 组装电力 | 单元分表或运行日志 | meter_id; readings; eligible_runtime; shared_load_driver | 优先分表；否则按运行时间分配组装单元实测负荷 | kWh | 每批或每班；每月核对 | 与订书钉成条输出相同期间 | 排列、涂胶、干燥和切断单元 | kWh 转换为 MJ 后除以参考输出质量 | 电表校准；运行日志；分配记录 |
| `cp_packaging_mass_balance` | `inspection_packaging` | 未包装制品、纸盒和可销售输出 | 包装 BOM、供应商规范、计数记录和经校准衡器 | SKU; article_count; unpacked_mass; box_count; sampled_box_mass; packing_rejects; market_ready_net_mass | 对同一 SKU 有代表性样品称量并核对包装 BOM 和数量 | kg | 每个包装批次；每月核对 | 与参考产品输出相同期间 | 申报产品的所有工厂门销售包装 | 汇总纸盒质量，并按可销售制品实测净质量归一化所有合格流 | 衡器校准；BOM 版本；抽样记录；计数转质量检查 |
| `cp_packaging_electricity` | `inspection_packaging` | 包装电力 | 单元分表或运行日志 | meter_id; readings; eligible_runtime; shared_load_driver | 优先分表；否则按运行时间分配包装单元实测负荷 | kWh | 每批或每班；每月核对 | 与参考产品输出相同期间 | 检验和包装单元 | kWh 转换为 MJ 后除以参考输出质量 | 电表校准；运行日志；分配记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | 归一化数量 = 合格交换数量 / 可销售制品实测净输出质量 | eligible exchange quantity; market-ready net article output mass | 每 1 kg 参考产品的交换 |  |
| `calc_count_to_mass` | Count-only product or packaging records | 质量_kg = 合格数量 x 同期同 SKU 平均单件质量_kg | eligible count; sampled item masses; sample size | 制品或纸盒质量 kg |  |
| `calc_electricity_conversion` | Electricity rows | energy_MJ = metered_kWh x 3.6 | metered kWh | 电力 MJ |  |
| `calc_forming_mass_balance` | Forming process | 未解释差 = 金属原料净投入 - 合格中间体输出 - 分选废钢输出 - 有记录内部库存变化 | metal stock; accepted output; scrap; inventory change | 成形质量平衡差 |  |
| `calc_finishing_consumption` | Bath chemicals and coating metals | 净消耗 = 期初库存 + 补加 - 期末库存 - 有记录回收 - 有记录退回 | opening inventory; additions; closing inventory; recovery; return | 每种原子材料的净消耗质量 | `ec-jrc-ferrous-metals-processing-bref-2022` |
| `calc_direct_fossil_co2` | Natural-gas combustion | 直接化石源 CO2 = 实测烟道 CO2，或声明状态燃料体积 x 经验证且有文件依据的场址排放因子 | measured CO2; fuel volume; reference condition; site emission factor | 直接化石源 CO2 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | 保留 SKU、产品子类、尺寸或线规、金属牌号、镀层、每销售单元数量、订书钉成条状态和包装配置。 | 批准的规范、图纸、标签和批次流转卡 |
| `dq_temporal_representativeness` | Foreground inventory | 使用有代表性的连续 12 个月或覆盖正常运行模式的已声明生产期；披露停产、启停和排除的异常事件。 | 生产日历、电表覆盖和生产期理由 |
| `dq_meter_quality` | Mass, water, gas and electricity | 使用单位可追溯的经校准仪器，并记录弥补数据缺口所用估算。 | 校准证书、仪表台账和缺口日志 |
| `dq_completeness` | All controlled processes | 核对外购投入、内部转移、合格输出、废钢、废水、污泥和直接排放；解释每项被排除的材料交换。 | 签字质量平衡复核和完整性清单 |
| `dq_route_specificity` | Conditional finishing and staple assembly | 把每项有条件过程和流标为适用或不适用，并保留路线判断证据。 | 工艺流程图、作业指导书和供应商表面状态声明 |
| `dq_upstream_matching` | Purchased inputs | 使上游数据集与实际流身份、产品状态、地域和技术相匹配，并披露代理。 | 供应商记录和上游数据集映射表 |
| `dq_uncertainty_and_ranges` | Important flows | 不得把本 PCR 当作经验消耗范围来源；报告前景变异和不确定度，并标记缺失的范围证据。 | 批次统计、不确定度方法和未解决证据台账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference_product | 确认恰好 1 kg 可销售制品净输出、已采用的 CPC 42995 产品 UUID 和全部必需限定信息。 | `un-cpc-3-0-2025` |
| `validation_atomic_inventory` | process_inventory | 确认每一行仅为一个原子交换；拒绝集合标签、混合材料、合并公用工程和合并废物。 |  |
| `validation_process_map` | process_inventory | 确认每个 required 过程都有详细清单，并且每个 conditional 过程和行都有证据支持的适用性判断。 |  |
| `validation_uuid_semantics` | uuid_bearing_flows | 确认每个 UUID 仍为公共 state 100，且中英文 baseName、流类型、分类、属性和单位均与所选行匹配。 |  |
| `validation_mass_balance` | foreground_mass_balance | 核对金属投入与合格内部和最终产品、废钢、废品和库存变化，并调查未解释差异。 |  |
| `validation_energy_boundary` | electricity_and_natural_gas | 确认电力和天然气已分表计量或按因果关系分配、使用声明单位，且直接前景排放不含上游排放。 |  |
| `validation_finishing_waste` | surface_finishing | 表面处理适用时，要求分别记录每种化学品、金属、废水、污泥和直接排放，并保留处理去向。 | `ec-jrc-ferrous-metals-processing-bref-2022` |
| `validation_staple_strip` | staple_strip_assembly | 对成条订书钉，要求分别记录已成形订书钉、胶黏剂、可选薄纸条、组装电力和合格钉条；不存在薄纸路线时标记为不适用。 | `us-1665051-staple-strip-1928` |
| `validation_bilingual_alignment` | bilingual_pcr | 确认中英文文件具有相同顺序的 rule_id、process_id、row_id、UUID、受控值和来源。 |  |
| `validation_range_disclosure` | quantitative_guidance | 确认未从工艺来源推断无支持的经验范围或默认值；披露四组未解决范围证据并使用前景值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门产品制造前景数据集 |
| downstream_use | 经审查后可发布为 secondary_dataset 或 background_dataset，并用于 process 和 lifecyclemodel 投影 |
| allowed_use | 当参考流限定信息、路线和地域匹配时，用于已声明贱金属办公用品 SKU 或同质系列的比较或归因建模 |
| excluded_use | 不得直接用于纯塑料办公用品、订书机、办公家具、散装订书钉、建筑紧固件、由钢代理表示的另一种金属，也不得在未补充其他阶段时用于从摇篮到坟墓的声明 |
| required_metadata | PCR id 和版本状态；产品 SKU 和子类；尺寸或线规；金属牌号和原料形态；镀层；路线判断；计数转质量因子；包装；设施地域；期间；分配；上游数据集映射；未解决 UUID |
| required_quality_disclosure | 时间覆盖；仪器校准；共用负荷分配；质量平衡差；数据缺口；代理；前景变异；有条件过程适用性；废水和废物去向；范围证据局限 |
| update_trigger | 产品系列、金属牌号或形态、成形技术、镀层或胶黏剂路线、设施、包装配置、分配方法、上游数据集身份、公共 UUID 状态发生变化，或出现足以替代未解决范围的新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第 3.0 版结构，2025 年 6 月 30 日，CPC 42995；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | 官方产品类别身份及明确纳入成条订书钉 |
| `us-1355587-paper-clip-machine-1920` | 文献（`literature`） | 美国专利 US1355587A，Machine for making paper-clips，1920 年 10 月 12 日公布；https://patents.google.com/patent/US1355587A/en（检索于 2026-09-05） | 原始全文证明回形针制造中钢丝连续成形、切断和送出 |
| `us-1665051-staple-strip-1928` | 文献（`literature`） | 美国专利 US1665051A，Method of packaging staples or the like and package produced thereby，1928 年 4 月 3 日公布；https://patents.google.com/patent/US1665051A/en（检索于 2026-09-05） | 连续订书钉排列、胶黏剂施用、可选薄纸条、干燥和可分离钉条输出的原始全文工艺证据 |
| `ec-jrc-ferrous-metals-processing-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Ferrous Metals Processing Industry，EUR 31321 EN，JRC131649，2022，doi:10.2760/196475；https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（检索于 2026-09-05） | 有条件适用的保护性镀层、电解或化学表面处理及相关废水处理的官方工艺证据；不作为经验数量范围证据 |
