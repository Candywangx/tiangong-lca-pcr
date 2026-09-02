---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pepper-piper-spp-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 胡椒（Piper 属），加工

## 1. 范围与适用性

本 PCR 适用于以 *Piper* 属浆果（以 *Piper nigrum* L. 为代表）生产加工胡椒的工厂门产品。仅当所代表批次或生产期已声明产品类别、品种或物种、产品形态、进厂原料状态、湿处理路线、脱皮路线、干燥路线、杀菌路线和包装形式时，才涵盖黑胡椒、白胡椒和脱水青胡椒。

整粒、破碎、裂粒、粗磨、研磨和粉末是不同产品形态。黑胡椒、白胡椒和脱水青胡椒是不同产品类别。数据集不得平均这些形态或类别；如需报告混合产品，必须分别报告各前景路线，并透明地按声明产量加权。水浸沤、机械脱皮、湿洗或热烫、日晒、封闭式太阳能干燥、热风干燥及杀菌技术也分别构成路线门禁，不得平均成未声明的通用路线。

本 PCR 不包括农场门出售的生鲜或未经加工胡椒浆果、*Capsicum* 属和 *Pimenta* 属辣椒、复合香辛料、胡椒油树脂、精油和纯化胡椒碱、盐渍或罐藏青胡椒、冷冻胡椒、零售制备和使用，以及超出声明胡椒产品的提取或配制。种植和供应商加工属于上游数据集，除非由报告工厂运营；参考产品越过工厂门后开始出厂配送。

强制作者配置为 `atomic_flows:v1`。穿越前景边界的每种材料、能源载体、化学品、包装材料、废物、废水、制冷剂和直接基本流排放，均须有独立原子流行。化学品身份未知属于证据缺口，不得用集合流代替。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pepper-piper-spp-processed |
| classification_refs | CPC:3.0:23921 (exact) |
| covered_products | 保留果皮的黑胡椒；去除果皮后的白胡椒；脱水青胡椒；上述产品分别可为整粒、破碎、裂粒、粗磨、研磨或粉末形态的加工 *Piper* 属胡椒 |
| excluded_products | 农场门原胡椒；*Capsicum* 或 *Pimenta* 属辣椒；盐渍、罐藏或冷冻青胡椒；混合香辛料；油树脂；精油；纯化胡椒碱；类别、形态或路线未声明的产品 |
| representative_product | 工厂门 1 kg 净重加工 *Piper nigrum* 胡椒，满足声明的产品类别、形态、等级、水分规范和包装形式 |
| production_route | 声明路线向量：进厂原料状态 -> 分离 -> 适用时湿预处理 -> 适用时白胡椒浸沤和/或脱皮 -> 路线特定干燥 -> 清理分级 -> 适用时研磨 -> 适用时杀菌 -> 包装 -> 贮存 |
| market_state | 工厂门干燥食品级加工胡椒；声明产品类别、形态、等级、最终水分和包装形式 |

### 产品与路线选择门禁

清单汇总前，每一批次或生产期均须对下列每个适用字段声明一个值。不同取值的记录须保持分离，直至有意定义并披露输出产品混合物。

| gate_id | 必须声明 | 单一数据集内允许的处理 |
| --- | --- | --- |
| `gate_species` | *Piper* 属物种，已知时还须声明品种 | 不得跨物种或品种平均，除非记录已分离并披露产量权重 |
| `gate_product_class` | `black`、`white` 或 `dehydrated_green` | 不得在产品类别间隐式平均 |
| `gate_presentation` | `whole`、`broken`、`cracked`、`coarsely_ground`、`ground` 或 `powdered` | 不得在产品形态间隐式平均 |
| `gate_incoming_state` | 鲜果、带穗果、农场干胡椒、清理后整粒胡椒，或另一精确描述状态 | 上游数据集须匹配声明状态 |
| `gate_wet_treatment` | 无、快速清洗、热烫或另一种已识别处理 | 水、热、化学品和废水须保持路线特定 |
| `gate_depericarping` | 无、水浸沤后脱皮、机械脱皮、蒸汽辅助脱皮或声明的工序序列 | 不同湿法和机械路线须保持分离 |
| `gate_drying` | 露天日晒、封闭式太阳能、机械热风或声明的顺序路线 | 能源载体、收率、时间和水分损失须保持路线特定 |
| `gate_sanitization` | 无、蒸汽、干热、辐照或另一种已识别技术 | 技术特定的投入、损失和直接排放须保持分离 |
| `gate_packaging` | 散装或零售形式及每一材料层 | 每种包装材料均为原子投入，其边角料为原子输出 |

## 3. 参考流

### 功能单位

| 字段 | 值 |
| --- | --- |
| What | 报告工厂门交付的加工 *Piper* 属胡椒 |
| How much | 1 kg 净胡椒产品，不含包装 |
| How well | 满足声明的黑、白或脱水青产品类别；声明的整粒至粉末形态；适用 Codex 或买方等级；声明的最终水分与食品安全规范 |
| How long or cycle | 一个有代表性的生产期，或最多连续 12 个月、按产量加权的报告期 |
| reference_flow_link | `processed_pepper_reference_output` |

### 天工参考流对象

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg 净产品 |
| Reference product flow | Pepper (Piper spp.), processed `99d5d3c5-870f-458f-b492-a610d37c8034` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species_or_cultivar; pepper_colour_class; presentation_style; incoming_material_state; wet_pretreatment_route; depericarping_route; drying_route; sanitization_route; grade_or_specification; final_moisture_percent_wet_basis; packaging_format; production_site; production_period |

## 4. 测量与单位规则

| rule_id | 适用对象 | 必须属性 | 必须单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass | kg | 归一化至工厂门胡椒净质量；排除包装质量，并保留实测产品水分。 |
| `moisture_wet_basis` | 进料、中间品和最终胡椒 | Mass fraction | % wet basis | 水分按 100 × 水质量 / 湿样质量报告；注明测试方法和取样时间。 |
| `dry_matter_conversion` | 路线收率和物料平衡 | Mass | kg dry matter | 干物质 = 湿质量 × (1 - 湿基水分分数)；完成换算前不得比较湿法路线收率。 |
| `energy_carrier_identity` | 电力、蒸汽、热水、天然气、LPG、柴油和生物质 | Energy and carrier quantity | kWh, MJ, kg, L, or m3 | 每种载体保持独立流；保留供应商数量、使用时的低位热值和换算因子。 |
| `water_volume` | 清洗、热烫、浸沤、蒸汽和清洁用水 | Volume | m3 | 分别计量或核算每种用水；不得把工艺用水与废水体积合并。 |
| `packaging_net_mass` | 每一包装层 | Mass | kg | 按材料记录购入或领用质量并扣除经核实的未用退料；没有实测单件质量换算时不得仅用件数。 |
| `wastewater_load` | 每股废水 | Volume and concentration | m3 and kg/m3 | 体积与 COD 或其他污染物浓度分别报告；负荷 = 体积 × 浓度。 |
| `refrigerant_mass_balance` | 使用制冷剂的贮存设备 | Mass | kg | 各制冷剂化学品分别按期初充注量 + 补充量 - 期末充注量 - 回收量报告。 |
| `direct_emission_mass` | 现场燃料燃烧和粉尘释放 | Mass | kg | 优先采用烟气或设备记录；否则用记录的燃料和已识别因子来源分别计算各污染物。 |

## 5. 系统边界

前景从接收声明状态的胡椒原料开始，到包装后的加工胡椒在工厂门放行为止。发生时纳入接收、分离、湿法工序、干燥、干法清理分级、粒度减小、杀菌、设备清洁、包装、成品贮存、现场公用工程、直接排放、废物和废水。种植、供应商加工、外购能源、外购材料、外运废物处理和入厂运输需要上游数据集，但不得默默并入前景测量。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂接收胡椒原料的物理状态、产品类别、物种或品种、水分、洁净度、供应商加工、包装、地点和时间 |
| starting_condition_role | 前景门输入；其上游种植、预加工和入厂运输由链接的供应商或次级数据集表示 |
| product_classification_scope | 与 CPC 3.0 代码 23921 关联的加工 *Piper* 属胡椒；分类是映射语境，不能代替产品和路线限定词 |
| recursive_input_rule | 若接收本类别已加工胡椒用于清理、研磨、杀菌、重新包装或贮存，应仅作为 `same_category_processed_pepper_input` 记录一次，链接其上游数据集，并只建模新增前景工序；不得递归重建或重复计算早期加工 |
| upstream_dataset_requirement | 每种接收胡椒原料、能源载体、供水、化学品和包装材料均需匹配地理、时间、技术、产品类别、形态、水分和路线的上游数据集 |
| disclosure | 披露门禁向量、供应商起始状态、排除工序、分配、截断、路线份额、质量和水分平衡、能源载体、废水去向、直接排放、包装、制冷剂和数据缺口 |

### 规范性系统边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_route_gate` | 所有前景记录 | 汇总前应用产品与路线选择门禁；互斥的产品类别、形态、湿处理、脱皮路线和干燥路线不得隐式平均。 | `codex-cxs-326-2017`; `ipc-pepper-standard-2015`; `fao-gi-control-plan-2009` |
| `sb_required_operations` | 单元过程覆盖 | 纳入所有 required 过程，以及门禁条件满足的所有 conditional 过程；实际发生路线即使结果为零或不适用也须记录说明。 | `ipc-pepper-standard-2015`; `fao-spice-quality-assurance` |
| `sb_recursive_input` | 同类别加工胡椒输入 | 链接上游加工胡椒数据集，只建模新增前景转化；防止递归和重复计算。 | `eu-pef-method-2021` |
| `sb_upstream_linkage` | 外购投入和外运处理 | 为接收胡椒、公用工程、化学品、包装、入厂运输及场外废物或废水处理链接上游数据集。 | `eu-pef-method-2021` |
| `sb_factory_gate` | 参考产品 | 前景在报告工厂最终放行和贮存后结束；出厂配送、零售、使用和寿命终止仅在更广研究透明增补时纳入。 | `eu-pef-method-2021` |
| `sb_atomic_flows` | 所有清单交换 | 每种已识别载体、材料、化学品、包装材料、废物流、废水流、制冷剂和基本流排放各用一行；集合占位不符合要求。 | `fao-spice-quality-assurance`; `ipcc-stationary-combustion-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_lot_qualification` | 接收与批次资格确认 | required | 所有数据集 | 前景接收、身份门禁、称重、取样和拒收 | 每 1 kg 放行参考产品 |
| `threshing` | 脱粒与果穗分离 | conditional | 仅当带穗或成簇浆果穿越起始边界时纳入 | 前景机械分离 | 每 kg 分离浆果 |
| `wet_pretreatment` | 清洗或热烫预处理 | conditional | 仅当声明快速清洗、热烫或脱水青胡椒保藏处理时纳入 | 前景湿法调理 | 每 kg 预处理胡椒 |
| `white_pepper_retting` | 白胡椒水浸沤 | conditional | 仅对声明的水浸沤路线纳入 | 前景湿法软化果皮 | 每 kg 浸沤浆果 |
| `depericarping` | 去果皮与籽粒清洗 | conditional | 白胡椒发生人工、机械、蒸汽辅助或浸沤后脱皮时纳入 | 前景分离 | 每 kg 白胡椒籽粒 |
| `dry_cleaning_and_grading` | 干法清理与分级 | required | 所有数据集；可位于干燥或研磨前后，但须明确位置 | 前景去除异物和等外果 | 每 kg 清理胡椒 |
| `sun_drying` | 露天日晒干燥 | conditional | 仅对声明的露天日晒路线纳入 | 前景去除水分 | 每 kg 日晒干胡椒 |
| `enclosed_solar_drying` | 封闭式太阳能干燥 | conditional | 仅对声明的封闭太阳能路线纳入 | 前景受保护太阳能去水 | 每 kg 太阳能干胡椒 |
| `hot_air_drying` | 机械热风干燥 | conditional | 仅对声明的机械路线或顺序路线中的声明阶段纳入 | 前景强制空气去水 | 每 kg 热风干胡椒 |
| `milling_and_sieving` | 破碎、研磨与筛分 | conditional | 破碎、裂粒、粗磨、研磨或粉末形态时纳入 | 前景粒度减小 | 每 kg 研磨胡椒 |
| `product_sanitization` | 产品杀菌 | conditional | 仅当发生蒸汽、干热、辐照或另一种已识别处理时纳入 | 前景微生物降低 | 每 kg 杀菌胡椒 |
| `equipment_cleaning` | 设备与房间清洁 | required | 所有数据集；干式与湿式清洁记录须区分 | 前景卫生支持 | 每生产期并归一化至参考产品 |
| `packaging` | 初级、次级和三级包装 | required | 所有数据集 | 前景灌装与包装 | 每 1 kg 放行参考产品 |
| `finished_goods_storage` | 成品贮存与放行 | required | 所有数据集 | 前景常温或调温贮存和最终放行 | 每 1 kg 放行参考产品 |

### 过程：接收与批次资格确认（`receiving_and_lot_qualification`）

#### 输入

##### 产品流

###### 黑胡椒生产用鲜果或成熟果（`fresh_black_pepper_berries_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：黑胡椒生产用鲜 *Piper* 属浆果
- 流属性/单位：Mass / kg
- 数量规则：对声明为 `black` 的批次称量验收投入；记录物种或品种、成熟度、水分、供应商状态和加工前异物
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lot_records`
- 质量证据：经校准衡器票据、供应商批次记录、取样记录、水分结果和门禁声明
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### 白胡椒生产用充分成熟浆果（`ripe_white_pepper_berries_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒生产用充分成熟或熟透 *Piper* 属浆果
- 流属性/单位：Mass / kg
- 数量规则：对声明为 `white` 的批次称量验收投入；记录物种或品种、成熟度、水分、供应商状态和拟采用的脱皮路线
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lot_records`
- 质量证据：经校准衡器票据、供应商批次记录、成熟度检查、水分结果和路线声明
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`; `azman-retting-water-2020`

###### 脱水青胡椒用青果（`green_pepper_berries_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：脱水青胡椒用绿色 *Piper* 属浆果
- 流属性/单位：Mass / kg
- 数量规则：仅对声明为 `dehydrated_green` 的批次称量验收投入；记录成熟度、水分、保藏处理和干燥路线
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lot_records`
- 质量证据：经校准衡器票据、供应商批次记录、颜色和成熟度检查、水分结果及路线声明
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### 同类别已加工整粒胡椒（`same_category_processed_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：为进一步清理、研磨、杀菌、重新包装或贮存而接收的加工 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：仅在链接上游加工胡椒数据集时记录称量投入；记录产品类别、形态、水分、既往路线和上游数据集身份
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lot_records`
- 质量证据：称量票据、上游数据集引用、分析证书和同类别递归检查
- 来源：`eu-pef-method-2021`

###### 接收与取样用电（`receiving_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量接收输送机、取样器、秤、风选和接收室服务的用电，或按设备运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：电表读数，或额定功率 × 记录运行时间及分配键

#### 输出

##### 产品流

###### 已验收的声明胡椒批次（`accepted_pepper_lot_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：具有声明起始状态的已验收 *Piper* 属胡椒批次
- 流属性/单位：Mass / kg
- 数量规则：分别称量所有拒收胡椒和异物后得到的验收投入质量
- 数值来源模式：计算值（`calculated_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lot_records`
- 质量证据：签署的批次处置决定和质量核算
- 来源：`fao-spice-quality-assurance`

##### 废物流

###### 拒收胡椒浆果（`rejected_pepper_berries_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：拒收 *Piper* 属胡椒浆果
- 流属性/单位：Mass / kg
- 数量规则：称量发往声明处理或用途的霉变、虫害、损伤或不合规范浆果
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：经校准废物秤记录、拒收代码和去向凭证
- 来源：`fao-spice-quality-assurance`
- 范围：临时质量平衡筛查范围
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg received pepper
  - 基准：从零拒收到全部接收胡椒被拒收的筛查边界；须用经复核的场址证据替换
  - 敏感性：测试两个边界，因为拒收率直接改变每 kg 放行产品的上游投入和废物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 分离的植物性异物（`receiving_vegetative_matter_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：胡椒梗、叶、糠壳和其他植物性异物
- 流属性/单位：Mass / kg
- 数量规则：称量接收时移除的植物性物质；不得与石块、土壤或拒收浆果合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器皮重/毛重记录和去向凭证
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### 分离的石块和土壤（`receiving_stones_soil_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：从胡椒中移除的石块、砂和土壤
- 流属性/单位：Mass / kg
- 数量规则：称量接收时移除的矿物性异物；不得与植物性物质合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器皮重/毛重记录和去向凭证
- 来源：`codex-cxs-326-2017`; `fao-spice-quality-assurance`

###### 丢弃的进厂黄麻袋（`incoming_jute_sack_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进厂胡椒使用后的黄麻袋
- 流属性/单位：Mass / kg
- 数量规则：称量接收后丢弃的黄麻包装；退回或再用袋另行记录，不作为废物
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：包装件数、实测每袋质量、再用记录和废物凭证

###### 丢弃的进厂聚丙烯袋（`incoming_polypropylene_sack_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进厂胡椒使用后的编织聚丙烯袋
- 流属性/单位：Mass / kg
- 数量规则：称量接收后丢弃的聚丙烯包装；退回或再用袋另行记录，不作为废物
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：包装件数、实测每袋质量、再用记录和废物凭证

### 过程：脱粒与果穗分离（`threshing`）

#### 输入

##### 产品流

###### 胡椒果穗或果簇（`pepper_spikes_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：带穗或成簇的 *Piper* 属胡椒浆果
- 流属性/单位：Mass / kg
- 数量规则：称量进入脱粒的验收胡椒果穗；仅当声明起始状态含果穗或果簇时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 kg 分离浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_records`
- 质量证据：批次称量记录和声明的进厂原料状态
- 来源：`ipc-pepper-standard-2015`

###### 脱粒用电（`threshing_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：脱粒机及配套输送机的计量用电，或额定功率 × 运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 分离浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备铭牌、运行时间记录和批次质量

#### 输出

##### 产品流

###### 分离胡椒浆果（`separated_pepper_berries_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：分离后的 *Piper* 属胡椒浆果
- 流属性/单位：Mass / kg
- 数量规则：称量脱粒后、湿处理或干燥前的浆果
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每脱粒批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_threshing_records`
- 质量证据：经校准称量票据和批次核算

##### 废物流

###### 胡椒果穗和梗（`pepper_spikes_stalks_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：脱粒移除的胡椒果穗和梗
- 流属性/单位：Mass / kg
- 数量规则：按去向称量分离果穗和梗；不得与拒收浆果合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 kg 分离浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器质量和去向记录
- 来源：`ipc-pepper-standard-2015`

##### 基本流

###### 脱粒释放到空气的胡椒粉尘（`threshing_pepper_dust_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：脱粒时释放到空气的胡椒颗粒物
- 流属性/单位：Mass / kg
- 数量规则：采用实测捕集量加排放量平衡或技术特定排放估计；捕集粉尘作为废物，未捕集粉尘在此报告
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 分离浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_emission_records`
- 质量证据：除尘器粉尘质量记录、烟道测试或书面工程估计及运行时间

### 过程：清洗或热烫预处理（`wet_pretreatment`）

#### 输入

##### 产品流

###### 进入湿预处理的胡椒浆果（`wet_pretreatment_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进入清洗、热烫或脱水青胡椒处理的已声明 *Piper* 属胡椒浆果
- 流属性/单位：Mass / kg
- 数量规则：称量按路线分隔的胡椒投入；标识 `black`、`white` 或 `dehydrated_green` 及精确处理方式
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 质量证据：批次质量、路线声明、处理设定点和操作记录
- 来源：`fao-spice-quality-assurance`; `shango-pepper-quality-2021`

###### 清洗或热烫工艺用水（`wet_pretreatment_process_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：胡椒清洗或热烫工艺用水
- 流属性/单位：Volume / m3
- 数量规则：计量供给声明湿处理批次的补充水；仅扣除独立计量的回用水，不得与清洁用水合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：经校准水表、批次记录、水质结果和回用记录
- 来源：`fao-spice-quality-assurance`
- 范围：临时湿处理用水筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.02
  - 单位：m3/kg pretreated pepper
  - 基准：快速清洗或热烫的宽泛筛查区间；须以路线实测值替换
  - 敏感性：在完整区间内变化，因为供水和废水结果随该值直接变化
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 湿预处理用电（`wet_pretreatment_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：泵、输送机、搅拌器和控制系统的计量用电或设备运行时间用电
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或额定功率 × 运行时间及批次质量

###### 热烫用外购蒸汽（`wet_pretreatment_steam_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：仅当批次使用蒸汽加热时计量外购蒸汽；不得与热水或现场燃料合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：蒸汽表、压力和焓基准及处理批次记录

###### 热烫用外购热水（`wet_pretreatment_hot_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：仅在实际使用时计量输入热水能量；水体积另行记录，不得与蒸汽合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：流量及进出口温度记录、热量计算和批次记录

###### 湿处理加热用天然气（`wet_pretreatment_natural_gas_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于湿处理加热的天然气
- 流属性/单位：Volume / m3
- 数量规则：仅当选定路线现场用天然气加热水时计量；与 LPG 和柴油分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：燃气表、供应商热值、燃烧器记录和批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 湿处理加热用液化石油气（`wet_pretreatment_lpg_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于湿处理加热的液化石油气
- 流属性/单位：Mass / kg
- 数量规则：仅在使用时称量或按发票核算 LPG；与天然气和柴油分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：储罐质量或交付核算、供应商热值、燃烧器记录和批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 湿处理加热用柴油（`wet_pretreatment_diesel_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于湿处理加热的柴油
- 流属性/单位：Volume / L
- 数量规则：仅在使用时计量柴油；与天然气和 LPG 分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：储罐液位或流量计、供应商密度和热值、燃烧器记录及批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 脱水青胡椒二氧化硫保藏剂（`green_pepper_sulfur_dioxide_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：食品添加剂二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：仅对 `dehydrated_green` 记录实测添加量；黑胡椒和白胡椒记录零；核实适用法律和买方限值
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 kg 脱水青胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_input_records`
- 质量证据：批次配方、经校准加料记录、添加剂证书和成品测试
- 来源：`codex-cxs-326-2017`

#### 输出

##### 产品流

###### 湿预处理胡椒（`wet_pretreated_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：经清洗、热烫或处理的 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量输出并记录处理路线、温度-时间及沥水后水分
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每湿处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 质量证据：经校准衡器、处理记录、水分样品和路线身份

##### 废物流

###### 胡椒清洗或热烫废水（`wet_pretreatment_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：胡椒清洗或热烫废水
- 流属性/单位：Volume / m3
- 数量规则：计量湿预处理排放废水，扣除另行实测的产品滞留水或蒸发水；记录去向和处理
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：出水表或储罐平衡、取样结果及排放或处理凭证
- 来源：`fao-spice-quality-assurance`

###### 湿处理沉积物和移除杂物（`wet_pretreatment_sediment_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：从湿处理水中移除的沉积物、土壤和胡椒碎屑
- 流属性/单位：Mass / kg
- 数量规则：称量筛网、过滤器或水槽移除的脱水固体；不得与废水体积合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：容器皮重/毛重记录、固体水分说明和去向凭证

##### 基本流

###### 湿处理加热化石二氧化碳（`wet_pretreatment_fossil_co2_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：化石二氧化碳，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各化石燃料记录量、低位热值和所选 CO2 因子分别计算；外购蒸汽或热水记零以免重复计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料记录、热值来源、因子版本、氧化假设和计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 湿处理加热甲烷（`wet_pretreatment_ch4_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：甲烷，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各现场燃料和技术适用 CH4 因子计算；外购热力记零
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料记录、因子来源和版本、设备类别及计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 湿处理加热氧化亚氮（`wet_pretreatment_n2o_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：氧化亚氮，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各现场燃料和技术适用 N2O 因子计算；外购热力记零
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 预处理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料记录、因子来源和版本、设备类别及计算表
- 来源：`ipcc-stationary-combustion-2006`

### 过程：白胡椒水浸沤（`white_pepper_retting`）

#### 输入

##### 产品流

###### 进入水浸沤的成熟浆果（`white_retting_berries_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒水浸沤用充分成熟 *Piper* 属浆果
- 流属性/单位：Mass / kg
- 数量规则：称量进入声明水浸沤批次的分隔浆果；记录品种、成熟度、进料水分、槽体和开始时间
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 浸沤浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_retting_records`
- 质量证据：批次称量票据、成熟度检查、槽体身份和路线门禁
- 来源：`azman-retting-water-2020`; `shango-pepper-quality-2021`

###### 白胡椒浸沤用水（`white_retting_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒浸沤工艺用水
- 流属性/单位：Volume / m3
- 数量规则：计量每个浸沤槽的初始水和更换水；流水路线和静态槽路线保持分离
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 进入浸沤的浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：经校准水表或槽体尺寸和液位、换水记录、水源测试及批次质量
- 来源：`azman-retting-water-2020`
- 范围：实验静态槽水负荷筛查范围
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0.006
  - 上限：0.018
  - 单位：m3/kg berries entering retting
  - 基准：文献 18 L 槽装载 1-3 kg 浆果所表示的范围；仅用于筛查比较，不作为工业默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`azman-retting-water-2020`

###### 浸沤循环用电（`white_retting_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量水循环、曝气、泵和槽体操作用电，或按设备运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 进入浸沤的浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或额定功率 × 运行时间、设备身份和批次质量

#### 输出

##### 产品流

###### 浸沤胡椒浆果（`retted_pepper_berries_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：果皮已软化的浸沤 *Piper* 属浆果
- 流属性/单位：Mass / kg
- 数量规则：声明浸沤时长后称量沥水输出；脱皮前记录水分和滞留水
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每浸沤批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_retting_records`
- 质量证据：沥水批次质量、水分结果、时长、温度、pH 和槽体记录
- 来源：`azman-retting-water-2020`

##### 废物流

###### 白胡椒浸沤废水（`white_retting_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒浸沤废水
- 流属性/单位：Volume / m3
- 数量规则：按槽体和排放事件计量废浸沤水；适用时记录处理、回用、去向、pH、COD、溶解氧和浊度
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 进入浸沤的浆果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：出水体积、注明日期的混合样、认可或书面测试及处理凭证
- 来源：`azman-retting-water-2020`
- 范围：文献浸沤水 COD 浓度筛查范围
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0.008
  - 上限：3.25
  - 单位：kg COD/m3 wastewater
  - 基准：所引静态槽实验初始至第七天 COD 观测值的近似跨度；不是排放限值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`azman-retting-water-2020`

### 过程：去果皮与籽粒清洗（`depericarping`）

#### 输入

##### 产品流

###### 进入去果皮的胡椒浆果（`depericarping_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进入声明脱皮工序的浸沤、蒸汽处理或成熟 *Piper* 属浆果
- 流属性/单位：Mass / kg
- 数量规则：按 `water_retting_plus_removal`、`mechanical_peeling`、`steam_assisted_peeling` 或另一精确序列分隔称量投入
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_depericarping_records`
- 质量证据：批次质量、路线门禁、上游批次链接和设备或人工操作记录
- 来源：`codex-cxs-326-2017`; `shango-pepper-quality-2021`

###### 籽粒清洗用水（`depericarping_wash_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒籽粒清洗工艺用水
- 流属性/单位：Volume / m3
- 数量规则：计量脱皮期间或之后的用水；不得与浸沤或设备清洁用水合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：经校准水表、水质结果、批次质量和回用记录

###### 机械脱皮用电（`depericarping_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：机械脱皮机、泵和分离器的计量用电，或额定功率 × 运行时间；无动力设备的全人工路线记零
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备铭牌、运行时间和批次质量

###### 蒸汽辅助脱皮用外购蒸汽（`depericarping_steam_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：仅对声明的蒸汽辅助路线计量蒸汽；不得与现场燃料或蒸汽杀菌合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：蒸汽表、压力和焓基准及脱皮批次记录

#### 输出

##### 产品流

###### 白胡椒籽粒（`white_pepper_kernels_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：去除果皮后的白色 *Piper* 属胡椒籽粒
- 流属性/单位：Mass / kg
- 数量规则：称量清洗和沥水后的籽粒；干燥前记录残留果皮比例和水分
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每脱皮批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_depericarping_records`
- 质量证据：经校准衡器、果皮目视检查、水分结果和批次核算
- 来源：`codex-cxs-326-2017`

##### 废物流

###### 移除的胡椒果皮（`pepper_pericarp_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒生产中移除的胡椒果皮
- 流属性/单位：Mass / kg
- 数量规则：按去向称量湿或干果皮；记录水分，不得与籽粒拒收物合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：容器皮重/毛重、水分说明和去向凭证

###### 脱皮清洗废水（`depericarping_wash_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：白胡椒脱皮清洗废水
- 流属性/单位：Volume / m3
- 数量规则：计量脱皮后的清洗出水；与浸沤废水和设备清洁废水分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：出水表或槽体平衡、取样记录和处理或排放凭证

##### 基本流

###### 机械脱皮胡椒粉尘（`depericarping_pepper_dust_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：机械脱皮释放到空气的胡椒颗粒物
- 流属性/单位：Mass / kg
- 数量规则：由实测捕集粉尘和设备或烟道平衡计算未捕集粉尘；无粉尘产生路线记零
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 白胡椒籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_emission_records`
- 质量证据：除尘器粉尘质量、烟道测试或工程估计及运行时间

### 过程：干法清理与分级（`dry_cleaning_and_grading`）

#### 输入

##### 产品流

###### 进入干法清理与分级的胡椒（`dry_cleaning_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进入干法清理与分级的整粒或研磨 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量投入并声明产品类别、形态、水分和过程位置
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 kg 清理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_grading_records`
- 质量证据：批次质量、批次链接、筛网或分选器设置和进料检查
- 来源：`ipc-pepper-standard-2015`; `fao-spice-quality-assurance`

###### 清理与分级用电（`dry_cleaning_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：风选器、去石机、磁选器、分级机和输送机的计量用电，或额定功率 × 运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 清理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备功率、运行时间和批次质量

#### 输出

##### 产品流

###### 清理分级胡椒（`cleaned_graded_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：清理并分级的 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：按声明等级和形态称量合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每清理分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_grading_records`
- 质量证据：称量票据、筛分或分级结果、缺陷测试和放行记录
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`

##### 废物流

###### 轻果和小粒（`light_berries_pinheads_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：分级移除的轻质胡椒果和小粒
- 流属性/单位：Mass / kg
- 数量规则：按去向称量分离的轻果和小粒；不得与石块、植物性物质或等外粉末合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 kg 清理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔称量记录、等级测试和去向凭证
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`

###### 干法清理植物性物质（`dry_cleaning_vegetative_matter_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：干法清理移除的胡椒梗、叶和糠壳
- 流属性/单位：Mass / kg
- 数量规则：称量风选或人工分拣移除的植物性物质；与矿物性物质分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 kg 清理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器质量和去向凭证

###### 去石产生的石块和土壤（`dry_cleaning_stones_soil_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：去石时移除的石块、砂和土壤
- 流属性/单位：Mass / kg
- 数量规则：称量去石机或人工分拣移除的矿物性物质；与植物性物质分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 kg 清理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器质量和去向凭证

##### 基本流

###### 干法清理胡椒粉尘（`dry_cleaning_pepper_dust_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：风选和分级释放到空气的胡椒颗粒物
- 流属性/单位：Mass / kg
- 数量规则：未捕集粉尘与捕集胡椒粉尘废物分开计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 清理胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_emission_records`
- 质量证据：除尘器粉尘质量、烟道测试或工程估计及设备运行时间
- 来源：`fao-spice-quality-assurance`

### 过程：露天日晒干燥（`sun_drying`）

#### 输入

##### 产品流

###### 进入露天日晒的湿胡椒（`sun_drying_wet_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：露天日晒用湿 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：摊铺前称量路线分隔投入并记录产品类别和水分
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 日晒干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：批次称量、水分样品、晒场记录、开始时间和天气记录
- 来源：`fao-spice-quality-assurance`; `shango-pepper-quality-2021`

#### 输出

##### 产品流

###### 日晒干胡椒（`sun_dried_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：露天日晒干 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：达到声明干燥终点后称量输出；记录最终水分、时长、翻动、覆盖事件和污染控制
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每日晒批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：经校准衡器、水分测试、时间-天气记录和放行检查
- 来源：`codex-cxs-326-2017`; `fao-spice-quality-assurance`

##### 基本流

###### 日晒蒸发水（`sun_drying_water_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：胡椒干燥排放到空气的水
- 流属性/单位：Mass / kg
- 数量规则：用 `calc_moisture_removed` 根据干湿胡椒质量和水分测量计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 日晒干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：配对批次质量、水分测试、取样方法和计算表

### 过程：封闭式太阳能干燥（`enclosed_solar_drying`）

#### 输入

##### 产品流

###### 进入封闭太阳能干燥的湿胡椒（`solar_drying_wet_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：封闭式太阳能干燥用湿 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：装载前称量路线分隔投入并记录产品类别和水分
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 太阳能干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：批次称量、水分样品、干燥器身份和开始记录

###### 太阳能干燥器风机用电（`solar_drying_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：风机、控制和输送设备的计量用电，或额定功率 × 运行时间；被动式太阳能干燥器记零
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 太阳能干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备功率、运行时间和批次质量
- 范围：临时风机用电筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg solar-dried pepper
  - 基准：被动式至强制通风的宽泛筛查区间；须以干燥器特定记录替换
  - 敏感性：测试零值、中点和上限；电力相关结果随风机需求直接变化
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 封闭太阳能干胡椒（`solar_dried_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：封闭式太阳能干燥 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量输出并记录最终水分、干燥时长、温度、气流和防护状态
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每太阳能干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：经校准衡器、水分测试、时间-温度记录和放行检查
- 来源：`fao-spice-quality-assurance`; `shango-pepper-quality-2021`

##### 基本流

###### 封闭太阳能干燥蒸发水（`solar_drying_water_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：胡椒干燥排放到空气的水
- 流属性/单位：Mass / kg
- 数量规则：用 `calc_moisture_removed` 根据干湿胡椒质量和水分测量计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 太阳能干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：配对批次质量、水分测试、取样方法和计算表

### 过程：机械热风干燥（`hot_air_drying`）

#### 输入

##### 产品流

###### 进入热风干燥的湿胡椒（`hot_air_drying_wet_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：机械热风干燥用湿 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：装载前称量路线分隔投入并记录产品类别、形态和水分
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：批次称量、水分结果、干燥器身份和开始记录
- 来源：`shango-pepper-quality-2021`

###### 热风干燥用电（`hot_air_drying_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量风机、加热器、泵、控制和输送设备用电；电加热与燃料加热路线保持分离
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备功率、运行时间和批次质量
- 范围：临时机械干燥用电筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：20
  - 单位：kWh/kg hot-air-dried pepper
  - 基准：覆盖仅风机至电加热系统的宽泛初筛范围；须以设备记录替换
  - 敏感性：测试两个边界并保持电加热与燃料加热路线分离，因为该范围可能主导结果
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 热风干燥用外购蒸汽（`hot_air_drying_steam_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：仅在选择时计量供给干燥器换热器的蒸汽；不得与现场燃料合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：蒸汽表、压力和焓基准及批次分配

###### 热风干燥用天然气（`hot_air_drying_natural_gas_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于热风干燥的天然气
- 流属性/单位：Volume / m3
- 数量规则：仅对声明的燃气干燥器计量天然气；与 LPG、柴油、生物质和外购蒸汽分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：燃气表、供应商热值、燃烧器记录和批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 热风干燥用液化石油气（`hot_air_drying_lpg_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于热风干燥的液化石油气
- 流属性/单位：Mass / kg
- 数量规则：仅对声明的 LPG 干燥器称量或按发票核算 LPG；与其他载体分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：储罐质量或交付核算、供应商热值、燃烧器记录和批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 热风干燥用柴油（`hot_air_drying_diesel_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于热风干燥的柴油
- 流属性/单位：Volume / L
- 数量规则：仅对声明的柴油干燥器计量柴油；与其他载体分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：储罐液位或流量计、供应商密度和热值、燃烧器记录及批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 干燥器燃料用胡椒生物质（`hot_air_drying_pepper_biomass_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧的干胡椒梗、果皮或其他已识别胡椒生物质
- 流属性/单位：Mass / kg
- 数量规则：按确切残余物种类称量干生物质并实测水分；不得与另一身份的外购生物质合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：燃料称量记录、残余物身份、水分、热值来源和燃烧器记录
- 来源：`ipcc-stationary-combustion-2006`

#### 输出

##### 产品流

###### 热风干胡椒（`hot_air_dried_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：机械热风干燥 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量输出并记录最终水分、温度-时间曲线、气流及燃料或供热路线
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：经校准衡器、水分结果、连续时间-温度记录和批次放行
- 来源：`codex-cxs-326-2017`; `shango-pepper-quality-2021`

##### 基本流

###### 热风干燥蒸发水（`hot_air_drying_water_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：胡椒干燥排放到空气的水
- 流属性/单位：Mass / kg
- 数量规则：用 `calc_moisture_removed` 根据干湿胡椒质量和水分测量计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_records`
- 质量证据：配对批次质量、水分测试、取样方法和计算表

###### 干燥器燃烧化石二氧化碳（`hot_air_drying_fossil_co2_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：化石二氧化碳，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按天然气、LPG 和柴油活动量及所选 CO2 因子分别计算；电力、外购蒸汽和生物质记零以防重复计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料记录、热值、因子版本、氧化假设和计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 胡椒生物质燃烧生物源二氧化碳（`hot_air_drying_biogenic_co2_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：生物源二氧化碳，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：仅按记录的胡椒生物质燃料及书面碳含量或因子基准计算；与化石 CO2 分开报告
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：生物质质量、水分、碳含量或因子来源、氧化假设和计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 干燥器燃烧甲烷（`hot_air_drying_ch4_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：甲烷，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各燃烧燃料和技术适用 CH4 因子分别计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料记录、因子来源和版本、设备类别及计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 干燥器燃烧氧化亚氮（`hot_air_drying_n2o_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：氧化亚氮，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各燃烧燃料和技术适用 N2O 因子分别计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料记录、因子来源和版本、设备类别及计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 干燥器燃烧氮氧化物（`hot_air_drying_nox_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：氮氧化物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：记录烟道测量，或按各燃料使用已识别技术特定监管因子计算；不得由 IPCC 温室气体因子推算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：烟道测试或引用的当地因子、氧修正、燃料记录和计算表

###### 干燥器燃烧二氧化硫（`hot_air_drying_so2_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：二氧化硫，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：记录烟道测量，或按实际燃料硫含量分别计算；不得为气体、LPG、柴油或生物质赋通用值
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：烟道测试或供应商硫分析、燃料质量、控制效率和计算表

###### 干燥器燃烧颗粒物（`hot_air_drying_particulate_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：干燥器燃烧排放到空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：记录烟道测量，或按燃料、燃烧技术和控制装置分别计算；不得与胡椒产品粉尘合并
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 热风干胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：烟道测试或引用的当地因子、控制装置记录、燃料活动量和计算表

### 过程：破碎、研磨与筛分（`milling_and_sieving`）

#### 输入

##### 产品流

###### 进入粒度减小的整粒胡椒（`milling_whole_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：用于破碎、研磨或制粉的清理后整粒 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：按产品类别、目标形态、水分和磨机生产期分隔称量投入
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 kg 研磨胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_records`
- 质量证据：批次称量、批次链接、目标粒径规范和磨机清洁放行
- 来源：`ipc-pepper-standard-2015`; `fao-spice-quality-assurance`

###### 研磨与筛分用电（`milling_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：破碎机、磨机、筛、风选和输送机的计量用电，或额定功率 × 运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 研磨胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备功率、运行时间、筛网身份和批次质量
- 范围：临时研磨用电筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh/kg milled pepper
  - 基准：覆盖粗破碎至细粉的宽泛筛查范围；须以产品形态和磨机特定记录替换
  - 敏感性：按产品形态测试声明边界，因为细粉制备可能使该交换量主导结果
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 低温研磨用液氮（`milling_liquid_nitrogen_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：液氮
- 流属性/单位：Mass / kg
- 数量规则：仅对声明的低温研磨路线计量液氮；常温研磨记零
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 低温研磨胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_input_records`
- 质量证据：储罐液位或交付核算、喷注记录和批次质量

#### 输出

##### 产品流

###### 研磨筛分胡椒（`milled_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：破碎、裂粒、粗磨、研磨或粉末 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：按声明形态和粒径标准称量合格输出；返工另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每研磨生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_records`
- 质量证据：称量票据、筛析、留样和放行记录
- 来源：`codex-cxs-326-2017`; `ipc-pepper-standard-2015`

##### 废物流

###### 不合格研磨胡椒（`off_spec_milled_pepper_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：送往废物处理的不合格研磨胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量未返工或未作为产品出售的物料；记录原因和去向
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 kg 研磨胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔称量记录、处置批准和去向凭证

###### 研磨捕集胡椒粉尘（`captured_milling_pepper_dust_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：作为废物收集的捕集胡椒粉尘
- 流属性/单位：Mass / kg
- 数量规则：称量未返回产品的过滤器或收集器粉尘；与未捕集空气排放分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 研磨胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：收集器清空质量、再用决定和去向凭证

##### 基本流

###### 研磨释放胡椒粉尘（`milling_pepper_dust_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：研磨时释放到空气的胡椒颗粒物
- 流属性/单位：Mass / kg
- 数量规则：根据烟道测量或捕集加排放粉尘平衡计算未捕集粉尘；不得与燃烧颗粒物合并
- 数值来源模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 研磨胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_emission_records`
- 质量证据：烟道测试或工程估计、收集器质量、气流和运行时间
- 来源：`fao-spice-quality-assurance`

### 过程：产品杀菌（`product_sanitization`）

#### 输入

##### 产品流

###### 进入杀菌的胡椒（`sanitization_pepper_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进入声明杀菌技术的 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：按产品类别、形态、水分和确切杀菌路线分隔称量投入
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitization_records`
- 质量证据：批次质量、技术身份、经验证工艺规范和处理前样品
- 来源：`shango-pepper-quality-2021`

###### 产品杀菌用电（`sanitization_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量蒸汽发生器辅机、干热设备、现场辐照设备、泵和控制用电；保留技术声明
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备功率、运行时间和批次质量

###### 产品杀菌用外购蒸汽（`sanitization_steam_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：仅对声明的蒸汽杀菌路线计量蒸汽；不得与现场燃料或湿预处理蒸汽合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 蒸汽杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：蒸汽表、压力和焓基准、处理时长和批次质量
- 范围：临时蒸汽杀菌能耗筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：20
  - 单位：MJ/kg steam-sanitized pepper
  - 基准：直接和间接蒸汽系统的宽泛初筛区间；须以计量焓值替换
  - 敏感性：测试声明边界，且不得在直接与间接蒸汽技术间转用结果
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 蒸汽杀菌工艺用水（`sanitization_process_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：蒸汽杀菌工艺用水
- 流属性/单位：Volume / m3
- 数量规则：计量穿越产品杀菌边界的补充水；与清洁用水分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 蒸汽杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：水表、水质结果、蒸汽平衡和批次记录

###### 现场杀菌供热用天然气（`sanitization_natural_gas_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于产品杀菌的天然气
- 流属性/单位：Volume / m3
- 数量规则：仅对声明的燃气干热或蒸汽路线计量天然气；与 LPG 和外购蒸汽分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：燃气表、供应商热值、设备记录和批次分配
- 来源：`ipcc-stationary-combustion-2006`

###### 现场杀菌供热用液化石油气（`sanitization_lpg_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：现场燃烧用于产品杀菌的液化石油气
- 流属性/单位：Mass / kg
- 数量规则：仅对声明的 LPG 燃烧路线称量或按发票核算 LPG；与天然气和外购蒸汽分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：储罐质量或交付核算、供应商热值、设备记录和批次分配
- 来源：`ipcc-stationary-combustion-2006`

#### 输出

##### 产品流

###### 杀菌胡椒（`sanitized_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：杀菌后的 *Piper* 属胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量处理输出并记录产品类别、形态、处理技术、剂量或时间-温度规范、水分和测试结果
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每杀菌批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitization_records`
- 质量证据：经校准衡器、经验证工艺记录、处理前后水分及微生物或买方要求的放行结果
- 来源：`shango-pepper-quality-2021`

##### 废物流

###### 蒸汽杀菌冷凝废水（`sanitization_condensate_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：产品杀菌冷凝废水
- 流属性/单位：Volume / m3
- 数量规则：计量排放而非回收的冷凝水；与产品清洗和设备清洁废水分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 蒸汽杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 质量证据：冷凝水表或储罐平衡、回用记录及排放或处理凭证

##### 基本流

###### 杀菌供热化石二氧化碳（`sanitization_fossil_co2_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：化石二氧化碳，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按现场天然气和 LPG 分别计算；外购蒸汽和电力记零以防重复计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料活动量、热值、因子版本、氧化假设和计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 杀菌供热甲烷（`sanitization_ch4_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：甲烷，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各现场燃料和技术适用 CH4 因子分别计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料活动量、因子来源和版本、设备类别及计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 杀菌供热氧化亚氮（`sanitization_n2o_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：氧化亚氮，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：按各现场燃料和技术适用 N2O 因子分别计算
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_combustion_emission_records`
- 质量证据：燃料活动量、因子来源和版本、设备类别及计算表
- 来源：`ipcc-stationary-combustion-2006`

###### 蒸汽或干热杀菌水蒸气（`sanitization_water_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：产品杀菌时排放到空气的水
- 流属性/单位：Mass / kg
- 数量规则：根据胡椒水分变化和未回收蒸汽平衡计算；不得重复计算冷凝废水
- 数值来源模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 kg 杀菌胡椒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitization_records`
- 质量证据：处理前后质量和水分、蒸汽平衡、冷凝水记录和计算表

### 过程：设备与房间清洁（`equipment_cleaning`）

#### 输入

##### 产品流

###### 设备与房间清洁用水（`equipment_cleaning_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：设备与房间清洁工艺用水
- 流属性/单位：Volume / m3
- 数量规则：按清洁事件计量用水；与胡椒清洗、浸沤、脱皮和杀菌用水分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 质量证据：清洁事件水表或槽体体积、生产期链接和卫生签署
- 范围：临时设备清洁用水筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg released pepper
  - 基准：从干式清洁到湿式清洁的宽泛筛查范围；须以事件级用水记录替换
  - 敏感性：测试零值和上限，因为清洁制度同时改变供水和废水负担
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 清洁设备用电（`equipment_cleaning_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：吸尘器、压力清洗机、泵和清洁辅助设备的计量用电或设备运行时间用电
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表或设备功率、运行时间、清洁事件和生产期分配

###### 次氯酸钠清洁剂（`equipment_cleaning_sodium_hypochlorite_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg active substance
- 数量规则：仅在使用时按产品浓度 × 溶液质量计算投加活性质量；不得与其他消毒剂合并
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_input_records`
- 质量证据：安全数据表、浓度证书、溶液领用质量、稀释记录和清洁记录

###### 氢氧化钠清洁剂（`equipment_cleaning_sodium_hydroxide_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg active substance
- 数量规则：仅在使用时按产品浓度 × 溶液质量计算投加活性质量；不得与其他清洁化学品合并
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_input_records`
- 质量证据：安全数据表、浓度证书、溶液领用质量、稀释记录和清洁记录

###### 过氧乙酸清洁剂（`equipment_cleaning_peracetic_acid_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg active substance
- 数量规则：仅在使用时按产品浓度 × 溶液质量计算投加活性质量；不得与次氯酸钠或另一消毒剂合并
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_input_records`
- 质量证据：安全数据表、浓度证书、溶液领用质量、稀释记录和清洁记录

#### 输出

##### 废物流

###### 设备清洁废水（`equipment_cleaning_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：设备与房间清洁废水
- 流属性/单位：Volume / m3
- 数量规则：按清洁事件计量湿清洁出水；保留化学品身份和浓度，与工艺废水分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 质量证据：出水表或槽体平衡、化学品使用核算、样品结果和处理凭证

###### 废清洁过滤器和擦拭物（`spent_cleaning_filters_wipes_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：受胡椒粉尘污染的废过滤器和清洁擦拭物
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向称量废过滤器和擦拭物；材料不同时在数据包中新增原子行
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：容器质量、材料身份记录和去向凭证

###### 空高密度聚乙烯化学品容器（`empty_hdpe_chemical_container_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：空高密度聚乙烯清洁化学品容器
- 流属性/单位：Mass / kg
- 数量规则：称量未退回供应商的 HDPE 容器；其他聚合物容器须用独立原子行
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：容器件数、实测单件质量、退回记录和去向凭证

### 过程：初级、次级和三级包装（`packaging`）

#### 输入

##### 产品流

###### 待包装胡椒（`pepper_for_packaging_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：待包装的加工胡椒
- 流属性/单位：Mass / kg
- 数量规则：称量转移至包装线的胡椒，保留产品类别、形态、等级、水分、杀菌和路线限定词
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：包装线批次记录、经校准衡器票据和路线-批次核算

###### 灌装与包装用电（`packaging_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：灌装、封口、贴标、输送和托盘缠膜的计量用电，或设备功率 × 运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表记录或额定功率、运行时间记录、产线吞吐量和分配键

###### 牛皮纸包装（`kraft_paper_packaging_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：牛皮纸包装
- 流属性/单位：Mass / kg
- 数量规则：牛皮纸袋或纸层领用质量减实测未用退料；仅用于声明包装形式
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：采购规范、材料身份、领退记录和实测单件质量

###### 聚乙烯内衬（`polyethylene_liner_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：聚乙烯包装内衬
- 流属性/单位：Mass / kg
- 数量规则：聚乙烯内衬领用质量减实测未用退料；不得与聚丙烯或其他聚合物合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：供应商规范、聚合物身份、领退记录和实测单件质量

###### 编织聚丙烯袋（`woven_polypropylene_sack_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：编织聚丙烯包装袋
- 流属性/单位：Mass / kg
- 数量规则：领用袋质量减实测未用退料；排除另行记录的聚乙烯内衬
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：供应商规范、聚合物身份、袋数和实测单件质量

###### 玻璃罐（`glass_jar_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：玻璃包装罐
- 流属性/单位：Mass / kg
- 数量规则：声明零售形式所灌装玻璃罐质量；排除另行记录的封盖和标签
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：采购记录、罐数和实测空罐质量

###### 金属封盖（`metal_closure_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：金属包装封盖
- 流属性/单位：Mass / kg
- 数量规则：用于声明包装的金属封盖质量；如聚合物内嵌件具有实质性，须另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：封盖规范、件数和实测单件质量

###### 纸板箱（`paperboard_carton_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：纸板包装箱
- 流属性/单位：Mass / kg
- 数量规则：纸板箱领用质量减经核实的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：纸板规范、箱数、领退记录和实测单件质量

###### 木托盘（`wooden_pallet_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：按经核实的周转次数和再用历史计算消耗或分配的托盘净质量；退回托盘不得作为一次性投入
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 质量证据：托盘规范、实测质量、发运-退回记录、再用次数和计算

###### 聚乙烯缠绕膜（`polyethylene_stretch_film_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：聚乙烯托盘缠绕膜
- 流属性/单位：Mass / kg
- 数量规则：膜领用质量减未用卷材余量，分配至发运的托盘化产品
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 质量证据：聚合物规范、卷材领用和余量质量、托盘数和发运质量

#### 输出

##### 产品流

###### 包装加工胡椒（`packaged_pepper_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：贮存和最终放行前的包装加工 *Piper* 属胡椒
- 流属性/单位：Mass / kg net pepper
- 数量规则：扣除灌装损失后包装验收的胡椒净质量，不含包装质量
- 数值来源模式：计算值（`calculated_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每包装生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 质量证据：灌装单元数、皮重核实、检重记录、拒收记录和净质量核算

##### 废物流

###### 牛皮纸包装边角料（`kraft_paper_packaging_scrap`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：牛皮纸包装边角料
- 流属性/单位：Mass / kg
- 数量规则：按去向称量牛皮纸切边、破损袋和拒收纸包装
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器质量、拒收记录和去向凭证

###### 聚乙烯包装边角料（`polyethylene_packaging_scrap`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：聚乙烯包装边角料
- 流属性/单位：Mass / kg
- 数量规则：称量拒收内衬和缠绕膜边角料；其他聚合物保持分离
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：聚合物身份、分隔容器质量、拒收记录和去向凭证

###### 聚丙烯包装边角料（`polypropylene_packaging_scrap`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：编织聚丙烯包装边角料
- 流属性/单位：Mass / kg
- 数量规则：称量破损或拒收聚丙烯袋；与内衬和其他聚合物分开
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：聚合物身份、分隔容器质量、拒收记录和去向凭证

###### 玻璃包装破损废物（`glass_packaging_breakage_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：破碎玻璃包装废物
- 流属性/单位：Mass / kg
- 数量规则：称量破碎或拒收玻璃罐，排除金属封盖和胡椒残余物
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：破损记录、分隔容器质量和去向凭证

###### 金属封盖边角料（`metal_closure_scrap`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：金属包装封盖边角料
- 流属性/单位：Mass / kg
- 数量规则：称量拒收金属封盖；具有实质性的非金属内嵌件须分离
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：拒收件数、实测单件质量、分隔容器质量和去向凭证

###### 纸板包装边角料（`paperboard_packaging_scrap`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：纸板包装边角料
- 流属性/单位：Mass / kg
- 数量规则：按去向称量破损纸箱和纸板切边
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 质量证据：分隔容器质量、拒收记录和去向凭证

###### 木托盘废物（`wooden_pallet_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：丢弃木托盘废物
- 流属性/单位：Mass / kg
- 数量规则：称量退役托盘质量，并按其书面再用历史分配
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每包装生产期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 质量证据：托盘身份、实测质量、维修和再用历史、退役记录和去向凭证

### 过程：成品贮存与放行（`finished_goods_storage`）

#### 输入

##### 产品流

###### 贮存用包装胡椒（`packaged_pepper_storage_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：进入成品贮存的包装加工 *Piper* 属胡椒
- 流属性/单位：Mass / kg net pepper
- 数量规则：进入贮存的包装胡椒净质量，链接至确切路线、批次和包装形式
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 质量证据：仓库收货记录、批次链接、净质量记录和包装规范

###### 成品贮存用电（`storage_electricity_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量贮存、通风、照明和冷却用电，按占用质量-时间或另一披露的因果驱动分配
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每贮存期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carrier_records`
- 质量证据：分表记录、贮存时长、占用质量-时间和分配计算

###### 制冷剂 R-134a（`storage_refrigerant_r134a_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：1,1,1,2-四氟乙烷（HFC-134a）制冷剂
- 流属性/单位：Mass / kg
- 数量规则：仅记录成品贮存设备 R-134a 补充量；无相关设备或化学品时记零
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备台账、制冷剂标签、维修记录、钢瓶质量和充注平衡

###### 制冷剂 R-410A（`storage_refrigerant_r410a_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：R-410A 制冷剂混合物
- 流属性/单位：Mass / kg
- 数量规则：仅记录成品贮存设备 R-410A 补充量；不得与另一制冷剂合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备台账、制冷剂标签、维修记录、钢瓶质量和充注平衡

###### 制冷剂 R-32（`storage_refrigerant_r32_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：二氟甲烷（HFC-32）制冷剂
- 流属性/单位：Mass / kg
- 数量规则：仅记录成品贮存设备 R-32 补充量；不得与另一制冷剂合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备台账、制冷剂标签、维修记录、钢瓶质量和充注平衡

###### 制冷剂 R-404A（`storage_refrigerant_r404a_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：R-404A 制冷剂混合物
- 流属性/单位：Mass / kg
- 数量规则：仅记录成品贮存设备 R-404A 补充量；不得与另一制冷剂合并
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备台账、制冷剂标签、维修记录、钢瓶质量和充注平衡

#### 输出

##### 产品流

###### 放行加工胡椒参考产品（`processed_pepper_reference_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：辣椒（蒌属），加工品 `99d5d3c5-870f-458f-b492-a610d37c8034`
- 流属性/单位：Mass / kg
- 数量规则：工厂门恰好 1 kg 净重放行胡椒，不含包装质量，并携带所有必需产品和路线限定词
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：参考量 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 质量证据：放行证书、最终净质量、水分和等级结果、批次谱系、门禁向量及包装声明
- 来源：`codex-cxs-326-2017`; `un-cpc-v3`

##### 基本流

###### R-134a 排放到空气（`storage_refrigerant_r134a_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：1,1,1,2-四氟乙烷（HFC-134a），排放到空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量 + R-134a 补充量 - 期末充注量 - 回收 R-134a；仅在平衡完整时记录零
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备级充注平衡、维修记录、回收质量、计算和复核签署

###### R-410A 排放到空气（`storage_refrigerant_r410a_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：R-410A 制冷剂混合物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量 + R-410A 补充量 - 期末充注量 - 回收 R-410A；不得用通用制冷剂损失代替
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备级充注平衡、维修记录、回收质量、计算和复核签署

###### R-32 排放到空气（`storage_refrigerant_r32_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：二氟甲烷（HFC-32），排放到空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量 + R-32 补充量 - 期末充注量 - 回收 R-32；不得用通用制冷剂损失代替
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备级充注平衡、维修记录、回收质量、计算和复核签署

###### R-404A 排放到空气（`storage_refrigerant_r404a_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 选定流：R-404A 制冷剂混合物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量 + R-404A 补充量 - 期末充注量 - 回收 R-404A；不得用通用制冷剂损失代替
- 数值来源模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每报告期并归一化至放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 质量证据：设备级充注平衡、维修记录、回收质量、计算和复核签署

## 7. 分配规则

| rule_id | 优先级 | 规则 | 必须披露 | source_ids |
| --- | --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 1 | 通过分离产品类别、形态、湿法路线、脱皮路线、干燥路线、杀菌路线和包装形式记录来避免分配。 | 子过程拆分、仪表或因果记录及批次链接 | `eu-pef-method-2021` |
| `alloc_route_specific_records` | 2 | 不得跨互斥路线门禁取值分配或平均；有意混合物只能由独立建模路线和披露的产量权重计算。 | 门禁取值、路线输出、权重、期间和计算 | `codex-cxs-326-2017`; `ipc-pepper-standard-2015` |
| `alloc_residue_classification` | 3 | 移除的梗、果皮、粉尘、等外胡椒和拒收产品作为废物，除非销售、规范和接收市场证明其为共产品。 | 分类依据、去向、收入或规范及质量 | `eu-pef-method-2021` |
| `alloc_physical_relationship` | 4 | 无法细分但存在因果物理关系时，按实测驱动分配共享投入，如胡椒干物质、设备运行时间、占用质量-时间或处理体积。 | 驱动、测量、公式和敏感性 | `eu-pef-method-2021` |
| `alloc_economic_fallback` | 5 | 仅在不存在可辩护物理关系时采用经济分配；使用有代表性的价格期并测试价格敏感性。 | 价格、币种、期间、来源、份额和敏感性 | `eu-pef-method-2021` |

未明确声明后果型研究时，前景清单内不得采用避免负担抵扣。外运废物处理及任何替代主张须保持为独立链接建模选择。

## 8. 前景数据采集与计算

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lot_records` | `receiving_and_lot_qualification` | 接收胡椒、取样、拒收和验收批次 | lot_record | 称量票据、供应商批次、路线门禁、水分、异物和检查 | 校准称量和受控批次记录 | kg；质量分数 | 每批 | 完整报告期 | 范围内每个接收点 | 验收加拒收质量与接收质量核算 | 衡器核查、批次谱系和检查记录 |
| `cp_energy_carrier_records` | `hot_air_drying` | 电力、蒸汽、热水、天然气、LPG、柴油和生物质 | meter_and_invoice_record | 仪表、发票、储罐或钢瓶平衡、运行时间、热值和分配驱动 | 仪表读数和原始凭证核算 | kWh；MJ；kg；m3 | 每生产期或每月 | 完整报告期 | 范围内每个用能过程 | 按声明驱动将过程记录与工厂总量核算 | 仪表核查、发票和核算工作表 |
| `cp_waste_records` | `dry_cleaning_and_grading` | 每种固体废物材料 | waste_transfer_record | 材料身份、容器皮重和毛重、去向、凭证和路线 | 校准称量和转移凭证复核 | kg | 每次外运 | 完整报告期 | 范围内每个产废过程 | 按材料、过程、路线和生产期汇总 | 衡器核查、转移凭证和路线记录 |
| `cp_threshing_records` | `threshing` | 果穗分离 | batch_record | 投入、分离浆果、梗、运行时间和电力 | 批次称量和仪表读数 | kg；h；kWh | 每批 | 完整报告期 | 范围内每条脱粒线 | 按批闭合湿质量平衡后以放行质量汇总 | 衡器和仪表核查及批次表 |
| `cp_dust_emission_records` | `milling_and_sieving` | 胡椒粉尘释放 | emission_measurement_record | 捕集效率、捕集粉尘、烟道或室内测量和运行时间 | 代表性测量或透明质量平衡计算 | kg；mg/m3；h | 每生产期或代表性监测测试 | 代表性运行条件和报告期 | 范围内每个粉尘排放点 | 测量结果仅适用于有记录的匹配运行时数 | 测试报告、采样方法和运行日志 |
| `cp_wet_pretreatment_records` | `wet_pretreatment` | 清洗、热烫和保藏处理 | batch_record | 胡椒质量、水、温度-时间曲线、化学品身份和剂量及排水 | 批次称量、计量和受控投加记录 | kg；m3；degC；min | 每批 | 完整报告期 | 范围内每个湿预处理容器或产线 | 按批核算水和化学品领用 | 校准、批次表和化学品领用记录 |
| `cp_water_and_wastewater_records` | `white_pepper_retting` | 供水和每股废水 | meter_and_sample_record | 进水表、出水表或槽体平衡、取样时间、浓度和去向 | 计量体积与时间匹配的取样 | m3；kg/m3 | 每生产期 | 含匹配采样区间的完整报告期 | 范围内每个进水和排放点 | 计算负荷前匹配样品和体积期间 | 仪表核查、取样计划、实验室结果和去向记录 |
| `cp_chemical_input_records` | `product_sanitization` | 每种清洁、预处理和杀菌化学品 | chemical_issue_record | 产品质量、活性浓度、安全数据表、稀释和领用记录 | 受控领用记录和剂量计算 | kg 产品；kg 活性物质 | 每次投加 | 完整报告期 | 范围内每个用化学品过程 | 按化学品和过程分别计算活性质量 | 产品规范、安全数据表和领用记录 |
| `cp_combustion_emission_records` | `hot_air_drying` | 现场燃料燃烧 | fuel_and_emission_record | 燃料身份和数量、低位热值、设备、因子或测试结果及计算 | 计量燃料结合特定来源因子或测量 | kg；m3；MJ；kg 污染物 | 每报告期 | 完整报告期 | 范围内每个固定燃烧装置 | 按燃料、设备和污染物分别计算 | 燃料记录、因子来源或测试报告及计算表 |
| `cp_retting_records` | `white_pepper_retting` | 白胡椒水浸沤 | batch_record | 浆果质量、注水和换水、容器体积、时长、温度、废水体积和样品结果 | 批次称量、容器记录、计量和取样 | kg；m3；h；degC | 每浸沤批次 | 完整报告期 | 范围内每个浸沤容器和排放路线 | 浸沤批次与非浸沤路线分开 | 批次表、仪表核查和实验室结果 |
| `cp_depericarping_records` | `depericarping` | 去果皮和籽粒清洗 | batch_record | 投入、籽粒、果皮、清洗水、电力和路线技术 | 批次称量和公用工程计量 | kg；m3；kWh | 每批 | 完整报告期 | 范围内每条脱皮线 | 按批闭合湿质量和干物质平衡 | 衡器和仪表核查及批次表 |
| `cp_cleaning_grading_records` | `dry_cleaning_and_grading` | 干法清理、风选、分级和分拣 | lot_record | 投入、验收胡椒、各拒收物、粉尘、电力和设备设置 | 批次称量、仪表读数和设备日志 | kg；kWh | 每批次或生产期 | 完整报告期 | 范围内每条清理和分级线 | 按批次或生产期闭合质量平衡 | 衡器和仪表核查及设备日志 |
| `cp_drying_batch_records` | `hot_air_drying` | 日晒、封闭太阳能和热风干燥 | batch_record | 投入/输出质量和水分、时间、温度、天气或干燥器设置及每种载体 | 配对批次称量、水分测试和运行日志 | kg；质量分数；h；degC；kWh；MJ | 每批 | 完整报告期和声明季节 | 范围内每种干燥路线和干燥器 | 按路线分别计算去除水和干物质损失 | 衡器、水分方法和仪器核查及批次日志 |
| `cp_milling_records` | `milling_and_sieving` | 破碎、研磨和筛分 | campaign_record | 进料、合格级分、过大返料、粉尘、拒收物、电力和设置 | 生产期称量、计量和设备日志 | kg；kWh | 每生产期和产品形态 | 完整报告期 | 范围内每条研磨和筛分线 | 按产品形态分别闭合质量平衡 | 衡器和仪表核查及设备日志 |
| `cp_sanitization_records` | `product_sanitization` | 蒸汽、干热、辐照或其他已识别处理 | treatment_batch_record | 技术、投入/输出质量、时间-剂量-温度、公用工程、拒收物和证书 | 批次称量和处理控制器记录 | kg；min；degC；处理特定剂量；kWh；MJ | 每批 | 完整报告期 | 范围内每种杀菌技术和产线 | 技术路线保持分离并核算处理质量 | 处理证书、控制器记录和衡器核查 |
| `cp_cleaning_records` | `equipment_cleaning` | 设备或房间干式和湿式清洁 | cleaning_event_record | 事件、区域或设备、水、化学品、废物、废水和生产期分配 | 受控清洁日志、计量和领用记录 | event；m3；kg | 每事件 | 完整报告期 | 范围内每个清洁区域和设备 | 通过书面生产期链接归一化 | 清洁日志、仪表核查和化学品领用记录 |
| `cp_packaging_records` | `packaging` | 灌装和每一包装层 | packaging_issue_record | 胡椒净质量、材料身份、领退质量、边角料、件数和皮重 | 校准称量和材料领退记录 | kg；item | 每形式和生产期 | 完整报告期 | 范围内每条包装线和形式 | 投入与包装品、边角料和退料核算 | 衡器核查、包装规范和领退记录 |
| `cp_storage_records` | `finished_goods_storage` | 成品贮存和放行 | lot_release_record | 批次接收、放行质量、时长、条件、损失和放行测试 | 仓库批次记录和校准称量 | kg；day；degC | 每批 | 完整报告期 | 范围内每个成品贮存地点 | 核算贮存、拒收、损失和放行质量 | 仓库记录、放行测试和衡器核查 |
| `cp_refrigerant_records` | `finished_goods_storage` | 各贮存制冷剂化学品 | equipment_charge_record | 设备台账、化学品标签、期初和期末充注量、补充、回收和维修 | 设备级制冷剂质量平衡 | kg | 至少每年及每次维修 | 完整报告期 | 范围内每个冷藏装置 | 按设备和化学品分别闭合平衡 | 设备台账、维修记录和制冷剂发票 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有前景交换量 | 每参考量交换量 = 生产期交换量 / 放行胡椒净质量 | 同一边界和期间的交换量及放行净质量 | 每 1 kg 参考产品交换量 |  |
| `calc_moisture_removed` | 干燥 | 去除水 = 湿投入 × 投入水分分数 - 干输出 × 输出水分分数 | 投入/输出质量及配对湿基水分 | kg 去除水 |  |
| `calc_dry_matter_balance` | 湿处理、脱皮、干燥和研磨 | 干物质闭合 =（输出干物质 + 废物干物质）/ 投入干物质 | 产品和残余物的配对质量及水分 | 无量纲闭合比 |  |
| `calc_wastewater_load` | 每股废水 | 污染物负荷 = 匹配废水体积 × 匹配浓度 | m3 废水和 kg/m3 浓度 | kg 污染物 | `azman-retting-water-2020` |
| `calc_fuel_emissions` | 现场燃料燃烧 | 污染物质量 = 燃料量 × 低位热值 × 已识别污染物因子，并换算单位 | 原子燃料记录、热值、因子来源和设备范围 | 每污染物行 kg CO2、CH4 或 N2O | `ipcc-stationary-combustion-2006` |
| `calc_refrigerant_loss` | 冷藏 | 损失 = 期初充注量 + 补充量 - 期末充注量 - 回收量 | 设备和化学品特定充注记录 | kg 排放到空气的制冷剂 | `eu-pef-method-2021` |
| `calc_packaging_mass` | 包装 | 包装消耗 = 领用质量 - 经核实未用退料；可重复使用份额按实测质量除以记录使用次数 | 材料身份、领退、实测质量和再用历史 | 每种包装材料 kg |  |
| `calc_weighted_mix` | 明确声明的产品混合物 | 混合交换量 = 各独立建模路线交换量 × 披露的放行质量份额之和 | 路线特定数据集及总和为 1 的份额 | 仅用于披露的有意产品混合物 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有前景批次 | 产品和路线门禁完整并链接至每个前景批次。 | 批次谱系、声明门禁向量和产品规范 |
| `dq_calibration` | 所有实测交换量 | 质量、能源、水、温度和浓度测量可追溯且适用。 | 校准或核查记录及仪器身份 |
| `dq_temporal` | 报告期 | 数据覆盖不超过 12 个月的连续代表期，除非季节性要求披露的多期模型。 | 期间、产量、停机和代表性声明 |
| `dq_mass_moisture` | 湿处理、脱皮、干燥和研磨 | 湿质量和水分在可比取样时间配对，并复核干物质闭合。 | 衡器记录、测试方法、取样时间和平衡计算 |
| `dq_route_completeness` | 声明路线向量 | 所有实际 conditional 过程及每种实际载体、材料、化学品、废物、废水、制冷剂和排放均以原子形式表示。 | 路线巡查、采购和废物核算及零/不适用理由 |
| `dq_emissions` | 直接基本流排放 | 直接粉尘、燃料燃烧污染物和制冷剂损失采用实测或透明计算记录。 | 测试报告或投入记录、因子来源、公式、单位和复核人 |
| `dq_wastewater` | 每股废水 | 废水体积和浓度样品具有有效的共同时间及流股基准。 | 仪表或槽体平衡、取样计划、实验室结果和去向 |
| `dq_packaging_refrigerant` | 包装和冷藏 | 包装层和制冷剂化学品分别识别并核算。 | 规范、领退记录、设备台账和质量平衡 |
| `dq_representativeness` | 发布数据集 | 地理、技术、产能、产品类别、形态和季节匹配声明数据集。 | 场址和产线说明、生产期清单及偏差声明 |
| `dq_source_traceability` | 外部值 | 每个外部值保留稳定来源、定位、适用性声明和转换。 | 来源 ID、URL 或 DOI、页/表/节、计算和访问记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_gate` | 产品身份和路线选择 | 错误：每个必需门禁均有一个声明值，且数据集范围匹配 CPC 3.0 23921 加工 *Piper* 属胡椒。 | `un-cpc-v3`; `codex-cxs-326-2017` |
| `val_reference_flow` | 参考产品对象 | 错误：`processed_pepper_reference_output` 恰为 1 kg 净产品，UUID 为 `99d5d3c5-870f-458f-b492-a610d37c8034`、类型 Product flow、属性 Mass；不含包装。 | `un-cpc-v3` |
| `val_no_implicit_averaging` | 互斥路线和形态 | 错误：产品类别、形态、湿处理、脱皮、干燥、杀菌和包装形式保持分离，或仅用披露的路线数据集和权重合并。 | `codex-cxs-326-2017`; `ipc-pepper-standard-2015` |
| `val_process_gate` | required 与 conditional 过程 | 错误：所有 required 过程和所有触发的 conditional 过程均存在；过程图 token 仅为 `required` 或 `conditional`。 | `ipc-pepper-standard-2015`; `fao-spice-quality-assurance` |
| `val_atomic_flows` | 原子清单 | 错误：每种实际载体、材料、化学品、包装材料、废物、废水、制冷剂和基本流排放均有独立 flow card；无集合占位。 | `fao-spice-quality-assurance`; `ipcc-stationary-combustion-2006` |
| `val_only_reference_uuid` | UUID 所有权 | 错误：参考产品流是唯一含 UUID 的 flow card；其他流 UUID 留空供作者映射。 | `un-cpc-v3` |
| `val_mass_moisture_balance` | 湿质量和干物质闭合 | 错误：过程投入、产品、废物和水分记录支持经复核的湿质量及干物质平衡，并解释偏差。 | `fao-spice-quality-assurance`; `codex-cxs-326-2017` |
| `val_final_moisture` | 放行产品水分 | 错误：最终水分用声明方法测量，并满足声明的适用等级或买方规范。 | `codex-cxs-326-2017`; `ipc-pepper-standard-2015` |
| `val_energy_separation` | 能源载体身份 | 错误：电力、蒸汽、热水、天然气、LPG、柴油、生物质及其他实际载体分别记录并保持路线特定。 | `eu-pef-method-2021` |
| `val_wastewater` | 湿法路线废水 | 错误：每股湿法过程和清洁废水均分别记录体积、去向，以及测试时匹配的污染物结果。 | `azman-retting-water-2020`; `fao-spice-quality-assurance` |
| `val_combustion_emissions` | 燃料排放 | 错误：每种现场使用燃料均有独立 CO2、CH4 和 N2O 测量或透明的燃料特定计算。 | `ipcc-stationary-combustion-2006` |
| `val_packaging` | 包装层和边角料 | 错误：每种实际初级、次级和三级包装材料及其边角料均分别记录并完成质量核算。 | `fao-spice-quality-assurance` |
| `val_refrigerants` | 制冷剂身份和损失 | 错误：每种实际制冷剂化学品均有独立补充和空气排放卡及设备级充注平衡；常温贮存记录零和不适用。 | `eu-pef-method-2021` |
| `val_allocation` | 分配层级 | 错误：首先尝试细分；任何剩余物理或经济分配均完整披露驱动、公式、来源和敏感性。 | `eu-pef-method-2021` |
| `val_temporal_completeness` | 期间核算 | 错误：投入、输出、公用工程、废物、废水、排放、包装和贮存记录覆盖同一代表性生产期。 | `eu-pef-method-2021` |
| `val_source_closure` | 证据可追溯性 | 错误：每个外部方法或数值均可解析至数据来源条目；每项推理估计均标明理由、范围、敏感性和临时性。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 单一声明加工胡椒产品和路线向量的前景加工数据集 |
| downstream_use | 仅当使用模型匹配其限定词和边界时，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 精确匹配或有明确理由匹配物种/品种、类别、形态、起始状态、湿处理、脱皮、干燥、杀菌、等级、水分、包装、地理、技术和期间 |
| excluded_use | 无限定通用胡椒、隐式黑/白/青混合、隐式整粒/粉末混合、未声明湿法或干燥路线、*Capsicum* 属辣椒或农场门原胡椒 |
| required_metadata | 参考流、门禁向量、过程图、期间、地理、产能、净输出、最终水分、分配、截断、来源 ID、不确定性和证据缺口 |
| required_quality_disclosure | 报告原始数据份额、实测与计算交换量、推理估计、质量/水分闭合、路线代表性和未解决缺口 |
| update_trigger | 产品类别、形态、供应商起始状态、湿法或脱皮路线、干燥器、杀菌、包装形式、场址或实质性数据期变化时重新编制 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, class 23921. https://unstats.un.org/unsd/classifications/Econ/CPC | 加工 *Piper* 属胡椒的官方分类身份和范围语境 |
| `codex-cxs-326-2017` | standard | Codex Alimentarius, CXS 326-2017, Standard for Black, White and Green Peppers. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B326-2017%252FCXS_326e.pdf | 产品类别、形态、质量和水分规范及产品放行门禁 |
| `ipc-pepper-standard-2015` | standard | International Pepper Community, Pepper Standard Specifications, 2015, reproduced in Codex meeting document SC03/CRD07. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FMeetings%2FCX-736-03%2FCRD%2Fsc03_CRD07x.pdf | 加工操作、产品形态、路线拆分、取样和质量控制 |
| `fao-spice-quality-assurance` | official_guidance | FAO, Quality assurance for small-scale rural food industries, Chapter 3: Spice processing. https://www.fao.org/4/v5380e/v5380e09.htm | 清洗、干燥、清理、分级、研磨、包装、粉尘控制、批次记录和工厂质量保证 |
| `azman-retting-water-2020` | literature | Azman et al., “Evaluation of Various Soaking Agents as a Novel Tool for Heavy Metal Residues Mitigation from Pepper,” *Processes* 8(10), 1255 (2020). https://doi.org/10.3390/pr8101255 ; full text: https://psecommunity.org/wp-content/plugins/wpor/includes/file/2104/LAPSE-2021.0247-1v1.pdf | 白胡椒浸沤用水比及废水 pH、COD、浊度和溶解氧证据 |
| `shango-pepper-quality-2021` | literature | Shango et al., “Post-harvest practices and loss assessment in pepper value chain,” *CABI Reviews* 16, 031 (2021). https://doi.org/10.1079/PAVSNNR202116031 ; full text: https://www.suaire.sua.ac.tz/server/api/core/bitstreams/4ec5af44-5ad3-410b-8f76-dc93e5d87340/content | 采后单元操作、替代白胡椒路线、干燥、分拣、包装、贮存和损失点 |
| `fao-gi-control-plan-2009` | official_guidance | FAO, *Linking People, Places and Products*, control-plan guidance (2009). https://www.fao.org/4/i1057e/i1057e04.pdf | 可测产品和路线限定词、可追溯性及控制计划证据 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 系统边界、上游链接、细分、分配层级、数据质量和报告 |
| `ipcc-stationary-combustion-2006` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2: Stationary Combustion. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | 燃料分列的 CO2、CH4 和 N2O 计算结构及因子可追溯性 |
