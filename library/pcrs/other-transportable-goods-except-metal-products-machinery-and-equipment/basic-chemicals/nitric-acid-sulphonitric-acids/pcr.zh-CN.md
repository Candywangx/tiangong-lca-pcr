---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.nitric-acid-sulphonitric-acids
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 氨氧化路线水溶液硝酸

## 1. 范围与适用性

本制造方法涵盖催化氨氧化、NO 氧化、水吸收及漂白制得的单一酸物种硝酸水溶液，至散装厂门验收。当前原生参考流支持工业级 60% 溶液。其他水溶液供货等级仅在另核相容原生参考流与分析基准后沿用同一方法身份；浓度或用途标签不构成独立 PCR。硝硫酸是 HNO3/H2SO4 混合物，须分账两组分及不同混配边界。排除硫酸混合物/发烟硫酸、浓缩/发烟酸、脱水/精馏、废酸再生、仅采购酸稀释/混配以及下游硝化、肥料生产及使用。仅下游用途本身不排除其他条件相容的厂门酸制造。[ec-lvic-aaf-2007; epa-ap42-nitric-1998; yara-nitric-acid]

以下清单选项是有界配置，不是通用物料单。必须声明实际治理设备、试剂、催化剂配方、公用工程来源及排出端点。不同催化剂、氢气或过氧化氢试剂、包装销售、厂内燃烧锅炉或直接水排放须另有证据的原子扩展；不把缺失配置记为零。历史描述及单厂案例不建立默认浓度、压力、转化收率、纯度、配方、能耗或治理效率。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.nitric-acid-sulphonitric-acids |
| classification_refs | CPC 3.0 34233; narrower |
| covered_products | 氨氧化制散装 HNO3 水溶液；当前参考等级 60% |
| excluded_products | 硝硫酸混合物；浓缩/发烟或再生酸；未含制造的采购酸稀释 |
| representative_product | 实测组成的工业级硝酸水溶液 |
| production_route | 铂铑催化氨氧化、NO 氧化、水吸收与漂白；记录实际单压/双压 |
| market_state | 厂门净散装液体，下游运输前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供工业硝酸水溶液化学原料 |
| How much | 1 千克验收供货净溶液 |
| How well | 声明 60% 等级、实测 HNO3 质量分数、水/杂质分账及客户验收 |
| How long or cycle | 一次厂门交付；清单覆盖代表性完整催化周期及运行状态 |
| reference_flow_link | gate_acid |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硝酸 `bfd3cad4-2d40-4fe1-998c-5ecf1ddd2520` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | HNO3 CAS 7697-37-2；供货溶液质量；声明等级及实测 HNO3 质量分数；载水及杂质；氧化/吸收压力和温度；单压/双压；催化剂组成和寿命；实际 NOx/N2O 治理及旁路；散装交付；场址/时间；公用工程定义；库存变化；接收方/分配基准 |

前景包必须声明这些限定。UUID 的浓度限定是兼容条件，不证明交付批次已经分析。不得将此 60% 身份用于 40%、50%、70% 或无水产品。载水计入参考溶液质量，并在组成账中单列，不作为第二参考输出。

原生名称写“纯度60%”，但没有单独定义该百分比或背景数据集参考量的湿/干基准；本方法的数量定义为整份供货溶液，HNO3 与水的分数均须实测，并取得供应方对等级百分比和背景整份溶液质量基准的确认后才能链接。质量属性不单独证明浓度百分比基准。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | gate_acid | 质量 | kg | 参考数量为验收整份溶液净质量，采用 cp_product；由实测质量分数确定活性 HNO3 与载水质量，杂质另列。 |
| common_denominator | all inventory rows | 质量分母 | kg | 所有交换使用同一验收溶液产量及期间，清单均按每 1 kg 参考流；销售、生产与库存变化核对后归一化。 |
| gas_reference | oxygen_supplement; natural_gas_reductant | 体积 | m3 | 保留源记录和供应方气体体积状态、组成、湿度与压缩因子；不假定标准状态或次级质量密度；仅凭有记录的相容方法换算。 |
| steam_reference | steam_import; steam_export; condensate_return; condensate_received | 质量及实测焓账 | kg | 分别记录蒸汽/水毛转移；依据实际焓及回水参考求净有用热量；身份与压力须相容，未知背景 MJ 定义阻断链接，不替代测量。 |
| species_reference | no_air; no2_air; n2o_air | 质量 | kg | 使用物种质量；NO2 当量 NOx 无实测物种划分不得填充 NO 或 NO2；NOx 不含 N2O；NOx 校验汇总留在可加基本流账之外。 |
| pressure_basis | nitric_manufacture | 压力 | Pa | 氧化与吸收压力分别记录单位、表压/绝压、大气压力及测点，温度记录明确尺度；未经核实不得把历史 bar/psia 条件直接互换或用作收率默认值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 酸生产线交付的无水氨、外部公用工程及供货催化剂；实测环境空气输入 |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | CPC34233 中氨氧化制水溶液 HNO3 子集 |
| recursive_input_rule | 采购硝酸采用独立上游数据集，不递归生成或假设无负荷；仅采购酸混配不属本制造路线 |
| upstream_dataset_requirement | 核验氨、每项公用工程、试剂及催化剂的供应方身份和参考量；外部废水及废催化剂接收方仅链接一次 |
| disclosure | 声明氧化/吸收状态、全部治理/旁路配置、公用工程交付边界、水处理及出口是否向明确用户提供有用功能 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_train` | 前景边界 | 在一个前景单元内纳入实际蒸发、过滤、压缩、氧化、热回收、冷凝、吸收、漂白、尾气治理、储存及散装装载，各阶段账独立计量。[ec-lvic-aaf-2007; epa-ap42-nitric-1998] | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `boundary_external` | 前景边界 | 外购公用工程生产及外部废物处理采用供应方单元，不把其排放重复导入酸厂直接交换；独立扩展的厂内锅炉或污水厂须有完整实测清单。 | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `boundary_actual` | 前景边界 | 报告实际正常运行、启停、旁路及催化剂老化；假定 BAT 安装或效率不能替代观测；适用交换缺失时为未决，不是零。[ec-lvic-aaf-2007] | `ec-lvic-aaf-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| nitric_manufacture | 氨氧化硝酸制造及散装交付 | required | 声明的有界路线；仅实际治理选项 | foreground_process | gate_acid |

采用一个聚合前景单元，防止吸收、储存及装载之间同一硝酸 UUID 形成多个定量参考输出；分配前保留以下实测阶段实物账：

| 阶段 | 实物链接及测量 |
| --- | --- |
| 供料准备及氧化 | 氨料至蒸气；新鲜一次空气与氧；至冷却器的实测气体、催化剂更换及反应水 |
| 回收及吸收 | 热气与回收蒸汽；冷却气/冷凝液至吸收塔；吸收水；酸至漂白；二次空气及含 NO 气体回流 |
| 尾气及公用工程 | 实际治理前后气体；试剂消耗；透平功；实物端点的外送蒸汽及冷凝水 |
| 储存及装载 | 酸转至储罐及验收交付；期初/期末库存、拒收、排水及独立测量的放空排放 |

每个内部转移在相同时间、状态和组成下，两端数量相等；内部循环不跨聚合单元，不增加外部清单。分配前以实测组成及库存变化闭合实物总质量、元素 N/O/H 及适用 C 衡算。分子 N2 和 H2O 可因反应生成或消耗，其账中应有明确反应项，不虚构外部供料；保留未反应气体、副反应/治理生成的 N2 及全部实测载气物种。其他实际化学品、催化支撑物、空气滤材废物、润滑剂或直接废水污染物须各有具体行与核验身份，不能以集合流替代。

反应诊断的主步骤为 4 NH3 + 5 O2 → 4 NO + 6 H2O；2 NO + O2 → 2 NO2；3 NO2 + H2O → 2 HNO3 + NO。NO 再氧化后，理想净制酸反应为 NH3 + 2 O2 → HNO3 + H2O。副路线包括 4 NH3 + 3 O2 → 2 N2 + 6 H2O 及 4 NH3 + 4 O2 → 2 N2O + 6 H2O；分解反应为 2 N2O → 2 N2 + O2。这些原子守恒关系描述可能的转化，不是实测收率或默认交换量；实际还原反应、泄漏及溶解物种须各有证据的贡献项。[ec-lvic-aaf-2007; epa-ap42-nitric-1998]

整份湿空气输入及整份湿尾气排出是实物流总量，其 O2/N2/H2O 和污染物组分构成嵌套组成账，不是总量之外的额外副本。环境空气内含 O2 仅计入 air_intake，只有独立外供氧进入 oxygen_supplement。整份废水转移包含载水、溶解酸、硝酸盐/亚硝酸盐及其他组分，不再把组分质量作为额外废物转移累加。直接排水须有互不重叠的整份废水和污染物测量，并另核介质/物种身份；以 N 计硝酸盐、酸当量或以 NO2 计 NOx 仅凭有证据的物种划分和分子基准换算为实际物种，以 NO2 计 NOx 不是 NO + NO2 实物质量总和。其他实际载气及溶解物种应可追溯，不强塞进 N2 或虚构的残差补水输入。

催化剂、填料、滤材及维护物料的实际毛接收量、安装量、移除量、未使用退供量、期初/期末库房库存、在役存量及损失保留在实物账中；任何实际退回或新增物料均须有具体方向交换和身份，净消耗不抹去实物转移。上游制造、维护服务或回收负荷的寿命归属采用另立的负荷账，有证据的寿命内产量及跨期存量，不代替实物毛千克量；货币服务费不是催化剂或填料质量。实物转移与上游归属负荷分别按同一验收溶液分母归一化。[ec-lvic-aaf-2007; ec-ilcd-allocation-2010]

### 过程：硝酸制造（`nitric_manufacture`）

#### 输入

##### 产品流

###### 无水氨 (`ammonia_feed`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：无水氨 `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入氧化段的净无水氨；测定纯度，保留液态/气态与蒸发负荷；不得替换为氨水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 无水氨 (`ammonia_reductant`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：无水氨 `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际使用无水氨进行尾气还原时纳入；与 ammonia_feed 分别计量，不重复计入总管量；氨水试剂须另核溶液流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 氧气 (`oxygen_supplement`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：仅实际外购气态氧富集时纳入；计量交付体积、氧纯度、温度、绝对压力、湿度和压缩因子，建立供应方立方米基准兼容性；不重复计入 air_intake 内含氧。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_volume`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 去离子水 (`absorption_water`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量外供去离子吸收水及锅炉补给水，分阶段记录后仅汇总一次；反应生成水及内部冷凝水回用不作为新增采购；其他供水等级须另核身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 自来水 (`cooling_makeup`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际自来水冷却补水时纳入；补水、排污、蒸发和库存变化分别测量；冷却循环量不是新水采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 交流电 (`electricity`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：仅在实际 CN 供电与选定原生地域相容时，在 1–35 千伏交付边界计量外购电网平均交流电毛量，按 3.6 MJ/kWh 换算；阶段分表与回收透平功分别记录，不把回收功重复计为采购电；其他供电地域、电压或技术须另核流；CN 身份不能代替未知或不同地域。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 实测压力下的外购蒸汽 (`steam_import`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：实测压力下的外购蒸汽
- 流属性/单位：质量 / kg
- 数量规则：仅实际外供蒸汽时纳入；采集质量、压力（区分表压/绝压）、温度、干度/过热度、回水质量和焓及供应方参考定义；不默认 11.0 或 0.45 MPaG，不凭数据库能量属性推断 MJ 身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 气态天然气 (`natural_gas_reductant`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：仅实际用于尾气治理的管输天然气时纳入；计量立方米，并记录温度、绝对压力、干湿基准、组成和压缩因子；核对供应方体积与化石碳基准；次级质量系数不是实测密度；氢气或其他还原剂不属于本清单配置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_volume`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 氢氧化钠 (`caustic_scrubber`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际采购工业级 95–98% 氢氧化钠用于湿洗或中和时纳入；称量整份供货物，测定活性组分，溶解水另行计量；此身份不表示任意碱液，也不规定必须使用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 铂铑氧化催化网 (`oxidation_gauze`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：铂铑氧化催化网
- 流属性/单位：质量 / kg
- 数量规则：称量一种供货铂铑网配方；采集供应方组成、贵金属分析、安装/更换质量、运行周期、寿命内产量及实际金属回收；含钯或其他配方须另设核验卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 氧化铈载钴一氧化二氮分解催化剂 (`n2o_catalyst`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：氧化铈载钴一氧化二氮分解催化剂
- 流属性/单位：质量 / kg
- 数量规则：仅实际氧化铈/钴配方的二级一氧化二氮分解催化剂时纳入；测量供货复合物质量、完整组成、寿命和更换量；历史描述的配置不是默认催化剂、配方或效率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 铁沸石尾气治理催化剂 (`tailgas_catalyst`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：铁沸石尾气治理催化剂
- 流属性/单位：质量 / kg
- 数量规则：仅实际铁沸石床层时纳入；测量供货复合物，记录供应方配方、床层功能和寿命内产量；不同 SCR/NSCR 配方须独立原子清单及身份核验，设备标签不证明催化剂等价。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 外送蒸汽用户退回的液态冷凝水 (`condensate_received`)

这是一个独立计量的液态水回流交换。

- 选定流：外送蒸汽用户退回的液态冷凝水
- 流属性/单位：质量 / kg
- 数量规则：仅实际收到明确 steam_export 用户回水时纳入；其质量、温度和焓与 steam_import 的退回水分开计量；匹配两端实物，不称作新水采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ec-lvic-aaf-2007`

##### 基本流

###### 空气 (`air_intake`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：空气 `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量跨厂界的新鲜环境空气，氧化一次空气与二次/漂白空气分别计量一次；体积转质量须有实测状态、组成和湿度；保留空气内含氮/氧/水分账，不再重复增加氧资源交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

#### 输出

##### 产品流

###### 硝酸 (`gate_acid`)

1 千克厂门验收净硝酸水溶液；选用的原生流限定工业级 60% 硝酸；采用 cp_product 建立实测分析及相容批次验收；1 千克指整份溶液，不是 1 千克纯 HNO3。

- 选定流：硝酸 `bfd3cad4-2d40-4fe1-998c-5ecf1ddd2520`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 硝酸反应热回收蒸汽 (`steam_export`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：硝酸反应热回收蒸汽
- 流属性/单位：质量 / kg
- 数量规则：仅实测向明确用户交付的有用蒸汽时纳入；保留蒸汽毛质量、品质和压力、回水链接及净交付焓；内部透平蒸汽不是此出口；不预设销售、替代锅炉或负电量抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 退回外部供汽方的液态冷凝水 (`condensate_return`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：退回外部供汽方的液态冷凝水
- 流属性/单位：质量 / kg
- 数量规则：仅实际外购蒸汽冷凝水退回供应方时纳入；测量水质量、温度及回水焓；不把回水视为新水出口，也不从蒸汽毛交换扣除回水质量；steam_export 的用户回水若进入，则另设反向原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

##### 废物流

###### 送外部处理的含硝酸水溶液废水 (`acidic_wastewater`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：送外部处理的含硝酸水溶液废水
- 流属性/单位：质量 / kg
- 数量规则：仅收集并送处理的含酸排水/排污液时纳入；称量整份液体，分析 HNO3、硝酸盐/亚硝酸盐、氨氮、溶解金属、pH 和固体，明确接收方；废水不是直接淡水基本排放；硫酸废酸和锰渣洗水身份不相容。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 送金属回收的废铂铑氧化催化网 (`spent_gauze`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：送金属回收的废铂铑氧化催化网
- 流属性/单位：质量 / kg
- 数量规则：称量实际取出的废网；分析铂/铑和污染物，保留回收接收方及服务费用；不自动给予再生含量或替代金属抵扣；仍留设备内的网不是输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 废氧化铈载钴催化剂 (`spent_n2o_catalyst`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：废氧化铈载钴催化剂
- 流属性/单位：质量 / kg
- 数量规则：仅实际移除与 n2o_catalyst 相符的复合物时纳入；独立测量质量、金属组成、污染状态及回收/处置接收方，不合并 spent_gauze。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 废铁沸石尾气催化剂 (`spent_tailgas_catalyst`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：废铁沸石尾气催化剂
- 流属性/单位：质量 / kg
- 数量规则：仅实际对应铁沸石复合物送至有记录接收方时纳入；测量组成和质量；泛用电厂催化剂或废镍催化剂不属于已确认等价物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

##### 基本流

###### 一氧化氮 (`no_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的一氧化氮质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 二氧化氮 (`no2_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的二氧化氮质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 一氧化二氮 (`n2o_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的一氧化二氮质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 氨 (`nh3air_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的氨质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 硝酸 (`acidair_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：硝酸 `1df287ba-2f10-461e-95ce-7714a3e76ac6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的硝酸质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 二氧化碳（化石源） (`co2_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的化石二氧化碳质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。 仅计实际化石碳试剂燃烧、逃逸或泄漏；上游燃料排放保留在供应方数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 一氧化碳（化石源） (`co_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的化石一氧化碳质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。 仅计实际化石碳试剂燃烧、逃逸或泄漏；上游燃料排放保留在供应方数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 甲烷 (化石源) (`ch4_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的化石甲烷质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。 仅计实际化石碳试剂燃烧、逃逸或泄漏；上游燃料排放保留在供应方数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 水蒸气 (`waterair_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的水蒸气质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。 在实物气体/水衡算中核对空气穿流与反应/治理贡献；不从仅温室气体清单推断环境质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 二氮 (`nitrogen_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的二氮质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。 在实物气体/水衡算中核对空气穿流与反应/治理贡献；不从仅温室气体清单推断环境质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### 氧 (`oxygenout_air`)

本卡表示一个跨界交换，适用条件及测量规则如下。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_emission 积分实际治理后排入室外空气的残余氧气质量，各烟囱/放空时段互不重叠，采用物种特定分析；不默认正排放量或去除率；低于检出限的结果保留删失与不确定度。 在实物气体/水衡算中核对空气穿流与反应/治理贡献；不从仅温室气体清单推断环境质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

选定的空气排放记录采用室外空气、未特指子介质；实际烟囱/近地子介质一经确定，须核验并使用相容的具体原生流，必要时拆分互不重叠排出；不得静默保留不相容子介质。进气流属于来自空气的资源，不是排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_physical` | 前景边界 | 完整实物过程图及守恒账与分配后的环境负荷账分开；分配不将实际酸或蒸汽输出及内部转移数量乘以负荷份额。 | `ec-ilcd-allocation-2010` |
| `allocation_hierarchy` | 前景边界 | 先将独立计量操作归属其功能并记录细分；剩余共同负荷逐项论证决定性的物理因果关系；若不能建立，则以同一期间各实际有用共产品的数量及价格求有记录的厂门经济价值；保留敏感性、价格源、转移价处理及零/负价说明。[ec-ilcd-allocation-2010] | `ec-ilcd-allocation-2010` |
| `allocation_exports` | 前景边界 | 蒸汽出口须有真实用户、相容品质及实测净有用交付；向大气放空是排放，不是共产品；报告毛输入与毛输出，不预设替代抵扣；系统扩展研究须另证被替代功能及数据集，不与同一抵扣的分配混用；废物处理仍为处理义务，除非另证共功能。 | `ec-ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | nitric_manufacture | 验收酸 | 批次分析/称量 | 批号；等级；净溶液质量；HNO3 分数 w；载水分数；杂质分数；库存；验收/拒收量 | 经校准净称量或质量流量计；代表性可追溯经验证的 HNO3/水/杂质分析与客户验收；核对产量、装载及库存 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_material | nitric_manufacture | 外部物料 | 计量/采购/分析 | row_id；阶段；物料身份；整份供货质量；浓度；组成；计量表；收据；库存 | 经校准称量/计量并核对收据，核对期初库存加采购减期末库存及退回量；每种物料独立 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_volume | nitric_manufacture | 供气 | 体积计量及气体分析 | row_id；体积；温度 T；绝对压力 P；干湿基准；组成；压缩因子；供应方立方米定义 | 记录状态修正体积计校准及供应方定义；保留有证据的换算与原始及换算后数量 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_air | nitric_manufacture | 环境空气 | 进气计量/气体衡算 | 一次/二次空气体积；温度；压力；湿度；组成；气体分析；内部回流 | 经校准进气计量或经验证气体衡算，区分新鲜空气与循环气并计实测湿度 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_energy | nitric_manufacture | 采购电力 | 分表与发票 | 千瓦时；电压；阶段；电网/供应方；损耗边界；透平功；日期 | 校准采购电表及互不重叠分表，核对发票和内部功，不冲抵出口信用 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_steam | nitric_manufacture | 蒸汽/水转移 | 流量与热力测量 | row_id；发送/接收端；蒸汽质量；温度；表压/绝压；品质；焓；回水质量/焓；供应方热基准 | 经校准流量计及状态测量；在适用域内经验证的 IAPWS-IF97 水/蒸汽热力方法，记录绝对压力、参考态、kJ/kg 比焓、未回水端点及互不重叠损失；匹配实物端点、交付热量及实际回水 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_catalyst | nitric_manufacture | 一种催化剂配方 | 更换及寿命记录 | row_id；供应方等级；组成；金属分析；安装/更换质量；日期；寿命内酸产量；回收 | 各供货配方及毛退回/移除量独立称量，核对库房和在役质量、安装/更换及金属损失；保留采集期间实物毛转移，并按有证据的寿命内产量另立上游寿命负荷归属 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_waste | nitric_manufacture | 一项废物 | 转移凭证及分析 | row_id；湿质量；干固体；化学/金属组成；库存；接收方；去向；处理 | 经校准称量/计量、代表性化学分析及签字转移凭证；整份废物与组分质量分别记录 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_emission | nitric_manufacture | 一种空气物种 | 分物种监测及气流记录 | row_id；CAS/物种；来源/烟囱；浓度；实际/标准气体体积；温度/压力；湿度；时长；检出限；校准；旁路；碳来源 | 经验证的物种特定监测，匹配气流基准及时间积分，覆盖启停；治理后排出与治理前诊断分开 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_balance | nitric_manufacture | 实物阶段转移 | 阶段及储罐衡算 | 时间；发送/接收端；整份湿流质量；组分组成；元素 N/O/H/C；N2/H2O 反应项；库房/在役库存；空气；公用工程；互不重叠端点 | 匹配各内部链接两端，以库存变化闭合总质量及元素 N/O/H 和适用 C，N2/H2O 物种用反应项核对；整份流与嵌套组分总量不混作可加交换或负荷分配 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |
| cp_allocation | nitric_manufacture | 有用共产品功能 | 分表、销售及因果研究 | 功能；直接负荷；共同负荷；数量；有用热量；厂门价格；期间；物理因果模型；不确定度 | 保留实物账及细分负荷归属；计算份额前证明因果关系或厂门价值并保留敏感性 | 按适用项记录 kg、m3、MJ 及实测分数 | 每批/每次转移；运行计量连续记录 | 含所有运行状态的代表性完整催化周期 | 一个声明的生产线/场址及匹配上游/接收边界 | 每 1 kg 参考流 | 校准；原件；分析质量控制；覆盖及不确定度；已核对库存 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | all inventory rows | 各实测周期实物跨界交换均除以同一实测验收净溶液产量（千克），保留原始数量、库存修正及单位；gate_acid 为 1 千克。 | cp_product; all row protocols | 各交换每 1 kg 参考流 |  |
| solution_components | gate_acid | 逐批：活性 HNO3 质量 = 整份溶液质量 × 实测 HNO3 质量分数；载水 = 整份溶液质量 × 实测水分数；杂质另列；先加总各批组分质量再求加权分数，不把组分追加为产品输出。 | cp_product | 同一验收溶液的组分账 |  |
| mass_concentration | all elementary air output rows | 浓度为 mg/m3 且与气体体积基准相同时：物种千克 = 加总（浓度 × 气体体积）/1000000；ppmv 按实测温压湿度及有记录的分子/体积方法换算，不采用未核实标准体积常数；积分后再归一化。 | cp_emission; cp_product | 物种千克每 1 kg 参考流 |  |
| steam_enthalpy | steam_import; steam_export; condensate_return; condensate_received | 逐对匹配供汽/用户，交付有用热量（MJ）= [蒸汽千克 × 供汽 h − 回冷凝水千克 × 回水 h − 未回水千克 × 有证据端点 h] / 1000 − 计量端点外损失（MJ）。h 为 kJ/kg，采用经验证且在水状态适用域内的 IAPWS-IF97 实现，由实测绝对压力、温度及蒸汽品质求得。保留其他全部实物出口和库存变化及对应能量项，不假定回水等量；声明各端点/参考态，排除端点测量已包含的损失。实物毛千克行、有用热量及相容供应方能量参考分别保留；状态或供应方基准未知时阻断该热量/链接计算。 | cp_steam; cp_product | 实测净热账；相容供应方链接 | iapws-if97-2012 |
| economic_share | shared environmental burdens | 仅未证明物理因果关系的剩余负荷：value_i = 交付数量_i × 厂门价格_i；share_i = value_i / 加总(value_j)；份额仅用于这些负荷，不乘实物输出；总价值须为正并记录零/负价处理。 | cp_allocation | 分配负荷账及敏感性 | ec-ilcd-allocation-2010 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核对实际 CAS、混合物组成、路线、状态、介质及参考属性；空 UUID 是明确债务，不证明不存在 | 供应方原件及精确身份直读 |
| dq_coverage | all inventory rows | 分别记录适用/不存在/未测量；完整数据集声明前补齐实际漏列原子交换 | cp_balance；设备及采购账 |
| dq_period | all inventory rows | 产量、催化剂更换、停机及库存的质量/能量/排放分子与溶液分母期间一致 | 可追溯原件；周期覆盖 |
| dq_limits | all source-derived statements | 保留原始压力/浓度/单位/基准及历史/案例限定，不导入通用配方、收率或排放因子 | 来源定位及前景协议 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 前景边界 | 须恰有一个 gate_acid 定量参考，整份溶液千克及相容实测 60% 等级，并核验原生属性/单位链；无同 UUID 中间物输出重复。 | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_balance` | 前景边界 | 分配前检验内部链接同量、实物总质量及元素 N/O/H 和适用 C 守恒，包含空气穿流、废物和库房/在役存量；N2/H2O 物种衡算包含反应生成/消耗项，整份湿流与嵌套组分总量不得重复相加；按测量不确定度调查残差，不虚构固定闭合容差。 | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_species` | 前景边界 | NO、NO2、N2O 质量独立；不将 NOx 汇总加至 NO/NO2，不假定 NO2 当量划分；基准未知保留未决；硝酸雾是特定 HNO3 质量，不自动作为颗粒物；嵌套粒径区间不得累加。 | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_utilities` | 前景边界 | 核验气体立方米状态与供应方参考、实际蒸汽压力/焓/回水及电网电压；仅 UUID 身份不能建立上游数据集数量基准。 | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_configuration` | 前景边界 | 实际试剂、催化剂、过滤废物、直接液态排放或包装组件缺独立分账时拒绝完整清单声明；记录真实治理、旁路及全部废物接收方；身份读取成功不代表完整工厂数据集。 | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_allocation` | 前景边界 | 共产品实物数量保持不变；核对分配负荷加总还原总负荷并排除重复出口/替代抵扣；批准前独立裁定科学适用性。 | `ec-ilcd-allocation-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际声明的水溶液硝酸路线及相容供货等级、公用工程和治理配置 |
| excluded_use | 全 CPC 方法声明、混合物、其他制造路线、场址因子移植或假定 BAT 性能 |
| required_metadata | 全部参考限定；完整实物与分配账；来源定位；供应方参考；条件行覆盖 |
| required_quality_disclosure | 测量不确定度、检出限、周期覆盖、空身份、供应方基准缺口及独立审查状态 |
| update_trigger | 路线、浓度/等级、催化剂、治理、压力、公用工程或接收方变化及新反证 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| ec-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, chapter 3, §§3.2–3.5; printed pp.96–99, 124, 127, 132, 140–141. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf | 路线、热回收、不同条件催化剂及治理；保留原件限定，不采用工厂数量 |
| epa-ap42-nitric-1998 | official_guidance | US EPA, AP-42 §8.8 Nitric Acid, February 1998, §§8.8.2–8.8.3, Figures 8.8-1/2 and table footnotes. https://www.epa.gov/sites/default/files/2020-09/documents/8.8_nitric_acid.pdf | 稀酸与高浓度路线、阶段图及具体空气物种；历史因子和纯酸基准不是默认值 |
| yara-nitric-acid | official_guidance | Yara International, Nitric Acid, manufacturer page, section How we produce Nitric Acid. https://www.yara.com/industrial-nitrogen/base-chemicals/nitric-acid/ | 生产者独立确认氨氧化/水吸收与后续浓缩区别；不推断等级合格证或配方 |
| ec-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for LCA—Detailed guidance, first edition March 2010, §7.9.3, PDF pp.277–288 (printed pp.257–268), including §7.9.3 allocation applicability and market-price fallback. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅通用因果/经济分配层级；不提供硝酸或蒸汽分配因子 |
| iapws-if97-2012 | official_guidance | IAPWS R7-97(2012), Revised Release on the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam; §§1–3, 5–8 and 12, including applicable regions, reference convention and uncertainty. https://iapws.org/technical-guidance/release/IF97-Rev.download | 实测状态下经验证的纯水/蒸汽比焓方法；不默认压力、蒸汽量或工厂热衡算 |
