---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-high-speed-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 高速钢棒材和杆材

## 1. 范围与适用性

本 PCR 适用于钢种明确声明为高速钢的厂门棒材和杆材。前景范围涵盖外购高速钢钢坯经再加热和热加工转化为棒材或杆材，并包括产品离开生产场址前实际实施的热处理、矫直、除鳞、表面修整、切断和检验。生产者应声明交付形态为直棒还是杆材/盘卷，并明确高速钢牌号、尺寸、热加工技术和交付状态。

本 PCR 不包括明确排除高速钢的普通合金钢棒材和杆材、硅锰钢制品、非合金钢棒材和杆材、钢丝、中空钻杆、高速钢平板轧材、成品刀具及下游零部件制造。外购高速钢钢坯之前的初级炼钢和铸造不在前景边界内，应由上游数据集表示。包装、客户运输、使用和寿命终结不属于所声明产品系统；研究扩展范围时，应将这些阶段单独报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-high-speed-steel |
| classification_refs | CPC 3.0：41271，高速钢棒材和杆材 |
| covered_products | 已声明高速钢牌号的直棒及杆材或盘卷杆材，交付状态可为热加工态，或为生产者实施热处理和表面精整后的状态 |
| excluded_products | 非合金钢棒材或杆材；排除高速钢的普通合金钢棒材或杆材；硅锰钢制品；钢丝；中空钻杆；平板轧材；成品刀具和已加工零部件 |
| representative_product | 符合所声明牌号、尺寸和交付状态的一批厂门高速钢棒材或杆材 |
| production_route | 外购高速钢钢坯经再加热，并采用所声明的轧制、锻造、热拉拔或挤压路线进行热加工；仅纳入实际采用的热处理和表面精整工序 |
| market_state | 生产场址厂门处按净质量销售的固态高速钢棒材或杆材；应声明直条或盘卷形态、表面状态和热处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产场址厂门交付、供下游制造使用的高速钢棒材或杆材 |
| How much | 净产品质量 1 kg |
| How well | 符合采购方声明的高速钢牌号、尺寸、形态、表面状态和交付状态 |
| How long or cycle | 一个已完成的生产和发运批次；不表示使用阶段寿命 |
| reference_flow_link | 1 kg 合格厂门产品输出等于 1 kg 参考流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 高速钢棒材和杆材 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 高速钢牌号及适用的牌号规范；直棒或杆材/盘卷形态；公称尺寸和尺寸公差；热加工技术；热处理状态；表面状态；钢坯来源和钢坯生产路线；生产场址和地理区域；基准期；净质量及包装排除说明 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。Tiangong 参考产品 UUID 缺失仍是明确的审查事项，不得用相邻的普通合金钢、硅锰钢、非合金钢或平板钢材流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及含钢的产品流或废物流 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用所声明交付状态下的净干质量；排除托盘、捆带、包材和其他包装。保留批次称量记录，并归一化至 1 kg 合格产品。 |
| `gas_volume_basis` | 气态天然气和工业氧气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量温度、压力以及干湿基准。汇总前，将供应商或流量计体积换算至同一声明参考状态；未经换算不得混用标准、标况和实际立方米。 |
| `electricity_energy_basis` | 外购电力 | 能量 | MJ | 保留电表记录的电能基准，并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ。声明电压等级、供应商或电网组合、地理区域以及是否包含场内发电。 |
| `water_mass_basis` | 工艺用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的工艺补充水净量。按体积计量时，使用实测或有文件依据的密度换算并保留换算基准；内部循环水另行披露。 |
| `sodium_hydroxide_active_mass` | 碱洗所用氢氧化钠 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 NaOH 有效质量。采购溶液应根据交付溶液质量和批次特定浓度计算有效质量；溶液所含水不得与工艺补充水重复计算。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_start_end` | 钢坯至厂门的前景系统 | 从已识别牌号的高速钢钢坯跨入生产场址边界开始，到所有生产者实施的后处理完成并在厂门称量合格棒材或杆材结束。纳入再加热、热加工、冷却、场内搬运、适用的热处理和表面修整、公用工程、已分离废物和直接排放。 | `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017` |
| `sb_upstream_billet` | 外购高速钢钢坯 | 初级炼钢、合金化、精炼和铸造由与牌号、路线、地理区域、时期和再生材料核算方法相容的上游钢坯数据集表示；不得使用通用非合金钢坯重建这些负荷。 | `worldsteel-lci-methodology-2017` |
| `sb_route_conditionals` | 路线条件工序 | 仅在使用外供工业氧气时纳入富氧，仅在实际实施时纳入碱洗，并仅在参考产品采用时纳入热处理或表面精整。只有生产记录证明某项原子交换不存在时，才可将其标为不适用；不得把未采用路线以零值混入平均。 | `eu-2022-2110-ferrous-metals-processing` |
| `sb_excluded_downstream` | 范围排除项 | 本前景数据集排除包装、客户侧出厂运输、客户机加工、刀具制造、使用和寿命终结。研究增加这些阶段时，应将其作为独立过程报告，且不得改变本参考流。 | `worldsteel-lci-methodology-2017` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在棒材或杆材热加工再加热之前进入生产场址、已识别高速钢牌号的钢坯 |
| starting_condition_role | 上游产品投入及前景转化起点 |
| product_classification_scope | CPC 3.0 代码 41271 仅作为分类语境；规范身份仍为声明厂门交付状态下的高速钢棒材和杆材 |
| recursive_input_rule | 若场外采购相同规范类别的棒材或杆材作为原料，应将其采购质量记录为单独上游产品投入并披露再利用或再轧路线；不得在同一前景过程中递归展开本 PCR |
| upstream_dataset_requirement | 使用与所声明牌号、炼钢和铸造路线、地理区域、时期、再生含量或寿命终结分配约定及交付状态相容的上游高速钢钢坯数据集 |
| disclosure | 声明钢坯牌号和来源、热加工技术、所含后处理步骤、产品形态和尺寸、场址和地理区域、基准期、能源和供水、内部循环、外售回收材料、废物处理及直接排放计量基准 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `billet_to_bar_rod` | 钢坯再加热、热加工和厂门精整 | `required` | 始终必需；氧气、碱洗、热处理和精整的各原子交换仅在生产记录证明适用时纳入 | 将高速钢钢坯前景转化为合格棒材或杆材 | 1 kg 合格厂门高速钢棒材或杆材 |

### 过程：钢坯再加热、热加工和厂门精整（`billet_to_bar_rod`）

该汇总前景过程表示从外购高速钢钢坯，经热加工直至完成所有生产者实施精整的实际场址路线。路线条件流保持为原子交换，仅在所述操作实际发生时纳入。

#### 输入

##### 产品流

###### 已识别牌号的高速钢钢坯（`dr_hss_billet`）

钢坯是前景转化的含钢起始产品。仅记录为所声明牌号和生产批次跨越前景边界的钢坯质量。

- 选定流：高速钢钢坯
- 流属性/单位：质量 / kg
- 数量规则：称量或经库存核对后投入生产批次的钢坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`worldsteel-lci-methodology-2017`

###### 钢坯再加热或生产者实施热处理所用气态天然气（`dr_natural_gas`）

记录供应至前景过程燃烧器的气态天然气。不得将上游天然气供应排放作为直接前景排放计入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：由炉级记录或有理据的场址级记录分配至所声明产品批次的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_metering`
- 来源：`eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017`

###### 轧制、传动、泵送和精整所用外购电力（`dr_electricity`）

记录前景设备消耗的交付电能。使用实际电压等级及供应商或电网地理区域，不得使用电缆或电压转换服务流替代电能。

- 选定流：中压交流电
- 流属性/单位：能量 / MJ
- 数量规则：前景过程计量电量；缺少分表时，使用有文件依据的方法从场址电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 富氧燃烧所用工业氧气（`dr_industrial_oxygen`）

仅在外购或场内制备的工业氧气跨越选定炉窑边界并用于富氧燃烧时纳入本行。环境燃烧空气不属于该产品流。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：计量供应至适用前景燃烧器的氧气；未富氧时根据炉窑记录将本行标为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用富氧时，每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 除鳞和冷却所用工艺补充水（`dr_process_water`）

记录供应至前景除鳞和冷却回路的补充水净量。披露内部循环量，但不得将内部循环反复计为投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量补充水减去有记录的前景边界外过程转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_metering`
- 来源：`eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017`

###### 路线实际采用碱洗时所用氢氧化钠（`dr_sodium_hydroxide`）

仅当所声明产品路线采用 NaOH 碱洗槽时纳入氢氧化钠。记录有效化学品质量，并通过用水记录单独表征溶液所含水。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg 有效 NaOH
- 数量规则：交付溶液质量乘以批次特定 NaOH 质量分数，并根据清洗槽期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用 NaOH 清洗时，每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-2022-2110-ferrous-metals-processing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格高速钢棒材和杆材（`pr_hss_bars_rods`）

这是所声明交付状态下完成全部生产者实施工序后的参考产品输出。在确认该产品类别的精确公开 state-100 流之前，UUID 保持为空。

- 选定流：高速钢棒材和杆材
- 流属性/单位：质量 / kg
- 数量规则：参考产品输出 1 kg；归一化前保留生产批次实测输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格厂门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 与产品及水回路分离的轧制氧化铁皮（`wr_mill_scale`）

记录再加热、热加工、除鳞或含鳞水处理期间去除的氧化铁皮。声明其在场内循环、外运回收或送往废物处理的去向。

- 选定流：轧制氧化铁皮 `763bdad1-b443-428a-89b6-371a6807fc6c`
- 流属性/单位：质量 / kg
- 数量规则：称量分离的氧化铁皮，根据储存期初和期末库存调整，并归属至所声明产品批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017`

###### 废碱液（`wr_waste_alkaline_liquor`）

仅在前景路线排放 NaOH 碱洗槽液时纳入该废物。报告湿态废液质量，并保留成分和处理记录。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：质量 / kg 湿废液
- 数量规则：称量或由体积和密度计算送往场内或场外处理的废液，并根据槽液库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用碱洗时，每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-2022-2110-ferrous-metals-processing`

##### 基本流

###### 前景燃料燃烧产生的直接化石源二氧化碳（`er_carbon_dioxide_fossil`）

记录前景炉窑中天然气燃烧直接排放的化石源二氧化碳。本行排除上游发电排放和生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：场址实测直接化石源 CO2，或与天然气记录核对且单独记录的燃料碳计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高速钢棒材或杆材输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`worldsteel-lci-methodology-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `al_subdivision_first` | 共用设备和场址公用工程 | 优先通过分表计量或细分再加热、热加工、处理和精整工序避免分配。无法避免共用表分配时，采用炉窑占用时间、设备时间或加工质量等有文件依据的因果驱动因子，并对物性差异显著的牌号进行敏感性检验。 | `worldsteel-lci-methodology-2017` |
| `al_internal_recirculation` | 场内返回的钢或含氧化铁皮材料 | 将场内回收量记录为产生工序的输出和接收工序的输入，再报告跨边界净平衡；场内循环不得主张外部避免负荷。 | `worldsteel-lci-methodology-2017` |
| `al_exported_scale` | 外运回收的轧制氧化铁皮 | 只有存在有文件依据的市场用途和替代功能时，才将外运氧化铁皮视为共产品。对已识别的被替代产品透明采用系统扩展；否则保留为废物并纳入其处理，不给予避免产品信用。 | `worldsteel-lci-methodology-2017` |
| `al_recycling_consistency` | 上游钢坯及下游研究 | 保留并披露钢坯数据集的再循环约定。不得在本钢坯至厂门前景过程中重复加入再生含量负荷或寿命终结信用。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `billet_to_bar_rod` | 钢坯、产品、氢氧化钠、轧制氧化铁皮和废碱液 | 校准后的磅单、批次单、采购记录、槽液记录和库存记录 | lot_id; grade; input_mass_kg; output_mass_kg; solution_mass_kg; concentration_mass_fraction; waste_mass_kg; opening_inventory_kg; closing_inventory_kg | 按牌号和批次核对实物收货、领用、退回、产品质量和废物转移 | kg | 每批；每月和每年汇总 | 优先采用一个代表性年度；较短时期应说明理由并覆盖所有声明运行模式 | 生产场址及指定前景产线 | 汇总跨边界数量，加期末库存、减期初库存，仅分配有文件依据的共用量，再除以合格产品质量 | 衡器校准；库存核对；证书；槽液分析；废物转移记录；异常日志 |
| `cp_gas_metering` | `billet_to_bar_rod` | 气态天然气和工业氧气 | 经校准的炉窑或供应流量计及供应商对账单 | timestamp; meter_id; gas_identity; volume; temperature; pressure; wet_dry_basis; product_lot; furnace_status | 在批次或生产周期边界读取流量计并与供应商总量核对；换算至同一声明体积参考状态 | m3 | 连续或每班；每月核对 | 与产品输出相同的代表性时期，并覆盖所有适用炉窑模式 | 生产场址及适用炉窑 | 汇总按实测炉窑运行或有文件依据的因果分配归属的标准化气体体积，再除以合格产品质量 | 流量计校准；供应商核对；炉窑日志；分配理由 |
| `cp_energy_metering` | `billet_to_bar_rod` | 外购电力 | 结算电表、分表或设备电表记录 | timestamp; meter_id; kWh; voltage_level; supplier_or_grid; product_lot; equipment_status | 优先使用过程分表；否则核对场址购电，并按有文件依据的设备负荷、时间或加工质量进行分配 | kWh 和 MJ | 连续或每班；每月核对 | 与产品输出和全部声明路线状态相同的代表性时期 | 生产场址及前景设备 | 扣除有记录的外送电量和范围外用电，将 kWh 换算为 MJ，仅分配剩余共用电量，再除以合格产品质量 | 电表校准；发票核对；负荷研究；电网或供应商证据 |
| `cp_water_metering` | `billet_to_bar_rod` | 工艺补充水 | 经校准的补水表、储罐记录和水量平衡记录 | timestamp; meter_id; source; volume_or_mass; temperature; density; recycle_flow; discharge_flow; product_lot | 计量跨越前景边界的净用水，并核对补充、循环、蒸发和排放 | kg | 连续或每日；每月核对 | 与产品输出相同的代表性时期；停机和维护影响重大时一并覆盖 | 生产场址及除鳞或冷却回路 | 必要时用有文件依据的密度将体积换算为质量，扣除范围外转移，再将净补充水除以合格产品质量 | 仪表校准；年度水量平衡；维护日志；核对差异 |
| `cp_direct_air_emissions` | `billet_to_bar_rod` | 直接化石源二氧化碳 | 烟气监测、法定排放报告或燃料碳清单 | source_id; timestamp; fossil_CO2_kg; measurement_method; natural_gas_volume; carbon_factor; oxidation_factor; product_lot | 有条件时使用排放源特定监测；否则保留透明的燃料碳计算并与天然气流量计核对 | kg | 连续、生产周期或报告期；每年核对 | 与天然气记录相同的代表性时期及前景燃烧源 | 仅限生产场址的前景炉窑 | 汇总范围内排放源的直接化石源 CO2，排除上游发电和场外供应排放，再除以合格产品质量 | 监测 QA/QC；计算工作簿；燃料证书；法定报告或清单核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 所有质量型清单行 | 归一化数量 = 归属至产品的跨边界行质量 / 合格参考产品质量 | 归属行质量；合格产品质量 | 每 1 kg 参考产品的 kg 数量 | `worldsteel-lci-methodology-2017` |
| `calc_active_naoh` | `dr_sodium_hydroxide` | 有效 NaOH 质量 = 交付溶液质量 × 实测 NaOH 质量分数 + 期初有效库存 − 期末有效库存 | 溶液质量；浓度；槽液期初库存；槽液期末库存 | 每 1 kg 参考产品的有效 NaOH kg 数量 |  |
| `calc_waste_liquor_mass` | `wr_waste_alkaline_liquor` | 湿废液质量 = 实测质量，或排放体积 × 实测密度；结果应与槽液补充和库存变化核对 | 废液质量或体积；密度；槽液期初和期末库存 | 每 1 kg 参考产品的湿废液 kg 数量 | `eu-2022-2110-ferrous-metals-processing` |
| `calc_energy_conversion` | `dr_electricity` | 电能 MJ 数量 = 电表 kWh 数量 × 3.6 | 电表记录的 kWh 电量 | 每 1 kg 参考产品的 MJ 数量 |  |
| `calc_metallic_balance` | 含钢投入和输出 | 核对高速钢钢坯质量与合格产品、在制品、场内返回料、轧制氧化铁皮及其他单独识别的含钢输出；调查无法解释的损失，不得将其归入通用废物流 | 钢坯；产品；在制品；场内返回料；轧制氧化铁皮；其他已识别含钢输出 | 含钢质量平衡闭合度及差异 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和钢坯 | 保留牌号证书、订单规范和批次可追溯记录，以证明高速钢身份，并区分直棒与杆材/盘卷、尺寸、热处理状态和表面状态。 | 质保书；采购规范；产品订单；批次谱系 |
| `dq_technology_geography` | 前景和上游数据 | 声明实际热加工和精整技术以及生产地理区域。上游钢坯、电力、天然气、氧气、水和处理数据集应具有地理和技术代表性。 | 过程图；供应商记录；数据集元数据；代表性审查 |
| `dq_temporal_coverage` | 前景记录 | 实际可行时采用一个代表性年度。采用少于六个月的数据时，应说明理由，并证明覆盖牌号组合、生产周期变化、停机和所有路线条件操作。 | 带日期记录；生产计划；覆盖评估；异常日志 |
| `dq_completeness` | 清单 | 将仪表和材料记录核对至同一场址、时期和产品分母。单独报告每项实际纳入的原子交换并记录排除项；不得把未解决损失隐藏在通用废物、公用工程或排放行中。 | 核对工作簿；质量和能量平衡；排除登记；仪表图 |
| `dq_conditional_routes` | 富氧和碱洗 | 只有炉窑、槽液和生产记录证明代表产品及时期内未发生该操作时，才可将条件行标为不适用。 | 炉窑规范和日志；槽液记录；工艺路线单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_identity` | 参考产品 | 牌号证据不能证明高速钢、产品形态不是棒材或杆材，或参考流缺少牌号、形态、尺寸、交付状态、场址、时期或净质量限定信息时，判定不符合。 | `un-cpc-3-0-structure-2025` |
| `val_reference_amount` | 参考流 | 验证归一化合格产品输出恰为 1 kg，且包装质量已排除。 |  |
| `val_boundary` | 前景系统 | 验证数据集以牌号相容的高速钢钢坯开始，纳入全部实际实施的生产者路线步骤和直接前景交换，且未重复计算上游钢坯、供电或下游制造负荷。 | `worldsteel-lci-methodology-2017` |
| `val_mass_balance` | 含钢清单 | 要求有文件依据的含钢质量平衡，并调查无法解释的差异；轧制氧化铁皮、场内返回料、在制品和其他实际含钢输出应分别记录。 | `worldsteel-lci-methodology-2017` |
| `val_meter_reconciliation` | 能源、气体和水 | 验证仪表校准、共同时间覆盖、供应商或场址核对、换算因子以及共用量向声明产品的分配。 | `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017` |
| `val_conditional_exchange` | 氧气、氢氧化钠和废碱液 | 验证每项条件交换仅在其特定操作实际发生时纳入，且投入、库存变化和废物记录相互一致。 | `eu-2022-2110-ferrous-metals-processing` |
| `val_uuid_integrity` | 含 UUID 的行 | 通过公开 state-100 直接读取，验证每个 UUID 的语义身份、流类型、属性和单位组。拒绝代理，并在确认精确记录之前保持所声明的三个未解决 UUID 行为空。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选前景生产数据集；经独立方法学和翻译审查后，可成为 secondary_dataset 或 background_dataset |
| downstream_use | 高速钢棒材或杆材以及消耗所声明牌号、形态和交付状态的下游产品的从摇篮到厂门模型 |
| allowed_use | 钢坯投入、热加工路线、精整状态、地理区域、时期、分配约定和必需限定信息与本数据集相容的产品系统 |
| excluded_use | 通用非合金钢或普通合金钢；硅锰钢；钢丝；平板轧材；成品刀具；无代表性依据的不同牌号或交付状态；缺少上游钢坯时用作从摇篮到厂门数据集 |
| required_metadata | 规范 PCR id；产品牌号和规范；直棒或杆材/盘卷形态；尺寸和公差；交付和表面状态；上游钢坯数据集及再循环约定；热加工和精整路线；场址和地理区域；基准期；数据所有者；分配和替代选择；UUID 解决状态 |
| required_quality_disclosure | 记录覆盖和完整性；校准和核对结果；质量平衡差异；分表计量和共用量分配；上游数据代表性；路线条件适用性；内部循环；氧化铁皮去向；废物处理；直接排放方法；未解决 UUID 和范围证据需求 |
| update_trigger | 新产品牌号族或成形路线；钢坯来源、炉用燃料、供电、富氧、水回路、清洗化学品、废物处理或分配约定变化；重大设备变化；代表性时期失效；UUID 或范围证据需求得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类 3.0 版结构》，2025 年 6 月 30 日，代码 41271，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 官方分类身份及与相邻钢铁产品子类的区分 |
| `eu-2022-2110-ferrous-metals-processing` | 官方指南（`official_guidance`） | 欧盟委员会 2022 年 10 月 11 日实施决定 (EU) 2022/2110，确立黑色金属加工行业 BAT 结论，ELI http://data.europa.eu/eli/dec_impl/2022/2110/oj（核验于 2026-09-04） | 热轧边界、棒材和杆材轧制、路线条件表面处理、水量核算、材料效率及校验 |
| `worldsteel-lci-methodology-2017` | 手册（`handbook`） | 世界钢铁协会，《生命周期清单方法学报告》，2017，https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（核验于 2026-09-04） | 钢产品系统边界、棒材和杆材过程链、技术/地理/时间代表性、清单完整性、再循环和共产品处理 |
