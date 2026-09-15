---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-3ab8599b
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 除冷轧外未经进一步加工的宽度小于600毫米的合金钢（硅钢或高速钢除外）平板轧材

## 1. 范围与适用性

本 PCR 适用于最终宽度小于600毫米、最终冶金加工状态为冷轧且未涂覆的合金钢扁平轧材，但不包括硅电工钢和高速钢。对于以钢卷、成捆产品或定尺材供货的全硬态、退火态或平整轧制态带钢，只要产品没有因超出冷轧直接关联工序的加工而成为进一步加工产品或涂覆产品，均在本 PCR 范围内。

前景边界始于接收热轧合金钢带或外部酸洗的热轧合金钢带，终于生产厂大门处完成包装的冷轧窄幅产品净合格量。炼钢、连铸、热轧、上游酸液和公用工程生产、进厂运输、金属涂层、有机涂层、电镀、制成零部件、配送、使用和寿命终止均不属于前景边界；研究纳入这些环节时须链接相应数据集。过程顺序依据官方黑色金属加工文件对冷轧及其直接关联前后处理工序的说明（`ec-jrc-fmp-bref-2022`、`eu-2022-2110-ferrous-metals-bat`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-3ab8599b |
| classification_refs | CPC 3.0：41224（`unsd-cpc-3-0-structure-2025`） |
| covered_products | 宽度小于600毫米、未经冷轧以外进一步加工的合金钢带材或板材，但不包括硅电工钢或高速钢；声明后可包括全硬态、退火态或平整轧制态。 |
| excluded_products | 硅电工钢；高速钢；由单独高合金产品身份表示的不锈钢；宽度不小于600毫米的产品；仅热轧产品；复合、镀层、金属涂覆、有机涂覆、压花、冲孔、成形或其他进一步加工产品。 |
| representative_product | 卷状未涂覆冷轧低合金钢带，最终宽度小于600毫米，并声明钢号、厚度、硬度状态、表面质量和边部状态。 |
| production_route | 对接收的热轧或外部酸洗热轧合金钢带进行冷减薄，可按条件包括表面准备、退火、平整轧制、纵剪、涂油和包装。 |
| market_state | 冷轧厂大门处的未涂覆净合格带钢，以钢卷、成捆产品或定尺材供货；声明干燥或涂油状态及包装配置。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产最终状态为冷轧、最终宽度小于600毫米且未涂覆的合金钢扁平轧材，但不包括硅电工钢和高速钢。 |
| How much | 生产厂大门处1,000 kg净合格产品，不含可拆卸运输包装。 |
| How well | 满足所声明钢号和成分、最终厚度与宽度公差、硬度或退火状态、表面质量、板形、边部状态及涂油状态。 |
| How long or cycle | 厂门处一个生产批次；本生产参考流不包括使用寿命。 |
| reference_flow_link | `final_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 除冷轧外未经进一步加工的宽度小于600毫米的合金钢（硅钢或高速钢除外）平板轧材 `aab426b1-1284-44df-950f-75d77f202b1a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢号/牌号与合金类别；声明化学成分或适用规范；全硬态、退火态或平整轧制态；最终厚度和宽度；钢卷、成捆产品或定尺材形式；规定时的表面质量与粗糙度；边部状态；干燥或涂油状态；不含可拆卸包装的合格产品质量；生产场址与地域；报告期；所纳入的表面准备、退火、平整轧制、纵剪和包装路线 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和钢材中间品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用净合格钢材质量；排除可拆卸包装、托盘、芯轴和周转架。将完整清单归一化至1,000 kg参考产品。 |
| `steel_mass_balance` | 钢材投入、产品、废钢、污泥所含铁和可计量损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按各过程核对同牌号钢材质量，并解释可计量损失、库存变化和未闭合差异。不得重复计算内部回用带钢。 |
| `energy_accounting` | 外购电力和燃料 | Energy | MJ | 保留所购物质载能体及计量表基础。仅在报告换算时使用1 kWh = 3.6 MJ；不得把电力与燃料合并为一个能源行。 |
| `gas_reference_conditions` | 按体积记录的天然气、氢气和氮气 | Volume | m3 | 声明温度、绝对压力、干湿基准、纯度以及适用时的低位/高位热值约定；把所报体积换算至声明的基准条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收热轧或外部酸洗热轧合金钢带，并声明钢号、质量、厚度、宽度、表面/氧化皮状态、既往酸洗状态及上游数据集引用。 |
| starting_condition_role | 前景投入及下游加工起点。 |
| product_classification_scope | 最终状态为冷轧、最终宽度小于600毫米、未涂覆且非硅电工钢、非高速钢的合金钢扁平轧材。 |
| recursive_input_rule | 已属于本冷轧产品类别的外购投入仅作为带自身数据集的上游产品投入记录一次，不得通过虚构的重复冷轧链再处理。 |
| upstream_dataset_requirement | 对场外发生的炼钢、铸造、热轧、外部酸洗、外购化学品、电力、燃料、气体、水、包装、运输和废物处理，链接与钢号及路线相符的数据集。 |
| disclosure | 声明原料状态、所纳入单元操作、酸洗化学体系、轧机类型、退火炉及气氛、平整轧制和纵剪、涂油、成材率、内部回用、废物去向、公用工程供应、排放控制系统、产品形式及截断决定。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_01_foreground_operations` | 前景冷轧带钢生产 | 纳入声明产品实际使用的全部厂内表面准备、冷减薄、条件性退火、平整/光整轧制、宽度控制、涂油、精整、包装、排放控制及直接关联的废水处理。 | `ec-jrc-fmp-bref-2022`; `eu-2022-2110-ferrous-metals-bat` |
| `sb_02_upstream_links` | 外购投入和外部操作 | 炼钢、铸造、热轧、外部酸洗、外购公用工程与材料、运输和场外处理须用明确的上游数据集表示，不得无说明省略。 |  |
| `sb_03_direct_releases` | 基本流和废物流 | 记录计量的直接排放及每项单独管理的废物流，不得把酸液、废水、污泥、油、废钢或空气污染物合并成集合行。 | `eu-2022-2110-ferrous-metals-bat` |
| `sb_04_excluded_further_work` | 下游加工 | 排除金属或有机涂覆、电镀、成形、制造、配送、使用和寿命终止；若研究扩展边界，须单独报告。 | `unsd-cpc-3-0-structure-2025` |
| `sb_05_recursive_inputs` | 同类别外购冷轧带钢 | 使用供应的上游数据集一次并披露递归中断点；不得重建未经核实的冷轧历史。 |  |

## 6. 过程清单结构

官方黑色金属加工证据将冷轧定义为不预热而通过轧辊压缩，并将酸洗、轧制、退火、平整/光整轧制和精整列为低合金钢与合金钢的通常顺序。具体过程适用性仍取决于产品和场址（`ec-jrc-fmp-bref-2022`、`eu-2022-2110-ferrous-metals-bat`）。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | 表面准备、酸洗和漂洗 | conditional | 接收原料需在厂内除鳞、脱脂、酸洗或漂洗时纳入；仅有已证明的外部预处理原料或已证明的替代过程时方可省略。 | 前景调理 | 转至冷轧的酸洗带钢质量 |
| `cold_rolling` | 冷减薄 | required | 始终纳入在不预热条件下降低带钢厚度的轧机操作。 | 前景生产 | 全硬冷轧带钢输出质量 |
| `annealing` | 退火 | conditional | 声明产品为退火态或精整前需要热处理时纳入；经核实为全硬态交付时排除。 | 前景热处理 | 退火带钢输出质量 |
| `finishing_width_control` | 平整轧制、纵剪和精整 | required | 纳入实际精整顺序；仅在实际实施时纳入平整轧制、纵剪和涂油行。 | 前景精整 | 包装前窄幅成品带钢质量 |
| `packaging_release` | 包装与产品放行 | required | 纳入合格质量确定及实际钢卷、成捆产品或定尺材包装配置。 | 前景产品放行 | 1,000 kg净合格产品 |

### 过程：表面准备、酸洗和漂洗（`surface_preparation`）

#### 输入

##### 产品流

###### 接收热轧合金钢带（`hot_rolled_alloy_steel_strip`）

记录进入厂内表面准备且牌号相符的热轧原料。

- 选定流：非硅电工钢、非高速钢的热轧合金钢带
- 流属性/单位：Mass / kg
- 数量规则：分配给声明产品批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`

###### 酸洗线电力（`pickling_electricity`）

记录分配给表面准备的入口处理、除鳞、槽体、泵、漂洗、干燥、通风和控制设备计量电力。

- 选定流：按声明电压和电网地域供应给酸洗线的电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给加工产品批次的外购电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`

###### 酸洗和漂洗用水（`pickling_water`）

记录跨越过程边界的补充水和直流水，扣除单独记录的内部回用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给加工产品批次的实测购水或取水质量；若按体积计量，则按声明的密度和基准条件换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`

###### 酸洗用盐酸（`hydrochloric_acid`）

仅在盐酸酸洗路线纳入，并声明交付浓度。

- 选定流：声明浓度的盐酸溶液
- 流属性/单位：Mass / kg
- 数量规则：产品批次消耗的采购并经库存调整的溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

###### 酸洗用硫酸（`sulfuric_acid`）

仅在硫酸酸洗路线纳入，并声明交付浓度。

- 选定流：声明浓度的硫酸溶液
- 流属性/单位：Mass / kg
- 数量规则：产品批次消耗的采购并经库存调整的溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

###### 碱性脱脂用氢氧化钠（`sodium_hydroxide`）

仅在使用碱性脱脂槽时纳入，并声明溶液浓度。

- 选定流：声明浓度的氢氧化钠溶液
- 流属性/单位：Mass / kg
- 数量规则：产品批次消耗的采购并经库存调整的溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酸洗合金钢带（`pickled_strip_output`）

记录转至冷减薄的清洁内部带钢，并保持钢号和表面状态信息。

- 选定流：非硅电工钢、非高速钢的酸洗合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：酸洗、漂洗和干燥后的实测转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`

##### 废物流

###### 废盐酸酸洗液（`spent_hydrochloric_acid`）

仅在盐酸路线纳入；记录单独管理并送往回收或处理的废溶液。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：经储存变化和已记录厂内再生调整的实测外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

###### 废硫酸酸洗液（`spent_sulfuric_acid`）

仅在硫酸路线纳入；记录单独管理并送往回收或处理的废溶液。

- 选定流：废硫酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：经储存变化和已记录厂内再生调整的实测外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

###### 氢氧化铁处理污泥（`iron_hydroxide_sludge`）

记录离开关联酸洗废水处理系统的脱水含铁污泥。

- 选定流：酸洗废水处理产生的氢氧化铁污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量和干质量，并声明干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

###### 酸性酸洗废水（`acidic_wastewater`）

记录离开前景处理边界的水相废物流；不得与废酸或污泥合并。

- 选定流：合金钢酸洗和漂洗产生的酸性废水
- 流属性/单位：Volume / m3
- 数量规则：分配给加工产品批次的计量排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

##### 基本流

###### 排入空气的氯化氢（`hydrogen_chloride_air`）

盐酸酸洗经监测或场址物料衡算证明净化后有排放时纳入。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给产品批次的烟囱排放和量化无组织排放监测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

###### 排入空气的二氧化硫（`sulfur_oxides_air`）

硫酸酸洗监测二氧化硫时纳入；不得将本行用于其他硫氧化物种类或按不同基准表达的汇总指标。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给产品批次的监测排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg酸洗带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-2022-2110-ferrous-metals-bat`

### 过程：冷减薄（`cold_rolling`）

#### 输入

##### 产品流

###### 酸洗带钢投入（`pickled_strip_input`）

记录转入冷减薄轧机的酸洗合金钢带。

- 选定流：非硅电工钢、非高速钢的酸洗合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：分配给声明产品批次的实测转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`

###### 冷轧电力（`rolling_electricity`）

记录轧机主传动、液压、冷却液循环、抽风及直接关联设备的计量电力。

- 选定流：按声明电压和电网地域供应给冷轧机的电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给轧制产品批次的外购电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`

###### 轧制润滑剂（`rolling_lubricant`）

按实际配方记录轧制油或乳化液浓缩物补加量，而非循环槽内总存量。

- 选定流：冷轧油 `a9417245-6f45-4df3-8f04-227ed8a1be58`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购补加量加期初库存减期末库存和回收外运量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 全硬冷轧带钢（`full_hard_strip_output`）

记录可选退火或最终精整前的冷减薄带钢。

- 选定流：非硅电工钢、非高速钢的全硬冷轧合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：冷减薄后的实测转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`

##### 废物流

###### 合金钢轧制废料（`steel_scrap_rolling`）

记录冷减薄时去除的同牌号头尾料、断带料和缺陷废料。

- 选定流：冷轧产生的清洁合金钢废料
- 流属性/单位：Mass / kg
- 数量规则：分配给产品批次的称量废料，扣除有记录的内部返炉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`

###### 废轧制油或乳化液（`waste_rolling_oil`）

记录从循环系统排出并送往外部回收或处理的废润滑剂。

- 选定流：声明含水率的废冷轧油或乳化液
- 流属性/单位：Mass / kg
- 数量规则：经储存变化调整的废物外运实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`

##### 基本流

###### 排入空气的轧制油雾（`oil_mist_air`）

记录收集和净化后排放的轧制油雾监测值。

- 选定流：排入空气中声明区室的轧制油雾
- 流属性/单位：Mass / kg
- 数量规则：分配给产品批次的有组织排放和量化无组织排放监测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg全硬带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling`
- 来源：`eu-2022-2110-ferrous-metals-bat`

### 过程：退火（`annealing`）

#### 输入

##### 产品流

###### 退火用全硬带钢（`full_hard_strip_input`）

实施热处理时纳入，并记录进入退火炉的全硬带钢。

- 选定流：非硅电工钢、非高速钢的全硬冷轧合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：分配给退火产品批次的炉料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

###### 退火用天然气（`annealing_natural_gas`）

退火炉消耗气态天然气时纳入；披露供应地域、热值基准和体积基准条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配给退火产品批次的贸易结算表或校准分表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

###### 退火电力（`annealing_electricity`）

记录炉体传动、风机、控制、气氛处理及采用电加热时的计量电力。

- 选定流：按声明电压和电网地域供应给退火工序的电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给退火产品批次的外购电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

###### 保护气氛氢气（`protective_hydrogen`）

声明退火气氛使用外供或现场制取氢气时纳入，并声明纯度、压力和供应路线。

- 选定流：声明纯度和压力的工业氢气
- 流属性/单位：Volume / m3
- 数量规则：按声明基准条件计量并分配给退火批次的补充气体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

###### 保护气氛氮气（`protective_nitrogen`）

声明退火气氛使用外供或现场制取氮气时纳入，并声明纯度、压力和供应路线。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按声明基准条件计量并分配给退火批次的补充气体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火冷轧带钢（`annealed_strip_output`）

记录转入精整的热处理带钢，并声明钢号、硬度状态和表面状态。

- 选定流：非硅电工钢、非高速钢的退火冷轧合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：退火后的实测转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

##### 废物流

##### 基本流

###### 退火产生的化石源二氧化碳（`annealing_co2_fossil`）

记录厂内退火燃烧产生的直接化石源二氧化碳，不声明超出已核实流所支持的更具体空气区室。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给退火产品批次的场址排放记录或经核实炉级碳平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`

###### 退火产生的氮氧化物（`annealing_nox`）

记录燃烧产生的氮氧化物监测种类，并说明是否以NO2计。

- 选定流：排入空气中声明区室的实测氮氧化物种类
- 流属性/单位：Mass / kg
- 数量规则：分配给退火产品批次的烟囱排放监测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg退火带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing`
- 来源：`eu-2022-2110-ferrous-metals-bat`

### 过程：平整轧制、纵剪和精整（`finishing_width_control`）

#### 输入

##### 产品流

###### 直接进入精整的全硬带钢（`full_hard_finish_input`）

仅在经核实绕过退火的全硬态交付路线纳入。

- 选定流：非硅电工钢、非高速钢的全硬冷轧合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：分配给全硬成品批次的实测转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg窄幅成品带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`

###### 进入精整的退火带钢（`annealed_finish_input`）

仅在声明的退火态或平整轧制态交付路线纳入。

- 选定流：非硅电工钢、非高速钢的退火冷轧合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：分配给退火成品批次的实测转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg窄幅成品带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`

###### 精整线电力（`finishing_electricity`）

记录实际实施的平整轧制、纵剪、矫平、检验、涂油及直接关联搬运的计量电力。

- 选定流：按声明电压和电网地域供应给精整工序的电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给成品批次的外购电力计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每kg窄幅成品带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`

###### 防锈油（`corrosion_protection_oil`）

仅在合格带钢涂油时纳入，并声明配方和残余涂油量基准。

- 选定流：声明配方的防锈油
- 流属性/单位：Mass / kg
- 数量规则：分配给涂油产品批次的采购并经库存调整的油耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg窄幅成品带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧窄幅成品带钢（`finished_narrow_strip_output`）

记录完成必要平整轧制、纵剪、矫平、检验和涂油后、添加可拆卸包装前的合格带钢。

- 选定流：包装前宽度小于600毫米的未涂覆冷轧合金钢成品带钢
- 流属性/单位：Mass / kg
- 数量规则：转至包装的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg窄幅成品带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`

##### 废物流

###### 合金钢切边和切头尾料（`steel_scrap_finishing`）

记录精整期间去除的清洁切边、切头尾和检验不合格合金钢废料。

- 选定流：精整产生的清洁合金钢切边和切头尾料
- 流属性/单位：Mass / kg
- 数量规则：分配给产品批次的称量废料，扣除有记录的内部返炉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每kg窄幅成品带钢输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`

##### 基本流

### 过程：包装与产品放行（`packaging_release`）

#### 输入

##### 产品流

###### 送往包装的成品带钢（`finished_strip_packaging_input`）

记录转入产品放行和包装的合格冷轧窄幅成品带钢。

- 选定流：包装前宽度小于600毫米的未涂覆冷轧合金钢成品带钢
- 流属性/单位：Mass / kg
- 数量规则：转至包装的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`

###### 钢质捆带（`steel_strapping`）

记录随声明钢卷、成捆产品或定尺材配置离厂的钢质捆带。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给放行产品批次的包装领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`

###### 防护包装纸（`paper_wrapping`）

仅在防护纸随产品离厂时纳入，并声明纸种和水分基准。

- 选定流：声明纸种的防护包装纸
- 流属性/单位：Mass / kg
- 数量规则：分配给放行产品批次的包装纸领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧合金钢净合格产品（`final_product_output`）

记录不含可拆卸包装的合格钢材质量，并保留全部必需产品限定信息。

- 选定流：除冷轧外未经进一步加工的宽度小于600毫米的合金钢（硅钢或高速钢除外）平板轧材 `aab426b1-1284-44df-950f-75d77f202b1a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测净合格产品质量归一化为恰好1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每1,000 kg参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01_subdivision` | 所有前景操作 | 优先利用过程计量表、生产工单、钢号生产周期和批次记录进行物理细分。报告共用资源的分配键及分配给参考产品的份额。 |  |
| `allocation_02_steel_scrap` | 合金钢废料 | 在产生过程记录废料质量和去向。不得在前景过程中扣除“避免生产原生钢”信用；在下游采用研究声明的回收方法，并防止内部返炉废钢重复计算。 |  |
| `allocation_03_recovered_acid_oil` | 回收酸和油 | 仅把实测返回同一过程的物质从补加消耗中扣除。作为产品或废物输出的回收物仍须明确记录；厂界外分配或替代须另行披露。 | `eu-2022-2110-ferrous-metals-bat` |
| `allocation_04_shared_treatment` | 共用废水、废气和公用工程系统 | 采用实测流量、污染物负荷、能量需求或其他因果物理驱动分配共用处理和公用工程负荷；仅在无更合理因果指标时采用质量分配并记录理由。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_surface_preparation` | `surface_preparation` | 原料、电力、水、槽液化学品、酸洗输出、废酸、污泥、废水、HCl和硫氧化物 | 地磅/钢卷台账；计量表；采购和槽液库存；废物联单；实验室和排放记录 | 批次号；钢号；投入/输出质量；表读数；化学品身份和浓度；槽液期初/期末库存；废物质量/体积；干固体；排放体积；污染物结果；运行小时 | 将校准计量表和秤记录与生产及环境记录核对 | kg；m3；MJ | 每批或每班，按月核对 | 有代表性的连续12个月或披露的完整较短生产周期 | 为产品服务的全部厂内表面准备及关联处理单元 | 汇总合格记录，调整库存和内部回用，按实测批次或因果驱动分配，再按输出归一化 | 校准证书；发票；库存核对；实验室QA/QC；废物联单；监测报告 |
| `cp_cold_rolling` | `cold_rolling` | 酸洗投入、电力、润滑剂、全硬输出、废料、废油和油雾 | 钢卷台账；电力分表；润滑剂库存；废料秤；废物联单；空气监测记录 | 卷号；钢号；投入/输出质量；电力；润滑剂采购/库存/回收；废料质量；废油质量和含水率；油雾结果；运行小时 | 将轧机生产周期记录和校准计量表与合格输出核对 | kg；MJ | 每卷或每个生产周期，按月核对 | 有代表性的连续12个月或披露的完整较短生产周期 | 全部轧机机架和直接关联系统 | 将直接记录分配到批次；按因果关系分配共用记录；按输出归一化 | 计量表和秤校准；库存平衡；废物联单；监测QA/QC |
| `cp_annealing` | `annealing` | 全硬投入、天然气、电力、气氛气体、退火输出、化石源CO2和氮氧化物 | 装炉台账；燃料和电力表；气体表；输出台账；环境清单和烟气监测 | 炉次号；钢号；投入/输出质量；气体体积和基准条件；热值；电力；H2/N2体积和纯度；CO2质量；NOx种类和质量；运行小时 | 将炉次生产周期记录与计量公用工程和监测排放核对 | kg；m3；MJ | 每炉次或每个生产周期，按月核对 | 有代表性的连续12个月或披露的完整较短生产周期 | 为产品服务的全部退火炉和气氛系统 | 直接分配炉次记录；按炉时、质量或实测能量分配共用表；按输出归一化 | 计量表校准；燃料证书；气氛气体证书；排放QA/QC；质量核对 |
| `cp_finishing` | `finishing_width_control` | 全硬/退火投入、电力、油、成品输出和钢质切边料 | 钢卷路线与检验台账；电力分表；油库存；输出秤和废料秤 | 路线状态；卷号；钢号；投入/输出质量；最终宽度/厚度；电力；领用油；废料质量；去向 | 核对路线、检验合格和实测物料/能源记录 | kg；MJ | 每卷或每批，按月核对 | 有代表性的连续12个月或披露的完整较短生产周期 | 实际使用的平整机、纵剪机、矫平、检验和涂油单元 | 分开全硬和退火路线；分配实际操作；按合格输出归一化 | 校准；路线记录；检验证书；油库存核对；废料票据 |
| `cp_packaging_release` | `packaging_release` | 成品投入、包装组件和参考产品 | 生产放行记录；检定秤；包装物料清单 | 批次号；产品限定信息；未包装钢材质量；包装后总质量；捆带质量；纸质量；包装配置；放行日期 | 分别称量合格钢材和可拆卸包装并核对物料清单 | kg | 每个放行批次 | 与前景生产相同期间 | 产品全部包装和放行工位 | 汇总净合格钢材；单独报告包装；将钢材输出归一化至1,000 kg | 秤校准；装箱单；物料清单；检验和放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01_normalization` | 每项清单数量 | 归一化数量 = 合格过程数量 / 合格过程输出质量 × 1,000 kg，并声明过程输出分母 | 采集数量；合格过程输出质量 | 每1,000 kg参考产品的数量或可追溯过程输出比值 |  |
| `calc_02_inventory_adjustment` | 化学品、油、气体和包装 | 消耗量 = 采购量 + 期初库存 - 期末库存 - 实测返回量或外运量；记录库存边界和期间匹配 | 采购、库存、返回和外运记录 | 净消耗量 |  |
| `calc_03_steel_reconciliation` | 每个钢材加工步骤 | 钢材投入质量 = 合格输出 + 单独称量废料 + 实测其他含钢输出 + 库存变化 + 已解释测量差异 | 钢卷质量；输出质量；废料和污泥记录；库存变化 | 已核对质量平衡说明 |  |
| `calc_04_energy_conversion` | 所报电力 | MJ = 计量kWh × 3.6；保留原始kWh记录；无声明基准条件和热值时不得换算天然气体积 | kWh；载能体元数据 | MJ电力 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01_product_identity` | 参考产品和钢材中间品 | 保留钢号、成分/规范、厚度、宽度、硬度/退火状态、表面质量、边部、涂油和批次可追溯性；核实最终宽度小于600毫米且产品不是硅电工钢或高速钢。 | 材质证明；检验和放行记录；产品规范 |
| `dq_02_completeness` | 过程图和清单 | 覆盖实际使用的每项单元操作，并将钢材质量、公用工程、化学品、包装、废物和监测排放核对至同一报告期。 | 工艺路线；计量表清单；质量平衡；完整性核对表 |
| `dq_03_temporal_site` | 前景记录 | 优先采用有代表性的连续12个月；披露较短生产周期、停机、异常事件、外包工序及所有代表场址。 | 有日期的生产和环境记录；场址清单 |
| `dq_04_measurement` | 计量表、秤和实验室结果 | 使用校准设备和有记录的采样/分析方法；保留原始单位、基准条件、检出限及低于检出限处理。 | 校准证书；实验室QA/QC；监测计划 |
| `dq_05_supplier_models` | 上游数据集 | 匹配地域、技术、产品状态、浓度、纯度、电力电压和废物去向；披露重要代理及其贡献。 | 供应商声明；数据集元数据；代理清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01_identity` | 参考产品 | 若最终宽度不小于600毫米、产品为硅电工钢或高速钢、最终状态超出冷轧，或缺失必需钢号/状态/表面限定信息，则完整性校验失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_02_reference_amount` | 参考流 | 确认参考输出恰为1,000 kg净合格钢材，并单独报告可拆卸包装。 |  |
| `validation_03_route` | 过程纳入 | 必须纳入冷轧和产品放行；省略表面准备或退火须有证据，并记录实际平整轧制、纵剪、涂油和外包操作。 | `ec-jrc-fmp-bref-2022` |
| `validation_04_atomicity` | 清单行 | 拒绝合并的载能体、材料、废物、废水/污泥或空气排放标签；每项交换须保持为一个具体流并声明路线条件。 |  |
| `validation_05_mass_balance` | 含钢流 | 每个纳入过程须有质量核对；超出场址声明测量不确定度的差异须调查。 |  |
| `validation_06_uuid_readiness` | Tiangong 引用 | UUID 空缺行作为未解决审查事项；不得以已拒绝的通用交流电流或其他代理替代准确的场址/产品状态。 |  |
| `validation_07_source_and_range` | 外部约束数量 | 拒绝由少于两个相互独立、经核实原文且边界兼容的来源推断经验范围；范围证据未解决时保留前景采集要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成方法审查、解决UUID或明确接受例外并记录前景数据质量审查后，可作为`secondary_dataset`或`background_dataset` |
| downstream_use | 用于声明冷轧窄幅合金钢产品的产品流、单元过程、聚合过程和生命周期模型投影 |
| allowed_use | 产品与数据集所表示的合金排除项、最终冷轧状态、宽度小于600毫米、钢号、硬度状态、表面、地域、技术和厂门边界相符的研究 |
| excluded_use | 硅电工钢；高速钢；声明身份未表示的不锈钢或其他高合金产品；宽度不小于600毫米；仅热轧、涂覆、镀层、成形或其他进一步加工产品；未披露的全球通用替代 |
| required_metadata | PCR id和版本；产品限定信息；参考数量；场址/地域；报告期；原料状态和上游数据集；过程路线；酸洗化学体系；轧机和退火技术；能源与气体条件；分配；废料和废物去向；排放控制；包装；截断；未解决UUID或代理 |
| required_quality_disclosure | 时间、地域和技术代表性；初级数据占比；计量表和秤覆盖率；质量平衡闭合；分配份额；缺失和估算记录；检出限处理；供应商数据集质量；范围证据局限 |
| update_trigger | 钢号组合、宽厚范围、原料状态、酸洗化学体系、轧机或炉型、退火气氛、电力或燃料供应、成材率、排放控制、废物路线、包装、场址或报告期发生重大变化；或引用UUID得到解决/发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类3.0版结构》，2025年6月30日，CPC 41224。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | 官方产品身份、合金排除项、最终冷轧状态和宽度阈值。 |
| `ec-jrc-fmp-bref-2022` | official_guidance | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022年发布。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry（检索日期：2026-09-03） | 下游钢铁加工边界和通常冷轧过程顺序。 |
| `eu-2022-2110-ferrous-metals-bat` | standard | 欧盟委员会实施决定(EU) 2022/2110：黑色金属加工行业最佳可行技术结论。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110（检索日期：2026-09-03） | 冷轧定义；直接关联的酸洗、退火、涂油、燃烧和处理操作；按化学品区分的废物、排放、监测和质量控制。 |
