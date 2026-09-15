---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-e89d565b
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 宽度小于600毫米、除热轧外未经进一步加工的合金钢（硅电工钢或高速钢除外）平板轧材

## 1. 范围与适用性

本 PCR 适用于成品宽度小于600毫米且除热轧外未经进一步加工的合金钢平板轧材出厂生产。覆盖满足该边界的卷材、带材、薄板或定尺产品；不锈钢及其他合金钢牌号在满足上述产品状态时均在范围内。不包括非合金钢、硅电工钢、高速钢、宽度为600毫米及以上的产品、冷轧产品，以及随后经过酸洗、包覆、镀层、涂层、抛光或其他进一步加工的产品。所声明的数据集必须识别牌号族，不得以低合金钢证据替代不锈钢或其他高合金钢。

模型采用从摇篮到工厂大门的边界。前景记录覆盖所选炼钢与浇铸路线以及热轧线；外购材料和能源的上游生产与运输通过地域和技术具有代表性的数据集连接。使用阶段和寿命终止阶段不计入所报告的从摇篮到工厂大门结果，仅可作为独立情景另行报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-e89d565b |
| classification_refs | CPC 3.0: 41214 |
| covered_products | 成品宽度小于600毫米、除热轧外未经进一步加工的合金钢平板轧材，包括满足条件的不锈钢及其他合金钢牌号 |
| excluded_products | 非合金钢；硅电工钢；高速钢；宽度为600毫米及以上；冷轧、酸洗、包覆、镀层、涂层、抛光或其他进一步加工的产品 |
| representative_product | 钢厂大门处、宽度小于600毫米的无涂层热轧合金钢带 |
| production_route | 声明的高炉—转炉或电弧炉炼钢路线，配套与牌号相适应的二次冶金和浇铸，随后热轧；其他路线须另行开展方法学审查 |
| market_state | 钢厂大门处干燥、无涂层的卷材、带材、薄板或定尺产品，并声明牌号、宽度、厚度、表面状态及交付形态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 处于本 PCR 覆盖产品边界内的热轧合金钢平板轧材 |
| How much | 1,000 kg 净合格可销售产品 |
| How well | 符合所声明的钢牌号与产品规范，宽度小于600毫米，且除热轧外未经进一步加工 |
| How long or cycle | 一个生产报告期；工厂大门处不赋予使用期限 |
| reference_flow_link | `rolling_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 除热轧外未经进一步加工的宽度小于600毫米的合金钢平板轧材（硅钢或高速钢除外） `882747cb-449c-401b-89b1-2ff03c819442` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢号和适用产品标准；合金及牌号族，包括不锈钢或其他合金钢；化学成分或材质证明；成品宽度与厚度；卷材、带材、薄板或定尺形态；无涂层且未经进一步加工的表面状态；炼钢路线与二次精炼技术；工厂地域；报告期；适用时的含水率和含油处理；工厂大门边界 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及全部按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告去除切头切尾、边角料、氧化铁皮和不合格品后的净合格可销售产品质量。全部交换按1,000 kg净参考产品归一化。 |
| `route_output_mass` | 铸坯产出及热轧铸坯投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 一致保留实测湿基或干基状态，核对所选炼钢路线的铸坯产出与轧制投入，并披露储存或转运变化。 |
| `gas_reference_conditions` | 工业氧气、氩气和天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在记录计量体积的同时记录温度、压力、干湿基、纯度及任何标准体积换算；不得合并不同气体。 |
| `energy_accounting` | 外购电力 | Energy | MJ | 保留电表原单位与换算记录，识别电压和供电边界，避免与回收过程煤气发电重复计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 自然资源、预处理矿石、外购废钢及其他金属料、合金添加剂、熔剂、电极、气体、工艺水、燃料和电力通过有记录的上游供应数据集进入；内部铸坯仅由所声明的炼钢路线进入热轧。 |
| starting_condition_role | 摇篮端投入及钢厂前景起点 |
| product_classification_scope | 宽度小于600毫米、除热轧外未经进一步加工的合金钢平板轧材，不含硅电工钢和高速钢 |
| recursive_input_rule | 同一钢厂内部循环的铸坯、废钢、氧化铁皮、过程煤气、蒸汽或电力仅作为一次内部转移表示，不得再次连接为外购产品；外部来源材料使用上游数据集。 |
| upstream_dataset_requirement | 外购材料、废钢预处理、燃料、气体、电力、水、运输及外部废物处理应采用供应商特定或在地域和技术上具有代表性的数据集；披露替代数据及其年代。 |
| disclosure | 声明工厂、报告期、牌号族、所选高炉—转炉或电弧炉路线、二次精炼步骤、浇铸路线、热轧线、加热燃料、内部能源回收、废钢边界、共产品状态、截断，以及是否单独报告寿命终止情景。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 产品系统 | 纳入外购投入的上游生产与运输、炼钢、适合牌号的二次冶金、浇铸、再加热、除鳞、热轧、冷却、卷取或剪切、仅限于覆盖市场状态的精整、内部运输、水处理、废物处理及直至工厂大门的直接排放。 | `worldsteel-lci-methodology-2017`, `eu-jrc-iron-steel-bref-2013`, `eu-jrc-ferrous-metals-processing-bref-2022` |
| `boundary_route_selection` | 炼钢路线 | 将高炉—转炉和电弧炉建模为相互独立的条件路线。只纳入参考产品实际使用的路线或按实测产出加权的路线组合；使用 AOD、VOD、真空脱气或其他二次冶金时必须识别。 | `eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci` |
| `boundary_hot_rolling_steps` | 热轧 | 纳入实施的表面修整、再加热、除鳞、轧制、冷却、卷取或剪切，以及不改变覆盖产品“未经进一步加工”市场状态的精整。 | `eu-jrc-ferrous-metals-processing-bref-2022` |
| `boundary_cutoff` | 完整性 | 记录所有能源投入。某项被排除的材料流在其单元过程中必须同时低于质量、能源和环境相关性的1%，全部被排除流合计必须低于5%；记录筛选依据，且不得借截断遗漏危险物质或依法监测的排放。 | `worldsteel-lci-methodology-2017` |
| `boundary_end_of_life` | 下游建模 | 从摇篮到工厂大门结果不含制造加工、使用和寿命终止。回收负担或抵扣仅可作为明确标识的独立情景报告，并避免与下游模型重复计算。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `bf_bof_alloy_steelmaking_casting` | 高炉—转炉合金钢生产与浇铸 | conditional | 参考产品采用高炉—碱性氧气转炉一体化炼钢时纳入；同时纳入所声明牌号实际采用的二次冶金与浇铸。 | 前景炼钢与铸坯生产 | 转入热轧的1,000 kg合金钢铸坯 |
| `eaf_alloy_steelmaking_casting` | 电弧炉合金钢生产与浇铸 | conditional | 参考产品采用电弧炉炼钢时纳入；同时纳入所声明牌号适用的 AOD、VOD、钢包冶金、脱气和浇铸步骤。 | 前景炼钢与铸坯生产 | 转入热轧的1,000 kg合金钢铸坯 |
| `hot_rolling_narrow_flat_product` | 热轧为窄幅合金钢平板轧材 | required | 始终纳入；铸坯牌号和路线必须与一个所选炼钢路线或有记录的实测路线组合相匹配。 | 前景再加热、除鳞、轧制、冷却、卷取或剪切 | 1,000 kg净合格可销售参考产品 |

### 过程：高炉—转炉合金钢生产与浇铸（`bf_bof_alloy_steelmaking_casting`）

#### 输入

##### 产品流

###### 预处理含铁炉料（`bf_iron_ore`）

记录一体化路线实际装入的铁矿石产品，不得在一项供应商记录中合并球团、烧结矿或块矿。

- 选定流：团聚铁矿石
- 流属性/单位：Mass / kg
- 数量规则：实测装入干质量并归属于合格铸坯
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 冶金焦炭（`bf_metallurgical_coke`）

记录装入高炉的干基冶金焦炭。

- 选定流：冶金焦炭
- 流属性/单位：Mass / kg
- 数量规则：实测装入干质量并归属于合格铸坯
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 高炉喷吹煤粉（`bf_pulverized_coal`）

采用煤粉喷吹时，煤粉须与焦炭分别记录。

- 选定流：煤粉
- 流属性/单位：Mass / kg
- 数量规则：实测喷吹干质量；未采用时记录零值及技术原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 石灰石熔剂（`bf_limestone`）

按所声明的水分和碳酸盐基准记录作为熔剂装入的石灰石。

- 选定流：石灰石
- 流属性/单位：Mass / kg
- 数量规则：实测装入质量并归属于合格铸坯
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 外购废钢（`bf_steel_scrap`）

将外部来源废钢与内部返回料分开记录，并声明等级、预处理及消费前或消费后状态。

- 选定流：预处理废钢
- 流属性/单位：Mass / kg
- 数量规则：转炉路线实际装入的外购废钢过磅质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`worldsteel-lci-methodology-2017`

###### 锰铁合金添加剂（`bf_ferromanganese`）

记录为满足产品配料实际使用的锰铁牌号。

- 选定流：锰铁
- 流属性/单位：Mass / kg
- 数量规则：批次加料记录质量并归属于合格铸坯
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 工业氧气（`bf_industrial_oxygen`）

记录供给转炉及本路线其他纳入操作的氧气，并记录纯度和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属于合格铸坯的氧气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_energy_utilities`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 外购电力（`bf_electricity`）

记录场址和电压特定的外购电力，扣除另行记录的内部发电。

- 选定流：钢厂外购电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给纳入的高炉—转炉与浇铸操作的结算电表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_energy_utilities`
- 来源：`worldsteel-lci-methodology-2017`

###### 工艺补水（`bf_process_water`）

记录跨越本路线边界的工艺补水，不含内部循环水。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：归属于合格铸坯的补水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_energy_utilities`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合金钢铸坯（`bf_cast_alloy_steel_slab`）

记录转入热轧的净合格铸坯，并附牌号、尺寸和表面状态。

- 选定流：合金钢铸坯
- 流属性/单位：Mass / kg
- 数量规则：浇铸转出的实测合格铸坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`

##### 废物流

###### 高炉渣（`bf_blast_furnace_slag`）

单独记录高炉渣，并声明处理方式及废物或共产品状态。

- 选定流：高炉渣
- 流属性/单位：Mass / kg
- 数量规则：离开高炉渣系统的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_residues_emissions`
- 来源：`eu-jrc-iron-steel-bref-2013`, `worldsteel-lci-methodology-2017`

###### 碱性氧气转炉渣（`bf_basic_oxygen_furnace_slag`）

单独记录转炉渣，并声明处理方式及废物或共产品状态。

- 选定流：碱性氧气转炉渣
- 流属性/单位：Mass / kg
- 数量规则：离开转炉渣系统的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_residues_emissions`
- 来源：`eu-jrc-iron-steel-bref-2013`, `worldsteel-lci-methodology-2017`

###### 高炉除尘灰（`bf_blast_furnace_dust`）

记录回收或处理边界处收集的高炉除尘灰。

- 选定流：高炉除尘灰
- 流属性/单位：Mass / kg
- 数量规则：实测收集除尘灰干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_residues_emissions`
- 来源：`eu-jrc-iron-steel-bref-2013`

###### 碱性氧气转炉除尘灰（`bf_basic_oxygen_furnace_dust`）

将收集的转炉除尘灰与高炉除尘灰分开记录。

- 选定流：碱性氧气转炉除尘灰
- 流属性/单位：Mass / kg
- 数量规则：实测收集除尘灰干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_residues_emissions`
- 来源：`eu-jrc-iron-steel-bref-2013`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`bf_fossil_co2`）

记录纳入高炉—转炉路线直接排放的烟气和工艺化石源二氧化碳，不声称更具体的空气子类别。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放，或与燃料、还原剂、碳酸盐和含碳过程煤气记录核对的碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bf_residues_emissions`
- 来源：`worldsteel-lci-methodology-2017`
### 过程：电弧炉合金钢生产与浇铸（`eaf_alloy_steelmaking_casting`）

#### 输入

##### 产品流

###### 外购废钢（`eaf_steel_scrap`）

按牌号族、预处理、污染状况及消费前或消费后状态记录外部来源废钢。

- 选定流：预处理废钢
- 流属性/单位：Mass / kg
- 数量规则：实际装入外购废钢的过磅质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldsteel-lci-methodology-2017`, `worldstainless-general-introduction-lci`

###### 直接还原铁（`eaf_direct_reduced_iron`）

仅在实际装入时记录直接还原铁或热压块铁，并声明金属化率、含碳量和形态。

- 选定流：直接还原铁
- 流属性/单位：Mass / kg
- 数量规则：实测装入质量；未采用时记录零值及配料原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 生铁（`eaf_pig_iron`）

仅在电弧炉实际配入生铁时记录，并声明成分和交付状态。

- 选定流：生铁
- 流属性/单位：Mass / kg
- 数量规则：实测装入质量；未采用时记录零值及配料原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 生石灰熔剂（`eaf_quicklime`）

按所声明的化学组成和水分基准记录生石灰。

- 选定流：生石灰
- 流属性/单位：Mass / kg
- 数量规则：实测装入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 白云石质熔剂（`eaf_dolomite`）

将白云石或白云石质石灰与生石灰分开记录，并声明煅烧状态。

- 选定流：白云石
- 流属性/单位：Mass / kg
- 数量规则：实测装入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 石墨电极（`eaf_graphite_electrode`）

根据库存和变动记录核算石墨电极净消耗量。

- 选定流：石墨电极
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收货量减期末库存及可回收残段
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 铬铁合金添加剂（`eaf_ferrochromium`）

按所声明配方记录实际使用的铬铁牌号。

- 选定流：铬铁
- 流属性/单位：Mass / kg
- 数量规则：批次加料记录质量；未采用时记录零值及牌号配方原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 镍铁合金添加剂（`eaf_ferronickel`）

仅在实际使用时记录镍铁，并记录牌号和镍含量。

- 选定流：镍铁
- 流属性/单位：Mass / kg
- 数量规则：批次加料记录质量；未采用时记录零值及牌号配方原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 锰铁合金添加剂（`eaf_ferromanganese`）

按所声明配方记录实际使用的锰铁牌号。

- 选定流：锰铁
- 流属性/单位：Mass / kg
- 数量规则：批次加料记录质量；未采用时记录零值及牌号配方原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`worldstainless-general-introduction-lci`

###### 二次精炼用氩气（`eaf_argon`）

在 AOD、VOD、钢包搅拌或脱气使用氩气时单独记录。

- 选定流：工业氩气
- 流属性/单位：Volume / m3
- 数量规则：计量体积；未采用时记录零值及精炼技术原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_energy_utilities`
- 来源：`worldstainless-general-introduction-lci`

###### 工业氧气（`eaf_industrial_oxygen`）

记录电弧炉烧嘴、氧枪及纳入的二次精炼操作使用的氧气，并记录纯度和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属于合格铸坯的氧气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_energy_utilities`
- 来源：`eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

###### 外购电力（`eaf_electricity`）

记录场址和电压特定的外购电力，扣除另行记录的内部发电。

- 选定流：钢厂外购电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给电弧炉、二次冶金和浇铸的结算电表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_energy_utilities`
- 来源：`worldsteel-lci-methodology-2017`, `worldstainless-general-introduction-lci`

###### 天然气（`eaf_natural_gas`）

电弧炉烧嘴或纳入的精炼、浇铸操作使用天然气时予以记录，并声明供应地域和参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属于合格铸坯的计量体积；未采用时记录零值及技术原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_energy_utilities`
- 来源：`worldstainless-general-introduction-lci`

###### 工艺补水（`eaf_process_water`）

记录跨越电弧炉路线边界的工艺补水，不含内部循环水。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：归属于合格铸坯的补水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_energy_utilities`
- 来源：`worldstainless-general-introduction-lci`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合金钢铸坯（`eaf_cast_alloy_steel_slab`）

记录转入热轧的净合格铸坯，并附牌号、尺寸和表面状态。

- 选定流：合金钢铸坯
- 流属性/单位：Mass / kg
- 数量规则：浇铸转出的实测合格铸坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_materials_products`
- 来源：`eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

##### 废物流

###### 电弧炉渣（`eaf_slag`）

记录电弧炉渣的组成、冷却、处理方式及废物或共产品状态。

- 选定流：电弧炉渣
- 流属性/单位：Mass / kg
- 数量规则：离开电弧炉渣系统的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_residues_emissions`
- 来源：`eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

###### 电弧炉除尘灰（`eaf_dust`）

记录收集的电弧炉除尘灰、锌含量及回收或处置路线。

- 选定流：电弧炉除尘灰
- 流属性/单位：Mass / kg
- 数量规则：实测收集除尘灰干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_residues_emissions`
- 来源：`eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`eaf_fossil_co2`）

记录电弧炉路线直接排放的化石源二氧化碳，不声称更具体的空气子类别。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放，或与燃料、电极、金属炉料碳、喷碳、碳酸盐和炉气记录核对的碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合金钢铸坯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_eaf_residues_emissions`
- 来源：`worldsteel-lci-methodology-2017`, `worldstainless-general-introduction-lci`

### 过程：热轧为窄幅合金钢平板轧材（`hot_rolling_narrow_flat_product`）

#### 输入

##### 产品流

###### 合金钢铸坯投入（`rolling_cast_alloy_steel_slab`）

记录路线特定的铸坯投入，其牌号、尺寸、温度和表面状态须与所选路线产出匹配。

- 选定流：合金钢铸坯
- 流属性/单位：Mass / kg
- 数量规则：装入再加热与轧制线的实测铸坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_materials_products`
- 来源：`eu-jrc-ferrous-metals-processing-bref-2022`

###### 再加热用天然气（`rolling_natural_gas`）

记录供给再加热炉的天然气，并声明供应地域和参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属于合格热轧产品的计量体积；未采用时记录零值及炉窑燃料原因
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy_utilities`
- 来源：`eu-jrc-ferrous-metals-processing-bref-2022`

###### 外购电力（`rolling_electricity`）

记录除鳞、轧制、冷却、卷取、剪切及纳入精整所用的场址和电压特定外购电力。

- 选定流：轧钢厂外购电力
- 流属性/单位：Energy / MJ
- 数量规则：分配给纳入热轧线的电表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy_utilities`
- 来源：`worldsteel-lci-methodology-2017`, `eu-jrc-ferrous-metals-processing-bref-2022`

###### 工艺补水（`rolling_process_water`）

记录除鳞和冷却所用补水，不含内部循环水。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：归属于合格热轧产品的补水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy_utilities`
- 来源：`eu-jrc-ferrous-metals-processing-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净合格可销售窄幅热轧合金钢平板轧材（`rolling_reference_product`）

记录去除切头切尾、边角料、氧化铁皮和不合格品后的合格无涂层产品。

- 选定流：除热轧外未经进一步加工的宽度小于600毫米的合金钢平板轧材（硅钢或高速钢除外） `882747cb-449c-401b-89b1-2ff03c819442`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：符合所声明牌号及宽度小于600毫米条件的实测净合格可销售质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_materials_products`
- 来源：`un-cpc-3-0-structure-2025`, `eu-jrc-ferrous-metals-processing-bref-2022`

##### 废物流

###### 轧钢氧化铁皮（`rolling_mill_scale`）

记录分离的氧化铁皮，并声明含水率、含油量及回收或废物状态。

- 选定流：轧钢氧化铁皮
- 流属性/单位：Mass / kg
- 数量规则：离开氧化铁皮分离系统的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_residues_emissions`
- 来源：`eu-jrc-ferrous-metals-processing-bref-2022`

###### 轧制边角及切头切尾废钢（`rolling_steel_scrap`）

将边角和切头切尾废钢与氧化铁皮分开记录，并声明其内部循环或出厂状态。

- 选定流：合金钢轧制废钢
- 流属性/单位：Mass / kg
- 数量规则：合格产品生产批次产生的实测废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_residues_emissions`
- 来源：`worldsteel-lci-methodology-2017`, `eu-jrc-ferrous-metals-processing-bref-2022`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`rolling_fossil_co2`）

记录轧制线燃烧直接排放的化石源二氧化碳，不声称更具体的空气子类别。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟气排放，或与再加热燃料记录核对的燃料碳计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_rolling_residues_emissions`
- 来源：`worldsteel-lci-methodology-2017`, `eu-jrc-ferrous-metals-processing-bref-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 全部前景操作 | 在记录允许时，通过分别计量路线、生产线、牌号批次、回收操作和可销售产出来避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recirculation` | 内部废钢、氧化铁皮、过程煤气、电力、蒸汽和水 | 将内部循环视为内部转移：其回收负担只保留一次，不附加外购上游数据集，并核对转移两端。 | `worldsteel-lci-methodology-2017` |
| `allocation_co_products` | 炉渣、回收除尘灰、外供过程煤气、电力、蒸汽或其他可销售共产品 | 仅在被替代功能及替代比有记录且与研究目标兼容时优先采用系统扩展。系统扩展缺乏依据时，采用所声明的物理或经济分配并报告敏感性检验；不得默认为可销售共产品不承担负担。 | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_boundary` | 外购及产生的废钢 | 区分内部废钢、消费前废钢和消费后废钢。声明回收方法；任何寿命终止抵扣须与从摇篮到工厂大门清单分开报告。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bf_materials_products` | `bf_bof_alloy_steelmaking_casting` | 装入材料与铸坯 | 秤量、批次记录、库存台账、材质证明 | 时间戳；批次或炉次 id；材料 id；供应商；牌号；成分；湿质量；干质量；水分；铸坯质量；合格产品关联 | 将经校准的秤量和库存变动与炉次及生产批次记录核对 | kg | 每次收货、装料、炉次与浇铸 | 至少一个有代表性的连续12个月 | 所有纳入的高炉、转炉、二次冶金和浇铸单元 | 汇总合格投入和产出，应用有记录的库存变动，并仅在细分后实施分配 | 校准证书；地磅单；炉次单；库存核对；材质证明 |
| `cp_bf_energy_utilities` | `bf_bof_alloy_steelmaking_casting` | 氧气、电力与补水 | 公用工程仪表与发票 | 时间戳；仪表 id；期初期末读数；单位；氧气纯度；气体温压；电压与供电方；水源；合格产出 | 将分表合计与场址发票及内部发电记录核对 | m3; MJ | 连续或班次计量，按月核对 | 与产品产出相同的12个月 | 所有纳入路线单元及共用服务 | 扣除经核实的内部转移，按因果计量或有记录的驱动因素分配共用服务，并按铸坯产出归一化 | 仪表校准；发票核对；分配工作表；停机记录 |
| `cp_bf_residues_emissions` | `bf_bof_alloy_steelmaking_casting` | 炉渣、除尘灰与直接化石源CO2 | 残余物秤量、联单、烟气监测、燃料和碳平衡 | 时间戳；来源单元；残余物质量；水分；去向；废物或共产品状态；烟气流量与浓度；燃料碳；碳酸盐碳；过程煤气转移 | 称量残余物，并采用有效的连续监测或经核对的碳平衡计算CO2 | kg | 每次出运加连续或批次排放 | 与产品产出相同的12个月 | 所有纳入排放点及残余物处理单元 | 汇总直接排放和外出残余物，换算到声明状态，避免过程煤气转移重复计算 | 秤量记录；实验室分析；废物联单；监测QA/QC；碳平衡闭合 |
| `cp_eaf_materials_products` | `eaf_alloy_steelmaking_casting` | 金属料、熔剂、电极、合金添加剂与铸坯 | 秤量、配料单、库存台账、炉次记录、材质证明 | 时间戳；炉次 id；材料 id；供应商；废钢类别；成分；装入质量；电极库存；铸坯质量；合格产品关联 | 将配料单、经校准的秤量和库存变动与合格铸坯核对 | kg | 每次收货、装料、炉次与浇铸 | 至少一个有代表性的连续12个月 | 电弧炉、纳入的二次精炼和浇铸 | 汇总合格炉次并应用有记录的库存变化；各合金添加剂保持分列 | 校准证书；配料单；炉次化学成分；库存核对；材质证明 |
| `cp_eaf_energy_utilities` | `eaf_alloy_steelmaking_casting` | 氩气、氧气、天然气、电力与补水 | 公用工程仪表与发票 | 时间戳；可用时的炉次 id；仪表 id；读数；单位；气体纯度；温压；电压与供电方；水源 | 将分表与发票及炉次日志核对 | m3; MJ | 连续或逐炉计量，按月核对 | 与产品产出相同的12个月 | 电弧炉、适用的AOD或VOD、钢包冶金、浇铸及共用服务 | 按直接炉次计量或有记录的因果驱动分配，扣除经核实的内部发电，并按合格铸坯归一化 | 校准证书；发票核对；炉次公用工程日志；停机记录 |
| `cp_eaf_residues_emissions` | `eaf_alloy_steelmaking_casting` | 电弧炉渣、电弧炉除尘灰与直接化石源CO2 | 残余物秤量、联单、烟气监测、燃料、电极、炉料碳和炉气记录 | 时间戳；炉次 id；残余物质量；水分；锌含量；去向；废物或共产品状态；烟气流量与浓度；碳投入与产出 | 称量残余物，并采用有效监测或经核对的碳平衡 | kg | 每次出运加连续或逐炉排放 | 与产品产出相同的12个月 | 电弧炉、纳入的二次精炼、浇铸、烟气净化及残余物处理 | 汇总合格排放与残余物，换算到声明状态，防止炉气监测与碳平衡重叠 | 秤量记录；实验室分析；联单；监测QA/QC；碳平衡闭合 |
| `cp_rolling_materials_products` | `hot_rolling_narrow_flat_product` | 铸坯投入与净合格可销售参考产品 | 铸坯秤量、生产订单、尺寸检验、材质证明、成品秤量 | 时间戳；批次 id；铸坯 id；路线；牌号；铸坯质量；宽度；厚度；产出形态；合格产品质量；不合格质量 | 将各合格产品批次关联到铸坯批次和经校准的成品秤 | kg | 每块铸坯及每卷、张、条或定尺成品 | 与路线数据相同的代表性12个月 | 所有纳入的热轧和精整操作 | 仅汇总宽度小于600毫米的合格无涂层产品；核对铸坯、产品、氧化铁皮、废钢及不合格品 | 秤量校准；生产谱系；检验结果；材质证明；质量平衡 |
| `cp_rolling_energy_utilities` | `hot_rolling_narrow_flat_product` | 天然气、电力与补水 | 炉窑及生产线分表、发票 | 时间戳；批次 id；仪表 id；读数；单位；燃料组成；气体参考条件；电压与供电方；水源 | 将生产线仪表与发票及生产时间核对 | m3; MJ | 连续或班次计量，按月核对 | 与合格产品产出相同期间 | 再加热、除鳞、轧制、冷却、卷取或剪切及纳入精整 | 按直接计量或有记录的运行时间驱动分配批次用量；排除内部循环 | 校准证书；发票核对；批次日志；停机记录 |
| `cp_rolling_residues_emissions` | `hot_rolling_narrow_flat_product` | 氧化铁皮、轧制废钢与直接化石源CO2 | 残余物秤量、废钢台账、烟气监测、燃料碳平衡 | 时间戳；批次 id；残余物或废钢质量；水分；含油量；去向；烟气流量与浓度；燃料碳 | 称量产出，并采用有效监测或燃料碳计算 | kg | 每次收集或出运加连续或批次排放 | 与合格产品产出相同期间 | 再加热炉、除鳞、轧制、氧化铁皮处理及废钢处理 | 按生产谱系或有记录的批次驱动归属，并与铸坯到产品质量平衡核对 | 秤量记录；实验室分析；转移记录；监测QA/QC；碳平衡闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_exchange` | 每项清单行 | 归一化交换量 = 合格报告期交换量 × 产品归属份额 ÷ 合格净产出 × 1,000 kg | 交换记录；归属份额；合格净产出 | 每1,000 kg过程产出或参考产品的数量 | `worldsteel-lci-methodology-2017` |
| `calc_route_mix` | 采用多种炼钢路线的产品 | 路线组合数量 = 各路线归一化数量 × 实测路线产出比例之和；比例之和必须为一；有工厂记录时不得使用国家平均值估算 | 各路线清单；各路线实测合格铸坯质量 | 实测路线组合清单 | `worldsteel-lci-methodology-2017` |
| `calc_mass_balance` | 炼钢、浇铸与热轧 | 将含铁及总质量投入与产品、内部转移、炉渣、除尘灰、氧化铁皮、废钢、其他残余物和实测排放核对；发布前调查重大未解释差异 | 材料记录；产品记录；内部转移；残余物；排放 | 有记录的质量平衡闭合 | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | 直接化石源CO2行 | 完整时采用有效烟气监测；否则依据经核对的化石碳投入和含碳产出计算，记录氧化和碳酸盐假设，并避免与监测排放重叠 | 烟气记录；燃料、还原剂、电极、炉料碳和碳酸盐记录；外供过程煤气；产品与残余物中的碳 | 直接化石源CO2质量 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明合金钢牌号、不属于硅电工钢和高速钢、成品宽度小于600毫米且除热轧外未进一步加工。 | 材质证明；尺寸检验；路线和精整谱系 |
| `dq_representativeness` | 全部数据 | 可行时采用有代表性的连续12个月；解释停产、异常运行、生产批次缺口及替代。 | 报告期登记；生产日志；例外记录 |
| `dq_geography_technology` | 上游数据集 | 匹配供应商地域、电力系统、废钢预处理、材料状态及生产技术；记录任何代理。 | 供应商数据；数据集元数据；代理评估 |
| `dq_metering` | 前景数量 | 使用经校准的仪表和秤，将分表合计与发票或场址总量核对，并保留原始记录及转换。 | 校准记录；核对工作簿；不可变源数据提取 |
| `dq_completeness` | 清单 | 仅在完成质量、能源和环境相关性筛选后应用截断；纳入所有能源及依法监测的排放。 | 完整性矩阵；截断登记；排污许可监测交叉核对 |
| `dq_route_consistency` | 路线与热轧连接 | 确保炼钢记录中的铸坯牌号、产出质量和路线与轧制投入及成品谱系匹配。 | 炉次—铸坯—钢卷谱系；质量平衡报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考流 | 若所声明产品宽度为600毫米及以上、属于非合金钢、硅电工钢或高速钢、经冷轧、涂层、酸洗或其他进一步加工，或缺失牌号与尺寸，则校验失败。 | `un-cpc-3-0-structure-2025`, `china-mof-alloy-steel-terminology-2024` |
| `validation_route` | 过程图 | 必须纳入热轧，并采用恰好一个高炉—转炉路线、一个电弧炉路线或实测路线组合。必须披露适合牌号的二次精炼和浇铸。 | `eu-jrc-iron-steel-bref-2013`, `eu-jrc-ferrous-metals-processing-bref-2022`, `worldstainless-general-introduction-lci` |
| `validation_units` | 清单数量 | 必须采用1,000 kg归一化，记录气体参考条件、电力供应元数据，以及从原始计量单位到报告单位的明确换算。 | `worldsteel-lci-methodology-2017` |
| `validation_balance` | 材料和碳平衡 | 必须记录铁或钢质量、总质量和化石碳核查；重大未解决质量差异或重复计算过程煤气均为错误。 | `worldsteel-lci-methodology-2017` |
| `validation_completeness` | 截断与交换 | 必须将每项能源投入、每项纳入材料、每项残余物和每种基本流排放作为原子交换记录；必须提供截断筛选及许可交叉核对记录。 | `worldsteel-lci-methodology-2017` |
| `validation_allocation` | 共产品与废钢 | 必须提供内部转移核对、废钢类别、共产品状态、分配或替代方法；采用寿命终止情景时须单独报告。 | `worldsteel-lci-methodology-2017` |
| `validation_uuid_accounting` | TianGong 引用 | 每个清单行必须带有经直接核验的公开TianGong UUID，或以相同行 id 和允许的原因代码出现在 manifest 未解决元数据中；拒绝未经核验的代理 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经方法学审查并发布后可作为 `secondary_dataset` 和 `background_dataset` |
| downstream_use | 对使用所声明窄幅热轧合金钢平板轧材的产品进行从摇篮到工厂大门建模；形成路线特定的 process 或 lifecyclemodel 投影 |
| allowed_use | 牌号族、宽度、表面状态、地域、技术、时间覆盖、废钢边界和分配方法与前景产品系统兼容时使用。 |
| excluded_use | 不得作为非合金钢、硅电工钢、高速钢、宽度为600毫米及以上、冷轧或涂层产品的通用代理；不得用仅代表低合金钢的数据代理不锈钢或高合金牌号。 |
| required_metadata | PCR id 与版本；产品牌号和标准；成分或牌号族；宽度、厚度和形态；工厂大门状态；高炉—转炉或电弧炉路线及二次精炼；工厂地域；报告期；上游数据集身份；电力和燃料供应；废钢类别；截断；分配；UUID缺口；不确定性与数据质量声明 |
| required_quality_disclosure | 原始数据占比；仪表和秤量核对；质量与碳平衡闭合；路线覆盖；供应商与地域代理；异常运行处理；被排除流；共产品与回收敏感性；未解决的范围和UUID证据需要 |
| update_trigger | 合金牌号族、炼钢或二次精炼路线、浇铸或轧制技术、再加热燃料、电力供应、废钢组合、产品宽度或表面状态、分配方法、工厂地域发生变化，或清单与数据质量发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0版结构》，2025年6月30日，第41214行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-02） | 官方英文产品分类身份及叶级标题中明确的排除项 |
| `china-mof-alloy-steel-terminology-2024` | 官方指南（`official_guidance`） | 中华人民共和国财政部，2024年关税调整方案附件，税则号列72269199。https://gss.mof.gov.cn/gzdt/zhengcefabu/202404/P020240419426389451413.pdf（检索日期：2026-09-02） | 核验窄幅热轧合金钢平板轧材的专业中文术语；不用于扩展CPC边界 |
| `eu-jrc-iron-steel-bref-2013` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《钢铁生产最佳可行技术参考文件》，JRC69967，EUR 25521 EN，2013年。https://publications.jrc.ec.europa.eu/repository/handle/JRC69967（检索日期：2026-09-02） | 高炉—转炉及电弧炉炼钢、二次冶金、浇铸、残余物与路线分解 |
| `eu-jrc-ferrous-metals-processing-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工工业最佳可行技术参考文件》，JRC131649，EUR 31321 EN，DOI 10.2760/196475，2022年。https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（检索日期：2026-09-02） | 热轧边界与工序：表面修整、再加热、除鳞、轧制、冷却、卷取及精整 |
| `worldsteel-lci-methodology-2017` | 方法因子（`method_factor`） | 世界钢铁协会，《生命周期清单方法学报告》，2017年。https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期：2026-09-02） | 声明单位、从摇篮到工厂大门边界、技术与地域代表性、能源完整性、截断、数据采集、平衡校验、共产品及废钢处理 |
| `worldstainless-general-introduction-lci` | 行业技术指南（`extension_guidance`） | 国际不锈钢论坛 / worldstainless，《不锈钢生命周期清单概论》。https://worldstainless.org/wp-content/uploads/2025/02/GeneralIntroductiontostainlesssteelLCI1.pdf（检索日期：2026-09-02） | 不锈钢及高合金钢电弧炉路线、与AOD或VOD相关的投入候选、合金添加剂、残余物及钢厂大门LCI框架 |
